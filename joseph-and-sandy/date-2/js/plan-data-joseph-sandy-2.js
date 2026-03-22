// ═══════════════════════════════════════════════════
// DateFlo | Joseph & Sandy | Date #2: Old Town After Dark / Pilsen Date Night
// Saturday, March 22, 2026 | 7:00 PM – 11:00 PM
// Real venues, real data, real everything
// Supports Plan A (Old Town After Dark) and Plan B (Pilsen Date Night)
// Full swap options with complete venue objects
// ═══════════════════════════════════════════════════

window.PLAN_ALL = [
  // ════════════════════════════════════
  // PLAN A: OLD TOWN AFTER DARK
  // ════════════════════════════════════
  {
    id: "old-town-after-dark",
    couple: "Joseph & Sandy",
    coupleId: "joseph-sandy-2026",
    partner1: "Joseph",
    partner2: "Sandy",
    planName: "Old Town After Dark",
    planEmoji: "🌙",
    planVibe: "A cozy, romantic night through Old Town and Wicker Park with Michelin recognized Asian American cuisine, legendary improv comedy, and warm cookies at midnight.",
    greeting: "Joseph and Sandy, tonight is all about slowing down and soaking in some of Chicago's best after dark energy. You're starting at one of the most romantic restaurants in the city where a Michelin recognized chef is doing incredible things with Asian American flavors, then walking over to the place where every comedian you love got their start for a night of improv that's going to have you both crying laughing, and finishing with warm cookies straight out of the oven because that's the only way to end a night this good. Everything is walkable and the whole vibe is cozy, intimate, and genuinely fun.",
    occasion: "Date Night",
    date: "Saturday, March 22, 2026",
    dateShort: "Sat, March 22",
    startTime: "7:00 PM",
    endTime: "11:00 PM",
    city: "Chicago, IL",
    area: "Old Town / Wicker Park",
    coverImage: "images/joseph-sandy/mott-st-1.jpg",
    route: "Home → Mott St → Second City → Insomnia Cookies → Home",

    preferences: {
      joseph: {
        dietary: "No allergies",
        flavors: "Steak, tacos, Mexican, Japanese, Brazilian",
        drinks: "Open",
        avoid: "Italian, French, Scandinavian"
      },
      sandy: {
        dietary: "No allergies",
        flavors: "Anything with meat",
        drinks: "Open",
        avoid: "American yogurt"
      }
    },

    weather: {
      high: "48°F",
      low: "32°F",
      conditions: "Cooler than Friday, clear skies expected. Bundle up.",
      sunset: "7:09 PM",
      rainChance: "5%",
      note: "It's going to be chilly tonight, high of 48 and dropping into the 30s by the time you're walking to Second City. Bring warm layers and a good jacket."
    },

    stops: [
      // ── STOP 1: MOTT ST ──
      {
        order: 1,
        time: "7:00 PM",
        endTime: "8:30 PM",
        name: "Mott St",
        type: "Dinner",
        location: "Wicker Park, Chicago",
        tagline: "Michelin Bib Gourmand Asian American restaurant with some of the most creative shared plates in Chicago",
        description: "This is one of those spots where you walk in and immediately know you're in for something special. <a href=\"https://www.google.com/maps/search/?api=1&query=Mott+St+1401+N+Ashland+Ave+Chicago\" target=\"_blank\">Mott St</a> is a Michelin recognized Asian American restaurant where Chef Edward Kim takes flavors from Korean night markets and mixes them with Chicago ingredients in the most beautiful way. Joseph the fire chicken with rice cakes has this incredible sweet and spicy glaze that will blow your mind and Sandy the char siu pork belly is fall apart tender and packed with flavor. Order four or five dishes to share between you two and take your time with it. The whole vibe is dim, cozy, and genuinely romantic which is exactly what you want for tonight.",
        image: "images/joseph-sandy/mott-st-1.jpg",
        images: [
          "images/joseph-sandy/mott-st-1.jpg",
          "images/joseph-sandy/mott-st-2.jpg",
          "images/joseph-sandy/mott-st-3.jpg",
          "images/joseph-sandy/mott-st-4.jpg",
          "images/joseph-sandy/mott-st-5.jpg",
          "images/joseph-sandy/mott-st-6.jpg"
        ],
        address: "1401 N Ashland Ave, Chicago, IL 60622",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9069,-87.6681",
        appleMapsUrl: "https://maps.apple.com/?daddr=41.9069,-87.6681&dirflg=d",
        parkingOptions: [
          {
            type: "street",
            recommended: true,
            name: "Street Parking on Ashland Ave",
            address: "Ashland Ave near Mott St, Chicago",
            cost: "Free after 6 PM",
            tip: "Metered spots on Ashland and side streets are free after 6 PM on Saturdays. Usually plenty of availability in the evening.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9069,-87.6681",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9069,-87.6681&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9069&dropoff[longitude]=-87.6681&dropoff[nickname]=Mott%20St",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9069&destination[longitude]=-87.6681"
        },
        cost: "$40 to $60 for two sharing 4 to 5 dishes",
        dressCode: "Smart casual. It's a nice restaurant but nothing too formal. Wear something you feel good in.",
        reservation: {
          time: "7:00 PM",
          partySize: 2,
          notes: "Reservations recommended on Saturday nights. Book through OpenTable. Walk-ins welcome but waits can be long on weekends."
        },
        reviews: {
          google: { stars: 4.8, count: 1326 },
          yelp: { stars: 4.5, count: 1116 }
        },
        happyHour: null,
        menuUrl: "https://www.myvenuemenu.com/restaurants/mott-st",
        reservationUrl: "https://www.opentable.com/r/mott-st-chicago",
        phone: "(773) 687-9977",
        foodRecs: {
          joseph: [
            { name: "Fire Chicken with Rice Cakes", price: "$24", note: "Sweet and spicy glaze over crispy chicken with chewy rice cakes. Joseph this is the dish everyone talks about and it absolutely lives up to the hype." },
            { name: "Mott Burger", price: "$18", note: "Only available at the bar after 7 PM. It's a secret menu legend and worth asking about." },
            { name: "Crab Fried Rice", price: "$18", note: "Rich, flavorful, and the kind of thing you'll be thinking about for days." }
          ],
          sandy: [
            { name: "Char Siu Pork Belly", price: "$22", note: "Fall apart tender with a sweet glaze that caramelizes on the edges. Sandy this is going to be your favorite." },
            { name: "Everything Wings", price: "$18", note: "Crispy wings with a seasoning blend that hits every flavor note." },
            { name: "Mentaiko Kimchi Udon", price: "$19", note: "Spicy, creamy, and packed with umami. Perfect for sharing." }
          ]
        },
        tips: [
          "Book on OpenTable for Saturday night, this place fills up fast",
          "Order 4 to 5 dishes to share, that's the best way to experience the menu",
          "Ask about the Mott Burger at the bar after 7 PM, it's a hidden gem",
          "The dim lighting makes it genuinely romantic, sit close together"
        ],
        swapOptions: [
          // ── Alt 1: Big Star ──
          {
            name: "Big Star",
            type: "Dinner",
            location: "Wicker Park, Chicago",
            tagline: "Tacos, whiskey, and a honky tonk vibe in the heart of Wicker Park",
            description: "If you want something more casual and lively, <a href=\"https://www.google.com/maps/search/?api=1&query=Big+Star+1531+N+Damen+Ave+Chicago\" target=\"_blank\">Big Star</a> in Wicker Park is one of the best taco spots in Chicago with a whiskey bar that takes things to the next level. Joseph the pork belly tacos are incredible and Sandy the fish tacos are fresh and perfectly seasoned. The vibe is a cool mix of honky tonk and hipster with great music playing and a patio that's perfect when it's not too cold. It's loud, it's fun, and the margaritas are genuinely some of the best in the city.",
            image: "images/joseph-sandy/big-star-1.jpg",
            images: [
              "images/joseph-sandy/big-star-1.jpg",
              "images/joseph-sandy/big-star-2.jpg",
              "images/joseph-sandy/big-star-3.jpg",
              "images/joseph-sandy/big-star-4.jpg",
              "images/joseph-sandy/big-star-5.jpg",
              "images/joseph-sandy/big-star-6.jpg"
            ],
            address: "1531 N Damen Ave, Chicago, IL 60622",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9094,-87.6772",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9094,-87.6772&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking on Damen Ave",
                address: "Damen Ave near Big Star, Chicago",
                cost: "Free after 6 PM",
                tip: "Free metered spots after 6 PM on side streets off Damen.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9094,-87.6772",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.9094,-87.6772&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9094&dropoff[longitude]=-87.6772&dropoff[nickname]=Big%20Star",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9094&destination[longitude]=-87.6772"
            },
            cost: "$25 to $40 for two",
            dressCode: "Casual. Jeans and a jacket are perfect here.",
            reservation: null,
            reviews: {
              google: { stars: 4.4, count: 4500 },
              yelp: { stars: 4.0, count: 3200 }
            },
            happyHour: null,
            menuUrl: "https://www.bigstarchicago.com/menus/",
            reservationUrl: null,
            phone: "(773) 235-4039",
            foodRecs: {
              joseph: [
                { name: "Pork Belly Tacos", price: "$6", note: "Crispy and tender with a tangy salsa verde. Joseph you're going to love these." },
                { name: "Whiskey Flight", price: "$18", note: "They have an incredible bourbon and whiskey selection. Try a flight." }
              ],
              sandy: [
                { name: "Fish Tacos", price: "$6", note: "Fresh, light, and perfectly seasoned with a lime crema." },
                { name: "Margarita", price: "$14", note: "Their margaritas are made with fresh squeezed lime and are some of the best in the city." }
              ]
            },
            tips: [
              "No reservations, first come first served",
              "Saturday nights get busy after 8 PM so arriving at 7 is smart",
              "The whiskey selection is massive, ask the bartender for recommendations"
            ]
          },
          // ── Alt 2: Taqueria Chingon ──
          {
            name: "Taqueria Chingon",
            type: "Dinner",
            location: "West Loop, Chicago",
            tagline: "Michelin Bib Gourmand Mexican with bold flavors and a lively atmosphere",
            description: "If you want Michelin recognized Mexican food in a vibrant setting, <a href=\"https://www.google.com/maps/search/?api=1&query=Taqueria+Chingon+932+W+Randolph+St+Chicago\" target=\"_blank\">Taqueria Chingon</a> in the West Loop is exactly where you need to be. Joseph the birria tacos are out of this world with a rich consomme for dipping and Sandy the carne asada is cooked over an open flame and served with fresh tortillas. The whole restaurant has this electric energy with colorful decor and music that makes you feel like you're at a celebration. This is the kind of place where you leave feeling genuinely happy.",
            image: "images/joseph-sandy/taqueria-chingon-1.jpg",
            images: [
              "images/joseph-sandy/taqueria-chingon-1.jpg",
              "images/joseph-sandy/taqueria-chingon-2.jpg",
              "images/joseph-sandy/taqueria-chingon-3.jpg",
              "images/joseph-sandy/taqueria-chingon-4.jpg",
              "images/joseph-sandy/taqueria-chingon-5.jpg",
              "images/joseph-sandy/taqueria-chingon-6.jpg"
            ],
            address: "932 W Randolph St, Chicago, IL 60607",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8841,-87.6520",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8841,-87.6520&dirflg=d",
            parkingOptions: [
              {
                type: "paid",
                recommended: true,
                name: "West Loop Parking",
                address: "Randolph St near Sangamon, Chicago",
                cost: "$15 to $25 evening",
                tip: "There are a few garages on Randolph in the West Loop. Evening rates are reasonable.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8841,-87.6520",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.8841,-87.6520&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8841&dropoff[longitude]=-87.6520&dropoff[nickname]=Taqueria%20Chingon",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8841&destination[longitude]=-87.6520"
            },
            cost: "$30 to $50 for two",
            dressCode: "Smart casual. The West Loop crowd dresses up a little.",
            reservation: {
              time: "7:00 PM",
              partySize: 2,
              notes: "Reservations recommended on weekends. Book through Resy."
            },
            reviews: {
              google: { stars: 4.5, count: 2800 },
              yelp: { stars: 4.5, count: 950 }
            },
            happyHour: null,
            menuUrl: "https://www.taqueriachingon.com/menu",
            reservationUrl: "https://resy.com/cities/chi/taqueria-chingon",
            phone: "(312) 578-5765",
            foodRecs: {
              joseph: [
                { name: "Birria Tacos", price: "$16", note: "Slow braised beef in crispy tortillas with consomme for dipping. Joseph these are incredible." },
                { name: "Elote", price: "$9", note: "Grilled corn with cotija cheese, lime, and tajin. A perfect starter." }
              ],
              sandy: [
                { name: "Carne Asada", price: "$22", note: "Open flame grilled with fresh tortillas and all the fixings." },
                { name: "Guacamole Fresco", price: "$13", note: "Made tableside with avocado, lime, and fresh cilantro." }
              ]
            },
            tips: [
              "Book on Resy for Saturday night",
              "The birria tacos sell out sometimes so order them first",
              "Their mezcal cocktails are worth trying"
            ]
          },
          // ── Alt 3: Superkhana ──
          {
            name: "Superkhana International",
            type: "Dinner",
            location: "Logan Square, Chicago",
            tagline: "Boundary pushing Indian inspired shared plates in a vibrant Logan Square setting",
            description: "For something completely different and genuinely exciting, <a href=\"https://www.google.com/maps/search/?api=1&query=Superkhana+International+3059+W+Diversey+Ave+Chicago\" target=\"_blank\">Superkhana International</a> in Logan Square is doing Indian inspired food that doesn't follow any rules. Joseph the lamb keema sloppy joe is unlike anything you've had before and Sandy the paneer pakora is crispy on the outside and perfectly spiced inside. The restaurant is colorful and fun with a menu that reads like a love letter to Indian street food mixed with global influences. It's one of the most exciting restaurants in Chicago right now and sharing plates here is the best way to do it.",
            image: "images/joseph-sandy/superkhana-1.jpg",
            images: [
              "images/joseph-sandy/superkhana-1.jpg",
              "images/joseph-sandy/superkhana-2.jpg",
              "images/joseph-sandy/superkhana-3.jpg",
              "images/joseph-sandy/superkhana-4.jpg",
              "images/joseph-sandy/superkhana-5.jpg",
              "images/joseph-sandy/superkhana-6.jpg"
            ],
            address: "3059 W Diversey Ave, Chicago, IL 60647",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9321,-87.7069",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9321,-87.7069&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking on Diversey Ave",
                address: "Diversey Ave near Superkhana, Chicago",
                cost: "Free",
                tip: "Free street parking on Diversey and side streets. Logan Square is easy to park in on weekends.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9321,-87.7069",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.9321,-87.7069&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9321&dropoff[longitude]=-87.7069&dropoff[nickname]=Superkhana%20International",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9321&destination[longitude]=-87.7069"
            },
            cost: "$35 to $55 for two",
            dressCode: "Casual. Logan Square vibes, wear whatever feels comfortable.",
            reservation: {
              time: "7:00 PM",
              partySize: 2,
              notes: "Reservations recommended. Book through Resy."
            },
            reviews: {
              google: { stars: 4.6, count: 1200 },
              yelp: { stars: 4.5, count: 600 }
            },
            happyHour: null,
            menuUrl: "https://www.superkhanainternational.com/menu",
            reservationUrl: "https://resy.com/cities/chi/superkhana-international",
            phone: "(773) 661-8860",
            foodRecs: {
              joseph: [
                { name: "Lamb Keema Sloppy Joe", price: "$17", note: "Spiced lamb on a buttery bun. Joseph this is the kind of thing you didn't know you needed." },
                { name: "Chicken Tikka", price: "$19", note: "Perfectly spiced and charred with a cooling raita on the side." }
              ],
              sandy: [
                { name: "Paneer Pakora", price: "$14", note: "Crispy fried paneer with a spiced batter. Sandy these are addictive." },
                { name: "Garlic Naan", price: "$6", note: "Warm, buttery, and perfect for scooping up everything on the table." }
              ]
            },
            tips: [
              "Order family style, everything is meant to be shared",
              "Their cocktail menu is creative and worth exploring",
              "Save room for dessert if they have the gulab jamun on the menu"
            ]
          }
        ]
      },

      // ── STOP 2: SECOND CITY ──
      {
        order: 2,
        time: "9:00 PM",
        endTime: "10:30 PM",
        name: "Second City",
        type: "Entertainment",
        location: "Old Town, Chicago",
        tagline: "The legendary improv comedy club where Tina Fey and Steve Carell got their start",
        description: "After dinner you're walking over to the place where Tina Fey, Steve Carell, and basically every comedian you love got their start. <a href=\"https://www.google.com/maps/search/?api=1&query=Second+City+1616+N+Wells+St+Chicago\" target=\"_blank\">Second City</a> is genuinely one of the most fun date night experiences in Chicago. Joseph and Sandy, you're going to be laughing so hard your faces hurt and there's something about sharing that experience together that just brings you closer. The shows run about 90 minutes and no two performances are ever the same because so much of it is improvised on the spot. Get there a little early to grab drinks at the bar and settle in.",
        image: "images/joseph-sandy/second-city-1.jpg",
        images: [
          "images/joseph-sandy/second-city-1.jpg",
          "images/joseph-sandy/second-city-2.jpg",
          "images/joseph-sandy/second-city-3.jpg",
          "images/joseph-sandy/second-city-4.jpg",
          "images/joseph-sandy/second-city-5.jpg",
          "images/joseph-sandy/second-city-6.jpg"
        ],
        address: "1616 N Wells St, Chicago, IL 60614",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9112,-87.6344",
        appleMapsUrl: "https://maps.apple.com/?daddr=41.9112,-87.6344&dirflg=d",
        parkingOptions: [
          {
            type: "paid",
            recommended: true,
            name: "Pipers Alley Garage",
            address: "1608 N Wells St, Chicago, IL 60614",
            cost: "$12 to $20 evening",
            tip: "Right next door to Second City in the Pipers Alley building. Discount validation sometimes available.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9112,-87.6344",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9112,-87.6344&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9112&dropoff[longitude]=-87.6344&dropoff[nickname]=Second%20City",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9112&destination[longitude]=-87.6344"
        },
        cost: "$50 to $90 for two tickets",
        dressCode: "Smart casual. Anything goes here but you're coming from dinner so you'll look great.",
        reservation: {
          time: "9:00 PM",
          partySize: 2,
          notes: "Buy tickets online ahead of time at secondcity.com. Shows range from $25 to $45 per person. The Ten Dollar Comedy show is a great budget option at $10 per person."
        },
        reviews: {
          google: { stars: 4.5, count: 3500 },
          yelp: { stars: 4.5, count: 1394 }
        },
        happyHour: null,
        menuUrl: null,
        reservationUrl: "https://www.secondcity.com/shows/chicago/",
        phone: "(312) 337-3992",
        foodRecs: {
          joseph: [
            { name: "Cocktail at the Bar", price: "$12 to $16", note: "Get there early and grab a drink at the bar before the show starts. Joseph the old fashioned is solid." }
          ],
          sandy: [
            { name: "Glass of Wine", price: "$10 to $14", note: "Sandy they have a nice wine selection at the bar. Grab something and find your seats." }
          ]
        },
        tips: [
          "Buy tickets online ahead of time at secondcity.com",
          "Arrive 30 minutes early to get good seats and grab drinks",
          "The Ten Dollar Comedy show is a great budget option if you want to keep costs down",
          "No two shows are ever the same because so much is improvised",
          "Shows run about 90 minutes"
        ],
        swapOptions: [
          // ── Alt 1: Zanies Comedy Club ──
          {
            name: "Zanies Comedy Club",
            type: "Entertainment",
            location: "Old Town, Chicago",
            tagline: "Chicago's premier stand up comedy club with nationally touring headliners every weekend",
            description: "If you'd rather see stand up than improv, <a href=\"https://www.google.com/maps/search/?api=1&query=Zanies+Comedy+Club+1548+N+Wells+St+Chicago\" target=\"_blank\">Zanies</a> is literally down the block from Second City and it's been one of the best comedy clubs in the country for decades. Joseph and Sandy, the Saturday night headliner shows are always top tier comics who tour nationally and the intimate room means every seat feels like the best seat. It's the kind of place where you feel like you're getting a private show. Grab a couple drinks and settle in for a night of nonstop laughing.",
            image: "images/joseph-sandy/zanies-1.jpg",
            images: [
              "images/joseph-sandy/zanies-1.jpg",
              "images/joseph-sandy/zanies-2.jpg",
              "images/joseph-sandy/zanies-3.jpg",
              "images/joseph-sandy/zanies-4.jpg",
              "images/joseph-sandy/zanies-5.jpg",
              "images/joseph-sandy/zanies-6.jpg"
            ],
            address: "1548 N Wells St, Chicago, IL 60610",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9101,-87.6344",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9101,-87.6344&dirflg=d",
            parkingOptions: [
              {
                type: "paid",
                recommended: true,
                name: "Pipers Alley Garage",
                address: "1608 N Wells St, Chicago, IL 60614",
                cost: "$12 to $20 evening",
                tip: "Same garage as Second City, a short walk down Wells St.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9112,-87.6344",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.9112,-87.6344&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9101&dropoff[longitude]=-87.6344&dropoff[nickname]=Zanies%20Comedy",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9101&destination[longitude]=-87.6344"
            },
            cost: "$40 to $70 for two tickets plus two item minimum",
            dressCode: "Smart casual. Anything goes.",
            reservation: {
              time: "9:00 PM",
              partySize: 2,
              notes: "Buy tickets online at zanies.com. Two drink or food item minimum per person."
            },
            reviews: {
              google: { stars: 4.5, count: 2200 },
              yelp: { stars: 4.5, count: 900 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: "https://www.zanies.com/chicago/",
            phone: "(312) 337-4027",
            foodRecs: {
              joseph: [
                { name: "Old Fashioned", price: "$14", note: "Two item minimum so grab a cocktail and enjoy the show." }
              ],
              sandy: [
                { name: "Glass of Wine", price: "$12", note: "They have a solid drink menu. Sandy grab something you like and settle in." }
              ]
            },
            tips: [
              "Two drink or food item minimum per person",
              "Buy tickets online, Saturday shows sell out",
              "Arrive 20 minutes early for the best seats"
            ]
          },
          // ── Alt 2: Music Box Theatre ──
          {
            name: "Music Box Theatre",
            type: "Entertainment",
            location: "Lakeview, Chicago",
            tagline: "A stunning 1929 movie palace showing indie films and cult classics under a ceiling of twinkling stars",
            description: "For a completely different kind of date night experience, <a href=\"https://www.google.com/maps/search/?api=1&query=Music+Box+Theatre+3733+N+Southport+Ave+Chicago\" target=\"_blank\">Music Box Theatre</a> is one of the most beautiful movie theaters in the country. Built in 1929, the main auditorium has a ceiling that looks like a night sky with twinkling stars and the side walls are designed to look like an Italian courtyard. Joseph and Sandy, seeing a film here feels like stepping back in time and they always have an incredible selection of indie films, cult classics, and special screenings. It's romantic, it's unique, and it's the kind of place you'll want to come back to.",
            image: "images/joseph-sandy/music-box-1.jpg",
            images: [
              "images/joseph-sandy/music-box-1.jpg",
              "images/joseph-sandy/music-box-2.jpg",
              "images/joseph-sandy/music-box-3.jpg",
              "images/joseph-sandy/music-box-4.jpg",
              "images/joseph-sandy/music-box-5.jpg",
              "images/joseph-sandy/music-box-6.jpg"
            ],
            address: "3733 N Southport Ave, Chicago, IL 60613",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9494,-87.6637",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9494,-87.6637&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking on Southport Ave",
                address: "Southport Ave near Music Box, Chicago",
                cost: "Free",
                tip: "Free street parking on Southport and side streets. Usually easy to find a spot.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9494,-87.6637",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.9494,-87.6637&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9494&dropoff[longitude]=-87.6637&dropoff[nickname]=Music%20Box%20Theatre",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9494&destination[longitude]=-87.6637"
            },
            cost: "$24 to $30 for two tickets",
            dressCode: "Casual. It's a movie theater, just a really beautiful one.",
            reservation: null,
            reviews: {
              google: { stars: 4.7, count: 4800 },
              yelp: { stars: 4.5, count: 1500 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: "https://www.musicboxtheatre.com/",
            phone: "(773) 871-6604",
            foodRecs: {
              joseph: [
                { name: "Popcorn & Soda", price: "$10", note: "Classic movie snacks in a venue that makes them feel special." }
              ],
              sandy: [
                { name: "Candy & Drink", price: "$8", note: "They have a great snack bar and the prices are reasonable for a theater." }
              ]
            },
            tips: [
              "Check their website for the current schedule",
              "The main auditorium is the one you want, the ceiling is incredible",
              "This is a short rideshare from Old Town, about 10 minutes"
            ]
          },
          // ── Alt 3: Chicago Magic Lounge ──
          {
            name: "Chicago Magic Lounge",
            type: "Entertainment",
            location: "Andersonville, Chicago",
            tagline: "A hidden speakeasy style magic club with close up magic that will genuinely blow your mind",
            description: "If you want something truly unique, <a href=\"https://www.google.com/maps/search/?api=1&query=Chicago+Magic+Lounge+5050+N+Clark+St+Chicago\" target=\"_blank\">Chicago Magic Lounge</a> is a speakeasy style magic club where you enter through a secret door disguised as a laundromat. Joseph and Sandy, the close up magic is performed right at your table and it's the kind of thing that leaves you looking at each other like \"how did they just do that\" for the rest of the night. The cocktails are great, the atmosphere is intimate and mysterious, and it's genuinely one of the most memorable date night experiences in Chicago.",
            image: "images/joseph-sandy/magic-lounge-1.jpg",
            images: [
              "images/joseph-sandy/magic-lounge-1.jpg",
              "images/joseph-sandy/magic-lounge-2.jpg",
              "images/joseph-sandy/magic-lounge-3.jpg",
              "images/joseph-sandy/magic-lounge-4.jpg",
              "images/joseph-sandy/magic-lounge-5.jpg",
              "images/joseph-sandy/magic-lounge-6.jpg"
            ],
            address: "5050 N Clark St, Chicago, IL 60640",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9734,-87.6685",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9734,-87.6685&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking on Clark St",
                address: "Clark St near Chicago Magic Lounge, Chicago",
                cost: "Free after 6 PM",
                tip: "Free street parking in the evening on Clark and side streets.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9734,-87.6685",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.9734,-87.6685&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9734&dropoff[longitude]=-87.6685&dropoff[nickname]=Chicago%20Magic%20Lounge",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9734&destination[longitude]=-87.6685"
            },
            cost: "$60 to $100 for two tickets",
            dressCode: "Smart casual. The speakeasy vibe calls for looking sharp.",
            reservation: {
              time: "9:00 PM",
              partySize: 2,
              notes: "Reservations required. Book online at chicagomagiclounge.com. Shows sell out weeks in advance."
            },
            reviews: {
              google: { stars: 4.7, count: 1800 },
              yelp: { stars: 4.5, count: 700 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: "https://chicagomagiclounge.com/",
            phone: "(312) 366-4500",
            foodRecs: {
              joseph: [
                { name: "Old Fashioned", price: "$15", note: "The cocktails fit the speakeasy vibe perfectly. Joseph get something classic." }
              ],
              sandy: [
                { name: "Espresso Martini", price: "$16", note: "Sandy their espresso martini is a great way to stay energized for the show." }
              ]
            },
            tips: [
              "Enter through the laundromat, it's a secret door",
              "Book well in advance, shows sell out weeks ahead",
              "This is a 15 minute rideshare from Old Town",
              "No cell phones during the show"
            ]
          }
        ]
      },

      // ── STOP 3: INSOMNIA COOKIES ──
      {
        order: 3,
        time: "10:30 PM",
        endTime: "11:00 PM",
        name: "Insomnia Cookies",
        type: "Dessert",
        location: "Old Town, Chicago",
        tagline: "Warm cookies straight out of the oven at midnight because that's the only way to end this night",
        description: "The best way to end a night of laughing until you can't breathe is with warm cookies straight out of the oven. <a href=\"https://www.google.com/maps/search/?api=1&query=Insomnia+Cookies+1571+N+Wells+St+Chicago\" target=\"_blank\">Insomnia Cookies</a> is literally steps from Second City and they're open until 3 AM on weekends so timing is never an issue. Joseph get the classic chocolate chunk cookie while it's still warm and gooey and Sandy the ice cream sandwich with two cookies and your choice of ice cream in between is genuinely perfect. It's simple, it's sweet, and it's the kind of ending that makes the whole night feel complete.",
        image: "images/joseph-sandy/insomnia-cookies-1.jpg",
        images: [
          "images/joseph-sandy/insomnia-cookies-1.jpg",
          "images/joseph-sandy/insomnia-cookies-2.jpg",
          "images/joseph-sandy/insomnia-cookies-3.jpg",
          "images/joseph-sandy/insomnia-cookies-4.jpg",
          "images/joseph-sandy/insomnia-cookies-5.jpg",
          "images/joseph-sandy/insomnia-cookies-6.jpg"
        ],
        address: "1571 N Wells St, Chicago, IL 60610",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9105,-87.6345",
        appleMapsUrl: "https://maps.apple.com/?daddr=41.9105,-87.6345&dirflg=d",
        parkingOptions: [
          {
            type: "paid",
            recommended: true,
            name: "Pipers Alley Garage",
            address: "1608 N Wells St, Chicago, IL 60614",
            cost: "$12 to $20 evening",
            tip: "Same garage as Second City. You're literally steps away.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9112,-87.6344",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9112,-87.6344&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9105&dropoff[longitude]=-87.6345&dropoff[nickname]=Insomnia%20Cookies",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9105&destination[longitude]=-87.6345"
        },
        cost: "$5 to $10 for two",
        dressCode: "Whatever you wore to the show, you're perfect.",
        reservation: null,
        reviews: {
          google: { stars: 4.3, count: 800 },
          yelp: { stars: 4.0, count: 400 }
        },
        happyHour: null,
        menuUrl: "https://insomniacookies.com/menu",
        reservationUrl: null,
        phone: "(312) 929-4135",
        foodRecs: {
          joseph: [
            { name: "Classic Chocolate Chunk Cookie", price: "$3", note: "Warm, gooey, and genuinely perfect. Joseph get this while it's fresh out of the oven." },
            { name: "Brownie", price: "$4", note: "Rich, fudgy, and goes perfectly with a glass of milk." }
          ],
          sandy: [
            { name: "Cookie Ice Cream Sandwich", price: "$6", note: "Two warm cookies with your choice of ice cream in between. Sandy this is the move." },
            { name: "Snickerdoodle Cookie", price: "$3", note: "Soft, warm, with cinnamon sugar that's perfect for a sweet tooth." }
          ]
        },
        tips: [
          "Open until 3 AM on weekends so timing is never an issue",
          "The cookies are best when they're fresh and warm, ask for them straight out of the oven",
          "The ice cream sandwich is the best value on the menu",
          "It's literally steps from Second City, you can't miss it"
        ],
        swapOptions: [
          // ── Alt 1: Cocoa + Co ──
          {
            name: "Cocoa + Co",
            type: "Dessert",
            location: "Old Town, Chicago",
            tagline: "An artisan chocolate shop in Old Town with hot chocolate and truffles that feel like a warm hug",
            description: "If you want something a little more refined than cookies, <a href=\"https://www.google.com/maps/search/?api=1&query=Cocoa+%2B+Co+Old+Town+Chicago\" target=\"_blank\">Cocoa + Co</a> in Old Town is a charming chocolate shop where everything is made with care. Joseph the European style hot chocolate is thick, rich, and nothing like what you get at a chain. Sandy the handmade truffles come in flavors like sea salt caramel and dark chocolate raspberry that are genuinely special. It's cozy, it's intimate, and sipping hot chocolate together on a cold night is one of those small moments that makes a date feel truly romantic.",
            image: "images/joseph-sandy/cocoa-co-1.jpg",
            images: [
              "images/joseph-sandy/cocoa-co-1.jpg",
              "images/joseph-sandy/cocoa-co-2.jpg",
              "images/joseph-sandy/cocoa-co-3.jpg",
              "images/joseph-sandy/cocoa-co-4.jpg",
              "images/joseph-sandy/cocoa-co-5.jpg",
              "images/joseph-sandy/cocoa-co-6.jpg"
            ],
            address: "1651 N Wells St, Chicago, IL 60614",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9117,-87.6345",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9117,-87.6345&dirflg=d",
            parkingOptions: [
              {
                type: "paid",
                recommended: true,
                name: "Pipers Alley Garage",
                address: "1608 N Wells St, Chicago, IL 60614",
                cost: "$12 to $20",
                tip: "Same garage, a minute walk up Wells St.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9112,-87.6344",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.9112,-87.6344&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9117&dropoff[longitude]=-87.6345&dropoff[nickname]=Cocoa%20%2B%20Co",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9117&destination[longitude]=-87.6345"
            },
            cost: "$8 to $15 for two",
            dressCode: "Whatever you're wearing from the show.",
            reservation: null,
            reviews: {
              google: { stars: 4.6, count: 350 },
              yelp: { stars: 4.5, count: 200 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: null,
            foodRecs: {
              joseph: [
                { name: "European Hot Chocolate", price: "$6", note: "Thick, rich, and nothing like regular hot chocolate. Joseph this is the real deal." }
              ],
              sandy: [
                { name: "Handmade Truffles (4 pack)", price: "$12", note: "Sea salt caramel, dark chocolate raspberry, and more. Sandy pick your favorites." }
              ]
            },
            tips: [
              "Check their hours, they close earlier than Insomnia",
              "The hot chocolate is worth the trip alone",
              "Perfect for a cold night in Old Town"
            ]
          },
          // ── Alt 2: Margie's Candies ──
          {
            name: "Margie's Candies",
            type: "Dessert",
            location: "Bucktown, Chicago",
            tagline: "A legendary ice cream parlor that's been serving Chicago since 1921 with sundaes in giant clamshell bowls",
            description: "For a truly iconic Chicago dessert experience, <a href=\"https://www.google.com/maps/search/?api=1&query=Margie's+Candies+1960+N+Western+Ave+Chicago\" target=\"_blank\">Margie's Candies</a> has been serving the city since 1921 and it genuinely feels like stepping into a time machine. Joseph and Sandy, the sundaes come in these massive clamshell bowls with homemade hot fudge that's been made the same way for over a hundred years. Al Capone used to be a regular here and the Beatles stopped by when they were in town. It's the kind of place that makes you feel like you're part of Chicago history while eating some of the best ice cream in the city.",
            image: "images/joseph-sandy/margies-candies-1.jpg",
            images: [
              "images/joseph-sandy/margies-candies-1.jpg",
              "images/joseph-sandy/margies-candies-2.jpg",
              "images/joseph-sandy/margies-candies-3.jpg",
              "images/joseph-sandy/margies-candies-4.jpg",
              "images/joseph-sandy/margies-candies-5.jpg",
              "images/joseph-sandy/margies-candies-6.jpg"
            ],
            address: "1960 N Western Ave, Chicago, IL 60647",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9170,-87.6880",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9170,-87.6880&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking on Western Ave",
                address: "Western Ave near Margie's, Chicago",
                cost: "Free",
                tip: "Free street parking on Western Ave in the evening. Easy to find a spot.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9170,-87.6880",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.9170,-87.6880&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9170&dropoff[longitude]=-87.6880&dropoff[nickname]=Margie's%20Candies",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9170&destination[longitude]=-87.6880"
            },
            cost: "$10 to $18 for two",
            dressCode: "Casual. It's an old school ice cream parlor.",
            reservation: null,
            reviews: {
              google: { stars: 4.4, count: 3200 },
              yelp: { stars: 4.0, count: 1100 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: "(773) 384-1035",
            foodRecs: {
              joseph: [
                { name: "Hot Fudge Sundae", price: "$9", note: "Homemade hot fudge that's been the same recipe since 1921. Joseph this is legendary." }
              ],
              sandy: [
                { name: "Banana Split", price: "$11", note: "Classic banana split in the giant clamshell bowl. Sandy it's big enough to share." }
              ]
            },
            tips: [
              "Cash preferred but they take cards now",
              "The hot fudge sundae is the must order",
              "A short rideshare from Old Town, about 8 minutes",
              "Open until midnight on Saturdays"
            ]
          },
          // ── Alt 3: Stan's Donuts ──
          {
            name: "Stan's Donuts & Coffee",
            type: "Dessert",
            location: "Wicker Park, Chicago",
            tagline: "Gourmet donuts and craft coffee that turn a simple dessert stop into something genuinely special",
            description: "For something sweet and easy, <a href=\"https://www.google.com/maps/search/?api=1&query=Stan's+Donuts+Wicker+Park+Chicago\" target=\"_blank\">Stan's Donuts</a> in Wicker Park does gourmet donuts that are in a completely different league. Joseph the Biscoff Pocket is filled with cookie butter and it's unreal. Sandy the Pistachio Old Fashioned is beautiful and tastes even better than it looks. Grab a couple donuts and take them for a walk or enjoy them in the cozy shop. It's a sweet, simple way to close out the night.",
            image: "images/joseph-sandy/stans-donuts-1.jpg",
            images: [
              "images/joseph-sandy/stans-donuts-1.jpg",
              "images/joseph-sandy/stans-donuts-2.jpg",
              "images/joseph-sandy/stans-donuts-3.jpg",
              "images/joseph-sandy/stans-donuts-4.jpg",
              "images/joseph-sandy/stans-donuts-5.jpg",
              "images/joseph-sandy/stans-donuts-6.jpg"
            ],
            address: "1560 N Damen Ave, Chicago, IL 60622",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9099,-87.6772",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9099,-87.6772&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking on Damen Ave",
                address: "Damen Ave near Stan's, Chicago",
                cost: "Free after 6 PM",
                tip: "Free street parking on Damen and side streets in the evening.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9099,-87.6772",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.9099,-87.6772&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9099&dropoff[longitude]=-87.6772&dropoff[nickname]=Stan's%20Donuts",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9099&destination[longitude]=-87.6772"
            },
            cost: "$6 to $12 for two",
            dressCode: "Casual",
            reservation: null,
            reviews: {
              google: { stars: 4.6, count: 2100 },
              yelp: { stars: 4.5, count: 800 }
            },
            happyHour: null,
            menuUrl: "https://www.stansdonuts.com/menu",
            reservationUrl: null,
            phone: "(773) 360-7386",
            foodRecs: {
              joseph: [
                { name: "Biscoff Pocket", price: "$4.95", note: "Filled with Biscoff cookie butter. Joseph this is one of the best donuts in Chicago." }
              ],
              sandy: [
                { name: "Pistachio Old Fashioned", price: "$4.50", note: "Beautiful green glaze with real pistachio flavor. Sandy it tastes even better than it looks." }
              ]
            },
            tips: [
              "Check closing time, Stan's closes earlier than Insomnia",
              "The Biscoff Pocket is their most popular donut for a reason",
              "About a 10 minute rideshare from Old Town"
            ]
          }
        ]
      }
    ],

    travelTimes: [
      { from: 1, to: 2, duration: "15 min walk", mode: "walk" },
      { from: 2, to: 3, duration: "1 min walk", mode: "walk" }
    ],

    budget: {
      items: [
        { label: "Mott St (shared plates dinner for two)", cost: "$40–60" },
        { label: "Second City (two tickets)", cost: "$50–90" },
        { label: "Insomnia Cookies (cookies and ice cream)", cost: "$5–10" }
      ],
      total: "$95–160",
      tip: "You can easily stay under $100 by going to the Ten Dollar Comedy show at Second City ($20 for two tickets) and sharing four dishes at Mott St instead of five. The cookies are just a few dollars so that last stop barely adds to the total."
    },

    checklist: [
      { id: "chk-mott-res", text: "Book Mott St reservation on OpenTable for 7:00 PM Saturday", bold: "Mott St" },
      { id: "chk-second-city", text: "Buy Second City tickets online at secondcity.com", bold: "Second City" },
      { id: "chk-warm-layers", text: "Dress warm tonight, 48°F high and dropping. Bring layers and a good jacket", bold: "warm" },
      { id: "chk-arrive-early", text: "Arrive at Second City 30 minutes early to get good seats and grab drinks", bold: "30 minutes early" }
    ],

    calendar: {
      title: "DateFlo: Old Town After Dark",
      date: "20260322",
      startTime: "T010000Z",
      endTime: "T050000Z",
      location: "Old Town / Wicker Park, Chicago, IL",
      description: "Plan A: Old Town After Dark\\n\\n7:00 PM Mott St (Dinner)\\n9:00 PM Second City (Comedy)\\n10:30 PM Insomnia Cookies (Dessert)\\n\\nFull details: dateflo.com/joseph-and-sandy"
    }
  },

  // ════════════════════════════════════
  // PLAN B: PILSEN DATE NIGHT
  // ════════════════════════════════════
  {
    id: "pilsen-date-night",
    couple: "Joseph & Sandy",
    coupleId: "joseph-sandy-2026",
    partner1: "Joseph",
    partner2: "Sandy",
    planName: "Pilsen Date Night",
    planEmoji: "🎨",
    planVibe: "A colorful, romantic night through Pilsen with incredible regional Mexican food, world famous street art, and authentic Mexican ice cream to close the night.",
    greeting: "Joseph and Sandy, Pilsen is one of those neighborhoods that feels like a completely different world and tonight you're going to experience the best of it. You're starting with regional Mexican food from a chef who grew up on a radish farm in Guerrero and brings those flavors to every dish, then walking through one of the most incredible outdoor art galleries in the country, and finishing with authentic Mexican ice cream that comes in flavors you genuinely cannot find anywhere else. Everything is walkable and the whole night has this warm, colorful energy that makes you feel like you're on vacation in your own city.",
    occasion: "Date Night",
    date: "Saturday, March 22, 2026",
    dateShort: "Sat, March 22",
    startTime: "7:00 PM",
    endTime: "10:15 PM",
    city: "Chicago, IL",
    area: "Pilsen",
    coverImage: "images/joseph-sandy/5-rabanitos-1.jpg",
    route: "Home → 5 Rabanitos → Pilsen Mural Walk → La Michoacana Premium → Home",

    preferences: {
      joseph: {
        dietary: "No allergies",
        flavors: "Steak, tacos, Mexican, Japanese, Brazilian",
        drinks: "Open",
        avoid: "Italian, French, Scandinavian"
      },
      sandy: {
        dietary: "No allergies",
        flavors: "Anything with meat",
        drinks: "Open",
        avoid: "American yogurt"
      }
    },

    weather: {
      high: "48°F",
      low: "32°F",
      conditions: "Cooler than Friday, clear skies expected. Bundle up for the mural walk.",
      sunset: "7:09 PM",
      rainChance: "5%",
      note: "You'll be walking outside for the mural walk so dress warm. High of 48 and dropping into the 30s later. A warm jacket and comfortable shoes are a must tonight."
    },

    stops: [
      // ── STOP 1: 5 RABANITOS ──
      {
        order: 1,
        time: "7:00 PM",
        endTime: "8:30 PM",
        name: "5 Rabanitos",
        type: "Dinner",
        location: "Pilsen, Chicago",
        tagline: "Regional Mexican food from a chef who grew up on a radish farm in Guerrero and brings those flavors to every dish",
        description: "Okay Joseph and Sandy, this is the kind of Mexican food that makes you rethink everything you thought you knew about tacos. <a href=\"https://www.google.com/maps/search/?api=1&query=5+Rabanitos+1758+W+18th+St+Chicago\" target=\"_blank\">5 Rabanitos</a> is run by Chef Alfonso Sotelo who grew up on a radish farm in Guerrero and brings flavors from all over Mexico to this cozy Pilsen spot. Joseph the carne asada tacos are incredible but you have to try the cochinita pibil because it's slow roasted Yucatan style pork that just melts. Sandy the shrimp empanadas are crispy and rich and the mole is made from scratch in a way that you can genuinely taste. This place is a block from the <a href=\"https://www.google.com/maps/search/?api=1&query=National+Museum+of+Mexican+Art+Chicago\" target=\"_blank\">National Museum of Mexican Art</a> and it feels like a real neighborhood gem.",
        image: "images/joseph-sandy/5-rabanitos-1.jpg",
        images: [
          "images/joseph-sandy/5-rabanitos-1.jpg",
          "images/joseph-sandy/5-rabanitos-2.jpg",
          "images/joseph-sandy/5-rabanitos-3.jpg",
          "images/joseph-sandy/5-rabanitos-4.jpg",
          "images/joseph-sandy/5-rabanitos-5.jpg",
          "images/joseph-sandy/5-rabanitos-6.jpg"
        ],
        address: "1758 W 18th St, Chicago, IL 60608",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8579,-87.6704",
        appleMapsUrl: "https://maps.apple.com/?daddr=41.8579,-87.6704&dirflg=d",
        parkingOptions: [
          {
            type: "street",
            recommended: true,
            name: "Street Parking on 18th St",
            address: "18th St near 5 Rabanitos, Chicago",
            cost: "Free",
            tip: "Free street parking on 18th Street and side streets. Pilsen is easy to park in on weekends.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8579,-87.6704",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8579,-87.6704&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8579&dropoff[longitude]=-87.6704&dropoff[nickname]=5%20Rabanitos",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8579&destination[longitude]=-87.6704"
        },
        cost: "$30 to $50 for two",
        dressCode: "Casual. This is a cozy neighborhood restaurant, come as you are.",
        reservation: {
          time: "7:00 PM",
          partySize: 2,
          notes: "Reservations available on Resy. Recommended for Saturday dinner. Walk-ins welcome but waits can happen."
        },
        reviews: {
          google: { stars: 4.5, count: 4841 },
          yelp: { stars: 4.5, count: 822 }
        },
        happyHour: null,
        menuUrl: "https://www.5rabanitos.com/menu",
        reservationUrl: "https://resy.com/cities/chi/5-rabanitos",
        phone: "(312) 285-2710",
        foodRecs: {
          joseph: [
            { name: "Carne Asada Tacos", price: "$6", note: "Perfectly grilled steak with fresh salsa and onions. Joseph these are the real deal." },
            { name: "Cochinita Pibil", price: "$17.25", note: "Slow roasted Yucatan style pork that melts in your mouth. This is a must try." },
            { name: "3 Taco Dinner", price: "$17.25", note: "Pick three tacos and try a few different things. Great way to explore the menu." }
          ],
          sandy: [
            { name: "Shrimp Empanadas", price: "$13", note: "Crispy and rich with a perfectly seasoned shrimp filling. Sandy these are incredible." },
            { name: "Mole Enchiladas", price: "$16", note: "The mole is made from scratch and you can genuinely taste the difference." },
            { name: "Carne Asada Tacos", price: "$6", note: "Simple, perfect, and exactly what you want from a taco." }
          ]
        },
        tips: [
          "Check hours, they close at 10 PM on Saturdays",
          "The cochinita pibil is a hidden gem on the menu, don't skip it",
          "One block from the National Museum of Mexican Art if you want to walk by",
          "Reserve on Resy for Saturday night"
        ],
        swapOptions: [
          // ── Alt 1: Mi Tocaya ──
          {
            name: "Mi Tocaya Antojeria",
            type: "Dinner",
            location: "Logan Square, Chicago",
            tagline: "Modern Mexican small plates from a James Beard nominated chef in a cozy Logan Square setting",
            description: "If you want Mexican food with a modern twist, <a href=\"https://www.google.com/maps/search/?api=1&query=Mi+Tocaya+Antojeria+2800+N+Logan+Blvd+Chicago\" target=\"_blank\">Mi Tocaya Antojeria</a> in Logan Square is run by James Beard nominated Chef Diana Davila and the food is genuinely some of the best Mexican cuisine in Chicago. Joseph the carnitas are braised for hours until they're impossibly tender and Sandy the queso fundido with chorizo is rich, melty, and perfect for sharing. The restaurant is warm and inviting with colorful artwork on the walls and a menu that celebrates Mexican heritage in the most creative way.",
            image: "images/joseph-sandy/mi-tocaya-1.jpg",
            images: [
              "images/joseph-sandy/mi-tocaya-1.jpg",
              "images/joseph-sandy/mi-tocaya-2.jpg",
              "images/joseph-sandy/mi-tocaya-3.jpg",
              "images/joseph-sandy/mi-tocaya-4.jpg",
              "images/joseph-sandy/mi-tocaya-5.jpg",
              "images/joseph-sandy/mi-tocaya-6.jpg"
            ],
            address: "2800 N Logan Blvd, Chicago, IL 60647",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9324,-87.7088",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9324,-87.7088&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking on Logan Blvd",
                address: "Logan Blvd near Mi Tocaya, Chicago",
                cost: "Free",
                tip: "Free street parking on Logan Blvd and side streets. Easy to find a spot on weekends.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9324,-87.7088",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.9324,-87.7088&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9324&dropoff[longitude]=-87.7088&dropoff[nickname]=Mi%20Tocaya",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9324&destination[longitude]=-87.7088"
            },
            cost: "$40 to $60 for two",
            dressCode: "Smart casual. The Logan Square crowd is stylish but relaxed.",
            reservation: {
              time: "7:00 PM",
              partySize: 2,
              notes: "Reservations strongly recommended. Book through Resy."
            },
            reviews: {
              google: { stars: 4.6, count: 1800 },
              yelp: { stars: 4.5, count: 900 }
            },
            happyHour: null,
            menuUrl: "https://www.mitocaya.com/menus",
            reservationUrl: "https://resy.com/cities/chi/mi-tocaya-antojeria",
            phone: "(872) 315-3947",
            foodRecs: {
              joseph: [
                { name: "Carnitas", price: "$19", note: "Braised for hours until impossibly tender. Joseph this is next level." },
                { name: "Quesabirria Tacos", price: "$16", note: "Birria style with a rich consomme for dipping." }
              ],
              sandy: [
                { name: "Queso Fundido con Chorizo", price: "$14", note: "Melty cheese with spiced chorizo. Sandy this is perfect for sharing." },
                { name: "Elote Asado", price: "$8", note: "Grilled corn with cotija, lime, and chile." }
              ]
            },
            tips: [
              "Book on Resy well in advance, this place is popular",
              "Order family style for the best experience",
              "This is in Logan Square, about a 15 minute rideshare from Pilsen"
            ]
          },
          // ── Alt 2: La Luna ──
          {
            name: "La Luna",
            type: "Dinner",
            location: "Pilsen, Chicago",
            tagline: "Authentic Mexican food with live music in the heart of Pilsen for a lively date night",
            description: "For a livelier dinner experience right in Pilsen, <a href=\"https://www.google.com/maps/search/?api=1&query=La+Luna+Pilsen+Chicago\" target=\"_blank\">La Luna</a> combines authentic Mexican food with a vibrant atmosphere that includes live music on weekends. Joseph the steak fajitas sizzle when they come to the table and the aroma alone is worth the visit. Sandy the enchiladas suizas are smothered in a creamy tomatillo sauce that's made fresh daily. The live music adds this incredible energy to the room and it turns a great dinner into an experience you'll talk about for weeks.",
            image: "images/joseph-sandy/la-luna-1.jpg",
            images: [
              "images/joseph-sandy/la-luna-1.jpg",
              "images/joseph-sandy/la-luna-2.jpg",
              "images/joseph-sandy/la-luna-3.jpg",
              "images/joseph-sandy/la-luna-4.jpg",
              "images/joseph-sandy/la-luna-5.jpg",
              "images/joseph-sandy/la-luna-6.jpg"
            ],
            address: "1867 S Blue Island Ave, Chicago, IL 60608",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8563,-87.6625",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8563,-87.6625&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking on Blue Island Ave",
                address: "Blue Island Ave near La Luna, Chicago",
                cost: "Free",
                tip: "Free street parking on Blue Island Ave and nearby streets.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8563,-87.6625",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.8563,-87.6625&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8563&dropoff[longitude]=-87.6625&dropoff[nickname]=La%20Luna%20Pilsen",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8563&destination[longitude]=-87.6625"
            },
            cost: "$30 to $50 for two",
            dressCode: "Casual. Come ready to enjoy the music and the food.",
            reservation: null,
            reviews: {
              google: { stars: 4.4, count: 1500 },
              yelp: { stars: 4.0, count: 600 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: "(312) 226-1800",
            foodRecs: {
              joseph: [
                { name: "Steak Fajitas", price: "$18", note: "Sizzling skillet with grilled steak, peppers, and onions. Joseph this is a showstopper." },
                { name: "Tacos al Pastor", price: "$14", note: "Marinated pork with pineapple and cilantro. Classic and delicious." }
              ],
              sandy: [
                { name: "Enchiladas Suizas", price: "$15", note: "Smothered in creamy tomatillo sauce. Sandy these are comfort food at its best." },
                { name: "Guacamole & Chips", price: "$10", note: "Made fresh to order. Perfect for sharing while you enjoy the music." }
              ]
            },
            tips: [
              "Check if they have live music on Saturday night",
              "Walkable from everywhere else in the Pilsen plan",
              "No reservations needed but arrive before 8 PM on weekends"
            ]
          },
          // ── Alt 3: Taqueria Chingon ──
          {
            name: "Taqueria Chingon",
            type: "Dinner",
            location: "West Loop, Chicago",
            tagline: "Michelin Bib Gourmand Mexican with bold flavors and electric energy in the West Loop",
            description: "If you want to venture out of Pilsen for dinner, <a href=\"https://www.google.com/maps/search/?api=1&query=Taqueria+Chingon+932+W+Randolph+St+Chicago\" target=\"_blank\">Taqueria Chingon</a> in the West Loop is a Michelin Bib Gourmand spot that's doing some of the most exciting Mexican food in Chicago. Joseph the birria tacos are out of this world with a rich consomme for dipping and Sandy the carne asada is cooked over an open flame and served with fresh tortillas. The energy in this restaurant is electric and it's the kind of place where you leave feeling genuinely happy.",
            image: "images/joseph-sandy/taqueria-chingon-1.jpg",
            images: [
              "images/joseph-sandy/taqueria-chingon-1.jpg",
              "images/joseph-sandy/taqueria-chingon-2.jpg",
              "images/joseph-sandy/taqueria-chingon-3.jpg",
              "images/joseph-sandy/taqueria-chingon-4.jpg",
              "images/joseph-sandy/taqueria-chingon-5.jpg",
              "images/joseph-sandy/taqueria-chingon-6.jpg"
            ],
            address: "932 W Randolph St, Chicago, IL 60607",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8841,-87.6520",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8841,-87.6520&dirflg=d",
            parkingOptions: [
              {
                type: "paid",
                recommended: true,
                name: "West Loop Parking",
                address: "Randolph St near Sangamon, Chicago",
                cost: "$15 to $25 evening",
                tip: "Garages on Randolph in the West Loop with evening rates.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8841,-87.6520",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.8841,-87.6520&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8841&dropoff[longitude]=-87.6520&dropoff[nickname]=Taqueria%20Chingon",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8841&destination[longitude]=-87.6520"
            },
            cost: "$30 to $50 for two",
            dressCode: "Smart casual.",
            reservation: {
              time: "7:00 PM",
              partySize: 2,
              notes: "Reservations recommended on weekends. Book through Resy."
            },
            reviews: {
              google: { stars: 4.5, count: 2800 },
              yelp: { stars: 4.5, count: 950 }
            },
            happyHour: null,
            menuUrl: "https://www.taqueriachingon.com/menu",
            reservationUrl: "https://resy.com/cities/chi/taqueria-chingon",
            phone: "(312) 578-5765",
            foodRecs: {
              joseph: [
                { name: "Birria Tacos", price: "$16", note: "Slow braised beef in crispy tortillas with consomme for dipping." },
                { name: "Elote", price: "$9", note: "Grilled corn with cotija, lime, and tajin." }
              ],
              sandy: [
                { name: "Carne Asada", price: "$22", note: "Open flame grilled with fresh tortillas." },
                { name: "Guacamole Fresco", price: "$13", note: "Made tableside with fresh avocado and lime." }
              ]
            },
            tips: [
              "Book on Resy for Saturday night",
              "About a 10 minute rideshare from Pilsen",
              "The mezcal cocktails are worth trying"
            ]
          }
        ]
      },

      // ── STOP 2: PILSEN MURAL WALK ──
      {
        order: 2,
        time: "8:45 PM",
        endTime: "9:30 PM",
        name: "Pilsen Mural Walk",
        type: "Walk / Art",
        location: "Pilsen, Chicago",
        tagline: "One of the most incredible outdoor art galleries in the country and you don't need a ticket to see it",
        description: "Pilsen has one of the most incredible outdoor art galleries in the country and you don't need a ticket to see it. The murals along <a href=\"https://www.google.com/maps/search/?api=1&query=16th+Street+%26+Ashland+Ave+Pilsen+Chicago\" target=\"_blank\">16th Street</a> and throughout the neighborhood tell stories of Mexican heritage, community, and resilience and they're genuinely beautiful especially at night when the street lights give everything this warm glow. Joseph and Sandy, take your time walking through and just enjoy being together surrounded by all this color and creativity. It's the kind of thing you couldn't plan if you tried but tonight you get to experience it.",
        image: "images/joseph-sandy/pilsen-murals-1.jpg",
        images: [
          "images/joseph-sandy/pilsen-murals-1.jpg",
          "images/joseph-sandy/pilsen-murals-2.jpg",
          "images/joseph-sandy/pilsen-murals-3.jpg",
          "images/joseph-sandy/pilsen-murals-4.jpg",
          "images/joseph-sandy/pilsen-murals-5.jpg",
          "images/joseph-sandy/pilsen-murals-6.jpg"
        ],
        address: "16th Street & Ashland Ave, Pilsen, Chicago, IL 60608",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8588,-87.6668",
        appleMapsUrl: "https://maps.apple.com/?daddr=41.8588,-87.6668&dirflg=d",
        parkingOptions: [
          {
            type: "street",
            recommended: true,
            name: "Street Parking on 16th St",
            address: "16th St near Ashland, Pilsen, Chicago",
            cost: "Free",
            tip: "Free street parking throughout Pilsen. You probably still have your spot from dinner.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8588,-87.6668",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8588,-87.6668&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8588&dropoff[longitude]=-87.6668&dropoff[nickname]=Pilsen%20Murals",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8588&destination[longitude]=-87.6668"
        },
        cost: "Free",
        dressCode: "Wear comfortable shoes and bring a warm jacket. You'll be walking for about 45 minutes.",
        reservation: null,
        reviews: {
          google: { stars: 4.8, count: 500 },
          yelp: { stars: 4.5, count: 200 }
        },
        happyHour: null,
        menuUrl: null,
        reservationUrl: null,
        phone: null,
        foodRecs: {
          joseph: [],
          sandy: []
        },
        tips: [
          "The murals along 16th Street are the most concentrated, start there",
          "Bring your phone for photos, the colors are incredible even at night",
          "Wear comfortable shoes, you'll be walking on sidewalks and some uneven surfaces",
          "Bundle up, it's 48°F and dropping. The walk is beautiful but it's cold"
        ],
        swapOptions: [
          // ── Alt 1: National Museum of Mexican Art ──
          {
            name: "National Museum of Mexican Art",
            type: "Walk / Art",
            location: "Pilsen, Chicago",
            tagline: "Free admission to one of the finest collections of Mexican art in the country right in the heart of Pilsen",
            description: "The <a href=\"https://www.google.com/maps/search/?api=1&query=National+Museum+of+Mexican+Art+1852+W+19th+St+Chicago\" target=\"_blank\">National Museum of Mexican Art</a> is one of the most important cultural institutions in Chicago and admission is always free. Joseph and Sandy, this museum has over 10,000 works spanning 3,000 years of Mexican art and culture. The permanent collection is stunning and the rotating exhibits are always thought provoking. Note that the museum closes at 5 PM so this swap only works if you move dinner earlier. But if you can make it work, it's absolutely worth it.",
            image: "images/joseph-sandy/nmma-1.jpg",
            images: [
              "images/joseph-sandy/nmma-1.jpg",
              "images/joseph-sandy/nmma-2.jpg",
              "images/joseph-sandy/nmma-3.jpg",
              "images/joseph-sandy/nmma-4.jpg",
              "images/joseph-sandy/nmma-5.jpg",
              "images/joseph-sandy/nmma-6.jpg"
            ],
            address: "1852 W 19th St, Chicago, IL 60608",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8563,-87.6720",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8563,-87.6720&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking on 19th St",
                address: "19th St near the museum, Pilsen, Chicago",
                cost: "Free",
                tip: "Free street parking throughout Pilsen.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8563,-87.6720",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.8563,-87.6720&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8563&dropoff[longitude]=-87.6720&dropoff[nickname]=National%20Museum%20Mexican%20Art",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8563&destination[longitude]=-87.6720"
            },
            cost: "Free",
            dressCode: "Casual. It's a museum but there's no dress code.",
            reservation: null,
            reviews: {
              google: { stars: 4.8, count: 6500 },
              yelp: { stars: 4.5, count: 400 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: "(312) 738-1503",
            foodRecs: {
              joseph: [],
              sandy: []
            },
            tips: [
              "Closes at 5 PM so only works if you shift dinner earlier",
              "Free admission always",
              "One block from 5 Rabanitos",
              "Allow at least 45 minutes to an hour"
            ]
          },
          // ── Alt 2: Thalia Hall ──
          {
            name: "Thalia Hall Bar & Lounge",
            type: "Walk / Art",
            location: "Pilsen, Chicago",
            tagline: "A stunning 1892 concert hall turned bar and lounge with beautiful architecture and great cocktails",
            description: "If the weather is too cold for a mural walk, <a href=\"https://www.google.com/maps/search/?api=1&query=Thalia+Hall+1807+S+Allport+St+Chicago\" target=\"_blank\">Thalia Hall</a> is a gorgeous historic venue from 1892 that doubles as a bar and cocktail lounge. Joseph and Sandy, the architecture alone is worth the visit with ornate details, soaring ceilings, and a vibe that feels like stepping into old world Prague. Grab cocktails at the bar, explore the beautiful interiors, and enjoy being somewhere that most tourists never find. If there's a show happening, even better.",
            image: "images/joseph-sandy/thalia-hall-1.jpg",
            images: [
              "images/joseph-sandy/thalia-hall-1.jpg",
              "images/joseph-sandy/thalia-hall-2.jpg",
              "images/joseph-sandy/thalia-hall-3.jpg",
              "images/joseph-sandy/thalia-hall-4.jpg",
              "images/joseph-sandy/thalia-hall-5.jpg",
              "images/joseph-sandy/thalia-hall-6.jpg"
            ],
            address: "1807 S Allport St, Chicago, IL 60608",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8576,-87.6588",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8576,-87.6588&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking on Allport St",
                address: "Allport St near Thalia Hall, Chicago",
                cost: "Free",
                tip: "Free street parking on Allport and 18th St.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8576,-87.6588",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.8576,-87.6588&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8576&dropoff[longitude]=-87.6588&dropoff[nickname]=Thalia%20Hall",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8576&destination[longitude]=-87.6588"
            },
            cost: "$15 to $30 for two drinks",
            dressCode: "Smart casual. The venue deserves it.",
            reservation: null,
            reviews: {
              google: { stars: 4.6, count: 3200 },
              yelp: { stars: 4.5, count: 800 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: "https://www.thaliahallchicago.com/",
            phone: "(312) 526-3851",
            foodRecs: {
              joseph: [
                { name: "Old Fashioned", price: "$14", note: "Classic cocktail in a stunning setting. Joseph you'll love the vibe here." }
              ],
              sandy: [
                { name: "House Cocktail", price: "$15", note: "Ask the bartender for their specialty. Sandy the cocktails here are always creative." }
              ]
            },
            tips: [
              "Check their website for live shows on Saturday night",
              "The building itself is worth exploring, the architecture is stunning",
              "Walkable from 5 Rabanitos, about 10 minutes"
            ]
          },
          // ── Alt 3: Skylark ──
          {
            name: "Skylark",
            type: "Walk / Art",
            location: "Pilsen, Chicago",
            tagline: "A cozy neighborhood cocktail bar in Pilsen with great drinks and a relaxed atmosphere",
            description: "If you want somewhere warm and cozy to sit and talk after dinner, <a href=\"https://www.google.com/maps/search/?api=1&query=Skylark+2149+S+Halsted+St+Chicago\" target=\"_blank\">Skylark</a> is a beloved Pilsen cocktail bar that's been a neighborhood staple for years. Joseph and Sandy, the vibe here is relaxed and intimate with dim lighting, comfortable seating, and bartenders who genuinely know their craft. It's the kind of bar where conversations flow easily and the drinks are always solid. Grab a couple cocktails and enjoy being together without any rush or agenda.",
            image: "images/joseph-sandy/skylark-1.jpg",
            images: [
              "images/joseph-sandy/skylark-1.jpg",
              "images/joseph-sandy/skylark-2.jpg",
              "images/joseph-sandy/skylark-3.jpg",
              "images/joseph-sandy/skylark-4.jpg",
              "images/joseph-sandy/skylark-5.jpg",
              "images/joseph-sandy/skylark-6.jpg"
            ],
            address: "2149 S Halsted St, Chicago, IL 60608",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8536,-87.6463",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8536,-87.6463&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking on Halsted St",
                address: "Halsted St near Skylark, Chicago",
                cost: "Free",
                tip: "Free street parking on Halsted and side streets.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8536,-87.6463",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.8536,-87.6463&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8536&dropoff[longitude]=-87.6463&dropoff[nickname]=Skylark",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8536&destination[longitude]=-87.6463"
            },
            cost: "$15 to $25 for two drinks",
            dressCode: "Casual. It's a neighborhood bar.",
            reservation: null,
            reviews: {
              google: { stars: 4.5, count: 1200 },
              yelp: { stars: 4.0, count: 500 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: "(312) 948-5275",
            foodRecs: {
              joseph: [
                { name: "Whiskey Sour", price: "$12", note: "Simple, well made, and exactly what you want after a big dinner." }
              ],
              sandy: [
                { name: "Margarita", price: "$12", note: "Fresh lime and a perfect pour. Sandy this is a great way to keep the Pilsen vibe going." }
              ]
            },
            tips: [
              "Open late on weekends",
              "About a 10 minute walk from 5 Rabanitos",
              "Cash and cards accepted",
              "Great jukebox"
            ]
          }
        ]
      },

      // ── STOP 3: LA MICHOACANA PREMIUM ──
      {
        order: 3,
        time: "9:30 PM",
        endTime: "10:15 PM",
        name: "La Michoacana Premium",
        type: "Dessert",
        location: "Pilsen, Chicago",
        tagline: "Authentic Mexican ice cream and paletas with flavors you genuinely cannot find anywhere else",
        description: "You can't do a date night in Pilsen without stopping for ice cream and <a href=\"https://www.google.com/maps/search/?api=1&query=La+Michoacana+Premium+1855+S+Blue+Island+Ave+Chicago\" target=\"_blank\">La Michoacana Premium</a> is where everyone in the neighborhood goes. Joseph the mangonada is this incredible mix of mango sorbet, chamoy, and tajin that hits every flavor at once and Sandy the fresh fruit paletas come in flavors like guava, coconut, and tamarind that you genuinely cannot find anywhere else. It's colorful, it's fun, and sharing ice cream after a night of incredible food and art is the sweetest way to end this date.",
        image: "images/joseph-sandy/la-michoacana-1.jpg",
        images: [
          "images/joseph-sandy/la-michoacana-1.jpg",
          "images/joseph-sandy/la-michoacana-2.jpg",
          "images/joseph-sandy/la-michoacana-3.jpg",
          "images/joseph-sandy/la-michoacana-4.jpg",
          "images/joseph-sandy/la-michoacana-5.jpg",
          "images/joseph-sandy/la-michoacana-6.jpg"
        ],
        address: "1855 S Blue Island Ave, Chicago, IL 60608",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8565,-87.6622",
        appleMapsUrl: "https://maps.apple.com/?daddr=41.8565,-87.6622&dirflg=d",
        parkingOptions: [
          {
            type: "street",
            recommended: true,
            name: "Street Parking on Blue Island Ave",
            address: "Blue Island Ave near La Michoacana, Chicago",
            cost: "Free",
            tip: "Free street parking throughout Pilsen. You probably still have your spot from dinner.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8565,-87.6622",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8565,-87.6622&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8565&dropoff[longitude]=-87.6622&dropoff[nickname]=La%20Michoacana%20Premium",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8565&destination[longitude]=-87.6622"
        },
        cost: "$5 to $10 for two",
        dressCode: "Whatever you're wearing, you're perfect.",
        reservation: null,
        reviews: {
          google: { stars: 4.6, count: 500 },
          yelp: { stars: 4.5, count: 200 }
        },
        happyHour: null,
        menuUrl: null,
        reservationUrl: null,
        phone: null,
        foodRecs: {
          joseph: [
            { name: "Mangonada", price: "$6", note: "Mango sorbet with chamoy and tajin. Joseph this hits every flavor at once and it's incredible." },
            { name: "Esquites", price: "$5", note: "Mexican street corn in a cup with mayo, cotija, and lime. A perfect savory snack to go with your ice cream." }
          ],
          sandy: [
            { name: "Fresh Fruit Paleta", price: "$4", note: "Guava, coconut, tamarind, or strawberry. Sandy pick whichever sounds best, they're all made fresh." },
            { name: "Coconut Ice Cream", price: "$5", note: "Rich, creamy, and made with real coconut. It's simple and perfect." }
          ]
        },
        tips: [
          "Check their closing time, it varies by season",
          "The mangonada is their most popular item for a reason",
          "The paletas are made fresh daily with real fruit",
          "Bring cash just in case, some locations are cash preferred"
        ],
        swapOptions: [
          // ── Alt 1: Cafe Jumping Bean ──
          {
            name: "Cafe Jumping Bean",
            type: "Dessert",
            location: "Pilsen, Chicago",
            tagline: "A cozy Pilsen coffee shop that's been a neighborhood gathering place for decades",
            description: "If it's too cold for ice cream, <a href=\"https://www.google.com/maps/search/?api=1&query=Cafe+Jumping+Bean+1439+W+18th+St+Chicago\" target=\"_blank\">Cafe Jumping Bean</a> is a warm, welcoming coffee shop that's been the heart of Pilsen's creative community for years. Joseph a Mexican hot chocolate is the perfect way to warm up after the mural walk and Sandy the cafe con leche is rich and smooth. It's the kind of place where local artists hang their work on the walls and every cup feels like it was made with care. Cozy up in a corner and enjoy the last moments of a beautiful night together.",
            image: "images/joseph-sandy/cafe-jumping-bean-1.jpg",
            images: [
              "images/joseph-sandy/cafe-jumping-bean-1.jpg",
              "images/joseph-sandy/cafe-jumping-bean-2.jpg",
              "images/joseph-sandy/cafe-jumping-bean-3.jpg",
              "images/joseph-sandy/cafe-jumping-bean-4.jpg",
              "images/joseph-sandy/cafe-jumping-bean-5.jpg",
              "images/joseph-sandy/cafe-jumping-bean-6.jpg"
            ],
            address: "1439 W 18th St, Chicago, IL 60608",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8579,-87.6635",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8579,-87.6635&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking on 18th St",
                address: "18th St near Cafe Jumping Bean, Chicago",
                cost: "Free",
                tip: "Free street parking on 18th St.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8579,-87.6635",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.8579,-87.6635&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8579&dropoff[longitude]=-87.6635&dropoff[nickname]=Cafe%20Jumping%20Bean",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8579&destination[longitude]=-87.6635"
            },
            cost: "$6 to $12 for two",
            dressCode: "Casual. It's a cozy coffee shop.",
            reservation: null,
            reviews: {
              google: { stars: 4.5, count: 800 },
              yelp: { stars: 4.0, count: 400 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: "(312) 455-0019",
            foodRecs: {
              joseph: [
                { name: "Mexican Hot Chocolate", price: "$5", note: "Spiced with cinnamon and made thick. Joseph this will warm you right up." }
              ],
              sandy: [
                { name: "Cafe con Leche", price: "$4", note: "Rich, smooth, and made with care. Sandy this is the perfect nightcap." }
              ]
            },
            tips: [
              "Check their evening hours, coffee shops close earlier",
              "Local art on the walls changes regularly",
              "Walkable from everything in Pilsen"
            ]
          },
          // ── Alt 2: Don Pedro Carnitas ──
          {
            name: "Don Pedro Carnitas",
            type: "Dessert",
            location: "Pilsen, Chicago",
            tagline: "Mexican bakery with fresh pastries and pan dulce that make the whole neighborhood smell incredible",
            description: "For a truly authentic dessert experience, <a href=\"https://www.google.com/maps/search/?api=1&query=Don+Pedro+Carnitas+1113+W+18th+St+Chicago\" target=\"_blank\">Don Pedro Carnitas</a> has a bakery section with fresh pan dulce and Mexican pastries that are warm, sweet, and made daily. Joseph the conchas are soft, pillowy, and covered in that sweet shell topping that's unlike anything else. Sandy the polvorones crumble in the most satisfying way and taste like butter and vanilla. It's affordable, it's authentic, and grabbing pastries to share on the walk to the car is the kind of ending that feels perfectly effortless.",
            image: "images/joseph-sandy/don-pedro-1.jpg",
            images: [
              "images/joseph-sandy/don-pedro-1.jpg",
              "images/joseph-sandy/don-pedro-2.jpg",
              "images/joseph-sandy/don-pedro-3.jpg",
              "images/joseph-sandy/don-pedro-4.jpg",
              "images/joseph-sandy/don-pedro-5.jpg",
              "images/joseph-sandy/don-pedro-6.jpg"
            ],
            address: "1113 W 18th St, Chicago, IL 60608",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8579,-87.6562",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8579,-87.6562&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking on 18th St",
                address: "18th St near Don Pedro, Chicago",
                cost: "Free",
                tip: "Free street parking on 18th St and side streets.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8579,-87.6562",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.8579,-87.6562&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8579&dropoff[longitude]=-87.6562&dropoff[nickname]=Don%20Pedro%20Carnitas",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8579&destination[longitude]=-87.6562"
            },
            cost: "$4 to $8 for two",
            dressCode: "Casual. It's a bakery.",
            reservation: null,
            reviews: {
              google: { stars: 4.5, count: 2500 },
              yelp: { stars: 4.0, count: 600 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: "(312) 829-4757",
            foodRecs: {
              joseph: [
                { name: "Conchas", price: "$1.50", note: "Soft, sweet, and warm. Joseph grab a couple, they're the most iconic Mexican pastry." }
              ],
              sandy: [
                { name: "Polvorones", price: "$1.50", note: "Buttery, crumbly, and melt in your mouth. Sandy these are addictive." }
              ]
            },
            tips: [
              "Check closing time, bakeries close earlier",
              "Everything is incredibly affordable",
              "Walkable from the mural walk area"
            ]
          },
          // ── Alt 3: Bombon Bakery ──
          {
            name: "Bombon Bakery",
            type: "Dessert",
            location: "Pilsen, Chicago",
            tagline: "Artisan Mexican pastries and cakes in a charming Pilsen bakery that feels like a sweet little secret",
            description: "For something a little more special, <a href=\"https://www.google.com/maps/search/?api=1&query=Bombon+Bakery+Pilsen+Chicago\" target=\"_blank\">Bombon Bakery</a> in Pilsen does artisan Mexican pastries and cakes that are beautiful and delicious in equal measure. Joseph the tres leches cake is soaked in three different milks and it's impossibly moist and sweet. Sandy the churros are fried to order and dusted with cinnamon sugar that's still warm when they hand it to you. It's a charming little spot that feels like discovering a secret and sharing pastries together is the perfect gentle ending to your Pilsen adventure.",
            image: "images/joseph-sandy/bombon-bakery-1.jpg",
            images: [
              "images/joseph-sandy/bombon-bakery-1.jpg",
              "images/joseph-sandy/bombon-bakery-2.jpg",
              "images/joseph-sandy/bombon-bakery-3.jpg",
              "images/joseph-sandy/bombon-bakery-4.jpg",
              "images/joseph-sandy/bombon-bakery-5.jpg",
              "images/joseph-sandy/bombon-bakery-6.jpg"
            ],
            address: "1508 W 18th St, Chicago, IL 60608",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8579,-87.6650",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8579,-87.6650&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking on 18th St",
                address: "18th St near Bombon Bakery, Chicago",
                cost: "Free",
                tip: "Free street parking on 18th St.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8579,-87.6650",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.8579,-87.6650&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8579&dropoff[longitude]=-87.6650&dropoff[nickname]=Bombon%20Bakery",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8579&destination[longitude]=-87.6650"
            },
            cost: "$6 to $12 for two",
            dressCode: "Casual.",
            reservation: null,
            reviews: {
              google: { stars: 4.5, count: 400 },
              yelp: { stars: 4.5, count: 200 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: null,
            foodRecs: {
              joseph: [
                { name: "Tres Leches Cake", price: "$6", note: "Soaked in three milks and impossibly moist. Joseph this is the kind of dessert that ruins all other desserts for you." }
              ],
              sandy: [
                { name: "Churros", price: "$5", note: "Fried to order and dusted with cinnamon sugar. Sandy get them while they're warm." }
              ]
            },
            tips: [
              "Check their hours before heading over",
              "The tres leches is their signature, don't skip it",
              "Walkable from the mural walk"
            ]
          }
        ]
      }
    ],

    travelTimes: [
      { from: 1, to: 2, duration: "5 min walk", mode: "walk" },
      { from: 2, to: 3, duration: "8 min walk", mode: "walk" }
    ],

    budget: {
      items: [
        { label: "5 Rabanitos (tacos and shared dishes)", cost: "$30–50" },
        { label: "Pilsen Mural Walk", cost: "Free" },
        { label: "La Michoacana Premium (ice cream and paletas)", cost: "$5–10" }
      ],
      total: "$35–60",
      tip: "This is the budget friendly plan. The mural walk is free, the food is incredibly affordable for the quality, and ice cream is just a few dollars. You could easily do the whole night for under $50."
    },

    checklist: [
      { id: "chk-rabanitos", text: "Check 5 Rabanitos hours, they close at 10 PM on Saturdays", bold: "5 Rabanitos" },
      { id: "chk-shoes", text: "Wear comfortable shoes for the mural walk through Pilsen", bold: "comfortable shoes" },
      { id: "chk-jacket-b", text: "Bring a warm jacket, it's 48°F and dropping into the 30s tonight", bold: "warm jacket" },
      { id: "chk-michoacana", text: "Check La Michoacana Premium closing time before heading over", bold: "La Michoacana Premium" }
    ],

    calendar: {
      title: "DateFlo: Pilsen Date Night",
      date: "20260322",
      startTime: "T010000Z",
      endTime: "T040000Z",
      location: "Pilsen, Chicago, IL",
      description: "Plan B: Pilsen Date Night\\n\\n7:00 PM 5 Rabanitos (Dinner)\\n8:45 PM Pilsen Mural Walk (Art Walk)\\n9:30 PM La Michoacana Premium (Dessert)\\n\\nFull details: dateflo.com/joseph-and-sandy"
    }
  }
];
