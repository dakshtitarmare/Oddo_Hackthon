import React, { useState } from "react";
import Input from "/src/components/ui/Input";
import Button from "/src/components/ui/Button";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-soft-blush px-4">
      <div className="relative w-full max-w-md h-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          {isLogin ? (
            <div className="flex flex-col justify-center gap-3">
              <h2 className="text-h3 text-powder-blue mb-2 text-center">Login</h2>
              <Input label="Email" placeholder="you@example.com" />
              <Input label="Password" type="password" placeholder="••••••" />
              <Button full className="mt-4">Login</Button>
              <p
                className="text-caption text-pale-sky mt-3 text-center cursor-pointer hover:underline"
                onClick={() => setIsLogin(false)}
              >
                Don't have an account? Sign Up
              </p>
              <p className="text-caption text-pale-sky mt-1 text-center cursor-pointer hover:underline">
                Forgot Password?
              </p>
            </div>
          ) : (
            <div className="flex flex-col justify-center gap-3">
              <h2 className="text-h3 text-powder-blue mb-2 text-center">Sign Up</h2>
              <Input label="Name" placeholder="John Doe" />
              <Input label="Email" placeholder="you@example.com" />
              <Input label="Password" type="password" placeholder="••••••" />
              <Button full className="mt-4">Sign Up</Button>
              <p
                className="text-caption text-pale-sky mt-3 text-center cursor-pointer hover:underline"
                onClick={() => setIsLogin(true)}
              >
                Already have an account? Login
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}