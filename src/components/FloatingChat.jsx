import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "923497794992";

function getBotResponse(message) {
  const msg = message.toLowerCase().trim();

  // Greetings
  if (msg.match(/^(hi|hello|hey|assalam|salam|greet|sup|what'?s up)/)) {
    return `Assalam-o-Alaikum! Welcome! I'm Faisal's AI assistant.\n\nI can help you with:\n- His skills & tech stack\n- Services he offers\n- His projects & portfolio\n- Education & background\n- How to contact or hire him\n\nWhat would you like to know?`;
  }

  // Skills & tech stack
  if (msg.match(/skill|tech|stack|language|framework|tool|expertise|know|proficient|capable/)) {
    return `Faisal's Technical Skills:\n\nFrontend:\n- React.js, Next.js 14, TypeScript\n- Tailwind CSS, Three.js, Framer Motion\n- Zustand, Redux, Recharts\n\nBackend:\n- Node.js, Express.js, NestJS\n- Python, FastAPI\n- REST APIs, GraphQL, SSE, WebSockets\n\nDatabases:\n- PostgreSQL (Prisma ORM)\n- MongoDB (Mongoose)\n- Redis (caching & sessions)\n\nDevOps & Cloud:\n- Docker, Kubernetes, AWS\n- CI/CD pipelines, Git\n- Vercel, Netlify deployment\n\nAI & Automation:\n- OpenAI API (GPT-4o, GPT-4o-mini)\n- Agentic AI SDK, MCP Servers\n- N8N workflow automation\n\nOther:\n- Kafka (event-driven architecture)\n- Blockchain & Smart Contracts\n- Microservices Architecture`;
  }

  // Services
  if (msg.match(/service|offer|do for|hire|work with|freelance|provide|help me|can you|available/)) {
    return `Faisal offers professional services in:\n\n1. Full-Stack Web Development\n   - MERN Stack (MongoDB, Express, React, Node.js)\n   - PERN Stack (PostgreSQL, Express, React, Node.js)\n   - Next.js 14 applications\n\n2. Microservices Architecture\n   - NestJS + Kafka event pipelines\n   - Scalable multi-service backends\n   - Docker & Kubernetes deployment\n\n3. AI-Powered Platforms\n   - GPT-4o / OpenAI API integrations\n   - Predictive analytics dashboards\n   - Sentiment analysis & NLP systems\n\n4. Agentic AI Development\n   - AI agent workflows (MCP, Agentic SDK)\n   - N8N automation pipelines\n   - Intelligent chatbots & assistants\n\n5. Blockchain Solutions\n   - Multi-chain wallet integrations\n   - Smart contracts & DApps\n   - Crypto escrow & P2P platforms\n\n6. Cloud & DevOps\n   - AWS infrastructure setup\n   - Docker containerization\n   - CI/CD pipeline configuration\n\nReady to start? Contact via WhatsApp: +92 349 779 4992`;
  }

  // Projects
  if (msg.match(/project|portfolio|built|made|create|develop|show|demo|live/)) {
    return `Faisal's Major Projects:\n\n1. SAFE-Bridge (Solo Project)\n   AI Academic Engagement Intelligence Platform\n   - 100% anonymous student feedback system\n   - GPT-4o-mini classification & sentiment analysis\n   - Custom Psychological Safety Index (PSI)\n   - Predictive analytics with linear regression\n   - 14 database models, 12 backend services, 30+ components\n   - 3-language support (English, Urdu, Arabic RTL)\n   Tech: Next.js 14, TypeScript, Express, PostgreSQL, Prisma, OpenAI\n   Live: safebridgeedu.vercel.app\n\n2. Escrowly\n   Multi-chain crypto escrow platform\n   - 11 NestJS microservices\n   - Kafka event pipeline\n   - Supports Solana, Ethereum, TRON, BSC, Polygon\n   - KYC compliance & real-time dispute resolution\n   Tech: NestJS, React, TypeScript, Kafka, PostgreSQL, Docker\n\n3. AI Floor Plan Generator\n   Enterprise-grade AI platform for architecture\n   - GPT-4o powered floor plan generation from text\n   - 2D/3D views, DXF/DWG export\n   - Autodesk ACC integration\n   Tech: Next.js, TypeScript, Three.js, PostgreSQL, OpenAI\n\n4. Give Gaza - Humanitarian donation platform\n5. Gaming Platform - Modern Next.js gaming platform\n6. Flex Play Game - Professional gaming landing page\n\nAll projects have live demos in the Projects section!`;
  }

  // Contact info
  if (msg.match(/contact|email|reach|phone|whatsapp|call|message|connect|talk/)) {
    return `Contact Faisal:\n\n- WhatsApp: +92 349 779 4992\n- Email: faisalabbas7959@gmail.com\n- LinkedIn: linkedin.com/in/faisal-abbas-11bb86278\n- Use the Contact form on this page\n\nHe typically responds within a few hours!`;
  }

  // About / Who is Faisal
  if (msg.match(/who|about|faisal|himself|tell me|introduce|background|bio|summary/)) {
    return `About Faisal Abbas:\n\nFaisal is a Full-Stack Developer & Agentic AI Engineer from Pakistan. He specializes in building production-grade, scalable web applications that solve real-world problems.\n\nHis expertise spans the entire development lifecycle - from designing microservices architectures with NestJS + Kafka to building AI-powered analytics platforms with OpenAI integration.\n\nAs a solo developer, he built SAFE-Bridge (an AI Academic Platform) with 14 database models, 12 backend services, and 30+ frontend components - demonstrating his ability to handle complex, enterprise-grade projects independently.\n\nHe's passionate about Agentic AI, building intelligent automation systems using MCP servers, Agentic SDK, and N8N workflows.\n\nCore strengths:\n- Enterprise-grade full-stack architecture\n- AI/ML integration (OpenAI, NLP, predictive analytics)\n- Microservices & event-driven systems\n- Blockchain & decentralized applications\n- Rapid solo project delivery`;
  }

  // Education
  if (msg.match(/education|study|university|degree|college|school|student|academic/)) {
    return `Faisal is a student who has been actively building enterprise-grade projects while studying. His SAFE-Bridge platform was built as a solo student project to solve real problems in university education.\n\nHe combines academic learning with hands-on development, having built multiple production-ready applications including microservices platforms and AI-powered systems.\n\nHis continuous learning includes:\n- Full-stack web development (MERN/PERN)\n- Agentic AI & automation\n- Blockchain development\n- Cloud architecture & DevOps`;
  }

  // Pricing
  if (msg.match(/price|cost|rate|charge|budget|how much|quote|estimate|fee/)) {
    return `Faisal offers competitive rates for quality work. Pricing depends on:\n\n- Project complexity & scope\n- Timeline requirements\n- Tech stack needed\n- Ongoing maintenance needs\n\nHe provides free initial consultations to understand your requirements.\n\nGet a quote:\n- WhatsApp: +92 349 779 4992\n- Email: faisalabbas7959@gmail.com\n\nHe's known for delivering high-quality work on time!`;
  }

  // Experience / work history
  if (msg.match(/experience|year|work history|company|job|career|professional/)) {
    return `Faisal's Professional Experience:\n\nHe has built multiple production-grade applications including:\n\n- Enterprise microservices architecture (11 NestJS services)\n- AI-powered analytics platforms (GPT-4o integration)\n- Blockchain/crypto platforms (multi-chain support)\n- Real-time dashboard systems (SSE, WebSockets)\n- Automated workflow systems (N8N, MCP)\n\nKey achievements:\n- Built SAFE-Bridge solo: 14 DB models, 12 services, 30+ components\n- Architected Escrowly: 11 microservices with Kafka event pipeline\n- Integrated multi-chain blockchain (Solana, ETH, TRON, BSC, Polygon)\n- Implemented predictive analytics with linear regression\n\nHe's worked across the full technology spectrum from frontend to DevOps.`;
  }

  // Availability
  if (msg.match(/available|free|open|accept|taking|new project|timeline/)) {
    return `Faisal is currently available for:\n\n- Freelance projects (full-stack, AI, blockchain)\n- Long-term contract work\n- Technical consultation\n- Project collaborations\n\nHe's flexible with timezones and committed to delivering quality work.\n\nReach out to discuss your project:\n- WhatsApp: +92 349 779 4992\n- Email: faisalabbas7959@gmail.com`;
  }

  // Why hire / strengths
  if (msg.match(/why hire|why choose|strength|advantage|unique|different|best|good/)) {
    return `Why Work With Faisal?\n\n1. Solo Project Capability\n   Built enterprise-grade platforms independently (14 DB models, 12 services, 30+ components)\n\n2. Full-Stack Expertise\n   From React/Next.js UI to NestJS microservices to DevOps deployment\n\n3. AI Integration Specialist\n   Real experience integrating GPT-4o, building predictive analytics, and sentiment analysis\n\n4. Production-Ready Code\n   JWT auth, rate limiting, CSP headers, audit trails - enterprise security built-in\n\n5. Modern Architecture\n   Microservices, event-driven (Kafka), real-time (SSE), containerized (Docker/K8s)\n\n6. Fast Delivery\n   Proven ability to ship complex projects quickly and independently`;
  }

  // Thank you / goodbye
  if (msg.match(/thank|thanks|bye|goodbye|see you|later|great|awesome|perfect/)) {
    return "You're welcome! Feel free to come back anytime. Don't hesitate to reach out to Faisal directly!\n\nWhatsApp: +92 349 779 4992\nEmail: faisalabbas7959@gmail.com\n\nHave a great day!";
  }

  // Blockchain specific
  if (msg.match(/blockchain|crypto|web3|smart contract|defi|nft|solana|ethereum/)) {
    return `Faisal's Blockchain Expertise:\n\n- Multi-chain wallet integration (Solana, Ethereum, TRON, BSC, Polygon)\n- Smart contract development\n- Crypto escrow systems (P2P transactions)\n- KYC compliance integration\n- DApp (Decentralized Application) development\n\nNotable Project: Escrowly\n- Secure P2P crypto transactions\n- 11 NestJS microservices\n- Multi-chain support with real-time dispute resolution\n\nNeed a blockchain solution? Contact Faisal!`;
  }

  // AI specific
  if (msg.match(/ai|artificial intelligence|machine learning|gpt|openai|chatbot|agent|automation/)) {
    return `Faisal's AI & Automation Expertise:\n\n1. OpenAI / GPT Integration\n   - GPT-4o & GPT-4o-mini for text classification\n   - Sentiment analysis & content moderation\n   - AI-powered data insights generation\n\n2. Agentic AI\n   - Agentic SDK for building AI agents\n   - MCP (Model Context Protocol) servers\n   - Intelligent workflow automation\n\n3. Predictive Analytics\n   - Linear regression models\n   - Seasonality detection\n   - Statistical outlier detection (IQR)\n\n4. N8N Automation\n   - Custom workflow pipelines\n   - API orchestration\n   - Data processing automation\n\nNotable: SAFE-Bridge uses GPT-4o-mini for real-time feedback classification with custom Psychological Safety Index!`;
  }

  // Default response
  return `I can help you learn about Faisal Abbas! Try asking:\n\n- "What are his skills?"\n- "What services does he offer?"\n- "Show me his projects"\n- "How can I contact him?"\n- "Tell me about Faisal"\n- "Why should I hire him?"\n- "What's his experience with AI?"\n- "Is he available for work?"\n- "What about blockchain?"`;
}

const FloatingChat = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Assalam-o-Alaikum! I'm Faisal's AI assistant. Ask me anything about his skills, services, projects, or how to hire him!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages((prev) => [...prev, { type: "user", text: userMsg }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(userMsg);
      setIsTyping(false);
      setMessages((prev) => [...prev, { type: "bot", text: response }]);
    }, 800);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Faisal%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.`,
      "_blank"
    );
  };

  const quickQuestions = [
    "What are his skills?",
    "Show me projects",
    "Services offered",
    "How to contact?",
  ];

  return (
    <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="w-[calc(100vw-24px)] sm:w-[380px] max-w-[380px] h-[70vh] sm:h-[520px] max-h-[520px] bg-[#0f0a2e] border border-purple-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-3 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 8V4H8" />
                    <rect width="16" height="12" x="4" y="8" rx="2" />
                    <path d="M2 14h2" />
                    <path d="M20 14h2" />
                    <path d="M15 13v2" />
                    <path d="M9 13v2" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Faisal's AI Assistant</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <p className="text-white/70 text-xs">Online</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-[13px] whitespace-pre-line leading-relaxed ${
                      msg.type === "user"
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-br-sm"
                        : "bg-[#1a1145] text-gray-200 border border-purple-500/20 rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[#1a1145] border border-purple-500/20 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions (only show when few messages) */}
            {messages.length <= 2 && (
              <div className="px-3 pb-2 flex flex-wrap gap-1.5 shrink-0">
                {quickQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => {
                      setMessages((prev) => [...prev, { type: "user", text: q }]);
                      setIsTyping(true);
                      setTimeout(() => {
                        const response = getBotResponse(q);
                        setIsTyping(false);
                        setMessages((prev) => [...prev, { type: "bot", text: response }]);
                      }, 800);
                    }}
                    className="text-[11px] px-3 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/25 text-purple-300 hover:bg-purple-500/25 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-purple-500/20 shrink-0">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Faisal..."
                  className="flex-1 bg-[#1a1145] text-white text-sm px-4 py-2.5 rounded-xl border border-purple-500/20 outline-none focus:border-purple-500/50 placeholder:text-gray-500"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 p-2.5 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-40"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Buttons */}
      <div className="flex flex-col items-center gap-2 sm:gap-3">
        {/* Back to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              title="Back to top"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Button */}
        <motion.button
          onClick={openWhatsApp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-shadow"
          title="Chat on WhatsApp"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </motion.button>

        {/* Chat Bot Button */}
        <motion.button
          onClick={() => setIsChatOpen(!isChatOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg transition-all ${
            isChatOpen
              ? "bg-red-500 shadow-red-500/30"
              : "bg-gradient-to-r from-purple-600 to-blue-600 shadow-purple-500/30 hover:shadow-purple-500/50"
          }`}
          title="Chat with AI Assistant"
        >
          {isChatOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
              <circle cx="8" cy="10" r="1" />
              <circle cx="12" cy="10" r="1" />
              <circle cx="16" cy="10" r="1" />
            </svg>
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default FloatingChat;
