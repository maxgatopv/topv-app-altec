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
      <div className="m-5 w-full text-center bg-slate-50 py-40">
        <h3 className="font-thin text-red-600">Error Product</h3>
        <ErrorButton reset={reset} />
      </div>
    </>
  );
}
