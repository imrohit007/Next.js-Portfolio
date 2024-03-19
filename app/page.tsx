'use client'
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const aboutRef = useRef(null);
  const typewriterRef = useRef(null);
  const imageRef = useRef(null);
  

  useEffect(() => {
    const aboutRefCurrent = aboutRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const typewriterSpans =
              typewriterRef.current.querySelectorAll("span");
            typewriterSpans.forEach((span, index) => {
              setTimeout(() => {
                span.classList.add("animate-typewriter");
              }, index * 100);
            });

            imageRef.current.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (aboutRefCurrent) {
      observer.observe(aboutRefCurrent);
    }

    return () => {
      if (aboutRefCurrent) {
        observer.unobserve(aboutRefCurrent);
      }
    };
  }, [aboutRef]);

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-8 md:mb-0 z-10">
            <h1 className="text-6xl font-bold text-white mb-4 animate-glitch">
              Rohit Kumar Thakur
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in">
              अहम् ब्रह्मास्मि
            </p>
            <div className="flex justify-center">
              <div className="group duration-500 -rotate-12 sm:hover:-rotate-0 sm:hover:skew-x-1 skew-x-0 sm:hover:translate-x-6 sm:hover:translate-y-12">
                <div className="group-hover:duration-400 relative rounded-2xl sm:w-64 sm:h-36 w-48 h-24 bg-gray-900 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12 before:rounded-2xl before:absolute before:content-[''] before:bg-neutral-700 before:right-2 before:top-0 sm:before:w-64 sm:before:h-32 before:w-44 before:h-20 before:-z-10">
                  <span className="text-3xl sm:text-5xl font-bold">Human</span>
                  <p className="text-sm sm:text-base text-amber-300 font-thin">
                    - Software Developer -
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative md:ml-8 animate-float z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full blur-xl opacity-30 animate-spin-slow"></div>
            <div className="relative">
              <Image
                src="/pic1.png"
                alt="Rohit Kumar Thakur"
                width={700}
                height={700}
                className="rounded-full mx-auto shadow-lg"
              />
              <div className="absolute inset-0 rounded-full border-8 border-white"></div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-black to-blue-900 opacity-80"></div>
      </section>

      <style>
        {`
    @keyframes glitch {
      0% {
        text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75), -0.05em 0 0 rgba(0, 255, 0, 0.75), 0 0 0.05em rgba(0, 0, 255, 0.75);
      }
      14% {
        text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75), -0.05em 0 0 rgba(0, 255, 0, 0.75), 0 0 0.05em rgba(0, 0, 255, 0.75);
      }
      15% {
        text-shadow: -0.05em -0.05em 0 rgba(255, 0, 0, 0.75), 0.05em 0.05em 0 rgba(0, 255, 0, 0.75), -0.05em 0 0 rgba(0, 0, 255, 0.75);
      }
      49% {
        text-shadow: -0.05em -0.05em 0 rgba(255, 0, 0, 0.75), 0.05em 0.05em 0 rgba(0, 255, 0, 0.75), -0.05em 0 0 rgba(0, 0, 255, 0.75);
      }
      50% {
        text-shadow: 0.05em 0.05em 0 rgba(255, 0, 0, 0.75), -0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
      }
      99% {
        text-shadow: 0.05em 0.05em 0 rgba(255, 0, 0, 0.75), -0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
      }
      100% {
        text-shadow: -0.05em 0 0 rgba(255, 0, 0, 0.75), 0.05em 0 0 rgba(0, 255, 0, 0.75), 0 0 0.05em rgba(0, 0, 255, 0.75);
      }
    }

    @keyframes fade-in {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
    }

    @keyframes float {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px);
      }
      100% {
        transform: translateY(0);
      }
    }

    @keyframes spin-slow {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    .animate-glitch {
      animation: glitch 2s infinite;
    }

    .animate-fade-in {
      animation: fade-in 2s ease-in-out;
    }

    .animate-pulse {
      animation: pulse 2s infinite;
    }

    .animate-float {
      animation: float 6s ease-in-out infinite;
    }

    .animate-spin-slow {
      animation: spin-slow 20s linear infinite;
    }
  `}
      </style>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-16 relative">
        <div className="absolute bg-gray-900"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-8 text-white">About Me</h2>
            <p className="text-gray-300 typewriter mb-8" ref={typewriterRef}>
              <span className="text-xl">
                Hey there! I&apos;m Rohit Kumar Thakur, from Madhubani, Bihar,
                India.{" "}
              </span>
              <span className="text-xl">
                Even though I didn&apos;t finish college, I love coding, making
                mobile apps, building web apps, and diving into machine learning
                & AI.{" "}
              </span>
              <span className="text-xl">
                When I&apos;m free, I like sharing what I know on Medium and
                making YouTube videos.{" "}
              </span>
              <span className="text-xl">Thanks for checking me out! </span>
              <br />
              <span className="text-xl">
                From the get-go, I&apos;ve always wanted to start my own
                company.{" "}
              </span>
              <span className="text-xl">
                I&apos;m big on making knowledge available to everyone, which is
                why I write and make videos.{" "}
              </span>
              <span className="text-xl">
                I want to help others avoid the struggles I faced when I started
                out.{" "}
              </span>
              <br />
              <span className="text-xl">
                Looking ahead, I&apos;m excited about what&apos;s next.{" "}
              </span>
              <span className="text-xl">
                Right now, I&apos;m hustling to make ends meet and laying the
                groundwork for my startup.{" "}
              </span>
              <span className="text-xl">
                I&apos;ll keep sharing what I know on Medium, YouTube and Social
                Media, and if you want to support me, that&apos;d be awesome.
              </span>
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 relative">
            <div className="animate-fade-in-out">
              <Image
                src="/pic2.png"
                alt="Rohit Kumar Thakur"
                width={500}
                height={500}
                className="mx-auto glitch"
                ref={imageRef}
              />
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .typewriter span {
          opacity: 0;
          font-family: "Orbitron", sans-serif;
          color: #ace1af;
          text-shadow: 0 0 20px rgba(0, 255, 200, 0.5);
        }

        .animate-typewriter {
          animation: typewriter 1s ease-in-out forwards;
        }

        @keyframes typewriter {
          0% {
            opacity: 0;
            transform: translateY(20px) rotate(5deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotate(0);
          }
        }

        .glitch {
          animation: glitch 2s ease-in-out infinite;
        }

        @keyframes glitch {
          0% {
            transform: translate(0);
            opacity: 1;
          }
          10% {
            transform: translate(-2px, -2px);
            opacity: 0.8;
          }
          20% {
            transform: translate(2px, 2px);
            opacity: 0.6;
          }
          30% {
            transform: translate(-2px, 2px);
            opacity: 0.8;
          }
          40% {
            transform: translate(2px, -2px);
            opacity: 1;
          }
          50% {
            transform: translate(0);
            opacity: 1;
          }
          60% {
            transform: translate(-2px, 2px);
            opacity: 0.8;
          }
          70% {
            transform: translate(2px, -2px);
            opacity: 0.6;
          }
          80% {
            transform: translate(-2px, -2px);
            opacity: 0.8;
          }
          90% {
            transform: translate(2px, 2px);
            opacity: 1;
          }
          100% {
            transform: translate(0);
            opacity: 1;
          }
        }

        .animate-fade-in-out {
          animation: fade-in-out 5s ease-in-out infinite;
        }

        @keyframes fade-in-out {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">
            My Insights and Overview
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Insight Cards */}
            <a
              href="https://www.youtube.com/playlist?list=PLO3Dk6jx9EITjQEaUjdo7qf_F1EhTT3YB"
              target="_blank"
              rel="noopener noreferrer"
              className="group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2"
            >
              <div className="group-hover:duration-400 relative rounded-2xl w-72 h-36 bg-zinc-900 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12 before:rounded-2xl before:absolute before:content-[''] before:bg-neutral-700 before:right-3 before:top-0 before:w-72 before:h-32 before:-z-10">
                <span className="text-4xl font-bold">Next.js</span>
                <p className="text-amber-300 font-thin">
                  - Frontend Developer -
                </p>
              </div>
            </a>
            <a
              href="https://www.youtube.com/playlist?list=PLO3Dk6jx9EISheYkFbI9Hd_AF9A99i0L-"
              target="_blank"
              rel="noopener noreferrer"
              className="group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2"
            >
              <div className="group-hover:duration-400 relative rounded-2xl w-72 h-36 bg-zinc-900 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12 before:rounded-2xl before:absolute before:content-[''] before:bg-neutral-700 before:right-3 before:top-0 before:w-72 before:h-32 before:-z-10">
                <span className="text-4xl font-bold">React Native</span>
                <p className="text-amber-300 font-thin">- Mobile Developer -</p>
              </div>
            </a>
            <a
              href="https://www.youtube.com/playlist?list=PLO3Dk6jx9EIQAsEAezWjNTDQsV-i2Bi8i"
              target="_blank"
              rel="noopener noreferrer"
              className="group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2"
            >
              <div className="group-hover:duration-400 relative rounded-2xl w-72 h-36 bg-zinc-900 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12 before:rounded-2xl before:absolute before:content-[''] before:bg-neutral-700 before:right-3 before:top-0 before:w-72 before:h-32 before:-z-10">
                <span className="text-4xl font-bold">Tech Talks</span>
                <p className="text-amber-300 font-thin">- Public Speaker -</p>
              </div>
            </a>
            <a
              href="https://www.youtube.com/playlist?list=PLO3Dk6jx9EIT-waCA6e_429p6wapqabnm"
              target="_blank"
              rel="noopener noreferrer"
              className="group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2"
            >
              <div className="group-hover:duration-400 relative rounded-2xl w-72 h-36 bg-zinc-900 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12 before:rounded-2xl before:absolute before:content-[''] before:bg-neutral-700 before:right-3 before:top-0 before:w-72 before:h-32 before:-z-10">
                <span className="text-4xl font-bold">Django</span>
                <p className="text-amber-300 font-thin">
                  - Backend Developer -
                </p>
              </div>
            </a>
            <a
              href="https://www.youtube.com/playlist?list=PLO3Dk6jx9EIRDATxL7kMC14PlSGSFyPbi"
              target="_blank"
              rel="noopener noreferrer"
              className="group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2"
            >
              <div className="group-hover:duration-400 relative rounded-2xl w-72 h-36 bg-zinc-900 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12 before:rounded-2xl before:absolute before:content-[''] before:bg-neutral-700 before:right-3 before:top-0 before:w-72 before:h-32 before:-z-10">
                <span className="text-4xl font-bold">Python</span>
                <p className="text-amber-300 font-thin">
                  - Data Science & AI -
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Connect with Me Section */}
      <section id="connect" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">
            Connect with Me
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Social Media Cards */}
            <a
              href="https://instagram.com/_ninza7"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-zinc-900 text-white rounded-lg p-6 flex items-center gap-4">
                <div className="bg-white rounded-full p-2">
                  {/* Instagram logo */}
                  <svg
                    className="w-6 h-6 text-rose-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162 0 3.403 2.759 6.162 6.162 6.162 3.403 0 6.162-2.759 6.162-6.162 0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <span className="font-semibold">Instagram Personal</span>
              </div>
            </a>
            {/* YouTube Card */}
            <a
              href="https://www.youtube.com/channel/UCLTAVHeuoOyc4aFIA1o6Xyg"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-zinc-900 text-white rounded-lg p-6 flex items-center gap-4">
                <div className="bg-white rounded-full p-2">
                  {/* YouTube logo */}
                  <svg
                    className="w-6 h-6 text-red-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.499 6.203a3.008 3.008 0 00-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 00-2.088 2.09A31.258 31.26 0 000 12.01a31.258 31.26 0 00.523 5.785 3.008 3.008 0 002.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 002.089-2.09 31.258 31.257 0 00.5-5.784 31.258 31.258 0 00-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z" />
                  </svg>
                </div>
                <span className="font-semibold">Youtube</span>
              </div>
            </a>

            {/* Discord Card */}
            <a
              href="https://discord.gg/eg37zcyjbA"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-zinc-900 text-white rounded-lg p-6 flex items-center gap-4">
                <div className="bg-white rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-6 h-6 text-gray-900"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                  </svg>
                  <i className="fa-brands fa-discord text-indigo-500 text-xl"></i>
                </div>
                <span className="font-semibold">Discord</span>
              </div>
            </a>

            {/* Medium Card */}
            <a
              href="https://medium.com/@ninza7"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-zinc-900 text-white rounded-lg p-6 flex items-center gap-6">
                <div className="bg-white rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-6 h-6 text-gray-900"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8m4.95 0c0 2.34-1.01 4.236-2.256 4.236S9.463 10.339 9.463 8c0-2.34 1.01-4.236 2.256-4.236S13.975 5.661 13.975 8M16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795" />
                  </svg>
                  <i className="fa-brands fa-medium text-green-500 text-xl"></i>
                </div>
                <span className="font-semibold">Medium</span>
              </div>
            </a>

            {/* Twitter Card */}
            <a
              href="https://twitter.com/_ninza7"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-zinc-900 text-white rounded-lg p-6 flex items-center gap-4">
                <div className="bg-white rounded-full p-2">
                  {/* Twitter logo */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-6 h-6 text-gray-900"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                  </svg>
                </div>
                <span className="font-semibold">X (Twitter) </span>
              </div>
            </a>
            <a
              href="https://instagram.com/bugninza"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-zinc-900 text-white rounded-lg p-6 flex items-center gap-4">
                <div className="bg-white rounded-full p-2">
                  {/* Instagram logo */}
                  <svg
                    className="w-6 h-6 text-rose-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162 0 3.403 2.759 6.162 6.162 6.162 3.403 0 6.162-2.759 6.162-6.162 0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <span className="font-semibold">Instagram Fun & More</span>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/imrohit007"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-zinc-900 text-white rounded-lg p-6 flex items-center gap-4">
                <div className="bg-white rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-6 h-6 text-gray-900"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                  <i className="fa-brands fa-github text-xl"></i>
                </div>
                <span className="font-semibold">GitHub</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 h-full">
          <Image
            src="/bob.jpg" 
            alt="Ninza7"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            quality={100}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-3xl mx-auto text-center text-white">
            <blockquote className="text-3xl font-semibold mb-4">
              &quot;Beginning Are Usually Scary, And Endings Are Usually Sad,
              But It&apos;s Everything In Between That Makes It All Worth
              Living&quot;
            </blockquote>
            <cite className="text-xl font-medium">- Bob Marley</cite>
          </div>
        </div>
      </section>
    </div>
  );
}
