"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { MenuCategory, Prisma, Restaurant } from "@prisma/client";
import { ClockIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Products from "./products";

interface RestaurantCategoriesProps {
    restaurant: Prisma.RestaurantGetPayload<{
        include: { 
            menuCategories: { include: { products: true } }}}>;
}

type MenuCategoriesWithProducts = Prisma.MenuCategoryGetPayload<{
    include: { products: true }
}>;
const RestaurantCategories = ({restaurant}: RestaurantCategoriesProps ) => {
    const [selectedCategory, setSelectedCategory] = useState<MenuCategoriesWithProducts>(restaurant.menuCategories[0]);
    const handleCategoryClick = (category: MenuCategoriesWithProducts) => setSelectedCategory(category);
    const getCategoryButtonVariant = (category: MenuCategoriesWithProducts) => category.id === selectedCategory.id ? "default" : "secondary";
    return (
        <div className="relative z-50 mt-[-1.5rem] rounded-t-3xl border bg-white ">
            <div className="p-5">
            <div className="flex items-center gap-3 ">
                <Image src={restaurant?.avatarImageUrl} width={45} height={45} alt={restaurant?.name} />
                <div>
                    <h2 className="font-semibold text-lg">{restaurant.name}</h2>
                    <p className="text-xs opacity-55">{restaurant.description}</p>
                </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-green-500 mt-3">
                <ClockIcon size={12} />
                <p>Aberto!</p>
            </div>
            </div>

            <ScrollArea className="w-full">
                <div className="flex w-max space-x-4 px-4 pt-0">
                    {restaurant.menuCategories.map((category) => (
                        <Button key={category.id} onClick={()=> handleCategoryClick(category)} variant={
                            getCategoryButtonVariant(category)
                        } size="sm" className="rounded-full">
                            {category.name}
                        </Button>
                        ))}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>

            <Products products={selectedCategory.products} />
        </div>
      );
}
 
export default RestaurantCategories;