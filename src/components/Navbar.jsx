import Logo from "../CompanyLogo";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] =useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

 useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


   useEffect(() => {
    const sections = ["home", "about", "contact"]
      .map(id => document.getElementById(id))
      .filter(Boolean);

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }
    );
    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className={`sticky top-0 z-50 bg-gray-900 text-white transition-shadow ${scrolled ? "shadow-md" : ""}`}
      aria-label="Primary">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <div className="w-[100px] h-[100px]">
                 <Logo className="w-[100px] h-[100px]" />
                </div>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {["home","about","contact"].map(id => (
            <li key={id}>
              <button
                onClick={() => go(id)}
                className={`hover:text-red-400 transition ${
                  active === id ? "text-red-400" : "text-white/90"
                }`}
              >
                {id[0].toUpperCase()+id.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        {/* mobile toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded hover:bg-white/10"
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Toggle menu</span>
          ☰
        </button>
      </div>

      {/* mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden ${open ? "block" : "hidden"} border-t border-white/10`}
      >
        <ul className="px-4 py-3 space-y-2">
          {["home","about","contact"].map(id => (
            <li key={id}>
              <button
                onClick={() => go(id)}
                className={`block w-full text-left py-2 ${
                  active === id ? "text-red-400" : "text-white/90"
                }`}
              >
                {id[0].toUpperCase()+id.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}