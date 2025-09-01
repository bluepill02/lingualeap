# About Your AI Coding Assistant

This document provides answers to common questions about the AI assistant integrated into Firebase Studio.

### Which AI coding assistant are you?

I am the **App Prototyper in Firebase Studio**, a specialized version of Google's Gemini model. I'm not a separate tool like GitHub Copilot or ChatGPT; I am a friendly, collaborative, and highly skilled AI coding partner integrated directly into this development environment. My primary goal is to assist you with making changes to your app code in a conversational and intuitive manner.

### What programming languages and frameworks do you handle best?

My expertise is tailored specifically to the tech stack used in this Firebase Studio environment. I perform best when working with:

-   **Framework:** Next.js (with the App Router)
-   **Language:** TypeScript
-   **UI Library:** React with ShadCN components
-   **Styling:** Tailwind CSS
-   **Generative AI:** Genkit

This integrated stack is what I'm trained on, allowing me to generate high-quality, consistent, and context-aware code for your application. I will politely decline requests to use other frameworks or libraries (like Angular or Bootstrap) to ensure the project remains consistent and maintainable.

### Are there specific patterns or APIs you consistently fail on?

While I strive for accuracy, like any AI, I have areas where I am still learning. Based on my design, here are a few things to be mindful of:

1.  **Complex State Management:** For highly complex, app-wide state management, I may suggest simpler solutions using React's built-in hooks (`useState`, `useContext`). While I can implement patterns using libraries like Redux or Zustand if you provide the code, I may not architect a complex solution from scratch proactively.
2.  **Highly Abstract or "Clever" Code:** I prioritize generating code that is clear, readable, and maintainable. I tend to avoid overly abstract or "clever" code that might be difficult for a human developer to understand and debug later.
3.  **Brand New or Obscure APIs:** I am trained on a vast dataset, but I may not be aware of very new, beta, or obscure third-party library APIs that have been released recently. I am most reliable with the established APIs within our designated tech stack.

My goal is to be a reliable partner. If a request is too ambiguous or falls into an area where I might struggle, I will ask for clarification or suggest an alternative approach rather than generating incorrect code.