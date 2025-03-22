
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Drawer, 
  DrawerContent, 
  DrawerHeader, 
  DrawerTitle, 
  DrawerTrigger 
} from "@/components/ui/drawer";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { Users, ArrowRight } from "lucide-react";

// Mock data for demonstration purposes
const mockUserContacts = [
  {
    id: "1",
    name: "Aarav Kumar",
    avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    phone: "+91 9876543210"
  },
  {
    id: "2",
    name: "Diya Patel",
    avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    phone: "+91 8765432109"
  },
  {
    id: "3",
    name: "Arjun Singh",
    avatarUrl: "https://randomuser.me/api/portraits/men/67.jpg",
    phone: "+91 7654321098"
  }
];

interface ContactsDrawerProps {
  onShareContact: (contactPhone: string) => void;
}

export const ContactsDrawer = ({ onShareContact }: ContactsDrawerProps) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="w-full">
          <Users className="mr-2 h-4 w-4" />
          Share with Contacts
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Share with Contacts</DrawerTitle>
        </DrawerHeader>
        <div className="px-4 pb-4 space-y-4">
          {mockUserContacts.map((contact) => (
            <div key={contact.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <UserAvatar
                  src={contact.avatarUrl}
                  name={contact.name}
                  size="sm"
                />
                <div>
                  <div className="text-sm font-medium">{contact.name}</div>
                  <div className="text-xs text-muted-foreground">{contact.phone}</div>
                </div>
              </div>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => onShareContact(contact.phone)}
              >
                Invite
              </Button>
            </div>
          ))}
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full mt-2 text-muted-foreground"
          >
            View all contacts <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
