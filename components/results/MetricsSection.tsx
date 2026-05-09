export default function MetricsSection({ study }: any) {
    const metrics = study.metrics;

    return (
        <section>

            <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">
                Campaign Results
            </h2>

            <div className="grid md:grid-cols-4 gap-6">

                <MetricCard
                    label="Revenue"
                    value={metrics.revenue}
                />

                <MetricCard
                    label="Customers"
                    value={metrics.customers}
                />

                <MetricCard
                    label="Reach"
                    value={metrics.reach}
                />

                <MetricCard
                    label="ROI"
                    value={metrics.roi}
                />

            </div>

        </section>
    );
}

function MetricCard({ label, value }: any) {
    return (
        <div className="bg-white p-8 rounded-3xl text-center shadow">

            <div className="text-3xl font-bold text-blue-900 mb-2">
                {value}
            </div>

            <p className="text-gray-500">
                {label}
            </p>

        </div>
    );
}