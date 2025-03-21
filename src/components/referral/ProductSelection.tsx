
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Star } from "lucide-react";

type Product = {
  id: number;
  name: string;
  reward: string;
  description: string;
};

// Using the same products from TopProducts component
const products = [
  {
    id: 1,
    name: "Premium Subscription",
    reward: "500 points",
    description: "Most popular option with highest rewards"
  },
  {
    id: 2,
    name: "Starter Pack",
    reward: "300 points",
    description: "Great for new users"
  },
  {
    id: 3,
    name: "Annual Membership",
    reward: "750 points",
    description: "Best value for committed users"
  }
];

export function ProductSelection({ onSelect }: { onSelect: (product: Product) => void }) {
  return (
    <div className="space-y-4 py-2">
      <p className="text-sm text-muted-foreground mb-4">
        Choose a product below to generate your unique referral link.
      </p>
      
      {products.map((product) => (
        <Card 
          key={product.id} 
          className="cursor-pointer hover:shadow-md transition-all duration-200 border-border hover:border-primary/30"
          onClick={() => onSelect(product)}
        >
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <h3 className="font-medium flex items-center">
                  {product.name}
                  {product.id === 1 && (
                    <span className="ml-2 text-xs bg-accent/20 text-accent-foreground px-2 py-0.5 rounded-full">
                      Popular
                    </span>
                  )}
                </h3>
                <p className="text-xs text-muted-foreground">{product.description}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-success px-2 py-1 bg-success/10 rounded-full">
                  {product.reward}
                </span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
