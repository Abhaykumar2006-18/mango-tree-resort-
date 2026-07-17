import React, { useState } from 'react';

// ============================================
// DATA ARRAYS - Edit these to update content
// ============================================

// Events data array
const eventsData = [
  {
    id: 1,
    title: 'Weddings',
    description: 'Create your dream wedding in our stunning venue with lush greenery, elegant décor, and impeccable service.',
    icon: '💒'
  },
  {
    id: 2,
    title: 'Reception',
    description: 'Host a grand reception with spacious arrangements, beautiful lighting, and memorable dining experiences.',
    icon: '🥂'
  },
  {
    id: 3,
    title: 'Engagement',
    description: 'Begin your journey together in a romantic setting perfect for intimate engagement ceremonies.',
    icon: '💍'
  },
  {
    id: 4,
    title: 'Haldi Ceremony',
    description: 'Celebrate traditional Haldi rituals in our open lawns with vibrant décor and joyful ambiance.',
    icon: '🌼'
  },
  {
    id: 5,
    title: 'Mehendi Ceremony',
    description: 'Enjoy colorful Mehendi celebrations with comfortable seating and festive arrangements.',
    icon: '🎨'
  },
  {
    id: 6,
    title: 'Sangeet',
    description: 'Dance the night away with professional sound systems, stage lighting, and spacious dance floors.',
    icon: '🎶'
  },
  {
    id: 7,
    title: 'Birthday Parties',
    description: 'Celebrate milestones with customized themes, decorations, and entertainment options.',
    icon: '🎂'
  },
  {
    id: 8,
    title: 'Anniversary Celebrations',
    description: 'Mark your special years together with intimate gatherings or grand celebrations.',
    icon: '❤️'
  },
  {
    id: 9,
    title: 'Private Parties',
    description: 'Host exclusive gatherings with personalized setups and premium hospitality services.',
    icon: '🎉'
  },
  {
    id: 10,
    title: 'Family Gatherings',
    description: 'Bring your loved ones together in a peaceful resort setting perfect for reunions.',
    icon: '👨‍👩‍👧‍👦'
  },
  {
    id: 11,
    title: 'Baby Shower',
    description: 'Welcome new beginnings with beautifully themed baby shower celebrations.',
    icon: '👶'
  },
  {
    id: 12,
    title: 'Corporate Meetings',
    description: 'Conduct productive meetings with modern amenities and professional arrangements.',
    icon: '💼'
  },
  {
    id: 13,
    title: 'Conferences',
    description: 'Host large-scale conferences with flexible seating, AV equipment, and breakout spaces.',
    icon: '🎤'
  },
  {
    id: 14,
    title: 'Team Outings',
    description: 'Build stronger teams with outdoor activities, team games, and relaxing retreat experiences.',
    icon: '🏕️'
  },
  {
    id: 15,
    title: 'Cultural Programs',
    description: 'Showcase art, music, and cultural performances in our versatile event spaces.',
    icon: '🎭'
  },
  {
    id: 16,
    title: 'Festive Celebrations',
    description: 'Celebrate festivals with grand arrangements, traditional décor, and community gatherings.',
    icon: '✨'
  }
];

// Celebration area features
const celebrationFeatures = [
  {
    id: 1,
    title: 'Large Open Lawn',
    description: 'Expansive green lawns spanning thousands of square feet for grand celebrations.',
    icon: '🌿'
  },
  {
    id: 2,
    title: 'Beautiful Greenery',
    description: 'Surrounded by mango trees and lush gardens creating a natural paradise.',
    icon: '🌳'
  },
  {
    id: 3,
    title: 'Flexible Seating',
    description: 'Customizable seating arrangements from intimate to 500+ guest configurations.',
    icon: '🪑'
  },
  {
    id: 4,
    title: 'Professional Stage',
    description: 'Elevated stage with backdrop support, lighting rigs, and sound integration.',
    icon: '🎪'
  },
  {
    id: 5,
    title: 'Dance Floor',
    description: 'Dedicated dance floor area with ambient lighting for celebrations.',
    icon: '💃'
  },
  {
    id: 6,
    title: 'Indoor & Outdoor',
    description: 'Seamless indoor-outdoor event flow for all weather conditions.',
    icon: '🏛️'
  }
];

// Parking features
const parkingFeatures = [
  {
    id: 1,
    title: 'Spacious Parking',
    description: 'Ample parking space accommodating 100+ vehicles comfortably.',
    icon: '🚗'
  },
  {
    id: 2,
    title: 'Organized Management',
    description: 'Professional parking attendants ensuring smooth vehicle flow.',
    icon: '👤'
  },
  {
    id: 3,
    title: 'Easy Access',
    description: 'Wide entry and exit points for hassle-free movement.',
    icon: '🚦'
  },
  {
    id: 4,
    title: 'Well-Maintained',
    description: 'Clean, paved parking surfaces with clear markings.',
    icon: '✅'
  },
  {
    id: 5,
    title: 'Safe & Secure',
    description: '24/7 surveillance and security for parked vehicles.',
    icon: '🔒'
  },
  {
    id: 6,
    title: 'Event-Ready',
    description: 'Designed to handle large wedding and corporate gatherings.',
    icon: '🎊'
  }
];

// Security features
const securityFeatures = [
  {
    id: 1,
    title: '24×7 Security Staff',
    description: 'Trained security personnel on duty round the clock.',
    icon: '👮'
  },
  {
    id: 2,
    title: 'CCTV Surveillance',
    description: 'Comprehensive camera coverage across all event areas.',
    icon: '📹'
  },
  {
    id: 3,
    title: 'Safe Environment',
    description: 'Secure perimeter with controlled access points.',
    icon: '🛡️'
  },
  {
    id: 4,
    title: 'Well-lit Areas',
    description: 'Bright lighting throughout the venue for evening events.',
    icon: '💡'
  },
  {
    id: 5,
    title: 'Event Management',
    description: 'Professional coordinators ensuring smooth operations.',
    icon: '📋'
  },
  {
    id: 6,
    title: 'Clean Venue',
    description: 'Maintained hygiene standards before and during events.',
    icon: '🧹'
  }
];

// Why choose us features
const whyChooseUsFeatures = [
  { id: 1, title: 'Luxury Venue', description: 'Premium event spaces with elegant aesthetics.', icon: '👑' },
  { id: 2, title: 'Spacious Lawn', description: 'Expansive grounds for grand celebrations.', icon: '🌾' },
  { id: 3, title: 'Large Parking', description: 'Hassle-free parking for all guests.', icon: '🅿️' },
  { id: 4, title: 'Comfortable Rooms', description: 'Well-appointed accommodations for guests.', icon: '🛏️' },
  { id: 5, title: 'Premium Hospitality', description: 'Attentive service exceeding expectations.', icon: '🤝' },
  { id: 6, title: 'Delicious Catering', description: 'Multi-cuisine menus crafted by expert chefs.', icon: '🍽️' },
  { id: 7, title: 'Personalized Planning', description: 'Dedicated coordinators for your vision.', icon: '📝' },
  { id: 8, title: 'Beautiful Location', description: 'Scenic Herbertpur setting with mountain views.', icon: '🏔️' },
  { id: 9, title: 'Professional Staff', description: 'Experienced team ensuring flawless execution.', icon: '👥' },
  { id: 10, title: 'Affordable Packages', description: 'Competitive pricing without compromising quality.', icon: '💰' }
];

// Gallery items
const galleryItems = [
  { id: 1, title: 'Wedding Ceremony', category: 'Weddings' , url:'https://media.istockphoto.com/id/972734600/photo/colorful-stage-decoration-for-bride-and-groom-in-sangeet-night-of-indian-wedding.jpg?s=2048x2048&w=is&k=20&c=Zr-bKrr38pjceBam-l0nfhJGHzdua_ygU8H47g65zgk='},
  { id: 2, title: 'Birthday Celebration', category: 'Parties', url:'https://images.unsplash.com/photo-1610173827002-62c0f1f05d04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlZGRpbmclMjBjZXJlbW9ueSUyMGluZGlhbnxlbnwwfDB8MHx8fDA%3D' },
  { id: 3, title: 'Reception Setup', category: 'Reception' , url:'https://images.unsplash.com/photo-1610173827002-62c0f1f05d04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlZGRpbmclMjBjZXJlbW9ueSUyMGluZGlhbnxlbnwwfDB8MHx8fDA%3D' },
  { id: 4, title: 'Green Lawn', category: 'Venue' , url:'https://images.unsplash.com/photo-1610173827002-62c0f1f05d04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlZGRpbmclMjBjZXJlbW9ueSUyMGluZGlhbnxlbnwwfDB8MHx8fDA%3D'},
  { id: 5, title: 'Stage Design', category: 'Decoration' , url:'https://images.unsplash.com/photo-1610173827002-62c0f1f05d04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlZGRpbmclMjBjZXJlbW9ueSUyMGluZGlhbnxlbnwwfDB8MHx8fDA%3D' },
  { id: 6, title: 'Floral Décor', category: 'Decoration' , url:'https://images.unsplash.com/photo-1610173827002-62c0f1f05d04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlZGRpbmclMjBjZXJlbW9ueSUyMGluZGlhbnxlbnwwfDB8MHx8fDA%3D' },
  { id: 7, title: 'Dining Area', category: 'Catering' , url:'https://images.unsplash.com/photo-1610173827002-62c0f1f05d04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlZGRpbmclMjBjZXJlbW9ueSUyMGluZGlhbnxlbnwwfDB8MHx8fDA%3D'},
  { id: 8, title: 'Celebration Moments', category: 'Events' , url:'https://images.unsplash.com/photo-1610173827002-62c0f1f05d04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlZGRpbmclMjBjZXJlbW9ueSUyMGluZGlhbnxlbnwwfDB8MHx8fDA%3D' }
];

// Booking process steps
const bookingSteps = [
  { id: 1, step: '01', title: 'Inquiry', description: 'Reach out to us with your event requirements and preferred dates.' },
  { id: 2, step: '02', title: 'Venue Visit', description: 'Schedule a visit to explore our facilities and discuss possibilities.' },
  { id: 3, step: '03', title: 'Booking', description: 'Confirm your reservation with a booking agreement and advance payment.' },
  { id: 4, step: '04', title: 'Planning', description: 'Work with our team to finalize every detail of your event.' },
  { id: 5, step: '05', title: 'Decoration', description: 'Our decorators transform the venue according to your theme.' },
  { id: 6, step: '06', title: 'Celebration', description: 'Enjoy your special day while we handle all logistics.' },
  { id: 7, step: '07', title: 'Guest Hospitality', description: 'Your guests receive premium service and comfortable stays.' },
  { id: 8, step: '08', title: 'Successful Event', description: 'Create lasting memories with a flawlessly executed celebration.' }
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Priya & Rahul Sharma',
    eventType: 'Wedding',
    review: 'Our wedding at Mango Tree Resort was absolutely magical. The lawn was beautifully decorated, the staff was incredibly attentive, and our guests are still talking about the experience. Truly the best decision we made!',
    rating: 5
  },
  {
    id: 2,
    name: 'Anil Mehta',
    eventType: 'Corporate Conference',
    review: 'Excellent venue for our annual conference. The facilities were top-notch, parking was well-organized, and the catering exceeded expectations. Professional team that understood our business needs perfectly.',
    rating: 5
  },
  {
    id: 3,
    name: 'Sunita Gupta',
    eventType: '50th Anniversary',
    review: 'Celebrated our golden anniversary here with 200 family members. The spacious lawn, comfortable rooms for relatives, and delicious food made it unforgettable. Thank you for making our milestone so special!',
    rating: 5
  },
  {
    id: 4,
    name: 'Vikram Singh',
    eventType: 'Birthday Party',
    review: 'Threw a surprise 40th birthday bash here. The team kept the secret perfectly, the decorations were stunning, and the kids had a blast in the open spaces. Highly recommend for family celebrations!',
    rating: 4
  }
];

// FAQ data
const faqData = [
  {
    id: 1,
    question: 'Can we book for weddings?',
    answer: 'Absolutely! Mango Tree Resort is one of the premier wedding destinations in Herbertpur. We offer complete wedding packages including venue, decoration, catering, accommodation, and event coordination for ceremonies of all sizes.'
  },
  {
    id: 2,
    question: 'Is parking available?',
    answer: 'Yes, we have a large, well-organized parking facility that can accommodate 100+ vehicles. Our parking is supervised, well-lit, and designed to handle large events like weddings and corporate gatherings.'
  },
  {
    id: 3,
    question: 'Do you provide catering?',
    answer: 'Yes, we offer comprehensive catering services with multi-cuisine menus including North Indian, South Indian, Chinese, Continental, and local Uttarakhand specialties. Custom menus can be arranged based on your preferences.'
  },
  {
    id: 4,
    question: 'Can decorations be customized?',
    answer: 'Absolutely! We work with professional decorators who can bring any theme or vision to life. From traditional wedding décor to modern party themes, we customize everything according to your requirements and budget.'
  },
  {
    id: 5,
    question: 'Are rooms available for guests?',
    answer: 'Yes, we have comfortable, well-appointed guest rooms on the premises. This makes us perfect for multi-day events where guests need accommodation, ensuring convenience and a complete resort experience.'
  },
  {
    id: 6,
    question: 'Is the venue suitable for corporate events?',
    answer: 'Yes, we regularly host corporate meetings, conferences, team outings, and seminars. We provide AV equipment, flexible seating arrangements, Wi-Fi, and professional support for business events of all scales.'
  }
];

// Private party types
const privatePartyTypes = [
  { id: 1, title: 'Birthday Parties', description: 'From first birthdays to milestone celebrations with themed décor.' },
  { id: 2, title: 'Anniversary Celebrations', description: 'Intimate dinners or grand gatherings for your special years.' },
  { id: 3, title: 'Family Functions', description: 'Reunions, get-togethers, and festive family celebrations.' },
  { id: 4, title: 'Farewell Parties', description: 'Send-offs and retirement celebrations with personalized touches.' },
  { id: 5, title: 'Theme Parties', description: 'Creative themed events from retro nights to costume parties.' }
];

// ============================================
// REUSABLE COMPONENTS
// ============================================

// Section wrapper component for consistent spacing
const Section = ({ children, className = '', id = '' }) => (
  <section id={id} className={`py-16 md:py-20 lg:py-24 ${className}`}>
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
);

// Section heading component
const SectionHeading = ({ title, subtitle, centered = true, light = false }) => (
  <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
    <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 ${light ? 'text-white' : 'text-gray-900'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg md:text-xl max-w-3xl ${centered ? 'mx-auto' : ''} ${light ? 'text-gray-200' : 'text-gray-600'}`}>
        {subtitle}
      </p>
    )}
  </div>
);

// Feature card component
const FeatureCard = ({ icon, title, description, variant = 'default' }) => {
  const variants = {
    default: 'bg-white border border-gray-100',
    elevated: 'bg-white shadow-lg',
    dark: 'bg-gray-800 text-white'
  };

  return (
    <article className={`${variants[variant]} rounded-2xl md:rounded-3xl p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
      <div className="text-4xl md:text-5xl mb-4">{icon}</div>
      <h3 className={`text-xl md:text-2xl font-bold mb-3 ${variant === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
      <p className={`leading-relaxed ${variant === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
        {description}
      </p>
    </article>
  );
};

// Event card component
const EventCard = ({ icon, title, description }) => (
  <article className="group bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-md hover:shadow-2xl border border-gray-100 hover:border-[#2E7D32]/20 transition-all duration-300 hover:-translate-y-2">
    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#2E7D32]/10 to-[#C9A227]/10 rounded-2xl flex items-center justify-center text-3xl md:text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#2E7D32] transition-colors duration-300">
      {title}
    </h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </article>
);

// Button component
const Button = ({ children, variant = 'primary', size = 'default', className = '', ...props }) => {
  const variants = {
    primary: 'bg-[#2E7D32] hover:bg-[#1B5E20] text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-[#C9A227] hover:bg-[#B8922A] text-white shadow-lg hover:shadow-xl',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-[#2E7D32]',
    outlineDark: 'border-2 border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white'
  };

  const sizes = {
    default: 'px-6 py-3 md:px-8 md:py-4 text-base md:text-lg',
    large: 'px-8 py-4 md:px-10 md:py-5 text-lg md:text-xl'
  };

  return (
    <button
      className={`${variants[variant]} ${sizes[size]} font-semibold rounded-full transition-all duration-300 transform hover:scale-105 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Gallery item component
const GalleryItem = ({ title, category  , url}) => (
  <article className="group relative aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer">
    {/* Placeholder gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#2E7D32]/20 to-[#C9A227]/20" />
    
    {/* Placeholder icon */}
    <div className="absolute inset-0 flex items-center justify-center text-6xl text-white/30">
      <img className='h-full w-full' src={url} alt="" />
    </div>
    
    {/* Overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300  ">
        <span className="text-[#C9A227] text-sm font-medium">{category}</span>
        <h3 className="text-white text-lg md:text-xl font-bold mt-1">{title}</h3>
      </div>
    </div>
  </article>
);

// Timeline step component
const TimelineStep = ({ step, title, description, isLast }) => (
  <div className="relative flex gap-4 md:gap-6">
    {/* Timeline line */}
    {!isLast && (
      <div className="absolute left-6 md:left-8 top-16 w-0.5 h-full bg-gradient-to-b from-[#2E7D32] to-[#C9A227]" />
    )}
    
    {/* Step number circle */}
    <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg flex-shrink-0">
      {step}
    </div>
    
    {/* Content */}
    <div className="flex-1 pb-10 md:pb-12">
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

// Testimonial card component
const TestimonialCard = ({ name, eventType, review, rating }) => (
  <article className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
    {/* Rating stars */}
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-xl ${i < rating ? 'text-[#C9A227]' : 'text-gray-300'}`}>
          ★
        </span>
      ))}
    </div>
    
    {/* Review text */}
    <p className="text-gray-600 leading-relaxed mb-6 italic">"{review}"</p>
    
    {/* Author info */}
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-gradient-to-br from-[#2E7D32] to-[#C9A227] rounded-full flex items-center justify-center text-white font-bold text-lg">
        {name.charAt(0)}
      </div>
      <div>
        <h4 className="font-bold text-gray-900">{name}</h4>
        <p className="text-sm text-[#2E7D32]">{eventType}</p>
      </div>
    </div>
  </article>
);

// FAQ item component
const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200 last:border-b-0">
    <button
      onClick={onClick}
      className="w-full py-5 md:py-6 flex items-center justify-between text-left hover:text-[#2E7D32] transition-colors duration-300"
    >
      <span className="text-lg md:text-xl font-semibold text-gray-900 pr-4">{question}</span>
      <span className={`text-2xl text-[#2E7D32] transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-45' : ''}`}>
        +
      </span>
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
      <p className="text-gray-600 leading-relaxed">{answer}</p>
    </div>
  </div>
);

// ============================================
// MAIN EVENTS PAGE COMPONENT
// ============================================

const Events = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <main className="bg-white font-Cinzel">
      
      {/* ========== HERO SECTION ========== */}
      <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-no-repeat bg-cover bg-[url('https://plus.unsplash.com/premium_photo-1708589337356-d3848bd3e8aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHBhcnR5JTIwdmVudXxlbnwwfDB8MHx8fDA%3D')]">
          {/* Decorative pattern overlay */}
          <div className="absolute inset-0 opacity-10" />
        </div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Hero content */}
        <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Decorative element */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-1 bg-[#C9A227]" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Events & <span className="text-[#C9A227]">Celebrations</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-10 leading-relaxed">
            From grand weddings to intimate private parties, Mango Tree Resort provides elegant venues, 
            exceptional hospitality, spacious lawns, and memorable experiences for every celebration.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center gap-8 md:gap-14">
            <button className="relative overflow-hidden px-8 py-3 rounded-xl bg-gradient-to-r from-[#0A1F44] via-[#0F3D91] to-[#1D4ED8] text-white font-semibold tracking-wide border border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_35px_rgba(96,165,250,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 before:absolute before:inset-0 before:bg-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity"> Book Your Event </button>
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-950 to-purple-800 text-white font-semibold border border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.7)] hover:animate-pulse hover:shadow-[0_0_45px_rgba(192,132,252,1)] transition-all duration-300"> <a href="tel:+911234567890" >Contact us</a></button>
          
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-white/70 rounded-full" />
            </div>
          </div>
        </div>
      </header>

      {/* ========== ABOUT OUR VENUE SECTION ========== */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Content column */}
          <div>
            <span className="text-[#C9A227] font-semibold text-sm md:text-base tracking-wider uppercase">
              Welcome to Our Venue
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-6">
              About Our <span className="text-[#2E7D32]">Event Venue</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Nestled in the serene landscapes of Herbertpur, Dehradun, Mango Tree Resort stands as one of the 
              finest event destinations in Uttarakhand. Our venue combines natural beauty with modern amenities 
              to create unforgettable celebrations.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Whether you're planning a lavish wedding, an intimate family gathering, or a corporate retreat, 
              our spacious lawns, comfortable accommodations, and dedicated team ensure every event exceeds expectations.
            </p>
            
            {/* Feature highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Beautiful Surroundings',
                'Premium Hospitality',
                'Spacious Venues',
                'Flexible Event Spaces',
                'Guest Accommodation',
                'Peaceful Environment'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-[#2E7D32] rounded-full flex items-center justify-center text-white text-sm">
                    ✓
                  </span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image column */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-[#2E7D32]/20 to-[#C9A227]/20 rounded-3xl overflow-hidden shadow-2xl">
              {/* Placeholder for venue image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center object-cover">
                  <img src="https://media.istockphoto.com/id/2265758548/photo/asian-male-waiter-explaining-menu-to-asian-guests-at-outdoor-restaurant.jpg?s=2048x2048&w=is&k=20&c=OVf-TXDVxLBj-twdDi0VtRAPaOdyml4JDb0IKJIvxiM=" alt="" />
                </div>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#C9A227]/10 rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#2E7D32]/10 rounded-full -z-10" />
          </div>
        </div>
      </Section>

      {/* ========== EVENTS WE HOST SECTION ========== */}
      <Section className="bg-gray-50">
        <SectionHeading 
          title="Events We Host"
          subtitle="From traditional ceremonies to modern celebrations, we bring your vision to life with exceptional attention to detail."
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {eventsData.map((event) => (
            <EventCard 
              key={event.id}
              icon={event.icon}
              title={event.title}
              description={event.description}
            />
          ))}
        </div>
      </Section>

      {/* ========== GRAND WEDDING EXPERIENCE SECTION ========== */}
      <Section className="bg-[#BDB5D5]">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image column */}
          <div className="relative order-2 lg:order-1">
            <div className=" aspect-[4/3] bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden">
              {/* Placeholder for wedding image */}
                <img src="https://images.unsplash.com/photo-1568530873454-e4103a0b3c71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VkZGluZyUyMGhhbGx8ZW58MHwwfDB8fHww" alt="" />
            </div>
          </div>
          
          {/* Content column */}
          <div className="order-1 lg:order-2">
            <span className="text-[#C9A227] font-semibold text-sm md:text-base tracking-wider uppercase">
              Your Dream Wedding
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-6">
              Grand Wedding Experience
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed mb-8">
              Create the wedding of your dreams at Mango Tree Resort. Our expansive wedding lawn, 
              surrounded by lush greenery and mountain views, provides the perfect backdrop for your 
              special day.
            </p>
            
            {/* Wedding features */}
            <div className="space-y-4">
              {[
                { icon: '🌿', text: 'Beautifully landscaped wedding lawn' },
                { icon: '🎨', text: 'Stunning decoration arrangements' },
                { icon: '🎭', text: 'Professional stage setup with lighting' },
                { icon: '🍽️', text: 'Exquisite multi-cuisine catering' },
                { icon: '🛏️', text: 'Comfortable guest accommodation' },
                { icon: '📸', text: 'Picturesque photography locations' },
                { icon: '📋', text: 'Dedicated event planning team' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-white text-lg">{item.text}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <Button variant="secondary">
                Plan Your Wedding
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* ========== PRIVATE PARTIES SECTION ========== */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Content column */}
          <div>
            <span className="text-[#C9A227] font-semibold text-sm md:text-base tracking-wider uppercase">
              Celebrate in Style
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-6">
              Private <span className="text-[#2E7D32]">Parties</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Whether it's a milestone birthday, a special anniversary, or an intimate family celebration, 
              Mango Tree Resort offers personalized party experiences tailored to your vision.
            </p>
            
            {/* Party types */}
            <div className="space-y-4">
              {privatePartyTypes.map((party) => (
                <div key={party.id} className="bg-gray-50 rounded-2xl p-5 hover:bg-[#2E7D32]/5 transition-colors duration-300">
                  <h4 className="font-bold text-gray-900 mb-1">{party.title}</h4>
                  <p className="text-gray-600 text-sm">{party.description}</p>
                </div>
              ))}
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed mt-8">
              Every detail can be customized — from themes and decorations to menus and entertainment. 
              Our team works closely with you to create a celebration that's uniquely yours.
            </p>
          </div>
          
          {/* Image column */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-[#C9A227]/20 to-[#2E7D32]/20 rounded-3xl overflow-hidden shadow-xl">
              {/* Placeholder for party image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-8xl">🎉</span>
                  <p className="text-gray-500 mt-4">Party Venue Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ========== SPACIOUS CELEBRATION AREA SECTION ========== */}
      <Section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <SectionHeading 
          title="Spacious Celebration Area"
          subtitle="Experience the freedom of large, open spaces designed to accommodate celebrations of every scale — from intimate gatherings to grand events with hundreds of guests."
          light={true}
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {celebrationFeatures.map((feature) => (
            <article 
              key={feature.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#C9A227] to-[#B8922A] rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </article>
          ))}
        </div>
        
        {/* Additional info */}
        <div className="mt-12 md:mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Day & Night Events Welcome</h3>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Our venue transforms beautifully from sunlit daytime celebrations to enchanting evening events. 
            With professional lighting systems and ambient arrangements, your event shines at any hour.
          </p>
        </div>
      </Section>

      {/* ========== LARGE PARKING FACILITY SECTION ========== */}
      <Section className="bg-gray-50">
        <SectionHeading 
          title="Large Parking Facility"
          subtitle="Never worry about parking during your event. Our expansive, well-organized parking area ensures every guest arrives and departs with ease."
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {parkingFeatures.map((feature) => (
            <FeatureCard 
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              variant="elevated"
            />
          ))}
        </div>
      </Section>

      {/* ========== SECURITY & GUEST SAFETY SECTION ========== */}
      <Section className="bg-white">
        <SectionHeading 
          title="Security & Guest Safety"
          subtitle="Your safety and peace of mind are our top priorities. Enjoy your celebration knowing that comprehensive security measures are in place."
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {securityFeatures.map((feature) => (
            <article 
              key={feature.id}
              className="bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] rounded-2xl md:rounded-3xl p-6 md:p-8 text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-200 leading-relaxed">{feature.description}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* ========== WHY CHOOSE US SECTION ========== */}
      <Section className="bg-gray-50">
        <SectionHeading 
          title="Why Choose Mango Tree Resort"
          subtitle="Discover what makes us the preferred choice for memorable celebrations in Herbertpur and beyond."
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {whyChooseUsFeatures.map((feature) => (
            <article 
              key={feature.id}
              className="bg-white rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#2E7D32]/10 to-[#C9A227]/10 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* ========== EVENT GALLERY SECTION ========== */}
      <Section className="bg-white">
        <SectionHeading 
          title="Event Gallery"
          subtitle="Glimpses of celebrations and cherished moments created at Mango Tree Resort."
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryItems.map((item) => (
            <GalleryItem 
              key={item.id}
              title={item.title}
              category={item.category}
              url={item.url}
            />
          ))}
        </div>
      </Section>

      {/* ========== BOOKING PROCESS SECTION ========== */}
      <Section className="bg-gradient-to-br from-[#2E7D32]/5 to-[#C9A227]/5">
        <SectionHeading 
          title="Booking Process"
          subtitle="From inquiry to celebration — here's how we bring your event to life."
        />
        
        <div className="max-w-3xl mx-auto">
          {bookingSteps.map((item, index) => (
            <TimelineStep 
              key={item.id}
              step={item.step}
              title={item.title}
              description={item.description}
              isLast={index === bookingSteps.length - 1}
            />
          ))}
        </div>
      </Section>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <Section className="bg-white">
        <SectionHeading 
          title="What Our Guests Say"
          subtitle="Hear from families and organizations who celebrated their special moments with us."
        />
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard 
              key={testimonial.id}
              name={testimonial.name}
              eventType={testimonial.eventType}
              review={testimonial.review}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </Section>

      {/* ========== FAQ SECTION ========== */}
      <Section className="bg-gray-50">
        <SectionHeading 
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about hosting events at Mango Tree Resort."
        />
        
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-6 md:p-10">
          {faqData.map((faq) => (
            <FAQItem 
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFAQ === faq.id}
              onClick={() => toggleFAQ(faq.id)}
            />
          ))}
        </div>
      </Section>

      {/* ========== CALL TO ACTION SECTION ========== */}
      
    </main>
  );
};

export default Events;
