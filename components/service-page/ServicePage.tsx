'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

import { ServicePageData } from '@/types/service'

import ServiceHero from './ServiceHero'
import ServiceTabs from './ServiceTabs'
import ServiceSection from './ServiceSection'
import Bucket from '../global/Bucket';
import  type { BucketItem } from '../global/Bucket';

type Props = {
  data: ServicePageData
}

export default function ServicePage({ data }: Props) {
  const searchParams = useSearchParams()
  const urlTab = searchParams.get('tab')

  const [activeTab, setActiveTab] = useState<string>(
    urlTab || data.sections[0].id
  )

  const statsData: BucketItem[] = [
    { value: "100%", label: "North American Team" },
    { value: "30+", label: "Team Members" },
    { value: "8+", label: "Years Avg Employee Tenure" },
    { value: "4.8★", label: "Google Rated" },
  ];

  // Sync URL → state
  useEffect(() => {
    if (urlTab) {
      setActiveTab(urlTab)
    }
  }, [urlTab])

  const activeSection = data.sections.find(
    (section) => section.id === activeTab
  )

  // Scroll to tabs whenever tab changes
  useEffect(() => {
    const el = document.getElementById('service-tabs')

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }, [activeTab])

  return (
    <main className="bg-background text-white">

      {/* HERO */}
      <ServiceHero
        eyebrow={data.hero.eyebrow}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        backgroundImage={data.hero.backgroundImage}
      />

      {/* TABS (sticky target) */}
      <ServiceTabs
        sections={data.sections}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* ACTIVE SECTION */}
      {activeSection && (
        <ServiceSection
          key={activeSection.id}
          section={activeSection}
        />
      )}
  <Bucket
        data={statsData}
        className="stats-data"
        grid="md:grid-cols-4"
      />
    </main>
  )
}