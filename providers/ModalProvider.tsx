"use client";

// import PreviewModal from "@/components/PreviewModal";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ModalProvider = () => {
  const PreviewModal = dynamic(() => import("@/components/PreviewModal"), {
    ssr: false,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <PreviewModal />;
};

export default ModalProvider;
