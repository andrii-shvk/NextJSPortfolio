import * as ICONS from "./index";
import { useMediaQuery } from "react-responsive";

interface IconsListProps {
  isMenuOpen?: boolean;
}

const IconsList = (props: IconsListProps) => {
  const { isMenuOpen } = props;
  if (!ICONS) return null;

  const iconsNames = Object.keys(ICONS) as Array<keyof typeof ICONS>;
  const isLargeScreen = useMediaQuery({ query: "(max-width: 900px)" });

  return (
    <div className="flex gap-[30px] max-xl:gap-6 max-lg:gap-5">
      {iconsNames.map((iconName, i) => {
        const Icon = ICONS[iconName];
        return (
          <Icon
            key={i}
            width={isLargeScreen ? 38 : 48}
            height={isLargeScreen ? 38 : 48}
            className={`h-12 w-12 max-lg:h-[38px] max-lg:w-[38px] dark:text-text-dark ${isMenuOpen && "dark:text-text-light"}`}
          />
        );
      })}
    </div>
  );
};

export { IconsList };
