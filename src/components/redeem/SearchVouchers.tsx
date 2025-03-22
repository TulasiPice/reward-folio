
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchVouchersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export function SearchVouchers({ searchTerm, setSearchTerm }: SearchVouchersProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
      <Input
        placeholder="Search vouchers..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-10"
      />
    </div>
  );
}
