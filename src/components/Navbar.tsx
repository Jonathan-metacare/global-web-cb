import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
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

  const isActive = (path: string) => location.pathname === path;

  const businessLinks = [
    { title: "Bio-Immune", href: "/global-business/bio-immune" },
    { title: "Stem Cells", href: "/global-business/stem-cells" },
    { title: "Elderly Care", href: "/global-business/elderly-care" },
    { title: "Modern Commerce", href: "/global-business/modern-commerce" },
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
                      HOME
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
                      About us
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
                      News
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
                    Global Business
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
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
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
              HOME
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
              About us
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
              News
            </Link>
            <div className="space-y-1">
              <div className="px-4 py-2 font-semibold text-sm text-muted-foreground">
                Global Business
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
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
