'use client'

import {usePathname} from 'next/navigation';
import Link from "next/link";

export default function Breadcrumbs({icon, url}: { icon: string, url: string }) {
    const pathname = usePathname();
    const crumbs = () => {
        const params = pathname.split('/').filter(segment => segment !== '');
        const result = [];

        return params;
    }
    const imgUrl = icon ? `/assets/img/${icon}.svg` : '';

    return (
        <div className="flex w-full justify-between gap-2 py-4 mix-blend-difference md:justify-evenly md:py-12">
            <div className="flex flex-wrap items-end gap-1 font-light leading-none md:gap-2">
                {crumbs().map((t, index) => (
                    <Link key={index} href={`/${t}`}
                          className={`${index !== crumbs().length - 1 ? 'font-light text-aluminium hover:text-white' : ''}`}>
                        {index !== 0 && <span className="mr-1 text-white md:mr-2">/</span>}
                        <span className="text-white hover:underline">{t}</span>
                    </Link>
                ))}
            </div>
            <div className="grow border-b border-aluminium opacity-25"></div>
            {icon && (
                <div className="flex size-8 items-end gap-1 leading-none">
                    <img
                        src={imgUrl}
                        alt="icon studio"
                        className="h-auto w-full"
                        height="32"
                        style={{maxHeight: '32px'}}
                        width="32"
                    />
                </div>
            )}
        </div>
    );

}