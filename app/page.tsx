"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import {
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  Award,
  Briefcase,
  Code,
  User,
  Home,
  ChevronDown,
  Star,
  Zap,
  Rocket,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

function scrollToSection(sectionId: number) {
  const element = document.getElementById(`section-${sectionId}`)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

export default function InnovativePortfolio() {
  const [activeSection, setActiveSection] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [typedText, setTypedText] = useState("")
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll()
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100])
  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 })

  const sections = [
    { id: 0, title: "Accueil", icon: Home, color: "from-cyan-400 to-blue-600" },
    { id: 1, title: "À propos", icon: User, color: "from-purple-400 to-pink-600" },
    { id: 2, title: "Parcours", icon: Award, color: "from-green-400 to-teal-600" },
    { id: 3, title: "Expériences", icon: Briefcase, color: "from-orange-400 to-red-600" },
    { id: 4, title: "Projets", icon: Code, color: "from-indigo-400 to-purple-600" },
    { id: 5, title: "Compétences", icon: Zap, color: "from-yellow-400 to-orange-600" },
    { id: 6, title: "Contact", icon: Mail, color: "from-pink-400 to-rose-600" },
  ]

  const skills = [
    { name: "JavaScript/TypeScript", level: 95, category: "Frontend", icon: "⚡" },
    { name: "React.js/Next.js", level: 90, category: "Frontend", icon: "⚛️" },
    { name: "Vue.js", level: 85, category: "Frontend", icon: "💚" },
    { name: "Node.js", level: 90, category: "Backend", icon: "🟢" },
    { name: "PHP/Symfony", level: 85, category: "Backend", icon: "🐘" },
    { name: "Python", level: 80, category: "Backend", icon: "🐍" },
    { name: "Java/kotlin", level: 75, category: "Backend", icon: "☕" },
    { name: "MySQL/PostgreSQL", level: 90, category: "Database", icon: "🗄️" },
    { name: "MongoDB", level: 80, category: "Database", icon: "🍃" },
    { name: "Docker", level: 85, category: "DevOps", icon: "🐳" },
    { name: "Azure/AWS", level: 60, category: "Cloud", icon: "☁️" },
    { name: "OpenAI API", level: 60, category: "IA", icon: "🤖" },
    { name: "Git/GitHub", level: 95, category: "Tools", icon: "📚" },
    { name: "Figma", level: 80, category: "Design", icon: "🎨" },
    { name: "Agile/Scrum", level: 90, category: "Methodology", icon: "🔄" }
,
  ]

  const projects = [
    {
      id: 1,
      title: "Plateforme E-commerce",
      description: "Plateforme e-commerce avec recommandations et modules PrestaShop personnalisés, gestion de 200 000 produits.",
      image: "./fget.png",
      technologies: ["PrestaShop", "PHP", "MySQL", "JavaScript"],
      category: "fullstack",
      stats: { users: "10K+", performance: "99.9%", features: "50+" },
    },
    {
      id: 2,
      title: "API RESTful ERP - PrestaShop",
      description: "Mise en place d’une API RESTful entre l’ERP et PrestaShop pour automatiser et optimiser la gestion des articles, clients et tarifs, garantissant une communication fluide et un gain de productivité au quotidien",
      image: "/api.jpeg.webp",
      technologies: ["Node.js","postman", "Express.js","JWT","Helmet.js", "PostgreSQL", "Docker","Web service prestashop" , "Divalto web service", "MySQL"],
      category: "Backend",
      stats: { uptime: "99.8%", users: "500+" },
    },
    {
      id: 3,
      title: "Suivis de commandes clients",
      description: "Développement d’un système de suivi de commandes en temps réel, connecté à l’ERP, permettant aux clients d’accéder facilement à l’état de leurs commandes.",
      image: "/suivis.avif",
      technologies: ["Symphony","PHP", "Cron", "MongoDB", "Docker", "Nginx / Apache","Twig"],
      category: "Fullstack",
      stats: { endpoints: "100+", users: "400", latency: "<50ms" },
    },
    {
      id: 4,
      title: "Pipeline CI/CD Azure",
      description: "Automatisation complète avec GitLab CI/CD, tests automatisés et déploiement multi-environnements",
      image: "/azure.png",
      technologies: ["GitLab CI/CD", "Docker", "Azure DevOps", "Jenkins", "SonarQube"],
      category: "devops",
      stats: { deployments: "50+", success: "98%", time: "-70%" },
    },
     {
      id: 5,
      title: "Site e-commerce pour Devices",
      description: "Développement d’une application e-commerce sous Symfony avec gestion des utilisateurs, produits et commandes via un back-office sécurisé. Projet axé sur l’architecture MVC, la sécurité web et l’interaction avec une base de données relationnelle.",
      image: "/Jodevice.png",
      technologies: ["Symphony", "PHP 8+", "Twig", "Doctrin ORM", "MySQL", "Webpack encore", "AssetMapper", "Composer"],
      category: "Fullstack",
      stats: { success: "98%", time: "-70%" },
    },
     {
      id: 6,
      title: "Création d'un tableaux de bord et automatisation de tâches avec Python",
      description: "Développement d'une solutions Python pour l’automatisation de tâches répétitives et la génération de tableaux de bord, incluant le traitement de données, la visualisation  et la génération de rapports automatisés",
      image: "/Python.png",
      technologies: ["pandas","motplotlib", "seaborn", "strealit", "powerBI"],
      category: "Backend",
      stats: { success: "98%", time: "-70%" },
    },
  ]

  const experiences = [
    {
      title: "Lead Développeur Full Stack & Chef de Projet",
      company: "FGET INTERNATIONAL",
      period: "2022 - Aujourd'hui",
      type: "Alternance",
      description:
        "Architecture et développement d'applications web performantes, gestion d'équipe technique, intégration IA",
      achievements: [
        "Conception, développement et optimisation de sites web performants et évolutifs (Frontend & Backend).",
        "Intégration d’API RESTful sécurisées pour connecter les systèmes.",
        "Optimisation et gestion des bases de données MySQL, PostgreSQL et MongoDB.",
        "Développement de modules sur mesure pour PrestaShop",
        "Automatisation des processus métier pour améliorer la productivité",
        "conception et developpement d'application logiciels"
        
      ],
      technologies: ["React", "Node.js", "PHP","Java", "Azure", "OpenAI API ", "prestashop"],
    },
    {
      title: "Stagiaire Technique & Développeur",
      company: "XEFI",
      period: "2017 & 2020",
      type: "Stage",
      description: "Administration système, développement d'outils d'automatisation, gestion de l'infrastructure IT",
      achievements: [
        "Automatisation de 80% des tâches répétitives",
        "Développement d'outils internes en C",
        "Optimisation des performances serveurs",
        "Mise en place de protocoles de sécurité",
      ],
      technologies: ["C", "Windows Server", "HP Systems", "PowerShell"],
    },
    {
      title: "Développeur Web & Support Technique",
      company: "RIF INFORMATIQUE",
      period: "2017 & 2020",
      type: "Stage",
      description: "Développement web, maintenance technique, analyse des besoins clients",
      achievements: [
        "Refonte complète du site web",
        "Amélioration de 60% de l'UX",
        "Réduction de 50% des tickets support",
        "Mise en place d'un système de gestion des stocks",
      ],
      technologies: ["WordPress", "PHP", "JavaScript", "MySQL"],
    },
  ]

  const fullText = "Développeur Full Stack passionné par l'innovation"

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = Array.from({ length: 7 }, (_, i) => i)
      const currentSection = sections.find((sectionId) => {
        const element = document.getElementById(`section-${sectionId}`)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 200 && rect.bottom >= 200
        }
        return false
      })
      if (currentSection !== undefined) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            Jonas Mamola
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-gray-400 mt-2"
          >
            Chargement du portfolio...
          </motion.p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden" ref={containerRef}>
      {/* Arrière-plan géométrique statique */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl" />
        <div className="absolute top-1/4 right-20 w-24 h-24 bg-purple-400/10 rounded-full blur-lg" />
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-pink-400/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-green-400/10 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-yellow-400/10 rounded-full blur-2xl" />

        {/* Formes géométriques */}
        <div className="absolute top-1/3 left-1/6 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-transparent rotate-45" />
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-gradient-to-r from-purple-400/20 to-transparent rotate-12" />
        <div className="absolute top-3/4 left-3/4 w-12 h-12 bg-gradient-to-r from-pink-400/20 to-transparent -rotate-45" />
      </div>

      {/* Navigation circulaire */}
      <motion.nav
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40"
      >
        <div className="relative">
          <div className="w-32 h-32 rounded-full border border-cyan-400/30 backdrop-blur-sm bg-black/20">
            {sections.map((section, index) => {
              const angle = (index * 360) / sections.length
              const radius = 45
              const x = Math.cos((angle * Math.PI) / 180) * radius
              const y = Math.sin((angle * Math.PI) / 180) * radius

              return (
                <motion.button
                  key={section.id}
                  className={`absolute w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-gradient-to-r " + section.color + " text-white scale-125"
                      : "bg-white/10 text-gray-400 hover:text-white hover:scale-110"
                  }`}
                  style={{
                    left: `calc(50% + ${x}px - 16px)`,
                    top: `calc(50% + ${y}px - 16px)`,
                  }}
                  onClick={() => scrollToSection(section.id)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <section.icon className="w-4 h-4" />
                </motion.button>
              )
            })}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 z-50 origin-left"
        style={{ scaleX: pathLength }}
      />

      {/* Section Accueil */}
      <section id="section-0" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10 max-w-4xl mx-auto px-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 p-1"
          >
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <User className="w-20 h-20 text-cyan-400" />
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Jonas Mamola
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-2xl md:text-3xl text-gray-300 mb-8 h-12"
          >
            {typedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
              className="text-cyan-400"
            >
              |
            </motion.span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection(4)}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Découvrir mes projets
            </Button>
            <a
              href="/CV-2025-JM-A.pdf"
              download
              className="inline-flex items-center justify-center border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
            >
              <Download className="w-5 h-5 mr-2" />
              Télécharger CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: "5+", label: "Années d'expérience" },
              { number: "13+", label: "Projets réalisés" },
              { number: "7+", label: "Technologies maîtrisées" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 + index * 0.2 }}
                className="text-center"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </motion.div>
      </section>

      {/* Section À propos */}
      <section id="section-1" className="min-h-screen flex items-center py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-red-900/20" />

        <div className="max-w-7xl mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                À propos de moi
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl" />
                <Card className="relative bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-3xl overflow-hidden">
                  <CardContent className="p-8">
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                      Développeur Full Stack passionné par les technologies web modernes. Spécialisé dans la création
                      d'applications web performantes et évolutives, avec une forte expertise en{" "}
                      <span className="text-purple-400 font-semibold">API</span>,{" "}
                      <span className="text-pink-400 font-semibold">architecture logicielle</span>, et{" "}
                      <span className="text-cyan-400 font-semibold">intégration IA</span>.
                    </p>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                      J'interviens aussi bien en développement qu'en gestion de projet technique, avec une approche
                      Agile et une forte capacité d'innovation.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { icon: "🎯", title: "Autonomie", desc: "Gestion de projets complexes" },
                        { icon: "🚀", title: "Innovation", desc: "Intégration de nouvelles technologies" },
                        { icon: "🤝", title: "Collaboration", desc: "Travail en équipe Agile" },
                        { icon: "💡", title: "Créativité", desc: "Solutions techniques originales" },
                      ].map((trait, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20"
                        >
                          <div className="text-2xl mb-2">{trait.icon}</div>
                          <div className="text-purple-400 font-semibold text-sm">{trait.title}</div>
                          <div className="text-gray-400 text-xs mt-1">{trait.desc}</div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full h-96 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-pink-600/30 to-cyan-600/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="relative"
                  >
                    <div className="w-48 h-48 rounded-full border-4 border-purple-400/50 flex items-center justify-center">
                      <Code className="w-24 h-24 text-purple-400" />
                    </div>
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-4 h-4 bg-cyan-400 rounded-full"
                        style={{
                          left: `calc(50% + ${Math.cos((i * 45 * Math.PI) / 180) * 100}px - 8px)`,
                          top: `calc(50% + ${Math.sin((i * 45 * Math.PI) / 180) * 100}px - 8px)`,
                        }}
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.25 }}
                      />
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Parcours */}
      <section id="section-2" className="min-h-screen flex items-center py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-teal-900/20 to-cyan-900/20" />

        <div className="max-w-7xl mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                Mon Parcours
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-400 to-teal-400" />

            <div className="space-y-16">
              {[
                {
                  year: "2024-2025",
                  title: "Master Expert Développement Web",
                  school: "Ynov Campus",
                  desc: "Formation avancée en développement web full stack et gestion de projets techniques",
                  side: "left",
                },
                {
                  year: "2023-2024",
                  title: "Bachelor Développeur d'Application",
                  school: "AFIP Formation",
                  desc: "Formation complète en développement d'applications web et mobiles",
                  side: "right",
                },
                {
                  year: "2020-2022",
                  title: "BTS SIO - Option SLAM",
                  school: "AFIP Formation",
                  desc: "Solutions Logicielles et Applications Métiers",
                  side: "left",
                },
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: edu.side === "left" ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${edu.side === "left" ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-5/12 ${edu.side === "right" ? "text-right" : ""}`}>
                    <Card className="bg-black/40 backdrop-blur-sm border border-green-500/30 hover:border-green-400 transition-all duration-300">
                      <CardContent className="p-6">
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-3">{edu.year}</Badge>
                        <h3 className="text-xl font-bold text-green-400 mb-2">{edu.title}</h3>
                        <p className="text-gray-300 font-medium mb-2">{edu.school}</p>
                        <p className="text-gray-400 text-sm">{edu.desc}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-green-400 to-teal-400 rounded-full border-4 border-black" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Expériences */}
      <section id="section-3" className="min-h-screen flex items-center py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/20 to-pink-900/20" />

        <div className="max-w-7xl mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Expériences
              </span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/40 backdrop-blur-sm border border-orange-500/30 hover:border-orange-400 transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10" />
                    <CardContent className="p-8 relative">
                      <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                          <div className="flex items-center gap-4 mb-4">
                            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">{exp.type}</Badge>
                            <Badge variant="outline" className="border-gray-600 text-gray-300">
                              {exp.period}
                            </Badge>
                          </div>
                          <h3 className="text-2xl font-bold text-orange-400 mb-2">{exp.title}</h3>
                          <p className="text-xl text-gray-300 mb-4">{exp.company}</p>
                          <p className="text-gray-400 mb-6">{exp.description}</p>

                          <div className="space-y-2">
                            <h4 className="text-lg font-semibold text-orange-400">Réalisations clés :</h4>
                            {exp.achievements.map((achievement, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-3"
                              >
                                <Star className="w-4 h-4 text-yellow-400" />
                                <span className="text-gray-300">{achievement}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-orange-400 mb-4">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                className="bg-red-500/20 text-red-400 border-red-500/30 hover:scale-105 transition-transform"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section id="section-4" className="min-h-screen flex items-center py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20" />

        <div className="max-w-7xl mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Mes Projets
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-black/40 backdrop-blur-sm border border-indigo-500/30 hover:border-indigo-400 transition-all duration-300 overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-indigo-500/20 text-indigo-400 border-indigo-500/30">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-indigo-400 mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-purple-400">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} className="bg-purple-500/20 text-purple-400 border-purple-500/30 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                   
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      <section id="section-5" className="min-h-screen flex items-center py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-orange-900/20 to-red-900/20" />

        <div className="max-w-7xl mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Compétences
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-black/40 backdrop-blur-sm border border-yellow-500/30 hover:border-yellow-400 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{skill.icon}</div>
                    <h3 className="text-lg font-bold text-yellow-400 mb-2">{skill.name}</h3>
                    <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-4">
                      {skill.category}
                    </Badge>

                    <div className="relative">
                      <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                        <motion.div
                          className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <span className="text-sm text-yellow-400 font-semibold">{skill.level}%</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Card className="bg-black/40 backdrop-blur-sm border border-yellow-500/30 max-w-md mx-auto">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Langues</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">🇫🇷 Français</span>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Natif</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">🇬🇧 Anglais</span>
                    <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">B1+ Technique</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="section-6" className="min-h-screen flex items-center py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-rose-900/20 to-red-900/20" />

        <div className="max-w-7xl mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Contactez-moi
              </span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="bg-black/40 backdrop-blur-sm border border-pink-500/30">
                <CardContent className="p-12">
                  <h3 className="text-3xl font-bold text-pink-400 mb-8">Restons en contact</h3>

                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-center gap-4 p-6 rounded-xl bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300"
                    >
                      <Mail className="w-8 h-8 text-pink-400" />
                      <div className="text-center">
                        <div className="text-sm text-gray-400">Email</div>
                        <div className="text-xl text-gray-300 font-medium">jonaslev4@gmail.com</div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-center gap-4 p-6 rounded-xl bg-gradient-to-r from-rose-500/10 to-red-500/10 border border-rose-500/20 hover:border-rose-400/40 transition-all duration-300"
                    >
                      <MapPin className="w-8 h-8 text-rose-400" />
                      <div className="text-center">
                        <div className="text-sm text-gray-400">Localisation</div>
                        <div className="text-xl text-gray-300 font-medium">Lyon, France</div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="text-center">
  <h4 className="text-xl font-semibold text-pink-400 mb-6">Retrouvez-moi sur</h4>
  <div className="flex justify-center gap-6">
    {[
      { 
        icon: Github, 
        color: "hover:text-purple-400", 
        label: "GitHub", 
        href: "https://github.com/Jonasmam/Projets" 
      },
      { 
        icon: Linkedin, 
        color: "hover:text-blue-400", 
        label: "LinkedIn", 
        href: "https://www.linkedin.com/in/jonas-mamola-383b991b9/" 
      },
      { 
        icon: Mail, 
        color: "hover:text-pink-400", 
        label: "Email", 
        href: "mailto:jonaslev4@gmail.com" 
      },
    ].map((social, index) => (
      <motion.a
        key={index}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className={`group flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-r from-pink-500/20 to-rose-500/20 border border-pink-500/30 text-gray-400 ${social.color} transition-all duration-300 hover:border-pink-400/60`}
      >
        <social.icon className="w-8 h-8" />
        <span className="text-sm font-medium">{social.label}</span>
      </motion.a>
    ))}
  </div>
</div>
             <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6 }}
  viewport={{ once: true }}
  className="mt-12 text-center"
>
  <p className="text-gray-300 text-lg mb-6">
    Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter de vos projets !
  </p>
  <motion.a
    href="mailto:jonaslev4@gmail.com"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 text-lg rounded-full transition-all duration-300"
  >
    <Mail className="w-5 h-5 mr-2" />
    Envoyer un email
  </motion.a>
</motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black/60 backdrop-blur-sm border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-2">&copy; 2024 Jonas Mamola. Tous droits réservés.</p>
            <p className="text-sm text-gray-500">
              Développé avec{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Next.js
              </span>
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
