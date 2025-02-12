import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-muted/50">
            <div className="container mx-auto max-w-md">
                <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
                <form className="space-y-4">
                    <Input placeholder="Your Name" />
                    <Input type="email" placeholder="Your Email" />
                    <Textarea placeholder="Your Message" />
                    <Button type="submit" className="w-full">
                        Send Message
                    </Button>
                </form>
            </div>
        </section>
    )
}

