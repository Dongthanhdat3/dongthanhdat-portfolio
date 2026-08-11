"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { portfolio } from "@/content/portfolio.vi";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const pathname = usePathname();
  const routeActive = pathname.startsWith("/du-an/")
    ? "projects"
    : pathname.startsWith("/chung-chi/")
      ? "certificates"
      : "";
  const currentActive = active || routeActive;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  useEffect(() => {
    if (window.location.pathname === "/" && window.location.hash) {
      const id = window.location.hash.slice(1);
      const scrollToHash = () => document.getElementById(id)?.scrollIntoView({ block: "start" });
      requestAnimationFrame(() => requestAnimationFrame(scrollToHash));
    }

    const sections = portfolio.navigation
      .map((item) => document.getElementById(item.href.split("#")[1]))
      .filter((section): section is HTMLElement => Boolean(section));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-24% 0px -60%", threshold: [0.05, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navigate = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    const id = href.split("#")[1];
    if (window.location.pathname === "/" && id) {
      const target = document.getElementById(id);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
          block: "start",
        });
        window.history.replaceState(null, "", `#${id}`);
        setActive(id);
      }
    } else if (window.location.pathname !== "/") {
      event.preventDefault();
      window.location.assign(href);
    }
    setOpen(false);
  };

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-inner">
        <Link className="wordmark" href="/#home" aria-label="Về trang chủ" onClick={(event) => navigate(event, "/#home")}>
          <Image
            className="heyjo-header-mark"
            src="/brand/heyjo-mark-transparent.webp"
            alt="HEYJO"
            width={680}
            height={620}
            priority
          />
          <span className="wordmark-full">Đồng Thành Đạt</span>
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Đóng menu" : "Mở menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`primary-navigation${open ? " is-open" : ""}`}
          aria-label="Điều hướng chính"
        >
          {portfolio.navigation.map((item) => {
            const id = item.href.split("#")[1];
            return (
              <Link
                key={item.href}
                href={item.href}
                className={currentActive === id ? "is-active" : undefined}
                aria-current={currentActive === id ? "location" : undefined}
                onClick={(event) => navigate(event, item.href)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
