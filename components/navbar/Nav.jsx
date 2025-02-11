import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Nav(){
    return (
        <>
        <Navbar shouldHideOnScroll maxWidth="xl" isBordered>
        <NavbarBrand>
          <Image src="/logo.png" alt="alt" width={160} height={160} />
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem className="lg:flex">
            <Link href="#">Features</Link>
          </NavbarItem>
          <NavbarItem className="lg:flex" isActive>
            <Link href="#">Experience It</Link>
          </NavbarItem>
          <NavbarItem className="lg:flex">
            <Link href="#">Buy now</Link>
          </NavbarItem>
          
        </NavbarContent>
      </Navbar></>
    )
}