import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
    return (
        <section className="py-20 text-center">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold mb-4">Welcome to THE Portfolio</h1>
                <p className="text-xl mb-8">I'm a developer interested in making low-level things and games.</p>
                <Button asChild>
                    <a href="#contact">
                        Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                </Button>
            </div>
        </section>
    )
}