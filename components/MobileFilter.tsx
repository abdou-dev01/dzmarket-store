"use client";

import { Color, Size } from "@/types";
import { useState } from "react";
import Button from "./Button";
import { Plus, X } from "lucide-react";
import { on } from "events";
import { Dialog, DialogPanel } from "@headlessui/react";
import IconButton from "./IconButton";
import Filter from "./Filter";

interface MobileFilterProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilter: React.FC<MobileFilterProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button>

      <Dialog
        open={open}
        as="div"
        onClose={onClose}
        className="relative lg:hidden z-40"
      >
        {/* Backgroud*/}
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="flex fixed inset-0 z-40">
          <DialogPanel className="relative ms-auto flex flex-col h-full w-full max-w-xs overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4 ">
              <IconButton Icon={<X size={18} />} onClick={onClose} />
            </div>
            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilter;
