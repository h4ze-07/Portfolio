import { FloatingNav } from "./ui/floating-navbar"
import { IoMdPerson } from "react-icons/io";
import { ImBriefcase } from "react-icons/im";
import { RiMessage2Fill } from "react-icons/ri";

const navItems = [
    {
        name: 'About',
        link: '#about',
        icon: <IoMdPerson className="navIcon" />
    },
    {
        name: 'Projects',
        link: '#projects',
        icon: <ImBriefcase className="navIcon" />
    },
    {
        name: 'Contact',
        link: '#contact',
        icon: <RiMessage2Fill className="navIcon" />
    },
]



const NavBar = () => {
  return (
    <FloatingNav navItems={navItems} />
  )
}

export default NavBar