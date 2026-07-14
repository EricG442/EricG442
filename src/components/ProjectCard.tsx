import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

export default function ProjectCard({ project }: { project: any }) {
    return (
        <Card className="my-auto">
            <CardHeader>
                <CardTitle><h3>{project.title}</h3></CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <img 
                    src={project.caseStudy.design.visuals[0]}
                    alt={project.title}
                />
                <p>{project.description}</p>
                <div className="flex flex-wrap gap-2 m-auto">
                    {project.caseStudy.engineering.stack.map((tech: string) => (
                        <span key={tech} className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex justify-center gap-4">
                    {project.links.demo && (
                        <a 
                            href={project.links.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 inline-block"
                        >
                            View Demo
                        </a>
                    )}
                    {project.links.github && (
                        <a 
                            href={project.links.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600 inline-block"
                        >
                            View GitHub
                        </a>
                    )}
                    <a className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 inline-block" href={`EricG442/projects/${project.slug}`}>
                        View Project
                    </a>
                </div>
            </CardContent>
        </Card>
    );
}