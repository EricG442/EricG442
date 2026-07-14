export function Footer() {
    return (
        <footer className="border-t py-8">
            <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-muted-foreground">
                    © 2026 Eric Gish
                </p>

                <div className="flex gap-4 text-sm">
                    <a href="/resume">Resume</a>
                    <a href="mailto:ericg206@outlook.com">Email</a>
                    <a href="/resume.pdf">PDF</a>
                </div>
            </div>
        </footer>
    );
}