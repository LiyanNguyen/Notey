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
    <div className="w-full h-96 flex flex-col gap-4 items-center justify-center text-slate-500 dark:text-slate-300">
      <Spinner className="h-12 w-12 border-[6px]" />
      {loadingDuration > 1000 ? (
        <>
          <p>
            This project uses free hosting service
          </p>
          <p>This might take a while...</p>
        </>
      ) : (
        <p>Loading Notes...</p>
      )}
    </div>
  );
};

export default LoadingBoard;
