const ToggleTheme = (props: ReactTagProps<"svg">) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20.000000"
        height="20.000000"
        viewBox="0 0 20 20"
        fill="currentColor"
        {...props}
      >
        <path
          id="path"
          d="M10 20C15.52 20 20 15.52 20 10C20 4.47 15.52 0 10 0C4.47 0 0 4.47 0 10C0 15.52 4.47 20 10 20ZM10 18.5L10 1.5C12.25 1.5 14.41 2.39 16.01 3.98C17.6 5.58 18.5 7.74 18.5 10C18.5 12.25 17.6 14.41 16.01 16.01C14.41 17.6 12.25 18.5 10 18.5Z"
          fill="currentColor"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
      </svg>
    );
};
  
export { ToggleTheme };