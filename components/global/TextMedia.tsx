'use client';

import Image from "next/image";
import React from "react";

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
  ctaLink,
  mediaType = "image",
  mediaSrc,
  mediaPosition = "right",
  className = "",
}: TextMediaProps) {

  const isSide = mediaPosition === "left" || mediaPosition === "right";
  const isTop = mediaPosition === "top";
  const isBottom = mediaPosition === "bottom";
  const isCenter = mediaPosition === "center";

  return (
    <section className={`w-full bg-black text-white py-12 ${className}`}>
      <div
        className={`
          max-w-7xl mx-auto px-6 gap-10 items-center
          ${isSide ? "grid md:grid-cols-5" : "flex flex-col"}
          ${isCenter ? "text-center items-center" : ""}
        `}
      >

        {/* MEDIA TOP */}
        {isTop && <Media mediaType={mediaType} mediaSrc={mediaSrc} />}

        {/* SIDE LEFT */}
        {isSide && mediaPosition === "left" && (
          <div className="md:col-span-2">
            <Media mediaType={mediaType} mediaSrc={mediaSrc} />
          </div>
        )}

        {/* TEXT (3/5) */}
        {isSide && (
          <div className={`md:col-span-3 ${isCenter ? "max-w-2xl mx-auto" : ""}`}>
            <Content
              superscript={superscript}
              subheading={subheading}
              heading={heading}
              description={description}
              ctaLabel={ctaLabel}
              ctaLink={ctaLink}
            />
          </div>
        )}

        {/* SIDE RIGHT MEDIA */}
        {isSide && mediaPosition === "right" && (
          <div className="md:col-span-2">
            <Media mediaType={mediaType} mediaSrc={mediaSrc} />
          </div>
        )}

        {/* MEDIA BOTTOM */}
        {isBottom && <Media mediaType={mediaType} mediaSrc={mediaSrc} />}

        {/* CENTER */}
        {isCenter && (
          <div className="mt-8 w-full max-w-3xl">
            <Media mediaType={mediaType} mediaSrc={mediaSrc} />
          </div>
        )}

        {/* TEXT ONLY LAYOUT (top/bottom/center fallback) */}
        {!isSide && (
          <Content
            superscript={superscript}
            subheading={subheading}
            heading={heading}
            description={description}
            ctaLabel={ctaLabel}
            ctaLink={ctaLink}
          />
        )}

      </div>
    </section>
  );
}

export default TextMedia;

/* ---------------- TEXT BLOCK (reusable) ---------------- */

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
  return (
    <div className="w-full">
      {mediaType === "image" ? (
        <Image
          src={mediaSrc}
          alt="media"
          width={600}
          height={400}
          className="rounded-lg object-cover w-full h-auto"
        />
      ) : (
        <video
          src={mediaSrc}
          autoPlay
          muted
          loop
          playsInline
          className="rounded-lg w-full h-auto"
        />
      )}
    </div>
  );
}