
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Users, Search, BookOpen, BarChart, Languages, ChevronRight, MessageSquare, Star } from 'lucide-react';
import { companionCircles } from '@/lib/data';
import type { CompanionCircle as CompanionCircleType } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

function CircleCard({ circle }: { circle: CompanionCircleType }) {
    return (
        <Card className="flex flex-col h-full hover:border-primary transition-all duration-300 hover:shadow-lg">
            <CardHeader>
                <div className="flex justify-between items-start">
                    <CardTitle className="font-headline text-lg">{circle.name}</CardTitle>
                    <Badge variant={circle.type === 'Mentor-led' ? 'warning' : 'secondary'}>{circle.type}</Badge>
                </div>
                <CardDescription>{circle.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
                <div className="flex items-center text-sm text-muted-foreground gap-4">
                    <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4" />
                        <span>{circle.memberCount} members</span>
                    </div>
                     <div className="flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4" />
                        <span>{circle.subject}</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="text-xs font-semibold">Members:</span>
                    <div className="flex -space-x-2 overflow-hidden">
                        {circle.members.slice(0, 5).map(member => (
                            <Avatar key={member.id} className="h-6 w-6 border-2 border-background">
                                <AvatarImage src={member.avatarUrl} alt={member.name} />
                                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                        ))}
                         {circle.members.length > 5 && (
                            <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs">
                                +{circle.members.length - 5}
                            </div>
                         )}
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                 <Button className="w-full">
                    View Circle
                    <ChevronRight className="w-4 h-4 ml-2"/>
                </Button>
            </CardFooter>
        </Card>
    )
}


export default function CompanionCirclesPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({
        subject: 'all',
        difficulty: 'all',
        language: 'all',
    });
    const [sortBy, setSortBy] = useState('active_now');

    const filteredCircles = companionCircles.filter(circle => {
        const matchesSearch = circle.name.toLowerCase().includes(searchQuery.toLowerCase()) || circle.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesSubject = filters.subject === 'all' || circle.subject.toLowerCase() === filters.subject;
        const matchesDifficulty = filters.difficulty === 'all' || circle.difficulty.toLowerCase() === filters.difficulty;
        const matchesLanguage = filters.language === 'all' || circle.language.toLowerCase() === filters.language;
        return matchesSearch && matchesSubject && matchesDifficulty && matchesLanguage;
    });
    
    // Sorting logic would go here based on `sortBy` state

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold font-headline">Companion Circles</h1>
                <p className="text-muted-foreground">
                    Find your tribe. Learn together, grow together.
                </p>
            </div>

            <Card>
                <CardContent className="p-4 space-y-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input 
                            placeholder="Search for circles by name or topic..." 
                            className="pl-10"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <Select onValueChange={value => setFilters(f => ({...f, subject: value}))}>
                            <SelectTrigger>
                                <SelectValue placeholder="Filter by Subject" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Subjects</SelectItem>
                                <SelectItem value="physics">Physics</SelectItem>
                                <SelectItem value="chemistry">Chemistry</SelectItem>
                                <SelectItem value="biology">Biology</SelectItem>
                            </SelectContent>
                        </Select>
                         <Select onValueChange={value => setFilters(f => ({...f, difficulty: value}))}>
                            <SelectTrigger>
                                <SelectValue placeholder="Filter by Difficulty" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Difficulties</SelectItem>
                                <SelectItem value="foundation">Foundation</SelectItem>
                                <SelectItem value="bridge">Bridge</SelectItem>
                                <SelectItem value="core">Core</SelectItem>
                            </SelectContent>
                        </Select>
                         <Select onValueChange={value => setFilters(f => ({...f, language: value}))}>
                            <SelectTrigger>
                                <SelectValue placeholder="Filter by Language" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Languages</SelectItem>
                                <SelectItem value="english">English</SelectItem>
                                <SelectItem value="tamil">Tamil</SelectItem>
                            </SelectContent>
                        </Select>
                         <Select onValueChange={setSortBy} defaultValue={sortBy}>
                            <SelectTrigger>
                                <SelectValue placeholder="Sort by" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="active_now">Active Now</SelectItem>
                                <SelectItem value="new_posts">New Posts</SelectItem>
                                <SelectItem value="upcoming_session">Upcoming Session</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
            </Card>

            <div className="responsive-card-grid">
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
        </div>
    );
}

