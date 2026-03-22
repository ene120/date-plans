// ═══════════════════════════════════════════════════
// DateFlo | Sarah & James | Date Night: Anniversary Edition
// Wednesday, April 15, 2026 | 5:30 PM – 10:00 PM
// Real venues, real data, real everything
// Supports Plan A (Observatory Sunset) and Plan B (Los Feliz Love Letter)
// Full swap options with complete venue objects
// ═══════════════════════════════════════════════════

window.PLAN_ALL = [
  // ════════════════════════════════════
  // PLAN A: OBSERVATORY SUNSET
  // ════════════════════════════════════
  {
    id: "observatory-sunset",
    couple: "Sarah & James",
    coupleId: "sarah-james-2026",
    partner1: "Sarah",
    partner2: "James",
    planName: "Observatory Sunset",
    planEmoji: "🌅",
    planVibe: "A romantic anniversary night starting with bold Thai flavors in Silver Lake, catching sunset from one of the most beautiful spots on earth at Griffith Observatory, and finishing with dessert at a charming Los Feliz garden cafe.",
    greeting: "Sarah and James, happy first anniversary. Tonight is all about celebrating the two of you with a night that's romantic and a little adventurous, just like you asked for. You're kicking things off with incredible Thai food at one of LA's most talked about restaurants, then driving up to Griffith Observatory to watch the sunset paint the sky over the entire city, and wrapping up with dessert at one of the coziest spots in Los Feliz. James, everything on tonight's menu has dairy free options picked out just for you. Sarah, no olives anywhere in sight. Let's make this one count.",
    occasion: "First Anniversary",
    date: "Wednesday, April 15, 2026",
    dateShort: "Wed, April 15",
    startTime: "5:30 PM",
    endTime: "10:00 PM",
    city: "Los Angeles, CA",
    area: "Silver Lake / Griffith Park / Los Feliz",
    coverImage: "images/sarah-james/griffith-observatory-1.jpg",
    route: "Home → Night + Market Song → Griffith Observatory → Alcove Cafe → Home",

    preferences: {
      sarah: {
        dietary: "No allergies",
        flavors: "Thai, Mediterranean",
        drinks: "Open",
        avoid: "Olives"
      },
      james: {
        dietary: "Dairy allergy",
        flavors: "Steakhouse, Mexican",
        drinks: "Open",
        avoid: "Raw fish, Dairy"
      }
    },

    weather: {
      high: "74°F",
      low: "56°F",
      conditions: "Classic LA spring evening. Clear skies and perfect sunset conditions.",
      sunset: "7:26 PM",
      rainChance: "5%",
      note: "April in LA is beautiful. High of 74 during the day and it'll cool down to the mid 50s by the time you leave the Observatory. Bring a light jacket or sweater for the evening breeze up on the hill."
    },

    stops: [
      // ── STOP 1: NIGHT + MARKET SONG ──
      {
        order: 1,
        time: "5:30 PM",
        endTime: "7:00 PM",
        name: "Night + Market Song",
        type: "Dinner",
        location: "Silver Lake, Los Angeles",
        tagline: "Cult favorite Thai restaurant with bold LA Thai flavors that celebrities and food lovers can't stop talking about",
        description: "You're starting your anniversary at one of the most beloved Thai restaurants in all of LA. <a href=\"https://www.google.com/maps/search/?api=1&query=Night+%2B+Market+Song+3322+W+Sunset+Blvd+Los+Angeles\" target=\"_blank\">Night + Market Song</a> is Chef Kris Yenbamroong's Silver Lake gem where he takes traditional Thai flavors and turns them into what he calls LA Thai, and it's genuinely incredible. Sarah the larb with its bright, spicy, herby flavors is going to be your thing and James the BBQ pork neck is smoky and tender with zero dairy anywhere near it. Order a few dishes to share and take your time because this is the kind of meal where every bite makes you say something out loud. The vibe is casual and fun which is exactly how you want to start a night like this.",
        image: "images/sarah-james/night-market-song-1.jpg",
        images: [
          "images/sarah-james/night-market-song-1.jpg",
          "images/sarah-james/night-market-song-2.jpg",
          "images/sarah-james/night-market-song-3.jpg",
          "images/sarah-james/night-market-song-4.jpg",
          "images/sarah-james/night-market-song-5.jpg",
          "images/sarah-james/night-market-song-6.jpg"
        ],
        address: "3322 W Sunset Blvd, Los Angeles, CA 90026",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.0832,-118.2746",
        appleMapsUrl: "https://maps.apple.com/?daddr=34.0832,-118.2746&dirflg=d",
        parkingOptions: [
          {
            type: "street",
            recommended: true,
            name: "Street Parking on Sunset Blvd",
            address: "Sunset Blvd near Night + Market Song, Silver Lake",
            cost: "Metered, $1 to $2 per hour",
            tip: "There's metered street parking on Sunset and free parking on the residential side streets just north of the restaurant. Arrive a little early since this stretch of Sunset can get competitive.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.0832,-118.2746",
            appleMapsUrl: "https://maps.apple.com/?daddr=34.0832,-118.2746&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=34.0832&dropoff[longitude]=-118.2746&dropoff[nickname]=Night%20%2B%20Market%20Song",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=34.0832&destination[longitude]=-118.2746"
        },
        cost: "$40 to $60 for two sharing 4 to 5 dishes",
        dressCode: "Smart casual. It's a laid back restaurant but you'll want to look nice for your anniversary. Think nice jeans and a great top.",
        reservation: {
          time: "5:30 PM",
          partySize: 2,
          notes: "Reservations recommended, especially on weeknights. Book through Resy. Walk-ins welcome but waits can happen."
        },
        reviews: {
          google: { stars: 4.5, count: 3800 },
          yelp: { stars: 4.3, count: 1384 }
        },
        happyHour: null,
        menuUrl: "https://www.nightmarketsong.com/song-dinner",
        reservationUrl: "https://resy.com/cities/los-angeles-ca/venues/night-and-market-song-silverlake",
        phone: "(323) 665-5899",
        foodRecs: {
          sarah: [
            { name: "Larb", price: "$16", note: "Bright, spicy, and packed with fresh herbs. Sarah this is one of the most flavorful dishes on the menu and it's completely dairy free." },
            { name: "Papaya Salad (Som Tum)", price: "$14", note: "Crunchy, tangy, and refreshing with a nice kick of heat. No olives anywhere near this one." },
            { name: "Panang Curry", price: "$18", note: "Rich coconut curry with your choice of protein. Ask for it without any dairy garnishes." }
          ],
          james: [
            { name: "BBQ Pork Neck", price: "$18", note: "Smoky, tender, and absolutely no dairy involved. James this is the kind of thing you'll be thinking about for days." },
            { name: "Party Wings", price: "$16", note: "Crispy, sticky, and perfectly spiced. These are legendary for a reason and completely dairy free." },
            { name: "Pad Kee Mao (Drunken Noodles)", price: "$16", note: "Wide rice noodles with a spicy basil sauce. Ask them to hold any dairy and you're golden." }
          ]
        },
        tips: [
          "Book on Resy for Wednesday evening, it's usually easier to get a table on weeknights",
          "Order 4 to 5 dishes to share, that's the best way to experience the menu",
          "Let the server know about the dairy allergy right away, they're very accommodating",
          "Thai food is naturally dairy free for the most part so James has tons of options here"
        ],
        swapOptions: [
          // ── Alt 1: Bacari Silverlake ──
          {
            name: "Bacari Silverlake",
            type: "Dinner",
            location: "Silver Lake, Los Angeles",
            tagline: "Venetian inspired Mediterranean small plates in a romantic treehouse setting with incredible wines",
            description: "If you're in the mood for Mediterranean instead of Thai, <a href=\"https://www.google.com/maps/search/?api=1&query=Bacari+Silverlake+3626+Sunset+Blvd+Los+Angeles\" target=\"_blank\">Bacari Silverlake</a> is one of the most romantic restaurants in the neighborhood. The patio feels like a treehouse with twinkling lights everywhere and the small plates are Venetian inspired with California ingredients. Sarah the bruschetta and hummus plates are incredible and James there are plenty of dairy free options including grilled meats and vegetable dishes. The wine list is thoughtfully curated and the whole vibe feels like you're dining in a secret garden.",
            image: "images/sarah-james/bacari-silverlake-1.jpg",
            images: [
              "images/sarah-james/bacari-silverlake-1.jpg",
              "images/sarah-james/bacari-silverlake-2.jpg",
              "images/sarah-james/bacari-silverlake-3.jpg",
              "images/sarah-james/bacari-silverlake-4.jpg",
              "images/sarah-james/bacari-silverlake-5.jpg",
              "images/sarah-james/bacari-silverlake-6.jpg"
            ],
            address: "3626 Sunset Blvd, Los Angeles, CA 90026",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.0902,-118.2776",
            appleMapsUrl: "https://maps.apple.com/?daddr=34.0902,-118.2776&dirflg=d",
            parkingOptions: [
              {
                type: "valet",
                recommended: true,
                name: "Valet Parking at Bacari",
                address: "3626 Sunset Blvd, Los Angeles, CA 90026",
                cost: "$10 to $15",
                tip: "Valet is available out front. Street parking on Sunset and side streets is also an option but the valet makes it easy.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.0902,-118.2776",
                appleMapsUrl: "https://maps.apple.com/?daddr=34.0902,-118.2776&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=34.0902&dropoff[longitude]=-118.2776&dropoff[nickname]=Bacari%20Silverlake",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=34.0902&destination[longitude]=-118.2776"
            },
            cost: "$50 to $75 for two sharing small plates and wine",
            dressCode: "Smart casual. The vibe is upscale but relaxed.",
            reservation: {
              time: "5:30 PM",
              partySize: 2,
              notes: "Reservations recommended. Book through OpenTable or their website bacarisilverlake.com."
            },
            reviews: {
              google: { stars: 4.5, count: 3200 },
              yelp: { stars: 4.3, count: 3825 }
            },
            happyHour: null,
            menuUrl: "https://www.bacarisilverlake.com/",
            reservationUrl: "https://www.opentable.com/r/bacari-silver-lake-los-angeles",
            phone: "(323) 410-7304",
            foodRecs: {
              sarah: [
                { name: "Bruschetta Flight", price: "$18", note: "A selection of seasonal bruschetta that changes regularly. Sarah ask which ones are olive free." },
                { name: "Grilled Lamb Chops", price: "$24", note: "Perfectly seasoned Mediterranean style lamb. Pairs beautifully with their wines." }
              ],
              james: [
                { name: "Grilled Hanger Steak", price: "$22", note: "Simple, well seasoned, and completely dairy free. James this satisfies the steakhouse craving." },
                { name: "Roasted Beet Salad", price: "$14", note: "Ask for it without cheese and it's a perfect dairy free starter." }
              ]
            },
            tips: [
              "Ask for patio seating, the treehouse vibe is incredibly romantic",
              "Let them know about dairy allergy when you book",
              "Their wine by the glass selection is excellent for sharing",
              "Sarah ask which bruschetta options are olive free"
            ]
          },
          // ── Alt 2: Tam O'Shanter ──
          {
            name: "Tam O'Shanter",
            type: "Dinner",
            location: "Atwater Village / Los Feliz, Los Angeles",
            tagline: "LA's oldest restaurant serving legendary prime rib since 1922 in a warm, storybook setting",
            description: "If James wants to go full steakhouse, <a href=\"https://www.google.com/maps/search/?api=1&query=Tam+O'Shanter+2980+Los+Feliz+Blvd+Los+Angeles\" target=\"_blank\">Tam O'Shanter</a> has been serving prime rib and steaks since 1922 and it's genuinely one of LA's most charming restaurants. The whole place feels like a storybook with dark wood, stained glass, and cozy booths that are perfect for an anniversary. James the bone in prime rib is legendary and naturally dairy free with the au jus. Sarah they have great grilled fish and salads that hit that Mediterranean flavor profile you love. This is old school LA romance at its finest.",
            image: "images/sarah-james/tam-oshanter-1.jpg",
            images: [
              "images/sarah-james/tam-oshanter-1.jpg",
              "images/sarah-james/tam-oshanter-2.jpg",
              "images/sarah-james/tam-oshanter-3.jpg",
              "images/sarah-james/tam-oshanter-4.jpg",
              "images/sarah-james/tam-oshanter-5.jpg",
              "images/sarah-james/tam-oshanter-6.jpg"
            ],
            address: "2980 Los Feliz Blvd, Los Angeles, CA 90039",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.1215,-118.2675",
            appleMapsUrl: "https://maps.apple.com/?daddr=34.1215,-118.2675&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "Free Self Parking",
                address: "2980 Los Feliz Blvd, Los Angeles, CA 90039",
                cost: "Free",
                tip: "Free self parking in the evening right at the restaurant. One of the perks of a classic spot like this.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.1215,-118.2675",
                appleMapsUrl: "https://maps.apple.com/?daddr=34.1215,-118.2675&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=34.1215&dropoff[longitude]=-118.2675&dropoff[nickname]=Tam%20O'Shanter",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=34.1215&destination[longitude]=-118.2675"
            },
            cost: "$60 to $90 for two with entrees",
            dressCode: "Smart casual to business casual. It's a classic establishment so dress nicely but comfortably.",
            reservation: {
              time: "5:30 PM",
              partySize: 2,
              notes: "Reservations recommended. Book through OpenTable."
            },
            reviews: {
              google: { stars: 4.4, count: 4600 },
              yelp: { stars: 4.2, count: 2440 }
            },
            happyHour: null,
            menuUrl: "https://www.lawrysonline.com/tam-o-shanter/",
            reservationUrl: "https://www.opentable.com/tam-o-shanter",
            phone: "(323) 664-0228",
            foodRecs: {
              sarah: [
                { name: "Scottish Salmon", price: "$32", note: "Grilled salmon with seasonal vegetables. Sarah it's light, flavorful, and olive free." },
                { name: "Wedge Salad", price: "$14", note: "Ask for it without cheese to keep it dairy free for sharing." }
              ],
              james: [
                { name: "Bone In Prime Rib", price: "$48", note: "Legendary since 1922. The au jus is naturally dairy free. James this is the move." },
                { name: "Filet Mignon", price: "$52", note: "Ask for it without any butter finish and it's perfectly dairy free." }
              ]
            },
            tips: [
              "Book on OpenTable and mention it's your anniversary",
              "The prime rib is what this place is famous for",
              "Free parking is a huge perk in LA",
              "Let the server know about the dairy allergy, they accommodate it well"
            ]
          },
          // ── Alt 3: Spitz Los Feliz ──
          {
            name: "Spitz",
            type: "Dinner",
            location: "Los Feliz, Los Angeles",
            tagline: "Street style Mediterranean wraps and doners in a fun, vibrant Los Feliz setting",
            description: "For something casual and full of flavor, <a href=\"https://www.google.com/maps/search/?api=1&query=Spitz+Los+Feliz+1725+Hillhurst+Ave+Los+Angeles\" target=\"_blank\">Spitz</a> in Los Feliz does street style Mediterranean food that's genuinely delicious. The doner wraps are packed with perfectly spiced meat, fresh vegetables, and house made sauces and the whole experience is fun and unpretentious. Sarah the falafel wrap hits all those Mediterranean notes you love and James the lamb doner is hearty, flavorful, and dairy free. The beer selection is great and the prices are easy on the wallet which means more budget for the rest of the night.",
            image: "images/sarah-james/spitz-los-feliz-1.jpg",
            images: [
              "images/sarah-james/spitz-los-feliz-1.jpg",
              "images/sarah-james/spitz-los-feliz-2.jpg",
              "images/sarah-james/spitz-los-feliz-3.jpg",
              "images/sarah-james/spitz-los-feliz-4.jpg",
              "images/sarah-james/spitz-los-feliz-5.jpg",
              "images/sarah-james/spitz-los-feliz-6.jpg"
            ],
            address: "1725 Hillhurst Ave, Los Angeles, CA 90027",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.1036,-118.2880",
            appleMapsUrl: "https://maps.apple.com/?daddr=34.1036,-118.2880&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking on Hillhurst Ave",
                address: "Hillhurst Ave near Spitz, Los Feliz",
                cost: "Metered, free after 8 PM",
                tip: "Metered spots on Hillhurst and free side street parking in the residential blocks.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.1036,-118.2880",
                appleMapsUrl: "https://maps.apple.com/?daddr=34.1036,-118.2880&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=34.1036&dropoff[longitude]=-118.2880&dropoff[nickname]=Spitz%20Los%20Feliz",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=34.1036&destination[longitude]=-118.2880"
            },
            cost: "$25 to $40 for two",
            dressCode: "Casual. Jeans and sneakers are totally fine here.",
            reservation: null,
            reviews: {
              google: { stars: 4.4, count: 1800 },
              yelp: { stars: 4.3, count: 950 }
            },
            happyHour: null,
            menuUrl: "https://www.eatatspitz.com/menu",
            reservationUrl: null,
            phone: "(323) 790-7710",
            foodRecs: {
              sarah: [
                { name: "Falafel Doner Wrap", price: "$13", note: "Crispy falafel with fresh veggies and tahini sauce. Sarah this is Mediterranean comfort food at its best." },
                { name: "Street Fries", price: "$8", note: "Their famous street fries with all the toppings. Ask for no cheese." }
              ],
              james: [
                { name: "Lamb Doner Wrap", price: "$15", note: "Perfectly spiced lamb with fresh toppings. James it's hearty and completely dairy free." },
                { name: "Craft Beer", price: "$8", note: "Great local beer selection on tap." }
              ]
            },
            tips: [
              "No reservations needed, it's first come first served",
              "The doner wraps are the star of the menu",
              "Budget friendly option that leaves more room for the rest of the night",
              "Ask for sauces on the side if you're worried about dairy"
            ]
          }
        ]
      },

      // ── STOP 2: GRIFFITH OBSERVATORY ──
      {
        order: 2,
        time: "7:15 PM",
        endTime: "8:45 PM",
        name: "Griffith Observatory",
        type: "Experience",
        location: "Griffith Park, Los Angeles",
        tagline: "One of the most iconic spots in LA with panoramic city views, free telescopes, and the best sunset you'll ever see together",
        description: "Sarah and James, this is the one you asked for and it's going to be the highlight of your anniversary. <a href=\"https://www.google.com/maps/search/?api=1&query=Griffith+Observatory+2800+E+Observatory+Rd+Los+Angeles\" target=\"_blank\">Griffith Observatory</a> sits on the south slope of Mount Hollywood and the views are genuinely breathtaking. You'll arrive just before sunset and watch the whole city turn golden as the sun drops behind the Pacific. After sunset the city lights come alive and the Hollywood Sign is right there glowing above you. The Observatory is free to enter and you can look through the public telescopes, explore the space exhibits, and just stand on the terrace holding hands while the entire city stretches out below you. This is the kind of moment you'll remember for every anniversary after this one.",
        image: "images/sarah-james/griffith-observatory-1.jpg",
        images: [
          "images/sarah-james/griffith-observatory-1.jpg",
          "images/sarah-james/griffith-observatory-2.jpg",
          "images/sarah-james/griffith-observatory-3.jpg",
          "images/sarah-james/griffith-observatory-4.jpg",
          "images/sarah-james/griffith-observatory-5.jpg",
          "images/sarah-james/griffith-observatory-6.jpg"
        ],
        address: "2800 E Observatory Rd, Los Angeles, CA 90027",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.1184,-118.3004",
        appleMapsUrl: "https://maps.apple.com/?daddr=34.1184,-118.3004&dirflg=d",
        parkingOptions: [
          {
            type: "paid",
            recommended: true,
            name: "Griffith Observatory Parking Lot",
            address: "2800 E Observatory Rd, Los Angeles, CA 90027",
            cost: "$10 per hour, $4 per hour after 2 hours",
            tip: "Parking fills up fast around sunset. Arrive by 7:00 PM on a Wednesday and you should be fine. The lot is right at the Observatory. If it's full, there's overflow parking along the road leading up.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.1184,-118.3004",
            appleMapsUrl: "https://maps.apple.com/?daddr=34.1184,-118.3004&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=34.1184&dropoff[longitude]=-118.3004&dropoff[nickname]=Griffith%20Observatory",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=34.1184&destination[longitude]=-118.3004"
        },
        cost: "Free admission (parking $10 to $15)",
        dressCode: "Whatever you wore to dinner plus a light jacket. It gets breezy up on the hill after sunset.",
        reservation: null,
        reviews: {
          google: { stars: 4.8, count: 52000 },
          yelp: { stars: 4.6, count: 4079 }
        },
        happyHour: null,
        menuUrl: null,
        reservationUrl: null,
        phone: "(213) 473-0800",
        foodRecs: {
          sarah: [
            { name: "Cafe at the End of the Universe", price: "$5 to $10", note: "The Observatory has a small cafe with coffee, snacks, and light bites if you want something while you explore." }
          ],
          james: [
            { name: "Cafe at the End of the Universe", price: "$5 to $10", note: "James grab a coffee or tea here, everything is available dairy free." }
          ]
        },
        tips: [
          "Sunset is at 7:26 PM on April 15 so time your arrival for about 7:00 to 7:15 PM",
          "Wednesday evening is one of the best times to visit, way fewer crowds than weekends",
          "The west facing terrace has the best sunset views",
          "Stay until about 8:30 PM to see the city fully lit up",
          "Bring a jacket, it's always cooler up on the hill than down in the city",
          "The public telescopes are free and usually have shorter lines on weeknights"
        ],
        swapOptions: [
          // ── Alt 1: Yamashiro ──
          {
            name: "Yamashiro",
            type: "Experience",
            location: "Hollywood Hills, Los Angeles",
            tagline: "A stunning Japanese palace in the Hollywood Hills with panoramic views and cocktails at the Pagoda Bar",
            description: "If you want a different kind of hilltop experience, <a href=\"https://www.google.com/maps/search/?api=1&query=Yamashiro+1999+N+Sycamore+Ave+Los+Angeles\" target=\"_blank\">Yamashiro</a> is a real Japanese palace perched in the Hollywood Hills with views that rival the Observatory. Sarah and James, you can grab cocktails at the Pagoda Bar and walk the gorgeous grounds while watching the city lights come alive below you. The whole place feels like you've been transported to Kyoto and it's one of the most romantic spots in all of LA. The sunset from the terrace is absolutely stunning.",
            image: "images/sarah-james/yamashiro-1.jpg",
            images: [
              "images/sarah-james/yamashiro-1.jpg",
              "images/sarah-james/yamashiro-2.jpg",
              "images/sarah-james/yamashiro-3.jpg",
              "images/sarah-james/yamashiro-4.jpg",
              "images/sarah-james/yamashiro-5.jpg",
              "images/sarah-james/yamashiro-6.jpg"
            ],
            address: "1999 N Sycamore Ave, Los Angeles, CA 90068",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.1056,-118.3443",
            appleMapsUrl: "https://maps.apple.com/?daddr=34.1056,-118.3443&dirflg=d",
            parkingOptions: [
              {
                type: "valet",
                recommended: true,
                name: "Valet Parking at Yamashiro",
                address: "1999 N Sycamore Ave, Los Angeles, CA 90068",
                cost: "$12 to $18",
                tip: "Valet is the way to go here. The road up is narrow and parking is limited.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.1056,-118.3443",
                appleMapsUrl: "https://maps.apple.com/?daddr=34.1056,-118.3443&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=34.1056&dropoff[longitude]=-118.3443&dropoff[nickname]=Yamashiro",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=34.1056&destination[longitude]=-118.3443"
            },
            cost: "$20 to $40 for two cocktails",
            dressCode: "Smart casual. It's an upscale setting so look sharp.",
            reservation: {
              time: "7:15 PM",
              partySize: 2,
              notes: "Reservations recommended for dinner but the Pagoda Bar is first come first served."
            },
            reviews: {
              google: { stars: 4.3, count: 6800 },
              yelp: { stars: 3.8, count: 3200 }
            },
            happyHour: null,
            menuUrl: "https://www.yamashirohollywood.com/menus/",
            reservationUrl: "https://www.yamashirohollywood.com/reservations/",
            phone: "(323) 466-5125",
            foodRecs: {
              sarah: [
                { name: "Sunset Cocktail", price: "$18", note: "The cocktails at the Pagoda Bar are creative and the views make everything taste better." }
              ],
              james: [
                { name: "Whiskey Neat", price: "$16", note: "James they have a solid spirits selection. Keep it simple and enjoy the view." }
              ]
            },
            tips: [
              "The Pagoda Bar is the best spot for sunset views and cocktails",
              "Arrive around sunset for the most dramatic views",
              "About 20 minutes from Silver Lake by car",
              "Walk the grounds after your drinks, the gardens are beautiful at night"
            ]
          },
          // ── Alt 2: Hollywood Bowl ──
          {
            name: "Hollywood Bowl",
            type: "Experience",
            location: "Hollywood, Los Angeles",
            tagline: "LA's legendary outdoor amphitheater nestled in the Hollywood Hills with live music under the stars",
            description: "If there's a concert happening on your anniversary, <a href=\"https://www.google.com/maps/search/?api=1&query=Hollywood+Bowl+2301+N+Highland+Ave+Los+Angeles\" target=\"_blank\">Hollywood Bowl</a> is one of the most magical live music experiences on earth. Sarah and James, imagine sitting under the stars in the Hollywood Hills listening to music while the warm evening air wraps around you. You can bring your own food and wine which makes it feel like the world's most glamorous picnic. Check the schedule for April 15 because if something is playing, this is an anniversary memory you'll never forget.",
            image: "images/sarah-james/hollywood-bowl-1.jpg",
            images: [
              "images/sarah-james/hollywood-bowl-1.jpg",
              "images/sarah-james/hollywood-bowl-2.jpg",
              "images/sarah-james/hollywood-bowl-3.jpg",
              "images/sarah-james/hollywood-bowl-4.jpg",
              "images/sarah-james/hollywood-bowl-5.jpg",
              "images/sarah-james/hollywood-bowl-6.jpg"
            ],
            address: "2301 N Highland Ave, Los Angeles, CA 90068",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.1122,-118.3392",
            appleMapsUrl: "https://maps.apple.com/?daddr=34.1122,-118.3392&dirflg=d",
            parkingOptions: [
              {
                type: "stacked",
                recommended: true,
                name: "Hollywood Bowl Parking",
                address: "2301 N Highland Ave, Los Angeles, CA 90068",
                cost: "$20 to $30",
                tip: "Pre-purchase parking passes online. Arrive early because the parking situation can be intense.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.1122,-118.3392",
                appleMapsUrl: "https://maps.apple.com/?daddr=34.1122,-118.3392&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=34.1122&dropoff[longitude]=-118.3392&dropoff[nickname]=Hollywood%20Bowl",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=34.1122&destination[longitude]=-118.3392"
            },
            cost: "$20 to $100+ per ticket depending on the show",
            dressCode: "Casual to smart casual. Layers are key for evening shows.",
            reservation: null,
            reviews: {
              google: { stars: 4.7, count: 35000 },
              yelp: { stars: 4.5, count: 2800 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: "https://www.hollywoodbowl.com/",
            phone: "(323) 850-2000",
            foodRecs: {
              sarah: [
                { name: "Bring Your Own Picnic", price: "$0", note: "You're allowed to bring food and wine into the Hollywood Bowl. Pack something special for your anniversary." }
              ],
              james: [
                { name: "Bring Your Own Picnic", price: "$0", note: "James pack some dairy free snacks and a bottle of wine. It's the ultimate picnic date." }
              ]
            },
            tips: [
              "Check hollywoodbowl.com for the April 15 schedule",
              "Buy tickets and parking in advance",
              "Bring a blanket and picnic supplies",
              "Rideshare is actually easier than driving here on show nights"
            ]
          },
          // ── Alt 3: Barnsdall Art Park ──
          {
            name: "Barnsdall Art Park",
            type: "Experience",
            location: "East Hollywood / Los Feliz, Los Angeles",
            tagline: "A hidden hilltop park with a Frank Lloyd Wright house, city views, and a free Friday wine tasting vibe",
            description: "For a quieter, more intimate hilltop experience, <a href=\"https://www.google.com/maps/search/?api=1&query=Barnsdall+Art+Park+4800+Hollywood+Blvd+Los+Angeles\" target=\"_blank\">Barnsdall Art Park</a> is a hidden gem sitting on a hill in East Hollywood with sweeping views of the city and a stunning Frank Lloyd Wright house right at the top. Sarah and James, this is the kind of place where you can walk the grounds, sit on the grass watching the sunset, and feel like you've discovered a secret that most tourists never find. It's quieter and more intimate than the Observatory and the views are still incredible.",
            image: "images/sarah-james/barnsdall-art-park-1.jpg",
            images: [
              "images/sarah-james/barnsdall-art-park-1.jpg",
              "images/sarah-james/barnsdall-art-park-2.jpg",
              "images/sarah-james/barnsdall-art-park-3.jpg",
              "images/sarah-james/barnsdall-art-park-4.jpg",
              "images/sarah-james/barnsdall-art-park-5.jpg",
              "images/sarah-james/barnsdall-art-park-6.jpg"
            ],
            address: "4800 Hollywood Blvd, Los Angeles, CA 90027",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.1016,-118.2942",
            appleMapsUrl: "https://maps.apple.com/?daddr=34.1016,-118.2942&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "Free Parking at Barnsdall Art Park",
                address: "4800 Hollywood Blvd, Los Angeles, CA 90027",
                cost: "Free",
                tip: "Free parking in the lot at the top of the hill. Enter from Hollywood Blvd.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.1016,-118.2942",
                appleMapsUrl: "https://maps.apple.com/?daddr=34.1016,-118.2942&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=34.1016&dropoff[longitude]=-118.2942&dropoff[nickname]=Barnsdall%20Art%20Park",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=34.1016&destination[longitude]=-118.2942"
            },
            cost: "Free",
            dressCode: "Casual. It's a park so wear comfortable shoes.",
            reservation: null,
            reviews: {
              google: { stars: 4.6, count: 4200 },
              yelp: { stars: 4.5, count: 350 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: "(323) 644-6269",
            foodRecs: {
              sarah: [
                { name: "Bring a Bottle of Wine", price: "$0", note: "Pack a bottle and enjoy it on the lawn watching the sunset. Sarah this is peak romance." }
              ],
              james: [
                { name: "Coffee from Nearby", price: "$5", note: "Grab a coffee from one of the nearby Los Feliz cafes and bring it up." }
              ]
            },
            tips: [
              "The park closes at sunset on most days, check current hours",
              "The Frank Lloyd Wright Hollyhock House tours are fascinating if you arrive early enough",
              "Much less crowded than Griffith Observatory",
              "About 10 minutes from Silver Lake by car"
            ]
          }
        ]
      },

      // ── STOP 3: ALCOVE CAFE & BAKERY ──
      {
        order: 3,
        time: "9:00 PM",
        endTime: "10:00 PM",
        name: "Alcove Cafe & Bakery",
        type: "Dessert",
        location: "Los Feliz, Los Angeles",
        tagline: "A charming garden cafe in a 1916 Spanish duplex with incredible pastries and cocktails to close the night",
        description: "The perfect ending to your anniversary night is at <a href=\"https://www.google.com/maps/search/?api=1&query=Alcove+Cafe+%26+Bakery+1929+Hillhurst+Ave+Los+Angeles\" target=\"_blank\">Alcove Cafe & Bakery</a>, one of the most charming spots in all of Los Feliz. The building is a 1916 Spanish duplex with a garden patio that's strung with lights and feels like something out of a movie. Sarah and James, grab a slice of cake and a cocktail from the Big Bar next door and sit in the garden together. James ask about their dairy free dessert options, they usually have sorbet and fruit based desserts that are incredible. Sarah the pastry case here is genuinely dangerous in the best way. This is the kind of place where you'll sit there looking at each other thinking about how perfect this night was.",
        image: "images/sarah-james/alcove-cafe-1.jpg",
        images: [
          "images/sarah-james/alcove-cafe-1.jpg",
          "images/sarah-james/alcove-cafe-2.jpg",
          "images/sarah-james/alcove-cafe-3.jpg",
          "images/sarah-james/alcove-cafe-4.jpg",
          "images/sarah-james/alcove-cafe-5.jpg",
          "images/sarah-james/alcove-cafe-6.jpg"
        ],
        address: "1929 Hillhurst Ave, Los Angeles, CA 90027",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.1063,-118.2877",
        appleMapsUrl: "https://maps.apple.com/?daddr=34.1063,-118.2877&dirflg=d",
        parkingOptions: [
          {
            type: "street",
            recommended: true,
            name: "Street Parking on Hillhurst Ave",
            address: "Hillhurst Ave near Alcove Cafe, Los Feliz",
            cost: "Free in the evening",
            tip: "Free street parking on Hillhurst and the side streets in the evening. Los Feliz is usually pretty easy to park in after 8 PM.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.1063,-118.2877",
            appleMapsUrl: "https://maps.apple.com/?daddr=34.1063,-118.2877&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=34.1063&dropoff[longitude]=-118.2877&dropoff[nickname]=Alcove%20Cafe",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=34.1063&destination[longitude]=-118.2877"
        },
        cost: "$15 to $30 for two desserts and drinks",
        dressCode: "Whatever you wore to dinner. You're perfect.",
        reservation: null,
        reviews: {
          google: { stars: 4.4, count: 4200 },
          yelp: { stars: 4.2, count: 4987 }
        },
        happyHour: null,
        menuUrl: "https://www.alcovecafe.com/alcove-menus",
        reservationUrl: null,
        phone: "(323) 644-0100",
        foodRecs: {
          sarah: [
            { name: "Seasonal Cake Slice", price: "$9", note: "Their pastry case always has something incredible. Sarah pick whatever catches your eye." },
            { name: "Cocktail from Big Bar", price: "$14", note: "The Big Bar next door makes incredible craft cocktails. Grab one and bring it to the garden." }
          ],
          james: [
            { name: "Sorbet or Fruit Tart", price: "$8", note: "Ask what dairy free desserts they have today. James they always have sorbet and usually a fruit based option." },
            { name: "Old Fashioned from Big Bar", price: "$14", note: "The Big Bar does a great old fashioned. James treat yourself." }
          ]
        },
        tips: [
          "The garden patio is where you want to sit, it's magical at night with the string lights",
          "Big Bar next door has craft cocktails that pair perfectly with dessert",
          "Ask about dairy free dessert options, they're accommodating",
          "This spot is about 15 minutes from Griffith Observatory by car",
          "Open until 10 PM on weeknights so don't rush, you have time"
        ],
        swapOptions: [
          // ── Alt 1: Van Leeuwen Ice Cream ──
          {
            name: "Van Leeuwen Ice Cream",
            type: "Dessert",
            location: "Silver Lake, Los Angeles",
            tagline: "Artisan ice cream made from scratch with incredible vegan and dairy free options",
            description: "If you want ice cream to close the night, <a href=\"https://www.google.com/maps/search/?api=1&query=Van+Leeuwen+Ice+Cream+2925+W+Sunset+Blvd+Los+Angeles\" target=\"_blank\">Van Leeuwen</a> in Silver Lake makes everything from scratch and their vegan lineup is one of the best in the country. James this is a game changer because their vegan ice cream is made with cashew milk and coconut cream and it's genuinely as good as the regular stuff. Sarah their classic flavors like salted caramel and honeycomb are incredible. Grab a cone or a cup and take a walk down Sunset Blvd together.",
            image: "images/sarah-james/van-leeuwen-1.jpg",
            images: [
              "images/sarah-james/van-leeuwen-1.jpg",
              "images/sarah-james/van-leeuwen-2.jpg",
              "images/sarah-james/van-leeuwen-3.jpg",
              "images/sarah-james/van-leeuwen-4.jpg",
              "images/sarah-james/van-leeuwen-5.jpg",
              "images/sarah-james/van-leeuwen-6.jpg"
            ],
            address: "2925 W Sunset Blvd, Los Angeles, CA 90026",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.0836,-118.2695",
            appleMapsUrl: "https://maps.apple.com/?daddr=34.0836,-118.2695&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Small Parking Lot and Street Parking",
                address: "2925 W Sunset Blvd, Los Angeles, CA 90026",
                cost: "Free",
                tip: "Small parking lot on site and metered street parking on Sunset. Usually easy to find a spot in the evening.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.0836,-118.2695",
                appleMapsUrl: "https://maps.apple.com/?daddr=34.0836,-118.2695&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=34.0836&dropoff[longitude]=-118.2695&dropoff[nickname]=Van%20Leeuwen%20Ice%20Cream",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=34.0836&destination[longitude]=-118.2695"
            },
            cost: "$10 to $18 for two",
            dressCode: "Casual. It's an ice cream shop.",
            reservation: null,
            reviews: {
              google: { stars: 4.5, count: 800 },
              yelp: { stars: 4.4, count: 186 }
            },
            happyHour: null,
            menuUrl: "https://vanleeuwenicecream.com/",
            reservationUrl: null,
            phone: "(323) 522-3456",
            foodRecs: {
              sarah: [
                { name: "Salted Caramel", price: "$6", note: "Rich, buttery, and perfectly salty sweet. Sarah this is their most popular flavor for a reason." }
              ],
              james: [
                { name: "Vegan Chocolate Fudge Brownie", price: "$7", note: "Made with cashew milk and coconut cream. James you genuinely cannot tell it's dairy free." }
              ]
            },
            tips: [
              "The vegan flavors are made with cashew milk and coconut cream",
              "Open until midnight on weekdays so no rush",
              "About 15 minutes from Griffith Observatory by car",
              "Walking along Sunset Blvd after ice cream is a perfect way to end the night"
            ]
          },
          // ── Alt 2: House of Pies ──
          {
            name: "House of Pies",
            type: "Dessert",
            location: "Los Feliz, Los Angeles",
            tagline: "An iconic LA diner serving homemade pies since 1969 that's open until the wee hours",
            description: "For a truly nostalgic LA dessert experience, <a href=\"https://www.google.com/maps/search/?api=1&query=House+of+Pies+1869+N+Vermont+Ave+Los+Angeles\" target=\"_blank\">House of Pies</a> in Los Feliz has been making homemade pies since 1969 and it's an absolute institution. Sarah and James, sliding into a booth and sharing a slice of pie after a night like this is the most romantic thing you didn't know you needed. Sarah the coconut cream pie is legendary and James the apple pie or boysenberry pie with no whipped cream is a perfect dairy free option. It's open late, it's charming in that classic diner way, and the pies are genuinely incredible.",
            image: "images/sarah-james/house-of-pies-1.jpg",
            images: [
              "images/sarah-james/house-of-pies-1.jpg",
              "images/sarah-james/house-of-pies-2.jpg",
              "images/sarah-james/house-of-pies-3.jpg",
              "images/sarah-james/house-of-pies-4.jpg",
              "images/sarah-james/house-of-pies-5.jpg",
              "images/sarah-james/house-of-pies-6.jpg"
            ],
            address: "1869 N Vermont Ave, Los Angeles, CA 90027",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.1051,-118.2920",
            appleMapsUrl: "https://maps.apple.com/?daddr=34.1051,-118.2920&dirflg=d",
            parkingOptions: [
              {
                type: "lot",
                recommended: true,
                name: "Parking Lot at House of Pies",
                address: "1869 N Vermont Ave, Los Angeles, CA 90027",
                cost: "Free",
                tip: "Free parking lot right at the restaurant. Easy in and out.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.1051,-118.2920",
                appleMapsUrl: "https://maps.apple.com/?daddr=34.1051,-118.2920&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=34.1051&dropoff[longitude]=-118.2920&dropoff[nickname]=House%20of%20Pies",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=34.1051&destination[longitude]=-118.2920"
            },
            cost: "$10 to $15 for two slices and coffee",
            dressCode: "Casual. It's a classic diner.",
            reservation: null,
            reviews: {
              google: { stars: 4.2, count: 4800 },
              yelp: { stars: 3.8, count: 2286 }
            },
            happyHour: null,
            menuUrl: "http://houseofpiesla.com/menus",
            reservationUrl: null,
            phone: "(323) 666-9961",
            foodRecs: {
              sarah: [
                { name: "Coconut Cream Pie", price: "$7", note: "Sarah this is the one everyone talks about. Rich, creamy, and genuinely perfect." }
              ],
              james: [
                { name: "Boysenberry Pie", price: "$7", note: "Ask for it without whipped cream or ice cream and it's dairy free. James the fruit pies here are incredible." }
              ]
            },
            tips: [
              "Open until 1 AM on Wednesday nights so zero rush",
              "The fruit pies are the best dairy free options",
              "About 10 minutes from Griffith Observatory by car",
              "Classic LA vibes, perfect way to close an anniversary"
            ]
          },
          // ── Alt 3: Jeni's Splendid Ice Creams ──
          {
            name: "Jeni's Splendid Ice Creams",
            type: "Dessert",
            location: "Los Feliz, Los Angeles",
            tagline: "Award winning artisan ice cream with creative seasonal flavors and great dairy free sorbets",
            description: "For top tier ice cream in the heart of Los Feliz, <a href=\"https://www.google.com/maps/search/?api=1&query=Jeni's+Splendid+Ice+Creams+Los+Feliz+Los+Angeles\" target=\"_blank\">Jeni's Splendid Ice Creams</a> is an award winning scoop shop with some of the most creative flavors you'll find anywhere. Sarah and James, the flavors change with the seasons and they always have something that surprises you. Sarah the salted peanut butter with chocolate flecks is unreal. James their fruit sorbets are dairy free and packed with real fruit flavor. It's a sweet, simple, perfect way to walk hand in hand through Los Feliz on your anniversary.",
            image: "images/sarah-james/jenis-ice-cream-1.jpg",
            images: [
              "images/sarah-james/jenis-ice-cream-1.jpg",
              "images/sarah-james/jenis-ice-cream-2.jpg",
              "images/sarah-james/jenis-ice-cream-3.jpg",
              "images/sarah-james/jenis-ice-cream-4.jpg",
              "images/sarah-james/jenis-ice-cream-5.jpg",
              "images/sarah-james/jenis-ice-cream-6.jpg"
            ],
            address: "1954 Hillhurst Ave, Los Angeles, CA 90027",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.1070,-118.2876",
            appleMapsUrl: "https://maps.apple.com/?daddr=34.1070,-118.2876&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking on Hillhurst Ave",
                address: "Hillhurst Ave near Jeni's, Los Feliz",
                cost: "Free in the evening",
                tip: "Free street parking on Hillhurst and side streets in the evening.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.1070,-118.2876",
                appleMapsUrl: "https://maps.apple.com/?daddr=34.1070,-118.2876&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=34.1070&dropoff[longitude]=-118.2876&dropoff[nickname]=Jeni's%20Ice%20Creams",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=34.1070&destination[longitude]=-118.2876"
            },
            cost: "$10 to $16 for two",
            dressCode: "Casual.",
            reservation: null,
            reviews: {
              google: { stars: 4.5, count: 1200 },
              yelp: { stars: 4.3, count: 450 }
            },
            happyHour: null,
            menuUrl: "https://jenis.com/",
            reservationUrl: null,
            phone: "(323) 928-2668",
            foodRecs: {
              sarah: [
                { name: "Salted Peanut Butter with Chocolate Flecks", price: "$7", note: "Sarah this is one of their most famous flavors and it absolutely lives up to it." }
              ],
              james: [
                { name: "Seasonal Fruit Sorbet", price: "$6", note: "James their sorbets are all dairy free and made with real fruit. Ask what seasonal flavors they have." }
              ]
            },
            tips: [
              "Ask for samples, they're happy to let you try before you buy",
              "The sorbets are James's best bet for dairy free",
              "Right on Hillhurst, the main drag of Los Feliz",
              "About 12 minutes from Griffith Observatory by car"
            ]
          }
        ]
      }
    ],

    travelTimes: [
      { from: 1, to: 2, duration: "15 min drive", mode: "drive" },
      { from: 2, to: 3, duration: "12 min drive", mode: "drive" }
    ],

    budget: {
      items: [
        { label: "Night + Market Song (dinner for two)", cost: "$40–60" },
        { label: "Griffith Observatory (parking)", cost: "$10–15" },
        { label: "Alcove Cafe (dessert and cocktails for two)", cost: "$15–30" }
      ],
      total: "$65–105",
      tip: "Plan A is very budget friendly. The Observatory is free admission so your big spend is dinner and you have plenty of room left in the $150 to $250 budget for drinks and extras throughout the night."
    },

    checklist: [
      { id: "chk-nm-res", text: "Book Night + Market Song reservation on Resy for 5:30 PM Wednesday", bold: "Night + Market Song" },
      { id: "chk-observatory-parking", text: "Arrive at Griffith Observatory by 7:00 PM to catch sunset at 7:26 PM", bold: "7:00 PM" },
      { id: "chk-jacket", text: "Bring a light jacket or sweater for the Observatory, it gets breezy up on the hill", bold: "light jacket" },
      { id: "chk-dairy", text: "Mention James's dairy allergy at Night + Market Song when you're seated", bold: "dairy allergy" }
    ],

    calendar: {
      title: "DateFlo: Observatory Sunset",
      date: "20260415",
      startTime: "T003000Z",
      endTime: "T050000Z",
      location: "Silver Lake / Griffith Park / Los Feliz, Los Angeles, CA",
      description: "Plan A: Observatory Sunset\\n\\n5:30 PM Night + Market Song (Dinner)\\n7:15 PM Griffith Observatory (Sunset)\\n9:00 PM Alcove Cafe & Bakery (Dessert)\\n\\nHappy First Anniversary!"
    }
  },

  // ════════════════════════════════════
  // PLAN B: LOS FELIZ LOVE LETTER
  // ════════════════════════════════════
  {
    id: "los-feliz-love-letter",
    couple: "Sarah & James",
    coupleId: "sarah-james-2026",
    partner1: "Sarah",
    partner2: "James",
    planName: "Los Feliz Love Letter",
    planEmoji: "💌",
    planVibe: "A cozy, intimate anniversary night entirely in Los Feliz with Mediterranean flavors, award winning Mexican cocktails, and artisan ice cream to close the night.",
    greeting: "Sarah and James, happy first anniversary. This plan is your love letter to Los Feliz, one of the most romantic neighborhoods in LA. You're starting with beautiful Mediterranean food at a restaurant that's earned a James Beard nomination, then walking over to an award winning Mexican restaurant and bar for cocktails in a space that feels like an enchanted garden, and finishing with artisan ice cream that's going to make James very happy because the dairy free options here are genuinely world class. Everything tonight is within a few minutes of each other so you can relax, take your time, and just enjoy being together.",
    occasion: "First Anniversary",
    date: "Wednesday, April 15, 2026",
    dateShort: "Wed, April 15",
    startTime: "5:30 PM",
    endTime: "10:00 PM",
    city: "Los Angeles, CA",
    area: "Los Feliz",
    coverImage: "images/sarah-james/kismet-1.jpg",
    route: "Home → Kismet → Mirate → Van Leeuwen Ice Cream → Home",

    preferences: {
      sarah: {
        dietary: "No allergies",
        flavors: "Thai, Mediterranean",
        drinks: "Open",
        avoid: "Olives"
      },
      james: {
        dietary: "Dairy allergy",
        flavors: "Steakhouse, Mexican",
        drinks: "Open",
        avoid: "Raw fish, Dairy"
      }
    },

    weather: {
      high: "74°F",
      low: "56°F",
      conditions: "Classic LA spring evening. Clear skies and warm temperatures.",
      sunset: "7:26 PM",
      rainChance: "5%",
      note: "Beautiful spring evening in Los Feliz. Warm enough for outdoor dining and a light jacket after sunset is all you need."
    },

    stops: [
      // ── STOP 1: KISMET ──
      {
        order: 1,
        time: "5:30 PM",
        endTime: "7:15 PM",
        name: "Kismet",
        type: "Dinner",
        location: "Los Feliz, Los Angeles",
        tagline: "James Beard nominated Mediterranean restaurant with seasonal California inspired dishes and a Michelin Bib Gourmand",
        description: "Your anniversary dinner starts at one of the most celebrated restaurants in Los Feliz. <a href=\"https://www.google.com/maps/search/?api=1&query=Kismet+4648+Hollywood+Blvd+Los+Angeles\" target=\"_blank\">Kismet</a> earned a Michelin Bib Gourmand and a James Beard nomination and the food is this beautiful blend of Mediterranean and Middle Eastern flavors with California ingredients. Sarah this is going to be right up your alley with bright, fresh, vegetable forward dishes that burst with flavor. James the grilled meats and rice dishes are hearty and satisfying and the kitchen is great about accommodating dietary needs. The space is light, airy, and genuinely beautiful. Tell them it's your anniversary because this is exactly the kind of restaurant that makes a night feel special.",
        image: "images/sarah-james/kismet-1.jpg",
        images: [
          "images/sarah-james/kismet-1.jpg",
          "images/sarah-james/kismet-2.jpg",
          "images/sarah-james/kismet-3.jpg",
          "images/sarah-james/kismet-4.jpg",
          "images/sarah-james/kismet-5.jpg",
          "images/sarah-james/kismet-6.jpg"
        ],
        address: "4648 Hollywood Blvd, Los Angeles, CA 90027",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.1013,-118.2929",
        appleMapsUrl: "https://maps.apple.com/?daddr=34.1013,-118.2929&dirflg=d",
        parkingOptions: [
          {
            type: "street",
            recommended: true,
            name: "Street Parking on Hollywood Blvd",
            address: "Hollywood Blvd near Kismet, Los Feliz",
            cost: "Metered, free after 8 PM",
            tip: "Metered spots on Hollywood Blvd and free parking on the residential side streets. At 5:30 PM you'll still need to feed the meter but spots are usually available.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.1013,-118.2929",
            appleMapsUrl: "https://maps.apple.com/?daddr=34.1013,-118.2929&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=34.1013&dropoff[longitude]=-118.2929&dropoff[nickname]=Kismet",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=34.1013&destination[longitude]=-118.2929"
        },
        cost: "$60 to $90 for two sharing several dishes",
        dressCode: "Smart casual. Kismet has an upscale but relaxed vibe. Look nice but don't overdress.",
        reservation: {
          time: "5:30 PM",
          partySize: 2,
          notes: "Reservations strongly recommended. Book through Resy. Mention it's your anniversary when you book."
        },
        reviews: {
          google: { stars: 4.5, count: 2100 },
          yelp: { stars: 4.4, count: 735 }
        },
        happyHour: null,
        menuUrl: "https://www.kismetla.com/",
        reservationUrl: "https://resy.com/cities/los-angeles-ca/venues/kismet",
        phone: "(323) 409-0404",
        foodRecs: {
          sarah: [
            { name: "Persian Crispy Rice (Tahdig)", price: "$20", note: "Crunchy, golden, and one of the most famous dishes on the menu. Sarah this is a must order. Ask them to hold any olive garnish." },
            { name: "Moroccan Spiced Carrots", price: "$15", note: "Roasted to perfection with warm spices. Completely dairy free and absolutely stunning." },
            { name: "Seasonal Vegetable Dish", price: "$16", note: "Whatever's in season is going to be beautiful. Ask the server what's best tonight." }
          ],
          james: [
            { name: "Grilled Lamb Shoulder", price: "$28", note: "Tender, well spiced, and naturally dairy free. James this is the hearty centerpiece you want." },
            { name: "Malawach Flatbread", price: "$14", note: "Flaky Yemeni Jewish flatbread. Ask if it's made with butter or oil. The olive tahini comes on the side so Sarah can skip it." },
            { name: "Hummus", price: "$12", note: "Silky smooth and naturally dairy free. Perfect for sharing." }
          ]
        },
        tips: [
          "Book on Resy and mention your anniversary",
          "Order family style with 4 to 5 dishes to share",
          "Ask about olive free modifications for Sarah",
          "Let the server know about the dairy allergy right away",
          "The seasonal dishes change regularly so ask what's new"
        ],
        swapOptions: [
          // ── Alt 1: Night + Market Song ──
          {
            name: "Night + Market Song",
            type: "Dinner",
            location: "Silver Lake, Los Angeles",
            tagline: "Cult favorite Thai restaurant with bold LA Thai flavors and a laid back Silver Lake vibe",
            description: "If Sarah wants Thai instead of Mediterranean, <a href=\"https://www.google.com/maps/search/?api=1&query=Night+%2B+Market+Song+3322+W+Sunset+Blvd+Los+Angeles\" target=\"_blank\">Night + Market Song</a> is one of the most beloved Thai restaurants in all of LA. Chef Kris Yenbamroong's LA Thai style is bold, flavorful, and genuinely exciting. Sarah the larb and papaya salad are incredible and James Thai food is naturally dairy free so you have tons of options here. The vibe is casual, fun, and about 10 minutes from Los Feliz by car.",
            image: "images/sarah-james/night-market-song-1.jpg",
            images: [
              "images/sarah-james/night-market-song-1.jpg",
              "images/sarah-james/night-market-song-2.jpg",
              "images/sarah-james/night-market-song-3.jpg",
              "images/sarah-james/night-market-song-4.jpg",
              "images/sarah-james/night-market-song-5.jpg",
              "images/sarah-james/night-market-song-6.jpg"
            ],
            address: "3322 W Sunset Blvd, Los Angeles, CA 90026",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.0832,-118.2746",
            appleMapsUrl: "https://maps.apple.com/?daddr=34.0832,-118.2746&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking on Sunset Blvd",
                address: "Sunset Blvd near Night + Market Song, Silver Lake",
                cost: "Metered, $1 to $2 per hour",
                tip: "Metered street parking on Sunset and free parking on residential side streets.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.0832,-118.2746",
                appleMapsUrl: "https://maps.apple.com/?daddr=34.0832,-118.2746&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=34.0832&dropoff[longitude]=-118.2746&dropoff[nickname]=Night%20%2B%20Market%20Song",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=34.0832&destination[longitude]=-118.2746"
            },
            cost: "$40 to $60 for two sharing dishes",
            dressCode: "Smart casual. Laid back but you're celebrating.",
            reservation: {
              time: "5:30 PM",
              partySize: 2,
              notes: "Reservations recommended through Resy."
            },
            reviews: {
              google: { stars: 4.5, count: 3800 },
              yelp: { stars: 4.3, count: 1384 }
            },
            happyHour: null,
            menuUrl: "https://www.nightmarketsong.com/song-dinner",
            reservationUrl: "https://resy.com/cities/los-angeles-ca/venues/night-and-market-song-silverlake",
            phone: "(323) 665-5899",
            foodRecs: {
              sarah: [
                { name: "Larb", price: "$16", note: "Bright, herby, and perfectly spiced. Sarah this is a must." },
                { name: "Papaya Salad", price: "$14", note: "Fresh, crunchy, and no olives anywhere near it." }
              ],
              james: [
                { name: "BBQ Pork Neck", price: "$18", note: "Smoky, tender, and completely dairy free." },
                { name: "Party Wings", price: "$16", note: "Legendary wings, naturally dairy free." }
              ]
            },
            tips: [
              "Thai food is naturally dairy free, great for James",
              "About 10 minutes from Los Feliz by car",
              "Book on Resy for a weeknight table"
            ]
          },
          // ── Alt 2: Tam O'Shanter ──
          {
            name: "Tam O'Shanter",
            type: "Dinner",
            location: "Atwater Village / Los Feliz, Los Angeles",
            tagline: "LA's oldest restaurant with legendary prime rib in a charming storybook setting since 1922",
            description: "For a classic steakhouse anniversary dinner, <a href=\"https://www.google.com/maps/search/?api=1&query=Tam+O'Shanter+2980+Los+Feliz+Blvd+Los+Angeles\" target=\"_blank\">Tam O'Shanter</a> has been serving LA since 1922 and the whole place feels like a warm, storybook cottage. James the bone in prime rib with au jus is dairy free and legendary. Sarah the grilled fish and seasonal salads are fresh and flavorful. Free parking, a romantic atmosphere, and over 100 years of history make this a perfect anniversary spot.",
            image: "images/sarah-james/tam-oshanter-1.jpg",
            images: [
              "images/sarah-james/tam-oshanter-1.jpg",
              "images/sarah-james/tam-oshanter-2.jpg",
              "images/sarah-james/tam-oshanter-3.jpg",
              "images/sarah-james/tam-oshanter-4.jpg",
              "images/sarah-james/tam-oshanter-5.jpg",
              "images/sarah-james/tam-oshanter-6.jpg"
            ],
            address: "2980 Los Feliz Blvd, Los Angeles, CA 90039",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.1215,-118.2675",
            appleMapsUrl: "https://maps.apple.com/?daddr=34.1215,-118.2675&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "Free Self Parking",
                address: "2980 Los Feliz Blvd, Los Angeles, CA 90039",
                cost: "Free",
                tip: "Free self parking in the evening. A rare perk in LA.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.1215,-118.2675",
                appleMapsUrl: "https://maps.apple.com/?daddr=34.1215,-118.2675&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=34.1215&dropoff[longitude]=-118.2675&dropoff[nickname]=Tam%20O'Shanter",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=34.1215&destination[longitude]=-118.2675"
            },
            cost: "$60 to $90 for two",
            dressCode: "Smart casual to business casual.",
            reservation: {
              time: "5:30 PM",
              partySize: 2,
              notes: "Reservations recommended through OpenTable."
            },
            reviews: {
              google: { stars: 4.4, count: 4600 },
              yelp: { stars: 4.2, count: 2440 }
            },
            happyHour: null,
            menuUrl: "https://www.lawrysonline.com/tam-o-shanter/",
            reservationUrl: "https://www.opentable.com/tam-o-shanter",
            phone: "(323) 664-0228",
            foodRecs: {
              sarah: [
                { name: "Scottish Salmon", price: "$32", note: "Light and flavorful, olive free." },
                { name: "Wedge Salad", price: "$14", note: "Fresh and classic. Ask for no cheese." }
              ],
              james: [
                { name: "Bone In Prime Rib", price: "$48", note: "Legendary. The au jus is naturally dairy free." },
                { name: "Filet Mignon", price: "$52", note: "Ask for no butter finish." }
              ]
            },
            tips: [
              "Mention your anniversary when booking",
              "Free parking is a huge perk",
              "The prime rib is the must order"
            ]
          },
          // ── Alt 3: Encanto ──
          {
            name: "Encanto",
            type: "Dinner",
            location: "Los Feliz, Los Angeles",
            tagline: "Upscale contemporary Mexican cuisine with Baja Coastal flavors and a refined atmosphere",
            description: "For a more upscale anniversary dinner with Mexican flavors, <a href=\"https://www.google.com/maps/search/?api=1&query=Encanto+Los+Feliz+Los+Angeles\" target=\"_blank\">Encanto</a> in Los Feliz does contemporary Mexican cuisine that blends traditional Baja Coastal flavors with modern techniques. James the charred asada is incredible and dairy free and Sarah the seasonal vegetable dishes are beautifully prepared. The atmosphere is elegant and refined, exactly the kind of place that makes an anniversary feel truly special.",
            image: "images/sarah-james/encanto-1.jpg",
            images: [
              "images/sarah-james/encanto-1.jpg",
              "images/sarah-james/encanto-2.jpg",
              "images/sarah-james/encanto-3.jpg",
              "images/sarah-james/encanto-4.jpg",
              "images/sarah-james/encanto-5.jpg",
              "images/sarah-james/encanto-6.jpg"
            ],
            address: "1927 Hillhurst Ave, Los Angeles, CA 90027",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.1062,-118.2878",
            appleMapsUrl: "https://maps.apple.com/?daddr=34.1062,-118.2878&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking on Hillhurst Ave",
                address: "Hillhurst Ave near Encanto, Los Feliz",
                cost: "Metered, free after 8 PM",
                tip: "Metered spots on Hillhurst and free side street parking.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.1062,-118.2878",
                appleMapsUrl: "https://maps.apple.com/?daddr=34.1062,-118.2878&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=34.1062&dropoff[longitude]=-118.2878&dropoff[nickname]=Encanto",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=34.1062&destination[longitude]=-118.2878"
            },
            cost: "$80 to $120 for two",
            dressCode: "Business casual. This is a nicer restaurant.",
            reservation: {
              time: "5:30 PM",
              partySize: 2,
              notes: "Reservations recommended. Book through OpenTable or Resy."
            },
            reviews: {
              google: { stars: 4.4, count: 600 },
              yelp: { stars: 4.2, count: 350 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: null,
            foodRecs: {
              sarah: [
                { name: "Seasonal Vegetables", price: "$18", note: "Beautifully prepared with Mexican spices. Sarah ask which options are olive free." }
              ],
              james: [
                { name: "Charred Asada", price: "$38", note: "Perfectly cooked, naturally dairy free. James this is the centerpiece dish." }
              ]
            },
            tips: [
              "Upscale option so dress a little nicer",
              "Mention your anniversary for a special touch",
              "Right on Hillhurst in the heart of Los Feliz"
            ]
          }
        ]
      },

      // ── STOP 2: MIRATE ──
      {
        order: 2,
        time: "7:30 PM",
        endTime: "9:00 PM",
        name: "Mirate",
        type: "Drinks & Apps",
        location: "Los Feliz, Los Angeles",
        tagline: "Award winning Mexican restaurant and bar voted Best Bar in California with an enchanted garden feel",
        description: "After dinner you're walking over to <a href=\"https://www.google.com/maps/search/?api=1&query=Mirate+1712+N+Vermont+Ave+Los+Angeles\" target=\"_blank\">Mirate</a>, which was voted the Best Bar in California and the Best Bar on the West Coast and once you walk in you'll understand why. The space feels like an enchanted garden with a towering tree in the middle and dreamy lighting everywhere. James the mezcal cocktails here are genuinely world class and Sarah the tequila based drinks are bright and refreshing. Order a couple of light apps to share while you enjoy your cocktails because the small plates are incredible. This is the kind of place where you lose track of time together in the best possible way.",
        image: "images/sarah-james/mirate-1.jpg",
        images: [
          "images/sarah-james/mirate-1.jpg",
          "images/sarah-james/mirate-2.jpg",
          "images/sarah-james/mirate-3.jpg",
          "images/sarah-james/mirate-4.jpg",
          "images/sarah-james/mirate-5.jpg",
          "images/sarah-james/mirate-6.jpg"
        ],
        address: "1712 N Vermont Ave, Los Angeles, CA 90027",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.1027,-118.2919",
        appleMapsUrl: "https://maps.apple.com/?daddr=34.1027,-118.2919&dirflg=d",
        parkingOptions: [
          {
            type: "street",
            recommended: true,
            name: "Street Parking on Vermont Ave",
            address: "Vermont Ave near Mirate, Los Feliz",
            cost: "Metered, free after 8 PM",
            tip: "Metered spots on Vermont and free parking on side streets. Since you're coming from Kismet, it's an easy 5 minute drive or a pleasant 10 minute walk.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.1027,-118.2919",
            appleMapsUrl: "https://maps.apple.com/?daddr=34.1027,-118.2919&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=34.1027&dropoff[longitude]=-118.2919&dropoff[nickname]=Mirate",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=34.1027&destination[longitude]=-118.2919"
        },
        cost: "$40 to $60 for two cocktails and a couple of small plates",
        dressCode: "Smart casual. The vibe is upscale but not stuffy.",
        reservation: {
          time: "7:30 PM",
          partySize: 2,
          notes: "Reservations recommended. Book through Resy or their website mirate.la."
        },
        reviews: {
          google: { stars: 4.5, count: 2200 },
          yelp: { stars: 4.3, count: 1095 }
        },
        happyHour: null,
        menuUrl: "https://www.mirate.la/comida",
        reservationUrl: "https://www.mirate.la/",
        phone: "(323) 649-7937",
        foodRecs: {
          sarah: [
            { name: "Salsa Molcajete", price: "$12", note: "Fresh, smoky salsa served in a volcanic stone bowl. Sarah it's the perfect thing to snack on with drinks." },
            { name: "Mezcal Margarita", price: "$18", note: "Smoky and bright with fresh lime. One of the best cocktails in LA." }
          ],
          james: [
            { name: "Taco Campechano", price: "$8", note: "Brisket and chorizo with queso and fries. James ask them to hold the queso for dairy free and it's still incredible." },
            { name: "Mezcal Flight", price: "$22", note: "They have one of the best mezcal selections in the city. James try a flight and find your favorite." }
          ]
        },
        tips: [
          "Book on Resy for Wednesday evening",
          "The upstairs areas are more intimate and romantic",
          "Ask about dairy free modifications for the small plates",
          "About 5 minutes from Kismet by car or a nice 10 minute walk",
          "This place was voted Best Bar on the West Coast so the cocktails are worth savoring"
        ],
        swapOptions: [
          // ── Alt 1: Casita Del Campo ──
          {
            name: "Casita Del Campo",
            type: "Drinks & Apps",
            location: "Los Feliz / Silver Lake, Los Angeles",
            tagline: "A beloved family owned Mexican restaurant since 1962 with incredible margaritas and intimate candlelit vibes",
            description: "If you want something with more old school LA charm, <a href=\"https://www.google.com/maps/search/?api=1&query=Casita+Del+Campo+1920+Hyperion+Ave+Los+Angeles\" target=\"_blank\">Casita Del Campo</a> has been a Los Feliz and Silver Lake landmark since 1962. The margaritas are legendary, the atmosphere is warm and candlelit, and there's this beautiful sense of history in every corner. Sarah and James, grabbing margaritas and sharing some guacamole here feels like the most perfectly relaxed anniversary move.",
            image: "images/sarah-james/casita-del-campo-1.jpg",
            images: [
              "images/sarah-james/casita-del-campo-1.jpg",
              "images/sarah-james/casita-del-campo-2.jpg",
              "images/sarah-james/casita-del-campo-3.jpg",
              "images/sarah-james/casita-del-campo-4.jpg",
              "images/sarah-james/casita-del-campo-5.jpg",
              "images/sarah-james/casita-del-campo-6.jpg"
            ],
            address: "1920 Hyperion Ave, Los Angeles, CA 90027",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.0990,-118.2770",
            appleMapsUrl: "https://maps.apple.com/?daddr=34.0990,-118.2770&dirflg=d",
            parkingOptions: [
              {
                type: "lot",
                recommended: true,
                name: "Parking Lot at Casita Del Campo",
                address: "1920 Hyperion Ave, Los Angeles, CA 90027",
                cost: "Free",
                tip: "Free parking lot right at the restaurant.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.0990,-118.2770",
                appleMapsUrl: "https://maps.apple.com/?daddr=34.0990,-118.2770&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=34.0990&dropoff[longitude]=-118.2770&dropoff[nickname]=Casita%20Del%20Campo",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=34.0990&destination[longitude]=-118.2770"
            },
            cost: "$25 to $40 for two margaritas and guacamole",
            dressCode: "Casual to smart casual.",
            reservation: null,
            reviews: {
              google: { stars: 4.3, count: 2800 },
              yelp: { stars: 4.0, count: 1500 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: "(323) 662-4255",
            foodRecs: {
              sarah: [
                { name: "Skinny Margarita", price: "$14", note: "Fresh lime and tequila. Simple and perfect." }
              ],
              james: [
                { name: "Classic Margarita", price: "$14", note: "Their margaritas are legendary. Naturally dairy free." }
              ]
            },
            tips: [
              "The margaritas are the star here",
              "Free parking is a nice bonus",
              "Been a beloved landmark since 1962",
              "About 10 minutes from Kismet by car"
            ]
          },
          // ── Alt 2: Bar Etoile ──
          {
            name: "Bar Etoile",
            type: "Drinks & Apps",
            location: "East Hollywood, Los Angeles",
            tagline: "A cozy cool French cocktail bar with soft jazz, snuggly banquettes, and a romantic after dark atmosphere",
            description: "For a completely different vibe, <a href=\"https://www.google.com/maps/search/?api=1&query=Bar+Etoile+East+Hollywood+Los+Angeles\" target=\"_blank\">Bar Etoile</a> in East Hollywood is a cozy French inspired cocktail bar where soft jazz plays and well dressed couples lean into each other over gimlets. Sarah and James, the atmosphere here is the definition of romantic. Dim lighting, horseshoe shaped bar, and snuggly banquettes that make you forget the rest of the world exists. The small plates have non classic twists that keep things interesting.",
            image: "images/sarah-james/bar-etoile-1.jpg",
            images: [
              "images/sarah-james/bar-etoile-1.jpg",
              "images/sarah-james/bar-etoile-2.jpg",
              "images/sarah-james/bar-etoile-3.jpg",
              "images/sarah-james/bar-etoile-4.jpg",
              "images/sarah-james/bar-etoile-5.jpg",
              "images/sarah-james/bar-etoile-6.jpg"
            ],
            address: "1521 Griffith Park Blvd, Los Angeles, CA 90026",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.0960,-118.2810",
            appleMapsUrl: "https://maps.apple.com/?daddr=34.0960,-118.2810&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking on Griffith Park Blvd",
                address: "Griffith Park Blvd near Bar Etoile, East Hollywood",
                cost: "Free in the evening",
                tip: "Free residential street parking in the evening.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.0960,-118.2810",
                appleMapsUrl: "https://maps.apple.com/?daddr=34.0960,-118.2810&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=34.0960&dropoff[longitude]=-118.2810&dropoff[nickname]=Bar%20Etoile",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=34.0960&destination[longitude]=-118.2810"
            },
            cost: "$30 to $50 for two cocktails and a small plate",
            dressCode: "Smart casual. The crowd dresses up a bit here.",
            reservation: null,
            reviews: {
              google: { stars: 4.5, count: 900 },
              yelp: { stars: 4.4, count: 400 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: null,
            foodRecs: {
              sarah: [
                { name: "Gimlet", price: "$16", note: "Classic and perfectly made. The vibe makes it taste even better." }
              ],
              james: [
                { name: "Whiskey Sour", price: "$16", note: "Naturally dairy free and well crafted." }
              ]
            },
            tips: [
              "The atmosphere is incredibly romantic",
              "About 8 minutes from Kismet by car",
              "Arrive and grab a banquette for the coziest experience",
              "Soft jazz plays most evenings"
            ]
          },
          // ── Alt 3: The Dresden ──
          {
            name: "The Dresden",
            type: "Drinks & Apps",
            location: "Los Feliz, Los Angeles",
            tagline: "An iconic mid century lounge with live jazz, strong cocktails, and genuine old Hollywood glamour",
            description: "For a truly iconic LA experience, <a href=\"https://www.google.com/maps/search/?api=1&query=The+Dresden+1760+N+Vermont+Ave+Los+Angeles\" target=\"_blank\">The Dresden</a> in Los Feliz is a mid century lounge that's been a favorite since 1954. Sarah and James, you might recognize it from the movie Swingers but the real magic is sitting in one of the velvet booths listening to live jazz while sipping cocktails. The whole place oozes old Hollywood glamour and the Blood & Sand cocktail is their signature. It's the kind of spot where your anniversary feels like a scene from a classic film.",
            image: "images/sarah-james/the-dresden-1.jpg",
            images: [
              "images/sarah-james/the-dresden-1.jpg",
              "images/sarah-james/the-dresden-2.jpg",
              "images/sarah-james/the-dresden-3.jpg",
              "images/sarah-james/the-dresden-4.jpg",
              "images/sarah-james/the-dresden-5.jpg",
              "images/sarah-james/the-dresden-6.jpg"
            ],
            address: "1760 N Vermont Ave, Los Angeles, CA 90027",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.1035,-118.2918",
            appleMapsUrl: "https://maps.apple.com/?daddr=34.1035,-118.2918&dirflg=d",
            parkingOptions: [
              {
                type: "valet",
                recommended: true,
                name: "Valet Parking at The Dresden",
                address: "1760 N Vermont Ave, Los Angeles, CA 90027",
                cost: "$10",
                tip: "Valet parking available. Street parking on Vermont is also an option.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.1035,-118.2918",
                appleMapsUrl: "https://maps.apple.com/?daddr=34.1035,-118.2918&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=34.1035&dropoff[longitude]=-118.2918&dropoff[nickname]=The%20Dresden",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=34.1035&destination[longitude]=-118.2918"
            },
            cost: "$25 to $40 for two cocktails",
            dressCode: "Smart casual. Dress up a little, the vibe calls for it.",
            reservation: null,
            reviews: {
              google: { stars: 4.4, count: 3200 },
              yelp: { stars: 4.2, count: 1800 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: "(323) 665-4294",
            foodRecs: {
              sarah: [
                { name: "Blood & Sand Cocktail", price: "$15", note: "Their signature cocktail. Sarah it's a must try." }
              ],
              james: [
                { name: "Old Fashioned", price: "$14", note: "Classic, strong, and dairy free. James the perfect anniversary drink." }
              ]
            },
            tips: [
              "Live music most evenings, check their schedule",
              "Literally next door to Mirate on Vermont Ave",
              "The velvet booths are the most romantic seats",
              "An LA institution since 1954"
            ]
          }
        ]
      },

      // ── STOP 3: VAN LEEUWEN ICE CREAM ──
      {
        order: 3,
        time: "9:15 PM",
        endTime: "10:00 PM",
        name: "Van Leeuwen Ice Cream",
        type: "Dessert",
        location: "Silver Lake, Los Angeles",
        tagline: "Artisan ice cream made from scratch with world class vegan and dairy free options",
        description: "You're closing out your anniversary at <a href=\"https://www.google.com/maps/search/?api=1&query=Van+Leeuwen+Ice+Cream+2925+W+Sunset+Blvd+Los+Angeles\" target=\"_blank\">Van Leeuwen Ice Cream</a> in Silver Lake because their dairy free ice cream is genuinely some of the best in the entire country. James this is your moment because their vegan lineup is made with cashew milk and coconut cream and it tastes just as good as the regular flavors. Sarah their classic ice creams are incredible too so you can each get exactly what you want. Grab your cones and take a walk together down Sunset Blvd. There's something about walking through Silver Lake on a warm spring night with ice cream in hand that just feels like the perfect way to end your first anniversary.",
        image: "images/sarah-james/van-leeuwen-1.jpg",
        images: [
          "images/sarah-james/van-leeuwen-1.jpg",
          "images/sarah-james/van-leeuwen-2.jpg",
          "images/sarah-james/van-leeuwen-3.jpg",
          "images/sarah-james/van-leeuwen-4.jpg",
          "images/sarah-james/van-leeuwen-5.jpg",
          "images/sarah-james/van-leeuwen-6.jpg"
        ],
        address: "2925 W Sunset Blvd, Los Angeles, CA 90026",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.0836,-118.2695",
        appleMapsUrl: "https://maps.apple.com/?daddr=34.0836,-118.2695&dirflg=d",
        parkingOptions: [
          {
            type: "lot",
            recommended: true,
            name: "Small Parking Lot at Van Leeuwen",
            address: "2925 W Sunset Blvd, Los Angeles, CA 90026",
            cost: "Free",
            tip: "Small parking lot right at the shop plus metered street parking on Sunset.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.0836,-118.2695",
            appleMapsUrl: "https://maps.apple.com/?daddr=34.0836,-118.2695&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=34.0836&dropoff[longitude]=-118.2695&dropoff[nickname]=Van%20Leeuwen%20Ice%20Cream",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=34.0836&destination[longitude]=-118.2695"
        },
        cost: "$12 to $18 for two",
        dressCode: "Casual. It's ice cream time.",
        reservation: null,
        reviews: {
          google: { stars: 4.5, count: 800 },
          yelp: { stars: 4.4, count: 186 }
        },
        happyHour: null,
        menuUrl: "https://vanleeuwenicecream.com/",
        reservationUrl: null,
        phone: "(323) 522-3456",
        foodRecs: {
          sarah: [
            { name: "Salted Caramel", price: "$6", note: "Rich, buttery, and perfectly salty sweet. Sarah this is their most popular flavor." },
            { name: "Honeycomb", price: "$6", note: "Sweet and crunchy with bits of honeycomb throughout. Unique and delicious." }
          ],
          james: [
            { name: "Vegan Chocolate Fudge Brownie", price: "$7", note: "Made with cashew milk and coconut cream. James you genuinely will not believe this is dairy free." },
            { name: "Vegan Cookies & Cream", price: "$7", note: "Another incredible dairy free option. The cookie pieces are perfectly crunchy." }
          ]
        },
        tips: [
          "The vegan flavors are clearly labeled so James can pick easily",
          "Open until midnight on weeknights so take your time",
          "Grab your cones and walk down Sunset Blvd together",
          "About 10 minutes from Mirate by car",
          "Ask for samples, they're happy to let you try before you commit"
        ],
        swapOptions: [
          // ── Alt 1: Alcove Cafe & Bakery ──
          {
            name: "Alcove Cafe & Bakery",
            type: "Dessert",
            location: "Los Feliz, Los Angeles",
            tagline: "Charming garden cafe in a 1916 Spanish duplex with incredible pastries and craft cocktails next door",
            description: "For a more sit down dessert experience, <a href=\"https://www.google.com/maps/search/?api=1&query=Alcove+Cafe+%26+Bakery+1929+Hillhurst+Ave+Los+Angeles\" target=\"_blank\">Alcove Cafe & Bakery</a> has a gorgeous garden patio with string lights and the pastry case is genuinely dangerous. Sarah pick whatever catches your eye from the bakery and James ask about dairy free options, they usually have sorbet and fruit based desserts. The Big Bar next door does craft cocktails that pair perfectly. It's steps from Mirate so you don't even need to move the car.",
            image: "images/sarah-james/alcove-cafe-1.jpg",
            images: [
              "images/sarah-james/alcove-cafe-1.jpg",
              "images/sarah-james/alcove-cafe-2.jpg",
              "images/sarah-james/alcove-cafe-3.jpg",
              "images/sarah-james/alcove-cafe-4.jpg",
              "images/sarah-james/alcove-cafe-5.jpg",
              "images/sarah-james/alcove-cafe-6.jpg"
            ],
            address: "1929 Hillhurst Ave, Los Angeles, CA 90027",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.1063,-118.2877",
            appleMapsUrl: "https://maps.apple.com/?daddr=34.1063,-118.2877&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking on Hillhurst Ave",
                address: "Hillhurst Ave near Alcove, Los Feliz",
                cost: "Free in the evening",
                tip: "Free street parking in the evening on Hillhurst and side streets.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.1063,-118.2877",
                appleMapsUrl: "https://maps.apple.com/?daddr=34.1063,-118.2877&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=34.1063&dropoff[longitude]=-118.2877&dropoff[nickname]=Alcove%20Cafe",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=34.1063&destination[longitude]=-118.2877"
            },
            cost: "$15 to $30 for two desserts and cocktails",
            dressCode: "Whatever you wore to dinner.",
            reservation: null,
            reviews: {
              google: { stars: 4.4, count: 4200 },
              yelp: { stars: 4.2, count: 4987 }
            },
            happyHour: null,
            menuUrl: "https://www.alcovecafe.com/alcove-menus",
            reservationUrl: null,
            phone: "(323) 644-0100",
            foodRecs: {
              sarah: [
                { name: "Seasonal Cake Slice", price: "$9", note: "The pastry case always has something incredible." }
              ],
              james: [
                { name: "Sorbet or Fruit Tart", price: "$8", note: "Ask about dairy free options. They're always accommodating." }
              ]
            },
            tips: [
              "The garden patio is magical at night",
              "Big Bar next door for craft cocktails",
              "Open until 10 PM on weeknights",
              "Steps from Mirate on Hillhurst"
            ]
          },
          // ── Alt 2: House of Pies ──
          {
            name: "House of Pies",
            type: "Dessert",
            location: "Los Feliz, Los Angeles",
            tagline: "Iconic LA diner with homemade pies since 1969, open late for the perfect nostalgic ending",
            description: "For a classic, nostalgic way to end the night, <a href=\"https://www.google.com/maps/search/?api=1&query=House+of+Pies+1869+N+Vermont+Ave+Los+Angeles\" target=\"_blank\">House of Pies</a> has been making homemade pies in Los Feliz since 1969. Sarah and James, sliding into a booth and sharing pie after your anniversary night is genuinely perfect. James the fruit pies like boysenberry and apple are dairy free without whipped cream. Sarah the coconut cream pie is legendary. It's open late, it's charming, and it's right down the street from Mirate.",
            image: "images/sarah-james/house-of-pies-1.jpg",
            images: [
              "images/sarah-james/house-of-pies-1.jpg",
              "images/sarah-james/house-of-pies-2.jpg",
              "images/sarah-james/house-of-pies-3.jpg",
              "images/sarah-james/house-of-pies-4.jpg",
              "images/sarah-james/house-of-pies-5.jpg",
              "images/sarah-james/house-of-pies-6.jpg"
            ],
            address: "1869 N Vermont Ave, Los Angeles, CA 90027",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.1051,-118.2920",
            appleMapsUrl: "https://maps.apple.com/?daddr=34.1051,-118.2920&dirflg=d",
            parkingOptions: [
              {
                type: "lot",
                recommended: true,
                name: "Parking Lot at House of Pies",
                address: "1869 N Vermont Ave, Los Angeles, CA 90027",
                cost: "Free",
                tip: "Free parking lot right at the restaurant.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.1051,-118.2920",
                appleMapsUrl: "https://maps.apple.com/?daddr=34.1051,-118.2920&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=34.1051&dropoff[longitude]=-118.2920&dropoff[nickname]=House%20of%20Pies",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=34.1051&destination[longitude]=-118.2920"
            },
            cost: "$10 to $15 for two slices and coffee",
            dressCode: "Casual. It's a classic diner.",
            reservation: null,
            reviews: {
              google: { stars: 4.2, count: 4800 },
              yelp: { stars: 3.8, count: 2286 }
            },
            happyHour: null,
            menuUrl: "http://houseofpiesla.com/menus",
            reservationUrl: null,
            phone: "(323) 666-9961",
            foodRecs: {
              sarah: [
                { name: "Coconut Cream Pie", price: "$7", note: "Legendary. Rich, creamy, perfect." }
              ],
              james: [
                { name: "Boysenberry Pie", price: "$7", note: "Skip the whipped cream and it's dairy free. The fruit pies are incredible." }
              ]
            },
            tips: [
              "Open until 1 AM on Wednesdays",
              "The fruit pies are best for dairy free",
              "Right on Vermont Ave, 2 minutes from Mirate",
              "Classic LA institution since 1969"
            ]
          },
          // ── Alt 3: Salt & Straw ──
          {
            name: "Salt & Straw",
            type: "Dessert",
            location: "Larchmont Village, Los Angeles",
            tagline: "Creative artisan ice cream with seasonal flavors inspired by local farms and bold flavor combinations",
            description: "For ice cream with a creative twist, <a href=\"https://www.google.com/maps/search/?api=1&query=Salt+%26+Straw+Larchmont+Los+Angeles\" target=\"_blank\">Salt & Straw</a> in Larchmont Village takes artisan ice cream to another level with flavors inspired by local farms and seasonal ingredients. Sarah and James, they always have something unexpected on the menu and the tasting flights let you try multiple flavors. James they have dairy free coconut based options that are incredible. It's about 15 minutes from Los Feliz and worth the short drive for a truly special dessert experience.",
            image: "images/sarah-james/salt-and-straw-1.jpg",
            images: [
              "images/sarah-james/salt-and-straw-1.jpg",
              "images/sarah-james/salt-and-straw-2.jpg",
              "images/sarah-james/salt-and-straw-3.jpg",
              "images/sarah-james/salt-and-straw-4.jpg",
              "images/sarah-james/salt-and-straw-5.jpg",
              "images/sarah-james/salt-and-straw-6.jpg"
            ],
            address: "240 N Larchmont Blvd, Los Angeles, CA 90004",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.0760,-118.3235",
            appleMapsUrl: "https://maps.apple.com/?daddr=34.0760,-118.3235&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking on Larchmont Blvd",
                address: "Larchmont Blvd near Salt & Straw",
                cost: "Free in the evening",
                tip: "Free street parking on Larchmont Blvd in the evening. The village is charming to walk around.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.0760,-118.3235",
                appleMapsUrl: "https://maps.apple.com/?daddr=34.0760,-118.3235&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=34.0760&dropoff[longitude]=-118.3235&dropoff[nickname]=Salt%20%26%20Straw",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=34.0760&destination[longitude]=-118.3235"
            },
            cost: "$12 to $18 for two",
            dressCode: "Casual.",
            reservation: null,
            reviews: {
              google: { stars: 4.6, count: 3500 },
              yelp: { stars: 4.5, count: 1800 }
            },
            happyHour: null,
            menuUrl: "https://saltandstraw.com/",
            reservationUrl: null,
            phone: "(323) 466-3849",
            foodRecs: {
              sarah: [
                { name: "Seasonal Special", price: "$7", note: "Ask what's new this month. Their seasonal flavors are always creative and delicious." }
              ],
              james: [
                { name: "Coconut Based Dairy Free Option", price: "$7", note: "Their coconut cream based flavors are rich and incredible. James they always have at least one dairy free option." }
              ]
            },
            tips: [
              "Ask for the tasting flight to try four flavors",
              "They always have dairy free coconut cream options",
              "About 15 minutes from Los Feliz by car",
              "Larchmont Village is charming for an after ice cream stroll"
            ]
          }
        ]
      }
    ],

    travelTimes: [
      { from: 1, to: 2, duration: "5 min drive or 10 min walk", mode: "drive" },
      { from: 2, to: 3, duration: "10 min drive", mode: "drive" }
    ],

    budget: {
      items: [
        { label: "Kismet (dinner for two)", cost: "$60–90" },
        { label: "Mirate (cocktails and small plates for two)", cost: "$40–60" },
        { label: "Van Leeuwen Ice Cream (ice cream for two)", cost: "$12–18" }
      ],
      total: "$112–168",
      tip: "Plan B is a bit more of a splurge on dinner and drinks but it's your anniversary so it's worth it. If you want to save, share fewer dishes at Kismet and stick to two cocktails at Mirate."
    },

    checklist: [
      { id: "chk-kismet-res", text: "Book Kismet reservation on Resy for 5:30 PM Wednesday and mention your anniversary", bold: "Kismet" },
      { id: "chk-mirate-res", text: "Book Mirate reservation on Resy for 7:30 PM", bold: "Mirate" },
      { id: "chk-dairy-alert", text: "Mention James's dairy allergy at both Kismet and Mirate when seated", bold: "dairy allergy" },
      { id: "chk-olive-alert", text: "Ask about olive free modifications at Kismet for Sarah", bold: "olive free" }
    ],

    calendar: {
      title: "DateFlo: Los Feliz Love Letter",
      date: "20260415",
      startTime: "T003000Z",
      endTime: "T050000Z",
      location: "Los Feliz / Silver Lake, Los Angeles, CA",
      description: "Plan B: Los Feliz Love Letter\\n\\n5:30 PM Kismet (Dinner)\\n7:30 PM Mirate (Cocktails & Apps)\\n9:15 PM Van Leeuwen Ice Cream (Dessert)\\n\\nHappy First Anniversary!"
    }
  }
];

window.PLAN = window.PLAN_ALL[0];
