import * as ICONS from "./index";

const IconsList = () => {
  if (!ICONS) return null;
  const iconsNames = Object.keys(ICONS) as Array<keyof typeof ICONS>;

  return (
    <div className="flex gap-[30px] max-xl:gap-6 max-lg:gap-5">
      {iconsNames.map((iconName, i) => {
        const Icon = ICONS[iconName];
        return (
          <Icon
            key={i}
            width={48}
            height={48}
            className="h-12 w-12 max-lg:h-[38px] max-lg:w-[38px] dark:text-text-dark"
          />
        );
      })}
    </div>
  );
};

export { IconsList };
