
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-3xl py-12 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold font-headline">Privacy Policy</CardTitle>
          <CardDescription>Last updated: {new Date().toLocaleDateString()}</CardDescription>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
            <p>
                This is a placeholder privacy policy for the LinguaLeap application. In a real-world scenario, this page would contain detailed information about the data we collect, how we use it, and your rights regarding your personal information.
            </p>
            <h2>1. Information We Collect</h2>
            <p>
                This section would detail the types of data collected, such as:
            </p>
            <ul>
                <li><strong>Personal Information:</strong> Name, email address, etc., provided during sign-up.</li>
                <li><strong>Usage Data:</strong> Information on how you interact with the app, such as lessons completed, quiz scores, and feature usage.</li>
                <li><strong>User-Generated Content:</strong> Posts in companion circles, mission submissions, and other content you create.</li>
            </ul>
            <h2>2. How We Use Your Information</h2>
            <p>
                This section would explain the purposes for data collection, such as:
            </p>
            <ul>
                <li>To provide and maintain our service.</li>
                <li>To personalize your learning experience.</li>
                <li>To improve our application and develop new features.</li>
                <li>To communicate with you about your account or our services.</li>
            </ul>
            <h2>3. Data Sharing and Disclosure</h2>
            <p>
                This section would describe the circumstances under which your data might be shared with third parties. For this demo application, no data is shared.
            </p>
            <h2>4. Contact Us</h2>
            <p>
                If you have any questions about this placeholder Privacy Policy, you can contact us at: <a href="mailto:privacy@example.com">privacy@example.com</a>.
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
