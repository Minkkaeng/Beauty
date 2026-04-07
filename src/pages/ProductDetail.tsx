import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Plus, Minus, ShoppingBag, ArrowLeft, Heart, Share2 } from "lucide-react";
import { Button } from "@framework/ui";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
        <h2 className="text-2xl font-black italic">Product not found</h2>
        <Button onClick={() => navigate("/products")}>Go back to collection</Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity);
    // You could show a toast or open the cart sidebar here
  };

  return (
    <div className="bg-white min-h-screen py-24 px-8 pt-32">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-xs font-black uppercase tracking-[0.2em] text-gray-400 hover:text-indigo-600 transition-colors mb-12"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to collection
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Image Section */}
          <div className="relative aspect-square bg-gray-50 rounded-[4rem] overflow-hidden shadow-2xl group">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute top-8 right-8 space-y-4 pt-12">
              <button className="p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl hover:bg-red-50 hover:text-red-500 transition-all active:scale-95">
                <Heart size={24} />
              </button>
              <button className="p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl hover:bg-indigo-50 hover:text-indigo-600 transition-all active:scale-95">
                <Share2 size={24} />
              </button>
            </div>
          </div>

          {/* Info Section */}
          <div className="flex flex-col pt-10">
            <div className="space-y-4 mb-10">
              <span className="px-5 py-2 bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-[0.3em] rounded-full border border-indigo-100">
                {product.category}
              </span>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase italic leading-[1.1]">
                {product.name}
              </h1>
              <p className="text-3xl font-black text-indigo-600 leading-tight">
                ₩{product.price.toLocaleString()}
              </p>
            </div>

            <p className="text-gray-400 font-bold leading-relaxed mb-10 uppercase tracking-widest text-sm border-l-4 border-indigo-50 pl-6">
              {product.description}
            </p>

            <div className="space-y-12 mb-12">
              {product.details && (
                <div className="space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-300">Detailed Benefits</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.details.map((detail, i) => (
                      <div key={i} className="flex items-center space-x-3 text-sm font-bold text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {product.usage && (
                <div className="space-y-4 p-8 bg-gray-50 rounded-3xl border border-gray-100">
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">How to use</h3>
                  <p className="text-sm font-bold text-gray-600 leading-loose italic">
                    {product.usage}
                  </p>
                </div>
              )}
            </div>

            {/* Action Section */}
            <div className="mt-auto space-y-6">
              <div className="flex items-center space-x-6">
                <div className="flex items-center bg-gray-50 rounded-full px-6 py-3 border border-gray-100">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:text-indigo-600 active:scale-90 transition-all"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="w-12 text-center font-black text-xl tabular-nums">
                    {quantity}
                  </span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:text-indigo-600 active:scale-90 transition-all transition-all"
                  >
                    <Plus size={20} />
                  </button>
                </div>
                <div className="text-xs font-black uppercase tracking-widest text-gray-300">
                  Subtotal: <span className="text-indigo-600">₩{(product.price * quantity).toLocaleString()}</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button 
                  className="flex-1 py-6 text-xl font-black uppercase tracking-[0.2em] rounded-3xl shadow-2xl shadow-indigo-100"
                  size="lg"
                  rightIcon={<ShoppingBag size={24} />}
                  onClick={handleAddToCart}
                >
                  Add to bag
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
