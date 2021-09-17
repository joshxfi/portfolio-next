interface NavbarProps {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MenuProps {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  navLink: (i: string, j: string) => JSX.Element;
}

interface ProjectProps {
  img: StaticImageData;
  title: string;
  desc: string;
  url: string;
}

interface FooterLinksProps {
  href: string;
  target?: string;
  Icon: Icon;
}