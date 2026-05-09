export default function ProblemSolution({ study }: any) {
    return (
        <section className="grid md:grid-cols-2 gap-8">

            <div className="bg-red-50 p-8 rounded-3xl">
                <h2 className="text-2xl font-bold text-red-600 mb-4">
                    The Problem
                </h2>

                <p className="text-gray-700 leading-relaxed">
                    {study.problem}
                </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-3xl">
                <h2 className="text-2xl font-bold text-blue-700 mb-4">
                    Our Solution
                </h2>

                <p className="text-gray-700 leading-relaxed">
                    {study.solution}
                </p>
            </div>

        </section>
    );
}