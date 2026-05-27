"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Zap, Award, Lightbulb } from "lucide-react";

export default function AboutPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen w-full pt-20">
      {/* Hero Section */}
      <section className="w-full px-4 py-12 md:py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="flex flex-col space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="space-y-3">
                <p className="text-primary font-semibold text-sm md:text-base">
                  Bienvenue chez
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Umoja Tech
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Solutions Bureautiques & Services Créatifs à Bukavu
                </p>
              </div>

              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md">
                Umoja Tech est votre partenaire de confiance pour tous vos
                besoins en bureautique, impression, design et services
                numériques. Depuis 2024, nous apportons l'excellence à chaque
                projet.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="group"
                  >
                    Nous Contacter
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative overflow-hidden rounded-2xl h-96 md:h-full md:min-h-96"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="/img/img1.jpg"
                alt="Umoja Tech Team"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full px-4 py-12 md:py-20 lg:py-28 bg-muted/30">
        <div className="container">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Feature 1 */}
            <motion.div
              variants={item}
              className="p-6 md:p-8 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3  rounded-lg">
      
                </div>
                <h3 className="text-lg md:text-xl font-bold">Qualité Garantie</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Nous garantissons une qualité supérieure dans chaque projet,
                  de l'impression au design, sans compromis.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              variants={item}
              className="p-6 md:p-8 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-lg">
              
                </div>
                <h3 className="text-lg md:text-xl font-bold">Rapidité</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Délais express sans sacrifice sur la qualité. Nous respectons
                  vos échéances avec professionnalisme.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              variants={item}
              className="p-6 md:p-8 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow duration-300 sm:col-span-2 lg:col-span-1"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-lg">
                  
                </div>
                <h3 className="text-lg md:text-xl font-bold">Innovation</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Nous utilisons les dernières technologies pour apporter des
                  solutions innovantes et créatives.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="w-full px-4 py-12 md:py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Image */}
            <motion.div
              className="relative overflow-hidden rounded-2xl h-96 md:h-96 order-2 md:order-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="/img/img2.jpg"
                alt="Notre équipe Umoja Tech"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl" />
            </motion.div>

            {/* Right Content */}
            <motion.div
              className="flex flex-col space-y-6 order-1 md:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="space-y-3">
                <p className="text-primary font-semibold text-sm md:text-base">
                  Notre Expertise
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  Des Professionnels au Service de Vos Besoins
                </h2>
              </div>

              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Créée en 2024, UmojaTech est née de la volonté d'apporter des
                solutions innovantes et accessibles. Notre équipe combine
                expertise en bureautique, design et développement
                web pour offrir des services de qualité supérieure.
              </p>

              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Que vous soyez une école, une entreprise ou un particulier, nous
                proposons des solutions adaptées à vos besoins spécifiques :
                saisie, impression, conception d'affiches, impression sur
                textiles, formation Microsoft Office, marketing digital, et
                bien plus encore.
              </p>

              <div className="pt-4">
                <Link href="/services">
                  <Button variant="outline" size="lg" className="group">
                    Découvrir nos Services
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full px-4 py-12 md:py-20 lg:py-28 bg-muted/30">
        <div className="container">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-2">
              <p className="text-primary font-semibold text-sm md:text-base">
                Nos Valeurs
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Ce qui nous définit
              </h2>
              <p className="max-w-2xl text-muted-foreground text-base md:text-lg">
                Nos valeurs fondamentales guident chaque projet et interaction
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Value 1 */}
            <motion.div
              variants={item}
              className="p-6 md:p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold">Excellence</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    Nous nous efforçons d'offrir l'excellence dans chaque
                    service, en veillant à ce que chaque projet réponde aux
                    normes les plus élevées.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Value 2 */}
            <motion.div
              variants={item}
              className="p-6 md:p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold">Innovation</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    Nous restons à la pointe de la technologie pour offrir des
                    solutions innovantes qui répondent aux besoins changeants de
                    nos clients.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Value 3 */}
            <motion.div
              variants={item}
              className="p-6 md:p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow duration-300 sm:col-span-2 lg:col-span-1"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold">
                    Satisfaction Client
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    La satisfaction de nos clients est notre priorité absolue. Nous
                    travaillons en étroite collaboration pour répondre à vos besoins
                    spécifiques.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full px-4 py-12 md:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/80 dark:from-primary/80 dark:to-primary/70 z-0" />
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: "url('/img/img8.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="container relative z-10">
          <motion.div
            className="flex flex-col items-center justify-center space-y-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Prêt à Collaborer?
              </h2>
              <p className="max-w-2xl text-white/80 text-base md:text-lg">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins et
                obtenir un devis personnalisé.
              </p>
            </div>

            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="group shadow-lg hover:shadow-xl transition-all duration-300"
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
