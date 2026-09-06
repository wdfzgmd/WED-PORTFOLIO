"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "leadership", label: "Leadership" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState("about");
  const [underline, setUnderline] = useState({ left: 0, width: 0 });
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = links.map((link) => document.getElementById(link.id)).filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const activeLink = linkRefs.current[activeId];
    const container = containerRef.current;
    if (activeLink && container) {
      const linkRect = activeLink.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setUnderline({ left: linkRect.left - containerRect.left, width: linkRect.width });
    }
  }, [activeId]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#FFF8EC] border-b border-[#f0e0c0] z-50">
      <div className="max-w-5xl mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Wed Alghamdi logo" width={64} height={64} />
          <span className="flex items-baseline gap-1">
            <span className="font-serif font-bold text-xl text-[#D4537E]">Wed</span>
            <span style={{ fontFamily: "'Dancing Script', cursive" }} className="text-2xl text-[#412402]">Alghamdi</span>
          </span>
        </a>
        <div ref={containerRef} className="relative flex gap-6 text-sm text-[#8a6f4e]">
          {links.map((link) => (
            <a key={link.id} href={`#${link.id}`} ref={(el) => { linkRefs.current[link.id] = el; }} className={`pb-1 transition-colors ${activeId === link.id ? "text-[#D4537E]" : "hover:text-[#D4537E]"}`}>
              {link.label}
            </a>
          ))}
          <span className="absolute -bottom-0.5 h-0.5 bg-[#D4537E] rounded-full transition-all duration-300 ease-out" style={{ left: underline.left, width: underline.width }} />
        </div>
      </div>
    </nav>
  );
}