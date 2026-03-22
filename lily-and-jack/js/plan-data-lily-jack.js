// ═══════════════════════════════════════════════════
// DateFlo | Lily & Jack | Birthday Date Night in San Diego
// Friday, April 24, 2026 | 6:00 PM – Flexible
// Real venues, real data, real everything
// Supports Plan A (Hillcrest Sunset Birthday) and Plan B (Little Italy Birthday Night)
// Full swap options with complete venue objects
// ═══════════════════════════════════════════════════

window.PLAN_ALL = [
  // ════════════════════════════════════
  // PLAN A: HILLCREST SUNSET BIRTHDAY
  // ════════════════════════════════════
  {
    id: "hillcrest-sunset-birthday",
    couple: "Lily & Jack",
    coupleId: "lily-jack-2026",
    partner1: "Lily",
    partner2: "Jack",
    planName: "Hillcrest Sunset Birthday",
    planEmoji: "🎂",
    planVibe: "A romantic birthday evening through Hillcrest and Bankers Hill with authentic Thai food, a stunning rooftop sunset, and an unforgettable birthday dessert moment.",
    greeting: "Lily and Jack, happy birthday to you! Tonight is all about celebrating in the most San Diego way possible. You're kicking things off with some of the best Thai food in the city at a cozy Hillcrest spot that has been a neighborhood favorite for decades, then heading up to a legendary rooftop 12 stories above Bankers Hill where you'll watch the sun melt into the Pacific with cocktails in hand, and finishing the night at one of the most beloved dessert destinations in California because every birthday deserves something extraordinary. The whole evening flows naturally from one neighborhood to the next and every stop is going to feel like a little gift.",
    occasion: "Birthday",
    date: "Friday, April 24, 2026",
    dateShort: "Fri, April 24",
    startTime: "6:00 PM",
    endTime: "Flexible",
    city: "San Diego, CA",
    area: "Hillcrest / Bankers Hill / Little Italy",
    coverImage: "images/lily-jack/taste-of-thai-1.jpg",
    route: "Home → Taste of Thai → Mister A's → Extraordinary Desserts → Home",

    preferences: {
      lily: {
        dietary: "No allergies",
        flavors: "Thai",
        drinks: "Open",
        avoid: "None"
      },
      jack: {
        dietary: "Brazil nut allergy",
        flavors: "Indian",
        drinks: "Open",
        avoid: "Brazil nuts in any form"
      }
    },

    weather: {
      high: "72°F",
      low: "58°F",
      conditions: "Classic San Diego spring evening. Clear skies, perfect for rooftop time.",
      sunset: "7:22 PM",
      rainChance: "5%",
      note: "April in San Diego is pretty much perfect. High around 72, dropping to the upper 50s after sunset. A light layer for when it cools down on the rooftop is all you need."
    },

    stops: [
      // ── STOP 1: TASTE OF THAI ──
      {
        order: 1,
        time: "6:00 PM",
        endTime: "7:15 PM",
        name: "Taste of Thai",
        type: "Dinner",
        location: "Hillcrest, San Diego",
        tagline: "A beloved Hillcrest Thai institution that has been doing it right since 1988",
        description: "You're starting the birthday celebration at one of the most loved Thai restaurants in San Diego. <a href=\"https://www.google.com/maps/search/?api=1&query=Taste+of+Thai+527+University+Ave+San+Diego\" target=\"_blank\">Taste of Thai</a> in Hillcrest has been a neighborhood gem since 1988 and the food is the real deal. Lily you're going to love the yellow curry with its rich coconut base and perfectly balanced spice and Jack the panang curry is creamy and warming with just the right amount of heat. Order a couple dishes to share between you and take your time enjoying the start of a really special night. The portions are generous and the vibe is welcoming and unpretentious.",
        image: "images/lily-jack/taste-of-thai-1.jpg",
        images: [
          "images/lily-jack/taste-of-thai-1.jpg",
          "images/lily-jack/taste-of-thai-2.jpg",
          "images/lily-jack/taste-of-thai-3.jpg",
          "images/lily-jack/taste-of-thai-4.jpg",
          "images/lily-jack/taste-of-thai-5.jpg",
          "images/lily-jack/taste-of-thai-6.jpg"
        ],
        address: "527 University Ave, San Diego, CA 92103",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7490,-117.1613",
        appleMapsUrl: "https://maps.apple.com/?daddr=32.7490,-117.1613&dirflg=d",
        parkingOptions: [
          {
            type: "street",
            recommended: true,
            name: "Street Parking on University Ave",
            address: "University Ave near Taste of Thai, San Diego",
            cost: "Free after 6 PM",
            tip: "Metered spots on University Ave are free after 6 PM. Side streets usually have availability on Friday evenings.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7490,-117.1613",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.7490,-117.1613&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.7490&dropoff[longitude]=-117.1613&dropoff[nickname]=Taste%20of%20Thai",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.7490&destination[longitude]=-117.1613"
        },
        cost: "$30 to $45 for two sharing 2 to 3 dishes",
        dressCode: "Casual and comfortable. Hillcrest is laid back so wear whatever makes you feel good.",
        reservation: {
          time: "6:00 PM",
          partySize: 2,
          notes: "Walk ins are usually fine on weekday evenings. You can also book through OpenTable if you want to be safe."
        },
        reviews: {
          google: { stars: 4.4, count: 1850 },
          yelp: { stars: 4.0, count: 950 }
        },
        happyHour: null,
        menuUrl: "https://www.tasteofthaisandiego.com/",
        reservationUrl: "https://www.opentable.com/r/taste-of-thai-hillcrest-san-diego",
        phone: "(619) 291-7525",
        foodRecs: {
          lily: [
            { name: "Yellow Curry", price: "$18", note: "Rich coconut curry with potatoes, carrots, and onion. Lily this is comfort food at its best and the spice is gentle and warming." },
            { name: "Pad Thai", price: "$18", note: "Their signature dish with perfectly balanced sweet, sour, and savory flavors. A classic for a reason." },
            { name: "Spring Rolls", price: "$10", note: "Fresh and crispy with a sweet chili dipping sauce. Great way to start the meal." }
          ],
          jack: [
            { name: "Panang Curry", price: "$18", note: "Creamy peanut curry with a slight sweetness and beautiful spice. Jack this is going to be your thing. No tree nuts used, just peanuts." },
            { name: "Spicy Noodles", price: "$18", note: "Wide rice noodles stir fried with Thai basil and chili. Bold flavors that wake everything up." },
            { name: "Thai Iced Tea", price: "$5", note: "Sweet, creamy, and the perfect pairing with spicy food." }
          ]
        },
        tips: [
          "The spice here is spicier than most American Thai spots so start with medium if you're unsure",
          "Order 2 to 3 entrees to share between you, that's the best way to experience the menu",
          "It's a cozy space so you'll feel close and connected which is exactly right for tonight",
          "Street parking is usually easy to find on Friday evenings in Hillcrest"
        ],
        swapOptions: [
          // ── Alt 1: Bahn Thai ──
          {
            name: "Bahn Thai",
            type: "Dinner",
            location: "University Heights, San Diego",
            tagline: "The Thai spot San Diegans are obsessed with and the Pad Thai proves why",
            description: "If you want the Thai restaurant that locals will not stop talking about, <a href=\"https://www.google.com/maps/search/?api=1&query=Bahn+Thai+4646+Park+Blvd+San+Diego\" target=\"_blank\">Bahn Thai</a> is the one. Lily the pad thai here might be the best in the city with perfectly chewy noodles and a sauce that hits every note. Jack the panang curry is rich and deeply flavorful without any tree nuts to worry about. The space is small and casual, more of a takeaway vibe with a few tables, but the food is genuinely outstanding and the flavors are authentic in a way that keeps people coming back every week.",
            image: "images/lily-jack/bahn-thai-1.jpg",
            images: [
              "images/lily-jack/bahn-thai-1.jpg",
              "images/lily-jack/bahn-thai-2.jpg",
              "images/lily-jack/bahn-thai-3.jpg",
              "images/lily-jack/bahn-thai-4.jpg",
              "images/lily-jack/bahn-thai-5.jpg",
              "images/lily-jack/bahn-thai-6.jpg"
            ],
            address: "4646 Park Blvd, Ste 3, San Diego, CA 92116",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7597,-117.1308",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.7597,-117.1308&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking on Park Blvd",
                address: "Park Blvd near Bahn Thai, San Diego",
                cost: "Free",
                tip: "Street parking on Park Blvd and side streets. Can be busy during dinner time so arrive a few minutes early.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7597,-117.1308",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.7597,-117.1308&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.7597&dropoff[longitude]=-117.1308&dropoff[nickname]=Bahn%20Thai",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.7597&destination[longitude]=-117.1308"
            },
            cost: "$25 to $40 for two",
            dressCode: "Casual. It's a neighborhood spot, keep it comfortable.",
            reservation: null,
            reviews: {
              google: { stars: 4.6, count: 2200 },
              yelp: { stars: 4.5, count: 3440 }
            },
            happyHour: null,
            menuUrl: "https://www.bahnthai.net/bahnthaimenu",
            reservationUrl: null,
            phone: "(619) 299-6363",
            foodRecs: {
              lily: [
                { name: "Pad Thai", price: "$18", note: "The dish that made this place famous. Lily you're going to understand the hype after one bite." },
                { name: "Yellow Curry", price: "$18", note: "Coconut rich and perfectly spiced. Comes with jasmine rice." }
              ],
              jack: [
                { name: "Panang Curry", price: "$18", note: "Creamy and flavorful. Jack no tree nuts, just peanut based curry paste." },
                { name: "Pad See Ew", price: "$18", note: "Wide noodles with a slightly sweet soy sauce. Deeply satisfying." }
              ]
            },
            tips: [
              "Parking can be tricky during dinner rush, rideshare is a solid option",
              "The spice level here is authentic Thai, start lower than you think",
              "Great for takeaway if you want to eat somewhere scenic nearby"
            ]
          },
          // ── Alt 2: Lotus Thai ──
          {
            name: "Lotus Thai Cuisine",
            type: "Dinner",
            location: "East Village, San Diego",
            tagline: "Award winning Thai cuisine with a full bar in the heart of downtown",
            description: "For a more polished birthday dinner setting, <a href=\"https://www.google.com/maps/search/?api=1&query=Lotus+Thai+Cuisine+906+Market+St+San+Diego\" target=\"_blank\">Lotus Thai Cuisine</a> in the East Village brings the elegance up a notch while keeping the flavors authentic. Lily the drunken noodles are packed with Thai basil and fresh chili and Jack the spicy eggplant is rich and satisfying. They have a full bar with specialty cocktails so you can toast to the birthday with something fun. The space is nicely decorated and feels a bit more special occasion than your average Thai spot.",
            image: "images/lily-jack/lotus-thai-1.jpg",
            images: [
              "images/lily-jack/lotus-thai-1.jpg",
              "images/lily-jack/lotus-thai-2.jpg",
              "images/lily-jack/lotus-thai-3.jpg",
              "images/lily-jack/lotus-thai-4.jpg",
              "images/lily-jack/lotus-thai-5.jpg",
              "images/lily-jack/lotus-thai-6.jpg"
            ],
            address: "906 Market St, San Diego, CA 92101",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7143,-117.1573",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.7143,-117.1573&dirflg=d",
            parkingOptions: [
              {
                type: "paid",
                recommended: true,
                name: "East Village Parking",
                address: "Market St near 9th Ave, San Diego",
                cost: "$10 to $15 evening",
                tip: "Several parking lots nearby in the East Village. Evening rates are reasonable.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7143,-117.1573",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.7143,-117.1573&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.7143&dropoff[longitude]=-117.1573&dropoff[nickname]=Lotus%20Thai",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.7143&destination[longitude]=-117.1573"
            },
            cost: "$35 to $50 for two",
            dressCode: "Smart casual. A nice step up from neighborhood Thai.",
            reservation: {
              time: "6:00 PM",
              partySize: 2,
              notes: "Reservations available through OpenTable. Walk ins are usually fine on Fridays before the rush."
            },
            reviews: {
              google: { stars: 4.3, count: 1600 },
              yelp: { stars: 4.0, count: 969 }
            },
            happyHour: null,
            menuUrl: "https://lotusthaisd.com/",
            reservationUrl: "https://www.opentable.com/r/lotus-thai-downtown",
            phone: "(619) 595-0115",
            foodRecs: {
              lily: [
                { name: "Drunken Noodles", price: "$17", note: "Wide noodles with fresh basil and chili. Lily this is spicy and incredible." },
                { name: "Mango Sticky Rice", price: "$10", note: "Sweet coconut rice with fresh mango. Perfect birthday treat." }
              ],
              jack: [
                { name: "Spicy Eggplant", price: "$16", note: "Rich and deeply flavored with Thai basil. Jack this is a sleeper hit." },
                { name: "Thai Iced Coffee", price: "$5", note: "Strong and sweet. A nice pick me up before the rest of the night." }
              ]
            },
            tips: [
              "They have a full bar so birthday cocktails are definitely an option",
              "The Saturday hours are limited so check before going on weekends",
              "Ask about their daily specials, they change frequently"
            ]
          },
          // ── Alt 3: Kettner Exchange ──
          {
            name: "Kettner Exchange",
            type: "Dinner",
            location: "Little Italy, San Diego",
            tagline: "Michelin Bib Gourmand rooftop dining with harbor views in the heart of Little Italy",
            description: "If you want to start the birthday with something truly special, <a href=\"https://www.google.com/maps/search/?api=1&query=Kettner+Exchange+2001+Kettner+Blvd+San+Diego\" target=\"_blank\">Kettner Exchange</a> has a rooftop patio overlooking Little Italy and the harbor that makes any meal feel like an event. This is a Michelin Bib Gourmand restaurant so the food is next level. Lily the seasonal small plates are creative and beautifully presented and Jack the burger is one of the best in San Diego. The cocktail program is serious and the atmosphere is lively and celebratory which is exactly the energy you want for a birthday dinner.",
            image: "images/lily-jack/kettner-exchange-1.jpg",
            images: [
              "images/lily-jack/kettner-exchange-1.jpg",
              "images/lily-jack/kettner-exchange-2.jpg",
              "images/lily-jack/kettner-exchange-3.jpg",
              "images/lily-jack/kettner-exchange-4.jpg",
              "images/lily-jack/kettner-exchange-5.jpg",
              "images/lily-jack/kettner-exchange-6.jpg"
            ],
            address: "2001 Kettner Blvd, San Diego, CA 92101",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7216,-117.1697",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.7216,-117.1697&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking on Kettner Blvd",
                address: "Kettner Blvd near Little Italy, San Diego",
                cost: "Free after 6 PM",
                tip: "Metered spots free after 6 PM. Plenty of side street parking in Little Italy.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7216,-117.1697",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.7216,-117.1697&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.7216&dropoff[longitude]=-117.1697&dropoff[nickname]=Kettner%20Exchange",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.7216&destination[longitude]=-117.1697"
            },
            cost: "$50 to $75 for two",
            dressCode: "Smart casual. This is a nicer spot so dress up a little for the birthday.",
            reservation: {
              time: "6:00 PM",
              partySize: 2,
              notes: "Reservations strongly recommended on Friday nights. Book through OpenTable. Request rooftop seating."
            },
            reviews: {
              google: { stars: 4.4, count: 2800 },
              yelp: { stars: 4.0, count: 2446 }
            },
            happyHour: null,
            menuUrl: "https://www.kettnerexchange.com/",
            reservationUrl: "https://www.opentable.com/r/kettner-exchange-san-diego",
            phone: "(619) 255-2001",
            foodRecs: {
              lily: [
                { name: "Seasonal Small Plates", price: "$14 to $18", note: "The menu changes but everything is creative and beautifully plated. Lily ask your server what's best tonight." },
                { name: "Craft Cocktail", price: "$16", note: "Their cocktail program is one of the best in San Diego. Start the birthday right." }
              ],
              jack: [
                { name: "Kettner Burger", price: "$19", note: "One of the best burgers in San Diego. Jack you won't regret this." },
                { name: "Rooftop Old Fashioned", price: "$16", note: "Sipping this on the rooftop with harbor views is a vibe." }
              ]
            },
            tips: [
              "Request rooftop seating when you book, the views are the whole experience",
              "This is a Michelin Bib Gourmand spot so the food is exceptional",
              "The cocktail menu changes seasonally, ask your server for favorites"
            ]
          }
        ]
      },

      // ── STOP 2: MISTER A'S ──
      {
        order: 2,
        time: "7:30 PM",
        endTime: "9:00 PM",
        name: "Mister A's",
        type: "Rooftop Bar / Sunset",
        location: "Bankers Hill, San Diego",
        tagline: "San Diego's legendary 12th floor rooftop with panoramic sunset views from the bay to Balboa Park",
        description: "This is the birthday moment. <a href=\"https://www.google.com/maps/search/?api=1&query=Mister+A's+2550+5th+Ave+San+Diego\" target=\"_blank\">Mister A's</a> has been San Diego's most iconic rooftop since 1965 and sitting 12 stories up in Bankers Hill you'll have 180 degree views of the skyline, San Diego Bay, Coronado, and the Pacific. Lily and Jack, the sunset from up here is the kind of thing you'll talk about for years. Arrive around 7:30 and you'll catch the golden hour light turning everything warm and beautiful. Order cocktails at the bar, find a spot on the terrace, and just soak it all in. The birthday person deserves this view tonight.",
        image: "images/lily-jack/mister-as-1.jpg",
        images: [
          "images/lily-jack/mister-as-1.jpg",
          "images/lily-jack/mister-as-2.jpg",
          "images/lily-jack/mister-as-3.jpg",
          "images/lily-jack/mister-as-4.jpg",
          "images/lily-jack/mister-as-5.jpg",
          "images/lily-jack/mister-as-6.jpg"
        ],
        address: "2550 5th Ave, Floor 12, San Diego, CA 92103",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7340,-117.1578",
        appleMapsUrl: "https://maps.apple.com/?daddr=32.7340,-117.1578&dirflg=d",
        parkingOptions: [
          {
            type: "valet",
            recommended: true,
            name: "Valet Parking at Mister A's",
            address: "2550 5th Ave, San Diego, CA 92103",
            cost: "$10 for dinner",
            tip: "Valet is the easiest option. $10 for dinner service. Worth it for a special night.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7340,-117.1578",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.7340,-117.1578&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.7340&dropoff[longitude]=-117.1578&dropoff[nickname]=Mister%20A's",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.7340&destination[longitude]=-117.1578"
        },
        cost: "$25 to $40 for two cocktails and a small bite",
        dressCode: "Business casual. No t-shirts, shorts, or flip flops. Think a nice button up or a cute dress. They do enforce the dress code.",
        reservation: {
          time: "7:30 PM",
          partySize: 2,
          notes: "Bar and terrace seating is first come first served. No reservation needed for bar area. Arrive around 7:30 to catch sunset at 7:22 PM. The bar is open until 10 PM on Fridays."
        },
        reviews: {
          google: { stars: 4.6, count: 3200 },
          yelp: { stars: 4.5, count: 2981 }
        },
        happyHour: null,
        menuUrl: "https://www.asrestaurant.com/",
        reservationUrl: "https://www.opentable.com/r/mister-as-san-diego",
        phone: "(619) 239-1377",
        foodRecs: {
          lily: [
            { name: "Sunset Cocktail", price: "$18", note: "Ask the bartender for something seasonal and celebratory. Lily this is your birthday moment." },
            { name: "Bar Bites", price: "$12 to $18", note: "The terrace menu has lighter options that are perfect for sharing while you watch the sunset." }
          ],
          jack: [
            { name: "Old Fashioned", price: "$18", note: "A classic that tastes even better 12 stories up with the city below you." },
            { name: "Cheese Board", price: "$22", note: "Jack the cheese selection is carefully curated and pairs perfectly with cocktails. No tree nut garnishes, just ask your server to confirm." }
          ]
        },
        tips: [
          "Arrive by 7:30 PM to catch sunset around 7:22 PM in late April",
          "The bar and terrace are first come first served, no reservation needed",
          "Dress code is business casual and they do enforce it",
          "This is a 5 minute rideshare from Hillcrest, super easy to get to",
          "Tell your server it's a birthday and they'll make it special"
        ],
        swapOptions: [
          // ── Alt 1: The Nolen ──
          {
            name: "The Nolen",
            type: "Rooftop Bar / Sunset",
            location: "Gaslamp Quarter, San Diego",
            tagline: "A sleek 14th floor rooftop cocktail lounge with fire pits and panoramic city views",
            description: "If you want a more modern, trendy rooftop vibe, <a href=\"https://www.google.com/maps/search/?api=1&query=The+Nolen+453+6th+Ave+San+Diego\" target=\"_blank\">The Nolen</a> sits 14 floors above the Gaslamp Quarter with views that stretch from Petco Park to the Coronado Bridge. Lily and Jack, the fire pits make it cozy as the sun goes down and the cocktail menu is genuinely one of the best in the city. Every drink is crafted with seasonal ingredients and house made syrups. The open air terrace has that perfect balance of lively energy and intimate corners where you can sit close together and toast to the birthday.",
            image: "images/lily-jack/the-nolen-1.jpg",
            images: [
              "images/lily-jack/the-nolen-1.jpg",
              "images/lily-jack/the-nolen-2.jpg",
              "images/lily-jack/the-nolen-3.jpg",
              "images/lily-jack/the-nolen-4.jpg",
              "images/lily-jack/the-nolen-5.jpg",
              "images/lily-jack/the-nolen-6.jpg"
            ],
            address: "453 6th Ave, Ste 7007, San Diego, CA 92101",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7146,-117.1607",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.7146,-117.1607&dirflg=d",
            parkingOptions: [
              {
                type: "paid",
                recommended: true,
                name: "Gaslamp Quarter Parking",
                address: "6th Ave near Market St, San Diego",
                cost: "$15 to $25 evening",
                tip: "Several garages in the Gaslamp. Evening flat rates are usually available after 5 PM.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7146,-117.1607",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.7146,-117.1607&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.7146&dropoff[longitude]=-117.1607&dropoff[nickname]=The%20Nolen",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.7146&destination[longitude]=-117.1607"
            },
            cost: "$25 to $40 for two cocktails",
            dressCode: "Smart casual. The Gaslamp crowd dresses up a bit, especially on Friday nights.",
            reservation: {
              time: "7:30 PM",
              partySize: 2,
              notes: "No reservations for the bar area. 21+ after 8 PM. Arrive before sunset for the best terrace spots."
            },
            reviews: {
              google: { stars: 4.4, count: 2100 },
              yelp: { stars: 4.0, count: 811 }
            },
            happyHour: null,
            menuUrl: "https://thenolenrooftop.com/food/",
            reservationUrl: "https://www.opentable.com/r/the-nolen-san-diego",
            phone: "(619) 849-6697",
            foodRecs: {
              lily: [
                { name: "Seasonal Cocktail", price: "$17", note: "Their cocktail menu rotates seasonally. Lily ask the bartender for something fun and celebratory." }
              ],
              jack: [
                { name: "Nolen Original", price: "$17", note: "Jack try one of their signature originals. They're made with house syrups and premium spirits." }
              ]
            },
            tips: [
              "Arrive before sunset for the best fire pit spots",
              "21+ after 8 PM daily",
              "The bar bites menu is available until 10 PM on Fridays",
              "This is in the Gaslamp so the energy is lively on Friday nights"
            ]
          },
          // ── Alt 2: Craft House ──
          {
            name: "Sunset Cliffs",
            type: "Scenic / Sunset",
            location: "Ocean Beach, San Diego",
            tagline: "Watch the sun disappear into the Pacific from San Diego's most breathtaking natural viewpoint",
            description: "For the most romantic and adventurous birthday sunset, nothing beats <a href=\"https://www.google.com/maps/search/?api=1&query=Sunset+Cliffs+Natural+Park+San+Diego\" target=\"_blank\">Sunset Cliffs</a> in Ocean Beach. Lily and Jack, you'll stand on the bluffs overlooking the Pacific Ocean and watch the sky turn every shade of orange and pink as the sun sets directly in front of you. It's completely free, it's jaw droppingly beautiful, and it's the kind of moment that makes a birthday feel magical. Bring a light jacket because it gets breezy on the cliffs and just find a spot along the railing and enjoy the show together.",
            image: "images/lily-jack/sunset-cliffs-1.jpg",
            images: [
              "images/lily-jack/sunset-cliffs-1.jpg",
              "images/lily-jack/sunset-cliffs-2.jpg",
              "images/lily-jack/sunset-cliffs-3.jpg",
              "images/lily-jack/sunset-cliffs-4.jpg",
              "images/lily-jack/sunset-cliffs-5.jpg",
              "images/lily-jack/sunset-cliffs-6.jpg"
            ],
            address: "Ladera St, San Diego, CA 92107",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7200,-117.2560",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.7200,-117.2560&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking along Sunset Cliffs Blvd",
                address: "Sunset Cliffs Blvd near Ladera St, San Diego",
                cost: "Free",
                tip: "Free street parking along Sunset Cliffs Blvd. Arrive 30 minutes before sunset to find a spot as it gets popular.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7200,-117.2560",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.7200,-117.2560&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.7200&dropoff[longitude]=-117.2560&dropoff[nickname]=Sunset%20Cliffs",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.7200&destination[longitude]=-117.2560"
            },
            cost: "Free",
            dressCode: "Casual. Bring a light jacket for the ocean breeze.",
            reservation: null,
            reviews: {
              google: { stars: 4.8, count: 12000 },
              yelp: { stars: 4.5, count: 800 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: null,
            foodRecs: {
              lily: [
                { name: "Bring Snacks", price: "$0", note: "Pack some chocolates or a small treat to enjoy while watching the sunset. It's the little things." }
              ],
              jack: [
                { name: "Grab Drinks Nearby", price: "$10", note: "There are shops on Newport Ave in OB where you can grab drinks before heading to the cliffs." }
              ]
            },
            tips: [
              "Arrive 30 to 45 minutes before sunset to find parking and a good spot",
              "Sunset is around 7:22 PM in late April",
              "It's about a 15 minute rideshare from Hillcrest",
              "Stay on the paved paths and railing, the cliffs can be dangerous",
              "This is a popular spot on Friday evenings so expect company but it never feels crowded"
            ]
          },
          // ── Alt 3: Born & Raised ──
          {
            name: "Born & Raised",
            type: "Rooftop Bar / Dinner",
            location: "Little Italy, San Diego",
            tagline: "A glamorous rooftop steakhouse with jaw dropping views of Little Italy",
            description: "For the ultimate birthday splurge, <a href=\"https://www.google.com/maps/search/?api=1&query=Born+%26+Raised+1909+India+St+San+Diego\" target=\"_blank\">Born & Raised</a> in Little Italy is one of the most beautiful restaurants in San Diego. The rooftop patio has stunning views and the vibe is pure old school glamour. Lily and Jack, even just going up for cocktails on the rooftop feels like a special occasion. The bartenders are talented and the cocktail list is classic and refined. If you want to feel like the birthday is a capital E Event, this is where you go.",
            image: "images/lily-jack/born-raised-1.jpg",
            images: [
              "images/lily-jack/born-raised-1.jpg",
              "images/lily-jack/born-raised-2.jpg",
              "images/lily-jack/born-raised-3.jpg",
              "images/lily-jack/born-raised-4.jpg",
              "images/lily-jack/born-raised-5.jpg",
              "images/lily-jack/born-raised-6.jpg"
            ],
            address: "1909 India St, San Diego, CA 92101",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7260,-117.1685",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.7260,-117.1685&dirflg=d",
            parkingOptions: [
              {
                type: "valet",
                recommended: true,
                name: "Valet at Born & Raised",
                address: "1909 India St, San Diego",
                cost: "$15",
                tip: "Valet is available and worth it for a special night. Street parking is also free after 6 PM.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7260,-117.1685",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.7260,-117.1685&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.7260&dropoff[longitude]=-117.1685&dropoff[nickname]=Born%20%26%20Raised",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.7260&destination[longitude]=-117.1685"
            },
            cost: "$30 to $50 for two cocktails",
            dressCode: "Smart casual to dressy. This is a place where dressing up is part of the fun.",
            reservation: {
              time: "7:30 PM",
              partySize: 2,
              notes: "Rooftop is first come first served. For dinner reservations book well in advance through OpenTable."
            },
            reviews: {
              google: { stars: 4.5, count: 3800 },
              yelp: { stars: 4.5, count: 2200 }
            },
            happyHour: null,
            menuUrl: "https://www.bornandraised.com/",
            reservationUrl: "https://www.opentable.com/born-and-raised",
            phone: "(619) 202-4577",
            foodRecs: {
              lily: [
                { name: "Espresso Martini", price: "$19", note: "Beautifully made and the perfect birthday cocktail." }
              ],
              jack: [
                { name: "Manhattan", price: "$19", note: "Jack they make a perfect Manhattan here. Classic and refined." }
              ]
            },
            tips: [
              "The rooftop is the move, head straight up",
              "Cocktails at the bar are a great birthday treat without the full dinner price",
              "This is a 5 minute walk from Extraordinary Desserts in Little Italy"
            ]
          }
        ]
      },

      // ── STOP 3: EXTRAORDINARY DESSERTS ──
      {
        order: 3,
        time: "9:00 PM",
        endTime: "10:00 PM",
        name: "Extraordinary Desserts",
        type: "Dessert / Birthday Finale",
        location: "Little Italy, San Diego",
        tagline: "An award winning dessert destination where every cake is a work of art and every bite is a celebration",
        description: "There is no better place to end a birthday night in San Diego than <a href=\"https://www.google.com/maps/search/?api=1&query=Extraordinary+Desserts+1430+Union+St+San+Diego\" target=\"_blank\">Extraordinary Desserts</a> in Little Italy. This place has been a San Diego icon for over 30 years and every single dessert is a genuine work of art. Lily and Jack, you're going to walk in and your eyes are going to go wide at the display case because everything looks almost too beautiful to eat. Almost. The birthday person absolutely needs the chocolate oblivion torte which is rich and intense and pure happiness in cake form. Share a couple things, order some gourmet tea or a glass of wine, and just sit close together and let the night settle into something perfectly sweet.",
        image: "images/lily-jack/extraordinary-desserts-1.jpg",
        images: [
          "images/lily-jack/extraordinary-desserts-1.jpg",
          "images/lily-jack/extraordinary-desserts-2.jpg",
          "images/lily-jack/extraordinary-desserts-3.jpg",
          "images/lily-jack/extraordinary-desserts-4.jpg",
          "images/lily-jack/extraordinary-desserts-5.jpg",
          "images/lily-jack/extraordinary-desserts-6.jpg"
        ],
        address: "1430 Union St, San Diego, CA 92101",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7223,-117.1672",
        appleMapsUrl: "https://maps.apple.com/?daddr=32.7223,-117.1672&dirflg=d",
        parkingOptions: [
          {
            type: "street",
            recommended: true,
            name: "Street Parking on Union St",
            address: "Union St near Ash St, San Diego",
            cost: "Free after 6 PM",
            tip: "Metered parking on Union and surrounding streets is free after 6 PM. Easy to find a spot in Little Italy on Friday evenings.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7223,-117.1672",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.7223,-117.1672&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.7223&dropoff[longitude]=-117.1672&dropoff[nickname]=Extraordinary%20Desserts",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.7223&destination[longitude]=-117.1672"
        },
        cost: "$15 to $25 for two desserts and drinks",
        dressCode: "Whatever you're wearing from the rooftop, you're perfect.",
        reservation: null,
        reviews: {
          google: { stars: 4.5, count: 5200 },
          yelp: { stars: 4.0, count: 9206 }
        },
        happyHour: null,
        menuUrl: "https://extraordinarydesserts.com/",
        reservationUrl: null,
        phone: "(619) 294-7001",
        foodRecs: {
          lily: [
            { name: "Chocolate Oblivion Torte", price: "$12", note: "Dense, rich, and intensely chocolate. Lily this is the birthday dessert you deserve. No tree nuts in this one." },
            { name: "Creme Brulee", price: "$10", note: "Classic, creamy, with a perfect caramelized top. Always a winner." }
          ],
          jack: [
            { name: "Seasonal Fruit Tart", price: "$11", note: "Fresh fruit on pastry cream in a buttery crust. Jack this is light and beautiful and tree nut free." },
            { name: "Glass of Wine", price: "$10", note: "They have a nice wine and beer selection. A glass of something sparkling would be a perfect birthday toast." }
          ]
        },
        tips: [
          "Open until 11 PM on Fridays so you have plenty of time to linger",
          "The dessert case changes daily based on what's fresh and seasonal",
          "Jack has a brazil nut allergy so ask the staff about nut content in each dessert, they are very helpful",
          "This is about a 10 minute rideshare from Bankers Hill to Little Italy",
          "Grab a table on the patio if it's a nice night"
        ],
        swapOptions: [
          // ── Alt 1: Hammond's Gourmet Ice Cream ──
          {
            name: "Hammond's Gourmet Ice Cream",
            type: "Dessert",
            location: "Bankers Hill, San Diego",
            tagline: "Small batch artisan ice cream in Bankers Hill with creative flavors that change weekly",
            description: "If you want something more casual and fun for the birthday finale, <a href=\"https://www.google.com/maps/search/?api=1&query=Hammond's+Gourmet+Ice+Cream+3077+University+Ave+San+Diego\" target=\"_blank\">Hammond's Gourmet Ice Cream</a> is a beloved local ice cream shop with creative flavors that rotate constantly. Lily the lavender honey is floral and dreamy and Jack the salted caramel is rich and perfectly balanced. Everything is made in small batches and you can taste the quality in every spoonful. It's simple, it's sweet, and sharing ice cream on a warm San Diego night is one of life's best small pleasures.",
            image: "images/lily-jack/hammond-bar-1.jpg",
            images: [
              "images/lily-jack/hammond-bar-1.jpg",
              "images/lily-jack/hammond-bar-2.jpg",
              "images/lily-jack/hammond-bar-3.jpg",
              "images/lily-jack/hammond-bar-4.jpg",
              "images/lily-jack/hammond-bar-5.jpg",
              "images/lily-jack/hammond-bar-6.jpg"
            ],
            address: "3077 University Ave, San Diego, CA 92104",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7490,-117.1390",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.7490,-117.1390&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking on University Ave",
                address: "University Ave near Hammond's, San Diego",
                cost: "Free",
                tip: "Free street parking in North Park in the evening.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7490,-117.1390",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.7490,-117.1390&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.7490&dropoff[longitude]=-117.1390&dropoff[nickname]=Hammond's%20Ice%20Cream",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.7490&destination[longitude]=-117.1390"
            },
            cost: "$8 to $14 for two",
            dressCode: "Casual. It's ice cream.",
            reservation: null,
            reviews: {
              google: { stars: 4.7, count: 900 },
              yelp: { stars: 4.5, count: 600 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: "(619) 269-2745",
            foodRecs: {
              lily: [
                { name: "Lavender Honey", price: "$6", note: "Floral, sweet, and uniquely San Diego. Lily this is the one." }
              ],
              jack: [
                { name: "Salted Caramel", price: "$6", note: "Rich and perfectly balanced. Jack this is classic done right. No tree nuts." }
              ]
            },
            tips: [
              "Flavors rotate weekly so check what's available when you arrive",
              "Ask for samples, they're happy to let you try before you decide",
              "Walk around North Park afterward if you want to extend the night"
            ]
          },
          // ── Alt 2: Craft House ──
          {
            name: "An Do",
            type: "Dessert / Cocktails",
            location: "Bankers Hill, San Diego",
            tagline: "A Vietnamese French dessert and cocktail lounge with stunning presentation",
            description: "For something truly unique and celebration worthy, <a href=\"https://www.google.com/maps/search/?api=1&query=An+Do+3244+University+Ave+San+Diego\" target=\"_blank\">An Do</a> is a Vietnamese French dessert lounge that feels like stepping into a different world. Lily and Jack, every dessert here is presented like a piece of art and the cocktails are equally beautiful. The matcha tiramisu is creamy and delicate and the chocolate fondant is warm and indulgent. This is the kind of place where you linger, take photos, and make the birthday celebration feel really special.",
            image: "images/lily-jack/an-do-1.jpg",
            images: [
              "images/lily-jack/an-do-1.jpg",
              "images/lily-jack/an-do-2.jpg",
              "images/lily-jack/an-do-3.jpg",
              "images/lily-jack/an-do-4.jpg",
              "images/lily-jack/an-do-5.jpg",
              "images/lily-jack/an-do-6.jpg"
            ],
            address: "3244 University Ave, San Diego, CA 92104",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7490,-117.1340",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.7490,-117.1340&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking on University Ave",
                address: "University Ave near An Do, San Diego",
                cost: "Free",
                tip: "Free street parking in North Park in the evening.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7490,-117.1340",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.7490,-117.1340&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.7490&dropoff[longitude]=-117.1340&dropoff[nickname]=An%20Do",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.7490&destination[longitude]=-117.1340"
            },
            cost: "$18 to $30 for two",
            dressCode: "Smart casual. The vibe is chic and intimate.",
            reservation: null,
            reviews: {
              google: { stars: 4.6, count: 500 },
              yelp: { stars: 4.5, count: 350 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: null,
            foodRecs: {
              lily: [
                { name: "Matcha Tiramisu", price: "$14", note: "Creamy, delicate, and beautifully presented. Lily this is the birthday pick." }
              ],
              jack: [
                { name: "Chocolate Fondant", price: "$14", note: "Warm, rich, and indulgent. Jack this is pure celebration." }
              ]
            },
            tips: [
              "Everything is photogenic so bring your phone out",
              "The cocktail menu is creative and worth exploring",
              "Small intimate space so it feels special and cozy"
            ]
          },
          // ── Alt 3: Coin Haus ──
          {
            name: "Coin Haus",
            type: "Dessert / Arcade",
            location: "North Park, San Diego",
            tagline: "Gourmet waffles and craft beer in a retro arcade bar that feels like a party",
            description: "If you want to end the birthday on a playful and lively note, <a href=\"https://www.google.com/maps/search/?api=1&query=Coin+Haus+3029+University+Ave+San+Diego\" target=\"_blank\">Coin Haus</a> in North Park is a retro arcade bar that serves incredible gourmet waffles. Lily and Jack, imagine warm Liege waffles topped with ice cream and fresh fruit while you play classic arcade games together. It's fun, it's unique, and it's the kind of place where you'll find yourselves laughing and competing and making the kind of memories that birthdays are all about. The craft beer selection is great too if you want one last drink of the night.",
            image: "images/lily-jack/coin-haus-1.jpg",
            images: [
              "images/lily-jack/coin-haus-1.jpg",
              "images/lily-jack/coin-haus-2.jpg",
              "images/lily-jack/coin-haus-3.jpg",
              "images/lily-jack/coin-haus-4.jpg",
              "images/lily-jack/coin-haus-5.jpg",
              "images/lily-jack/coin-haus-6.jpg"
            ],
            address: "3029 University Ave, San Diego, CA 92104",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7490,-117.1400",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.7490,-117.1400&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking on University Ave",
                address: "University Ave near Coin Haus, San Diego",
                cost: "Free",
                tip: "Free parking in North Park in the evening. Easy to find a spot.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7490,-117.1400",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.7490,-117.1400&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.7490&dropoff[longitude]=-117.1400&dropoff[nickname]=Coin%20Haus",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.7490&destination[longitude]=-117.1400"
            },
            cost: "$12 to $20 for two",
            dressCode: "Casual. It's an arcade bar, have fun with it.",
            reservation: null,
            reviews: {
              google: { stars: 4.5, count: 700 },
              yelp: { stars: 4.0, count: 450 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: "(619) 255-5784",
            foodRecs: {
              lily: [
                { name: "Liege Waffle with Ice Cream", price: "$12", note: "Warm Belgian waffle with a scoop of ice cream. Lily this is birthday perfection." }
              ],
              jack: [
                { name: "Classic Waffle with Fruit", price: "$10", note: "Fresh fruit and whipped cream on a warm waffle. Jack simple and delicious." }
              ]
            },
            tips: [
              "The arcade games are free to play",
              "They have a solid craft beer selection on tap",
              "It gets lively on Friday nights which is exactly the birthday energy you want"
            ]
          }
        ]
      }
    ]
  },

  // ════════════════════════════════════
  // PLAN B: LITTLE ITALY BIRTHDAY NIGHT
  // ════════════════════════════════════
  {
    id: "little-italy-birthday-night",
    couple: "Lily & Jack",
    coupleId: "lily-jack-2026",
    partner1: "Lily",
    partner2: "Jack",
    planName: "Little Italy Birthday Night",
    planEmoji: "🎉",
    planVibe: "A celebratory birthday evening through Little Italy and the Gaslamp with Indian cuisine, a stunning rooftop cocktail experience, and a dreamy waterfront walk.",
    greeting: "Lily and Jack, this birthday plan keeps everything within downtown San Diego's most walkable and vibrant neighborhoods. You're starting at a gorgeous Indian restaurant in the Gaslamp that has been voted the best in San Diego for years, then heading up 14 stories to one of the city's most beautiful rooftop bars for cocktails with panoramic views, and finishing with dessert at a legendary Little Italy spot that turns every visit into a celebration. Jack since you love Indian food this plan puts that front and center, and Lily you're going to love the energy and beauty of every single stop. Happy birthday!",
    occasion: "Birthday",
    date: "Friday, April 24, 2026",
    dateShort: "Fri, April 24",
    startTime: "6:00 PM",
    endTime: "Flexible",
    city: "San Diego, CA",
    area: "Gaslamp Quarter / Little Italy",
    coverImage: "images/lily-jack/royal-india-1.jpg",
    route: "Home → Royal India → The Nolen → Extraordinary Desserts → Home",

    preferences: {
      lily: {
        dietary: "No allergies",
        flavors: "Thai",
        drinks: "Open",
        avoid: "None"
      },
      jack: {
        dietary: "Brazil nut allergy",
        flavors: "Indian",
        drinks: "Open",
        avoid: "Brazil nuts in any form"
      }
    },

    weather: {
      high: "72°F",
      low: "58°F",
      conditions: "Beautiful April evening. Clear skies, light breeze off the bay.",
      sunset: "7:22 PM",
      rainChance: "5%",
      note: "Perfect weather for rooftop drinks and walking between stops. A light layer for after sunset is all you need."
    },

    stops: [
      // ── STOP 1: ROYAL INDIA ──
      {
        order: 1,
        time: "6:00 PM",
        endTime: "7:30 PM",
        name: "Royal India",
        type: "Dinner",
        location: "Gaslamp Quarter, San Diego",
        tagline: "Award winning Indian cuisine in a regal setting with an outdoor patio overlooking downtown",
        description: "Jack this one is for you. <a href=\"https://www.google.com/maps/search/?api=1&query=Royal+India+329+Market+St+San+Diego\" target=\"_blank\">Royal India</a> in the Gaslamp has been voted the best Indian restaurant in San Diego year after year and once you walk in you'll understand why. The space feels like a modern palace with ornate chandeliers, tall ceilings, and a cascading waterfall that creates this beautiful sense of calm. The outdoor patio gives you front row views of the downtown energy. Jack the butter chicken is legendary here, rich and creamy and perfectly spiced. Lily you're going to love the tikka masala which has this incredible depth of flavor. They also make one of the best mango martinis in the city if you want to kick off the birthday celebration with something fun.",
        image: "images/lily-jack/royal-india-1.jpg",
        images: [
          "images/lily-jack/royal-india-1.jpg",
          "images/lily-jack/royal-india-2.jpg",
          "images/lily-jack/royal-india-3.jpg",
          "images/lily-jack/royal-india-4.jpg",
          "images/lily-jack/royal-india-5.jpg",
          "images/lily-jack/royal-india-6.jpg"
        ],
        address: "329 Market St, San Diego, CA 92101",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7143,-117.1617",
        appleMapsUrl: "https://maps.apple.com/?daddr=32.7143,-117.1617&dirflg=d",
        parkingOptions: [
          {
            type: "paid",
            recommended: true,
            name: "Gaslamp Quarter Parking",
            address: "Market St near 4th Ave, San Diego",
            cost: "$15 to $25 evening",
            tip: "Several garages in the Gaslamp with flat evening rates. The Horton Plaza garage is a good option.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7143,-117.1617",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.7143,-117.1617&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.7143&dropoff[longitude]=-117.1617&dropoff[nickname]=Royal%20India",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.7143&destination[longitude]=-117.1617"
        },
        cost: "$35 to $55 for two with drinks",
        dressCode: "Smart casual. The Gaslamp crowd looks sharp on Friday nights and this restaurant has an elegant setting.",
        reservation: {
          time: "6:00 PM",
          partySize: 2,
          notes: "Reservations recommended on Friday nights. Book online or call ahead. Request patio seating for the best atmosphere."
        },
        reviews: {
          google: { stars: 4.4, count: 2800 },
          yelp: { stars: 4.0, count: 1455 }
        },
        happyHour: null,
        menuUrl: "https://royalindia.com/",
        reservationUrl: "https://www.opentable.com/r/royal-india-san-diego",
        phone: "(619) 269-9999",
        foodRecs: {
          jack: [
            { name: "Butter Chicken", price: "$18", note: "The dish that put this place on the map. Jack the sauce is rich, creamy, and perfectly spiced. Absolutely no tree nuts." },
            { name: "Garlic Naan", price: "$5", note: "Fresh from the tandoor and perfect for scooping up every last bit of sauce." },
            { name: "Mango Martini", price: "$14", note: "Made with real mango pulp from India. A signature drink that's worth celebrating with." }
          ],
          lily: [
            { name: "Chicken Tikka Masala", price: "$17", note: "Tender chicken in a spiced tomato cream sauce. Lily this is Indian comfort food at its best." },
            { name: "Samosa", price: "$8", note: "Crispy pastry filled with spiced potatoes and peas. A perfect starter to share." },
            { name: "Mango Lassi", price: "$6", note: "Creamy mango yogurt drink. Sweet and refreshing and a perfect pairing with the spice." }
          ]
        },
        tips: [
          "Request the outdoor patio for the best atmosphere and people watching",
          "Jack has a brazil nut allergy, let your server know and they'll guide you through the menu. Indian cuisine typically doesn't use brazil nuts but always good to confirm",
          "The mango martini is their signature drink and a perfect way to toast the birthday",
          "Established in 1990, this is one of the most respected Indian restaurants in San Diego",
          "Tell them it's a birthday, they often do something special"
        ],
        swapOptions: [
          // ── Alt 1: Himalayan Curry & Grill ──
          {
            name: "Himalayan Curry & Grill",
            type: "Dinner",
            location: "Mission Valley, San Diego",
            tagline: "Indian and Nepalese fine dining with tandoori specialties and generous portions",
            description: "For Indian food with a Nepalese twist, <a href=\"https://www.google.com/maps/search/?api=1&query=Himalayan+Curry+%26+Grill+10330+Friars+Rd+San+Diego\" target=\"_blank\">Himalayan Curry & Grill</a> offers a more expansive menu with dishes you won't find at most Indian restaurants. Jack the lamb biryani is fragrant and perfectly layered with saffron rice and Lily the chicken momo dumplings are a Nepalese specialty that are steamed and served with a spicy tomato chutney. The portions are generous and the prices are reasonable which leaves more in the budget for the rest of the night.",
            image: "images/lily-jack/himalayan-curry-1.jpg",
            images: [
              "images/lily-jack/himalayan-curry-1.jpg",
              "images/lily-jack/himalayan-curry-2.jpg",
              "images/lily-jack/himalayan-curry-3.jpg",
              "images/lily-jack/himalayan-curry-4.jpg",
              "images/lily-jack/himalayan-curry-5.jpg",
              "images/lily-jack/himalayan-curry-6.jpg"
            ],
            address: "10330 Friars Rd, Ste 104, San Diego, CA 92120",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7818,-117.0710",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.7818,-117.0710&dirflg=d",
            parkingOptions: [
              {
                type: "lot",
                recommended: true,
                name: "Shopping Center Parking",
                address: "10330 Friars Rd, San Diego",
                cost: "Free",
                tip: "Free parking in the shopping center lot right in front of the restaurant.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7818,-117.0710",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.7818,-117.0710&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.7818&dropoff[longitude]=-117.0710&dropoff[nickname]=Himalayan%20Curry",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.7818&destination[longitude]=-117.0710"
            },
            cost: "$30 to $45 for two",
            dressCode: "Casual. It's in a shopping center so no dress code.",
            reservation: null,
            reviews: {
              google: { stars: 4.5, count: 1800 },
              yelp: { stars: 4.5, count: 650 }
            },
            happyHour: null,
            menuUrl: "https://himalayancurryandgrill.com/",
            reservationUrl: null,
            phone: "(619) 280-4048",
            foodRecs: {
              jack: [
                { name: "Lamb Biryani", price: "$16", note: "Fragrant saffron rice layered with tender spiced lamb. Jack this is the move." },
                { name: "Chicken Tikka", price: "$14", note: "Perfectly charred and spiced from the tandoor." }
              ],
              lily: [
                { name: "Chicken Momo", price: "$12", note: "Steamed Nepalese dumplings with spicy tomato chutney. Lily these are special." },
                { name: "Vegetable Korma", price: "$13", note: "Creamy, mild, and packed with vegetables. Comforting and delicious." }
              ]
            },
            tips: [
              "This is about a 15 minute rideshare from the Gaslamp",
              "The portions are very generous so order conservatively",
              "Open until 10 PM on Friday and Saturday nights"
            ]
          },
          // ── Alt 2: Punjabi Tandoor ──
          {
            name: "Punjabi Tandoor",
            type: "Dinner",
            location: "Miramar, San Diego",
            tagline: "A family owned Indian gem with some of the best tandoori and naan in San Diego",
            description: "For the most authentic and affordable Indian food in San Diego, <a href=\"https://www.google.com/maps/search/?api=1&query=Punjabi+Tandoor+9235+Activity+Rd+San+Diego\" target=\"_blank\">Punjabi Tandoor</a> is where locals go when they want the real deal. Jack the chicken tandoori is charred and juicy with spices that go deep and Lily the paneer tikka is creamy and satisfying. The naan here is famous for being soft, buttery, and made fresh to order. It's a casual spot without the fancy atmosphere of Royal India but the food stands on its own and the portions are incredibly generous for the price.",
            image: "images/lily-jack/punjabi-tandoor-1.jpg",
            images: [
              "images/lily-jack/punjabi-tandoor-1.jpg",
              "images/lily-jack/punjabi-tandoor-2.jpg",
              "images/lily-jack/punjabi-tandoor-3.jpg",
              "images/lily-jack/punjabi-tandoor-4.jpg",
              "images/lily-jack/punjabi-tandoor-5.jpg",
              "images/lily-jack/punjabi-tandoor-6.jpg"
            ],
            address: "9235 Activity Rd, Ste 111, San Diego, CA 92126",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8930,-117.1350",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.8930,-117.1350&dirflg=d",
            parkingOptions: [
              {
                type: "lot",
                recommended: true,
                name: "Shopping Center Parking",
                address: "9235 Activity Rd, San Diego",
                cost: "Free",
                tip: "Free parking right in front.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8930,-117.1350",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.8930,-117.1350&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.8930&dropoff[longitude]=-117.1350&dropoff[nickname]=Punjabi%20Tandoor",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.8930&destination[longitude]=-117.1350"
            },
            cost: "$20 to $35 for two",
            dressCode: "Casual. This is a neighborhood Indian spot.",
            reservation: null,
            reviews: {
              google: { stars: 4.1, count: 1900 },
              yelp: { stars: 4.0, count: 1992 }
            },
            happyHour: null,
            menuUrl: "https://www.punjabitandoor.com/",
            reservationUrl: null,
            phone: "(858) 695-0956",
            foodRecs: {
              jack: [
                { name: "Chicken Tandoori", price: "$14", note: "Charred, juicy, and deeply spiced from the tandoor oven. Jack this is the real deal." },
                { name: "Butter Naan", price: "$4", note: "Soft, buttery, and fresh from the oven. The naan here is famous." }
              ],
              lily: [
                { name: "Paneer Tikka", price: "$13", note: "Grilled paneer with a spiced marinade. Lily this is creamy and satisfying." },
                { name: "Mango Lassi", price: "$4", note: "Sweet, cold, and perfect with spicy food." }
              ]
            },
            tips: [
              "This is about a 20 minute rideshare from downtown, best if you're coming from north",
              "The portions are huge and the prices are very reasonable",
              "Closes at 9 PM so plan to eat early"
            ]
          },
          // ── Alt 3: Soi 30th ──
          {
            name: "Soi 30th",
            type: "Dinner",
            location: "North Park, San Diego",
            tagline: "Modern Thai street food in the heart of North Park with bold flavors and a fun atmosphere",
            description: "If you'd rather switch up the cuisine for a Thai option that Lily will love, <a href=\"https://www.google.com/maps/search/?api=1&query=Soi+30th+2811+University+Ave+San+Diego\" target=\"_blank\">Soi 30th</a> in North Park brings Thai street food flavors to a fun and lively setting. Lily the drunken noodles are packed with heat and fresh basil and Jack the green curry is rich and coconut forward. It's the kind of spot where the flavors are bold and unapologetic and the energy in the room matches. Great cocktails, generous portions, and exactly the kind of place that makes a Friday night feel like a celebration.",
            image: "images/lily-jack/soi-30th-1.jpg",
            images: [
              "images/lily-jack/soi-30th-1.jpg",
              "images/lily-jack/soi-30th-2.jpg",
              "images/lily-jack/soi-30th-3.jpg",
              "images/lily-jack/soi-30th-4.jpg",
              "images/lily-jack/soi-30th-5.jpg",
              "images/lily-jack/soi-30th-6.jpg"
            ],
            address: "2811 University Ave, San Diego, CA 92104",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7490,-117.1430",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.7490,-117.1430&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking on University Ave",
                address: "University Ave near 30th St, San Diego",
                cost: "Free",
                tip: "Free street parking in North Park. 30th and University intersection has options on side streets.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7490,-117.1430",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.7490,-117.1430&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.7490&dropoff[longitude]=-117.1430&dropoff[nickname]=Soi%2030th",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.7490&destination[longitude]=-117.1430"
            },
            cost: "$30 to $45 for two",
            dressCode: "Casual. North Park is effortlessly cool.",
            reservation: null,
            reviews: {
              google: { stars: 4.5, count: 800 },
              yelp: { stars: 4.5, count: 500 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: null,
            foodRecs: {
              lily: [
                { name: "Drunken Noodles", price: "$17", note: "Spicy, bold, and packed with Thai basil. Lily this is your jam." },
                { name: "Spring Rolls", price: "$10", note: "Fresh and crispy with a sweet chili sauce." }
              ],
              jack: [
                { name: "Green Curry", price: "$17", note: "Rich coconut curry with vegetables. Jack no tree nuts, just coconut goodness." },
                { name: "Thai Iced Tea", price: "$5", note: "Sweet and creamy. The perfect complement." }
              ]
            },
            tips: [
              "North Park is about a 10 minute rideshare from the Gaslamp",
              "The cocktail menu is fun and worth exploring",
              "Good option if you want something more casual for the birthday dinner"
            ]
          }
        ]
      },

      // ── STOP 2: THE NOLEN ──
      {
        order: 2,
        time: "7:45 PM",
        endTime: "9:15 PM",
        name: "The Nolen",
        type: "Rooftop Bar / Sunset",
        location: "Gaslamp Quarter, San Diego",
        tagline: "A stunning 14th floor rooftop cocktail lounge with fire pits and panoramic views of the bay and Coronado",
        description: "After dinner you're heading straight up. <a href=\"https://www.google.com/maps/search/?api=1&query=The+Nolen+453+6th+Ave+San+Diego\" target=\"_blank\">The Nolen</a> is 14 floors above the Gaslamp Quarter and the views stretch from Petco Park across the bay to the Coronado Bridge and beyond. Lily and Jack, this is where the birthday really starts to feel magical. The open air terrace has fire pits that make it cozy as the last light fades, the cocktail program is one of the best in San Diego with seasonal ingredients and house made syrups, and the energy is exactly right for celebrating. Find a spot near the railing, order something beautiful, and toast to another year together. The sunset from up here on a clear April evening is genuinely breathtaking.",
        image: "images/lily-jack/the-nolen-1.jpg",
        images: [
          "images/lily-jack/the-nolen-1.jpg",
          "images/lily-jack/the-nolen-2.jpg",
          "images/lily-jack/the-nolen-3.jpg",
          "images/lily-jack/the-nolen-4.jpg",
          "images/lily-jack/the-nolen-5.jpg",
          "images/lily-jack/the-nolen-6.jpg"
        ],
        address: "453 6th Ave, Ste 7007, San Diego, CA 92101",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7146,-117.1607",
        appleMapsUrl: "https://maps.apple.com/?daddr=32.7146,-117.1607&dirflg=d",
        parkingOptions: [
          {
            type: "paid",
            recommended: true,
            name: "Gaslamp Quarter Garage",
            address: "6th Ave near Market St, San Diego",
            cost: "Already parked from dinner or rideshare",
            tip: "If you drove to Royal India, your car is already nearby. Otherwise rideshare is easiest in the Gaslamp.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7146,-117.1607",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.7146,-117.1607&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.7146&dropoff[longitude]=-117.1607&dropoff[nickname]=The%20Nolen",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.7146&destination[longitude]=-117.1607"
        },
        cost: "$25 to $40 for two cocktails and a bar bite",
        dressCode: "Smart casual. You're coming from Royal India so you already look great.",
        reservation: {
          time: "7:45 PM",
          partySize: 2,
          notes: "No reservations needed for the bar and terrace. First come first served. 21+ after 8 PM. It's about a 5 minute walk from Royal India."
        },
        reviews: {
          google: { stars: 4.4, count: 2100 },
          yelp: { stars: 4.0, count: 811 }
        },
        happyHour: null,
        menuUrl: "https://thenolenrooftop.com/food/",
        reservationUrl: "https://www.opentable.com/r/the-nolen-san-diego",
        phone: "(619) 849-6697",
        foodRecs: {
          lily: [
            { name: "Seasonal Craft Cocktail", price: "$17", note: "The menu changes with the seasons and everything is made with care. Lily ask the bartender to surprise you with something birthday worthy." },
            { name: "Bar Bites", price: "$12 to $16", note: "Light bites that pair perfectly with cocktails on the terrace." }
          ],
          jack: [
            { name: "Nolen Old Fashioned", price: "$17", note: "Their take on the classic with house made ingredients. Jack this is refined and smooth." },
            { name: "Cheese and Charcuterie", price: "$18", note: "A nice shareable board to graze on while you enjoy the views. Ask about tree nut garnishes." }
          ]
        },
        tips: [
          "It's about a 5 minute walk from Royal India, head north on 6th Ave",
          "The fire pits get claimed quickly so grab one when you arrive",
          "21+ after 8 PM, bring your IDs",
          "The views face west so you'll catch the last colors of sunset if you arrive by 7:45",
          "Bar bites are served until 11 PM on Fridays"
        ],
        swapOptions: [
          // ── Alt 1: Altitude Sky Lounge ──
          {
            name: "Altitude Sky Lounge",
            type: "Rooftop Bar",
            location: "Gaslamp Quarter, San Diego",
            tagline: "A 22nd floor rooftop with 360 degree views named the best rooftop bar in the Western US",
            description: "If you want the highest vantage point in the Gaslamp, <a href=\"https://www.google.com/maps/search/?api=1&query=Altitude+Sky+Lounge+660+K+St+San+Diego\" target=\"_blank\">Altitude Sky Lounge</a> is 22 stories up with 360 degree panoramic views that stretch to Mexico on a clear night. Lily and Jack, Sunset Magazine named it the number one rooftop bar in the Western US and once you step out onto the open air deck you'll understand why. The cocktails are well made, the DJ sets create a fun Friday night energy, and the birthday person is going to feel on top of the world up here.",
            image: "images/lily-jack/altitude-1.jpg",
            images: [
              "images/lily-jack/altitude-1.jpg",
              "images/lily-jack/altitude-2.jpg",
              "images/lily-jack/altitude-3.jpg",
              "images/lily-jack/altitude-4.jpg",
              "images/lily-jack/altitude-5.jpg",
              "images/lily-jack/altitude-6.jpg"
            ],
            address: "660 K St, San Diego, CA 92101",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7107,-117.1580",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.7107,-117.1580&dirflg=d",
            parkingOptions: [
              {
                type: "paid",
                recommended: true,
                name: "Marriott Gaslamp Garage",
                address: "660 K St, San Diego",
                cost: "$20 to $30",
                tip: "Hotel garage parking available. Rideshare is easier in the Gaslamp.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7107,-117.1580",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.7107,-117.1580&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.7107&dropoff[longitude]=-117.1580&dropoff[nickname]=Altitude%20Sky%20Lounge",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.7107&destination[longitude]=-117.1580"
            },
            cost: "$25 to $40 for two cocktails",
            dressCode: "Smart casual to dressy. This is a trendy spot on Friday nights.",
            reservation: null,
            reviews: {
              google: { stars: 4.3, count: 2500 },
              yelp: { stars: 4.0, count: 1200 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: "(619) 696-0234",
            foodRecs: {
              lily: [
                { name: "Craft Cocktail", price: "$16", note: "Lily ask for something fun and celebratory. The bartenders are skilled." }
              ],
              jack: [
                { name: "Whiskey Sour", price: "$16", note: "Jack a classic that tastes better 22 stories up." }
              ]
            },
            tips: [
              "22 stories up means the views are unmatched on a clear night",
              "Friday nights have DJ sets so the energy is lively",
              "About a 10 minute walk from Royal India",
              "Can get busy after 9 PM so arrive earlier for the best spots"
            ]
          },
          // ── Alt 2: Pali Wine Co ──
          {
            name: "Pali Wine Co.",
            type: "Wine Bar / Rooftop",
            location: "Little Italy, San Diego",
            tagline: "A charming rooftop wine bar in Little Italy with grape to glass pinot noirs and cozy vibes",
            description: "For a more intimate and relaxed birthday drink, <a href=\"https://www.google.com/maps/search/?api=1&query=Pali+Wine+Co+1623+India+St+San+Diego\" target=\"_blank\">Pali Wine Co.</a> in Little Italy has a cozy rooftop deck that feels like you're at a friend's house party in the best way. Lily and Jack, they pour their own pinot noirs and chardonnays that are made with a grape to glass philosophy and the setting is warm and inviting. It's quieter than the Gaslamp rooftops which means you can actually talk and connect and that's what a birthday night should really be about.",
            image: "images/lily-jack/pali-wine-co-1.jpg",
            images: [
              "images/lily-jack/pali-wine-co-1.jpg",
              "images/lily-jack/pali-wine-co-2.jpg",
              "images/lily-jack/pali-wine-co-3.jpg",
              "images/lily-jack/pali-wine-co-4.jpg",
              "images/lily-jack/pali-wine-co-5.jpg",
              "images/lily-jack/pali-wine-co-6.jpg"
            ],
            address: "1623 India St, San Diego, CA 92101",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7230,-117.1680",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.7230,-117.1680&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking on India St",
                address: "India St near Pali Wine, San Diego",
                cost: "Free after 6 PM",
                tip: "Metered parking free after 6 PM on India St and surrounding streets.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7230,-117.1680",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.7230,-117.1680&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.7230&dropoff[longitude]=-117.1680&dropoff[nickname]=Pali%20Wine%20Co",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.7230&destination[longitude]=-117.1680"
            },
            cost: "$20 to $35 for two glasses and a small bite",
            dressCode: "Casual to smart casual. Little Italy keeps it easy.",
            reservation: null,
            reviews: {
              google: { stars: 4.6, count: 600 },
              yelp: { stars: 4.5, count: 400 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: null,
            foodRecs: {
              lily: [
                { name: "Pinot Noir", price: "$14", note: "Their house pinot is what they're known for. Lily this is smooth and elegant." }
              ],
              jack: [
                { name: "Chardonnay", price: "$14", note: "Jack their chardonnay is crisp and well balanced. Great rooftop wine." }
              ]
            },
            tips: [
              "The rooftop deck is the best spot, head straight up",
              "About a 10 minute rideshare from the Gaslamp to Little Italy",
              "More intimate and quieter than the bigger rooftop bars",
              "Walking distance to Extraordinary Desserts for your next stop"
            ]
          },
          // ── Alt 3: Waterfront Park ──
          {
            name: "Waterfront Park",
            type: "Scenic Walk",
            location: "Downtown, San Diego",
            tagline: "A stunning waterfront park with bay views, fountains, and the perfect birthday stroll",
            description: "For something completely free and genuinely romantic, <a href=\"https://www.google.com/maps/search/?api=1&query=Waterfront+Park+1600+Pacific+Hwy+San+Diego\" target=\"_blank\">Waterfront Park</a> along the bay is one of the most beautiful walks in San Diego. Lily and Jack, the park stretches along the water with views of the harbor, Coronado, and the city skyline. The interactive fountains are lit up at night and there's something magical about walking hand in hand along the water after dinner. It's peaceful, it's beautiful, and it gives you time to just be together and soak in the birthday evening.",
            image: "images/lily-jack/waterfront-park-1.jpg",
            images: [
              "images/lily-jack/waterfront-park-1.jpg",
              "images/lily-jack/waterfront-park-2.jpg",
              "images/lily-jack/waterfront-park-3.jpg",
              "images/lily-jack/waterfront-park-4.jpg",
              "images/lily-jack/waterfront-park-5.jpg",
              "images/lily-jack/waterfront-park-6.jpg"
            ],
            address: "1600 Pacific Hwy, San Diego, CA 92101",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7220,-117.1730",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.7220,-117.1730&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking along Pacific Hwy",
                address: "Pacific Hwy near Waterfront Park, San Diego",
                cost: "Free after 6 PM",
                tip: "Free metered parking after 6 PM along Pacific Highway.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7220,-117.1730",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.7220,-117.1730&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.7220&dropoff[longitude]=-117.1730&dropoff[nickname]=Waterfront%20Park",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.7220&destination[longitude]=-117.1730"
            },
            cost: "Free",
            dressCode: "Whatever you're wearing. Comfortable shoes for the walk.",
            reservation: null,
            reviews: {
              google: { stars: 4.7, count: 8000 },
              yelp: { stars: 4.5, count: 500 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: null,
            foodRecs: {
              lily: [
                { name: "Grab a Coffee", price: "$5", note: "There are cafes nearby if you want something warm for the walk." }
              ],
              jack: [
                { name: "Just Walk", price: "$0", note: "Sometimes the best thing is to just be together with a beautiful view." }
              ]
            },
            tips: [
              "The park is about a 10 minute walk from the Gaslamp Quarter",
              "The fountains are lit up at night and are beautiful",
              "Great spot for birthday photos with the bay as a backdrop",
              "Walking distance to Little Italy for dessert afterward"
            ]
          }
        ]
      },

      // ── STOP 3: EXTRAORDINARY DESSERTS ──
      {
        order: 3,
        time: "9:30 PM",
        endTime: "10:30 PM",
        name: "Extraordinary Desserts",
        type: "Dessert / Birthday Finale",
        location: "Little Italy, San Diego",
        tagline: "San Diego's most legendary dessert destination where every cake is art and every bite is a celebration",
        description: "The grand finale. <a href=\"https://www.google.com/maps/search/?api=1&query=Extraordinary+Desserts+1430+Union+St+San+Diego\" target=\"_blank\">Extraordinary Desserts</a> in Little Italy is the only way to end a birthday night in San Diego. For over 30 years this place has been turning dessert into an art form and the display case is going to make your jaw drop. Lily and Jack, take your time looking at everything and then order something beautiful. The chocolate oblivion torte is dense and rich and pure celebration. The seasonal fruit tarts are light and fresh and gorgeous. Grab a glass of wine or a gourmet tea and find a table where you can sit close together and let the sweetness of the night settle in. This is the birthday moment you'll remember.",
        image: "images/lily-jack/extraordinary-desserts-1.jpg",
        images: [
          "images/lily-jack/extraordinary-desserts-1.jpg",
          "images/lily-jack/extraordinary-desserts-2.jpg",
          "images/lily-jack/extraordinary-desserts-3.jpg",
          "images/lily-jack/extraordinary-desserts-4.jpg",
          "images/lily-jack/extraordinary-desserts-5.jpg",
          "images/lily-jack/extraordinary-desserts-6.jpg"
        ],
        address: "1430 Union St, San Diego, CA 92101",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7223,-117.1672",
        appleMapsUrl: "https://maps.apple.com/?daddr=32.7223,-117.1672&dirflg=d",
        parkingOptions: [
          {
            type: "street",
            recommended: true,
            name: "Street Parking on Union St",
            address: "Union St near Ash St, San Diego",
            cost: "Free after 6 PM",
            tip: "Metered parking free after 6 PM. Discounted evening lots nearby on Front & Beech.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7223,-117.1672",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.7223,-117.1672&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.7223&dropoff[longitude]=-117.1672&dropoff[nickname]=Extraordinary%20Desserts",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.7223&destination[longitude]=-117.1672"
        },
        cost: "$15 to $25 for two desserts and drinks",
        dressCode: "Whatever you're wearing, you're perfect.",
        reservation: null,
        reviews: {
          google: { stars: 4.5, count: 5200 },
          yelp: { stars: 4.0, count: 9206 }
        },
        happyHour: null,
        menuUrl: "https://extraordinarydesserts.com/",
        reservationUrl: null,
        phone: "(619) 294-7001",
        foodRecs: {
          lily: [
            { name: "Chocolate Oblivion Torte", price: "$12", note: "Rich, dense, and intensely chocolate. Lily this is the ultimate birthday dessert and it's tree nut free." },
            { name: "Gourmet Tea", price: "$6", note: "Their tea selection is curated and beautiful. A warm cup pairs perfectly with dessert." }
          ],
          jack: [
            { name: "Seasonal Fruit Tart", price: "$11", note: "Fresh fruit on pastry cream in a buttery crust. Jack this is light and gorgeous. No tree nuts." },
            { name: "Glass of Sparkling Wine", price: "$12", note: "Toast the birthday with something bubbly. It's the only way to end this night." }
          ]
        },
        tips: [
          "Open until 11 PM on Fridays so take your time and linger",
          "The dessert selection changes daily so let the case inspire you",
          "Jack has a brazil nut allergy, ask the staff about ingredients as some desserts contain nuts",
          "It's about a 10 to 15 minute walk from the Gaslamp or a quick rideshare",
          "The patio is lovely on a warm April evening"
        ],
        swapOptions: [
          // ── Alt 1: Hammond's ──
          {
            name: "Hammond's Gourmet Ice Cream",
            type: "Dessert",
            location: "North Park, San Diego",
            tagline: "Small batch artisan ice cream with creative rotating flavors",
            description: "For a more casual birthday dessert, <a href=\"https://www.google.com/maps/search/?api=1&query=Hammond's+Gourmet+Ice+Cream+3077+University+Ave+San+Diego\" target=\"_blank\">Hammond's</a> in North Park makes small batch ice cream with flavors that rotate weekly. Lily the lavender honey is dreamy and Jack the salted caramel is rich and perfectly balanced. Sharing ice cream on a warm San Diego night is one of those simple pleasures that makes everything feel right.",
            image: "images/lily-jack/hammond-bar-b-1.jpg",
            images: [
              "images/lily-jack/hammond-bar-b-1.jpg",
              "images/lily-jack/hammond-bar-b-2.jpg",
              "images/lily-jack/hammond-bar-b-3.jpg",
              "images/lily-jack/hammond-bar-b-4.jpg",
              "images/lily-jack/hammond-bar-b-5.jpg",
              "images/lily-jack/hammond-bar-b-6.jpg"
            ],
            address: "3077 University Ave, San Diego, CA 92104",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7490,-117.1390",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.7490,-117.1390&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking",
                address: "University Ave near Hammond's, San Diego",
                cost: "Free",
                tip: "Free parking in North Park evenings.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7490,-117.1390",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.7490,-117.1390&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.7490&dropoff[longitude]=-117.1390&dropoff[nickname]=Hammond's",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.7490&destination[longitude]=-117.1390"
            },
            cost: "$8 to $14 for two",
            dressCode: "Casual.",
            reservation: null,
            reviews: {
              google: { stars: 4.7, count: 900 },
              yelp: { stars: 4.5, count: 600 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: "(619) 269-2745",
            foodRecs: {
              lily: [
                { name: "Lavender Honey", price: "$6", note: "Floral and sweet. Lily this is uniquely San Diego." }
              ],
              jack: [
                { name: "Salted Caramel", price: "$6", note: "Classic and perfectly balanced. Jack no tree nuts." }
              ]
            },
            tips: [
              "About a 10 minute rideshare from the Gaslamp to North Park",
              "Flavors change weekly so let the case surprise you",
              "Walk around North Park afterward if you want to keep the night going"
            ]
          },
          // ── Alt 2: Craft Cocktails / Nightcap ──
          {
            name: "Coin Haus",
            type: "Dessert / Arcade",
            location: "North Park, San Diego",
            tagline: "Gourmet waffles and free arcade games for the most fun birthday ending possible",
            description: "If you want to end the birthday on the most playful note, <a href=\"https://www.google.com/maps/search/?api=1&query=Coin+Haus+3029+University+Ave+San+Diego\" target=\"_blank\">Coin Haus</a> in North Park combines gourmet Liege waffles with a retro arcade bar. Lily and Jack, imagine warm waffles topped with ice cream while you battle each other at classic arcade games. It's fun, it's lively, and it's the kind of birthday ending where you leave with big smiles and sore thumbs from gaming.",
            image: "images/lily-jack/coin-haus-1.jpg",
            images: [
              "images/lily-jack/coin-haus-1.jpg",
              "images/lily-jack/coin-haus-2.jpg",
              "images/lily-jack/coin-haus-3.jpg",
              "images/lily-jack/coin-haus-4.jpg",
              "images/lily-jack/coin-haus-5.jpg",
              "images/lily-jack/coin-haus-6.jpg"
            ],
            address: "3029 University Ave, San Diego, CA 92104",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7490,-117.1400",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.7490,-117.1400&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking",
                address: "University Ave near Coin Haus, San Diego",
                cost: "Free",
                tip: "Free parking in North Park evenings.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7490,-117.1400",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.7490,-117.1400&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.7490&dropoff[longitude]=-117.1400&dropoff[nickname]=Coin%20Haus",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.7490&destination[longitude]=-117.1400"
            },
            cost: "$12 to $20 for two",
            dressCode: "Casual.",
            reservation: null,
            reviews: {
              google: { stars: 4.5, count: 700 },
              yelp: { stars: 4.0, count: 450 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: "(619) 255-5784",
            foodRecs: {
              lily: [
                { name: "Liege Waffle with Ice Cream", price: "$12", note: "Warm waffle, cold ice cream. Lily this is birthday perfection." }
              ],
              jack: [
                { name: "Classic Waffle", price: "$10", note: "Simple and delicious. Jack the arcade games are the real dessert." }
              ]
            },
            tips: [
              "Arcade games are free to play",
              "Craft beer on tap if you want one last drink",
              "About a 10 minute rideshare from the Gaslamp"
            ]
          },
          // ── Alt 3: Waterfront Stroll ──
          {
            name: "Waterfront Park Stroll",
            type: "Scenic Walk",
            location: "Downtown, San Diego",
            tagline: "End the birthday with a romantic walk along the bay under the city lights",
            description: "Sometimes the best ending is the simplest one. <a href=\"https://www.google.com/maps/search/?api=1&query=Waterfront+Park+1600+Pacific+Hwy+San+Diego\" target=\"_blank\">Waterfront Park</a> is a stunning stretch along San Diego Bay where you can walk hand in hand under the city lights with the harbor and Coronado Bridge glowing in the distance. Lily and Jack, after dinner and rooftop drinks, a quiet walk along the water is the most romantic way to let the birthday settle into something beautiful.",
            image: "images/lily-jack/waterfront-park-1.jpg",
            images: [
              "images/lily-jack/waterfront-park-1.jpg",
              "images/lily-jack/waterfront-park-2.jpg",
              "images/lily-jack/waterfront-park-3.jpg",
              "images/lily-jack/waterfront-park-4.jpg",
              "images/lily-jack/waterfront-park-5.jpg",
              "images/lily-jack/waterfront-park-6.jpg"
            ],
            address: "1600 Pacific Hwy, San Diego, CA 92101",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7220,-117.1730",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.7220,-117.1730&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking",
                address: "Pacific Hwy near Waterfront Park, San Diego",
                cost: "Free after 6 PM",
                tip: "Free metered parking in the evening.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7220,-117.1730",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.7220,-117.1730&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.7220&dropoff[longitude]=-117.1730&dropoff[nickname]=Waterfront%20Park",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.7220&destination[longitude]=-117.1730"
            },
            cost: "Free",
            dressCode: "Whatever you're wearing.",
            reservation: null,
            reviews: {
              google: { stars: 4.7, count: 8000 },
              yelp: { stars: 4.5, count: 500 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: null,
            foodRecs: {
              lily: [
                { name: "Just the View", price: "$0", note: "Lily the bay at night is breathtaking. Just enjoy it together." }
              ],
              jack: [
                { name: "The Walk", price: "$0", note: "Jack sometimes the best birthday gift is time together in a beautiful place." }
              ]
            },
            tips: [
              "About a 10 minute walk from the Gaslamp Quarter",
              "The fountains are lit up at night",
              "Walking distance to Little Italy if you want dessert after",
              "Great spot for birthday photos with the city skyline"
            ]
          }
        ]
      }
    ]
  }
];

window.PLAN = window.PLAN_ALL[0];
