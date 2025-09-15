import { GalleryVerticalEnd } from "lucide-react"

import { LoginForm } from "@/components/login-form"
import { useRef, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"


import { useDispatch } from "react-redux"
import { setCredentials } from "./authSlice"
import { useLoginMutation } from "./authApiSlice"


export default function Login({ className, ...props }: React.ComponentProps<"form">) {
    const userRef = useRef<HTMLInputElement>(null)
    const errRef = useRef<HTMLParagraphElement>(null)
    const [user, setUser] = useState("")
    const [pwd, setPwd] = useState("")
    const [errMsg, setErrMsg] = useState("")
    const navigate = useNavigate()

    const [login, {isLoading}] = useLoginMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        userRef.current?.focus()
    }, [])

    useEffect(() => {
        setErrMsg("")
    }, [user, pwd])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const userData = await login({ user, pwd }).unwrap()
            dispatch(setCredentials({ ...userData, user }))
            setUser("")
            setPwd("")
            navigate("/")
        } catch (err: any) {
            if (!err.status) {
                setErrMsg("No Server Response")
            } else if (err.status === 400) {
                setErrMsg("Missing Username or Password")
            } else if (err.status === 401) {
                setErrMsg("Unauthorized")
            } else {
                setErrMsg(err.data?.message)
            }
            errRef.current?.focus()
        }
    }

    const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => setUser(e.target.value)

    const handlePwdInput = (e: React.ChangeEvent<HTMLInputElement>) => setPwd(e.target.value)

    const content = isLoading ? <h1>Loading ...</h1> : (<div className="grid min-h-svh lg:grid-cols-2">
        <div className="flex flex-col gap-4 p-6 md:p-10">
            <div className="flex justify-center gap-2 md:justify-start">
                <a href="#" className="flex items-center gap-2 font-medium">
                    <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                        <GalleryVerticalEnd className="size-4" />
                    </div>
                    Acme Inc.
                </a>
            </div>
            <div className="flex flex-1 items-center justify-center">
                <div className="w-full max-w-xs">
                    
        <form
            className={cn("flex flex-col gap-6", className)}
            {...props}
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Login to your account</h1>
                <p className="text-muted-foreground text-sm text-balance">
                    Enter your email below to login to your account
                </p>
            </div>

            <div className="grid gap-6">
                <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                </div>

                <div className="grid gap-3">
                    <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                        <a
                            href="#"
                            className="ml-auto text-sm underline-offset-4 hover:underline"
                        >
                            Forgot your password?
                        </a>
                    </div>
                    <Input
                        id="password"
                        type="password"
                        required
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                    />
                </div>

                <Button type="submit" className="w-full">
                    Login
                </Button>

            </div>

            <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <a href="#" className="underline underline-offset-4">
                    Sign up
                </a>
            </div>
        </form>
                </div>
            </div>
        </div>
        <div className="bg-muted relative hidden lg:block">
            <img
                src="/auth.jpg"
                alt="Image"
                className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
        </div>
    </div>)

    return content
}
