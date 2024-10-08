"use client";

import ErrorButton from "@/components/common/error-reset";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <ErrorButton reset={reset} />
    </>
  );
}
