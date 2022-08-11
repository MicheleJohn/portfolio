import { Footer } from "flowbite-react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useMemo } from "react";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
import AppFooterBrand from "./app-footer-brand";

export default function AppFooter() {
  const { ready, t } = useTranslation("footer");

  const footer = useMemo(
    () => ({
      lists: [
        {
          title: t("about.title"),
          list: [
            { href: "#", text: ready ? t("about.flowbite") : "" },
            { href: "#", text: ready ? t("about.tailwindcss") : "" },
          ],
        },
        {
          title: t("follow-me.title"),
          list: [
            { href: "#", text: ready ? t("follow-me.github") : "" },
            { href: "#", text: ready ? t("follow-me.discord") : "" },
          ],
        },
        {
          title: t("legal.title"),
          list: [
            { href: "#", text: ready ? t("legal.policy") : "" },
            { href: "#", text: ready ? t("legal.terms-conditions") : "" },
          ],
        },
      ],
      icons: [
        {
          href: "https://www.facebook.com/michele.ciardy.troisi/",
          ["aria-label"]: "Facebook",
          icon: BsFacebook,
        },
        {
          href: "https://www.instagram.com/michelejohntroisi/",
          ["aria-label"]: "Instagram",
          icon: BsInstagram,
        },
        {
          href: "https://github.com/MicheleJohn",
          ["aria-label"]: "Github",
          icon: BsGithub,
        },
      ],
    }),
    [ready, t]
  );

  return (
    <Footer container={true}>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <AppFooterBrand />
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            {footer.lists.map(({ title, list }) => (
              <div key={title}>
                <Footer.Title title={title} />
                <Footer.LinkGroup col={true}>
                  {list.map(({ href, text }, index) => (
                    <Link href={href} key={`${href}-${text}-${index}`}>
                      <a className="hover:underline">{text}</a>
                    </Link>
                  ))}
                </Footer.LinkGroup>
              </div>
            ))}
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright by="MicheleJohn" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            {footer.icons.map(({ "aria-label": ariaLabel, href, icon }) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={href}
                className="text-gray-500 dark:hover:text-white"
                key={href}
              >
                <Footer.Icon aria-label={ariaLabel} icon={icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Footer>
  );
}
