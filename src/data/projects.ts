type Project = {
    slug: string,
    title: string,
    tagline: string,
    description?: string,
    links: {
        demo: string,
        github: string
    },
    caseStudy?: {
        problem?: {
            context?: string,
            goal?: string,
            users?: string[]
        },
        design?: {
            process?: string[],
            decisions?: string[],
            visuals?: string[]
        },
        engineering?: {
            stack?: string[],
            architecture?: string[],
            challenges?: string[]
        },
        reflection?: {
            lessons?: string[],
            nextSteps?: string[]
        }
    }
}

export const projects: Project[] = [
    {
        slug: "hearts-and-crafts",
        title: "Hearts and Crafts Store",
        tagline: "A full-stack storefront and inventory+orders management system built to help a handmade goods business move from stored inventory to online sales.",
        description: "I designed and built a custom e-commerce platform for a small handmade goods business, creating both a customer-facing storefront and an internal product management tools.",
        links: {
            demo: "",
            github: "https://github.com/ericg442/greenlake-arts-and-crafts"
        },
        caseStudy: {
            problem: {
                context: "For several months, the business created handmade products but did not have a dedicated way to showcase them online or manage their inventory efficiently. As inventory grew, the need for a centralized system to track, organize, and present the productsbecame apparent.",
                goal: "Create a platform that allows products to be organized internally while providing customers with a simple, seamless, and engaging shopping experience.",
                users: [
                    "Business owner managing products", 
                    "Customers discovering handmade products"
                ]
            },
            design: {
                process: [
                    "Researched the needs of a small handmade goods business",
                    "Created page layouts and user flows in Figma",
                    "Designed a boutique-style storefront focused on product presentation",
                    "Translated Figma designs into reusable React components",
                    "Iterated on layouts based on usability and visual consistency"
                ],
                decisions: [
                    "Prioritized product photography and visual presentation",
                    "Designed simple management workflows for a non-technical user",
                    "Created a warm and approachable brand identity",
                    "Separated customer-facing pages from internal admin tools and interfaces"
                ],
                visuals: [
                    "/images/storefront/InventoryPage.png",
                    "/images/storefront/EmptyStateForm.png",
                    "/images/storefront/FormDataFromDB.png",
                    "/images/storefront/FigmaWireframe.png"
                ]
            },
            engineering: {
                stack: [
                    "React", 
                    "Next.js", 
                    "TypeScript", 
                    "Supabase", 
                    "TailwindCSS", 
                    "ShadCN UI", 
                    "Figma"
                ],
                architecture: [
                    "A full-stack application with a React frontend, Node.js backend services, and Supabase providing database storage"
                ],
                challenges: [
                    "Designing a product data model",
                    "Building and implementing CRUD workflows and operations",
                    "Implementing image uploads and storage",
                    "Connecting customer-facing pages with internal admin tools"
                ]
            },
            reflection: {
                lessons: [
                    "Learned how software development decisions are influenced by real-world business and user needs",
                    "Improved my ability to translate designs and concpets into production code and interfaces",
                    "Improved database modeling and CRUD workflow design", 
                    "Learned the importance of designing for non-technical users",
                    "Gained experience building a product from concept to deployment"
                ],
                nextSteps: [
                    "Implement checkout functionality", 
                    "Add customer order management features", 
                    "Continue to improve performance and optimize the user experience",
                    "Launch the public storefront"
                ]
            }
        }
    },
    {
        title: "AJR6K",
        slug: "ajr6k",
        tagline: "A modern sports-focused platform designed around content, teams, and fan engagement.",
        description:  "A sports media platform built to explore content presentation, user experience, and scalable frontend architecture.",
        links: {
            demo: "https://ericg442.github.io/ajr6k/",
            github: "https://github.com/ericg442/ajr6k"
        },
        caseStudy: {
            problem: {
                context: "As a sports fan, I often found sports content spread across multiple websites, social media platforms, and news sources. I wanted to explore what a dedicated sports experience could look like if content, teams, and stories were organized into a single modern platform.",
                goal: "Design and build a sports-focused platform that prioritizes content discovery, readability, and an engaging fan experience.",
                users: [
                    "Sports fans who want to stay updated with the latest news and content",
                ]
            },
            design: {
                process: [
                    "Explored different approaches to content presentation",
                    "Designed reusable page structures for articles and teams",
                    "Focused on readability and visual hierarchy"
                ],
                decisions: [
                    "Prioritized content discovery",
                    "Designed around large visual content and team branding",
                    "Created reusable UI patterns for scalability",
                    "Focused on a modern sports-media aesthetic"
                ],
                visuals: [
                    "/images/sports-blog/ajr6kv0_3.png",
                    "/images/sports-blog/ajr6kv0_2.png",
                    "/images/sports-blog/ajr6k_v0_3_0.png",
                    "/images/sports-blog/ajr6kDashboard.png"
                ]
            },
            engineering: {
                stack: [
                    "React", 
                    "Next.js", 
                    "TypeScript", 
                    "Supabase", 
                    "TailwindCSS", 
                    "ShadCN UI", 
                    "Figma"
                ],
                architecture: [
                    "A content-driven web application built with React and TypeScript, backed by Supabase for data management."
                ],
                challenges: [
                    "Designing reusable content components",
                    "Organizing article and team data",
                    "Maintaining consistency across multiple page types",
                    "Balancing flexibility with simplicity"
                ]
            },
            reflection: {
                lessons: [
                    "Learned how content structure influences user experience",
                    "Improved my ability to design reusable frontend systems",
                    "Gained experience building products around a specific audience",
                    "Learned how design decisions affect content consumption"
                ],
                nextSteps: [
                    "Expand content management capabilities",
                    "Introduce user accounts and personalization",
                    "Explore community and engagement features"
                ]
            }
        }
    }
]