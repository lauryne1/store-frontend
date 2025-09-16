"use client"

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    joined: "January 2024",
    avatar: "https://i.pravatar.cc/150?u=johndoe",
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Profile</h1>

      <Card className="max-w-md">
        <CardHeader className="flex flex-col items-center">
          <Avatar className="w-20 h-20 mb-3">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>
          <CardTitle>{user.name}</CardTitle>
          <p className="text-sm text-muted-foreground">{user.email}</p>
        </CardHeader>

        <CardContent className="space-y-3">
          <div className="flex justify-between">
            <span className="font-medium">Role:</span>
            <span>{user.role}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Joined:</span>
            <span>{user.joined}</span>
          </div>

          <div className="flex justify-center mt-4 gap-3">
            <Button variant="default">Edit Profile</Button>
            <Button variant="outline">Change Password</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Profile
