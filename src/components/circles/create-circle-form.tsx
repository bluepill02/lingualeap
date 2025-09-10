
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { createCircle } from '@/services/circles';
import { Loader2 } from 'lucide-react';
import { Auth } from 'firebase/auth';

const createCircleSchema = z.object({
  name: z.string().min(5, 'Name must be at least 5 characters.'),
  nameTamil: z.string().min(5, 'Tamil name must be at least 5 characters.'),
  description: z.string().min(10, 'Description must be at least 10 characters.'),
  subject: z.string({ required_error: 'Please select a subject.' }),
  difficulty: z.enum(['Foundation', 'Bridge', 'Core']),
  type: z.enum(['Mentor-led', 'Peer Study']),
  format: z.enum(['Chat', 'Live Session', 'Resource Hub']),
  language: z.enum(['English', 'Tamil', 'Multi Language']),
});

type CreateCircleValues = z.infer<typeof createCircleSchema>;

interface CreateCircleFormProps {
  onCircleCreated: () => void;
  auth: Auth;
}

export function CreateCircleForm({ onCircleCreated, auth }: CreateCircleFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm<CreateCircleValues>({
    resolver: zodResolver(createCircleSchema),
    defaultValues: {
      name: '',
      nameTamil: '',
      description: '',
    },
  });

  async function onSubmit(data: CreateCircleValues) {
    if (!auth.currentUser) {
        toast({ variant: 'destructive', title: 'Error', description: 'You must be logged in to create a circle.' });
        return;
    }
    setIsLoading(true);
    try {
      await createCircle(data, auth.currentUser.uid, auth.currentUser.displayName || 'Anonymous');
      toast({
        title: 'Circle Created!',
        description: `Your new circle "${data.name}" is now live.`,
      });
      onCircleCreated();
    } catch (error) {
      console.error('Failed to create circle:', error);
      toast({
        variant: 'destructive',
        title: 'Creation Failed',
        description: 'Could not create the circle. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <DialogContent className="sm:max-w-xl">
      <DialogHeader>
        <DialogTitle>Create a New Companion Circle</DialogTitle>
        <DialogDescription>
          Fill in the details to launch your new study community.
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Circle Name (English)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., NEET Physics Problem Solvers" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nameTamil"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Circle Name (Tamil)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., நீட் இயற்பியல் சிக்கல் தீர்ப்பவர்கள்" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="A short description of your circle's purpose." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger><SelectValue placeholder="Select a subject" /></SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Physics">Physics</SelectItem>
                      <SelectItem value="Chemistry">Chemistry</SelectItem>
                      <SelectItem value="Biology">Biology</SelectItem>
                      <SelectItem value="Calculus">Calculus</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="difficulty"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Difficulty</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger><SelectValue placeholder="Select a level" /></SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Foundation">Foundation</SelectItem>
                      <SelectItem value="Bridge">Bridge</SelectItem>
                      <SelectItem value="Core">Core</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger><SelectValue placeholder="Select a type" /></SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Mentor-led">Mentor-led</SelectItem>
                      <SelectItem value="Peer Study">Peer Study</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="format"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Format</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger><SelectValue placeholder="Select a format" /></SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Chat">Chat</SelectItem>
                      <SelectItem value="Live Session">Live Session</SelectItem>
                      <SelectItem value="Resource Hub">Resource Hub</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="language"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Primary Language</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger><SelectValue placeholder="Select a language" /></SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Tamil">Tamil</SelectItem>
                    <SelectItem value="Multi Language">Multi Language</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? <Loader2 className="mr-2 animate-spin" /> : null}
              Create Circle
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
}

    