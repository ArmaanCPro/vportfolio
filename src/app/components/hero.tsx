import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
    return (
        <section className="py-20 text-center">
            <div className="container mx-auto px-4 md:px-0">
                <h1 className="text-4xl font-bold mb-6">Welcome to my Portfolio</h1>
                <p className="text-xl mb-2">I am a developer interested in low-level programming and computer graphics.</p>
                <p className="text-xl mb-8">Aside from programming, I like tennis, reading, 3D Art and calisthenics</p>
                <Button asChild>
                    <a href="#contact">
                        Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                </Button>
            </div>
        </section>
    )
}
