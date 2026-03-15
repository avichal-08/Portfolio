"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import {
    Home,
    Code2,
    Layers,
    Github,
    Twitter,
    Linkedin,
    Moon,
    Sun,
    Search
} from "lucide-react"

import { useState } from "react"
import { ContactCard } from "./contact-card"
import { AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
// import { CommandMenu } from "./command-menu"

export function Navbar() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)
    const [showContact, setShowContact] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12">

            <div className="flex items-center gap-2">
                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/50 backdrop-blur-md transition-all hover:bg-accent hover:scale-105 active:scale-95 shadow-sm"
                    aria-label="Toggle theme"
                >
                    {mounted && (theme === "dark" ? (
                        <Sun className="h-4 w-4 text-amber-400" />
                    ) : (
                        <Moon className="h-4 w-4 text-indigo-500" />
                    ))}
                    {!mounted && <div className="h-4 w-4" />}
                </button>

                <button
                    // onClick={() => setIsSearchOpen(true)}
                    className="hidden md:flex h-10 cursor-pointer items-center gap-2 rounded-full border border-border bg-card/50 px-4 text-sm text-muted-foreground backdrop-blur-md transition-all hover:bg-accent hover:text-foreground hover:scale-105 active:scale-95 shadow-sm"
                >
                    <Search className="h-4 w-4" />
                    <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest font-semibold">⌘ Ctrl K</span>
                </button>
            </div>

            <nav className="absolute left-1/2 top-0 hidden -translate-x-1/2 md:flex items-center gap-1 rounded-2xl border border-border bg-card/60 p-1.5 backdrop-blur-xl shadow-xl">
                <div className="flex items-center gap-1 px-1">
                    <NavLink href="#home" icon={<Home className="h-4 w-4" />} label="Home" active />
                    <NavLink href="#projects" icon={<Code2 className="h-4 w-4" />} label="Projects" />
                    <NavLink href="#stack" icon={<Layers className="h-4 w-4" />} label="Skills" />
                </div>

                <div className="h-6 w-px bg-border mx-1" />

                <div className="flex items-center gap-1 px-1">
                    <SocialIcon href="https://github.com/avichal-08" icon={<Github className="h-4 w-4" />} />
                    <SocialIcon href="https://www.linkedin.com/in/avichal-pandey-743310293/" icon={<Linkedin className="h-4 w-4" />} />
                    <SocialIcon href="https://x.com/Avichal_08" icon={<Twitter className="h-4 w-4" />} />
                </div>
            </nav>

            <div className="relative group">
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-orange-800 via-green-800 to-cyan-800 opacity-40 blur-[10px] transition-all duration-500 group-hover:opacity-80 group-hover:blur-[14px]"></div>
                <Button
                    onClick={() => setShowContact(!showContact)}
                    className="relative flex h-10 cursor-pointer items-center justify-center rounded-full border border-border bg-card px-6 text-[11px] font-bold uppercase tracking-wider text-foreground transition-all hover:bg-accent hover:scale-105 active:scale-95 shadow-sm"
                >
                    Hire Me
                </Button>

                <AnimatePresence>
                    {showContact && (
                        <div className="absolute right-0 top-14 z-[60]">
                            <ContactCard />
                            <div
                                className="fixed inset-0 -z-10 h-screen w-screen"
                                onClick={() => setShowContact(false)}
                            />
                        </div>
                    )}
                </AnimatePresence>
            </div>
            {/* <CommandMenu open={isSearchOpen} setOpen={setIsSearchOpen} /> */}
        </header>
    )
}

function NavLink({ href, icon, label, active = false }: { href: string, icon: React.ReactNode, label: string, active?: boolean }) {
    return (
        <Link
            href={href}
            title={label}
            className={`flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-200 hover:bg-accent ${active ? 'bg-accent text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
        >
            {icon}
        </Link>
    )
}

function SocialIcon({ href, icon }: { href: string, icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-foreground"
        >
            {icon}
        </a>
    )
}