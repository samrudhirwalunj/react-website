import SiteIntro from "../components/page-specific/SiteIntro";
import Bucket from "../components/global/Bucket";
import type { BucketItem } from "../components/global/Bucket";
import TextMedia from "../components/global/TextMedia";

export default function Home() {

  const statsData: BucketItem[] = [
    { value: "25+", label: "Years Serving Pittsburgh" },
    { value: "100%", label: "North American Team" },
    { value: "9+", label: "Years Avg Customer Tenure" },
    { value: "4.8★", label: "Google Rated or MSP 501" },
  ];

  const linkData: BucketItem[] = [
    {
      value: "FREE Cyber Security Review",
      actionType: "button",
    },
    {
      value: "Book Your IT Strategy Call",
      actionType: "button",
    },
    {
      value: "Secure AI FREE for 30 days",
      actionType: "button",
    },
  ];

  const logoData: BucketItem[] = [
    {
      value: "MSP 501",
      img: "/Images/MSP501.png",
    },
    {
      value: "Microsoft Partner",
      img: "/Images/MSPartner.png",
    },
    {
      value: "Best Places To Work",
      img: "/Images/BPTW.png",
    },
  ];

  return (
    <main className="hero-banner">

      <SiteIntro />

      {/* Stats - 4 columns */}
      <Bucket
        data={statsData}
        className="stats-data"
        grid="md:grid-cols-4"
      />

        <TextMedia
        // superscript="Demo"
        subheading="MANAGED IT & SUPPORT"
        heading="Your business, uninterrupted."
        description="From JENLOR's 24/7 Pittsburgh-based help desk to proactive system monitoring and patch management, we keep your team productive and your network online. Our managed IT services are designed so that when technology works beautifully, you never have to think about it."
        ctaLabel="Explore Managed IT →"
        ctaLink="#"
        mediaType="image"
        mediaSrc="/Images/ManagedHD.webp"
        mediaPosition="right"
      />

      <Bucket
        data={logoData}
        className="partner-logos"
        grid="md:grid-cols-3"
      />

      {/* CTA - 3 columns */}
      <Bucket
        data={linkData}
        className="pop-up-cta"
        grid="md:grid-cols-3"
      />

    </main>
  );
}