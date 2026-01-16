'use client';

import PageTransition from "../components/PageTransition";
import HomeScene3D from '../components/HomeScene3D';
import { motion } from "framer-motion";
import { ArrowRight, Mouse, Sparkles } from "lucide-react";
import Link from "next/link";
import { MouseEvent } from "react";

const Home = () => {
  function scrollToAbout(event: MouseEvent<HTMLDivElement>): void {
    event.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <PageTransition>
      {/* Main Container - Relative for overall positioning, overflow hidden to prevent scrollbars from animations */}
      <div className="min-h-screen w-full relative overflow-hidden flex flex-col items-center justify-center bg-transparent">
        
        
        <HomeScene3D />
        
      </div>
    </PageTransition>
  );
};

export default Home;
