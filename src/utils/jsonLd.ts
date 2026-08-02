import { PERSONAL_INFO, PROJECTS_DATA, SEO_METADATA } from "@/data/portfolioData";

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${PERSONAL_INFO.siteUrl}/#person`,
    "name": PERSONAL_INFO.name,
    "alternateName": "Ujjwal Bansal Native Android Developer",
    "jobTitle": PERSONAL_INFO.title,
    "description": PERSONAL_INFO.summary,
    "url": PERSONAL_INFO.siteUrl,
    "email": PERSONAL_INFO.email,
    "telephone": PERSONAL_INFO.phoneFormatted,
    "sameAs": [
      PERSONAL_INFO.github,
      PERSONAL_INFO.linkedin
    ],
    "knowsAbout": [
      "Native Android Development",
      "Kotlin",
      "Android SDK",
      "XML Layouts",
      "MVVM Architecture",
      "REST APIs",
      "Firebase Analytics",
      "Meta App Events SDK",
      "Retrofit",
      "ViewBinding",
      "AES Decryption",
      "Google Maps SDK"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "AppSquadz Software Pvt. Ltd."
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "ABES Engineering College"
      },
      {
        "@type": "EducationalOrganization",
        "name": "CCS University"
      }
    ]
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${PERSONAL_INFO.siteUrl}/#website`,
    "url": PERSONAL_INFO.siteUrl,
    "name": SEO_METADATA.title,
    "description": SEO_METADATA.description,
    "publisher": {
      "@id": `${PERSONAL_INFO.siteUrl}/#person`
    },
    "inLanguage": "en-US"
  };
}

export function generateSoftwareAppSchemas() {
  return PROJECTS_DATA.map((project) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "operatingSystem": "Android",
    "applicationCategory": "MobileApplication",
    "description": project.description,
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
          "text": "Ujjwal Bansal is a Native Android Developer with 1 year of hands-on Android development experience currently working at AppSquadz Software Pvt. Ltd., Noida."
        }
      },
      {
        "@type": "Question",
        "name": "What are Ujjwal Bansal's primary Android skills?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ujjwal Bansal specializes in Kotlin, Android SDK, XML layouts, MVVM architecture, Retrofit REST APIs, Firebase Analytics, FCM, Meta SDK, and encrypted API responses."
        }
      },
      {
        "@type": "Question",
        "name": "How to contact Ujjwal Bansal for Android developer opportunities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can reach Ujjwal Bansal via email at bansalujjwal2002@gmail.com / ujjwalandroiddev@gmail.com, phone at +91 8445973574, or through LinkedIn at linkedin.com/in/ujjwalbansal1810."
        }
      }
    ]
  };
}
