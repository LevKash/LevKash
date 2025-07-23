import React, { useState, useEffect } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Badge } from './components/ui/badge';
import { 
  Download, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Calendar,
  Building,
  GraduationCap,
  Briefcase,
  Code,
  Database,
  Globe,
  Users,
  TrendingUp,
  Award,
  Play,
  FileText,
  Send
} from 'lucide-react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'work', 'case-studies', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'about', label: 'About', color: 'bg-blue-500' },
    { id: 'education', label: 'Education', color: 'bg-orange-500' },
    { id: 'work', label: 'Work', color: 'bg-purple-500' },
    { id: 'case-studies', label: 'Projects', color: 'bg-teal-500' },
    { id: 'contact', label: 'Contact', color: 'bg-red-500' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
              >
                Lev Kashkin
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id 
                      ? `${item.color} text-white shadow-lg` 
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-primary transition-colors"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 rounded-lg text-left transition-all duration-200 ${
                      activeSection === item.id 
                        ? `${item.color} text-white` 
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg-gradient">
        <div className="hero-pattern-svg"></div>
        <div className="hero-3d-bg"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-subtle-float">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-shadow-custom">
              Hi, I'm <span className="text-primary">Lev</span> 👋
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              I'm a <span className="text-primary font-semibold">Community Coordinator & Crypto Educator</span>
            </p>
            <p className="text-lg mb-12 max-w-2xl mx-auto">
              Welcome to my portfolio, showcasing my experience in community building, 
              event coordination, and business development in the crypto space!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('case-studies')}
              size="lg"
              className="text-lg px-8 py-3 bg-primary hover:bg-primary/90"
            >
              View My Work
            </Button>
            <a href="/Lev_Kashkin_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Résumé
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">INTRODUCTION</p>
            <h2 className="section-title">Overview.</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6 text-lg leading-relaxed">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Building className="w-4 h-4 text-primary" />
                  </div>
                  <p>
                    I'm a Community Coordinator with over 4 years of experience in community building 
                    and crypto education, specializing in event coordination and business development.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <GraduationCap className="w-4 h-4 text-primary" />
                  </div>
                  <p>
                    Currently pursuing my education while building reliable, scalable community 
                    initiatives that make a real difference in the crypto and blockchain space.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-primary" />
                  </div>
                  <p>
                    From community-driven projects to business development initiatives, I've led 
                    enterprise-level projects that streamline operations and deliver real impact.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Code className="w-4 h-4 text-primary" />
                  </div>
                  <p>
                    I enjoy automating workflows, optimizing systems, and turning complex 
                    challenges into real results. 📊
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <p>
                    I'm always curious and constantly learning, passionate about building 
                    communities that drive innovation and growth.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/lev-kashkin-resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-blue-500 hover:bg-blue-600">
                    <FileText className="w-4 h-4 mr-2" />
                    Resume
                  </Button>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gray-800 hover:bg-gray-900">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="profile-image-container animate-glow">
                <img 
                  src="/assets/placeholder-profile.png" 
                  alt="Lev Kashkin" 
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">WHAT I HAVE STUDIED SO FAR</p>
            <h2 className="section-title">Education.</h2>
          </div>

          <div className="timeline-container">
            <div className="timeline-line-vertical"></div>
            
            <div className="timeline-event">
              <div className="timeline-dot-center"></div>
              <div className="timeline-content">
                <div className="timeline-item-content">
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap className="w-6 h-6 text-primary" />
                    <span className="text-sm text-muted-foreground">2022 - 2025</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">BA (Hons) in Communication & Digital Media</h3>
                  <p className="text-muted-foreground mb-3">University of York, UK</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Focus on Digital Marketing and Communications</li>
                    <li>• Community Development and Media Strategy</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="timeline-event">
              <div className="timeline-dot-center"></div>
              <div className="timeline-content">
                <div className="timeline-item-content">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="w-6 h-6 text-primary" />
                    <span className="text-sm text-muted-foreground">2021 - 2025</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">BA (Hons) in Advertisement & Public Relations</h3>
                  <p className="text-muted-foreground mb-3">Moscow Technical University</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Strategic Communication and Brand Management</li>
                    <li>• Public Relations and Marketing Campaigns</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">MY PROFESSIONAL JOURNEY</p>
            <h2 className="section-title">Work Experience.</h2>
          </div>

          <div className="space-y-8">
            <Card className="project-card">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">Community Manager (Binance Angel)</h3>
                        <p className="text-primary font-semibold">Binance</p>
                      </div>
                      <span className="text-sm text-muted-foreground">Sep 2022 - Present</span>
                    </div>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        Organized official Binance Academy lectures on campus, attracting several dozen students
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        Managed event logistics (venue setup, registration workflow, post-event summaries)
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        Collaborated with Binance Greece leadership and local student groups to boost attendance
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        Actively engaged in online community management with 100,000+ active users
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-8 h-8 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">Sales & Marketing Manager</h3>
                        <p className="text-blue-500 font-semibold">KaspiKZ & Partner Marketplaces</p>
                      </div>
                      <span className="text-sm text-muted-foreground">May 2021 - Jun 2022</span>
                    </div>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        Created approximately 300 product listings on KaspiKZ, Wildberries, Halyk Market, Jusan Market and Forte Market
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        Wrote SEO-aware titles and descriptions to enhance product discoverability
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        Monitored sales data in Google Sheets and recommended pricing and promotion adjustments
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        Expanded online sales channels and coordinated inventory updates across multiple marketplaces
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">Online English Teacher</h3>
                        <p className="text-green-500 font-semibold">ELC Almaty</p>
                      </div>
                      <span className="text-sm text-muted-foreground">Sep 2020 - May 2021</span>
                    </div>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        Developed multimedia lesson content and digital teaching materials for school and university students
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        Optimized slide decks and handouts for readability and engagement
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">MY WORK</p>
            <h2 className="section-title">Case Studies.</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              Below are several projects and initiatives I have led or contributed to, 
              highlighting challenges, actions I took, and the results achieved.
            </p>
          </div>

          <div className="project-grid">
            {/* Case Study 1 */}
            <Card className="project-card">
              <div className="relative">
                <img 
                  src="/assets/UOYBinance.JPG" 
                  alt="Binance Academy Lecture at University" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-500">Education</Badge>
                </div>
              </div>
              <CardContent className="project-card-content">
                <h3 className="project-card-title">Launching Binance Academy at University</h3>
                <p className="project-card-description">
                  Drove student awareness of Binance Academy and introduced crypto education on campus.
                </p>
                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-1">Challenge</h4>
                    <p className="text-sm text-muted-foreground">
                      Drive student awareness of Binance Academy and introduce crypto education on campus.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-1">Action</h4>
                    <p className="text-sm text-muted-foreground">
                      Secured agreement from Binance Greece director and team to deliver an on-campus lecture. Coordinated venue logistics for a 100-seat auditorium, scheduled the event, and promoted it via student chats, social media and posters.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-1">Result</h4>
                    <p className="text-sm text-muted-foreground">
                      45 students attended (50% capacity). 90% rated "Excellent" in post-event feedback.
                    </p>
                  </div>
                </div>
                <div className="project-links flex gap-2">
                  <Button size="sm" variant="outline">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Case Study 2 */}
            <Card className="project-card">
              <div className="relative">
                <img 
                  src="/assets/BoroumeBoxes.PNG" 
                  alt="Volunteer Food Drive for Boroume" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500">Community</Badge>
                </div>
              </div>
              <CardContent className="project-card-content">
                <h3 className="project-card-title">Volunteer Food Drive for Boroume</h3>
                <p className="project-card-description">
                  Organized collection and distribution of food donations for vulnerable families in Thessaloniki.
                </p>
                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-1">Challenge</h4>
                    <p className="text-sm text-muted-foreground">
                      Organize collection and distribution of food donations for vulnerable families in Thessaloniki, in partnership with Boroume.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-1">Action</h4>
                    <p className="text-sm text-muted-foreground">
                      Assembled an 8-person volunteer team. Partnered with three local market stalls to place donation bins. Managed logistics for collection, storage, and distribution through a community center.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-1">Result</h4>
                    <p className="text-sm text-muted-foreground">
                      80 kg of food collected over a few hours. Donations delivered to 60 families in need. Received a formal thank-you letter from Boroume.
                    </p>
                  </div>
                </div>
                <div className="project-links flex gap-2">
                  <Button size="sm" variant="outline">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Case Study 3 */}
            <Card className="project-card">
              <div className="relative">
                <img 
                  src="/assets/placeholder-chat.png" 
                  alt="University Conference" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-purple-500">Events</Badge>
                </div>
              </div>
              <CardContent className="project-card-content">
                <h3 className="project-card-title">Supporting University Online Conferences</h3>
                <p className="project-card-description">
                  Ensured seamless participant experience and timely issuance of certificates for student-focused academic conferences.
                </p>
                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-1">Challenge</h4>
                    <p className="text-sm text-muted-foreground">
                      Ensure seamless participant experience and timely issuance of certificates for a student-focused academic conference.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-1">Action</h4>
                    <p className="text-sm text-muted-foreground">
                      Managed Zoom registration, handling 120 sign-ups and technical setup. Prepared and emailed 110 digital certificates within 24 hours post-event. Moderated the chat, resolving technical queries in real time.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-1">Result</h4>
                    <p className="text-sm text-muted-foreground">
                      0 complaints regarding access or timing issues. 100% certificate delivery within 24 hours. Organizers praised the support as "best in two years."
                    </p>
                  </div>
                </div>
                <div className="project-links flex gap-2">
                  <Button size="sm" variant="outline">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Case Study 4 */}
            <Card className="project-card">
              <div className="relative">
                <img 
                  src="/assets/BinanceAthensMeetupTeam.JPG" 
                  alt="Binance Meetups Athens & Thessaloniki" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-orange-500">Events</Badge>
                </div>
              </div>
              <CardContent className="project-card-content">
                <h3 className="project-card-title">Volunteer Support at Binance Meetups (Athens & Thessaloniki)</h3>
                <p className="project-card-description">
                  Streamlined participant check-in and on-site setup for two offline Binance community events.
                </p>
                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-1">Challenge</h4>
                    <p className="text-sm text-muted-foreground">
                      Streamline participant check-in and on-site setup for two offline Binance community events.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-1">Action</h4>
                    <p className="text-sm text-muted-foreground">
                      Scanned QR codes and registered up to 80 attendees in under 15 minutes per event. Arranged staging: set up tables, microphones, and projection equipment. Guided guests through event schedules and venue layout.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-1">Result</h4>
                    <p className="text-sm text-muted-foreground">
                      Reduced average check-in wait time to 1.5 minutes (from ~5 minutes). Positive feedback on event organization and flow.
                    </p>
                  </div>
                </div>
                <div className="project-links flex gap-2">
                  <Button size="sm" variant="outline">
                    <Play className="w-4 h-4 mr-1" />
                    Watch Video
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Case Study 5 */}
            <Card className="project-card">
              <div className="relative">
                <img 
                  src="/assets/placeholder-chart.png" 
                  alt="Online Sales Management" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-red-500">E-commerce</Badge>
                </div>
              </div>
              <CardContent className="project-card-content">
                <h3 className="project-card-title">Managing Online Sales on KaspiKZ and Partner Marketplaces</h3>
                <p className="project-card-description">
                  Increased daily order volume from 2-3 to a sustainable level on KaspiKZ and expanded to multiple marketplaces.
                </p>
                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-1">Challenge</h4>
                    <p className="text-sm text-muted-foreground">
                      Increase daily order volume from 2–3 to a sustainable level on KaspiKZ, where listings had no systematic management.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-1">Action</h4>
                    <p className="text-sm text-muted-foreground">
                      Created and published 300 product listings with optimized descriptions, images, and pricing. Implemented daily tracking of orders per listing. Expanded to Wildberries, Halyk Market, Jusan Market, and Forte Market under unified inventory control.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-1">Result</h4>
                    <p className="text-sm text-muted-foreground">
                      Daily orders rose to ~10 per day (+230%). Orders reverted to 2–3 per day after my departure, underscoring my direct impact.
                    </p>
                  </div>
                </div>
                <div className="project-links flex gap-2">
                  <Button size="sm" variant="outline">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">GET IN TOUCH</p>
            <h2 className="section-title">Contact.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Interested in learning more or working together? Get in touch with me:
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info-card">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">[Your Phone Number]</p>
            </div>

            <div className="contact-form-card">
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
              <form className="contact-form space-y-4">
                <div>
                  <Input 
                    placeholder="Name" 
                    className="w-full"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Message" 
                    rows={4}
                    className="w-full"
                  />
                </div>
                <Button className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="flex justify-center gap-6">
              <a href="https://www.linkedin.com/in/lev-kashkin-b8a5b8227/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:lev.kashkin@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://github.com/levkashkin" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="footer-content">
            <div className="text-center md:text-left">
              <p>&copy; 2024 Lev Kashkin. All rights reserved.</p>
            </div>
            <div className="footer-links flex gap-6 mt-4 md:mt-0 justify-center md:justify-end">
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms of Service</a>
              <button 
                onClick={() => scrollToSection('hero')}
                className="footer-link"
              >
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

