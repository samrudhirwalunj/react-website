'use client';

import Image from "next/image";

export type BucketItem = {
  value: string;
  label?: string;
  img?: string;
  actionType?: "text" | "image" | "button";
  popupContent?: string;
};

type Props = {
  data: BucketItem[];
  className?: string;
  grid?: string;
};

export default function Bucket({ data, className = "", grid = "" }: Props) {
  return (
    <section className={`w-full bg-black text-white py-6 bucket-wrap ${className}`}>
      
      <div
        className={`
          max-w-7xl mx-auto px-6 grid gap-6 text-center
          grid-cols-1
          ${grid}
        `}
      >

        {data.map((item, index) => {

          // 🔘 BUTTON
          if (item.actionType === "button") {
            return (
              <div
                key={index}
                className=" bucket"
              >
              <button
                key={index}
                className="btn rounded-full px-8 py-4 font-semibold border border-white/30 hover:bg-white/10 transition text-white"
              >
                {item.value}
              </button>
              </div>
            );
          }

          // 🖼 IMAGE
          if (item.img) {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center py-6 px-4 transition bucket"
              >
                <Image
                  src={item.img}
                  alt={item.value}
                  width={120}
                  height={60}
                  className="object-contain mx-auto grayscale hover:grayscale-0 transition"
                />
                {/* <p className="text-sm text-gray-400 mt-2">
                  {item.value}
                </p> */}
              </div>
            );
          }

          // 📊 TEXT
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center py-6 px-4 transition bucket"
            >
              <h3 className="text-2xl font-bold mb-2">
                {item.value}
              </h3>
              {item.label && (
                <p className="text-sm text-gray-400">
                  {item.label}
                </p>
              )}
            </div>
          );
        })}

      </div>
    </section>
  );
}