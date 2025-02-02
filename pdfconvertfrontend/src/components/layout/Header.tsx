import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react"

export default function Header() {
  return (
    <Navbar maxWidth="xl">
      <NavbarBrand>
        <h1 className="font-bold text-xl">PDF转换器</h1>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="#features" color="foreground">
            功能特点
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href="#demo" color="primary" variant="flat">
            开始使用
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}