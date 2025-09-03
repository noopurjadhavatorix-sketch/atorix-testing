import React, { useState } from 'react';
import { Search, Zap, Building2, DollarSign, ShoppingCart, Car, Pill, Phone, Truck, Hammer, Film, Ship, TrendingUp, Beaker, Bed, Wheat, Shield, GraduationCap, Star, X, Users, Globe, BarChart3, ArrowRight } from 'lucide-react';

const IndustriesGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState(new Set());
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const industries = [
    { 
      id: 1, 
      name: 'Healthcare', 
      icon: Building2, 
      description: 'Digital health solutions & patient care systems', 
      companies: '2,400+',
      longDescription: 'Revolutionizing healthcare through innovative digital solutions including telemedicine platforms, electronic health records, AI-powered diagnostics, and remote patient monitoring systems.',
      keyStats: { growth: '23%', employees: '450K+', revenue: '$124B' },
      trends: ['AI Diagnostics', 'Telemedicine', 'Wearable Tech', 'Digital Therapeutics']
    },
    { 
      id: 2, 
      name: 'Manufacturing', 
      icon: TrendingUp, 
      description: 'Smart manufacturing & Industry 4.0 solutions', 
      companies: '1,800+',
      longDescription: 'Transforming traditional manufacturing with IoT sensors, robotics automation, predictive maintenance, and smart factory solutions for enhanced productivity.',
      keyStats: { growth: '18%', employees: '380K+', revenue: '$156B' },
      trends: ['IoT Integration', 'Predictive Analytics', 'Robotics', 'Digital Twins']
    },
    { 
      id: 3, 
      name: 'Financial Services', 
      icon: DollarSign, 
      description: 'Fintech & digital banking platforms', 
      companies: '3,200+',
      longDescription: 'Leading the digital transformation of financial services with blockchain technology, mobile banking, robo-advisors, and cryptocurrency solutions.',
      keyStats: { growth: '31%', employees: '520K+', revenue: '$298B' },
      trends: ['Blockchain', 'Digital Payments', 'Robo-advisors', 'DeFi']
    },
    { 
      id: 4, 
      name: 'Retail', 
      icon: ShoppingCart, 
      description: 'E-commerce & omnichannel retail solutions', 
      companies: '2,900+',
      longDescription: 'Enhancing customer experiences through personalized shopping, inventory management, AR/VR try-ons, and seamless omnichannel integration.',
      keyStats: { growth: '27%', employees: '480K+', revenue: '$234B' },
      trends: ['AR Shopping', 'Personalization', 'Social Commerce', 'Voice Shopping']
    },
    { 
      id: 5, 
      name: 'Energy', 
      icon: Zap, 
      description: 'Renewable energy & smart grid technologies', 
      companies: '1,100+',
      longDescription: 'Pioneering sustainable energy solutions with smart grids, energy storage systems, solar technology, and carbon footprint management.',
      keyStats: { growth: '34%', employees: '290K+', revenue: '$178B' },
      trends: ['Smart Grids', 'Energy Storage', 'Solar Tech', 'Carbon Tracking']
    },
    { 
      id: 6, 
      name: 'Automotive', 
      icon: Car, 
      description: 'Connected vehicles & autonomous systems', 
      companies: '950+',
      longDescription: 'Driving the future of mobility with electric vehicles, autonomous driving technology, connected car platforms, and smart transportation systems.',
      keyStats: { growth: '29%', employees: '340K+', revenue: '$201B' },
      trends: ['Electric Vehicles', 'Autonomous Driving', 'Connected Cars', 'Fleet Management']
    },
    { 
      id: 7, 
      name: 'Pharmaceuticals', 
      icon: Pill, 
      description: 'Drug discovery & clinical trial management', 
      companies: '1,400+',
      longDescription: 'Accelerating drug discovery through AI-powered research, digital clinical trials, personalized medicine, and regulatory compliance platforms.',
      keyStats: { growth: '21%', employees: '320K+', revenue: '$189B' },
      trends: ['AI Drug Discovery', 'Digital Trials', 'Personalized Medicine', 'Regulatory Tech']
    },
    { 
      id: 8, 
      name: 'Telecommunications', 
      icon: Phone, 
      description: '5G networks & communication platforms', 
      companies: '780+',
      longDescription: 'Building next-generation communication infrastructure with 5G networks, edge computing, unified communications, and network optimization.',
      keyStats: { growth: '25%', employees: '260K+', revenue: '$145B' },
      trends: ['5G Networks', 'Edge Computing', 'Network Slicing', 'Unified Communications']
    },
    { 
      id: 9, 
      name: 'Logistics', 
      icon: Truck, 
      description: 'Supply chain optimization & tracking', 
      companies: '2,100+',
      longDescription: 'Optimizing global supply chains with real-time tracking, warehouse automation, route optimization, and last-mile delivery solutions.',
      keyStats: { growth: '22%', employees: '410K+', revenue: '$167B' },
      trends: ['Warehouse Automation', 'Route Optimization', 'Last-Mile Delivery', 'Supply Chain Visibility']
    },
    { 
      id: 10, 
      name: 'Construction', 
      icon: Hammer, 
      description: 'Smart buildings & project management', 
      companies: '1,600+',
      longDescription: 'Modernizing construction with BIM technology, project management platforms, smart buildings, and sustainable construction practices.',
      keyStats: { growth: '19%', employees: '350K+', revenue: '$134B' },
      trends: ['BIM Technology', 'Smart Buildings', 'Sustainable Construction', 'Project Management']
    },
    { 
      id: 11, 
      name: 'Media & Entertainment', 
      icon: Film, 
      description: 'Streaming platforms & content management', 
      companies: '1,300+',
      longDescription: 'Transforming entertainment with streaming platforms, content creation tools, virtual production, and immersive media experiences.',
      keyStats: { growth: '28%', employees: '280K+', revenue: '$156B' },
      trends: ['Streaming Platforms', 'Virtual Production', 'Content AI', 'Immersive Media']
    },
    { 
      id: 12, 
      name: 'Food & Beverage', 
      icon: Wheat, 
      description: 'Food safety & restaurant tech solutions', 
      companies: '2,000+',
      longDescription: 'Enhancing food industry operations with safety monitoring, restaurant POS systems, delivery platforms, and supply chain traceability.',
      keyStats: { growth: '24%', employees: '390K+', revenue: '$142B' },
      trends: ['Food Safety Tech', 'Restaurant Automation', 'Delivery Platforms', 'Supply Traceability']
    },
    { 
      id: 13, 
      name: 'Shipping', 
      icon: Ship, 
      description: 'Maritime logistics & port management', 
      companies: '650+',
      longDescription: 'Modernizing maritime operations with port automation, vessel tracking, cargo optimization, and digital documentation systems.',
      keyStats: { growth: '17%', employees: '190K+', revenue: '$98B' },
      trends: ['Port Automation', 'Vessel Tracking', 'Cargo Optimization', 'Digital Documentation']
    },
    { 
      id: 14, 
      name: 'Trading', 
      icon: TrendingUp, 
      description: 'Algorithmic trading & market analytics', 
      companies: '880+',
      longDescription: 'Revolutionizing financial markets with algorithmic trading, real-time analytics, risk management, and regulatory compliance tools.',
      keyStats: { growth: '35%', employees: '210K+', revenue: '$187B' },
      trends: ['Algorithmic Trading', 'Real-time Analytics', 'Risk Management', 'RegTech']
    },
    { 
      id: 15, 
      name: 'Chemical', 
      icon: Beaker, 
      description: 'Process optimization & safety systems', 
      companies: '720+',
      longDescription: 'Optimizing chemical processes with advanced monitoring, safety systems, environmental compliance, and predictive maintenance solutions.',
      keyStats: { growth: '16%', employees: '170K+', revenue: '$123B' },
      trends: ['Process Optimization', 'Safety Systems', 'Environmental Compliance', 'Predictive Maintenance']
    },
    { 
      id: 16, 
      name: 'Hospitality', 
      icon: Bed, 
      description: 'Hotel management & booking platforms', 
      companies: '1,500+',
      longDescription: 'Enhancing guest experiences with property management systems, booking platforms, contactless services, and revenue optimization tools.',
      keyStats: { growth: '26%', employees: '330K+', revenue: '$129B' },
      trends: ['Property Management', 'Contactless Services', 'Revenue Optimization', 'Guest Experience']
    },
    { 
      id: 17, 
      name: 'Agriculture', 
      icon: Wheat, 
      description: 'Precision farming & crop monitoring', 
      companies: '900+',
      longDescription: 'Advancing sustainable agriculture with precision farming, crop monitoring, soil analysis, and farm management systems.',
      keyStats: { growth: '30%', employees: '220K+', revenue: '$87B' },
      trends: ['Precision Farming', 'Crop Monitoring', 'Soil Analysis', 'Farm Management']
    },
    { 
      id: 18, 
      name: 'Insurance', 
      icon: Shield, 
      description: 'Digital insurance & risk assessment', 
      companies: '1,200+',
      longDescription: 'Transforming insurance with digital policies, AI-powered underwriting, claims automation, and personalized risk assessment.',
      keyStats: { growth: '23%', employees: '290K+', revenue: '$167B' },
      trends: ['Digital Policies', 'AI Underwriting', 'Claims Automation', 'Risk Assessment']
    },
    { 
      id: 19, 
      name: 'Education', 
      icon: GraduationCap, 
      description: 'E-learning & educational technology', 
      companies: '2,200+',
      longDescription: 'Revolutionizing education with online learning platforms, adaptive learning systems, virtual classrooms, and educational analytics.',
      keyStats: { growth: '32%', employees: '440K+', revenue: '$178B' },
      trends: ['Online Learning', 'Adaptive Systems', 'Virtual Classrooms', 'Educational Analytics']
    }
  ];

  const filteredIndustries = industries.filter(industry =>
    industry.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-950 p-6 relative overflow-hidden">
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(50px) scale(0.9); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
      {/* Neural Network Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Network Nodes */}
        <div className="absolute top-32 left-24 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50 animate-pulse"></div>
        <div className="absolute top-64 left-80 w-2 h-2 bg-indigo-400 rounded-full shadow-lg shadow-indigo-400/50 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-96 left-40 w-4 h-4 bg-sky-400 rounded-full shadow-lg shadow-sky-400/50 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-48 right-32 w-3 h-3 bg-blue-300 rounded-full shadow-lg shadow-blue-300/50 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-32 right-64 w-2 h-2 bg-indigo-300 rounded-full shadow-lg shadow-indigo-300/50 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-64 left-1/3 w-3 h-3 bg-sky-300 rounded-full shadow-lg shadow-sky-300/50 animate-pulse" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50 animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="line1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.1"/>
            </linearGradient>
            <linearGradient id="line2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          
          <line x1="6rem" y1="8rem" x2="20rem" y2="16rem" stroke="url(#line1)" strokeWidth="1" className="animate-pulse" style={{animationDuration: '4s'}}/>
          <line x1="20rem" y1="16rem" x2="10rem" y2="24rem" stroke="url(#line2)" strokeWidth="1" className="animate-pulse" style={{animationDelay: '1s', animationDuration: '3s'}}/>
          <line x1="10rem" y1="24rem" x2="calc(100% - 8rem)" y2="12rem" stroke="url(#line1)" strokeWidth="1" className="animate-pulse" style={{animationDelay: '2s', animationDuration: '5s'}}/>
          <line x1="calc(100% - 8rem)" y1="12rem" x2="calc(100% - 16rem)" y2="calc(100% - 8rem)" stroke="url(#line2)" strokeWidth="1" className="animate-pulse" style={{animationDelay: '0.5s', animationDuration: '4s'}}/>
          <line x1="calc(100% - 16rem)" y1="calc(100% - 8rem)" x2="33%" y2="calc(100% - 16rem)" stroke="url(#line1)" strokeWidth="1" className="animate-pulse" style={{animationDelay: '1.5s', animationDuration: '3.5s'}}/>
          <line x1="33%" y1="calc(100% - 16rem)" x2="75%" y2="50%" stroke="url(#line2)" strokeWidth="1" className="animate-pulse" style={{animationDelay: '2.5s', animationDuration: '4.5s'}}/>
        </svg>
        
        {/* Floating Data Streams */}
        <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent transform -rotate-12 animate-pulse" style={{animationDuration: '6s'}}></div>
        <div className="absolute top-40 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent transform rotate-6 animate-pulse" style={{animationDelay: '2s', animationDuration: '8s'}}></div>
        <div className="absolute bottom-32 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent transform -rotate-3 animate-pulse" style={{animationDelay: '4s', animationDuration: '7s'}}></div>
        
        {/* Circuit Board Patterns */}
        <div className="absolute top-16 right-20 opacity-20">
          <div className="w-16 h-16 border-l border-t border-blue-400/40"></div>
          <div className="w-8 h-8 border-r border-b border-indigo-400/40 ml-8 mt-8"></div>
        </div>
        <div className="absolute bottom-20 left-16 opacity-20">
          <div className="w-12 h-12 border-r border-t border-sky-400/40"></div>
          <div className="w-6 h-6 border-l border-b border-blue-400/40 ml-6 mt-6"></div>
        </div>
        
        {/* Matrix-style Falling Code */}
        <div className="absolute top-0 left-10 text-blue-400/10 text-xs font-mono animate-pulse" style={{animationDuration: '3s'}}>
          01001<br/>11010<br/>00101<br/>10110
        </div>
        <div className="absolute top-20 right-16 text-indigo-400/10 text-xs font-mono animate-pulse" style={{animationDelay: '1s', animationDuration: '4s'}}>
          AI<br/>ML<br/>IOT<br/>5G
        </div>
        <div className="absolute bottom-32 left-1/2 text-sky-400/10 text-xs font-mono animate-pulse" style={{animationDelay: '2s', animationDuration: '5s'}}>
          API<br/>SDK<br/>SaaS<br/>Cloud
        </div>
        
        {/* Hexagonal Grid Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, #3b82f6 1px, transparent 1px),
                             radial-gradient(circle at 80% 80%, #0ea5e9 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-8 relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-2xl mb-4 backdrop-blur-sm border border-blue-500/30">
            <Building2 className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Industries We Serve
          </h1>
          <p className="text-gray-400 text-lg">Powering innovation across diverse sectors worldwide</p>
        </div>

        {/* Stats Bar */}
        <div className="flex justify-center gap-8 mb-8 relative z-10">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">25K+</div>
            <div className="text-sm text-gray-400">Companies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">19</div>
            <div className="text-sm text-gray-400">Industries</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">150+</div>
            <div className="text-sm text-gray-400">Countries</div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-8 z-10">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search industries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-700/50 bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 shadow-xl"
          />
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 relative z-10">
          {filteredIndustries.map((industry, index) => {
            const IconComponent = industry.icon;
            const isFavorite = favorites.has(industry.id);
            
            return (
              <div
                key={industry.id}
                className="group relative"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Card */}
                <div
                  onClick={() => setSelectedIndustry(industry)}
                  className="bg-gray-800/30 backdrop-blur-md rounded-3xl p-6 cursor-pointer transition-all duration-700 ease-out hover:bg-gray-700/40 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 border border-gray-700/30 hover:border-blue-500/40 relative overflow-hidden group transform hover:rotate-1 hover:-translate-y-2"
                >
                  
                  {/* Favorite Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(industry.id);
                    }}
                    className={`absolute top-4 right-4 w-8 h-8 rounded-full transition-all duration-300 flex items-center justify-center backdrop-blur-sm border ${
                      isFavorite 
                        ? 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30 hover:bg-yellow-400/30' 
                        : 'text-gray-500 bg-gray-800/50 border-gray-600/50 hover:text-yellow-400 hover:bg-yellow-400/20 hover:border-yellow-400/30'
                    }`}
                  >
                    <Star className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
                  </button>
                  
                  {/* Icon Container */}
                  <div className="flex justify-center mb-4 relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 flex items-center justify-center group-hover:shadow-xl group-hover:shadow-blue-500/30 transition-all duration-700 ease-out border border-gray-700/50 group-hover:border-blue-500/50 transform group-hover:scale-110 group-hover:rotate-6">
                      <IconComponent className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-all duration-500 group-hover:scale-110 transform group-hover:rotate-12" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center space-y-2 relative z-10">
                    <h3 className="text-white font-semibold text-lg group-hover:text-blue-100 transition-all duration-500 transform group-hover:scale-105">
                      {industry.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-all duration-500">
                      {industry.description}
                    </p>
                    <div className="text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">
                      {industry.companies}
                    </div>
                    {/* Click indicator */}
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 text-xs text-blue-300 flex items-center justify-center gap-1 mt-2">
                      <span>Click for details</span>
                      <ArrowRight className="w-3 h-3 animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Animated Border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-x-0 group-hover:scale-x-100" />
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredIndustries.length === 0 && (
          <div className="text-center py-16 relative z-10">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-800/50 rounded-full flex items-center justify-center backdrop-blur-sm border border-gray-700/50">
              <Search className="w-12 h-12 text-gray-500" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-300 mb-2">No industries found</h3>
            <p className="text-gray-500">Try adjusting your search terms</p>
          </div>
        )}

        {/* Industry Detail Modal */}
        {selectedIndustry && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-gray-900/95 backdrop-blur-xl rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700/50 shadow-2xl transform animate-slideUp">
              
              {/* Header */}
              <div className="relative p-8 border-b border-gray-700/50 bg-gradient-to-r from-blue-950/50 to-indigo-950/50">
                <button
                  onClick={() => setSelectedIndustry(null)}
                  className="absolute top-6 right-6 w-10 h-10 bg-gray-800/80 hover:bg-gray-700/80 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-600/50 hover:border-gray-500/50"
                >
                  <X className="w-5 h-5 text-gray-300" />
                </button>
                
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-900/80 to-indigo-900/80 flex items-center justify-center border border-blue-700/30 shadow-lg">
                    <selectedIndustry.icon className="w-10 h-10 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedIndustry.name}</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">{selectedIndustry.longDescription}</p>
                  </div>
                </div>
              </div>
              
              {/* Key Stats */}
              <div className="p-8 border-b border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-blue-400" />
                  Key Statistics
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 rounded-2xl p-6 border border-green-700/30">
                    <div className="text-2xl font-bold text-green-400 mb-1">{selectedIndustry.keyStats.growth}</div>
                    <div className="text-sm text-gray-400">Annual Growth</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 rounded-2xl p-6 border border-blue-700/30">
                    <div className="text-2xl font-bold text-blue-400 mb-1">{selectedIndustry.keyStats.employees}</div>
                    <div className="text-sm text-gray-400">Employees</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 rounded-2xl p-6 border border-purple-700/30">
                    <div className="text-2xl font-bold text-purple-400 mb-1">{selectedIndustry.keyStats.revenue}</div>
                    <div className="text-sm text-gray-400">Market Size</div>
                  </div>
                </div>
              </div>
              
              {/* Industry Trends */}
              <div className="p-8 border-b border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  Current Trends
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedIndustry.trends.map((trend, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 hover:bg-gray-700/50 transform hover:scale-102"
                    >
                      <div className="text-blue-400 font-medium">{trend}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Additional Info */}
              <div className="p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/30">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="w-5 h-5 text-blue-400" />
                      <h4 className="text-lg font-medium text-white">Companies</h4>
                    </div>
                    <div className="text-2xl font-bold text-blue-400">{selectedIndustry.companies}</div>
                    <div className="text-sm text-gray-400 mt-1">Active companies in our network</div>
                  </div>
                  <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/30">
                    <div className="flex items-center gap-3 mb-3">
                      <Globe className="w-5 h-5 text-green-400" />
                      <h4 className="text-lg font-medium text-white">Global Reach</h4>
                    </div>
                    <div className="text-2xl font-bold text-green-400">85+</div>
                    <div className="text-sm text-gray-400 mt-1">Countries with active operations</div>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="mt-8 text-center">
                  <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 flex items-center gap-2 mx-auto">
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Favorites Section */}
        {favorites.size > 0 && (
          <div className="mt-16 p-8 bg-gray-800/30 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-700/30 relative z-10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Star className="text-yellow-400 mr-3 w-6 h-6 fill-current" />
              Your Favorites ({favorites.size})
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {industries
                .filter(industry => favorites.has(industry.id))
                .map(industry => (
                  <div
                    key={industry.id}
                    className="flex items-center space-x-3 p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20 backdrop-blur-sm hover:bg-blue-500/20 transition-colors duration-300"
                  >
                    <industry.icon className="w-6 h-6 text-blue-400" />
                    <div>
                      <div className="text-white font-medium">{industry.name}</div>
                      <div className="text-blue-400 text-sm">{industry.companies}</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IndustriesGrid;