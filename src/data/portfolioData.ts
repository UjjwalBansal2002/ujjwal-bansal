export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Android' | 'Astrology & AI' | 'Enterprise & Multi-Role' | 'UI & System' | 'Career & Assessment';
  featured: boolean;
  image: string;
  description: string;
  architecture: string;
  techStack: string[];
  features: string[];
  challenges: string;
  caseStudy: string;
  githubUrl?: string;
  liveUrl?: string;
  playStoreUrl?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level?: number;
    highlight?: boolean;
  }[];
}

export interface TimelineItem {
  year: string;
  title: string;
  companyOrOrg: string;
  type: 'Experience' | 'Education';
  location: string;
  description: string;
  achievements: string[];
  techUsed: string[];
}

export interface ProblemSolved {
  title: string;
  description: string;
  category: string;
  impact: string;
  icon: string;
}

export const PERSONAL_INFO = {
  name: "Ujjwal Bansal",
  title: "Native Android Developer",
  experienceYears: "1 Year",
  currentRole: "Android Developer at AppSquadz Software Pvt. Ltd., Noida",
  currentCompany: "AppSquadz Software Pvt. Ltd., Noida",
  startDate: "November 2025 – Present",
  location: "Noida, Uttar Pradesh, India",
  email: "bansalujjwal2002@gmail.com",
  secondaryEmail: "ujjwalandroiddev@gmail.com",
  phone: "8445973574",
  phoneFormatted: "+91 8445973574",
  github: "https://github.com/UjjwalBansal2002/ujjwal-bansal",
  linkedin: "https://www.linkedin.com/in/ujjwalbansal1810",
  siteUrl: "https://ujjwalbansaldev.vercel.app",
  availabilityStatus: "Available for Android Developer Opportunities",
  headline: "I build secure, scalable and user-focused Android applications using Kotlin, modern Android architecture and production-ready integrations.",
  summary: `Android Developer with 1 year of hands-on experience developing and maintaining production Android applications using Kotlin, XML, and MVVM architecture. Experienced in REST API integration, Firebase Analytics, Meta SDK integration, payment workflows, reusable UI development, and third-party SDK integration (Digio, Google Maps, Glide, Android Image Cropper). Strong expertise in debugging production issues, optimizing application performance, refactoring large codebases, and building scalable modular applications following clean code practices.`,
  aboutBio: `Native Android Developer with hands-on experience building Android applications using Kotlin, XML, REST APIs, Firebase and modern Android development practices. Experience working on astrology applications, AI chat experiences, multi-role platforms, career-assessment systems, vendor applications, customer applications and astrologer platforms. Focused on converting complex UI designs into responsive Android layouts, writing reusable components, handling encrypted API payloads, and optimizing app performance for production release.`
};

export const SKILL_GROUPS: SkillCategory[] = [
  {
    title: "Android Development",
    iconName: "Smartphone",
    skills: [
      { name: "Kotlin", highlight: true },
      { name: "Android SDK", highlight: true },
      { name: "XML Layouts", highlight: true },
      { name: "Activities & Fragments", highlight: false },
      { name: "Android Lifecycle", highlight: true },
      { name: "ViewBinding", highlight: false },
      { name: "Data Binding", highlight: false },
      { name: "RecyclerView", highlight: false },
      { name: "ViewPager2", highlight: false },
      { name: "Material Components", highlight: false },
      { name: "Custom Views", highlight: false },
      { name: "Bottom Sheets", highlight: false },
      { name: "Responsive Android UI", highlight: true },
      { name: "Deep Linking", highlight: false },
      { name: "Push Notifications", highlight: false },
      { name: "Multi-language Support", highlight: false }
    ]
  },
  {
    title: "Architecture & Code Quality",
    iconName: "Layers",
    skills: [
      { name: "MVVM Architecture", highlight: true },
      { name: "Modularization", highlight: true },
      { name: "Separation of Concerns", highlight: false },
      { name: "Reusable Components", highlight: true },
      { name: "Clean Code Practices", highlight: true },
      { name: "Lifecycle-Safe Development", highlight: false },
      { name: "Application State Management", highlight: false }
    ]
  },
  {
    title: "Networking & Data",
    iconName: "Network",
    skills: [
      { name: "Retrofit", highlight: true },
      { name: "OkHttp", highlight: false },
      { name: "Gson & JSON Parsing", highlight: false },
      { name: "REST APIs Integration", highlight: true },
      { name: "Pagination", highlight: false },
      { name: "Multipart Image Upload", highlight: false },
      { name: "Secure API Integration", highlight: true },
      { name: "AES-CBC Decryption", highlight: true },
      { name: "SharedPreferences", highlight: false }
    ]
  },
  {
    title: "Firebase & Analytics",
    iconName: "Activity",
    skills: [
      { name: "Firebase Analytics", highlight: true },
      { name: "Firebase DebugView", highlight: false },
      { name: "Firebase Cloud Messaging (FCM)", highlight: true },
      { name: "Firebase Crashlytics", highlight: true },
      { name: "Meta App Events SDK", highlight: true },
      { name: "Custom Analytics Events", highlight: false },
      { name: "Purchase Tracking", highlight: false },
      { name: "Subscription Tracking", highlight: false }
    ]
  },
  {
    title: "Libraries & Tools",
    iconName: "Wrench",
    skills: [
      { name: "Glide", highlight: false },
      { name: "Coil", highlight: false },
      { name: "Hilt", highlight: true },
      { name: "ExoPlayer / Media3", highlight: false },
      { name: "Google Maps SDK", highlight: false },
      { name: "CameraX", highlight: false },
      { name: "SpeechRecognizer API", highlight: false },
      { name: "ElevenLabs TTS", highlight: false },
      { name: "Digio SDK", highlight: false },
      { name: "Android Image Cropper", highlight: false },
      { name: "Git & GitHub", highlight: true },
      { name: "Gradle & ADB", highlight: false },
      { name: "Android Studio", highlight: true },
      { name: "Postman", highlight: false }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "shivai-astrology-app",
    title: "ShivAI — AI Astrology Application",
    tagline: "Voice-enabled AI astrology & numerology Android application built with Kotlin.",
    category: "Astrology & AI",
    featured: true,
    image: "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?q=80&w=1200&auto=format&fit=crop",
    description: "An AI-powered astrology and numerology Android application built using Kotlin. Combines personalized astrology reports, numerology insights, voice-enabled AI chat, subscriptions, and Meta/Firebase analytics tracking.",
    architecture: "MVVM Architecture + Clean Code + Modular Handlers",
    techStack: ["Kotlin", "XML", "Retrofit", "Firebase FCM & Analytics", "Meta SDK", "SpeechRecognizer", "ElevenLabs TTS", "Glide", "AES-CBC Encryption"],
    features: [
      "OTP login & multi-step user onboarding flow",
      "Date, time & place-of-birth picker with planetary calculation inputs",
      "Interactive AI astrology voice chat powered by SpeechRecognizer & ElevenLabs TTS",
      "Subscription plans & chat-lock access logic",
      "Numerology reports, weekly horoscopes, and Guna Milan matchmaking",
      "FCM notifications with deep linking into specific report screens",
      "Meta App Events and Firebase purchase/subscription conversion tracking",
      "Secure AES-encrypted REST API response handling"
    ],
    challenges: "Handling real-time Speech-to-Text and ElevenLabs Text-to-Speech audio buffering smoothly while maintaining low memory consumption and instant chat responses.",
    caseStudy: "Designed ShivAI's modular architecture to isolate network encryption, AI voice handlers, and UI state. Implemented custom AES-CBC decryption interceptors in Retrofit to process encrypted payloads securely before parsing JSON responses.",
    githubUrl: "https://github.com/UjjwalBansal2002/ujjwal-bansal"
  },
  {
    id: "ap-astro-customer-platform",
    title: "AP Astro — Customer Astrology Platform",
    tagline: "Feature-rich Android app for exploring astrologers, compatibility matchmaking, and live horoscopes.",
    category: "Astrology & AI",
    featured: true,
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop",
    description: "A customer-facing astrology application that allows users to explore verified astrologers, create matchmaking profiles, calculate compatibility scores, and access personalized astrology services.",
    architecture: "MVVM + Repository Pattern + ViewPager2 Navigation",
    techStack: ["Kotlin", "XML", "MVVM", "Retrofit", "ViewPager2", "Material Components", "Glide", "Encrypted APIs"],
    features: [
      "User authentication and profile onboarding workflow",
      "Astrologer listing with real-time availability badges & filters",
      "Matchmaking profile manager and compatibility calculation engine",
      "Panchang, daily horoscope, and Guna Milan compatibility meter",
      "Astro store product catalog and purchasing flows",
      "Custom bottom navigation and dynamic hero banner carousel",
      "Lifecycle-safe UI state updates avoiding Fragment context crashes"
    ],
    challenges: "Ensuring complex Guna Milan calculations and nested ViewPager2 carousels render smoothly without UI lag or memory retention during rapid tab switches.",
    caseStudy: "Refactored the main screen to use ViewPager2 with FragmentStateAdapter and lifecycle-aware data observers. Integrated Retrofit interceptors for transparent response decryption.",
    githubUrl: "https://github.com/UjjwalBansal2002/ujjwal-bansal"
  },
  {
    id: "ap-astro-pandit-astrologer-app",
    title: "AP Astro Pandit — Astrologer Application",
    tagline: "Dedicated Android app for astrologers to manage availability, consultation rates, and payout accounts.",
    category: "Astrology & AI",
    featured: true,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    description: "An Android application developed for professional astrologers to manage their real-time availability status, service pricing (chat/audio/video), financial transactions, and banking verification.",
    architecture: "MVVM + ViewBinding + Reusable UI Dialogs",
    techStack: ["Kotlin", "XML", "Retrofit", "ViewBinding", "Material Components", "Multipart Image Upload API"],
    features: [
      "Astrologer registration & multi-step profile submission",
      "Online/Offline status toggle with background pinging",
      "Custom rate setting for chat, audio, and video consultations",
      "Real-time earnings dashboard and transaction history logs",
      "Bank account details management & cancelled-cheque image upload",
      "Graceful empty-state handling for pending requests",
      "API-driven profile completion progress tracking"
    ],
    challenges: "Managing reliable multipart image uploads for bank cheque verification across variable network conditions without blocking the main UI loop.",
    caseStudy: "Built a background upload queue using OkHttp MultipartBody and custom progress listeners, delivering instant visual feedback and reliable document uploads.",
    githubUrl: "https://github.com/UjjwalBansal2002/ujjwal-bansal"
  },
  {
    id: "rcentric-customer-app",
    title: "RCentric — Glassmorphic Customer App",
    tagline: "Sleek Android interface featuring custom GlassView blur graphics and fluid onboarding.",
    category: "UI & System",
    featured: true,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    description: "A customer application engineered with a glassmorphism-inspired Android interface, custom visual blur effects, fluid onboarding transitions, and dynamic dashboard controls.",
    architecture: "Custom View Engine + Material 3 Design",
    techStack: ["Kotlin", "XML", "Custom Views", "ViewPager2", "Material Components", "Android Blur API"],
    features: [
      "Custom GlassView visual rendering component",
      "Glassmorphism-styled secure login & registration screens",
      "Multi-screen smooth onboarding presentation with ViewPager2",
      "Animated dots page indicator for banner navigation",
      "Interactive home dashboard with custom card layouts",
      "Android version-compatible backward fallback blur rendering"
    ],
    challenges: "Achieving high-performance real-time glassmorphism blur effects on older Android versions (API 24-30) without impacting frame rates.",
    caseStudy: "Created a custom Android view wrapper that conditionally applies Hardware-accelerated RenderEffect on API 31+ while providing an optimized gradient-alpha fallback for older OS versions.",
    githubUrl: "https://github.com/UjjwalBansal2002/ujjwal-bansal"
  },
  {
    id: "oys-brainserve-career-assessment",
    title: "OYS Brainserve — Career Assessment Platform",
    tagline: "Multi-step Android assessment system collecting career data with AWS S3 integration.",
    category: "Career & Assessment",
    featured: true,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop",
    description: "A structured Android career-assessment platform that collects personal, educational, professional, and career-related information using dynamic multi-step forms.",
    architecture: "MVVM + Form Validator + Reusable RecyclerView Holders",
    techStack: ["Kotlin", "XML", "RecyclerView", "Pagination", "AWS S3 SDK", "AWS Cognito"],
    features: [
      "Multi-step personal information & profile collection flow",
      "Dynamic education, skill sets, and work experience forms",
      "Project details showcase form with dynamic add/remove rows",
      "Assessment step pagination with strict form validation",
      "Secure resume and portfolio document upload to AWS S3",
      "Reusable form field components maintaining state across configuration changes"
    ],
    challenges: "Preventing data loss when users rotate devices or navigate backward across a complex 6-step assessment form.",
    caseStudy: "Implemented a central FormViewModel with StateFlow state preservation, ensuring zero data loss and smooth step navigation across all assessment pages.",
    githubUrl: "https://github.com/UjjwalBansal2002/ujjwal-bansal"
  },
  {
    id: "mno-vendor-platform",
    title: "MNO — Multi-Role Vendor Platform",
    tagline: "Enterprise multi-role Android application for Vendors, Employees, and Customers.",
    category: "Enterprise & Multi-Role",
    featured: true,
    image: "https://images.unsplash.com/photo-1556742049-0a670fc8078a?q=80&w=1200&auto=format&fit=crop",
    description: "A multi-role Android platform developed for vendors, employees, third-party agents, and customers. Supports role-based access, product creation, geocoding, and searchable bottom sheets.",
    architecture: "Modular Multi-Role Architecture + MVVM + Clean Architecture",
    techStack: ["Kotlin", "XML", "Retrofit", "Google Maps SDK", "Image Upload API", "RecyclerView", "Pagination"],
    features: [
      "OTP authentication and hardware device validation",
      "Role-specific UI views (Vendor, Employee, Third-Party, Customer)",
      "Dynamic form generator for custom product parameters",
      "Searchable BottomSheet pickers for location and categories",
      "Multi-image picker and compressed upload pipeline",
      "Google Maps integration with reverse geocoding for shop locations",
      "Product list pagination with infinite scroll using RecyclerView"
    ],
    challenges: "Managing role-based navigation guards and preventing memory leaks when loading dozens of high-resolution product images in a paginated list.",
    caseStudy: "Architected separate feature modules for Vendor and Employee flows. Utilized Glide memory caching and RecyclerView view recycling to maintain 60 FPS scrolling.",
    githubUrl: "https://github.com/UjjwalBansal2002/ujjwal-bansal"
  }
];

export const PROBLEMS_SOLVED_DATA: ProblemSolved[] = [
  {
    title: "End-to-End Android App Engineering",
    description: "Building production-ready Android applications from Figma UI designs to REST API integration, state management, and Play Store submission.",
    category: "App Development",
    impact: "Clean modular architecture, 100% responsive XML layouts, and smooth UX workflows.",
    icon: "Smartphone"
  },
  {
    title: "Fragment Context & Attachment Debugging",
    description: "Resolving 'Fragment not attached to Context' crashes, illegal state exceptions during Fragment transactions, and null listener references.",
    category: "Lifecycle & Stability",
    impact: "Zero lifecycle crashes by using requireContext() safely, viewLifecycleOwner, and lifecycle-aware observers.",
    icon: "ShieldAlert"
  },
  {
    title: "NullPointer & XML Inflation Fixes",
    description: "Eliminating NullPointerExceptions and layout inflation crashes caused by view references, missing attributes, or invalid layout IDs.",
    category: "Crash Prevention",
    impact: "Production crash reduction through ViewBinding, safe calls, and strict nullability checks in Kotlin.",
    icon: "Bug"
  },
  {
    title: "Encrypted API Response Handling (AES-CBC)",
    description: "Handling encrypted API payloads securely using AES-CBC decryption interceptors before parsing JSON models.",
    category: "Security & Networking",
    impact: "End-to-end data security compliance for astrology, financial, and user identity endpoints.",
    icon: "Lock"
  },
  {
    title: "Firebase & Meta Analytics Integration",
    description: "Implementing Firebase Analytics, Crashlytics, FCM notifications, and Meta App Events for tracking purchases, registrations, and custom app events.",
    category: "Analytics & Conversion",
    impact: "Accurate event verification in DebugView and production analytics conversion tracking.",
    icon: "BarChart3"
  },
  {
    title: "Dynamic Forms & Multi-Step Workflows",
    description: "Designing paginated multi-step onboarding forms, career assessment modules, and vendor registration flows with input validation.",
    category: "UI & Component Architecture",
    impact: "Reusable input components that preserve user state across screen rotations and navigation steps.",
    icon: "CheckSquare"
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: "November 2025 – Present",
    title: "Android Developer",
    companyOrOrg: "AppSquadz Software Pvt. Ltd., Noida",
    type: "Experience",
    location: "Noida, Uttar Pradesh, India",
    description: "Developing and maintaining production Android applications using Kotlin, XML, MVVM Architecture, and Data Binding across multi-role platforms, astrology apps, and vendor systems.",
    achievements: [
      "Developed and maintained production Android applications using Kotlin, XML, MVVM Architecture, and Data Binding.",
      "Built scalable multi-role applications supporting Vendor, Employee, and Third-Party users.",
      "Integrated REST APIs for authentication, wallets, subscriptions, matchmaking, transactions, and dynamic content.",
      "Integrated Firebase Analytics and Meta SDK for app activation, registrations, purchases, and custom event tracking.",
      "Developed reusable UI components including RecyclerViews, BottomSheets, dynamic forms, and custom dialogs.",
      "Diagnosed and resolved production issues including crashes, Gradle build failures, manifest conflicts, and Play Store release issues.",
      "Integrated third-party SDKs including Firebase, Meta SDK, Google Maps, Digio, Glide, and Image Cropper.",
      "Collaborated with backend teams and used Git for version control in Agile development."
    ],
    techUsed: ["Kotlin", "XML", "MVVM", "Data Binding", "Retrofit", "Firebase", "Meta SDK", "Google Maps", "Digio", "Glide", "Git"]
  },
  {
    year: "2023 – 2025",
    title: "Master of Computer Applications (MCA)",
    companyOrOrg: "ABES Engineering College",
    type: "Education",
    location: "Ghaziabad / Noida, India",
    description: "Specialized in Mobile Computing, Software Engineering, Object-Oriented System Design, Data Structures, and Database Management Systems.",
    achievements: [
      "Advanced coursework in Mobile Application Development, Software Architecture, and System Analysis.",
      "Hands-on project work developing native Android apps with Kotlin and RESTful web services."
    ],
    techUsed: ["Kotlin", "Java", "Android SDK", "Data Structures", "SQL", "Git"]
  },
  {
    year: "2020 – 2023",
    title: "Bachelor of Science (B.Sc.)",
    companyOrOrg: "CCS University",
    type: "Education",
    location: "Uttar Pradesh, India",
    description: "Foundational degree emphasizing Computer Science fundamentals, Mathematics, Logical Problem Solving, and Algorithmic Thinking.",
    achievements: [
      "Strong grounding in object-oriented programming, data structures, and computer science logic.",
      "Built foundation for software engineering and mobile application development."
    ],
    techUsed: ["C++", "Java", "Computer Science Fundamentals", "Mathematics"]
  }
];

export const SEO_METADATA = {
  title: "Ujjwal Bansal — Native Android Developer Portfolio",
  description: "Official portfolio of Ujjwal Bansal, Native Android Developer with 1 year of hands-on experience building production Android applications using Kotlin, XML, MVVM, REST APIs, and Firebase.",
  keywords: [
    "Ujjwal Bansal Android Developer",
    "Kotlin Android Developer",
    "Native Android Developer",
    "Android Developer Portfolio",
    "Android Developer in India",
    "Android Developer Noida",
    "Firebase Android Developer",
    "Mobile Application Developer",
    "Ujjwal Bansal AppSquadz",
    "MVVM Kotlin Developer"
  ],
  author: "Ujjwal Bansal",
  siteUrl: "https://ujjwalbansaldev.vercel.app"
};
