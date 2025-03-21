
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Star } from "lucide-react";

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

export function TopProducts({ onSelectProduct }: { onSelectProduct?: (product: any) => void } = {}) {
  return (
    <Card className="hover:shadow-md transition-all duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold flex items-center">
          <Star className="mr-2 h-5 w-5 text-amber-500" />
          Top Products to Refer
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="p-3 rounded-lg border border-border hover:bg-accent/5 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{product.description}</p>
                </div>
                <span className="text-sm font-medium text-emerald px-2 py-1 bg-emerald-50 dark:bg-emerald-900/20 rounded-full">
                  {product.reward}
                </span>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="mt-2 text-xs w-full justify-between"
                onClick={() => onSelectProduct && onSelectProduct(product)}
              >
                Share this product <ChevronRight className="h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
