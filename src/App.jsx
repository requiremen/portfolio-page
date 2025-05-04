import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-6">
        <div>
          <h1 className="text-2xl font-bold">Akshat Rastogi</h1>
          <p className="text-sm text-gray-400">Creative Developer</p>
        </div>
        <nav className="flex gap-8 items-center">
          <a href="https://linkedin.com" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="/resume.pdf" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">Resume ↗</a>
        </nav>
      </header>

      {/* Navigation */}
      <div className="flex justify-center mt-4">
        <div className="bg-gray-800 rounded-full p-1 flex gap-2">
          <Link to="/" className="px-6 py-2 rounded-full bg-white text-black font-semibold shadow">Work</Link>
          <Link to="/info" className="px-6 py-2 rounded-full text-white hover:bg-gray-700">Info</Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-1">
        <div className="mt-20 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl shadow-2xl p-12 w-full max-w-3xl text-center backdrop-blur-md">
          <h2 className="text-5xl font-extrabold mb-6">
            I code, innovate,<br />& build <span className="italic text-gray-400">experiences.</span>
          </h2>
          <p className="text-lg font-semibold mb-2">Engineering student at NIT DELHI</p>
          <p className="text-gray-400">Exploring the magic of code...</p>
        </div>
        <div className="mt-16 animate-bounce">
          <span className="text-3xl text-gray-400">↓</span>
        </div>
      </main>

      {/* Nike Project Showcase */}
      <section className="flex flex-col md:flex-row items-center justify-center mt-24 mb-16 w-full max-w-5xl mx-auto bg-gradient-to-br from-black to-gray-900 rounded-2xl shadow-2xl p-10 gap-10">
        {/* Text Content */}
        <div className="flex-1 text-left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="Nike Logo" className="h-10 mb-6" />
          <h2 className="text-4xl font-extrabold text-white mb-2">Nike</h2>
          <h3 className="text-3xl font-extrabold text-orange-500 mb-2">Air Max Plus</h3>
          <p className="uppercase text-white font-bold mb-2">Make the ground shake</p>
          <p className="text-gray-300 mb-6 max-w-md">Let the attitude have the edge in your Nike Air Max Plus, a Tuned Air experience that offers premium stability and unbelievable cushioning. Featuring the OG's wavy design lines, TPU accents, and airy mesh on the upper, it celebrates defiant style.</p>
          <div className="flex items-center gap-6 mb-4">
            <span className="text-2xl font-extrabold text-white">$249.99</span>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-full shadow-lg transition">PRE-ORDER NOW</button>
          </div>
        </div>
        {/* Shoe Image */}
        <div className="flex-1 flex justify-center items-center">
          <div className="bg-transparent rounded-lg p-0 flex items-center justify-center shadow-2xl">
            <img src="/nike.png" alt="Nike Air Max Plus" className="h-56 object-contain drop-shadow-2xl rounded-xl border border-gray-700 bg-black/40" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-gray-800 mt-24 pt-12 pb-8 bg-black text-gray-300">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-6 gap-10">
          {/* Navigation Columns */}
          <div className="flex flex-col md:flex-row gap-16 w-full">
            <div>
              <h4 className="font-bold mb-3 text-gray-400 uppercase tracking-widest text-xs">Main</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Work</a></li>
                <li><a href="#" className="hover:text-white">Info</a></li>
                <li><a href="#" className="hover:text-white">Projects</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-gray-400 uppercase tracking-widest text-xs">Contact</h4>
              <ul className="space-y-2">
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn ↗</a></li>
                <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white">Resume ↗</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Twitter ↗</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center mt-10 px-6 text-xs text-gray-500">
          <div>
            © 2025 Akshat Rastogi. All Rights Reserved.<br />
            <span className="text-gray-600">Made with love and chai xD</span>
          </div>
          <div className="mt-4 md:mt-0">
            Last updated on March 18, 2025 at 8:06 PM IST
          </div>
        </div>
      </footer>
    </div>
  );
} 