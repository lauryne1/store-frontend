import { Link, useLocation } from "react-router-dom"

export function NavSecondary({ items, className }: { items: { title: string; url: string; icon: any }[]; className?: string }) {
    const location = useLocation()

    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            {items.map((item) => {
                const isActive = location.pathname === item.url
                return (
                    <Link
                        key={item.url}
                        to={item.url}
                        className={`flex items-center gap-2 p-2 rounded hover:bg-gray-100 ${
                            isActive ? "bg-gray-200 font-semibold" : ""
                        }`}
                    >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                    </Link>
                )
            })}
        </div>
    )
}
