"use client";

import { cn } from "@/lib/utils";
import { Image as ImageTypes } from "@/types";
import { Tab } from "@headlessui/react";
import Image from "next/image";

interface GalleryTabProps {
  image: ImageTypes;
}

const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="relative flex items-center justify-center aspect-square cursor-pointer rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute inset-0 w-full h-full aspect-square overflow-hidden rounded-md">
            <Image alt="" src={image.url} fill sizes="cover" />
          </span>
          <span
            className={cn(
              `absolute inset-0 rounded-md ring-2 ring-offset-2`,
              selected ? "ring-black" : "ring-transparent"
            )}
          ></span>
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
