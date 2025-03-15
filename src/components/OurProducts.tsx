import Product from "./Product";
import { products } from "@/lib/products";

function OurProducts() {
    return (
        <div className="border-t-4 min-h-screen w-full py-16 text-center" id="products">
            <div>
                <div className="flex justify-center gap-2 items-center">
                    <h1 className="text-4xl md:text-5xl font-bold">Our Products</h1>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-4 max-w-2xl mx-auto px-5">
                    Explore our innovative products designed to help businesses and
                    startups build, scale, and succeed with cutting-edge technology.
                </p>
            </div>

            <div className="py-10 grid grid-cols-1 place-items-center">
                {products?.map((product, index: number) => (
                    <Product
                        image={product.image}
                        liveLink={product.liveLink}
                        description={product.description}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
}

export default OurProducts;
