import { ServicePageData } from '@/types/service'

export const cybersecurityData: ServicePageData = {
  hero: {
    eyebrow: 'PITTSBURGH CYBERSECURITY SERVICES',
    title: 'Cybersecurity for Pittsburgh Organizations',
    subtitle: 'Defense Built Around Modern Threats',
    backgroundImage: '/Images/SecurityHeader.webp',
  },

  sections: [
    {
      id: 'ztna',
      tabLabel: 'Zero Trust Network Access',
      title: 'Zero Trust Network Access (ZTNA)',
      subtitle: 'IDENTITY-FIRST SECURITY',
      description:
        'Replace legacy VPN infrastructure with identity-based secure access.',
      image: '/Images/ZTNA.webp',
      features: [
        'Identity-based access',
        'Device posture checks',
        'Cloud firewall',
      ],
    },

    {
      id: 'endpoint',
      tabLabel: 'Email & Endpoint',
      title: 'Email, Endpoint & Identity Protection',
      subtitle: 'THREAT DEFENSE',
      description:
        'Protect users and systems from phishing and ransomware.',
      image: '/Images/EmailSec.webp',
      features: [
        'EDR/XDR',
        'Identity protection',
        'Threat response',
      ],
    },
  ],
}