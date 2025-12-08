import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

export default function Card({
  children,
  className = "",
  hover = true,
  padding = "md",
}: CardProps) {
  const paddingSizes = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={`
        bg-white rounded-2xl border border-[var(--border)] shadow-[var(--shadow-sm)]
        ${hover ? "hover:shadow-[var(--shadow-md)] hover:border-[var(--primary-blue)]/20 transition-all duration-300" : ""}
        ${paddingSizes[padding]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="text-center group">
      <div className="w-16 h-16 mx-auto mb-4 bg-[var(--light-blue)] rounded-2xl flex items-center justify-center text-[var(--primary-blue)] group-hover:bg-[var(--primary-blue)] group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-[var(--navy)] mb-2 font-[var(--font-heading)]">
        {title}
      </h3>
      <p className="text-[var(--text-gray)] leading-relaxed">
        {description}
      </p>
    </Card>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
}

export function TestimonialCard({ quote, author, title }: TestimonialCardProps) {
  return (
    <Card className="relative" padding="lg">
      <div className="absolute top-6 left-6 text-6xl text-[var(--light-blue)] font-serif leading-none">
        &ldquo;
      </div>
      <div className="relative pt-8">
        <p className="text-[var(--dark-gray)] leading-relaxed mb-6 italic">
          {quote}
        </p>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[var(--light-blue)] flex items-center justify-center text-[var(--primary-blue)] font-semibold">
            {author.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-[var(--navy)]">{author}</p>
            <p className="text-sm text-[var(--text-gray)]">{title}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 bg-[var(--light-blue)] rounded-xl flex items-center justify-center text-[var(--primary-blue)]">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-[var(--navy)] mb-1">{title}</h3>
        <p className="text-[var(--text-gray)] text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

