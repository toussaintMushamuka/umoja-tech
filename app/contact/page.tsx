"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Formulaire envoyé!",
      description: "Nous vous contacterons bientôt.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });

    setIsSubmitting(false);
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
          style={{ backgroundImage: "url('/img/img8.jpg')" }}
        >
          {/* Overlay noir semi-transparent */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Contenu centré */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Contactez-nous
            </h1>
            <p className="mt-2 max-w-[900px] text-lg md:text-xl text-white/80">
              Nous sommes là pour répondre à vos questions et vous aider dans
              vos projets
            </p>
          </div>
        </section>
      </motion.div>

      <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 mt-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Card className="h-full dark:border-primary/20">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="votre@email.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Votre numéro de téléphone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service qui vous intéresse</Label>
                  <Select
                    onValueChange={handleSelectChange}
                    value={formData.service}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="impression">
                        Impression sur papier
                      </SelectItem>
                      <SelectItem value="affiches">
                        Conception d'affiches
                      </SelectItem>
                      <SelectItem value="textile">
                        Impression sur textile
                      </SelectItem>
                      <SelectItem value="web">Conception web</SelectItem>
                      <SelectItem value="formation">
                        Formation MS Office
                      </SelectItem>
                      <SelectItem value="photos">
                        Photos professionnelles
                      </SelectItem>
                      <SelectItem value="marketing">
                        Marketing digital
                      </SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Votre message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Décrivez votre projet ou posez-nous vos questions"
                    className="min-h-[120px]"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <h2 className="text-2xl font-bold mb-4">Informations de contact</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Adresse</h3>
                  <p className="text-muted-foreground">
                    Kasali, Kadutu, Bukavu/RDC
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Téléphone</h3>
                  <p className="text-muted-foreground">+243 994 822 893</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">
                    contactumojatech@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Heures d'ouverture</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Lundi - Vendredi</span>
                <span>7h00 - 18h00</span>
              </div>
              <div className="flex justify-between">
                <span>Samedi</span>
                <span>11h00 - 16h00</span>
              </div>
              <div className="flex justify-between">
                <span>Dimanche</span>
                <span>Fermé</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Toaster />
    </div>
  );
}
