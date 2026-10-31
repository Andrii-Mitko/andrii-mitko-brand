import { useCallback, useEffect, useState } from "react";

const DESKTOP_QUERY = "(min-width: 768px)";

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    if (!isOpen) return;

    // Блокуємо html, а не body: через overflow-x на html body не передає overflow у viewport
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    const mediaQuery = window.matchMedia(DESKTOP_QUERY);

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    const handleBreakpointChange = (event: MediaQueryListEvent) => {
      if (event.matches) close();
    };

    document.addEventListener("keydown", handleEscape);
    mediaQuery.addEventListener("change", handleBreakpointChange);
    root.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      mediaQuery.removeEventListener("change", handleBreakpointChange);
      root.style.overflow = previousOverflow;
    };
  }, [isOpen, close]);

  return { isOpen, open, close, toggle };
}
