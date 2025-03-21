
import { RewardCard } from "@/components/rewards/RewardCard";
import { rewards, currentUser } from "@/utils/mockData";
import { formatPoints } from "@/utils/formatters";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Rewards = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Get unique categories
  const categories = Array.from(new Set(rewards.map(reward => reward.category)));
  
  // Filter rewards based on search and category
  const filteredRewards = rewards.filter(reward => {
    const matchesSearch = reward.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         reward.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? reward.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link to="/" className="p-2 rounded-full hover:bg-muted transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Rewards</h1>
          <p className="text-muted-foreground">
            You have <span className="font-medium text-foreground">{formatPoints(currentUser.points)}</span> points to spend.
          </p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input
            placeholder="Search rewards..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex space-x-2 overflow-x-auto pb-2 max-w-full">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`whitespace-nowrap px-3 py-1 rounded-full text-sm ${
              selectedCategory === null 
                ? 'bg-primary text-white' 
                : 'bg-muted hover:bg-muted/80 text-muted-foreground'
            }`}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap px-3 py-1 rounded-full text-sm ${
                selectedCategory === category 
                  ? 'bg-primary text-white' 
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredRewards.map(reward => (
            <RewardCard 
              key={reward.id} 
              reward={reward} 
              userPoints={currentUser.points} 
            />
          ))}
        </div>
        
        {filteredRewards.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No rewards found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Rewards;
