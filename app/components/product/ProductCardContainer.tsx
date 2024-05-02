import {ReactNode} from "react";

interface ProductContainerProps {
    productData: ReactNode,
    productImage: ReactNode
}

export default function ProductCardContainer({productData, productImage}: ProductContainerProps) {
    return (
        <div className="grid w-full grid-cols-6 gap-x-4">
            <div
                className="col-span-3 col-start-1 self-end border-b border-dark-aluminium pb-4 lg:col-span-2"
            >
                {productData}
            </div>
            <div
                className="product-card-cover-container col-span-3 col-start-4 lg:col-span-4 lg:col-start-3"
            >
                {productImage}
            </div>
        </div>
    )
}