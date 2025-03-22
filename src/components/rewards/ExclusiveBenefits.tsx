
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Gift, Gem, CreditCard } from "lucide-react";

export const ExclusiveBenefits = () => {
  const benefits = [
    {
      icon: <Shield className="h-5 w-5 text-primary" />,
      title: "Priority Support",
      description: "Get faster customer service"
    },
    {
      icon: <Gift className="h-5 w-5 text-primary" />,
      title: "Birthday Bonus",
      description: "Extra points on your special day"
    },
    {
      icon: <Gem className="h-5 w-5 text-primary" />,
      title: "Exclusive Deals",
      description: "Access to members-only offers"
    },
    {
      icon: <CreditCard className="h-5 w-5 text-primary" />,
      title: "Higher Cashback",
      description: "More returns on your spending"
    }
  ];

  return (
    <Card className="border-none shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Gold Member Benefits</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-muted/40 rounded-lg">
              {benefit.icon}
              <div>
                <h3 className="font-medium text-sm">{benefit.title}</h3>
                <p className="text-xs text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
