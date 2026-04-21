import Link from "next/link";

interface PageShellProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  backHref?: string;
}

export function PageShell({ title, description, children, backHref = "/" }: PageShellProps) {
  return (
    <main className="container section">
      <div className="page-title">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {children}
      <div className="actions">
        <Link className="button button-secondary" href={backHref}>
          Retour
        </Link>
      </div>
    </main>
  );
}
