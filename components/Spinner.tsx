import { Loader2 } from "lucide-react";

const Spinner = () => {
  return (
    <div className="absolute inset-0 z-50">
      <div className="relative bg-black bg-opacity-20 h-full w-full">
        <div className="flex items-center justify-center h-full w-full z-50">
          <Loader2 size={56} className="animate-spin" color="gray" />
        </div>
      </div>
    </div>
  );
};

export default Spinner;
