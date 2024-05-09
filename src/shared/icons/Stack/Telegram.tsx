import Link from "next/link";

const Telegram = (props: ReactTagProps<"svg">) => {
  return (
    <Link
      target="_blank"
      href="https://t.me/supashv"
      className="transition-all delay-75 hover:opacity-80"
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="telegram (1) 1" clipPath="url(#clip0_122_1087)">
          <path
            id="Vector"
            d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
            fill="#039BE5"
          />
          <path
            id="Vector_2"
            d="M10.9815 23.48L34.1216 14.558C35.1956 14.17 36.1336 14.82 35.7856 16.444L35.7875 16.442L31.8475 35.004C31.5555 36.32 30.7736 36.64 29.6796 36.02L23.6796 31.598L20.7855 34.386C20.4655 34.706 20.1955 34.976 19.5755 34.976L20.0015 28.87L31.1215 18.824C31.6056 18.398 31.0135 18.158 30.3755 18.582L16.6336 27.234L10.7095 25.386C9.42355 24.978 9.39555 24.1 10.9815 23.48Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_122_1087">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
};

export { Telegram };
