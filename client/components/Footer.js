import Image from "next/image";
import logo from "@/public/logo.svg";
import twitter from "@/public/twitter.svg";
import facebook from "@/public/facebook.svg";
import linkedin from "@/public/linkedin.svg";
import instagram from "@/public/instagram.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-bar">
      <ul>
        <li>
          <Link href="/">
            <Image src={logo} className="logo" />
          </Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/discover">discover</Link>
        </li>
        <li>
          <Link href="mailto:ecstasyteam9@gmail.com">
            ecstasyteam9@gmail.com
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src={instagram} className="f-instagram" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src={twitter} className="f-twitter" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src={linkedin} className="f-linkedin" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src={facebook} className="f-facebook" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
