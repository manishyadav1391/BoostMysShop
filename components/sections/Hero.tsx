"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative px-5 pt-10 pb-16 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Tag */}
        <div className="inline-block px-4 py-1.5 mb-6 bg-orange-100 rounded-full border">
          <span className="text-orange-600 text-xs font-semibold uppercase tracking-widest">
            Growth Boosters for Local Retail
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900 leading-tight">
          ₹200/दिन में आपकी दुकान पूरे मोहल्ले में
        </h1>

        {/* Subheading */}
        <p className="text-xl text-gray-700 mb-6">
          Your shop in the entire neighborhood for ₹200/day
        </p>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
          Blinkit और Zepto से हार रहे हैं? अब हर घर तक पहुंचें सिर्फ{" "}
          <span className="font-bold text-gray-900">₹6,000/महीने</span> में.
        </p>

        {/* Comparison Images */}
        <div className="grid grid-cols-2 gap-2 mb-10 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
          
          {/* Without Ads */}
          <div className="relative h-48 sm:h-64">
            <Image
              src="/images/without-ads.jpg"
              alt="Without ads"
              fill
              className="object-cover grayscale opacity-80"
            />
            <div className="absolute bottom-2 left-2 bg-black/80 text-white px-3 py-1 text-xs rounded-lg font-bold">
              Without Ads
            </div>
          </div>

          {/* With Ads */}
          <div className="relative h-48 sm:h-64">
            <Image
              src="/images/with-ads.jpg"
              alt="With ads"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-2 right-2 bg-green-500 text-white px-3 py-1 text-xs rounded-lg font-bold">
              BoostMyShop Ads
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi%20I%20want%20to%20grow%20my%20shop"
            className="bg-green-500 text-white px-8 py-4 rounded-xl shadow-lg font-semibold text-lg text-center"
          >
            WhatsApp Us
          </a>

          <button className="bg-black text-white px-8 py-4 rounded-xl shadow-lg font-semibold text-lg">
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
}