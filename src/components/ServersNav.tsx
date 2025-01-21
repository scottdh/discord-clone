import { Link, useLocation } from "react-router";

export function ServersNav() {
  const location = useLocation();

  return (
    <div className="space-y-2 overflow-y-scroll bg-gray-900 p-3">
      <Link to="/" className="group relative flex items-center">
        <div
          className={`${
            location.pathname === "/"
              ? // Indicator active state
                "h-10"
              : // Indicator inactive state
                "h-5 scale-0 bg-opacity-0 group-hover:scale-100 group-hover:bg-opacity-100"
            // Both states
          } absolute -left-3 w-1 origin-left rounded-r bg-white transition-all duration-200`}
        ></div>
        <div className="group-active:translate-y-px">
          <a
            className={`${
              location.pathname === "/"
                ? // Server icon active state
                  "rounded-2xl bg-brand text-white"
                : // Server icon inactive state
                  "rounded-3xl bg-gray-700 text-gray-100 group-hover:rounded-2xl group-hover:bg-brand group-hover:text-white"
              // Both states
            } flex size-12 items-center justify-center transition-all duration-200`}
          >
            <DiscordIcon className="size-[30px]" />
          </a>
        </div>
      </Link>

      <Link to="/servers/1" className="group relative flex items-center">
        <div
          className={`${
            location.pathname === "/servers/1"
              ? // Active state
                "h-10"
              : // Inactive state
                "h-5 scale-0 bg-opacity-0 group-hover:scale-100 group-hover:bg-opacity-100"
          } absolute -left-3 w-1 origin-left rounded-r bg-white transition-all duration-200`}
        ></div>
        <div className="group-active:translate-y-px">
          <a
            className={`${
              location.pathname === "/servers/1"
                ? "rounded-2xl bg-green-500 text-white"
                : "rounded-3xl bg-gray-700 text-gray-100 group-hover:rounded-2xl group-hover:bg-green-500 group-hover:text-white"
            } flex size-12 items-center justify-center transition-all duration-200`}
          >
            S1
          </a>
        </div>
      </Link>
    </div>
  );
}

function DiscordIcon(props) {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M19.73 4.87a18.2 18.2 0 00-4.6-1.44c-.21.4-.4.8-.58 1.21-1.69-.25-3.4-.25-5.1 0-.18-.41-.37-.82-.59-1.2-1.6.27-3.14.75-4.6 1.43A19.04 19.04 0 00.96 17.7a18.43 18.43 0 005.63 2.87c.46-.62.86-1.28 1.2-1.98-.65-.25-1.29-.55-1.9-.92.17-.12.32-.24.47-.37 3.58 1.7 7.7 1.7 11.28 0l.46.37c-.6.36-1.25.67-1.9.92.35.7.75 1.35 1.2 1.98 2.03-.63 3.94-1.6 5.64-2.87.47-4.87-.78-9.09-3.3-12.83zM8.3 15.12c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.89 2.27-2 2.27zm7.4 0c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.88 2.27-2 2.27z"
      />
    </svg>
  );
}
