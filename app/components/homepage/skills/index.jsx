// @flow strict

import { skillsByCategory } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";

function Skills() {

  return (
    <div id="skills" className="relative z-50 border-t my-8 lg:my-12 border-[#25213b] min-h-screen flex flex-col justify-center">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex flex-col items-center my-5 lg:py-8">
        <div className="flex items-center mb-4">
          <span className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-transparent to-[#1a1443]"></span>
          <span className="bg-gradient-to-r from-[#1a1443] to-[#25213b] w-fit text-white p-2 px-6 sm:px-8 text-xl sm:text-2xl font-semibold rounded-lg border border-violet-500/30 shadow-lg shadow-violet-500/10">
            Skills & Technologies
          </span>
          <span className="w-16 sm:w-24 h-[2px] bg-gradient-to-l from-transparent to-[#1a1443]"></span>
        </div>
        <p className="text-gray-400 text-sm sm:text-base text-center max-w-2xl px-4">
          Technologies I work with to build modern, scalable applications
        </p>
      </div>

      <div className="w-full my-12 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Skills Grid by Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
            {Object.entries(skillsByCategory).map(([category, skills]) => (
              <div key={category} className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-violet-500 to-transparent"></div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">{category}</h3>
                  <div className="h-[2px] flex-1 bg-gradient-to-l from-violet-500 to-transparent"></div>
                </div>
                
                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                  {skills.map((skill) => (
                    <div
                      key={skill}
                      className="group relative flex flex-col items-center justify-center p-4 sm:p-5 rounded-xl border-2 border-[#1f223c] bg-gradient-to-br from-[#11152c] to-[#0a0d37] hover:border-violet-500/80 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/20 hover:-translate-y-1 cursor-pointer"
                    >
                      {/* Hover gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-pink-500/0 group-hover:from-violet-500/10 group-hover:to-pink-500/10 rounded-xl transition-all duration-300"></div>
                      
                      {/* Icon */}
                      <div className="relative z-10 h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 flex items-center justify-center mb-3 bg-[#0d1224]/50 rounded-lg group-hover:bg-[#0d1224]/80 transition-all duration-300 group-hover:scale-110">
                        <Image
                          src={skillsImage(skill)?.src}
                          alt={skill}
                          width={50}
                          height={50}
                          className="h-full w-auto object-contain filter group-hover:brightness-110 transition-all duration-300"
                        />
                      </div>
                      
                      {/* Skill Name */}
                      <p className="relative z-10 text-white text-xs sm:text-sm font-medium text-center group-hover:text-violet-300 transition-colors duration-300">
                        {skill}
                      </p>
                      
                      {/* Top accent line on hover */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 group-hover:opacity-100 rounded-t-xl transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;