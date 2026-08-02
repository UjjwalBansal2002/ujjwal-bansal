export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Jetpack Compose' | 'FinTech' | 'E-Commerce' | 'AI & System' | 'Open Source' | 'Health & Fitness';
  featured: boolean;
  image: string;
  description: string;
  architecture: string;
  techStack: string[];
  features: string[];
  challenges: string;
  metrics: string[];
  playStoreUrl?: string;
  githubUrl?: string;
  caseStudy: string;
}

export interface Skill {
  name: string;
  category: 'Languages' | 'UI & Design' | 'Architecture & DI' | 'Data & Storage' | 'Networking & Async' | 'Testing & CI/CD' | 'Jetpack & Play Services';
  level: number; // 0-100
  years: string;
  iconName: string;
  description: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  companyOrOrg: string;
  type: 'Experience' | 'Education' | 'Award' | 'Open Source';
  location: string;
  description: string;
  achievements: string[];
  techUsed: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  deliverables: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  content: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
  rating: number;
}

export const PERSONAL_INFO = {
  name: "Ujjwal Bansal",
  title: "Senior Android Developer & Mobile App Architect",
  roles: ["Senior Android Developer", "Mobile App Engineer", "Clean Architecture Expert", "Android App Architect", "Jetpack Compose Specialist"],
  location: "India / Available Worldwide Remote",
  email: "ujjwal.bansal.dev@gmail.com",
  phone: "+91 98765 43210",
  whatsapp: "https://wa.me/919876543210?text=Hi%20Ujjwal,%20I'm%20interested%20in%20working%20with%20you!",
  github: "https://github.com/ujjwalbansal",
  linkedin: "https://linkedin.com/in/ujjwalbansal",
  playStore: "https://play.google.com/store/apps/developer?id=Ujjwal+Bansal",
  siteUrl: "https://ujjwalbansal.dev",
  experienceYears: "6+",
  appsDelivered: "20+",
  totalDownloads: "1M+",
  playStoreRating: "4.8★",
  githubCommits: "500+",
  bio: `Senior Android Developer with over 6 years of experience engineering high-performance, resilient mobile applications for millions of users. Specialized in Modern Android Development (MAD), Jetpack Compose, Kotlin Coroutines/Flow, Clean Architecture, MVI/MVVM, and performance optimization (reducing cold start time by up to 45% and maintaining smooth 60/120 FPS UI frames). Passionate about scalable codebase design, memory leak elimination, modularization, and Google Play Store publishing standards.`
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "paypulse-fintech",
    title: "PayPulse — Next-Gen Android FinTech Wallet",
    tagline: "Ultra-fast Kotlin & Jetpack Compose mobile banking & peer-to-peer payments app.",
    category: "FinTech",
    featured: true,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    description: "PayPulse is a production-grade FinTech application featuring biometric authentication, real-time transaction streaming over WebSocket, multi-currency wallets, and instant QR payment scanning. Built with zero legacy XML code using 100% Jetpack Compose.",
    architecture: "Clean Architecture + MVI + Multi-Module Gradle (Feature-by-layer)",
    techStack: ["Kotlin", "Jetpack Compose", "Coroutines & Flow", "Hilt", "Room DB", "Ktor HTTP", "Biometric API", "CameraX / ML Kit"],
    features: [
      "Hardware-backed Biometric Authentication & KeyStore Encryption",
      "Instant Payment QR Code Scanner powered by CameraX and ML Kit",
      "Live balance updates using SSE and WebSocket streaming",
      "Interactive interactive financial charts with custom Compose Graphics"
    ],
    challenges: "Handling financial transaction state atomicity across offline/online transitions without duplicate charge triggers.",
    metrics: ["100% Jetpack Compose UI", "60 FPS Transaction Animations", "0.4s Cold App Launch Time", "Over 250k+ active test users"],
    playStoreUrl: "https://play.google.com/store",
    githubUrl: "https://github.com/ujjwalbansal/PayPulse-Android",
    caseStudy: "Designed PayPulse from scratch using a multi-module architecture separating domain, data, and presentation layers. Implemented strict offline-first synchronization using Room Database and Coroutine Mutex channels, guaranteeing zero duplicate payments."
  },
  {
    id: "streamverse-media",
    title: "StreamVerse — AI-Powered Video Streaming Platform",
    tagline: "High-throughput Android media player app supporting 4K HDR playback and offline caching.",
    category: "Jetpack Compose",
    featured: true,
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1200&auto=format&fit=crop",
    description: "A flagship media streaming application built with ExoPlayer/Media3 integration, adaptive HLS/DASH streaming, background downloads via WorkManager, and dynamic PIP (Picture-in-Picture) mode.",
    architecture: "Modular Clean Architecture + MVVM + Repository Pattern",
    techStack: ["Kotlin", "Media3 ExoPlayer", "Jetpack Compose", "Coil", "Retrofit", "Room", "WorkManager", "Hilt"],
    features: [
      "Adaptive HLS/DASH Video Streaming with Auto-Quality Selection",
      "Picture-in-Picture (PiP) and Background Audio Playback Service",
      "Offline Encrypted DRM Video Downloading Engine",
      "Personalized content recommendation feed with micro-animations"
    ],
    challenges: "Preventing memory leaks and ANR crashes during heavy ExoPlayer instance recycling in Compose lazy grids.",
    metrics: ["Sub-200ms Video Buffer Latency", "Zero Memory Leaks (Verified via LeakCanary)", "4.8 Star User Rating"],
    playStoreUrl: "https://play.google.com/store",
    githubUrl: "https://github.com/ujjwalbansal/StreamVerse-Android",
    caseStudy: "Engineered ExoPlayer lifecycle binding inside Compose AndroidView, optimizing texture allocation. Reduced memory footprint by 35% during continuous video scrolling."
  },
  {
    id: "nexus-ai-assistant",
    title: "Nexus AI — On-Device LLM & Speech Assistant",
    tagline: "Voice-first Android companion app powered by Gemini Nano and TensorFlow Lite.",
    category: "AI & System",
    featured: true,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    description: "Nexus AI leverages edge machine learning for offline natural language understanding, real-time speech synthesis, and contextual document summarization.",
    architecture: "MVI + Unidirectional Data Flow + Coroutines Flow",
    techStack: ["Kotlin", "TensorFlow Lite", "Gemini API", "Jetpack Compose", "Room", "Dagger-Hilt", "Android AudioTrack"],
    features: [
      "On-Device NLP Inference with zero network latency",
      "Voice Command Recognition & Custom Audio Visualizer",
      "Context-aware conversation history with Vector Store",
      "Dark Mode Luxury UI with dynamic glowing aura animations"
    ],
    challenges: "Fitting lightweight GGUF/TFLite models into mobile RAM constraints without triggering OutOfMemory Error.",
    metrics: ["15ms Inference Response Rate", "Zero Data Sent to Cloud (100% Private)", "10k+ GitHub Stars"],
    playStoreUrl: "https://play.google.com/store",
    githubUrl: "https://github.com/ujjwalbansal/Nexus-AI-Android",
    caseStudy: "Optimized memory mapping (mmap) for weight buffers in C++ NDK wrapper, lowering peak RAM consumption by 50% on mid-tier Android devices."
  },
  {
    id: "compose-motion-kit",
    title: "ComposeMotionKit — Open Source UI Library",
    tagline: "A collection of 30+ production-ready custom Compose animations, gestures, and physics layouts.",
    category: "Open Source",
    featured: true,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    description: "ComposeMotionKit provides developers with drop-in glassmorphic UI components, smooth spring physics layouts, parallax lists, and particle emitters for Jetpack Compose.",
    architecture: "Library SDK / Jetpack Compose Compiler Extension",
    techStack: ["Kotlin", "Jetpack Compose Animation API", "Canvas Graphics", "Maven Publish", "JUnit 5"],
    features: [
      "Physics-based spring animation spec presets",
      "Interactive 3D Card tilt and parallax scrollModifiers",
      "Custom particle explosion and fireworks visual effects",
      "Comprehensive interactive preview app included"
    ],
    challenges: "Ensuring 120Hz display refresh rate stability on Samsung and Google Pixel flagships.",
    metrics: ["2.4k GitHub Stars", "Used in 100+ Production Apps", "100% Code Coverage"],
    playStoreUrl: "https://play.google.com/store",
    githubUrl: "https://github.com/ujjwalbansal/ComposeMotionKit",
    caseStudy: "Created reusable Canvas graphics modifiers using Compose DrawScope to eliminate unnecessary layout passes and avoid recomposition loops."
  },
  {
    id: "cartfly-ecommerce",
    title: "CartFly — Hyperlocal Commerce & Quick Delivery",
    tagline: "High-scale e-commerce application with real-time driver tracking and AR product preview.",
    category: "E-Commerce",
    featured: true,
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1200&auto=format&fit=crop",
    description: "CartFly powers quick-commerce orders with live Google Maps route rendering, WebSocket driver location updates, instant checkout via UPI/Stripe, and AR Core 3D preview.",
    architecture: "Clean Architecture + Modular MVVM + Repository",
    techStack: ["Kotlin", "Google Maps SDK", "ARCore", "Jetpack Compose", "Retrofit", "Room", "Hilt", "FCM"],
    features: [
      "Real-time Driver GPS Polyline Tracking with smooth marker interpolation",
      "Augmented Reality 3D Product Placement preview using ARCore",
      "Instant Cart Sync across multiple devices via Firebase Firestore",
      "FCM Push Notifications for live order status updates"
    ],
    challenges: "Maintaining accurate driver marker movement on Google Maps without erratic jumping due to noisy GPS signals.",
    metrics: ["500k+ Play Store Downloads", "4.7 Rating across 15k Reviews", "99.9% Crash-Free Rate"],
    playStoreUrl: "https://play.google.com/store",
    githubUrl: "https://github.com/ujjwalbansal/CartFly-Android",
    caseStudy: "Implemented Kalman Filter algorithm in Kotlin to smooth out raw GPS coordinate streams before rendering markers on Google Maps."
  },
  {
    id: "fitpulse-health",
    title: "FitPulse — Health Connect & Workout Tracker",
    tagline: "Comprehensive fitness app synchronized with Google Health Connect & wearable sensors.",
    category: "Health & Fitness",
    featured: false,
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    description: "FitPulse tracks biometric metrics, steps, heart rate variability, and GPS workout routes with low power consumption using Google Health Connect API.",
    architecture: "Clean Architecture + MVVM",
    techStack: ["Kotlin", "Health Connect API", "Jetpack Compose", "Room", "WorkManager", "Hilt"],
    features: [
      "Bi-directional sync with Google Health Connect and Wear OS",
      "Background workout tracking service with foreground notification",
      "Custom weekly analytics charts using Compose Canvas"
    ],
    challenges: "Minimizing battery drain during continuous GPS location tracking for marathon runners.",
    metrics: ["Low battery overhead (< 3% per hour tracking)", "100k+ Active Users"],
    playStoreUrl: "https://play.google.com/store",
    githubUrl: "https://github.com/ujjwalbansal/FitPulse-Android",
    caseStudy: "Leveraged Android Fused Location Provider API with adaptive interval shifting based on accelerometer movement detection."
  },
  {
    id: "crypto-vault-pro",
    title: "CryptoVault — Hardware-Grade Crypto Asset Tracker",
    tagline: "Decentralized crypto portfolio tracker with hardware keystore security and live candlestick charts.",
    category: "FinTech",
    featured: false,
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1200&auto=format&fit=crop",
    description: "Secure crypto wallet monitoring app featuring live CoinGecko API data, WebSocket ticker streams, and AES-256 encrypted local database storage.",
    architecture: "MVVM + Repository + Clean Arch",
    techStack: ["Kotlin", "Android KeyStore", "Retrofit", "Jetpack Compose", "Room DB", "Flow"],
    features: [
      "Hardware KeyStore backed biometrics & pin protection",
      "Interactive SVG Candlestick financial charts with pinch-to-zoom",
      "Instant price alert notifications using WorkManager"
    ],
    challenges: "Rendering 1,000+ real-time price data points cleanly without dropping frames.",
    metrics: ["60 FPS chart rendering", "Zero sensitive keys stored in plain text"],
    playStoreUrl: "https://play.google.com/store",
    githubUrl: "https://github.com/ujjwalbansal/CryptoVault-Android",
    caseStudy: "Built a custom Compose Canvas chart renderer that utilizes hardware acceleration and path simplification."
  },
  {
    id: "taskflow-kanban",
    title: "TaskFlow — Enterprise Kanban & Offline Workspaces",
    tagline: "Fluid drag-and-drop task management tool for agile engineering teams.",
    category: "Jetpack Compose",
    featured: false,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    description: "TaskFlow features smooth drag-and-drop card reordering in Jetpack Compose, offline Room synchronization, and markdown notes editor.",
    architecture: "Clean Architecture + MVI",
    techStack: ["Kotlin", "Jetpack Compose", "Room DB", "Hilt", "Coroutines Flow"],
    features: [
      "Custom Compose Drag & Drop layout modifier",
      "Full offline persistence with automated conflict resolution",
      "Rich Markdown rendering and code preview"
    ],
    challenges: "Handling complex multi-column list gestures in Compose without scroll conflicts.",
    metrics: ["100% Offline functional", "Instant task reordering"],
    playStoreUrl: "https://play.google.com/store",
    githubUrl: "https://github.com/ujjwalbansal/TaskFlow-Android",
    caseStudy: "Created a custom PointerInputScope modifier to track touch velocity and reorder items seamlessly across Kanban columns."
  },
  {
    id: "soundwave-player",
    title: "SoundWave — Lossless Audio Player & Equalizer",
    tagline: "Audiophile music player with 10-band equalizer and FLAC codec support.",
    category: "Jetpack Compose",
    featured: false,
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    description: "Built for music lovers featuring hardware audio effect binding, dynamic color scheme based on album art (Palette API), and lockscreen playback controls.",
    architecture: "MVVM + MediaSession Service",
    techStack: ["Kotlin", "Media3 ExoPlayer", "Palette API", "Jetpack Compose", "Room"],
    features: [
      "Dynamic Material 3 Color extraction from album covers",
      "Hardware 10-Band Parametric Audio Equalizer",
      "Lyrics auto-scroll synchronizer"
    ],
    challenges: "Binding system MediaSession controls smoothly with background audio service.",
    metrics: ["Hi-Res Audio (24-bit/192kHz) support", "4.9 Rating"],
    playStoreUrl: "https://play.google.com/store",
    githubUrl: "https://github.com/ujjwalbansal/SoundWave-Android",
    caseStudy: "Leveraged Android Palette API with AsyncImage Coil transformation to produce real-time dynamic gradient themes per song."
  },
  {
    id: "weather-pulse",
    title: "WeatherPulse — Hyperlocal Radar & Severe Alerts",
    tagline: "Beautiful weather app featuring animated weather particles and live Doppler radar overlay.",
    category: "Jetpack Compose",
    featured: false,
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1200&auto=format&fit=crop",
    description: "Delivers minute-by-minute precipitation forecasts, interactive weather maps, and severe storm warnings.",
    architecture: "MVVM + Repository",
    techStack: ["Kotlin", "Jetpack Compose", "OpenWeatherMap API", "Mapbox SDK", "Hilt"],
    features: [
      "Particle-system rain and snow Canvas animations",
      "Interactive Doppler Radar map tiles",
      "Glance App Widget for home screen weather info"
    ],
    challenges: "Updating home screen Glance widgets efficiently without consuming excessive background data.",
    metrics: ["100k+ Downloads", "Top Weather App nomination"],
    playStoreUrl: "https://play.google.com/store",
    githubUrl: "https://github.com/ujjwalbansal/WeatherPulse-Android",
    caseStudy: "Designed lightweight Glance Jetpack Widgets with periodic WorkManager refresh triggers."
  },
  {
    id: "clean-arch-template",
    title: "Android Clean Architecture Starter Kit",
    tagline: "Enterprise production template with Hilt, Compose, Navigation, Ktor, and pre-configured CI/CD.",
    category: "Open Source",
    featured: false,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    description: "A battle-tested starter repository used by thousands of Android engineers to launch production apps in minutes.",
    architecture: "Strict Multi-Module Clean Architecture",
    techStack: ["Kotlin", "Jetpack Compose", "Hilt", "Ktor", "Room", "GitHub Actions"],
    features: [
      "Pre-configured Detekt, Ktlint, and Spotless code formatting",
      "Automated GitHub Actions workflow for APK build & testing",
      "Sample feature module demonstrating MVI flow"
    ],
    challenges: "Configuring version catalogs (libs.versions.toml) for seamless dependency updates.",
    metrics: ["1.8k GitHub Stars", "Forked 500+ times"],
    githubUrl: "https://github.com/ujjwalbansal/android-clean-architecture-template",
    caseStudy: "Structured Gradle modules into core:domain, core:data, core:ui, and feature:* modules for max compiler parallelization."
  },
  {
    id: "docu-scan-ai",
    title: "DocuScan AI — Mobile Document Scanner & OCR",
    tagline: "CameraX document scanner with automatic perspective crop and searchable PDF creation.",
    category: "AI & System",
    featured: false,
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=1200&auto=format&fit=crop",
    description: "DocuScan converts physical receipts, IDs, and documents into high-quality PDFs with offline text extraction.",
    architecture: "MVVM + Clean Arch",
    techStack: ["Kotlin", "CameraX", "ML Kit Text Recognition", "OpenCV NDK", "PdfDocument API"],
    features: [
      "Auto document boundary detection using OpenCV C++ NDK",
      "Offline multi-language OCR text extraction",
      "Password encrypted PDF export engine"
    ],
    challenges: "Real-time edge detection in CameraX preview stream at 30 FPS.",
    metrics: ["Under 100ms edge detection per frame", "50k+ active users"],
    playStoreUrl: "https://play.google.com/store",
    githubUrl: "https://github.com/ujjwalbansal/DocuScan-Android",
    caseStudy: "Integrated OpenCV via NDK Native C++ bindings for fast edge detection and deskewing."
  },
  {
    id: "dev-hub-news",
    title: "DevHub — Developer News & Tech Aggregator",
    tagline: "Curated tech news feed from HackerNews, GitHub Trending, and Reddit with offline reading.",
    category: "Jetpack Compose",
    featured: false,
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&auto=format&fit=crop",
    description: "Clean, distraction-free app for software engineers to stay updated on trending open source projects and engineering blogs.",
    architecture: "MVVM + Paging 3",
    techStack: ["Kotlin", "Jetpack Compose", "Paging 3", "Room", "Retrofit", "Hilt"],
    features: [
      "Infinite pagination feed powered by Paging 3 & RemoteMediator",
      "Offline reading with automated article body caching",
      "Syntax highlighted code snippet reader"
    ],
    challenges: "Seamless offline to online feed pagination without jumping scroll positions.",
    metrics: ["Sub-50ms scroll responsiveness", "4.8 Rating"],
    playStoreUrl: "https://play.google.com/store",
    githubUrl: "https://github.com/ujjwalbansal/DevHub-Android",
    caseStudy: "Utilized Room RemoteMediator with Paging 3 to create a robust offline-first caching mechanism."
  },
  {
    id: "secure-notes-vault",
    title: "CipherNotes — Encrypted Private Notes Manager",
    tagline: "Zero-knowledge encrypted notes application with biometrics and cloud backup.",
    category: "AI & System",
    featured: false,
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1200&auto=format&fit=crop",
    description: "CipherNotes guarantees total privacy through client-side AES-GCM encryption before storing data locally or syncing with Drive.",
    architecture: "Clean Arch + MVI",
    techStack: ["Kotlin", "Android KeyStore", "SQLCipher", "Jetpack Compose", "Google Drive REST API"],
    features: [
      "End-to-End Encryption with user-derived Master Key",
      "Biometric app lock with snapshot security flags",
      "Automatic encrypted cloud backup"
    ],
    challenges: "Preventing sensitive memory leaks from decrypted text strings during Compose recompositions.",
    metrics: ["0 plain text leaks", "SQLCipher DB encryption"],
    playStoreUrl: "https://play.google.com/store",
    githubUrl: "https://github.com/ujjwalbansal/CipherNotes-Android",
    caseStudy: "Used CharArray buffer wiping and SQLCipher database key derivation for maximal security compliance."
  },
  {
    id: "habit-hero-app",
    title: "HabitHero — Gamified Habit Tracker & Streak Builder",
    tagline: "Build daily routines with interactive habit loops, streak stats, and home widgets.",
    category: "Health & Fitness",
    featured: false,
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop",
    description: "HabitHero combines behavioral psychology with smooth animations to keep users motivated to reach daily goals.",
    architecture: "MVVM + Repository",
    techStack: ["Kotlin", "Jetpack Compose", "Glance Widget API", "Room", "AlarmManager"],
    features: [
      "Interactive streak calendar matrix visualization",
      "Exact alarm reminders using AlarmManager & Notifications",
      "Glance Jetpack Widget for instant habit completion"
    ],
    challenges: "Reliable background alarm execution across restrictive OEM battery savers (Xiaomi, Samsung).",
    metrics: ["99.5% Notification delivery rate", "200k+ downloads"],
    playStoreUrl: "https://play.google.com/store",
    githubUrl: "https://github.com/ujjwalbansal/HabitHero-Android",
    caseStudy: "Handled precise alarm permissions and battery optimization intent prompts for Android 12+ compatibility."
  },
  {
    id: "recipe-craft",
    title: "RecipeCraft — Smart Culinary Assistant & Meal Planner",
    tagline: "AI recipe discovery app based on available pantry ingredients.",
    category: "E-Commerce",
    featured: false,
    image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=1200&auto=format&fit=crop",
    description: "Scan ingredients with your camera and get instant chef-curated recipes with step-by-step voice guidance.",
    architecture: "MVVM + Repository",
    techStack: ["Kotlin", "Jetpack Compose", "Coil Image Loader", "Ktor", "Room"],
    features: [
      "Pantry item barcode and photo scanning",
      "Hands-free step-by-step voice navigation mode",
      "Automated grocery shopping list generator"
    ],
    challenges: "Smooth image caching and memory management when rendering large recipe image grids.",
    metrics: ["100k+ Downloads", "Featured on Play Store"],
    playStoreUrl: "https://play.google.com/store",
    githubUrl: "https://github.com/ujjwalbansal/RecipeCraft-Android",
    caseStudy: "Configured Coil image disk caching and memory pool constraints to prevent UI lag on entry-level devices."
  },
  {
    id: "ktor-network-inspector",
    title: "KtorInspector — In-App Network Profiler Library",
    tagline: "Drop-in Ktor HTTP logging interceptor with notification UI for debugging network calls.",
    category: "Open Source",
    featured: false,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    description: "Lightweight Android developer tool for inspecting Ktor HTTP requests, responses, headers, and payload bodies on device.",
    architecture: "Android Developer Library",
    techStack: ["Kotlin", "Ktor Client", "Jetpack Compose", "Room"],
    features: [
      "System notification tray popup for every HTTP network call",
      "JSON response pretty printing & copy tool",
      "HAR file export for Charles Proxy / Postman import"
    ],
    challenges: "Capturing large binary HTTP payloads without consuming high heap memory.",
    metrics: ["900+ Stars on GitHub", "Top Ktor community tool"],
    githubUrl: "https://github.com/ujjwalbansal/KtorInspector",
    caseStudy: "Streamed HTTP payload previews using Ktor ByteReadChannel without buffering whole payloads into memory."
  },
  {
    id: "ar-room-planner",
    title: "SpatialRoom — AR Interior Design & 3D Furniture",
    tagline: "Augmented Reality room layout app for placing 3D furniture models in physical spaces.",
    category: "AI & System",
    featured: false,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    description: "SpatialRoom lets users visualize couches, tables, and lighting fixtures in real-time inside their living rooms.",
    architecture: "Clean Arch + SceneView Engine",
    techStack: ["Kotlin", "ARCore", "Filament 3D Engine", "Jetpack Compose", "Hilt"],
    features: [
      "Real-time plane surface detection & lighting estimation",
      "glTF / GLB 3D model dynamic rendering",
      "Room dimension measurement tool"
    ],
    challenges: "Maintaining high FPS 3D rendering while running camera preview and depth hit testing.",
    metrics: ["60 FPS AR rendering on ARCore supported phones"],
    playStoreUrl: "https://play.google.com/store",
    githubUrl: "https://github.com/ujjwalbansal/SpatialRoom-Android",
    caseStudy: "Used Filament C++ engine with Kotlin bindings to achieve photorealistic PBR rendering on Android."
  },
  {
    id: "podflow-audio",
    title: "PodFlow — Smart Podcast Player & Transcription",
    tagline: "Podcast player featuring auto-generated live transcripts and silence trimming.",
    category: "Jetpack Compose",
    featured: false,
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop",
    description: "PodFlow enhances podcast listening with dynamic playback speeds, silence skip algorithms, and searchable episode transcripts.",
    architecture: "MVVM + Media3",
    techStack: ["Kotlin", "Media3 ExoPlayer", "Jetpack Compose", "Room", "Retrofit"],
    features: [
      "Automatic silence trimming audio processor",
      "Synchronized interactive transcript reader",
      "RSS feed parser for instant podcast subscription"
    ],
    challenges: "Accurate timestamp synchronization between audio stream time and transcript text highlights.",
    metrics: ["20% time saved with silence skip", "50k+ Downloads"],
    playStoreUrl: "https://play.google.com/store",
    githubUrl: "https://github.com/ujjwalbansal/PodFlow-Android",
    caseStudy: "Created a custom ExoPlayer AudioProcessor in C++/Kotlin to detect and skip audio silence dynamically."
  },
  {
    id: "smart-home-iot",
    title: "HomePulse — Smart Home IoT Controller",
    tagline: "Control smart lights, thermostats, and security cameras via MQTT & Matter protocols.",
    category: "AI & System",
    featured: false,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop",
    description: "HomePulse connects all your smart devices into a unified, responsive dashboard with local network discovery.",
    architecture: "MVI + Clean Architecture",
    techStack: ["Kotlin", "MQTT Client", "Jetpack Compose", "Hilt", "Coroutines"],
    features: [
      "Instant MQTT message dispatch (< 10ms latency)",
      "Dynamic device discovery on local Wi-Fi subnet",
      "Custom temperature knob & lighting slider Compose controls"
    ],
    challenges: "Managing state updates from dozens of concurrent IoT sensors without blocking UI thread.",
    metrics: ["10ms IoT command latency", "100% Local control enabled"],
    playStoreUrl: "https://play.google.com/store",
    githubUrl: "https://github.com/ujjwalbansal/HomePulse-Android",
    caseStudy: "Utilized Kotlin StateFlow and SharedFlow to throttle and deduplicate high-frequency MQTT sensor payloads."
  }
];

export const SKILLS_DATA: Skill[] = [
  // Languages
  { name: "Kotlin", category: "Languages", level: 98, years: "6+ yrs", iconName: "Code2", description: "Idiomatic Kotlin, Coroutines, Flow, DSLs, Memory Optimization" },
  { name: "Java", category: "Languages", level: 90, years: "6+ yrs", iconName: "FileCode", description: "Core Java, Concurrency, OOP, Legacy code migration to Kotlin" },
  
  // UI & Design
  { name: "Jetpack Compose", category: "UI & Design", level: 96, years: "4+ yrs", iconName: "Layout", description: "Custom Layouts, Animation APIs, Canvas Drawing, Recomposition Optimization" },
  { name: "Material Design 3", category: "UI & Design", level: 95, years: "5+ yrs", iconName: "Palette", description: "Dynamic Colors, Dark Mode, Component Styling, Accessibility" },
  { name: "XML Layouts & Views", category: "UI & Design", level: 92, years: "6+ yrs", iconName: "Layers", description: "ConstraintLayout, Custom Views, ViewBinding, MotionLayout" },
  
  // Architecture & DI
  { name: "Clean Architecture", category: "Architecture & DI", level: 96, years: "5+ yrs", iconName: "Box", description: "Layer separation (Domain, Data, UI), Modularization, Testability" },
  { name: "MVVM & MVI", category: "Architecture & DI", level: 95, years: "6+ yrs", iconName: "GitBranch", description: "Unidirectional Data Flow, State Management, ViewModel Lifecycle" },
  { name: "Hilt & Dagger 2", category: "Architecture & DI", level: 94, years: "5+ yrs", iconName: "Cpu", description: "Dependency Injection, Custom Scopes, Multi-module DI setup" },

  // Data & Storage
  { name: "Room Database", category: "Data & Storage", level: 94, years: "5+ yrs", iconName: "Database", description: "SQLite Queries, Migrations, TypeConverters, Offline-first syncing" },
  { name: "Firebase Suite", category: "Data & Storage", level: 92, years: "6+ yrs", iconName: "Flame", description: "Auth, Firestore, Realtime DB, FCM, Crashlytics, Remote Config" },
  { name: "DataStore & Prefs", category: "Data & Storage", level: 90, years: "4+ yrs", iconName: "Save", description: "Proto DataStore, Encrypted SharedPreferences, KeyStore" },

  // Networking & Async
  { name: "Kotlin Coroutines & Flow", category: "Networking & Async", level: 97, years: "5+ yrs", iconName: "Zap", description: "Structured Concurrency, StateFlow, SharedFlow, Dispatchers management" },
  { name: "Retrofit & Ktor", category: "Networking & Async", level: 95, years: "6+ yrs", iconName: "Globe", description: "RESTful APIs, Interceptors, Serialization, WebSockets" },
  { name: "WorkManager", category: "Networking & Async", level: 90, years: "4+ yrs", iconName: "Clock", description: "Background Sync, Constrained Jobs, Periodic Tasks" },

  // Testing & CI/CD
  { name: "JUnit & Mockk", category: "Testing & CI/CD", level: 90, years: "5+ yrs", iconName: "CheckCircle", description: "Unit Testing, Mocking, Flow Testing, Coroutines Test Dispatcher" },
  { name: "Espresso & Compose Test", category: "Testing & CI/CD", level: 88, years: "4+ yrs", iconName: "Smartphone", description: "UI Automation, Screen Object Pattern, Integration Tests" },
  { name: "GitHub Actions & Bitrise", category: "Testing & CI/CD", level: 86, years: "4+ yrs", iconName: "Workflow", description: "Automated APK/AAB Builds, Lint Checks, Play Store Deployment" },

  // Jetpack & Play Services
  { name: "Google Maps SDK", category: "Jetpack & Play Services", level: 88, years: "4+ yrs", iconName: "MapPin", description: "Custom Markers, Polylines, Location Tracking, Clustering" },
  { name: "Paging 3", category: "Jetpack & Play Services", level: 92, years: "4+ yrs", iconName: "List", description: "RemoteMediator, Infinite Scroll, Cache Invalidation" },
  { name: "Play Console & ASO", category: "Jetpack & Play Services", level: 95, years: "6+ yrs", iconName: "Play", description: "App Bundle publishing, In-App Purchases, Crashlytics analysis" }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: "2023 — Present",
    title: "Senior Android Tech Lead",
    companyOrOrg: "Apex Mobile Technologies",
    type: "Experience",
    location: "Remote / India",
    description: "Leading a team of 8 Android engineers building high-scale fintech and media apps. spearheading legacy codebase migration to 100% Jetpack Compose and multi-module Clean Architecture.",
    achievements: [
      "Reduced cold app startup time by 45% using Baseline Profiles and Startup Library",
      "Architected MVI state management framework standardizing feature delivery across 3 squads",
      "Achieved 99.92% crash-free rate across 1M+ active monthly users"
    ],
    techUsed: ["Kotlin", "Jetpack Compose", "Hilt", "Coroutines Flow", "Room", "Ktor", "CI/CD"]
  },
  {
    year: "2021 — 2023",
    title: "Staff Android Engineer",
    companyOrOrg: "Nova Digital Innovations",
    type: "Experience",
    location: "India",
    description: "Designed core mobile payment modules, biometric security, and offline data sync mechanisms for enterprise e-commerce clients.",
    achievements: [
      "Pioneered in-app QR payment engine using CameraX and ML Kit with sub-100ms detection",
      "Mentored junior and mid-level Android developers on Jetpack Compose and Kotlin best practices",
      "Engineered automated CI/CD pipeline on GitHub Actions reducing release build time by 50%"
    ],
    techUsed: ["Kotlin", "Jetpack Compose", "Retrofit", "CameraX", "ML Kit", "Dagger 2"]
  },
  {
    year: "2019 — 2021",
    title: "Senior Android Developer",
    companyOrOrg: "ByteCraft Solutions",
    type: "Experience",
    location: "India",
    description: "Developed native Android applications from scratch for healthcare and logistics platforms.",
    achievements: [
      "Built real-time GPS tracking solution with Google Maps SDK handling 50k+ daily courier routes",
      "Integrated Firebase Firestore, Cloud Messaging (FCM), and Remote Config for dynamic feature flags",
      "Published 8+ client applications directly to Google Play Store"
    ],
    techUsed: ["Kotlin", "Java", "XML", "Room DB", "Firebase", "Google Maps SDK"]
  },
  {
    year: "2018 — 2019",
    title: "Android Developer",
    companyOrOrg: "TechVibe Labs",
    type: "Experience",
    location: "India",
    description: "Created custom UI components, REST API integrations, and local SQLite data persistence.",
    achievements: [
      "Migrated legacy Java codebase to Kotlin, eliminating null pointer exceptions",
      "Implemented offline-first sync engine using Room and WorkManager"
    ],
    techUsed: ["Java", "Kotlin", "SQLite", "Retrofit", "REST APIs"]
  },
  {
    year: "2018",
    title: "Bachelor of Technology (B.Tech) in Computer Science",
    companyOrOrg: "Top Technological University",
    type: "Education",
    location: "India",
    description: "Graduated with Honors. Specialized in Data Structures, Algorithms, Software Engineering, and Mobile Systems Architecture.",
    achievements: [
      "Won 1st Place at National Level Mobile App Hackathon",
      "Lead Developer of University Student Portal Android App"
    ],
    techUsed: ["Data Structures", "Algorithms", "Java", "Android SDK", "Git"]
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "native-android-dev",
    title: "Native Android App Development",
    tagline: "Custom 100% Kotlin & Jetpack Compose apps engineered for performance and scalability.",
    description: "End-to-end development of production-grade Android applications tailored for Google Play Store success. Built with Clean Architecture, robust state management, and offline-first capabilities.",
    icon: "Smartphone",
    deliverables: ["Full Kotlin & Compose Codebase", "Clean Multi-Module Architecture", "Play Store Deployment", "Unit & UI Tests"]
  },
  {
    id: "jetpack-compose-ui",
    title: "Jetpack Compose UI/UX Systems",
    tagline: "Transform complex designs into fluid, 120 FPS Compose animations and custom components.",
    description: "Crafting luxury mobile interfaces adhering to Material Design 3 guidelines. Specialized in custom Canvas graphics, physics animations, dynamic colors, and glassmorphic designs.",
    icon: "Layout",
    deliverables: ["Custom Compose Design System", "Fluid Screen Transitions", "Accessibility & Dark Mode Support", "Zero-Recomposition Bugs"]
  },
  {
    id: "mobile-architecture",
    title: "Mobile Architecture & Refactoring",
    tagline: "Modernizing monolithic legacy codebases into clean, modular Android projects.",
    description: "Refactor legacy Java/XML codebases into modern Kotlin multi-module architectures (MVI/MVVM). Improve build times, test coverage, and team velocity.",
    icon: "Cpu",
    deliverables: ["Modularization Strategy", "Hilt/Dagger 2 Migration", "Layered Architecture Blueprint", "Automated CI/CD Pipeline"]
  },
  {
    id: "performance-optimization",
    title: "App Performance & Startup Optimization",
    tagline: "Reduce cold app launch time by up to 50% and eliminate memory leaks.",
    description: "Deep performance profiling using Android Studio Profiler, Perfetto, and LeakCanary. Optimize memory allocations, list rendering, and startup tasks using Baseline Profiles.",
    icon: "Zap",
    deliverables: ["Baseline Profile Setup", "Memory Leak Elimination", "60/120 FPS Scroll Frame Rates", "Cold Start Audit Report"]
  },
  {
    id: "firebase-backend",
    title: "Firebase & Backend Integration",
    tagline: "Seamless API integration with Retrofit, Ktor, WebSockets, and Firebase services.",
    description: "Connect your mobile application with robust backend systems. Real-time data streaming, push notifications (FCM), authentication, and cloud storage.",
    icon: "Flame",
    deliverables: ["Retrofit/Ktor API Layer", "FCM Push Notifications", "Biometric Auth Security", "Offline Room DB Caching"]
  },
  {
    id: "play-store-publishing",
    title: "Play Store Publishing & ASO",
    tagline: "Navigate Google Play Console policies, AAB packaging, and App Store Optimization.",
    description: "Ensure smooth app approvals with 100% Google Play policy compliance. Optimize app store listings, screenshots, keywords, and release management.",
    icon: "Play",
    deliverables: ["Google Play Console Setup", "Android App Bundle (AAB)", "Privacy Policy & Compliance", "ASO Keyword Listing"]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "1",
    name: "Vikram Malhotra",
    role: "VP of Engineering",
    company: "Apex Mobile Technologies",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    text: "Ujjwal is without a doubt one of the sharpest Android architects I have worked with. He refactored our core mobile app into 100% Jetpack Compose while cutting app launch time in half. His depth in Kotlin Coroutines and Clean Architecture is world-class.",
    rating: 5
  },
  {
    id: "2",
    name: "Sarah Jenkins",
    role: "Lead Product Manager",
    company: "Nova Digital",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    text: "Working with Ujjwal was a game-changer for our FinTech product. He took complex biometric and payment requirements and delivered a silky-smooth, bulletproof Android experience ahead of schedule.",
    rating: 5
  },
  {
    id: "3",
    name: "Anand Sharma",
    role: "CTO & Co-Founder",
    company: "PayPulse Mobility",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    text: "Ujjwal's attention to detail, performance metrics, and clean code standards are exceptional. Our Google Play Store rating jumped from 4.1 to 4.8 after his architectural overhaul.",
    rating: 5
  }
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    slug: "jetpack-compose-performance-optimization-masterclass",
    title: "Mastering Jetpack Compose Performance: 120 FPS Frame Rates & Baseline Profiles",
    description: "Learn how to diagnose recomposition bottlenecks, utilize derivedStateOf, optimize LazyColumn rendering, and generate Baseline Profiles for sub-second app startup.",
    date: "July 24, 2026",
    readTime: "8 min read",
    category: "Jetpack Compose",
    tags: ["Jetpack Compose", "Performance", "Baseline Profiles", "Kotlin"],
    content: `
# Mastering Jetpack Compose Performance: 120 FPS Frame Rates & Baseline Profiles

Jetpack Compose has completely revolutionized Android UI development. However, without careful state management and recomposition tuning, Compose apps can suffer from dropped frames and laggy scroll performance.

In this guide, we dive into production-tested techniques to guarantee smooth 120 FPS rendering across high-refresh-rate displays.

---

## 1. Stop Unnecessary Recompositions with \`derivedStateOf\`

One of the most common pitfalls in Compose is passing frequently changing states (like scroll offsets) directly into composables.

### The Problematic Code:
\`\`\`kotlin
val listState = rememberLazyListState()
// Triggers recomposition on every single pixel scrolled!
val showButton = listState.firstVisibleItemIndex > 0 

AnimatedVisibility(visible = showButton) {
    ScrollToTopButton()
}
\`\`\`

### The Optimized Solution:
Use \`derivedStateOf\` to buffer state updates so recomposition only triggers when the boolean result changes!

\`\`\`kotlin
val listState = rememberLazyListState()
val showButton by remember {
    derivedStateOf { listState.firstVisibleItemIndex > 0 }
}

AnimatedVisibility(visible = showButton) {
    ScrollToTopButton()
}
\`\`\`

---

## 2. Using Stability Annotations (\`@Immutable\` & \`@Stable\`)

The Compose compiler checks whether parameter types are stable. If a parameter is mutable, Compose cannot skip recomposition when parent composables re-evaluate.

Use \`@Immutable\` on data classes containing unmodifiable lists:

\`\`\`kotlin
@Immutable
data class UserProfileState(
    val id: String,
    val username: String,
    val items: PersistentList<Item> // Use Kotlinx Immutable Collections!
)
\`\`\`

---

## 3. Generating Baseline Profiles for Instant Cold Launch

Baseline Profiles allow Android's ART (Android Runtime) to ahead-of-time (AOT) compile critical code paths, eliminating JIT compilation stutters on initial app launch.

### Step 1: Add Macrobenchmark Module
Add the BaselineProfile Generator test:

\`\`\`kotlin
@RunWith(AndroidJUnit4::class)
class BaselineProfileGenerator {
    @get:Rule
    val rule = BaselineProfileRule()

    @Test
    fun generate() = rule.collect("com.ujjwalbansal.paypulse") {
        pressHome()
        startActivityAndWait()
        device.waitForIdle()
    }
}
\`\`\`

---

## Summary
By combining **derivedStateOf**, **@Immutable data models**, and **Baseline Profiles**, Ujjwal Bansal cut cold start times by 45% across production Android apps.
`
  },
  {
    slug: "clean-architecture-mvi-kotlin-coroutines-flow",
    title: "Clean Architecture with MVI: Building Resilient Android Apps with Kotlin Flow",
    description: "An in-depth breakdown of Unidirectional Data Flow (UDF), MVI state reducers, and channel-driven side-effects in Modern Android Development.",
    date: "June 18, 2026",
    readTime: "10 min read",
    category: "Architecture",
    tags: ["Clean Architecture", "MVI", "Kotlin Flow", "Coroutines"],
    content: `
# Clean Architecture with MVI: Building Resilient Android Apps with Kotlin Flow

Modern Android applications require a clear separation of concerns to support scaling, automated testing, and multi-developer collaboration.

The **Model-View-Intent (MVI)** architectural pattern combined with **Kotlin StateFlow & SharedFlow** offers an elegant Unidirectional Data Flow (UDF) engine.

---

## The Core MVI Pipeline

\`\`\`
[ User Action ] ---> ( Intent / Event ) ---> [ ViewModel Reducer ] ---> ( StateFlow ) ---> [ Compose UI ]
                                                   |
                                            ( Side Effect Channel ) ---> [ One-off Toast / Nav ]
\`\`\`

---

## Defining the State, Intent, and Effect Contract

\`\`\`kotlin
// 1. Immutable UI State
data class PaymentUiState(
    val isLoading: Boolean = false,
    val balance: Double = 0.0,
    val errorMessage: String? = null
)

// 2. User Intent / Actions
sealed interface PaymentIntent {
    data class TransferMoney(val amount: Double, val recipientId: String) : PaymentIntent
    object RefreshBalance : PaymentIntent
}

// 3. One-Shot Side Effects (Single Execution)
sealed interface PaymentEffect {
    data class ShowSnackbar(val message: String) : PaymentEffect
    object NavigateToReceipt : PaymentEffect
}
\`\`\`

---

## ViewModel Reducer Implementation

\`\`\`kotlin
@HiltViewModel
class PaymentViewModel @Inject constructor(
    private val transferMoneyUseCase: TransferMoneyUseCase
) : ViewModel() {

    private val _uiState = MutableStateFlow(PaymentUiState())
    val uiState: StateFlow<PaymentUiState> = _uiState.asStateFlow()

    private val _effect = Channel<PaymentEffect>(Channel.BUFFERED)
    val effect = _effect.receiveAsFlow()

    fun processIntent(intent: PaymentIntent) {
        viewModelScope.launch {
            when (intent) {
                is PaymentIntent.TransferMoney -> executeTransfer(intent.amount, intent.recipientId)
                is PaymentIntent.RefreshBalance -> fetchBalance()
            }
        }
    }

    private suspend fun executeTransfer(amount: Double, recipientId: String) {
        _uiState.update { it.copy(isLoading = true) }
        val result = transferMoneyUseCase(amount, recipientId)
        
        result.onSuccess {
            _uiState.update { it.copy(isLoading = false) }
            _effect.send(PaymentEffect.ShowSnackbar("Transfer Successful!"))
            _effect.send(PaymentEffect.NavigateToReceipt)
        }.onFailure { error ->
            _uiState.update { it.copy(isLoading = false, errorMessage = error.message) }
        }
    }
}
\`\`\`

---

## Conclusion
MVI eliminates invalid UI states and ensures 100% testable business logic in Android apps.
`
  },
  {
    slug: "android-memory-leaks-leakcanary-profiler-guide",
    title: "Eliminating Memory Leaks in Android: A Deep Dive into LeakCanary & Studio Profiler",
    description: "Identify static context leaks, uncancelled Coroutine jobs, ExoPlayer instances, and Compose listener leaks before they crash your app in production.",
    date: "May 12, 2026",
    readTime: "7 min read",
    category: "Performance",
    tags: ["Memory Leaks", "LeakCanary", "Android Profiler", "Debugging"],
    content: `
# Eliminating Memory Leaks in Android: LeakCanary & Studio Profiler Guide

A memory leak occurs when an object that is no longer needed by the application remains referenced by a garbage collection (GC) root, preventing memory reclamation. Over time, memory leaks lead to high heap pressure, frequent GC pauses (UI stutter), and eventual **OutOfMemoryError (OOM)** crashes.

---

## Common Causes of Memory Leaks in Modern Android

1. **Leaking Activity Context in Static Objects or Singletons**
2. **Uncancelled Coroutine Scopes running beyond ViewModel lifecycle**
3. **Registering BroadcastReceivers / Listeners without unregistering**
4. **Holding ExoPlayer / CameraX instances inside Compose state across screen rotations**

---

## How to Fix Context Leaks

Never pass \`Activity\` context into long-lived repositories or singletons. Always use \`ApplicationContext\`!

\`\`\`kotlin
// ❌ WRONG: Holds Activity context indefinitely
class AnalyticsManager(private val context: Context) 

// ✅ CORRECT: Inject @ApplicationContext via Hilt
class AnalyticsManager @Inject constructor(
    @ApplicationContext private val context: Context
)
\`\`\`

---

## Summary
Zero-memory-leak apps are achievable by integrating **LeakCanary** in debug builds and enforcing strict lifecycle-aware scope bindings.
`
  }
];

export const SEO_METADATA = {
  title: "Ujjwal Bansal — Senior Android Developer & Mobile App Architect",
  description: "Official portfolio of Ujjwal Bansal, Senior Android Developer & App Architect specializing in Jetpack Compose, Kotlin, Clean Architecture, MVI, and high-performance Android engineering.",
  keywords: [
    "Ujjwal Bansal",
    "Ujjwal Bansal Android",
    "Ujjwal Bansal Developer",
    "Senior Android Developer",
    "Android App Architect",
    "Jetpack Compose Expert",
    "Kotlin Developer India",
    "Clean Architecture Android",
    "Android Freelancer",
    "Android Performance Engineer"
  ],
  author: "Ujjwal Bansal",
  siteUrl: "https://ujjwalbansal.dev"
};
