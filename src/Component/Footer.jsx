import { Link } from "react-router";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">CodeNdRock</h2>
          <p className="mt-3 text-sm">
            Practice coding, compete with others, and become a better developer.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/problems"
                className="hover:text-yellow-400 transition"
              >
                Problems
              </Link>
            </li>
            <li>
              <Link
                to="/leaderboard"
                className="hover:text-yellow-400 transition"
              >
                Leaderboard
              </Link>
            </li>
            <li>
              <Link to="/profile" className="hover:text-yellow-400 transition">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-yellow-400 transition">
                Register
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <Twitter size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} CodeNdRock. All rights reserved.
      </div>
    </footer>
  );
}
