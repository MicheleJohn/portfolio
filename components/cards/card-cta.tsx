import classNames from "classnames";
import { Card } from "flowbite-react";
import Image, { ImageProps } from "next/image";
import Link, { LinkProps } from "next/link";
import { cloneElement, ComponentProps, memo, useMemo } from "react";

export interface CardCtaProps {
  wrapperProps?: ComponentProps<"div">;
  children?: React.ReactNode;
  key?: React.Key;
  title: string;
  text: string;
  buttons: {
    image?: ImageProps;
    icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    text: string;
    brandText?: string;
    link: {
      next: LinkProps;
      anchor?: ComponentProps<"a">;
    };
  }[];
}

const CardCta: React.FC<CardCtaProps> = ({
  wrapperProps,
  children,
  title,
  text,
  buttons,
}) => {
  const getCTA = useMemo(
    () =>
      buttons.map(({ icon, image, text, brandText, link }) => (
        <Link key={`${text}-${link.next.href}`} {...link.next}>
          <a
            {...link.anchor}
            className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
          >
            {image && (
              <Image
                {...image}
                alt={image.alt ?? "Icon"}
                height={28}
                width={28}
              />
            )}
            {icon &&
              cloneElement(icon, {
                ...icon.props,
                className: classNames(icon.props?.className, "mr-3 w-7 h-7"),
              })}
            <div className="text-left">
              <div className={brandText ? "mb-1 text-xs" : ""}>{text}</div>
              {brandText && (
                <div className="-mt-1 font-sans text-sm font-semibold">
                  {brandText}
                </div>
              )}
            </div>
          </a>
        </Link>
      )),
    [buttons]
  );

  return (
    <div
      {...wrapperProps}
      className={classNames(wrapperProps?.className, "card-cta")}
    >
      <Card>
        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
          {text}
        </p>
        {children}
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          {getCTA}
        </div>
      </Card>
    </div>
  );
};

export default memo(CardCta);
