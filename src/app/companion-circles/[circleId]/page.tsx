
'use server';

import { getCircle, getCircleMembers, getPostsForCircle } from '@/services/circles';
import { notFound } from 'next/navigation';
import CircleDetailsClientPage from './client-page';
import { CompanionCircle } from '@/lib/types';
import { a } from '@react-spring/web';

async function CircleDetailsPage({ params }: { params: { circleId: string } }) {
  const circleData = await getCircle(params.circleId);
  
  if (!circleData) {
    notFound();
  }

  // Fetch initial data on the server
  const memberData = await getCircleMembers(circleData.members.map(m => m.id));
  const postData = await getPostsForCircle(circleData.id);

  return (
    <CircleDetailsClientPage
      circle={circleData}
      initialMembers={memberData}
      initialPosts={postData}
    />
  );
}
export default CircleDetailsPage;
