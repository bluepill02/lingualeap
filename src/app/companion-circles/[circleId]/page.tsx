
'use server';

import { getCircleWithMembers, getPostsForCircle } from '@/services/circles';
import { notFound } from 'next/navigation';
import CircleDetailsClientPage from './client-page';
import { CompanionCircle } from '@/lib/types';


async function CircleDetailsPage({ params }: { params: { circleId: string } }) {
  const circleDetails = await getCircleWithMembers(params.circleId);
  
  if (!circleDetails) {
    notFound();
  }

  // Fetch initial posts on the server
  const postData = await getPostsForCircle(circleDetails.circle.id);

  return (
    <CircleDetailsClientPage
      initialCircle={circleDetails.circle}
      initialMembers={circleDetails.members}
      initialPosts={postData}
    />
  );
}
export default CircleDetailsPage;


    