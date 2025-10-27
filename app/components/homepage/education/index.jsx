// @flow strict
import { educations } from "@/utils/data/educations";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";

function Education() {
  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b] min-h-screen flex items-center">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          EDUCATION
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="w-full">
        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
              Educations
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>

        <div className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left side - Study Animation Replacement */}
            <div className="flex justify-center items-center">
              <div className="w-full max-w-md">
                <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
                  <div className="flex flex-row">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-violet-600"></div>
                    <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
                  </div>
                  <div className="px-4 lg:px-8 py-5">
                    <div className="flex flex-row space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-400"></div>
                      <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                      <div className="h-3 w-3 rounded-full bg-green-200"></div>
                    </div>
                  </div>
                  <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-8">
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <div className="text-6xl">📚</div>
                      <h3 className="text-2xl font-bold text-white text-center">Academic Journey</h3>
                      <p className="text-[#16f2b3] text-center">Continuous Learning & Growth</p>
                      <div className="flex space-x-2 mt-4">
                        <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Education Cards */}
            <div className="flex items-center">
              <div className="flex flex-col gap-6 w-full">
                {educations.map(education => (
                  <div 
                    key={education.id} 
                    className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] transition-all duration-300 hover:scale-[1.02] hover:border-violet-500"
                  >
                    <div className="flex flex-row">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                      <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
                    </div>
                    <div className="p-3 relative">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center mb-2">
                        <p className="text-xs sm:text-sm text-[#16f2b3] bg-[#0d1224] px-3 py-1 rounded-full border border-[#16f2b3]">
                          {education.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase text-white">
                            {education.title}
                          </p>
                          <p className="text-sm sm:text-base text-gray-300">{education.institution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;