import classNames from "classnames";
import type { SocialNetworkNode } from "../../types/graphql";
import { motion } from "framer-motion";

interface SocialNetworksProps {
  networks: SocialNetworkNode[];
}

export function SocialNetworks({ networks }: SocialNetworksProps) {
  return (
    <nav className="flex justify-end items-end gap-2 font-unica-one-regular font-normal text-right p-2 space-x-4">
      <h6 className="relative bottom-1.5 text-xs">
        Follow me
      </h6>
      <ul className="space-x-6">
        {networks.map((network) => (
          <li key={network.id} className="inline-block">
            <a href={network.connectionUrl} target="_blank">
              <i className={classNames("fa-brands text-xl", network.fontAwesomeIcon)} />
              <span className="sr-only">{network.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
