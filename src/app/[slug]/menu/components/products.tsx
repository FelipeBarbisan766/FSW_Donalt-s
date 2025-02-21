import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import style from "styled-jsx/style";

interface ProductsProps {
    products: Product[];       
}
const products = ({products}:ProductsProps) => {
    return (  
        <div className="space-y-3 px-1.5">
            {products.map((product) => (
            <Link key={product.id} href="#" className="flex items-center justify-between gap-10 py-3 border-b">
                <div>
                    <h3 className="text-sm font-medium">{product.name}</h3> 
                    <p className="line-clamp-2 text-sm text-muted-forenground">
                        {product.description}
                    </p>
                    <p className="pt-3 text-sm font-semibold">{Intl.NumberFormat("pt-BR",{
                        style : "currency",
                        currency : "BRL",}).format(product.price)}</p>
                </div>
                <div>
                    <div className="relative min-h-[82px] min-w-[120px]">
                        <Image 
                            src={product.imageUrl}
                            fill
                            className="rounded-lg object-contain"
                            alt={product.name}/>
                    </div>
                </div>
            </Link>
            ))}
        </div>
    );
}
 
export default products;