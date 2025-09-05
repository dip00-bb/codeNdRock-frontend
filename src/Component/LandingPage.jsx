import { Link } from "react-router";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[var(--primary-dark)] text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Master Coding with <span className="text-[var(--primary-color)]">CodeNdRock</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
          Practice coding problems, compete with others, and sharpen your
          programming skills with real-time feedback and rankings.
        </p>
        <div className="flex space-x-4">
          <Link
            to="/problems"
            className="px-6 py-3 bg-[var(--primary-color)] text-[var(--primary-dark)] font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition"
          >
            Start Solving
          </Link>
          <Link
            to="/leaderboard"
            className="px-6 py-3 border border-gray-400 font-semibold rounded-lg hover:bg-gray-800 transition"
          >
            View Leaderboard
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose CodeNdRock?
        </h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="p-6 bg-[var(--primary-dark)] rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3">📝 Problem Sets</h3>
            <p className="text-gray-300">
              Solve beginner to advanced coding challenges across multiple
              programming languages.
            </p>
          </div>
          <div className="p-6 bg-[var(--primary-dark)] rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3">⚡ Real-time Judge</h3>
            <p className="text-gray-300">
              Submit code and get instant feedback powered by the Judge0 API.
            </p>
          </div>
          <div className="p-6 bg-[var(--primary-dark)] rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3">🏆 Leaderboards</h3>
            <p className="text-gray-300">
              Compete with friends and climb the ranks based on performance and
              accuracy.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Level Up Your Skills?
        </h2>
        <p className="text-gray-300 mb-8">
          Join CodeNdRock today and start solving problems like a pro!
        </p>
        <Link
          to="/register"
          className="px-8 py-4 bg-[var(--primary-color)] text-[var(--primary-dark)] font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
}
