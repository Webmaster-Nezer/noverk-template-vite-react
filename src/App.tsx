import { Features } from "./components/Features";

export function App() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-3xl flex-col justify-center gap-8 px-4 py-16">
      <header className="grid gap-3">
        <h1 className="text-4xl font-semibold tracking-tight">Your new site</h1>
        <p className="text-lg opacity-75">A fast static site with Vite, React, TypeScript and Tailwind CSS. Describe what you want in Noverk Web Code and the agent builds it.</p>
      </header>
      <Features items={[
        { title: "Fast", text: "Vite builds plain files you can host anywhere." },
        { title: "Typed", text: "TypeScript catches mistakes before your visitors do." },
        { title: "Tested", text: "Vitest and Testing Library check every component." },
      ]} />
    </main>
  );
}
