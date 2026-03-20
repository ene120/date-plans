// ═══════════════════════════════════════════════════
// DateFlo | David & Annie | San Diego (Convoy)
// Real venues, real data, real everything
// Supports Plan A (Cliffside Seoul) and Plan B (Bay Views & Broth)
// ═══════════════════════════════════════════════════

window.PLAN_ALL = [
  // ════════════════════════════════════
  // PLAN A: CLIFFSIDE SEOUL
  // ════════════════════════════════════
  {
    id: "cliffside-seoul",
    couple: "David & Annie",
    coupleId: "david-2026",
    partner1: "David",
    partner2: "Annie",
    planName: "Cliffside Seoul",
    planEmoji: "🌅",
    planVibe: "Ocean cliffs at golden hour, all you can eat Korean BBQ that's going to blow your minds, and the most Instagram worthy desserts on Convoy",
    greeting: "Okay so we put together something really special for you two. You're starting with a sunset walk along the most dramatic coastline in San Diego, then heading straight to Convoy for some seriously incredible Korean BBQ where you grill your own premium cuts right at the table, and finishing the night with puffles and boba from a spot that has over a thousand five star reviews. This is going to be a night you remember.",
    occasion: "Date Night",
    date: "Saturday, March 28, 2026",
    dateShort: "Sat, March 28",
    startTime: "5:15 PM",
    endTime: "8:15 PM",
    city: "San Diego, CA",
    area: "Point Loma + Convoy",
    coverImage: "images/david-annie/sunset-cliffs-1.jpg",
    route: "Home → Sunset Cliffs → Olleh Korean BBQ → Boba Bar → Home",

    preferences: {
      david: {
        dietary: "No restrictions, open to anything",
        flavors: "Korean BBQ, bold flavors, spicy, savory, Asian and American",
        drinks: "Open to anything",
        avoid: "Nothing specific, adventurous eater"
      },
      annie: {
        dietary: "No allergies, small appetite",
        flavors: "Vietnamese and Korean food, mainly Asian flavors",
        drinks: "Open to anything",
        avoid: "Anything too greasy"
      }
    },

    weather: {
      high: "68°F",
      low: "56°F",
      conditions: "Mostly sunny, upper 60s cooling to mid 50s by sunset",
      sunset: "7:10 PM",
      rainChance: "10%",
      note: "Bring a light layer for the cliffs after sunset. It gets breezy."
    },

    stops: [
      {
        order: 1,
        time: "5:15 PM",
        endTime: "6:00 PM",
        name: "Sunset Cliffs Natural Park",
        type: "Walk",
        location: "Point Loma, San Diego",
        tagline: "The kind of coastal walk where you stop every two minutes because the view keeps getting better",
        description: "We timed this so you get that perfect golden hour light along the most dramatic stretch of coastline in San Diego. Start at the <a href=\"https://www.google.com/maps/search/?api=1&query=Sunset+Cliffs+Natural+Park+Ladera+Street+San+Diego\" target=\"_blank\">Ladera Street parking area</a> and walk south along the bluffs. You'll pass incredible carved sea caves, natural arches, and panoramic ocean views that are genuinely unreal. David and Annie, this is exactly the kind of scenery you love for photos and the background here is going to be absolutely perfect. The <a href=\"https://www.google.com/maps/search/?api=1&query=Sunset+Cliffs+Blvd+San+Diego+CA\" target=\"_blank\">Sunset Cliffs Trail</a> runs right along the edge and the light at this hour makes everything glow. Just stay back from the cliff edges and enjoy the view.",
        image: "images/david-annie/sunset-cliffs-1.jpg",
        images: [
          "images/david-annie/sunset-cliffs-1.jpg",
          "images/david-annie/sunset-cliffs-2.jpg",
          "images/david-annie/sunset-cliffs-3.jpg",
          "images/david-annie/sunset-cliffs-4.jpg",
          "images/david-annie/sunset-cliffs-5.jpg",
          "images/david-annie/sunset-cliffs-6.jpg",
          "images/david-annie/sunset-cliffs-7.jpg",
          "images/david-annie/sunset-cliffs-8.jpg"
        ],
        address: "Ladera St, San Diego, CA 92107",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7197,-117.2555",
        appleMapsUrl: "https://maps.apple.com/?daddr=32.7197,-117.2555&dirflg=d",
        parkingOptions: [
          {
            type: "free",
            recommended: true,
            name: "Ladera Street Lot",
            address: "Ladera St, San Diego, CA 92107",
            cost: "Free",
            tip: "Two free dirt lots right at the park entrance. Park at the lower lot for the closest cliff access. Arrive by 5:00 PM to grab a spot before sunset crowds.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7197,-117.2555",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.7197,-117.2555&dirflg=d"
          },
          {
            type: "free",
            recommended: false,
            name: "Sunset Cliffs Blvd Street Parking",
            address: "Sunset Cliffs Blvd, San Diego",
            cost: "Free",
            tip: "Street parking along Sunset Cliffs Boulevard. More spots available but a short walk to the viewpoints.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7210,-117.2558",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.7210,-117.2558&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.7197&dropoff[longitude]=-117.2555&dropoff[nickname]=Sunset%20Cliffs",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.7197&destination[longitude]=-117.2555"
        },
        cost: "Free",
        dressCode: "Comfy walking shoes, some paths are uneven near the cliff edges",
        reservation: null,
        reviews: {
          google: { stars: 4.8, count: 15000 },
          yelp: { stars: 4.5, count: 1142 }
        },
        happyHour: null,
        menuUrl: null,
        reservationUrl: null,
        phone: null,
        foodRecs: null,
        tips: [
          "Arrive by 5:00 PM to grab parking before sunset crowds",
          "The cliffs face west so you get direct sunset views the entire walk",
          "Stay back from the edges, some areas have erosion",
          "The 0.9 mile trail from the parking lot is easy and flat with incredible views the whole way"
        ],
        swapVenue: {
          name: "Kate Sessions Park",
          desc: "Panoramic bay and city views from Pacific Beach. Great for photos, easier parking.",
          googleMapsUrl: "https://maps.google.com/?q=Kate+Sessions+Park+San+Diego"
        }
      },
      {
        order: 2,
        time: "6:15 PM",
        endTime: "7:30 PM",
        name: "Olleh Convoy Korean BBQ",
        type: "Dinner",
        location: "Convoy St, San Diego",
        tagline: "All you can eat premium Korean BBQ where you grill your own cuts right at the table",
        description: "This is the main event and you two are going to love it. <a href=\"https://www.google.com/maps/search/?api=1&query=Olleh+Convoy+Korean+BBQ+4344+Convoy+St+San+Diego\" target=\"_blank\">Olleh</a> is one of the best Korean BBQ spots in San Diego and it sits right in the heart of <a href=\"https://www.google.com/maps/search/?api=1&query=Convoy+Street+San+Diego\" target=\"_blank\">Convoy</a>, which is basically the best food neighborhood in the city. You get a tabletop grill and premium meats like rib eye, galbi, and pork belly that you cook together. The interactive experience makes it genuinely fun as a date. David, this is right in your lane with the bold Korean flavors you love. Annie, they have lighter options like chicken and seafood plus all the side dishes are unlimited so you can try a little bit of everything without feeling overwhelmed. The premium menu is $30 per person which is an incredible value for the quality you're getting.",
        image: "images/david-annie/olleh-1.jpg",
        images: [
          "images/david-annie/olleh-1.jpg",
          "images/david-annie/olleh-2.jpg",
          "images/david-annie/olleh-3.jpg",
          "images/david-annie/olleh-4.jpg",
          "images/david-annie/olleh-5.jpg",
          "images/david-annie/olleh-6.jpg",
          "images/david-annie/olleh-7.jpg",
          "images/david-annie/olleh-8.jpg"
        ],
        address: "4344 Convoy St, Ste I, San Diego, CA 92111",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8177,-117.1539",
        appleMapsUrl: "https://maps.apple.com/?daddr=32.8177,-117.1539&dirflg=d",
        parkingOptions: [
          {
            type: "free",
            recommended: true,
            name: "Strip Mall Lot (Convoy)",
            address: "4344 Convoy St lot",
            cost: "Free",
            tip: "The strip mall lot right in front of Olleh is free. If it's full, park by the residential area 2 minutes away on foot.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8177,-117.1539",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.8177,-117.1539&dirflg=d"
          },
          {
            type: "free",
            recommended: false,
            name: "Residential Side Streets",
            address: "Side streets off Convoy",
            cost: "Free",
            tip: "2 to 3 minute walk from the restaurant. Always available.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8185,-117.1545",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.8185,-117.1545&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.8177&dropoff[longitude]=-117.1539&dropoff[nickname]=Olleh%20Korean%20BBQ",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.8177&destination[longitude]=-117.1539"
        },
        cost: "$60–70 for two",
        dressCode: "Casual, you'll be grilling at your table so keep it comfortable",
        reservation: {
          status: "suggested",
          name: "David",
          partySize: 2,
          time: "6:15 PM",
          notes: "Call ahead to reserve, especially for weekend evenings. (858) 673-6350"
        },
        reviews: {
          google: { stars: 4.4, count: 903 },
          yelp: { stars: 4.3, count: 570 }
        },
        happyHour: null,
        menuUrl: "https://olleh-convoy-korean-bbq.res-menu.net/menu",
        reservationUrl: null,
        phone: "+18586736350",
        foodRecs: {
          david: [
            { name: "Galbi (Short Rib)", desc: "David, this is the star of the menu. Marinated beef short rib that's tender and packed with flavor. One of the most ordered items and for very good reason." },
            { name: "Spicy Pork Belly", desc: "Bold, savory, and perfectly spiced. This is going to hit all the flavors you love. Grill it until it gets a little crispy on the edges." },
            { name: "Rib Eye", desc: "Premium cut that melts on the grill. Pair it with their sesame oil and salt dipping sauce for the full experience." }
          ],
          annie: [
            { name: "Garlic Chicken", desc: "Annie, this one is light, flavorful, and not greasy at all. The garlic marinade gives it just the right amount of punch without being heavy." },
            { name: "Shrimp", desc: "Fresh and clean flavors. Perfect for a smaller appetite because you can grill just a few at a time and enjoy them with the banchan." },
            { name: "Volcano Pork Belly", desc: "A little spicy, a lot delicious. The portions you grill yourself are small so you can try it without committing to a full plate." }
          ],
          shared: [
            { name: "Kimchi Fried Rice ($5)", desc: "Ask them to make this on your grill at the end of the meal with the leftover meat juices. It's the perfect way to close out dinner and it's only five bucks." }
          ]
        },
        tips: [
          "The premium menu at $30 per person is the best value, it includes galbi, rib eye, and all banchan",
          "Call ahead for a reservation on weekend evenings to avoid the 40+ minute wait",
          "Ask for the kimchi fried rice to be made on your grill at the end, it's a hidden move"
        ],
        swapVenue: {
          name: "Gen Korean BBQ House",
          desc: "Larger spot with similar AYCE format. 10 min drive in Mission Valley. Great atmosphere.",
          googleMapsUrl: "https://maps.google.com/?q=Gen+Korean+BBQ+House+San+Diego"
        }
      },
      {
        order: 3,
        time: "7:35 PM",
        endTime: "8:15 PM",
        name: "Boba Bar and Desserts",
        type: "Dessert",
        location: "Convoy St, San Diego",
        tagline: "Puffles, boba, and frozen treats that are genuinely the most photogenic desserts on Convoy",
        description: "We saved the sweetest stop for last and honestly this place is going to make your night. <a href=\"https://www.google.com/maps/search/?api=1&query=Boba+Bar+and+Desserts+4619+Convoy+St+San+Diego\" target=\"_blank\">Boba Bar</a> is famous for their puffles, which are these egg waffle cones filled with ice cream and topped with all kinds of fun toppings. Annie, this is your moment. The portions look big but the waffle is light and airy so it's perfect for a smaller appetite. They also have incredible boba milk tea that's freshly brewed. It's a 3 minute walk from Olleh so you don't even have to move the car. Just stroll over and end the night on the sweetest note possible.",
        image: "images/david-annie/boba-1.jpg",
        images: [
          "images/david-annie/boba-1.jpg",
          "images/david-annie/boba-2.jpg",
          "images/david-annie/boba-3.jpg",
          "images/david-annie/boba-4.jpg",
          "images/david-annie/boba-5.jpg",
          "images/david-annie/boba-6.jpg",
          "images/david-annie/boba-7.jpg"
        ],
        address: "4619 Convoy St, San Diego, CA 92111",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8194,-117.1557",
        appleMapsUrl: "https://maps.apple.com/?daddr=32.8194,-117.1557&dirflg=d",
        parkingOptions: [
          {
            type: "free",
            recommended: true,
            name: "Same Convoy Lot",
            address: "Strip mall lot on Convoy St",
            cost: "Free",
            tip: "3 minute walk from Olleh. Same Convoy strip mall parking, no need to move the car.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8194,-117.1557",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.8194,-117.1557&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.8194&dropoff[longitude]=-117.1557&dropoff[nickname]=Boba%20Bar%20and%20Desserts",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.8194&destination[longitude]=-117.1557"
        },
        cost: "$15–20 for two",
        dressCode: null,
        reservation: null,
        reviews: {
          google: { stars: 4.5, count: 1800 },
          yelp: { stars: 4.3, count: 1149 }
        },
        happyHour: null,
        menuUrl: "https://www.bobabarsd.com",
        reservationUrl: null,
        phone: null,
        foodRecs: null,
        tips: [
          "The puffles are their signature, get one with ice cream and toppings to share",
          "Their freshly brewed boba milk tea is some of the best on Convoy",
          "It's a 3 minute walk from Olleh so just leave the car and stroll over"
        ],
        swapVenue: {
          name: "Sweet Vibe",
          desc: "Amazing Thai tea and curated desserts. 5 min walk. Great for a more chill ending.",
          googleMapsUrl: "https://maps.google.com/?q=Sweet+Vibe+San+Diego"
        }
      }
    ],

    travelTimes: [
      { from: 1, to: 2, duration: "15 min drive", mode: "car" },
      { from: 2, to: 3, duration: "3 min walk", mode: "walk" }
    ],

    budget: {
      items: [
        { label: "Dinner (Olleh Korean BBQ)", cost: "$60–70" },
        { label: "Dessert (Boba Bar)", cost: "$15–20" },
        { label: "Parking", cost: "Free" }
      ],
      total: "$75–90",
      tip: "The premium menu at Olleh is $30 per person and includes everything. Parking is free at both Sunset Cliffs and on Convoy so you won't spend a dime on it. If you want to save a bit more, share a puffle at Boba Bar instead of getting two."
    },

    checklist: [
      { id: "chk-call-olleh", text: "Call Olleh to reserve for 6:15 PM, 2 guests: (858) 673-6350", bold: "Olleh" },
      { id: "chk-leave", text: "Leave home by 4:45 PM to arrive at Sunset Cliffs by 5:15 PM with parking buffer", bold: "4:45 PM" }
    ],

    calendar: {
      title: "DateFlo: Cliffside Seoul (Sunset Cliffs + Convoy)",
      date: "20260328",
      startTime: "T001500Z",
      endTime: "T031500Z",
      location: "San Diego, CA",
      description: "Plan A: Cliffside Seoul\n\n5:15 PM Sunset Cliffs Walk\n6:15 PM Korean BBQ at Olleh\n7:35 PM Dessert at Boba Bar\n\nFull details: dateflo.com/david-and-annie"
    },

    logistics: {
      whatToWear: "Keep it casual and comfy. Walking shoes for the cliffs and a light layer for after sunset when the breeze picks up. Dinner is casual so no need to change.",
      transportation: "Drive from home to Sunset Cliffs, then one quick 15 minute drive to Convoy for the rest of the night. Parking is free at both spots so you won't spend a dime on it."
    }
  },

  // ════════════════════════════════════
  // PLAN B: BAY VIEWS & BROTH
  // ════════════════════════════════════
  {
    id: "bay-views-broth",
    couple: "David & Annie",
    coupleId: "david-2026",
    partner1: "David",
    partner2: "Annie",
    planName: "Bay Views & Broth",
    planEmoji: "🍜",
    planVibe: "Panoramic bay views from the best lookout in the city, award winning Vietnamese on Convoy, and puffle heaven for dessert",
    greeting: "We designed this one to be the perfect mix of everything you two love. You're starting at the best panoramic viewpoint in San Diego where you can see the entire bay, the skyline, and the ocean all at once. Then you're heading to Convoy for Vietnamese food from a restaurant that's won Best Vietnamese in San Diego multiple years running, and finishing with the most talked about dessert spot on the street. The views, the food, the vibes. This one has it all.",
    occasion: "Date Night",
    date: "Saturday, March 28, 2026",
    dateShort: "Sat, March 28",
    startTime: "5:00 PM",
    endTime: "7:45 PM",
    city: "San Diego, CA",
    area: "Pacific Beach + Convoy",
    coverImage: "images/david-annie/kate-sessions-1.jpg",
    route: "Home → Kate Sessions Park → Phuong Trang → Boba Bar → Home",

    preferences: {
      david: {
        dietary: "No restrictions, open to anything",
        flavors: "Korean BBQ, bold flavors, Asian and American",
        drinks: "Open to anything",
        avoid: "Nothing specific"
      },
      annie: {
        dietary: "No allergies, small appetite",
        flavors: "Vietnamese and Korean food, mainly Asian",
        drinks: "Open to anything",
        avoid: "Anything too greasy"
      }
    },

    weather: {
      high: "68°F",
      low: "56°F",
      conditions: "Mostly sunny, upper 60s cooling to mid 50s",
      sunset: "7:10 PM",
      rainChance: "10%",
      note: "Light layer for the park, it's breezy on the hilltop."
    },

    stops: [
      {
        order: 1,
        time: "5:00 PM",
        endTime: "5:45 PM",
        name: "Kate Sessions Park",
        type: "Walk",
        location: "Pacific Beach, San Diego",
        tagline: "The panoramic viewpoint where you can see the entire bay, the skyline, and the ocean all at once",
        description: "This is hands down the best viewpoint in San Diego and most people don't even know about it. <a href=\"https://www.google.com/maps/search/?api=1&query=Kate+Sessions+Park+San+Diego\" target=\"_blank\">Kate Sessions Park</a> sits on a hill in Pacific Beach with sweeping views of Mission Bay, downtown San Diego, Point Loma, and the Pacific Ocean. The grassy hillside is perfect for a casual stroll and the photo opportunities here are genuinely incredible. David and Annie, you said you love great views and scenery for pictures and this is exactly that. The golden hour light at this time makes everything look absolutely stunning. Walk along the upper path for the best angles and take your time soaking it all in.",
        image: "images/david-annie/kate-sessions-1.jpg",
        images: [
          "images/david-annie/kate-sessions-1.jpg",
          "images/david-annie/kate-sessions-2.jpg",
          "images/david-annie/kate-sessions-3.jpg",
          "images/david-annie/kate-sessions-4.jpg",
          "images/david-annie/kate-sessions-5.jpg"
        ],
        address: "5115 Soledad Rd, San Diego, CA 92109",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8062,-117.2352",
        appleMapsUrl: "https://maps.apple.com/?daddr=32.8062,-117.2352&dirflg=d",
        parkingOptions: [
          {
            type: "free",
            recommended: true,
            name: "Kate Sessions Lot",
            address: "5115 Soledad Rd, San Diego",
            cost: "Free",
            tip: "Free lot right at the park entrance. Arrive by 4:45 PM on weekends for the best spots.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8062,-117.2352",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.8062,-117.2352&dirflg=d"
          },
          {
            type: "free",
            recommended: false,
            name: "Soledad Rd Street Parking",
            address: "Soledad Rd near the park",
            cost: "Free",
            tip: "Street parking along Soledad Rd if the lot is full. Short walk to the viewpoint.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8068,-117.2348",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.8068,-117.2348&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.8062&dropoff[longitude]=-117.2352&dropoff[nickname]=Kate%20Sessions%20Park",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.8062&destination[longitude]=-117.2352"
        },
        cost: "Free",
        dressCode: "Comfy shoes, the hillside is grassy and easy to walk",
        reservation: null,
        reviews: {
          google: { stars: 4.7, count: 8500 },
          yelp: { stars: 4.5, count: 650 }
        },
        happyHour: null,
        menuUrl: null,
        reservationUrl: null,
        phone: null,
        foodRecs: null,
        tips: [
          "Walk to the upper path for the best panoramic views of the bay and skyline",
          "Golden hour light makes this the perfect photo spot",
          "The park is spacious and never feels crowded even on weekends"
        ],
        swapVenue: {
          name: "Mount Soledad",
          desc: "Even more dramatic panoramic views from the top of La Jolla. 15 min drive. Less walking, more driving.",
          googleMapsUrl: "https://maps.google.com/?q=Mount+Soledad+San+Diego"
        }
      },
      {
        order: 2,
        time: "6:00 PM",
        endTime: "7:15 PM",
        name: "Phuong Trang",
        type: "Dinner",
        location: "Convoy St, San Diego",
        tagline: "The award winning Vietnamese restaurant that San Diego keeps coming back to for over 30 years",
        description: "Annie, this one has your name written all over it. <a href=\"https://www.google.com/maps/search/?api=1&query=Phuong+Trang+4170+Convoy+St+San+Diego\" target=\"_blank\">Phuong Trang</a> has been serving some of the best Vietnamese food in San Diego since 1988 and they've won Best Vietnamese from San Diego Magazine multiple years running. Everything is made fresh with no MSG and the menu has over 200 dishes so you'll both find exactly what you're craving. The portions are generous and incredibly affordable. David, they have some serious bold flavors here that go way beyond basic pho. Annie, the lighter dishes like the rice paper wraps and broken rice plates are perfect for a smaller appetite and nothing on the menu is greasy. This is comfort food done right.",
        image: "images/david-annie/phuong-trang-1.jpg",
        images: [
          "images/david-annie/phuong-trang-1.jpg",
          "images/david-annie/phuong-trang-2.jpg",
          "images/david-annie/phuong-trang-3.jpg",
          "images/david-annie/phuong-trang-4.jpg",
          "images/david-annie/phuong-trang-5.jpg",
          "images/david-annie/phuong-trang-6.jpg",
          "images/david-annie/phuong-trang-7.jpg"
        ],
        address: "4170 Convoy St, San Diego, CA 92111",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8187,-117.1544",
        appleMapsUrl: "https://maps.apple.com/?daddr=32.8187,-117.1544&dirflg=d",
        parkingOptions: [
          {
            type: "free",
            recommended: true,
            name: "Phuong Trang Lot",
            address: "4170 Convoy St lot",
            cost: "Free",
            tip: "There's a strip mall lot right in front. It fills up fast on weekend evenings so arrive right at 6:00 PM.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8187,-117.1544",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.8187,-117.1544&dirflg=d"
          },
          {
            type: "free",
            recommended: false,
            name: "Nearby Convoy Lots",
            address: "Adjacent strip mall lots",
            cost: "Free",
            tip: "The neighboring strip mall lots are all free and just a 1 minute walk.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8190,-117.1540",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.8190,-117.1540&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.8187&dropoff[longitude]=-117.1544&dropoff[nickname]=Phuong%20Trang",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.8187&destination[longitude]=-117.1544"
        },
        cost: "$30–40 for two",
        dressCode: "Casual, it's a relaxed neighborhood spot",
        reservation: null,
        reviews: {
          google: { stars: 4.3, count: 4200 },
          yelp: { stars: 4.0, count: 2578 }
        },
        happyHour: null,
        menuUrl: "https://phuongtrangrestaurant.com/menus",
        reservationUrl: null,
        phone: "+18585656750",
        foodRecs: {
          david: [
            { name: "Garlic Butter Chicken Wings", desc: "David, start with these. They're a must have appetizer and the garlic butter sauce is genuinely addicting. Ask for the lemon and salt dipping sauce on the side for an extra kick." },
            { name: "Bo 7 Mon (7 Course Beef)", desc: "If you want to go all in, this is the move. Seven different preparations of beef that take you on a journey. It's bold, it's fun, and it's one of their most talked about dishes." },
            { name: "Bun Bo Hue (Spicy Beef Noodle Soup)", desc: "A rich and spicy broth with tender beef that's got real depth. This is the kind of bold flavor that you can't get from regular pho." }
          ],
          annie: [
            { name: "Goi Cuon (Fresh Spring Rolls)", desc: "Annie, these are light, fresh, and perfect. Rice paper wraps with shrimp, herbs, and vermicelli dipped in peanut sauce. Exactly the kind of clean flavors you love." },
            { name: "Com Tam (Broken Rice with Grilled Pork)", desc: "A classic Vietnamese comfort dish. The grilled pork is savory without being greasy and the broken rice soaks up all the flavor. Perfect portion for a lighter appetite." },
            { name: "Pho Ga (Chicken Pho)", desc: "If you're in the mood for something warm and comforting, this chicken pho has a clear, clean broth that's gentle and satisfying. Light but flavorful." }
          ],
          shared: [
            { name: "Ca Kho To (Caramelized Fish in Clay Pot)", desc: "This is their famous dish and it's worth sharing. Catfish braised in a sweet and savory caramel sauce served in a traditional clay pot. Unique and memorable." }
          ]
        },
        tips: [
          "No reservations needed, just walk in. But arrive by 6:00 PM to avoid the dinner rush",
          "The garlic butter chicken wings are a must, everyone orders them for a reason",
          "They're closed Monday and Tuesday, so plan accordingly"
        ],
        swapVenue: {
          name: "Shank & Bone",
          desc: "Modern Vietnamese in North Park. Trendier atmosphere, slightly higher prices. 15 min drive.",
          googleMapsUrl: "https://maps.google.com/?q=Shank+and+Bone+San+Diego"
        }
      },
      {
        order: 3,
        time: "7:20 PM",
        endTime: "7:45 PM",
        name: "Boba Bar and Desserts",
        type: "Dessert",
        location: "Convoy St, San Diego",
        tagline: "The puffle and boba spot with over a thousand five star reviews that everyone on Convoy is obsessed with",
        description: "Perfect way to end the night. <a href=\"https://www.google.com/maps/search/?api=1&query=Boba+Bar+and+Desserts+4619+Convoy+St+San+Diego\" target=\"_blank\">Boba Bar</a> is right down the street from Phuong Trang so you can walk over in about 5 minutes. They're famous for their puffles, these gorgeous egg waffle cones loaded with ice cream and toppings that look like they were made for Instagram. Annie, the waffle is light and airy so it won't weigh you down after dinner. David, try their freshly brewed boba milk tea, it's some of the best on Convoy. Grab your treats and take a little stroll together to close out the night.",
        image: "images/david-annie/boba-1.jpg",
        images: [
          "images/david-annie/boba-1.jpg",
          "images/david-annie/boba-2.jpg",
          "images/david-annie/boba-3.jpg",
          "images/david-annie/boba-4.jpg",
          "images/david-annie/boba-5.jpg",
          "images/david-annie/boba-6.jpg",
          "images/david-annie/boba-7.jpg"
        ],
        address: "4619 Convoy St, San Diego, CA 92111",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8194,-117.1557",
        appleMapsUrl: "https://maps.apple.com/?daddr=32.8194,-117.1557&dirflg=d",
        parkingOptions: [
          {
            type: "free",
            recommended: true,
            name: "Same Convoy Lot",
            address: "Strip mall lot on Convoy St",
            cost: "Free",
            tip: "5 minute walk from Phuong Trang. Same Convoy strip mall parking.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8194,-117.1557",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.8194,-117.1557&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.8194&dropoff[longitude]=-117.1557&dropoff[nickname]=Boba%20Bar%20and%20Desserts",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.8194&destination[longitude]=-117.1557"
        },
        cost: "$15–20 for two",
        dressCode: null,
        reservation: null,
        reviews: {
          google: { stars: 4.5, count: 1800 },
          yelp: { stars: 4.3, count: 1149 }
        },
        happyHour: null,
        menuUrl: "https://www.bobabarsd.com",
        reservationUrl: null,
        phone: null,
        foodRecs: null,
        tips: [
          "The puffles are their signature item and they're perfect for sharing",
          "Freshly brewed boba milk tea is a must try",
          "It's a short walk from Phuong Trang, no need to drive"
        ],
        swapVenue: {
          name: "Sweet Vibe",
          desc: "Heavenly Green Thai Tea and curated desserts. 5 min walk on Convoy.",
          googleMapsUrl: "https://maps.google.com/?q=Sweet+Vibe+San+Diego"
        }
      }
    ],

    travelTimes: [
      { from: 1, to: 2, duration: "10 min drive", mode: "car" },
      { from: 2, to: 3, duration: "5 min walk", mode: "walk" }
    ],

    budget: {
      items: [
        { label: "Dinner (Phuong Trang)", cost: "$30–40" },
        { label: "Dessert (Boba Bar)", cost: "$15–20" },
        { label: "Parking", cost: "Free" }
      ],
      total: "$45–60",
      tip: "This plan is incredibly affordable. Phuong Trang is one of those rare restaurants where the food quality far exceeds the price. Parking is free everywhere tonight. You'll come in well under budget with room to spare."
    },

    checklist: [
      { id: "chk-leave-b", text: "Leave home by 4:30 PM to arrive at Kate Sessions by 5:00 PM", bold: "4:30 PM" },
      { id: "chk-pt-hours", text: "Confirm Phuong Trang is open (closed Mon and Tue, open Wed through Sun 11 AM to 8 PM)", bold: "Phuong Trang" }
    ],

    calendar: {
      title: "DateFlo: Bay Views & Broth (Kate Sessions + Convoy)",
      date: "20260328",
      startTime: "T000000Z",
      endTime: "T024500Z",
      location: "San Diego, CA",
      description: "Plan B: Bay Views & Broth\n\n5:00 PM Kate Sessions Park\n6:00 PM Dinner at Phuong Trang\n7:20 PM Dessert at Boba Bar\n\nFull details: dateflo.com/david-and-annie"
    },

    logistics: {
      whatToWear: "Casual and comfy all night. Walking shoes for the park and you're set. The restaurant and dessert spot are both casual so no need to dress up.",
      transportation: "Drive to Kate Sessions Park first, then one quick 10 minute drive to Convoy for dinner and dessert. Everything on Convoy is walking distance once you park. All parking is free tonight."
    }
  }
];

// Default to Plan A, designs can switch via window.switchPlan(index)
window.PLAN = window.PLAN_ALL[0];
window.switchPlan = function(index) {
  window.PLAN = window.PLAN_ALL[index];
  if (window._renderPlan) window._renderPlan();
};
