import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Logo from "../ui/Logo";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Why us", path: "/why-us" },
  { label: "Industries", path: "/industries" },
  { label: "About", path: "/about" },
  { label: "Partnerships", path: "/partnerships" },
  { label: "Blog", path: "/blog" },
];

const Header = ({ className, ...props }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClick = () => {
    navigate("/contact");
    // Optional: smooth scroll to top when navigating
    window.scrollTo(0, 0);
  };

  return (
    <>
      <header
        className={twMerge(
          "w-full bg-header-background border-b border-border-light shadow-[0px_4px_4px_#00000019] px-4 sm:px-6 py-6 relative z-50",
          className
        )}
        {...props}
      >
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex flex-row items-center justify-between">
            <Link to="/">
            <Logo
              src="/images/image_logo.png"
              width="156px"
              height="50px"
              className="flex-shrink-0"
            />
            </Link>
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex flex-row gap-[60px] items-center">
              {menuItems.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className={twMerge(
                    "text-base leading-sm transition-colors duration-200 rounded",
                    isActive(item.path)
                      ? "font-bold text-primary-background"
                      : "font-medium text-text-primary hover:text-primary-background"
                  )}
                  style={{ fontFamily: "Raleway" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button
                onClick={handleClick}
                text={
                  <div className="flex items-center gap-2">
                    <img
                      src="/images/img_phone.png"
                      alt="Phone"
                      className="w-5 sm:w-6 h-5 sm:h-6"
                    />
                    <span>Book Discovery Call</span>
                  </div>
                }
                text_font_size="18"
                text_font_family="Raleway"
                text_font_weight="500"
                text_line_height="24px"
                text_text_align="center"
                text_color="#ffffff"
                fill_background_color="#49ade8"
                border_border="1 solid #49ade8"
                border_border_radius="22px"
                effect_box_shadow="0px 1px 2px #0a0c120c"
                className="px-5 py-2"
              />
            </div>

            {/* Mobile Hamburger */}
            <button
              className="block lg:hidden p-2"
              aria-label="Open menu"
              onClick={toggleMenu}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile dropdown menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-6 bg-header-background rounded-lg shadow-lg p-6 animate-slideDown">
              <nav className="flex flex-col gap-8">
                {menuItems.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)} // close menu
                    className={twMerge(
                      "text-lg text-left leading-sm transition duration-200 rounded",
                      isActive(item.path)
                        ? "font-bold text-primary-background"
                        : "font-medium text-text-primary"
                    )}
                    style={{ fontFamily: "Raleway" }}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="mt-6">
                <Button
                  onClick={handleClick}
                  text={
                    <div className="flex items-center gap-2 justify-center">
                      <img
                        src="/images/img_phone.png"
                        alt="Phone"
                        className="w-5 h-5"
                      />
                      <span>Book Discovery Call</span>
                    </div>
                  }
                  text_font_size="16"
                  text_font_family="Raleway"
                  text_font_weight="500"
                  text_line_height="19px"
                  text_text_align="center"
                  text_color="#ffffff"
                  fill_background_color="#49ade8"
                  border_border="1 solid #49ade8"
                  border_border_radius="22px"
                  effect_box_shadow="0px 1px 2px #0a0c120c"
                  className="w-full py-3"
                />
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-6 right-6 
            bg-primary-background text-white 
            w-12 h-12 rounded-full 
            shadow-lg 
            flex items-center justify-center 
            transition-all duration-300 
            hover:scale-110 hover:bg-opacity-90
            z-50
          "
        >
          ↑
        </button>
      )}
    </>
  );
};

export default Header;
