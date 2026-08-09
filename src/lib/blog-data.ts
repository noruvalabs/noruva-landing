export interface BlogPost {
  slug: string;
  title: string;
  body: string;
  date: string;
  readTime: string;
  tag: string;
  author: string;
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

export const ALL_POSTS: BlogPost[] = [
  {
    slug: "meeting-assistant-2-0",
    title: "Meeting Assistant 2.0: Real-time action item extraction and speaker debriefs",
    body: "We shipped a major upgrade to Meeting Assistant with real-time transcript summarization, automated action item extraction and a new debrief flow. Here's what changed and why it matters for teams.",
    date: "Jul 15, 2026",
    readTime: "8 min read",
    tag: "Product",
    author: "Dana Reyes",
    authorRole: "Head of Product",
    content: {
      intro: "Meetings should end with clear decisions and assigned owners, not lost conversation notes. Today, we're releasing Meeting Assistant 2.0 — a complete redesign of our meeting intelligence engine that brings real-time transcript processing, automated action item extraction, and instant executive summaries.",
      sections: [
        {
          heading: "The Problem with Unstructured Meeting Notes",
          text: "When team meetings end without structured summaries, action items get lost in long audio recordings. Important owner assignments disappear, and team members spend hours listening back to calls.",
          quote: "If a meeting produces 5 key decisions, every team member should leave with the exact same list of owner tags and deadlines.",
          bullets: [
            "Inconsistent action item tracking across teams",
            "Lost context on key executive decisions",
            "Hours spent compiling call notes manually",
          ],
        },
        {
          heading: "Real-time Action Item Extraction",
          text: "As team members speak, Meeting Assistant processes live transcripts to extract explicit commitments, tasks, and follow-ups. It tags owner names and deadlines automatically as they are spoken.",
          codeSnippet: "// Meeting Assistant Action Item Extractor\nconst extraction = await assistant.analyzeTranscript({\n  transcript: liveAudioStream,\n  detectActionItems: true,\n  assignees: teamDirectory\n});\n// Result: 4 action items extracted -> Pushed to project board",
        },
        {
          heading: "Executive Debrief Summaries",
          text: "Once the meeting concludes, Meeting Assistant synthesizes full transcripts into a 1-page executive summary. Every decision links back to the exact timestamp and verbatim audio snippet.",
        },
      ],
      conclusion: "Meeting Assistant 2.0 is live for all Noruva Labs customers starting today at ai.noruvalabs.com. Try recording your first meeting summary in under two minutes.",
    },
  },
  {
    slug: "immigration-assistant-12-visa-routes",
    title: "Immigration Assistant now covers 12 visa routes across 4 countries",
    body: "The immigration assistant now handles visitor, student, skilled worker, family and investor routes across the US, UK, Canada and Australia. We walk through how route matching works under the hood.",
    date: "Jun 28, 2026",
    readTime: "6 min read",
    tag: "Product",
    author: "Marcus Lin",
    authorRole: "Lead Immigration Specialist",
    content: {
      intro: "Navigating international visa requirements is notoriously complex. Today, we're expanding Immigration Assistant to support 12 distinct visa routes across the US, UK, Canada, and Australia.",
      sections: [
        {
          heading: "Automated Route Matching",
          text: "By answering a series of dynamic intake questions, applicants and legal consultants get an immediate eligibility score mapped directly to government visa criteria.",
          bullets: [
            "Skilled Worker & Points-Based Immigration",
            "Student & Post-Study Work Visas",
            "Family & Spousal Sponsorship Routes",
            "Investor & Global Talent Visas",
          ],
        },
        {
          heading: "Document Expiry & Evidence Tracking",
          text: "Immigration Assistant constantly monitors document expiry dates and flags missing evidence items before applications are submitted, reducing refusal rates by over 40%.",
        },
      ],
      conclusion: "Explore our new route finder inside Immigration Assistant today.",
    },
  },
  {
    slug: "custom-agentic-ai-law-firm",
    title: "Building custom agentic AI for a 200-partner law firm",
    body: "We published a case study on how we built a precedent-aware research agent for a 200-partner law firm using their own clause bank. From ingestion to citation verification — the full build.",
    date: "May 22, 2026",
    readTime: "12 min read",
    tag: "Engineering",
    author: "Priya Raman",
    authorRole: "Principal AI Engineer",
    content: {
      intro: "Law firms don't need general-purpose chatbots; they need verifiable research assistants that reference exact clauses from their internal document repository.",
      sections: [
        {
          heading: "Precedent Ingestion Pipeline",
          text: "We ingested over 100,000 internal matter files, contracts, and legal opinions into a secure vector index with paragraph-level chunking and metadata tags.",
          quote: "Every statement returned by the AI must cite the exact document, clause number, and paragraph where the information originated.",
        },
        {
          heading: "100% Citation Accuracy",
          text: "Our evaluation pipeline tests every answer against zero-hallucination thresholds. If a legal claim cannot be mapped to an authoritative source, it is flagged for partner review.",
        },
      ],
      conclusion: "Contact our engineering team to learn how we can build custom AI agents for your firm's workflows.",
    },
  },
  {
    slug: "noruva-labs-seed-round",
    title: "Noruva Labs raises seed round to expand AI product line",
    body: "We closed a seed round to expand our team and ship more products. Read about our plans for the next 12 months and why we're betting on applied AI over general-purpose chatbots.",
    date: "Apr 10, 2026",
    readTime: "5 min read",
    tag: "Company",
    author: "Noruva Labs Team",
    authorRole: "Founders",
    content: {
      intro: "We're excited to announce that Noruva Labs has raised a seed funding round led by leading software investors to accelerate our expansion into specialized AI assistants.",
      sections: [
        {
          heading: "Why Applied AI Wins",
          text: "While horizontal chatbots provide general answers, enterprise workflows require deep domain knowledge, strict privacy controls, and structured output formats.",
        },
      ],
      conclusion: "We're hiring engineers, designers, and domain experts in Amsterdam and Toronto. Come build with us!",
    },
  },
  {
    slug: "learning-assistant-launch",
    title: "Introducing Learning Assistant: Adaptive courseware and study loops",
    body: "Today we ship Learning Assistant — our fourth core product built to turn raw educational material into interactive study modules, practice quizzes and real-time tutoring feedback.",
    date: "Aug 02, 2026",
    readTime: "7 min read",
    tag: "Product",
    author: "Noruva Labs Team",
    authorRole: "Product Engineering",
    content: {
      intro: "Education and professional training shouldn't be one-size-fits-all. Learning Assistant transforms static textbooks and syllabi into personalized, self-pacing learning journeys.",
      sections: [
        {
          heading: "Adaptive Quizzing & Knowledge Checks",
          text: "Learning Assistant uses spaced repetition and dynamic difficulty adjustments to ensure students master core concepts before moving forward.",
        },
        {
          heading: "Real-time AI Tutoring",
          text: "Students can ask questions at any point in their study session and receive step-by-step guidance without giving away the direct answer.",
        },
      ],
      conclusion: "Try Learning Assistant or request a institutional demo today.",
    },
  },
];
