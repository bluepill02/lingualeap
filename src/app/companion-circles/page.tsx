
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Users, Search, BookOpen, BarChart, Languages, ChevronRight, MessageSquare, Star, Video, TrendingUp, Atom, FlaskConical, Sigma, Briefcase } from 'lucide-react';
import { companionCircles } from '@/lib/data';
import type { CompanionCircle as CompanionCircleType } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

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


function CircleCard({ circle }: { circle: CompanionCircleType }) {
    const mentor = circle.members[0]; // Assuming the first member is the mentor for simplicity

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
                            <span>{circle.memberCount}/40</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Video className="w-4 h-4" />
                            <span>1 live</span>
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
                 <div className="bg-muted/50 p-3 rounded-lg flex items-center gap-3">
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
                 </div>
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
                 <Button variant="secondary" className="w-full">
                    <Users className="w-4 h-4 mr-2"/>
                    Join
                </Button>
                <Button variant="outline" className="w-full">
                    Preview
                </Button>
            </CardFooter>
        </Card>
    )
}


export default function CompanionCirclesPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({
        subject: 'all',
        level: 'all',
        language: 'all',
    });
    const [activeTab, setActiveTab] = useState('active_now');

    const filteredCircles = companionCircles.filter(circle => {
        const matchesSearch = circle.name.toLowerCase().includes(searchQuery.toLowerCase()) || circle.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesSubject = filters.subject === 'all' || circle.subject.toLowerCase() === filters.subject;
        const matchesLevel = filters.level === 'all' || circle.difficulty.toLowerCase() === filters.level;
        const matchesLanguage = filters.language === 'all' || circle.language.toLowerCase() === filters.language;
        return matchesSearch && matchesSubject && matchesLevel && matchesLanguage;
    });

    return (
        <div className="container mx-auto space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {stats.map(stat => (
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                                <SelectValue placeholder="All Levels" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Levels</SelectItem>
                                <SelectItem value="foundation">Foundation</SelectItem>
                                <SelectItem value="bridge">Bridge</SelectItem>
                                <SelectItem value="core">Core</SelectItem>
                            </SelectContent>
                        </Select>
                         <Select onValueChange={value => setFilters(f => ({...f, language: value}))} defaultValue="all">
                            <SelectTrigger>
                                <SelectValue placeholder="All Languages" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Languages</SelectItem>
                                <SelectItem value="english">English</SelectItem>
                                <SelectItem value="tamil">Tamil</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                     <div className="flex items-center gap-2 border-b border-border pb-2">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCircles.map(circle => (
                    <CircleCard key={circle.id} circle={circle} />
                ))}
            </div>

            {filteredCircles.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                    <Users className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg">No circles found</h3>
                    <p>Try adjusting your search or filters to find your community.</p>
                </div>
            )}
             <footer className="text-center text-muted-foreground text-sm py-4">
                Connect • Learn • Grow together in Companion Circles
                <p className="text-primary/80">தோழர் வட்டங்களில் இணைந்து • கற்று • வளருங்கள்</p>
            </footer>
        </div>
    );
}
