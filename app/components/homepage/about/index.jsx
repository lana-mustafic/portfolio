// @flow strict
"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { useState } from "react";
import { BsCodeSlash, BsRocketTakeoff, BsLightbulb } from "react-icons/bs";

function AboutSection() {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Split description into sentences safely - shorter version
  const descriptionParts = personalData.description.split('. ').filter(part => part.trim().length > 0);
  const firstPart = descriptionParts[0] || personalData.description;
  const secondPart = descriptionParts.slice(1).join('. ') || '';

  return (
    <div id="about" className="mt-8 lg:mt-12 mb-16 lg:mb-24 relative min-h-screen flex items-center">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl -z-10"></div>

      {/* Side label */}
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-gradient-to-r from-[#1a1443] to-[#25213b] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md border border-violet-500/30 shadow-lg">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-gradient-to-b from-violet-500 to-transparent"></span>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16f2b3] to-violet-500">Am I?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1 space-y-6">
            {/* Introduction */}
            <div className="space-y-4">
              {firstPart && (
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                  {firstPart}{firstPart.endsWith('.') ? '' : '.'}
                </p>
              )}
              {secondPart && (
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                  {secondPart}{secondPart.endsWith('.') ? '' : '.'}
                </p>
              )}
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="group p-4 rounded-xl border border-[#1f223c] bg-gradient-to-br from-[#11152c]/50 to-[#0a0d37]/50 hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-violet-500/20 group-hover:bg-violet-500/30 transition-colors">
                    <BsCodeSlash className="text-violet-400 text-xl" />
                  </div>
                  <h3 className="text-white font-semibold text-sm">Full-Stack</h3>
                </div>
                <p className="text-gray-400 text-xs">.NET + Angular</p>
              </div>

              <div className="group p-4 rounded-xl border border-[#1f223c] bg-gradient-to-br from-[#11152c]/50 to-[#0a0d37]/50 hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-pink-500/20 group-hover:bg-pink-500/30 transition-colors">
                    <BsRocketTakeoff className="text-pink-400 text-xl" />
                  </div>
                  <h3 className="text-white font-semibold text-sm">Mobile Dev</h3>
                </div>
                <p className="text-gray-400 text-xs">Flutter</p>
              </div>

              <div className="group p-4 rounded-xl border border-[#1f223c] bg-gradient-to-br from-[#11152c]/50 to-[#0a0d37]/50 hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#16f2b3]/20 group-hover:bg-[#16f2b3]/30 transition-colors">
                    <BsLightbulb className="text-[#16f2b3] text-xl" />
                  </div>
                  <h3 className="text-white font-semibold text-sm">Always Learning</h3>
                </div>
                <p className="text-gray-400 text-xs">Master&apos;s Prep</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative group">
              {/* Decorative border */}
              <div className="absolute -inset-3 bg-gradient-to-r from-violet-500 via-pink-500 to-[#16f2b3] rounded-full opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              
              {/* Image container - circular */}
              <div className="relative rounded-full overflow-hidden border-2 border-violet-500/30 group-hover:border-violet-500/60 transition-all duration-500 shadow-2xl shadow-violet-500/20">
                <Image
                  src={personalData.profile}
                  width={250}
                  height={250}
                  alt="Lana Mustafić"
                  className={`rounded-full transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105 object-cover ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-violet-600 to-pink-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg border-2 border-[#0d1224] transform group-hover:scale-110 transition-transform duration-300">
                {personalData.designation}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;