
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Users, Search, BookOpen, BarChart, Languages, ChevronRight, MessageSquare, Star, Video, TrendingUp, Atom, FlaskConical, Sigma, Briefcase, Loader2, UserPlus, MessageCircle, BookCopy, Share2, Calendar, Shield, Info, PlusCircle } from 'lucide-react';
import type { CompanionCircle as CompanionCircleType, User } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { getCircles, getCircleMembers } from '@/services/circles';
import Link from 'next/link';
import { mockUser } from '@/lib/data';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { CreateCircleForm } from '@/components/circles/create-circle-form';

const stats = [
    { title: 'My Circles', value: 0, subtitle: 'என் வட்டங்கள்' },
    { title: 'Mentor-Led', value: 2, subtitle: 'வழிகாட்டியுடன்' },
    { title: 'Active Now', value: 2, subtitle: 'இப்போது செயலில்' },
    { title: 'Live Sessions', value: 2, subtitle: 'நேரலை அமர்வுகள்' },
]

const getSubjectIcon = (subject: string) => {
    switch (subject.toLowerCase()) {
        case 'physics':
            return <Atom className="w-6 h-6 text-primary" />;
        case 'chemistry':
            return <FlaskConical className="w-6 h-6 text-primary" />;
        case 'calculus':
             return <Sigma className="w-6 h-6 text-primary" />;
        default:
            return <Briefcase className="w-6 h-6 text-primary" />;
    }
}


function CircleCard({ circle, onPreview }: { circle: CompanionCircleType, onPreview: (circle: CompanionCircleType) => void; }) {
    const [mentor, setMentor] = useState<User | null>(null);

    useEffect(() => {
        async function fetchMentor() {
            if (circle.type === 'Mentor-led' && circle.members.length > 0) {
                const members = await getCircleMembers([circle.members[0].id]);
                if (members.length > 0) {
                    setMentor(members[0]);
                }
            }
        }
        fetchMentor();
    }, [circle]);

    return (
        <Card className="flex flex-col h-full hover:border-primary transition-all duration-300 hover:shadow-lg bg-card/50">
            <CardHeader>
                <div className="flex justify-between items-start mb-2">
                    <Badge variant={circle.type === 'Mentor-led' ? 'warning' : 'secondary'} className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        {circle.type}
                    </Badge>
                     <div className="text-right text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>{circle.members.length}/{circle.memberCount}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Video className="w-4 h-4" />
                            <span>{circle.upcomingEvents?.length || 0} live</span>
                        </div>
                    </div>
                </div>
                 <div className="flex items-center gap-3">
                    {getSubjectIcon(circle.subject)}
                    <div>
                        <CardTitle className="font-headline text-lg">{circle.name}</CardTitle>
                        <CardDescription className="text-primary/80">{circle.nameTamil}</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
                 <p className="text-sm text-muted-foreground">{circle.description}</p>
                 {mentor && <div className="bg-muted/50 p-3 rounded-lg flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={mentor.avatarUrl} alt={mentor.name} />
                        <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold text-sm">{mentor.name}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                            <span>4.7</span>
                            <span>•</span>
                            <span>&lt; 3 hours</span>
                        </div>
                    </div>
                 </div>}
                 <div className="grid grid-cols-3 text-center pt-2">
                     <div>
                        <p className="font-bold text-lg">{circle.posts || 0}</p>
                        <p className="text-xs text-muted-foreground">Posts</p>
                     </div>
                      <div>
                        <p className="font-bold text-lg">{circle.resources || 0}</p>
                        <p className="text-xs text-muted-foreground">Resources</p>
                     </div>
                      <div>
                        <p className="font-bold text-lg">Multi</p>
                        <p className="text-xs text-muted-foreground">Language</p>
                     </div>
                 </div>
            </CardContent>
            <CardFooter className="grid grid-cols-2 gap-2">
                 <Button asChild variant="secondary" className="w-full">
                    <Link href={`/companion-circles/${circle.id}`}>
                        <Users className="w-4 h-4 mr-2"/>
                        View
                    </Link>
                </Button>
                <Button onClick={() => onPreview(circle)} variant="outline" className="w-full">
                    Preview
                </Button>
            </CardFooter>
        </Card>
    )
}


export default function CompanionCirclesPage() {
    const [allCircles, setAllCircles] = useState<CompanionCircleType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({
        subject: 'all',
        level: 'all',
        format: 'all',
        type: 'all',
    });
    const [activeTab, setActiveTab] = useState('active_now');
    const [selectedCircle, setSelectedCircle] = useState<CompanionCircleType | null>(null);
    const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

    const fetchCircles = async () => {
        setIsLoading(true);
        try {
            const circles = await getCircles();
            setAllCircles(circles);
        } catch (error) {
            console.error("Failed to fetch circles:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCircles();
    }, []);

    const filteredCircles = allCircles.filter(circle => {
        const matchesSearch = circle.name.toLowerCase().includes(searchQuery.toLowerCase()) || circle.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesSubject = filters.subject === 'all' || circle.subject.toLowerCase() === filters.subject;
        const matchesLevel = filters.level === 'all' || circle.difficulty.toLowerCase() === filters.level;
        const matchesFormat = filters.format === 'all' || circle.format.toLowerCase().replace(' ', '-') === filters.format;
        const matchesType = filters.type === 'all' || circle.type === filters.type;
        
        let matchesTab = true;
        if (activeTab === 'live_sessions') {
            matchesTab = circle.upcomingEvents?.some(event => event.toLowerCase().includes('live')) || false;
        } else if (activeTab === 'new_posts') {
            matchesTab = (circle.posts || 0) > 20;
        } else if (activeTab === 'active_now') {
            matchesTab = circle.members.length > 2;
        }

        return matchesSearch && matchesSubject && matchesLevel && matchesFormat && matchesType && matchesTab;
    });

    const myCirclesCount = allCircles.filter(c => c.members.some(m => m.id === mockUser.id)).length;
    
    const dynamicStats = [
        { ...stats[0], value: myCirclesCount },
        ...stats.slice(1)
    ];


    return (
        <div className="container mx-auto space-y-8">
             <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold font-headline">Companion Circles</h1>
                    <p className="text-muted-foreground">Find your study community</p>
                </div>
                <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                    <DialogTrigger asChild>
                        <Button>
                            <PlusCircle className="mr-2" />
                            Create Circle
                        </Button>
                    </DialogTrigger>
                    <CreateCircleForm 
                        onCircleCreated={() => {
                            fetchCircles();
                            setIsCreateDialogOpen(false);
                        }} 
                    />
                </Dialog>
            </div>


            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {dynamicStats.map(stat => (
                    <Card key={stat.title}>
                        <CardContent className="p-4">
                            <p className="text-3xl font-bold text-primary">{stat.value}</p>
                            <p className="text-sm font-semibold">{stat.title}</p>
                            <p className="text-xs text-muted-foreground">{stat.subtitle}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card>
                <CardContent className="p-4 space-y-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input 
                            placeholder="Search circles, subjects, or topics..." 
                            className="pl-10 h-12 text-base"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Select onValueChange={value => setFilters(f => ({...f, subject: value}))} defaultValue="all">
                            <SelectTrigger>
                                <SelectValue placeholder="All Subjects" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Subjects</SelectItem>
                                <SelectItem value="physics">Physics</SelectItem>
                                <SelectItem value="chemistry">Chemistry</SelectItem>
                                <SelectItem value="biology">Biology</SelectItem>
                                <SelectItem value="calculus">Calculus</SelectItem>
                            </SelectContent>
                        </Select>
                         <Select onValueChange={value => setFilters(f => ({...f, level: value}))} defaultValue="all">
                            <SelectTrigger>
                                <SelectValue placeholder="All Difficulties" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Difficulties</SelectItem>
                                <SelectItem value="foundation">Foundation</SelectItem>
                                <SelectItem value="bridge">Bridge</SelectItem>
                                <SelectItem value="core">Core</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select onValueChange={value => setFilters(f => ({...f, format: value}))} defaultValue="all">
                            <SelectTrigger>
                                <SelectValue placeholder="All Formats" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Formats</SelectItem>
                                <SelectItem value="chat">Chat</SelectItem>
                                <SelectItem value="live-session">Live Session</SelectItem>
                                <SelectItem value="resource-hub">Resource Hub</SelectItem>
                            </SelectContent>
                        </Select>
                         <Select onValueChange={value => setFilters(f => ({...f, type: value}))} defaultValue="all">
                            <SelectTrigger>
                                <SelectValue placeholder="All Types" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Types</SelectItem>
                                <SelectItem value="Mentor-led">Mentor-led</SelectItem>
                                <SelectItem value="Peer Study">Peer Study</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                     <div className="flex items-center gap-2 border-b border-border pb-2 overflow-x-auto">
                        <Button variant={activeTab === 'active_now' ? 'secondary' : 'ghost'} onClick={() => setActiveTab('active_now')}>
                            <Users className="mr-2"/> Active Now
                        </Button>
                         <Button variant={activeTab === 'live_sessions' ? 'secondary' : 'ghost'} onClick={() => setActiveTab('live_sessions')}>
                            <Video className="mr-2"/> Live Sessions
                        </Button>
                         <Button variant={activeTab === 'new_posts' ? 'secondary' : 'ghost'} onClick={() => setActiveTab('new_posts')}>
                            <TrendingUp className="mr-2"/> New Posts
                        </Button>
                    </div>
                </CardContent>
            </Card>

             {isLoading ? (
                <div className="text-center py-12">
                    <Loader2 className="w-12 h-12 mx-auto animate-spin text-primary" />
                    <h3 className="font-semibold text-lg mt-4">Loading Circles...</h3>
                    <p className="text-muted-foreground">Finding your communities.</p>
                </div>
            ) : (
                <Dialog open={!!selectedCircle} onOpenChange={(isOpen) => !isOpen && setSelectedCircle(null)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCircles.map(circle => (
                            <CircleCard key={circle.id} circle={circle} onPreview={setSelectedCircle} />
                        ))}
                    </div>
                    {selectedCircle && (
                         <DialogContent className="max-w-md">
                            <DialogHeader>
                                <div className="flex items-center gap-4 mb-4">
                                     <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-primary/20 text-primary">
                                        {getSubjectIcon(selectedCircle.subject)}
                                    </div>
                                    <div>
                                        <DialogTitle className="text-xl">{selectedCircle.name}</DialogTitle>
                                        <DialogDescription>{selectedCircle.description}</DialogDescription>
                                    </div>
                                </div>
                            </DialogHeader>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold flex items-center gap-2"><Shield className="w-4 h-4"/> Group Norms</h4>
                                    <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                                        {selectedCircle.groupNorms?.map((norm, i) => <li key={i}>{norm}</li>)}
                                    </ul>
                                </div>
                                 <div>
                                    <h4 className="font-semibold flex items-center gap-2"><Calendar className="w-4 h-4"/> Upcoming Events</h4>
                                    <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                                         {selectedCircle.upcomingEvents?.map((event, i) => <li key={i}>{event}</li>)}
                                    </ul>
                                </div>
                                <Button className="w-full" asChild>
                                    <Link href={`/companion-circles/${selectedCircle.id}`}>
                                        <UserPlus className="mr-2"/> Join this Circle
                                    </Link>
                                </Button>
                            </div>
                        </DialogContent>
                    )}
                </Dialog>
            )}
             <footer className="text-center text-muted-foreground text-sm py-4">
                Connect • Learn • Grow together in Companion Circles
                <p className="text-primary/80">தோழர் வட்டங்களில் இணைந்து • கற்று • வளருங்கள்</p>
            </footer>
        </div>
    );
}
