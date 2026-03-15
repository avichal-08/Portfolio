"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { User, Code, Terminal, Layers, Activity } from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

interface CommandMenuProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export function CommandMenu({ open, setOpen }: CommandMenuProps) {
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(!open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [open, setOpen])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [setOpen])

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
            <User className="mr-2 h-4 w-4" />
            <span>About</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("#projects"))}>
            <Code className="mr-2 h-4 w-4" />
            <span>Projects</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("#stack"))}>
            <Layers className="mr-2 h-4 w-4" />
            <span>Tech Stack</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Engineering Bay">
          <CommandItem onSelect={() => runCommand(() => router.push("#runtime"))}>
            <Terminal className="mr-2 h-4 w-4" />
            <span>Runtime (College Community Platform)</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("#drawx"))}>
            <Activity className="mr-2 h-4 w-4" />
            <span>DrawX (Real-Time WebSockets)</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("#cricket-engine"))}>
            <Activity className="mr-2 h-4 w-4" />
            <span>Cricket Prediction Engine</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}