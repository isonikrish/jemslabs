import Product from "./Product";
import { products } from "@/lib/products";

function OurProducts() {
    return (
        <div className="min-h-screen border-t w-full py-20 text-center" id="products">
            <div className="mb-10 px-4">
                <h1 className="text-3xl md:text-4xl font-bold">Our Products</h1>
                <p className="text-base md:text-lg lg:text-xl text-gray-400 mt-4 max-w-2xl mx-auto  px-5">
                    Explore our innovative products designed to help businesses and startups build, scale, and succeed with cutting-edge technology.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
                {products.map((product, index) => (
                    <Product
                        key={index}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                        liveLink={product.liveLink}
                    />
                ))}
            </div>
        </div>
    );
}

export default OurProducts;
