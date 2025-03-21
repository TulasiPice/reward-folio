
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, Smartphone } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const SignUp = () => {
  const [signUpMethod, setSignUpMethod] = useState<"email" | "phone" | null>(null);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleGoogleSignUp = () => {
    console.log("Sign up with Google");
    // Integration with Google auth would go here
  };

  const handleContinue = () => {
    if (signUpMethod === "phone" && !otpSent) {
      console.log("Sending OTP to", phoneNumber);
      setOtpSent(true);
      // In a real app, this would call an API to send the OTP
    } else if (signUpMethod === "email") {
      console.log("Sign up with email", email);
      // Handle email signup logic
    } else if (signUpMethod === "phone" && otpSent) {
      console.log("Verifying OTP", otp);
      // Verify OTP and complete signup
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Turn referrals into real rewards.</h1>
          <p className="text-muted-foreground">
            Takes less than 10 seconds to start earning.
          </p>
        </div>

        <div className="space-y-4">
          {!signUpMethod ? (
            <>
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
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink mx-3 text-gray-400 text-sm">or</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button 
                  onClick={() => setSignUpMethod("email")}
                  variant="outline" 
                  className="flex flex-col items-center py-6 h-auto"
                >
                  <Mail className="h-6 w-6 mb-2" />
                  <span>Email</span>
                </Button>
                <Button 
                  onClick={() => setSignUpMethod("phone")}
                  variant="outline"
                  className="flex flex-col items-center py-6 h-auto"
                >
                  <Smartphone className="h-6 w-6 mb-2" />
                  <span>Phone</span>
                </Button>
              </div>
            </>
          ) : signUpMethod === "email" ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-xl font-medium">Enter your email</h2>
                <p className="text-sm text-muted-foreground">We'll send a verification link to your email</p>
              </div>
              <Input 
                type="email" 
                placeholder="Email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button 
                onClick={handleContinue}
                className="w-full h-12 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600"
              >
                Continue
              </Button>
              <Button 
                variant="ghost" 
                className="w-full" 
                onClick={() => setSignUpMethod(null)}
              >
                Back
              </Button>
            </div>
          ) : signUpMethod === "phone" && !otpSent ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-xl font-medium">Enter your phone</h2>
                <p className="text-sm text-muted-foreground">We'll send a verification code to your phone</p>
              </div>
              <Input 
                type="tel" 
                placeholder="Phone number" 
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <Button 
                onClick={handleContinue}
                className="w-full h-12 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600"
              >
                Send Code
              </Button>
              <Button 
                variant="ghost" 
                className="w-full" 
                onClick={() => setSignUpMethod(null)}
              >
                Back
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-xl font-medium">Enter verification code</h2>
                <p className="text-sm text-muted-foreground">Enter the 6-digit code sent to your phone</p>
              </div>
              <div className="flex justify-center py-2">
                <InputOTP
                  maxLength={6}
                  value={otp}
                  onChange={setOtp}
                  render={({ slots }) => (
                    <InputOTPGroup>
                      {slots.map((slot, index) => (
                        <InputOTPSlot key={index} {...slot} index={index} />
                      ))}
                    </InputOTPGroup>
                  )}
                />
              </div>
              <Button 
                onClick={handleContinue}
                className="w-full h-12 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600"
                disabled={otp.length !== 6}
              >
                Verify & Continue
              </Button>
              <Button 
                variant="ghost" 
                className="w-full" 
                onClick={() => {
                  setOtpSent(false);
                  setOtp("");
                }}
              >
                Back
              </Button>
            </div>
          )}
        </div>

        <div className="text-center text-sm text-muted-foreground">
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
