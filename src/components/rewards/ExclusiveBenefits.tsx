
import { Card, CardContent } from "@/components/ui/card";

export function ExclusiveBenefits() {
  const benefits = [
    {
      icon: "🎉",
      title: "2x Points",
      subtitle: "Earn double points on every action"
    },
    {
      icon: "⭐",
      title: "Priority Support",
      subtitle: "Access to premium customer care"
    },
    {
      icon: "🎊",
      title: "Early Access",
      subtitle: "Be the first to try new features"
    }
  ];
  
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Exclusive Benefits</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {benefits.map((benefit, index) => (
          <Card key={index} className="border-none shadow-sm hover:shadow-md transition-all">
            <CardContent className="p-4 text-center">
              <div className="text-3xl mb-2 flex justify-center">{benefit.icon}</div>
              <h3 className="font-medium">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{benefit.subtitle}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
