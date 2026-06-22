import { User } from "lucide-react";
import type { TeamMember } from "../../types/program";

interface TeamGridProps {
  readonly members: readonly TeamMember[];
  readonly heading?: string;
  readonly eyebrow?: string;
}

/**
 * TeamGrid — grid of team member cards (photo/initials, name, role).
 * Falls back to a brand-tinted avatar when no photo is provided.
 */
export function TeamGrid({ members, heading, eyebrow }: TeamGridProps) {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="container mx-auto px-4">
        {(eyebrow || heading) && (
          <h2 className="text-3xl md:text-5xl font-bold text-brand-intermediate mb-10 lg:mb-14 max-w-7xl mx-auto">
            {eyebrow}{eyebrow && heading ? " " : ""}
            {heading && <span className="text-brand-secondary uppercase">{heading}</span>}
          </h2>
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {members.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col items-center text-center p-7 lg:p-8 rounded-3xl bg-white border border-brand-muted/80 shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="w-40 h-40 xl:w-44 xl:h-44 rounded-full p-1.5 bg-gradient-to-tr from-brand-secondary via-brand-secondary/60 to-brand-intermediate shadow-xl flex items-center justify-center mb-6 group-hover:scale-[1.03] transition-transform">
                <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                  {member.photo ? (
                    <img
                      alt={member.name}
                      src={member.photo}
                      loading="lazy"
                      className="object-cover w-full h-full"
                      style={{ color: "transparent", objectPosition: member.photoPosition ?? "center" }}
                    />
                  ) : (
                    <User className="w-14 h-14 text-brand-intermediate" />
                  )}
                </div>
              </div>
              <h3 className="text-xl xl:text-2xl font-extrabold text-brand-intermediate leading-tight">{member.name}</h3>
              <p className="text-brand-text/75 text-base mt-3 leading-snug">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
