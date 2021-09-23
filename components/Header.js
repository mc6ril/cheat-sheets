import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>
                <FontAwesomeIcon icon={["fas", "code"]} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/html">
              <a>
                Aide HTML{" "}
                <FontAwesomeIcon icon={["fab", "html5"]} style={{ color: "#DC4A25" }} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/css">
              <a>
                Aide CSS{" "}
                <FontAwesomeIcon
                  icon={["fab", "css3-alt"]}
                  style={{ color: "#3495D0" }}
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/javascript">
              <a>
                Aide JavaScript{" "}
                <FontAwesomeIcon
                  icon={["fab", "js-square"]}
                  style={{ color: "#EFD81D" }}
                />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
