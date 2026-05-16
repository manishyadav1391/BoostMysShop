"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { slides, Slide } from "./slides";
import styles from "./HeroSlider.module.css";

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [direction, setDirection] = useState<"next" | "prev">("next");

    const totalSlides = slides.length;

    // Auto-advance slides
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [currentSlide, isPaused]);

    const nextSlide = useCallback(() => {
        setDirection("next");
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, [totalSlides]);

    const prevSlide = useCallback(() => {
        setDirection("prev");
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    }, [totalSlides]);

    const goToSlide = (index: number) => {
        setDirection(index > currentSlide ? "next" : "prev");
        setCurrentSlide(index);
    };

    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    const currentSlideData = slides[currentSlide];

    return (
        <section
            className={styles.heroSlider}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={styles.sliderContainer}>
                {/* Slides */}
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`${styles.slide} ${index === currentSlide ? styles.active : ""
                            } ${styles[direction]}`}
                    >
                        <div className={styles.slideContent}>
                            {/* Text Content */}
                            <div className={styles.slideText}>
                                <h1 className={styles.headline}>
                                    {slide.title.hindi && (
                                        <span className={styles.hindi}>{slide.title.hindi}</span>
                                    )}
                                    {slide.title.highlight && (
                                        <span className={styles.highlight}>{slide.title.highlight}</span>
                                    )}
                                    <span className={styles.english}>{slide.title.english}</span>
                                </h1>

                                <p
                                    className={styles.subheadline}
                                    dangerouslySetInnerHTML={{ __html: slide.subtitle }}
                                />

                                {/* Trust Indicators */}
                                {slide.trustIndicators && (
                                    <div className={styles.trustIndicators}>
                                        {slide.trustIndicators.map((item, idx) => (
                                            <div key={idx} className={styles.trustItem}>
                                                <span className={styles.trustNumber}>{item.number}</span>
                                                <span className={styles.trustLabel}>{item.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Math Visual */}
                                {slide.mathVisual && (
                                    <div className={styles.mathVisual}>
                                        <div className={styles.mathCard}>
                                            <div className={styles.mathNumber}>
                                                {slide.mathVisual.left.number}
                                            </div>
                                            <div className={styles.mathLabel}>
                                                {slide.mathVisual.left.label}
                                            </div>
                                        </div>
                                        <div className={styles.mathEquals}>=</div>
                                        <div className={`${styles.mathCard} ${styles.highlight}`}>
                                            <div className={styles.mathNumber}>
                                                {slide.mathVisual.right.number}
                                            </div>
                                            <div className={styles.mathLabel}>
                                                {slide.mathVisual.right.label}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Comparison Table */}
                                {slide.comparison && (
                                    <div className={styles.comparisonTable}>
                                        {slide.comparison.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className={`${styles.comparisonItem} ${item.highlight ? styles.highlight : ""
                                                    }`}
                                            >
                                                <span className={styles.comparisonLabel}>
                                                    {item.label}
                                                </span>
                                                <span className={styles.comparisonValue}>
                                                    {item.value}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* CTA Buttons */}
                                <div className={styles.ctaButtons}>
                                    <Link
                                        href={slide.cta.primary.link}
                                        className={`${styles.btn} ${styles.btnPrimary} ${slide.cta.primary.icon === "whatsapp"
                                            ? styles.btnWhatsapp
                                            : ""
                                            }`}
                                        target={slide.cta.primary.link.startsWith("http") ? "_blank" : "_self"}
                                        rel={slide.cta.primary.link.startsWith("http") ? "noopener noreferrer" : ""}
                                    >
                                        {slide.cta.primary.icon === "whatsapp" && <WhatsAppIcon />}
                                        {slide.cta.primary.icon === "calendar" && <CalendarIcon />}
                                        {slide.cta.primary.text}
                                    </Link>
                                    <Link
                                        href={slide.cta.secondary.link}
                                        className={`${styles.btn} ${styles.btnSecondary}`}
                                    >
                                        {slide.cta.secondary.text}
                                    </Link>
                                </div>
                            </div>

                            {/* Image Content */}
                            <div className={styles.slideImage}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={slide.image}
                                        alt={slide.imageAlt}
                                        width={600}
                                        height={500}
                                        priority={index === 0}
                                        className={styles.image}
                                    />
                                    <div className={styles.imageBadge}>
                                        <span className={styles.badgeText}>
                                            {index === 0 && "Real Results"}
                                            {index === 1 && "Hyper-Local Targeting"}
                                            {index === 2 && "Verified Success"}
                                            {index === 3 && "AI-Powered Ads"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                className={`${styles.navButton} ${styles.prevButton}`}
                onClick={prevSlide}
                aria-label="Previous slide"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M15 18L9 12L15 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            <button
                className={`${styles.navButton} ${styles.nextButton}`}
                onClick={nextSlide}
                aria-label="Next slide"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M9 18L15 12L9 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            {/* Dot Indicators */}
            <div className={styles.dotIndicators}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ""
                            }`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Progress Bar */}
            <div className={styles.progressBar}>
                <div
                    className={styles.progressFill}
                    style={{
                        animation: isPaused
                            ? "none"
                            : `${styles.progress} 3s linear infinite`,
                    }}
                />
            </div>
        </section>
    );
}

// Icon Components
function WhatsAppIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
    );
}

function CalendarIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
            <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" strokeLinecap="round" />
            <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" strokeLinecap="round" />
            <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}