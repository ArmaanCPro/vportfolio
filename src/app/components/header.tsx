import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 py-6 bg-white shadow-md">
            <nav className="container mx-auto flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold">
                    Armaan Chahal
                </Link>
                <div className="flex gap-4">
                    <Button variant="ghost" asChild>
                        <Link href="#projects">Projects</Link>
                    </Button>
                    <Button variant="ghost" asChild>
                        <Link href="#skills">Skills</Link>
                    </Button>
                    <Button variant="ghost" asChild>
                        <Link href="#contact">Contact</Link>
                    </Button>
                </div>
            </nav>
        </header>
    )
}

