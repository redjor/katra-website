import {ProductDocument} from "@/prismicio-types";
import ProductCardEtsy from "@/app/components/product/ProductCardEtsy";
import ProductCardWithDrawal from "@/app/components/product/ProductCardWithDrawal";

export default function ProductCard({product}: { product: ProductDocument }) {
    const {data: productData} = product;
    console.log(productData)
    const {etsy_url} = productData;
    // @ts-ignore
    const isEtsyProduct = etsy_url !== undefined && etsy_url !== null && etsy_url !== '';
    console.log(isEtsyProduct)
    return (
        <div>
            {isEtsyProduct ? <ProductCardEtsy product={productData}/> : <ProductCardWithDrawal product={productData}/>}
        </div>
    );
}