'use client'

import { useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold gradient-text">Intelliwave</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#accueil" className="text-gray-300 hover:text-white transition">Accueil</a>
              <a href="#services" className="text-gray-300 hover:text-white transition">Services</a>
              <a href="#processus" className="text-gray-300 hover:text-white transition">Processus</a>
              <a href="#avantages" className="text-gray-300 hover:text-white transition">Avantages</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-300 hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        {menuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#accueil" className="block px-3 py-2 text-gray-300 hover:text-white transition">Accueil</a>
              <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-white transition">Services</a>
              <a href="#processus" className="block px-3 py-2 text-gray-300 hover:text-white transition">Processus</a>
              <a href="#avantages" className="block px-3 py-2 text-gray-300 hover:text-white transition">Avantages</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white transition">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Intelliwave</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Agence d&apos;Automatisation AI & Création de Chatbots sur Mesure
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
            Spécialiste en automatisation avec n8n et développement de chatbots intelligents.
            Transformez votre entreprise avec l&apos;intelligence artificielle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition shadow-lg hover:shadow-xl">
              Demander un Devis
            </a>
            <a href="#services" className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition border border-white/20">
              Découvrir nos Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Nos Services</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Des solutions d&apos;IA sur mesure pour automatiser et optimiser votre entreprise
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 p-8 rounded-xl border border-purple-500/20 card-hover backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Chatbots Intelligents</h3>
              <p className="text-gray-300 mb-4">
                Création de chatbots conversationnels sur mesure, alimentés par l&apos;IA pour offrir une expérience client exceptionnelle 24/7.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>✓ Support client automatisé</li>
                <li>✓ Qualification de leads</li>
                <li>✓ Intégration multicanale</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 p-8 rounded-xl border border-purple-500/20 card-hover backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Automatisation n8n</h3>
              <p className="text-gray-300 mb-4">
                Workflows d&apos;automatisation puissants avec n8n pour connecter vos outils et optimiser vos processus métier.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>✓ Intégration d&apos;applications</li>
                <li>✓ Automatisation des tâches</li>
                <li>✓ Workflows personnalisés</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 p-8 rounded-xl border border-purple-500/20 card-hover backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Conseil & Stratégie IA</h3>
              <p className="text-gray-300 mb-4">
                Audit et consultation pour identifier les opportunités d&apos;automatisation et d&apos;IA dans votre entreprise.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>✓ Analyse des besoins</li>
                <li>✓ Stratégie d&apos;implémentation</li>
                <li>✓ Formation et accompagnement</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 p-8 rounded-xl border border-purple-500/20 card-hover backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Assistants IA Personnalisés</h3>
              <p className="text-gray-300 mb-4">
                Développement d&apos;assistants virtuels intelligents adaptés à vos besoins spécifiques et votre secteur d&apos;activité.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>✓ Formation sur vos données</li>
                <li>✓ Traitement du langage naturel</li>
                <li>✓ Amélioration continue</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 p-8 rounded-xl border border-purple-500/20 card-hover backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Intégrations API</h3>
              <p className="text-gray-300 mb-4">
                Connexion fluide entre vos systèmes existants et les nouvelles solutions d&apos;IA pour une automatisation complète.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>✓ CRM, ERP, bases de données</li>
                <li>✓ APIs tierces</li>
                <li>✓ Synchronisation en temps réel</li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 p-8 rounded-xl border border-purple-500/20 card-hover backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Support & Maintenance</h3>
              <p className="text-gray-300 mb-4">
                Support technique continu et maintenance de vos solutions d&apos;IA pour garantir des performances optimales.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>✓ Monitoring 24/7</li>
                <li>✓ Mises à jour régulières</li>
                <li>✓ Support réactif</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="processus" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Notre Processus</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Une méthodologie éprouvée pour des résultats garantis
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Découverte</h3>
              <p className="text-gray-400">
                Analyse approfondie de vos besoins et objectifs business
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Conception</h3>
              <p className="text-gray-400">
                Design de la solution et architecture technique adaptée
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Développement</h3>
              <p className="text-gray-400">
                Création et configuration de votre solution sur mesure
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Déploiement</h3>
              <p className="text-gray-400">
                Mise en production et formation de vos équipes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="avantages" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Pourquoi Intelliwave ?</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Les avantages de travailler avec notre agence
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800/30 to-purple-900/20 p-6 rounded-xl border border-purple-500/10 backdrop-blur-sm">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Expertise Technique</h3>
              <p className="text-gray-400">
                Maîtrise complète de n8n, des LLMs et des technologies d&apos;IA les plus récentes
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/30 to-purple-900/20 p-6 rounded-xl border border-purple-500/10 backdrop-blur-sm">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Rapidité de Déploiement</h3>
              <p className="text-gray-400">
                Mise en place rapide de solutions opérationnelles pour un ROI immédiat
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/30 to-purple-900/20 p-6 rounded-xl border border-purple-500/10 backdrop-blur-sm">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-white mb-3">Solutions Sur Mesure</h3>
              <p className="text-gray-400">
                Chaque projet est unique, nos solutions sont adaptées à vos besoins spécifiques
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/30 to-purple-900/20 p-6 rounded-xl border border-purple-500/10 backdrop-blur-sm">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-3">ROI Mesurable</h3>
              <p className="text-gray-400">
                Réduction des coûts opérationnels et augmentation de la productivité
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/30 to-purple-900/20 p-6 rounded-xl border border-purple-500/10 backdrop-blur-sm">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-3">Sécurité & Fiabilité</h3>
              <p className="text-gray-400">
                Solutions sécurisées et conformes aux normes de protection des données
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/30 to-purple-900/20 p-6 rounded-xl border border-purple-500/10 backdrop-blur-sm">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-white mb-3">Accompagnement Continu</h3>
              <p className="text-gray-400">
                Support et évolution de vos solutions au fil de vos besoins
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold gradient-text mb-2">100%</div>
              <p className="text-gray-400">Satisfaction Client</p>
            </div>
            <div>
              <div className="text-5xl font-bold gradient-text mb-2">50+</div>
              <p className="text-gray-400">Projets Réalisés</p>
            </div>
            <div>
              <div className="text-5xl font-bold gradient-text mb-2">80%</div>
              <p className="text-gray-400">Gain de Temps Moyen</p>
            </div>
            <div>
              <div className="text-5xl font-bold gradient-text mb-2">24/7</div>
              <p className="text-gray-400">Support Disponible</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Prêt à Transformer Votre Entreprise ?</span>
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Contactez-nous pour discuter de votre projet d&apos;automatisation et de chatbot
          </p>

          <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 p-8 md:p-12 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-gray-300 mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="nom"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="entreprise" className="block text-sm font-medium text-gray-300 mb-2">
                  Entreprise
                </label>
                <input
                  type="text"
                  id="entreprise"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Nom de votre entreprise"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Service Souhaité
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option>Chatbot Intelligent</option>
                  <option>Automatisation n8n</option>
                  <option>Conseil & Stratégie IA</option>
                  <option>Assistant IA Personnalisé</option>
                  <option>Intégration API</option>
                  <option>Support & Maintenance</option>
                  <option>Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Décrivez votre projet..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition shadow-lg hover:shadow-xl"
              >
                Envoyer la Demande
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-purple-500/20">
              <div className="text-center text-gray-400">
                <p className="mb-2">Ou contactez-nous directement :</p>
                <p className="text-white font-semibold">📧 contact@intelliwave.fr</p>
                <p className="text-white font-semibold">📞 +33 1 23 45 67 89</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold gradient-text mb-4">Intelliwave</h3>
              <p className="text-gray-400 text-sm">
                Votre partenaire en automatisation AI et chatbots intelligents
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Chatbots IA</li>
                <li>Automatisation n8n</li>
                <li>Conseil Stratégique</li>
                <li>Support & Maintenance</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Entreprise</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>À propos</li>
                <li>Nos réalisations</li>
                <li>Blog</li>
                <li>Carrières</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Légal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Mentions légales</li>
                <li>Confidentialité</li>
                <li>CGV</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-400 text-sm pt-8 border-t border-purple-500/20">
            <p>&copy; 2024 Intelliwave. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
