type Props = {
  eyebrow: string
  title: string
  subtitle: string
  backgroundImage: string
}

export default function ServiceHero({
  eyebrow,
  title,
  subtitle,
  backgroundImage,
}: Props) {
  return (
    <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-background">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover opacity-35"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-48 w-full">

        <div className="uppercase tracking-widest text-accent text-xs md:text-sm font-bold mb-4">
          {eyebrow}
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 max-w-4xl leading-[1.05]">
          {title}
        </h1>

        <p className="text-xl md:text-2xl text-text-secondary font-medium max-w-2xl">
          {subtitle}
        </p>

      </div>
    </section>
  )
}