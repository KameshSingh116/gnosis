'use client'

import React from 'react'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1B1E3D] flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[56px] font-bold mb-6 leading-[1.15]">
          <span className="bg-gradient-to-r from-[#67B7FF] via-[#8C7FFF] to-[#A76FFF] bg-clip-text text-transparent inline-block">
            Empowering Education and<br />
            Resolving Social<br />
            Grievances with AI
          </span>
        </h1>
        <p className="text-[#A3A3A3] text-xl mb-8 max-w-[640px] mx-auto leading-[1.6]">
          Join our vibrant community where learning meets social impact. Discover AI-powered tools that make education fun and help resolve grievances effectively.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button 
            className="px-7 py-3 rounded-lg bg-gradient-to-r from-[#4361EE] to-[#7B2FBF] text-white font-medium hover:opacity-90 transition-opacity flex items-center group"
          >
            Get Started
            <svg 
              className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-0.5" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                clipRule="evenodd" 
              />
            </svg>
          </button>
          <button 
            className="px-7 py-3 rounded-lg border border-[#2A2E4D] text-white font-medium hover:bg-white/5 transition-colors"
          >
            Learn More
          </button>
        </div>
      </div>
    </main>
  )
}

