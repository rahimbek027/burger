'use client';

import React, { useEffect, useState } from "react";
import { Basket, Container } from "./components/shared";
import { Product } from "@/app/types/Product";
import { ProductsGroupList } from "./components/shared/product-group-list";
import { Categories } from "./components/shared/categories";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(1);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((err) => console.error("Failed to fetch JSON data", err));
  }, []);

  const handleCategorySelect = (categoryId: number) => {
    setSelectedCategory(categoryId);
  };

  const filteredProducts = selectedCategory === 1
    ? products?.filter(product => product.categoryId === 1)
    : [];

  return (
    <Container className="mt-10">
      <Categories onCategorySelect={handleCategorySelect} />
      <main
        className="flex flex-col md:flex-row md:justify-between gap-[30px]"
        style={{
          marginTop: "clamp(1.875rem, 1.518rem + 1.79vw, 3.125rem)",
          marginBottom: "clamp(1.875rem, 1.518rem + 1.79vw, 3.125rem)",
        }}
      >
        <aside className="w-full md:max-w-[300px] mt-[50px]">
          <Basket />
        </aside>
        <section className="flex-1">
          {selectedCategory && selectedCategory !== 1 ? (
            <div className="text-center text-2xl font-bold text-red-500">
              404
            </div>
          ) : (
            <ProductsGroupList title="Products" products={filteredProducts} />
          )}
        </section>
      </main>
    </Container>
  );
}
