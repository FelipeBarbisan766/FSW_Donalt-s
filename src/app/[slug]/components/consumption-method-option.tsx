import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { consumptionMethod } from "@prisma/client";

interface ConsumptionMethodOptionProps {
    slug: string;
    imageUrl: string;
    imageAlt: string;
    buttonText: string;
    option: consumptionMethod;    
}
export const ConsumptionMethodOption = ({imageUrl, imageAlt, buttonText, option, slug}: ConsumptionMethodOptionProps) => {
    return <Card>
        <CardContent className="flex flex-col items-center gap-8 py-8">
            <Image 
                src={imageUrl}
                width={78}
                height={80} alt={imageAlt}/>
            <Button variant="secondary" className="rounded-full" asChild>
                <Link href={`/${slug}/menu?comsumptionMethod=${option}`}>
                {buttonText}
                </Link>
            </Button>
        </CardContent>
    </Card>;
}