export type Language = "en" | "ja";

export interface TranslationDictionary {
  // Navigation & Header
  nav: {
    products: string;
    capabilities: string;
    services: string;
    blog: string;
    contact: string;
    tryLive: string;
    contactSales: string;
    liveApp: string;
    available: string;
    soon: string;
    productsDescription: Record<string, string>;
  };
  // Hero Section
  hero: {
    badge: string;
    headlinePart1: string;
    headlinePart2: string;
    subheadline: string;
    tryCopilot: string;
    exploreTorii: string;
    statsCallout: string;
    statsSub: string;
    liveMeetingNotice: string;
    activeCallBadge: string;
    speakerQuery: string;
    copilotAnswer: string;
    latencyBadge: string;
    copyAnswer: string;
    actionExtracted: string;
    syncedSlack: string;
    trustedBy: string;
  };
  // Five AI Systems (ScrollStory)
  systems: {
    sectionLabel: string;
    titlePart1: string;
    titlePart2: string;
    description: string;
    stepCount: string;
    liveTag: string;
    comingSoonTag: string;
    availableTag: string;
    tryLiveBtn: string;
    exploreBtn: string;
    viewDetailsBtn: string;
    items: {
      n: string;
      title: string;
      headline: string;
      body: string;
      stat: [string, string];
    }[];
  };
  // Capability Rail (HorizontalRail)
  rail: {
    sectionLabel: string;
    title: string;
    description: string;
    statusBadge: string;
    pauseBtn: string;
    resumeBtn: string;
    stepPrefix: string;
    cards: {
      n: string;
      product: string;
      title: string;
      body: string;
      tag: string;
      badge: string;
    }[];
  };
  // Products & Services (Capabilities)
  capabilities: {
    sectionLabel: string;
    titlePart1: string;
    titlePart2: string;
    description: string;
    readHowWeWork: string;
    tryLiveApp: string;
    exploreService: string;
    learnMore: string;
    items: {
      title: string;
      body: string;
      status: string;
    }[];
  };
  // Stats
  stats: {
    items: [string, string][];
  };
  // Use Cases
  useCases: {
    sectionLabel: string;
    title: string;
    pipelineActive: string;
    latencyPrefix: string;
    cases: {
      label: string;
      title: string;
      body: string;
      bullets: string[];
      pipelineBadge: string;
      latency: string;
      linkText: string;
      steps: {
        title: string;
        sub: string;
      }[];
    }[];
  };
  // Quotes / Testimonials
  quotes: {
    sectionLabel: string;
    title: string;
    verifiedCustomer: string;
    items: {
      q: string;
      n: string;
      r: string;
      c: string;
      product: string;
    }[];
  };
  // FAQ
  faq: {
    sectionLabel: string;
    titlePart1: string;
    titlePart2: string;
    description: string;
    contactUs: string;
    items: [string, string][];
  };
  // Final CTA
  cta: {
    copilotBadge: string;
    immigrationBadge: string;
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    tryCopilotBtn: string;
    contactBtn: string;
    securityNote: string;
  };
  // Footer
  footer: {
    tagline: string;
    supportEmail: string;
    followUs: string;
    cols: {
      title: string;
      links: string[];
    }[];
    copyright: string;
    certifications: string;
  };
  // Contact Page
  contact: {
    badge: string;
    headline: string;
    subheadline: string;
    sendMessageTitle: string;
    sendMessageSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    sendingBtn: string;
    successMsg: string;
    errorMsg: string;
    otherWaysTitle: string;
    otherWaysSubtitle: string;
    supportTitle: string;
    officeTitle: string;
    officeAddress: string;
  };
  // Blog Page
  blog: {
    badge: string;
    title: string;
    description: string;
    readArticle: string;
    backToBlog: string;
    newsletterTitle: string;
    newsletterSubtitle: string;
    newsletterPlaceholder: string;
    newsletterBtn: string;
    newsletterSuccess: string;
    shareArticle: string;
    moreArticles: string;
    posts: Record<
      string,
      {
        title: string;
        body: string;
        tag: string;
        date: string;
        readTime: string;
        authorRole: string;
        content: {
          intro: string;
          sections: {
            heading: string;
            text: string;
            quote?: string;
            bullets?: string[];
            codeSnippet?: string;
          }[];
          conclusion: string;
        };
      }
    >;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      products: "Products",
      capabilities: "Capabilities",
      services: "Services",
      blog: "Blog",
      contact: "Contact",
      tryLive: "Try Copilot Live",
      contactSales: "Contact Sales",
      liveApp: "Live",
      available: "Available",
      soon: "Soon",
      productsDescription: {
        "NoruvaAI Copilot": "Live meeting notes, real-time Q&A copilot",
        "Torii Immigration": "Route guidance & auto-filled visa packets",
        "Agentic AI Services": "Custom enterprise multi-agent systems",
        "Law Assistant": "Cited research & contract drafting",
        "Learning Assistant": "Adaptive courseware & tutoring loops",
      },
    },
    hero: {
      badge: "Applied AI Software Systems",
      headlinePart1: "Software that thinks,",
      headlinePart2: "engineers who deliver.",
      subheadline:
        "Noruva Labs builds applied AI assistants for meetings, immigration filings, legal research and education — plus bespoke agentic workflows for enterprise operations.",
      tryCopilot: "Try NoruvaAI Copilot",
      exploreTorii: "Explore Torii Immigration",
      statsCallout: "65,000+ structured sessions completed",
      statsSub: "across 4 enterprise assistants",
      liveMeetingNotice: "Live Meeting Preview",
      activeCallBadge: "Google Meet · Active Call",
      speakerQuery: "What is the token refresh protocol under our OAuth implementation?",
      copilotAnswer:
        "Under RFC 6749 Section 6, refresh tokens are exchanged at /oauth/token with max_age=86400. PR #402 implements auto-rotation with single-use revocation.",
      latencyBadge: "380ms Latency",
      copyAnswer: "Copy Answer",
      actionExtracted: "Action item extracted: PR #402 token rotation review",
      syncedSlack: "Synced to Jira & Slack #engineering",
      trustedBy: "Empowering teams across meetings, immigration, legal, and education",
    },
    systems: {
      sectionLabel: "What we build",
      titlePart1: "Five AI systems,",
      titlePart2: "one engineering team",
      description:
        "Walk through our live apps and upcoming software suite. Scroll down or click below to explore each system.",
      stepCount: "of",
      liveTag: "Live",
      comingSoonTag: "Coming Soon",
      availableTag: "Available",
      tryLiveBtn: "Try App Live",
      exploreBtn: "Explore Service",
      viewDetailsBtn: "View Details",
      items: [
        {
          n: "01",
          title: "NoruvaAI Copilot",
          headline: "Hear the question. See the answer.",
          body: "Captures live meeting calls, transcribes questions in real-time, extracts action items, and hands you instant answers across Google Meet, Zoom, Webex, and LeetCode.",
          stat: ["Meetings structured", "48k"],
        },
        {
          n: "02",
          title: "Torii Immigration",
          headline: "File your visa application correctly.",
          body: "Torii walks you from 'which forms do I even need?' to a submission-ready packet: branching intake, document checklists, auto-filled forms, and deadline tracking.",
          stat: ["Case types covered", "120+"],
        },
        {
          n: "03",
          title: "Law Assistant",
          headline: "Precedent-grounded research & drafting.",
          body: "Research, summarisation and drafting grounded in your own matter files and public sources — every answer carries a citation back to the exact paragraph.",
          stat: ["Answers with citations", "100%"],
        },
        {
          n: "04",
          title: "Learning Assistant",
          headline: "Personalized study loops for every course.",
          body: "Generates interactive curriculum, adaptive quizzes and personalized study loops for students, corporate teams and educational institutions.",
          stat: ["Active learners", "15k+"],
        },
        {
          n: "05",
          title: "Agentic AI Services",
          headline: "Custom enterprise agent systems.",
          body: "Beyond our products we design, build and run custom agent systems inside your stack: tool integrations, evaluations, approvals and deployment support from our engineers.",
          stat: ["Typical first build", "6 wks"],
        },
      ],
    },
    rail: {
      sectionLabel: "Product capability rail",
      title: "What our specialized software and engineers deliver",
      description:
        "Continuous right-to-left stream across NoruvaAI Copilot, Torii Immigration, Law, Learning, and Custom Builds.",
      statusBadge: "Scrolling Right to Left",
      pauseBtn: "Pause",
      resumeBtn: "Resume",
      stepPrefix: "Step",
      cards: [
        {
          n: "01",
          product: "NoruvaAI Copilot",
          title: "Real-time Call Q&A Copilot",
          body: "Transcribes questions instantly as spoken on Google Meet, Zoom, and Webex, overlaying ideal responses in under 400ms.",
          tag: "Live App",
          badge: "400ms Latency",
        },
        {
          n: "02",
          product: "NoruvaAI Copilot",
          title: "Action Item & Debrief Sync",
          body: "Automatically identifies commitments, task owners, and target deadlines during calls, pushing directly to Jira & Slack.",
          tag: "Live App",
          badge: "Auto Board Sync",
        },
        {
          n: "03",
          product: "Torii Immigration",
          title: "Branching Route Intake",
          body: "Guides applicants and legal consultants through dynamic questionnaires mapping eligibility across 120+ global visa routes.",
          tag: "Torii Suite",
          badge: "120+ Visa Routes",
        },
        {
          n: "04",
          product: "Torii Immigration",
          title: "Auto-Filled Government Packets",
          body: "Compiles document checklists, monitors certificate expiry dates, and populates official government submission forms.",
          tag: "Torii Suite",
          badge: "Submission Ready",
        },
        {
          n: "05",
          product: "Law Assistant",
          title: "Paragraph-Cited Research",
          body: "Searches internal matter files and public judicial records, delivering precedent summaries where every assertion carries a paragraph citation.",
          tag: "Law AI",
          badge: "100% Citation Grounding",
        },
        {
          n: "06",
          product: "Law Assistant",
          title: "Precedent Clause Redlining",
          body: "Compares contract terms against firm playbooks, extracting risk flags, custom indemnities, and recommended redline edits.",
          tag: "Law AI",
          badge: "Playbook Redlining",
        },
        {
          n: "07",
          product: "Learning Assistant",
          title: "Adaptive Practice Quizzes",
          body: "Transforms static syllabi and course slides into spaced-repetition modules and self-pacing practice quizzes tailored to student mastery.",
          tag: "EdTech AI",
          badge: "Adaptive Syllabus",
        },
        {
          n: "08",
          product: "Learning Assistant",
          title: "Real-time Tutoring Feedback",
          body: "Provides instant constructive feedback on student submissions, aligning answers with grading rubrics and learning objectives.",
          tag: "EdTech AI",
          badge: "Instant Rubrics",
        },
        {
          n: "09",
          product: "Agentic AI Services",
          title: "Custom Stack Integration",
          body: "Engineered AI agent workflows tailored to your custom databases, API endpoints, tool integrations, and human-in-the-loop approvals.",
          tag: "Enterprise",
          badge: "Custom Agent Build",
        },
        {
          n: "10",
          product: "Agentic AI Services",
          title: "Evaluation & Production Rollout",
          body: "Full testing suites, benchmark evaluation frameworks, and dedicated engineering support to ensure production safety and speed.",
          tag: "Enterprise",
          badge: "6-Week Deployment",
        },
      ],
    },
    capabilities: {
      sectionLabel: "Products & services",
      titlePart1: "Software first,",
      titlePart2: "AI where it earns it",
      description:
        "We build specialized AI products — starting with our live NoruvaAI call copilot and Torii immigration suite.",
      readHowWeWork: "Read how we work",
      tryLiveApp: "Try Live App",
      exploreService: "Explore Service",
      learnMore: "Learn More",
      items: [
        {
          title: "NoruvaAI Copilot",
          body: "Live transcripts, automated action item extraction, and real-time call copilot.",
          status: "Live",
        },
        {
          title: "Torii Immigration",
          body: "Route guidance, document checklists, auto-filled forms, and deadline tracking.",
          status: "Live",
        },
        {
          title: "Law Assistant",
          body: "Precedent-grounded research, matter summaries, and clause drafting with paragraph citations.",
          status: "Coming Soon",
        },
        {
          title: "Learning Assistant",
          body: "Adaptive courseware, automated tutoring, interactive quizzes and student progress tracking.",
          status: "Coming Soon",
        },
        {
          title: "Agentic AI Services",
          body: "Custom agentic systems designed, built and integrated directly into your existing enterprise stack.",
          status: "Available",
        },
        {
          title: "Engineering Support",
          body: "Our engineers stay on after launch: continuous evals, model tuning, latency monitoring, and safety audits.",
          status: "Included",
        },
      ],
    },
    stats: {
      items: [
        ["05", "Products & AI Services"],
        ["65k+", "Sessions & loops run"],
        ["15k+", "Active learners supported"],
        ["6 wks", "Typical custom agent build"],
      ],
    },
    useCases: {
      sectionLabel: "In practice",
      title: "Built for work with real consequences",
      pipelineActive: "Pipeline Active",
      latencyPrefix: "Latency",
      cases: [
        {
          label: "Meeting Assistant",
          title: "Turn long conversations into instant action items",
          body: "Capture live transcripts, extract owner assignments, generate executive debrief summaries, and push action items straight to your issue tracker in under 400ms.",
          bullets: [
            "Live streaming transcript with multi-speaker diarization",
            "Automated action item extraction & task assignment",
            "Executive debrief summaries synced directly to Jira & Slack",
          ],
          pipelineBadge: "Live Audio Pipeline",
          latency: "380ms",
          linkText: "Try NoruvaAI Copilot",
          steps: [
            { title: "record sync", sub: "48kHz multi-speaker audio capture stream" },
            { title: "parse transcript", sub: "Semantic speech-to-text & Q&A diarization" },
            { title: "extract tasks", sub: "Detect action items, assignees & target dates" },
            { title: "sync CRM", sub: "Automated ticket dispatch to Jira, Linear & Slack" },
          ],
        },
        {
          label: "Immigration Assistant",
          title: "Every case, every document, every deadline",
          body: "Answer eligibility questions, pick the right route, and generate the exact evidence checklist. Missing or expiring documents surface before they become a refusal.",
          bullets: [
            "Dynamic branching route eligibility across 120+ pathways",
            "Automated government form auto-population & evidence audit",
            "Real-time certificate expiry & submission deadline tracking",
          ],
          pipelineBadge: "Route Compliance Engine",
          latency: "240ms",
          linkText: "Explore Torii Immigration",
          steps: [
            { title: "intake questionnaire", sub: "Dynamic applicant profile & eligibility scoring" },
            { title: "route match", sub: "Optimal pathway resolution across 120+ visa categories" },
            { title: "evidence checklist", sub: "Biometric, endorsement & passport validity screening" },
            { title: "packet review", sub: "Official government submission dossier assembly" },
          ],
        },
        {
          label: "Law Assistant",
          title: "Research you can hand to a partner",
          body: "Search matter files and public sources together, get a summary with paragraph-level citations, and draft from your own precedent bank instead of a generic template.",
          bullets: [
            "100% grounded summaries with paragraph-level citations",
            "Clause risk analysis & playbook-aligned redlining",
            "Precedent-aware drafting grounded in firm matter files",
          ],
          pipelineBadge: "Precedent Citation Engine",
          latency: "420ms",
          linkText: "View Law Assistant",
          steps: [
            { title: "matter retrieval", sub: "Semantic search across matter archives & court records" },
            { title: "citation grounding", sub: "Paragraph citation mapping against judicial case law" },
            { title: "clause extraction", sub: "Liability & indemnity playbook risk scoring" },
            { title: "memo drafting", sub: "Precedent-backed partner brief generated with citations" },
          ],
        },
        {
          label: "Learning Assistant",
          title: "Personalized learning loops for every student",
          body: "Turn curriculum materials into interactive study modules, generate adaptive practice quizzes, and provide real-time tutoring feedback with syllabus mastery tracking.",
          bullets: [
            "Automated syllabus parsing into spaced-repetition loops",
            "Adaptive quiz generation calibrated to mastery levels",
            "Real-time constructive tutoring aligned with grading rubrics",
          ],
          pipelineBadge: "Adaptive EdTech Runtime",
          latency: "310ms",
          linkText: "View Learning Assistant",
          steps: [
            { title: "syllabus parse", sub: "Curriculum & slides mapped to concept knowledge graphs" },
            { title: "quiz generation", sub: "Adaptive challenge questions calibrated to concept mastery" },
            { title: "tutoring feedback", sub: "Constructive evaluation aligned with learning rubrics" },
            { title: "retention loop", sub: "Personalized spaced-repetition study schedule calculated" },
          ],
        },
        {
          label: "Agentic AI services",
          title: "When the workflow is yours alone",
          body: "We scope the process, build the agent against your tools and data, set up evaluations and approval gates, and stay with you through rollout and iteration.",
          bullets: [
            "Discovery, tool scoping & agent architecture design",
            "Custom tool integrations, vector stores & API webhooks",
            "Benchmark evaluation suites & 6-week production rollout",
          ],
          pipelineBadge: "Autonomous Ops Pipeline",
          latency: "450ms",
          linkText: "Explore Agentic Services",
          steps: [
            { title: "workflow scoping", sub: "Decompose operational flow & define tool contracts" },
            { title: "custom build", sub: "Connect database endpoints, tools & reasoning loops" },
            { title: "evals & guardrails", sub: "Safety benchmark evaluation & human approval gate" },
            { title: "production rollout", sub: "Enterprise observability, latency SLA & deployment" },
          ],
        },
      ],
    },
    quotes: {
      sectionLabel: "Client trust",
      title: "Proven across real-world workflows",
      verifiedCustomer: "Verified Customer",
      items: [
        {
          q: "Our panels finally score the same candidate the same way. The interview briefs go straight into the hiring committee doc.",
          n: "Dana Reyes",
          r: "Head of Talent",
          c: "Kestrel",
          product: "Meeting Copilot",
        },
        {
          q: "The immigration checklists caught two expiring documents we would have filed without. That alone paid for the year.",
          n: "Marcus Lin",
          r: "Principal Consultant",
          c: "Fielded",
          product: "Torii Immigration",
        },
        {
          q: "We asked for a custom agent on top of our matter system. Noruva scoped it, built it and stayed through rollout.",
          n: "Priya Raman",
          r: "Managing Partner",
          c: "Orbital Law",
          product: "Custom Agent Build",
        },
      ],
    },
    faq: {
      sectionLabel: "FAQ",
      titlePart1: "Questions we",
      titlePart2: "get weekly",
      description:
        "Everything you need to know about our products, models, privacy, and custom enterprise engineering.",
      contactUs: "Have a specific question? Talk to us",
      items: [
        [
          "Are you a SaaS company?",
          "We are a software company. We build and licence products, and we take on engineering work — custom agentic AI systems built for a single client's process.",
        ],
        [
          "What products and services does Noruva Labs offer?",
          "NoruvaAI Copilot for live meeting assistance, Torii Immigration for Japan visa filings, Law Assistant for cited legal research, Learning Assistant for adaptive courseware, and custom agentic AI engineering via Autonova.",
        ],
        [
          "Do the assistants replace professionals?",
          "No. Each one drafts, checks and organises; a team lead, consultant, lawyer or educator reviews and signs off. Every output is traceable to its source.",
        ],
        [
          "What does an agentic AI engagement look like?",
          "A short discovery, a scoped build against your own tools and data, an evaluation suite, then rollout with our engineers alongside your team. Most first builds ship in about six weeks.",
        ],
        [
          "Where does our data live?",
          "In your environment where you need it there. We never train shared models on client documents, matter files, course material or meeting data.",
        ],
      ],
    },
    cta: {
      copilotBadge: "● NoruvaAI Live at ai.noruvalabs.com",
      immigrationBadge: "● Torii Immigration Live at visa.noruvalabs.com",
      titlePart1: "Ready to deploy applied AI",
      titlePart2: "into your workflow?",
      subtitle:
        "Start directly with NoruvaAI Copilot and Torii Immigration, or partner with our engineering team for a custom agent build.",
      tryCopilotBtn: "Try NoruvaAI Copilot Free",
      contactBtn: "Schedule Architecture Session",
      securityNote: "SOC 2 Type II Certified · Enterprise Zero Data Retention · GDPR & ISO 27001",
    },
    footer: {
      tagline:
        "Applied AI software systems for live meetings, immigration filings, legal research, and enterprise operations.",
      supportEmail: "support@noruvalabs.com",
      followUs: "Follow Noruva Labs",
      cols: [
        {
          title: "Products",
          links: ["NoruvaAI Copilot", "Torii Immigration", "Law Assistant", "Learning Assistant", "Agentic AI Services"],
        },
        {
          title: "Company",
          links: ["About", "Careers", "Security", "Contact"],
        },
        {
          title: "Resources",
          links: ["Docs", "Blog", "Changelog", "Status", "Privacy"],
        },
      ],
      copyright: "© 2026 Noruva Labs B.V. & Noruva Labs Japan",
      certifications: "SOC 2 Type II · GDPR · ISO 27001",
    },
    contact: {
      badge: "Contact",
      headline: "Let's talk",
      subheadline:
        "Whether you want a demo of one of our products, have a question, or want to discuss a custom agentic AI build for your team — we'd love to hear from you.",
      sendMessageTitle: "Send us a message",
      sendMessageSubtitle: "Fill out the form and we'll get back to you within one business day.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "How can we help?",
      messageLabel: "Message",
      messagePlaceholder: "Write your message here...",
      submitBtn: "Send message",
      sendingBtn: "Sending...",
      successMsg: "Message sent! We'll get back to you within one business day.",
      errorMsg: "An error occurred. Please try again later.",
      otherWaysTitle: "Other ways to reach us",
      otherWaysSubtitle: "Prefer a direct line? Here's how to reach us.",
      supportTitle: "Support & Inquiries Email",
      officeTitle: "Tokyo HQ Office",
      officeAddress: "Minato-ku, Tokyo, Japan 105-8511",
    },
    blog: {
      badge: "Blog",
      title: "Blog",
      description: "Insights on agentic AI, product development and engineering from the Noruva Labs team.",
      readArticle: "Read article",
      backToBlog: "Back to Blog",
      newsletterTitle: "Stay up to date",
      newsletterSubtitle: "Get notified when we publish new engineering and product updates.",
      newsletterPlaceholder: "you@company.com",
      newsletterBtn: "Subscribe",
      newsletterSuccess: "Thanks for subscribing!",
      shareArticle: "Share article",
      moreArticles: "More articles from Noruva Labs",
      posts: {
        "noruva-ai-copilot-realtime-call-answers": {
          title: "NoruvaAI Copilot: Hear the question, see the answer in real-time",
          body: "NoruvaAI listens to your call, transcribes every question the instant it's asked, and hands you the right answer in real time across Google Meet, Zoom, Webex, and LeetCode.",
          tag: "NoruvaAI",
          date: "Aug 02, 2026",
          readTime: "6 min read",
          authorRole: "Head of Product",
          content: {
            intro: "Important calls demand instant recall. Today, we're sharing how NoruvaAI Copilot transcribes live audio streams, detects spoken questions, and delivers accurate, contextual answers in real time during live interviews, sales calls, and technical meetings.",
            sections: [
              {
                heading: "The Challenge of Live Call Performance",
                text: "Under pressure during high-stakes interviews or enterprise sales calls, recalling complex technical details or trade-off rationales instantly can be difficult. Traditional post-call note-taking apps help after the meeting ends — but NoruvaAI helps while the call is happening.",
                quote: "Hear the question. See the answer. Instant context delivered during live calls.",
                bullets: [
                  "Real-time audio stream transcription across Google Meet, Zoom, and Webex",
                  "Instant Q&A prompt detection and context matching",
                  "Privacy-first architecture with zero training on user audio",
                ],
              },
              {
                heading: "How Real-Time Transcription Works",
                text: "NoruvaAI connects directly to call audio, parses speaker separation, and matches technical questions against knowledge bases and code challenges in milliseconds.",
                codeSnippet: "// NoruvaAI Live Call Stream Processor\nconst copilot = new NoruvaAICopilot({\n  stream: liveAudioStream,\n  platforms: ['Google Meet', 'Zoom', 'Webex', 'LeetCode'],\n  latencyThresholdMs: 400\n});\ncopilot.onQuestion((q) => renderAnswer(q.suggestedResponse));",
              },
              {
                heading: "Zero-Latency Answer Delivery",
                text: "As soon as an interviewer or prospect asks a question, NoruvaAI highlights suggested talking points directly in a discreet overlay card.",
              },
            ],
            conclusion: "NoruvaAI Copilot is live today at ai.noruvalabs.com. Try running your first live call copilot session.",
          },
        },
        "torii-immigration-guided-visa-filing": {
          title: "Torii Immigration Assistant: Filing visa applications correctly for a fraction of a lawyer's fee",
          body: "Torii walks applicants and consultancies from 'which forms do I even need?' to a submission-ready packet: branching intake, document checklists, and auto-filled government forms.",
          tag: "Torii Suite",
          date: "Jul 28, 2026",
          readTime: "7 min read",
          authorRole: "Lead Immigration Engineer",
          content: {
            intro: "Immigration processes are notoriously complex, expensive, and error-prone. Torii changes this by automating branching eligibility intake, document checklists, and auto-filling government forms — every step linked directly to official immigration guidance.",
            sections: [
              {
                heading: "Why Most Visa Applications Face Delays",
                text: "Missing documents, expired certificates, and incorrect form sections are the leading causes of visa refusals and administrative delays.",
                quote: "File your visa application correctly — with branching intake and automated document checklists.",
                bullets: [
                  "Branching intake mapping 120+ global visa routes",
                  "Automated document expiry tracking and checklist generation",
                  "Auto-filled government forms with official source citations",
                ],
              },
              {
                heading: "Submission-Ready Packets",
                text: "Torii guides applicants through interactive intake questions (e.g. JP-WORK-2049) and compiles a complete, verified submission packet ready for review.",
              },
            ],
            conclusion: "Torii Immigration Suite is coming soon to Noruva Labs customers. Explore our route guidance demo.",
          },
        },
        "law-assistant-cited-legal-research": {
          title: "Law Assistant: Grounding legal research in official precedent and matter files",
          body: "Law Assistant searches 100k+ matter files and public legal databases together — returning precedent summaries where every sentence carries a paragraph-level citation.",
          tag: "Legal Tech",
          date: "Jul 18, 2026",
          readTime: "8 min read",
          authorRole: "Legal AI Researcher",
          content: {
            intro: "Generic LLMs hallucinate case citations. Law Assistant enforces strict paragraph-level grounding across internal law firm matter files and public judicial precedents.",
            sections: [
              {
                heading: "Zero-Hallucination Legal Intelligence",
                text: "Lawyers need verified facts, not plausible guesswork. Law Assistant verifies every returned claim against underlying legal transcripts.",
                quote: "Every answer carries a citation back to the exact paragraph it came from.",
              },
              {
                heading: "Clause Bank & Playbook Redlining",
                text: "Extract precedent indemnity clauses and perform automated contract redlines against your firm's internal playbooks.",
              },
            ],
            conclusion: "Discover how Law Assistant transforms firm productivity while preserving absolute citation accuracy.",
          },
        },
        "learning-assistant-adaptive-study-loops": {
          title: "Learning Assistant: Personalized study loops and adaptive practice for every student",
          body: "Learning Assistant indexes course materials into spaced-repetition modules, adaptive practice quizzes, and instant tutoring feedback for students and institutions.",
          tag: "EdTech",
          date: "Jul 10, 2026",
          readTime: "5 min read",
          authorRole: "Educational Design Lead",
          content: {
            intro: "Every student learns at a different pace. Learning Assistant transforms static lecture slides and textbooks into interactive, adaptive study loops.",
            sections: [
              {
                heading: "Adaptive Practice Quiz Generation",
                text: "As students progress through syllabus topics, Learning Assistant continuously generates personalized quizzes targeting their specific knowledge gaps.",
                quote: "Personalized study loops tailored to every course syllabus.",
              },
            ],
            conclusion: "Learn how educational institutions use Learning Assistant to boost student retention and test scores.",
          },
        },
      },
    },
  },
  ja: {
    nav: {
      products: "製品情報",
      capabilities: "機能一覧",
      services: "開発支援",
      blog: "ブログ",
      contact: "お問い合わせ",
      tryLive: "Copilotを無料体験",
      contactSales: "導入相談・商談",
      liveApp: "運用中",
      available: "提供中",
      soon: "近日公開",
      productsDescription: {
        "NoruvaAI Copilot": "オンライン会議のリアルタイム自動議事録・Q&Aアシスタント",
        "Torii Immigration": "日本ビザ申請の手続き案内＆書類自動作成・期限管理",
        "Agentic AI Services": "企業向け専用マルチエージェントシステムの設計・構築",
        "Law Assistant": "判例・証拠引用付きリーガルリサーチ＆契約書レビュー",
        "Learning Assistant": "習熟度別アダプティブ学習ループ＆AI家庭教師",
      },
    },
    hero: {
      badge: "実用特化型AIソフトウェアシステム",
      headlinePart1: "思考するソフトウェア、",
      headlinePart2: "結果を届けるエンジニア集団。",
      subheadline:
        "Noruva Labs（ノルバ・ラボ）は、Web会議、ビザ申請、法務リサーチ、教育に特化した実用AI製品を提供。企業の独自基盤に直接組み込む専用エージェント開発も手掛けます。",
      tryCopilot: "NoruvaAI Copilotを試す",
      exploreTorii: "Torii Immigrationを見る",
      statsCallout: "65,000回以上のセッションを処理",
      statsSub: "4つのエンタープライズAIアシスタントで稼働中",
      liveMeetingNotice: "リアルタイム会議アシストのデモ",
      activeCallBadge: "Google Meet · 接続中のミーティング",
      speakerQuery: "「OAuth認証におけるトークン更新のセキュリティ仕様はどうなっていますか？」",
      copilotAnswer:
        "RFC 6749第6条に基づき、/oauth/tokenエンドポイントでmax_age=86400にて更新されます。PR #402で使い捨て失効を伴う自動ローテーションを実装済みです。",
      latencyBadge: "応答速度 380ms",
      copyAnswer: "回答をコピー",
      actionExtracted: "抽出されたタスク: PR #402 トークンローテーションのレビュー",
      syncedSlack: "JiraおよびSlackの#engineeringへ自動連携完了",
      trustedBy: "会議、ビザ、法務、教育の最前線で企業チームを支援",
    },
    systems: {
      sectionLabel: "開発プロダクト",
      titlePart1: "5つのAIシステム、",
      titlePart2: "1つの技術チーム",
      description:
        "稼働中のライブアプリおよび開発中の次世代ソフトウェア製品群をご覧ください。スクロールまたは下部をクリックして各システムを切り替えられます。",
      stepCount: "／",
      liveTag: "運用中",
      comingSoonTag: "近日公開",
      availableTag: "提供中",
      tryLiveBtn: "アプリを体験",
      exploreBtn: "サービスを見る",
      viewDetailsBtn: "詳細を見る",
      items: [
        {
          n: "01",
          title: "NoruvaAI Copilot",
          headline: "質問を聞き取り、瞬時に回答を表示。",
          body: "Google Meet、Zoom、Webexなどの通話をリアルタイムで文字起こし。重要な質問やToDoを即座に抽出し、画面上に的確な答えを提示します。",
          stat: ["構造化された会議数", "4.8万件+"],
        },
        {
          n: "02",
          title: "Torii Immigration",
          headline: "ビザ申請書類をミスなく正確に作成。",
          body: "質問に答えるだけで、必要書類リストの作成から公的申請書の自動入力、提出期限のトラッキングまでを一貫してサポートします。",
          stat: ["対応ビザ・在留資格", "120種類+"],
        },
        {
          n: "03",
          title: "Law Assistant",
          headline: "判例と段落引用に裏付けられた法務リサーチ。",
          body: "自社の事件ファイルと公開判例データベースを網羅的に検索。すべての回答に引用元の段落番号が付与され、信頼できる起案を即座に作成します。",
          stat: ["引用根拠の付与率", "100%"],
        },
        {
          n: "04",
          title: "Learning Assistant",
          headline: "学習者一人ひとりに最適化された自習ループ。",
          body: "教材やシラバスから自動的にインタラクティブな問題や適応型クイズを生成。生徒や企業研修生への個別指導フィードバックを提供します。",
          stat: ["アクティブ受講者数", "1.5万人+"],
        },
        {
          n: "05",
          title: "Agentic AI Services",
          headline: "企業専用のカスタムAIエージェント開発。",
          body: "既製プロダクトの枠を超え、貴社の既存データベースや社内ツールに直結する独自エージェントを専任エンジニアが約6週間で構築します。",
          stat: ["初回開発の標準期間", "約6週間"],
        },
      ],
    },
    rail: {
      sectionLabel: "プロダクト機能ストリーム",
      title: "専門ソフトウェアとエンジニアが届ける価値",
      description:
        "NoruvaAI Copilot、Toriiビザ申請、法務、教育、カスタム構築の主要機能がリアルタイムに流れるストリーム。",
      statusBadge: "右から左へスクロール中",
      pauseBtn: "一時停止",
      resumeBtn: "再開",
      stepPrefix: "ステップ",
      cards: [
        {
          n: "01",
          product: "NoruvaAI Copilot",
          title: "リアルタイム通話Q&Aコパイロット",
          body: "Google MeetやZoomの発言をリアルタイム解析し、400ms未満で最適な回答候補を画面にオーバーレイ表示します。",
          tag: "運用中",
          badge: "遅延400ms未満",
        },
        {
          n: "02",
          product: "NoruvaAI Copilot",
          title: "アクションアイテム＆議事録同期",
          body: "通話中の発言からタスク担当者と納期を自動判別し、JiraやSlackの指定チャンネルへ直接チケットを作成します。",
          tag: "運用中",
          badge: "タスク自動同期",
        },
        {
          n: "03",
          product: "Torii Immigration",
          title: "条件分岐による適格ルート診断",
          body: "申請者の学歴・職歴・要件に応じた動的ヒアリングにより、120種類以上の在留資格から最適なルートを自動特定します。",
          tag: "Torii Suite",
          badge: "120+ ビザ対応",
        },
        {
          n: "04",
          product: "Torii Immigration",
          title: "官公庁提出書類の自動作成パケット",
          body: "必要証拠のチェックリストを自動生成し、提出期限や有効期限を監視。公式様式の申請書を一括作成します。",
          tag: "Torii Suite",
          badge: "提出準備完了",
        },
        {
          n: "05",
          product: "Law Assistant",
          title: "段落引用付き判例リサーチ",
          body: "社内ファイルおよび公開判例を横断検索。すべての記述に具体的な段落引用を付与した正確なサマリーを提供します。",
          tag: "Law AI",
          badge: "100% 根拠明記",
        },
        {
          n: "06",
          product: "Law Assistant",
          title: "契約書条項のプレイブック照合",
          body: "契約条項をファーム基準のプレイブックと比較し、免責リスクや特約事項を自動検出して修正文案を提示します。",
          tag: "Law AI",
          badge: "自動赤字レビュー",
        },
        {
          n: "07",
          product: "Learning Assistant",
          title: "適応型演習クイズの自動生成",
          body: "講義スライドやシラバスを即座に分解し、個人の習熟度に合わせた復習モジュールと選択式クイズを出題します。",
          tag: "EdTech AI",
          badge: "適応型シラバス",
        },
        {
          n: "08",
          product: "Learning Assistant",
          title: "即時チュータリング・フィードバック",
          body: "受講生の回答に対し採点基準（ルーブリック）に沿った建設的な解説をその場で返し、自律学習を促進します。",
          tag: "EdTech AI",
          badge: "即時解説フィードバック",
        },
        {
          n: "09",
          product: "Agentic AI Services",
          title: "社内スタックへの独自API統合",
          body: "社内の独自DB、APIエンドポイント、人間の承認フロー（Human-in-the-loop）を統合した自律型ワークフローを設計します。",
          tag: "エンタープライズ",
          badge: "専用エージェント構築",
        },
        {
          n: "10",
          product: "Agentic AI Services",
          title: "評価ベンチマーク＆本番ロールアウト",
          body: "精度検証テストと安全性監査を実施し、専任エンジニアが安全かつ迅速に本番稼働まで伴走支援します。",
          tag: "エンタープライズ",
          badge: "6週間の短期導入",
        },
      ],
    },
    capabilities: {
      sectionLabel: "製品とサービス",
      titlePart1: "ソフトウェア第一主義、",
      titlePart2: "真に価値ある場面でAIを活かす",
      description:
        "運用中のNoruvaAI会議コパイロットやToriiビザ申請支援をはじめ、特定業務に特化した高品質なAI製品を開発しています。",
      readHowWeWork: "私たちの開発アプローチを見る",
      tryLiveApp: "アプリを体験",
      exploreService: "サービスを見る",
      learnMore: "詳細を見る",
      items: [
        {
          title: "NoruvaAI Copilot",
          body: "リアルタイム文字起こし、ToDo抽出、オンライン会議のライブQ&Aアシスト。",
          status: "運用中",
        },
        {
          title: "Torii Immigration",
          body: "最適なビザ判定、提出書類チェックリスト、書類自動生成、期限管理。",
          status: "運用中",
        },
        {
          title: "Law Assistant",
          body: "判例に裏付けられた法務調査、論点整理、段落引用付きの契約書起案。",
          status: "近日公開",
        },
        {
          title: "Learning Assistant",
          body: "適応型教材作成、AI個別指導、インタラクティブ問題、習熟度トラッキング。",
          status: "近日公開",
        },
        {
          title: "Agentic AI Services",
          body: "既存の社内基盤に直接組み込む企業専用のマルチエージェントシステム開発。",
          status: "提供中",
        },
        {
          title: "Engineering Support",
          body: "導入後もエンジニアが継続サポート：精度評価、レイテンシ監視、安全監査。",
          status: "標準付帯",
        },
      ],
    },
    stats: {
      items: [
        ["05", "提供製品・AIサービス"],
        ["65k+", "実行されたセッション数"],
        ["15k+", "サポート中の学習者数"],
        ["6週間", "専用エージェントの標準開発期間"],
      ],
    },
    useCases: {
      sectionLabel: "実践での活用",
      title: "結果が重視される現場のために設計",
      pipelineActive: "パイプライン稼働中",
      latencyPrefix: "処理速度",
      cases: [
        {
          label: "Meeting Assistant",
          title: "長い会議の会話を、即座に具体的なアクションへ",
          body: "Google Meet、Zoom、Webexの音声を高精度に解析。発言からコミットメント、担当者、要約を抽出し、400ms未満で課題管理ツールに送信します。",
          bullets: [
            "話者分離（ダイアライゼーション）対応のリアルタイム文字起こし",
            "ToDoおよび担当者・期限の自動特定とタスク化",
            "JiraやSlackへ自動配信されるエグゼクティブ向け要約",
          ],
          pipelineBadge: "ライブ音声処理パイプライン",
          latency: "380ms",
          linkText: "NoruvaAI Copilotを試す",
          steps: [
            { title: "音声ストリーム同期", sub: "48kHzマルチ話者音声ストリームの高精度取り込み" },
            { title: "テキスト解析＆ダイアライズ", sub: "コンテキスト認識型自然言語処理による話者分離" },
            { title: "タスク＆担当者抽出", sub: "決定事項・コミットメント・期日の自動検出" },
            { title: "CRM＆ツール連携", sub: "Jira、Linear、Slackへの自動チケット発行" },
          ],
        },
        {
          label: "Immigration Assistant",
          title: "すべての案件、すべての書類、すべての期限を管理",
          body: "適格ルートの判定から提出用パケットの作成までを一括支援。提出前の段階で不備や有効期限切れを検知し、不交付リスクを排除します。",
          bullets: [
            "120種類以上の在留資格から最適な申請ルートを自動選定",
            "入国管理局向け公式申請書の自動入力と必要証拠の審査",
            "証明書の有効期限切れと提出期日をリアルタイム監視",
          ],
          pipelineBadge: "ビザ適格審査エンジン",
          latency: "240ms",
          linkText: "Torii Immigrationを見る",
          steps: [
            { title: "ヒアリング入力", sub: "動的アンケートによる申請者適格性の自動判定" },
            { title: "ルートマッチング", sub: "120以上の在留資格カテゴリーから最適パスを決定" },
            { title: "提出書類チェック", sub: "パスポート、推薦状、証明書有効期間の精査" },
            { title: "提出書類パケット生成", sub: "公的申請書の自動記入と提出用バインダーの完成" },
          ],
        },
        {
          label: "Law Assistant",
          title: "パートナー弁護士にそのまま手渡せる高精度リサーチ",
          body: "社内の事件ファイルと外部の判例記録を同時に横断検索。すべての論述に判決文の段落番号が付与された、精度の高い法的メモを生成します。",
          bullets: [
            "判決文の段落レベルまで完全に根拠付けられたサマリー",
            "契約条項のリスク抽出とファーム基準の修正案提示",
            "汎用テンプレートではなく実際の過去事件ファイルを基にした起案",
          ],
          pipelineBadge: "判例引用グラウンディングエンジン",
          latency: "420ms",
          linkText: "Law Assistantを見る",
          steps: [
            { title: "事件記録の検索", sub: "内部ファイルおよび判例アーカイブのセマンティック検索" },
            { title: "判例引用グラウンディング", sub: "裁判所の判例段落番号と法的根拠を完全紐付け" },
            { title: "条項リスク抽出", sub: "賠償責任条項を社内プレイブック基準で評価" },
            { title: "法的メモ起案", sub: "引用リンクを網羅した弁護士向け調査メモの出力" },
          ],
        },
        {
          label: "Learning Assistant",
          title: "生徒一人ひとりに寄り添うパーソナライズ学習",
          body: "講義スライドや教科書から自動的にアダプティブ学習モジュールを生成。一人ひとりの理解度に応じたクイズと的確な指導フィードバックを提供します。",
          bullets: [
            "シラバスから忘却曲線を考慮した復習ループを自動生成",
            "受講生の現在の理解度に合わせて難易度が変化するクイズ",
            "採点ルーブリックに直結したリアルタイムの解説と助言",
          ],
          pipelineBadge: "適応型EdTechランタイム",
          latency: "310ms",
          linkText: "Learning Assistantを見る",
          steps: [
            { title: "教材・シラバス解析", sub: "授業スライドを概念ナレッジグラフへマッピング" },
            { title: "適応型問題生成", sub: "理解度レベルに最適化されたチャレンジクイズの生成" },
            { title: "個別指導フィードバック", sub: "採点基準に沿った建設的な回答解説の提示" },
            { title: "記憶定着ループ", sub: "エビングハウス忘却曲線に基づく復習スケジュールの設定" },
          ],
        },
        {
          label: "Agentic AI services",
          title: "貴社だけの独自ワークフローを自動化",
          body: "業務プロセスの要件定義から、社内データやツールに接続したエージェントの構築、評価基準の確立、人間の承認フローまでを専任で開発します。",
          bullets: [
            "業務プロセスの精緻な洗い出しとエージェント設計",
            "社内独自ツール、ベクトルDB、Webフックの直結",
            "安全性ベンチマーク評価と約6週間の本番ロールアウト",
          ],
          pipelineBadge: "自律型運用パイプライン",
          latency: "450ms",
          linkText: "エージェント開発支援を見る",
          steps: [
            { title: "要件定義・スコープ策定", sub: "業務オペレーションの分解とAPIインターフェース設計" },
            { title: "エージェント構築", sub: "社内DB、独自ツール、推論エンジンの直接接続" },
            { title: "評価・安全性ガードレール", sub: "ベンチマーク検証および人間承認ゲートの実装" },
            { title: "本番ロールアウト", sub: "エンタープライズ監視とレイテンシSLAの保証" },
          ],
        },
      ],
    },
    quotes: {
      sectionLabel: "導入企業の声",
      title: "現場の最前線で実証された信頼",
      verifiedCustomer: "認証済みクライアント",
      items: [
        {
          q: "「面接官によってブレていた評価が統一されました。面接サマリーがそのまま採用委員会の議事録に連携されるので重宝しています。」",
          n: "Dana Reyes",
          r: "Head of Talent（人事責任者）",
          c: "Kestrel",
          product: "Meeting Copilot",
        },
        {
          q: "「Toriiのチェック機能のおかげで、提出直前に有効期限切れの書類を2件防ぐことができました。これだけで年間費用以上の価値があります。」",
          n: "Marcus Lin",
          r: "Principal Consultant（主席コンサルタント）",
          c: "Fielded",
          product: "Torii Immigration",
        },
        {
          q: "「自社の事件管理システムに合わせた専用AIエージェントを依頼しました。Noruvaは要件定義から本番稼働まで完璧に伴走してくれました。」",
          n: "Priya Raman",
          r: "Managing Partner（マネージングパートナー）",
          c: "Orbital Law",
          product: "Custom Agent Build",
        },
      ],
    },
    faq: {
      sectionLabel: "よくあるご質問",
      titlePart1: "よくいただく",
      titlePart2: "ご質問",
      description: "プロダクト、AIモデル、データプライバシー、専用エージェント開発に関するFAQ。",
      contactUs: "個別の導入相談はこちらからお問い合わせください",
      items: [
        [
          "Noruva LabsはSaaS企業ですか？",
          "私たちはソフトウェア会社です。自社開発の完成プロダクトをライセンス提供するだけでなく、各企業独自の業務プロセスに直結する専用エージェントAIの受託開発も行っています。",
        ],
        [
          "どのような製品・サービスを提供していますか？",
          "Web会議リアルタイム支援の「NoruvaAI Copilot」、日本ビザ申請支援の「Torii Immigration」、段落引用付き法務リサーチ「Law Assistant」、適応型学習支援「Learning Assistant」、そして企業向けカスタムエージェント開発（Autonova）を提供しています。",
        ],
        [
          "AIは人間の専門家を置き換えるものですか？",
          "いいえ。AIは下書き作成、チェック、データ整理を迅速に行うアシスタントです。最終的な判断や提出は、必ず現場のリーダー、弁護士、コンサルタント、教育者が行います。すべての出力に出典根拠が明記されます。",
        ],
        [
          "専用エージェント開発（Agentic AI）の進め方は？",
          "まず業務フローの洗い出し（スコープ策定）を行い、社内データやツールに接続したエージェントを構築。安全性と精度のテストを経て、弊社のエンジニアが貴社チームと伴走しながら本番導入します。最初の構築は約6週間で完了します。",
        ],
        [
          "企業の社内データは安全に保護されますか？",
          "はい。データはお客様指定の安全な環境で管理されます。お客様の機密文書、事件記録、教材、通話データを他の目的や共通AIモデルの再学習に使用することは一切ありません。",
        ],
      ],
    },
    cta: {
      copilotBadge: "● NoruvaAI オンライン稼働中（ai.noruvalabs.com）",
      immigrationBadge: "● Torii Immigration オンライン稼働中（visa.noruvalabs.com）",
      titlePart1: "実用特化型AIを、",
      titlePart2: "貴社の業務フローへ今すぐ導入。",
      subtitle:
        "NoruvaAI CopilotやTorii Immigrationの無料体験から始めることも、専任エンジニアチームによる独自エージェント開発の相談も可能です。",
      tryCopilotBtn: "NoruvaAI Copilotを無料で試す",
      contactBtn: "アーキテクチャ相談・商談予約",
      securityNote: "SOC 2 Type II認証取得済 · エンタープライズ仕様のゼロデータ保持 · GDPR & ISO 27001準拠",
    },
    footer: {
      tagline:
        "オンライン会議、ビザ申請、法務リサーチ、エンタープライズ業務に特化した実用AIソフトウェアシステム。",
      supportEmail: "support@noruvalabs.com",
      followUs: "Noruva Labs公式アカウント",
      cols: [
        {
          title: "製品情報",
          links: ["NoruvaAI Copilot", "Torii Immigration", "Law Assistant", "Learning Assistant", "Agentic AI Services"],
        },
        {
          title: "会社情報",
          links: ["About", "Careers", "Security", "Contact"],
        },
        {
          title: "リソース",
          links: ["Docs", "Blog", "Changelog", "Status", "Privacy"],
        },
      ],
      copyright: "© 2026 Noruva Labs B.V. & Noruva Labs Japan",
      certifications: "SOC 2 Type II · GDPR · ISO 27001",
    },
    contact: {
      badge: "お問い合わせ",
      headline: "お問い合わせ・ご相談",
      subheadline:
        "プロダクトのデモ、サービスに関するご質問、自律型AIエージェントのカスタム受託開発のご相談など、お気軽にお問い合わせください。",
      sendMessageTitle: "メッセージを送信",
      sendMessageSubtitle: "フォームにご記入いただければ、1営業日以内に担当者よりご連絡いたします。",
      nameLabel: "お名前",
      namePlaceholder: "山田 太郎",
      emailLabel: "メールアドレス",
      emailPlaceholder: "you@example.com",
      subjectLabel: "件名",
      subjectPlaceholder: "ご相談内容の概要",
      messageLabel: "お問い合わせ内容",
      messagePlaceholder: "具体的な要件やご質問をご記入ください...",
      submitBtn: "メッセージを送信する",
      sendingBtn: "送信中...",
      successMsg: "メッセージが送信されました！1営業日以内に担当者よりご連絡いたします。",
      errorMsg: "エラーが発生しました。時間をおいて再度お試しください。",
      otherWaysTitle: "その他のお問い合わせ方法",
      otherWaysSubtitle: "直接のご連絡を希望される場合は下記をご利用ください。",
      supportTitle: "サポート・問い合わせ用メール",
      officeTitle: "東京本社オフィス",
      officeAddress: "東京都港区 〒105-8511",
    },
    blog: {
      badge: "ブログ",
      title: "最新記事・ブログ",
      description: "自律型AI、プロダクト開発、エンジニアリングに関する最新知見と開発ストーリー。",
      readArticle: "記事を読む",
      backToBlog: "ブログ一覧に戻る",
      newsletterTitle: "最新情報をお届け",
      newsletterSubtitle: "新しい製品アップデートや技術記事の公開時に通知を受け取る。",
      newsletterPlaceholder: "you@company.com",
      newsletterBtn: "登録する",
      newsletterSuccess: "ニュースレターへのご登録ありがとうございます！",
      shareArticle: "記事を共有",
      moreArticles: "Noruva Labsのその他の関連記事",
      posts: {
        "noruva-ai-copilot-realtime-call-answers": {
          title: "NoruvaAI Copilot：質問を聞き、リアルタイムに的確な回答を表示",
          body: "Google Meet、Zoom、Webex、LeetCode通話の音声をリアルタイム文字起こし。質問された瞬間に的確な回答と論点を提示します。",
          tag: "NoruvaAI",
          date: "2026年8月2日",
          readTime: "読了目安 6分",
          authorRole: "プロダクト責任者",
          content: {
            intro: "重要な通話では瞬時の情報想起が求められます。NoruvaAI Copilotがどのように通話音声をリアルタイム解析し、面接・商談・技術ミーティング中に的確な回答を提示するかを解説します。",
            sections: [
              {
                heading: "通話中のプレッシャーと情報想起の課題",
                text: "採用面接や法人向け商談において、技術的なトレードオフや詳細仕様を即座に答えるのは困難です。従来の議事録ツールは通話終了後にしか役立ちませんが、NoruvaAIは通話の最中にリアルタイムで支援します。",
                quote: "質問を聞き、回答を表示。通話中に必要なコンテキストを即座に手元へ。",
                bullets: [
                  "Google Meet、Zoom、Webexに対応した低遅延音声認識ストリーム",
                  "瞬時のQ&Aプロンプト検出とナレッジベース照合",
                  "ユーザーの音声をAI再学習に使用しないプライバシー最優先設計",
                ],
              },
              {
                heading: "リアルタイム文字起こしの仕組み",
                text: "通話音声ストリームに直接接続し、話者分離と技術的な質問の検出をミリ秒単位で実行します。",
                codeSnippet: "// NoruvaAI Live Call Stream Processor\nconst copilot = new NoruvaAICopilot({\n  stream: liveAudioStream,\n  platforms: ['Google Meet', 'Zoom', 'Webex', 'LeetCode'],\n  latencyThresholdMs: 400\n});\ncopilot.onQuestion((q) => renderAnswer(q.suggestedResponse));",
              },
              {
                heading: "遅延ゼロの回答提示",
                text: "相手が質問を発した瞬間、目立たないオーバーレイカードに最適な回答ポイントと補足情報が即座に表示されます。",
              },
            ],
            conclusion: "NoruvaAI Copilotは現在 ai.noruvalabs.com にて稼働中です。ぜひ最初のライブミーティングでお試しください。",
          },
        },
        "torii-immigration-guided-visa-filing": {
          title: "Torii 入国管理・ビザ：弁護士費用の数分の一で、ビザ申請を正確・確実に完了",
          body: "「どの書類が必要か」から申請提出準備まで徹底サポート。分岐型問診、必要書類チェックリスト、公式様式自動生成をワンストップで提供。",
          tag: "Torii スイート",
          date: "2026年7月28日",
          readTime: "読了目安 7分",
          authorRole: "入国管理リードエンジニア",
          content: {
            intro: "ビザ申請や在留資格変更の手続きは非常に複雑で高額、そして不備が発生しやすいものです。Toriiは分岐型ヒアリングと公式様式の自動生成により、この課題を根本から解決します。",
            sections: [
              {
                heading: "ビザ申請で審査遅延や不許可が起きる原因",
                text: "必要書類の不備、証明書の有効期限切れ、記入ミスが審査遅延の主な要因です。",
                quote: "正確なビザ申請書類の作成を、誰でも簡単に、確実に。",
                bullets: [
                  "120以上の在留資格・ビザカテゴリーに対応した動的ルート分岐問診",
                  "公的証明書の有効期限監視と提出書類チェックリストの自動生成",
                  "出入国在留管理庁の公式様式に準拠した申請書類の自動入力",
                ],
              },
              {
                heading: "そのまま提出可能な申請書類一式の生成",
                text: "Toriiは対話型の質問を通じて申請者情報を収集し、弁護士・行政書士の確認にも耐えうる完全な提出パケットを自動編成します。",
              },
            ],
            conclusion: "Torii 入国管理・ビザ スイートは現在稼働中です。公式デモをぜひお試しください。",
          },
        },
        "law-assistant-cited-legal-research": {
          title: "法律AIアシスタント：過去判例と案件ファイルに基づく出典引用付き法務リサーチ",
          body: "10万件超の案件ファイルと公開法令判例データベースを統合検索。すべての文に段落単位の正確な出典引用を付与した要約と起案を実現。",
          tag: "リーガルテック",
          date: "2026年7月18日",
          readTime: "読了目安 8分",
          authorRole: "リーガルAI研究員",
          content: {
            intro: "一般的な生成AIは判例や条文を捏造（ハルシネーション）するリスクがあります。法律AIアシスタントは、事務所内の過去事件記録および裁判所公開判例への段落単位の厳密な出典引用を保証します。",
            sections: [
              {
                heading: "ハルシネーションのない確実なリーガルインテリジェンス",
                text: "法律実務家に必要なのは推測ではなく、確認可能な証拠です。すべての出力に対して元の判例の該当段落へのリンクが付与されます。",
                quote: "すべての回答に、根拠となる原典への段落レベルの出典引用を付与。",
              },
              {
                heading: "条項バンクとプレイブック照合",
                text: "過去の賠償免責条項を抽出し、事務所内の標準契約プレイブックに照らし合わせた自動レッドライン（修正案）を作成します。",
              },
            ],
            conclusion: "高い出典精度を維持しながら業務効率を飛躍的に高める法律AIアシスタントの機能をご覧ください。",
          },
        },
        "learning-assistant-adaptive-study-loops": {
          title: "学習AIアシスタント：すべての生徒・受講者に個別最適化された適応型学習ループ",
          body: "教材や講義スライドから間隔反復モジュール、適応型演習問題、リアルタイム個別指導フィードバックを自動生成します。",
          tag: "エドテック",
          date: "2026年7月10日",
          readTime: "読了目安 5分",
          authorRole: "教育設計リード",
          content: {
            intro: "受講者によって学習進度や理解度は異なります。学習AIアシスタントは、静的な講義スライドや教科書から、生徒ごとの理解度に合わせた適応型学習ループを生成します。",
            sections: [
              {
                heading: "適応型演習問題の自動生成",
                text: "シラバスの進行と理解度テストの結果に応じて、生徒の弱点領域に特化した演習問題を即座にパーソナライズ作成します。",
                quote: "講義シラバスに合わせた、生徒ごとの最適化学習ループ。",
              },
            ],
            conclusion: "教育機関や企業研修で学習定着率を高める学習AIアシスタントの活用法をご覧ください。",
          },
        },
      },
    },
  },
};
