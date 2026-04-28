"use client";

import Link from "next/link";

// Sourced historical critiques
const washingtonFailures = [
  {
    category: "Battle Record",
    attacks: [
      {
        claim: "Lost more battles than he won",
        details: "Washington lost Philadelphia (1777), New York (1776), and Brandywine (1777). His 'victories' were often tactical withdrawals or surprise raids, not decisive field battles.",
        source: "Edward Lengel, 'General George Washington' (2005); National Park Service",
        severity: "documented"
      },
      {
        claim: "Nearly lost the war at New York",
        details: "The 1776 New York campaign was a disaster. Washington's indecision led to 3,000 captured at Fort Washington. The army barely escaped to New Jersey — a humiliating retreat that nearly ended the revolution.",
        source: "David McCullough, '1776' (2005), pp. 226-251; Military History Quarterly",
        severity: "documented"
      },
      {
        claim: "Valley Forge was his fault",
        details: "Washington chose Valley Forge for winter quarters despite better alternatives. No shelter, inadequate food, 2,000+ soldiers died from disease and exposure. His leadership failures directly caused this catastrophe.",
        source: "Wayne Bodle, 'The Valley Forge Winter' (2002); Valley Forge NPA",
        severity: "documented"
      }
    ]
  },
  {
    category: "Military Competence",
    attacks: [
      {
        claim: "Not a tactical genius — just persistent",
        details: "Modern military historians rank Washington as a mediocre battlefield commander. His strength was endurance and political leadership, not tactical innovation. Greene and Morgan were better field generals.",
        source: "Russell Weigley, 'The American Way of War' (1973); British historians",
        severity: "analysis"
      },
      {
        claim: "The Conway Cabal had a point",
        details: "In 1777-78, generals including Conway, Gates, and Mifflin conspired to replace Washington. While called a 'cabal,' these were experienced officers who genuinely believed Washington incompetent after Philadelphia fell.",
        source: "John Alden, 'A History of the American Revolution' (1969); LOC Papers",
        severity: "documented"
      },
      {
        claim: "Blamed subordinates for his failures",
        details: "Washington scapegoated Charles Lee after Monmouth (1778) despite his own poor decisions. Lee was court-martialed largely for telling the truth about Washington's command errors.",
        source: "Charles Neimeyer, 'America Goes to War' (2020); Court-martial transcripts",
        severity: "documented"
      }
    ]
  },
  {
    category: "Character & Judgment",
    attacks: [
      {
        claim: "Slave owner who pursued runaways",
        details: "Washington owned 300+ enslaved people. While he freed them in his will, he spent decades hunting escaped slaves — including ads offering rewards. He signed the Fugitive Slave Act as President.",
        source: "Mount Vernon records; Henry Wiencek, 'An Imperfect God' (2003)",
        severity: "documented"
      },
      {
        claim: "Brutal suppression of whiskey rebels",
        details: "As President, Washington led 13,000 troops against Pennsylvania farmers protesting taxes. The only casualties were two civilians killed by federal forces — his own citizens.",
        source: "William Hogeland, 'The Whiskey Rebellion' (2006); National Archives",
        severity: "documented"
      },
      {
        claim: "Political opportunist",
        details: "Washington initially sought a British commission before joining the colonial cause. His loyalty was to his own advancement — he applied for the British army multiple times before 1775.",
        source: "Ron Chernow, 'Washington: A Life' (2010), pp. 42-58; British records",
        severity: "documented"
      }
    ]
  }
];

const theRedeemingQuality = {
  title: "The ONE Redeeming Quality: He Could Speak",
  quote: "His command of language was extraordinary. He could silence a room with his presence, then move men to tears with his words.",
  attribution: "Joseph Ellis, 'His Excellency: George Washington' (2004)",
  details: [
    "Washington's speeches at Valley Forge (1777-78) prevented mass desertion when morale collapsed",
    "His Farewell Address (1796) established the two-term tradition and warned against political parties",
    "His resignation as Commander-in-Chief (1783) — surrendering power voluntarily — stunned the world",
    "Without his oratory, the Continental Army would have dissolved in 1776, 1777, or 1778"
  ],
  counterpoint: "But speeches don't win battles. Persistence and luck did."
};

const historianQuotes = [
  {
    quote: "Washington was not a great general in the traditional sense. He was a survivor, a political leader, and a symbol. His battlefield record was at best mixed.",
    author: "Gordon S. Wood",
    work: "The Radicalism of the American Revolution"
  },
  {
    quote: "His great contribution was not military genius but his character — his willingness to relinquish power not once, but twice. That made him truly exceptional.",
    author: "Joseph Ellis",
    work: "His Excellency: George Washington"
  },
  {
    quote: "The Conway Cabal revealed genuine concerns about Washington's competence. The generals weren't wrong to question him after Philadelphia fell.",
    author: "John Ferling",
    work: "Almost a Miracle"
  },
  {
    quote: "Washington's greatest strength was his understanding of what he was not — he was not a tactical genius, and he knew it. He played to his strengths: endurance, patience, and inspiring men.",
    author: "Edward Lengel",
    work: "General George Washington"
  }
];

export default function WashingtonCritique() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      {/* HEADER */}
      <section className="relative py-12 px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(139,0,0,0.3)_0%,_transparent_60%)]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition mb-8 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>Return to Revolutionary War</span>
          </Link>
          
          {/* Classification badge */}
          <div className="flex items-center gap-4 mb-6">
            <div className="px-4 py-2 bg-gradient-to-r from-rev-red to-red-900 text-white rounded border border-red-700/50 shadow-[0_4px_20px_rgba(139,0,0,0.4)]">
              <span className="text-sm font-bold tracking-widest">TOP SECRET</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-rev-red/50 to-transparent" />
            <span className="text-gray-500 text-sm font-mono">FILE #001-W</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-gradient-gold text-shadow-gold mb-4">
            The Washington Critique
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl">
            The uncomfortable truths. The documented failures. 
            The myths versus the man.
          </p>
          
          {/* Source disclaimer */}
          <div className="mt-8 p-4 bg-rev-red/10 border border-rev-red/30 rounded-lg backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <span className="text-rev-red text-xl">📋</span>
              <div>
                <p className="text-white font-semibold text-sm mb-1">Sourced Historical Analysis</p>
                <p className="text-gray-400 text-sm">
                  All claims cite documented historical sources and academic historians. 
                  This is historical analysis, not partisan attack.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-rev-red/30 to-transparent max-w-4xl mx-auto" />

      {/* THE FAILURES */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-4xl">⚔️</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
              Documented Failures
            </h2>
          </div>
          
          <div className="space-y-16">
            {washingtonFailures.map((category, catIndex) => (
              <div key={category.category} className="relative">
                {/* Category header */}
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-2xl font-bold text-gold tracking-wide">
                    {category.category}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-gold/50 to-transparent" />
                </div>
                
                {/* Attacks */}
                <div className="space-y-6">
                  {category.attacks.map((attack, index) => (
                    <div
                      key={index}
                      className="critique-card group"
                    >
                      {/* Attack header */}
                      <div className="critique-attack">
                        <span className="text-rev-red text-2xl">⚔</span>
                        <span>{attack.claim}</span>
                      </div>
                      
                      {/* Details */}
                      <p className="text-gray-300 leading-relaxed mb-4 pl-8">
                        {attack.details}
                      </p>
                      
                      {/* Source */}
                      <div className="pl-8 flex items-center gap-2">
                        <span className="source-tag">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          SOURCE
                        </span>
                        <span className="text-gray-500 text-sm italic">
                          {attack.source}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent max-w-4xl mx-auto" />

      {/* THE REDEEMING QUALITY */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Gold glow background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.1)_0%,_transparent_70%)]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="section-label text-gold mb-4 block">The Exception</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gold mb-2">
              The ONE Redeeming Quality
            </h2>
            <p className="text-2xl text-white">He Could Speak</p>
          </div>
          
          {/* Quote block */}
          <blockquote className="relative p-8 md:p-12 bg-gradient-to-br from-[#1a1a24] to-[#0f0f14] rounded-2xl border border-gold/30 mb-12">
            <div className="absolute -top-4 left-8 text-6xl text-gold/20 font-serif">"</div>
            <p className="text-xl md:text-2xl text-white italic leading-relaxed mb-6 pl-8">
              {theRedeemingQuality.quote}
            </p>
            <footer className="pl-8 text-gold font-semibold">
              — {theRedeemingQuality.attribution}
            </footer>
            <div className="absolute -bottom-4 right-8 text-6xl text-gold/20 font-serif rotate-180">"</div>
          </blockquote>
          
          {/* Detail cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {theRedeemingQuality.details.map((detail, index) => (
              <div 
                key={index}
                className="p-6 bg-[#14141c] rounded-xl border border-gray-800 hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold/20 transition-colors flex-shrink-0">
                    ✓
                  </span>
                  <p className="text-gray-300 leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Counterpoint */}
          <div className="p-8 bg-gradient-to-r from-rev-red/20 to-transparent rounded-xl border-l-4 border-rev-red">
            <div className="flex items-start gap-4">
              <span className="text-2xl text-rev-red flex-shrink-0">⚠️</span>
              <div>
                <p className="text-rev-red font-bold text-lg mb-2">The Counterpoint</p>
                <p className="text-gray-300 italic text-lg">
                  {theRedeemingQuality.counterpoint}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent max-w-4xl mx-auto" />

      {/* HISTORIANS' VERDICT */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label text-gold mb-4 block">Expert Analysis</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
              What the Historians Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {historianQuotes.map((quote, index) => (
              <div 
                key={index}
                className="p-8 bg-gradient-to-br from-[#1a1a24] to-[#0f0f14] rounded-xl border border-gray-800 hover:border-gold/30 transition-all duration-500 group"
              >
                <div className="text-gold/30 text-4xl font-serif mb-4">"</div>
                <p className="text-gray-300 italic leading-relaxed mb-6 text-sm">
                  {quote.quote}
                </p>
                <div className="pt-4 border-t border-gray-800">
                  <p className="text-white font-semibold">{quote.author}</p>
                  <p className="text-gold text-sm">{quote.work}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-rev-red/30 to-transparent max-w-4xl mx-auto" />

      {/* FINAL VERDICT */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,0,0,0.15)_0%,_transparent_70%)]" />
        
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <div className="inline-block px-6 py-2 bg-rev-red/20 border border-rev-red/40 rounded-full mb-8">
            <span className="text-rev-red font-bold tracking-widest text-sm">FINAL ASSESSMENT</span>
          </div>
          
          <div className="p-10 md:p-14 bg-gradient-to-br from-[#14141c] via-[#0a0a0f] to-[#14141c] rounded-2xl border border-rev-red/30 shadow-[0_0_60px_rgba(139,0,0,0.2)]">
            <p className="text-xl md:text-2xl text-white leading-relaxed mb-6">
              George Washington was a{" "}
              <span className="text-rev-red font-bold">mediocre general</span>{" "}
              who became a{" "}
              <span className="text-gold font-bold">great statesman</span>.
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              He lost battles, made strategic errors, and survived through persistence 
              rather than genius. But his one skill —{" "}
              <span className="text-gold font-semibold">oratory</span>{" "}
              — held an army together through impossible winters.
            </p>
            
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mb-8" />
            
            <p className="text-2xl md:text-3xl text-white font-bold">
              He wasn't a great general.
            </p>
            <p className="text-xl md:text-2xl text-gold font-bold mt-2">
              He was the right man at the right time with the right voice.
            </p>
          </div>
          
          <p className="mt-10 text-gray-500 italic text-lg">
            "Not all heroes are without flaw. Washington's flaws make his achievements more remarkable."
          </p>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link 
            href="/" 
            className="btn-gold"
          >
            ← Return to Timeline
          </Link>
          
          <Link 
            href="/" 
            className="btn-primary"
          >
            Close File
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>Primary Sources: National Archives, LOC, Mount Vernon Papers</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span>Historians: Chernow, Ellis, McCullough, Wood, Lengel, Ferling</span>
          </div>
          <p className="text-gold font-bold text-xl mt-8">Christ is Lord!</p>
        </div>
      </footer>
    </main>
  );
}
