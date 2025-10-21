import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const isActive = (path: string) => location.pathname === path;

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
  };

  const businessLinks = [
    { title: t('nav.bioImmune'), href: "/global-business/bio-immune" },
    { title: t('nav.stemCells'), href: "/global-business/stem-cells" },
    { title: t('nav.elderlyCare'), href: "/global-business/elderly-care" },
    { title: t('nav.modernCommerce'), href: "/global-business/modern-commerce" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              GlobalHealth
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink
                      className={`px-4 py-2 rounded-md transition-colors ${
                        isActive("/")
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      {t('nav.home')}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink
                      className={`px-4 py-2 rounded-md transition-colors ${
                        isActive("/about")
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      {t('nav.about')}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/news">
                    <NavigationMenuLink
                      className={`px-4 py-2 rounded-md transition-colors ${
                        isActive("/news")
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      {t('nav.news')}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`${
                      location.pathname.startsWith("/global-business")
                        ? "bg-primary text-primary-foreground"
                        : ""
                    }`}
                  >
                    {t('nav.globalBusiness')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 bg-popover">
                      {businessLinks.map((link) => (
                        <li key={link.href}>
                          <Link to={link.href}>
                            <NavigationMenuLink
                              className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${
                                isActive(link.href) ? "bg-accent" : ""
                              }`}
                            >
                              <div className="text-sm font-medium leading-none">
                                {link.title}
                              </div>
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact">
                    <NavigationMenuLink
                      className={`px-4 py-2 rounded-md transition-colors ${
                        isActive("/contact")
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      {t('nav.contact')}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            {/* Language Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="ml-2"
              title={i18n.language === 'en' ? '切换到中文' : 'Switch to English'}
            >
              <Languages className="h-5 w-5" />
              <span className="ml-1 text-xs font-semibold">
                {i18n.language === 'en' ? 'EN' : '中'}
              </span>
            </Button>
          </div>

          {/* Mobile menu button and language toggle */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              title={i18n.language === 'en' ? '切换到中文' : 'Switch to English'}
            >
              <Languages className="h-5 w-5" />
              <span className="ml-1 text-xs font-semibold">
                {i18n.language === 'en' ? 'EN' : '中'}
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in">
            <Link
              to="/"
              className={`block px-4 py-2 rounded-md ${
                isActive("/")
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/about"
              className={`block px-4 py-2 rounded-md ${
                isActive("/about")
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {t('nav.about')}
            </Link>
            <Link
              to="/news"
              className={`block px-4 py-2 rounded-md ${
                isActive("/news")
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {t('nav.news')}
            </Link>
            <div className="space-y-1">
              <div className="px-4 py-2 font-semibold text-sm text-muted-foreground">
                {t('nav.globalBusiness')}
              </div>
              {businessLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`block px-8 py-2 rounded-md text-sm ${
                    isActive(link.href)
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <Link
              to="/contact"
              className={`block px-4 py-2 rounded-md ${
                isActive("/contact")
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {t('nav.contact')}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
