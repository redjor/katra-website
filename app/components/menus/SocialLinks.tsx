import {createClient} from "@/prismicio";
import {PrismicLink, PrismicRichText} from "@prismicio/react";

export default async function SocialLinks() {
    const client = createClient();
    const socialMenu = await client.getSingle('social_menu', {lang: 'fr-fr'})
    const {data: {menu_items: socialLinks = []}} = socialMenu;
    return (
        <div
            className="flex w-full flex-row items-start space-x-4 space-y-0 overflow-x-auto px-5 md:flex-col md:items-end md:space-x-0 md:space-y-2 md:overflow-x-hidden md:pl-0 md:pr-16">
            {socialLinks.map((link, index) => (
                <PrismicLink field={link.link} externalComponent={(props) => <a
                    className='cursor-pointer text-base font-medium text-aluminium hover:text-white md:text-lg' {...props} />}
                             key={index}>
                    <PrismicRichText field={link.label}/>
                </PrismicLink>
            ))}
        </div>
    )
}