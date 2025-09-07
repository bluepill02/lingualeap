
'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { joinCircle, leaveCircle, addPostToCircle, getPostsForCircle, togglePostReaction, addCommentToPost } from '@/services/circles';
import { mockUser } from '@/lib/data';
import type { CompanionCircle, User, CirclePost, PostComment, ReactionType } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowLeft, Users, MessageSquare, Loader2, UserPlus, LogOut, MessageCircle, Smile, Lightbulb, Brain, ShieldCheck, Calendar, PartyPopper, Pin, Megaphone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from '@/components/ui/textarea';
import { formatDistanceToNow } from 'date-fns';
import { Separator } from '@/components/ui/separator';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { StudyBuddyFinder } from '@/components/circles/study-buddy-finder';
import { MiniQuiz } from '@/components/circles/mini-quiz';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { LessonPlanTimeline } from '@/components/circles/lesson-plan-timeline';
import { MarkdownRenderer } from '@/components/exam/markdown-renderer';

function CommentCard({ comment }: { comment: PostComment }) {
    return (
        <div className="flex gap-3">
             <Avatar className="h-8 w-8">
                <AvatarImage src={comment.authorAvatarUrl} alt={comment.authorName} />
                <AvatarFallback>{comment.authorName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 bg-muted p-3 rounded-lg">
                <div className="flex items-center gap-2">
                    <p className="font-semibold text-sm">{comment.authorName}</p>
                    <p className="text-xs text-muted-foreground">
                        {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                    </p>
                </div>
                <div className="text-sm text-muted-foreground prose dark:prose-invert max-w-none">
                    <MarkdownRenderer>{comment.content}</MarkdownRenderer>
                </div>
            </div>
        </div>
    )
}

function parseQuizContent(content: string) {
  if (!content.startsWith('[quiz]')) {
    return null;
  }
  const lines = content.replace('[quiz]', '').trim().split('\n');
  const question = lines[0] || '';
  const options = (lines[1] || '').split(',').map(o => o.trim());
  const answer = lines[2] || '';
  const explanation = lines[3] || '';

  if (question && options.length === 4 && answer && explanation) {
    return { question, options, answer, explanation };
  }
  return null;
}


function PostCard({ post, circleId, onUpdate }: { post: CirclePost, circleId: string, onUpdate: () => void }) {
    const [showComments, setShowComments] = useState(false);
    const [newComment, setNewComment] = useState('');
    const [isSubmittingComment, setIsSubmittingComment] = useState(false);
    const { toast } = useToast();

    const reactions = post.reactions || { madeMeSmile: [], helpful: [], interesting: [], mentorApproved: [] };
    const quizData = parseQuizContent(post.content);

    const handleReaction = async (reactionType: ReactionType) => {
        try {
            await togglePostReaction(circleId, post.id, mockUser.id, reactionType);
            onUpdate();
        } catch (error) {
            console.error(`Failed to add ${reactionType} reaction:`, error);
            toast({ variant: 'destructive', title: 'Error', description: 'Could not update reaction.' });
        }
    }
    
    const handleCommentSubmit = async () => {
        if (!newComment.trim()) return;
        setIsSubmittingComment(true);
        try {
            await addCommentToPost(circleId, post.id, newComment);
            setNewComment('');
            onUpdate();
        } catch (error) {
            console.error("Failed to add comment:", error);
            toast({ variant: 'destructive', title: 'Error', description: 'Could not add comment.' });
        } finally {
            setIsSubmittingComment(false);
        }
    }
    
    const userReactions = Object.keys(reactions).filter(key => reactions[key as ReactionType]?.includes(mockUser.id)) as ReactionType[];
    
    const reactionIcons = {
        madeMeSmile: <Smile className="w-4 h-4 text-yellow-500" />,
        helpful: <Lightbulb className="w-4 h-4 text-green-500" />,
        interesting: <Brain className="w-4 h-4 text-blue-500" />,
        mentorApproved: <ShieldCheck className="w-4 h-4 text-primary" />,
    }

    return (
        <Card className="bg-card/50">
            <CardContent className="p-4">
                <div className="flex gap-4">
                    <Avatar>
                        <AvatarImage src={post.authorAvatarUrl} alt={post.authorName} />
                        <AvatarFallback>{post.authorName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-2">
                                <p className="font-semibold">{post.authorName}</p>
                                <p className="text-xs text-muted-foreground">
                                    {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
                                </p>
                            </div>
                             <div className="flex items-center gap-2">
                                {reactions.mentorApproved && reactions.mentorApproved.length > 0 && (
                                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                                        <ShieldCheck className="w-3 h-3 mr-1.5"/> Mentor's Choice
                                    </Badge>
                                )}
                                {post.isPinned && <Pin className="w-4 h-4 text-primary" />}
                            </div>
                        </div>
                        {quizData ? (
                            <MiniQuiz {...quizData} />
                        ) : (
                             <div className="text-muted-foreground whitespace-pre-wrap mt-2 prose dark:prose-invert max-w-none">
                               <MarkdownRenderer>{post.content}</MarkdownRenderer>
                             </div>
                        )}
                       
                    </div>
                </div>

                <div className="mt-3 flex items-center justify-between">
                     <div className="flex items-center gap-2">
                         {reactions.madeMeSmile?.length > 0 && <Badge variant="secondary" className="gap-1.5"><Smile className="w-3 h-3 text-yellow-500"/> {reactions.madeMeSmile.length}</Badge>}
                         {reactions.helpful?.length > 0 && <Badge variant="secondary" className="gap-1.5"><Lightbulb className="w-3 h-3 text-green-500"/> {reactions.helpful.length}</Badge>}
                         {reactions.interesting?.length > 0 && <Badge variant="secondary" className="gap-1.5"><Brain className="w-3 h-3 text-blue-500"/> {reactions.interesting.length}</Badge>}
                     </div>
                     <Button variant="ghost" size="sm" onClick={() => setShowComments(!showComments)}>
                        <MessageCircle className="mr-2 h-4 w-4" />
                        {post.comments.length} Comment{post.comments.length !== 1 && 's'}
                    </Button>
                </div>

                <Separator className="my-3" />
                <div className="flex items-center gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                             <Button variant="outline" size="sm">
                                {userReactions.length > 0 ? (
                                    <div className="flex items-center gap-1.5">
                                        {reactionIcons[userReactions[0]]}
                                        <span className="capitalize">{userReactions[0].replace(/([A-Z])/g, ' $1').trim()}</span>
                                    </div>
                                ) : (
                                    'React'
                                )}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem onClick={() => handleReaction('madeMeSmile')}>
                                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                                    <Smile className="mr-2 h-4 w-4 text-yellow-500" />
                                </motion.div>
                                Made me smile
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleReaction('helpful')}>
                               <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                                    <Lightbulb className="mr-2 h-4 w-4 text-green-500" />
                               </motion.div>
                                Helpful
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleReaction('interesting')}>
                                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                                    <Brain className="mr-2 h-4 w-4 text-blue-500" />
                                </motion.div>
                                Interesting
                            </DropdownMenuItem>
                             <DropdownMenuItem onClick={() => handleReaction('mentorApproved')}>
                                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                                    <ShieldCheck className="mr-2 h-4 w-4 text-primary" />
                                </motion.div>
                                Mark as Mentor's Choice
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                
                {showComments && (
                    <div className="mt-4 space-y-4">
                        {post.comments.sort((a,b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()).map(comment => (
                            <CommentCard key={comment.id} comment={comment} />
                        ))}
                        <div className="flex gap-3">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src={mockUser.avatarUrl} alt={mockUser.name} />
                                <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <Textarea 
                                    placeholder="Write a comment..." 
                                    className="text-sm"
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    disabled={isSubmittingComment}
                                />
                                <Button size="sm" className="mt-2" onClick={handleCommentSubmit} disabled={isSubmittingComment || !newComment.trim()}>
                                    {isSubmittingComment && <Loader2 className="mr-2 h-4 w-4 animate-spin"/>}
                                    Post Comment
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}

function MentorAnnouncements({ events }: { events?: string[] }) {
    if (!events || events.length === 0) return null;

    return (
        <Alert variant="info" className="bg-primary/10 border-primary/30">
            <Megaphone className="h-4 w-4 text-primary" />
            <AlertTitle className="font-bold text-primary">Mentor Announcements</AlertTitle>
            <AlertDescription>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    {events.map((event, i) => <li key={i}>{event}</li>)}
                </ul>
            </AlertDescription>
        </Alert>
    );
}


interface CircleDetailsClientPageProps {
  circle: CompanionCircle;
  initialMembers: User[];
  initialPosts: CirclePost[];
}

export default function CircleDetailsClientPage({ circle, initialMembers, initialPosts }: CircleDetailsClientPageProps) {
  const [members, setMembers] = useState<User[]>(initialMembers);
  const [posts, setPosts] = useState<CirclePost[]>(initialPosts);
  const [newPostContent, setNewPostContent] = useState('');
  const [isPosting, setIsPosting] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const [isUpdatingMembership, setIsUpdatingMembership] = useState(false);
  const [showWelcomeWizard, setShowWelcomeWizard] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    setIsMember(circle.members.some(m => m.id === mockUser.id));
  }, [circle.members]);

  const fetchPosts = useCallback(async () => {
      try {
          const postData = await getPostsForCircle(circle.id);
          setPosts(postData);
      } catch (error) {
          console.error("Failed to fetch posts:", error);
          toast({ variant: 'destructive', title: 'Error', description: 'Could not load posts.' });
      }
  }, [circle.id, toast]);


  const handleJoinLeave = async () => {
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
              const userToAdd: Partial<User> = { id: mockUser.id, name: mockUser.name, avatarUrl: mockUser.avatarUrl };
              setMembers(prev => [...prev, userToAdd as User]);
              toast({ title: 'Welcome!', description: `You have joined "${circle.name}".` });
              setShowWelcomeWizard(true); // Trigger the welcome wizard
          }
      } catch (error) {
          console.error("Failed to update membership:", error);
          toast({ variant: 'destructive', title: 'Error', description: 'Could not update membership. Please try again.' });
      } finally {
          setIsUpdatingMembership(false);
      }
  }

  const handlePostSubmit = async () => {
      if (!newPostContent.trim()) return;
      setIsPosting(true);
      try {
          await addPostToCircle(circle.id, newPostContent);
          setNewPostContent('');
          toast({ title: 'Success', description: 'Your post has been added.' });
          await fetchPosts();
      } catch (error) {
          console.error("Failed to add post:", error);
          toast({ variant: 'destructive', title: 'Error', description: 'Could not add your post. Please try again.' });
      } finally {
          setIsPosting(false);
      }
  }

  return (
    <Dialog open={showWelcomeWizard} onOpenChange={setShowWelcomeWizard}>
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
                    <Badge variant="outline">{circle.format}</Badge>
                </div>
            </div>
        </div>
      </header>

      {circle.type === 'Mentor-led' && <MentorAnnouncements events={circle.upcomingEvents} />}

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
            {circle.type === 'Mentor-led' && <LessonPlanTimeline lessonPlan={circle.lessonPlan} />}
            <Card>
                <CardHeader>
                    <CardTitle>Post Something</CardTitle>
                </CardHeader>
                <CardContent>
                    <Textarea 
                      placeholder="Share a question or an insight with the group... To create a quiz post, start with [quiz] and then on separate lines: Question, Option A, Option B, Option C, Option D, Correct Option, Explanation" 
                      value={newPostContent}
                      onChange={(e) => setNewPostContent(e.target.value)}
                      disabled={!isMember || isPosting}
                      className="min-h-[120px]"
                    />
                    <Button className="mt-2" onClick={handlePostSubmit} disabled={!isMember || isPosting || !newPostContent.trim()}>
                        {isPosting && <Loader2 className="mr-2 animate-spin" />}
                        Post
                    </Button>
                    {!isMember && <p className="text-xs text-destructive mt-2">You must be a member to post.</p>}
                </CardContent>
            </Card>
            <div className="space-y-4">
                <h3 className="font-bold text-lg">Discussion Feed</h3>
                {posts.length > 0 ? (
                    posts.map(post => <PostCard key={post.id} post={post} circleId={circle.id} onUpdate={fetchPosts} />)
                ) : (
                    <Card>
                        <CardContent className="text-center text-muted-foreground p-12">
                            <MessageSquare className="w-12 h-12 mx-auto mb-4" />
                            <p>No posts yet. Be the first to start a conversation!</p>
                        </CardContent>
                    </Card>
                )}
            </div>
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
            
            <StudyBuddyFinder />

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
    {circle && (
        <DialogContent>
            <DialogHeader className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                    <PartyPopper className="w-8 h-8 text-green-500" />
                </div>
                <DialogTitle className="text-2xl">Welcome to {circle.name}!</DialogTitle>
                <DialogDescription>
                    We're excited to have you. Here are a few things to get you started.
                </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
                <div>
                    <h4 className="font-semibold flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary"/> Group Norms</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1 pl-4">
                        {circle.groupNorms?.map((norm, i) => <li key={i}>{norm}</li>)}
                    </ul>
                </div>
                 <div>
                    <h4 className="font-semibold flex items-center gap-2"><Calendar className="w-4 h-4 text-primary"/> Upcoming Events</h4>
                     {circle.upcomingEvents && circle.upcomingEvents.length > 0 ? (
                        <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1 pl-4">
                            {circle.upcomingEvents.map((event, i) => <li key={i}>{event}</li>)}
                        </ul>
                     ): (
                        <p className="text-sm text-muted-foreground mt-2 pl-4">No upcoming events scheduled yet. Stay tuned!</p>
                     )}
                </div>
                <Button className="w-full" onClick={() => setShowWelcomeWizard(false)}>
                    Got it, thanks!
                </Button>
            </div>
        </DialogContent>
    )}
    </Dialog>
  );
}
