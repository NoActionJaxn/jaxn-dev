import { NETWORKS } from "../constants/temp/networks";

export function Footer() {
  return (
    <footer>
      <div>
        <h6>jaxn.dev</h6>
      </div>

      <nav>
        <ul>
          {Object.keys(NETWORKS).map((key) => (
            <li key={key}>
              <a href={NETWORKS[key].url} title={NETWORKS[key].label}>
                <i className={`fa-brands fa-${NETWORKS[key].icon}`}></i>
                <span className="sr-only">{NETWORKS[key].label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};