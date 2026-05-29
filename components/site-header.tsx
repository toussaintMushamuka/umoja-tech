"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, Home, Info, Briefcase, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function SiteHeader() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const routes = [
    {
      href: "/",
      label: "Accueil",
      active: pathname === "/",
      icon: Home,
    },
    {
      href: "/about",
      label: "À propos",
      active: pathname === "/about",
      icon: Info,
    },
    {
      href: "/services",
      label: "Services",
      active: pathname === "/services" || pathname.startsWith("/services/"),
      icon: Briefcase,
    },
    {
      href: "/contact",
      label: "Contact",
      active: pathname === "/contact",
      icon: Mail,
    },
  ];

  return (
    <header className="fixed top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-2">
          {/* MOBILE MENU */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="w-full max-w-sm p-0 bg-white dark:bg-slate-950 border-0"
            >
              {/* ACCESSIBILITY TITLE */}
              <SheetTitle className="sr-only">Menu principal</SheetTitle>

              {/* HEADER */}
              <div className="border-b border-gray-200 dark:border-slate-700 px-6 py-4 flex items-center justify-between bg-white dark:bg-slate-950">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                  Umoja Tech
                </h2>

                <div className="flex items-center gap-2">
                  {mounted && (
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Toggle Theme"
                      onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                      }
                      className="h-9 w-9 text-gray-600 hover:text-gray-900 dark:text-slate-400 dark:hover:text-white"
                    ></Button>
                  )}
                </div>
              </div>

              {/* NAVIGATION */}
              <nav className="flex flex-col gap-2 px-6 py-8 bg-white dark:bg-slate-950">
                {routes.map((route) => {
                  const IconComponent = route.icon;

                  return (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-lg text-base font-semibold transition-colors",
                        route.active
                          ? "text-white bg-primary dark:bg-slate-800"
                          : "text-gray-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800/50",
                      )}
                    >
                      <IconComponent className="h-5 w-5" />

                      <span>{route.label.toUpperCase()}</span>
                    </Link>
                  );
                })}
              </nav>

              {/* CONTACT BUTTON */}
              <div className="absolute bottom-0 left-0 right-0 px-6 py-6 border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-950">
                <Link href="/contact" className="w-full">
                  <Button className="w-full h-11 rounded-full bg-primary hover:bg-primary/90 dark:text-slate-900 text-white font-semibold dark:bg-white dark:hover:bg-slate-200">
                    <Mail className="h-4 w-4 mr-2" />
                    Contactez-nous
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/img/logo.png"
              width={100}
              height={100}
              alt="Umoja Tech"
            />
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                route.active ? "text-primary" : "text-muted-foreground",
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-2">
          {/* THEME BUTTON */}
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className="mr-2"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

              <span className="sr-only">Toggle theme</span>
            </Button>
          )}

          {/* CONTACT BUTTON */}
          <Link href="/contact">
            <Button className="hidden sm:inline-flex">Demander un devis</Button>

            <Button className="sm:hidden" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
