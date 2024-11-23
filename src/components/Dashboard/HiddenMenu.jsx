import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiMenuAlt1 } from "react-icons/hi";

export function DropdownMenuDemo({ menusData }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <HiMenuAlt1
            size={25}
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu visibility
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {menusData?.map((menu, index) => (
          <>
            <DropdownMenuLabel key={index} className="capitalize text-center">{menu?.title}</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
