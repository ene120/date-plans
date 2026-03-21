// ═══════════════════════════════════════════════════
// DateFlo | Ethan & Hope | San Diego
// Real venues, real data, real everything
// Little Italy date night
// ═══════════════════════════════════════════════════

window.PLAN_ALL = [
  // ════════════════════════════════════
  // PLAN A: LITTLE ITALY NIGHTS
  // ════════════════════════════════════
  {
    id: "little-italy-nights",
    couple: "Ethan & Hope",
    coupleId: "ethan-2026",
    partner1: "Ethan",
    partner2: "Hope",
    planName: "Little Italy Nights",
    planEmoji: "🍷",
    planVibe: "Golden hour by the harbor, upscale dinner, and rooftop cocktails under the stars",
    greeting: "Start with a sunset stroll along San Diego's most scenic waterfront park, catching golden hour over the harbor with Coronado Bridge and USS Midway as your backdrop. Then walk to a Michelin Bib Gourmand dinner in a restored 1920s warehouse where every dish feels like an event. End the night sipping craft cocktails on one of the most stunning art deco rooftops in the city, with Little Italy twinkling below. Romantic, effortless, unforgettable.",
    occasion: "Date Night",
    date: "Saturday, April 4, 2026",
    dateShort: "Sat, April 4",
    startTime: "5:00 PM",
    endTime: "10:00 PM",
    city: "San Diego, CA",
    area: "Little Italy",
    coverImage: "https://images.unsplash.com/photo-1538097304804-2a1b932c284e?w=1200&q=80",
    route: "Home → Waterfront Park → Juniper & Ivy → Born & Raised → Home",

    preferences: {
      ethan: {
        dietary: "No strict restrictions",
        flavors: "Bold flavors, seafood, creative dishes",
        drinks: "Cocktails, whiskey-based drinks",
        avoid: "Nothing specific"
      },
      hope: {
        dietary: "No strict restrictions",
        flavors: "Elegant, lighter dishes, seafood",
        drinks: "Wine, floral cocktails, martinis",
        avoid: "Nothing specific"
      }
    },

    weather: {
      high: "68°F",
      low: "55°F",
      conditions: "Mostly sunny, upper 60s cooling to mid 50s by evening",
      sunset: "7:15 PM",
      rainChance: "10–15%",
      note: "Bring a light jacket for the rooftop after sunset."
    },

    stops: [
      {
        order: 1,
        time: "5:00 PM",
        endTime: "5:45 PM",
        name: "Waterfront Park",
        type: "Walk",
        location: "Little Italy, San Diego",
        tagline: "Golden hour by the harbor with Coronado Bridge and USS Midway as your backdrop",
        description: "A stunning 12 acre bayside park right on the harbor. Walk along the promenade with panoramic views of the <a href=\"https://www.google.com/maps/search/?api=1&query=Coronado+Bridge+San+Diego\" target=\"_blank\">Coronado Bridge</a>, the <a href=\"https://www.google.com/maps/search/?api=1&query=USS+Midway+Museum+San+Diego\" target=\"_blank\">USS Midway</a>, and sailboats dotting the bay. The interactive fountains, lush gardens, and wide open lawns make it one of the most photogenic spots in San Diego. Late March/early April sunset is around 7:15 PM, so you'll catch the beginning of golden hour while you stroll. Free admission. Open sunrise to sunset.",
        image: "https://images.unsplash.com/photo-1538097304804-2a1b932c284e?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1538097304804-2a1b932c284e?w=800&q=80",
          "https://images.unsplash.com/photo-1562095241-8c6714fd4178?w=800&q=80",
          "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
          "https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
          "https://images.unsplash.com/photo-1476673160081-cf065607f449?w=800&q=80"
        ],
        address: "1600 Pacific Highway, San Diego, CA 92101",
        googleMapsUrl: "https://maps.google.com/?q=Waterfront+Park+San+Diego",
        appleMapsUrl: "https://maps.apple.com/?address=1600+Pacific+Highway,San+Diego,CA+92101",
        parkingOptions: [
          {
            type: "paid",
            recommended: true,
            name: "610 W. Ash St Garage",
            address: "610 W. Ash St, San Diego",
            cost: "$5 flat after 5 PM",
            tip: "Park here and walk everywhere for the rest of the night. One spot covers the entire date.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=610+W+Ash+St+San+Diego",
            appleMapsUrl: "https://maps.apple.com/?daddr=610+W+Ash+St,San+Diego,CA&dirflg=d"
          },
          {
            type: "paid",
            recommended: false,
            name: "1536 Kettner Blvd",
            address: "1536 Kettner Blvd, San Diego",
            cost: "$10 evenings",
            tip: "Backup if the Ash St garage is full. Short walk to the park.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=1536+Kettner+Blvd+San+Diego",
            appleMapsUrl: "https://maps.apple.com/?daddr=1536+Kettner+Blvd,San+Diego,CA&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.7228&dropoff[longitude]=-117.1712&dropoff[nickname]=Waterfront%20Park",
          lyft: "https://lyft.com/ride?destination[latitude]=32.7228&destination[longitude]=-117.1712"
        },
        cost: "Free",
        dressCode: "Smart casual, comfy walking shoes",
        reservation: null,
        reviews: {
          google: { stars: 4.7, count: 12000 },
          yelp: { stars: 4.5, count: 1200 }
        },
        happyHour: null,
        menuUrl: null,
        reservationUrl: null,
        phone: null,
        foodRecs: null,
        tips: [
          "Walk along the promenade for panoramic views of Coronado Bridge and USS Midway",
          "The interactive fountains and lush gardens are perfect for photos",
          "Golden hour starts around 6:30 PM in early April, you'll catch the beginning",
          "Free admission, open sunrise to sunset"
        ],
        swapVenue: {
          name: "Embarcadero Marina Park",
          desc: "Harbor views and the Coronado Bridge from a different angle. 10 min walk south. Quieter vibe.",
          googleMapsUrl: "https://maps.google.com/?q=Embarcadero+Marina+Park+San+Diego"
        }
      },
      {
        order: 2,
        time: "6:00 PM",
        endTime: "7:45 PM",
        name: "Juniper & Ivy",
        type: "Dinner",
        location: "Little Italy, San Diego",
        tagline: "Michelin Bib Gourmand in a restored 1920s warehouse with an open kitchen",
        description: "A <a href=\"https://www.google.com/maps/search/?api=1&query=Juniper+and+Ivy+San+Diego\" target=\"_blank\">Michelin Bib Gourmand</a> restaurant set in a beautifully restored 1920s warehouse with soaring ceilings, an open kitchen, and industrial chic vibes. The menu is New American with seasonal, locally sourced ingredients and creative presentations that make every dish feel special. The atmosphere strikes the perfect balance: elevated enough to feel like an occasion, relaxed enough to be yourselves. Saturday hours: 5:00 to 10:00 PM. Reservations strongly recommended.",
        image: "https://resizer.otstatic.com/v2/photos/wide-huge/3/55018186.jpg",
        images: [
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
          "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
          "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80",
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
          "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80"
        ],
        address: "2228 Kettner Blvd, San Diego, CA 92101",
        googleMapsUrl: "https://maps.google.com/?q=Juniper+%26+Ivy+San+Diego",
        appleMapsUrl: "https://maps.apple.com/?address=2228+Kettner+Blvd,San+Diego,CA+92101",
        parkingOptions: [
          {
            type: "paid",
            recommended: true,
            name: "Keep your spot at 610 W. Ash",
            address: "610 W. Ash St, San Diego",
            cost: "$5 flat",
            tip: "10 minute walk from Waterfront Park. Keep the same spot for the whole date.",
            googleMapsUrl: "https://maps.google.com/?q=610+W+Ash+St+San+Diego",
            appleMapsUrl: "https://maps.apple.com/?daddr=610+W+Ash+St,San+Diego,CA&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.7261&dropoff[longitude]=-117.1699&dropoff[nickname]=Juniper%20%26%20Ivy",
          lyft: "https://lyft.com/ride?destination[latitude]=32.7261&destination[longitude]=-117.1699"
        },
        cost: "$130–170 for two",
        dressCode: "Smart casual, elevated enough to feel like an occasion",
        reservation: {
          status: "suggested",
          name: "Ethan",
          partySize: 2,
          time: "6:00 PM",
          notes: "Book on OpenTable. Reservations strongly recommended for Saturday evenings."
        },
        reviews: {
          google: { stars: 4.5, count: 3100 },
          yelp: { stars: 4.3, count: 4500 }
        },
        happyHour: {
          times: "5:00 PM – 6:00 PM, Daily",
          deals: [
            "$10 J&I Burger — smash style, cheddar, pickled onion, special sauce",
            "$8 Crispy Brussel Sprouts — sweet chili glaze, sesame, lime",
            "$7 Sourdough & Butter — house cultured butter, sea salt",
            "$9 Wagyu Tartare — egg yolk, capers, dijon, crostini",
            "$6 Select Wines by the glass",
            "$8 House Cocktail of the Day",
            "$5 Draft Beers"
          ]
        },
        menuUrl: "https://www.juniperandivy.com/menu/",
        reservationUrl: "https://www.opentable.com/juniper-and-ivy",
        phone: "+16192699036",
        foodRecs: {
          ethan: [
            { name: "Bluefin Crudo", desc: "Winter citrus ponzu, jalapeno, crispy shallot. A perfect starter that's light and fresh." },
            { name: "Miso Black Cod", desc: "Mushroom dashi, bok choy. Rich, umami, and one of their standout entrees." },
            { name: "Sticky Toffee Pudding", desc: "Cardamom date cake. The dessert everyone talks about. Don't skip it." }
          ],
          hope: [
            { name: "Kumamoto Oysters", desc: "Mojito foam, cucumber. Elegant and refreshing to start." },
            { name: "Hokkaido Scallop", desc: "Miso butter, corn, shiso. Perfectly seared and buttery." },
            { name: "Beet Salad", desc: "Goat cheese mousse, pistachio. A lighter option that's still incredibly flavorful." }
          ],
          shared: [
            { name: "Sourdough Bread", desc: "With house butter to start. Simple and perfect." },
            { name: "House Rose", desc: "A glass each. Pairs beautifully with everything on the menu." }
          ]
        },
        tips: [
          "Reservations strongly recommended, book on OpenTable for 6:00 PM",
          "Saturday hours are 5:00 to 10:00 PM",
          "The open kitchen and 1920s warehouse setting are worth arriving on time to take in"
        ],
        swapVenue: {
          name: "Barbusa",
          desc: "Modern Sicilian, 4.7 stars on OpenTable. Top dishes: Granchio Pasta (blue crab), Short Rib Lasagna. Same neighborhood, similar vibe, slightly more casual. Walk in friendly.",
          googleMapsUrl: "https://maps.google.com/?q=Barbusa+San+Diego"
        }
      },
      {
        order: 3,
        time: "8:00 PM",
        endTime: "9:30 PM",
        name: "Born & Raised",
        type: "Cocktails",
        location: "Little Italy, San Diego",
        tagline: "One of San Diego's most stunning art deco rooftops with craft cocktails and skyline views",
        description: "One of San Diego's most stunning rooftop bars. The open air space features <a href=\"https://www.google.com/maps/search/?api=1&query=Born+and+Raised+San+Diego\" target=\"_blank\">art deco design</a>, dramatic murals, and sweeping views of the Little Italy skyline. The cocktail program is world class: think tableside martinis, hand carved ice, and drinks that feel like an experience. It's the kind of place that turns a great night into an unforgettable one. Saturday rooftop hours: 5:00 PM to close. No reservations for the rooftop, first come first served.",
        image: "https://resizer.otstatic.com/v2/photos/wide-huge/3/48879671.jpg",
        images: [
          "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80",
          "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
          "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=80",
          "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&q=80",
          "https://images.unsplash.com/photo-1560512823-829485b8bf24?w=800&q=80",
          "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&q=80"
        ],
        address: "1909 India St, San Diego, CA 92101",
        googleMapsUrl: "https://maps.google.com/?q=Born+%26+Raised+San+Diego",
        appleMapsUrl: "https://maps.apple.com/?address=1909+India+St,San+Diego,CA+92101",
        parkingOptions: [
          {
            type: "paid",
            recommended: true,
            name: "Keep your spot at 610 W. Ash",
            address: "610 W. Ash St, San Diego",
            cost: "$5 flat",
            tip: "5 minute walk from Juniper & Ivy. Same spot covers the whole night.",
            googleMapsUrl: "https://maps.google.com/?q=610+W+Ash+St+San+Diego",
            appleMapsUrl: "https://maps.apple.com/?daddr=610+W+Ash+St,San+Diego,CA&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.7267&dropoff[longitude]=-117.1684&dropoff[nickname]=Born%20%26%20Raised",
          lyft: "https://lyft.com/ride?destination[latitude]=32.7267&destination[longitude]=-117.1684"
        },
        cost: "$40–60 for two",
        dressCode: "Smart casual, bring a light jacket for the rooftop",
        reservation: null,
        reviews: {
          google: { stars: 4.6, count: 4200 },
          yelp: { stars: 4.4, count: 2800 }
        },
        happyHour: {
          times: "5:00 PM – 6:30 PM, Mon–Fri",
          deals: [
            "$12 Classic Martini — gin or vodka, dry vermouth, olive or twist",
            "$10 Born & Raised Old Fashioned — bourbon, demerara, angostura, orange peel",
            "$9 House Wine — rotating red or white by the glass",
            "$14 Oysters (half dozen) — charcoal roasted, lemon, mignonette",
            "$8 Dirty Tots — loaded with short rib, cheese, scallions",
            "$7 Draft Beers"
          ]
        },
        menuUrl: null,
        reservationUrl: null,
        phone: "+16192024577",
        foodRecs: {
          ethan: [
            { name: "Wagyu Old Fashioned", desc: "Rich, smoky, and impressive. A conversation starter." },
            { name: "Tableside Martini", desc: "If you're feeling fancy. They make a show of it." }
          ],
          hope: [
            { name: "Lillet Collins", desc: "Light, floral, refreshing. Perfect for a warm rooftop evening." },
            { name: "Dirty Martini", desc: "Classic and clean. You can't go wrong here." }
          ],
          shared: [
            { name: "Charcoal Roasted Oysters", desc: "Smoky, briny, and perfectly paired with cocktails." },
            { name: "Dirty Tots", desc: "Their signature bar snack. Indulgent and shareable." }
          ]
        },
        tips: [
          "No reservations for the rooftop, first come first served",
          "Arriving around 8:00 PM on a Saturday, you should be able to grab seats",
          "Bring a light jacket, the rooftop can get breezy after sunset",
          "The tableside martini is an experience worth trying"
        ],
        swapVenue: {
          name: "Kettner Exchange",
          desc: "Rooftop lounge with craft cocktails and shareable plates. Same neighborhood, great views, more relaxed vibe.",
          googleMapsUrl: "https://maps.google.com/?q=Kettner+Exchange+San+Diego"
        }
      }
    ],

    travelTimes: [
      { from: 1, to: 2, duration: "10 min walk", mode: "walk" },
      { from: 2, to: 3, duration: "5 min walk", mode: "walk" }
    ],

    budget: {
      items: [
        { label: "Dinner (Juniper & Ivy)", cost: "$130–170" },
        { label: "Drinks + Bites (Born & Raised)", cost: "$40–60" },
        { label: "Parking", cost: "$5–10" },
        { label: "Rideshare (if needed)", cost: "$15–25 ea" }
      ],
      total: "$190–265",
      tip: "Park at the 610 W. Ash garage ($5 flat after 5 PM) and walk everywhere. Saves on rideshare and keeps the night seamless."
    },

    checklist: [
      { id: "chk-reserve-ji", text: "Reserve at Juniper & Ivy on OpenTable for 6:00 PM, 2 guests", bold: "Juniper & Ivy" },
      { id: "chk-leave", text: "Leave campus by 4:15 PM. Buffer for Saturday traffic from SDSU area.", bold: "4:15 PM" },
      { id: "chk-phones", text: "Charge phones. The waterfront and rooftop are both incredible photo spots.", bold: "Charge phones" },
      { id: "chk-dress", text: "Dress smart casual. Collared shirt for Ethan, something nice for Hope. Both spots are upscale casual.", bold: "Dress smart casual" },
      { id: "chk-jacket", text: "Bring a light jacket. The rooftop at Born & Raised can get breezy after sunset.", bold: "light jacket" },
      { id: "chk-rideshare", text: "Download Uber/Lyft if you haven't already, in case you prefer a ride home.", bold: "Uber/Lyft" }
    ],

    calendar: {
      title: "DateFlo: Little Italy Nights",
      date: "20260404",
      startTime: "T000000Z",
      endTime: "T050000Z",
      location: "Little Italy, San Diego, CA",
      description: "Little Italy Nights\n\n5:00 PM Waterfront Park Sunset\n6:00 PM Dinner at Juniper & Ivy\n8:00 PM Rooftop at Born & Raised\n\nFull details: dateflo.com/ethan-and-hope"
    },

    logistics: {
      whatToWear: "Smart casual is the move. Collared shirt for Ethan, something nice for Hope. Walking shoes that still look good since everything is within walking distance. Bring a light jacket for the rooftop after sunset.",
      transportation: "Park at the 610 W. Ash St garage ($5 flat after 5 PM) and walk everywhere. One spot covers the entire date: Waterfront Park is right there, Juniper & Ivy is a 10 minute walk, and Born & Raised is another 5 minutes."
    }
  }
];

// Default to first (only) plan
window.PLAN = window.PLAN_ALL[0];
window.switchPlan = function(index) {
  window.PLAN = window.PLAN_ALL[index];
  if (window._renderPlan) window._renderPlan();
};
