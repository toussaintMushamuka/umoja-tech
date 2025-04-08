"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { getServiceBySlug, getServiceIcon, services } from "@/lib/services-data"
import { motion } from "framer-motion"

export default function ServiceDetailPage() {
  const params = useParams()
  const slug = params.slug

  const service = getServiceBySlug(slug)

  if (!service) {
    return (
      <div className="container py-12 md:py-24 lg:py-32 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Service non trouvé</h1>
        <p className="mt-4 text-muted-foreground">Le service que vous recherchez n'existe pas.</p>
        <Link href="/services">
          <Button className="mt-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux services
          </Button>
        </Link>
      </div>
    )
  }

  const IconComponent = getServiceIcon(service.icon)

  // Get related services directly using the imported services array
  const relatedServices = getRelatedServices(slug)

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <Link
        href="/services"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Retour aux services
      </Link>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <motion.div
          className="w-full md:w-2/3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-full">
              <IconComponent className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl">{service.title}</h1>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-8">{service.description}</p>

          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Détails</TabsTrigger>
              <TabsTrigger value="features">Caractéristiques</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-6">
              <div className="space-y-6">
                <h2 className="text-xl md:text-2xl font-bold">Ce que nous offrons</h2>
                <ul className="grid gap-3">
                  {service.details.map((detail, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12">
                  {service.gallery.map((item, i) => (
                    <motion.div
                      key={i}
                      className="overflow-hidden rounded-lg"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={`/placeholder.svg?height=300&width=400&text=Image+${service.title}+${i + 1}`}
                        alt={`${service.title} - Image ${i + 1}`}
                        className="w-full h-auto object-cover aspect-video"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="features" className="mt-6">
              <div className="space-y-6">
                <h2 className="text-xl md:text-2xl font-bold">Caractéristiques principales</h2>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <Card className="h-full transition-all duration-300 hover:shadow-md dark:hover:shadow-primary/10">
                        <CardContent className="pt-6">
                          <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="faq" className="mt-6">
              <div className="space-y-6">
                <h2 className="text-xl md:text-2xl font-bold">Questions fréquentes</h2>
                <Accordion type="single" collapsible className="w-full">
                  {service.faq.map((item, i) => (
                    <AccordionItem key={i} value={`item-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent>{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        <div className="md:w-1/3 w-full mt-8 md:mt-0">
          <motion.div
            className="sticky top-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-primary/10 dark:border-primary/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Intéressé par ce service?</h3>
                <p className="text-muted-foreground mb-6">
                  Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé.
                </p>
                <div className="space-y-3">
                  <Link href="/contact">
                    <Button className="w-full group">
                      Demander un devis
                      <ArrowLeft className="ml-2 h-4 w-4 rotate-180 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full">
                      Nous contacter
                    </Button>
                  </Link>
                </div>

                <div className="mt-8 pt-6 border-t">
                  <h4 className="font-medium mb-3">Autres services qui pourraient vous intéresser:</h4>
                  <ul className="space-y-2">
                    {relatedServices.map((relatedService, i) => (
                      <li key={i}>
                        <Link href={`/services/${relatedService.id}`} className="text-primary hover:underline">
                          {relatedService.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

// Helper function to get 3 related services - fixed to use imported services array
function getRelatedServices(currentSlug, limit = 3) {
  // Filter out the current service and get random related services
  return services
    .filter((service) => service.id !== currentSlug)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit)
}
