"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
}

export default function TestimonialCard({
  quote,
  author,
  company,
}: TestimonialCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-md border-primary/10 hover:border-primary/30 dark:border-primary/5 dark:hover:border-primary/20 dark:hover:shadow-primary/10">
        <CardContent className="p-4 sm:p-6 flex-grow">
          <div className="mb-4 text-4xl text-primary">"</div>
          <p
            className={`text-muted-foreground text-sm leading-relaxed ${
              expanded ? "" : "line-clamp-3"
            }`}
          >
            {quote}
          </p>

          {/* Bouton Voir plus / Voir moins */}
          {quote.length > 100 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 text-primary hover:underline text-sm font-medium"
            >
              {expanded ? "Voir moins" : "Voir plus"}
            </button>
          )}
        </CardContent>

        <CardFooter className="border-t p-4 sm:p-6">
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-muted-foreground">{company}</p>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
