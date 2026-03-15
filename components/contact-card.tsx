"use client"

import { Mail, Linkedin, Twitter, Calendar, Copy, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

const contactLinks = [
  {
    label: "EMAIL",
    value: "avichal2018lko@gmail.com",
    icon: <Mail className="h-4 w-4" />,
    action: "copy",
  },
  {
    label: "LINKEDIN",
    value: "avichal-pandey",
    icon: <Linkedin className="h-4 w-4" />,
    action: "link",
    href: "https://linkedin.com/in/avichal-pandey-743310293/",
  },
  {
    label: "X (TWITTER)",
    value: "@Avichal_08",
    icon: <Twitter className="h-4 w-4" />,
    action: "link",
    href: "https://x.com/Avichal_08",
  },
  {
    label: "CAL.COM",
    value: "Book a meeting",
    icon: <Calendar className="h-4 w-4" />,
    action: "link",
    href: "#",
  },
]

export function ContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      className="w-80 rounded-3xl border border-border bg-card/80 p-2 shadow-2xl backdrop-blur-2xl"
    >
      <div className="mb-6 p-2">
        <span className="text-[10px] font-bold tracking-widest text-orange-600 uppercase">Available for hire</span>
        <h3 className="mt-1 text-xl font-bold text-foreground">Let&apos;s work together</h3>
        <p className="text-sm text-muted-foreground">Reach out through any channel below</p>
      </div>

      <div className="space-y-2">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href || "#"}
            target={link.action === "link" ? "_blank" : undefined}
            onClick={(e) => {
              if (link.action === "copy") {
                e.preventDefault()
                navigator.clipboard.writeText(link.value)
              }
            }}
            className="group flex items-center justify-between rounded-2xl border border-transparent p-3 transition-all hover:border-border hover:bg-accent/50"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground group-hover:text-foreground">
                {link.icon}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-bold text-muted-foreground uppercase">{link.label}</span>
                <span className="text-sm font-medium text-foreground">{link.value}</span>
              </div>
            </div>
            {link.action === "copy" ? (
              <Copy className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            ) : (
              <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            )}
          </a>
        ))}
      </div>
    </motion.div>
  )
}