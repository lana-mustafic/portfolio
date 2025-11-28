"use client";

// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Skills() {
  const scrollContainerRef = useRef(null);
  const scrollContentRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationFrameRef = useRef(null);
  const scrollPositionRef = useRef(0);
  const scrollTimeoutRef = useRef(null);
  const isUserScrollingRef = useRef(false);
  const touchStartRef = useRef(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const content = scrollContentRef.current;
    
    if (!container || !content) return;

    // Initialize scroll position
    scrollPositionRef.current = container.scrollLeft;

    const scrollSpeed = 0.5; // pixels per frame
    let lastTimestamp = 0;

    const autoScroll = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isPaused && container && content && !isUserScrollingRef.current) {
        scrollPositionRef.current += scrollSpeed * (deltaTime / 16); // normalize to 60fps
        
        // Reset scroll position when it reaches halfway (seamless loop) - only during auto-scroll
        const maxScroll = content.scrollWidth / 2; // Since we duplicated content
        if (scrollPositionRef.current >= maxScroll) {
          scrollPositionRef.current = 0;
        }
        
        container.scrollLeft = scrollPositionRef.current;
      }

      animationFrameRef.current = requestAnimationFrame(autoScroll);
    };

    animationFrameRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isPaused]);

  const handleMouseEnter = () => {
    // Only pause on hover for desktop (not touch devices)
    if (!touchStartRef.current) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    // Resume after a short delay (only for desktop)
    if (!touchStartRef.current) {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollPositionRef.current = scrollContainerRef.current.scrollLeft;
        }
        setIsPaused(false);
      }, 1000);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current && scrollContentRef.current) {
      const currentScroll = scrollContainerRef.current.scrollLeft;
      
      // Update position but don't reset during manual scrolling
      // Let users scroll naturally to the end
      scrollPositionRef.current = currentScroll;
      
      // Only pause if user is actively scrolling
      if (!isUserScrollingRef.current) {
        isUserScrollingRef.current = true;
        setIsPaused(true);
      }
      
      // Resume auto-scroll after user stops scrolling
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        isUserScrollingRef.current = false;
        // Always resume auto-scroll - it will handle looping naturally
        setIsPaused(false);
      }, 2000);
    }
  };

  const handleTouchStart = () => {
    touchStartRef.current = true;
    isUserScrollingRef.current = true;
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    // Resume auto-scroll after touch ends (for mobile)
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = setTimeout(() => {
      touchStartRef.current = false;
      isUserScrollingRef.current = false;
      if (scrollContainerRef.current && scrollContentRef.current) {
        const currentScroll = scrollContainerRef.current.scrollLeft;
        scrollPositionRef.current = currentScroll;
        // Always resume auto-scroll - it will handle looping naturally
        setIsPaused(false);
      }
    }, 1500);
  };

  const scrollBy = (direction) => {
    if (!scrollContainerRef.current || !scrollContentRef.current) return;

    const container = scrollContainerRef.current;
    const content = scrollContentRef.current;
    const scrollAmount = 200; // pixels to scroll per click
    const currentScroll = container.scrollLeft;
    const maxScroll = content.scrollWidth / 2; // Halfway point for infinite loop

    // Pause auto-scroll when button is clicked
    isUserScrollingRef.current = true;
    setIsPaused(true);

    let newScroll;
    if (direction === 'left') {
      newScroll = currentScroll - scrollAmount;
      // Handle infinite loop - if going left past 0, wrap to the end
      if (newScroll < 0) {
        newScroll = maxScroll + newScroll;
      }
    } else {
      newScroll = currentScroll + scrollAmount;
      // Handle infinite loop - if going right past halfway, wrap to beginning
      if (newScroll >= maxScroll) {
        newScroll = newScroll - maxScroll;
      }
    }

    container.scrollTo({
      left: newScroll,
      behavior: 'smooth'
    });

    scrollPositionRef.current = newScroll;

    // Resume auto-scroll after a delay
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = setTimeout(() => {
      isUserScrollingRef.current = false;
      setIsPaused(false);
    }, 2000);
  };

  return (
    <div id="skills" className="relative z-50 border-t my-8 lg:my-12 border-[#25213b] min-h-screen flex flex-col justify-center">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-12 flex-grow flex items-center relative">
        {/* Left scroll button */}
        <button
          onClick={() => scrollBy('left')}
          className="absolute left-2 lg:left-4 z-10 bg-[#1a1443] hover:bg-violet-600 border border-violet-500/50 hover:border-violet-500 rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg shadow-violet-500/20"
          aria-label="Scroll left"
        >
          <FaChevronLeft className="text-white text-lg" />
        </button>

        {/* Right scroll button */}
        <button
          onClick={() => scrollBy('right')}
          className="absolute right-2 lg:right-4 z-10 bg-[#1a1443] hover:bg-violet-600 border border-violet-500/50 hover:border-violet-500 rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg shadow-violet-500/20"
          aria-label="Scroll right"
        >
          <FaChevronRight className="text-white text-lg" />
        </button>

        <div 
          ref={scrollContainerRef}
          className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onScroll={handleScroll}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div ref={scrollContentRef} className="flex items-center">
            {/* Duplicate content for seamless infinite scroll */}
            {[...skillsData, ...skillsData].map((skill, id) => (
              <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                key={id}>
                <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                  <div className="flex -translate-y-[1px] justify-center">
                    <div className="w-3/4">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 p-6">
                    <div className="h-8 sm:h-10">
                      <Image
                        src={skillsImage(skill)?.src}
                        alt={skill}
                        width={40}
                        height={40}
                        className="h-full w-auto rounded-lg"
                      />
                    </div>
                    <p className="text-white text-sm sm:text-lg">
                      {skill}
                    </p>
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

export default Skills;