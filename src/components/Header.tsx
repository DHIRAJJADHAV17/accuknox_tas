import { NavigationTags } from "./NavigationTags";
import SearchBar from "./SearchBar";
import { BellRing, ChevronDown, User } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between px-2 py-2 bg-white items-center">
      <div className="flex">
        <NavigationTags />
      </div>
      <div className="flex gap-8">
        <SearchBar />
        <ChevronDown />
        <BellRing />
        <User />
      </div>
    </div>
  );
};

export default Header;
