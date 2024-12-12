'use client'

import React, { useState } from "react";
import { CardProduct } from "./card_product";
import { ProductModal } from "./product_modal";
import { Title } from "./title";

interface Props {
    title: string;
    products: any[];
}

export const ProductsGroupList: React.FC<Props> = ({ title, products }) => {
    const [selectedProduct, setSelectedProduct] = useState<any>(null);

    const handleProductClick = (product: any) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    return (
        <section>
            <Title text={title} size="lg" />
            <div className={`grid grid-cols-2 md:grid-cols-3 gap-[20px]`}>
                {products?.length > 0 ? (
                    products.map((product) => (
                        <CardProduct
                            key={product.id}
                            {...product}
                            onProductClick={() => handleProductClick(product)}
                        />
                    ))
                ) : (
                    <span>404</span>
                )}
            </div>
            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={closeModal}
                    about={{
                        text1: "Состав: сахар",
                        text2: "масло",
                        text3: "молоко",
                        text4: "яйца",
                        text5: "ванилин",
                    }}
                />
            )}
        </section>
    );
};
