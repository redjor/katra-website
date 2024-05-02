import {createClient} from "@/prismicio";
import Link from "next/link";
import {asText} from "@prismicio/client";

export default async function MainMenuLinks() {
    const client = createClient();
    const menu = await client.getSingle('menu', {lang: 'fr-fr'})

    const {data: {menu_links: links = []}} = menu;

    return (
        <div className="flex flex-col space-y-2 pl-5 md:space-y-4 md:pl-16">
            {links.map(link => (
                <Link href={`/${link.slug}` || '/'}
                      className="pointer-events-auto relative grid w-full cursor-pointer self-start text-5xl font-bold"
                      key={link.slug}>
                    {asText(link.label)}
                </Link>
            ))}
        </div>
    );

}