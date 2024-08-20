import { Button } from "./ui/button";
import {
  ChevronDown,
  Clock,
  EllipsisVertical,
  Repeat2Icon,
  Tally1,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import SideDrawer from "./SideDrawer";

const Heading = () => {
  return (
    <div className="flex justify-between px-4 pt-8 items-center">
      <div>CNAPP Dashboard</div>
      <div className="flex gap-2">
        <SideDrawer />
        <Button>
          <Repeat2Icon />
        </Button>
        <Button>
          <EllipsisVertical />
        </Button>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Clock />
                <Tally1 />
                <h1>Last 2 Days</h1>
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Content</DropdownMenuLabel>
              <DropdownMenuSeparator color="gray" />
              <DropdownMenuCheckboxItem>Status Bar</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Activity Bar</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Panel</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Heading;
