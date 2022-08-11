import { HiSun, HiMoon } from "react-icons/hi";
import { ComponentProps, useCallback } from "react";
import classNames from "classnames";

export default function AppDarkThemeToggle(
  props: Omit<ComponentProps<"button">, "type">
) {
  const toggle = useCallback((_event: React.MouseEvent<HTMLButtonElement>) => {
    // if set via local storage previously
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
        return;
      }
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      return;
    }
    // if NOT set via local storage previously
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
  }, []);

  return (
    <button
      {...props}
      className={classNames(
        "rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
        props.className
      )}
      data-testid="dark-theme-toggle"
      type="button"
      aria-label={props["aria-label"] ?? "Toggle dark/light mode"}
      onClick={(ev) =>
        Promise.all(
          props.onClick ? [props.onClick(ev), toggle(ev)] : [toggle(ev)]
        )
      }
    >
      <HiSun className="hidden dark:block" />
      <HiMoon className="block dark:hidden" />
    </button>
  );
}
