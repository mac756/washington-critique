"use client";

import { useState } from "react";
import Link from "next/link";

const timelineEvents = [
  { year: "1775", month: "Apr", event: "Battles of Lexington & Concord", location: "Massachusetts", outcome: "Colonial Victory", description: "'The shot heard round the world' — war begins" },
  { year: "1775", month: "Jun", event: "Battle of Bunker Hill", location: "Massachusetts", outcome: "British Pyrrhic Victory", description: "British take the hill but suffer 1,054 casualties" },
  { year: "1776", month: "Jul", event: "Declaration of Independence", location: "Philadelphia", outcome: "Political Victory", description: "Jefferson's words formalize the break from Britain" },
  { year: "1776", month: "Dec", event: "Washington Crosses Delaware", location: "New Jersey", outcome: "Surprise Victory", description: "Trenton raid saves the revolution from collapse" },
  { year: "1777", month: "Oct", event: "Battle of Saratoga", location: "New York", outcome: "Decisive Colonial Win", description: "Arnold's heroics convince France to join the war" },
  { year: "1777", month: "Dec", event: "Valley Forge Begins", location: "Pennsylvania", outcome: "Strategic Survival", description: "2,000 soldiers die; Washington's army nearly destroyed" },
  { year: "1778", month: "Jun", event: "Battle of Monmouth", location: "New Jersey", outcome: "Tactical Draw", description: "Washington vs. Lee scandal; heat kills hundreds" },
  { year: "1781", month: "Oct", event: "Siege of Yorktown", location: "Virginia", outcome: "Final Victory", description: "Cornwallis surrenders; war effectively ends" },
  { year: "1783", month: "Sep", event: "Treaty of Paris", location: "Paris, France", outcome: "Peace", description: "Britain formally recognizes US independence" },
];

const mapBattles = [
  { name: "Lexington", x: 88, y: 22, year: "1775", result: "colonial", description: "First shots fired" },
  { name: "Bunker Hill", x: 89, y: 24, year: "1775", result: "british", description: "Pyrrhic British victory" },
  { name: "Trenton", x: 82, y: 38, year: "1776", result: "colonial", description: "Christmas surprise attack" },
  { name: "Saratoga", x: 75, y: 28, year: "1777", result: "colonial", description: "Turning point" },
  { name: "Valley Forge", x: 80, y: 42, year: "1777", result: "survival", description: "Winter encampment" },
  { name: "Yorktown", x: 68, y: 62, year: "1781", result: "colonial", description: "Final victory" },
];

const keyFigures = [
  {
    name: "George Washington",
    role: "Commander-in-Chief",
    years: "1732-1799",
    description: "Led the Continental Army through brutal winters and impossible odds. Won at Trenton and Yorktown. His leadership held the army together.",
    wikiImage: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg",
    wikiCredit: "Gilbert Stuart / Wikimedia Commons",
    sideMission: true,
  },
  {
    name: "Benjamin Franklin",
    role: "Diplomat & Statesman",
    years: "1706-1790",
    description: "Secured the crucial French alliance that saved the revolution. Scientist, writer, and master negotiator who convinced France to fund the war.",
    wikiImage: "https://upload.wikimedia.org/wikipedia/commons/c/cc/BenFranklinDuplessis.jpg",
    wikiCredit: "Joseph-Siffred Duplessis / Wikimedia Commons",
  },
  {
    name: "Marquis de Lafayette",
    role: "French General",
    years: "1757-1834",
    description: "Young French noble who defied his king to join the American cause at just 19. Became Washington's protégé and surrogate son.",
    wikiImage: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Gilbert_du_Motier_Marquis_de_Lafayette.jpg",
    wikiCredit: "Wikimedia Commons",
  },
  {
    name: "Thomas Jefferson",
    role: "Author of Independence",
    years: "1743-1826",
    description: "Wrote the Declaration of Independence. His words gave the revolution its moral foundation and enduring legacy.",
    wikiImage: "https://upload.wikimedia.org/wikipedia/commons/0/07/Official_Presidential_portrait_of_Thomas_Jefferson_%28by_Rembrandt_Peale%2C_1800%29.jpg",
    wikiCredit: "Rembrandt Peale / Wikimedia Commons",
  },
  {
    name: "Benedict Arnold",
    role: "Traitor (Former Hero)",
    years: "1741-1801",
    description: "Brilliant tactician whose heroics at Saratoga changed the war's course. Betrayed West Point. His name became synonymous with treason.",
    wikiImage: "https://upload.wikimedia.org/wikipedia/commons/5/54/Benedict_arnold_1.jpg",
    wikiCredit: "Wikimedia Commons",
  },
  {
    name: "King George III",
    role: "British Monarch",
    years: "1738-1820",
    description: "Refused to see the colonies as equals. His inflexibility and arrogance cost Britain its American empire.",
    wikiImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Allan_Ramsay_-_King_George_III_-_Google_Art_Project.jpg/800px-Allan_Ramsay_-_King_George_III_-_Google_Art_Project.jpg",
    wikiCredit: "Allan Ramsay / Wikimedia Commons",
  },
];

export default function Home() {
  const [selectedBattle, setSelectedBattle] = useState<string | null>(null);

  const getResultColor = (result: string) => {
    switch (result) {
      case "colonial": return "#22c55e";
      case "british": return "#ef4444";
      default: return "#eab308";
    }
  };

  const getResultLabel = (result: string) => {
    switch (result) {
      case "colonial": return "Colonial Victory";
      case "british": return "British Victory";
      default: return "Strategic Survival";
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,0,0,0.15)_0%,_transparent_70%)]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
          <div className="animate-fade-in-up mb-8">
            <span className="section-label text-rev-red">1775 — 1783</span>
          </div>
          
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-gradient-gold text-shadow-gold animate-fade-in-up delay-100">
            The Revolution
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-6 leading-relaxed animate-fade-in-up delay-200">
            Interactive war map. Strategic timeline. Key players.<br/>
            <span className="text-gold">And the uncomfortable truths they don't teach.</span>
          </p>

          <div className="w-32 h-px divider-gold mx-auto mb-10 animate-fade-in delay-300" />

          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-300">
            <Link 
              href="#map"
              className="btn-primary"
            >
              <span>🗺️</span> Explore Map
            </Link>
            <Link 
              href="#timeline"
              className="btn-gold"
            >
              <span>⏳</span> View Timeline
            </Link>
            <Link 
              href="/washington-critique/"
              className="relative overflow-hidden group px-7 py-3.5 bg-gradient-to-r from-rev-red via-red-900 to-rev-red rounded-lg font-semibold text-white border border-red-700/50 hover:border-red-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,0,0,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="animate-pulse">⚠️</span> Washington Files
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-900 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gold/80 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section id="map" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label mb-4 block">Strategic Overview</span>
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-gradient-gold">
              Theater of War
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Click markers to explore battles across the colonies
            </p>
          </div>
          
          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-green-500 border-2 border-white shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              <span className="text-gray-300">Colonial Victory</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-red-500 border-2 border-white shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
              <span className="text-gray-300">British Victory</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-yellow-500 border-2 border-white shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
              <span className="text-gray-300">Strategic Survival</span>
            </div>
          </div>
          
          {/* Map */}
          <div className="map-container aspect-[16/10] relative">
            {/* State labels */}
            <div className="absolute inset-0 p-6 md:p-10">
              <div className="absolute top-[18%] left-[85%] text-xs md:text-sm text-gray-500 font-bold tracking-wider opacity-60">MASSACHUSETTS</div>
              <div className="absolute top-[28%] left-[75%] text-xs md:text-sm text-gray-500 font-bold tracking-wider opacity-60">NEW YORK</div>
              <div className="absolute top-[40%] left-[80%] text-xs md:text-sm text-gray-500 font-bold tracking-wider opacity-60">NEW JERSEY</div>
              <div className="absolute top-[46%] left-[74%] text-xs md:text-sm text-gray-500 font-bold tracking-wider opacity-60">PENNSYLVANIA</div>
              <div className="absolute top-[58%] left-[70%] text-xs md:text-sm text-gray-500 font-bold tracking-wider opacity-60">MARYLAND / VIRGINIA</div>
              
              {/* Battle markers */}
              {mapBattles.map((battle) => (
                <button
                  key={battle.name}
                  className="map-marker group"
                  style={{
                    left: `${battle.x}%`,
                    top: `${battle.y}%`,
                  }}
                  onClick={() => setSelectedBattle(selectedBattle === battle.name ? null : battle.name)}
                >
                  {/* Pulse effect */}
                  <span 
                    className="map-marker-pulse"
                    style={{ color: getResultColor(battle.result) }}
                  />
                  
                  {/* Marker dot */}
                  <span 
                    className="map-marker-inner block"
                    style={{ backgroundColor: getResultColor(battle.result) }}
                  />
                  
                  {/* Label */}
                  <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-xs font-bold text-white whitespace-nowrap opacity-80 group-hover:opacity-100 transition-opacity">
                    {battle.name}
                  </span>
                  
                  {/* Tooltip */}
                  {selectedBattle === battle.name && (
                    <div className="map-tooltip">
                      <p className="font-bold text-lg text-white mb-1">{battle.name}</p>
                      <p className="text-xs text-gray-400 mb-2">{battle.year} — {battle.description}</p>
                      <p className="text-xs font-bold" style={{ color: getResultColor(battle.result) }}>
                        {getResultLabel(battle.result)}
                      </p>
                    </div>
                  )}
                </button>
              ))}
            </div>
            
            {/* Decorative border effect */}
            <div className="absolute inset-0 border border-gold/20 rounded-lg pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0a0a0f] px-4">
              <span className="text-gold text-xs tracking-widest">NORTH</span>
            </div>
          </div>
          
          <p className="text-center text-gray-500 text-sm mt-4">
            Battle data: National Park Service, Smithsonian Institution
          </p>
        </div>
      </section>

      <div className="w-full h-px divider-gold max-w-4xl mx-auto" />

      {/* TIMELINE SECTION */}
      <section id="timeline" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">Chronicle</span>
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-gradient-gold">
              Timeline of War
            </h2>
            <p className="text-gray-400">Nine years that changed the world</p>
          </div>
          
          <div className="timeline-container relative">
            {/* Center line - hidden on mobile */}
            <div className="hidden md:block timeline-line-main" />
            
            <div className="space-y-8 md:space-y-0">
              {timelineEvents.map((event, index) => (
                <div
                  key={event.event}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                    index % 2 === 0 ? "" : "md:[direction:rtl]"
                  }`}
                >
                  {/* Content side */}
                  <div className={`${index % 2 === 0 ? "md:text-right" : "md:text-left"} mb-4 md:mb-0`}>
                    <div className={`timeline-card ${index % 2 === 0 ? "md:ml-auto" : ""} max-w-md`}>
                      {/* Date badge */}
                      <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                        <div className="bg-gradient-to-br from-rev-red to-red-900 text-white px-3 py-1.5 rounded text-center min-w-[60px]">
                          <div className="text-xl font-bold leading-none">{event.month}</div>
                          <div className="text-xs opacity-80">{event.year}</div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-serif text-xl font-bold text-white">{event.event}</h3>
                          <p className="text-sm text-gray-400">{event.location}</p>
                        </div>
                      </div>
                      
                      {/* Outcome badge */}
                      <span className={`inline-block px-3 py-1 rounded text-xs font-bold mb-3 ${
                        event.outcome.includes("Colonial") || event.outcome.includes("Final")
                          ? "bg-green-900/50 text-green-400 border border-green-700/50"
                          : event.outcome.includes("British")
                          ? "bg-red-900/50 text-red-400 border border-red-700/50"
                          : "bg-yellow-900/50 text-yellow-400 border border-yellow-700/50"
                      }`}>
                        {event.outcome}
                      </span>
                      
                      <p className={`text-gray-300 text-sm leading-relaxed ${index % 2 === 0 ? "md:text-right" : ""}`}>
                        {event.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Center dot - hidden on mobile */}
                  <div className="hidden md:flex justify-center items-center">
                    <div className="timeline-node">
                      <div className="timeline-dot" />
                    </div>
                  </div>
                  
                  {/* Empty side for alignment */}
                  <div className="hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px divider-gold max-w-4xl mx-auto" />

      {/* KEY FIGURES SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">The Players</span>
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-gradient-gold">
              Key Figures
            </h2>
            <p className="text-gray-400">The men who shaped history — portraits via Wikimedia Commons</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFigures.map((figure, index) => (
              <div
                key={figure.name}
                className={`figure-card ${figure.sideMission ? 'ring-2 ring-rev-red/50' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="figure-card-image h-64 relative">
                  <img
                    src={figure.wikiImage}
                    alt={figure.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent" />
                  
                  {figure.sideMission && (
                    <div className="secret-badge flex items-center gap-1">
                      <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                      SECRET FILE
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-6 relative">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-serif text-2xl font-bold text-white">{figure.name}</h3>
                    <span className="text-xs text-gray-500">{figure.years}</span>
                  </div>
                  
                  <p className="text-rev-red font-semibold text-sm mb-3 tracking-wide">
                    {figure.role}
                  </p>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {figure.description}
                  </p>
                  
                  {figure.sideMission && (
                    <Link
                      href="/washington-critique/"
                      className="inline-flex items-center gap-2 text-rev-red hover:text-red-400 font-semibold text-sm transition-colors group"
                    >
                      <span>Access Classified File</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  )}
                  
                  <p className="text-[10px] text-gray-600 mt-4 pt-4 border-t border-gray-800">
                    {figure.wikiCredit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px divider-gold max-w-4xl mx-auto" />

      {/* SECRET MISSION TEASER */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-10 md:p-16 rounded-2xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-rev-red/20 via-[#0a0a0f] to-rev-red/10" />
            <div className="absolute inset-0 border border-rev-red/40 rounded-2xl" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rev-red to-transparent" />
            
            {/* Content */}
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-rev-red/30 border border-rev-red/50 rounded-full mb-6">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold text-red-300 tracking-widest">CLASSIFIED</span>
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-white">
                The Washington Files
              </h2>
              
              <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                History remembers the hero. The myths obscure the man. 
                Access the declassified dossier with documented historical analysis.
              </p>
              
              <Link
                href="/washington-critique/"
                className="btn-primary text-lg px-10 py-4"
              >
                <span className="animate-pulse">⚠️</span>
                Open Classified File
                <span>→</span>
              </Link>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 text-rev-red/20 text-6xl font-serif">📂</div>
            <div className="absolute bottom-4 left-4 text-rev-red/20 text-6xl font-serif">⚔️</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>Sources: National Park Service</span>
            <span>•</span>
            <span>Library of Congress</span>
            <span>•</span>
            <span>Smithsonian Institution</span>
            <span>•</span>
            <span>Wikimedia Commons</span>
          </div>
          <p className="text-gold font-bold text-lg">Christ is Lord!</p>
        </div>
      </footer>
    </main>
  );
}
