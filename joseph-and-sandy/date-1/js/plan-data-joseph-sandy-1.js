// ═══════════════════════════════════════════════════
// DateFlo | Joseph & Sandy | Date #1: Chicago Classics
// Friday, March 21, 2026 | 6:00 PM – 10:00 PM
// Real venues, real data, real everything
// Supports Plan A (River North Classics) and Plan B (South Loop Bites)
// Full swap options with complete venue objects
// ═══════════════════════════════════════════════════

window.PLAN_ALL = [
  // ════════════════════════════════════
  // PLAN A: RIVER NORTH CLASSICS
  // ════════════════════════════════════
  {
    id: "river-north-classics",
    couple: "Joseph & Sandy",
    coupleId: "joseph-sandy-2026",
    partner1: "Joseph",
    partner2: "Sandy",
    planName: "River North Classics",
    planEmoji: "🌭",
    planVibe: "The ultimate Chicago food crawl through River North. Legendary hot dogs, the best deep dish in the city, and desserts that are genuinely over the top.",
    greeting: "Okay Joseph and Sandy, we put together the kind of night that makes you fall in love with Chicago all over again. You're starting at the most iconic hot dog spot in the city where the chocolate cake shake alone is worth the trip, then walking literally two blocks to the deep dish spot that locals swear by, and finishing the night at a dessert bar that looks like it belongs on your Instagram. Everything is within a five minute walk of each other so you never have to worry about getting a ride between stops. This is going to be a really good night.",
    occasion: "Date Night",
    date: "Friday, March 21, 2026",
    dateShort: "Fri, March 21",
    startTime: "6:00 PM",
    endTime: "10:00 PM",
    city: "Chicago, IL",
    area: "River North",
    coverImage: "images/joseph-sandy/portillos-1.jpg",
    route: "Home → Portillo's → Lou Malnati's → JoJo's Shake Bar → Home",

    preferences: {
      joseph: {
        dietary: "No allergies",
        flavors: "Burritos, steak, chicken, tacos, sandwiches, hot dogs, Mexican, Japanese, Brazilian",
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
      high: "65°F",
      low: "38°F",
      conditions: "Overcast skies, mid 50s by evening. No rain expected.",
      sunset: "7:08 PM",
      rainChance: "0%",
      note: "It'll be cool by the time you're walking between stops so bring a jacket. Nothing heavy, just a layer."
    },

    stops: [
      // ── STOP 1: PORTILLO'S ──
      {
        order: 1,
        time: "6:00 PM",
        endTime: "7:15 PM",
        name: "Portillo's",
        type: "Hot Dogs",
        location: "River North, Chicago",
        tagline: "The most famous hot dog spot in Chicago and honestly it lives up to every bit of the hype",
        description: "This is where your Chicago food night begins and there is genuinely no better way to start. <a href=\"https://www.google.com/maps/search/?api=1&query=Portillo's+100+W+Ontario+St+Chicago\" target=\"_blank\">Portillo's on Ontario</a> is a Chicago institution and the River North location has this incredible 1930s Prohibition era vibe with vintage signs and old school charm everywhere you look. Joseph you're going to love the Chicago style hot dog with everything on it and Sandy the Italian beef is one of the best sandwiches you'll ever have. Share some cheese fries between you two and whatever you do, do not skip the chocolate cake shake because it is genuinely unreal.",
        image: "images/joseph-sandy/portillos-1.jpg",
        images: [
          "images/joseph-sandy/portillos-1.jpg",
          "images/joseph-sandy/portillos-2.jpg",
          "images/joseph-sandy/portillos-3.jpg",
          "images/joseph-sandy/portillos-4.jpg",
          "images/joseph-sandy/portillos-5.jpg",
          "images/joseph-sandy/portillos-6.jpg"
        ],
        address: "100 W Ontario St, Chicago, IL 60654",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8932,-87.6319",
        appleMapsUrl: "https://maps.apple.com/?daddr=41.8932,-87.6319&dirflg=d",
        parkingOptions: [
          {
            type: "paid",
            recommended: true,
            name: "SP+ Parking at 40 W Erie",
            address: "40 W Erie St, Chicago, IL 60654",
            cost: "$15 to $25 evening rate",
            tip: "One block south of Portillo's. Evening rates kick in after 5 PM and it's the closest garage. You can walk to all three stops from here.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8939,-87.6315",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8939,-87.6315&dirflg=d"
          },
          {
            type: "paid",
            recommended: false,
            name: "InterPark at 60 E Ohio",
            address: "60 E Ohio St, Chicago, IL 60611",
            cost: "$18 to $30",
            tip: "Larger garage with more availability. About a 5 minute walk to Portillo's.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8928,-87.6247",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8928,-87.6247&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8932&dropoff[longitude]=-87.6319&dropoff[nickname]=Portillo's%20River%20North",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8932&destination[longitude]=-87.6319"
        },
        cost: "$15 to $25 for two",
        dressCode: "Totally casual. This is a Chicago institution, come as you are.",
        reservation: null,
        reviews: {
          google: { stars: 4.4, count: 7309 },
          yelp: { stars: 4.0, count: 7309 }
        },
        happyHour: null,
        menuUrl: "https://www.portillos.com/menu/",
        reservationUrl: null,
        phone: "(312) 587-8910",
        foodRecs: {
          joseph: [
            { name: "Chicago Style Hot Dog", price: "$5.90", note: "The classic with everything. Mustard, relish, onions, tomato, pickle, sport peppers, celery salt on a poppy seed bun. This is what you came for Joseph." },
            { name: "Italian Beef (dipped)", price: "$11.20", note: "Slow roasted for four hours, thinly sliced, dipped in the juice. Get it with hot peppers." },
            { name: "Cheese Fries", price: "$4.25", note: "Share these. Smooth cheddar cheese sauce over crispy fries." }
          ],
          sandy: [
            { name: "Italian Beef Sandwich", price: "$11.20", note: "Sandy this is the sandwich Chicago is famous for. Ask for it with sweet peppers if you want less heat." },
            { name: "Maxwell St. Polish", price: "$9.00", note: "Grilled sausage with mustard and grilled onions. A perfect Chicago classic." },
            { name: "Chocolate Cake Shake", price: "$7.50", note: "They blend an actual slice of chocolate cake into a milkshake. You two need to share one of these." }
          ]
        },
        tips: [
          "The line moves fast even when it looks long, don't let it scare you",
          "The chocolate cake shake is a must. Share one between you two.",
          "Get the hot dog with everything, that's the Chicago way",
          "Friday evenings get busy around 7 PM so arriving at 6 gives you perfect timing"
        ],
        swapOptions: [
          // ── Alt 1: Superdawg ──
          {
            name: "Superdawg Drive-In",
            type: "Hot Dogs",
            location: "Norwood Park, Chicago",
            tagline: "A 1948 drive-in with giant hot dog statues on the roof and the best char dogs in the city",
            description: "If you want the most nostalgic hot dog experience in Chicago, <a href=\"https://www.google.com/maps/search/?api=1&query=Superdawg+Drive-In+6363+N+Milwaukee+Ave+Chicago\" target=\"_blank\">Superdawg</a> is it. This family owned drive-in has been here since 1948 and those two giant hot dog statues on the roof are a Chicago landmark. Joseph you're going to love eating in the car with the tray hooked to your window like something out of a movie. The Superdawg itself comes in a box with fries and everything is made fresh. Sandy the Whoopercheesie burger is incredible too. It's a bit of a drive from downtown but the experience is genuinely one of a kind.",
            image: "images/joseph-sandy/superdawg-1.jpg",
            images: [
              "images/joseph-sandy/superdawg-1.jpg",
              "images/joseph-sandy/superdawg-2.jpg",
              "images/joseph-sandy/superdawg-3.jpg",
              "images/joseph-sandy/superdawg-4.jpg",
              "images/joseph-sandy/superdawg-5.jpg",
              "images/joseph-sandy/superdawg-6.jpg"
            ],
            address: "6363 N Milwaukee Ave, Chicago, IL 60646",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=42.0079,-87.7838",
            appleMapsUrl: "https://maps.apple.com/?daddr=42.0079,-87.7838&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "Superdawg Parking Lot",
                address: "6363 N Milwaukee Ave, Chicago, IL 60646",
                cost: "Free",
                tip: "They have their own parking lot right at the drive-in. Pull in and flash your lights to order.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=42.0079,-87.7838",
                appleMapsUrl: "https://maps.apple.com/?daddr=42.0079,-87.7838&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=42.0079&dropoff[longitude]=-87.7838&dropoff[nickname]=Superdawg",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=42.0079&destination[longitude]=-87.7838"
            },
            cost: "$10 to $18 for two",
            dressCode: "You're eating in the car, wear whatever you want",
            reservation: null,
            reviews: {
              google: { stars: 4.5, count: 5200 },
              yelp: { stars: 4.0, count: 1800 }
            },
            happyHour: null,
            menuUrl: "https://www.superdawg.com/menu",
            reservationUrl: null,
            phone: "(773) 763-0660",
            foodRecs: {
              joseph: [
                { name: "Superdawg", price: "$7.50", note: "The signature dog in a box with Superdawg's own mustard, piccalilli, and a kosher pickle." },
                { name: "Submarina", price: "$8.50", note: "Their foot long version for when one dog isn't enough." }
              ],
              sandy: [
                { name: "Whoopercheesie", price: "$8.95", note: "Double cheeseburger that's been a favorite since the 50s." },
                { name: "Superdawg", price: "$7.50", note: "You have to try at least one. It's a Chicago rite of passage." }
              ]
            },
            tips: [
              "Flash your lights when you're ready to order",
              "Cash and cards accepted",
              "Open late on Fridays"
            ]
          },
          // ── Alt 2: Jim's Original ──
          {
            name: "Jim's Original",
            type: "Hot Dogs",
            location: "University Village, Chicago",
            tagline: "The oldest outdoor stand in Chicago, serving Maxwell Street Polish since 1939",
            description: "This is the real deal Chicago street food experience. <a href=\"https://www.google.com/maps/search/?api=1&query=Jim's+Original+1250+S+Union+Ave+Chicago\" target=\"_blank\">Jim's Original</a> has been on Maxwell Street since 1939 and the smell of those grilled onions will hit you from a block away. Joseph the Maxwell Street Polish here is the original, the one that started it all, and it's incredible. Sandy they also do a mean pork chop sandwich that locals swear by. It's an outdoor stand so you eat standing up or take it to go, which honestly makes it feel even more authentic.",
            image: "images/joseph-sandy/jims-original-1.jpg",
            images: [
              "images/joseph-sandy/jims-original-1.jpg",
              "images/joseph-sandy/jims-original-2.jpg",
              "images/joseph-sandy/jims-original-3.jpg",
              "images/joseph-sandy/jims-original-4.jpg",
              "images/joseph-sandy/jims-original-5.jpg",
              "images/joseph-sandy/jims-original-6.jpg"
            ],
            address: "1250 S Union Ave, Chicago, IL 60607",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8657,-87.6531",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8657,-87.6531&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "Street Parking on Union Ave",
                address: "Union Ave near Maxwell St, Chicago",
                cost: "Free after 6 PM",
                tip: "Metered spots on Union Ave are free after 6 PM. Usually plenty available on Friday evenings.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8657,-87.6531",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.8657,-87.6531&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8657&dropoff[longitude]=-87.6531&dropoff[nickname]=Jim's%20Original",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8657&destination[longitude]=-87.6531"
            },
            cost: "$8 to $14 for two",
            dressCode: "Super casual, it's an outdoor stand",
            reservation: null,
            reviews: {
              google: { stars: 4.4, count: 3800 },
              yelp: { stars: 4.0, count: 1200 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: "(312) 733-7820",
            foodRecs: {
              joseph: [
                { name: "Maxwell Street Polish", price: "$6.50", note: "The original. Grilled polish sausage with mustard and those famous grilled onions." }
              ],
              sandy: [
                { name: "Pork Chop Sandwich", price: "$7.50", note: "A thick grilled bone-in pork chop on bread. Locals call this the hidden gem of the menu." }
              ]
            },
            tips: [
              "Cash only, bring small bills",
              "Open 24/7 so timing is never an issue",
              "The grilled onions are the star, get them on everything"
            ]
          },
          // ── Alt 3: Devil Dawgs ──
          {
            name: "Devil Dawgs",
            type: "Hot Dogs",
            location: "South Loop, Chicago",
            tagline: "Chef driven hot dogs and sliders in the South Loop with creative twists on Chicago classics",
            description: "If you want Chicago hot dogs but with a little more flair, <a href=\"https://www.google.com/maps/search/?api=1&query=Devil+Dawgs+767+S+State+St+Chicago\" target=\"_blank\">Devil Dawgs on State Street</a> is your spot. Joseph they do a perfect Chicago style dog with everything but they also have these incredible sliders including the Elvis which has peanut butter, bacon, and inferno sauce which sounds wild but trust us it works. Sandy the fried chicken sandwich is really solid too. Everything is made with Vienna Beef and fresh cut Idaho fries and the vibe is casual and fun with a street food energy that feels very Chicago.",
            image: "images/joseph-sandy/devil-dawgs-1.jpg",
            images: [
              "images/joseph-sandy/devil-dawgs-1.jpg",
              "images/joseph-sandy/devil-dawgs-2.jpg",
              "images/joseph-sandy/devil-dawgs-3.jpg",
              "images/joseph-sandy/devil-dawgs-4.jpg",
              "images/joseph-sandy/devil-dawgs-5.jpg",
              "images/joseph-sandy/devil-dawgs-6.jpg"
            ],
            address: "767 S State St, Chicago, IL 60605",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8725,-87.6274",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8725,-87.6274&dirflg=d",
            parkingOptions: [
              {
                type: "paid",
                recommended: true,
                name: "South Loop Parking Garage",
                address: "801 S State St, Chicago, IL 60605",
                cost: "$12 to $18 evening",
                tip: "Right next door to Devil Dawgs. Easy in and out.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8720,-87.6274",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.8720,-87.6274&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8725&dropoff[longitude]=-87.6274&dropoff[nickname]=Devil%20Dawgs",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8725&destination[longitude]=-87.6274"
            },
            cost: "$12 to $20 for two",
            dressCode: "Casual, counter service spot",
            reservation: null,
            reviews: {
              google: { stars: 4.5, count: 1500 },
              yelp: { stars: 4.5, count: 1038 }
            },
            happyHour: null,
            menuUrl: "https://www.devildawgs.com/our-food/",
            reservationUrl: null,
            phone: "(312) 583-9100",
            foodRecs: {
              joseph: [
                { name: "Chicago Dog", price: "$5.80", note: "Classic Chicago style with everything. Vienna Beef on a poppy seed bun." },
                { name: "Elvis Slider", price: "$6.25", note: "Peanut butter, bacon, American cheese, inferno sauce. Sounds crazy but it's incredible." }
              ],
              sandy: [
                { name: "Southern Slaw Dog", price: "$6.95", note: "Homemade slaw, mustard and a pickle. A nice twist on the classic." },
                { name: "Hand Cut Fries", price: "$4.50", note: "Fresh Idaho potatoes cut daily. Get the cheese sauce on the side." }
              ]
            },
            tips: [
              "Open until midnight on Fridays",
              "The Elvis slider is their most talked about item",
              "They have a rewards program if you download the app"
            ]
          }
        ]
      },

      // ── STOP 2: LOU MALNATI'S ──
      {
        order: 2,
        time: "7:30 PM",
        endTime: "8:45 PM",
        name: "Lou Malnati's",
        type: "Deep Dish Pizza",
        location: "River North, Chicago",
        tagline: "The oldest family name in Chicago pizza and the buttery crust is genuinely life changing",
        description: "Two blocks from Portillo's and you're at the deep dish spot that locals will argue is the best in Chicago. <a href=\"https://www.google.com/maps/search/?api=1&query=Lou+Malnati's+439+N+Wells+St+Chicago\" target=\"_blank\">Lou Malnati's on Wells</a> has been making the same recipe since the 1950s and that buttery, flaky crust with the sweet tangy tomato sauce and gooey mozzarella is something you genuinely cannot get anywhere else. Joseph and Sandy, order a small deep dish to share because you already had hot dogs and you want to save room for dessert. The sausage is their signature topping and it comes as one big patty that covers the entire pizza which is exactly the way it should be.",
        image: "images/joseph-sandy/lou-malnatis-1.jpg",
        images: [
          "images/joseph-sandy/lou-malnatis-1.jpg",
          "images/joseph-sandy/lou-malnatis-2.jpg",
          "images/joseph-sandy/lou-malnatis-3.jpg",
          "images/joseph-sandy/lou-malnatis-4.jpg",
          "images/joseph-sandy/lou-malnatis-5.jpg",
          "images/joseph-sandy/lou-malnatis-6.jpg"
        ],
        address: "439 N Wells St, Chicago, IL 60654",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8906,-87.6339",
        appleMapsUrl: "https://maps.apple.com/?daddr=41.8906,-87.6339&dirflg=d",
        parkingOptions: [
          {
            type: "paid",
            recommended: true,
            name: "SP+ Parking at 40 W Erie",
            address: "40 W Erie St, Chicago, IL 60654",
            cost: "$15 to $25 evening rate",
            tip: "Same garage as Stop 1. It's a 3 minute walk from here. You parked once and you're set for the whole night.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8939,-87.6315",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8939,-87.6315&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8906&dropoff[longitude]=-87.6339&dropoff[nickname]=Lou%20Malnati's%20River%20North",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8906&destination[longitude]=-87.6339"
        },
        cost: "$18 to $28 for two (sharing a small deep dish)",
        dressCode: "Casual. It's a pizza place but a really good one.",
        reservation: {
          time: "7:30 PM",
          partySize: 2,
          notes: "Reservations recommended on Friday nights. Book through OpenTable or call ahead. Deep dish takes 30 to 40 minutes to cook so order as soon as you sit down."
        },
        reviews: {
          google: { stars: 4.5, count: 7826 },
          yelp: { stars: 4.0, count: 3410 }
        },
        happyHour: null,
        menuUrl: "https://www.loumalnatis.com/chicago-river-north/",
        reservationUrl: "https://www.opentable.com/r/lou-malnatis-river-north-chicago",
        phone: "(312) 828-9800",
        foodRecs: {
          joseph: [
            { name: "The Malnati Chicago Classic (Small)", price: "$19.99", note: "Sausage, mozzarella, and their signature chunky tomato sauce. This is their most famous pizza and it's incredible, Joseph." },
            { name: "Crustless Pizza", price: "$17.99", note: "If you want something lighter after the hot dogs, they do a crustless version that's essentially a deep dish bowl of cheese and sausage." }
          ],
          sandy: [
            { name: "Buttercrust Pepperoni (Small)", price: "$18.99", note: "Sandy the buttercrust is what makes Lou's legendary. It's flaky and buttery and the pepperoni gets a little crispy on the edges." },
            { name: "Lou's Salad", price: "$11.99", note: "If you want something lighter to balance out the pizza, their house salad is really fresh." }
          ]
        },
        tips: [
          "Order your deep dish immediately when you sit down, it takes 30 to 40 minutes to cook",
          "A small feeds 2 people perfectly, especially if you already had hot dogs",
          "The buttercrust is what makes Lou's special, it's unlike any other deep dish in Chicago",
          "Friday nights get packed after 7:30 so booking ahead is smart"
        ],
        swapOptions: [
          // ── Alt 1: Pequod's Pizza ──
          {
            name: "Pequod's Pizza",
            type: "Deep Dish Pizza",
            location: "Lincoln Park, Chicago",
            tagline: "Ranked number one pizza in America by Yelp and the caramelized cheese crust is absolutely legendary",
            description: "If you want the deep dish that every Chicago local will tell you is their actual favorite, <a href=\"https://www.google.com/maps/search/?api=1&query=Pequod's+Pizza+2207+N+Clybourn+Ave+Chicago\" target=\"_blank\">Pequod's</a> is it. The thing that makes them different is the caramelized cheese crust. They put mozzarella around the rim of the pan and it creates this dark, crispy, chewy ring of burnt cheese that is genuinely unlike anything else. Joseph and Sandy, this is a short rideshare from River North but it is absolutely worth it. The focaccia-like dough underneath all that cheese is thick and airy and perfect. Yelp ranked it the number one pizza in America and after one bite you'll understand why.",
            image: "images/joseph-sandy/pequods-1.jpg",
            images: [
              "images/joseph-sandy/pequods-1.jpg",
              "images/joseph-sandy/pequods-2.jpg",
              "images/joseph-sandy/pequods-3.jpg",
              "images/joseph-sandy/pequods-4.jpg",
              "images/joseph-sandy/pequods-5.jpg",
              "images/joseph-sandy/pequods-6.jpg"
            ],
            address: "2207 N Clybourn Ave, Chicago, IL 60614",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9218,-87.6644",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9218,-87.6644&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "Street Parking on Clybourn",
                address: "Clybourn Ave near Webster, Chicago",
                cost: "Free after 6 PM",
                tip: "Street parking on Clybourn and side streets. Usually available on weekday evenings.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9218,-87.6644",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.9218,-87.6644&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9218&dropoff[longitude]=-87.6644&dropoff[nickname]=Pequod's%20Pizza",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9218&destination[longitude]=-87.6644"
            },
            cost: "$15 to $25 for two",
            dressCode: "Very casual, neighborhood pizza joint vibes",
            reservation: {
              time: "7:30 PM",
              partySize: 2,
              notes: "Reservations highly recommended on Friday nights. Book through Tock. Expect 45+ minute pizza cook time."
            },
            reviews: {
              google: { stars: 4.5, count: 8860 },
              yelp: { stars: 4.5, count: 8860 }
            },
            happyHour: null,
            menuUrl: "https://pequodspizza.com/chicago/menu/",
            reservationUrl: "https://www.exploretock.com/pequodspizza",
            phone: "(773) 327-1512",
            foodRecs: {
              joseph: [
                { name: "Pan Pizza with Sausage (Individual)", price: "$10.95", note: "The caramelized cheese crust with Italian sausage. This is what made them famous, Joseph." }
              ],
              sandy: [
                { name: "Pan Pizza with Pepperoni (Individual)", price: "$12.50", note: "Sandy the pepperoni gets tucked under that caramelized cheese edge and it's perfect." }
              ]
            },
            tips: [
              "Book a reservation, walk-ins can wait 2+ hours on Fridays",
              "The personal 7 inch pie is perfect if you're sharing the night with other food stops",
              "Featured on Season 2 of The Bear on FX"
            ]
          },
          // ── Alt 2: Giordano's ──
          {
            name: "Giordano's",
            type: "Deep Dish Pizza",
            location: "Multiple locations, Chicago",
            tagline: "Famous stuffed deep dish since 1974 with layers of cheese that go on forever",
            description: "The other name that comes up in every Chicago deep dish conversation. <a href=\"https://www.google.com/maps/search/?api=1&query=Giordano's+730+N+Rush+St+Chicago\" target=\"_blank\">Giordano's on Rush Street</a> does a stuffed deep dish which is different from Lou's. It's two layers of crust with an ocean of mozzarella in between and that chunky tomato sauce on top. Joseph and Sandy, the Chicago Classic with pepperoni, mushrooms, green peppers and onions is their signature and it's a massive amount of food so a small is plenty for two. The Rush Street location is right in River North so you don't even have to change neighborhoods.",
            image: "images/joseph-sandy/giordanos-1.jpg",
            images: [
              "images/joseph-sandy/giordanos-1.jpg",
              "images/joseph-sandy/giordanos-2.jpg",
              "images/joseph-sandy/giordanos-3.jpg",
              "images/joseph-sandy/giordanos-4.jpg",
              "images/joseph-sandy/giordanos-5.jpg",
              "images/joseph-sandy/giordanos-6.jpg"
            ],
            address: "730 N Rush St, Chicago, IL 60611",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8955,-87.6246",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8955,-87.6246&dirflg=d",
            parkingOptions: [
              {
                type: "paid",
                recommended: true,
                name: "Hilton Garden Inn Garage",
                address: "10 E Grand Ave, Chicago, IL 60611",
                cost: "$20 to $30",
                tip: "Close to the Rush St location. A 2 minute walk.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8918,-87.6257",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.8918,-87.6257&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8955&dropoff[longitude]=-87.6246&dropoff[nickname]=Giordano's%20Rush%20St",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8955&destination[longitude]=-87.6246"
            },
            cost: "$20 to $30 for two",
            dressCode: "Casual",
            reservation: null,
            reviews: {
              google: { stars: 4.4, count: 3399 },
              yelp: { stars: 4.0, count: 3399 }
            },
            happyHour: null,
            menuUrl: "https://giordanos.com/menu/",
            reservationUrl: null,
            phone: "(312) 951-0747",
            foodRecs: {
              joseph: [
                { name: "Chicago Classic Deep Dish (Small)", price: "$24.35", note: "Pepperoni, mushrooms, green peppers, onions. Their signature stuffed pie." }
              ],
              sandy: [
                { name: "Cheese Deep Dish (Small)", price: "$19.95", note: "Sometimes simple is best. Layers of mozzarella in that stuffed crust." }
              ]
            },
            tips: [
              "Order your pizza while waiting for your table to cut down on total wait time",
              "Deep dish takes about 40 minutes to cook",
              "The Rush Street location is walkable from Portillo's"
            ]
          },
          // ── Alt 3: Art of Pizza ──
          {
            name: "Art of Pizza",
            type: "Deep Dish Pizza",
            location: "Lakeview, Chicago",
            tagline: "The locals' deep dish secret with slices as big as your head for under ten bucks",
            description: "This is the deep dish spot that tourists don't know about but every Chicago local does. <a href=\"https://www.google.com/maps/search/?api=1&query=Art+of+Pizza+3033+N+Ashland+Ave+Chicago\" target=\"_blank\">Art of Pizza on Ashland</a> does something almost no deep dish place does: they sell by the slice. And these slices are massive. Joseph you could get a sausage slice and a drink for under ten bucks and it's honestly some of the best deep dish in the city. Sandy the stuffed spinach is incredible. It's a no frills neighborhood spot that's all about the pizza and nothing else, which is exactly what makes it great.",
            image: "images/joseph-sandy/art-of-pizza-1.jpg",
            images: [
              "images/joseph-sandy/art-of-pizza-1.jpg",
              "images/joseph-sandy/art-of-pizza-2.jpg",
              "images/joseph-sandy/art-of-pizza-3.jpg",
              "images/joseph-sandy/art-of-pizza-4.jpg",
              "images/joseph-sandy/art-of-pizza-5.jpg",
              "images/joseph-sandy/art-of-pizza-6.jpg"
            ],
            address: "3033 N Ashland Ave, Chicago, IL 60657",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9369,-87.6695",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9369,-87.6695&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "Street Parking on Ashland",
                address: "Ashland Ave near Barry, Chicago",
                cost: "Free",
                tip: "Free street parking on Ashland and side streets. Usually easy to find a spot.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9369,-87.6695",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.9369,-87.6695&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9369&dropoff[longitude]=-87.6695&dropoff[nickname]=Art%20of%20Pizza",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9369&destination[longitude]=-87.6695"
            },
            cost: "$8 to $15 for two",
            dressCode: "Very casual, no frills neighborhood spot",
            reservation: null,
            reviews: {
              google: { stars: 4.6, count: 2800 },
              yelp: { stars: 4.5, count: 1500 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: "(773) 327-5600",
            foodRecs: {
              joseph: [
                { name: "Sausage Deep Dish Slice", price: "$7.50", note: "A single slice here is the size of a normal person's dinner. The sausage is perfect." }
              ],
              sandy: [
                { name: "Stuffed Spinach Slice", price: "$7.50", note: "Creamy spinach in that thick deep dish crust. Incredible." }
              ]
            },
            tips: [
              "They sell by the slice which is rare for deep dish in Chicago",
              "Cash is preferred but they take cards",
              "Slices are huge, one per person is plenty"
            ]
          }
        ]
      },

      // ── STOP 3: JOJO'S SHAKE BAR ──
      {
        order: 3,
        time: "9:00 PM",
        endTime: "10:00 PM",
        name: "JoJo's Shake Bar",
        type: "Dessert",
        location: "River North, Chicago",
        tagline: "Over the top milkshakes and desserts in an 80s retro diner that was basically made for date night",
        description: "You just had Chicago's best hot dogs and the most legendary deep dish in the city, and now you're ending the night at a place that feels like stepping into a time machine. <a href=\"https://www.google.com/maps/search/?api=1&query=JoJo's+Shake+Bar+23+W+Hubbard+St+Chicago\" target=\"_blank\">JoJo's Shake Bar</a> is this incredible 80s and 90s inspired spot with neon lights, arcade games, and milkshakes that are piled so high with toppings they look like works of art. Joseph and Sandy, you can get a boozy shake if you want or keep it classic with their signature over the top creations. The Cookie Monster shake alone has been all over social media for a reason. This is the kind of place where you're going to want to take photos of everything before you eat it.",
        image: "images/joseph-sandy/jojos-1.jpg",
        images: [
          "images/joseph-sandy/jojos-1.jpg",
          "images/joseph-sandy/jojos-2.jpg",
          "images/joseph-sandy/jojos-3.jpg",
          "images/joseph-sandy/jojos-4.jpg",
          "images/joseph-sandy/jojos-5.jpg",
          "images/joseph-sandy/jojos-6.jpg"
        ],
        address: "23 W Hubbard St, Chicago, IL 60654",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8901,-87.6309",
        appleMapsUrl: "https://maps.apple.com/?daddr=41.8901,-87.6309&dirflg=d",
        parkingOptions: [
          {
            type: "paid",
            recommended: true,
            name: "SP+ Parking at 40 W Erie",
            address: "40 W Erie St, Chicago, IL 60654",
            cost: "$15 to $25 evening rate",
            tip: "Same garage you've been using all night. JoJo's is a 4 minute walk from here.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8939,-87.6315",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8939,-87.6315&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8901&dropoff[longitude]=-87.6309&dropoff[nickname]=JoJo's%20Shake%20Bar",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8901&destination[longitude]=-87.6309"
        },
        cost: "$10 to $18 for two",
        dressCode: "Casual but it's a cute date night spot so dress up a little if you want",
        reservation: {
          time: "9:00 PM",
          partySize: 2,
          notes: "Reservations available through OpenTable. Friday nights can get busy but 9 PM is usually fine."
        },
        reviews: {
          google: { stars: 4.0, count: 1142 },
          yelp: { stars: 4.0, count: 1142 }
        },
        happyHour: null,
        menuUrl: "https://www.jojosshakebar.com/chicago",
        reservationUrl: "https://www.opentable.com/r/jojos-shakebar-river-north-chicago",
        phone: "(872) 250-5085",
        foodRecs: {
          joseph: [
            { name: "Cookie Monster Shake", price: "$16", note: "Their most famous shake. Cookies and cream ice cream topped with a mountain of cookie pieces, whipped cream, and blue frosting. Joseph this is an experience." },
            { name: "The OG Boozy Shake", price: "$18", note: "If you want something with a kick. Classic vanilla shake with your choice of spirit." }
          ],
          sandy: [
            { name: "S'mores Shake", price: "$16", note: "Sandy this one has toasted marshmallows, graham cracker, and chocolate. It's cozy and sweet and perfect for ending the night." },
            { name: "Ice Cream Float", price: "$12", note: "If you want something lighter after all that food, the floats are refreshing and fun." }
          ]
        },
        tips: [
          "The shakes are huge, share one if you're already full from dinner",
          "They have arcade game tables at the booths which is a fun date night touch",
          "Open until midnight on Fridays so no rush",
          "The boozy shakes are strong, one is probably plenty"
        ],
        swapOptions: [
          // ── Alt 1: Ghirardelli ──
          {
            name: "Ghirardelli Ice Cream & Chocolate Shop",
            type: "Dessert",
            location: "River North, Chicago",
            tagline: "Classic chocolate sundaes and shakes from San Francisco's most famous chocolate maker",
            description: "If you want something more classic and indulgent, <a href=\"https://www.google.com/maps/search/?api=1&query=Ghirardelli+Ice+Cream+Chicago+River+North\" target=\"_blank\">Ghirardelli in River North</a> is a beautiful spot for dessert. Joseph and Sandy, the hot fudge sundaes here use their signature chocolate that's been perfected since 1852 and it is rich and smooth in a way that generic ice cream shops just can't match. The milkshakes are thick and the chocolate squares they give you while you wait are a nice touch. It's warm, smells incredible, and it's the kind of place where you want to linger over something sweet.",
            image: "images/joseph-sandy/ghirardelli-1.jpg",
            images: [
              "images/joseph-sandy/ghirardelli-1.jpg",
              "images/joseph-sandy/ghirardelli-2.jpg",
              "images/joseph-sandy/ghirardelli-3.jpg",
              "images/joseph-sandy/ghirardelli-4.jpg",
              "images/joseph-sandy/ghirardelli-5.jpg",
              "images/joseph-sandy/ghirardelli-6.jpg"
            ],
            address: "830 N Michigan Ave, Chicago, IL 60611",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8984,-87.6239",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8984,-87.6239&dirflg=d",
            parkingOptions: [
              {
                type: "paid",
                recommended: true,
                name: "900 N Michigan Garage",
                address: "900 N Michigan Ave, Chicago, IL",
                cost: "$20 to $35",
                tip: "Right on the Magnificent Mile. Easy access.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8990,-87.6239",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.8990,-87.6239&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8984&dropoff[longitude]=-87.6239&dropoff[nickname]=Ghirardelli%20Chicago",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8984&destination[longitude]=-87.6239"
            },
            cost: "$10 to $18 for two",
            dressCode: "Casual",
            reservation: null,
            reviews: {
              google: { stars: 4.5, count: 3200 },
              yelp: { stars: 4.0, count: 900 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: "(312) 337-9330",
            foodRecs: {
              joseph: [
                { name: "Hot Fudge Sundae", price: "$11.95", note: "Classic Ghirardelli chocolate over vanilla ice cream. Simple and perfect." }
              ],
              sandy: [
                { name: "Chocolate Shake", price: "$9.95", note: "Thick, rich, made with their signature chocolate. Perfect date night treat." }
              ]
            },
            tips: [
              "They give you free chocolate squares while you wait",
              "The Michigan Ave location is walkable from River North"
            ]
          },
          // ── Alt 2: Stan's Donuts ──
          {
            name: "Stan's Donuts & Coffee",
            type: "Dessert",
            location: "River North, Chicago",
            tagline: "Gourmet donuts and craft coffee in a cozy River North spot that's perfect for a sweet ending",
            description: "For something more casual but genuinely delicious, <a href=\"https://www.google.com/maps/search/?api=1&query=Stan's+Donuts+Chicago+River+North\" target=\"_blank\">Stan's Donuts</a> does gourmet donuts that are in a completely different league from anything you've had before. Joseph the Biscoff Pocket is filled with cookie butter and it's unreal. Sandy the Pistachio Old Fashioned is beautiful and tastes even better than it looks. Grab a couple donuts and a coffee and take a walk along the river if the weather is nice. It's a sweet, simple way to end the night.",
            image: "images/joseph-sandy/stans-donuts-1.jpg",
            images: [
              "images/joseph-sandy/stans-donuts-1.jpg",
              "images/joseph-sandy/stans-donuts-2.jpg",
              "images/joseph-sandy/stans-donuts-3.jpg",
              "images/joseph-sandy/stans-donuts-4.jpg",
              "images/joseph-sandy/stans-donuts-5.jpg",
              "images/joseph-sandy/stans-donuts-6.jpg"
            ],
            address: "600 N Fairbanks Ct, Chicago, IL 60611",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8929,-87.6207",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8929,-87.6207&dirflg=d",
            parkingOptions: [
              {
                type: "paid",
                recommended: true,
                name: "SP+ Parking at 40 W Erie",
                address: "40 W Erie St, Chicago, IL 60654",
                cost: "$15 to $25",
                tip: "Same garage, about a 7 minute walk.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8939,-87.6315",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.8939,-87.6315&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8929&dropoff[longitude]=-87.6207&dropoff[nickname]=Stan's%20Donuts",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8929&destination[longitude]=-87.6207"
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
            phone: "(312) 929-4580",
            foodRecs: {
              joseph: [
                { name: "Biscoff Pocket", price: "$4.95", note: "Filled with Biscoff cookie butter. One of the best donuts in Chicago." }
              ],
              sandy: [
                { name: "Pistachio Old Fashioned", price: "$4.50", note: "Beautiful green glaze with real pistachio flavor. Tastes as good as it looks." }
              ]
            },
            tips: [
              "Grab donuts and walk along the Chicago Riverwalk if it's nice out",
              "They close at 10 PM so don't wait too long"
            ]
          },
          // ── Alt 3: The Dessert Dealer ──
          {
            name: "The Dessert Dealer",
            type: "Dessert",
            location: "River North, Chicago",
            tagline: "Over the top TACOlatos, ice cream, and cookies inside Parlor Pizza Bar",
            description: "Hidden inside <a href=\"https://www.google.com/maps/search/?api=1&query=Parlor+Pizza+Bar+River+North+Chicago\" target=\"_blank\">Parlor Pizza Bar in River North</a>, The Dessert Dealer does some of the most creative desserts in the city. Their signature TACOlatos are waffle cone tacos filled with ice cream and drizzled with sauces and it's the kind of thing you take a photo of before you eat. Joseph and Sandy, this is a fun surprise stop because it's tucked inside a pizza bar and the desserts are loud, colorful, and genuinely delicious. The vibe is perfect for a casual date night ending.",
            image: "images/joseph-sandy/dessert-dealer-1.jpg",
            images: [
              "images/joseph-sandy/dessert-dealer-1.jpg",
              "images/joseph-sandy/dessert-dealer-2.jpg",
              "images/joseph-sandy/dessert-dealer-3.jpg",
              "images/joseph-sandy/dessert-dealer-4.jpg",
              "images/joseph-sandy/dessert-dealer-5.jpg",
              "images/joseph-sandy/dessert-dealer-6.jpg"
            ],
            address: "26 E Hubbard St, Chicago, IL 60611",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8901,-87.6272",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8901,-87.6272&dirflg=d",
            parkingOptions: [
              {
                type: "paid",
                recommended: true,
                name: "SP+ Parking at 40 W Erie",
                address: "40 W Erie St, Chicago, IL 60654",
                cost: "$15 to $25",
                tip: "Same garage. 3 minute walk.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8939,-87.6315",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.8939,-87.6315&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8901&dropoff[longitude]=-87.6272&dropoff[nickname]=Dessert%20Dealer",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8901&destination[longitude]=-87.6272"
            },
            cost: "$8 to $14 for two",
            dressCode: "Casual",
            reservation: null,
            reviews: {
              google: { stars: 4.3, count: 500 },
              yelp: { stars: 4.0, count: 350 }
            },
            happyHour: null,
            menuUrl: "https://www.thedessertdealer.com/",
            reservationUrl: null,
            phone: null,
            foodRecs: {
              joseph: [
                { name: "TACOlato", price: "$8.95", note: "Waffle cone taco stuffed with ice cream and toppings. Joseph this is going to blow your mind." }
              ],
              sandy: [
                { name: "Cookie Ice Cream Sandwich", price: "$7.95", note: "Fresh baked cookies with your choice of ice cream in between. Simple and perfect." }
              ]
            },
            tips: [
              "It's inside Parlor Pizza Bar, look for the dessert counter",
              "The TACOlato is their signature, definitely try it",
              "Open late on Fridays"
            ]
          }
        ]
      }
    ],

    travelTimes: [
      { from: 1, to: 2, duration: "3 min walk", mode: "walk" },
      { from: 2, to: 3, duration: "4 min walk", mode: "walk" }
    ],

    budget: {
      items: [
        { label: "Portillo's (hot dogs, fries, shake)", cost: "$15–25" },
        { label: "Lou Malnati's (small deep dish to share)", cost: "$18–28" },
        { label: "JoJo's Shake Bar (2 shakes)", cost: "$10–18" }
      ],
      total: "$43–71",
      tip: "You can easily stay under $50 by splitting a deep dish at Lou's and sharing one shake at JoJo's. The Portillo's chocolate cake shake is a dessert in itself so you might not even need the third stop."
    },

    checklist: [
      { id: "chk-lou-res", text: "Make a reservation at Lou Malnati's for 7:30 PM on OpenTable", bold: "Lou Malnati's" },
      { id: "chk-jojo-res", text: "Check if JoJo's Shake Bar needs a reservation for 9 PM on OpenTable", bold: "JoJo's Shake Bar" },
      { id: "chk-jacket", text: "Bring a jacket for walking between stops, mid 50s by evening", bold: "jacket" },
      { id: "chk-phone", text: "Charge your phone for photos at JoJo's, the shakes are incredibly photogenic", bold: null },
      { id: "chk-ride", text: "Download Uber or Lyft in case you want a ride home after", bold: null }
    ],

    calendar: {
      title: "DateFlo: River North Classics (Chicago Food Crawl)",
      date: "20260321",
      startTime: "T000000Z",
      endTime: "T040000Z",
      location: "River North, Chicago, IL",
      description: "Plan A: River North Classics\\n\\n6:00 PM Portillo's (Hot Dogs)\\n7:30 PM Lou Malnati's (Deep Dish)\\n9:00 PM JoJo's Shake Bar (Dessert)\\n\\nFull details: dateflo.com/joseph-and-sandy"
    }
  },

  // ════════════════════════════════════
  // PLAN B: SOUTH LOOP BITES
  // ════════════════════════════════════
  {
    id: "south-loop-bites",
    couple: "Joseph & Sandy",
    coupleId: "joseph-sandy-2026",
    partner1: "Joseph",
    partner2: "Sandy",
    planName: "South Loop Bites",
    planEmoji: "🍕",
    planVibe: "A laid back food crawl through the South Loop where the hot dogs are chef-driven, the deep dish is stuffed to the ceiling, and dessert is a full experience.",
    greeting: "Joseph and Sandy, this one is for the nights when you want amazing food without the River North crowds. The South Loop has this incredible pocket of food spots that most tourists walk right past and we're taking you straight to the best of it. You're starting with some of the most creative hot dogs in the city, then sitting down for a stuffed deep dish that locals have been obsessed with since 1974, and ending with something sweet that's going to make the whole night feel complete. Everything is close together so you're never walking more than a few minutes between stops.",
    occasion: "Date Night",
    date: "Friday, March 21, 2026",
    dateShort: "Fri, March 21",
    startTime: "6:00 PM",
    endTime: "10:00 PM",
    city: "Chicago, IL",
    area: "South Loop",
    coverImage: "images/joseph-sandy/devil-dawgs-1.jpg",
    route: "Home → Devil Dawgs → Giordano's → Batter & Berries → Home",

    preferences: {
      joseph: {
        dietary: "No allergies",
        flavors: "Burritos, steak, chicken, tacos, sandwiches, hot dogs, Mexican, Japanese, Brazilian",
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
      high: "65°F",
      low: "38°F",
      conditions: "Overcast skies, mid 50s by evening. No rain expected.",
      sunset: "7:08 PM",
      rainChance: "0%",
      note: "Bring a light jacket for the walk between stops. It cools down quick after sunset."
    },

    stops: [
      // ── STOP 1: DEVIL DAWGS ──
      {
        order: 1,
        time: "6:00 PM",
        endTime: "7:00 PM",
        name: "Devil Dawgs",
        type: "Hot Dogs",
        location: "South Loop, Chicago",
        tagline: "Chef driven hot dogs and the most creative sliders in the city, all made with Vienna Beef",
        description: "This is not your average hot dog stand. <a href=\"https://www.google.com/maps/search/?api=1&query=Devil+Dawgs+767+S+State+St+Chicago\" target=\"_blank\">Devil Dawgs on State Street</a> takes Chicago classics and adds just enough creativity to make everything feel special. Joseph you need to try the Chicago Dog with everything because it's done perfectly here but the real star is the Elvis Slider with peanut butter, bacon, and inferno sauce that sounds insane but genuinely works. Sandy the Southern Slaw Dog is a beautiful twist on the classic and the hand cut fries are some of the best in the city. Everything is made with Vienna Beef and fresh Idaho potatoes and the vibe is casual, fun, and very Chicago.",
        image: "images/joseph-sandy/devil-dawgs-1.jpg",
        images: [
          "images/joseph-sandy/devil-dawgs-1.jpg",
          "images/joseph-sandy/devil-dawgs-2.jpg",
          "images/joseph-sandy/devil-dawgs-3.jpg",
          "images/joseph-sandy/devil-dawgs-4.jpg",
          "images/joseph-sandy/devil-dawgs-5.jpg",
          "images/joseph-sandy/devil-dawgs-6.jpg"
        ],
        address: "767 S State St, Chicago, IL 60605",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8725,-87.6274",
        appleMapsUrl: "https://maps.apple.com/?daddr=41.8725,-87.6274&dirflg=d",
        parkingOptions: [
          {
            type: "paid",
            recommended: true,
            name: "South Loop Parking",
            address: "801 S State St, Chicago, IL 60605",
            cost: "$12 to $18 evening",
            tip: "Right next to Devil Dawgs. Park here and walk to all three stops tonight.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8720,-87.6274",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8720,-87.6274&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8725&dropoff[longitude]=-87.6274&dropoff[nickname]=Devil%20Dawgs",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8725&destination[longitude]=-87.6274"
        },
        cost: "$12 to $20 for two",
        dressCode: "Casual, counter service",
        reservation: null,
        reviews: {
          google: { stars: 4.5, count: 1500 },
          yelp: { stars: 4.5, count: 1038 }
        },
        happyHour: null,
        menuUrl: "https://www.devildawgs.com/our-food/",
        reservationUrl: null,
        phone: "(312) 583-9100",
        foodRecs: {
          joseph: [
            { name: "Chicago Dog", price: "$5.80", note: "The classic done right. Mustard, onions, relish, pickle, tomato, sport peppers, celery salt on a poppy seed bun." },
            { name: "Elvis Slider", price: "$6.25", note: "Joseph trust us on this one. Peanut butter, bacon, American cheese, inferno sauce on a brioche bun. It's incredible." },
            { name: "Hand Cut Fries", price: "$4.50", note: "Fresh Idaho potatoes cut every single day. Get the cheese sauce." }
          ],
          sandy: [
            { name: "Southern Slaw Dog", price: "$6.95", note: "Homemade slaw, mustard, and a pickle. Sandy this is a really nice twist on the classic." },
            { name: "BBQ Slider", price: "$6.25", note: "BBQ sauce, grilled onions, bacon, American cheese on brioche. Hearty and delicious." },
            { name: "Onion Rings", price: "$5.50", note: "Crispy and golden. Perfect for sharing." }
          ]
        },
        tips: [
          "Open until midnight on Fridays so no rush",
          "The Elvis slider was named one of Chicago's greatest late night snacks",
          "They have a rewards program, download the app for a 50 point welcome bonus",
          "Counter service so grab a spot at the window bar"
        ],
        swapOptions: [
          {
            name: "Portillo's",
            type: "Hot Dogs",
            location: "River North, Chicago",
            tagline: "The most famous hot dog spot in Chicago with a legendary chocolate cake shake",
            description: "The iconic Prohibition era themed hot dog palace. <a href=\"https://www.google.com/maps/search/?api=1&query=Portillo's+100+W+Ontario+St+Chicago\" target=\"_blank\">Portillo's</a> is a Chicago institution with amazing Chicago dogs, Italian beef, and the famous chocolate cake shake.",
            image: "images/joseph-sandy/portillos-1.jpg",
            images: ["images/joseph-sandy/portillos-1.jpg","images/joseph-sandy/portillos-2.jpg","images/joseph-sandy/portillos-3.jpg","images/joseph-sandy/portillos-4.jpg","images/joseph-sandy/portillos-5.jpg","images/joseph-sandy/portillos-6.jpg"],
            address: "100 W Ontario St, Chicago, IL 60654",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8932,-87.6319",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8932,-87.6319&dirflg=d",
            parkingOptions: [{type:"paid",recommended:true,name:"SP+ Parking",address:"40 W Erie St",cost:"$15 to $25",tip:"One block south",googleMapsUrl:"https://www.google.com/maps/dir/?api=1&destination=41.8939,-87.6315",appleMapsUrl:"https://maps.apple.com/?daddr=41.8939,-87.6315&dirflg=d"}],
            transit:{uber:"https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8932&dropoff[longitude]=-87.6319&dropoff[nickname]=Portillo's",lyft:"https://lyft.com/ride?id=lyft&destination[latitude]=41.8932&destination[longitude]=-87.6319"},
            cost:"$15 to $25 for two",dressCode:"Casual",reservation:null,
            reviews:{google:{stars:4.4,count:7309},yelp:{stars:4.0,count:7309}},
            happyHour:null,menuUrl:"https://www.portillos.com/menu/",reservationUrl:null,phone:"(312) 587-8910",
            foodRecs:{joseph:[{name:"Chicago Style Hot Dog",price:"$5.90",note:"The classic with everything."}],sandy:[{name:"Italian Beef (dipped)",price:"$11.20",note:"Slow roasted and incredible."}]},
            tips:["Line moves fast","Don't skip the chocolate cake shake"]
          },
          {
            name: "Jim's Original",
            type: "Hot Dogs",
            location: "University Village, Chicago",
            tagline: "The oldest outdoor stand in Chicago since 1939",
            description: "The original Maxwell Street Polish spot. <a href=\"https://www.google.com/maps/search/?api=1&query=Jim's+Original+1250+S+Union+Ave+Chicago\" target=\"_blank\">Jim's Original</a> has been here since 1939 and the grilled onions are legendary.",
            image: "images/joseph-sandy/jims-original-1.jpg",
            images: ["images/joseph-sandy/jims-original-1.jpg","images/joseph-sandy/jims-original-2.jpg","images/joseph-sandy/jims-original-3.jpg","images/joseph-sandy/jims-original-4.jpg","images/joseph-sandy/jims-original-5.jpg","images/joseph-sandy/jims-original-6.jpg"],
            address: "1250 S Union Ave, Chicago, IL 60607",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8657,-87.6531",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8657,-87.6531&dirflg=d",
            parkingOptions: [{type:"free",recommended:true,name:"Street Parking",address:"Union Ave",cost:"Free after 6 PM",tip:"Free metered spots after 6 PM",googleMapsUrl:"https://www.google.com/maps/dir/?api=1&destination=41.8657,-87.6531",appleMapsUrl:"https://maps.apple.com/?daddr=41.8657,-87.6531&dirflg=d"}],
            transit:{uber:"https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8657&dropoff[longitude]=-87.6531&dropoff[nickname]=Jim's%20Original",lyft:"https://lyft.com/ride?id=lyft&destination[latitude]=41.8657&destination[longitude]=-87.6531"},
            cost:"$8 to $14 for two",dressCode:"Super casual",reservation:null,
            reviews:{google:{stars:4.4,count:3800},yelp:{stars:4.0,count:1200}},
            happyHour:null,menuUrl:null,reservationUrl:null,phone:"(312) 733-7820",
            foodRecs:{joseph:[{name:"Maxwell Street Polish",price:"$6.50",note:"The original since 1939."}],sandy:[{name:"Pork Chop Sandwich",price:"$7.50",note:"Hidden gem of the menu."}]},
            tips:["Cash only","Open 24/7","The grilled onions are the star"]
          },
          {
            name: "Superdawg Drive-In",
            type: "Hot Dogs",
            location: "Norwood Park, Chicago",
            tagline: "A 1948 drive-in with giant hot dog statues on the roof",
            description: "The most nostalgic hot dog experience in Chicago. <a href=\"https://www.google.com/maps/search/?api=1&query=Superdawg+Drive-In+6363+N+Milwaukee+Ave+Chicago\" target=\"_blank\">Superdawg</a> is a landmark drive-in since 1948.",
            image: "images/joseph-sandy/superdawg-1.jpg",
            images: ["images/joseph-sandy/superdawg-1.jpg","images/joseph-sandy/superdawg-2.jpg","images/joseph-sandy/superdawg-3.jpg","images/joseph-sandy/superdawg-4.jpg","images/joseph-sandy/superdawg-5.jpg","images/joseph-sandy/superdawg-6.jpg"],
            address: "6363 N Milwaukee Ave, Chicago, IL 60646",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=42.0079,-87.7838",
            appleMapsUrl: "https://maps.apple.com/?daddr=42.0079,-87.7838&dirflg=d",
            parkingOptions: [{type:"free",recommended:true,name:"Superdawg Lot",address:"6363 N Milwaukee Ave",cost:"Free",tip:"Their own parking lot",googleMapsUrl:"https://www.google.com/maps/dir/?api=1&destination=42.0079,-87.7838",appleMapsUrl:"https://maps.apple.com/?daddr=42.0079,-87.7838&dirflg=d"}],
            transit:{uber:"https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=42.0079&dropoff[longitude]=-87.7838&dropoff[nickname]=Superdawg",lyft:"https://lyft.com/ride?id=lyft&destination[latitude]=42.0079&destination[longitude]=-87.7838"},
            cost:"$10 to $18 for two",dressCode:"You're eating in the car",reservation:null,
            reviews:{google:{stars:4.5,count:5200},yelp:{stars:4.0,count:1800}},
            happyHour:null,menuUrl:"https://www.superdawg.com/menu",reservationUrl:null,phone:"(773) 763-0660",
            foodRecs:{joseph:[{name:"Superdawg",price:"$7.50",note:"The signature dog in a box."}],sandy:[{name:"Whoopercheesie",price:"$8.95",note:"Double cheeseburger classic since the 50s."}]},
            tips:["Flash your lights to order","Cash and cards accepted"]
          }
        ]
      },

      // ── STOP 2: GIORDANO'S ──
      {
        order: 2,
        time: "7:15 PM",
        endTime: "8:30 PM",
        name: "Giordano's",
        type: "Deep Dish Pizza",
        location: "South Loop, Chicago",
        tagline: "Famous stuffed deep dish since 1974 where the cheese stretches for days",
        description: "A short walk from Devil Dawgs and you're sitting down at one of Chicago's most legendary pizza spots. <a href=\"https://www.google.com/maps/search/?api=1&query=Giordano's+1340+S+Michigan+Ave+Chicago\" target=\"_blank\">Giordano's on Michigan Ave</a> has been doing stuffed deep dish since 1974 and the layers of mozzarella in between that double crust are genuinely unbelievable. Joseph and Sandy, order the Chicago Classic with pepperoni, mushrooms, green peppers and onions because it's their signature and it is packed with flavor. A small is more than enough for two especially after hot dogs. The deep dish takes about 40 minutes to cook so order right when you sit down and enjoy the time together.",
        image: "images/joseph-sandy/giordanos-1.jpg",
        images: [
          "images/joseph-sandy/giordanos-1.jpg",
          "images/joseph-sandy/giordanos-2.jpg",
          "images/joseph-sandy/giordanos-3.jpg",
          "images/joseph-sandy/giordanos-4.jpg",
          "images/joseph-sandy/giordanos-5.jpg",
          "images/joseph-sandy/giordanos-6.jpg"
        ],
        address: "1340 S Michigan Ave, Chicago, IL 60605",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8638,-87.6243",
        appleMapsUrl: "https://maps.apple.com/?daddr=41.8638,-87.6243&dirflg=d",
        parkingOptions: [
          {
            type: "paid",
            recommended: true,
            name: "South Loop Parking",
            address: "801 S State St, Chicago, IL 60605",
            cost: "$12 to $18",
            tip: "Same lot from Stop 1. About a 10 minute walk or a quick rideshare.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8720,-87.6274",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8720,-87.6274&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8638&dropoff[longitude]=-87.6243&dropoff[nickname]=Giordano's%20South%20Loop",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8638&destination[longitude]=-87.6243"
        },
        cost: "$20 to $30 for two",
        dressCode: "Casual",
        reservation: {
          time: "7:15 PM",
          partySize: 2,
          notes: "No reservations needed but order your pizza while waiting for a table to save time. Deep dish cooks for 40 minutes."
        },
        reviews: {
          google: { stars: 4.4, count: 711 },
          yelp: { stars: 4.0, count: 711 }
        },
        happyHour: null,
        menuUrl: "https://giordanos.com/menu/",
        reservationUrl: null,
        phone: "(312) 842-1100",
        foodRecs: {
          joseph: [
            { name: "Chicago Classic Deep Dish (Small)", price: "$24.35", note: "Pepperoni, mushrooms, green peppers, onions. The signature stuffed pie that made them famous, Joseph." },
            { name: "Meat & More Meat", price: "$26.95", note: "If you want to go all in: sausage, pepperoni, bacon, and beef. It's a lot but it's incredible." }
          ],
          sandy: [
            { name: "Cheese Deep Dish (Small)", price: "$19.95", note: "Sandy sometimes simple is best. Layers and layers of mozzarella in that signature double crust." },
            { name: "Giordano's Salad", price: "$10.95", note: "Fresh and light to balance out the richness of the pizza." }
          ]
        },
        tips: [
          "Order your pizza while waiting for a table to reduce total wait",
          "A small deep dish feeds 2 perfectly, especially after hot dogs",
          "The stuffed deep dish takes about 40 minutes, plan accordingly",
          "Open until midnight on Fridays"
        ],
        swapOptions: [
          {
            name: "Lou Malnati's",
            type: "Deep Dish Pizza",
            location: "River North, Chicago",
            tagline: "The oldest family name in Chicago pizza with the most famous buttercrust",
            description: "The deep dish spot that locals swear by. <a href=\"https://www.google.com/maps/search/?api=1&query=Lou+Malnati's+439+N+Wells+St+Chicago\" target=\"_blank\">Lou Malnati's</a> has been making the same recipe since the 1950s and that buttery, flaky crust is legendary.",
            image: "images/joseph-sandy/lou-malnatis-1.jpg",
            images: ["images/joseph-sandy/lou-malnatis-1.jpg","images/joseph-sandy/lou-malnatis-2.jpg","images/joseph-sandy/lou-malnatis-3.jpg","images/joseph-sandy/lou-malnatis-4.jpg","images/joseph-sandy/lou-malnatis-5.jpg","images/joseph-sandy/lou-malnatis-6.jpg"],
            address: "439 N Wells St, Chicago, IL 60654",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8906,-87.6339",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8906,-87.6339&dirflg=d",
            parkingOptions: [{type:"paid",recommended:true,name:"SP+ Parking",address:"40 W Erie St",cost:"$15 to $25",tip:"Close to the restaurant",googleMapsUrl:"https://www.google.com/maps/dir/?api=1&destination=41.8939,-87.6315",appleMapsUrl:"https://maps.apple.com/?daddr=41.8939,-87.6315&dirflg=d"}],
            transit:{uber:"https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8906&dropoff[longitude]=-87.6339&dropoff[nickname]=Lou%20Malnati's",lyft:"https://lyft.com/ride?id=lyft&destination[latitude]=41.8906&destination[longitude]=-87.6339"},
            cost:"$18 to $28 for two",dressCode:"Casual",
            reservation:{time:"7:15 PM",partySize:2,notes:"Book on OpenTable. Deep dish takes 30-40 min."},
            reviews:{google:{stars:4.5,count:7826},yelp:{stars:4.0,count:3410}},
            happyHour:null,menuUrl:"https://www.loumalnatis.com/chicago-river-north/",reservationUrl:"https://www.opentable.com/r/lou-malnatis-river-north-chicago",phone:"(312) 828-9800",
            foodRecs:{joseph:[{name:"Malnati Chicago Classic (Small)",price:"$19.99",note:"Sausage, mozzarella, signature sauce. Legendary."}],sandy:[{name:"Buttercrust Pepperoni (Small)",price:"$18.99",note:"That buttery crust with crispy pepperoni edges."}]},
            tips:["Order immediately, 30-40 min cook time","A small feeds 2 perfectly"]
          },
          {
            name: "Pequod's Pizza",
            type: "Deep Dish Pizza",
            location: "Lincoln Park, Chicago",
            tagline: "Number one pizza in America with a caramelized cheese crust",
            description: "The locals' favorite. <a href=\"https://www.google.com/maps/search/?api=1&query=Pequod's+Pizza+2207+N+Clybourn+Ave+Chicago\" target=\"_blank\">Pequod's</a> creates a caramelized cheese ring around the crust that is unlike anything else in Chicago.",
            image: "images/joseph-sandy/pequods-1.jpg",
            images: ["images/joseph-sandy/pequods-1.jpg","images/joseph-sandy/pequods-2.jpg","images/joseph-sandy/pequods-3.jpg","images/joseph-sandy/pequods-4.jpg","images/joseph-sandy/pequods-5.jpg","images/joseph-sandy/pequods-6.jpg"],
            address: "2207 N Clybourn Ave, Chicago, IL 60614",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9218,-87.6644",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9218,-87.6644&dirflg=d",
            parkingOptions: [{type:"free",recommended:true,name:"Street Parking",address:"Clybourn Ave",cost:"Free after 6 PM",tip:"Street spots available on weekday evenings",googleMapsUrl:"https://www.google.com/maps/dir/?api=1&destination=41.9218,-87.6644",appleMapsUrl:"https://maps.apple.com/?daddr=41.9218,-87.6644&dirflg=d"}],
            transit:{uber:"https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9218&dropoff[longitude]=-87.6644&dropoff[nickname]=Pequod's",lyft:"https://lyft.com/ride?id=lyft&destination[latitude]=41.9218&destination[longitude]=-87.6644"},
            cost:"$15 to $25 for two",dressCode:"Very casual",
            reservation:{time:"7:15 PM",partySize:2,notes:"Book on Tock. 45+ min cook time."},
            reviews:{google:{stars:4.5,count:8860},yelp:{stars:4.5,count:8860}},
            happyHour:null,menuUrl:"https://pequodspizza.com/chicago/menu/",reservationUrl:"https://www.exploretock.com/pequodspizza",phone:"(773) 327-1512",
            foodRecs:{joseph:[{name:"Pan Pizza with Sausage",price:"$10.95",note:"The caramelized crust with sausage. This is it."}],sandy:[{name:"Pan Pizza with Pepperoni",price:"$12.50",note:"Pepperoni tucked under the caramelized cheese edge."}]},
            tips:["Reservations essential on Fridays","Featured on The Bear (FX)"]
          },
          {
            name: "Art of Pizza",
            type: "Deep Dish Pizza",
            location: "Lakeview, Chicago",
            tagline: "The locals' deep dish secret with slices by the piece",
            description: "The spot tourists don't know about. <a href=\"https://www.google.com/maps/search/?api=1&query=Art+of+Pizza+3033+N+Ashland+Ave+Chicago\" target=\"_blank\">Art of Pizza</a> sells deep dish by the slice which is almost unheard of in Chicago.",
            image: "images/joseph-sandy/art-of-pizza-1.jpg",
            images: ["images/joseph-sandy/art-of-pizza-1.jpg","images/joseph-sandy/art-of-pizza-2.jpg","images/joseph-sandy/art-of-pizza-3.jpg","images/joseph-sandy/art-of-pizza-4.jpg","images/joseph-sandy/art-of-pizza-5.jpg","images/joseph-sandy/art-of-pizza-6.jpg"],
            address: "3033 N Ashland Ave, Chicago, IL 60657",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9369,-87.6695",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9369,-87.6695&dirflg=d",
            parkingOptions: [{type:"free",recommended:true,name:"Street Parking",address:"Ashland Ave",cost:"Free",tip:"Easy to find on side streets",googleMapsUrl:"https://www.google.com/maps/dir/?api=1&destination=41.9369,-87.6695",appleMapsUrl:"https://maps.apple.com/?daddr=41.9369,-87.6695&dirflg=d"}],
            transit:{uber:"https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9369&dropoff[longitude]=-87.6695&dropoff[nickname]=Art%20of%20Pizza",lyft:"https://lyft.com/ride?id=lyft&destination[latitude]=41.9369&destination[longitude]=-87.6695"},
            cost:"$8 to $15 for two",dressCode:"Very casual",reservation:null,
            reviews:{google:{stars:4.6,count:2800},yelp:{stars:4.5,count:1500}},
            happyHour:null,menuUrl:null,reservationUrl:null,phone:"(773) 327-5600",
            foodRecs:{joseph:[{name:"Sausage Deep Dish Slice",price:"$7.50",note:"A single slice is dinner-sized."}],sandy:[{name:"Stuffed Spinach Slice",price:"$7.50",note:"Creamy spinach in deep dish crust."}]},
            tips:["They sell by the slice, rare for deep dish","Cash preferred","Slices are huge"]
          }
        ]
      },

      // ── STOP 3: BATTER & BERRIES ──
      {
        order: 3,
        time: "8:45 PM",
        endTime: "9:45 PM",
        name: "Batter & Berries",
        type: "Dessert",
        location: "South Loop, Chicago",
        tagline: "Famous French toast flights and over the top dessert creations that are pure comfort",
        description: "For the sweetest ending to your night, <a href=\"https://www.google.com/maps/search/?api=1&query=Batter+and+Berries+2748+S+Michigan+Ave+Chicago\" target=\"_blank\">Batter & Berries</a> is a Chicago favorite known for their incredible French toast flights. Joseph and Sandy, you can order a flight of mini French toasts in flavors like lemon dream, strawberry shortcake, and caramel banana and share the whole thing between you. It's cozy, it's warm, and the portions are generous. This is the kind of place where you sink into the booth and just enjoy being together after a full night of amazing food.",
        image: "images/joseph-sandy/batter-berries-1.jpg",
        images: [
          "images/joseph-sandy/batter-berries-1.jpg",
          "images/joseph-sandy/batter-berries-2.jpg",
          "images/joseph-sandy/batter-berries-3.jpg",
          "images/joseph-sandy/batter-berries-4.jpg",
          "images/joseph-sandy/batter-berries-5.jpg",
          "images/joseph-sandy/batter-berries-6.jpg"
        ],
        address: "2748 S Michigan Ave, Chicago, IL 60616",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8425,-87.6237",
        appleMapsUrl: "https://maps.apple.com/?daddr=41.8425,-87.6237&dirflg=d",
        parkingOptions: [
          {
            type: "free",
            recommended: true,
            name: "Street Parking on Michigan Ave",
            address: "Michigan Ave near 28th St, Chicago",
            cost: "Free after 6 PM",
            tip: "Free metered parking after 6 PM along Michigan Ave. Usually plenty of spots in the evening.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8425,-87.6237",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8425,-87.6237&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8425&dropoff[longitude]=-87.6237&dropoff[nickname]=Batter%20%26%20Berries",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8425&destination[longitude]=-87.6237"
        },
        cost: "$10 to $18 for two",
        dressCode: "Casual and cozy",
        reservation: null,
        reviews: {
          google: { stars: 4.5, count: 2400 },
          yelp: { stars: 4.5, count: 1800 }
        },
        happyHour: null,
        menuUrl: null,
        reservationUrl: null,
        phone: "(312) 662-7880",
        foodRecs: {
          joseph: [
            { name: "French Toast Flight", price: "$16.95", note: "Three mini French toasts in different flavors. The caramel banana is incredible, Joseph." },
            { name: "Churro Waffle", price: "$14.95", note: "Cinnamon sugar waffle with dulce de leche. This is next level." }
          ],
          sandy: [
            { name: "Lemon Dream French Toast", price: "$14.95", note: "Sandy this is their most popular. Lemon curd, whipped cream, berry compote. It's heaven." },
            { name: "Strawberry Shortcake French Toast", price: "$14.95", note: "Fresh strawberries, whipped cream, powdered sugar. Sweet and light." }
          ]
        },
        tips: [
          "The French toast flight is perfect for sharing on a full stomach",
          "Check their hours as they sometimes close early on weeknights",
          "It's a short rideshare from Giordano's",
          "The vibe is cozy and perfect for ending a date night"
        ],
        swapOptions: [
          {
            name: "JoJo's Shake Bar",
            type: "Dessert",
            location: "River North, Chicago",
            tagline: "80s retro diner with over the top milkshakes and arcade games",
            description: "Neon lights, arcade games, and shakes piled high. <a href=\"https://www.google.com/maps/search/?api=1&query=JoJo's+Shake+Bar+23+W+Hubbard+St+Chicago\" target=\"_blank\">JoJo's</a> is an experience.",
            image: "images/joseph-sandy/jojos-1.jpg",
            images: ["images/joseph-sandy/jojos-1.jpg","images/joseph-sandy/jojos-2.jpg","images/joseph-sandy/jojos-3.jpg","images/joseph-sandy/jojos-4.jpg","images/joseph-sandy/jojos-5.jpg","images/joseph-sandy/jojos-6.jpg"],
            address: "23 W Hubbard St, Chicago, IL 60654",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8901,-87.6309",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8901,-87.6309&dirflg=d",
            parkingOptions: [{type:"paid",recommended:true,name:"SP+ Parking",address:"40 W Erie St",cost:"$15 to $25",tip:"Close by",googleMapsUrl:"https://www.google.com/maps/dir/?api=1&destination=41.8939,-87.6315",appleMapsUrl:"https://maps.apple.com/?daddr=41.8939,-87.6315&dirflg=d"}],
            transit:{uber:"https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8901&dropoff[longitude]=-87.6309&dropoff[nickname]=JoJo's",lyft:"https://lyft.com/ride?id=lyft&destination[latitude]=41.8901&destination[longitude]=-87.6309"},
            cost:"$10 to $18 for two",dressCode:"Casual",
            reservation:{time:"8:45 PM",partySize:2,notes:"OpenTable reservations available."},
            reviews:{google:{stars:4.0,count:1142},yelp:{stars:4.0,count:1142}},
            happyHour:null,menuUrl:"https://www.jojosshakebar.com/chicago",reservationUrl:"https://www.opentable.com/r/jojos-shakebar-river-north-chicago",phone:"(872) 250-5085",
            foodRecs:{joseph:[{name:"Cookie Monster Shake",price:"$16",note:"Their most famous. An experience."}],sandy:[{name:"S'mores Shake",price:"$16",note:"Toasted marshmallows, graham cracker, chocolate."}]},
            tips:["Shakes are huge, share one","Arcade games at the tables","Open until midnight Fridays"]
          },
          {
            name: "Ghirardelli Ice Cream & Chocolate Shop",
            type: "Dessert",
            location: "River North, Chicago",
            tagline: "Classic chocolate sundaes from San Francisco's finest since 1852",
            description: "Rich, classic, and indulgent. <a href=\"https://www.google.com/maps/search/?api=1&query=Ghirardelli+Ice+Cream+Chicago\" target=\"_blank\">Ghirardelli</a> does hot fudge sundaes with their signature chocolate.",
            image: "images/joseph-sandy/ghirardelli-1.jpg",
            images: ["images/joseph-sandy/ghirardelli-1.jpg","images/joseph-sandy/ghirardelli-2.jpg","images/joseph-sandy/ghirardelli-3.jpg","images/joseph-sandy/ghirardelli-4.jpg","images/joseph-sandy/ghirardelli-5.jpg","images/joseph-sandy/ghirardelli-6.jpg"],
            address: "830 N Michigan Ave, Chicago, IL 60611",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8984,-87.6239",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8984,-87.6239&dirflg=d",
            parkingOptions: [{type:"paid",recommended:true,name:"900 N Michigan Garage",address:"900 N Michigan Ave",cost:"$20 to $35",tip:"On the Magnificent Mile",googleMapsUrl:"https://www.google.com/maps/dir/?api=1&destination=41.8990,-87.6239",appleMapsUrl:"https://maps.apple.com/?daddr=41.8990,-87.6239&dirflg=d"}],
            transit:{uber:"https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8984&dropoff[longitude]=-87.6239&dropoff[nickname]=Ghirardelli",lyft:"https://lyft.com/ride?id=lyft&destination[latitude]=41.8984&destination[longitude]=-87.6239"},
            cost:"$10 to $18 for two",dressCode:"Casual",reservation:null,
            reviews:{google:{stars:4.5,count:3200},yelp:{stars:4.0,count:900}},
            happyHour:null,menuUrl:null,reservationUrl:null,phone:"(312) 337-9330",
            foodRecs:{joseph:[{name:"Hot Fudge Sundae",price:"$11.95",note:"Classic Ghirardelli chocolate over vanilla."}],sandy:[{name:"Chocolate Shake",price:"$9.95",note:"Thick, rich, signature chocolate."}]},
            tips:["Free chocolate squares while you wait","Walkable from River North"]
          },
          {
            name: "Stan's Donuts & Coffee",
            type: "Dessert",
            location: "River North, Chicago",
            tagline: "Gourmet donuts and craft coffee perfect for a sweet casual ending",
            description: "Grab gourmet donuts and take a walk. <a href=\"https://www.google.com/maps/search/?api=1&query=Stan's+Donuts+Chicago\" target=\"_blank\">Stan's Donuts</a> does flavors you've never seen before.",
            image: "images/joseph-sandy/stans-donuts-1.jpg",
            images: ["images/joseph-sandy/stans-donuts-1.jpg","images/joseph-sandy/stans-donuts-2.jpg","images/joseph-sandy/stans-donuts-3.jpg","images/joseph-sandy/stans-donuts-4.jpg","images/joseph-sandy/stans-donuts-5.jpg","images/joseph-sandy/stans-donuts-6.jpg"],
            address: "600 N Fairbanks Ct, Chicago, IL 60611",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8929,-87.6207",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8929,-87.6207&dirflg=d",
            parkingOptions: [{type:"paid",recommended:true,name:"SP+ Parking",address:"40 W Erie St",cost:"$15 to $25",tip:"About a 7 minute walk",googleMapsUrl:"https://www.google.com/maps/dir/?api=1&destination=41.8939,-87.6315",appleMapsUrl:"https://maps.apple.com/?daddr=41.8939,-87.6315&dirflg=d"}],
            transit:{uber:"https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8929&dropoff[longitude]=-87.6207&dropoff[nickname]=Stan's%20Donuts",lyft:"https://lyft.com/ride?id=lyft&destination[latitude]=41.8929&destination[longitude]=-87.6207"},
            cost:"$6 to $12 for two",dressCode:"Casual",reservation:null,
            reviews:{google:{stars:4.6,count:2100},yelp:{stars:4.5,count:800}},
            happyHour:null,menuUrl:"https://www.stansdonuts.com/menu",reservationUrl:null,phone:"(312) 929-4580",
            foodRecs:{joseph:[{name:"Biscoff Pocket",price:"$4.95",note:"Cookie butter filled. One of Chicago's best."}],sandy:[{name:"Pistachio Old Fashioned",price:"$4.50",note:"Beautiful and delicious."}]},
            tips:["Closes at 10 PM","Grab donuts and walk the Riverwalk"]
          }
        ]
      }
    ],

    travelTimes: [
      { from: 1, to: 2, duration: "10 min walk", mode: "walk" },
      { from: 2, to: 3, duration: "8 min rideshare", mode: "car" }
    ],

    budget: {
      items: [
        { label: "Devil Dawgs (dogs, sliders, fries)", cost: "$12–20" },
        { label: "Giordano's (small deep dish to share)", cost: "$20–30" },
        { label: "Batter & Berries (French toast to share)", cost: "$10–18" }
      ],
      total: "$42–68",
      tip: "Stay under $50 by splitting one deep dish at Giordano's and sharing a French toast flight at Batter & Berries. The hot dog stop is cheap enough to get whatever you want."
    },

    checklist: [
      { id: "chk-bb-hours", text: "Check Batter & Berries hours for Friday evening (they sometimes close early)", bold: "Batter & Berries" },
      { id: "chk-jacket-b", text: "Bring a jacket, mid 50s by evening and you'll be walking between stops", bold: "jacket" },
      { id: "chk-ride-b", text: "Download Uber or Lyft for the ride to Batter & Berries from Giordano's", bold: null },
      { id: "chk-phone-b", text: "Charge your phone for photos", bold: null },
      { id: "chk-hungry", text: "Come hungry, this is a lot of food", bold: null }
    ],

    calendar: {
      title: "DateFlo: South Loop Bites (Chicago Food Crawl)",
      date: "20260321",
      startTime: "T000000Z",
      endTime: "T040000Z",
      location: "South Loop, Chicago, IL",
      description: "Plan B: South Loop Bites\\n\\n6:00 PM Devil Dawgs (Hot Dogs)\\n7:15 PM Giordano's (Deep Dish)\\n8:45 PM Batter & Berries (Dessert)\\n\\nFull details: dateflo.com/joseph-and-sandy"
    }
  }
];

// Set default plan
window.PLAN = window.PLAN_ALL[0];
