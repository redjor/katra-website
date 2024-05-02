import ProductCardContainer from "@/app/components/product/ProductCardContainer";
import {ProductDocumentData} from "@/prismicio-types";
import Image from "next/image";

export default function ProductCardEtsy({product}: { product: ProductDocumentData }) {
    const ProductEtsyData = () => {
        const etsyProductTitle = () => {
            // @ts-ignore
            return product?.etsy_url?.title.replace('| Etsy France', '')
        }

        return (
            <>
                <div
                    className="relative inline-flex text-xl font-semibold uppercase leading-none text-white"
                >
                    {etsyProductTitle()}
                </div>
                {product.price && <div>{product.price} €</div>}
                <div className="mt-2 flex items-center gap-1 py-2">
                    <span className="text-xs font-light">En vente sur</span>
                    <img
                        src="/assets/img/etsy_logo.svg"
                        className="h-4"
                        width="32"
                        height="16"
                        alt="Logo Etsy"
                    />
                </div>
            </>
        )
    }

    const ProductImage = () => {
        return (
            <Image src={product.etsy_url?.thumbnail_url || '/'} alt={product.etsy_url?.title || ''}
                   className="product-card-cover_img" fill={true}/>)
    }

    return (
        <a href={`${product.etsy_url?.url || ''}`} className="product-card" target="_blank">
            <ProductCardContainer productData={<ProductEtsyData/>} productImage={<ProductImage/>}/>
        </a>
    )
}