
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-background">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-textPrimary">
            Turn referrals into real rewards
          </h1>
          <p className="text-textSecondary">
            Takes less than 10 seconds to start earning
          </p>
        </div>

        {/* Onboarding Carousel */}
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <OnboardingSlide 
                icon={Share2} 
                title="Refer your network" 
                subtitle="Products or friends—every share counts." 
              />
            </CarouselItem>
            <CarouselItem>
              <OnboardingSlide 
                icon={Coins} 
                title="Earn cash + coins" 
                subtitle="Track rewards in real-time." 
              />
            </CarouselItem>
            <CarouselItem>
              <OnboardingSlide 
                icon={Wallet} 
                title="Withdraw anytime" 
                subtitle="Bank transfer, UPI, or spend in-app." 
              />
            </CarouselItem>
          </CarouselContent>
          <div className="flex justify-center mt-4">
            <div className="flex gap-1">
              {[0, 1, 2].map((_, index) => (
                <div 
                  key={index} 
                  className="w-2 h-2 rounded-full bg-muted transition-all duration-300" 
                />
              ))}
            </div>
          </div>
        </Carousel>

        {step === 'start' && (
          <div className="space-y-4">
            <Button 
              onClick={handleGoogleSignUp}
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

            <Button 
              onClick={handlePhoneSignUp}
              variant="outline" 
              className="w-full justify-between h-12"
            >
              <span className="flex items-center">
                <Smartphone size={20} className="mr-2" />
                Continue with Phone
              </span>
              <ArrowRight size={20} />
            </Button>

            <Button 
              onClick={handleEmailSignUp}
              className="w-full h-12 btn-gradient"
            >
              <Mail size={20} className="mr-2" />
              Continue with Email
            </Button>
          </div>
        )}

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
