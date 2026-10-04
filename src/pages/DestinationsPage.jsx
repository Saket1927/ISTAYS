import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { hotelsData } from '../data/hotels';
import FinalCTA from '../components/FinalCTA';

export const DestinationsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const destinations = [
    {
      city: "Hyderabad",
      state: "Telangana",
      tagline: "The City of Pearls & Global Tech Hub",
      description: "Home to key business clusters in Jubilee Hills and HITEC City, offering rich Nizami heritage alongside modern tech corridors.",
      image: "https://images.unsplash.com/photo-1572445271230-a78b5944a659?auto=format&fit=crop&w=1200&q=80",
      hotelsCount: 2,
      slug: "jubilee-hills"
    },
    {
      city: "Bangalore",
      state: "Karnataka",
      tagline: "Silicon Valley of India",
      description: "Prime business and lifestyle setting in Rajajinagar near World Trade Center, Orion Mall, and Yeshwanthpur.",
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
      hotelsCount: 1,
      slug: "rajajinagar"
    },
    {
      city: "Haveri",
      state: "Karnataka",
      tagline: "Historic Commercial Hub of North Karnataka",
      description: "Conveniently situated along major commercial arteries near Siddheshwara Temple and trade centres.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      hotelsCount: 1,
      slug: "shantashiva-arcade",
      isOpeningSoon: true
    },
    {
      city: "Haridwar",
      state: "Uttarakhand",
      tagline: "Sacred Spiritual Gateway & Wellness Retreat",
      description: "Set against the revered holy Ganga Ghats and sacred temples, tailored for luxury pilgrimage and wellness seekers.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
      hotelsCount: 1,
      slug: "luxe-collection-haridwar",
      isOpeningSoon: true
    }
  ];

  return (
    <div className="bg-white pt-24">
      {/* Header */}
      <section className="py-16 bg-[#0F172A] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KEY DESTINATIONS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
            WHERE WE OPERATE
          </h1>
          <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto">
            Discover vibrant Indian metropolises, commercial zones, and cultural getaways where iStay Hotels welcomes you.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destinations.map((dest, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden bg-slate-900 text-white aspect-[16/10] shadow-xl flex flex-col justify-end p-6 sm:p-8"
              >
                <img
                  src={dest.image}
                  alt={dest.city}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

                <div className="relative z-10 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{dest.state}</span>
                    </div>

                    {dest.isOpeningSoon && (
                      <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-amber-500 text-slate-950">
                        Opening Soon
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                    {dest.city}
                  </h3>

                  <p className="text-xs text-amber-300 font-medium">
                    {dest.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 pb-2">
                    {dest.description}
                  </p>

                  <Link
                    to={`/hotels/${dest.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-amber-400 hover:text-white transition-colors pt-2"
                  >
                    <span>Explore Properties in {dest.city}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};

export default DestinationsPage;
