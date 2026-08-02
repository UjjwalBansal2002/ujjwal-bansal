import { PERSONAL_INFO, PROJECTS_DATA, BLOG_POSTS_DATA } from "@/data/portfolioData";

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${PERSONAL_INFO.siteUrl}/#person`,
    "name": PERSONAL_INFO.name,
    "alternateName": "Ujjwal Bansal Android Developer",
    "jobTitle": PERSONAL_INFO.title,
    "description": PERSONAL_INFO.bio,
    "url": PERSONAL_INFO.siteUrl,
    "sameAs": [
      PERSONAL_INFO.github,
      PERSONAL_INFO.linkedin,
      PERSONAL_INFO.playStore
    ],
    "knowsAbout": [
      "Android Development",
      "Kotlin",
      "Jetpack Compose",
      "Clean Architecture",
      "Coroutines",
      "Flow",
      "Java",
      "Mobile System Design",
      "App Performance Optimization",
      "Firebase"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Apex Mobile Technologies"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Top Technological University"
    }
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${PERSONAL_INFO.siteUrl}/#website`,
    "url": PERSONAL_INFO.siteUrl,
    "name": "Ujjwal Bansal — Senior Android Developer Portfolio",
    "description": PERSONAL_INFO.bio,
    "publisher": {
      "@id": `${PERSONAL_INFO.siteUrl}/#person`
    },
    "inLanguage": "en-US"
  };
}

export function generateSoftwareAppSchemas() {
  return PROJECTS_DATA.slice(0, 5).map((project) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "operatingSystem": "Android",
    "applicationCategory": "MobileApplication",
    "description": project.description,
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Person",
      "name": PERSONAL_INFO.name
    }
  }));
}

export function generateFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is Ujjwal Bansal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ujjwal Bansal is a Senior Android Developer and Mobile App Architect with over 6 years of experience building high-performance, resilient mobile applications using Kotlin, Jetpack Compose, and Clean Architecture."
        }
      },
      {
        "@type": "Question",
        "name": "What are Ujjwal Bansal's core Android development skills?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ujjwal Bansal specializes in Kotlin, Jetpack Compose, Coroutines, Flow, Hilt/Dagger 2 dependency injection, Room Database, Ktor/Retrofit, Baseline Profiles, MVI/MVVM architecture, and app performance optimization."
        }
      },
      {
        "@type": "Question",
        "name": "How to hire Ujjwal Bansal for Android development or mobile architecture consulting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact Ujjwal Bansal directly via email at ujjwal.bansal.dev@gmail.com, via LinkedIn at linkedin.com/in/ujjwalbansal, or through the interactive contact form on ujjwalbansal.dev."
        }
      }
    ]
  };
}

export function generateBlogPostSchema(post: typeof BLOG_POSTS_DATA[0]) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": PERSONAL_INFO.name,
      "url": PERSONAL_INFO.siteUrl
    },
    "publisher": {
      "@type": "Person",
      "name": PERSONAL_INFO.name
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${PERSONAL_INFO.siteUrl}/blog/${post.slug}`
    },
    "keywords": post.tags.join(", ")
  };
}
