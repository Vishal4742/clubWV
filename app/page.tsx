"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Brain, Zap, Target, Instagram, Linkedin, Mail, Phone, ArrowRight } from "lucide-react"

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  const events = [
    {
      title: "AI Workshop: Introduction to Neural Networks",
      date: "March 15, 2024",
      location: "Tech Lab 101",
      description:
        "Hands-on bootcamp covering TensorFlow, neural networks, and practical AI model development with industry mentorship.",
      image: "/placeholder.svg?height=240&width=400",
      type: "upcoming",
    },
    {
      title: "AIML Fest 2024 - Annual Technology Festival",
      date: "February 20-22, 2024",
      location: "Main Campus",
      description:
        "Three-day annual fest featuring workshops, exhibitions, debates, competitions, and tech talks with industry professionals.",
      image: "/placeholder.svg?height=240&width=400",
      type: "past",
    },
    {
      title: "Research Paper Reading Session",
      date: "January 28, 2024",
      location: "Seminar Hall",
      description:
        "Monthly session exploring cutting-edge AI innovations and recent research developments in machine learning.",
      image: "/placeholder.svg?height=240&width=400",
      type: "past",
    },
    {
      title: "Interdepartmental AI Challenge",
      date: "April 10, 2024",
      location: "Computer Lab",
      description:
        "Hackathon bringing together students from different departments to solve real-world problems using AI/ML.",
      image: "/placeholder.svg?height=240&width=400",
      type: "upcoming",
    },
    {
      title: "Tech Talk: Industry Professionals Series",
      date: "March 25, 2024",
      location: "Auditorium",
      description:
        "Guest lecture series featuring academic experts and industry professionals sharing insights on AI trends.",
      image: "/placeholder.svg?height=240&width=400",
      type: "upcoming",
    },
    {
      title: "AI Project Incubation Program",
      date: "Ongoing",
      location: "Innovation Lab",
      description: "Mentorship program for student projects with peer feedback and guidance from faculty coordinators.",
      image: "/placeholder.svg?height=240&width=400",
      type: "upcoming",
    },
  ]

  const teamMembers = [
    {
      name: "Vishal Kumar",
      role: "President",
      image: "/placeholder.svg?height=200&width=200",
      description: "Leading the AI & ML Club with vision and dedication to foster innovation and learning.",
    },
    {
      name: "Umesh Patel",
      role: "Vice President",
      image: "/placeholder.svg?height=200&width=200",
      description: "Supporting club operations and driving strategic initiatives for community growth.",
    },
    {
      name: "Kinshuk Verma",
      role: "Tech Lead",
      image: "/placeholder.svg?height=200&width=200",
      description: "Spearheading technical projects and guiding members in AI/ML implementation.",
    },
    {
      name: "Prakhar Sahu",
      role: "Media Relations",
      image: "/placeholder.svg?height=200&width=200",
      description: "Managing external communications and building partnerships with industry leaders.",
    },
    {
      name: "Aarchi Sharma",
      role: "Event Head",
      image: "/placeholder.svg?height=200&width=200",
      description: "Organizing impactful workshops, seminars, and networking events for the community.",
    },
    {
      name: "Parul Ajit",
      role: "Event Head",
      image: "/placeholder.svg?height=200&width=200",
      description: "Coordinating hackathons and technical competitions to enhance practical learning.",
    },
    {
      name: "Gourav Jain",
      role: "Event Head",
      image: "/placeholder.svg?height=200&width=200",
      description: "Planning and executing educational events that bridge academia and industry.",
    },
    {
      name: "Prince Kumar",
      role: "Discipline Head",
      image: "/placeholder.svg?height=200&width=200",
      description: "Ensuring smooth club operations and maintaining professional standards.",
    },
    {
      name: "Khushi Kumari",
      role: "Media",
      image: "/placeholder.svg?height=200&width=200",
      description: "Creating engaging content and managing social media presence for the club.",
    },
    {
      name: "Arpit Mistrel",
      role: "Media",
      image: "/placeholder.svg?height=200&width=200",
      description: "Developing multimedia content and documenting club activities and achievements.",
    },
    {
      name: "Abhijeet Sarkar",
      role: "Editor",
      image: "/placeholder.svg?height=200&width=200",
      description: "Curating and editing technical content, newsletters, and club publications.",
    },
    {
      name: "Pritish Mandal",
      role: "Editor",
      image: "/placeholder.svg?height=200&width=200",
      description: "Managing editorial content and ensuring quality in all written communications.",
    },
    {
      name: "Heer Rajesh Murjani",
      role: "Stage Lead",
      image: "/placeholder.svg?height=200&width=200",
      description: "Coordinating stage presentations and managing event logistics seamlessly.",
    },
    {
      name: "Anshul Sharma",
      role: "Stage Lead",
      image: "/placeholder.svg?height=200&width=200",
      description: "Overseeing technical setups and ensuring smooth execution of presentations.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        <div
          className={
            "absolute inset-0 " +
            'bg-[url("data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%236366f1%22%20fillOpacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] ' +
            "opacity-40"
          }
        />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <Brain className="w-24 h-24 mx-auto mb-6 text-indigo-600" />
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full blur-xl opacity-30 animate-pulse"></div>
            </div>
          </motion.div>

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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            >
              Join Our Community
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
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
                The official AIML departmental student club at Oriental College of Technology, dedicated to bridging the
                gap between theory and application in
                <span className="font-semibold text-indigo-600"> Artificial Intelligence</span> and
                <span className="font-semibold text-purple-600"> Machine Learning</span>.
              </p>
              <div className="max-w-3xl mx-auto mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  To create a self-sustained, student-driven ecosystem where knowledge, creativity, and technology
                  converge to prepare AIML students for future industry demands and academic excellence.
                </p>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <ul className="text-lg text-slate-700 leading-relaxed space-y-2">
                  <li>• Bridge the gap between theory and application in AI & ML</li>
                  <li>• Promote interdisciplinary collaboration and collective problem-solving</li>
                  <li>• Foster an environment that encourages curiosity, experimentation, and innovation</li>
                </ul>
              </div>
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
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl group h-full">
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
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl group h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 mb-3">Community</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Build a strong community through interdisciplinary learning, hands-on experience, and collaboration
                    with the broader AI community.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl group h-full">
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
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Faculty & Leadership Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
              Faculty &
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Leadership
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
              Guided by experienced faculty and driven by passionate student leaders
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl text-center group h-full">
                <CardHeader className="pb-4">
                  <div className="w-32 h-32 mx-auto rounded-3xl overflow-hidden shadow-lg mb-6 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                    <Users className="w-16 h-16 text-indigo-600" />
                  </div>
                  <CardTitle className="text-slate-900 text-2xl font-bold mb-2">Dr. Rajesh Kumar Nigam</CardTitle>
                  <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-1 text-sm font-semibold rounded-full">
                    Head of Department
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    Leading the AIML department with vision and expertise, providing strategic guidance for the club's
                    initiatives.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl text-center group h-full">
                <CardHeader className="pb-4">
                  <div className="w-32 h-32 mx-auto rounded-3xl overflow-hidden shadow-lg mb-6 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                    <Target className="w-16 h-16 text-purple-600" />
                  </div>
                  <CardTitle className="text-slate-900 text-2xl font-bold mb-2">Prof. Shamaila Khan</CardTitle>
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 text-sm font-semibold rounded-full">
                    Faculty Coordinator
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    Coordinating club activities and providing academic mentorship to ensure excellence in all
                    initiatives.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl text-center group h-full">
                <CardHeader className="pb-4">
                  <div className="w-32 h-32 mx-auto rounded-3xl overflow-hidden shadow-lg mb-6">
                    <img
                      src="/placeholder.svg?height=128&width=128"
                      alt="Vishal Kumar"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardTitle className="text-slate-900 text-2xl font-bold mb-2">Vishal Kumar</CardTitle>
                  <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-1 text-sm font-semibold rounded-full">
                    Club President
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    IV Semester CSE-AIML student leading the club with passion and dedication to AI/ML excellence.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white text-center"
          >
            <h3 className="text-3xl font-bold mb-4">Why AIML Club?</h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              "The AIML Club is not just another college society — it's a movement to ignite minds. In a world ruled by
              data and algorithms, we believe students shouldn't just be consumers of technology — they should be
              creators of intelligence."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
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
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
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
                    <CardTitle className="text-slate-900 text-xl font-bold leading-tight mb-4">{event.title}</CardTitle>
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

      {/* Team Section */}
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
                Team
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
              The passionate individuals driving our club forward
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-slate-50 to-blue-50 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl text-center group h-full">
                  <CardHeader className="pb-4">
                    <div className="relative mx-auto mb-6">
                      <div className="w-36 h-36 mx-auto rounded-3xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <CardTitle className="text-slate-900 text-xl font-bold mb-2">{member.name}</CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1 text-sm font-semibold rounded-full"
                    >
                      {member.role}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-slate-50 border-slate-200 text-slate-900 rounded-xl h-12 text-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      required
                    />
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-slate-50 border-slate-200 text-slate-900 rounded-xl min-h-[140px] text-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                      required
                    />
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl h-12 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Send Message
                    </Button>
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
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <Brain className="w-12 h-12 mx-auto text-indigo-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">AI & ML Club</h3>
            <p className="text-slate-400">Oriental College of Technology</p>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-6"></div>
          <p className="text-slate-400 text-lg">
            © 2024 AI & ML Club, Oriental College of Technology. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
