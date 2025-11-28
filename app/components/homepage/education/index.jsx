// @flow strict
"use client";

import { educations } from "@/utils/data/educations";
import { BsPersonWorkspace, BsCalendar3, BsBuilding } from "react-icons/bs";
import { HiAcademicCap } from "react-icons/hi";

function Education() {
  return (
    <div id="education" className="relative z-50 border-t my-8 lg:my-12 border-[#25213b] min-h-screen flex items-center">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      {/* Side label */}
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-gradient-to-r from-[#1a1443] to-[#25213b] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md border border-violet-500/30 shadow-lg">
          EDUCATION
        </span>
        <span className="h-36 w-[2px] bg-gradient-to-b from-violet-500 to-transparent"></span>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center mb-4">
            <span className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-transparent to-[#1a1443]"></span>
            <span className="bg-gradient-to-r from-[#1a1443] to-[#25213b] w-fit text-white p-2 px-6 sm:px-8 text-xl sm:text-2xl font-semibold rounded-lg border border-violet-500/30 shadow-lg shadow-violet-500/10 mx-4">
              Academic Background
            </span>
            <span className="w-16 sm:w-24 h-[2px] bg-gradient-to-l from-transparent to-[#1a1443]"></span>
          </div>
          <p className="text-gray-400 text-sm sm:text-base text-center max-w-2xl mx-auto">
            My educational journey in software engineering
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-pink-500 to-transparent opacity-30"></div>

          <div className="space-y-8 lg:space-y-12">
            {educations.map((education, index) => (
              <div 
                key={education.id}
                className="relative group"
              >
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-6 top-6 w-4 h-4 bg-violet-500 rounded-full border-4 border-[#0d1224] z-10 group-hover:scale-150 group-hover:bg-pink-500 transition-all duration-300"></div>
                <div className="hidden lg:block absolute left-6 top-6 w-4 h-4 bg-violet-500/20 rounded-full group-hover:scale-[2.5] transition-all duration-500"></div>

                {/* Education Card */}
                <div className="lg:ml-20 relative">
                  <div className="relative rounded-2xl border-2 border-[#1f223c] bg-gradient-to-br from-[#11152c] to-[#0a0d37] overflow-hidden transition-all duration-300 hover:border-violet-500/60 hover:shadow-2xl hover:shadow-violet-500/20 hover:-translate-y-1">
                    {/* Top gradient line */}
                    <div className="h-1 bg-gradient-to-r from-violet-500 via-pink-500 to-[#16f2b3]"></div>
                    
                    <div className="p-6 lg:p-8">
                      {/* Header with icon */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500/20 to-pink-500/20 border border-violet-500/30 group-hover:scale-110 transition-transform duration-300">
                          <HiAcademicCap className="text-violet-400 text-2xl lg:text-3xl" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors duration-300">
                            {education.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm sm:text-base text-gray-400">
                            <div className="flex items-center gap-2">
                              <BsBuilding className="text-violet-400" />
                              <span>{education.institution}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Duration badge */}
                      <div className="flex items-center gap-2 mb-4">
                        <BsCalendar3 className="text-[#16f2b3]" />
                        <span className="text-[#16f2b3] bg-[#0d1224] px-4 py-1.5 rounded-full border border-[#16f2b3]/50 text-sm font-medium">
                          {education.duration}
                        </span>
                      </div>

                      {/* Decorative bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-pink-500/0 group-hover:from-violet-500/5 group-hover:to-pink-500/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;