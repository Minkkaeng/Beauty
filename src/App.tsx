import React, { useState } from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import { 
  Navigation, 
  Hero, 
  ProductCard, 
  Features, 
  Footer,
  Button,
  CartSidebar
} from '@framework/ui';
import { Leaf, Droplets, ShieldCheck, UserCircle, ShoppingBag } from 'lucide-react';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import { CartProvider, useCart } from './context/CartContext';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const featuredProducts = [
    { 
      id: "serum-01",
      name: "Radiance Serum", 
      category: "Serum",
      price: 48000,
      image: "/assets/serum.png",
      description: "Brightening vitamin complex with sea buckthorn oil."
    },
    { 
      id: "cream-01",
      name: "Deep Hydration Cream", 
      category: "Cream",
      price: 55000,
      image: "/assets/hero.png",
      description: "Intensive moisture barrier support with alpine botanicals."
    },
    { 
      id: "toner-01",
      name: "Gentle Balancing Toner", 
      category: "Toner",
      price: 32000,
      image: "/assets/ingredients.png",
      description: "PH-balancing mist with Bulgarian rose water."
    }
  ];

  const features = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "100% 비건",
      description: "동물 실험을 배제하고 자연에서 얻은 순수 식물성 원료만을 사용합니다."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "EWG 그린 등급",
      description: "엄격한 기준을 통과한 안전한 성분만을 선별하여 피부 자극을 최소화합니다."
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "저온 추출 공법",
      description: "열에 의한 영양소 파괴를 막기 위해 오랜 시간 정성을 들인 추출 방식을 고집합니다."
    }
  ];

  return (
    <>
      <Hero 
        title="Nature's Fine Craftsmanship"
        subtitle="Purity in Every Drop"
        description="자연이 선사하는 가장 순수한 원료와 현대 과학의 만남. 당신의 피부 본연의 건강한 빛을 찾아드립니다."
        backgroundImage="/assets/hero.png"
        primaryAction={{ label: "Discover Collection", onClick: () => navigate("/products") }}
        isFullHeight={true}
      />

      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-natural-green tracking-tighter uppercase italic mb-6">Our Essentials</h2>
            <p className="mt-4 text-gray-400 font-bold max-w-2xl mx-auto uppercase tracking-widest text-sm">Carefully formulated to synchronize with your skin's natural rhythm.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredProducts.map((p, i) => (
              <ProductCard 
                key={i}
                name={p.name}
                category={p.category}
                price={p.price}
                image={p.image}
                description={p.description}
                showDescription={true}
                onView={() => navigate(`/product/${p.id}`)}
                onAction={() => addItem(p as any, 1)}
              />
            ))}
          </div>
        </div>
      </section>

      <Features 
        title="Rooted in Earth, Proven by Science"
        subtitle="Our Philosophy"
        items={features}
        columns={3}
      />
    </>
  );
};

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems, removeItem, cartCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const navLinks = [
    { label: "Collection", href: "/products" },
    { label: "Philosophy", href: "/#about" },
    { label: "Ingredients", href: "/#ingredients" },
  ];

  // Map cart items from context to the format expected by the UI library
  const sidebarItems = cartItems.map(item => ({
    id: item.id,
    name: item.quantity > 1 ? `${item.name} (${item.quantity})` : item.name,
    price: item.price * item.quantity,
    image: item.image
  }));

  return (
    <div className="min-h-screen bg-natural-cream/20 flex flex-col">
      <Navigation 
        logo={
          <Link to="/" className="font-serif text-2xl font-black text-natural-green tracking-tighter uppercase italic transition-all hover:scale-105">
            L'Essence Naturelle
          </Link>
        }
        links={navLinks}
        actions={
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 hover:bg-gray-100 rounded-full transition-all group active:scale-90"
            >
              <ShoppingBag size={22} className="text-gray-900 group-hover:text-indigo-600 transition-colors" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-indigo-600 text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white animate-bounce-subtle">
                  {cartCount}
                </span>
              )}
            </button>
            <div className="h-6 w-[1px] bg-gray-200 mx-2 hidden sm:block" />
            <Button 
              variant="ghost" 
              className="hidden sm:inline-flex text-xs font-black uppercase tracking-widest px-4"
              onClick={() => navigate('/login')}
              leftIcon={<UserCircle size={18} />}
            >
              Sign In
            </Button>
            <Button 
              className="bg-natural-green text-white rounded-full text-xs font-black uppercase tracking-widest px-6 shadow-xl shadow-natural-green/20"
              onClick={() => navigate('/signup')}
            >
              Join Us
            </Button>
          </div>
        }
        isGlassmorphism={true}
      />

      <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={sidebarItems}
        onRemove={(index) => {
          const itemToRemove = cartItems[index];
          if (itemToRemove) removeItem(itemToRemove.id);
        }}
        onCheckout={() => {
          setIsCartOpen(false);
          navigate("/checkout");
        }}
      />

      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>

      <Footer 
        logo={<div className="font-serif text-2xl font-black uppercase italic tracking-tighter">L'Essence Naturelle</div>}
        description="자연과 인간 사이의 균형을 연구하는 프리미엄 스킨케어 브랜드입니다. 자연의 순수함을 피부에 선물하세요."
        links={[
          {
            title: "Explore",
            items: [
              { label: "Our Story", href: "#" },
              { label: "Botanical Extracts", href: "#" },
              { label: "New Arrivals", href: "/products" }
            ]
          },
          {
            title: "Customer Support",
            items: [
              { label: "Care Instructions", href: "#" },
              { label: "Shipping Policy", href: "#" },
              { label: "Contact Us", href: "#" }
            ]
          }
        ]}
      />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
};

export default App;
