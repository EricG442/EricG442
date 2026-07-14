export default function FeaturedWorks() {
    return (
        <section className="py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Featured Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-4">Project 1</h3>
                        <p className="text-gray-600">Description of Project 1.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-4">Project 2</h3>
                        <p className="text-gray-600">Description of Project 2.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-4">Project 3</h3>
                        <p className="text-gray-600">Description of Project 3.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}