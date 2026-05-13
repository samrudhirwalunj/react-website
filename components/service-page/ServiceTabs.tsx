type Props = {
  sections: {
    id: string
    tabLabel: string
  }[]
  activeTab: string
  setActiveTab: (id: string) => void
}

export default function ServiceTabs({
  sections,
  activeTab,
  setActiveTab,
}: Props) {

const handleTabClick = (id: string) => {
  setActiveTab(id)

  requestAnimationFrame(() => {
    const el = document.getElementById(id)
    if (!el) return

    const header = document.querySelector('header')
    const tabs = document.getElementById('service-tabs')

    const headerHeight = header?.getBoundingClientRect().height || 0
    const tabsHeight = tabs?.getBoundingClientRect().height || 0

    // extra safety spacing
    const OFFSET = headerHeight + tabsHeight + 8

    const y =
      el.getBoundingClientRect().top +
      window.scrollY -
      OFFSET

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    })
  })
}

  return (
    <div
      id="service-tabs"
      className="sticky top-[72px] z-40 bg-[#16161e] border-y border-white/10 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap gap-3 justify-center">

        {sections.map((section) => {
          const active = activeTab === section.id

          return (
            <button
              key={section.id}
              onClick={() => handleTabClick(section.id)}
              className={`
                px-6 py-3 rounded-full text-sm font-semibold border
                transition-all duration-200

                ${
                  active
                    ? 'bg-accent text-white border-accent shadow-lg scale-105 active-btn'
                    : 'bg-white/5 border-white/10 text-text-secondary hover:text-white hover:bg-white/10'
                }
              `}
            >
              {section.tabLabel}
            </button>
          )
        })}

      </div>
    </div>
  )
}