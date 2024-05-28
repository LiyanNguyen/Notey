import { useTranslation } from "react-i18next";
import { Menu } from "@headlessui/react";
import { languages } from "../data";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <Menu as="div" className="relative inline-block text-center pt-1">
      <div>
        <Menu.Button
          data-testid="language-button"
          className="inline-flex justify-center rounded-md border border-transparent bg-violet-100 px-4 py-1 text-sm font-medium text-violet-900 hover:bg-violet-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 self-center disabled:bg-slate-200 disabled:text-gray-400"
        >
          {i18n.language === "en" ? "English" : "日本語"}
        </Menu.Button>
      </div>
      <Menu.Items className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          {languages.map((item) => (
            <Menu.Item key={item.code}>
              <button
                onClick={() => i18n.changeLanguage(item.code)}
                data-testid={`button-${item.code}`}
                className="inline-flex justify-center rounded-md border border-transparent bg-violet-100 px-4 py-1 text-sm font-medium text-violet-900 hover:bg-violet-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 self-center disabled:bg-slate-200 disabled:text-gray-400"
              >
                {item.name}
              </button>
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Menu>
  );
};

export default LanguageSwitcher;
