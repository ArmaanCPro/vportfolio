import { Github } from "lucide-react"

export default function Footer() {
    return (
        <footer className="py-6 bg-muted">
            <div className="container mx-auto px-4 md:px-0 flex justify-between items-center">
                <p>&copy; 2025 Armaan Chahal. All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="https://github.com/ArmaanCPro" className="text-muted-foreground hover:text-primary">
                        <Github className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </footer>
    )
}