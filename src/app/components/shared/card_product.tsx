import React from "react";
import { Title } from "./title";

interface CardProductProps {
    id: number;
    name: string;
    imageURL: string;
    price: number;
    gramm: string
    onProductClick: () => void;
}

export const CardProduct: React.FC<CardProductProps> = ({
    id,
    name,
    imageURL,
    price,
    gramm,
    onProductClick,
}) => {
    return (
        <div className="bg-white p-4" onClick={onProductClick}>
            <img src={imageURL} alt={name} className="card-image" />
            <p className={`mt-2`}>{price}₽</p>
            <Title className={`mt-2`} text={name} size="xs" />
            <p className={`mt-4 mb-2 text-gray-400`}>{gramm}₽</p>

            <button
                className="w-full max-w-[276px] bg-[#F2F2F3] text-[#000] py-3 px-8 rounded-xl"
                onClick={(e) => {
                    e.stopPropagation();
                    onProductClick();
                }}
            >
                Добавить
            </button>
        </div>
    );
};
