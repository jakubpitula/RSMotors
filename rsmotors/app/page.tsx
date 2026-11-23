"use client";

import { useState } from "react";
import {
  ArrowRight,
  Award,
  Check,
  ChevronRight,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { IntroSection } from "@/components/home/IntroSection";
import { Services } from "@/components/home/Services";
import { Stock } from "@/components/home/Stock";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ContactUs } from "@/components/home/ContactUs";

export default function Home() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <IntroSection />
        <Services />
        <Stock />
        <WhyChooseUs />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
