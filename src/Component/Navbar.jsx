import { NavLink } from "react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/clerk-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { path: "/", name: "Home" },
    { path: "/problems", name: "Problems" },
    { path: "/leaderboard", name: "Leaderboard" },
    { path: "/profile", name: "Profile" }
  ];

  const user =useUser()
  console.log(user)

  const checkLogin = (
    <>
      <SignedOut>
        <SignInButton mode="modal">
          <button
            className="px-4 py-2 font-semibold rounded-lg transition cursor-pointer"
            style={{
              backgroundColor: "var(--primary-color)",
              color: "var(--primary-dark)",
            }}
          >
            Sign In
          </button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              avatarBox: "w-20 h-20 border-2 rounded-full",
              userButtonBox: "shadow-md",
            },
            variables: {
              colorPrimary: "var(--primary-color)",
              colorText: "white",
              colorBackground: "var(--primary-dark)",
            },
          }}
        />
      </SignedIn>
    </>
  );

  return (
    <nav className="bg-[var(--primary-dark)] text-white shadow-md">
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
                    ? "bg-[var(--primary-color)] text-[var(--primary-dark)]"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                  }`
                }
              >
                {route.name}
              </NavLink>
            ))}


            {checkLogin}
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
                  ? "bg-[var(--primary-color)] text-[var(--primary-dark)]"
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
