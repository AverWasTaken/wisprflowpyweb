'use client';

import { useState, useEffect } from "react";

export default function Home() {
  // Add rotating words feature
  const [wordIndex, setWordIndex] = useState(0);
  const rotatingWords = ["developers", "creators", "innovators", "builders", "makers"];
  
  // Set up word rotation with slower speed (4 seconds instead of 2)
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 4000); // Change word every 4 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="flex flex-col min-h-screen bg-black text-white relative overflow-hidden"
      style={{ 
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '25px 25px'
      }}
    >
      {/* All content wrapper with proper z-index */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header: Simple black header with minimal styling */}
        <header className="sticky top-0 z-50 w-full border-b border-gray-800/30 bg-black py-4">
          <div className="container mx-auto px-6 flex items-center justify-between">
            {/* Text Logo */}
            <span className="font-bold text-xl text-white">WisprFlowPy</span>

            {/* Navigation */}
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
                <a href="#features" className="hover:text-white transition-colors">Features</a>
                <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
                <a href="https://github.com/AverWasTaken/wisprflowpy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
              </nav>
              {/* GitHub Button */}
              <a
                href="https://github.com/AverWasTaken/wisprflowpy"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center justify-center px-4 py-2 border border-gray-800 text-sm font-medium rounded-md text-white bg-black hover:bg-gray-900 transition-colors"
              >
                View on GitHub
              </a>
              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 rounded-md text-gray-400 hover:bg-gray-900 hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex flex-col">
          {/* Hero Section: Centered with clean spacing */}
          <div className="flex-grow flex items-center justify-center py-16 md:py-20">
            <div className="container mx-auto px-6 text-center max-w-3xl">
              {/* Main headline with rotating words - improved layout */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-12">
                For 
                <span className="inline-flex relative mx-2 text-center">
                  {rotatingWords.map((word, index) => (
                    <span key={word} 
                          className="absolute left-0 right-0 text-center transition-opacity duration-1000"
                          style={{ opacity: wordIndex === index ? 1 : 0 }}>
                      {word}
                    </span>
                  ))}
                  {/* Invisible text with width of the longest word to maintain spacing */}
                  <span className="invisible">innovators</span>
                </span>
                by developers.
              </h1>
              
              {/* Description with better spacing and emphasis */}
              <p className="text-xl text-gray-400 mb-12">
                Effortless, <span className="text-white font-medium">open-source</span> voice dictation. Transcribe speech using <span className="text-white font-medium">OpenAI</span> &amp; <span className="text-white font-medium">OpenRouter APIs</span> with convenient <span className="text-white font-medium">keyboard shortcuts</span>. Pay only for what you use.
              </p>
              
              {/* GitHub Button */}
              <div className="mb-24">
                <a
                  href="https://github.com/AverWasTaken/wisprflowpy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-800 text-base font-medium rounded-md text-white bg-black hover:bg-gray-900 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a8 8 0 00-2.53 15.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0010 2z" clipRule="evenodd" />
                  </svg>
                  View on GitHub
                </a>
              </div>
              
              {/* Used by section */}
              <div className="mt-4">
                <p className="text-sm text-gray-500 mb-4">Used by developers:</p>
                <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-2 text-gray-500">
                  <span>Open Source Projects</span>
                  <span>Freelancers</span>
                  <span>Students</span>
                  <span>AI Enthusiasts</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <section id="features" className="py-24 bg-black/80">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-white mb-16">Features</h2>
              
              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Feature 1 */}
                <div className="p-6 border border-gray-800 rounded-lg bg-black">
                  <h3 className="font-semibold text-lg mb-3 text-white">Keyboard Shortcuts</h3>
                  <p className="text-gray-400">Use `Ctrl+Alt` for standard transcription or `Ctrl+Shift` for custom instructions.</p>
                </div>
                
                {/* Feature 2 */}
                <div className="p-6 border border-gray-800 rounded-lg bg-black">
                  <h3 className="font-semibold text-lg mb-3 text-white">Cost-Effective</h3>
                  <p className="text-gray-400">Pay-per-use via OpenAI/OpenRouter APIs. Significantly cheaper than subscriptions for many users.</p>
                </div>
                
                {/* Feature 3 */}
                <div className="p-6 border border-gray-800 rounded-lg bg-black">
                  <h3 className="font-semibold text-lg mb-3 text-white">Open Source</h3>
                  <p className="text-gray-400">Fully open-source on GitHub. Modify, contribute, and use it freely.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="py-24 bg-black/80">
            <div className="container mx-auto px-6 max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Simple Pay-as-you-go</h2>
              <p className="text-lg text-gray-400 mb-10">
                No subscriptions, no monthly fees. Only pay standard API costs for OpenAI or OpenRouter usage. Extremely cost-effective for many.
              </p>
              
              {/* Button */}
              <a
                href="https://github.com/AverWasTaken/wisprflowpy#cost-comparison"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-800 text-base font-medium rounded-md text-white bg-black hover:bg-gray-900 transition-colors"
              >
                See Cost Comparison
              </a>
            </div>
          </section>
        </main>

        {/* Footer: Minimal and clean */}
        <footer className="border-t border-gray-800/30 bg-black py-8">
          <div className="container mx-auto px-6 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} WisprFlowPy. Inspired by Flow.</p>
            <p className="mt-2">
              <a href="https://github.com/AverWasTaken/wisprflowpy" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300 transition-colors">GitHub</a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
