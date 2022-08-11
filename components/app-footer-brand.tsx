import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

import nextLogoLight from "../public/next-logo-light.svg";
import nextLogoDark from "../public/next-logo-dark.svg";
import { useCallback } from "react";

export default function AppFooterBrand() {
  const { t, ready } = useTranslation("footer");

  const getLogo = useCallback(
    (type: "dark" | "light") => (
      <Link href="/">
        <a
          className={`mb-4 items-center sm:mb-0
            ${type === "dark" ? "flex dark:hidden" : "hidden dark:flex"}
          `}
        >
          <Image
            height={100}
            width={100}
            src={type === "dark" ? nextLogoDark : nextLogoLight}
            alt="Nextjs logo"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white mx-3">
            {ready ? t("footer-brand-text") : ""}
          </span>
        </a>
      </Link>
    ),
    [ready, t]
  );

  return (
    <>
      {getLogo("light")}
      {getLogo("dark")}
    </>
  );
}
