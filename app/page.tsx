"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Zap, Target, Instagram, Linkedin, Mail, Phone, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

// Loading components
import { LoadingSpinner } from "@/components/loading/spinner"
import { TeamSectionLoader, EventsSectionLoader, AboutSectionLoader } from "@/components/loading/section-loader"
import { ImageWithLoader } from "@/components/loading/image-loader"
import { Spinner } from "@/components/loading/spinner"

// Haptic components
import { HapticButton } from "@/components/ui/haptic-button"
import { HapticCard } from "@/components/ui/haptic-card"
import { useHaptic } from "@/hooks/use-haptic"
import { HapticIndicator } from "@/components/ui/haptic-indicator"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function AIMLClubWebsite() {
  const [isPageLoading, setIsPageLoading] = useState(true)
  const [sectionsLoading, setSectionsLoading] = useState({
    about: true,
    events: true,
    team: true,
  })
  const [formSubmitting, setFormSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const router = useRouter()

  const { triggerSuccess, triggerError, triggerSelection, isSupported } = useHaptic()

  // Simulate page loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Simulate section loading with staggered delays
  useEffect(() => {
    if (!isPageLoading) {
      const timers = [
        setTimeout(() => setSectionsLoading((prev) => ({ ...prev, about: false })), 500),
        setTimeout(() => setSectionsLoading((prev) => ({ ...prev, events: false })), 1000),
        setTimeout(() => setSectionsLoading((prev) => ({ ...prev, team: false })), 1500),
      ]

      return () => timers.forEach(clearTimeout)
    }
  }, [isPageLoading])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("Form submitted:", formData)
      setFormData({ name: "", email: "", message: "" })

      // Trigger success haptic feedback
      if (isSupported) {
        triggerSuccess()
      }
    } catch (error) {
      // Trigger error haptic feedback
      if (isSupported) {
        triggerError()
      }
    } finally {
      setFormSubmitting(false)
    }
  }

  const events = [
    {
      title: "AI Workshop: Introduction to Neural Networks",
      date: "March 15, 2024",
      location: "Tech Lab 101",
      description: "Hands-on bootcamp covering TensorFlow, neural networks, and practical AI model development.",
      image: "/placeholder.svg?height=240&width=400",
      type: "upcoming",
    },
    {
      title: "AIML Fest 2024 - Annual Technology Festival",
      date: "February 20-22, 2024",
      location: "Main Campus",
      description: "Three-day annual fest featuring workshops, exhibitions, debates, and competitions.",
      image: "/placeholder.svg?height=240&width=400",
      type: "past",
    },
    {
      title: "Research Paper Reading Session",
      date: "January 28, 2024",
      location: "Seminar Hall",
      description: "Monthly session exploring cutting-edge AI innovations and research developments.",
      image: "/placeholder.svg?height=240&width=400",
      type: "past",
    },
  ]

  const teamMembers = [
    // Leadership Team
    {
      name: "Vishal Kumar",
      role: "President",
      image: "/placeholder.svg?height=200&width=200",
      description: "Leading the AI & ML Club with vision and dedication to foster innovation and learning.",
      email: "vg8904937@gmail.com",
      phone: "+91 6299200082",
      rollNumber: "President",
      cgpa: "N/A",
      skills: ["Leadership", "AI/ML", "Management"],
      category: "leadership",
      socialLinks: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Umesh Patel",
      role: "Vice President",
      image: "/placeholder.svg?height=200&width=200",
      description: "Supporting the president and overseeing strategic initiatives for club growth and development.",
      email: "N/A",
      phone: "N/A",
      rollNumber: "N/A",
      cgpa: "N/A",
      skills: ["Leadership", "Strategy", "Management"],
      category: "leadership",
      socialLinks: {
        linkedin: "#",
        github: "#",
      },
    },

    // Technical Team
    {
      name: "Kinshuk Verma",
      role: "Tech Lead",
      image: "/placeholder.svg?height=200&width=200",
      description: "Spearheading technical projects and managing AI/ML workshops and coding events.",
      email: "0126al231076@oriental.ac.in",
      phone: "N/A",
      rollNumber: "0126AL231076",
      cgpa: "7.23",
      skills: ["AI/ML", "DSA", "Python"],
      category: "technical",
      socialLinks: {
        linkedin: "#",
        github: "https://github.com/kinshukve",
      },
    },
    {
      name: "Prince Kumar",
      role: "Discipline Head",
      image: "/placeholder.svg?height=200&width=200",
      description: "Ensuring smooth club operations and maintaining professional standards.",
      email: "princekumar2012010@gmail.com",
      phone: "+91 9470280758",
      rollNumber: "0126AL231101",
      cgpa: "8.13",
      skills: ["MERN Stack", "Java", "Event Management"],
      category: "technical",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/prince-kumar-347b87325",
        github: "#",
      },
    },

    // Event Management Team
    {
      name: "Aarchi Sharma",
      role: "Event Head",
      image: "/placeholder.svg?height=200&width=200",
      description: "Organizing impactful workshops and events with leadership experience.",
      email: "aarchisharma320@gmail.com",
      phone: "+91 6266091145",
      rollNumber: "0126AL231001",
      cgpa: "7.17",
      skills: ["Python", "Java", "Leadership"],
      category: "events",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/aarchi-sharma-16b6a1356",
        github: "#",
      },
    },
    {
      name: "Parul Ajit",
      role: "Event Head",
      image: "/placeholder.svg?height=200&width=200",
      description: "Coordinating hackathons and technical competitions with iCell experience.",
      email: "parulajit907@gmail.com",
      phone: "+91 8602691174",
      rollNumber: "0126AL231092",
      cgpa: "7.77",
      skills: ["Python", "Java", "DSA"],
      category: "events",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/parul-ajit-4893252a6",
        github: "#",
      },
    },
    {
      name: "Gourav Jain",
      role: "Event Head",
      image: "/placeholder.svg?height=200&width=200",
      description: "Planning and executing educational events with team collaboration skills.",
      email: "gjain9279@gmail.com",
      phone: "+91 9188780945",
      rollNumber: "0126AL231055",
      cgpa: "6.5",
      skills: ["Python", "Teamwork", "Planning"],
      category: "events",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/gourav-jain-b1a358352",
        github: "#",
      },
    },

    // Media Team
    {
      name: "Prakhar Sahu",
      role: "Media Relations",
      image: "/placeholder.svg?height=200&width=200",
      description: "Managing external communications and media relations for the club.",
      email: "prakharsahu150@gmail.com",
      phone: "+91 9584060146",
      rollNumber: "0126AL231098",
      cgpa: "7.1",
      skills: ["Data Science", "Communication", "Media"],
      category: "media",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/prakhar-sahu-958718281",
        github: "#",
      },
    },
    {
      name: "Khushi Kumari",
      role: "Media",
      image: "/placeholder.svg?height=200&width=200",
      description: "Creating engaging content and managing social media presence for the club.",
      email: "khushikumari89934@gmail.com",
      phone: "+91 8789498277",
      rollNumber: "0126AL231075",
      cgpa: "7.73",
      skills: ["Photography", "Videography", "Design"],
      category: "media",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/khushi-kumari-56aa16276",
        github: "#",
      },
    },
    {
      name: "Arpit Mistrel",
      role: "Media",
      image: "/placeholder.svg?height=200&width=200",
      description: "Supporting media operations and content creation for club activities.",
      email: "N/A",
      phone: "N/A",
      rollNumber: "N/A",
      cgpa: "N/A",
      skills: ["Content Creation", "Design", "Media"],
      category: "media",
      socialLinks: {
        linkedin: "#",
        github: "#",
      },
    },

    // Editorial Team
    {
      name: "Abhijeet Sarkar",
      role: "Editor",
      image: "/placeholder.svg?height=200&width=200",
      description: "Curating and editing technical content, newsletters, and multimedia content for club publications.",
      email: "abhijeetworld2tech@gmail.com",
      phone: "+91 9111800236",
      rollNumber: "0126al231004",
      cgpa: "7.5",
      skills: ["Video Editing", "Content Creation", "PPT Design"],
      category: "editorial",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/abhijeet-sarkar-7984111ab",
        github: "#",
      },
    },
    {
      name: "Pritish Mandal",
      role: "Editor",
      image: "/placeholder.svg?height=200&width=200",
      description: "Managing video content creation and editing for workshops, events, and social media promotion.",
      email: "pritishkumar28@gmail.com",
      phone: "+91 7067963041",
      rollNumber: "0126AL231102",
      cgpa: "7.53",
      skills: ["Video Shooting", "Video Editing", "Content Creation"],
      category: "editorial",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/pritish-mandal-4659462a8",
        github: "#",
      },
    },

    // Stage Team
    {
      name: "Heer Rajesh Murjani",
      role: "Stage Lead",
      image: "/placeholder.svg?height=200&width=200",
      description: "Coordinating stage presentations and serving as club anchor with frontend development skills.",
      email: "heermurjani2004@gmail.com",
      phone: "+91 8966061631",
      rollNumber: "0126AL231061",
      cgpa: "6.9",
      skills: ["Frontend Development", "Public Speaking", "Event Anchoring"],
      category: "stage",
      socialLinks: {
        linkedin: "http://linkedin.com/in/heer-murjani-a47449277",
        github: "#",
      },
    },
    {
      name: "Anshul Sharma",
      role: "Stage Lead",
      image: "/placeholder.svg?height=200&width=200",
      description: "Overseeing technical setups and ensuring smooth execution of presentations and events.",
      email: "N/A",
      phone: "N/A",
      rollNumber: "N/A",
      cgpa: "N/A",
      skills: ["Technical Setup", "Event Management", "Presentation Coordination"],
      category: "stage",
      socialLinks: {
        linkedin: "#",
        github: "#",
      },
    },
  ]

  // Group team members by category for better organization
  const teamCategories = {
    leadership: teamMembers.filter((member) => member.category === "leadership"),
    technical: teamMembers.filter((member) => member.category === "technical"),
    events: teamMembers.filter((member) => member.category === "events"),
    media: teamMembers.filter((member) => member.category === "media"),
    editorial: teamMembers.filter((member) => member.category === "editorial"),
    stage: teamMembers.filter((member) => member.category === "stage"),
  }

  const categoryTitles = {
    leadership: "Leadership Team",
    technical: "Technical Team",
    events: "Event Management",
    media: "Media Team",
    editorial: "Editorial Team",
    stage: "Stage Team",
  }

  const categoryColors = {
    leadership: "from-purple-500 to-pink-500",
    technical: "from-blue-500 to-indigo-500",
    events: "from-emerald-500 to-teal-500",
    media: "from-orange-500 to-red-500",
    editorial: "from-cyan-500 to-blue-500",
    stage: "from-violet-500 to-purple-500",
  }

  // Show main loading screen
  if (isPageLoading) {
    return <LoadingSpinner text="Loading AI & ML Club..." />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-slate-900">AIML Club</h1>
              <p className="text-sm text-slate-600">Oriental College of Technology</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Add haptic indicator */}
      <HapticIndicator />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 bg-clip-text text-transparent">
                AI & ML
              </span>
              <br />
              <span className="text-slate-700 font-light">Club</span>
            </h1>

            <div className="space-y-3">
              <p className="text-xl md:text-2xl text-slate-600 font-medium tracking-wide">
                Oriental College of Technology
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent w-16"></div>
                <p className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-wide">
                  Innovate. Build. Lead.
                </p>
                <div className="h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent w-16"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <HapticButton
              size="lg"
              hapticType="medium"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            >
              Join Our Community
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </HapticButton>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      {sectionsLoading.about ? (
        <AboutSectionLoader />
      ) : (
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <motion.div variants={fadeInUp} className="space-y-6">
                <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
                  About Our
                  <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Community
                  </span>
                </h2>
                <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
                  The official AIML departmental student club at Oriental College of Technology, dedicated to bridging
                  the gap between theory and application in
                  <span className="font-semibold text-indigo-600"> Artificial Intelligence</span> and
                  <span className="font-semibold text-purple-600"> Machine Learning</span>.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              <motion.div variants={fadeInUp}>
                <HapticCard
                  interactive={true}
                  hapticType="light"
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl group h-full"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900 mb-3">Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-slate-600 leading-relaxed text-lg">
                      Channel student potential into structured, high-impact projects while creating collaborative
                      learning spaces beyond the classroom.
                    </p>
                  </CardContent>
                </HapticCard>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <HapticCard
                  interactive={true}
                  hapticType="light"
                  className="bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl group h-full"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900 mb-3">Community</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-slate-600 leading-relaxed text-lg">
                      Build a strong community through interdisciplinary learning, hands-on experience, and
                      collaboration with the broader AI community.
                    </p>
                  </CardContent>
                </HapticCard>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <HapticCard
                  interactive={true}
                  hapticType="light"
                  className="bg-gradient-to-br from-emerald-50 to-teal-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl group h-full"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900 mb-3">Innovation</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-slate-600 leading-relaxed text-lg">
                      Promote early exposure to research, innovation, and entrepreneurship while strengthening our
                      department's visibility.
                    </p>
                  </CardContent>
                </HapticCard>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Events Section */}
      {sectionsLoading.events ? (
        <EventsSectionLoader />
      ) : (
        <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
                Events &
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Activities
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
                Join us for exciting workshops, hackathons, and learning opportunities
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {events.map((event, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden group h-full">
                    <div className="relative overflow-hidden">
                      <ImageWithLoader
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                        skeletonClassName="w-full h-56"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <Badge
                        className={`absolute top-4 right-4 px-3 py-1 text-sm font-semibold rounded-full ${
                          event.type === "upcoming"
                            ? "bg-emerald-500 text-white shadow-lg"
                            : "bg-slate-500 text-white shadow-lg"
                        }`}
                      >
                        {event.type === "upcoming" ? "Upcoming" : "Past Event"}
                      </Badge>
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-slate-900 text-xl font-bold leading-tight mb-4">
                        {event.title}
                      </CardTitle>
                      <div className="space-y-2">
                        <div className="flex items-center text-indigo-600 font-medium">
                          <Calendar className="w-4 h-4 mr-3" />
                          {event.date}
                        </div>
                        <div className="flex items-center text-slate-500">
                          <MapPin className="w-4 h-4 mr-3" />
                          {event.location}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 leading-relaxed">{event.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Team Section */}
      {sectionsLoading.team ? (
        <TeamSectionLoader />
      ) : (
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
                Meet Our
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Core Team
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
                The passionate individuals driving our club forward
              </p>
            </motion.div>

            {/* Render each category */}
            {Object.entries(teamCategories).map(([categoryKey, members]) => (
              <div key={categoryKey} className="mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <h3
                    className={`text-3xl font-bold bg-gradient-to-r ${categoryColors[categoryKey]} bg-clip-text text-transparent mb-4`}
                  >
                    {categoryTitles[categoryKey]}
                  </h3>
                  <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
                >
                  {members.map((member, index) => (
                    <motion.div key={index} variants={fadeInUp}>
                      <Card className="bg-gradient-to-br from-slate-50 to-blue-50 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl text-center group h-full">
                        <CardHeader className="pb-4">
                          <div className="relative mx-auto mb-6">
                            <div className="w-32 h-32 mx-auto rounded-3xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                              <ImageWithLoader
                                src={member.image || "/placeholder.svg"}
                                alt={member.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                skeletonClassName="w-32 h-32 rounded-3xl"
                              />
                            </div>
                          </div>
                          <CardTitle className="text-slate-900 text-lg font-bold mb-2">{member.name}</CardTitle>
                          <Badge
                            variant="secondary"
                            className={`bg-gradient-to-r ${categoryColors[member.category]} text-white px-3 py-1 text-xs font-semibold rounded-full mb-3`}
                          >
                            {member.role}
                          </Badge>
                          {member.rollNumber && member.rollNumber !== "N/A" && (
                            <p className="text-xs text-slate-500 mb-1">Roll: {member.rollNumber}</p>
                          )}
                          {member.cgpa && member.cgpa !== "N/A" && (
                            <p className="text-xs text-slate-500 mb-3">CGPA: {member.cgpa}</p>
                          )}
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-slate-600 leading-relaxed text-sm">{member.description}</p>

                          {member.skills && (
                            <div className="flex flex-wrap gap-1 justify-center">
                              {member.skills.slice(0, 3).map((skill, skillIndex) => (
                                <Badge key={skillIndex} variant="outline" className="text-xs px-2 py-1">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          )}

                          <div className="flex justify-center space-x-3 pt-2">
                            {member.socialLinks?.linkedin && member.socialLinks.linkedin !== "#" && (
                              <a
                                href={member.socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-200"
                              >
                                <Linkedin className="w-4 h-4 text-white" />
                              </a>
                            )}
                            {member.socialLinks?.github && member.socialLinks.github !== "#" && (
                              <a
                                href={member.socialLinks.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 bg-gray-800 hover:bg-gray-900 rounded-full flex items-center justify-center transition-colors duration-200"
                              >
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path
                                    fillRule="evenodd"
                                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </a>
                            )}
                            {member.email && member.email !== "N/A" && (
                              <a
                                href={`mailto:${member.email}`}
                                className="w-8 h-8 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-200"
                              >
                                <Mail className="w-4 h-4 text-white" />
                              </a>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                      <div className="mt-4 pt-4 border-t border-slate-200">
                        <HapticButton
                          variant="outline"
                          size="sm"
                          hapticType="selection"
                          className="w-full bg-transparent"
                          onClick={() => router.push(`/team/${member.name.toLowerCase().replace(/\s+/g, "-")}`)}
                        >
                          View Profile
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </HapticButton>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
              Get In
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
              Ready to join our AI/ML community? We'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-white border-0 shadow-xl rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900 mb-2">Send us a message</CardTitle>
                  <p className="text-slate-600">We'll get back to you within 24 hours</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-slate-50 border-slate-200 text-slate-900 rounded-xl h-12 text-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      required
                      disabled={formSubmitting}
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-slate-50 border-slate-200 text-slate-900 rounded-xl h-12 text-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      required
                      disabled={formSubmitting}
                    />
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-slate-50 border-slate-200 text-slate-900 rounded-xl min-h-[140px] text-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                      required
                      disabled={formSubmitting}
                    />
                    <HapticButton
                      type="submit"
                      disabled={formSubmitting}
                      hapticType="medium"
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl h-12 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <Spinner size="sm" className="border-white border-t-transparent" />
                          <span>Sending...</span>
                        </div>
                      ) : (
                        "Send Message"
                      )}
                    </HapticButton>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold mb-8 text-slate-900">Connect with us</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-md">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-slate-700 text-lg font-medium">vg8904937@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-md">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-slate-700 text-lg font-medium">+91 6299200082</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-bold mb-6 text-slate-900">Follow us on social media</h4>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-14 h-14 border-2 border-slate-200 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white rounded-2xl bg-white transition-all duration-300 group"
                  >
                    <Instagram className="w-6 h-6 text-slate-600 group-hover:text-white" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-14 h-14 border-2 border-slate-200 hover:border-blue-500 hover:bg-blue-500 hover:text-white rounded-2xl bg-white transition-all duration-300 group"
                  >
                    <Linkedin className="w-6 h-6 text-slate-600 group-hover:text-white" />
                  </Button>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 border-0 shadow-xl rounded-3xl text-white">
                <CardHeader>
                  <CardTitle className="text-white text-2xl font-bold">Join Our Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-indigo-100 mb-6 leading-relaxed text-lg">
                    Be part of our growing community of AI and ML enthusiasts. Get updates on events, workshops, and
                    opportunities.
                  </p>
                  <Button className="w-full bg-white text-indigo-600 hover:bg-slate-100 rounded-xl h-12 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    Join Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">AI & ML Club</h3>
              <p className="text-slate-400">Oriental College of Technology</p>
            </div>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-6"></div>
          <p className="text-slate-400 text-lg text-center">
            © 2024 AI & ML Club, Oriental College of Technology. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
