import Link from "next/link";
import { usePathname } from "next/navigation";
import {motion} from 'framer-motion'
const links = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/projects",
    name: "projects",
  },
  {
    path: "/contact",
    name: "contact",
  },
];
const Navbar = ({ containerStyle, linkStyles, underlineStyles }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyle}`}>
      {links.map((link) => (
        <Link
          key={link.path}
          className={`capitalize ${linkStyles}`}
          href={link.path}
        >
          {link.path === path && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId= 'underline'
              className={`${underlineStyles}`}
            />
          )}{" "}
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
