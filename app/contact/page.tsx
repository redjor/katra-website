import {createClient} from '@/prismicio';

export default async function Contact() {
    const client = createClient();
    const contact = await client.getSingle('contact_page', {lang: 'fr-fr'})

    return (
        <div>{contact.uid}</div>
    )
}