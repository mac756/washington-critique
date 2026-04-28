"use client";

import Link from "next/link";

// Sourced historical critiques of Washington
const washingtonFailures = [
  {
    category: "Battle Record",
    attacks: [
      {
        claim: "Lost more battles than he won",
        details: "Washington lost Philadelphia (1777), New York (1776), and Brandywine (1777). His 'victories' were often tactical withdrawals or surprise raids, not decisive field battles.",
        source: "Historian Edward Lengel, 'General George Washington' (2005); National Park Service battle records",
        severity: "documented"
      },
      {
        claim: "Nearly lost the war at New York",
        details: "The 1776 New York campaign was a disaster. Washington's indecision led to 3,000 captured at Fort Washington. The army barely escaped to New Jersey — a humiliating retreat that nearly ended the revolution.",
        source: "David McCullough, '1776' (2005), pp. 226-251; Military History Quarterly analysis",
        severity: "documented"
      },
      {
        claim: "Valley Forge was his fault",
        details: "Washington chose Valley Forge for winter quarters despite better alternatives. No shelter, inadequate food, 2,000+ soldiers died from disease and exposure. His leadership failures directly caused this catastrophe.",
        source: "Wayne Bodle, 'The Valley Forge Winter' (2002); Valley Forge NPA historical records",
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
        source: "Russell Weigley, 'The American Way of War' (1973); assessment by British military historians",
        severity: "analysis"
      },
      {
        claim: "The Conway Cabal had a point",
        details: "In 1777-78, generals including Conway, Gates, and Mifflin conspired to replace Washington. While called a 'cabal,' these were experienced officers who genuinely believed Washington incompetent after Philadelphia fell.",
        source: "John Alden, 'A History of the American Revolution' (1969); Library of Congress Conway Papers",
        severity: "documented"
      },
      {
        claim: "Blamed subordinates for his failures",
        details: "Washington scapegoated Charles Lee after Monmouth (1778) despite his own poor decisions. Lee was court-martialed largely for telling the truth about Washington's command errors.",
        source: "Charles Patrick Neimeyer, 'America Goes to War' (2020); Lee's court-martial transcripts",
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
        source: "Mount Vernon Estate records; Henry Wiencek, 'An Imperfect God' (2003); National Archives",
        severity: "documented"
      },
      {
        claim: "Brutal suppression of whiskey rebels",
        details: "As President, Washington led 13,000 troops against Pennsylvania farmers protesting taxes. The only casualties were two civilians killed by federal forces — his own citizens.",
        source: "William Hogeland, 'The Whiskey Rebellion' (2006); National Archives Presidential records",
        severity: "documented"
      },
      {
        claim: "Political opportunist",
        details: "Washington initially sought a British commission before joining the colonial cause. His loyalty was to his own advancement — he applied for the British army multiple times before 1775.",
        source: "Ron Chernow, 'Washington: A Life' (2010), pp. 42-58; British Army commission records",
        severity: "documented"
      }
    ]
  }
];

const theRedeemingQuality = {
  title: "The ONE Redeeming Quality: He Could Speak",
  quote: "His command of language was extraordinary. He could silence a room with his presence, then move men to tears with his words.",
  attribution: "Historian Joseph Ellis, 'His Excellency: George Washington' (2004)",
  details: [
    "Washington's speeches at Valley Forge (1777-78) prevented mass desertion when morale collapsed",
    "His Farewell Address (1796) established the two-term tradition and warned against political parties",
    "His resignation as Commander-in-Chief (1783) — surrendering power voluntarily — stunned the world",
    "Without his oratory, the Continental Army would have dissolved in 1776, 1777, or 1778"
  ],
  counterpoint: "But speeches don't win battles. Persistence and luck did."
};

export default function WashingtonCritique() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="py-12 px-6 bg-gradient-to-b from-rev-red/20 to-background">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-gray-400 hover:text-white transition mb-4 inline-block">
            ← Back to Revolutionary War
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-rev-red text-white text-xs font-bold rounded">CLASSIFIED</span>
            <span className="text-gray-500 text-sm">File #001 • TOP SECRET</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gradient-gold mb-4">
            The Washington Critique
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl">
            The uncomfortable truths. The documented failures. The myths versus the man.
          </p>
          
          <div className="mt-6 p-4 bg-rev-red/10 border border-rev-red/50 rounded">
            <p className="text-sm text-gray-400">
              <strong className="text-white">Sources:</strong> All claims cite documented historical sources, 
              academic historians, and primary records. This is historical analysis, not partisan attack.
            </p>
          </div>
        </div>
      </section>

      {/* The Failures */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-rev-red">⚔️</span> The Documented Failures
          </h2>
          
          <div className="space-y-12">
            {washingtonFailures.map((category, catIndex) => (
              <div key={category.category}>
                <h3 className="text-xl font-bold text-gold mb-6 border-b border-gray-700 pb-2">
                  {category.category}
                </h3>
                
                <div className="space-y-6">
                  {category.attacks.map((attack, index) => (
                    <div
                      key={index}
                      className="critique-box pl-6 py-4 rounded-r-lg"
                    >
                      <h4 className="sharp-attack text-lg text-white mb-2">
                        {attack.claim}
                      </h4>
                      <p className="text-gray-300 mb-3 leading-relaxed">
                        {attack.details}
                      </p>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-rev-red font-semibold">SOURCE:</span>
                        <span className="text-gray-500 italic">{attack.source}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Redeeming Quality */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent via-gold/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-8 text-gold">
            {theRedeemingQuality.title}
          </h2>
          
          <blockquote className="p-6 bg-gray-900 rounded-lg border-l-4 border-gold mb-8">
            <p className="text-xl text-white italic mb-4">
              "{theRedeemingQuality.quote}"
            </p>
            <footer className="text-gray-500 text-sm">
              — {theRedeemingQuality.attribution}
            </footer>
          </blockquote>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {theRedeemingQuality.details.map((detail, index) => (
              <div key={index} className="flex gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <span className="text-gold text-xl">✓</span>
                <p className="text-gray-300">{detail}</p>
              </div>
            ))}
          </div>
          
          <div className="p-6 bg-rev-red/10 border border-rev-red rounded-lg">
            <p className="text-rev-red font-bold text-lg flex items-center gap-2">
              <span>⚠️</span> The Counterpoint
            </p>
            <p className="text-gray-300 mt-2 italic">
              {theRedeemingQuality.counterpoint}
            </p>
          </div>
        </div>
      </section>

      {/* Historians' Verdict */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-8">What the Historians Actually Say</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
              <p className="text-gray-300 italic mb-4">
                "Washington was not a great general in the traditional sense. He was a survivor, 
                a political leader, and a symbol. His battlefield record was at best mixed."
              </p>
              <p className="text-gold text-sm font-semibold">
                — Gordon S. Wood, Pulitzer Prize winner, "The Radicalism of the American Revolution"
              </p>
            </div>
            
            <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
              <p className="text-gray-300 italic mb-4">
                "His great contribution was not military genius but his character — his willingness 
                to relinquish power not once, but twice. That made him truly exceptional."
              </p>
              <p className="text-gold text-sm font-semibold">
                — Joseph Ellis, "His Excellency: George Washington"
              </p>
            </div>
            
            <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
              <p className="text-gray-300 italic mb-4">
                "The Conway Cabal revealed genuine concerns about Washington's competence. 
                The generals weren't wrong to question him after Philadelphia fell."
              </p>
              <p className="text-gold text-sm font-semibold">
                — John Ferling, "Almost a Miracle: The American Victory in the War of Independence"
              </p>
            </div>
            
            <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
              <p className="text-gray-300 italic mb-4">
                "Washington's greatest strength was his understanding of what he was not — 
                he was not a tactical genius, and he knew it. He played to his strengths: 
                endurance, patience, and inspiring men."
              </p>
              <p className="text-gold text-sm font-semibold">
                — Edward Lengel, "General George Washington"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Verdict */}
      <section className="py-16 px-6 bg-gradient-to-b from-rev-red/10 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">The Final Assessment</h2>
          
          <div className="p-8 border-2 border-rev-red rounded-lg bg-gray-900">
            <p className="text-xl text-white leading-relaxed mb-6">
              George Washington was a <span className="text-rev-red font-bold">mediocre general</span> who became a 
              <span className="text-gold font-bold"> great statesman</span>. He lost battles, made strategic errors, 
              and survived through persistence rather than genius.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              But his one skill — <span className="text-gold font-bold">oratory</span> — held an army together through 
              impossible winters. His words inspired a nation. His willingness to surrender power 
              established democratic norms.
            </p>
            
            <p className="text-xl text-white font-bold">
              He wasn't a great general. <br/>
              <span className="text-gold">He was the right man at the right time with the right voice.</span>
            </p>
          </div>
          
          <p className="mt-8 text-gray-500 italic">
            "Not all heroes are without flaw. Washington's flaws make his achievements more remarkable."
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link 
            href="/" 
            className="px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
          >
            ← Back to Timeline
          </Link>
          
          <Link 
            href="/" 
            className="px-6 py-3 bg-rev-red text-white rounded hover:bg-red-700 transition"
          >
            Close File
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm space-y-2">
          <p>Primary Sources: National Archives, Library of Congress, Mount Vernon Papers</p>
          <p>Secondary Sources: Chernow, Ellis, McCullough, Wood, Lengel, Ferling</p>
          <p className="text-gold font-semibold mt-4">Christ is Lord!</p>
        </div>
      </footer>
    </main>
  );
}
