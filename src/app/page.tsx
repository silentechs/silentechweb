"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Mail, MapPin, Clock, Navigation } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <main className="min-h-screen bg-white text-[#0a0a0a] selection:bg-[#ff5436] selection:text-white selection:p-1">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-white/70 backdrop-blur-md border-b border-black/5">
                <div className="flex items-center gap-3">
                    <div className="relative w-20 h-20">
                        <Image src="/logo.png" alt="Silentech Logo" fill className="object-contain" />
                    </div>
                    <span className="text-xl font-bold tracking-tighter">SILENTECH SOLUTION</span>
                </div>
                <div className="hidden md:flex gap-12 text-sm font-medium tracking-widest uppercase opacity-60">
                    <a href="#mission" className="hover:opacity-100 transition-opacity">Mission</a>
                    <a href="#products" className="hover:opacity-100 transition-opacity">Portfolio</a>
                    <a href="#contact" className="hover:opacity-100 transition-opacity">Inquiry</a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative h-screen flex flex-col justify-center px-6 md:px-24">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl"
                >
                    <span className="text-[#ff5436] text-sm font-mono mb-6 block tracking-widest uppercase">
                        Ghanaian Owned / Globally Driven
                    </span>
                    <h1 className="text-6xl md:text-9xl font-bold leading-[0.9] mb-8 tracking-tighter">
                        Dream it, <br />
                        <span className="text-transparent border-t-2 border-black/20 pt-4 block mt-4" style={{ WebkitTextStroke: "1px #0a0a0a" }}>
                            we build it
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-60 max-w-2xl leading-relaxed">
                        Leading the digital evolution in Ghana by transforming local challenges into world-class web &amp; mobile applications.
                    </p>
                </motion.div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-6 md:left-24 opacity-30 text-xs font-mono uppercase tracking-[0.4em] rotate-90 origin-left">
                    Scroll to explore
                </div>
            </section>

            {/* Mission Section */}
            <section id="mission" className="py-32 px-6 md:px-24 border-t border-black/5 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-7">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-12">
                            Converting local solutions <br /> to <span className="text-[#ff5436]">scalable web apps.</span>
                        </h2>
                        <div className="space-y-8 text-lg opacity-70 leading-relaxed font-light max-w-xl">
                            <p>
                                Silentech Solution is a Ghanaian-owned enterprise dedicated to the digital transformation of local businesses.
                                We believe that every local problem has a digital solution capable of global scale.
                            </p>
                            <p>
                                Our mission is to promote the adoption of IT-based solutions across all tiers—from micro-enterprises
                                to government agencies and international NGOs.
                            </p>
                        </div>
                    </div>
                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-2xl border border-black/10"
                        >
                            <Image
                                src="/user-app.png"
                                alt="Happy user interacting with Silentech custom application"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-[2s] grayscale-[0.2] hover:grayscale-0"
                            />
                        </motion.div>
                        {/* Asymmetrical Accent */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#ff5436]/10 blur-3xl -z-10"></div>
                    </div>
                </div>
            </section>

            {/* Products Showcase */}
            <section id="products" className="py-32 px-6 md:px-24 bg-[#f4f4f5]">
                <div className="flex justify-between items-end mb-16">
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tighter">Featured <br /> Projects</h2>
                    <span className="text-sm font-mono opacity-40 mb-4">[ 01 — 04 ]</span>
                </div>

                <div className="space-y-12">
                    {/* Silentech Commerce - Flagship POS */}
                    <Link
                        href="https://app.silentech.live/"
                        target="_blank"
                        className="group relative h-[70vh] rounded-3xl overflow-hidden border border-[#ff5436]/30 block bg-[#0a0e1a] shadow-[0_24px_70px_-24px_rgba(0,0,0,0.4)]"
                    >
                        <Image
                            src="/project-commerce.png"
                            alt="Silentech Commerce — Simple POS for growing businesses"
                            fill
                            priority
                            sizes="90vw"
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Live badge */}
                        <span className="absolute top-8 left-8 z-10 text-xs font-mono uppercase tracking-[0.3em] text-[#ff5436] flex items-center gap-3 px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm border border-[#ff5436]/30">
                            <span className="w-2 h-2 rounded-full bg-[#ff5436] animate-pulse" /> Flagship Product / Live
                        </span>
                        {/* Caption */}
                        <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 bg-gradient-to-t from-black via-black/70 to-transparent text-white">
                            <div className="flex justify-between items-end">
                                <div>
                                    <h3 className="text-3xl md:text-5xl font-bold mb-2 tracking-tighter group-hover:text-[#ff5436] transition-colors">Silentech Commerce</h3>
                                    <p className="text-base md:text-xl opacity-70 max-w-xl font-light">Simple POS for growing businesses — sales, inventory &amp; records from your phone, online or offline.</p>
                                </div>
                                <ArrowUpRight className="w-12 h-12 md:w-16 md:h-16 text-[#ff5436] opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 shrink-0" />
                            </div>
                        </div>
                    </Link>

                    {/* StitchCraft - Featured */}
                    <Link
                        href="https://www.stitchcraft.live/"
                        target="_blank"
                        className="group relative h-[60vh] rounded-3xl overflow-hidden border border-black/10 block shadow-[0_20px_60px_-24px_rgba(0,0,0,0.35)]"
                    >
                        <Image
                            src="/project-stitchcraft.png?v=2"
                            alt="StitchCraft Interface"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                        <div className="absolute inset-0 p-12 flex flex-col justify-end text-white">
                            <div className="flex justify-between items-end">
                                <div>
                                    <h3 className="text-4xl md:text-6xl font-bold mb-4 group-hover:text-[#ff5436] transition-colors">StitchCraft</h3>
                                    <p className="text-xl md:text-2xl opacity-80 max-w-2xl">Digital management for the Ghanaian fashion industry.</p>
                                </div>
                                <ArrowUpRight className="w-12 h-12 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0" />
                            </div>
                        </div>
                    </Link>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Silent Voice - Featured */}
                        <Link
                            href="https://www.silentvoice.online/"
                            target="_blank"
                            className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-black/10 block shadow-[0_20px_60px_-24px_rgba(0,0,0,0.35)]"
                        >
                            <Image
                                src="/project-silentvoice.png?v=2"
                                alt="Silent Voice Interface"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                            <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                                <h3 className="text-3xl font-bold mb-2 group-hover:text-[#ff5436] transition-colors">Silent Voice</h3>
                                <p className="opacity-80">A collection of poems where the whispered words of the spirit find their eternal resonance.</p>
                            </div>
                        </Link>

                        {/* Custom Solutions */}
                        <div className="p-12 bg-white border border-black/[0.06] rounded-3xl shadow-[0_2px_24px_-12px_rgba(0,0,0,0.18)] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center">
                            <Globe className="w-10 h-10 text-[#ff5436] mb-6" />
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Custom Enterprise</h3>
                            <p className="text-black/60 font-light text-lg leading-relaxed">
                                Tailored web applications for NGOs, business entities, and government institutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <footer id="contact" className="pt-32 pb-12 px-6 md:px-24 bg-white border-t border-black/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-32">
                    <div>
                        <h2 className="text-4xl md:text-7xl font-bold mb-12 tracking-tighter">Ready to <br /> build?</h2>
                        <a href="mailto:support@silentech.live" className="text-2xl md:text-4xl font-light hover:text-[#ff5436] transition-colors flex items-center gap-4">
                            support@silentech.live <Mail className="w-6 h-6" />
                        </a>
                    </div>
                    <div className="flex flex-col justify-end space-y-6 text-lg opacity-60 uppercase font-mono tracking-widest">
                        <div className="flex items-start gap-4">
                            <MapPin className="w-5 h-5 mt-1 text-[#ff5436] shrink-0" />
                            <p>Head Office <br /> Malshegu — Tamale, N/R</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <Navigation className="w-5 h-5 mt-1 text-[#ff5436] shrink-0" />
                            <p>Digital Address <br /> NS-484-9337</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <Clock className="w-5 h-5 mt-1 text-[#ff5436] shrink-0" />
                            <p>Working Hours <br /> 8:30am — 5:00pm</p>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-6 opacity-30 text-xs uppercase tracking-widest">
                    <p>© {new Date().getFullYear()} SILENTECH SOLUTION ENTERPRISE</p>
                    <div className="flex gap-8">
                        <span>Tamale</span>
                        <span>Accra</span>
                        <span>Remote</span>
                    </div>
                </div>
            </footer>
        </main>
    );
}
