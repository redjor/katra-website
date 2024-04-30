import {createClient} from "@/prismicio";
import {Metadata} from "next";
import HomepageIntro from "@/app/components/homepage/Intro";

export default async function Home() {
    const client = createClient();
    const homepage = await client.getSingle('homepage', {lang: 'fr-fr'})

    return (
        <div className="relative block">
            <HomepageIntro bgImg={homepage.data.intro_background}/>
            <div className="appear-fade-opacity py-48">
                <h1
                    className="mx-auto max-w-3xl text-center text-xl font-medium text-aluminium"
                >
                    Chez Katra, le design joint l’utile à l’agréable, l’usage à la
                    raison, questionnant la société à différents étages. Un outil de
                    transformation individuelle et collective à la portée du plus grand
                    nombre.
                </h1>
                <div
                    className="mt-12 flex w-full flex-wrap items-center justify-center gap-3"
                >
                    <span>Produit</span>
                    <span className="text-sm font-light text-gold">•</span>
                    <span>Marque</span>
                    <span className="text-sm font-light text-gold">•</span>
                    <span>Scénographie </span>
                    <span className="text-sm font-light text-gold">•</span>
                    <span> Graphisme</span>
                    <span className="text-sm font-light text-gold">•</span>
                    <span className="whitespace-nowrap">Street Art</span>
                    <span className="text-sm font-light text-gold">•</span>
                    <span>Espace</span>
                    <span className="text-sm font-light text-gold">•</span>
                    <span>Urbain</span>
                </div>
            </div>
        </div>
    );
}

export async function generateMetadata({
                                           params: {locale},
                                       }: {
    params: { locale: string };
}): Promise<Metadata> {
    const client = createClient();
    const home = await client.getSingle("homepage", {lang: locale});
    return {
        title: home.data.meta_title,
        description: home.data.meta_description,
        openGraph: {
            title: home.data.meta_title || "",
            description: home.data.meta_description || "",
            type: "website",
            locale: locale,
            images: [
                {
                    url: home.data.meta_image.url || "",
                    width: home?.data?.meta_image?.dimensions?.width || 0,
                    height: home?.data?.meta_image?.dimensions?.height || 0,
                    alt: home.data.meta_image.alt || "Og Image Alt",
                },
            ],
        }
    };
}

