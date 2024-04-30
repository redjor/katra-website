import {createClient} from "@/prismicio";
import {Metadata} from "next";

export default async function Home() {
    const client = createClient();
    const homepage = await client.getSingle('homepage', {lang: 'fr-fr'})
    
    return (
        <div className="block relative">
            <div className="appear-fade-opacity py-48">
                <h1
                    className="font-medium text-xl text-aluminium text-center max-w-3xl mx-auto"
                >
                    Chez Katra, le design joint l’utile à l’agréable, l’usage à la
                    raison, questionnant la société à différents étages. Un outil de
                    transformation individuelle et collective à la portée du plus grand
                    nombre.
                </h1>
                <div
                    className="flex gap-3 w-full mt-12 items-center justify-center flex-wrap"
                >
                    <span>Produit</span>
                    <span className="font-light text-gold text-sm">•</span>
                    <span>Marque</span>
                    <span className="font-light text-gold text-sm">•</span>
                    <span>Scénographie </span>
                    <span className="font-light text-gold text-sm">•</span>
                    <span> Graphisme</span>
                    <span className="font-light text-gold text-sm">•</span>
                    <span className="whitespace-nowrap">Street Art</span>
                    <span className="font-light text-gold text-sm">•</span>
                    <span>Espace</span>
                    <span className="font-light text-gold text-sm">•</span>
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

