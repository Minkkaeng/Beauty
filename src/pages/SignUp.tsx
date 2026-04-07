import React from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "@framework/ui";
import { UserPlus, CheckCircle2 } from "lucide-react";

export const SignUp: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-natural-cream/30">
      <div className="max-w-2xl w-full space-y-12 p-16 bg-white rounded-[4rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-50 transform transition-all hover:scale-[1.01]">
        <div className="text-center space-y-6">
          <h2 className="text-5xl font-black text-gray-900 tracking-tighter uppercase italic">
            Join the Essence
          </h2>
          <p className="text-sm font-bold text-gray-400 tracking-widest uppercase max-w-sm mx-auto leading-relaxed">
            Create an account to experience personalized skincare and exclusive botanical benefits.
          </p>
        </div>

        <form className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8" action="#" method="POST">
          <div className="space-y-6">
            <Input
              id="first-name"
              name="first-name"
              type="text"
              required
              label="First Name"
              placeholder="Jane"
            />
            <Input
              id="last-name"
              name="last-name"
              type="text"
              required
              label="Last Name"
              placeholder="Doe"
            />
            <Input
              id="email-address"
              name="email"
              type="email"
              required
              label="Email Address"
              placeholder="hello@lessence.com"
            />
          </div>

          <div className="space-y-6">
            <Input
              id="password"
              name="password"
              type="password"
              required
              label="Password"
              placeholder="••••••••"
            />
            <Input
              id="confirm-password"
              name="confirm-password"
              type="password"
              required
              label="Confirm Password"
              placeholder="••••••••"
            />
            
            <div className="pt-2 px-1">
              <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest leading-loose">
                By creating an account, you agree to our{" "}
                <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a> and{" "}
                <a href="#" className="text-indigo-600 hover:underline">Terms of Service</a>.
              </p>
            </div>
          </div>

          <div className="md:col-span-2 pt-6">
            <Button 
              className="w-full py-5 text-xl font-black uppercase tracking-widest rounded-3xl shadow-xl shadow-indigo-100"
              size="lg"
              rightIcon={<UserPlus size={20} />}
            >
              Create Account
            </Button>
          </div>
        </form>

        <div className="pt-8 border-t border-gray-50 flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-2 text-indigo-600">
            <CheckCircle2 size={16} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Eco-Friendly Membership Benefits</span>
          </div>
          
          <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.1em]">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600 font-black hover:underline underline-offset-4 decoration-2">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
