import Container from "@/app/components/layout/Container";
import Breadcrumbs from "@/app/components/shared/Breadcrumbs";
import Row from "@/app/components/layout/Row";
import PageHeader from "@/app/components/layout/PageHeader";
import {createClient} from "@/prismicio";
import ProductCard from "@/app/components/product/ProductCard";

export default async function Shop() {
    const client = createClient();
    const contactPageResponse = await client.getSingle('shop', {lang: 'fr-fr'});
    const {data} = contactPageResponse

    const productsResponse = await client.getAllByType('product', {lang: 'fr-fr'});

    return (
        <Container className="pt-32">
            <Breadcrumbs icon="shop-icon-white"/>
            <PageHeader title={data.title[0].text} description={data.description}/>
            <Row>
                <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">{
                    productsResponse.map(product => (
                        <ProductCard product={product}/>
                    ))
                }
                </div>
            </Row>
        </Container>
    )
}