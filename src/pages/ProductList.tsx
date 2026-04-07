import React from "react";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "@framework/ui";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export const ProductList: React.FC = () => {
  const navigate = useNavigate();
  const { addItem } = useCart();

  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase italic mb-6">
              Our Collection
            </h1>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-sm leading-relaxed">
              Explore our range of botanical-infused skincare, meticulously crafted to bring out your skin's natural radiance.
            </p>
          </div>
          <div className="flex space-x-2">
            {["All", "Serum", "Cream", "Toner", "Cleanser"].map((cat) => (
              <button 
                key={cat}
                className="px-6 py-2 rounded-full border border-gray-100 text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
              description={product.description}
              showDescription={true}
              onView={() => navigate(`/product/${product.id}`)}
              onAction={() => addItem(product, 1)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
