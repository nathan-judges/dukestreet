"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-screen bg-dark/50">
      <div className="flex justify-between items-center self-stretch py-5 px-16">
        {/* Text wrapper */}
        <div className="flex flex-col items-start">
          {/* "Sydney Based" */}
          <p className="text-white font-archivo text-xl font-normal font-medium leading-[30px] m-0">
            Sydney Based
          </p>
          {/* "Working nation-wide" */}
          <p className="text-white font-archivo text-xl font-normal font-medium leading-[30px] mix-blend-overlay m-0">
            Working nation-wide
          </p>
        </div>

        {/* Button */}
        <button className="flex py-3 px-4 justify-center items-center gap-2.5 rounded-[20px] bg-white">
          {/* Button text */}
          <span className="text-dark font-archivo text-xl font-normal font-medium leading-[28px]">
            Get in touch
          </span>
        </button>
      </div>
    </nav>
  );
} 