import { ServiceSection as SectionType } from '@/types/service'

type Props = {
  section: SectionType
}

export default function ServiceSection({ section }: Props) {
  return (
    <section
      id={section.id}
      className="scroll-mt-[140px] py-24 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          <div>
            {section.subtitle && (
              <div className="uppercase tracking-widest text-accent text-xs font-bold mb-3">
                {section.subtitle}
              </div>
            )}

            <h2 className="text-4xl font-black text-white mb-6">
              {section.title}
            </h2>

            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              {section.description}
            </p>

            {section.features && (
              <ul className="space-y-3">
                {section.features.map((feature) => (
                  <li key={feature} className="text-text-secondary">
                    • {feature}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="rounded-3xl overflow-hidden border border-white/10">
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  )
}