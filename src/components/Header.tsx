import classNames from "classnames";
import { NAVIGATION } from "../constants/navigation";
import { NETWORKS } from "../constants/temp/networks";
import { Logo } from "./Logo";
import { useCurrentPath } from "../hooks/useCurrentPath";

const HEADER_ITEM_HEIGHT = 'h-10';

export function Header() {

  const path = useCurrentPath();

  return (
    <header className="flex flex-row justify-between items-center bg-zinc-900 rounded-full p-2 min-w-md drop-shadow-lg">
      <div className={classNames("flex items-center justify-center px-4", HEADER_ITEM_HEIGHT)}>
        <Logo />
      </div>

      <nav className={classNames("bg-zinc-800 rounded-full inset-shadow", HEADER_ITEM_HEIGHT)}>
        <ul className="space-x-1">
          {Object.keys(NAVIGATION).map((key) => (
            <li key={key} className="inline-block">
              <a href={NAVIGATION[key].url} className={classNames("flex items-center justify-center rounded-full text-sm px-4 bg-transparent hover:bg-zinc-700", HEADER_ITEM_HEIGHT, { "bg-zinc-700": path === NAVIGATION[key].url })}>{NAVIGATION[key].label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <nav>
        <ul className="space-x-2">
          {Object.keys(NETWORKS).map((key) => (
            <li key={key} className="inline-block">
              <a href={NETWORKS[key].url} title={NETWORKS[key].label} className="flex items-center justify-center size-10 bg-zinc-50 text-zinc-900 hover:bg-yellow-500 text-xl rounded-full">
                <i className={`fa-brands fa-${NETWORKS[key].icon}`}></i>
                <span className="sr-only">{NETWORKS[key].label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};