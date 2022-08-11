import classNames from "classnames";
import { Dropdown } from "flowbite-react";
import { useTranslation } from "next-i18next";
import { ComponentProps, useCallback, useMemo } from "react";

export default function ChangeLanguage(props: ComponentProps<"div">) {
  const { ready, i18n } = useTranslation();

  const changeLang = useCallback(
    async (lang: typeof i18n.languages[number]) => {
      if (!i18n) {
        return;
      }
      try {
        return await Promise.resolve(await i18n.changeLanguage(lang));
      } catch (err) {
        console.warn(err);
        return Promise.reject(err);
      }
    },
    [i18n]
  );

  const getLangDropdown = useMemo(() => {
    if (!ready || !i18n || i18n.languages.length === 0) {
      return <></>;
    }
    return (
      <Dropdown
        inline={true}
        label={
          <span className="text-gray-800 dark:text-white uppercase">
            {i18n.language}
          </span>
        }
      >
        {i18n.languages.map((lang) => (
          <Dropdown.Item key={lang} onClick={() => changeLang(lang)}>
            {lang}
          </Dropdown.Item>
        ))}
      </Dropdown>
    );
  }, [changeLang, i18n, ready]);

  return (
    <div
      {...props}
      className={classNames(props.className, "relative uppercase")}
    >
      {getLangDropdown}
    </div>
  );
}
