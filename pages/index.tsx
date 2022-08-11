import type { NextPage } from "next";
import { useMemo } from "react";
import CardCta, { CardCtaProps } from "../components/cards/card-cta";
import _useTranslation from "../hooks/_useTranslation";
import { SiStorybook, SiReact } from "react-icons/si";

const Home: NextPage = () => {
  const { t } = _useTranslation("homepage");

  const cards = useMemo(
    (): CardCtaProps[] => [
      {
        title: t("cards.project-sb.title"),
        text: t("cards.project-sb.text"),
        buttons: [
          {
            icon: <SiStorybook />,
            text: t("cards.project-sb.buttons.project-sb.text"),
            brandText: t("cards.project-sb.buttons.project-sb.brand-text"),
            link: {
              next: { href: "/storybook-static/index.html", locale: false },
            },
          },
          {
            icon: <SiStorybook />,
            text: t("cards.project-sb.buttons.sb.text"),
            brandText: t("cards.project-sb.buttons.sb.brand-text"),
            link: {
              next: { href: "https://storybook.js.org/" },
              anchor: { target: "_blank", rel: "noopener noreferrer" },
            },
          },
        ],
      },
      {
        title: t("cards.flowbite-sb.title"),
        text: t("cards.flowbite-sb.text"),
        buttons: [
          {
            icon: <SiStorybook />,
            text: t("cards.flowbite-sb.buttons.flowbite-sb.text"),
            brandText: t("cards.flowbite-sb.buttons.flowbite-sb.brand-text"),
            link: {
              next: { href: "https://flowbite-react.com/storybook" },
              anchor: { target: "_blank", rel: "noopener noreferrer" },
            },
          },
          {
            icon: <SiReact />,
            text: t("cards.flowbite-sb.buttons.flowbite.text"),
            brandText: t("cards.flowbite-sb.buttons.flowbite.brand-text"),
            link: {
              next: { href: "https://flowbite-react.com/" },
              anchor: { target: "_blank", rel: "noopener noreferrer" },
            },
          },
        ],
      },
    ],
    [t]
  );

  const getCards = useMemo(
    () =>
      cards.map((card, index) => <CardCta key={index.toString()} {...card} />),
    [cards]
  );

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center gap-6 my-6 px-3">
        {getCards}
      </div>
    </div>
  );
};

export default Home;
