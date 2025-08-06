import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const kommunicateScript = document.createElement("script");
    kommunicateScript.type = "text/javascript";
    kommunicateScript.async = true;
    kommunicateScript.src = "https://widget.kommunicate.io/v2/kommunicate.app";
    document.head.appendChild(kommunicateScript);

    (window as any).kommunicate = (window as any).kommunicate || {};
    (window as any).kommunicate._globals = {
      appId: "3848467774e2be5f1902af511b61f09f8", // ⬅️ Replace with your actual Kommunicate App ID
      popupWidget: true,
      automaticChatOpenOnNavigation: true,
    };

    const cssChanges = `
      .mck-msg-right .mck-msg-box {
        background-color: #12065eff !important;
        color: white !important;
        border-radius: 20px !important;
      }

      .mck-msg-left .mck-msg-box {
        background-color: #98dae6ab !important;
        color: #000 !important;
        border-radius: 20px !important;
      }

      .mck-header {
        background-color: #010716ff !important;
        color: white !important;
        font-size: 16px !important;
        font-weight: bold !important;
      }
    `;

    const interval = setInterval(() => {
      if (
        (window as any).Kommunicate &&
        typeof (window as any).Kommunicate.customizeWidgetCss === "function"
      ) {
        (window as any).Kommunicate.customizeWidgetCss(cssChanges);
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Portfolio />
        <Testimonials />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );

  
}

export default App;