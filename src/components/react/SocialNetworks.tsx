import classNames from "classnames";
import type { SocialNetworkNode } from "../../types/graphql";
import { motion } from "framer-motion";

interface SocialNetworksProps {
  networks: SocialNetworkNode[];
}

export function SocialNetworks({ networks }: SocialNetworksProps) {
  return (
    <nav className="flex justify-end items-end gap-2 font-unica-one-regular font-normal text-right p-2 space-x-4">
      <h6 className="text-xs pb-1.5">
        Follow me
      </h6>
      <ul className="space-x-6">
        {networks.map((network) => (
          <li key={network.id} className="inline-block">
            <motion.a
              className="relative"
              initial={{ zoom: 1, top: 0 }}
              whileHover={{ zoom: 1.1, top: -5 }}
              transition={{ duration: 0.1 }}
              href={network.connectionUrl}
              target="_blank"
            >
              <i className={classNames("fa-brands text-xl", network.fontAwesomeIcon)} />
              <span className="sr-only">{network.label}</span>
            </motion.a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
