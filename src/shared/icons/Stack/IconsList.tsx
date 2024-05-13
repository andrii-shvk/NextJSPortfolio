import * as ICONS from "./index";

const IconsList = () => {
  if (!ICONS) return null;

  const iconsNames = Object.keys(ICONS) as Array<keyof typeof ICONS>;

  return (
    <div className="flex gap-[30px]">
      {iconsNames.map((iconName, i) => {
        const Icon = ICONS[iconName];
        return (
          <Icon
            key={i}
            width={48}
            height={48}
            className="dark:text-text-dark"
          />
        );
      })}
    </div>
  );
};

export { IconsList };
