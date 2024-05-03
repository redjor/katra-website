import Breadcrumbs from "@/app/components/shared/Breadcrumbs";
import Container from "@/app/components/layout/Container";
import Row from "@/app/components/layout/Row";
import {createClient} from "@/prismicio";
import FeedMasonry from "@/app/components/feed/FeedMasonry";
import {Metadata} from "next";


export default async function Jpeg() {
    const client = createClient();
    const feedPageResponse = await client.getSingle('feed', {lang: 'fr-fr'});
    const {data} = feedPageResponse

    return (
        <Container className="pt-32">
            <Breadcrumbs icon="jpeg-icon-white"/>
            <div className="h-0">
                <h1 className="invisible">Découvrez l'univers graphique Katra</h1>
            </div>
            <Row>
                <FeedMasonry cards={data.cards}/>
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
    const feedPage = await client.getSingle("feed", {lang: locale});
    return {
        title: feedPage.data.meta_title,
        description: feedPage.data.meta_description,
        openGraph: {
            title: feedPage.data.meta_title || "",
            description: feedPage.data.meta_description || "",
            type: "website",
            locale: locale,
            images: [
                {
                    url: feedPage.data.meta_image.url || "",
                    width: feedPage?.data?.meta_image?.dimensions?.width || 0,
                    height: feedPage?.data?.meta_image?.dimensions?.height || 0,
                    alt: feedPage.data.meta_image.alt || "Og Image Alt",
                },
            ],
        }
    };
}