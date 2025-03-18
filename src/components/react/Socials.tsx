import type { SocialNetworkNode } from "../../types/graphql";

export interface SocialsProps {
  networks?: {
    node: SocialNetworkNode;
  }[];
};

function Socials({ networks = [] }: SocialsProps) {
  return (
    <nav>
      <ul className="block space-x-4">
        {
          networks.map((networks) => (
            <li key={networks.node.id} className="inline-block">
              <a href={networks.node.connectionUrl}>
                <i className={networks.node.fontAwesomeIcon}></i>
                <span className="sr-only">{networks.node.label}</span>
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}

export default Socials;
