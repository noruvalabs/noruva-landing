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
    slug: "noruva-ai-copilot-realtime-call-answers",
    title: "NoruvaAI Copilot: Hear the question, see the answer in real-time",
    body: "NoruvaAI listens to your call, transcribes every question the instant it's asked, and hands you the right answer in real time across Google Meet, Zoom, Webex, and LeetCode.",
    date: "Aug 02, 2026",
    readTime: "6 min read",
    tag: "NoruvaAI",
    author: "Dana Reyes",
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
  {
    slug: "torii-immigration-guided-visa-filing",
    title: "Torii Immigration Assistant: Filing visa applications correctly for a fraction of a lawyer's fee",
    body: "Torii walks applicants and consultancies from 'which forms do I even need?' to a submission-ready packet: branching intake, document checklists, and auto-filled government forms.",
    date: "Jul 28, 2026",
    readTime: "7 min read",
    tag: "Torii Suite",
    author: "Kaito Tanaka",
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
  {
    slug: "law-assistant-cited-legal-research",
    title: "Law Assistant: Grounding legal research in official precedent and matter files",
    body: "Law Assistant searches 100k+ matter files and public legal databases together — returning precedent summaries where every sentence carries a paragraph-level citation.",
    date: "Jul 18, 2026",
    readTime: "8 min read",
    tag: "Legal Tech",
    author: "Elena Rostova",
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
  {
    slug: "learning-assistant-adaptive-study-loops",
    title: "Learning Assistant: Personalized study loops and adaptive practice for every student",
    body: "Learning Assistant indexes course materials into spaced-repetition modules, adaptive practice quizzes, and instant tutoring feedback for students and institutions.",
    date: "Jul 10, 2026",
    readTime: "5 min read",
    tag: "EdTech",
    author: "Marcus Vance",
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
];
