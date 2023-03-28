"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Popover from "@radix-ui/react-popover";
import { CrossIcon, MenuIcon } from "@components/Icons";
import { navigationLinks, socialLinks } from "@constants";
import { clsx } from "@utils";
import Logo from "public/static/images/logo.png";

export const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="border-b border-solid border-dark-700">
      <Popover.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <Popover.Anchor asChild>
          <div className="mx-auto flex max-w-6xl items-center justify-between p-4 md:py-8">
            <Link href="/" className="hover:opacity-70">
              <Image src={Logo} alt="App Logo" />
            </Link>

            <ul className="hidden gap-x-8 md:flex">
              {navigationLinks.map(({ href, label }, index) => (
                <li key={index}>
                  <Link
                    className={clsx(
                      "font-medium hover:opacity-70",
                      href !== "/" &&
                        pathname?.includes(href) &&
                        "text-pink-text"
                    )}
                    href={href}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="hidden gap-4 md:flex">
              {socialLinks.map(({ href, label, Icon }, index) => (
                <li key={index}>
                  <a
                    href={href}
                    className="hover:opacity-70"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>

            <Popover.Trigger
              className="md:hidden"
              aria-label={isMenuOpen ? "Close" : "Open"}
            >
              {isMenuOpen ? <CrossIcon /> : <MenuIcon />}
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className="w-screen border-b border-solid border-dark-700 bg-black py-6 px-4 md:hidden">
                <ul className="space-y-8">
                  {navigationLinks.map(({ href, label }, index) => (
                    <li key={index}>
                      <Popover.Close asChild>
                        <Link
                          className={clsx(
                            "font-medium hover:opacity-70",
                            href !== "/" &&
                              pathname?.includes(href) &&
                              "text-pink-text"
                          )}
                          href={href}
                        >
                          {label}
                        </Link>
                      </Popover.Close>
                    </li>
                  ))}
                </ul>
              </Popover.Content>
            </Popover.Portal>
          </div>
        </Popover.Anchor>
      </Popover.Root>
    </nav>
  );
};