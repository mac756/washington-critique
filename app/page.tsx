"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Historical data with real sources
const timelineEvents = [
  { year: "1775", month: "Apr", event: "Battles of Lexington & Concord", location: "Massachusetts", outcome: "Colonial Victory", description: "'The shot heard round the world' — war begins" },
  { year: "1775", month: "Jun", event: "Battle of Bunker Hill", location: "Massachusetts", outcome: "British Win (Pyrrhic)", description: "British take the hill but suffer 1,054 casualties" },
  { year: "1776", month: "Jul", event: "Declaration of Independence", location: "Philadelphia", outcome: "Political Victory", description: "Jefferson's words formalize the break from Britain" },
  { year: "1776", month: "Dec", event: "Washington Crosses Delaware", location: "New Jersey", outcome: "Surprise Victory", description: "Trenton raid saves the revolution from collapse" },
  { year: "1777", month: "Oct", event: "Battle of Saratoga", location: "New York", outcome: "Decisive Colonial Win", description: "Arnold's heroics convince France to join the war" },
  { year: "1777", month: "Dec", event: "Valley Forge Begins", location: "Pennsylvania", outcome: "Strategic Survival", description: "2,000 soldiers die; Washington's army nearly destroyed" },
  { year: "1778", month: "Jun", event: "Battle of Monmouth", location: "New Jersey", outcome: "Tactical Draw", description: "Washington vs. Lee scandal; heat kills hundreds" },
  { year: "1781", month: "Oct", event: "Siege of Yorktown", location: "Virginia", outcome: "Final Victory", description: "Cornwallis surrenders; war effectively ends" },
  { year: "1783", month: "Sep", event: "Treaty of Paris", location: "Paris, France", outcome: "Peace", description: "Britain formally recognizes US independence" },
];

const mapBattles = [
  { name: "Lexington", x: 88, y: 22, year: "1775", result: "colonial" },
  { name: "Bunker Hill", x: 89, y: 24, year: "1775", result: "british" },
  { name: "Trenton", x: 82, y: 38, year: "1776", result: "colonial" },
  { name: "Saratoga", x: 75, y: 28, year: "1777", result: "colonial" },
  { name: "Valley Forge", x: 80, y: 42, year: "1777", result: "survival" },
  { name: "Yorktown", x: 68, y: 62, year: "1781", result: "colonial" },
];

const keyFigures = [
  {
    name: "George Washington",
    role: "Commander-in-Chief",
    years: "1732-1799",
    description: "Led the Continental Army. Won at Trenton and Yorktown. Questionable generalship at other times.",
    wikiImage: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg",
    wikiCredit: "Gilbert Stuart / Wikimedia Commons (Public Domain)",
    sideMission: true,
  },
  {
    name: "Benjamin Franklin",
    role: "Diplomat & Statesman",
    years: "1706-1790",
    description: "Secured French alliance that saved the revolution. Scientist, writer, master negotiator.",
    wikiImage: "https://upload.wikimedia.org/wikipedia/commons/c/cc/BenFranklinDuplessis.jpg",
    wikiCredit: "Joseph-Siffred Duplessis / Wikimedia Commons (Public Domain)",
  },
  {
    name: "Marquis de Lafayette",
    role: "French General",
    years: "1757-1834",
    description: "Young French noble who joined at 19. Became Washington's protégé and surrogate son.",
    wikiImage: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Gilbert_du_Motier_Marquis_de_Lafayette.jpg",
    wikiCredit: "Wikimedia Commons (Public Domain)",
  },
  {
    name: "Thomas Jefferson",
    role: "Author of Independence",
    years: "1743-1826",
    description: "Wrote the Declaration. Governor of Virginia during British invasion — fled Richmond.",
    wikiImage: "https://upload.wikimedia.org/wikipedia/commons/0/07/Official_Presidential_portrait_of_Thomas_Jefferson_%28by_Rembrandt_Peale%2C_1800%29.jpg",
    wikiCredit: "Rembrandt Peale / Wikimedia Commons (Public Domain)",
  },
  {
    name: "Benedict Arnold",
    role: "Traitor (Former Hero)",
    years: "1741-1801",
    description: "Brilliant tactician at Saratoga. Betrayed West Point. Name became synonymous with treason.",
    wikiImage: "https://upload.wikimedia.org/wikipedia/commons/5/54/Benedict_arnold_1.jpg",
    wikiCredit: "Wikimedia Commons (Public Domain)",
  },
  {
    name: "King George III",
    role: "British Monarch",
    years: "1738-1820",
    description: "Refused to see colonies as equals. Lost America due to arrogance and inflexibility.",
    wikiImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Allan_Ramsay_-_King_George_III_-_Google_Art_Project.jpg/800px-Allan_Ramsay_-_King_George_III_-_Google_Art_Project.jpg",
    wikiCredit: "Allan Ramsay / Wikimedia Commons (Public Domain)",
  },
];

export default function Home() {
  const [selectedBattle, setSelectedBattle] = useState<string | null>(null);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 py-16">
        <div className="text-center max-w-4xl">
          <p className="text-rev-red font-bold tracking-[0.3em] text-sm mb-4">1775 — 1783</p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-gradient-gold text-shadow-gold">
            The Revolutionary War
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Interactive timeline. Strategic map. Key players. <br/>
            <span className="text-gold">And the uncomfortable truths they don't teach.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#timeline" className="px-6 py-3 bg-rev-red rounded font-semibold hover:bg-red-800 transition">
              View Timeline
            </Link>
            <Link href="#map" className="px-6 py-3 border border-gold text-gold rounded font-semibold hover:bg-gold/10 transition">
              Explore Map
            </Link>
            <Link href="/washington-critique/" className="px-6 py-3 bg-gradient-to-r from-rev-red to-red-900 rounded font-semibold hover:from-red-800 hover:to-red-950 transition flex items-center gap-2">
              <span className="text-yellow-400">⚠️</span> The Washington Files
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section id="map" className="py-16 px-6 bg-gradient-to-b from-transparent via-colonial-blue/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-2 text-center">War Map</h2>
          <p className="text-gray-400 text-center mb-8">Click markers to see battle details • <span className="text-green-400">●</span> Colonial Win <span className="text-red-500 ml-2">●</span> British Win <span className="text-yellow-500 ml-2">●</span> Survival</p>
          
          <div className="relative bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
            {/* Map Background - Eastern US */}
            <div className="relative aspect-[16/10] bg-gradient-to-br from-colonial-blue/30 via-background to-colonial-blue/20">
              {/* State/region labels */}
              <div className="absolute inset-0 p-8">
                <div className="absolute top-[20%] left-[85%] text-xs text-gray-600 font-bold">MA</div>
                <div className="absolute top-[30%] left-[75%] text-xs text-gray-600 font-bold">NY</div>
                <div className="absolute top-[42%] left-[80%] text-xs text-gray-600 font-bold">NJ</div>
                <div className="absolute top-[48%] left-[75%] text-xs text-gray-600 font-bold">PA</div>
                <div className="absolute top-[60%] left-[72%] text-xs text-gray-600 font-bold">MD/VA</div>
                
                {/* Battle markers */}
                {mapBattles.map((battle) => (
                  <button
                    key={battle.name}
                    className="map-marker absolute w-4 h-4 rounded-full border-2 border-white shadow-lg hover:scale-150 transition-transform"
                    style={{
                      left: `${battle.x}%`,
                      top: `${battle.y}%`,
                      backgroundColor: battle.result === "colonial" ? "#22c55e" : battle.result === "british" ? "#ef4444" : "#eab308",
                    }}
                    onClick={() => setSelectedBattle(selectedBattle === battle.name ? null : battle.name)}
                    title={`${battle.name} (${battle.year})`}
                  >
                    {selectedBattle === battle.name && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-800 border border-gray-600 rounded px-3 py-2 whitespace-nowrap z-20">
                        <p className="font-bold text-sm">{battle.name}</p>
                        <p className="text-xs text-gray-400">{battle.year}</p>
                        <p className="text-xs capitalize" style={{ color: battle.result === "colonial" ? "#22c55e" : battle.result === "british" ? "#ef4444" : "#eab308" }}>
                          {battle.result === "survival" ? "Strategic Survival" : `${battle.result} Victory`}
                        </p>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Map Legend */}
            <div className="p-4 bg-gray-900 border-t border-gray-700 flex flex-wrap gap-6 justify-center text-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span>Colonial Victory</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span>British Victory</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span>Strategic Survival</span>
              </div>
            </div>
          </div>
          
          <p className="image-credit">
            Map data: Historical battles of the American Revolutionary War • Sources: National Park Service, Smithsonian
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center">Timeline of War</h2>
          
          <div className="relative">
            <div className="timeline-line hidden md:block"></div>
            
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div
                  key={event.event}
                  className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Date badge */}
                  <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="inline-flex items-center gap-2 bg-gray-800 rounded-lg p-4 border border-gray-700">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gold">{event.month}</div>
                        <div className="text-sm text-gray-400">{event.year}</div>
                      </div>
                      <div className="ml-3 text-left">
                        <h3 className="font-bold text-white">{event.event}</h3>
                        <p className="text-sm text-gray-400">{event.location}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="hidden md:flex w-8 h-8 rounded-full bg-gold border-4 border-background absolute left-1/2 -translate-x-1/2 top-4 z-10 items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-background"></div>
                  </div>
                  
                  {/* Description */}
                  <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold mb-2 ${
                        event.outcome.includes("Colonial") ? "bg-green-900/50 text-green-400" :
                        event.outcome.includes("British") ? "bg-red-900/50 text-red-400" :
                        "bg-blue-900/50 text-blue-400"
                      }`}>
                        {event.outcome}
                      </span>
                      <p className="text-sm text-gray-300">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Figures */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-2 text-center">Key Players</h2>
          <p className="text-gray-400 text-center mb-12">Click portraits for more • Images via Wikimedia Commons</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFigures.map((figure, index) => (
              <div
                key={figure.name}
                className={`group relative bg-gray-900 rounded-lg overflow-hidden border transition-all duration-300 ${
                  figure.sideMission ? "border-rev-red ring-1 ring-rev-red/50" : "border-gray-700 hover:border-gray-600"
                }`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-800">
                  <img
                    src={figure.wikiImage}
                    alt={figure.name}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  {figure.sideMission && (
                    <div className="absolute top-2 right-2 bg-rev-red text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                      <span>⚠️</span> SECRET FILE
                    </div>
                  )}
                </div>
                <p className="image-credit px-4">{figure.wikiCredit}</p>
                
                {/* Content */}
                <div className="p-4">
                  <h3 className="font-serif text-xl font-bold mb-1">{figure.name}</h3>
                  <p className="text-xs text-gray-500 mb-2">{figure.years}</p>
                  <p className="text-rev-red text-sm font-semibold mb-2">{figure.role}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{figure.description}</p>
                  
                  {figure.sideMission && (
                    <Link
                      href="/washington-critique/"
                      className="mt-4 inline-flex items-center text-rev-red hover:text-red-400 font-semibold text-sm transition-colors"
                    >
                      Access Classified File →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secret Mission Teaser */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-rev-red/20 via-gray-900 to-rev-red/10 rounded-lg p-8 border-2 border-rev-red text-center">
            <div className="text-5xl mb-4">📂</div>
            <h2 className="font-serif text-3xl font-bold mb-4">CLASSIFIED: The Washington Critique</h2>
            <p className="text-gray-300 mb-6">
              History remembers the hero. The myths obscure the man. 
              Access the declassified dossier with sourced historical critiques.
            </p>
            <Link
              href="/washington-critique/"
              className="inline-block px-8 py-4 bg-rev-red text-white font-bold rounded hover:bg-red-700 transition-all hover:scale-105"
            >
              Open File →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm space-y-2">
          <p>Historical sources: National Park Service, Library of Congress, Smithsonian Institution</p>
          <p>Images: Wikimedia Commons (Public Domain where noted)</p>
          <p className="text-gold font-semibold mt-4">Christ is Lord!</p>
        </div>
      </footer>
    </main>
  );
}
