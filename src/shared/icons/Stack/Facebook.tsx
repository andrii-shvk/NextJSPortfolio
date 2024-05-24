import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import Link from "next/link";

const Facebook = (props: ReactTagProps<"svg">) => {
  const {width, height} = props;
  const isLargeScreen = useMediaQuery(900);

  return (
    <Link
      target="_blank"
      href="https://www.facebook.com/profile.php?id=100087421112945&mibextid=nW3QTL"
      className="transition-all delay-75 hover:opacity-80"
    >
      <svg
        width={isLargeScreen ? 38 : width}
        height={isLargeScreen ? 38 : height}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="facebook 1" clipPath="url(#clip0_122_1083)">
          <g id="Group">
            <path
              id="Vector"
              d="M23.9999 0C37.2555 0 48 10.746 48 24.0001C48 37.2557 37.2555 48 23.9999 48C10.7443 48 0 37.2555 0 24.0001C0 10.746 10.7445 0 23.9999 0Z"
              fill="#3B5998"
            />
            <path
              id="Vector_2"
              d="M26.9219 16.5224H30.0149V11.9534H26.379V11.9699C21.9734 12.1259 21.0705 14.6024 20.9909 17.2034H20.9819V19.485H17.9819V23.9594H20.9819V35.9533H25.5029V23.9594H29.2064L29.9218 19.485H25.5044V18.1065C25.5044 17.2275 26.0893 16.5224 26.9219 16.5224Z"
              fill="white"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_122_1083">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
};

export { Facebook };
