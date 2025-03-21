
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");

  const handleGoogleSignIn = () => {
    console.log("Sign in with Google");
    // Integration with Google auth would go here
  };

  const handleEmailSignIn = () => {
    console.log("Sign in with email", email);
    // Handle email signin logic
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-background">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-textPrimary">Welcome back</h1>
          <p className="text-textSecondary">
            Sign in to continue to your rewards
          </p>
        </div>

        <div className="space-y-4">
          <Button 
            onClick={handleGoogleSignIn}
            variant="outline" 
            className="w-full justify-between h-12"
          >
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="mr-2">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                <path d="M1 1h22v22H1z" fill="none"/>
              </svg>
              Continue with Google
            </span>
            <ArrowRight size={20} />
          </Button>

          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-border"></div>
            <span className="flex-shrink mx-3 text-textSecondary text-sm">or</span>
            <div className="flex-grow border-t border-border"></div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl font-medium text-textPrimary">Sign in with email</h2>
            </div>
            <Input 
              type="email" 
              placeholder="Email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button 
              onClick={handleEmailSignIn}
              className="w-full h-12 btn-gradient"
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
