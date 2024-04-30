import {createClient} from "@/prismicio";
import Image from "next/image";

export default async function MenuBackground() {

    function getRandomIntInclusive(min: number, max: number) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const client = createClient();
    const site = await client.getSingle('site', {lang: 'fr-fr'})

    const {data: {menu_images: menuImages = []}} = site;

    const imageIndex = getRandomIntInclusive(0, menuImages.length - 1);
    const {image: backgroundImage} = menuImages[imageIndex];

    return (
        <div
            className="absolute inset-0 z-0 size-full opacity-30"
        >
            <Image
                src={backgroundImage.url || ''}
                fill={true} alt="Menu Image"/>
        </div>
    )
}