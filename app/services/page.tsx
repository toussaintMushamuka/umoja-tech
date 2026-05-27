"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/service-card";
import { services } from "@/lib/services-data";
import { Button } from "@/components/ui/button";
import { Camera, Printer, PenTool, Megaphone, CheckCircle, Mail, Briefcase, Palette } from "lucide-react";
export default function ServicesPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      {/* New Orbital Hero Section */}
      <motion.div
        className="w-full relative pb-16 pt-8 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left Text */}
          <div className="flex flex-col space-y-6 z-10 text-center lg:text-left order-2 lg:order-1 items-center lg:items-start">
            <div className="text-sm font-semibold text-primary bg-primary/10 w-max px-4 py-1.5 rounded-full">
              Nos Services
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
              Umoja Tech<br/>Expertise
            </h1>
            <p className="text-muted-foreground max-w-sm">
              Des services rapides, fiables et de qualité pour répondre à tous vos besoins technologiques.
            </p>
            
          </div>

          {/* Center Image with Orbiting elements */}
          <div className="relative flex justify-center items-center h-[350px] sm:h-[450px] lg:h-[500px] z-10 order-1 lg:order-2 w-full">
            {/* Center Image */}
            <motion.div 
              className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-8 border-background shadow-2xl z-20 relative bg-muted"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            >
              <img src="/img/a.jpg" alt="Service Umoja" className="w-full h-full object-cover" />
            </motion.div>

            {/* Orbit Circles */}
            <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[450px] lg:h-[450px] rounded-full border border-border/60 z-0"></div>
            <div className="absolute w-[350px] h-[350px] sm:w-[480px] sm:h-[480px] lg:w-[580px] lg:h-[580px] rounded-full border border-border/30 z-0 hidden sm:block"></div>

            {/* Floating Nodes removed */}
          </div>

          {/* Right Features */}
          <div className="flex flex-col space-y-6 z-10 lg:pl-10 order-3 w-full max-w-sm mx-auto lg:max-w-none">
            <motion.div 
              className="flex items-center gap-4 bg-background/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
             
              <div>
                <h3 className="font-bold text-sm sm:text-base">Bureautique</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Solutions complètes</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center gap-4 bg-background/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
            
              <div>
                <h3 className="font-bold text-sm sm:text-base">Impression</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Impression de qualité supérieure</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center gap-4 bg-background/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              
              <div>
                <h3 className="font-bold text-sm sm:text-base">Conception</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Design créatif & moderne</p>
              </div>
            </motion.div>
          </div>

        </div>
      </motion.div>

      <motion.div
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {services.map((service) => {
          return (
            <motion.div key={service.id} variants={item}>
              <ServiceCard
                icon={undefined}
                title={service.title}
                description={service.shortDescription}
                slug={service.id}
              />
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        className="mt-16 bg-muted dark:bg-muted/20 rounded-xl p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">
            Vous avez un projet spécifique?
          </h2>
          <p className="text-muted-foreground">
            Nous sommes flexibles et pouvons adapter nos services à vos besoins
            particuliers. N'hésitez pas à nous contacter pour discuter de votre
            projet.
          </p>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-background rounded-full p-4 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h3 className="font-medium">Appelez-nous</h3>
            <p className="text-sm text-muted-foreground mt-1">
              +243 994 822 893
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-background rounded-full p-4 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h3 className="font-medium">Envoyez-nous un email</h3>
            <p className="text-sm text-muted-foreground mt-1">
              contactumojatech@gmail.com
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-background rounded-full p-4 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3 className="font-medium">Visitez-nous</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Kasali, Kadutu, Bukavu, RDC
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
