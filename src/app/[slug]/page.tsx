import { getRestaurantBySlug } from "@/data/get_restaurant_by_slug";
import Image from 'next/image';
import { notFound } from "next/navigation";

import { ConsumptionMethodOption }  from "./components/consumption-method-option";

interface RestaurantPageProps {
    params: Promise<{slug: string}>
}


const RestaurantPage = async ({params}: RestaurantPageProps) => {
    const { slug } = await params;
    const restaurant = await getRestaurantBySlug(slug);
    if(!restaurant) {
     return notFound();
    }
    return <div className="h-screen flex-col items-center justify-center px-6 pt-24">
        <div className="flex flex-col items-center gap-2">
            <Image 
                src={restaurant?.avatarImageUrl}
                width={82}
                height={82} alt={""}/>
            <h2 className="font-semibold">
                {restaurant?.name}
            </h2>
        </div>
        <div className="space-y2 pt-24 text-center">
            <h3 className="text-2xl font-semibold">
                Seja Bem vindo !
            </h3>
            <p className="opacity-55">
                Escolha como prefere aproveitar sua refeição. Estamos oferecendo praticidade e sabor em cada detalhe !
            </p>
        </div>
        <div className="pt-14 grid grid-cols-2 gap-4">
            <ConsumptionMethodOption
                slug={slug}
                option="DINE_IN"
                imageUrl="/dine_in.svg"
                imageAlt="Para Comer Aqui"
                buttonText="Para Comer Aqui"/>
            <ConsumptionMethodOption 
                slug={slug}
                option="TAKEAWAY"
                imageUrl="/takeaway.svg"
                imageAlt="Para Levar"
                buttonText="Para Levar"/>
        </div>
    </div>;
}
 
export default RestaurantPage;