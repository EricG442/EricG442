export default function Navbar() {
    return (
            <nav className="flex flex-col m-2">
                <h1>eric.gish.dev</h1>
                <ul className="flex space-x-4 m-auto">
                    <li><a href="/EricG442/">Home</a></li>
                    <li><a href="/EricG442/#contact">Contact</a></li>
                    <li><a href="https://github.com/ericg442" target="_blank" rel="noopener noreferrer">Github</a></li>
                </ul>
            </nav>
    );
}