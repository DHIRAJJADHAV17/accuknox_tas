import { useSelector, useDispatch } from "react-redux";
import { Checkbox } from "./ui/checkbox";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";
import { RootState } from "../app/store";
import { toggleCspm } from "../features/cspm/cspmSlice";
import { toggleCwpp } from "../features/cwpp/cwppSlice";
import { toggleimage } from "../features/imagea/imageSlice";
import { toggleticket } from "../features/ticket/ticketSlice";
import { Button } from "./ui/button";
import { useEffect } from "react";

const SideDrawerItem = () => {
  const dispatch = useDispatch();

  const cspm = useSelector((state: RootState) => state.cspm.cspm);
  const cwpp = useSelector((state: RootState) => state.cwpp.cwpp);
  const image = useSelector((state: RootState) => state.image.image);
  const ticket = useSelector((state: RootState) => state.ticket.ticket);
  const handleCheckboxChange = (id: string, type: string) => {
    switch (type) {
      case "cspm":
        dispatch(toggleCspm(id));
        break;
      case "cwpp":
        dispatch(toggleCwpp(id));
        break;
      case "image":
        dispatch(toggleimage(id));
        break;
      case "ticket":
        dispatch(toggleticket(id));
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>CSPM</MenubarTrigger>
            <MenubarContent>
              {cspm.map((item) => (
                <MenubarItem key={item.id}>
                  <div className="flex items-center space-x-2 border py-2 px-2">
                    <Checkbox
                      id={`cspm-${item.id}`}
                      checked={item.isOpen}
                      onClick={() => handleCheckboxChange(item.id, "cspm")}
                    />
                    <label
                      htmlFor={`cspm-${item.id}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {item.title} CSPM
                    </label>
                  </div>
                </MenubarItem>
              ))}
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>CWPP</MenubarTrigger>
            <MenubarContent>
              {cwpp.map((item) => (
                <MenubarItem key={item.id}>
                  <div className="flex items-center space-x-2 border py-2 px-2">
                    <Checkbox
                      id={`cwpp-${item.id}`}
                      checked={item.isOpen}
                      onClick={() => handleCheckboxChange(item.id, "cwpp")}
                    />
                    <label
                      htmlFor={`cwpp-${item.id}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {item.title} CWPP
                    </label>
                  </div>
                </MenubarItem>
              ))}
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>Image</MenubarTrigger>
            <MenubarContent>
              {image.map((item) => (
                <MenubarItem key={item.id}>
                  <div className="flex items-center space-x-2 border py-2 px-2">
                    <Checkbox
                      id={`image-${item.id}`}
                      checked={item.isOpen}
                      onClick={() => handleCheckboxChange(item.id, "image")}
                    />
                    <label
                      htmlFor={`image-${item.id}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {item.title} Image
                    </label>
                  </div>
                </MenubarItem>
              ))}
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>Ticket</MenubarTrigger>
            <MenubarContent>
              {ticket.map((item) => (
                <MenubarItem key={item.id}>
                  <div className="flex items-center space-x-2 border py-2 px-2">
                    <Checkbox
                      id={`ticket-${item.id}`}
                      checked={item.isOpen}
                      onClick={() => handleCheckboxChange(item.id, "ticket")}
                    />
                    <label
                      htmlFor={`ticket-${item.id}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {item.title} Ticket
                    </label>
                  </div>
                </MenubarItem>
              ))}
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
};

export default SideDrawerItem;
