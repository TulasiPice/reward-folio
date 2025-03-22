
import { Ticket } from "lucide-react";

export function EmptyVouchers() {
  return (
    <div className="text-center py-12">
      <div className="inline-flex mx-auto items-center justify-center rounded-full bg-muted p-6 mb-4">
        <Ticket className="h-10 w-10 text-muted-foreground" />
      </div>
      <p className="text-lg font-semibold">No vouchers found</p>
      <p className="text-muted-foreground mt-1">Try adjusting your search or filter criteria</p>
    </div>
  );
}
