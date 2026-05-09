const steps = [
    {
        day: "Day 1",
        title: "Onboarding",
    },
    {
        day: "Day 2-3",
        title: "AI Content Creation",
    },
    {
        day: "Day 4",
        title: "Ads Go Live",
    },
    {
        day: "Day 7",
        title: "First Report",
    },
    {
        day: "Day 30",
        title: "Scale Review",
    },
];

export default function ProcessTimeline() {
    return (
        <section>
            <h3 className="text-2xl font-bold text-center mb-10">
                Our 30-Day Launch Process
            </h3>

            <div className="max-w-2xl mx-auto border-l-2 border-indigo-200 pl-6 space-y-8">
                {steps.map((step, i) => (
                    <div key={i} className="relative">
                        <div className="absolute -left-[33px] top-1 w-4 h-4 bg-indigo-600 rounded-full"></div>

                        <p className="text-indigo-600 font-bold">
                            {step.day}
                        </p>

                        <h4 className="font-semibold text-lg">
                            {step.title}
                        </h4>
                    </div>
                ))}
            </div>
        </section>
    );
}