import Link from "next/link";

interface PageShellProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  backHref?: string;
}

export function PageShell({ title, description, children, backHref = "/" }: PageShellProps) {
  return (
    <main className="container">
      <div className="page-hero">
        <Link className="page-back" href={backHref}>
          ← Retour
        </Link>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {children}
    </main>
  );
}
