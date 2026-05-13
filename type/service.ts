export type ServiceSection = {
  id: string
  tabLabel: string
  title: string
  subtitle?: string
  description: string
  image: string
  features?: string[]
}

export type ServicePageData = {
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    backgroundImage: string
  }

  sections: ServiceSection[]
}