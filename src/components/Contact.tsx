export default function Contact() {
    return (
        <section id="contact" className="mb-10">
            <div className="mx-auto max-w-3xl px-6 text-center">
                <p className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                    I'm currently looking for opportunities in web development, frontend engineering and product-focused software development.
                </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                <a href="mailto:eric.gish.dev@outlook.com" className="rounded-md border px-4 py-2 max-w-xs">
                    Send Email
                </a>
                <a href="https://github.com/EricG442" target="_blank" rel="noopener noreferrer" className="rounded-md border px-4 py-2 max-w-xs">
                    View GitHub
                </a>
                <a href="https://linkedin.com/in/ericg206" target="_blank" rel="noopener noreferrer" className="rounded-md border px-4 py-2 max-w-xs">
                    View LinkedIn
                </a>
            </div>
        </section>
    );
}