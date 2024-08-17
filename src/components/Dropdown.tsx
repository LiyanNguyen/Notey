import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../store";
import { updatePartial } from "../store/filterSlice";

const Dropdown = ({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) => {
  const dispatch = useAppDispatch();
  dispatch(updatePartial({ currentPage: 1 }));
  const { t } = useTranslation();

  return (
    <Listbox value={value} onChange={onChange}>
      <div className="relative">
        <Listbox.Button className="dark:bg-slate-800 w-36 rounded-sm-within:outline-2 p-0.5 rounded focus-within:outline-violet-500 capitalize relative cursor-default bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-violet-500 focus-visible:ring-1 focus-visible:ring-violet/25 focus-visible:ring-offset-2 focus-visible:ring-offset-violet-300 sm:text-sm">
          <span className="block truncate dark:text-slate-200">{t(value)}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400 dark:text-slate-200"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="dark:bg-slate-700 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {options.map((item) => (
              <Listbox.Option
                key={item}
                className={({ active }) =>
                  `dark:text-slate-200 relative cursor-default select-none py-2 pl-10 pr-4 capitalize ${
                    active
                      ? "bg-violet-100 text-violet-900 dark:bg-slate-800"
                      : "text-gray-900"
                  }`
                }
                value={item}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {t(item)}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-violet-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default Dropdown;
