const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const header = document.querySelector(".site-header");
const year = document.querySelector("#year");
const languageButtons = document.querySelectorAll("[data-lang]");
const originalTitle = document.title;
const originalDescription = document.querySelector("meta[name='description']")?.getAttribute("content") || "";

year.textContent = new Date().getFullYear();

const translations = {
  en: {
    title: "Robert Martic | Web Design and Development",
    description: "Robert Martic creates modern websites for trades, small businesses and independent professionals.",
    text: {
      ".site-nav a[href='#usluge']": "Services",
      ".site-nav a[href='#proces']": "Process",
      ".site-nav a[href='#radovi']": "Approach",
      ".site-nav a[href='#cijene']": "Pricing",
      ".site-nav a[href='#kontakt']": "Contact",
      ".hero-content .eyebrow": "Websites for trades and small businesses",
      ".hero-content h1": "A modern website that clearly presents your business.",
      ".hero-copy":
        "I create fast, clear and professional websites for people who want to look serious online, get more inquiries and have a website that is easy to maintain.",
      ".hero-actions .primary": "Request an offer",
      ".hero-actions .secondary": "See the approach",
      ".hero-proof span:nth-child(1)": "Responsive design",
      ".hero-proof span:nth-child(2)": "SEO basics",
      ".hero-proof span:nth-child(3)": "Fast delivery",
      ".hero-stats article:nth-child(1) strong": "5 sec.",
      ".hero-stats article:nth-child(1) span": "clear first impression",
      ".hero-stats article:nth-child(2) span": "mobile responsive",
      ".hero-stats article:nth-child(3) span": "basic setup",
      ".intro .eyebrow": "What you get",
      ".intro h2": "A website that looks professional and does its job.",
      ".intro > p":
        "The focus is on a clear message, quality design, smooth navigation and contact points that guide visitors toward an inquiry. No unnecessary complexity, just enough care to make your business feel trustworthy.",
      ".services .section-heading .eyebrow": "Services",
      ".services .section-heading h2": "Web solutions for real business needs",
      ".service-card:nth-child(1) h3": "Business websites",
      ".service-card:nth-child(1) p":
        "A professional website for a trade, company, service or personal brand, adapted for phones and desktops.",
      ".service-card:nth-child(2) h3": "Landing pages",
      ".service-card:nth-child(2) p":
        "Pages for campaigns, offers and promotions with one clear goal: turning visitors into inquiries.",
      ".service-card:nth-child(3) h3": "Website redesign",
      ".service-card:nth-child(3) p":
        "Refreshing an outdated website with a better structure, modern design and clearer calls to action.",
      ".service-card:nth-child(4) h3": "Maintenance and updates",
      ".service-card:nth-child(4) p":
        "Small changes, technical support, speed optimization and new sections as your business grows.",
      ".process .section-heading .eyebrow": "Process",
      ".process .section-heading h2": "A simple path from idea to published website",
      ".steps article:nth-child(1) h3": "Conversation and goal",
      ".steps article:nth-child(1) p":
        "We define who you are speaking to, what you offer and what visitors should do after landing on the website.",
      ".steps article:nth-child(2) h3": "Structure and copy",
      ".steps article:nth-child(2) p":
        "I shape the sections, messages and content so the website is clear, persuasive and easy to read.",
      ".steps article:nth-child(3) h3": "Design and development",
      ".steps article:nth-child(3) p":
        "I create the visual design and functionality, adapt it for mobile and prepare the website for launch.",
      ".steps article:nth-child(4) h3": "Launch and support",
      ".steps article:nth-child(4) p":
        "The website goes live, and after that I can help with updates, maintenance and future expansion.",
      ".work .section-heading .eyebrow": "Approach",
      ".work .section-heading h2": "Every project is built around a clear message",
      ".feature-card:nth-child(1) .tag": "Example structure",
      ".feature-card:nth-child(1) h3": "Website for a local business",
      ".feature-card:nth-child(1) p:last-child":
        "The first screen explains who you are and what you offer, followed by services, trust, process, frequently asked questions and a contact form.",
      ".feature-card:nth-child(2) .tag": "Result",
      ".feature-card:nth-child(2) h3": "Less explaining, more concrete inquiries.",
      ".feature-card:nth-child(2) p:last-child":
        "A good website does not have to be large. It has to be clear, fast and persuasive enough for the visitor to take the next step.",
      ".pricing .section-heading .eyebrow": "Pricing",
      ".pricing .section-heading h2": "Guide packages for an easier first conversation",
      ".price-card:nth-child(1) .price": "from 350 EUR",
      ".price-card:nth-child(1) p:not(.price)": "A simple presentation website for a new service, trade or personal profile.",
      ".price-card:nth-child(1) li:nth-child(1)": "Up to 5 sections",
      ".price-card:nth-child(1) li:nth-child(2)": "Mobile responsive",
      ".price-card:nth-child(1) li:nth-child(3)": "Contact form",
      ".price-card:nth-child(2) h3": "Business",
      ".price-card:nth-child(2) p:not(.price)": "A complete business website with more content, better structure and SEO basics.",
      ".price-card:nth-child(2) .price": "from 650 EUR",
      ".price-card:nth-child(2) li:nth-child(1)": "Multiple pages or sections",
      ".price-card:nth-child(2) li:nth-child(2)": "Basic optimization",
      ".price-card:nth-child(2) li:nth-child(3)": "Publishing to your domain",
      ".price-card:nth-child(3) h3": "Maintenance",
      ".price-card:nth-child(3) .price": "by agreement",
      ".price-card:nth-child(3) p:not(.price)":
        "Support after launch for changes, updates, new sections and technical assistance.",
      ".price-card:nth-child(3) li:nth-child(1)": "Small updates",
      ".price-card:nth-child(3) li:nth-child(2)": "Technical check",
      ".price-card:nth-child(3) li:nth-child(3)": "Growth advice",
      ".faq .section-heading h2": "Frequently asked questions",
      ".faq-list details:nth-child(1) summary": "How long does website development take?",
      ".faq-list details:nth-child(1) p":
        "A smaller website can be finished within a few days, while a larger project depends on the content and number of revisions.",
      ".faq-list details:nth-child(2) summary": "Can I get help with the text?",
      ".faq-list details:nth-child(2) p":
        "Yes. I can shape the structure and suggest copy so the website sounds clear and professional.",
      ".faq-list details:nth-child(3) summary": "Do you publish the website to a domain?",
      ".faq-list details:nth-child(3) p":
        "Yes. I can help with the domain, hosting, website setup and basic technical preparation.",
      ".contact .eyebrow": "Contact",
      ".contact h2": "Have an idea for a website? Send a short message.",
      ".contact-copy > p:not(.eyebrow)":
        "Write what you want to present, whether you already have a domain and what website style you like. I will reply with an initial suggestion and an estimated offer.",
      ".contact-form label:nth-child(1)": "Full name",
      ".contact-form label:nth-child(2)": "Email",
      ".contact-form label:nth-child(3)": "What do you need?",
      ".contact-form option:nth-child(1)": "New website",
      ".contact-form option:nth-child(2)": "Redesign of an existing website",
      ".contact-form option:nth-child(3)": "Landing page",
      ".contact-form option:nth-child(4)": "Maintenance / updates",
      ".contact-form label:nth-child(4)": "Message",
      ".contact-form button": "Send inquiry",
      ".footer-brand p":
        "Modern website development for trades, small businesses and independent professionals who want a clearer online presentation.",
      ".footer-column:nth-child(2) h2": "Website",
      ".footer-column:nth-child(2) a:nth-child(2)": "Services",
      ".footer-column:nth-child(2) a:nth-child(3)": "Process",
      ".footer-column:nth-child(2) a:nth-child(4)": "Approach",
      ".footer-column:nth-child(2) a:nth-child(5)": "Pricing",
      ".footer-column:nth-child(3) h2": "Services",
      ".footer-column:nth-child(3) span:nth-child(2)": "Business websites",
      ".footer-column:nth-child(3) span:nth-child(3)": "Landing pages",
      ".footer-column:nth-child(3) span:nth-child(4)": "Website redesign",
      ".footer-column:nth-child(3) span:nth-child(5)": "Maintenance and updates",
      ".footer-contact h2": "Contact",
      ".footer-contact span": "Croatia / remote collaboration",
      ".footer-cta": "Send inquiry",
      ".footer-bottom a": "Back to top"
    },
    footerBottom: "© {year} Robert Martic. All rights reserved."
  },
  de: {
    title: "Robert Martic | Webdesign und Webentwicklung",
    description:
      "Robert Martic erstellt moderne Websites für Handwerksbetriebe, kleine Unternehmen und selbstständige Fachleute.",
    text: {
      ".site-nav a[href='#usluge']": "Leistungen",
      ".site-nav a[href='#proces']": "Ablauf",
      ".site-nav a[href='#radovi']": "Ansatz",
      ".site-nav a[href='#cijene']": "Preise",
      ".site-nav a[href='#kontakt']": "Kontakt",
      ".hero-content .eyebrow": "Websites für Betriebe und kleine Unternehmen",
      ".hero-content h1": "Eine moderne Website, die dein Unternehmen klar präsentiert.",
      ".hero-copy":
        "Ich erstelle schnelle, übersichtliche und professionelle Websites für Menschen, die online seriös auftreten, mehr Anfragen erhalten und eine leicht wartbare Website haben möchten.",
      ".hero-actions .primary": "Angebot anfragen",
      ".hero-actions .secondary": "Ansatz ansehen",
      ".hero-proof span:nth-child(1)": "Responsive Design",
      ".hero-proof span:nth-child(2)": "SEO-Grundlagen",
      ".hero-proof span:nth-child(3)": "Schnelle Umsetzung",
      ".hero-stats article:nth-child(1) strong": "5 Sek.",
      ".hero-stats article:nth-child(1) span": "klarer erster Eindruck",
      ".hero-stats article:nth-child(2) span": "mobil optimiert",
      ".hero-stats article:nth-child(3) span": "Basis-Setup",
      ".intro .eyebrow": "Was du bekommst",
      ".intro h2": "Eine Website, die professionell aussieht und ihren Zweck erfüllt.",
      ".intro > p":
        "Im Fokus stehen eine klare Botschaft, hochwertiges Design, einfache Navigation und Kontaktpunkte, die Besucher zur Anfrage führen. Ohne unnötige Komplexität, aber mit genug Sorgfalt, damit dein Unternehmen vertrauenswürdig wirkt.",
      ".services .section-heading .eyebrow": "Leistungen",
      ".services .section-heading h2": "Weblösungen für echte Geschäftsanforderungen",
      ".service-card:nth-child(1) h3": "Business-Websites",
      ".service-card:nth-child(1) p":
        "Eine professionelle Website für Betrieb, Unternehmen, Dienstleistung oder Personal Brand, optimiert für Smartphone und Desktop.",
      ".service-card:nth-child(2) h3": "Landingpages",
      ".service-card:nth-child(2) p":
        "Seiten für Kampagnen, Angebote und Aktionen mit einem klaren Ziel: Besucher in Anfragen verwandeln.",
      ".service-card:nth-child(3) h3": "Website-Redesign",
      ".service-card:nth-child(3) p":
        "Modernisierung einer veralteten Website mit besserer Struktur, zeitgemäßem Design und klareren Handlungsaufforderungen.",
      ".service-card:nth-child(4) h3": "Wartung und Anpassungen",
      ".service-card:nth-child(4) p":
        "Kleine Änderungen, technischer Support, Geschwindigkeitsoptimierung und neue Bereiche, wenn dein Geschäft wächst.",
      ".process .section-heading .eyebrow": "Ablauf",
      ".process .section-heading h2": "Ein einfacher Weg von der Idee zur veröffentlichten Website",
      ".steps article:nth-child(1) h3": "Gespräch und Ziel",
      ".steps article:nth-child(1) p":
        "Wir definieren, wen du ansprichst, was du anbietest und was Besucher nach dem Aufruf der Website tun sollen.",
      ".steps article:nth-child(2) h3": "Struktur und Texte",
      ".steps article:nth-child(2) p":
        "Ich strukturiere Abschnitte, Botschaften und Inhalte so, dass die Website klar, überzeugend und leicht lesbar ist.",
      ".steps article:nth-child(3) h3": "Design und Entwicklung",
      ".steps article:nth-child(3) p":
        "Ich erstelle Design und Funktionalität, passe alles für mobile Geräte an und bereite die Website für den Launch vor.",
      ".steps article:nth-child(4) h3": "Launch und Support",
      ".steps article:nth-child(4) p":
        "Die Website geht online, danach kann ich bei Anpassungen, Wartung und zukünftiger Erweiterung unterstützen.",
      ".work .section-heading .eyebrow": "Ansatz",
      ".work .section-heading h2": "Jedes Projekt wird um eine klare Botschaft gebaut",
      ".feature-card:nth-child(1) .tag": "Beispielstruktur",
      ".feature-card:nth-child(1) h3": "Website für ein lokales Unternehmen",
      ".feature-card:nth-child(1) p:last-child":
        "Der erste Bildschirm erklärt, wer du bist und was du anbietest. Danach folgen Leistungen, Vertrauen, Ablauf, häufige Fragen und ein Kontaktformular.",
      ".feature-card:nth-child(2) .tag": "Ergebnis",
      ".feature-card:nth-child(2) h3": "Weniger Erklären, mehr konkrete Anfragen.",
      ".feature-card:nth-child(2) p:last-child":
        "Eine gute Website muss nicht groß sein. Sie muss klar, schnell und überzeugend genug sein, damit Besucher den nächsten Schritt machen.",
      ".pricing .section-heading .eyebrow": "Preise",
      ".pricing .section-heading h2": "Orientierungspakete für ein leichteres Erstgespräch",
      ".price-card:nth-child(1) .price": "ab 350 EUR",
      ".price-card:nth-child(1) p:not(.price)": "Eine einfache Präsentationswebsite für eine neue Dienstleistung, einen Betrieb oder ein persönliches Profil.",
      ".price-card:nth-child(1) li:nth-child(1)": "Bis zu 5 Abschnitte",
      ".price-card:nth-child(1) li:nth-child(2)": "Mobil optimiert",
      ".price-card:nth-child(1) li:nth-child(3)": "Kontaktformular",
      ".price-card:nth-child(2) h3": "Business-Paket",
      ".price-card:nth-child(2) p:not(.price)": "Eine komplette Business-Website mit mehr Inhalt, besserer Struktur und SEO-Grundlagen.",
      ".price-card:nth-child(2) .price": "ab 650 EUR",
      ".price-card:nth-child(2) li:nth-child(1)": "Mehrere Seiten oder Abschnitte",
      ".price-card:nth-child(2) li:nth-child(2)": "Basisoptimierung",
      ".price-card:nth-child(2) li:nth-child(3)": "Veröffentlichung auf deiner Domain",
      ".price-card:nth-child(3) h3": "Wartung",
      ".price-card:nth-child(3) .price": "nach Vereinbarung",
      ".price-card:nth-child(3) p:not(.price)":
        "Support nach dem Launch für Änderungen, Anpassungen, neue Bereiche und technische Unterstützung.",
      ".price-card:nth-child(3) li:nth-child(1)": "Kleine Anpassungen",
      ".price-card:nth-child(3) li:nth-child(2)": "Technische Prüfung",
      ".price-card:nth-child(3) li:nth-child(3)": "Wachstumsberatung",
      ".faq .section-heading h2": "Häufige Fragen",
      ".faq-list details:nth-child(1) summary": "Wie lange dauert die Erstellung einer Website?",
      ".faq-list details:nth-child(1) p":
        "Eine kleinere Website kann innerhalb weniger Tage fertig sein, während ein größeres Projekt vom Inhalt und der Anzahl der Korrekturen abhängt.",
      ".faq-list details:nth-child(2) summary": "Kann ich Hilfe bei den Texten bekommen?",
      ".faq-list details:nth-child(2) p":
        "Ja. Ich kann Struktur und Texte vorschlagen, damit die Website klar und professionell klingt.",
      ".faq-list details:nth-child(3) summary": "Veröffentlichst du die Website auf einer Domain?",
      ".faq-list details:nth-child(3) p":
        "Ja. Ich kann bei Domain, Hosting, Website-Einrichtung und grundlegender technischer Vorbereitung helfen.",
      ".contact .eyebrow": "Kontakt",
      ".contact h2": "Hast du eine Idee für eine Website? Sende eine kurze Nachricht.",
      ".contact-copy > p:not(.eyebrow)":
        "Schreibe, was du präsentieren möchtest, ob du bereits eine Domain hast und welcher Website-Stil dir gefällt. Ich antworte mit einem ersten Vorschlag und einer groben Einschätzung.",
      ".contact-form label:nth-child(1)": "Vor- und Nachname",
      ".contact-form label:nth-child(2)": "E-Mail",
      ".contact-form label:nth-child(3)": "Was brauchst du?",
      ".contact-form option:nth-child(1)": "Neue Website",
      ".contact-form option:nth-child(2)": "Redesign einer bestehenden Website",
      ".contact-form option:nth-child(3)": "Landingpage",
      ".contact-form option:nth-child(4)": "Wartung / Anpassungen",
      ".contact-form label:nth-child(4)": "Nachricht",
      ".contact-form button": "Anfrage senden",
      ".footer-brand p":
        "Moderne Websites für Betriebe, kleine Unternehmen und selbstständige Fachleute, die eine klarere Online-Präsentation möchten.",
      ".footer-column:nth-child(2) h2": "Website",
      ".footer-column:nth-child(2) a:nth-child(2)": "Leistungen",
      ".footer-column:nth-child(2) a:nth-child(3)": "Ablauf",
      ".footer-column:nth-child(2) a:nth-child(4)": "Ansatz",
      ".footer-column:nth-child(2) a:nth-child(5)": "Preise",
      ".footer-column:nth-child(3) h2": "Leistungen",
      ".footer-column:nth-child(3) span:nth-child(2)": "Business-Websites",
      ".footer-column:nth-child(3) span:nth-child(3)": "Landingpages",
      ".footer-column:nth-child(3) span:nth-child(4)": "Website-Redesign",
      ".footer-column:nth-child(3) span:nth-child(5)": "Wartung und Anpassungen",
      ".footer-contact h2": "Kontakt",
      ".footer-contact span": "Kroatien / Online-Zusammenarbeit",
      ".footer-cta": "Anfrage senden",
      ".footer-bottom a": "Zurück nach oben"
    },
    footerBottom: "© {year} Robert Martic. Alle Rechte vorbehalten."
  }
};

const originalContent = new Map();
const originalLabelText = new Map();

const rememberOriginal = (selector) => {
  const element = document.querySelector(selector);

  if (element && !originalContent.has(selector)) {
    originalContent.set(selector, element.innerHTML);

    if (element.matches("label")) {
      const textNode = Array.from(element.childNodes).find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
      originalLabelText.set(selector, textNode?.textContent.trim() || "");
    }
  }
};

Object.values(translations).forEach((language) => {
  Object.keys(language.text).forEach(rememberOriginal);
});
rememberOriginal(".footer-bottom p");

const setElementText = (selector, value) => {
  const element = document.querySelector(selector);

  if (element) {
    if (element.matches("label")) {
      const textNode = Array.from(element.childNodes).find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());

      if (textNode) {
        textNode.textContent = `\n            ${value}\n            `;
      }

      return;
    }

    element.textContent = value;
  }
};

const applyLanguage = (lang) => {
  const language = translations[lang];
  const description = document.querySelector("meta[name='description']");

  document.documentElement.lang = lang;
  languageButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.lang === lang));

  if (!language) {
    document.title = originalTitle;
    if (description) {
      description.setAttribute("content", originalDescription);
    }
    document.querySelectorAll("[data-lang]").forEach((button) => button.classList.toggle("is-active", button.dataset.lang === "hr"));
    originalContent.forEach((value, selector) => {
      const element = document.querySelector(selector);

      if (element) {
        if (element.matches("label")) {
          setElementText(selector, originalLabelText.get(selector) || "");
          return;
        }

        element.innerHTML = value;
      }
    });
    localStorage.setItem("preferredLanguage", "hr");
    return;
  }

  document.title = language.title;
  if (description) {
    description.setAttribute("content", language.description);
  }

  Object.entries(language.text).forEach(([selector, value]) => setElementText(selector, value));
  setElementText(".footer-bottom p", language.footerBottom.replace("{year}", new Date().getFullYear()));
  localStorage.setItem("preferredLanguage", lang);
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

const savedLanguage = localStorage.getItem("preferredLanguage");

if (savedLanguage && (savedLanguage === "hr" || translations[savedLanguage])) {
  applyLanguage(savedLanguage);
}

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const revealTargets = document.querySelectorAll(
  ".section-heading, .intro > *, .service-card, .steps article, .feature-card, .price-card, .faq-list details, .contact-copy, .contact-form"
);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealTargets.forEach((target, index) => {
    target.classList.add("reveal");
    target.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    revealObserver.observe(target);
  });
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}
