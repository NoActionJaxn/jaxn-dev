import classNames from "classnames";

interface LogoProps {
  className?: string;
}

export function Logo({className}: LogoProps) {
  return (
    <div className="w-min h-min p-2">
      <span className={classNames(className, "text-nowrap text-sm pointer-events-none")}>jaxn.dev █</span>
    </div>
  );
}
