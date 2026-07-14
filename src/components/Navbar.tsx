export default function Navbar() {
    return (
            <nav className="flex flex-cols m-2">
                <h1>eric.gish.dev</h1>
                <ul className="flex space-x-4 m-auto">
                    <li><a href="/">Home</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="https://github.com/ericg442" target="_blank" rel="noopener noreferrer">Github</a></li>
                </ul>
            </nav>
    );
}