type Project = {
    slug: string,
    title: string,
    tagline: string,
    description?: string,

    caseStudy?: {
        problem?: {
            context?: string,
            goal?: string,
            users?: string[]
        },
        design?: {
            process?: string[],
            decisions?: string[],
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
        tagline: "A full-stack storefront and inventory management system built to help a handmade goods business move from stored inventory to online sales.",
        description: "I designed and built a custom e-commerce platform for a small handmade goods business, creating both a customer-facing storefront and an internal product management tools.",
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
                ]
            },
            engineering: {
                stack: [
                    "React", 
                    "Next.js", 
                    "TypeScript", 
                    "Supabase", 
                    "Tailwind CSS", 
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
]