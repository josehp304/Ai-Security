import '../App.css'
import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import useNavigation from '../Utilities/AuthUtils'
function Landing() {
    const {loginNavigate}=useNavigation();
  const [menuOpen, setMenuOpen] = useState(false)
  const scrollToSection = (id) => {
  const section = document.getElementById(id);
  const navHeight = 88; // height of your fixed navbar

  if (section) {
    const sectionTop = section.offsetTop - navHeight;
    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  }
};

  return (
    <>
    <section id='home'>
      <div className="relative bg-[url('/background.jpg')] bg-cover bg-fixed bg-center min-h-screen w-full m-0">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-blue-900/50 z-0"></div>

    <nav className="relative z-20 flex justify-between items-center px-6 py-5 text-white">
      {/* Logo */}
      <div className="text-2xl font-extrabold tracking-wide">ThSecurity</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-lg font-medium">
        <li className="hover:text-blue-400 transition-colors cursor-pointer"
        onClick={() => {scrollToSection("home");
           setMenuOpen(!menuOpen)}}
        >Home</li>
        <li className="hover:text-blue-400 transition-colors cursor-pointer"
         onClick={() => scrollToSection("Service")}
        >Service</li>
    
        <li className="hover:text-blue-400 transition-colors cursor-pointer"
         onClick={() => scrollToSection("contact")}
        >Contact</li>
      </ul>


      <button
  className="md:hidden text-2xl transition-transform duration-300 relative z-[9999]"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? "✕" : "☰"}
</button>

    </nav>
   
<div
  className={`fixed top-[88px] left-0 w-full z-[9998] bg-black/90 md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
    menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
  }`}
>
  <ul className="flex flex-col items-center space-y-4 py-6 text-lg text-white">
    <li className="hover:text-blue-400 transition-colors cursor-pointer"
     onClick={() => {scrollToSection("home");
      setMenuOpen(false);
     }
     }
    >Home</li>
    <li className="hover:text-blue-400 transition-colors cursor-pointer"
     onClick={() =>{ scrollToSection("Service");
      setMenuOpen(false);
     }}
    >Service</li>
    <li className="hover:text-blue-400 transition-colors cursor-pointer"
     onClick={() => {scrollToSection("contact")
      setMenuOpen(false);
     }}
    >Contact</li>
  </ul>
</div>






        {/* Hero Section */}
       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col justify-center min-h-[calc(100vh-88px)] px-6 md:px-16"
        >
          <div className="max-w-4xl space-y-7 text-center md:text-left mx-auto">
            {/* Decorative line */}
            <div className="hidden md:block w-20 h-1 bg-blue-500 rounded-full mx-auto md:mx-0"></div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
            >
              <span className="block text-blue-400 uppercase tracking-widest text-lg sm:text-2xl lg:text-3xl font-semibold">
                Intelligent
              </span>
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                Security for the Modern World
              </span>
            </motion.h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light max-w-2xl mx-auto md:mx-0">
              AI-driven monitoring and detection with instant, reliable alerts
            </p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-gray-400 font-light"
            >
              Real-time monitoring · Instant alerts · Peace of mind
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex justify-center md:justify-start pt-4"
            >
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-500 rounded-lg text-center text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
              onClick={loginNavigate}
              >
                Get Started Now
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      </section>
{/* Applications Section with Enhanced Styling */}
<section id="Service" className="py-24 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-5 bg-[url('/grid-pattern.png')] bg-repeat"></div>
  
  <div className="relative z-10 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-block text-blue-400 text-base tracking-wider uppercase font-semibold mb-4 px-4 py-1.5 border border-blue-400/20 rounded-full"
      >
        AI-Powered Safety in Action
      </motion.span>
      <h2 className="text-4xl md:text-6xl font-bold mt-6 mb-8 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
        Smart Protection for Every Environment
      </h2>
      <p className="text-xl text-blue-100/90 max-w-3xl mx-auto font-light leading-relaxed ">
        From elderly care to child safety, hospitals to public spaces — our AI-driven system offers
        precise, real-time alerts to protect what matters most.
      </p>

      
    </div>

    <div className="grid md:grid-cols-3 gap-10">
      {/* Enhanced Card Styling */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="group p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
      >
        {/* ... existing icon code ... */}
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
          Elderly Care
        </h3>
        <p className="text-gray-300 leading-relaxed font-light">
          Detect falls, inactivity, and unusual movement patterns to keep elderly loved ones safe at home or in care facilities.
        </p>

        
      </motion.div>

            <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="group p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
      >
        {/* ... existing icon code ... */}
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
        Babies & Disabled-Aided Care
        </h3>
        <p className="text-gray-300 leading-relaxed font-light">
         Monitor movements, detect unusual activity, and provide instant alerts to ensure the safety of babies and individuals with disabilities—whether at home, in daycare, or in assisted living facilities.
        </p>

        
      </motion.div>

            <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="group p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
      >
        {/* ... existing icon code ... */}
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
         Hospital & Healthcare Facility Security
        </h3>
        <p className="text-gray-300 leading-relaxed font-light">
          Protect patients, staff, and sensitive areas with AI-based monitoring and instant alerts.
        </p>

        
      </motion.div>

      {/* Repeat similar styling for other cards */}
    </div>
  </div>
</section>

{/* Enhanced Why Choose Us Section */}
<section id="why" className="py-24 px-6 bg-gradient-to-b from-black to-gray-900 relative">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-block text-blue-400 text-base tracking-wider uppercase font-semibold mb-4 px-4 py-1.5 border border-blue-400/20 rounded-full"
      >
        Why Choose Our AI Security?
      </motion.span>
      <h2 className="text-4xl md:text-6xl font-bold mt-6 mb-8 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
        Built for Life-Saving Accuracy
      </h2>
    </div>

    <div className="grid md:grid-cols-3 gap-10 ">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="group p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
      >
        <div className="w-12 h-12 mb-6 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-all duration-300">
          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
          Unmatched Detection Accuracy
        </h3>
        <p className="text-gray-300 leading-relaxed font-light">
          Advanced AI reduces false positives and detects real threats instantly.
        </p>
      </motion.div>
      
         <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="group p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
      >
        <div className="w-12 h-12 mb-6 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-all duration-300">
          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
       Versatile Protection
        </h3>
        <p className="text-gray-300 leading-relaxed font-light">
        From elderly care to home security, schools, workplaces, and public spaces — one solution covers it all.
        </p>
      </motion.div>

         <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="group p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
      >
        <div className="w-12 h-12 mb-6 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-all duration-300">
          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
        24/7 Peace of Mind
        </h3>
        <p className="text-gray-300 leading-relaxed font-light">
         Round-the-clock monitoring means your loved ones, property, and spaces are always protected.
        </p>
      </motion.div>
      {/* Repeat similar styling for other features */}
    </div>
  </div>
</section>

{/* Enhanced Footer */}
<footer className="bg-gradient-to-b from-gray-900 to-black py-16 px-6 border-t border-gray-800">
  <section id="contact">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2  gap-12 md:gap-30">
   
      
      <div>
        <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
        <ul className="space-y-4">
          <li>
            <div className= "text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 cursor-pointer"
             onClick={() => scrollToSection("home")}>
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
        Home
            </div>

             <div className= "text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 cursor-pointer"
                onClick={() => scrollToSection("Service")}>
             
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                Service
           
            </div>

             <div className= "text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 cursor-pointer"
                    onClick={() => scrollToSection("why")}>
        
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
              
                Why Choose us
      
            </div>
          </li>
          {/* Repeat for other links */}
        </ul>
      </div>
      
      <div>
        <h4 className="text-xl font-bold text-white mb-6">Contact</h4>
        <div className="space-y-4">
          <p className="text-gray-400 flex items-center gap-3">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            support@aiguard.com
          </p>
          <p className="text-gray-400 flex items-center gap-3">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +91 (123) 57821
          </p>
        </div>
      </div>
    </div>

    <div className="mt-16 pt-8 border-t border-gray-800 text-center">
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} ThSecurity. All rights reserved.
      </p>
    </div>
  </div>
  </section>
</footer>


    </>
  )
}

export default Landing
