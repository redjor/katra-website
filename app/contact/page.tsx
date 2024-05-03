import {createClient} from '@/prismicio';
import Container from "@/app/components/layout/Container";
import Row from "@/app/components/layout/Row";
import Breadcrumbs from "@/app/components/shared/Breadcrumbs";
import {Metadata} from "next";

export default async function Contact() {
    const client = createClient();
    const contact = await client.getSingle('contact_page', {lang: 'fr-fr'})

    return (
        <Container className="pt-32">
            <Breadcrumbs icon="contact-icon-white"/>
            <Row containerWidth="max-w-7xl">
                <div className="py-24 md:py-48">
                    <h1
                        className="overflow-hidden break-words text-4xl font-extrabold uppercase md:text-7xl"
                    >
                        <span className="block w-full text-left">QUEL EST L'OBJET</span>
                        <span className="block w-full text-left font-light text-white md:text-right"
                        >DU DÉRANGEMENT?</span>
                    </h1>
                </div>
            </Row>
            <Row containerWidth="max-w-7xl">
                <section className="grid grid-cols-12 py-12 md:py-24">
                    <div
                        className="relative col-span-12 col-start-1 md:col-span-4 md:col-start-2"
                    >
                        <div className="relative z-[1]">
                            <h2 className="h2">Un projet</h2>
                            <div className="py-6 md:py-12">
                                <p className="mb-3">Oui, volontiers.</p>
                                <p className="mb-3">
                                    Nous sommes avides de rencontres et d’échanges, et affectionnons
                                    particulièrement les moutons à 5 pattes qui peuplent vos
                                    imaginaires débridés.
                                </p>
                                <p className="mb-3">
                                    Prenez le temps de décrire votre projet, ses contraintes, ses
                                    caractéristiques techniques et sensibles…
                                </p>
                                <p className="mb-3">
                                    Plus vous serez précis, moins nous serons indécis. Avec ou sans
                                    sucre on se retrouvera pour un kawa.
                                </p>
                                <p className="mb-3">À bientôt</p>
                            </div>
                            <div className="flex justify-start">
                                <a
                                    className="group flex items-center gap-6"
                                    href="mailto:jaidutravailpourvous@studio-katra.com"
                                >
                                    <img
                                        src="/assets/img/left-arrow-link-icon.svg"
                                        alt="left-arrow-link-icon"
                                    />
                                    <div className="flex flex-col items-start">
                  <span
                      className="font-white text-base font-semibold leading-none transition-transform duration-200 ease-in-out group-hover:-translate-x-1"
                  >jaidutravailpourvous</span
                  >
                                        <span
                                            className="mt-1 text-sm font-light leading-none text-aluminium transition-transform duration-200 ease-in-out group-hover:translate-x-1"
                                        >@studio-katra.com</span
                                        >
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div
                            className="absolute left-auto right-0 top-0 z-0 -translate-y-1/2 translate-x-1/2 md:left-0 md:right-auto md:-translate-x-1/2"
                        >
                            <img
                                src="/assets/img/stage-icon-aluminium.svg"
                                alt="stage icon"
                                width="64"
                            />
                        </div>
                    </div>
                    <div
                        className="relative col-span-12 col-start-1 mt-24 text-left md:col-span-4 md:col-start-8 md:mt-72 md:text-right"
                    >
                        <div className="relative z-[1]">
                            <h2 className="h2">Un stage</h2>
                            <div className="py-6 md:py-12">
                                <p className="mb-3">
                                    Cher candidat de stage, en nous écrivant à l’adresse ci-dessous,
                                    tu nous prouveras que tu as bien enquêté, avant de poser ta
                                    candidature, et que tu es au courant que nous appeler
                                    directement prouvera que tu n'as pas lu ces lignes.
                                </p>
                                <p>On a hâte de découvrir ton portfolio. Love.</p>
                            </div>
                            <div>
                                <a
                                    className="group flex items-center justify-start gap-6 md:justify-end"
                                    href="mailto:jechercheunstage@studio-katra.com"
                                >
                                    <img
                                        src="/assets/img/left-arrow-link-icon.svg"
                                        alt="left-arrow-link-icon"
                                    />
                                    <div className="flex flex-col items-start">
                  <span
                      className="font-white text-base font-semibold leading-none transition-transform duration-200 ease-in-out group-hover:-translate-x-1"
                  >jechercheunstage</span
                  >
                                        <span
                                            className="mt-1 text-sm font-light leading-none text-aluminium transition-transform duration-200 ease-in-out group-hover:translate-x-1"
                                        >@studio-katra.com</span
                                        >
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div
                            className="absolute right-0 top-0 z-0 -translate-y-1/2 translate-x-1/2"
                        >
                            <img
                                src="/assets/img/projet-icon-aluminium.svg"
                                alt="projet icon"
                                width="64"
                            />
                        </div>
                    </div>
                    <div></div>
                </section>
            </Row>
            <Row fullscreen>
                <div className="relative z-[1] md:absolute md:left-[48px] md:top-[48px]">
                    <div className="relative bg-black pr-12">
                        <div className="p-6">
                            <div className="text-2xl font-bold text-white">Studio Katra</div>
                            <div>2 rue du Sénégal</div>
                            <div>44200 NANTES (France)</div>
                        </div>
                        <div className="absolute inset-y-0 right-2 flex items-end">
                            <img
                                src="/assets/img/projets-icon-white.svg"
                                alt="postal icon"
                                className="h-[70%] object-contain"
                            />
                        </div>
                    </div>
                </div>
                <a
                    href="https://g.page/Studio-Katra?share"
                    className="aspect-ratio-16/9 block overflow-hidden"
                    target="_blank"
                >
                    <img
                        src="/assets/img/katra_map.jpeg"
                        alt="gmap"
                        className="aspect-ratio"
                    />
                </a>
            </Row>
            <Row containerWidth="max-w-7xl text-center"
            ><a
                className="block py-16 text-3xl font-bold text-white hover:underline md:py-24 md:text-6xl lg:text-7xl xl:text-8xl"
                href="tel:+33(0)2.28.29.18.84"
            >
                +33(0)2.28.29.18.84
            </a>
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
    const contactPage = await client.getSingle("contact_page", {lang: locale});
    return {
        title: contactPage.data.meta_title,
        description: contactPage.data.meta_description,
        openGraph: {
            title: contactPage.data.meta_title || "",
            description: contactPage.data.meta_description || "",
            type: "website",
            locale: locale,
            images: [
                {
                    url: contactPage.data.meta_image.url || "",
                    width: contactPage?.data?.meta_image?.dimensions?.width || 0,
                    height: contactPage?.data?.meta_image?.dimensions?.height || 0,
                    alt: contactPage.data.meta_image.alt || "Og Image Alt",
                },
            ],
        }
    };
}