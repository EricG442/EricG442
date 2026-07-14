import { projects } from "@/data/projects"
import ProjectCard from "./ProjectCard";

export default function FeaturedWorks() {
    return (
        <section className="py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Featured Works</h2>
                <p className="text-gray-600 text-center mb-8">Here are some of my recent projects.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    <ProjectCard project={projects[0]} />
                    <ProjectCard project={projects[1]} />
                </div>
            </div>
        </section>
    );
}