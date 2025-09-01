import { WelcomeCard } from '@/components/dashboard/welcome-card';
import { StreakCard } from '@/components/dashboard/streak-card';
import { ReviewCard } from '@/components/dashboard/review-card';
import { ResumeCard } from '@/components/dashboard/resume-card';
import { LessonCarousel } from '@/components/dashboard/lesson-carousel';
import { lessons } from '@/lib/data';

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <WelcomeCard />
        <StreakCard />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <ReviewCard />
        <ResumeCard />
      </div>
      <div>
        <h2 className="mb-4 text-2xl font-bold font-headline">Your Next Lessons</h2>
        <LessonCarousel lessons={lessons} />
      </div>
    </div>
  );
}
