import Image from "next/image";
import logo from "@/public/logo.svg";
import { useAuth } from "@/context/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Header = () => {
  const [auth, setAuth] = useAuth();
  const router = useRouter();
  return (
    <>
      <div className="Hnavigation-bar">
        <ul>
          <li>
            <Link href="/">
              <Image src={logo} className="logo" />
            </Link>
          </li>
          <li>
            <Link href="/participate">PARTICIPATE</Link>
          </li>
          <li>
            <Link href="/discover">DISCOVER</Link>
          </li>
          {auth?.user ? (
            <>
              <li>
                <Link href="/profile">PROFILE</Link>
              </li>
              <li className="navigation-button">
                <button
                  onClick={() => {
                    router.push("/upload");
                  }}
                >
                  UPLOAD
                </button>
              </li>
            </>
          ) : (
            <li className="navigation-button">
              <button
                onClick={() => {
                  router.push("/signup");
                }}
              >
                JOIN US
              </button>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Header;
