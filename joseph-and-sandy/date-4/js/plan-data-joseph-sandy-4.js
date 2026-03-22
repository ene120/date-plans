// ═══════════════════════════════════════════════════
// DateFlo | Joseph & Sandy | Date #4: Gold Coast Morning / Lincoln Park Brunch
// Monday, March 24, 2026 | 11:00 AM – 1:00 PM
// Real venues, real data, real everything
// Supports Plan A (Gold Coast Morning) and Plan B (Lincoln Park Brunch)
// Full swap options with complete venue objects
// ═══════════════════════════════════════════════════

window.PLAN_ALL = [
  // ════════════════════════════════════
  // PLAN A: GOLD COAST MORNING
  // ════════════════════════════════════
  {
    id: "gold-coast-morning",
    couple: "Joseph & Sandy",
    coupleId: "joseph-sandy-2026",
    partner1: "Joseph",
    partner2: "Sandy",
    planName: "Gold Coast Morning",
    planEmoji: "☀️",
    planVibe: "A gorgeous late morning in Gold Coast with one of the most stunning brunch spots in all of Chicago followed by world class coffee.",
    greeting: "Good morning Joseph and Sandy! We put together the kind of Monday morning that makes you forget what day of the week it is. You're starting at what might be the most beautiful restaurant in Chicago, a skylit garden courtyard inside a four story Restoration Hardware that feels like brunch inside a European greenhouse. Then you're walking a few blocks to one of the best coffee roasters in the country for a proper cup to close things out. Everything is walkable, the vibes are artsy, and you'll be done by 1 PM feeling like you just had the best morning of the year.",
    occasion: "Morning Date",
    date: "Monday, March 24, 2026",
    dateShort: "Mon, March 24",
    startTime: "11:00 AM",
    endTime: "1:00 PM",
    city: "Chicago, IL",
    area: "Gold Coast / River North",
    coverImage: "images/joseph-sandy/3-arts-club-1.jpg",
    route: "Home → 3 Arts Club Cafe → Intelligentsia Coffee → Home",

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
      high: "50°F",
      low: "35°F",
      conditions: "Cool but warmer than the weekend. Clear skies expected.",
      sunset: "7:10 PM",
      rainChance: "5%",
      note: "It'll be in the mid 40s when you're walking between stops so a light jacket is perfect. Nothing heavy, just a layer you can throw on between the two spots."
    },

    stops: [
      // ── STOP 1: 3 ARTS CLUB CAFE ──
      {
        order: 1,
        time: "11:00 AM",
        endTime: "12:15 PM",
        name: "3 Arts Club Cafe",
        type: "Brunch",
        location: "Gold Coast, Chicago",
        tagline: "A stunning skylit garden courtyard inside Restoration Hardware that is genuinely one of the most beautiful brunch spots in the country",
        description: "This is where your Monday morning becomes something truly special. <a href=\"https://www.google.com/maps/search/?api=1&query=3+Arts+Club+Cafe+1300+N+Dearborn+St+Chicago\" target=\"_blank\">3 Arts Club Cafe</a> is tucked inside the four story Restoration Hardware building on Dearborn and the moment you walk in you're going to understand why people lose their minds over this place. The courtyard has a massive glass skylight, dripping chandeliers, olive trees, and a fountain in the center. It feels like brunch inside a Tuscan garden and the food absolutely holds up to the setting. Joseph the Steak Sandwich is incredible and Sandy the RH Scramble with smoked salmon is one of the best egg dishes in the city. Share the Truffle Grilled Cheese between you two because it is honestly unreal.",
        image: "images/joseph-sandy/3-arts-club-1.jpg",
        images: [
          "images/joseph-sandy/3-arts-club-1.jpg",
          "images/joseph-sandy/3-arts-club-2.jpg",
          "images/joseph-sandy/3-arts-club-3.jpg",
          "images/joseph-sandy/3-arts-club-4.jpg",
          "images/joseph-sandy/3-arts-club-5.jpg",
          "images/joseph-sandy/3-arts-club-6.jpg"
        ],
        address: "1300 N Dearborn St, Chicago, IL 60610",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9059,-87.6290",
        appleMapsUrl: "https://maps.apple.com/?daddr=41.9059,-87.6290&dirflg=d",
        parkingOptions: [
          {
            type: "paid",
            recommended: true,
            name: "SP+ Parking at 1260 N Dearborn",
            address: "1260 N Dearborn St, Chicago, IL 60610",
            cost: "$12 to $20",
            tip: "Half a block south of RH. Metered street parking is also available on Goethe and Dearborn but the garage is easier on a Monday morning.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9050,-87.6290",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9050,-87.6290&dirflg=d"
          },
          {
            type: "street",
            recommended: false,
            name: "Metered Street Parking on Goethe St",
            address: "Goethe St near Dearborn, Chicago",
            cost: "$2 to $4/hr",
            tip: "Metered spots on Goethe are usually available Monday mornings. Two hour max.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9063,-87.6295",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9063,-87.6295&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9059&dropoff[longitude]=-87.6290&dropoff[nickname]=3%20Arts%20Club%20Cafe",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9059&destination[longitude]=-87.6290"
        },
        cost: "$30 to $50 for two",
        dressCode: "Smart casual. This place is gorgeous so dress up a little bit. You don't need to go full formal but a nice top and clean shoes will match the vibe perfectly.",
        reservation: {
          time: "11:00 AM",
          partySize: 2,
          notes: "Reservations recommended, especially on weekends. Monday morning should be easier to get in but booking on OpenTable is smart to guarantee a courtyard table."
        },
        reviews: {
          google: { stars: 4.5, count: 3200 },
          yelp: { stars: 4.5, count: 1717 }
        },
        happyHour: null,
        menuUrl: "https://rfrh.com/us/en/restaurant/3-arts-club-cafe/",
        reservationUrl: "https://www.opentable.com/r/3-arts-club-cafe-chicago",
        phone: "(312) 475-9116",
        foodRecs: {
          joseph: [
            { name: "Steak Sandwich", price: "$26", note: "Perfectly seasoned with caramelized onions and a side of fries. Joseph this is the move." },
            { name: "Truffle Grilled Cheese", price: "$18", note: "Share this one. Truffle, melted gruyere, and sourdough. It's absurdly good." },
            { name: "Lobster Roll", price: "$32", note: "If you're feeling fancy, the lobster roll here is legit." }
          ],
          sandy: [
            { name: "RH Scramble", price: "$19", note: "Fluffy scrambled eggs with smoked salmon, creme fraiche, and chives. Sandy this is beautiful." },
            { name: "Truffle Grilled Cheese", price: "$18", note: "Definitely share this with Joseph. The truffle flavor is incredible." },
            { name: "Avocado Toast", price: "$16", note: "Simple but done perfectly. Heirloom tomatoes and a poached egg on top." }
          ]
        },
        tips: [
          "Ask for a courtyard table when you arrive, that's where the magic is",
          "The Truffle Grilled Cheese is worth sharing even if you both order entrees",
          "Monday mornings are much less crowded than weekends so you'll have a great experience",
          "Wander around the RH store after brunch, it's four floors of beautiful design"
        ],
        swapOptions: [
          // ── Alt 1: Summer House Santa Monica ──
          {
            name: "Summer House Santa Monica",
            type: "Brunch",
            location: "Gold Coast, Chicago",
            tagline: "California vibes in Chicago with gorgeous pastries, light filled interiors, and incredible brunch plates",
            description: "If you want that bright California brunch energy in the middle of Chicago, <a href=\"https://www.google.com/maps/search/?api=1&query=Summer+House+Santa+Monica+1954+N+Halsted+St+Chicago\" target=\"_blank\">Summer House Santa Monica</a> is your spot. The space is filled with natural light, white wood, greenery everywhere, and a cookie bar right when you walk in that smells incredible. Joseph the Breakfast Burrito here is loaded and Sandy the Lemon Ricotta Pancakes are light, fluffy, and absolutely gorgeous. The whole place feels like a sunny morning in Malibu even when it's 50 degrees outside.",
            image: "images/joseph-sandy/summer-house-1.jpg",
            images: [
              "images/joseph-sandy/summer-house-1.jpg",
              "images/joseph-sandy/summer-house-2.jpg",
              "images/joseph-sandy/summer-house-3.jpg",
              "images/joseph-sandy/summer-house-4.jpg",
              "images/joseph-sandy/summer-house-5.jpg",
              "images/joseph-sandy/summer-house-6.jpg"
            ],
            address: "1954 N Halsted St, Chicago, IL 60614",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9170,-87.6484",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9170,-87.6484&dirflg=d",
            parkingOptions: [
              {
                type: "paid",
                recommended: true,
                name: "Lincoln Common Garage",
                address: "2003 N Lincoln Ave, Chicago, IL 60614",
                cost: "$10 to $15",
                tip: "Validated parking available with restaurant purchase. Ask your server.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9179,-87.6496",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.9179,-87.6496&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9170&dropoff[longitude]=-87.6484&dropoff[nickname]=Summer%20House%20Santa%20Monica",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9170&destination[longitude]=-87.6484"
            },
            cost: "$25 to $45 for two",
            dressCode: "Casual chic. Think clean and bright.",
            reservation: {
              time: "11:00 AM",
              partySize: 2,
              notes: "Book on Resy. Monday mornings are usually available."
            },
            reviews: {
              google: { stars: 4.4, count: 4500 },
              yelp: { stars: 4.0, count: 2800 }
            },
            happyHour: null,
            menuUrl: "https://www.summerhousesm.com/menus/",
            reservationUrl: "https://resy.com/cities/chi/summer-house-santa-monica",
            phone: "(773) 634-4100",
            foodRecs: {
              joseph: [
                { name: "Breakfast Burrito", price: "$18", note: "Loaded with scrambled eggs, chorizo, avocado, and salsa verde. Joseph this is huge." },
                { name: "S'mores Cookie", price: "$5", note: "From the cookie bar up front. Grab one on the way out." }
              ],
              sandy: [
                { name: "Lemon Ricotta Pancakes", price: "$17", note: "Light, fluffy, and topped with fresh berries. Sandy these are gorgeous." },
                { name: "Avocado Toast", price: "$16", note: "On thick sourdough with everything seasoning and a poached egg." }
              ]
            },
            tips: [
              "The cookie bar near the entrance is incredible, grab one for the road",
              "Ask for a booth by the windows for the best light",
              "Monday mornings are very chill here compared to weekends"
            ]
          },
          // ── Alt 2: Maple & Ash ──
          {
            name: "Maple & Ash",
            type: "Brunch",
            location: "Gold Coast, Chicago",
            tagline: "Upscale Gold Coast brunch with a famous 'I Don't Give a F*@k' tasting option",
            description: "If you want brunch that feels like a real event, <a href=\"https://www.google.com/maps/search/?api=1&query=Maple+%26+Ash+8+W+Maple+St+Chicago\" target=\"_blank\">Maple & Ash</a> is one of the most talked about brunch spots in Chicago. The space is sleek and sophisticated, the service is incredible, and they have this famous option where you just tell the chef to surprise you and they send out course after course of whatever they feel like making. Joseph the Wagyu Steak & Eggs is unreal and Sandy the Brioche French Toast is one of the best in the city. This is Gold Coast at its finest.",
            image: "images/joseph-sandy/maple-ash-1.jpg",
            images: [
              "images/joseph-sandy/maple-ash-1.jpg",
              "images/joseph-sandy/maple-ash-2.jpg",
              "images/joseph-sandy/maple-ash-3.jpg",
              "images/joseph-sandy/maple-ash-4.jpg",
              "images/joseph-sandy/maple-ash-5.jpg",
              "images/joseph-sandy/maple-ash-6.jpg"
            ],
            address: "8 W Maple St, Chicago, IL 60610",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9018,-87.6282",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9018,-87.6282&dirflg=d",
            parkingOptions: [
              {
                type: "paid",
                recommended: true,
                name: "900 N Michigan Garage",
                address: "900 N Michigan Ave, Chicago, IL 60611",
                cost: "$15 to $25",
                tip: "One block east. Easy access and covered.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9006,-87.6243",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.9006,-87.6243&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9018&dropoff[longitude]=-87.6282&dropoff[nickname]=Maple%20%26%20Ash",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9018&destination[longitude]=-87.6282"
            },
            cost: "$35 to $55 for two",
            dressCode: "Smart casual to dressy. This is a nice spot.",
            reservation: {
              time: "11:00 AM",
              partySize: 2,
              notes: "Book on OpenTable. Highly recommended."
            },
            reviews: {
              google: { stars: 4.5, count: 2800 },
              yelp: { stars: 4.5, count: 1600 }
            },
            happyHour: null,
            menuUrl: "https://www.mapleandash.com/menus/",
            reservationUrl: "https://www.opentable.com/maple-and-ash",
            phone: "(312) 944-8888",
            foodRecs: {
              joseph: [
                { name: "Wagyu Steak & Eggs", price: "$32", note: "Perfectly cooked wagyu with two sunny eggs. Joseph you'll love this." },
                { name: "Smoked Brisket Hash", price: "$22", note: "Tender brisket with crispy potatoes and a fried egg on top." }
              ],
              sandy: [
                { name: "Brioche French Toast", price: "$19", note: "Thick cut brioche with fresh berries and whipped cream. Sandy this is stunning." },
                { name: "Eggs Benedict", price: "$21", note: "Classic done perfectly with hollandaise that's silky smooth." }
              ]
            },
            tips: [
              "This spot can go over budget so stick to one entree each to stay under $50",
              "The vibe is upscale but not stuffy, you'll feel right at home",
              "Ask about the tasting option if you want to let the chef surprise you"
            ]
          },
          // ── Alt 3: The Dearborn ──
          {
            name: "The Dearborn",
            type: "Brunch",
            location: "The Loop, Chicago",
            tagline: "A modern American tavern with inventive brunch dishes and a gorgeous dining room",
            description: "For a brunch that feels polished but not pretentious, <a href=\"https://www.google.com/maps/search/?api=1&query=The+Dearborn+145+N+Dearborn+St+Chicago\" target=\"_blank\">The Dearborn</a> is one of the best in the city. The space is warm with exposed brick, leather banquettes, and beautiful natural light. Joseph the Braised Short Rib Benedict is hearty and incredible and Sandy the Lemon Blueberry Pancakes are fluffy and bright. The cocktail list is impressive too if you want to start the morning with a Bloody Mary or Bellini.",
            image: "images/joseph-sandy/the-dearborn-1.jpg",
            images: [
              "images/joseph-sandy/the-dearborn-1.jpg",
              "images/joseph-sandy/the-dearborn-2.jpg",
              "images/joseph-sandy/the-dearborn-3.jpg",
              "images/joseph-sandy/the-dearborn-4.jpg",
              "images/joseph-sandy/the-dearborn-5.jpg",
              "images/joseph-sandy/the-dearborn-6.jpg"
            ],
            address: "145 N Dearborn St, Chicago, IL 60602",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8841,-87.6293",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8841,-87.6293&dirflg=d",
            parkingOptions: [
              {
                type: "paid",
                recommended: true,
                name: "InterPark at 20 N Dearborn",
                address: "20 N Dearborn St, Chicago, IL 60602",
                cost: "$15 to $22",
                tip: "One block south. Easy walk.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8825,-87.6293",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.8825,-87.6293&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8841&dropoff[longitude]=-87.6293&dropoff[nickname]=The%20Dearborn",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8841&destination[longitude]=-87.6293"
            },
            cost: "$25 to $45 for two",
            dressCode: "Smart casual. Nice but not overdressed.",
            reservation: {
              time: "11:00 AM",
              partySize: 2,
              notes: "Book on OpenTable. Monday brunch is usually easy to get a table."
            },
            reviews: {
              google: { stars: 4.5, count: 2400 },
              yelp: { stars: 4.0, count: 1900 }
            },
            happyHour: null,
            menuUrl: "https://thedearborntavern.com/menus/brunch/",
            reservationUrl: "https://www.opentable.com/the-dearborn",
            phone: "(312) 384-1242",
            foodRecs: {
              joseph: [
                { name: "Braised Short Rib Benedict", price: "$22", note: "Tender short rib on an English muffin with hollandaise. Joseph this is hearty and perfect." },
                { name: "Steak & Eggs", price: "$28", note: "Classic done right with a perfectly cooked flat iron." }
              ],
              sandy: [
                { name: "Lemon Blueberry Pancakes", price: "$17", note: "Fluffy, bright, and topped with fresh blueberry compote." },
                { name: "Chicken & Waffles", price: "$21", note: "Crispy fried chicken on a Belgian waffle with maple syrup. So good." }
              ]
            },
            tips: [
              "The Loop is very quiet on Monday mornings so parking and walking are easy",
              "Great cocktail list if you want a morning Bellini",
              "Beautiful interior with lots of natural light"
            ]
          }
        ]
      },

      // ── STOP 2: INTELLIGENTSIA COFFEE ──
      {
        order: 2,
        time: "12:30 PM",
        endTime: "1:00 PM",
        name: "Intelligentsia Coffee",
        type: "Coffee",
        location: "Gold Coast / Streeterville, Chicago",
        tagline: "One of the most famous third wave coffee roasters in America and it started right here in Chicago",
        description: "You just had one of the most beautiful brunches in Chicago and now you're walking a few blocks to one of the coffee shops that literally changed the way Americans think about coffee. <a href=\"https://www.google.com/maps/search/?api=1&query=Intelligentsia+Coffee+53+E+Randolph+St+Chicago\" target=\"_blank\">Intelligentsia</a> is a Chicago original that helped start the entire third wave coffee movement and the baristas here take their craft seriously. Joseph get a classic cortado if you like something smooth and strong. Sandy the lavender latte is beautiful and tastes as good as it looks. Take your time, sit by the window, and enjoy the last 30 minutes of your morning date with a proper cup of coffee.",
        image: "images/joseph-sandy/intelligentsia-1.jpg",
        images: [
          "images/joseph-sandy/intelligentsia-1.jpg",
          "images/joseph-sandy/intelligentsia-2.jpg",
          "images/joseph-sandy/intelligentsia-3.jpg",
          "images/joseph-sandy/intelligentsia-4.jpg",
          "images/joseph-sandy/intelligentsia-5.jpg",
          "images/joseph-sandy/intelligentsia-6.jpg"
        ],
        address: "53 E Randolph St, Chicago, IL 60601",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8846,-87.6255",
        appleMapsUrl: "https://maps.apple.com/?daddr=41.8846,-87.6255&dirflg=d",
        parkingOptions: [
          {
            type: "paid",
            recommended: true,
            name: "Millennium Park Garage",
            address: "5 S Columbus Dr, Chicago, IL 60603",
            cost: "$15 to $20",
            tip: "Right underneath Millennium Park. Easy access to Randolph St.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8826,-87.6241",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8826,-87.6241&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8846&dropoff[longitude]=-87.6255&dropoff[nickname]=Intelligentsia%20Coffee",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8846&destination[longitude]=-87.6255"
        },
        cost: "$5 to $8 each",
        dressCode: "Whatever you wore to brunch is perfect",
        reservation: null,
        reviews: {
          google: { stars: 4.5, count: 1800 },
          yelp: { stars: 4.0, count: 900 }
        },
        happyHour: null,
        menuUrl: "https://www.intelligentsia.com/",
        reservationUrl: null,
        phone: "(312) 920-9332",
        foodRecs: {
          joseph: [
            { name: "Cortado", price: "$5.50", note: "Smooth, balanced, and strong. If you like espresso, this is the one to get." },
            { name: "Cold Brew", price: "$6.00", note: "Rich and chocolatey. They brew it slow for 12 hours." }
          ],
          sandy: [
            { name: "Lavender Latte", price: "$6.50", note: "Beautiful purple hue with just a hint of floral sweetness. Sandy you're going to love this." },
            { name: "Cappuccino", price: "$5.50", note: "Perfect foam, perfectly pulled. Simple and classic." }
          ]
        },
        tips: [
          "This is a third wave coffee shop so skip the flavored syrups and let the coffee speak for itself",
          "The pastries are from local bakeries and they're great if you have room",
          "Grab a window seat and people watch on Randolph St",
          "They sell bags of beans if you want to take some home"
        ],
        swapOptions: [
          // ── Alt 1: Metric Coffee ──
          {
            name: "Metric Coffee Co.",
            type: "Coffee",
            location: "Fulton Market, Chicago",
            tagline: "A beloved Chicago micro roaster with a beautiful industrial space in Fulton Market",
            description: "If you want coffee from a roaster that's a little more under the radar, <a href=\"https://www.google.com/maps/search/?api=1&query=Metric+Coffee+Co+2021+W+Fulton+St+Chicago\" target=\"_blank\">Metric Coffee</a> in Fulton Market is phenomenal. The space is this gorgeous converted warehouse with exposed brick and big windows and the coffee is roasted in small batches on site. Joseph the espresso here is bold and clean. Sandy the oat milk latte is creamy and perfectly balanced. It's a short ride from Gold Coast but the vibes are worth it.",
            image: "images/joseph-sandy/metric-coffee-1.jpg",
            images: [
              "images/joseph-sandy/metric-coffee-1.jpg",
              "images/joseph-sandy/metric-coffee-2.jpg",
              "images/joseph-sandy/metric-coffee-3.jpg",
              "images/joseph-sandy/metric-coffee-4.jpg",
              "images/joseph-sandy/metric-coffee-5.jpg",
              "images/joseph-sandy/metric-coffee-6.jpg"
            ],
            address: "2021 W Fulton St, Chicago, IL 60612",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8866,-87.6790",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8866,-87.6790&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "Street Parking on Fulton St",
                address: "Fulton St near Metric Coffee, Chicago",
                cost: "Free",
                tip: "Metered street parking on Fulton usually has open spots on Monday mornings.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8866,-87.6790",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.8866,-87.6790&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8866&dropoff[longitude]=-87.6790&dropoff[nickname]=Metric%20Coffee",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8866&destination[longitude]=-87.6790"
            },
            cost: "$5 to $8 each",
            dressCode: "Casual",
            reservation: null,
            reviews: {
              google: { stars: 4.6, count: 1200 },
              yelp: { stars: 4.5, count: 600 }
            },
            happyHour: null,
            menuUrl: "https://www.metriccoffee.com/",
            reservationUrl: null,
            phone: "(312) 754-8294",
            foodRecs: {
              joseph: [
                { name: "Espresso", price: "$4.50", note: "Single origin, bold, and clean. They roast everything on site." }
              ],
              sandy: [
                { name: "Oat Milk Latte", price: "$6.00", note: "Creamy and perfectly balanced. One of the best oat lattes in the city." }
              ]
            },
            tips: [
              "They roast on site so the whole place smells incredible",
              "Great for photos, the industrial space is gorgeous",
              "Buy a bag of beans to take home"
            ]
          },
          // ── Alt 2: Sawada Coffee ──
          {
            name: "Sawada Coffee",
            type: "Coffee",
            location: "West Loop, Chicago",
            tagline: "World latte art champion's coffee shop with the famous Military Latte that's made with matcha and espresso",
            description: "If you want coffee from a literal world champion, <a href=\"https://www.google.com/maps/search/?api=1&query=Sawada+Coffee+112+N+Green+St+Chicago\" target=\"_blank\">Sawada Coffee</a> in the West Loop was opened by Hiroshi Sawada who won the World Latte Art Championship. The signature drink is the Military Latte which combines espresso with matcha and it's this beautiful layered green and brown creation that tastes as incredible as it looks. Joseph the straight espresso here is world class. Sandy the Military Latte is the must try, it's sweet and earthy and completely unique.",
            image: "images/joseph-sandy/sawada-coffee-1.jpg",
            images: [
              "images/joseph-sandy/sawada-coffee-1.jpg",
              "images/joseph-sandy/sawada-coffee-2.jpg",
              "images/joseph-sandy/sawada-coffee-3.jpg",
              "images/joseph-sandy/sawada-coffee-4.jpg",
              "images/joseph-sandy/sawada-coffee-5.jpg",
              "images/joseph-sandy/sawada-coffee-6.jpg"
            ],
            address: "112 N Green St, Chicago, IL 60607",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8840,-87.6490",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8840,-87.6490&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Metered Street Parking on Green St",
                address: "Green St near Sawada, Chicago",
                cost: "$2 to $4/hr",
                tip: "Metered spots on Green St. Usually available on Monday mornings.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8840,-87.6490",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.8840,-87.6490&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8840&dropoff[longitude]=-87.6490&dropoff[nickname]=Sawada%20Coffee",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8840&destination[longitude]=-87.6490"
            },
            cost: "$6 to $9 each",
            dressCode: "Casual",
            reservation: null,
            reviews: {
              google: { stars: 4.4, count: 1600 },
              yelp: { stars: 4.5, count: 1100 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: "(312) 754-0431",
            foodRecs: {
              joseph: [
                { name: "Double Espresso", price: "$5.00", note: "World class pull. Smooth and complex." }
              ],
              sandy: [
                { name: "Military Latte", price: "$7.50", note: "Matcha and espresso layered together. Sandy this is their signature and it's incredible." }
              ]
            },
            tips: [
              "The Military Latte is their most famous drink and it's worth it",
              "Small cozy space, might need to wait a minute for a seat",
              "Inside the same building as Green Street Smoked Meats"
            ]
          },
          // ── Alt 3: Heritage Outpost ──
          {
            name: "Heritage Outpost",
            type: "Coffee",
            location: "Gold Coast, Chicago",
            tagline: "A tiny beautiful coffee and bicycle shop in Gold Coast with excellent espresso drinks",
            description: "For something right in the neighborhood, <a href=\"https://www.google.com/maps/search/?api=1&query=Heritage+Outpost+1326+N+Wells+St+Chicago\" target=\"_blank\">Heritage Outpost</a> is a charming little coffee shop on Wells Street that also doubles as a bicycle shop. The coffee is excellent, the space is minimal and artsy, and it's literally steps from the Gold Coast area. Joseph the flat white is perfectly pulled and Sandy the honey lavender latte is smooth and floral. It's small and intimate which makes it a great spot to end a morning date.",
            image: "images/joseph-sandy/heritage-outpost-1.jpg",
            images: [
              "images/joseph-sandy/heritage-outpost-1.jpg",
              "images/joseph-sandy/heritage-outpost-2.jpg",
              "images/joseph-sandy/heritage-outpost-3.jpg",
              "images/joseph-sandy/heritage-outpost-4.jpg",
              "images/joseph-sandy/heritage-outpost-5.jpg",
              "images/joseph-sandy/heritage-outpost-6.jpg"
            ],
            address: "1326 N Wells St, Chicago, IL 60610",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9064,-87.6340",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9064,-87.6340&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Metered Street Parking on Wells St",
                address: "Wells St near Division, Chicago",
                cost: "$2 to $4/hr",
                tip: "Metered spots right on Wells. Easy Monday morning parking.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9064,-87.6340",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.9064,-87.6340&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9064&dropoff[longitude]=-87.6340&dropoff[nickname]=Heritage%20Outpost",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9064&destination[longitude]=-87.6340"
            },
            cost: "$5 to $7 each",
            dressCode: "Casual",
            reservation: null,
            reviews: {
              google: { stars: 4.6, count: 800 },
              yelp: { stars: 4.5, count: 400 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: "(312) 944-1326",
            foodRecs: {
              joseph: [
                { name: "Flat White", price: "$5.50", note: "Perfectly pulled with velvety microfoam. Clean and strong." }
              ],
              sandy: [
                { name: "Honey Lavender Latte", price: "$6.50", note: "Smooth, floral, and just a touch sweet. Sandy this is lovely." }
              ]
            },
            tips: [
              "Tiny shop so grab your drinks and stroll down Wells if it's crowded inside",
              "They also sell beautiful bicycles if you're into that",
              "Right around the corner from 3 Arts Club so the walk is very short"
            ]
          }
        ]
      }
    ],

    travelTimes: [
      { from: 1, to: 2, duration: "15 min walk", mode: "walk" }
    ],

    budget: {
      items: [
        { label: "3 Arts Club Cafe (brunch for two)", cost: "$30–50" },
        { label: "Intelligentsia Coffee (2 coffees)", cost: "$10–16" }
      ],
      total: "$40–66",
      tip: "You can easily stay under $50 by each ordering one entree at 3 Arts Club and skipping appetizers. The Truffle Grilled Cheese is shareable and counts as an entree. Coffee at Intelligentsia is very affordable so that won't push you over."
    },

    checklist: [
      { id: "chk-3arts-res", text: "Make a reservation at 3 Arts Club Cafe for 11:00 AM on OpenTable", bold: "3 Arts Club Cafe" },
      { id: "chk-jacket", text: "Bring a light jacket for walking between stops, mid 40s in the morning", bold: "light jacket" },
      { id: "chk-phone", text: "Charge your phone for photos at 3 Arts Club, the courtyard is unbelievably photogenic", bold: null },
      { id: "chk-smart-casual", text: "Dress smart casual, 3 Arts Club is a gorgeous space and you'll want to match the vibe", bold: "smart casual" }
    ],

    calendar: {
      title: "DateFlo: Gold Coast Morning (Brunch + Coffee)",
      date: "20260324",
      startTime: "T170000Z",
      endTime: "T190000Z",
      location: "Gold Coast, Chicago, IL",
      description: "Plan A: Gold Coast Morning\\n\\n11:00 AM 3 Arts Club Cafe (Brunch)\\n12:30 PM Intelligentsia Coffee (Coffee)\\n\\nFull details: dateflo.com/joseph-and-sandy"
    }
  },

  // ════════════════════════════════════
  // PLAN B: LINCOLN PARK BRUNCH
  // ════════════════════════════════════
  {
    id: "lincoln-park-brunch",
    couple: "Joseph & Sandy",
    coupleId: "joseph-sandy-2026",
    partner1: "Joseph",
    partner2: "Sandy",
    planName: "Lincoln Park Brunch",
    planEmoji: "🥞",
    planVibe: "A cozy Lincoln Park morning with the most famous French toast in Chicago and a beautiful walk through one of the best parks in the city.",
    greeting: "Joseph and Sandy, this is the kind of Monday morning that just feels right. You're starting at the brunch spot that Chicago locals have been lining up for since forever, where the French Toast Flights and Churro Waffles are genuinely legendary. Then you're walking through beautiful Lincoln Park to a cozy coffee shop to wrap up the morning with something warm in your hands. It's simple, it's sweet, and you're going to love every minute of it.",
    occasion: "Morning Date",
    date: "Monday, March 24, 2026",
    dateShort: "Mon, March 24",
    startTime: "11:00 AM",
    endTime: "1:00 PM",
    city: "Chicago, IL",
    area: "Lincoln Park",
    coverImage: "images/joseph-sandy/batter-berries-1.jpg",
    route: "Home → Batter & Berries → Lincoln Park Walk + Coffee → Home",

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
      high: "50°F",
      low: "35°F",
      conditions: "Cool but warmer than the weekend. Clear skies expected.",
      sunset: "7:10 PM",
      rainChance: "5%",
      note: "Mid 40s during your park walk so layer up. A light jacket and maybe a scarf and you're set."
    },

    stops: [
      // ── STOP 1: BATTER & BERRIES ──
      {
        order: 1,
        time: "11:00 AM",
        endTime: "12:15 PM",
        name: "Batter & Berries",
        type: "Brunch",
        location: "Lincoln Park, Chicago",
        tagline: "The most famous French toast in Chicago with legendary French Toast Flights and Churro Waffles that people line up for every single day",
        description: "This is the brunch spot that put creative French toast on the map in Chicago. <a href=\"https://www.google.com/maps/search/?api=1&query=Batter+%26+Berries+2748+N+Lincoln+Ave+Chicago\" target=\"_blank\">Batter & Berries</a> on Lincoln Ave has been a neighborhood legend for years and the French Toast Flight lets you try four different flavors in one sitting which is honestly the best way to do it. Joseph the Steak & Eggs here are really solid and come with their famous seasoned potatoes. Sandy the Churro Waffles are crispy on the outside, soft on the inside, and dusted with cinnamon sugar. It's BYOB too so you could bring some mimosa supplies if you want to make the morning extra special.",
        image: "images/joseph-sandy/batter-berries-1.jpg",
        images: [
          "images/joseph-sandy/batter-berries-1.jpg",
          "images/joseph-sandy/batter-berries-2.jpg",
          "images/joseph-sandy/batter-berries-3.jpg",
          "images/joseph-sandy/batter-berries-4.jpg",
          "images/joseph-sandy/batter-berries-5.jpg",
          "images/joseph-sandy/batter-berries-6.jpg"
        ],
        address: "2748 N Lincoln Ave, Chicago, IL 60614",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9296,-87.6525",
        appleMapsUrl: "https://maps.apple.com/?daddr=41.9296,-87.6525&dirflg=d",
        parkingOptions: [
          {
            type: "street",
            recommended: true,
            name: "Street Parking on Lincoln Ave",
            address: "Lincoln Ave near Diversey, Chicago",
            cost: "$2 to $4/hr metered",
            tip: "Metered spots on Lincoln Ave usually have good availability on Monday mornings. There are also free side streets nearby on Seminary and Lakewood.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9296,-87.6525",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9296,-87.6525&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9296&dropoff[longitude]=-87.6525&dropoff[nickname]=Batter%20%26%20Berries",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9296&destination[longitude]=-87.6525"
        },
        cost: "$25 to $40 for two",
        dressCode: "Totally casual. Jeans and sneakers are perfect here.",
        reservation: null,
        reviews: {
          google: { stars: 4.5, count: 2400 },
          yelp: { stars: 4.5, count: 3841 }
        },
        happyHour: null,
        menuUrl: "https://www.batterandberries.com/menu",
        reservationUrl: null,
        phone: "(773) 248-7710",
        foodRecs: {
          joseph: [
            { name: "Steak & Eggs", price: "$16", note: "Seasoned steak with two eggs any style and their famous seasoned potatoes. Joseph this is a great pick." },
            { name: "French Toast Flight", price: "$15", note: "Four mini portions of different French toast flavors. Share this with Sandy because you want to try them all." },
            { name: "The Batter Up", price: "$14", note: "Their signature breakfast platter with eggs, potatoes, bacon or sausage, and toast." }
          ],
          sandy: [
            { name: "Churro Waffles", price: "$14", note: "Crispy waffle dusted with cinnamon sugar and drizzled with caramel. Sandy you're going to be obsessed." },
            { name: "French Toast Flight", price: "$15", note: "Definitely share this with Joseph. Four flavors including red velvet, lemon, and more." },
            { name: "Chicken & Waffle", price: "$16", note: "Crispy fried chicken on their signature waffle. A filling and delicious combo." }
          ]
        },
        tips: [
          "Monday mornings are way less crowded than weekends so you should walk right in",
          "It's BYOB so bring champagne and OJ for mimosas if you want",
          "The French Toast Flight is the most popular item so definitely try it",
          "Cash and cards accepted"
        ],
        swapOptions: [
          // ── Alt 1: Jam 'N Honey ──
          {
            name: "Jam 'N Honey",
            type: "Brunch",
            location: "Lincoln Park, Chicago",
            tagline: "A bright colorful brunch spot with creative dishes and some of the best chicken and waffles in the city",
            description: "If you want a brunch spot that's fun, creative, and incredibly delicious, <a href=\"https://www.google.com/maps/search/?api=1&query=Jam+N+Honey+958+W+Webster+Ave+Chicago\" target=\"_blank\">Jam 'N Honey</a> on Webster is a Lincoln Park gem. The space is bright and colorful with murals on the walls and a menu that's packed with creative twists on breakfast classics. Joseph the Carne Asada Skillet has perfectly seasoned steak with peppers and eggs and Sandy the Fruity Pebbles French Toast is a showstopper that tastes even better than it looks.",
            image: "images/joseph-sandy/jam-n-honey-1.jpg",
            images: [
              "images/joseph-sandy/jam-n-honey-1.jpg",
              "images/joseph-sandy/jam-n-honey-2.jpg",
              "images/joseph-sandy/jam-n-honey-3.jpg",
              "images/joseph-sandy/jam-n-honey-4.jpg",
              "images/joseph-sandy/jam-n-honey-5.jpg",
              "images/joseph-sandy/jam-n-honey-6.jpg"
            ],
            address: "958 W Webster Ave, Chicago, IL 60614",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9218,-87.6531",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9218,-87.6531&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking on Webster Ave",
                address: "Webster Ave near Jam N Honey, Chicago",
                cost: "$2 to $4/hr metered",
                tip: "Metered street parking available on Webster. Free side streets nearby.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9218,-87.6531",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.9218,-87.6531&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9218&dropoff[longitude]=-87.6531&dropoff[nickname]=Jam%20N%20Honey",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9218&destination[longitude]=-87.6531"
            },
            cost: "$22 to $38 for two",
            dressCode: "Casual. Fun and colorful place.",
            reservation: null,
            reviews: {
              google: { stars: 4.5, count: 1800 },
              yelp: { stars: 4.5, count: 1200 }
            },
            happyHour: null,
            menuUrl: "https://www.jamnhoney.com/menu",
            reservationUrl: null,
            phone: "(773) 904-7252",
            foodRecs: {
              joseph: [
                { name: "Carne Asada Skillet", price: "$16", note: "Seasoned steak with peppers, onions, eggs, and potatoes. Joseph this has your name on it." },
                { name: "Chicken & Waffles", price: "$16", note: "Crispy fried chicken on a Belgian waffle. One of the best in Lincoln Park." }
              ],
              sandy: [
                { name: "Fruity Pebbles French Toast", price: "$14", note: "French toast coated in Fruity Pebbles cereal. Sandy it's playful and delicious." },
                { name: "Nutella Stuffed Pancakes", price: "$14", note: "Thick fluffy pancakes stuffed with warm Nutella. Incredible." }
              ]
            },
            tips: [
              "The murals make for great photos",
              "BYOB so bring mimosa supplies",
              "Monday mornings are quiet so you'll get a table right away"
            ]
          },
          // ── Alt 2: Toast ──
          {
            name: "Toast",
            type: "Brunch",
            location: "Lincoln Park, Chicago",
            tagline: "A beloved Lincoln Park neighborhood brunch spot that's been a local favorite for over 20 years",
            description: "For a classic Lincoln Park brunch experience, <a href=\"https://www.google.com/maps/search/?api=1&query=Toast+746+W+Webster+Ave+Chicago\" target=\"_blank\">Toast on Webster</a> has been the go to neighborhood spot for over two decades. The space is cozy and warm with a menu that does brunch classics really well. Joseph the Huevos Rancheros have this incredible homemade salsa that's smoky and rich. Sandy the Cinnamon Swirl French Toast is a local legend. It's the kind of place where every dish feels like it was made by someone who actually cares.",
            image: "images/joseph-sandy/toast-1.jpg",
            images: [
              "images/joseph-sandy/toast-1.jpg",
              "images/joseph-sandy/toast-2.jpg",
              "images/joseph-sandy/toast-3.jpg",
              "images/joseph-sandy/toast-4.jpg",
              "images/joseph-sandy/toast-5.jpg",
              "images/joseph-sandy/toast-6.jpg"
            ],
            address: "746 W Webster Ave, Chicago, IL 60614",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9218,-87.6502",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9218,-87.6502&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking on Webster Ave",
                address: "Webster Ave near Toast, Chicago",
                cost: "$2 to $4/hr metered",
                tip: "Metered spots on Webster. Free spots on side streets.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9218,-87.6502",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.9218,-87.6502&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9218&dropoff[longitude]=-87.6502&dropoff[nickname]=Toast",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9218&destination[longitude]=-87.6502"
            },
            cost: "$20 to $35 for two",
            dressCode: "Casual. Neighborhood spot.",
            reservation: null,
            reviews: {
              google: { stars: 4.4, count: 2100 },
              yelp: { stars: 4.0, count: 2600 }
            },
            happyHour: null,
            menuUrl: "https://www.toast-chicago.com/menu/",
            reservationUrl: null,
            phone: "(773) 935-5600",
            foodRecs: {
              joseph: [
                { name: "Huevos Rancheros", price: "$14", note: "Two eggs on tortillas with homemade smoky salsa, beans, and sour cream. Joseph this is hearty and perfect." },
                { name: "Steak & Eggs", price: "$17", note: "Classic with their seasoned home fries." }
              ],
              sandy: [
                { name: "Cinnamon Swirl French Toast", price: "$13", note: "Made with thick cinnamon swirl bread. Sandy this is a neighborhood legend." },
                { name: "Veggie Scramble", price: "$13", note: "Loaded with fresh veggies and perfectly scrambled eggs." }
              ]
            },
            tips: [
              "They've been open for 20+ years which tells you everything",
              "BYOB friendly",
              "The home fries are excellent, get them on the side"
            ]
          },
          // ── Alt 3: Cafe Ba-Ba-Reeba ──
          {
            name: "Cafe Ba-Ba-Reeba",
            type: "Brunch",
            location: "Lincoln Park, Chicago",
            tagline: "A vibrant Spanish tapas spot with incredible weekend and weekday brunch options",
            description: "For something a little different, <a href=\"https://www.google.com/maps/search/?api=1&query=Cafe+Ba-Ba-Reeba+2024+N+Halsted+St+Chicago\" target=\"_blank\">Cafe Ba-Ba-Reeba</a> on Halsted does a Spanish brunch that's colorful, shareable, and unlike anything else in Lincoln Park. The space is bright and lively with a global tapas vibe that feels like a mini vacation. Joseph the Chorizo & Egg Flatbread is packed with flavor and Sandy the Churros con Chocolate are the perfect sweet shareable. Order a few tapas plates between you two and graze your way through an incredible morning.",
            image: "images/joseph-sandy/cafe-babareeba-1.jpg",
            images: [
              "images/joseph-sandy/cafe-babareeba-1.jpg",
              "images/joseph-sandy/cafe-babareeba-2.jpg",
              "images/joseph-sandy/cafe-babareeba-3.jpg",
              "images/joseph-sandy/cafe-babareeba-4.jpg",
              "images/joseph-sandy/cafe-babareeba-5.jpg",
              "images/joseph-sandy/cafe-babareeba-6.jpg"
            ],
            address: "2024 N Halsted St, Chicago, IL 60614",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9183,-87.6484",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9183,-87.6484&dirflg=d",
            parkingOptions: [
              {
                type: "paid",
                recommended: true,
                name: "Lincoln Common Garage",
                address: "2003 N Lincoln Ave, Chicago, IL 60614",
                cost: "$10 to $15",
                tip: "Close to the restaurant. Easy Monday morning access.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9179,-87.6496",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.9179,-87.6496&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9183&dropoff[longitude]=-87.6484&dropoff[nickname]=Cafe%20Ba-Ba-Reeba",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9183&destination[longitude]=-87.6484"
            },
            cost: "$25 to $45 for two",
            dressCode: "Smart casual. Bright and colorful vibes.",
            reservation: {
              time: "11:00 AM",
              partySize: 2,
              notes: "Book on OpenTable. Monday should be easy but booking never hurts."
            },
            reviews: {
              google: { stars: 4.4, count: 3800 },
              yelp: { stars: 4.0, count: 3200 }
            },
            happyHour: null,
            menuUrl: "https://www.cafebabareeba.com/menu/",
            reservationUrl: "https://www.opentable.com/cafe-ba-ba-reeba",
            phone: "(773) 935-5000",
            foodRecs: {
              joseph: [
                { name: "Chorizo & Egg Flatbread", price: "$14", note: "Spanish chorizo with eggs on crispy flatbread. Joseph the flavors here are incredible." },
                { name: "Patatas Bravas", price: "$10", note: "Crispy potatoes with spicy tomato sauce and garlic aioli. Share these." }
              ],
              sandy: [
                { name: "Churros con Chocolate", price: "$11", note: "Warm churros with rich chocolate dipping sauce. Sandy these are the perfect shareable dessert." },
                { name: "Tortilla Espanola", price: "$12", note: "Classic Spanish egg and potato omelette. Simple and comforting." }
              ]
            },
            tips: [
              "Order a few small plates to share for the best experience",
              "The sangria is excellent if you want a brunch cocktail",
              "Colorful interior is great for photos"
            ]
          }
        ]
      },

      // ── STOP 2: LINCOLN PARK WALK + COFFEE ──
      {
        order: 2,
        time: "12:30 PM",
        endTime: "1:00 PM",
        name: "Lincoln Park + Colectivo Coffee",
        type: "Walk / Coffee",
        location: "Lincoln Park, Chicago",
        tagline: "A beautiful stroll through one of Chicago's most iconic parks followed by a warm cup at a beloved Midwest coffee shop",
        description: "After brunch you're going to take a short walk through <a href=\"https://www.google.com/maps/search/?api=1&query=Lincoln+Park+Chicago\" target=\"_blank\">Lincoln Park</a> which is genuinely one of the most beautiful urban parks in the country. Even in late March the park has this quiet beauty to it and the walk from Batter & Berries toward the pond is really nice. Then you're stopping at <a href=\"https://www.google.com/maps/search/?api=1&query=Colectivo+Coffee+Lincoln+Park+Chicago\" target=\"_blank\">Colectivo Coffee</a> which is a beloved Midwest roaster with a cozy Lincoln Park shop. Grab something warm, sit together, and enjoy the last few minutes of your morning date.",
        image: "images/joseph-sandy/lincoln-park-1.jpg",
        images: [
          "images/joseph-sandy/lincoln-park-1.jpg",
          "images/joseph-sandy/lincoln-park-2.jpg",
          "images/joseph-sandy/lincoln-park-3.jpg",
          "images/joseph-sandy/lincoln-park-4.jpg",
          "images/joseph-sandy/lincoln-park-5.jpg",
          "images/joseph-sandy/lincoln-park-6.jpg"
        ],
        address: "2530 N Lakeview Ave, Chicago, IL 60614",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9290,-87.6390",
        appleMapsUrl: "https://maps.apple.com/?daddr=41.9290,-87.6390&dirflg=d",
        parkingOptions: [
          {
            type: "free",
            recommended: true,
            name: "Lincoln Park Free Parking",
            address: "Near Lincoln Park Zoo, Chicago",
            cost: "Free",
            tip: "Free parking available near the zoo and along Cannon Dr on Monday mornings. Very easy to find a spot.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9218,-87.6336",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9218,-87.6336&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9290&dropoff[longitude]=-87.6390&dropoff[nickname]=Lincoln%20Park",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9290&destination[longitude]=-87.6390"
        },
        cost: "$5 to $10 for two coffees",
        dressCode: "Whatever you're wearing, just make sure you have your jacket for the park walk",
        reservation: null,
        reviews: {
          google: { stars: 4.8, count: 15000 },
          yelp: { stars: 4.5, count: 500 }
        },
        happyHour: null,
        menuUrl: "https://colectivocoffee.com/cafes/lincoln-park",
        reservationUrl: null,
        phone: null,
        foodRecs: {
          joseph: [
            { name: "Drip Coffee", price: "$4.00", note: "Simple, smooth, and great for a morning walk. Nothing fancy, just good coffee." },
            { name: "Americano", price: "$4.50", note: "Bold and clean if you want something with a little more kick." }
          ],
          sandy: [
            { name: "Vanilla Latte", price: "$6.00", note: "Warm, sweet, and comforting. Perfect for a park stroll." },
            { name: "Hot Chocolate", price: "$5.00", note: "Rich and warming if you want something sweet and cozy." }
          ]
        },
        tips: [
          "The walk through Lincoln Park is beautiful even in late March",
          "Check out the Alfred Caldwell Lily Pool if you walk near the zoo, it's a hidden gem",
          "Colectivo has a great selection of pastries if you still have room",
          "The park is free and open to everyone"
        ],
        swapOptions: [
          // ── Alt 1: Gaslight Coffee Roasters ──
          {
            name: "Gaslight Coffee Roasters",
            type: "Coffee",
            location: "Lincoln Park, Chicago",
            tagline: "A cozy neighborhood roaster with incredible single origin coffees and a warm inviting space",
            description: "If you want a truly local coffee experience, <a href=\"https://www.google.com/maps/search/?api=1&query=Gaslight+Coffee+Roasters+2385+N+Milwaukee+Ave+Chicago\" target=\"_blank\">Gaslight Coffee Roasters</a> is one of the best small batch roasters in the city. The space is warm and inviting with exposed brick and vintage touches. Joseph the pour over here is exceptional and Sandy the chai latte is spicy and warming and perfect for a cool morning. It's the kind of place that makes you want to sit and stay for a while.",
            image: "images/joseph-sandy/gaslight-coffee-1.jpg",
            images: [
              "images/joseph-sandy/gaslight-coffee-1.jpg",
              "images/joseph-sandy/gaslight-coffee-2.jpg",
              "images/joseph-sandy/gaslight-coffee-3.jpg",
              "images/joseph-sandy/gaslight-coffee-4.jpg",
              "images/joseph-sandy/gaslight-coffee-5.jpg",
              "images/joseph-sandy/gaslight-coffee-6.jpg"
            ],
            address: "2385 N Milwaukee Ave, Chicago, IL 60647",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9266,-87.6954",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9266,-87.6954&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking on Milwaukee Ave",
                address: "Milwaukee Ave near Gaslight, Chicago",
                cost: "$2/hr metered",
                tip: "Plenty of metered spots on Milwaukee. Free side streets nearby.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9266,-87.6954",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.9266,-87.6954&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9266&dropoff[longitude]=-87.6954&dropoff[nickname]=Gaslight%20Coffee",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9266&destination[longitude]=-87.6954"
            },
            cost: "$5 to $8 each",
            dressCode: "Casual",
            reservation: null,
            reviews: {
              google: { stars: 4.6, count: 900 },
              yelp: { stars: 4.5, count: 500 }
            },
            happyHour: null,
            menuUrl: "https://gaslightcoffeeroasters.com/",
            reservationUrl: null,
            phone: "(773) 360-7455",
            foodRecs: {
              joseph: [
                { name: "Pour Over", price: "$5.50", note: "Single origin, hand poured, and exceptional. Takes a few minutes but worth the wait." }
              ],
              sandy: [
                { name: "Chai Latte", price: "$5.50", note: "Spicy, warming, and made with real chai spices. Sandy this is wonderful on a cool morning." }
              ]
            },
            tips: [
              "The pour over takes a few minutes but it's worth the wait",
              "Great wifi if you want to linger",
              "They sell beans to take home"
            ]
          },
          // ── Alt 2: Bourgeois Pig Cafe ──
          {
            name: "Bourgeois Pig Cafe",
            type: "Coffee",
            location: "Lincoln Park, Chicago",
            tagline: "A quirky bohemian coffee house with mismatched furniture, a loft area, and incredible sandwiches",
            description: "For a coffee spot with real character, <a href=\"https://www.google.com/maps/search/?api=1&query=Bourgeois+Pig+Cafe+738+W+Fullerton+Ave+Chicago\" target=\"_blank\">Bourgeois Pig Cafe</a> on Fullerton is a Lincoln Park institution. The space is bohemian and eclectic with mismatched furniture, vintage posters, a cozy loft upstairs, and shelves packed with books. Joseph the coffee is strong and well made. Sandy the hot chocolate is rich and warming. It's the kind of place that makes you feel like you're in a Parisian cafe but right in the middle of Lincoln Park.",
            image: "images/joseph-sandy/bourgeois-pig-1.jpg",
            images: [
              "images/joseph-sandy/bourgeois-pig-1.jpg",
              "images/joseph-sandy/bourgeois-pig-2.jpg",
              "images/joseph-sandy/bourgeois-pig-3.jpg",
              "images/joseph-sandy/bourgeois-pig-4.jpg",
              "images/joseph-sandy/bourgeois-pig-5.jpg",
              "images/joseph-sandy/bourgeois-pig-6.jpg"
            ],
            address: "738 W Fullerton Ave, Chicago, IL 60614",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9251,-87.6486",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9251,-87.6486&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking on Fullerton Ave",
                address: "Fullerton Ave near Bourgeois Pig, Chicago",
                cost: "$2/hr metered",
                tip: "Metered spots on Fullerton. Free residential streets nearby.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9251,-87.6486",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.9251,-87.6486&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9251&dropoff[longitude]=-87.6486&dropoff[nickname]=Bourgeois%20Pig%20Cafe",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9251&destination[longitude]=-87.6486"
            },
            cost: "$4 to $7 each",
            dressCode: "Casual and artsy. This place has character.",
            reservation: null,
            reviews: {
              google: { stars: 4.4, count: 1100 },
              yelp: { stars: 4.0, count: 700 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: "(773) 883-5282",
            foodRecs: {
              joseph: [
                { name: "Americano", price: "$4.50", note: "Bold and straightforward. The way coffee should be." }
              ],
              sandy: [
                { name: "Hot Chocolate", price: "$5.00", note: "Rich and warming. Sandy this is cozy perfection." }
              ]
            },
            tips: [
              "Head upstairs to the loft for the coziest seats",
              "The sandwiches are incredible if you somehow still have room",
              "Cash and cards accepted",
              "Great spot for photos with the eclectic decor"
            ]
          },
          // ── Alt 3: Dollop Coffee Co. ──
          {
            name: "Dollop Coffee Co.",
            type: "Coffee",
            location: "Lincoln Park, Chicago",
            tagline: "A beloved Chicago mini chain with excellent espresso and a bright modern space",
            description: "For a clean, modern coffee experience, <a href=\"https://www.google.com/maps/search/?api=1&query=Dollop+Coffee+Co+Lincoln+Park+Chicago\" target=\"_blank\">Dollop Coffee</a> is one of Chicago's best homegrown coffee chains. They partner with local roasters and their baristas genuinely know what they're doing. Joseph the cortado is perfectly balanced and Sandy the matcha latte is smooth and vibrant. The space is bright, clean, and minimal with plenty of natural light. It's a great spot to sit with your coffee and decompress after a fun morning.",
            image: "images/joseph-sandy/dollop-coffee-1.jpg",
            images: [
              "images/joseph-sandy/dollop-coffee-1.jpg",
              "images/joseph-sandy/dollop-coffee-2.jpg",
              "images/joseph-sandy/dollop-coffee-3.jpg",
              "images/joseph-sandy/dollop-coffee-4.jpg",
              "images/joseph-sandy/dollop-coffee-5.jpg",
              "images/joseph-sandy/dollop-coffee-6.jpg"
            ],
            address: "2545 N Clark St, Chicago, IL 60614",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9286,-87.6443",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9286,-87.6443&dirflg=d",
            parkingOptions: [
              {
                type: "street",
                recommended: true,
                name: "Street Parking on Clark St",
                address: "Clark St near Dollop, Chicago",
                cost: "$2/hr metered",
                tip: "Metered spots on Clark. Easy to find on Monday mornings.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9286,-87.6443",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.9286,-87.6443&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9286&dropoff[longitude]=-87.6443&dropoff[nickname]=Dollop%20Coffee",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9286&destination[longitude]=-87.6443"
            },
            cost: "$5 to $7 each",
            dressCode: "Casual",
            reservation: null,
            reviews: {
              google: { stars: 4.5, count: 600 },
              yelp: { stars: 4.5, count: 350 }
            },
            happyHour: null,
            menuUrl: "https://dollopcoffee.com/",
            reservationUrl: null,
            phone: "(773) 530-1749",
            foodRecs: {
              joseph: [
                { name: "Cortado", price: "$5.00", note: "Perfectly balanced espresso with just a touch of steamed milk." }
              ],
              sandy: [
                { name: "Matcha Latte", price: "$6.00", note: "Smooth, vibrant green, and just a little sweet. Sandy this is a great pick." }
              ]
            },
            tips: [
              "They partner with local roasters so the beans rotate seasonally",
              "Bright modern space with lots of natural light",
              "Great pastry selection from local bakeries"
            ]
          }
        ]
      }
    ],

    travelTimes: [
      { from: 1, to: 2, duration: "10 min walk", mode: "walk" }
    ],

    budget: {
      items: [
        { label: "Batter & Berries (brunch for two)", cost: "$25–40" },
        { label: "Colectivo Coffee (2 coffees)", cost: "$8–12" }
      ],
      total: "$33–52",
      tip: "You can stay well under $50 by each ordering one entree at Batter & Berries and splitting the French Toast Flight. Coffee is affordable and the park walk is free so this is a very budget friendly morning."
    },

    checklist: [
      { id: "chk-byob", text: "Optional: bring champagne and OJ for mimosas at Batter & Berries since it's BYOB", bold: "BYOB" },
      { id: "chk-jacket-b", text: "Bring a light jacket and maybe a scarf for the Lincoln Park walk, mid 40s", bold: "light jacket" },
      { id: "chk-comfy-shoes", text: "Wear comfortable walking shoes for the park stroll", bold: "comfortable walking shoes" },
      { id: "chk-phone-b", text: "Charge your phone for photos in the park and at Batter & Berries", bold: null }
    ],

    calendar: {
      title: "DateFlo: Lincoln Park Brunch (Brunch + Park + Coffee)",
      date: "20260324",
      startTime: "T170000Z",
      endTime: "T190000Z",
      location: "Lincoln Park, Chicago, IL",
      description: "Plan B: Lincoln Park Brunch\\n\\n11:00 AM Batter & Berries (Brunch)\\n12:30 PM Lincoln Park Walk + Colectivo Coffee\\n\\nFull details: dateflo.com/joseph-and-sandy"
    }
  }
];

// Set default plan
window.PLAN = window.PLAN_ALL[0];
