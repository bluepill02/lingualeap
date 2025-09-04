
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function AuthPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
        <Tabs defaultValue="signin" className="w-full max-w-md">
        <Card className="bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl font-headline">Welcome to LinguaLeap</CardTitle>
                <CardDescription>
                Sign in or create an account to continue your language journey.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="signin">Sign In</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                <TabsContent value="signin">
                    <CardContent className="space-y-4 pt-6">
                        <div className="space-y-2">
                        <Label htmlFor="email-signin">Email</Label>
                        <Input id="email-signin" type="email" placeholder="m@example.com" />
                        </div>
                        <div className="space-y-2">
                        <Label htmlFor="password-signin">Password</Label>
                        <Input id="password-signin" type="password" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Sign In</Button>
                    </CardFooter>
                </TabsContent>
                <TabsContent value="signup">
                    <CardContent className="space-y-4 pt-6">
                        <div className="space-y-2">
                            <Label htmlFor="name-signup">Name</Label>
                            <Input id="name-signup" placeholder="Your Name" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email-signup">Email</Label>
                            <Input id="email-signup" type="email" placeholder="m@example.com" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password-signup">Password</Label>
                            <Input id="password-signup" type="password" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Sign Up</Button>
                    </CardFooter>
                </TabsContent>
            </CardContent>
        </Card>
        </Tabs>
    </div>
  )
}
