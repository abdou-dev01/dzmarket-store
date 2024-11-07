"use client";

// import PreviewModal from "@/components/PreviewModal";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Spinner from "@/components/Spinner";

const ModalProvider = () => {
  const PreviewModal = dynamic(() => import("@/components/PreviewModal"), {
    ssr: false,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <Spinner />;

  return <PreviewModal />;
};

export default ModalProvider;
