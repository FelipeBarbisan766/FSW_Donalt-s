interface RestaurantMenuPageProps {
    params: Promise<{slug: string}>
}
const RestaurantMenuPage = async ({params}: RestaurantMenuPageProps) => {
    const { slug } = await params;
    return <h1></h1>;
}
 
export default RestaurantMenuPage;



// parei a aula em 45:25 - continuar