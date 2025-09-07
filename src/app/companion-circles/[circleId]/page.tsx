
'use client';

import { useState, useEffect } from 'react';
import { notFound, useRouter } from 'next/navigation';
import { getCircle, getCircleMembers, joinCircle, leaveCircle } from '@/services/circles';
import { mockUser } from '@/lib/data';
import type { CompanionCircle, User } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowLeft, Users, MessageSquare, Loader2, UserPlus, LogOut } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from '@/components/ui/textarea';

export default function CircleDetailsPage({ params }: { params: { circleId: string } }) {
  const [circle, setCircle] = useState<CompanionCircle | null>(null);
  const [members, setMembers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMember, setIsMember] = useState(false);
  const [isUpdatingMembership, setIsUpdatingMembership] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const circleData = await getCircle(params.circleId);
        if (!circleData) {
          notFound();
          return;
        }
        setCircle(circleData);

        const memberData = await getCircleMembers(circleData.members.map(m => m.id));
        setMembers(memberData);
        
        setIsMember(circleData.members.some(m => m.id === mockUser.id));

      } catch (error) {
        console.error("Failed to fetch circle details:", error);
        toast({ variant: 'destructive', title: 'Error', description: 'Could not load circle details.' });
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [params.circleId, toast]);

  const handleJoinLeave = async () => {
      if (!circle) return;
      setIsUpdatingMembership(true);
      try {
          if (isMember) {
              await leaveCircle(mockUser.id, circle.id);
              setIsMember(false);
              setMembers(prev => prev.filter(m => m.id !== mockUser.id));
              toast({ title: 'Success', description: `You have left "${circle.name}".` });
          } else {
              await joinCircle(mockUser.id, circle.id);
              setIsMember(true);
              // Optimistically add user to members list
              const userToAdd = { id: mockUser.id, name: mockUser.name, avatarUrl: mockUser.avatarUrl, email: mockUser.email, streak: mockUser.streak, xp: mockUser.xp, language: mockUser.language, timezone: mockUser.timezone, isPro: mockUser.isPro, proficiency: mockUser.proficiency, goals: mockUser.goals, persona: mockUser.persona };
              setMembers(prev => [...prev, userToAdd]);
              toast({ title: 'Welcome!', description: `You have joined "${circle.name}".` });
          }
      } catch (error) {
          console.error("Failed to update membership:", error);
          toast({ variant: 'destructive', title: 'Error', description: 'Could not update membership. Please try again.' });
      } finally {
          setIsUpdatingMembership(false);
      }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 animate-spin" />
        <p className="ml-2">Loading Circle...</p>
      </div>
    );
  }

  if (!circle) {
    return notFound();
  }

  return (
    <div className="container mx-auto space-y-6">
      <header>
        <Button variant="ghost" onClick={() => router.back()} className="mb-4">
          <ArrowLeft className="mr-2" /> Back to Circles
        </Button>
        <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-primary/20 text-primary">
                <Users className="w-8 h-8" />
            </div>
            <div>
                <h1 className="text-3xl font-bold font-headline">{circle.name}</h1>
                <p className="text-muted-foreground">{circle.description}</p>
                 <div className="flex items-center gap-2 mt-2">
                    <Badge variant={circle.type === 'Mentor-led' ? 'warning' : 'secondary'}>{circle.type}</Badge>
                    <Badge variant="outline">{circle.subject}</Badge>
                    <Badge variant="outline">{circle.difficulty}</Badge>
                </div>
            </div>
        </div>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Post Something</CardTitle>
                </CardHeader>
                <CardContent>
                    <Textarea placeholder="Share a question or an insight with the group..." />
                    <Button className="mt-2">Post</Button>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Discussion Feed</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground p-12">
                    <MessageSquare className="w-12 h-12 mx-auto mb-4" />
                    <p>No posts yet. Be the first to start a conversation!</p>
                </CardContent>
            </Card>
        </div>

        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Members ({members.length}/{circle.memberCount})</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {members.map(member => (
                         <div key={member.id} className="flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src={member.avatarUrl} alt={member.name} />
                                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span className="font-medium">{member.name}</span>
                         </div>
                    ))}
                </CardContent>
            </Card>

             <Button 
                onClick={handleJoinLeave} 
                disabled={isUpdatingMembership}
                className="w-full"
                variant={isMember ? 'destructive' : 'default'}
                size="lg"
              >
                {isUpdatingMembership ? (
                  <Loader2 className="mr-2 animate-spin" />
                ) : isMember ? (
                  <LogOut className="mr-2" />
                ) : (
                  <UserPlus className="mr-2" />
                )}
                {isUpdatingMembership ? 'Updating...' : isMember ? 'Leave Circle' : 'Join Circle'}
              </Button>
        </div>
      </div>
    </div>
  );
}
