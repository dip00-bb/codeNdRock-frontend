import { NavLink } from "react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { path: "/", name: "Home" },
    { path: "/problems", name: "Problems" },
    { path: "/leaderboard", name: "Leaderboard" },
    { path: "/profile", name: "Profile" }
  ];


  const checkLogin = <> <SignedOut> <SignInButton /> </SignedOut><SignedIn>
    <UserButton /></SignedIn> </>

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-bold">CodeNdRock</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {routes.map((route) => (
              <NavLink
                key={route.path}
                to={route.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition ${isActive
                    ? "bg-yellow-500 text-gray-900"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                  }`
                }
              >
                {route.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-gray-800">
          {routes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition ${isActive
                  ? "bg-yellow-500 text-gray-900"
                  : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`
              }
            >
              {route.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
