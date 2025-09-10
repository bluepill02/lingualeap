
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-3xl py-12 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold font-headline">Terms of Service</CardTitle>
          <CardDescription>Last updated: {new Date().toLocaleDateString()}</CardDescription>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
            <p>
                Welcome to LinguaLeap! These are placeholder terms and conditions for using our application. In a production environment, this page would contain a legally binding agreement.
            </p>
            <h2>1. Acceptance of Terms</h2>
            <p>
                By accessing or using our application, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service. This is a demonstration application, and these terms are not legally binding.
            </p>
            <h2>2. User Accounts</h2>
            <p>
                When you create an account with us, you must provide information that is accurate and complete. You are responsible for safeguarding the password that you use to access the Service.
            </p>
            <h2>3. User-Generated Content</h2>
            <p>
                Our Service allows you to post content ("User Content"). You are responsible for the User Content that you post to the Service, including its legality, reliability, and appropriateness. For this demo, all content is considered public and non-confidential.
            </p>
            <h2>4. Termination</h2>
            <p>
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <h2>5. Limitation of Liability</h2>
            <p>
                Since this is a demo application, it is provided "as is" without any warranties. In no event shall LinguaLeap or its creators be liable for any claim, damages, or other liability.
            </p>
            <p className="text-center mt-8">
                <Link href="/dashboard" className="text-primary hover:underline">
                    &larr; Back to Dashboard
                </Link>
            </p>
        </CardContent>
      </Card>
    </div>
  );
}
