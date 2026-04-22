import React from 'react';

function SiteIntro() {
  return (
    <section className="hero relative min-h-screen flex items-end overflow-hidden">
      
      {/* Background Video */}
      <div className="video-wrapper absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="bg-video w-full h-full object-cover opacity-60"
        >
          <source
            src="https://www.jenlor.com/assets/videos/WebHeaderVid-v7.mp4"
            type="video/mp4"
          />
        </video>

        {/* Gradient overlay (important for readability) */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full pt-32 pb-10 md:pt-40 md:pb-16">
        <div className="max-w-7xl mx-auto px-6 text-white">

          {/* Small Heading */}
          <h2 className="uppercase tracking-widest text-xs md:text-sm text-blue-400 font-bold mb-6">
            IT SERVICES PITTSBURGH
          </h2>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black tracking-[-0.03em] max-w-4xl mb-6 leading-[1.1] flex flex-col">
            <span>IT.</span>
            <span>Evolved.</span>
          </h1>

          {/* Description */}
          <div className="max-w-2xl">
            <p className="text-lg md:text-2xl mb-6 font-bold leading-snug">
              <span className="block">
                The IT support you need for today.
              </span>
              <span className="block">
                The cybersecurity & AI strategy you need for tomorrow.
              </span>
            </p>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-10 max-w-xl">
              Celebrating 25 years of providing IT services businesses rely on
              to guide them through the next technology evolution.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="btn glass-btn-primary rounded-full px-8 py-4 font-semibold bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition text-white">
              Book Your IT Strategy Call
            </button>

            <button className="btn rounded-full px-8 py-4 font-semibold border border-white/30 hover:bg-white/10 transition text-white">
              Secure AI FREE for 30 days
            </button>
          </div>

          {/* Left border note (optional) */}
          <div className="text-xs md:text-sm text-gray-400 font-medium border-l border-blue-400/30 pl-4">
            {/* Add something here if needed */}
          </div>

        </div>
      </div>
    </section>
  );
}

export default SiteIntro;