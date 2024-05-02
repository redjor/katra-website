import ProductCardContainer from "@/app/components/product/ProductCardContainer";

export default function ProductCardWithDrawal({product}: { product: any }) {

    const ProductDrawalData = () => {
        return (
            <>
                <div
                    className="relative inline-flex text-xl font-semibold uppercase leading-none text-white"
                >
                    {product.title[0].text}
                </div>
                {product.price && (
                    <div className="text-sm text-aluminium">
                        {product.price} €
                    </div>
                )}
                <div className="mt-2 flex flex-col py-2">
                    <span className="text-xs font-light">Contactez-nous</span>
                    <span className="text-sm font-semibold text-gold"
                    >boutique@studio-katra.com</span
                    >
                </div>
            </>
        )
    }

    const ProductImage = () => {
        return (
            <img src={product.image.url} alt={product.title[0].text} className="product-card-cover_img"/>)
    }

    return (
        <a href={product.etsy_url.url} className="product-card" target="_blank">
            <ProductCardContainer productData={<ProductDrawalData/>} productImage={<ProductImage/>}/>
        </a>
    )
}