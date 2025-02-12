import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
    return (
        <footer className="py-6 bg-muted">
            <div className="container mx-auto flex justify-between items-center">
                <p>&copy; 2025 Armaan Chahal. All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="#" className="text-muted-foreground hover:text-primary">
                        <Github className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary">
                        <Linkedin className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary">
                        <Twitter className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

