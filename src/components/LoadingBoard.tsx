import { useEffect, useState } from "react";
import { Spinner } from ".";
import { useTranslation } from "react-i18next";

const LoadingBoard = () => {
  const [loadingDuration, setLoadingDuration] = useState<number>(0);
  const { t } = useTranslation();

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
          <p>{t("freeHosting")}</p>
          <p>{t("mightTakeAWhile")}</p>
        </>
      ) : (
        <p>{t("loadingNotes")}</p>
      )}
    </div>
  );
};

export default LoadingBoard;
