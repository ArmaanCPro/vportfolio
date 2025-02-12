'use client'

import { useState } from "react"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        message: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            formData,
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
        ).then((response) => {
            console.log("SUCCESS!", response.status, response.text)
        }).catch((err) => {
            console.log("FAILED...", err)
        })
    }

    return (
        <section id="contact" className="py-20 bg-muted/50">
            <div className="container mx-auto max-w-md">
                <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <Input
                        name="user_name"
                        placeholder="Your Name"
                        value={formData.user_name}
                        onChange={handleChange}
                    />
                    <Input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        value={formData.user_email}
                        onChange={handleChange}
                    />
                    <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    <Button type="submit" className="w-full">
                        Send Message
                    </Button>
                </form>
            </div>
        </section>
    )
}