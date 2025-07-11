import Product from "./Product";
import { products } from "@/lib/products";

function OurProducts() {
    return (
        <section
            id="products"
            className="relative min-h-screen w-full px-6 md:px-12 py-24 bg-background border-t border-white/10 text-center overflow-hidden">
            <div className="absolute left-[-80px] top-[25%] w-60 h-60 bg-blue-500 opacity-10 rounded-full blur-2xl z-0" />
            <div className="absolute right-[-80px] bottom-[15%] w-60 h-60 bg-green-400 opacity-10 rounded-full blur-2xl z-0" />

            <div className="relative z-10 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Our Products
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
                    Discover our innovative ideas brought to life - each product is a real-world solution born from bold concepts.
                </p>

            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
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
        </section>
    );
}

export default OurProducts;
