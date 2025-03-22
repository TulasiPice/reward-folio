
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

interface HowToReferProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const HowToRefer = ({ isOpen, onOpenChange }: HowToReferProps) => {
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={onOpenChange}
      className="w-full"
    >
      <Card>
        <CollapsibleTrigger asChild>
          <CardHeader className="pb-2 pt-4 cursor-pointer flex flex-row items-center justify-between">
            <CardTitle className="text-lg">How to Refer</CardTitle>
            <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="pt-2">
            <ul className="space-y-2 pl-5 list-disc text-sm text-muted-foreground">
              <li>Share your referral link with friends</li>
              <li>They sign up and start using the app</li>
              <li>You earn rewards instantly 🎉</li>
            </ul>
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};
