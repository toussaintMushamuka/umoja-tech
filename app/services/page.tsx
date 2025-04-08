"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/service-card";
import { services, getServiceIcon } from "@/lib/services-data";

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
      <motion.div
        className="flex flex-col items-center justify-center space-y-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <section
          className="relative h-80 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/img/img7.jpg')" }} // <-- change l'image si besoin
        >
          {/* Overlay sombre */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Contenu centré */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4 space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Nos Services
            </h1>
            <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Des services rapides et de qualité pour répondre à vos besoins
            </p>
          </div>
        </section>
      </motion.div>

      <motion.div
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {services.map((service) => {
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
