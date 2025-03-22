
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const InviteEarnCard = () => {
  const navigate = useNavigate();
  
  const handleInviteClick = () => {
    navigate('/referral');
  };
  
  return (
    <Card 
      className="bg-[#F0F4FF] text-[#1E293B] rounded-xl shadow-md hover:shadow-lg transition-shadow"
      onClick={() => navigate('/referral')}
    >
      <CardContent className="p-4 cursor-pointer">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-semibold text-lg">Invite & Earn 💸</h3>
            <p className="text-sm text-[#1E293B]/80">
              Refer friends and get ₹50 each time they join!
            </p>
          </div>
          <div className="bg-white rounded-full p-2 shadow-sm">
            <Gift className="h-5 w-5 text-primary" />
          </div>
        </div>
        
        <Button 
          className="w-full mt-2"
          onClick={handleInviteClick}
        >
          Invite Now
        </Button>
      </CardContent>
    </Card>
  );
};
