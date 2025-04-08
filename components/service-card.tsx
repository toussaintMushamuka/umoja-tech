"use client"

import Link from "next/link"
import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  slug?: string
}

export default function ServiceCard({ icon, title, description, slug }: ServiceCardProps) {
  const content = (
    <>
      <CardHeader className="p-4 sm:p-6">
        <div className="flex items-center gap-2">
          <div className="text-primary flex-shrink-0">{icon}</div>
          <CardTitle className="text-base sm:text-lg break-words">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4 pt-0 sm:p-6 sm:pt-0">
        <CardDescription className="mb-4">{description}</CardDescription>
        {slug && (
          <div className="flex items-center text-sm text-primary group-hover:underline">
            En savoir plus{" "}
            <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        )}
      </CardContent>
    </>
  )

  if (slug) {
    return (
      <Link href={`/services/${slug}`}>
        <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
          <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-md group border-primary/10 hover:border-primary/30 dark:border-primary/5 dark:hover:border-primary/20 dark:hover:shadow-primary/10">
            {content}
          </Card>
        </motion.div>
      </Link>
    )
  }

  return <Card className="flex flex-col h-full">{content}</Card>
}
