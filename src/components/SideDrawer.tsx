import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

import SideDrawerItem from "./SideDrawerItem";

const SideDrawer = () => {
  return (
    <div className="">
      <Sheet>
        <SheetTrigger>
          <Button className="gap-2">
            Add Widget <Plus />
          </Button>
        </SheetTrigger>
        <SheetContent className="pt-0 px-0  ">
          <SheetHeader className="bg-indigo-900 h-12 text-white pt-2 px-2">
            <SheetTitle>Add Widget</SheetTitle>
          </SheetHeader>
          <SheetDescription className="pt-4 px-2">
            <SheetHeader className="text-md">
              Parsonalise your dashboard by adding the following widget
            </SheetHeader>

            <SheetDescription>
              <SideDrawerItem />
            </SheetDescription>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SideDrawer;
