import { useParams } from "react-router-dom";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="flex flex-col max-w-4xl mx-auto space-y-8">
            <section className="space-y-6">
                <h1>{project.title}</h1>
                <p>{project.tagline}</p>
                <div className="flex flex-wrap px-4">
                    {project.caseStudy?.engineering?.stack?.map((tech: string) => (
                        <span key={tech} className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded">
                            {tech}
                        </span>
                    ))}
                </div>
                {project.caseStudy?.design?.visuals?.[2] && (
                    <img
                        src={project.caseStudy.design.visuals[2]}
                        alt={project.title}
                    />
                )}
            </section>
            <section className="space-y-6">
                <h2>The Opportunity</h2>
                <p>{project.caseStudy?.problem?.context}</p>
                <p>{project.caseStudy?.problem?.goal}</p>
            </section>
            <section className="space-y-6">
                <h2>Design Process</h2>
                <ul>
                    {project.caseStudy?.design?.process?.map((step: string, index: number) => (
                        <li key={index}>{step}</li>
                    ))}
                </ul>
                <h2>Design Decisions</h2>
                <ul>
                    {project.caseStudy?.design?.decisions?.map((step: string, index: number) => (
                        <li key={index}>{step}</li>
                    ))}
                </ul>
                <h2>Gallery</h2>
                {project.caseStudy?.design?.visuals?.map((visual: string, index: number) => (
                    <img
                        key={index}
                        src={visual}
                        alt={project.title}
                    />
                ))}
            </section>
            <section className="space-y-6">
                <h2>Technical Architecture</h2>
                <p>{project.caseStudy?.engineering?.architecture}</p>
                {project.caseStudy?.engineering?.challenges?.map((challenge: string, index: number) => (
                    <p key={index}>{challenge}</p>
                ))}
            </section>
            <section className="space-y-6">
                <h2>What I Learned</h2>
                {project.caseStudy?.reflection?.lessons?.map((lesson: string, index: number) => (
                    <p key={index}>{lesson}</p>
                ))}
                {project.caseStudy?.reflection?.nextSteps?.map((step: string, index: number) => (
                    <p key={index}>{step}</p>
                ))}
            </section>
        </div>
    );
}