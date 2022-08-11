import { Dropdown, Navbar } from "flowbite-react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import AppDarkThemeToggle from "./app-dark-theme-toggle";
import ChangeLanguage from "./change-language";
import AppNavbarBrand from "./app-navbar-brand";

import hiroAvatar from "../public/hiro-1.jpg";
import AppAvatar from "./app-avatar";

export interface NavbarProps {}

export default function AppHeader({}: NavbarProps) {
  const { t, ready } = useTranslation("header");

  return (
    <header className="sticky top-0 w-full">
      <Navbar fluid={true}>
        <AppNavbarBrand label={ready ? t("navbar-brand-text") : ""} />
        <div className="flex items-center md:order-2 relative">
          <AppDarkThemeToggle className="mr-2 md:mr-4 h-min" />
          <ChangeLanguage className="change-language--header" />
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <AppAvatar
                src={hiroAvatar}
                alt="Hiro Avatar"
                height={50}
                width={50}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Hiro Troisi</span>
              <span className="block truncate text-sm font-medium">
                hiro@email.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link href="/" passHref>
            <Navbar.Link active={true}>
              {ready ? t("navbar-links.home") : ""}
            </Navbar.Link>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
