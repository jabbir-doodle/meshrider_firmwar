'use client';

import { motion } from 'framer-motion';
import { Globe, Download, Languages, Zap, Users, ArrowRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function MultiLanguagePage() {
  const supportedLanguages = [
    {
      code: 'uk',
      name: 'Ukrainian',
      nativeName: 'Українська',
      flag: '🇺🇦'
    },
    {
      code: 'de',
      name: 'German',
      nativeName: 'Deutsch',
      flag: '🇩🇪'
    },
    {
      code: 'en',
      name: 'English',
      nativeName: 'English',
      flag: '🇺🇸'
    }
  ];

  const features = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Expanding Mesh Rider capabilities to serve users worldwide with native language support'
    },
    {
      icon: Languages,
      title: 'Native Translation',
      description: 'Professionally translated interface and documentation for seamless user experience'
    },
    {
      icon: Zap,
      title: 'Same Performance',
      description: 'All the power and reliability of Mesh Rider with localized user interface'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Built with feedback from our global community of radio professionals'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      <div className="tech-grid fixed inset-0 opacity-20"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20">
          <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Announcement Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8"
              >
                <Globe className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-400 text-sm font-medium">🎉 New Release • Multilanguage Support</span>
              </motion.div>

              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <Image
                  src="/logo_doodle.png"
                  alt="Mesh Rider Logo"
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </motion.div>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                <span className="gradient-text">Mesh Rider Goes Global</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl text-gray-400 mb-4"
              >
                Now Supporting Ukrainian & German Languages
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto"
              >
                Experience the full power of Mesh Rider Web in your native language.
                Professional-grade mesh networking tools with localized interfaces and documentation.
              </motion.p>

              {/* Download Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-16"
              >
                <a
                  href="https://doodlelabs.sharepoint.com/:f:/s/DevelopmentLibrary/Ev8Y5G40cjxGmqVwOMVL9OMB6rN8Wtbsx6V4uhKEGf-ouA?e=fyDhWO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-xl hover:shadow-green-500/25 transition-all neon-glow"
                >
                  <Download className="w-5 h-5 mr-2" />
                  <span>Download Latest Test Build Firmware</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              {/* Language Support Grid */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
              >
                {supportedLanguages.map((lang, index) => (
                  <motion.div
                    key={lang.code}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all group"
                  >
                    <div className="text-4xl mb-3">{lang.flag}</div>
                    <div className="text-xl font-bold text-white mb-1">{lang.nativeName}</div>
                    <div className="text-sm text-gray-400">{lang.name}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Why Multilanguage Matters</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Breaking down language barriers to bring advanced mesh networking technology to professionals worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all group"
                >
                  <feature.icon className="w-12 h-12 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What's New Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">What's New in This Release</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-6">
                  {[
                    'Complete Ukrainian interface translation',
                    'Full German language support',
                    'Localized documentation and help files',
                    'Cultural adaptation for regional preferences',
                    'Enhanced accessibility features',
                    'Same powerful automation capabilities'
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <span className="text-gray-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="glass-effect rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Download Now</h3>
                <p className="text-gray-400 mb-6">
                  Get the latest Mesh Rider firmware with full multilanguage support.
                  Compatible with all existing hardware configurations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Version:</span>
                    <span className="text-green-400 font-mono">v2.0.6</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Size:</span>
                    <span className="text-green-400 font-mono">~13 MB</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Languages:</span>
                    <span className="text-green-400 font-mono">EN, DE, UK</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-effect rounded-2xl p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">Ready to Experience Mesh Rider in Your Language?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join thousands of professionals worldwide using Mesh Rider for mission-critical communications
              </p>
              <a
                href="https://doodlelabs.sharepoint.com/:f:/s/DevelopmentLibrary/Ev8Y5G40cjxGmqVwOMVL9OMB6rN8Wtbsx6V4uhKEGf-ouA?e=fyDhWO"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-medium text-lg hover:shadow-xl hover:shadow-green-500/25 transition-all neon-glow"
              >
                <Download className="w-6 h-6 mr-3" />
                <span>Download Latest Test Build Firmware</span>
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </section>
      </motion.div>

      {/* Floating particles effect */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0
            }}
            animate={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </main>
  );
}