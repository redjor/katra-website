import Container from "@/app/components/layout/Container";
import Breadcrumbs from "@/app/components/shared/Breadcrumbs";
import Row from "@/app/components/layout/Row";
import PageHeader from "@/app/components/layout/PageHeader";
import {createClient} from "@/prismicio";
import ProductCard from "@/app/components/product/ProductCard";
import {asText} from "@prismicio/client";
import {Metadata} from "next";

export default async function Shop() {
    const client = createClient();
    const contactPageResponse = await client.getSingle('shop', {lang: 'fr-fr'});
    const {data} = contactPageResponse

    const productsResponse = await client.getAllByType('product', {lang: 'fr-fr'});

    return (
        <Container className="pt-32">
            <Breadcrumbs icon="shop-icon-white"/>
            <PageHeader title={asText(data.title)} description={data.description || ""}/>
            <Row>
                <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">{
                    productsResponse.map(product => (
                        <ProductCard product={product} key={product.id}/>
                    ))
                }
                </div>
            </Row>
        </Container>
    )
}

export async function generateMetadata({
                                           params: {locale},
                                       }: {
    params: { locale: string };
}): Promise<Metadata> {
    const client = createClient();
    const shop = await client.getSingle("shop", {lang: locale});
    return {
        title: shop.data.meta_title,
        description: shop.data.meta_description,
        openGraph: {
            title: shop.data.meta_title || "",
            description: shop.data.meta_description || "",
            type: "website",
            locale: locale,
            images: [
                {
                    url: shop.data.meta_image.url || "",
                    width: shop?.data?.meta_image?.dimensions?.width || 0,
                    height: shop?.data?.meta_image?.dimensions?.height || 0,
                    alt: shop.data.meta_image.alt || "Og Image Alt",
                },
            ],
        }
    };
}