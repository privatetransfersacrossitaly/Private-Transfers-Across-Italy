/**
 * Which Milan airport is on your ticket? — EN + IT.
 *
 * Intent: the question a traveller has before booking anything ("my ticket
 * says Milan — which airport is that?"), not "Milan airport transfer", which
 * belongs to the Milan hub and the three airport pages. The post answers the
 * question and hands the reader to those pages.
 *
 * Every fact is already published on this site with its source, checked in
 * October 2026 (content/milan/milan.ts, malpensa.ts, linate.ts, bergamo.ts,
 * stations.ts): operators SEA and SACBO; Malpensa north-west in the province
 * of Varese, two terminals, largest intercontinental gateway; Linate closest
 * and smallest, mostly short/medium haul; Bergamo at Orio al Serio, about
 * 50 km from Milan and about 5 km from Bergamo; the Malpensa Express ends at
 * Cadorna; Area B / Area C. No prices, journey times or service promises.
 */
export default {
  posts: [
    {
      language: "en",
      slug: "which-milan-airport-am-i-flying-into",
      title: "Which Milan airport are you flying into?",
      excerpt:
        "Three airports are sold as Milan, run by two different companies, and one of them is about 50 km from the city. How to tell which one your ticket means, and why it matters before you arrange anything.",
      seo_description:
        "Three airports are sold as Milan, and one is about 50 km away. How to tell Malpensa, Linate and Bergamo apart on your ticket, and why it matters.",
      category: "Airport guide",
      tags: ["milan", "malpensa", "linate", "bergamo"],
      focus_keyword: "which milan airport",
      status: "published",
      content: `
<p>A ticket that says <strong>Milan</strong> can mean three different airports. Two of them are run by one company and the third by another; one is on the edge of the city, one is out in the province of Varese, and one is about 50 km away in the province of Bergamo. Before you book a car, a train or a hotel near "the airport", it is worth knowing which of the three you are actually flying into.</p>

<h2>The three airports sold as Milan</h2>
<ul>
  <li><strong>Milan Malpensa (MXP)</strong> is north-west of the city, in the province of Varese. It has two terminals and is Italy's largest intercontinental gateway, so long-haul flights to Milan almost always mean Malpensa. See <a href="/airports/milan-malpensa">Malpensa Airport</a>.</li>
  <li><strong>Milan Linate (LIN)</strong> is the city airport: the closest in and the smallest of the three, with mostly short- and medium-haul flights. See <a href="/airports/milan-linate">Linate Airport</a>.</li>
  <li><strong>Milan Bergamo (BGY)</strong> is not in Milan at all. Officially Il Caravaggio International Airport, it stands at Orio al Serio, about 5 km from Bergamo and about 50 km from Milan. See <a href="/airports/milan-bergamo">Bergamo Airport</a>.</li>
</ul>
<p>Malpensa and Linate are operated by SEA; Bergamo is operated by SACBO. That is why their websites, signage and information desks are separate, and why "the Milan airport" is never one place.</p>

<h2>How to tell which one your ticket means</h2>
<p>Look for the three-letter code next to the city name on your booking or boarding pass: <strong>MXP</strong>, <strong>LIN</strong> or <strong>BGY</strong>. The code is the one thing every airline prints the same way. If the booking only says "Milan", the flight details in the airline's own app or confirmation email will name the airport.</p>
<p>Check it again if your flight changes. A rebooked or cancelled flight can move you from one Milan airport to another, and the transfer has to follow.</p>

<h2>Why the airport changes the journey</h2>
<p>The distance is the obvious difference, but not the only one. Where you are staying in Milan matters too: the historic centre sits inside two traffic zones, <strong>Area B</strong> (a low-emission zone over most of the city) and <strong>Area C</strong> (a charged zone inside it, around the Cerchia dei Bastioni). For an address in the oldest streets, a meeting point a short walk away is often the workable answer. The <a href="/destinations/milan">Milan page</a> explains both zones and how each district works for a car.</p>
<p>If you are going straight on rather than into the city, the airport matters even more. A journey from Malpensa can go directly to the lake instead of through Milan; see <a href="/routes/malpensa-airport-to-lake-como">Malpensa Airport to Lake Como</a>.</p>

<h2>Train or car from each airport</h2>
<p>Malpensa has its own rail link: the Malpensa Express runs to Milano Cadorna, which is a different station from Milano Centrale and run by a different infrastructure manager. If your journey continues by train, the <a href="/destinations/milan/train-station-transfers">guide to Milan's stations</a> sets out which station is which.</p>
<p>For a car, each airport has its own route page with what a quotation needs and what changes at the city end:</p>
<ul>
  <li><a href="/routes/malpensa-airport-to-milan">Malpensa Airport to Milan</a></li>
  <li><a href="/routes/linate-airport-to-milan">Linate Airport to Milan</a></li>
  <li><a href="/routes/bergamo-airport-to-milan">Bergamo Airport to Milan</a></li>
</ul>

<h2>Sources</h2>
<p>Airport details are from the operators' own published information, and the traffic zones from the Comune di Milano, as checked for this site in October 2026: <a href="https://milanairports.com/en/group/technical-data">Milan Airports (SEA)</a>, <a href="https://www.milanbergamoairport.it/en/">Milan Bergamo Airport (SACBO)</a> and <a href="https://www.comune.milano.it/en/argomenti/mobilita/area-c">Comune di Milano, Area C</a>. Zone rules are set by city ordinance and change.</p>

<h2>Frequently Asked Questions</h2>
<h3 id="faq-1">Is Bergamo airport in Milan?</h3>
<p>No. Milan Bergamo stands at Orio al Serio, about 5 km from Bergamo and about 50 km from Milan, in the province of Bergamo. It is sold under Milan's name, but it is a separate airport run by a separate company.</p>
<h3 id="faq-2">Which Milan airport is closest to the city centre?</h3>
<p>Linate. It is the city airport, the closest in and the smallest of the three, with mostly short- and medium-haul flights.</p>
<h3 id="faq-3">How do I know which Milan airport my flight uses?</h3>
<p>Check the three-letter code on your booking or boarding pass: MXP is Malpensa, LIN is Linate and BGY is Bergamo. If the booking only says Milan, the airline's flight details will name the airport.</p>
`,
    },
    {
      language: "it",
      slug: "quale-aeroporto-di-milano",
      translation_of: "which-milan-airport-am-i-flying-into",
      title: "Quale aeroporto di Milano c'è sul vostro biglietto?",
      excerpt:
        "Tre aeroporti vengono venduti come Milano, gestiti da due società diverse, e uno di essi dista circa 50 km dalla città. Come capire quale indica il vostro biglietto, e perché conta prima di organizzare qualsiasi cosa.",
      seo_description:
        "Tre aeroporti vengono venduti come Milano e uno dista circa 50 km. Come distinguere Malpensa, Linate e Bergamo sul biglietto, e perché conta.",
      category: "Guida aeroporti",
      tags: ["milano", "malpensa", "linate", "bergamo"],
      focus_keyword: "quale aeroporto di milano",
      status: "published",
      content: `
<p>Un biglietto che dice <strong>Milano</strong> può indicare tre aeroporti diversi. Due sono gestiti da una società e il terzo da un'altra; uno è ai margini della città, uno in provincia di Varese e uno a circa 50 km, in provincia di Bergamo. Prima di prenotare un'auto, un treno o un albergo vicino "all'aeroporto", conviene sapere su quale dei tre atterrate davvero.</p>

<h2>I tre aeroporti venduti come Milano</h2>
<ul>
  <li><strong>Milano Malpensa (MXP)</strong> è a nord-ovest della città, in provincia di Varese. Ha due terminal ed è il principale scalo intercontinentale del Paese: un volo a lungo raggio per Milano significa quasi sempre Malpensa. Vedi <a href="/it/aeroporti/milano-malpensa">Aeroporto di Malpensa</a>.</li>
  <li><strong>Milano Linate (LIN)</strong> è l'aeroporto cittadino: il più vicino e il più piccolo dei tre, soprattutto con voli a corto e medio raggio. Vedi <a href="/it/aeroporti/milano-linate">Aeroporto di Linate</a>.</li>
  <li><strong>Milano Bergamo (BGY)</strong> non è a Milano. Ufficialmente Il Caravaggio International Airport, si trova a Orio al Serio, a circa 5 km da Bergamo e a circa 50 km da Milano. Vedi <a href="/it/aeroporti/milano-bergamo">Aeroporto di Bergamo</a>.</li>
</ul>
<p>Malpensa e Linate sono gestiti da SEA; Bergamo da SACBO. Per questo siti, segnaletica e punti informazioni sono separati, e "l'aeroporto di Milano" non è mai un posto solo.</p>

<h2>Come capire quale indica il vostro biglietto</h2>
<p>Cercate il codice di tre lettere accanto al nome della città sulla prenotazione o sulla carta d'imbarco: <strong>MXP</strong>, <strong>LIN</strong> o <strong>BGY</strong>. È l'unica cosa che ogni compagnia stampa allo stesso modo. Se la prenotazione dice solo "Milano", i dettagli del volo nell'app o nell'e-mail di conferma della compagnia indicano l'aeroporto.</p>
<p>Ricontrollate se il volo cambia: una riprotezione o una cancellazione può spostarvi da un aeroporto milanese all'altro, e il transfer deve seguirvi.</p>

<h2>Perché l'aeroporto cambia il viaggio</h2>
<p>La distanza è la differenza più evidente, ma non l'unica. Conta anche dove alloggiate: il centro storico si trova dentro due zone a traffico regolato, <strong>Area B</strong> (una zona a basse emissioni che copre gran parte della città) e <strong>Area C</strong> (una zona a pagamento al suo interno, nella Cerchia dei Bastioni). Per un indirizzo nelle vie più antiche, un punto d'incontro a breve distanza a piedi è spesso la soluzione praticabile. La <a href="/it/destinazioni/milano">pagina su Milano</a> spiega entrambe le zone e come funziona ogni quartiere per un'auto.</p>
<p>Se proseguite senza entrare in città, l'aeroporto conta ancora di più. Da Malpensa si può andare direttamente al lago senza passare da Milano; vedi <a href="/it/tratte/aeroporto-malpensa-lago-di-como">Da Malpensa al Lago di Como</a>.</p>

<h2>Treno o auto da ciascun aeroporto</h2>
<p>Malpensa ha un collegamento ferroviario proprio: il Malpensa Express arriva a Milano Cadorna, una stazione diversa da Milano Centrale e gestita da un altro gestore dell'infrastruttura. Se il viaggio prosegue in treno, la <a href="/it/destinazioni/milano/transfer-stazioni">guida alle stazioni di Milano</a> spiega quale stazione è quale.</p>
<p>Per un'auto, ogni aeroporto ha la sua pagina con ciò che serve per un preventivo e ciò che cambia all'arrivo in città:</p>
<ul>
  <li><a href="/it/tratte/aeroporto-malpensa-milano">Dall'aeroporto di Malpensa a Milano</a></li>
  <li><a href="/it/tratte/aeroporto-linate-milano">Dall'aeroporto di Linate a Milano</a></li>
  <li><a href="/it/tratte/aeroporto-bergamo-milano">Dall'aeroporto di Bergamo a Milano</a></li>
</ul>

<h2>Fonti</h2>
<p>I dati sugli aeroporti provengono dalle informazioni pubblicate dai gestori, e quelli sulle zone dal Comune di Milano, come verificati per questo sito a ottobre 2026: <a href="https://milanairports.com/en/group/technical-data">Milan Airports (SEA)</a>, <a href="https://www.milanbergamoairport.it/en/">Milan Bergamo Airport (SACBO)</a> e <a href="https://www.comune.milano.it/en/argomenti/mobilita/area-c">Comune di Milano, Area C</a>. Le regole delle zone sono fissate da ordinanza comunale e cambiano.</p>

<h2>Domande frequenti</h2>
<h3 id="faq-1">L'aeroporto di Bergamo è a Milano?</h3>
<p>No. Milano Bergamo si trova a Orio al Serio, a circa 5 km da Bergamo e a circa 50 km da Milano, in provincia di Bergamo. È venduto con il nome di Milano, ma è un aeroporto distinto, gestito da un'altra società.</p>
<h3 id="faq-2">Qual è l'aeroporto più vicino al centro di Milano?</h3>
<p>Linate. È l'aeroporto cittadino, il più vicino e il più piccolo dei tre, soprattutto con voli a corto e medio raggio.</p>
<h3 id="faq-3">Come capisco quale aeroporto di Milano usa il mio volo?</h3>
<p>Controllate il codice di tre lettere sulla prenotazione o sulla carta d'imbarco: MXP è Malpensa, LIN è Linate e BGY è Bergamo. Se la prenotazione dice solo Milano, i dettagli del volo della compagnia indicano l'aeroporto.</p>
`,
    },
  ],
};
