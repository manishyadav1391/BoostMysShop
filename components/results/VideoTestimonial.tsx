export default function VideoTestimonial() {
    return (
        <section className="relative rounded-3xl overflow-hidden h-[500px] bg-black">

            <img
                src="/images/case-studies/video-thumb.jpg"
                alt="Video Testimonial"
                className="w-full h-full object-cover opacity-80"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>

            {/* Play */}
            <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-lg text-white text-4xl">
                    ▶
                </button>
            </div>

            {/* Text */}
            <div className="absolute bottom-10 left-8 right-8">
                <p className="text-2xl text-white italic mb-2">
                    "પહેલાં ગ્રાહકો ઘટતા હતા, હવે WhatsApp થી line લાગે છે!"
                </p>

                <p className="text-gray-300">
                    — Ramesh Patel
                </p>
            </div>
        </section>
    );
}