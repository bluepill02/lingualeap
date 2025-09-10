
'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { app } from "@/lib/firebase"; 
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import { createUserInFirestore } from "@/services/user";

export default function AuthPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  const router = useRouter();
  const { toast } = useToast();
  const auth = getAuth(app);

  const handleSignUp = async () => {
    if (!name) {
        toast({ variant: "destructive", title: "Sign Up Failed", description: "Please enter your full name." });
        return;
    }
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Update Firebase Auth profile
      await updateProfile(user, { displayName: name });
      
      // Create user document in Firestore
      await createUserInFirestore(user.uid, name, user.email!);

      toast({
        title: "Account Created!",
        description: "You've successfully signed up. Redirecting to dashboard...",
      });
      router.push('/dashboard');
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Sign Up Failed",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "Signed In!",
        description: "Welcome back! Redirecting to dashboard...",
      });
       router.push('/dashboard');
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Sign In Failed",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGuest = () => {
      router.push('/dashboard');
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4 sm:p-6 md:p-8">
        <Tabs defaultValue="signup" className="w-full max-w-md">
        <Card>
            <CardHeader className="text-center">
                <CardTitle className="text-2xl font-headline">Welcome to LinguaLeap</CardTitle>
                <CardDescription>
                Sign in to continue your language journey
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
                        <Input id="email-signin" type="email" placeholder="m@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                        <Label htmlFor="password-signin">Password</Label>
                        <Input id="password-signin" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" onClick={handleSignIn} disabled={loading}>{loading ? 'Signing In...' : 'Sign In'}</Button>
                    </CardFooter>
                </TabsContent>
                <TabsContent value="signup">
                    <CardContent className="space-y-4 pt-6">
                        <div className="space-y-2">
                            <Label htmlFor="name-signup">Full Name</Label>
                            <Input id="name-signup" placeholder="Your Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email-signup">Email</Label>
                            <Input id="email-signup" type="email" placeholder="m@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password-signup">Password</Label>
                            <Input id="password-signup" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" onClick={handleSignUp} disabled={loading}>{loading ? 'Signing Up...' : 'Sign Up'}</Button>
                    </CardFooter>
                </TabsContent>
                 <Separator className="my-4" />
                <div className="px-6 pb-4">
                    <Button variant="outline" className="w-full" onClick={handleGuest}>
                        Continue as Guest <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </CardContent>
        </Card>
        </Tabs>
    </div>
  )
}
