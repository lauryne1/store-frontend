import { Link, useLocation } from "react-router-dom"

export function NavProjects({ projects }: { projects: { name: string; url: string; icon: any }[] }) {
    const location = useLocation()

    return (
        <div className="mt-4 flex flex-col gap-1">
            <h4 className="text-xs font-medium uppercase text-muted-foreground px-2">Projects</h4>
            {projects.map((project) => {
                const isActive = location.pathname === project.url
                return (
                    <Link
                        key={project.url}
                        to={project.url}
                        className={`flex items-center gap-2 p-2 rounded hover:bg-gray-100 ${
                            isActive ? "bg-gray-200 font-semibold" : ""
                        }`}
                    >
                        <project.icon className="h-4 w-4" />
                        <span>{project.name}</span>
                    </Link>
                )
            })}
        </div>
    )
}
