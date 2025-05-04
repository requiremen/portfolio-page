import React from "react";

export default function Info() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-6">
        <div>
          <h1 className="text-2xl font-bold">Akshat Rastogi</h1>
          <p className="text-sm text-gray-400">Creative Developer</p>
        </div>
        <nav className="flex gap-4 items-center">
          <a href="https://linkedin.com" className="text-gray-300 hover:text-white bg-[#23272f] px-2 py-1 rounded transition" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href="/resume.pdf" className="text-gray-300 hover:text-white bg-[#23272f] px-2 py-1 rounded transition" target="_blank" rel="noopener noreferrer">Resume ↗</a>
        </nav>
      </header>

      {/* Navigation */}
      <div className="flex justify-center mt-4">
        <div className="bg-gray-800 rounded-full p-1 flex gap-2">
          <a href="/" className="px-6 py-2 rounded-full text-white hover:bg-gray-700 transition">Work</a>
          <button className="px-6 py-2 rounded-full bg-white text-black font-semibold shadow">Info</button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center w-full px-4">
        <div className="mt-20 w-full max-w-4xl text-center">
          <div className="mb-2 text-left text-xs tracking-widest text-gray-400 font-semibold pl-2">• ABOUT ME</div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-white drop-shadow-[0_2px_16px_rgba(255,255,255,0.15)]">
            I'm passionate about building seamless<br />
            solutions that enhance <span className="italic text-gray-300/80" style={{textShadow:'0 2px 16px #fff2'}}>people's lives.</span>
          </h2>
          <p className="text-lg text-gray-300 mb-12">This is my story — with some flicks, enjoy!</p>
        </div>
        {/* About Sections */}
        <section className="w-full max-w-5xl mx-auto mt-16 mb-8 grid md:grid-cols-2 gap-8 px-4">
          <div className="text-left">
            <h3 className="text-xl font-semibold text-gray-200 mb-2">My background in Engineering.</h3>
            <p className="text-gray-400 mb-2">In June of 2027, I will be graduating with an ECE degree from NIT Delhi, but truth be told, ECE was never my first love.</p>
            <p className="text-gray-400">And as everyone knows, college hardly teaches you what you actually need.</p>
          </div>
          <div className="text-left md:text-right">
            <h3 className="text-xl font-semibold text-gray-200 mb-2">But tech? That's always been my thing.</h3>
            <p className="text-gray-400 mb-2">As a kid, I spent countless hours experimenting on my PC—breaking it, fixing it, and learning in the process. Coding felt like magic—just tell a machine what to do, and it does it for you.</p>
            <p className="text-gray-400">That fascination only grew stronger as I got exposed to AI, ML, and development.</p>
          </div>
        </section>
        {/* Responsive Photo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl mx-auto mt-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl shadow-xl p-4 min-h-[220px] transition-transform duration-300 hover:scale-105 hover:-rotate-2 hover:shadow-2xl cursor-pointer">
            <img src="/3.jpg" alt="Shubham at IIT" className="rounded-xl w-full max-w-xs object-cover mb-4 transition-transform duration-300 group-hover:scale-110" />
            <div className="text-lg text-gray-100 font-semibold text-center leading-relaxed">
              <span className="block font-bold text-xl mb-1">Dreams & Determination</span>
              Every day, I strive to make my parents proud—fueling my journey with their love and my own ambition.
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl shadow-xl p-4 min-h-[220px] transition-transform duration-300 hover:scale-105 hover:rotate-2 hover:shadow-2xl cursor-pointer">
            <img src="/manali1.jpg" alt="Nature" className="rounded-xl w-full max-w-xs object-cover mb-4 transition-transform duration-300 group-hover:scale-110" />
            <div className="text-lg text-gray-100 font-semibold text-center leading-relaxed">
              <span className="block font-bold text-xl mb-1">Nature & Coding</span>
              Finding inspiration in the beauty of nature and the logic of code—my two favorite escapes.
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl shadow-xl p-4 min-h-[220px] transition-transform duration-300 hover:scale-105 hover:-rotate-2 hover:shadow-2xl cursor-pointer">
            <img src="/2.jpg" alt="Memories" className="rounded-xl w-full max-w-xs object-cover mb-4 transition-transform duration-300 group-hover:scale-110" />
            <div className="text-lg text-gray-100 font-semibold text-center leading-relaxed">
              <span className="block font-bold text-xl mb-1">Cherished Moments</span>
              Life is a collection of moments—here's to capturing and treasuring every single one.
            </div>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col items-center bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl shadow-xl p-4 min-h-[220px] transition-transform duration-300 hover:scale-105 hover:rotate-2 hover:shadow-2xl cursor-pointer">
            <img src="/best.jpg" alt="Akshat into building body" className="rounded-xl w-full max-w-xs object-cover mb-4 transition-transform duration-300 group-hover:scale-110" />
            <div className="text-lg text-gray-100 font-semibold text-center leading-relaxed">
              <span className="block font-bold text-xl mb-1">Strength in Progress</span>
              Akshat's journey into building his best self—one rep at a time! 😉
            </div>
          </div>
        </div>
        {/* Development Section */}
        <section className="w-full max-w-3xl mx-auto mt-16 mb-8 px-4">
          <h3 className="text-2xl font-semibold text-gray-200 mb-3 text-center md:text-left">This thing called development?</h3>
          <p className="text-gray-300 mb-2 text-lg leading-relaxed">
            During the lockdown, I had all the time in the world to explore tech. I went down the YouTube rabbit hole, learning about software, coding, and consumer tech. But it wasn't until college that I truly discovered development.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Building things felt addictive. There's something uniquely satisfying about solving problems by creating something from scratch—especially when it saves someone's time or money, two of the most valuable things in life.
          </p>
        </section>
        {/* Making it all happen Section */}
        <section className="w-full max-w-3xl mx-auto mt-16 mb-16 px-4">
          <h3 className="text-2xl font-semibold text-gray-200 mb-3 text-center md:text-left">Making it all happen.</h3>
          <p className="text-gray-300 mb-2 text-lg leading-relaxed">
            I'm constantly learning, staying at the cutting edge of tech—whether it's software, AI, or the latest mobile innovations..
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            My journey isn't just about coding, but about crafting impactful solutions.
          </p>
        </section>
        {/* Thanks for stopping by Section */}
        <section className="w-full max-w-3xl mx-auto mt-24 mb-8 flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-4 text-center">Thanks for stopping by!</h2>
          {/* Signature or Initials */}
          <div className="text-5xl font-signature text-gray-300 mb-2 select-none" style={{fontFamily: 'cursive', letterSpacing: '0.1em'}}>
            AR
          </div>
        </section>
      </main>
    </div>
  );
} 