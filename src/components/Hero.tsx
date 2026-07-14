export default function Hero() {
    return (
        <section className="bg-blue-500 text-white p-8">
            <h1 className="text-4xl font-bold">Full-Stack Web Developer & Product Designer</h1>
            <p className="text-lg mt-4">I design and build web applications from concept to deployment and beyond. Combining product thinking, UI/UX design, and modern full-stack development practices.</p>
            <div className="flex flex-col space-y-4 mt-6">
                <a href="/resume" className="bg-white text-blue-500 hover:bg-gray-200 font-bold py-2 px-4 rounded m-auto inline-block">
                    Resume
                </a>
            </div>
        </section>
    );
}