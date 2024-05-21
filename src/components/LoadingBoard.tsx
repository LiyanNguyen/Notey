import { useEffect, useState } from "react";
import { Spinner } from ".";

const LoadingBoard = () => {
  const [loadingDuration, setLoadingDuration] = useState<number>(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setLoadingDuration((prev) => prev + 100);
    }, 100);

    return () => clearInterval(interval);
  }, [loadingDuration]);

  return (
    <div className="w-full h-96 flex flex-col gap-4 items-center justify-center">
      <Spinner className="h-12 w-12 border-[6px]" />
      {loadingDuration > 1000 ? (
        <>
          <p className="text-slate-500">
            This project uses free hosting service
          </p>
          <p className="text-slate-500">This might take a while...</p>
        </>
      ) : (
        <p className="text-slate-500">Loading Notes...</p>
      )}
    </div>
  );
};

export default LoadingBoard;
