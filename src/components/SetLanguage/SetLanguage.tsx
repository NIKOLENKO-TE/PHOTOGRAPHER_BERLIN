//SetLanguage.tsx
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Listbox, Transition } from "@headlessui/react";
import enFlag from "../img/svg/enFlag.svg";
import deFlag from "../img/svg/deFlag.svg";
import uaFlag from "../img/svg/uaFlag.svg";

type SetLanguageProps = {
  onSelectLanguage: (language: string) => void;
};

const SetLanguage: React.FC<SetLanguageProps> = ({
  onSelectLanguage,
}): JSX.Element => {
  const locales = {
    ua: { title: "UA", flag: uaFlag },
    en: { title: "EN", flag: enFlag },
    de: { title: "DE", flag: deFlag },
  };

  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string>(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    return savedLanguage || (i18n.language?.split("-")[0] as string) || "ua";
  });

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const languageInfo = locales[selectedLanguage as keyof typeof locales];

  const handleSelectLanguage = (language: string) => {
    setSelectedLanguage(language);
    localStorage.setItem("selectedLanguage", language);
    onSelectLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <Listbox value={selectedLanguage} onChange={handleSelectLanguage}>
      {({ open }) => (
        <div className="relative inline-block text-center">
          <Listbox.Button className="inline-flex justify-center ssm:h-[38px] md:h-[40px] xl:h-[42px] w-full rounded-[12px] ssm:text-[16px]  md:text-[18px] xl:text-[20px] text-white whitespace-nowrap place-content-stretch bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br border-blue-600 shadow-lg shadow-blue-500/50 mr-1">
            {languageInfo && (
              <img
                src={languageInfo.flag}
                alt={languageInfo.title}
                className="w-[30px] h-[20px] ssm:mt-1 md:mt-1.5 mr-1 object-cover rounded-sm"
              />
            )}
            {languageInfo?.title}
          </Listbox.Button>
          <Transition
            as={React.Fragment}
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              static
              className="absolute z-10 mt-2 shadow-md bg-white bg-opacity-30 backdrop-blur-[4px] ring-1 ring-black ring-opacity-10 focus:outline-2 rounded-[8px] w-[85px]"
            >
              {Object.keys(locales).map((locale) => (
                <Listbox.Option key={locale} value={locale}>
                  {({ selected }) => (
                    <div
                      className={`${
                        selected
                          ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br border-blue-600 shadow-lg shadow-blue-500/50 text-white"
                          : "text-black"
                      } cursor-pointer select-none relative pl-3 flex items-center rounded-[6px] h-[40px]`}
                      onClick={() => handleSelectLanguage(locale)}
                    >
                      <img
                        src={locales[locale as keyof typeof locales].flag}
                        alt={locales[locale as keyof typeof locales].title}
                        className="w-[35px] mr-2 shadow-md shadow-black/20"
                      />
                      {locales[locale as keyof typeof locales].title}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
};

export default SetLanguage;