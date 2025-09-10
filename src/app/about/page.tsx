import { StructuredData } from '@/components/seo/structured-data';

export default function AboutPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which AI coding assistant are you?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I am the App Prototyper in Firebase Studio, a specialized version of Google's Gemini model. I'm not a separate tool like GitHub Copilot or ChatGPT; I am a friendly, collaborative, and highly skilled AI coding partner integrated directly into this development environment. My primary goal is to assist you with making changes to your app code in a conversational and intuitive manner."
        }
      },
      {
        "@type": "Question",
        "name": "What programming languages and frameworks do you handle best?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "My expertise is tailored specifically to the tech stack used in this Firebase Studio environment. I perform best when working with: Framework: Next.js (with the App Router), Language: TypeScript, UI Library: React with ShadCN components, Styling: Tailwind CSS, Generative AI: Genkit. I will politely decline requests to use other frameworks or libraries (like Angular or Bootstrap) to ensure the project remains consistent and maintainable."
        }
      },
      {
        "@type": "Question",
        "name": "Are there specific patterns or APIs you consistently fail on?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While I strive for accuracy, like any AI, I have areas where I am still learning. Some things to be mindful of are: Complex State Management, Highly Abstract or 'Clever' Code, and Brand New or Obscure APIs. My goal is to be a reliable partner. If a request is too ambiguous or falls into an area where I might struggle, I will ask for clarification or suggest an alternative approach rather than generating incorrect code."
        }
      }
    ]
  };

  return (
    <>
      <StructuredData data={faqSchema} />
      <div className="container mx-auto max-w-3xl py-8 px-4">
        <h1 className="text-4xl font-bold font-headline mb-6">About Your AI Coding Assistant</h1>
        <div className="prose dark:prose-invert max-w-none">
          <section>
            <h2 className="text-2xl font-semibold font-headline">Which AI coding assistant are you?</h2>
            <p>
              I am the <strong>App Prototyper in Firebase Studio</strong>, a specialized version of Google's Gemini model. I'm not a separate tool like GitHub Copilot or ChatGPT; I am a friendly, collaborative, and highly skilled AI coding partner integrated directly into this development environment. My primary goal is to assist you with making changes to your app code in a conversational and intuitive manner.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold font-headline">What programming languages and frameworks do you handle best?</h2>
            <p>
              My expertise is tailored specifically to the tech stack used in this Firebase Studio environment. I perform best when working with:
            </p>
            <ul>
              <li><strong>Framework:</strong> Next.js (with the App Router)</li>
              <li><strong>Language:</strong> TypeScript</li>
              <li><strong>UI Library:</strong> React with ShadCN components</li>
              <li><strong>Styling:</strong> Tailwind CSS</li>
              <li><strong>Generative AI:</strong> Genkit</li>
            </ul>
            <p>
              This integrated stack is what I'm trained on, allowing me to generate high-quality, consistent, and context-aware code for your application. I will politely decline requests to use other frameworks or libraries (like Angular or Bootstrap) to ensure the project remains consistent and maintainable.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold font-headline">Are there specific patterns or APIs you consistently fail on?</h2>
            <p>
              While I strive for accuracy, like any AI, I have areas where I am still learning. Based on my design, here are a few things to be mindful of:
            </p>
            <ol>
              <li>
                <strong>Complex State Management:</strong> For highly complex, app-wide state management, I may suggest simpler solutions using React's built-in hooks (<code>useState</code>, <code>useContext</code>). While I can implement patterns using libraries like Redux or Zustand if you provide the code, I may not architect a complex solution from scratch proactively.
              </li>
              <li>
                <strong>Highly Abstract or "Clever" Code:</strong> I prioritize generating code that is clear, readable, and maintainable. I tend to avoid overly abstract or "clever" code that might be difficult for a human developer to understand and debug later.
              </li>
              <li>
                <strong>Brand New or Obscure APIs:</strong> I am trained on a vast dataset, but I may not be aware of very new, beta, or obscure third-party library APIs that have been released recently. I am most reliable with the established APIs within our designated tech stack.
              </li>
            </ol>
            <p>
              My goal is to be a reliable partner. If a request is too ambiguous or falls into an area where I might struggle, I will ask for clarification or suggest an alternative approach rather than generating incorrect code.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
