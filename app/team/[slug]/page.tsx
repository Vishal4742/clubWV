"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  Star,
  ExternalLink,
  Download,
  MessageCircle,
  User,
  Briefcase,
  Trophy,
  Code,
  Share2,
  Menu,
  X,
} from "lucide-react"

import { LoadingSpinner } from "@/components/loading/spinner"
import { ImageWithLoader } from "@/components/loading/image-loader"
import { HapticButton } from "@/components/ui/haptic-button"
import { HapticCard } from "@/components/ui/haptic-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/haptic-tabs"
import { useHaptic } from "@/hooks/use-haptic"

// Extended team member data with detailed profiles
const teamMembersData = {
  "vishal-kumar": {
    name: "Vishal Kumar",
    role: "President",
    image: "/placeholder.svg?height=400&width=400",
    coverImage: "/placeholder.svg?height=300&width=800",
    description:
      "Leading the AI & ML Club with vision and dedication to foster innovation and learning among students.",
    email: "vg8904937@gmail.com",
    phone: "+91 6299200082",
    rollNumber: "President",
    cgpa: "N/A",
    category: "leadership",
    joinedDate: "August 2023",
    location: "Bhopal, Madhya Pradesh",
    bio: "Passionate about artificial intelligence and machine learning, I lead our club with the vision of creating a collaborative learning environment where students can explore cutting-edge technologies. My goal is to bridge the gap between theoretical knowledge and practical application.",
    skills: [
      { name: "Leadership", level: 95 },
      { name: "AI/ML", level: 85 },
      { name: "Project Management", level: 90 },
      { name: "Public Speaking", level: 88 },
      { name: "Team Building", level: 92 },
      { name: "Strategic Planning", level: 87 },
    ],
    achievements: [
      {
        title: "Founded AI/ML Club",
        description: "Successfully established and launched the official AI/ML departmental club",
        date: "August 2023",
        type: "leadership",
      },
      {
        title: "Organized AIML Fest 2024",
        description: "Led the organization of the first annual AI/ML technology festival",
        date: "February 2024",
        type: "event",
      },
      {
        title: "Student Leadership Award",
        description: "Recognized for outstanding leadership in student activities",
        date: "December 2023",
        type: "award",
      },
    ],
    projects: [
      {
        title: "Club Management System",
        description: "Developed a comprehensive system for managing club activities and member engagement",
        technologies: ["React", "Node.js", "MongoDB"],
        status: "completed",
        link: "#",
      },
      {
        title: "AI Workshop Series",
        description: "Designed and conducted monthly workshops on various AI/ML topics",
        technologies: ["Python", "TensorFlow", "Jupyter"],
        status: "ongoing",
        link: "#",
      },
    ],
    socialLinks: {
      linkedin: "#",
      github: "#",
      twitter: "#",
      instagram: "#",
    },
    interests: [
      "Artificial Intelligence",
      "Leadership Development",
      "Public Speaking",
      "Innovation",
      "Entrepreneurship",
    ],
    languages: ["Hindi", "English"],
    certifications: ["Google AI Fundamentals", "Leadership Excellence Certificate", "Project Management Professional"],
  },
  "prince-kumar": {
    name: "Prince Kumar",
    role: "Discipline Head",
    image: "/placeholder.svg?height=400&width=400",
    coverImage: "/placeholder.svg?height=300&width=800",
    description:
      "Ensuring smooth club operations and maintaining professional standards with experience in crowd management.",
    email: "princekumar2012010@gmail.com",
    phone: "+91 9470280758",
    rollNumber: "0126AL231101",
    cgpa: "8.13",
    category: "technical",
    joinedDate: "September 2023",
    location: "Patna, Bihar",
    bio: "As the Discipline Head, I focus on maintaining order and professionalism in all club activities. With a strong background in full-stack development and event management, I ensure our events run smoothly and efficiently.",
    skills: [
      { name: "MERN Stack", level: 88 },
      { name: "Java Development", level: 85 },
      { name: "Event Management", level: 92 },
      { name: "Team Coordination", level: 90 },
      { name: "Database Management", level: 82 },
      { name: "Problem Solving", level: 87 },
    ],
    achievements: [
      {
        title: "Best Discipline Coordinator",
        description: "Awarded for maintaining excellent discipline standards in club events",
        date: "January 2024",
        type: "award",
      },
      {
        title: "Full-Stack Project Winner",
        description: "Won first place in college-level web development competition",
        date: "November 2023",
        type: "competition",
      },
      {
        title: "Event Management Excellence",
        description: "Successfully coordinated 15+ club events without any incidents",
        date: "March 2024",
        type: "achievement",
      },
    ],
    projects: [
      {
        title: "Event Management Portal",
        description: "Built a comprehensive portal for managing club events and registrations",
        technologies: ["React", "Express.js", "MySQL", "Node.js"],
        status: "completed",
        link: "https://github.com/prince-kumar",
      },
      {
        title: "Attendance Tracking System",
        description: "Developed an automated system for tracking member attendance",
        technologies: ["Java", "Spring Boot", "PostgreSQL"],
        status: "completed",
        link: "#",
      },
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/prince-kumar-347b87325",
      github: "#",
      twitter: "#",
    },
    interests: ["Web Development", "Event Planning", "Database Design", "System Architecture"],
    languages: ["Hindi", "English"],
    certifications: ["Oracle Java Certification", "AWS Cloud Practitioner", "Event Management Professional"],
  },
  "kinshuk-verma": {
    name: "Kinshuk Verma",
    role: "Tech Lead",
    image: "/placeholder.svg?height=400&width=400",
    coverImage: "/placeholder.svg?height=300&width=800",
    description: "Spearheading technical projects and managing AI/ML workshops and coding events.",
    email: "0126al231076@oriental.ac.in",
    phone: "N/A",
    rollNumber: "0126AL231076",
    cgpa: "7.23",
    category: "technical",
    joinedDate: "September 2023",
    location: "Delhi, India",
    bio: "Leading the technical initiatives of our club, I specialize in AI/ML implementations and algorithm development. My passion lies in making complex AI concepts accessible to fellow students through hands-on workshops and projects.",
    skills: [
      { name: "Python", level: 92 },
      { name: "Machine Learning", level: 88 },
      { name: "Data Structures", level: 90 },
      { name: "Algorithms", level: 87 },
      { name: "TensorFlow", level: 85 },
      { name: "Deep Learning", level: 82 },
    ],
    achievements: [
      {
        title: "AI Project Showcase Winner",
        description: "Won first place in inter-college AI project competition",
        date: "February 2024",
        type: "competition",
      },
      {
        title: "Technical Workshop Leader",
        description: "Conducted 20+ technical workshops on AI/ML topics",
        date: "Ongoing",
        type: "achievement",
      },
      {
        title: "Open Source Contributor",
        description: "Active contributor to various AI/ML open source projects",
        date: "2023-Present",
        type: "contribution",
      },
    ],
    projects: [
      {
        title: "Student Performance Predictor",
        description: "ML model to predict student academic performance using various parameters",
        technologies: ["Python", "Scikit-learn", "Pandas", "Flask"],
        status: "completed",
        link: "https://github.com/kinshukve",
      },
      {
        title: "AI Chatbot for Club",
        description: "Intelligent chatbot to answer club-related queries",
        technologies: ["Python", "NLP", "TensorFlow", "React"],
        status: "ongoing",
        link: "#",
      },
    ],
    socialLinks: {
      linkedin: "#",
      github: "https://github.com/kinshukve",
      twitter: "#",
    },
    interests: ["Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing"],
    languages: ["Hindi", "English"],
    certifications: ["TensorFlow Developer Certificate", "Google AI/ML Specialization", "Python for Data Science"],
  },
  "khushi-kumari": {
    name: "Khushi Kumari",
    role: "Media Head",
    image: "/placeholder.svg?height=400&width=400",
    coverImage: "/placeholder.svg?height=300&width=800",
    description:
      "Creating engaging content and managing social media presence with expertise in photography and videography.",
    email: "khushikumari89934@gmail.com",
    phone: "+91 8789498277",
    rollNumber: "0126AL231075",
    cgpa: "7.73",
    category: "media",
    joinedDate: "October 2023",
    location: "Ranchi, Jharkhand",
    bio: "As the Media Head, I bring creativity and technical expertise to showcase our club's activities through compelling visual content. My passion for photography and videography helps capture the essence of our events and achievements.",
    skills: [
      { name: "Photography", level: 95 },
      { name: "Videography", level: 90 },
      { name: "Adobe Creative Suite", level: 88 },
      { name: "Social Media Marketing", level: 85 },
      { name: "Content Creation", level: 92 },
      { name: "Graphic Design", level: 87 },
    ],
    achievements: [
      {
        title: "Best Media Coverage Award",
        description: "Recognized for outstanding media coverage of club events",
        date: "March 2024",
        type: "award",
      },
      {
        title: "Photography Competition Winner",
        description: "Won first place in college photography competition",
        date: "January 2024",
        type: "competition",
      },
      {
        title: "Social Media Growth",
        description: "Increased club's social media following by 300%",
        date: "2023-2024",
        type: "achievement",
      },
    ],
    projects: [
      {
        title: "Club Documentary",
        description: "Produced a comprehensive documentary showcasing club activities",
        technologies: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
        status: "completed",
        link: "#",
      },
      {
        title: "Event Photography Portfolio",
        description: "Curated portfolio of all major club events and activities",
        technologies: ["Lightroom", "Photoshop", "Canon EOS"],
        status: "ongoing",
        link: "#",
      },
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/khushi-kumari-56aa16276",
      github: "#",
      instagram: "#",
    },
    interests: ["Photography", "Videography", "Digital Art", "Social Media", "Event Documentation"],
    languages: ["Hindi", "English"],
    certifications: ["Adobe Certified Expert", "Digital Marketing Certificate", "Professional Photography Course"],
  },
}

export default function MemberProfile() {
  const params = useParams()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [member, setMember] = useState(null)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [activeTab, setActiveTab] = useState("about")

  const { triggerSelection, triggerImpact, isSupported } = useHaptic()

  useEffect(() => {
    const slug = params.slug as string
    const memberData = teamMembersData[slug]

    if (memberData) {
      setMember(memberData)
    }

    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [params.slug])

  const handleShare = async () => {
    if (navigator.share && member) {
      try {
        await navigator.share({
          title: `${member.name} - ${member.role}`,
          text: member.description,
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      // You could show a toast notification here
    }
  }

  if (isLoading) {
    return <LoadingSpinner text="Loading member profile..." />
  }

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center space-y-6 p-6 max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
            <User className="w-10 h-10 text-gray-400" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Member Not Found</h1>
            <p className="text-gray-600 text-sm sm:text-base">The member profile you're looking for doesn't exist.</p>
          </div>
          <Button onClick={() => router.push("/")} variant="outline" className="mt-6 w-full sm:w-auto">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    )
  }

  const categoryColors = {
    leadership: "bg-purple-500",
    technical: "bg-blue-500",
    events: "bg-emerald-500",
    media: "bg-orange-500",
    editorial: "bg-cyan-500",
    stage: "bg-violet-500",
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile-Optimized Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <HapticButton
              variant="ghost"
              hapticType="light"
              onClick={() => router.push("/")}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 p-2 -ml-2"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium text-sm sm:text-base hidden xs:inline">Back to Club</span>
              <span className="font-medium text-sm sm:text-base xs:hidden">Back</span>
            </HapticButton>

            <div className="text-xs sm:text-sm font-medium text-gray-500 text-center flex-1 mx-4">Member Profile</div>

            <div className="flex items-center space-x-2">
              <HapticButton
                variant="ghost"
                size="sm"
                hapticType="selection"
                onClick={handleShare}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </HapticButton>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="p-2 hover:bg-gray-100 rounded-full sm:hidden"
              >
                {showMobileMenu ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {showMobileMenu && (
          <div className="sm:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="p-4 space-y-3">
              {member.email !== "N/A" && (
                <HapticButton
                  hapticType="medium"
                  onClick={() => {
                    window.open(`mailto:${member.email}`)
                    setShowMobileMenu(false)
                    if (isSupported) triggerSelection()
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 h-12"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </HapticButton>
              )}
              {member.phone !== "N/A" && (
                <Button
                  onClick={() => {
                    window.open(`tel:${member.phone}`)
                    setShowMobileMenu(false)
                  }}
                  variant="outline"
                  className="w-full h-12"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              )}
              <Button variant="outline" className="w-full h-12 bg-transparent">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile-Optimized Hero Section */}
      <section className="bg-white">
        <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          {/* Mobile-First Layout */}
          <div className="text-center sm:text-left">
            {/* Profile Image - Centered on mobile */}
            <div className="flex justify-center sm:justify-start mb-6">
              <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-lg bg-gray-100 ring-4 ring-white ring-offset-4 ring-offset-gray-50">
                <ImageWithLoader
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  skeletonClassName="w-full h-full rounded-2xl"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="space-y-4">
              <div className="space-y-3">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  {member.name}
                </h1>
                <Badge
                  className={`${categoryColors[member.category]} text-white px-3 py-1.5 text-sm font-medium inline-flex items-center`}
                >
                  {member.role}
                </Badge>
              </div>

              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl">
                {member.description}
              </p>

              {/* Quick Info - Mobile Stack */}
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-4">
                {member.location && (
                  <div className="flex items-center justify-center sm:justify-start space-x-2 text-gray-600 p-2 bg-gray-50 rounded-lg">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="text-xs sm:text-sm truncate">{member.location}</span>
                  </div>
                )}
                <div className="flex items-center justify-center sm:justify-start space-x-2 text-gray-600 p-2 bg-gray-50 rounded-lg">
                  <Calendar className="w-4 h-4 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Joined {member.joinedDate}</span>
                </div>
                {member.rollNumber !== "N/A" && (
                  <div className="flex items-center justify-center sm:justify-start space-x-2 text-gray-600 p-2 bg-gray-50 rounded-lg">
                    <BookOpen className="w-4 h-4 flex-shrink-0" />
                    <span className="text-xs sm:text-sm truncate">Roll: {member.rollNumber}</span>
                  </div>
                )}
                {member.cgpa !== "N/A" && (
                  <div className="flex items-center justify-center sm:justify-start space-x-2 text-gray-600 p-2 bg-gray-50 rounded-lg">
                    <Star className="w-4 h-4 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">CGPA: {member.cgpa}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons - Hidden on mobile (shown in menu) */}
              <div className="hidden sm:flex flex-wrap gap-3 pt-6">
                {member.email !== "N/A" && (
                  <Button
                    onClick={() => window.open(`mailto:${member.email}`)}
                    className="bg-blue-600 hover:bg-blue-700 h-11"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                )}
                <Button variant="outline" className="h-11 bg-transparent">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Message
                </Button>
                <Button variant="outline" className="h-11 bg-transparent">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Main Content */}
      <section className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Mobile: Stack layout, Desktop: Grid layout */}
          <div className="space-y-8 lg:grid lg:grid-cols-3 lg:gap-12 lg:space-y-0">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                {/* Mobile-Optimized Tabs */}
                <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full mb-6 sm:mb-8 bg-gray-100 p-1 rounded-xl h-12 sm:h-14">
                  <TabsTrigger
                    value="about"
                    className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-2 data-[state=active]:bg-white text-xs sm:text-sm py-2"
                  >
                    <User className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>About</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="skills"
                    className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-2 data-[state=active]:bg-white text-xs sm:text-sm py-2"
                  >
                    <Code className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Skills</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="projects"
                    className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-2 data-[state=active]:bg-white text-xs sm:text-sm py-2"
                  >
                    <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Projects</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="achievements"
                    className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-2 data-[state=active]:bg-white text-xs sm:text-sm py-2"
                  >
                    <Trophy className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Awards</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="about" className="space-y-6 sm:space-y-8">
                  {/* Biography */}
                  <HapticCard className="border-0 shadow-sm">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900">Biography</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">{member.bio}</p>
                    </CardContent>
                  </HapticCard>

                  {/* Interests & Languages - Mobile Stack */}
                  <div className="space-y-6 sm:space-y-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
                    <HapticCard className="border-0 shadow-sm">
                      <CardHeader className="pb-4">
                        <CardTitle className="text-base sm:text-lg font-semibold text-gray-900">Interests</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {member.interests.map((interest, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs sm:text-sm py-1"
                            >
                              {interest}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </HapticCard>

                    <HapticCard className="border-0 shadow-sm">
                      <CardHeader className="pb-4">
                        <CardTitle className="text-base sm:text-lg font-semibold text-gray-900">Languages</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {member.languages.map((language, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                              <span className="text-gray-700 font-medium text-sm sm:text-base">{language}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </HapticCard>
                  </div>

                  {/* Certifications */}
                  <HapticCard className="border-0 shadow-sm">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-base sm:text-lg font-semibold text-gray-900">Certifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 sm:space-y-4">
                        {member.certifications.map((cert, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg"
                          >
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                            </div>
                            <span className="text-gray-800 font-medium text-sm sm:text-base leading-tight">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </HapticCard>
                </TabsContent>

                <TabsContent value="skills" className="space-y-6 sm:space-y-8">
                  <HapticCard className="border-0 shadow-sm">
                    <CardHeader className="pb-6">
                      <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900">Technical Skills</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {member.skills.map((skill, index) => (
                          <div key={index} className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-gray-800 text-sm sm:text-base">{skill.name}</span>
                              <span className="text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                {skill.level}%
                              </span>
                            </div>
                            <Progress value={skill.level} className="h-2 sm:h-3 bg-gray-200" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </HapticCard>
                </TabsContent>

                <TabsContent value="projects" className="space-y-4 sm:space-y-6">
                  {member.projects.map((project, index) => (
                    <HapticCard key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                      <CardHeader className="pb-4">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-3 sm:space-y-0">
                          <div className="flex-1">
                            <CardTitle className="text-base sm:text-lg font-semibold text-gray-900 mb-2 leading-tight">
                              {project.title}
                            </CardTitle>
                            <Badge
                              variant={project.status === "completed" ? "default" : "secondary"}
                              className={
                                project.status === "completed"
                                  ? "bg-green-100 text-green-800 text-xs"
                                  : "bg-yellow-100 text-yellow-800 text-xs"
                              }
                            >
                              {project.status}
                            </Badge>
                          </div>
                          {project.link !== "#" && (
                            <Button variant="outline" size="sm" className="w-full sm:w-auto bg-transparent" asChild>
                              <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                View Project
                              </a>
                            </Button>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs bg-gray-50">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </HapticCard>
                  ))}
                </TabsContent>

                <TabsContent value="achievements" className="space-y-4 sm:space-y-6">
                  {member.achievements.map((achievement, index) => (
                    <HapticCard key={index} className="border-0 shadow-sm">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-start space-x-3 sm:space-x-4">
                          <div
                            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${categoryColors[member.category]} flex items-center justify-center flex-shrink-0`}
                          >
                            <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 leading-tight">
                              {achievement.title}
                            </h3>
                            <p className="text-gray-700 mb-3 leading-relaxed text-sm sm:text-base">
                              {achievement.description}
                            </p>
                            <div className="flex flex-col xs:flex-row xs:items-center space-y-2 xs:space-y-0 xs:space-x-4 text-xs sm:text-sm text-gray-500">
                              <span>{achievement.date}</span>
                              <Badge variant="outline" className="text-xs bg-gray-50 w-fit">
                                {achievement.type}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </HapticCard>
                  ))}
                </TabsContent>
              </Tabs>
            </div>

            {/* Mobile-Optimized Sidebar */}
            <div className="space-y-6 sm:space-y-8">
              {/* Contact Card */}
              <HapticCard className="border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-base sm:text-lg font-semibold text-gray-900">Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  {member.email !== "N/A" && (
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                      <a
                        href={`mailto:${member.email}`}
                        className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm sm:text-base truncate"
                      >
                        {member.email}
                      </a>
                    </div>
                  )}
                  {member.phone !== "N/A" && (
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                      <a
                        href={`tel:${member.phone}`}
                        className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm sm:text-base"
                      >
                        {member.phone}
                      </a>
                    </div>
                  )}
                </CardContent>
              </HapticCard>

              {/* Social Links */}
              <HapticCard className="border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-base sm:text-lg font-semibold text-gray-900">Social Media</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {member.socialLinks.linkedin && member.socialLinks.linkedin !== "#" && (
                      <Button variant="outline" className="w-full justify-start bg-transparent h-11 sm:h-12" asChild>
                        <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-4 h-4 mr-3" />
                          <span className="text-sm sm:text-base">LinkedIn</span>
                        </a>
                      </Button>
                    )}
                    {member.socialLinks.github && member.socialLinks.github !== "#" && (
                      <Button variant="outline" className="w-full justify-start bg-transparent h-11 sm:h-12" asChild>
                        <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-3" />
                          <span className="text-sm sm:text-base">GitHub</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </HapticCard>

              {/* Quick Stats */}
              <HapticCard className="border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-base sm:text-lg font-semibold text-gray-900">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-xl sm:text-2xl font-bold text-gray-900">{member.projects.length}</div>
                      <div className="text-xs sm:text-sm text-gray-600">Projects</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-xl sm:text-2xl font-bold text-gray-900">{member.achievements.length}</div>
                      <div className="text-xs sm:text-sm text-gray-600">Awards</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-xl sm:text-2xl font-bold text-gray-900">{member.skills.length}</div>
                      <div className="text-xs sm:text-sm text-gray-600">Skills</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-xl sm:text-2xl font-bold text-gray-900">{member.certifications.length}</div>
                      <div className="text-xs sm:text-sm text-gray-600">Certs</div>
                    </div>
                  </div>
                </CardContent>
              </HapticCard>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Only Floating Action Button */}
      <div className="fixed bottom-6 right-4 sm:hidden z-40">
        <HapticButton
          hapticType="medium"
          onClick={() => member.email !== "N/A" && window.open(`mailto:${member.email}`)}
          className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
          disabled={member.email === "N/A"}
        >
          <Mail className="w-6 h-6 text-white" />
        </HapticButton>
      </div>
    </div>
  )
}
