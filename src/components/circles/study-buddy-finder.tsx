
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users, Loader2, Wand2, UserPlus, AlertTriangle } from 'lucide-react';
import { findStudyBuddy } from '@/ai/flows/study-buddy-flow';
import type { User, StudyBuddyOutput } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import type { User as FirebaseUser } from 'firebase/auth';

interface StudyBuddyFinderProps {
  members: User[];
  currentUser: FirebaseUser | null;
}

export function StudyBuddyFinder({ members, currentUser }: StudyBuddyFinderProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [suggestion, setSuggestion] = useState<StudyBuddyOutput['bestMatch'] | null>(null);
    const { toast } = useToast();

    const handleFindBuddy = async () => {
        if (!currentUser) {
            toast({
                variant: 'destructive',
                title: 'Not Logged In',
                description: 'You need to be logged in to find a study buddy.',
            });
            return;
        }

        setIsLoading(true);
        setSuggestion(null);

        const otherMembers = members.filter(m => m.id !== currentUser.uid);
        const currentUserData = members.find(m => m.id === currentUser.uid);

        if (otherMembers.length === 0) {
            toast({
                variant: 'destructive',
                title: 'Not Enough Members',
                description: 'Need at least one other member in the circle to find a buddy.',
            });
            setIsLoading(false);
            return;
        }

        if (!currentUserData) {
            toast({
                variant: 'destructive',
                title: 'You are not a member',
                description: 'You must be a member of this circle to find a buddy.',
            });
            setIsLoading(false);
            return;
        }

        try {
            const result = await findStudyBuddy({ currentUser: currentUserData, otherMembers });
            if (result.bestMatch) {
                setSuggestion(result.bestMatch);
                 toast({
                    title: 'Buddy Found!',
                    description: 'We found a great study partner for you.',
                });
            } else {
                 toast({
                    variant: 'default',
                    title: 'No Immediate Match',
                    description: 'We couldn\'t find an ideal match right now. Try again as more members join!',
                });
            }
        } catch (error) {
            console.error('Failed to find study buddy:', error);
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Could not find a buddy. Please try again later.',
            });
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Wand2 className="text-primary"/>
                    AI Study Buddy Finder
                </CardTitle>
                <CardDescription>
                    Connect with a peer to review this week’s MCQs and concepts together.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {suggestion ? (
                    <div className="text-center space-y-4">
                         <Avatar className="h-20 w-20 mx-auto border-2 border-primary">
                            <AvatarImage src={suggestion.avatarUrl} alt={suggestion.name} />
                            <AvatarFallback>{suggestion.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <h4 className="font-bold">{suggestion.name}</h4>
                            <p className="text-sm text-muted-foreground mt-1">{suggestion.reason}</p>
                        </div>
                        <Button className="w-full">
                            <UserPlus className="mr-2"/> Connect with {suggestion.name.split(' ')[0]}
                        </Button>
                    </div>
                ) : (
                    <Button className="w-full" onClick={handleFindBuddy} disabled={isLoading || !currentUser}>
                        {isLoading ? (
                            <><Loader2 className="mr-2 animate-spin"/> Searching...</>
                        ) : (
                            'Find a Buddy'
                        )}
                    </Button>
                )}
            </CardContent>
        </Card>
    )
}
