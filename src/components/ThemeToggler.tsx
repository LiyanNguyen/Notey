import { Switch } from "@headlessui/react";
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

const ThemeToggler = () => {
  const [enabled, setEnabled] = useState<boolean>(false);

  useEffect(() => {
    enabled
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [enabled]);


  return (
    <div className="hidden md:flex items-center gap-2 transition-colors duration-200 ease-in-out">
      <SunIcon className="h-5 w-5 text-slate-300" />
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-violet-600" : "bg-violet-400"
        } relative inline-flex h-[22px] w-11 items-center rounded-full`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white  transition-transform duration-200 ease-in-out`}
        />
      </Switch>
      <MoonIcon className="h-4 w-4 text-slate-300" />
    </div>
  );
};

export default ThemeToggler;
