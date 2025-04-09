"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/service-card";
import TestimonialCard from "@/components/testimonial-card";
import { services, getServiceIcon } from "@/lib/services-data";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import HeroSection from "@/components/hero-section";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setMounted(true);
  }, []);

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
    <div className="flex flex-col min-h-screen w-full ">
      {/* Hero Section with Animation */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-slate-800 from-primary/20 to-primary/5 dark:from-primary/10 dark:to-background z-0" />

        {/* Background image */}
        <div
          className="absolute inset-0 z-0 opacity-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('/img/img7.jpg')",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            {/* Texte à gauche */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-3xl sm:text-2xl md:text-4xl font-bold text-white leading-tight">
                Des services de qualités
                <br />
                pour répondre à vos besoins
              </h1>
              <p className="text-muted-foreground md:text-xl max-w-2xl">
                Umoja Tech vous offre une gamme complète de services de
                bureautique, d'impression, de conception et de marketing
                digital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button
                    size="lg"
                    className="group hover:translate-x-1 transition-all duration-300"
                  >
                    Découvrir nos services
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="hover:bg-primary/10"
                  >
                    Demander un devis
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Image à droite */}
            <motion.div
              className="mt-8 lg:mt-0 w-full flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative w-full max-w-md aspect-video lg:aspect-square rounded-xl overflow-hidden shadow-2xl dark:shadow-primary/20">
                <img
                  src="/img/img6.jpg"
                  alt="Umoja Tech Services"
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Flèche vers le bas */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <ChevronDown className="h-8 w-8 text-primary" />
        </motion.div>
      </section>

      {/* Services Overview Section with Animation */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 dark:bg-primary/10 rounded-full filter blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 dark:bg-primary/10 rounded-full filter blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="container">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Nos Services
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Des services rapides et de qualité pour répondre à vos besoins
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {services.slice(0, 8).map((service, index) => {
              const IconComponent = getServiceIcon(service.icon);
              return (
                <motion.div key={service.id} variants={item}>
                  <ServiceCard
                    icon={<IconComponent className="h-10 w-10" />}
                    title={service.title}
                    description={service.shortDescription}
                    slug={service.id}
                  />
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <Link href="/services">
              <Button className="group">
                Voir tous nos services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section with Animation */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted to-background dark:from-background dark:via-muted/20 dark:to-background z-0"></div>
        <div className="container grid items-center gap-6 lg:grid-cols-2 lg:gap-10 relative z-10">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              À propos d'Umoja Tech
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Umoja Tech est une entreprise de bureautique dédiée à fournir des
              services de qualité supérieure et rapides pour répondre à tous vos
              besoins professionnels.
            </p>
            <Link href="/about">
              <Button variant="outline" className="mt-4 group">
                En savoir plus
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
          <motion.div
            className="flex justify-center mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-full max-w-sm overflow-hidden rounded-xl shadow-lg dark:shadow-primary/20 transform transition-transform duration-500 hover:scale-105">
              <img
                src="/img/img2.jpg"
                alt="Umoja Tech Team"
                className="aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold">Notre équipe</h3>
                  <p className="text-sm">
                    Des professionnels passionnés à votre service
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section with Animation */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Témoignages
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ce que nos clients disent de nous
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={item}>
              <TestimonialCard
                quote="Je recommande vivement leurs services d'impression. Rapide, abordable et d'excellente qualité. Je suis cliente depuis 3 ans maintenant."
                author="Maman Marceline"
                company="Directrice E.P.Antonino"
              />
            </motion.div>
            <motion.div variants={item}>
              <TestimonialCard
                quote="Nos clients sont particulièrement séduits par le design élégant et soigné de nos étiquettes de vin, qui valorisent parfaitement nos produits. "
                author="Jean Mira"
                company="Fournisseur du vin Demarreur"
              />
            </motion.div>
            <motion.div variants={item}>
              <TestimonialCard
                quote="En tant que directeur d'une école primaire, j’ai besoin de services de saisie et d’impression fiables, rapides et de qualité. Depuis que je travaille avec UmojaTech, je suis entièrement satisfait. Les documents sont toujours bien présentés, livrés dans les délais, et le service client est remarquable"
                author="Directeur"
                company="E.P1 CAHI"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Animation */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-800 from-primary to-primary/80 dark:from-primary/90 dark:to-primary/60 z-0"></div>
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: "url('/img/img8.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="container relative z-10">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                Prêt à collaborer avec nous?
              </h2>
              <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins et
                obtenir un devis personnalisé.
              </p>
            </div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto group shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Contactez-nous
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
