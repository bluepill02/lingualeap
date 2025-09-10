
'use server';

import { getCircle, getCircleMembers, getPostsForCircle } from '@/services/circles';
import { notFound } from 'next/navigation';
import CircleDetailsClientPage from './client-page';
import { CompanionCircle } from '@/lib/types';


async function CircleDetailsPage({ params }: { params: { circleId: string } }) {
  const circleData = await getCircle(params.circleId);
  
  if (!circleData) {
    notFound();
  }

  // Fetch initial data on the server
  const memberIds = circleData.members.map(m => typeof m === 'string' ? m : m.id);
  const memberData = await getCircleMembers(memberIds);
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
