import React from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "@framework/ui";
import { 
  LogIn, 
  Mail 
} from "lucide-react";

export const Login: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-natural-cream/30">
      <div className="max-w-md w-full space-y-10 p-12 bg-white rounded-[3rem] shadow-2xl border border-gray-50 transform transition-all hover:scale-[1.01]">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase italic">
            Welcome Back
          </h2>
          <p className="text-sm font-bold text-gray-400 tracking-widest uppercase">
            Sign in to your account
          </p>
        </div>

        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="space-y-4">
            <Input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              label="Email Address"
              placeholder="hello@lessence.com"
            />
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              label="Password"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between px-1">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
              />
              <label htmlFor="remember-me" className="ml-2 block text-xs font-bold text-gray-400 uppercase tracking-tighter cursor-pointer">
                Remember me
              </label>
            </div>

            <div className="text-xs font-black uppercase tracking-tighter">
              <a href="#" className="text-indigo-600 hover:text-indigo-500 transition-colors">
                Forgot password?
              </a>
            </div>
          </div>

          <Button 
            className="w-full py-4 text-lg font-black uppercase tracking-widest rounded-3xl"
            rightIcon={<LogIn size={18} />}
          >
            Sign In
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-100"></div>
          </div>
          <div className="relative flex justify-center text-xs font-black uppercase tracking-widest">
            <span className="px-4 bg-white text-gray-300 italic">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="rounded-2xl py-3 border-gray-100 hover:border-indigo-600" leftIcon={<Mail size={16} />}>
            Google
          </Button>
          <Button variant="outline" className="rounded-2xl py-3 border-gray-100 hover:border-black" leftIcon={<LogIn size={16} />}>
            Guest
          </Button>
        </div>

        <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest">
          Don't have an account?{" "}
          <Link to="/signup" className="text-indigo-600 font-black hover:underline underline-offset-4 decoration-2">
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
