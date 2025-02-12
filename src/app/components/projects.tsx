﻿import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
    { title: "PasswordGen", description: "A simple password generator using all things C++, from crytography to GUI" },
    { title: "BadVoxel", description: "A WIP voxel engine in C++, using opengl, glfw, and glad" },
    { title: "Project 3", description: "A brief description of Project 3" },
]

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-muted/50">
            <div className="container mx-auto">
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

