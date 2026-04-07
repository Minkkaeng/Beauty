import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, ShieldCheck, CreditCard, Landmark, Truck } from "lucide-react";
import { Button, Input } from "@framework/ui";
import { useCart } from "../context/CartContext";

export const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems, totalAmount, clearCart } = useCart();

  const handleOrder = () => {
    // Process order dummy
    alert("Order placed successfully! Thank you for choosing L'Essence Naturelle.");
    clearCart();
    navigate("/");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen py-32 flex flex-col items-center justify-center space-y-8 px-8">
        <div className="p-12 bg-gray-50 rounded-full text-indigo-100 italic">
          <Truck size={120} strokeWidth={0.5} />
        </div>
        <h2 className="text-3xl font-black italic text-gray-900 tracking-tighter uppercase italic">
          Your bag is empty
        </h2>
        <Button onClick={() => navigate("/products")} size="lg">Explore Our Collection</Button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-24 pb-32">
      <div className="max-w-7xl mx-auto px-8 pt-12">
        <h1 className="text-5xl font-black text-gray-900 tracking-tighter uppercase italic mb-20 text-center">
          Checkout Process
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Form Section */}
          <div className="lg:col-span-7 space-y-12">
            <div className="bg-white p-12 rounded-[3.5rem] shadow-xl space-y-12 border border-blue-50/50">
              <div className="space-y-8">
                <h3 className="text-lg font-black uppercase tracking-widest text-indigo-600 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs mr-4">1</span>
                  Shipping Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input label="First Name" placeholder="Jane" />
                  <Input label="Last Name" placeholder="Doe" />
                  <div className="md:col-span-2">
                    <Input label="Address" placeholder="123 Botanical Lane" />
                  </div>
                  <Input label="City" placeholder="Paris" />
                  <Input label="Postal Code" placeholder="75001" />
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-lg font-black uppercase tracking-widest text-indigo-600 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs mr-4">2</span>
                  Payment Method
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    { icon: <CreditCard size={20} />, label: "Card" },
                    { icon: <Landmark size={20} />, label: "Bank" },
                    { icon: <Truck size={20} />, label: "COD" }
                  ].map((pm, i) => (
                    <button 
                      key={i}
                      className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl border-2 border-transparent hover:border-indigo-600 hover:bg-indigo-50/5 transition-all group"
                    >
                      <div className="mb-3 text-gray-400 group-hover:text-indigo-600 transition-colors">
                        {pm.icon}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-indigo-600">
                        {pm.label}
                      </span>
                    </button>
                  ))}
                </div>
                <Input label="Cardholder Name" placeholder="Jane Doe" />
                <Input label="Card Number" placeholder="•••• •••• •••• ••••" />
              </div>
            </div>

            <div className="flex items-center justify-center space-x-8 text-gray-300">
              <div className="flex items-center space-x-2">
                <ShieldCheck size={16} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 size={16} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">EWG Verified</span>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="lg:col-span-5">
            <div className="bg-gray-900 p-12 rounded-[3.5rem] shadow-2xl text-white sticky top-32">
              <h3 className="text-xl font-black uppercase tracking-widest mb-10 text-indigo-400">Order Summary</h3>
              
              <div className="space-y-6 mb-10 max-h-[300px] overflow-y-auto pr-4 scrollbar-hide">
                {cartItems.map((item, i) => (
                  <div key={i} className="flex justify-between items-center group">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-white/10 rounded-2xl overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-sm truncate uppercase tracking-tighter leading-tight">{item.name}</p>
                        <p className="text-indigo-400 text-xs font-black">× {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-black text-sm">₩{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-10 space-y-4">
                <div className="flex justify-between text-sm text-gray-500 font-bold uppercase tracking-widest">
                  <span>Shipping Cost</span>
                  <span>₩0</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 pb-1">Grand Total</span>
                  <span className="text-4xl font-black text-white italic">₩{totalAmount.toLocaleString()}</span>
                </div>
              </div>

              <Button 
                variant="primary" 
                className="w-full py-6 mt-12 bg-white text-gray-900 rounded-[2rem] text-xl font-black uppercase tracking-[0.2em] hover:bg-indigo-400 hover:text-white shadow-xl shadow-black/20"
                onClick={handleOrder}
              >
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
