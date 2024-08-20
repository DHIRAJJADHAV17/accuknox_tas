import { X } from "lucide-react";

const CardItems = ({ data, onClose }: { data: any; onClose: () => void }) => {
  return (
    <div className="relative border rounded-xl p-4 bg-white hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
      <div className="absolute top-2 right-2 cursor-pointer" onClick={onClose}>
        <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h6 className="text-sm font-medium">{data.title}</h6>
          <span className="text-xs text-slate-500">{data.content}</span>
        </div>
      </div>
    </div>
  );
};

export default CardItems;
