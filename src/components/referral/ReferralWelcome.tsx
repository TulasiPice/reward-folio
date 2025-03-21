
import React from "react";
import { Button } from "@/components/ui/button";
import { Sparkle } from "lucide-react";

interface ReferralWelcomeProps {
  onStart: () => void;
}

export function ReferralWelcome({ onStart }: ReferralWelcomeProps) {
  return (
    <div className="flex flex-col items-center justify-between h-full bg-black text-white">
      {/* Top section with circle */}
      <div className="w-full flex-1 flex flex-col items-center justify-center pt-16 px-6 relative">
        <Sparkle className="text-white/80 h-6 w-6 absolute top-28" />
        
        <div className="relative w-24 h-24 mb-10">
          <div className="absolute inset-0 rounded-full border-2 border-white/20"></div>
          <div className="absolute inset-1 rounded-full border-[3px] border-accent"></div>
          <div className="absolute inset-3 rounded-full bg-gradient-to-br from-accent to-accent/60"></div>
        </div>
        
        <div className="w-full max-w-64 h-1 bg-white/10 rounded-full mb-16"></div>
        
        <h1 className="text-4xl font-bold mb-2 text-center">
          welcome to
        </h1>
        <div className="text-5xl font-extrabold text-center leading-tight">
          <span className="text-accent">CRED</span> <span className="italic text-accent/90">referral</span>
        </div>
        
        <p className="text-lg text-white/60 mt-4 text-center max-w-xs">
          invite friends to CRED. earn assured cashback.
        </p>
      </div>
      
      {/* Middle section with 3D gift box */}
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="relative w-40 h-40">
          <img 
            src="/lovable-uploads/3ed570c9-3f97-49c5-8fb8-49122baf0a16.png" 
            alt="Gift box" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      
      {/* Bottom section with button */}
      <div className="w-full px-6 pb-20">
        <div className="w-full h-1 bg-white/30 rounded-full mb-10"></div>
        <Button 
          onClick={onStart}
          className="w-full py-6 bg-white hover:bg-white/90 text-black font-medium text-lg rounded-lg"
        >
          Get Started
        </Button>
        
        <div className="flex items-center justify-between mt-10 px-2">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-2">
              <span className="text-white font-bold text-xs">C</span>
            </div>
            <span className="text-white/80 font-semibold">CRED</span>
          </div>
          
          <div className="text-white/60 text-sm">
            curated by <span className="font-semibold">Mobbin</span>
          </div>
        </div>
      </div>
    </div>
  );
}
