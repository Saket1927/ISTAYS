// Centralized Data Architecture for iStay Hotels

export const brandInfo = {
  name: "iStay Hotels",
  tagline: "SMART HOSPITALITY. DESIGNED AROUND YOU.",
  supportingLine: "Stay Connected. Stay Comfortable.",
  heroSubheading: "HYDERABAD",
  primaryHotelSlug: "jubilee-hills",
  aboutHeadline: "CONTEMPORARY HOSPITALITY FOR MODERN TRAVELLERS",
  aboutText: [
    "iStay Hotels is a contemporary hospitality brand designed for business travellers, leisure guests, corporate teams, and families seeking exceptional comfort at an accessible price.",
    "Located in key commercial and lifestyle destinations, every iStay property combines thoughtfully designed rooms, warm hospitality, modern amenities, and vibrant dining experiences to create a seamless stay.",
    "Whether you're travelling for work, a weekend getaway, or an extended visit, iStay Hotels delivers comfort, convenience, and memorable service in every destination."
  ],
  highlights: [
    "Business-friendly locations",
    "Contemporary interiors",
    "High-speed Wi-Fi",
    "Premium bedding",
    "Multi-cuisine dining",
    "Meeting spaces",
    "Airport accessibility",
    "Professional hospitality",
    "24×7 guest assistance"
  ]
};

export const whyStayBenefits = [
  { id: 1, title: "Prime Business Locations", icon: "MapPin", description: "Centrally positioned in key corporate and commercial hubs across major cities." },
  { id: 2, title: "Spacious Modern Rooms", icon: "BedDouble", description: "Smartly planned layouts with ergonomic furniture and plush bedding." },
  { id: 3, title: "High-Speed Complimentary Wi-Fi", icon: "Wifi", description: "Seamless, uninterrupted high-bandwidth connectivity for work and streaming." },
  { id: 4, title: "Smart Workspaces", icon: "Laptop", description: "Dedicated work desks with accessible charging points and task lighting." },
  { id: 5, title: "Multi-Cuisine Restaurants", icon: "UtensilsCrossed", description: "Vibrant dining venues serving authentic regional and global delicacies." },
  { id: 6, title: "Café & Grab-and-Go", icon: "Coffee", description: "Quick artisanal coffees, sandwiches, juices, and snacks on the move." },
  { id: 7, title: "24×7 Front Desk", icon: "Clock", description: "Round-the-clock professional concierge, reception, and guest assistance." },
  { id: 8, title: "Conference Facilities", icon: "Users", description: "Fully equipped meeting rooms with audiovisual tech for business events." },
  { id: 9, title: "Free Parking", icon: "Car", description: "Secure on-site parking facilities for guests and visiting attendees." },
  { id: 10, title: "Daily Housekeeping", icon: "Sparkles", description: "Meticulous daily sanitization, room cleaning, and fresh linen service." },
  { id: 11, title: "Airport Connectivity", icon: "Plane", description: "Convenient transit access to international airports and metro lines." },
  { id: 12, title: "Safe & Secure Stay", icon: "ShieldCheck", description: "24×7 CCTV surveillance, electronic keycard access, and professional security." }
];

export const allDiningConcepts = [
  {
    id: "utsavam",
    name: "UTSAVAM",
    tagline: "Traditional Indian Dining",
    description: "A restaurant celebrating authentic Indian flavours with regional specialties, traditional recipes, and freshly prepared meals in a welcoming family-friendly atmosphere.",
    cuisine: "Traditional & Regional Indian",
    perfectFor: ["Breakfast", "Lunch", "Dinner", "Family Dining", "Corporate Lunches"],
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80",
    menuHighlights: ["Regional Thalis", "Clay Oven Kebabs", "Handi Biryanis", "Traditional Desserts", "Filter Coffee"]
  },
  {
    id: "moxa-xpress",
    name: "MOXA XPRESS",
    tagline: "Fast. Fresh. Flavourful.",
    description: "A quick-service restaurant serving wraps, sandwiches, burgers, pizzas, bowls, Lebanese-inspired favourites, and freshly prepared meals.",
    cuisine: "Quick Gourmet & Global Bites",
    perfectFor: ["Quick Lunch", "Grab & Go", "Late Night Bites", "Casual Meetings"],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    menuHighlights: ["Artisanal Wraps", "Wood-fired Pizzas", "Signature Burgers", "Lebanese Mezze Bowls", "Fresh Juices"]
  },
  {
    id: "xtra-grab-and-go",
    name: "XTRA GRAB & GO",
    tagline: "Ideal for travellers with busy schedules.",
    description: "Fresh Sandwiches, Coffee, Juices, Pastries, Desserts, Fresh Salads, Healthy Snacks, Ready Meals, and Takeaway Beverages.",
    cuisine: "Café & Takeaway Pantry",
    perfectFor: ["Busy Mornings", "Transit Fuel", "Healthy Snacks", "Mid-day Coffee"],
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    menuHighlights: ["Espresso & Cold Brew", "Gourmet Paninis", "Organic Salad Bowls", "Baked Viennoiserie", "Fruit Parfaits"]
  },
  {
    id: "kalpavrixa",
    name: "KALPAVRIXA RESTAURANT",
    tagline: "A signature all-day dining restaurant",
    description: "A signature all-day dining restaurant offering Indian, Continental, Asian, and local cuisine crafted by master chefs.",
    cuisine: "Multi-Cuisine All-Day Dining",
    perfectFor: ["Breakfast Buffet", "Business Lunches", "Family Dinners", "Weekend Specials", "Chef's Signature Menu"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    menuHighlights: ["Lavish Breakfast Spread", "Pan-Asian Wok Specials", "Continental Grills", "Signature Curries", "Artisan Desserts"]
  }
];

export const specialOffers = [
  {
    id: "business-stay-package",
    title: "Business Stay Package",
    description: "Tailored for business travellers with complimentary high-speed Wi-Fi, laundry service, and early check-in subject to availability.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    tag: "Corporate",
    badge: "Popular"
  },
  {
    id: "weekend-escape",
    title: "Weekend Escape",
    description: "Recharge your weekend with complimentary breakfast, extended late checkout, and special dining vouchers at our in-house restaurants.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    tag: "Leisure",
    badge: "Weekend Special"
  },
  {
    id: "family-stay",
    title: "Family Stay",
    description: "Spacious inter-connected rooms or family suites with kid-friendly dining menus and curated city landmark excursions.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    tag: "Family",
    badge: "Best for Families"
  },
  {
    id: "corporate-rates",
    title: "Corporate Rates",
    description: "Exclusive corporate tie-up rates with priority booking, meeting room access discounts, and flexible cancellation policies.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    tag: "Enterprise",
    badge: "B2B Program"
  },
  {
    id: "long-stay-packages",
    title: "Long Stay Packages",
    description: "Extended comfort for stays of 7 days or more with dedicated housekeeping schedules, laundry allowance, and customized meal plans.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    tag: "Extended Stay",
    badge: "Save More"
  },
  {
    id: "festive-offers",
    title: "Festive Offers",
    description: "Celebrate festive seasons across India with curated traditional dining experiences, cultural welcomes, and festival perks.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    tag: "Seasonal",
    badge: "Limited Period"
  },
  {
    id: "early-bird-discounts",
    title: "Early Bird Discounts",
    description: "Plan your trip in advance and secure preferred room choices across our prime business and cultural destinations.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
    tag: "Advance Booking",
    badge: "Advance Advantage"
  }
];

export const guestReviewsStructure = {
  googleRating: "4.8",
  reviewCount: "1,200+",
  awardTitle: "TripAdvisor Travellers' Choice & Business Hospitality Excellence",
  experienceHighlights: [
    { label: "Check-in Efficiency", score: "98%" },
    { label: "Room Cleanliness", score: "99%" },
    { label: "Wi-Fi Speed & Connectivity", score: "97%" },
    { label: "Dining & Breakfast Quality", score: "96%" }
  ],
  reviews: [
    {
      id: 1,
      guestName: "Arun Varma",
      category: "Corporate Guest",
      stayLocation: "iStay Hotels Jubilee Hills, Hyderabad",
      comment: "Seamless experience for our leadership team offsite. High-speed internet was rock solid and the proximity to HITEC City saved us hours of travel time.",
      verified: true
    },
    {
      id: 2,
      guestName: "Priya Sundaram",
      category: "Family Traveller",
      stayLocation: "iStay Hotels Rajajinagar, Bangalore",
      comment: "Extremely clean rooms, warm staff, and great food at Utsavam. Perfect location right next to Orion Mall and ISKCON Temple.",
      verified: true
    },
    {
      id: 3,
      guestName: "Rajesh Kulkarni",
      category: "Business Traveller",
      stayLocation: "iStay Hotels Hitech, Hyderabad",
      comment: "The iComfort and work desk layout is genuinely designed for productive business travel. Moxa Xpress grab-and-go is a lifesaver in the mornings.",
      verified: true
    }
  ]
};

export const hotelsData = [
  {
    id: 1,
    slug: "jubilee-hills",
    name: "iStay Hotels Jubilee Hills",
    city: "Hyderabad",
    state: "Telangana",
    isOpeningSoon: false,
    rating: 4.8,
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=85",
    cardImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Contemporary business hotel in Hyderabad's premier upscale commercial district, offering modern rooms and vibrant dining.",
    overview: "Located in the prestigious Jubilee Hills neighborhood, iStay Hotels Jubilee Hills is designed for business professionals, leisure travellers, medical tourists, and families seeking a comfortable stay in one of Hyderabad's most vibrant districts. The hotel offers contemporary rooms, modern amenities, convenient airport access, and multiple in-house dining options, with easy connectivity to Film Nagar, Banjara Hills, HITEC City, and major healthcare institutions.",
    perfectFor: [
      "Corporate Travellers",
      "Medical Tourists",
      "Business Meetings",
      "Family Vacations",
      "Weekend Getaways",
      "Long Stay Guests"
    ],
    locationAdvantages: [
      "Located in Jubilee Hills",
      "Close to Apollo Hospital",
      "Easy access to Banjara Hills",
      "Near Film Nagar",
      "Close to HITEC City",
      "Connected to Financial District",
      "Easy airport connectivity"
    ],
    featuredHighlights: [
      "Jubilee Hills",
      "Near Apollo Hospital",
      "Film Nagar",
      "Banjara Hills",
      "HITEC City",
      "Airport connectivity"
    ],
    mapCoords: { lat: 17.4319, lng: 78.4073 },
    rooms: [
      {
        id: "icube",
        name: "iCube",
        category: "Smart Studio",
        description: "Perfect for solo travellers and short business stays with an efficient layout, smart entertainment, and ergonomic desk.",
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80",
        bedType: "King / Twin Bed",
        features: [
          "King/Twin Bed",
          "Work Desk",
          "Smart TV",
          "Wi-Fi",
          "Tea/Coffee Maker",
          "Air Conditioning"
        ],
        bathroom: "Modern En-suite Rain Shower",
        amenities: ["High-Speed Wi-Fi", "Smart TV", "Air Conditioning", "Work Desk", "Tea/Coffee Maker", "Electronic Safe", "Daily Housekeeping"]
      },
      {
        id: "icomfort",
        name: "iComfort",
        category: "Executive Room",
        description: "Designed for couples and business professionals requiring extra comfort, expanded living space, and upgraded amenities.",
        image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=80",
        bedType: "Plush King Bed",
        features: [
          "Larger Living Space",
          "King Bed",
          "Smart TV",
          "Mini Refrigerator",
          "Work Desk",
          "Premium Bathroom Amenities"
        ],
        bathroom: "Spacious Marble Bathroom with Premium Toiletries",
        amenities: ["High-Speed Wi-Fi", "Smart TV", "Mini Refrigerator", "Work Desk", "Plush King Bed", "Premium Bath Amenities", "Daily Housekeeping"]
      },
      {
        id: "iclassic",
        name: "iClassic",
        category: "Family & Long-Stay Suite",
        description: "Ideal for families and extended stays, featuring generous floor area, comfortable sitting area, and high-speed connectivity.",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
        bedType: "King Bed + Extra Bed Option",
        features: [
          "Spacious Layout",
          "Triple Occupancy",
          "Sitting Area",
          "Premium Linen",
          "Wardrobe",
          "High-Speed Internet"
        ],
        bathroom: "Generous Bathroom with Luxury Bath Linens",
        amenities: ["Spacious Sitting Lounge", "Triple Occupancy", "High-Speed Internet", "Wardrobe", "Premium Linen", "Smart TV", "Daily Housekeeping"]
      }
    ],
    dining: [
      {
        name: "Moxa Xpress",
        tagline: "Fast. Fresh. Flavourful.",
        type: "Quick-Bite & Lebanese Gourmet",
        description: "Serving delicious artisanal wraps, sandwiches, burgers, pizzas, wholesome bowls, and Lebanese-inspired favourites for on-the-go professionals.",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Xtra Grab & Go",
        tagline: "Instant Travel Pantry",
        type: "Café & Bakery",
        description: "Fresh sandwiches, speciality barista coffee, cold-pressed juices, pastries, desserts, salads, and healthy ready meals.",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Utsavam",
        tagline: "Authentic Regional Dining",
        type: "Traditional Indian",
        description: "Authentic Indian flavours with regional recipes, rich biryanis, and thalis in a welcoming family-friendly atmosphere.",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80"
      }
    ],
    facilities: [
      "Complimentary Wi-Fi",
      "Airport Shuttle, subject to availability",
      "Restaurant",
      "Concierge",
      "Elevator",
      "24×7 Front Desk",
      "Parking",
      "Laundry",
      "Room Service",
      "CCTV Security",
      "Housekeeping"
    ],
    attractions: [
      { name: "Golconda Fort", category: "Heritage & Monument", distance: "6.8 km", travelTime: "18 mins", image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=600&q=80", coords: { lat: 17.3833, lng: 78.4011 } },
      { name: "Charminar", category: "Historic Landmark", distance: "13.5 km", travelTime: "35 mins", image: "https://images.unsplash.com/photo-1572445271230-a78b5944a659?auto=format&fit=crop&w=600&q=80", coords: { lat: 17.3616, lng: 78.4747 } },
      { name: "Birla Mandir", category: "Spiritual & Temple", distance: "9.2 km", travelTime: "22 mins", image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=600&q=80", coords: { lat: 17.4062, lng: 78.4691 } },
      { name: "Film Nagar", category: "Entertainment Hub", distance: "1.8 km", travelTime: "5 mins", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80", coords: { lat: 17.4172, lng: 78.4069 } },
      { name: "Banjara Hills", category: "Shopping & Dining Hub", distance: "3.4 km", travelTime: "10 mins", image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=80", coords: { lat: 17.4156, lng: 78.4357 } },
      { name: "HITEC City", category: "IT Corridor", distance: "5.5 km", travelTime: "12 mins", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80", coords: { lat: 17.4435, lng: 78.3772 } },
      { name: "KBR National Park", category: "Nature & Walkways", distance: "1.2 km", travelTime: "4 mins", image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80", coords: { lat: 17.4244, lng: 78.4239 } },
      { name: "Lotus Pond", category: "Urban Oasis", distance: "2.1 km", travelTime: "6 mins", image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80", coords: { lat: 17.4201, lng: 78.4182 } },
      { name: "Jagannath Temple", category: "Cultural Temple", distance: "3.0 km", travelTime: "8 mins", image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80", coords: { lat: 17.4140, lng: 78.4310 } },
      { name: "Hussain Sagar Lake", category: "Lakeside Recreation", distance: "10.0 km", travelTime: "25 mins", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80", coords: { lat: 17.4239, lng: 78.4738 } },
      { name: "Inorbit Mall", category: "Retail & Entertainment", distance: "6.2 km", travelTime: "14 mins", image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=600&q=80", coords: { lat: 17.4343, lng: 78.3867 } }
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80", category: "Hotel Exterior", title: "iStay Jubilee Hills Facade" },
      { url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80", category: "Rooms", title: "iCube Smart Room" },
      { url: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80", category: "Suites", title: "iComfort Executive Suite" },
      { url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80", category: "Rooms", title: "iClassic Family Room" },
      { url: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80", category: "Utsavam", title: "Utsavam Indian Dining" },
      { url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80", category: "Moxa Xpress", title: "Moxa Xpress Dining Area" },
      { url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80", category: "Xtra Grab & Go", title: "Xtra Grab & Go Counter" },
      { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80", category: "Lobby", title: "Modern Reception & Lobby" },
      { url: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=80", category: "Conference Hall", title: "Business Boardroom" }
    ]
  },
  {
    id: 2,
    slug: "hitech",
    name: "iStay Hotels Hitech",
    city: "Hyderabad",
    state: "Telangana",
    isOpeningSoon: false,
    rating: 4.7,
    heroImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=85",
    cardImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Smart tech-district hospitality situated right in Hyderabad's premier IT & Financial corridor.",
    overview: "Situated in Hyderabad's premier IT corridor, iStay Hotels Hitech caters to business travellers working in HITEC City, Gachibowli, Madhapur, and the Financial District. The hotel combines stylish accommodation with modern conveniences and excellent connectivity to technology parks, convention centres, and corporate offices.",
    perfectFor: [
      "IT Professionals",
      "Corporate Stays",
      "Business Conferences",
      "International Visitors",
      "Project Teams",
      "Long-Term Corporate Guests"
    ],
    locationAdvantages: [
      "HITEC City",
      "Cyber Towers",
      "Mindspace IT Park",
      "Gachibowli",
      "Financial District",
      "ISB",
      "IKEA Hyderabad",
      "Inorbit Mall"
    ],
    featuredHighlights: [
      "HITEC City",
      "Cyber Towers",
      "Mindspace IT Park",
      "Gachibowli",
      "Financial District",
      "ISB"
    ],
    mapCoords: { lat: 17.4474, lng: 78.3762 },
    rooms: [
      {
        id: "standard-room",
        name: "Standard Room",
        category: "Modern Comfort",
        description: "Efficiently engineered for tech professionals and business commuters requiring quiet rest and reliable connectivity.",
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=80",
        bedType: "Queen / Twin Bed",
        features: ["Premium Bedding", "Work Desk", "Smart TV", "Wi-Fi", "Tea & Coffee Maker", "Air Conditioning", "Wardrobe"],
        bathroom: "Contemporary Shower Cubicle",
        amenities: ["High-Speed Wi-Fi", "Smart TV", "Air Conditioning", "Work Desk", "Wardrobe", "Tea/Coffee Maker"]
      },
      {
        id: "deluxe-room",
        name: "Deluxe Room",
        category: "Executive Space",
        description: "Enhanced room layout with plush king bedding, ergonomic work station, and premium bath amenities.",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
        bedType: "King Bed",
        features: ["Expanded Floor Plan", "King Bed", "Smart TV", "Work Station", "Tea & Coffee Maker", "Wardrobe", "Upgraded Toiletries"],
        bathroom: "En-suite Rain Shower & Vanity",
        amenities: ["High-Speed Internet", "Smart TV", "Executive Work Station", "Wardrobe", "Daily Housekeeping", "Mini Fridge"]
      },
      {
        id: "executive-room",
        name: "Executive Room",
        category: "Business Suite",
        description: "Premium business accommodation tailored for extended work trips, executive delegates, and project managers.",
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80",
        bedType: "Luxury King Bed",
        features: ["Lounge Seating", "King Bed", "Smart TV", "Executive Desk", "Espresso Station", "Walk-in Wardrobe"],
        bathroom: "Spacious Bathroom with Rain Shower",
        amenities: ["Lounge Chair", "High-Speed Wi-Fi", "Smart TV", "Executive Desk", "Wardrobe", "Luxury Toiletries"]
      }
    ],
    dining: [
      {
        name: "Kalpavrixa Restaurant",
        tagline: "Signature All-Day Dining",
        type: "Multi-Cuisine Buffet & A-la-carte",
        description: "Master chefs presenting an array of Indian, Continental, Asian, and local specialties for breakfast buffets and corporate business lunches.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Xtra Grab & Go",
        tagline: "Fast & Convenient",
        type: "Gourmet Café & Pantry",
        description: "Quick sandwiches, barista brews, bakery selections, fresh salads, and ready takeaway snacks.",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Moxa Xpress",
        tagline: "Quick Gourmet Bites",
        type: "Wraps & Global Street Food",
        description: "Fresh wraps, burgers, quick bowls, and Lebanese specialities.",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
      }
    ],
    facilities: [
      "High-Speed Internet",
      "Business Centre",
      "Meeting Rooms",
      "Restaurant",
      "Parking",
      "Laundry",
      "Airport Transfer",
      "Concierge",
      "24×7 Reception",
      "Daily Housekeeping"
    ],
    attractions: [
      { name: "HITEC City", category: "Technology Park", distance: "0.8 km", travelTime: "3 mins", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80", coords: { lat: 17.4485, lng: 78.3750 } },
      { name: "Mindspace IT Park", category: "Commercial District", distance: "1.2 km", travelTime: "4 mins", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80", coords: { lat: 17.4399, lng: 78.3808 } },
      { name: "Cyber Towers", category: "Landmark Tech Hub", distance: "1.0 km", travelTime: "4 mins", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80", coords: { lat: 17.4504, lng: 78.3809 } },
      { name: "Inorbit Mall", category: "Shopping Mall", distance: "2.3 km", travelTime: "7 mins", image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=600&q=80", coords: { lat: 17.4343, lng: 78.3867 } },
      { name: "ISB", category: "Academic Institution", distance: "4.8 km", travelTime: "12 mins", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80", coords: { lat: 17.4265, lng: 78.3582 } },
      { name: "Financial District", category: "Banking & IT Hub", distance: "5.6 km", travelTime: "14 mins", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80", coords: { lat: 17.4150, lng: 78.3470 } },
      { name: "Shilparamam", category: "Arts & Crafts Village", distance: "1.5 km", travelTime: "5 mins", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80", coords: { lat: 17.4532, lng: 78.3776 } },
      { name: "Durgam Cheruvu", category: "Lake & Cable Bridge", distance: "2.8 km", travelTime: "8 mins", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80", coords: { lat: 17.4334, lng: 78.3932 } },
      { name: "IKEA Hyderabad", category: "Retail Landmark", distance: "2.0 km", travelTime: "6 mins", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80", coords: { lat: 17.4369, lng: 78.3742 } },
      { name: "Hyderabad International Convention Centre", category: "Events & Expo", distance: "3.5 km", travelTime: "10 mins", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80", coords: { lat: 17.4728, lng: 78.3725 } },
      { name: "Gachibowli Stadium", category: "Sports Complex", distance: "5.1 km", travelTime: "12 mins", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80", coords: { lat: 17.4452, lng: 78.3491 } }
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80", category: "Hotel Exterior", title: "iStay Hitech Glass Facade" },
      { url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80", category: "Rooms", title: "Standard Tech Room" },
      { url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80", category: "Rooms", title: "Deluxe King Room" },
      { url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80", category: "Suites", title: "Executive Business Suite" },
      { url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80", category: "Kalpavrixa", title: "Kalpavrixa All-Day Dining" },
      { url: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=80", category: "Business Centre", title: "High-Tech Meeting Space" }
    ]
  },
  {
    id: 3,
    slug: "rajajinagar",
    name: "iStay Hotels Rajajinagar",
    city: "Bangalore",
    state: "Karnataka",
    isOpeningSoon: false,
    rating: 4.8,
    heroImage: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1920&q=85",
    cardImage: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Central hospitality in West Bengaluru near World Trade Center, Orion Mall, and Yeshwanthpur.",
    overview: "Located in the heart of West Bengaluru, iStay Hotels Rajajinagar offers seamless access to commercial districts, industrial hubs, shopping destinations, and cultural landmarks. Designed for corporate guests and families, the hotel blends modern comfort with efficient service.",
    perfectFor: [
      "Business Travellers",
      "Families",
      "Corporate Training",
      "Medical Visitors",
      "Weekend Leisure"
    ],
    locationAdvantages: [
      "Rajajinagar Metro",
      "World Trade Center",
      "Orion Mall",
      "Yeshwanthpur",
      "Peenya Industrial Area",
      "Bangalore Palace"
    ],
    featuredHighlights: [
      "Rajajinagar",
      "World Trade Center",
      "Orion Mall",
      "Yeshwanthpur",
      "Peenya",
      "Bangalore Palace"
    ],
    mapCoords: { lat: 12.9982, lng: 77.5530 },
    rooms: [
      {
        id: "modern-king-room",
        name: "Modern King Room",
        category: "Contemporary Comfort",
        description: "Thoughtfully configured modern room with king bed, high-speed Wi-Fi, work desk, and premium linen.",
        image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80",
        bedType: "King Bed",
        features: [
          "King Beds",
          "Wi-Fi",
          "Smart TV",
          "Air Conditioning",
          "Work Desk",
          "Tea & Coffee Maker",
          "Wardrobe",
          "Premium Linen"
        ],
        bathroom: "Modern Bath with Hot & Cold Rain Shower",
        amenities: ["High-Speed Wi-Fi", "Smart TV", "Air Conditioning", "Work Desk", "Tea & Coffee Maker", "Wardrobe", "Premium Linen"]
      },
      {
        id: "executive-king-room",
        name: "Executive King Room",
        category: "Corporate Suite",
        description: "Spacious business layout designed for corporate delegates and long-stay guests in Bengaluru.",
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80",
        bedType: "King Bed",
        features: ["King Beds", "High-Speed Wi-Fi", "Smart TV", "Air Conditioning", "Work Desk", "Tea & Coffee Maker", "Wardrobe", "Premium Linen"],
        bathroom: "En-suite Bathroom with Bath Amenities",
        amenities: ["King Bed", "Smart TV", "Work Desk", "Premium Linen", "Tea & Coffee Maker", "Wardrobe", "Daily Housekeeping"]
      }
    ],
    dining: [
      {
        name: "Kalpavrixa Restaurant",
        tagline: "Signature Multi-Cuisine",
        type: "All-Day Dining",
        description: "Delightful regional and international delicacies crafted for breakfast, corporate lunches, and family dinners.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Xtra Grab & Go",
        tagline: "Café & Bites",
        type: "Quick Counter",
        description: "Sandwiches, coffee, juices, pastries, and takeaway beverages for busy travellers.",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Utsavam",
        tagline: "Traditional Flavours",
        type: "Authentic Indian",
        description: "Rich South Indian and pan-Indian recipes prepared with authentic spices and fresh local produce.",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80"
      }
    ],
    facilities: [
      "Restaurant",
      "Business Centre",
      "Meeting Room",
      "Laundry",
      "Wi-Fi",
      "Parking",
      "Concierge",
      "Room Service",
      "Elevator",
      "Security"
    ],
    attractions: [
      { name: "World Trade Center", category: "Business Landmark", distance: "1.1 km", travelTime: "4 mins", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80", coords: { lat: 13.0118, lng: 77.5550 } },
      { name: "Orion Mall", category: "Shopping & Dining", distance: "1.2 km", travelTime: "4 mins", image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=600&q=80", coords: { lat: 13.0112, lng: 77.5552 } },
      { name: "ISKCON Temple", category: "Spiritual Monument", distance: "1.4 km", travelTime: "5 mins", image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80", coords: { lat: 13.0098, lng: 77.5511 } },
      { name: "Yeshwanthpur", category: "Transit & Railway", distance: "2.8 km", travelTime: "8 mins", image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=80", coords: { lat: 13.0238, lng: 77.5501 } },
      { name: "Bangalore Palace", category: "Historic Heritage", distance: "5.4 km", travelTime: "16 mins", image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80", coords: { lat: 12.9988, lng: 77.5921 } },
      { name: "Cubbon Park", category: "Botanical Garden", distance: "6.0 km", travelTime: "18 mins", image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80", coords: { lat: 12.9779, lng: 77.5952 } },
      { name: "Vidhana Soudha", category: "Civic Landmark", distance: "5.8 km", travelTime: "17 mins", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80", coords: { lat: 12.9796, lng: 77.5907 } },
      { name: "Commercial Street", category: "Retail Hub", distance: "7.5 km", travelTime: "22 mins", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80", coords: { lat: 12.9822, lng: 77.6083 } }
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80", category: "Hotel Exterior", title: "iStay Rajajinagar Entrance" },
      { url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80", category: "Rooms", title: "Modern King Room" },
      { url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80", category: "Suites", title: "Executive Room Bengaluru" },
      { url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80", category: "Kalpavrixa", title: "Kalpavrixa Bangalore" },
      { url: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80", category: "Utsavam", title: "Utsavam Restaurant" }
    ]
  },
  {
    id: 4,
    slug: "shantashiva-arcade",
    name: "iStay Hotels ShantaShiva Arcade",
    city: "Haveri",
    state: "Karnataka",
    isOpeningSoon: true,
    rating: null,
    heroImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=85",
    cardImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Opening Soon: Bringing contemporary comfort and business hospitality to Haveri, Karnataka.",
    overview: "Opening Soon, iStay Hotels ShantaShiva Arcade will bring modern hospitality to Haveri, Karnataka, offering comfortable accommodation for business travellers, tourists, and families. Positioned near the city's commercial areas, the property is expected to provide contemporary rooms, dining experiences, and business-friendly amenities.",
    perfectFor: [
      "Corporate Guests",
      "Highway Travellers",
      "Wedding Guests",
      "Family Stays",
      "Government Officials",
      "Business Meetings"
    ],
    locationAdvantages: [
      "Near Commercial & Trade Centers",
      "Haveri Railway Station Connectivity",
      "Convenient National Highway Access",
      "Central Haveri Location"
    ],
    featuredHighlights: [
      "Haveri",
      "Business travel",
      "Family stays",
      "Event guests",
      "Modern rooms",
      "Conference facilities"
    ],
    mapCoords: { lat: 14.7954, lng: 75.3995 },
    rooms: [
      {
        id: "deluxe-rooms-haveri",
        name: "Deluxe Rooms",
        category: "Opening Soon",
        description: "Planned contemporary rooms with Smart TV, high-speed Wi-Fi, air conditioning, and ergonomic work desk.",
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80",
        bedType: "King Bed (Planned)",
        features: ["Smart TV", "Wi-Fi", "Air Conditioning", "Work Desk", "Premium Bathrooms"],
        bathroom: "Modern En-suite Bathroom",
        amenities: ["Smart TV", "Wi-Fi", "Air Conditioning", "Work Desk", "Premium Bathrooms"]
      },
      {
        id: "executive-rooms-haveri",
        name: "Executive Rooms",
        category: "Opening Soon",
        description: "Planned for business travellers requiring upgraded work facilities and premium comfort.",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
        bedType: "King Bed (Planned)",
        features: ["Smart TV", "High-Speed Wi-Fi", "Air Conditioning", "Work Desk", "Executive Amenities"],
        bathroom: "Premium Shower Suite",
        amenities: ["Smart TV", "Wi-Fi", "Air Conditioning", "Work Desk", "Executive Amenities"]
      },
      {
        id: "family-rooms-haveri",
        name: "Family Rooms",
        category: "Opening Soon",
        description: "Spacious layout planned for families, wedding attendees, and group travellers.",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
        bedType: "Multiple Beds (Planned)",
        features: ["Spacious Layout", "Multiple Bed Configuration", "Smart TV", "Wi-Fi", "Air Conditioning"],
        bathroom: "Family Sized Bathroom",
        amenities: ["Spacious Layout", "Smart TV", "Wi-Fi", "Air Conditioning", "Family Facilities"]
      }
    ],
    dining: [
      {
        name: "Kalpavrixa Restaurant",
        tagline: "Planned All-Day Dining",
        type: "Multi-Cuisine",
        description: "Planned restaurant serving Indian, local Karnataka specialties, and multi-cuisine breakfast and dinners.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Utsavam",
        tagline: "Planned Traditional Dining",
        type: "Authentic Regional Cuisine",
        description: "Planned traditional dining celebrating authentic Karnataka regional flavours and thalis.",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Xtra Grab & Go",
        tagline: "Planned Quick Pantry",
        type: "Takeaway Café",
        description: "Planned grab-and-go counter for coffees, fresh sandwiches, and travel snacks.",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
      }
    ],
    facilities: [
      "Restaurant",
      "Conference Room",
      "Parking",
      "Wi-Fi",
      "Laundry",
      "Housekeeping",
      "Travel Desk",
      "Meeting Facilities"
    ],
    attractions: [
      { name: "Siddheshwara Temple", category: "Historic Temple", distance: "1.5 km", travelTime: "5 mins", image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80", coords: { lat: 14.7930, lng: 75.3980 } },
      { name: "Haveri Fort", category: "Heritage Site", distance: "2.2 km", travelTime: "7 mins", image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=600&q=80", coords: { lat: 14.7980, lng: 75.4050 } },
      { name: "Local Business District", category: "Commercial Hub", distance: "0.5 km", travelTime: "2 mins", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80", coords: { lat: 14.7960, lng: 75.4000 } },
      { name: "Haveri Railway Station", category: "Transit Station", distance: "1.8 km", travelTime: "6 mins", image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=80", coords: { lat: 14.7910, lng: 75.4020 } },
      { name: "Local Shopping Area", category: "Market", distance: "0.8 km", travelTime: "3 mins", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80", coords: { lat: 14.7940, lng: 75.3990 } }
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80", category: "Hotel Exterior", title: "ShantaShiva Arcade Architecture" },
      { url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80", category: "Rooms", title: "Deluxe Room Haveri" },
      { url: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=80", category: "Conference Hall", title: "Planned Conference Space" }
    ]
  },
  {
    id: 5,
    slug: "luxe-collection-haridwar",
    name: "iStay Hotels Luxe Collection",
    city: "Haridwar",
    state: "Uttarakhand",
    isOpeningSoon: true,
    rating: null,
    heroImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=85",
    cardImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Opening Soon: Premium upscale spiritual retreat and luxury hospitality in Haridwar.",
    overview: "The iStay Hotels Luxe Collection – Haridwar will introduce a premium hospitality experience in one of India's most revered spiritual destinations. Combining elegant interiors with warm hospitality, the hotel is planned for pilgrims, leisure travellers, wellness seekers, and destination events.",
    perfectFor: [
      "Pilgrims",
      "Luxury Leisure Guests",
      "Families",
      "Wellness Retreats",
      "Destination Weddings",
      "Corporate Retreats"
    ],
    locationAdvantages: [
      "Proximity to Holy Ganga Ghats",
      "Easy access to Har Ki Pauri",
      "Near Mansa Devi & Chandi Devi Cable Cars",
      "Peaceful Spiritual Setting"
    ],
    featuredHighlights: [
      "Har Ki Pauri",
      "Spiritual tourism",
      "Wellness",
      "Family stays",
      "Destination events",
      "Premium accommodation"
    ],
    mapCoords: { lat: 29.9457, lng: 78.1642 },
    rooms: [
      {
        id: "deluxe-rooms-haridwar",
        name: "Deluxe Rooms",
        category: "Opening Soon",
        description: "Planned elegant rooms with luxury bedding, Smart TV, high-speed Wi-Fi, and tea/coffee station.",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
        bedType: "Luxury Bedding (Planned)",
        features: ["Luxury Bedding", "Smart TV", "High-Speed Wi-Fi", "Tea & Coffee Station", "Premium Toiletries", "Spacious Bathrooms"],
        bathroom: "Spacious Bath with Luxury Toiletries",
        amenities: ["Luxury Bedding", "Smart TV", "High-Speed Wi-Fi", "Tea & Coffee Station", "Premium Toiletries", "Spacious Bathrooms"]
      },
      {
        id: "executive-suites-haridwar",
        name: "Executive Suites",
        category: "Opening Soon",
        description: "Planned suites with dedicated living spaces, scenic spiritual views, and high-end room amenities.",
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80",
        bedType: "King Bed + Lounge (Planned)",
        features: ["Luxury Bedding", "Smart TV", "High-Speed Wi-Fi", "Tea & Coffee Station", "Scenic Views — selected rooms"],
        bathroom: "Luxury Marble Bathroom",
        amenities: ["Scenic Views", "Living Area", "Luxury Toiletries", "High-Speed Wi-Fi", "Smart TV"]
      },
      {
        id: "premium-luxe-suites-haridwar",
        name: "Premium Luxe Suites",
        category: "Opening Soon",
        description: "Signature presidential layout planned for luxury leisure guests, wellness retreats, and VIP delegations.",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
        bedType: "Master King Bed (Planned)",
        features: ["Master Bedroom", "Private Living & Dining", "Scenic Mountain & Ghat Views", "Luxury Toiletries"],
        bathroom: "Spa-grade Luxury Bath",
        amenities: ["Scenic Views", "Private Dining", "Luxury Toiletries", "Dedicated Concierge Service"]
      }
    ],
    dining: [
      {
        name: "Kalpavrixa Restaurant",
        tagline: "Planned Fine Dining",
        type: "Vegetarian Gourmet & Multi-Cuisine",
        description: "Planned all-day fine dining serving pure vegetarian regional Indian delicacies, Ayurvedic wellness dishes, and continental classics.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Utsavam",
        tagline: "Planned Pure Vegetarian Dining",
        type: "Traditional Indian & Sattvic Cuisine",
        description: "Planned authentic Indian kitchen offering traditional thalis and North Indian pilgrim favorites.",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Xtra Grab & Go",
        tagline: "Planned Herbal & Tea Pantry",
        type: "Café & Refreshments",
        description: "Planned counter for organic herbal teas, juices, fresh bakeries, and healthy travel snacks.",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
      }
    ],
    facilities: [
      "Fine Dining Restaurant",
      "Wellness Area",
      "Meeting Rooms",
      "Banquet Facilities",
      "Concierge",
      "Travel Desk",
      "Parking",
      "Airport Transfers",
      "Laundry",
      "Room Service"
    ],
    attractions: [
      { name: "Har Ki Pauri", category: "Holy Ghat & Ganga Aarti", distance: "2.4 km", travelTime: "8 mins", image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80", coords: { lat: 29.9567, lng: 78.1707 } },
      { name: "Mansa Devi Temple", category: "Hilltop Temple & Cable Car", distance: "3.1 km", travelTime: "12 mins", image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=600&q=80", coords: { lat: 29.9610, lng: 78.1630 } },
      { name: "Chandi Devi Temple", category: "Pilgrimage Site", distance: "4.8 km", travelTime: "15 mins", image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=600&q=80", coords: { lat: 29.9320, lng: 78.1800 } },
      { name: "Ganga Ghats", category: "Riverside Promenade", distance: "1.8 km", travelTime: "6 mins", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80", coords: { lat: 29.9500, lng: 78.1680 } },
      { name: "Rajaji National Park", category: "Wildlife & Nature Sanctuary", distance: "14.0 km", travelTime: "28 mins", image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80", coords: { lat: 30.0100, lng: 78.1900 } },
      { name: "Bharat Mata Mandir", category: "Multi-Storey Temple", distance: "6.2 km", travelTime: "16 mins", image: "https://images.unsplash.com/photo-1572445271230-a78b5944a659?auto=format&fit=crop&w=600&q=80", coords: { lat: 29.9800, lng: 78.1800 } },
      { name: "Local Markets", category: "Bazaars & Crafts", distance: "2.0 km", travelTime: "7 mins", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80", coords: { lat: 29.9480, lng: 78.1650 } }
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80", category: "Hotel Exterior", title: "Luxe Collection Haridwar" },
      { url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80", category: "Suites", title: "Luxe Spiritual Suite" },
      { url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80", category: "Kalpavrixa", title: "Fine Dining Restaurant" }
    ]
  }
];

export const allStandardAmenities = [
  { name: "High-Speed Wi-Fi", icon: "Wifi", desc: "Fast broadband connectivity in rooms and public areas" },
  { name: "Restaurant", icon: "Utensils", desc: "In-house multi-cuisine dining options" },
  { name: "Grab & Go", icon: "Coffee", desc: "Quick-service café counter with takeaway snacks" },
  { name: "Business Centre", icon: "Laptop", desc: "Dedicated work pods and printing facilities" },
  { name: "Meeting Rooms", icon: "Users", desc: "Audiovisual-equipped conference rooms" },
  { name: "Parking", icon: "Car", desc: "Complimentary on-site guest parking" },
  { name: "Laundry", icon: "Shirt", desc: "Professional daily dry cleaning and pressing" },
  { name: "Room Service", icon: "Bell", desc: "In-room dining served fresh to your door" },
  { name: "Airport Transfers", icon: "Plane", desc: "Shuttle and cab assistance upon request" },
  { name: "Daily Housekeeping", icon: "Sparkles", desc: "Daily room sanitization and replenishment" },
  { name: "Power Backup", icon: "Zap", desc: "100% uninterrupted power supply" },
  { name: "Elevator", icon: "ArrowUpDown", desc: "Fast and secure lift access to all floors" },
  { name: "Travel Desk", icon: "Compass", desc: "Sightseeing, cab bookings, and itinerary planning" },
  { name: "Doctor on Call", icon: "HeartPulse", desc: "Medical assistance available 24 hours" },
  { name: "Luggage Storage", icon: "Luggage", desc: "Secure baggage holding before check-in/after checkout" },
  { name: "Tea & Coffee Maker", icon: "CupSoda", desc: "In-room kettle with premium tea and coffee supplies" },
  { name: "Air Conditioning", icon: "Wind", desc: "Individual climate control in every room" },
  { name: "Smart Television", icon: "Tv", desc: "HD Smart TV with popular streaming capabilities" },
  { name: "24×7 Reception", icon: "Clock", desc: "Round-the-clock front desk and guest support" },
  { name: "Security Surveillance", icon: "Shield", desc: "24×7 CCTV monitoring and electronic keycard security" }
];

export const meetingsAndEventsData = {
  heading: "VERSATILE SPACES FOR EVERY OCCASION",
  description: "Host professional and social gatherings with dedicated event spaces and modern facilities.",
  suitableFor: [
    "Corporate Meetings",
    "Training Programs",
    "Seminars",
    "Board Meetings",
    "Product Launches",
    "Private Celebrations",
    "Birthday Parties",
    "Family Gatherings",
    "Networking Events"
  ],
  facilities: [
    { name: "Projector", icon: "Projector" },
    { name: "LED Display", icon: "Tv" },
    { name: "Sound System", icon: "Volume2" },
    { name: "Wi-Fi", icon: "Wifi" },
    { name: "Catering", icon: "Utensils" },
    { name: "Event Coordination", icon: "CheckCircle" }
  ],
  mainImage: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1400&q=80",
  supportingImages: [
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80"
  ]
};

export const masterGalleryCategories = [
  "All",
  "Rooms",
  "Suites",
  "Lobby",
  "Reception",
  "Restaurant",
  "Utsavam",
  "Moxa Xpress",
  "Kalpavrixa",
  "Xtra Grab & Go",
  "Conference Hall",
  "Business Centre",
  "Hotel Exterior",
  "Food",
  "Events"
];

export const masterGalleryItems = [
  { id: 1, title: "iStay Jubilee Hills Facade", category: "Hotel Exterior", hotelSlug: "jubilee-hills", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80" },
  { id: 2, title: "iCube Smart Studio", category: "Rooms", hotelSlug: "jubilee-hills", image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80" },
  { id: 3, title: "iComfort Executive Room", category: "Suites", hotelSlug: "jubilee-hills", image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80" },
  { id: 4, title: "iClassic Family Suite", category: "Rooms", hotelSlug: "jubilee-hills", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80" },
  { id: 5, title: "Utsavam Traditional Dining", category: "Utsavam", hotelSlug: "jubilee-hills", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80" },
  { id: 6, title: "Moxa Xpress Gourmet Counter", category: "Moxa Xpress", hotelSlug: "jubilee-hills", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80" },
  { id: 7, title: "Xtra Grab & Go Barista Station", category: "Xtra Grab & Go", hotelSlug: "jubilee-hills", image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80" },
  { id: 8, title: "Kalpavrixa All-Day Dining Hall", category: "Kalpavrixa", hotelSlug: "hitech", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80" },
  { id: 9, title: "Executive Business Boardroom", category: "Conference Hall", hotelSlug: "hitech", image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=80" },
  { id: 10, title: "Modern Tech Working Pods", category: "Business Centre", hotelSlug: "hitech", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" },
  { id: 11, title: "iStay Hitech Glass Tower", category: "Hotel Exterior", hotelSlug: "hitech", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80" },
  { id: 12, title: "Welcoming Reception Lobby", category: "Reception", hotelSlug: "jubilee-hills", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80" },
  { id: 13, title: "Luxe Suite Spiritual Haridwar", category: "Suites", hotelSlug: "luxe-collection-haridwar", image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80" },
  { id: 14, title: "Curated Culinary Plating", category: "Food", hotelSlug: "jubilee-hills", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80" },
  { id: 15, title: "Corporate Seminar Setup", category: "Events", hotelSlug: "jubilee-hills", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80" }
];
