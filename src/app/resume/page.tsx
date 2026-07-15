export default function Resume() {
    return (
        <div className="mx-auto max-w-4xl px-6 py-16 print:py-0">
            <div className="flex justify-center mb-12">
                <div>
                    <h1 className="text-4xl font-bold mb-8">Eric Gish</h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        Full-Stack Web Developer
                    </p>
                    <div className="mt-4 space-y-1 text-sm text-muted-foreground">
                        <p>eric.gish.dev@outlook.com</p>
                        <p>https://github.com/EricG442</p>
                        <p>https://www.linkedin.com/in/ericg206/</p>
                        <p>https://ericg-portfolio.vercel.app</p>
                    </div>
                </div>
                <a
                    href="/resume.pdf"
                    download
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 m-auto"
                >
                    Download PDF
                </a>
            </div>

            <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">
                    Summary
                </h2>
                <p>
                    Full-Stack web developer focuse on building user-centered applications from concept to deployment.
                    Experienced designing interfaces in Figma, developing React and TypeScript applications, and integrating
                    cloud-based data solutions.
                </p>
            </section>

            <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">
                        Technical Skills
                    </h2>
                    <div className="space-y-3">
                        <p>
                            <strong>Frontend:</strong> React, TypeScript, Tailwind CSS
                        </p>
                        <p>
                            <strong>Backend:</strong> Node.js, Express, PostgreSQL, REST APIs
                        </p>
                        <p>
                            <strong>Tools:</strong> Git, Figma, GitHub, VS Code
                        </p>
                    </div>
            </section>

            <section className="mb-10 space-y-6">
                <article>
                    <h3 className="text-2xl font-bold mb-4">
                        Hearts & Crafts Store
                    </h3>
                    <p className="text-muted-foreground mb-4">
                        Full-Stack Developer | Product Designer
                    </p>
                    <ul className="mt-3 list-disc list-inside pl-5 space-y-2">
                        <li>
                            Built a full-stack storefront and inventory management system.
                        </li>
                        <li>
                            Designed UI workflows in Figma before implementation.
                        </li>
                        <li>
                            Integrated Supabase database and image storage solutions.
                        </li>
                    </ul>
                </article>
                <article>
                    <h3 className="text-2xl font-bold mb-4">
                        Sports Content Platform
                    </h3>
                    <p className="text-muted-foreground mb-4">
                        Full-Stack Developer | Product Designer
                    </p>
                    <ul className="mt-3 list-disc list-inside pl-5 space-y-5">
                        <li>
                            Built a sports-focused content platform.
                        </li>
                        <li>
                            Created reusable React UI components and layouts.
                        </li>
                        <li>
                            Designed content-driven user experiences.
                        </li>
                    </ul>
                </article>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">
                    Experience
                </h2>
                <article>
                    <div>
                        <h3 className="text-xl font-semibold">
                            Independent Software Developer
                        </h3>
                        <p className="text-muted-foreground">
                            Personal & Client Projects
                        </p>
                        <p className="text-muted-foreground">
                            2025 - Present
                        </p>
                    </div>
                    <ul className="mt-4 list-disc list-inside pl-5 space-y-2">
                        <li>
                            Designed and developed custom full-stack web applications
                            using React, TypeScript, Node.js, and Supabase
                        </li>
                        <li>
                            Created user interfaces in Figma and translated designs into production-ready code.
                        </li>
                        <li>
                            Built inventory management, content management, and image upload workflows.
                        </li>
                        <li>
                            Managed projects from planning and architecture through implementation and deployment. 
                        </li>
                    </ul>
                </article>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">
                    Education
                </h2>
                <article>
                    <h3 className="text-xl font-semibold">
                        Self-directed Software Engineering Learning
                    </h3>
                    <p className="text-muted-foreground">
                        2020 - Present
                    </p>
                    <ul className="mt-4 list-disc list-inside pl-5 space-y-2">
                        <li>
                            Focused on React, TypeScript, Node.js, SQL, UI/UX Design, and full-stack web development.
                        </li>
                        <li>
                            Built production-oriented projects including an e-commerce platform and sports content platform.
                        </li>
                        <li>
                            Developed experience with product design, system architecture, deployment, and iterative development.
                        </li>
                    </ul>
                </article>
                <article>
                    <h3 className="text-xl font-semibold">
                        Full-Stack Web Development Bootcamp
                    </h3>
                    <p className="text-muted-foreground">
                        2020
                    </p>
                    <ul className="mt-4 list-disc list-inside pl-5 space-y-2">
                        <li>
                            Completed intensive training in React, TypeScript, Node.js, and database management.
                        </li>
                        <li> 
                            Started with vanilla JavaScript, HTML and CSS and worked up to building full-stack applications.
                        </li>
                    </ul>
                </article>
                <article>
                    <h3 className="text-xl font-semibold">
                        Highline Community College Coursework
                    </h3>
                    <p className="text-muted-foreground">
                        2019
                    </p>
                </article>
                <article>
                    <h3 className="text-xl font-semibold">
                        High School Diploma
                    </h3>
                    <p className="text-muted-foreground">
                        Mount Rainier High School
                    </p>
                </article>
            </section>
        </div>
    );
}