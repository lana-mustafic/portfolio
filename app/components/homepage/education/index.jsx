// @flow strict
import { educations } from "@/utils/data/educations";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";

function Education() {
  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Educations
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Replace AnimationLottie with static content */}
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🎓</div>
                <h3 className="text-xl font-bold text-[#16f2b3]">Education</h3>
                <p className="text-gray-300 mt-2">My academic journey</p>
              </div>
            </div>
          </div>

          <div className="flex items-center -ml-8">
            <div className="flex flex-col gap-6 w-full">
              {educations.map(education => (
                // Replace GlowCard with simple div
                <div key={education.id} className="bg-gradient-to-r from-[#0d1224] to-[#0a0d37] border border-[#1b2c68a0] rounded-lg p-6 relative overflow-hidden group hover:border-violet-500 transition-all duration-300">
                  <Image
                    src="/blur-23.svg"
                    alt="Background"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 opacity-80"
                  />
                  <div className="flex justify-center mb-2">
                    <p className="text-xs sm:text-sm text-[#16f2b3]">
                      {education.duration}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <div className="text-violet-500 transition-all duration-300 group-hover:scale-125">
                      <BsPersonWorkspace size={36} />
                    </div>
                    <div>
                      <p className="text-base sm:text-xl mb-1 font-medium uppercase">
                        {education.title}
                      </p>
                      <p className="text-sm sm:text-base text-gray-300">{education.institution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;