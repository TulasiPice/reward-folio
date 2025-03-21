import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { ArrowRight, Coins, HandHeart, Mail, Share2, Smartphone, Wallet } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

// Onboarding slide component
const OnboardingSlide = ({ 
  icon: Icon, 
  title, 
  subtitle 
}: { 
  icon: React.ElementType; 
  title: string; 
  subtitle: string;
}) => (
  <div className="flex flex-col items-center justify-center p-6 text-center space-y-3">
    <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-2">
      <Icon size={36} className="text-primary" />
    </div>
    <h3 className="text-xl font-bold tracking-tight text-textPrimary">{title}</h3>
    <p className="text-sm text-textSecondary">{subtitle}</p>
  </div>
);

const SignUp = () => {
  // Keep existing state and handler functions
  const [step, setStep] = useState<'start' | 'email' | 'phone' | 'otp'>('start');
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const handleGoogleSignUp = () => {
    console.log("Sign up with Google");
    // Integration with Google auth would go here
  };

  const handleEmailSignUp = () => {
    if (step === 'email' && email) {
      setStep('otp');
    } else {
      setStep('email');
    }
  };

  const handlePhoneSignUp = () => {
    if (step === 'phone' && phone) {
      setStep('otp');
    } else {
      setStep('phone');
    }
  };

  const handleVerifyOTP = () => {
    console.log("Verify OTP", otp);
    // Handle OTP verification and signup
  };

  const handleBack = () => {
    if (step === 'otp') {
      setStep(email ? 'email' : 'phone');
    } else {
      setStep('start');
    }
  };

  // Only show the splash screen on the start step
  if (step === 'start') {
    return (
      <div className="relative flex flex-col min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/c38e8aa4-919e-4362-a0a4-b65be912117f.png" 
            alt="Food background" 
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between min-h-screen p-6">
          {/* Logo and Navigation options */}
          <div className="mt-14 text-white">
            <h1 className="text-5xl font-bold mb-2">Swiggy</h1>
            <div className="flex items-center space-x-4 mt-5 text-xl">
              <span className="font-medium">Food</span>
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              <span className="text-white/80">Instamart</span>
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              <span className="text-white/80">Dineout</span>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="space-y-10 mb-16">
            <h2 className="text-white text-3xl font-medium leading-snug">
              Order from top restaurants
            </h2>
            
            <Button 
              onClick={() => setStep('phone')}
              className="w-full h-14 text-lg font-medium rounded-xl bg-orange-500 hover:bg-orange-600 border-0"
            >
              Get Started
            </Button>
            
            {/* Bottom indicator */}
            <div className="flex justify-center">
              <div className="w-16 h-1.5 bg-white/60 rounded-full"></div>
            </div>
          </div>
          
          {/* Footer logos */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-white text-lg font-semibold">Swiggy</span>
            </div>
            <div className="flex items-center text-white/80 text-sm">
              <span>curated by</span>
              <span className="ml-2 font-bold text-white">Mobbin</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render the existing sign-up flow for other steps
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-background">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-textPrimary">
            {step === 'email' ? 'Sign up with email' : 
             step === 'phone' ? 'Sign up with phone' : 
             'Verify your account'}
          </h1>
          <p className="text-textSecondary">
            {step === 'email' ? 'We\'ll send a verification code to your email' : 
             step === 'phone' ? 'We\'ll send a verification code to your phone' : 
             `Enter the 6-digit code sent to ${email || phone}`}
          </p>
        </div>

        {/* Existing auth flow for email/phone/OTP verification */}
        {step === 'email' && (
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl font-medium text-textPrimary">Sign up with email</h2>
              <p className="text-sm text-textSecondary">We'll send a verification code to your email</p>
            </div>
            <Input 
              type="email" 
              placeholder="Email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex space-x-3">
              <Button 
                onClick={handleBack}
                variant="outline" 
                className="w-1/3"
              >
                Back
              </Button>
              <Button 
                onClick={handleEmailSignUp}
                className="w-2/3 btn-gradient"
                disabled={!email}
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === 'phone' && (
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl font-medium text-textPrimary">Sign up with phone</h2>
              <p className="text-sm text-textSecondary">We'll send a verification code to your phone</p>
            </div>
            <Input 
              type="tel" 
              placeholder="Phone number" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div className="flex space-x-3">
              <Button 
                onClick={handleBack}
                variant="outline" 
                className="w-1/3"
              >
                Back
              </Button>
              <Button 
                onClick={handlePhoneSignUp}
                className="w-2/3 btn-gradient"
                disabled={!phone}
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === 'otp' && (
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl font-medium text-textPrimary">Verification</h2>
              <p className="text-sm text-textSecondary">
                Enter the 6-digit code sent to {email || phone}
              </p>
            </div>
            <div className="flex justify-center py-2">
              <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <div className="flex space-x-3">
              <Button 
                onClick={handleBack}
                variant="outline" 
                className="w-1/3"
              >
                Back
              </Button>
              <Button 
                onClick={handleVerifyOTP}
                className="w-2/3 btn-gradient"
                disabled={otp.length !== 6}
              >
                Verify & Continue
              </Button>
            </div>
          </div>
        )}

        <div className="text-center text-sm text-textSecondary">
          Already have an account?{" "}
          <Link to="/sign-in" className="font-medium text-primary hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
