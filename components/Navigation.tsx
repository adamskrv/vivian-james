"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-[#EEEEEB] md:bg-[#696865] md:backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center ">
                <span
                  className="text-black text-2xl md:text-white"
                  style={{ fontFamily: "serif" }}
                >
                  V&J
                </span>
              </div>
              <span className="text-black md:text-white text-xs tracking-wider">
                February 7th, 2026
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              <Link
                href="/"
                className={`text-white text-sm ${
                  pathname === "/" && "font-bold"
                } tracking-wider hover:text-white/70 transition-colors underline decoration-1 underline-offset-8`}
              >
                HOME
              </Link>
              <Link
                href="/Ourstory"
                className={`text-white text-sm ${
                  pathname === "/Ourstory" && "font-bold"
                } tracking-wider hover:text-white/70 transition-colors underline decoration-1 underline-offset-8`}
              >
                OUR STORY
              </Link>
              <Link
                href="/Details"
                className={`text-white text-sm ${
                  pathname === "/Details" && "font-bold"
                } tracking-wider hover:text-white/70 transition-colors underline decoration-1 underline-offset-8`}
              >
                DETAILS
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-black text-sm tracking-wider"
            >
              {isMenuOpen ? "CLOSE" : "MENU"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed h-[70vh] bg-[#EEEEEB] rounded-b-lg inset-0 z-40 md:hidden pt-24 px-6">
          <nav className="flex flex-col items-center justify-center h-[70vh] space-y-12 pb-32">
            <Link
              href="/"
              onClick={closeMenu}
              className="text-black text-2xl tracking-wide underline decoration-1 underline-offset-8"
              style={{ fontFamily: "serif" }}
            >
              HOME
            </Link>
            <Link
              href="/Ourstory"
              onClick={closeMenu}
              className="text-black text-2xl tracking-wide underline decoration-1 underline-offset-8"
              style={{ fontFamily: "serif" }}
            >
              OUR STORY
            </Link>
            <Link
              href="/Details"
              onClick={closeMenu}
              className="text-black text-2xl tracking-wide underline decoration-1 underline-offset-8"
              style={{ fontFamily: "serif" }}
            >
              DETAILS
            </Link>

            {/* <button
              onClick={closeMenu}
              className="bg-[#7d7662] text-white px-24 py-4 rounded-full tracking-wider mt-8"
            >
              RSVP
            </button> */}
          </nav>
        </div>
      )}
    </>
  );
}
