'use client'

import React, { useState } from "react";
import { cn } from "@/app/lib/utilits";

interface Category {
    id: number;
    name: string;
    path: string;
    icon: string;
}

const lists: Category[] = [
    { id: 1, name: "Бургеры", icon: "free-icon-cheeseburger-2362255.svg", path: "/burgers" },
    { id: 2, name: "Закуски", icon: "free-icon-onion-2362361.svg", path: "/snacks" },
    { id: 3, name: "Хот-доги", icon: "Хот-доги.svg", path: "/hot-dogs" },
    { id: 4, name: "Комбо", icon: "Комбо.svg", path: "/combo" },
    { id: 5, name: "Шаурма", icon: "Шаурма.svg", path: "/shawarma" },
    { id: 6, name: "Пицца", icon: "Пицца.svg", path: "/pizza" },
    { id: 7, name: "Вок", icon: "Вок.svg", path: "/wok" },
    { id: 8, name: "Десерты", icon: "Десерты.svg", path: "/desserts" },
    { id: 9, name: "Соусы", icon: "Соусы.svg", path: "/sauces" },
];

interface CategoriesProps {
    onCategorySelect: (categoryId: number) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onCategorySelect }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index: number) => {
        setActiveIndex(index);
        onCategorySelect(lists[index].id);
    };

    return (
        <section className="w-full flex overflow-x-auto justify-between gap-[24px] p-1 rounded-2xl no-scrollbar">
            {lists.map((category, index) => (
                <a
                    key={category.id}
                    onClick={() => handleClick(index)}
                >
                    <div className={cn(
                        "w-[120px] text-center flex justify-center items-center bg-white gap-[8px] font-bold h-12 rounded-2xl cursor-pointer",
                        activeIndex === index &&
                        "bg-[#FFAB08] shadow-md shadow-gray-200 text-primary"
                    )} >

                        <img src={category.icon} alt={category.name} className={`w-[24px] h-[24px]`} />
                        {category.name}
                    </div>
                </a>
            ))}
        </section>
    );
};
