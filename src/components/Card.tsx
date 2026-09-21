export function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-[color:var(--ink-soft)]">{description}</p>
    </div>
  );
}
