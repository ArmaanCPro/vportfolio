import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
    { title: "PasswordGen", description: "A simple password generator using all things C++, from cryptography to GUI to database" },
    { title: "Moon Engine", description: "A game engine in C++ with a focus on Rendering, using Vulkan, glfw, stb_image, and some other libraries" },
    { title: "Epic Duelist", description: "A short video game made with tools including Unreal Engine 5, Adobe Photoshop, Adobe Substance Painter, and Blender" },
]

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-muted/50">
            <div className="container mx-auto px-4 md:px-0">
                <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{project.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

