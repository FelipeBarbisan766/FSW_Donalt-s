"use client";

import { Button } from "@/components/ui/button";
import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from 'next/image';
import { useRouter } from "next/navigation";

interface RestaurantHeaderProps {
    restaurant: Pick<Restaurant, "coverImageUrl">
}

const RestaurantHeader = ({restaurant}: RestaurantHeaderProps) => {
    const router = useRouter();
    const handleBackClick = () => router.back();
    return <div className="relative h-[250px] w-full">
    <Button variant={"secondary"} className="absolute top-4 left-4 z-50 rounded-full" onClick={handleBackClick}><ChevronLeftIcon />
    </Button>
    <Button variant={"secondary"} className="absolute top-4 right-4 z-50 rounded-full"><ScrollTextIcon />
    </Button>
    <Image 
        src={restaurant?.coverImageUrl || "/default-image.jpg"}
        fill
        className="object-cover"
        alt={""}/>
</div>;
}
 
export default RestaurantHeader;