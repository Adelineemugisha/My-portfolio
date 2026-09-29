import React from 'react';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-emerald-200 selection:text-emerald-900">
  
      <header className="sticky top-0 z-50 w-full border-b border-emerald-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
  
          <a href="#" className="text-xl font-bold tracking-tight text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded">
            Backend developer
          </a>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-black">
            <a href="#about" className="hover:text-emerald-700 transition-colors">About</a>
            <a href="#projects" className="hover:text-emerald-700 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-emerald-700 transition-colors">Skills</a>
            <a href="#case-studies" className="hover:text-emerald-700 transition-colors">Product & UX</a>
            <a href="#estateflow" className="hover:text-emerald-700 transition-colors">EstateFlow</a>
            <a href="#contact" className="hover:text-emerald-700 transition-colors">Contact</a>
          </nav>
          <a 
            href="#contact" 
            className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 sm:px-6 divide-y divide-emerald-200">
        
        <section className="flex flex-col md:flex-row items-center justify-start py-20 min-h-[calc(100vh-4rem)] gap-12 md:gap-16">
          <div className="flex justify-center items-center shrink-0 pointer-events-none select-none">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-2xl border-4 border-emerald-300 overflow-hidden shadow-2xl">
              <Image 
                src="/me.png" 
                alt="Profile Picture"
                fill
                sizes="(max-width: 640px) 288px, (max-width: 768px) 384px, 384px"
                priority
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center md:text-left flex-1">
            <p className="text-emerald-900 font-sans font-bold tracking-wide mb-3 text-sm sm:text-base bg-emerald-100 px-2 py-0.5 rounded w-fit mx-auto md:mx-0">
            Code that scales
            </p>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-emerald-900 mb-4">
              I bridge code, data, and product strategy.
            </h1>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-emerald-800 mb-6">
              My name is Adeline Mugisha.
            </h2>
            <p className="max-w-xl text-base sm:text-lg text-black mb-10 leading-relaxed">
              I am a software engineer who bridges the gap between technical complexity and commercial success. 
              I turn complex data structures and 
              codebases into profitable business solutions by aligning scalable architecture with strategic product goals.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#projects" className="rounded-md border-2 border-emerald-600 px-6 py-3 font-semibold text-emerald-700 hover:bg-emerald-600 hover:text-white transition-all duration-200">
                View Projects
              </a>
              <a href="#case-studies" className="rounded-md bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700 transition-colors">
                Read UX Case Studies
              </a>
            </div>
          </div>

        </section>

        <section id="about" className="py-9 scroll-mt-16">
          <h2 className="text-3xl font-black text-emerald-900 mb-8 flex items-center gap-2">
            <span className="text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded font-sans text-xl">01.</span> About Me
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-black leading-relaxed">
            <div className="md:col-span-2 space-y-4">
              <p>
                Hello! I&apos;m a software engineer who loves solving complex engineering problems. Because I have trained across frontend, backend, and mobile development, I understand how to tie a whole ecosystem together seamlessly.
              </p>
              <p>
                Beyond standard coding, I dive deep into Machine Learning to make applications smarter, and apply strict UX Research and Product Management frameworks to make sure what I build actually delivers commercial value to businesses and real joy to users.
              </p>
            </div>
            <div className="border-2 border-emerald-200 rounded-lg p-6 bg-emerald-50 h-fit">
              <h3 className="text-emerald-800 font-extrabold mb-2 text-lg">Core Philosophy</h3>
              <p className="text-sm text-black">&ldquo;Code is just a tool. Understanding the data patterns and the human user on the other side of the screen is what creates a great software product.&rdquo;</p>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 scroll-mt-16">
          <h2 className="text-3xl font-black text-emerald-900 mb-8 flex items-center gap-2">
            <span className="text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded font-sans text-xl">02.</span> Featured Projects
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">

            <a 
              href="https://github.com/Adelineemugisha/ihumure" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group rounded-xl border-4 border-emerald-300 bg-emerald-50/50 p-8 md:p-10 hover:bg-emerald-100 hover:border-emerald-400 transition-all duration-200 block text-left"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm sm:text-base font-sans font-black text-emerald-800 bg-emerald-100 px-6 py-1.5 rounded-md uppercase tracking-wider">
                  Mobile App (Flutter)
                </span>
                <span className="text-emerald-700 group-hover:text-white group-hover:bg-emerald-600 px-3 py-1 rounded-md text-sm font-bold transition-colors">
                  GitHub ↗
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-emerald-900 mt-4 mb-3 group-hover:underline tracking-tight">
                ResilientVoices
              </h3>
              <p className="text-black text-base sm:text-lg mb-6 leading-relaxed font-medium">
                A dedicated mobile app bridging community and healing for GBV survivors, offering anonymous group discussions, shared survivor testimonies, and powerful personal testimonies.
              </p>
              <div className="flex flex-wrap gap-3 text-sm sm:text-base font-sans text-emerald-800 font-black bg-emerald-100 p-2.5 rounded-md w-fit">
                <span>#FrontendMobile</span> <span>#Python</span> <span>#PostgreSQL</span>
              </div>
            </a>
            <a 
              href="https://github.com/Adelineemugisha/POS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group rounded-xl border-4 border-emerald-300 bg-emerald-50/50 p-8 md:p-10 hover:bg-emerald-100 hover:border-emerald-400 transition-all duration-200 block text-left"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm sm:text-base font-sans font-black text-emerald-800 bg-emerald-100 px-6 py-1.5 rounded-md uppercase tracking-wider">
                  Python / Backend
                </span>
                <span className="text-emerald-700 group-hover:text-white group-hover:bg-emerald-600 px-3 py-1 rounded-md text-sm font-bold transition-colors">
                  GitHub ↗
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-emerald-900 mt-4 mb-3 group-hover:underline tracking-tight">
                Point of sale (POS)
              </h3>
              <p className="text-black text-base sm:text-lg mb-6 leading-relaxed font-medium">
                A reliable Python-based backend service that serves as the backbone for retail sales. It bridges transaction processing, secure data persistence, and inventory tracking into a unified, business-critical solution.
              </p>
              <div className="flex flex-wrap gap-3 text-sm sm:text-base font-sans text-emerald-800 font-black bg-emerald-100 p-2.5 rounded-md w-fit">
                <span>#Backend</span> <span>#Python</span> <span>#FastAPI</span>
              </div>
            </a>
            <a 
              href="https://github.com/Adelineemugisha/Heza-Hub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group rounded-xl border-4 border-emerald-300 bg-emerald-50/50 p-8 md:p-10 hover:bg-emerald-100 hover:border-emerald-400 transition-all duration-200 block text-left"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm sm:text-base font-sans font-black text-emerald-800 bg-emerald-100 px-6 py-1.5 rounded-md uppercase tracking-wider">
                  Frontend Web
                </span>
                <span className="text-emerald-700 group-hover:text-white group-hover:bg-emerald-600 px-3 py-1 rounded-md text-sm font-bold transition-colors">
                  GitHub ↗
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-emerald-900 mt-4 mb-3 group-hover:underline tracking-tight">
                Agrowaste Connect
              </h3>
              <p className="text-black text-base sm:text-lg mb-6 leading-relaxed font-medium">
                A user-centric React platform designed to bring circular economy solutions to rural agriculture. The application enables farmers to easily list organic waste, connect directly with biochar production facilities, and generate a new stream of sustainable revenue.
              </p>
              <div className="flex flex-wrap gap-3 text-sm sm:text-base font-sans text-emerald-800 font-black bg-emerald-100 p-2.5 rounded-md w-fit">
                <span>#JavaScript</span> <span>#React.js</span> <span>#WebDev</span>
              </div>
            </a>
            <a 
              href="https://github.com/Adelineemugisha/shopping-list" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group rounded-xl border-4 border-emerald-300 bg-emerald-50/50 p-8 md:p-10 hover:bg-emerald-100 hover:border-emerald-400 transition-all duration-200 block text-left"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm sm:text-base font-sans font-black text-emerald-800 bg-emerald-100 px-6 py-1.5 rounded-md uppercase tracking-wider">
                  Frontend Web
                </span>
                <span className="text-emerald-700 group-hover:text-white group-hover:bg-emerald-600 px-3 py-1 rounded-md text-sm font-bold transition-colors">
                  GitHub ↗
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-emerald-900 mt-4 mb-3 group-hover:underline tracking-tight">
                StyleInspo
              </h3>
              <p className="text-black text-base sm:text-lg mb-6 leading-relaxed font-medium">
                A responsive frontend catalog application designed for seamless collection tracking. Leveraging dynamic filtering and clean UI components, it enables users to seamlessly curate, manage, and visualize aspirational shopping lists for shoes and clothing.
              </p>
              <div className="flex flex-wrap gap-3 text-sm sm:text-base font-sans text-emerald-800 font-black bg-emerald-100 p-2.5 rounded-md w-fit">
                <span>#JavaScript</span> <span>#Next.js</span> <span>#TailwindCSS</span>
              </div>
            </a>

            <a 
              href="https://github.com/Adelineemugisha/Rwandan_food" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group rounded-xl border-4 border-emerald-300 bg-emerald-50/50 p-8 md:p-10 hover:bg-emerald-100 hover:border-emerald-400 transition-all duration-200 block text-left col-span-1"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm sm:text-base font-sans font-black text-emerald-800 bg-emerald-100 px-6 py-1.5 rounded-md uppercase tracking-wider">
                  Frontend Web
                </span>
                <span className="text-emerald-700 group-hover:text-white group-hover:bg-emerald-600 px-3 py-1 rounded-md text-sm font-bold transition-colors">
                  GitHub ↗
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-emerald-900 mt-4 mb-3 group-hover:underline tracking-tight">
              Taste of Rwanda
              </h3>
              <p className="text-black text-base sm:text-lg mb-6 leading-relaxed font-medium">
                The platform offers curated inspiration for everyday meals and special occasions, teaching 
                users the names, origins, and precise preparation techniques of local dishes
              </p>
              <div className="flex flex-wrap gap-3 text-sm sm:text-base font-sans text-emerald-800 font-black bg-emerald-100 p-2.5 rounded-md w-fit">
                <span>#JavaScript</span> <span>#Next.js</span> <span>#TailwindCSS</span>
              </div>
            </a>

                <a 
              href="https://github.com/Adelineemugisha/University-in-Rwanda" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group rounded-xl border-4 border-emerald-300 bg-emerald-50/50 p-8 md:p-10 hover:bg-emerald-100 hover:border-emerald-400 transition-all duration-200 block text-left col-span-1"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm sm:text-base font-sans font-black text-emerald-800 bg-emerald-100 px-6 py-1.5 rounded-md uppercase tracking-wider">
                  Frontend Web
                </span>
                <span className="text-emerald-700 group-hover:text-white group-hover:bg-emerald-600 px-3 py-1 rounded-md text-sm font-bold transition-colors">
                  GitHub ↗
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-emerald-900 mt-4 mb-3 group-hover:underline tracking-tight">
              EduLink RW
              </h3>
              <p className="text-black text-base sm:text-lg mb-6 leading-relaxed font-medium">
                An impactful educational access application engineered to simplify the university search and application process in Rwanda. It provides
                 a user-centric directory where students can explore academic programs, compare institutions, and launch direct, secure 
                 applications to their chosen campuse
              </p>
              <div className="flex flex-wrap gap-3 text-sm sm:text-base font-sans text-emerald-800 font-black bg-emerald-100 p-2.5 rounded-md w-fit">
                <span>#JavaScript</span> <span>#React.js</span> <span>#TailwindCSS</span>
              </div>
            </a>

        <a 
              href="https://github.com/Adelineemugisha/IOT_practic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group rounded-xl border-4 border-emerald-300 bg-emerald-50/50 p-8 md:p-10 hover:bg-emerald-100 hover:border-emerald-400 transition-all duration-200 block text-left col-span-1"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm sm:text-base font-sans font-black text-emerald-800 bg-emerald-100 px-6 py-1.5 rounded-md uppercase tracking-wider">
                  IOT(Internet of Things)
                </span>
                <span className="text-emerald-700 group-hover:text-white group-hover:bg-emerald-600 px-3 py-1 rounded-md text-sm font-bold transition-colors">
                  GitHub ↗
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-emerald-900 mt-4 mb-3 group-hover:underline tracking-tight">
              SmartLink Hardware
              </h3>
              <p className="text-black text-base sm:text-lg mb-6 leading-relaxed font-medium">
                A robust IoT integration project designed to handle dynamic Wi-Fi connection pooling on embedded systems.
                 Engineered inside the PlatformIO ecosystem, it enables hardware modules to scan networks, authenticate securely, and 
                output live connectivity statuses onto connected OLED/LCD screens
              </p>
              <div className="flex flex-wrap gap-3 text-sm sm:text-base font-sans text-emerald-800 font-black bg-emerald-100 p-2.5 rounded-md w-fit">
                <span>#C++</span> <span>#IOT</span> <span>#PlatformIo</span>
              </div>
            </a>

        <a 
              href="https://github.com/Adelineemugisha/calculator" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group rounded-xl border-4 border-emerald-300 bg-emerald-50/50 p-8 md:p-10 hover:bg-emerald-100 hover:border-emerald-400 transition-all duration-200 block text-left col-span-1"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm sm:text-base font-sans font-black text-emerald-800 bg-emerald-100 px-6 py-1.5 rounded-md uppercase tracking-wider">
                fronted/backend
                </span>
                <span className="text-emerald-700 group-hover:text-white group-hover:bg-emerald-600 px-3 py-1 rounded-md text-sm font-bold transition-colors">
                  GitHub ↗
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-emerald-900 mt-4 mb-3 group-hover:underline tracking-tight">
              Mobile calculator
              </h3>
              <p className="text-black text-base sm:text-lg mb-6 leading-relaxed font-medium">
                A sleek utility application designed to demonstrate mastery over interface layout principles and event-driven logic.
               It combines clean visual hierarchy with efficient input processing to create a seamless, accessible user workflow.
              </p>
              <div className="flex flex-wrap gap-3 text-sm sm:text-base font-sans text-emerald-800 font-black bg-emerald-100 p-2.5 rounded-md w-fit">
                <span>#JavaScript</span> <span>#Html</span> <span>#CSS</span>
              </div>
            </a>

             <a 
              href="https://github.com/Adelineemugisha/tetanic-supervised" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group rounded-xl border-4 border-emerald-300 bg-emerald-50/50 p-8 md:p-10 hover:bg-emerald-100 hover:border-emerald-400 transition-all duration-200 block text-left col-span-1"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm sm:text-base font-sans font-black text-emerald-800 bg-emerald-100 px-6 py-1.5 rounded-md uppercase tracking-wider">
                Machine learning
                </span>
                <span className="text-emerald-700 group-hover:text-white group-hover:bg-emerald-600 px-3 py-1 rounded-md text-sm font-bold transition-colors">
                  GitHub ↗
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-emerald-900 mt-4 mb-3 group-hover:underline tracking-tight">
              Titanic Passenger Survival Predictive Model
              </h3>
              <p className="text-black text-base sm:text-lg mb-6 leading-relaxed font-medium">
               Designed an end-to-end binary classification pipeline to predict passenger survival outcomes based on demographic and socio-economic indicators.
              </p>
              <div className="flex flex-wrap gap-3 text-sm sm:text-base font-sans text-emerald-800 font-black bg-emerald-100 p-2.5 rounded-md w-fit">
                <span>#Python</span> <span>#Kaggle</span> <span>#ML</span>
              </div>
            </a>

   <a 
              href="https://github.com/Adelineemugisha/My-diary" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group rounded-xl border-4 border-emerald-300 bg-emerald-50/50 p-8 md:p-10 hover:bg-emerald-100 hover:border-emerald-400 transition-all duration-200 block text-left col-span-1"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm sm:text-base font-sans font-black text-emerald-800 bg-emerald-100 px-6 py-1.5 rounded-md uppercase tracking-wider">
                fronted/backend
                </span>
                <span className="text-emerald-700 group-hover:text-white group-hover:bg-emerald-600 px-3 py-1 rounded-md text-sm font-bold transition-colors">
                  GitHub ↗
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-emerald-900 mt-4 mb-3 group-hover:underline tracking-tight">
              Student notes keeper
              </h3>
              <p className="text-black text-base sm:text-lg mb-6 leading-relaxed font-medium">
              A responsive note-taking application engineered with dynamic state management to bridge multimedia inputs. It integrates 
              audio recording APIs with persistent text storage, ensuring seamless data serialization and rapid retrieval of academic notes.
              </p>
              <div className="flex flex-wrap gap-3 text-sm sm:text-base font-sans text-emerald-800 font-black bg-emerald-100 p-2.5 rounded-md w-fit">
                 <span>#Backend</span> <span>#JavaScript</span> <span>#Postgress</span>
              </div>
            </a>

          </div>
          </section>

        <section id="skills" className="py-20 scroll-mt-16">
          <h2 className="text-3xl font-black text-emerald-900 mb-8 flex items-center gap-2">
            <span className="text-emerald-600 font-sans text-xl">03.</span> Technical Capabilities
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-emerald-50 p-5 rounded-md border border-emerald-200">
              <h3 className="text-emerald-700 font-bold mb-3">Languages & Backend</h3>
              <ul className="space-y-1 text-sm text-black font-sans">
                <li>• Java / JavaScript</li>
                <li>• IOT </li>
                <li>• Python/ Backend</li>
                <li>• SQL / NoSQL</li>
              </ul>
            </div>
            <div className="bg-emerald-50 p-5 rounded-md border border-emerald-200">
              <h3 className="text-emerald-700 font-bold mb-3">Frontend & Mobile</h3>
              <ul className="space-y-1 text-sm text-black font-sans">
                <li>• React.js / Next.js</li>
                <li>• React Native</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>
            <div className="bg-emerald-50 p-5 rounded-md border border-emerald-200">
              <h3 className="text-emerald-700 font-bold mb-3">AI & Product Strategy</h3>
              <ul className="space-y-1 text-sm text-black font-sans">
                <li>• Machine Learning</li>
                <li>• UX Research / Figma</li>
                <li>• Product Design</li>
                 <li>• Quality Assurance</li>
                  <li>• Product Management</li>
                <li>• Git / Mobile development/ Flutter</li>
                 <li>• Cyber Security</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="case-studies" className="py-20 scroll-mt-16">
          <h2 className="text-3xl font-bold text-emerald-900 mb-8 flex items-center gap-2">
            <span className="text-emerald-600 font-sans text-xl">04.</span> Product & UX Strategy
          </h2>
          <div className="border border-emerald-200 rounded-xl bg-gradient-to-r from-emerald-50 to-emerald-100 p-6 md:p-8">
            <span className="text-xs font-sans uppercase bg-emerald-100 text-emerald-700 px-2 py-1 rounded">Agri-Tech USSD & PWA Marketplace for Zambian Smallholder Farmers</span>
            <h3 className="text-2xl font-bold text-emerald-900 mt-3 mb-2">Technology used</h3>
            <p className="text-black mb-6 max-w-2xl text-sm leading-relaxed">
              USSD Gateway, Progressive Web Apps (PWA), Cloud Databases, SMS APIs.
            </p>
            <p className="text-black mb-6 max-w-2xl text-sm leading-relaxed">
              Conducted an extensive case study identifying critical market access vulnerabilities and price exploitation challenges
              faced by rural smallholder farmers in Zambia.
            </p>
            <div className="flex flex-wrap gap-6 text-xs text-black font-sans">
              <div><strong className="text-emerald-900">Role:</strong> Product Researcher</div>
              <div><strong className="text-emerald-900">Outcome:</strong> Prototype scored 92% on SUS scale</div>
            </div>
          </div>
        </section>

        <section id="estateflow" className="py-20 scroll-mt-16">
          <h2 className="text-3xl font-bold text-emerald-900 mb-8 flex items-center gap-2">
            <span className="text-emerald-600 font-sans text-xl">05.</span> EstateFlow
          </h2>
          <div className="border border-emerald-200 rounded-xl bg-gradient-to-r from-emerald-50 to-emerald-100 p-6 md:p-8">
            <span className="text-xs font-sans uppercase bg-emerald-100 text-emerald-700 px-2 py-1 rounded">FULL-STACK REAL ESTATE LISTING PLATFORM</span>
            <h3 className="text-2xl font-bold text-emerald-900 mt-3 mb-2">Technology used</h3>
            <p className="text-black mb-6 max-w-2xl text-sm leading-relaxed">
              FastAPI, React (Vite), Tailwind CSS, Async SQLAlchemy, PostgreSQL, PyJWT, Pydantic.
            </p>
            <p className="text-black mb-6 max-w-2xl text-sm leading-relaxed">
              A modular, full-stack real estate application featuring secure JWT user authentication,
              role-based listing permissions (agents vs buyers), location-based property searches, dynamic
              image management, favorite/wishlist toggling, and an interactive buyer inquiry pipeline.
            </p>
            <div className="flex flex-wrap gap-6 text-xs text-black font-sans">
              <div><strong className="text-emerald-900">Role:</strong> Full-Stack Developer</div>
              <div><strong className="text-emerald-900">Stack:</strong> FastAPI &amp; React</div>
            </div>
            <div className="flex flex-wrap justify-start gap-4 mt-8">
              <a
                href="https://real-estate-fronted-nu.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
              >
                Live Frontend App ↗
              </a>
              <a
                href="https://real-estate-yscm.onrender.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
              >
                Live Backend API ↗
              </a>
              <a
                href="https://github.com/Adelineemugisha/real_estate_fronted.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
              >
                Frontend GitHub
              </a>
              <a
                href="https://github.com/Adelineemugisha/Real-Estate.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
              >
                Backend GitHub
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 text-center max-w-xl mx-auto scroll-mt-16">
          <h2 className="text-3xl font-bold text-emerald-900 mb-4">Get In Touch</h2>
          <p className="text-black mb-8 text-sm leading-relaxed">
            I am currently actively seeking full time, Junior software engineering, or associate product management roles. 
            If you have an opening or want to collaborate, my inbox is always open!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://www.linkedin.com/in/adeline-mugisha-3206593bb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700 transition-colors"
            >
              LinkedIn
            </a>

             <a 
              href="https://github.com/Adelineemugisha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700 transition-colors"
            >
              Github
            </a>

            <a 
              href="mailto:adelineemugisha@gmail.com"
              className="inline-block rounded-md bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700 transition-colors"
            >
              adelineemugisha@gmail.com
            </a>
            <a 
              href="tel:+250791918718"
              className="inline-block rounded-md bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700 transition-colors"
            >
              +250 791918718
            </a>
          </div>
        </section>

      </main>

      <footer className="py-8 text-center text-xs font-sans text-emerald-500">
        © {new Date().getFullYear()} Adeline. Alright reserved
      </footer>
    </div>
  )
}
