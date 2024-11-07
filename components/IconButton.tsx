import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

interface IconButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  Icon: React.ReactElement;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  className,
  Icon,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        `felx items-center justify-center rounded-full bg-white border shadow-md p-2 hover:scale-110 transition`,
        className
      )}
    >
      {Icon}
    </button>
  );
};

export default IconButton;
