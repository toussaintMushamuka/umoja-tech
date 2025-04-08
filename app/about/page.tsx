import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            À propos d'Umoja Tech
          </h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Découvrez notre histoire, notre mission et nos valeurs
          </p>
        </div>
      </div>

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:gap-16 pt-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Notre Histoire</h2>
          <p className="text-muted-foreground mb-6">
            Créée en 2024, UmojaTech est née de la volonté d’apporter des
            solutions innovantes et accessibles dans le domaine : bureautique,
            photographie, developpement Web, desighn, etc. Nous nous engageons à
            offrir des services de saisie et impression, conception d'affiche,
            impression sur t-shirts,vareuses, chapeaux...,formation Microsoft
            Office, Marketing Digital... en mettant l’accent sur la qualité,
            l’innovation et la satisfaction client.
          </p>
          <p className="text-muted-foreground">
            Bien que jeune, notre entreprise repose sur une expertise solide et
            une passion pour la technologie et le service client. Nous
            travaillons avec les écoles, les entreprises et des particuliers, en
            proposant des solutions adaptées à leurs besoins spécifiques.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-xl">
          <img
            src="/img/umoja.jpg"
            alt="Umoja Tech Office"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Notre Mission</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Notre mission est de fournir des services de bureautique et de
          conception de haute qualité, rapides et abordables, permettant à nos
          clients de se concentrer sur leur cœur de métier tout en bénéficiant
          de solutions technologiques et créatives optimales.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-12">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center space-y-2">
              <CheckCircle className="h-12 w-12 text-primary mb-2" />
              <h3 className="text-xl font-bold">Excellence</h3>
              <p className="text-muted-foreground">
                Nous nous efforçons d'offrir l'excellence dans chaque service
                que nous fournissons, en veillant à ce que chaque projet réponde
                aux normes les plus élevées.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center space-y-2">
              <CheckCircle className="h-12 w-12 text-primary mb-2" />
              <h3 className="text-xl font-bold">Innovation</h3>
              <p className="text-muted-foreground">
                Nous restons à la pointe de la technologie et des tendances du
                design pour offrir des solutions innovantes qui répondent aux
                besoins changeants de nos clients.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center space-y-2">
              <CheckCircle className="h-12 w-12 text-primary mb-2" />
              <h3 className="text-xl font-bold">Satisfaction client</h3>
              <p className="text-muted-foreground">
                La satisfaction de nos clients est notre priorité absolue. Nous
                travaillons en étroite collaboration avec chaque client pour
                comprendre et répondre à leurs besoins spécifiques.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-24">
        <h2 className="text-2xl font-bold mb-6 text-center">Notre Équipe</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Notre équipe est composée de professionnels passionnés et expérimentés
          dans les domaines de l'impression, du design, du développement web et
          du marketing digital...
        </p>
      </div>
    </div>
  );
}
