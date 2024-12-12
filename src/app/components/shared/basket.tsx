"use client";

import React, { useEffect, useState } from "react";
import { Title } from "./title";

export const Basket = () => {
    const [basket, setBasket] = useState([]);

    const saveBasketToLocalStorage = (updatedBasket) => {
        localStorage.setItem("basket", JSON.stringify(updatedBasket));
    };

    useEffect(() => {
        const products = JSON.parse(localStorage.getItem("basket") || "[]");
        setBasket(products);
    }, []);

    const updateCount = (productId, action) => {
        const updatedBasket = basket.map((product) => {
            if (product.id === productId) {
                const newCount = action === "increment" ? product.count + 1 : product.count - 1;

                if (newCount <= 0) {
                    return null;
                }

                return { ...product, count: newCount };
            }
            return product;
        }).filter(Boolean);

        setBasket(updatedBasket);
        saveBasketToLocalStorage(updatedBasket);
    };

    const totalPrice = basket.reduce((total, product) => {
        return total + product.price * product.count;
    }, 0);

    return (
        <section className={`flex flex-col bg-white py-6 px-4`}>
            <div className={`flex justify-between mb-2`}>
                <Title text="Корзина" size="sm" />
                <p className={`w-[40px] h-[30px] bg-[#F2F2F3] px-4 py-1 rounded-lg`}>{basket.length}</p>
            </div>

            {basket.length > 0 ? (
                basket.map((product) => (
                    <div key={product.id} className="flex justify-between items-center gap-1 py-2 border-t-2 border-b-2 rounded-lg">
                        <div className={`flex justify-start items-center gap-2`}>
                            <img
                                src={product.imageURL}
                                alt={product.name}
                                className="w-[64px] h-[64px] object-cover rounded-lg"
                            />
                            <div>
                                <Title text={product.name} size="xs" />
                                <p className={`text-[16px]`}>{product.price}₽</p>
                                <p className={`text-[16px]`}>{product.gramm} г</p>
                            </div>
                        </div>
                        <div className={`flex justify-center items-center gap-3 w-[80px] h-[40px] rounded-lg bg-[#F2F2F3]`}>
                            <button onClick={() => updateCount(product.id, "decrement")} className="btn-minus">-</button>
                            <p className={`text-[16px]`}>{product.count}</p>
                            <button onClick={() => updateCount(product.id, "increment")} className="btn-plus">+</button>
                        </div>
                    </div>
                ))
            ) : (
                <p>Your basket is empty</p>
            )}

            <div className={`flex justify-between items-center mb-2`}>
                <Title text="Итого" size="sm" />
                <p className={`text-[20px]`}>{totalPrice}₽</p>
            </div>
            <button className="bg-[#FF7020] text-[#ffff] py-3 px-8 rounded-xl">Оформить заказ</button>
        </section>
    );
};
