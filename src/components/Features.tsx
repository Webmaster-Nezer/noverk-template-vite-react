export type Feature = { title: string; text: string };

export function Features({ items }: { items: Feature[] }) {
  if (!items.length) return null;
  return (
    <ul className="grid gap-4 sm:grid-cols-3" aria-label="Features">
      {items.map(item => (
        <li key={item.title} className="rounded-xl border border-black/10 p-4 dark:border-white/15">
          <h2 className="font-semibold">{item.title}</h2>
          <p className="mt-1 text-sm opacity-75">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
