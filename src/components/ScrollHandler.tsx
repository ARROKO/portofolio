"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ScrollHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const target = searchParams.get("target");
    if (target) {
      // Retour au délai de 10ms qui était plus stable
      const timer = setTimeout(() => {
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({ behavior: "auto" });
          window.history.replaceState(null, "", "/");
        }
      }, 10);

      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  return null;
}
