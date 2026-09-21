export function TitleSection({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-medium tracking-wide text-[color:var(--accent)] uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance text-3xl font-semibold sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-pretty text-base text-[color:var(--ink-soft)] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
