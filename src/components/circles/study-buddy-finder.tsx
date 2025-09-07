
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';

export function StudyBuddyFinder() {
    return (
        <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Users className="text-primary"/>
                    Find a Study Buddy
                </CardTitle>
                <CardDescription>
                    Connect with a peer to review this week’s MCQs and concepts together.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Button className="w-full">View Members</Button>
            </CardContent>
        </Card>
    )
}
