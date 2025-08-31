import { Badge } from "@/components/ui/badge"

const skills = ["C++", "Vulkan", "Unreal Engine", "wxWidgets", "OpenGL", "DirectX12", "CMake", "Premake",
    "vcpkg", "SQLite", "C#", "Java", "JavaScript", "TypeScript", "React", "Next.js", "Svelte", "Sveltekit",
    "Tailwind CSS", "Git", "Github"]

export default function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4 md:px-0">
                <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-lg py-2 px-4">
                            {skill}
                        </Badge>
                    ))}
                </div>
            </div>
        </section>
    )
}

