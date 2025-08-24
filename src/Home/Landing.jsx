import '../App.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import useNavigation from '../Utilities/AuthUtils'
import { 
  FiShield, 
  FiEye, 
  FiZap, 
  FiHeart, 
  FiUsers, 
  FiActivity,
  FiClock,
  FiCheckCircle,
  FiPlay,
  FiArrowRight,
  FiStar,
  FiSmartphone,
  FiCloud,
  FiLock
} from 'react-icons/fi'
import { Button } from '../components/ui/button'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion'

function Landing() {
    const {loginNavigate}=useNavigation();
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('detection')
  
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
    {/* Navigation */}
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AI-Guard
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Features', 'Use Cases', 'Pricing', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-white/5 rounded-lg"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <button
              onClick={loginNavigate}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white p-2"
            >
              <svg className={`h-6 w-6 transition-transform duration-300 ${menuOpen ? 'rotate-45' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
        className="md:hidden bg-black/95 backdrop-blur-lg border-b border-white/10 overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {['Features', 'Use Cases', 'Pricing', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => {
                scrollToSection(item.toLowerCase().replace(' ', '-'))
                setMenuOpen(false)
              }}
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left hover:bg-white/5 rounded-lg transition-colors duration-200"
            >
              {item}
            </button>
          ))}
          <button
            onClick={loginNavigate}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white block px-3 py-2 text-base font-medium w-full text-left rounded-lg mt-4"
          >
            Get Started
          </button>
        </div>
      </motion.div>
    </nav>

    {/* Hero Section */}
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/background.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-blue-900/40"></div>
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 backdrop-blur-sm mb-8"
            >
              <FiZap className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-200 text-sm font-medium">AI-Powered Security Platform</span>
              <FiArrowRight className="w-4 h-4 text-blue-400 ml-2" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                Intelligent Security
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                for Everyone
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Protect your loved ones with AI-driven monitoring that detects emergencies,
              unusual activity, and potential threats in real-time across any environment.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Button
                onClick={loginNavigate}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center"
              >
                Start Free Trial
                <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              
              <Button variant="outline" className="group flex items-center px-8 py-4 text-white font-semibold rounded-xl text-lg border border-white/20 hover:bg-white/10 transition-all duration-300">
                <FiPlay className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              {[
                { number: '99.9%', label: 'Detection Accuracy' },
                { number: '<2s', label: 'Response Time' },
                { number: '24/7', label: 'Monitoring' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section id="features" className="py-24 bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-blue-400 text-sm font-semibold tracking-wide uppercase mb-4"
          >
            Core Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Everything you need for complete security
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Our AI-powered platform combines cutting-edge technology with intuitive design
            to deliver unparalleled protection for any environment.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: FiEye,
              title: 'Smart Detection',
              description: 'Advanced computer vision AI that recognizes patterns, behaviors, and potential threats with industry-leading accuracy.',
              color: 'from-blue-500 to-cyan-500'
            },
            {
              icon: FiZap,
              title: 'Instant Alerts',
              description: 'Real-time notifications delivered to your devices the moment our AI detects unusual activity or emergencies.',
              color: 'from-purple-500 to-pink-500'
            },
            {
              icon: FiShield,
              title: 'Privacy First',
              description: 'All processing happens on-device or in secure cloud environments with end-to-end encryption.',
              color: 'from-green-500 to-teal-500'
            },
            {
              icon: FiSmartphone,
              title: 'Mobile Ready',
              description: 'Access your security dashboard, receive alerts, and monitor activity from anywhere using our mobile app.',
              color: 'from-orange-500 to-red-500'
            },
            {
              icon: FiCloud,
              title: 'Cloud Integration',
              description: 'Seamlessly sync data across devices with secure cloud storage and backup capabilities.',
              color: 'from-indigo-500 to-blue-500'
            },
            {
              icon: FiLock,
              title: 'Enterprise Grade',
              description: 'Built for scale with enterprise-grade security, compliance, and administrative controls.',
              color: 'from-gray-600 to-gray-800'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-gray-800/50 hover:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    {/* Use Cases Section */}
    <section id="use-cases" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-cyan-900/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-blue-400 text-sm font-semibold tracking-wide uppercase mb-4"
          >
            Use Cases
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Protecting what matters most
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            From elderly care to enterprise security, our AI adapts to any environment
            to provide the protection you need, when you need it most.
          </motion.p>
        </div>

        {/* Interactive Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'elderly', label: 'Elderly Care', icon: FiHeart },
              { id: 'healthcare', label: 'Healthcare', icon: FiActivity },
              { id: 'childcare', label: 'Child Safety', icon: FiUsers },
              { id: 'security', label: 'General Security', icon: FiShield }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              {activeTab === 'elderly' && (
                <>
                  <h3 className="text-3xl font-bold text-white mb-4">Elderly Care & Assisted Living</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Monitor for falls, unusual inactivity, and behavioral changes that could indicate health emergencies.
                    Our AI learns normal patterns and alerts caregivers when something seems wrong.
                  </p>
                  <div className="space-y-4">
                    {[
                      'Fall detection with 99.8% accuracy',
                      'Inactivity monitoring and alerts',
                      'Medication reminder integration',
                      'Emergency response coordination'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <FiCheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </>
              )}
              
              {activeTab === 'healthcare' && (
                <>
                  <h3 className="text-3xl font-bold text-white mb-4">Healthcare Facilities</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Enhance patient safety, monitor restricted areas, and ensure compliance with healthcare protocols
                    while maintaining privacy and HIPAA compliance.
                  </p>
                  <div className="space-y-4">
                    {[
                      'Patient monitoring and safety alerts',
                      'Restricted area access control',
                      'HIPAA compliant data handling',
                      'Staff performance insights'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <FiCheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </>
              )}

              {activeTab === 'childcare' && (
                <>
                  <h3 className="text-3xl font-bold text-white mb-4">Child Safety & Daycare</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Keep children safe with intelligent monitoring that detects dangerous situations, unauthorized access,
                    and ensures proper supervision ratios are maintained.
                  </p>
                  <div className="space-y-4">
                    {[
                      'Playground safety monitoring',
                      'Stranger danger detection',
                      'Supervision ratio compliance',
                      'Parent notification system'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <FiCheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </>
              )}

              {activeTab === 'security' && (
                <>
                  <h3 className="text-3xl font-bold text-white mb-4">General Security & Surveillance</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Comprehensive security solution for businesses, homes, and public spaces with intelligent
                    threat detection and automated response systems.
                  </p>
                  <div className="space-y-4">
                    {[
                      'Intrusion and theft prevention',
                      'Crowd behavior analysis',
                      'Vehicle and license plate recognition',
                      'Integration with existing security systems'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <FiCheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <div className="aspect-video bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl flex items-center justify-center mb-6">
                  <FiPlay className="w-16 h-16 text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">See it in action</h4>
                <p className="text-gray-400">Watch how our AI-powered security system works in real-world scenarios.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Social Proof Section */}
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Trusted by leading organizations</h3>
          <p className="text-gray-400">Join thousands of satisfied customers protecting what matters most</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center opacity-60">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center justify-center">
              <div className="w-32 h-16 bg-gray-700/30 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Logo {i}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <FiStar key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-xl lg:text-2xl text-gray-300 italic mb-6">
            "AI-Guard has transformed how we monitor our elderly care facility. The fall detection accuracy is incredible,
            and the instant alerts have literally saved lives. It's become an indispensable part of our care protocol."
          </blockquote>
          <cite className="text-gray-400">
            — Sarah Johnson, Director of Care at Sunrise Senior Living
          </cite>
        </motion.div>
      </div>
    </section>

    {/* Pricing Section */}
    <section id="pricing" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-blue-400 text-sm font-semibold tracking-wide uppercase mb-4"
          >
            Simple Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Choose your protection plan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Start with our free tier and upgrade as your needs grow. All plans include our core AI features.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              name: 'Starter',
              price: 'Free',
              period: 'Forever',
              description: 'Perfect for trying out our AI security features',
              features: [
                '1 camera connection',
                'Basic fall detection',
                'Mobile app access',
                'Email notifications',
                '7-day cloud storage'
              ],
              cta: 'Get Started Free',
              popular: false
            },
            {
              name: 'Professional',
              price: '$29',
              period: 'per month',
              description: 'Ideal for homes and small businesses',
              features: [
                'Up to 10 cameras',
                'Advanced AI detection',
                'Real-time alerts',
                'Mobile + SMS notifications',
                '30-day cloud storage',
                'Priority support'
              ],
              cta: 'Start 14-day trial',
              popular: true
            },
            {
              name: 'Enterprise',
              price: 'Custom',
              period: 'per month',
              description: 'For large facilities and organizations',
              features: [
                'Unlimited cameras',
                'Custom AI models',
                'API access',
                'White-label options',
                'Unlimited cloud storage',
                'Dedicated account manager'
              ],
              cta: 'Contact Sales',
              popular: false
            }
          ].map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular
                  ? 'border-blue-500 bg-gradient-to-br from-blue-900/20 to-cyan-900/20'
                  : 'border-gray-700 bg-gray-900/50 hover:border-gray-600'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 text-sm font-semibold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period !== 'Forever' && (
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <FiCheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={loginNavigate}
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 hover:border-gray-500'
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Frequently asked questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Everything you need to know about AI-Guard
          </motion.p>
        </div>

        <div className="space-y-6">
          {[
            {
              question: "How accurate is your AI detection system?",
              answer: "Our AI system achieves 99.9% accuracy in controlled environments and 98.5% in real-world scenarios. We continuously improve our models using machine learning and user feedback."
            },
            {
              question: "Is my privacy protected?",
              answer: "Absolutely. All video processing can be done on-device, and when cloud processing is used, data is encrypted end-to-end. We're GDPR compliant and never share your data with third parties."
            },
            {
              question: "How quickly do I receive alerts?",
              answer: "Alerts are sent within 2 seconds of detection. You'll receive notifications via mobile app, SMS, email, or integration with your existing security systems."
            },
            {
              question: "Can I integrate with my existing cameras?",
              answer: "Yes! AI-Guard works with most IP cameras and security systems. We support RTSP, ONVIF, and many proprietary protocols. Our team can help with custom integrations."
            },
            {
              question: "What happens if my internet goes down?",
              answer: "Our edge processing capabilities mean essential monitoring continues even without internet. Alerts are queued and sent when connectivity is restored."
            },
            {
              question: "Do you offer custom AI models?",
              answer: "Yes, for Enterprise customers we can develop custom AI models tailored to your specific use case and environment. Contact our sales team to discuss your requirements."
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50"
            >
              <Accordion type="single" collapsible>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="flex justify-between items-center p-6 cursor-pointer">
                    <h3 className="text-lg font-semibold text-white">
                      {faq.question}
                    </h3>
                    <svg className="w-6 h-6 text-gray-400 transition-all duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">Still have questions?</p>
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Contact Support
          </Button>
        </motion.div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Ready to secure what matters most?
          </h2>
          <p className="text-xl text-blue-100">
            Join thousands of satisfied customers and start protecting your loved ones today.
            Try AI-Guard free for 14 days, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={loginNavigate}
              className="px-8 py-4 bg-white text-blue-900 font-bold rounded-xl text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Free Trial
            </Button>
            <Button variant="outline" className="px-8 py-4 text-white font-semibold rounded-xl text-lg border-2 border-white/30 hover:bg-white/10 transition-all duration-300">
              Schedule Demo
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-8 text-blue-200 text-sm">
            <div className="flex items-center">
              <FiCheckCircle className="w-4 h-4 mr-2" />
              14-day free trial
            </div>
            <div className="flex items-center">
              <FiCheckCircle className="w-4 h-4 mr-2" />
              No setup fees
            </div>
            <div className="flex items-center">
              <FiCheckCircle className="w-4 h-4 mr-2" />
              Cancel anytime
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Enhanced Footer */}
    <footer id="contact" className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AI-Guard
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Protecting what matters most with intelligent AI-powered security solutions. 
              From elderly care to enterprise security, we've got you covered 24/7.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'linkedin', 'github', 'youtube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                >
                  <div className="w-5 h-5 bg-gray-400"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { label: 'Features', action: () => scrollToSection('features') },
                { label: 'Use Cases', action: () => scrollToSection('use-cases') },
                { label: 'Pricing', action: () => scrollToSection('pricing') },
                { label: 'Documentation', action: () => {} },
                { label: 'API Reference', action: () => {} }
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 text-blue-400 mr-3 mt-1">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Email</p>
                  <p className="text-gray-400">support@aiguard.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 text-blue-400 mr-3 mt-1">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Phone</p>
                  <p className="text-gray-400">+91 (123) 578-210</p>
                </div>
              </div>

              <div className="flex items-start">
                <FiClock className="w-6 h-6 text-blue-400 mr-3 mt-1" />
                <div>
                  <p className="text-gray-300 font-medium">Support Hours</p>
                  <p className="text-gray-400">24/7 Emergency Support</p>
                  <p className="text-gray-400 text-sm">Mon-Fri 9AM-6PM for general inquiries</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} AI-Guard. All rights reserved. Built with ❤️ for safer communities.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>

    </>
  )
}

export default Landing
