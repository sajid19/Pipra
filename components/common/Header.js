import Link from "next/link";
import { TitleLogo } from "./Title";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <Link href="/">
              <TitleLogo title="creative" caption="7" className="logomin" />
            </Link>
          </div>
          <nav
            className={open ? "openMenu" : "closeMenu"}
            onClick={() => setOpen(null)}
          >
            <Link
              href="/"
              className={activeLink == "/" ? "activeLink" : "unactive"}
            >
              Home
            </Link>
            <Link
              href="/agency"
              className={activeLink == "/agency" ? "activeLink" : "unactive"}
            >
              Agency
            </Link>
            <Link
              href="/team"
              className={activeLink == "/team" ? "activeLink" : "unactive"}
            >
              Team
            </Link>
            <Link
              href="/services"
              className={activeLink == "/services" ? "activeLink" : "unactive"}
            >
              Services
            </Link>
            <Link
              href="/showcase"
              className={activeLink == "/showcase" ? "activeLink" : "unactive"}
            >
              Showcase
            </Link>
            <Link
              href="/blogs"
              className={activeLink == "/blogs" ? "activeLink" : "unactive"}
              // style={{ color: "black" }}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={activeLink == "/contact" ? "activeLink" : "unactive"}
            >
              Contact
            </Link>
            <button className="button-primary">book a consultation</button>
          </nav>
          <button onClick={() => setOpen(!open)}>
            {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
