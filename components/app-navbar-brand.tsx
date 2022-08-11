import { Navbar } from "flowbite-react";
import Lottie, {
  LottieComponentProps,
  LottieRefCurrentProps,
} from "lottie-react";
import Link from "next/link";
import { memo, useCallback, useMemo, useRef } from "react";

import logoHome from "../public/lottie/logo-home.json";

export interface AppNavbarBrandProps {
  label: string;
}

const AppNavbarBrand: React.FC<AppNavbarBrandProps> = ({ label }) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const lottieOptions = useMemo(
    (): LottieComponentProps => ({
      animationData: logoHome,
      autoPlay: true,
      loop: false,
      className: "mr-3 h-6 sm:h-9",
      async: true,
      initialSegment: [0, 75],
    }),
    []
  );

  const handleAnimationHover = useCallback(
    (direction: 1 | -1) => {
      if (!lottieRef.current?.animationItem) {
        return;
      }
      lottieRef.current.animationItem.setDirection(direction);
      lottieRef.current.animationItem.play();
    },
    [lottieRef]
  );

  return (
    <Link href="/" passHref>
      <Navbar.Brand
        onMouseEnter={() => handleAnimationHover(-1)}
        onMouseLeave={() => handleAnimationHover(1)}
        href="/"
      >
        <Lottie {...lottieOptions} lottieRef={lottieRef} />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          {label}
        </span>
      </Navbar.Brand>
    </Link>
  );
};

export default memo(AppNavbarBrand);
