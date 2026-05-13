'use client';

import Image from "next/image"; 
import clsx from "clsx";


type MediaPosition =
  | "left"
  | "right"
  | "top"
  | "bottom"
  | "center";

type TextMediaProps = {
  heading: string;
  subheading?: string;
  superscript?: string;
  description?: string;
  ctaLabel?: string;
  ctaLink?: string;
  mediaType?: "image" | "video";
  mediaSrc: string;
  mediaPosition?: MediaPosition;
  className?: string;
};

function TextMedia({
  heading,
  subheading,
  superscript,
  description,
  ctaLabel,
  mediaType = "image",
  mediaSrc,
  mediaPosition = "right",
  className = "",
}: TextMediaProps) {

  const isSide = mediaPosition === "left" || mediaPosition === "right";

  /* ✅ Dynamic layout */
  const containerClass = isSide
    ? "grid md:grid-cols-5 items-center gap-10"
    : "flex flex-col items-center text-center gap-6";

  /* ✅ Order control */
  const mediaOrder =
    mediaPosition === "left" ? "md:order-1" :
    mediaPosition === "right" ? "md:order-2" :
    mediaPosition === "top" ? "order-1" :
    mediaPosition === "bottom" ? "order-2" :
    "order-2"; // center

  const textOrder =
    mediaPosition === "left" ? "md:order-2" :
    mediaPosition === "right" ? "md:order-1" :
    mediaPosition === "top" ? "order-2" :
    mediaPosition === "bottom" ? "order-1" :
    "order-1";

  return (
    <section className={`w-full bg-black text-white py-12 ${className}`}>
      <div className={`max-w-7xl mx-auto px-6 ${containerClass}`}>

        {/* ✅ MEDIA (only once) */}
        <div
          className={`
            ${isSide ? "md:col-span-2 flex justify-center media-wrap" : "w-full flex justify-center"}
            ${mediaOrder}
          `}
        >
          <div className="relative w-full max-w-[400px] h-[480px]">
            <Media mediaType={mediaType} mediaSrc={mediaSrc} />
          </div>
        </div>

        {/* ✅ TEXT */}
        <div
          className={`
            ${isSide ? "md:col-span-3" : "max-w-2xl"}
            ${textOrder}
          `}
        >
          <Content
            superscript={superscript}
            subheading={subheading}
            heading={heading}
            description={description}
            ctaLabel={ctaLabel}
          />
        </div>

      </div>
    </section>
  );
}

export default TextMedia;

/* ---------------- TEXT ---------------- */

function Content({
  heading,
  subheading,
  superscript,
  description,
  ctaLabel,
}: any) {
  return (
    <div>
      {superscript && (
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
          {superscript}
        </p>
      )}

      {subheading && (
        <h4 className="text-lg text-gray-300 mb-2">
          {subheading}
        </h4>
      )}

      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {heading}
      </h2>

      {description && (
        <p className="text-gray-400 mb-6 leading-relaxed">
          {description}
        </p>
      )}

      {ctaLabel && (
        <button className="btn rounded-full px-8 py-4 font-semibold border border-white/30 hover:bg-white/10 transition text-white">
          {ctaLabel}
        </button>
      )}
    </div>
  );
}

/* ---------------- MEDIA ---------------- */

function Media({
  mediaType,
  mediaSrc,
}: {
  mediaType: "image" | "video";
  mediaSrc: string;
}) {

  if (mediaType === "image") {
    return (
      <Image
        src={mediaSrc}
        alt="media"
        fill
         sizes="(max-width: 768px) 100vw, 375px"
        className="object-cover rounded-2xl shadow-2xl"
      />
    );
  }

  return (
    <video
      src={mediaSrc}
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover rounded-2xl"
    />
  );
}