import React, { useState } from "react";
import {
  Settings,
  Blocks,
  Wifi,
  Brain,
  Eye,
  Car,
  Cloud,
  Database,
  X,
} from "lucide-react";
import { useTheme } from "@/components/ui/theme-provider";

const leftIndustries = [
  { 
    name: "AUTOMATION & ROBOTICS", 
    icon: "https://res.cloudinary.com/dvt1c3v7l/image/upload/v1756806448/robot_uzqjwb.avif",
    description: "Transform your manufacturing and operational processes with cutting-edge automation and robotics solutions.",
    details: "Our automation and robotics solutions help businesses streamline operations, reduce costs, and improve efficiency through intelligent process automation, robotic process automation (RPA), and industrial robotics implementation.",
    benefits: ["Increased Efficiency", "Cost Reduction", "Quality Improvement", "24/7 Operations"]
  },
  { 
    name: "BLOCKCHAIN TECHNOLOGY", 
    icon: "https://res.cloudinary.com/dvt1c3v7l/image/upload/v1756807217/blockchain_kstma1.avif",
    description: "Secure, transparent, and decentralized solutions for modern business challenges.",
    details: "Leverage blockchain technology to create transparent, secure, and efficient systems for supply chain management, digital identity, smart contracts, and cryptocurrency solutions.",
    benefits: ["Enhanced Security", "Transparency", "Decentralization", "Smart Contracts"]
  },
  { 
    name: "INTERNET OF THINGS (IOT)", 
    icon: "https://res.cloudinary.com/dvt1c3v7l/image/upload/v1756807042/iot_qd36ne.avif",
    description: "Connect devices and systems to create intelligent, data-driven environments.",
    details: "Build comprehensive IoT ecosystems that connect devices, sensors, and systems to collect valuable data, automate processes, and enable real-time monitoring and control.",
    benefits: ["Real-time Monitoring", "Predictive Maintenance", "Energy Efficiency", "Remote Control"]
  },
  { 
    name: "ARTIFICIAL INTELLIGENCE", 
    icon: "https://res.cloudinary.com/dvt1c3v7l/image/upload/v1756807071/ai_gfupsw.png",
    description: "Harness the power of AI to automate decisions and gain intelligent insights.",
    details: "Implement AI and machine learning solutions including natural language processing, computer vision, predictive analytics, and intelligent automation to transform your business operations.",
    benefits: ["Intelligent Automation", "Predictive Analytics", "Enhanced Decision Making", "Personalization"]
  },
];

const rightIndustries = [
  { 
    name: "AR/VR TECHNOLOGIES", 
    icon: "https://res.cloudinary.com/dvt1c3v7l/image/upload/v1756804998/virtual-tour_glonh3.avif",
    description: "Immersive experiences that bridge the gap between digital and physical worlds.",
    details: "Create engaging AR/VR applications for training, marketing, product visualization, and customer engagement that provide immersive and interactive experiences.",
    benefits: ["Immersive Training", "Enhanced Visualization", "Customer Engagement", "Remote Collaboration"]
  },
  { 
    name: "AUTONOMOUS VEHICLES & DRONES", 
    icon: "https://res.cloudinary.com/dvt1c3v7l/image/upload/v1756805441/camera-drone_u5k7i6.avif",
    description: "Next-generation transportation and delivery solutions with autonomous technology.",
    details: "Develop autonomous vehicle systems and drone technologies for logistics, delivery, surveillance, and transportation applications with advanced AI and sensor integration.",
    benefits: ["Reduced Human Error", "Cost Efficiency", "24/7 Operations", "Enhanced Safety"]
  },
  { 
    name: "CLOUD COMPUTING", 
    icon: "https://res.cloudinary.com/dvt1c3v7l/image/upload/v1756805833/upload_mhy99f.avif",
    description: "Scalable, flexible, and secure cloud infrastructure for modern businesses.",
    details: "Migrate to cloud platforms with comprehensive solutions including cloud architecture design, migration services, multi-cloud management, and cloud-native application development.",
    benefits: ["Scalability", "Cost Optimization", "Global Accessibility", "Enhanced Security"]
  },
  { 
    name: "BIG DATA", 
    icon: "https://res.cloudinary.com/dvt1c3v7l/image/upload/v1756805939/big-data_yzztop.avif",
    description: "Transform massive datasets into actionable business insights and intelligence.",
    details: "Implement big data analytics solutions to process, analyze, and visualize large datasets, enabling data-driven decision making and business intelligence.",
    benefits: ["Data-Driven Insights", "Predictive Analytics", "Performance Optimization", "Competitive Advantage"]
  },
];

const IndustriesPage = ({ theme: externalTheme, showThemeToggle = false }) => {
  // Use the website's theme system
  const { theme: websiteTheme } = useTheme();
  
  // Use external theme if provided, otherwise use website theme
  const currentTheme = externalTheme || websiteTheme;
  
  // Modal state
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Handle hexagon click
  const handleHexagonClick = (industry) => {
    setSelectedIndustry(industry);
    setIsModalOpen(true);
  };
  
  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedIndustry(null);
  };
  
  // Hexagon positions (independent from arrows) - optimized spacing for bigger hexagons
  const leftHexagonPositions = [
    { x: -250, y: -150 },
    { x: -365, y: -55 },
    { x: -340, y: 90 },
    { x: -290, y: 235 }
  ];
  
  const rightHexagonPositions = [
    { x: 250, y: -150 },
    { x: 365, y: -55 },
    { x: 340, y: 90 },
    { x: 290, y: 235 }
  ];

  // Theme-based styling
  const isDark = currentTheme === "dark";
  
  const containerClasses = isDark 
    ? "w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-6 relative overflow-hidden"
    : "w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-8 px-6 relative overflow-hidden";
  
  const titleColor = isDark ? "text-white" : "text-slate-800";
  const logoInnerBg = isDark ? "bg-slate-800" : "bg-white";
  
  const centralCircleOuter = isDark 
    ? "w-56 h-56 bg-gradient-to-bl from-gray-800 via-gray-500 to-gray-300 rounded-full flex items-center justify-center shadow-2xl border-0"
    : "w-56 h-56 bg-gradient-to-bl from-gray-100 via-gray-100 to-gray-100 rounded-full flex items-center justify-center shadow-2xl border-0";
  
  const centralCircleInner = isDark
    ? "w-44 h-44 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center relative shadow-inner border border-slate-700"
    : "w-44 h-44 bg-gradient-to-br from-slate-100 to-white rounded-full flex items-center justify-center relative shadow-inner border border-slate-300";
  
  const labelColor = isDark ? "text-slate-300" : "text-slate-600";
  const labelHoverColor = isDark ? "group-hover:text-white" : "group-hover:text-slate-800";
  
  const leftHexagonShadow = isDark ? "bg-slate-900/80" : "bg-slate-300/60";
  const leftHexagonMain = isDark 
    ? "relative flex items-center justify-center w-40 h-40 bg-gradient-to-br from-slate-700 to-slate-800 border-2 border-slate-600 shadow-xl group-hover:border-blue-400 transition-colors duration-300"
    : "relative flex items-center justify-center w-40 h-40 bg-gradient-to-bl from-gray-100 via-gray-100 to-gray-100 border-2 border-slate-400 shadow-xl group-hover:border-blue-500 transition-colors duration-300";
  
  const rightHexagonShadow = isDark ? "bg-slate-900/80" : "bg-slate-300/60";
  const rightHexagonMain = isDark
    ? "relative flex items-center justify-center w-40 h-40 bg-gradient-to-br from-slate-700 to-slate-800 border-2 border-slate-600 shadow-xl group-hover:border-purple-400 transition-colors duration-300"
    : "relative flex items-center justify-center w-40 h-40 bg-gradient-to-bl from-gray-100 via-gray-100 to-gray-100 border-2 border-slate-400 shadow-xl group-hover:border-purple-500 transition-colors duration-300";
  
  const leftIconColor = isDark ? "text-blue-400 group-hover:text-white" : "text-blue-600 group-hover:text-blue-700";
  const rightIconColor = isDark ? "text-purple-400 group-hover:text-white" : "text-purple-600 group-hover:text-purple-700";
  
  const leftArrowColor = isDark ? "#ffffff" : "#475569";
  const rightArrowColor = isDark ? "#374151" : "#94a3b8";
  
  const bevelGradient = isDark
    ? "linear-gradient(to right, rgba(94, 83, 83, 0) 65%, rgba(0,0,0,0.2) 80%, rgba(101, 90, 90, 0.4) 98%)"
    : "linear-gradient(to right, rgba(83, 76, 76, 0) 65%, rgba(97, 78, 78, 0.1) 80%, rgba(0,0,0,0.2) 98%)";
  
  const highlightEdge = isDark
    ? "linear-gradient(to right, rgba(71,85,105,0.3), rgba(0,0,0,0.6))"
    : "linear-gradient(to right, rgba(148,163,184,0.3), rgba(203,213,225,0.6))";
  
  const bgCirclesOpacity = isDark ? "opacity-20" : "opacity-30";
  const bgCircleColors = isDark 
    ? ["bg-blue-600", "bg-purple-600", "bg-violet-600", "bg-indigo-600"]
    : ["bg-blue-400", "bg-purple-400", "bg-violet-400", "bg-indigo-400"];

  // Theme-based colors for dots and 3D boxes
  const dotColor = isDark ? "bg-blue-400" : "bg-blue-500";
  const boxBaseColor = isDark ? "from-blue-600 to-purple-700" : "from-blue-500 to-purple-600";
  const boxBorderColor = isDark ? "border-blue-700" : "border-blue-500";
  const boxBorderColor2 = isDark ? "border-blue-600" : "border-blue-500";
  const boxBorderColor3 = isDark ? "border-purple-700" : "border-purple-500";

  return (
    <section className="relative overflow-hidden min-h-[90vh]">
      {/* Simple Background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-background to-primary/5" />
      </div>

      {/* Hero Content */}
      <div className="container-custom relative z-10 pt-8 sm:pt-12 md:pt-16 lg:pt-14 pb-16 md:pb-24 lg:pb-32">
        {/* Logo Section */}
        <div className="text-center ">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 transform rotate-45 rounded-sm relative">
              <div className={`absolute inset-2 ${logoInnerBg} rounded-full transform -rotate-45`} />
            </div>
            <span className={`text-2xl font-bold ${titleColor}`}>Industries We Serve</span>
          </div>
        </div>

      {/* Main Container - Increased height and width */}
      <div className="relative h-[600px] max-w-[1200px] mx-auto">
        {/* Central Circular Element - Hidden on mobile */}
        <div className="hidden md:block absolute top-[55%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className={centralCircleOuter} style={{
            boxShadow: isDark 
              ? 'inset -16px -16px 32px rgb(21, 21, 21), inset 16px 16px 32px rgba(0, 0, 0, 0.34), inset 0px -8px 16px rgba(0,0,0,0.6), inset 0px 8px 16px rgba(70, 70, 70, 0.15), 0 30px 60px rgba(0,0,0,0.6)'
              : 'inset -16px -16px 32px rgba(126, 111, 111, 0.5), inset 16px 16px 32px rgba(255,255,255,1), inset 0px -8px 16px rgba(0,0,0,0.3), inset 0px 8px 16px rgba(255,255,255,0.9), 0 30px 60px rgba(0,0,0,0.3)'
          }}>
            <div className={centralCircleInner} style={{
              boxShadow: isDark
                ? 'inset 4px 4px 8px rgba(0,0,0,0.8), inset -4px -4px 8px rgba(255,255,255,0.1)'
                : 'inset 4px 4px 8px rgba(0,0,0,0.2), inset -4px -4px 8px rgba(255,255,255,0.9)'
            }}>
              {/* Dots around edge */}
              <div className="absolute inset-0 rounded-full">
                {Array.from({ length: 16 }).map((_, i) => {
                  const angle = (i * 22.5) * (Math.PI / 180);
                  const x = Math.cos(angle) * 20;
                  const y = Math.sin(angle) * 20;
                  return (
                    <div
                      key={i}
                      className={`absolute w-1.5 h-1.5 rounded-full ${dotColor}`}
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    />
                  );
                })}
              </div>
              {/* Central manufacturing icon */}
              <div className="relative w-28 h-28 flex items-center justify-center">
                <img 
                  src="https://res.cloudinary.com/dvt1c3v7l/image/upload/v1756807555/manufacturing_boim19.avif"
                  alt="Manufacturing"
                  className="w-24 h-24 object-contain opacity-80"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Left Hexagons - Hidden on mobile */}
        {leftIndustries.map((industry, index) => {
          const Icon = industry.icon;
          const position = leftHexagonPositions[index];

          return (
            <div
              key={`left-${index}`}
              className="hidden md:block absolute group cursor-pointer z-10 opacity-0 animate-fadeInUp"
              style={{
                left: `calc(50% + ${position.x}px)`,
                top: `calc(50% + ${position.y}px)`,
                transform: "translate(-50%, -50%)",
                animationDelay: `${index * 0.3}s`,
                animationFillMode: "forwards"
              }}
              onClick={() => handleHexagonClick(industry)}
            >
              {/* Label on left side */}
              <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-4">
                <span className={`hidden md:block ${labelColor} text-sm font-bold whitespace-nowrap ${labelHoverColor} transition-colors duration-300`}>
                  {industry.name}
                </span>
              </div>

              {/* Hexagon with pronounced left-side bevel */}
              <div className="relative transform transition-all duration-300">
                {/* Drop shadow offset to the left-bottom */}
                <div
                  className={`absolute w-40 h-40 ${leftHexagonShadow} -translate-x-3 translate-y-2`}
                  style={{
                    clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)"
                  }}
                />
                {/* Main face */}
                <div
                  className={leftHexagonMain}
                  style={{
                    clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)"
                  }}
                >
                  {/* Left bevel gradient inside the hexagon */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
                      background: bevelGradient
                    }}
                  />
                  {/* Thin left highlight edge */}
                  <div
                    className="absolute left-[-4px] top-[12%] h-[76%] w-[8px] rounded-sm"
                    style={{
                      background: highlightEdge
                    }}
                  />
                  {typeof Icon === 'string' ? (
                    <img 
                      src={Icon} 
                      alt={industry.name}
                      className="w-14 h-14 object-contain relative transition-all duration-300"
                    />
                  ) : (
                    <Icon className={`w-14 h-14 ${leftIconColor} relative transition-colors duration-300`} />
                  )}
                </div>
              </div>

              {/* Custom Arrow pointing toward center - Hidden on mobile */}
              <svg 
                width="150" 
                height="80" 
                viewBox="0 0 150 80" 
                className="hidden md:block absolute left-full top-1/2 transform -translate-y-1/2 -ml-8 z-[999]"
              >
                <path 
                  d={index === 2
                    ? "M10 40 L60 40 L100 5" // shorter arrow for the 3rd item on the left
                    : index < 2
                      ? "M10 40 L80 40 L140 75"
                      : "M10 40 L80 40 L140 5"}
                  stroke={leftArrowColor}
                  strokeWidth="2" 
                  fill="none"
                />
                <circle cx="10" cy="40" r="4" fill={leftArrowColor}/>
                <circle 
                  cx={index === 2 ? "100" : "140"} 
                  cy={index < 2 ? "75" : "5"} 
                  r="4" 
                  fill={leftArrowColor}
                />
              </svg>
            </div>
          );
        })}

        {/* Right Hexagons - Hidden on mobile */}
        {rightIndustries.map((industry, index) => {
          const Icon = industry.icon;
          const position = rightHexagonPositions[index];

          return (
            <div
              key={`right-${index}`}
              className="hidden md:block absolute group cursor-pointer z-10 opacity-0 animate-fadeInUp"
              style={{
                left: `calc(50% + ${position.x}px)`,
                top: `calc(50% + ${position.y}px)`,
                transform: "translate(-50%, -50%)",
                animationDelay: `${(index + 4) * 0.3}s`,
                animationFillMode: "forwards"
              }}
              onClick={() => handleHexagonClick(industry)}
            >
              {/* Custom Arrow pointing toward center - Hidden on mobile */}
              <svg 
                width="150" 
                height="80" 
                viewBox="0 0 150 80" 
                className="hidden md:block absolute right-full top-1/2 transform -translate-y-1/2 -mr-8 z-[999]"
              >
                <path 
                  d={index === 2
                    ? "M140 40 L95 40 L50 5" // shorter arrow for the 3rd item on the right
                    : index < 2
                      ? "M140 40 L70 40 L10 75"
                      : "M140 40 L70 40 L10 5"}
                  stroke={leftArrowColor}
                  strokeWidth="2" 
                  fill="none"
                />
                <circle cx="140" cy="40" r="4" fill={leftArrowColor}/>
                <circle 
                  cx={index === 2 ? "50" : "10"} 
                  cy={index < 2 ? "75" : "5"} 
                  r="4" 
                  fill={leftArrowColor}
                />
              </svg>

              {/* Hexagon with pronounced right-side bevel */}
              <div className="relative transform transition-all duration-300">
                {/* Drop shadow offset to the right-bottom */}
                <div
                  className={`absolute w-40 h-40 ${rightHexagonShadow} translate-x-3 translate-y-2`}
                  style={{
                    clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)"
                  }}
                />
                {/* Main face */}
                <div
                  className={rightHexagonMain}
                  style={{
                    clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)"
                  }}
                >
                  {/* Right bevel gradient inside the hexagon */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
                      background: bevelGradient
                    }}
                  />
                  {/* Thin right highlight edge */}
                  <div
                    className="absolute right-[-4px] top-[12%] h-[76%] w-[8px] rounded-sm"
                    style={{
                      background: highlightEdge
                    }}
                  />
                  {typeof Icon === 'string' ? (
                    <img 
                      src={Icon} 
                      alt={industry.name}
                      className="w-14 h-14 object-contain relative transition-all duration-300"
                    />
                  ) : (
                    <Icon className={`w-14 h-14 ${rightIconColor} relative transition-colors duration-300`} />
                  )}
                </div>
              </div>

              {/* Label on right side */}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-4">
                <span className={`hidden md:block ${labelColor} text-sm font-bold whitespace-nowrap ${labelHoverColor} transition-colors duration-300`}>
                  {industry.name}
                </span>
              </div>
            </div>
          );
        })}

        {/* Mobile View - Two Vertical Columns of Hexagons */}
        <div className="md:hidden absolute inset-0 flex justify-center items-end ">
          {/* Left Column - Left Industries */}
          <div className="flex flex-col gap-2 md:gap-1 mr-2 md:mr-1">
            {leftIndustries.map((industry, index) => {
              const Icon = industry.icon;
              
              return (
                <div
                  key={`mobile-left-${index}`}
                  className="group cursor-pointer opacity-0 animate-fadeInUp"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: "forwards"
                  }}
                  onClick={() => handleHexagonClick(industry)}
                >
                  {/* Mobile Hexagon - Smaller Size */}
                  <div className="relative transform transition-all duration-300 hover:scale-110">
                    {/* Drop shadow */}
                    <div
                      className={`absolute w-16 h-16 md:w-12 md:h-12 ${leftHexagonShadow} -translate-x-1 translate-y-1`}
                      style={{
                        clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)"
                      }}
                    />
                    {/* Main face */}
                    <div
                      className={`relative flex items-center justify-center w-16 h-16 md:w-12 md:h-12 ${leftHexagonMain.replace('w-40 h-40', 'w-16 h-16 md:w-12 md:h-12')}`}
                      style={{
                        clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)"
                      }}
                    >
                      {/* Bevel gradient */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
                          background: bevelGradient
                        }}
                      />
                      {/* Highlight edge */}
                      <div
                        className="absolute left-[-2px] top-[12%] h-[76%] w-[4px] rounded-sm"
                        style={{
                          background: highlightEdge
                        }}
                      />
                      {typeof Icon === 'string' ? (
                        <img 
                          src={Icon} 
                          alt={industry.name}
                          className="w-6 h-6 md:w-4 md:h-4 object-contain relative transition-all duration-300"
                        />
                      ) : (
                        <Icon className={`w-6 h-6 md:w-4 md:h-4 ${leftIconColor} relative transition-colors duration-300`} />
                      )}
                    </div>
                  </div>
                  
                  {/* Mobile Label */}
                  <div className="text-center mt-2">
                    <span className={`${labelColor} text-xs md:text-[10px] font-medium ${labelHoverColor} transition-colors duration-300 block truncate max-w-[60px] md:max-w-[40px]`}>
                      {industry.name.split(' ')[0]}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Right Column - Right Industries */}
          <div className="flex flex-col gap-2 md:gap-1 ml-2 md:ml-1">
            {rightIndustries.map((industry, index) => {
              const Icon = industry.icon;
              
              return (
                <div
                  key={`mobile-right-${index}`}
                  className="group cursor-pointer opacity-0 animate-fadeInUp"
                  style={{
                    animationDelay: `${(index + 4) * 0.1}s`,
                    animationFillMode: "forwards"
                  }}
                  onClick={() => handleHexagonClick(industry)}
                >
                  {/* Mobile Hexagon - Smaller Size */}
                  <div className="relative transform transition-all duration-300 hover:scale-110">
                    {/* Drop shadow */}
                    <div
                      className={`absolute w-20 h-20 ${rightHexagonShadow} translate-x-1 translate-y-1`}
                      style={{
                        clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)"
                      }}
                    />
                    {/* Main face */}
                    <div
                      className={`relative flex items-center justify-center w-16 h-16 md:w-12 md:h-12 ${rightHexagonMain.replace('w-40 h-40', 'w-16 h-16 md:w-12 md:h-12')}`}
                      style={{
                        clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)"
                      }}
                    >
                      {/* Bevel gradient */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
                          background: bevelGradient
                        }}
                      />
                      {/* Highlight edge */}
                      <div
                        className="absolute right-[-2px] top-[12%] h-[76%] w-[4px] rounded-sm"
                        style={{
                          background: highlightEdge
                        }}
                      />
                      {typeof Icon === 'string' ? (
                        <img 
                          src={Icon} 
                          alt={industry.name}
                          className="w-6 h-6 md:w-4 md:h-4 object-contain relative transition-all duration-300"
                        />
                      ) : (
                        <Icon className={`w-6 h-6 md:w-4 md:h-4 ${rightIconColor} relative transition-colors duration-300`} />
                      )}
                    </div>
                  </div>
                  
                  {/* Mobile Label */}
                  <div className="text-center mt-2">
                    <span className={`${labelColor} text-xs md:text-[10px] font-medium ${labelHoverColor} transition-colors duration-300 block truncate max-w-[60px] md:max-w-[40px]`}>
                      {industry.name.split(' ')[0]}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedIndustry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${currentTheme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"} rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl`}>
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 ${currentTheme === "dark" ? "bg-blue-600" : "bg-blue-500"} flex items-center justify-center transition-all duration-300`}
                  style={{
                    clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  }}
                >
                  {typeof selectedIndustry.icon === 'string' ? (
                    <img 
                      src={selectedIndustry.icon} 
                      alt={selectedIndustry.name}
                      className="w-6 h-6 object-contain"
                    />
                  ) : (
                    <selectedIndustry.icon className="w-6 h-6 text-white" />
                  )}
                </div>
                <h2 className="text-2xl font-bold">{selectedIndustry.name}</h2>
              </div>
              <button
                onClick={closeModal}
                className={`p-2 rounded-full ${currentTheme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"} transition-colors duration-200`}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Overview</h3>
                <p className={`${currentTheme === "dark" ? "text-gray-300" : "text-gray-600"} leading-relaxed`}>
                  {selectedIndustry.description}
                </p>
              </div>

              {/* Details */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">What We Offer</h3>
                <p className={`${currentTheme === "dark" ? "text-gray-300" : "text-gray-600"} leading-relaxed`}>
                  {selectedIndustry.details}
                </p>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Key Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedIndustry.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-lg ${currentTheme === "dark" ? "bg-gray-700" : "bg-gray-50"}`}
                    >
                      <div className={`w-2 h-2 rounded-full ${currentTheme === "dark" ? "bg-blue-400" : "bg-blue-500"}`} />
                      <span className="font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="flex justify-center pt-4">
                <button
                  onClick={closeModal}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    currentTheme === "dark" 
                      ? "bg-blue-600 hover:bg-blue-700 text-white" 
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  } shadow-lg hover:shadow-xl transform hover:scale-105`}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default IndustriesPage;