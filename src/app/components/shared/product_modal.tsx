"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { Title } from "./title";

interface ProductModalProps {
    product: any;
    onClose: () => void;
    about: any;
}

export const ProductModal: React.FC<ProductModalProps> = ({
    product,
    onClose,
    about
}) => {
    const [count, setCount] = useState(1);

    const handleAddToBasket = () => {
        const basket = JSON.parse(localStorage.getItem("basket") || "[]");

        const existingProduct = basket.find((item: any) => item.id === product.id);

        if (existingProduct) {
            existingProduct.count += count;
            existingProduct.price += count * product.price;
        } else {
            basket.push({
                ...product,
                count,
                price: count * product.price
            });
        }

        localStorage.setItem("basket", JSON.stringify(basket));

        onClose();
        alert("Product added to basket");
    };
    return (
        <div
            className="fixed inset-0 bg-black/70 z-10 flex items-center justify-center"
            onClick={onClose}
        >
            <div
                className="flex flex-col w-full max-w-[685px] p-[24px] bg-white rounded-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center">
                    <Title text={product.name} size="lg" />
                    <X onClick={onClose} />
                </div>

                <div className="flex justify-start gap-4">
                    <div>
                        <img
                            src={product.imageURL}
                            alt={product.name}
                            className="w-[276px] max-w-[276px] h-[276px] object-cover rounded-xl mb-4"
                        />
                        <button
                            className="w-full mt-4 bg-[#FF7020] text-white py-3 rounded-xl"
                            onClick={handleAddToBasket}
                        >
                            Добавить
                        </button>
                    </div>

                    <div>
                        <Title text={product.desc} size="xs" />
                        <Title text="Состав:" size="xs" />
                        {Object.values(about).map((text, idx) => (
                            <Title key={idx} text={text} size="xs" />
                        ))}
                        <div className={`flex justify-between items-center`}>
                            <div className="flex justify-center items-center gap-2 w-[80px] h-[40px] mt-10 rounded-lg bg-[#F2F2F3]">
                                <button onClick={() => setCount(Math.max(1, count - 1))} className="btn-minus">-</button>
                                <span className="mx-2">{count}</span>
                                <button onClick={() => setCount(count + 1)} className="btn-plus">+</button>
                            </div>
                            <Title text={`${product.price}₽`} size="md" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
