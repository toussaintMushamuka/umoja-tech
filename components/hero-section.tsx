"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const floatVariants = (delay: number = 0) => ({
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      },
    },
  });

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container px-4 md:px-6">
        {/* renversement quand je suis sur le petit écran  l'image doit commencer*/}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Text Content */}
          <motion.div
            className="flex flex-col justify-center space-y-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-6">
              <motion.h1
                variants={itemVariants}
                className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none leading-[1.1]"
              >
                Des services de qualité pour répondre à vos besoins
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="max-w-[500px] text-muted-foreground md:text-xl leading-relaxed"
              >
                Umoja Tech est là pour vous avec une gamme complète de services
                de bureautique, d'impression, de conception et de marketing
                digital.
              </motion.p>
            </div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Link href="/about" className="w-full sm:w-auto">
                <Button size="lg" className="rounded-full px-8 h-12 text-base">
                  En savoir plus
                </Button>
              </Link>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4"
            >
              <div className="w-px h-10 bg-border hidden sm:block"></div>
              <div className="flex flex-col items-start sm:items-center">
                <div className="flex items-center -space-x-2 mb-1">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-background bg-primary/10 flex items-center justify-center">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-primary"></div>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-background bg-primary/20 flex items-center justify-center">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-primary"></div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Services</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Collage */}
          <div className="relative mx-auto w-full max-w-[400px] sm:max-w-[500px] aspect-square lg:max-w-none lg:w-full lg:aspect-square mt-10 lg:mt-0">
            {/* Top Left Image */}
            <motion.div
              className="absolute top-[0%] left-[5%] w-[45%] h-[55%] rounded-[2rem] bg-secondary overflow-hidden border-[4px] sm:border-[6px] border-background shadow-sm z-10"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="/img/a.jpg"
                alt="Service de conception"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="absolute top-[15%] right-[0%] w-[45%] h-[45%] rounded-[2rem] bg-muted overflow-hidden border-[4px] sm:border-[6px] border-background shadow-sm z-10"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.4 }}
            >
              <img
                src="/img/b.jpg"
                alt="Service de marketing"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Bottom Image */}
            <motion.div
              className="absolute bottom-[5%] left-[15%] w-[55%] h-[35%] rounded-[2rem] bg-primary/5 overflow-hidden border-[4px] sm:border-[6px] border-background shadow-sm z-20"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.6 }}
            >
              <img
                src="/img/d.jpg"
                alt="Service d'impression"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>

            {/* Decorative Elements */}

            {/* Top Right Arrow Bubble */}
            <motion.div
              className="absolute top-[8%] right-[40%] w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center z-20 text-primary border-4 border-background"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 -rotate-45" />
            </motion.div>

            {/* Center Pill */}
            <motion.div
              className="absolute top-[48%] left-[42%] h-12 sm:h-14 px-4 sm:px-6 rounded-full bg-primary/10 backdrop-blur-md text-primary flex items-center justify-center gap-1.5 z-30 shadow-sm border-4 border-background"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
            >
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-primary/50"></div>
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-primary/70 -ml-2"></div>
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-primary -ml-2"></div>
            </motion.div>

            {/* Sparkles & Dots */}
            <motion.div
              className="absolute top-[35%] left-[0%] text-primary/30 z-0"
              variants={floatVariants(0)}
              animate="animate"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"
                  fill="currentColor"
                />
              </svg>
            </motion.div>
            <motion.div
              className="absolute bottom-[25%] right-[5%] text-primary/30 z-0"
              variants={floatVariants(1)}
              animate="animate"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"
                  fill="currentColor"
                />
              </svg>
            </motion.div>

            <motion.div
              className="absolute bottom-[18%] right-[15%] w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary/20 z-0"
              variants={floatVariants(0.5)}
              animate="animate"
            ></motion.div>
            <motion.div
              className="absolute top-[12%] right-[5%] w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary/20 z-0"
              variants={floatVariants(1.5)}
              animate="animate"
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
