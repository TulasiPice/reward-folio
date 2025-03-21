
import { SendForm } from "@/components/send/SendForm";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Send = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link to="/" className="p-2 rounded-full hover:bg-muted transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Send Points</h1>
          <p className="text-muted-foreground">
            Send reward points to your contacts.
          </p>
        </div>
      </div>
      
      <SendForm />
    </div>
  );
};

export default Send;
