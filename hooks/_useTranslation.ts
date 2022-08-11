import { useTranslation } from "next-i18next";
import { useMemo } from "react";
import { UseTranslationOptions } from "react-i18next";

interface UseTranslationProps {
  ns?: string;
  options?: UseTranslationOptions<any>;
}

const _useTranslation = (
  ns?: UseTranslationProps["ns"],
  options?: UseTranslationProps["options"]
) => {
  const translation = useTranslation(ns, options);

  return useMemo(() => {
    if (translation && translation.ready) {
      return translation;
    }
    return { ...translation, "0": () => "", t: () => "" };
  }, [translation]);
};
export default _useTranslation;
