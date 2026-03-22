// ═══════════════════════════════════════════════════
// DateFlo | Joseph & Sandy | Date #3: Wicker Park Stroll
// Sunday, March 23, 2026 | 5:00 PM – 8:00 PM
// Real venues, real data, real everything
// Supports Plan A (Wicker Park Stroll) and Plan B (Magnificent Mile Evening)
// Full swap options with complete venue objects
// ═══════════════════════════════════════════════════

window.PLAN_ALL = [
  // ════════════════════════════════════
  // PLAN A: WICKER PARK STROLL
  // ════════════════════════════════════
  {
    id: "wicker-park-stroll",
    couple: "Joseph & Sandy",
    coupleId: "joseph-sandy-2026",
    partner1: "Joseph",
    partner2: "Sandy",
    planName: "Wicker Park Stroll",
    planEmoji: "🛍️",
    planVibe: "A spontaneous surprise date through one of Chicago's coolest neighborhoods. Boutique shopping, legendary tacos, and a cozy bookstore finish.",
    greeting: "Okay Joseph and Sandy, this one is going to feel like you stumbled into the best Sunday afternoon in Chicago. You're starting with boutique shopping along Damen Ave in Wicker Park where every store has personality and you'll find things you literally cannot get anywhere else. Then you're walking over to one of the most iconic taco spots in the city where the whiskey is smooth and the tacos are perfect. And you're ending the night at a three story used bookstore that feels like it belongs in a movie. Everything is walkable, the vibes are incredible, and you two are going to have an amazing time. Bundle up though because it's going to be cold out there.",
    occasion: "Surprise Date",
    date: "Sunday, March 23, 2026",
    dateShort: "Sun, March 23",
    startTime: "5:00 PM",
    endTime: "8:00 PM",
    city: "Chicago, IL",
    area: "Wicker Park / Bucktown",
    coverImage: "images/joseph-sandy/damen-ave-1.jpg",
    route: "Home → Damen Ave Boutiques → Big Star → Myopic Books → Home",

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
      high: "39°F",
      low: "32°F",
      conditions: "Very cold, clear skies. Bundle up with warm layers.",
      sunset: "7:12 PM",
      rainChance: "5%",
      note: "It's going to be genuinely cold out there so dress warm. Think layers, a good jacket, gloves, and maybe a scarf. You'll be ducking in and out of shops so you'll warm up between stops but the walks between them will be chilly."
    },

    stops: [
      // ── STOP 1: BOUTIQUE SHOPPING ON DAMEN AVE ──
      {
        order: 1,
        time: "5:00 PM",
        endTime: "6:15 PM",
        name: "Boutique Shopping on Damen Ave",
        type: "Shopping",
        location: "Wicker Park, Chicago",
        tagline: "Some of the best independent shops in Chicago all within a few blocks of each other",
        description: "This is where your surprise date begins and it's going to set the whole tone for the evening. <a href=\"https://www.google.com/maps/search/?api=1&query=Damen+Ave+Wicker+Park+Chicago\" target=\"_blank\">Damen Avenue in Wicker Park</a> is lined with some of the coolest independent shops in the city and you can easily spend an hour just wandering in and out of them. Start at <a href=\"https://www.google.com/maps/search/?api=1&query=Mildblend+Supply+Co+1342+N+Milwaukee+Ave+Chicago\" target=\"_blank\">Mildblend Supply Co</a> for premium denim and vintage inspired workwear, then pop into <a href=\"https://www.google.com/maps/search/?api=1&query=Transit+Tees+1371+N+Milwaukee+Ave+Chicago\" target=\"_blank\">Transit Tees</a> for Chicago themed apparel and prints that make the best souvenirs. Joseph you're going to love <a href=\"https://www.google.com/maps/search/?api=1&query=Kokorokoko+1323+N+Milwaukee+Ave+Chicago\" target=\"_blank\">Kokorokoko</a> which has incredible vintage finds from the 80s and 90s, and Sandy make sure you check out <a href=\"https://www.google.com/maps/search/?api=1&query=The+Silver+Room+1506+E+53rd+St+Chicago\" target=\"_blank\">The Silver Room</a> for handmade jewelry and art. Walk the iconic six way intersection at Damen, Milwaukee, and North for the full Wicker Park experience.",
        image: "images/joseph-sandy/damen-ave-1.jpg",
        images: [
          "images/joseph-sandy/damen-ave-1.jpg",
          "images/joseph-sandy/damen-ave-2.jpg",
          "images/joseph-sandy/damen-ave-3.jpg",
          "images/joseph-sandy/damen-ave-4.jpg",
          "images/joseph-sandy/damen-ave-5.jpg",
          "images/joseph-sandy/damen-ave-6.jpg"
        ],
        address: "1500 N Milwaukee Ave, Chicago, IL 60622",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9085,-87.6742",
        appleMapsUrl: "https://maps.apple.com/?daddr=41.9085,-87.6742&dirflg=d",
        parkingOptions: [
          {
            type: "free",
            recommended: true,
            name: "Street Parking on Damen Ave",
            address: "Damen Ave near North Ave, Chicago",
            cost: "Free on Sundays",
            tip: "Street parking in Wicker Park is free on Sundays. You can usually find spots along Damen or the side streets off Milwaukee Ave.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9098,-87.6775",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9098,-87.6775&dirflg=d"
          },
          {
            type: "paid",
            recommended: false,
            name: "LAZ Parking at 1601 N Milwaukee",
            address: "1601 N Milwaukee Ave, Chicago, IL 60647",
            cost: "$10 to $15",
            tip: "Indoor garage right on Milwaukee Ave if street parking is tight. Walking distance to all the shops.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9105,-87.6762",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9105,-87.6762&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9085&dropoff[longitude]=-87.6742&dropoff[nickname]=Damen%20Ave%20Wicker%20Park",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9085&destination[longitude]=-87.6742"
        },
        cost: "Free to browse",
        dressCode: "Dress warm and layer up. You'll be popping in and out of shops so something easy to take off and put on works best.",
        reservation: null,
        reviews: {
          google: { stars: 4.6, count: 850 },
          yelp: { stars: 4.5, count: 620 }
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
          "Most shops on Damen are open until 7 PM on Sundays so you have plenty of time",
          "The six way intersection at Damen, Milwaukee, and North is the heart of Wicker Park and great for photos",
          "Mildblend has some of the best denim in the Midwest, worth a serious look",
          "Kokorokoko is cash only so bring some bills if you want vintage finds"
        ],
        swapOptions: [
          // ── Alt 1: Andersonville Shops ──
          {
            name: "Andersonville Shopping",
            type: "Shopping",
            location: "Andersonville, Chicago",
            tagline: "A charming Swedish neighborhood with eclectic boutiques and vintage shops along Clark Street",
            description: "If you want a neighborhood that feels a little more intimate and less crowded than Wicker Park, <a href=\"https://www.google.com/maps/search/?api=1&query=Andersonville+Clark+St+Chicago\" target=\"_blank\">Andersonville on Clark Street</a> is a wonderful alternative. Joseph you'll love browsing <a href=\"https://www.google.com/maps/search/?api=1&query=Woolly+Mammoth+Antiques+1513+W+Foster+Ave+Chicago\" target=\"_blank\">Woolly Mammoth</a> for vintage oddities and Sandy the boutiques along Clark between Foster and Berwyn have the most unique clothing and jewelry. The Swedish bakery heritage means you can grab pastries as you shop. It's a cozy, walkable strip that feels like its own little world.",
            image: "images/joseph-sandy/andersonville-1.jpg",
            images: [
              "images/joseph-sandy/andersonville-1.jpg",
              "images/joseph-sandy/andersonville-2.jpg",
              "images/joseph-sandy/andersonville-3.jpg",
              "images/joseph-sandy/andersonville-4.jpg",
              "images/joseph-sandy/andersonville-5.jpg",
              "images/joseph-sandy/andersonville-6.jpg"
            ],
            address: "5207 N Clark St, Chicago, IL 60640",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9764,-87.6684",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9764,-87.6684&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "Street Parking on Clark St",
                address: "Clark St near Foster Ave, Chicago",
                cost: "Free on Sundays",
                tip: "Free street parking on Sundays. Side streets off Clark usually have spots.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9764,-87.6684",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.9764,-87.6684&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9764&dropoff[longitude]=-87.6684&dropoff[nickname]=Andersonville",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9764&destination[longitude]=-87.6684"
            },
            cost: "Free to browse",
            dressCode: "Warm layers, casual",
            reservation: null,
            reviews: {
              google: { stars: 4.5, count: 300 },
              yelp: { stars: 4.5, count: 250 }
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
              "Clark Street between Foster and Berwyn is the main stretch",
              "Woolly Mammoth has two floors of vintage treasures",
              "Most shops open until 6 PM on Sundays"
            ]
          },
          // ── Alt 2: Logan Square Shops ──
          {
            name: "Logan Square Boutiques",
            type: "Shopping",
            location: "Logan Square, Chicago",
            tagline: "Hip neighborhood shops along Milwaukee Ave with a local creative spirit",
            description: "If you want to stay in that independent boutique vibe but try a different strip, <a href=\"https://www.google.com/maps/search/?api=1&query=Logan+Square+Milwaukee+Ave+Chicago\" target=\"_blank\">Logan Square along Milwaukee Ave</a> is packed with creative shops and local designers. Check out <a href=\"https://www.google.com/maps/search/?api=1&query=Wolfbait+%26+B-Girls+3131+W+Logan+Blvd+Chicago\" target=\"_blank\">Wolfbait & B-Girls</a> for locally made clothing and accessories, and browse the vintage record shops and art galleries. Joseph you'll dig the streetwear finds and Sandy the handmade goods here are genuinely one of a kind. The Logan Square monument makes a great photo op to start the evening.",
            image: "images/joseph-sandy/logan-square-1.jpg",
            images: [
              "images/joseph-sandy/logan-square-1.jpg",
              "images/joseph-sandy/logan-square-2.jpg",
              "images/joseph-sandy/logan-square-3.jpg",
              "images/joseph-sandy/logan-square-4.jpg",
              "images/joseph-sandy/logan-square-5.jpg",
              "images/joseph-sandy/logan-square-6.jpg"
            ],
            address: "2532 N Milwaukee Ave, Chicago, IL 60647",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9273,-87.7082",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9273,-87.7082&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "Street Parking on Milwaukee Ave",
                address: "Milwaukee Ave near Logan Blvd, Chicago",
                cost: "Free on Sundays",
                tip: "Free street parking on Sundays. Logan Square has more availability than Wicker Park.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9273,-87.7082",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.9273,-87.7082&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9273&dropoff[longitude]=-87.7082&dropoff[nickname]=Logan%20Square",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9273&destination[longitude]=-87.7082"
            },
            cost: "Free to browse",
            dressCode: "Warm layers, casual",
            reservation: null,
            reviews: {
              google: { stars: 4.4, count: 200 },
              yelp: { stars: 4.3, count: 180 }
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
              "The Logan Square monument is a beautiful photo spot",
              "Wolfbait & B-Girls is all locally made and designed",
              "Milwaukee Ave here is less crowded than Wicker Park"
            ]
          },
          // ── Alt 3: Bucktown Shops ──
          {
            name: "Bucktown Boutiques",
            type: "Shopping",
            location: "Bucktown, Chicago",
            tagline: "Upscale indie shops just north of Wicker Park with a slightly more polished feel",
            description: "Just a few blocks north of Wicker Park, <a href=\"https://www.google.com/maps/search/?api=1&query=Bucktown+Damen+Ave+Chicago\" target=\"_blank\">Bucktown along Damen Ave</a> has a slightly more curated, polished version of the same independent shopping spirit. Joseph check out <a href=\"https://www.google.com/maps/search/?api=1&query=Eskell+1509+N+Milwaukee+Ave+Chicago\" target=\"_blank\">Eskell</a> for men's accessories and home goods, and Sandy you'll love the boutique clothing shops between Armitage and North Ave. The architecture in Bucktown is gorgeous and the streets feel a little quieter which is nice for a Sunday evening stroll together.",
            image: "images/joseph-sandy/bucktown-1.jpg",
            images: [
              "images/joseph-sandy/bucktown-1.jpg",
              "images/joseph-sandy/bucktown-2.jpg",
              "images/joseph-sandy/bucktown-3.jpg",
              "images/joseph-sandy/bucktown-4.jpg",
              "images/joseph-sandy/bucktown-5.jpg",
              "images/joseph-sandy/bucktown-6.jpg"
            ],
            address: "1700 N Damen Ave, Chicago, IL 60647",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9130,-87.6775",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9130,-87.6775&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "Street Parking on Damen Ave",
                address: "Damen Ave near Armitage, Chicago",
                cost: "Free on Sundays",
                tip: "Free street parking on Sundays. Bucktown is usually easier to park than Wicker Park.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9130,-87.6775",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.9130,-87.6775&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9130&dropoff[longitude]=-87.6775&dropoff[nickname]=Bucktown",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9130&destination[longitude]=-87.6775"
            },
            cost: "Free to browse",
            dressCode: "Warm layers, casual but a touch more polished",
            reservation: null,
            reviews: {
              google: { stars: 4.5, count: 280 },
              yelp: { stars: 4.4, count: 220 }
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
              "Damen between Armitage and North Ave is the sweet spot",
              "Eskell has great men's gifts and home goods",
              "Side streets have beautiful brownstone architecture"
            ]
          }
        ]
      },

      // ── STOP 2: BIG STAR ──
      {
        order: 2,
        time: "6:30 PM",
        endTime: "7:30 PM",
        name: "Big Star",
        type: "Dinner",
        location: "Wicker Park, Chicago",
        tagline: "Legendary tacos and whiskey in the heart of Wicker Park with one of the best vibes in Chicago",
        description: "Now for the main event. <a href=\"https://www.google.com/maps/search/?api=1&query=Big+Star+1531+N+Damen+Ave+Chicago\" target=\"_blank\">Big Star</a> is one of those places that every Chicago local will tell you to go to and there is a very good reason for that. The tacos are incredible, the whiskey list is deep, and the atmosphere is just cool without trying too hard. Joseph you are going to love the pork belly tacos and the whiskey flights here are perfect for a cold night. Sandy the chicken tinga tacos are amazing and you two should definitely share some guacamole to start. They have a heated enclosed patio area which is great for a freezing Sunday and the honky tonk music in the background makes everything feel like an adventure. This is the kind of place where you lose track of time because you're having so much fun.",
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
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9095,-87.6775",
        appleMapsUrl: "https://maps.apple.com/?daddr=41.9095,-87.6775&dirflg=d",
        parkingOptions: [
          {
            type: "free",
            recommended: true,
            name: "Street Parking on Damen Ave",
            address: "Damen Ave near Milwaukee Ave, Chicago",
            cost: "Free on Sundays",
            tip: "Same free Sunday parking as Stop 1. If you parked for shopping you're already set, Big Star is right there on Damen.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9095,-87.6775",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9095,-87.6775&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9095&dropoff[longitude]=-87.6775&dropoff[nickname]=Big%20Star",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9095&destination[longitude]=-87.6775"
        },
        cost: "$30 to $50 for two",
        dressCode: "Casual. Jeans and a warm sweater is perfect.",
        reservation: null,
        reviews: {
          google: { stars: 4.4, count: 3500 },
          yelp: { stars: 4.0, count: 3500 }
        },
        happyHour: null,
        menuUrl: "https://www.bigstarchicago.com/menus/",
        reservationUrl: null,
        phone: "(773) 235-4039",
        foodRecs: {
          joseph: [
            { name: "Pork Belly Tacos", price: "$5.50", note: "Crispy pork belly with salsa verde and pickled onions. Joseph these are unreal and you need at least two." },
            { name: "Whiskey Flight", price: "$18", note: "They have one of the best bourbon selections in Chicago. Ask the bartender to pick you something smoky." },
            { name: "Guacamole & Chips", price: "$11", note: "Made fresh, share this to start while you look at the menu." }
          ],
          sandy: [
            { name: "Chicken Tinga Tacos", price: "$4.50", note: "Sandy these are smoky, a little spicy, and absolutely delicious. Get two or three." },
            { name: "Brisket Tacos", price: "$6", note: "Slow cooked brisket with pickled jalapeños. Incredible if you're in a meaty mood." },
            { name: "Margarita", price: "$14", note: "Their margaritas are strong, tart, and perfect for warming up on a cold night." }
          ]
        },
        tips: [
          "No reservations, it's first come first served but Sunday evenings are much less crowded than Friday or Saturday",
          "The heated patio area is enclosed in winter and actually very cozy",
          "Tacos are $4 to $6 each so grab a variety and share them",
          "The whiskey list is extensive, ask your server for a recommendation based on what you like"
        ],
        swapOptions: [
          // ── Alt 1: Antique Taco ──
          {
            name: "Antique Taco",
            type: "Dinner",
            location: "Wicker Park, Chicago",
            tagline: "Farm to table tacos with creative fillings in a beautifully designed space",
            description: "If you want tacos with a more refined, farm to table approach, <a href=\"https://www.google.com/maps/search/?api=1&query=Antique+Taco+1360+N+Milwaukee+Ave+Chicago\" target=\"_blank\">Antique Taco</a> is a fantastic alternative to Big Star. Joseph the braised beef short rib taco is incredible and Sandy the fried chicken taco with slaw and hot sauce is their signature. The space itself is gorgeous with vintage furniture, exposed brick, and a warmth that feels like a neighborhood living room. Everything is made with locally sourced ingredients and you can taste the difference. It's a quick walk from the Damen shops and the vibe is a little more intimate than Big Star which is perfect for a date.",
            image: "images/joseph-sandy/antique-taco-1.jpg",
            images: [
              "images/joseph-sandy/antique-taco-1.jpg",
              "images/joseph-sandy/antique-taco-2.jpg",
              "images/joseph-sandy/antique-taco-3.jpg",
              "images/joseph-sandy/antique-taco-4.jpg",
              "images/joseph-sandy/antique-taco-5.jpg",
              "images/joseph-sandy/antique-taco-6.jpg"
            ],
            address: "1360 N Milwaukee Ave, Chicago, IL 60622",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9068,-87.6726",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9068,-87.6726&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "Street Parking on Milwaukee Ave",
                address: "Milwaukee Ave near Wicker Park, Chicago",
                cost: "Free on Sundays",
                tip: "Free Sunday street parking. Right in the heart of Wicker Park.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9068,-87.6726",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.9068,-87.6726&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9068&dropoff[longitude]=-87.6726&dropoff[nickname]=Antique%20Taco",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9068&destination[longitude]=-87.6726"
            },
            cost: "$25 to $40 for two",
            dressCode: "Casual, cozy layers",
            reservation: null,
            reviews: {
              google: { stars: 4.5, count: 1200 },
              yelp: { stars: 4.0, count: 900 }
            },
            happyHour: null,
            menuUrl: "https://www.antiquetaco.com/menu",
            reservationUrl: null,
            phone: "(773) 687-8697",
            foodRecs: {
              joseph: [
                { name: "Braised Beef Short Rib Taco", price: "$6", note: "Slow braised with pickled onions and chimichurri. Incredibly tender." },
                { name: "Elote (Street Corn)", price: "$7", note: "Grilled corn with cotija and chile. A must share." }
              ],
              sandy: [
                { name: "Fried Chicken Taco", price: "$5.50", note: "Their signature. Crispy chicken, slaw, hot sauce. Sandy this is what they're known for." },
                { name: "Sweet Potato Taco", price: "$5", note: "Roasted sweet potato with black beans. Surprisingly amazing." }
              ]
            },
            tips: [
              "Sunday evenings are usually not crowded",
              "The interior design alone is worth the visit",
              "Everything is locally sourced which you can really taste"
            ]
          },
          // ── Alt 2: Piece Brewery & Pizzeria ──
          {
            name: "Piece Brewery & Pizzeria",
            type: "Dinner",
            location: "Wicker Park, Chicago",
            tagline: "Award winning New Haven style pizza and craft beer in a huge lively space",
            description: "If you want to pivot from tacos to something different but still incredible, <a href=\"https://www.google.com/maps/search/?api=1&query=Piece+Brewery+%26+Pizzeria+1927+W+North+Ave+Chicago\" target=\"_blank\">Piece Brewery & Pizzeria</a> is a Wicker Park institution. They do New Haven style thin crust pizza which is charred, crispy, and topped with creative combinations. Joseph the sausage and hot pepper pizza is outstanding and Sandy the white clam pizza is their most famous. They brew their own beer in house and have won multiple Great American Beer Festival medals. The space is massive with high ceilings, a big bar, and a fun energetic vibe. It's a 5 minute walk from the shops and perfect for a cold Sunday evening.",
            image: "images/joseph-sandy/piece-pizza-1.jpg",
            images: [
              "images/joseph-sandy/piece-pizza-1.jpg",
              "images/joseph-sandy/piece-pizza-2.jpg",
              "images/joseph-sandy/piece-pizza-3.jpg",
              "images/joseph-sandy/piece-pizza-4.jpg",
              "images/joseph-sandy/piece-pizza-5.jpg",
              "images/joseph-sandy/piece-pizza-6.jpg"
            ],
            address: "1927 W North Ave, Chicago, IL 60622",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9107,-87.6773",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9107,-87.6773&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "Street Parking on North Ave",
                address: "North Ave near Damen, Chicago",
                cost: "Free on Sundays",
                tip: "Free Sunday parking on North Ave and side streets.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9107,-87.6773",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.9107,-87.6773&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9107&dropoff[longitude]=-87.6773&dropoff[nickname]=Piece%20Brewery",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9107&destination[longitude]=-87.6773"
            },
            cost: "$30 to $45 for two",
            dressCode: "Casual, come as you are",
            reservation: null,
            reviews: {
              google: { stars: 4.4, count: 3200 },
              yelp: { stars: 4.0, count: 2800 }
            },
            happyHour: null,
            menuUrl: "https://www.piecechicago.com/menu",
            reservationUrl: null,
            phone: "(773) 772-4422",
            foodRecs: {
              joseph: [
                { name: "Sausage & Hot Pepper Pizza", price: "$17", note: "Spicy Italian sausage and hot peppers on that charred New Haven crust. Joseph this is incredible." },
                { name: "Craft Beer Flight", price: "$12", note: "They brew everything in house. Try the Dark & Stormy Ale." }
              ],
              sandy: [
                { name: "White Clam Pizza", price: "$18", note: "Sandy this is their most famous. Fresh clams, garlic, olive oil, mozzarella. It's what put them on the map." },
                { name: "Honey Butter Pizza", price: "$15", note: "Sweet and savory with honey and butter. A fun, unexpected choice." }
              ]
            },
            tips: [
              "Sunday evenings are much quieter than weekends",
              "Their beer is brewed on site and has won national awards",
              "A large pizza easily feeds two, especially sharing"
            ]
          },
          // ── Alt 3: Salero ──
          {
            name: "Salero",
            type: "Dinner",
            location: "Wicker Park, Chicago",
            tagline: "Spanish tapas and craft cocktails in a warm, date night perfect setting",
            description: "For something a little more romantic, <a href=\"https://www.google.com/maps/search/?api=1&query=Salero+621+W+Randolph+St+Chicago\" target=\"_blank\">Salero</a> does Spanish tapas with a modern twist and the atmosphere is perfect for a date. Joseph the grilled hanger steak with chimichurri is outstanding and Sandy the crispy chicken thighs with romesco are incredible. You can share a bunch of small plates which makes the whole dinner feel like an adventure of trying new things together. The cocktail list is creative and the warm amber lighting makes everything feel special. It's a short rideshare from Wicker Park but worth it for a slightly more elevated dinner experience.",
            image: "images/joseph-sandy/salero-1.jpg",
            images: [
              "images/joseph-sandy/salero-1.jpg",
              "images/joseph-sandy/salero-2.jpg",
              "images/joseph-sandy/salero-3.jpg",
              "images/joseph-sandy/salero-4.jpg",
              "images/joseph-sandy/salero-5.jpg",
              "images/joseph-sandy/salero-6.jpg"
            ],
            address: "621 W Randolph St, Chicago, IL 60661",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8842,-87.6428",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8842,-87.6428&dirflg=d",
            parkingOptions: [
              {
                type: "paid",
                recommended: true,
                name: "ABM Parking",
                address: "625 W Randolph St, Chicago",
                cost: "$15 to $20",
                tip: "Right next door to the restaurant.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8842,-87.6432",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.8842,-87.6432&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8842&dropoff[longitude]=-87.6428&dropoff[nickname]=Salero",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8842&destination[longitude]=-87.6428"
            },
            cost: "$45 to $65 for two",
            dressCode: "Smart casual. A notch above jeans but nothing fancy.",
            reservation: {
              time: "6:30 PM",
              partySize: 2,
              notes: "Reservations recommended on weekends. Book through OpenTable."
            },
            reviews: {
              google: { stars: 4.4, count: 680 },
              yelp: { stars: 4.0, count: 520 }
            },
            happyHour: null,
            menuUrl: "https://www.salerochicago.com/menu",
            reservationUrl: "https://www.opentable.com/r/salero-chicago",
            phone: "(312) 466-8700",
            foodRecs: {
              joseph: [
                { name: "Grilled Hanger Steak", price: "$28", note: "With chimichurri and crispy potatoes. Joseph this is a proper steak done the Spanish way." },
                { name: "Patatas Bravas", price: "$12", note: "Crispy potatoes with spicy aioli. The perfect starter to share." }
              ],
              sandy: [
                { name: "Crispy Chicken Thighs", price: "$22", note: "Sandy these are crispy on the outside, juicy inside, with romesco sauce." },
                { name: "Spanish G&T", price: "$16", note: "They do a proper Spanish gin and tonic with botanicals. Beautiful and delicious." }
              ]
            },
            tips: [
              "Requires a short rideshare from Wicker Park",
              "Tapas style so order 3 to 4 plates to share between you",
              "The cocktail list is creative and worth exploring"
            ]
          }
        ]
      },

      // ── STOP 3: MYOPIC BOOKS + COFFEE ──
      {
        order: 3,
        time: "7:45 PM",
        endTime: "8:00 PM",
        name: "Myopic Books",
        type: "Activity / Dessert",
        location: "Wicker Park, Chicago",
        tagline: "A legendary three story used bookstore that feels like stepping into another world",
        description: "This is the perfect way to end a date. <a href=\"https://www.google.com/maps/search/?api=1&query=Myopic+Books+1564+N+Milwaukee+Ave+Chicago\" target=\"_blank\">Myopic Books</a> is a three story used bookstore on Milwaukee Ave that has been a Wicker Park landmark for decades and walking in feels like discovering a secret. The shelves are packed floor to ceiling, the aisles are narrow and winding, and there's this incredible quiet energy that makes you want to just wander and explore. Joseph grab something from the art or music section on the second floor and Sandy the fiction and poetry sections are beautifully curated. Pick out a book for each other as a little surprise within the surprise date. Grab a coffee from one of the nearby cafes to warm up and take a slow walk back. It's free to browse and it's the kind of place you'll talk about for weeks.",
        image: "images/joseph-sandy/myopic-books-1.jpg",
        images: [
          "images/joseph-sandy/myopic-books-1.jpg",
          "images/joseph-sandy/myopic-books-2.jpg",
          "images/joseph-sandy/myopic-books-3.jpg",
          "images/joseph-sandy/myopic-books-4.jpg",
          "images/joseph-sandy/myopic-books-5.jpg",
          "images/joseph-sandy/myopic-books-6.jpg"
        ],
        address: "1564 N Milwaukee Ave, Chicago, IL 60622",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9097,-87.6748",
        appleMapsUrl: "https://maps.apple.com/?daddr=41.9097,-87.6748&dirflg=d",
        parkingOptions: [
          {
            type: "free",
            recommended: true,
            name: "Street Parking on Milwaukee Ave",
            address: "Milwaukee Ave near North Ave, Chicago",
            cost: "Free on Sundays",
            tip: "Same free Sunday parking. Myopic is a 5 minute walk from Big Star so you're already close.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9097,-87.6748",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9097,-87.6748&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9097&dropoff[longitude]=-87.6748&dropoff[nickname]=Myopic%20Books",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9097&destination[longitude]=-87.6748"
        },
        cost: "Free to browse (books $3 to $15)",
        dressCode: "Whatever you wore to dinner is perfect.",
        reservation: null,
        reviews: {
          google: { stars: 4.7, count: 1200 },
          yelp: { stars: 4.5, count: 600 }
        },
        happyHour: null,
        menuUrl: null,
        reservationUrl: null,
        phone: "(773) 862-4882",
        foodRecs: {
          joseph: [
            { name: "Coffee from Ipsento 606", price: "$5 to $7", note: "Right around the corner on Milwaukee. Joseph their cold brew is excellent even in winter." }
          ],
          sandy: [
            { name: "Hot Chocolate from Ipsento 606", price: "$5 to $6", note: "Sandy this is the perfect warm up drink on a freezing night. Their hot chocolate is rich and not too sweet." }
          ]
        },
        tips: [
          "Open until 10 PM on Sundays so no rush at all",
          "The second and third floors are quieter and have the best finds",
          "Pick out a book for each other as a fun date activity",
          "Ipsento 606 coffee shop is a 2 minute walk for great coffee and hot chocolate"
        ],
        swapOptions: [
          // ── Alt 1: Volumes Bookcafe ──
          {
            name: "Volumes Bookcafe",
            type: "Activity / Dessert",
            location: "Wicker Park, Chicago",
            tagline: "A cozy neighborhood bookstore and cafe in one with great coffee and pastries",
            description: "If you want the bookstore experience combined with actually sitting down for a warm drink, <a href=\"https://www.google.com/maps/search/?api=1&query=Volumes+Bookcafe+1474+N+Milwaukee+Ave+Chicago\" target=\"_blank\">Volumes Bookcafe</a> is a Wicker Park gem. It's a bookstore and coffee shop rolled into one so you can browse the shelves, pick out something interesting, and then sit down together with a latte and a pastry. Joseph they have a great selection of art and graphic novels and Sandy the fiction wall is really well curated. The vibe is cozy and quiet and it's the kind of place that makes you want to stay longer than you planned.",
            image: "images/joseph-sandy/volumes-bookcafe-1.jpg",
            images: [
              "images/joseph-sandy/volumes-bookcafe-1.jpg",
              "images/joseph-sandy/volumes-bookcafe-2.jpg",
              "images/joseph-sandy/volumes-bookcafe-3.jpg",
              "images/joseph-sandy/volumes-bookcafe-4.jpg",
              "images/joseph-sandy/volumes-bookcafe-5.jpg",
              "images/joseph-sandy/volumes-bookcafe-6.jpg"
            ],
            address: "1474 N Milwaukee Ave, Chicago, IL 60622",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9080,-87.6735",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9080,-87.6735&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "Street Parking on Milwaukee Ave",
                address: "Milwaukee Ave, Wicker Park, Chicago",
                cost: "Free on Sundays",
                tip: "Free Sunday street parking. Same area as everything else tonight.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9080,-87.6735",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.9080,-87.6735&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9080&dropoff[longitude]=-87.6735&dropoff[nickname]=Volumes%20Bookcafe",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9080&destination[longitude]=-87.6735"
            },
            cost: "$8 to $14 for two (coffee and pastries)",
            dressCode: "Casual, whatever you're wearing",
            reservation: null,
            reviews: {
              google: { stars: 4.6, count: 450 },
              yelp: { stars: 4.5, count: 320 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: "(773) 697-8066",
            foodRecs: {
              joseph: [
                { name: "Pour Over Coffee", price: "$5.50", note: "Joseph their pour over is really well done. Rich and smooth." }
              ],
              sandy: [
                { name: "Lavender Latte", price: "$6", note: "Sandy this is their most popular and it's beautiful. Creamy and floral." }
              ]
            },
            tips: [
              "Books and coffee in one spot, no need to go anywhere else",
              "Check Sunday hours as they sometimes close early",
              "The seating area in the back is cozy and quiet"
            ]
          },
          // ── Alt 2: Margie's Candies ──
          {
            name: "Margie's Candies",
            type: "Dessert",
            location: "Bucktown, Chicago",
            tagline: "A 100 year old ice cream parlor with legendary sundaes and old school Chicago charm",
            description: "If you want to end the night with something truly special and iconic, <a href=\"https://www.google.com/maps/search/?api=1&query=Margie's+Candies+1960+N+Western+Ave+Chicago\" target=\"_blank\">Margie's Candies</a> has been serving Chicago since 1921. This ice cream parlor looks like it hasn't changed in a century and that's exactly the point. Joseph the hot fudge sundae is legendary and Sandy the banana split is the size of your arm and absolutely worth sharing. Al Capone used to come here and the Beatles stopped by when they were in town. The vibe is warm, nostalgic, and genuinely unlike anywhere else in the city. It's a quick walk from Wicker Park and the perfect sweet ending to your surprise date.",
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
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9168,-87.6877",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9168,-87.6877&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "Street Parking on Western Ave",
                address: "Western Ave near Armitage, Chicago",
                cost: "Free on Sundays",
                tip: "Free Sunday street parking on Western Ave.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9168,-87.6877",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.9168,-87.6877&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9168&dropoff[longitude]=-87.6877&dropoff[nickname]=Margie's%20Candies",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9168&destination[longitude]=-87.6877"
            },
            cost: "$10 to $18 for two",
            dressCode: "Casual",
            reservation: null,
            reviews: {
              google: { stars: 4.4, count: 2800 },
              yelp: { stars: 4.0, count: 1500 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: "(773) 384-1035",
            foodRecs: {
              joseph: [
                { name: "Hot Fudge Sundae", price: "$9.50", note: "Joseph this has been the same recipe for 100 years and it's incredible. Rich, thick hot fudge over vanilla." }
              ],
              sandy: [
                { name: "Banana Split", price: "$12.50", note: "Sandy this thing is massive. Three scoops, toppings everywhere, and the shell dish is iconic." }
              ]
            },
            tips: [
              "Cash preferred, they do take cards",
              "The sundaes are huge, sharing one is totally fine",
              "Check Sunday hours, they sometimes close at 9 PM"
            ]
          },
          // ── Alt 3: Insomnia Cookies ──
          {
            name: "Insomnia Cookies",
            type: "Dessert",
            location: "Wicker Park, Chicago",
            tagline: "Warm fresh baked cookies delivered to your hand on a cold Chicago night",
            description: "Sometimes you just want a warm cookie and that is totally valid. <a href=\"https://www.google.com/maps/search/?api=1&query=Insomnia+Cookies+1571+N+Milwaukee+Ave+Chicago\" target=\"_blank\">Insomnia Cookies on Milwaukee</a> is literally steps from the Damen intersection and they bake cookies fresh all night long. Joseph the chocolate chunk cookie is their classic and Sandy the snickerdoodle is soft, warm, and perfect with a cold glass of milk. Grab a 6 pack of cookies to share and walk the neighborhood together with warm cookies in hand. On a freezing cold night, a warm cookie and each other's company is genuinely all you need.",
            image: "images/joseph-sandy/insomnia-cookies-1.jpg",
            images: [
              "images/joseph-sandy/insomnia-cookies-1.jpg",
              "images/joseph-sandy/insomnia-cookies-2.jpg",
              "images/joseph-sandy/insomnia-cookies-3.jpg",
              "images/joseph-sandy/insomnia-cookies-4.jpg",
              "images/joseph-sandy/insomnia-cookies-5.jpg",
              "images/joseph-sandy/insomnia-cookies-6.jpg"
            ],
            address: "1571 N Milwaukee Ave, Chicago, IL 60622",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9098,-87.6750",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9098,-87.6750&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "Street Parking on Milwaukee Ave",
                address: "Milwaukee Ave, Wicker Park, Chicago",
                cost: "Free on Sundays",
                tip: "Same Sunday free parking. Insomnia is right by Myopic Books.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9098,-87.6750",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.9098,-87.6750&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9098&dropoff[longitude]=-87.6750&dropoff[nickname]=Insomnia%20Cookies",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9098&destination[longitude]=-87.6750"
            },
            cost: "$6 to $12 for two",
            dressCode: "Casual, you're grabbing cookies",
            reservation: null,
            reviews: {
              google: { stars: 4.3, count: 350 },
              yelp: { stars: 4.0, count: 200 }
            },
            happyHour: null,
            menuUrl: "https://insomniacookies.com/menu",
            reservationUrl: null,
            phone: "(773) 697-3870",
            foodRecs: {
              joseph: [
                { name: "Chocolate Chunk Cookie", price: "$2.50", note: "Joseph this is their classic and it comes out warm. Perfect." },
                { name: "Cookie'wich", price: "$6", note: "Two cookies with ice cream in the middle. Go big." }
              ],
              sandy: [
                { name: "Snickerdoodle", price: "$2.50", note: "Sandy this is soft, warm, and cinnamony. Cozy in cookie form." },
                { name: "6-Pack Cookies", price: "$12", note: "Grab a mix and share them on the walk. Best value." }
              ]
            },
            tips: [
              "Open late, usually until 3 AM on Sundays",
              "Cookies come out warm and fresh",
              "The cookie'wich is worth the extra cost"
            ]
          }
        ]
      }
    ],

    travelTimes: [
      { from: 1, to: 2, duration: "5 min walk", mode: "walk" },
      { from: 2, to: 3, duration: "5 min walk", mode: "walk" }
    ],

    budget: {
      items: [
        { label: "Boutique shopping (browse free, optional purchases)", cost: "$0 to $50" },
        { label: "Big Star (tacos, drinks, guac)", cost: "$30 to $50" },
        { label: "Myopic Books (books + coffee)", cost: "$10 to $20" }
      ],
      total: "$40 to $120",
      tip: "The shopping and bookstore are free to browse so your main spend is dinner at Big Star. You can easily do this date for under $60 if you stick to tacos and skip the whiskey flights, or go up to $120 if you shop and splurge on drinks."
    },

    checklist: [
      { id: "chk-warm-layers", text: "Dress warm with layers, it's going to be in the 30s all evening", bold: "warm with layers" },
      { id: "chk-gloves", text: "Bring gloves and a scarf for the walks between stops", bold: "gloves and a scarf" },
      { id: "chk-cash", text: "Bring some cash for Kokorokoko vintage (cash only) and street parking", bold: "cash" },
      { id: "chk-big-star", text: "Big Star is first come first served, no reservation needed", bold: "Big Star" },
      { id: "chk-phone", text: "Charge your phone for photos of the shops and the six way intersection", bold: null },
      { id: "chk-books", text: "Pick out a book for each other at Myopic as a fun surprise within the surprise", bold: null }
    ],

    calendar: {
      title: "DateFlo: Wicker Park Stroll (Surprise Date)",
      date: "20260323",
      startTime: "T230000Z",
      endTime: "T020000Z",
      location: "Wicker Park, Chicago, IL",
      description: "Plan A: Wicker Park Stroll\\n\\n5:00 PM Boutique Shopping on Damen Ave\\n6:30 PM Big Star (Tacos & Whiskey)\\n7:45 PM Myopic Books + Coffee\\n\\nFull details: dateflo.com/joseph-and-sandy"
    }
  },

  // ════════════════════════════════════
  // PLAN B: MAGNIFICENT MILE EVENING
  // ════════════════════════════════════
  {
    id: "magnificent-mile-evening",
    couple: "Joseph & Sandy",
    coupleId: "joseph-sandy-2026",
    partner1: "Joseph",
    partner2: "Sandy",
    planName: "Magnificent Mile Evening",
    planEmoji: "✨",
    planVibe: "Window shopping on one of the most famous streets in America, Michelin recognized tacos in the West Loop, and hot chocolate on the Mile. A surprise date with a touch of city magic.",
    greeting: "Okay Joseph and Sandy, this one is all about that big city energy. You're starting with a walk down the Magnificent Mile where the architecture is stunning and the window displays are incredible, then you're heading over to the West Loop for some of the best Mexican food in Chicago at a Michelin recognized spot, and finishing back on Michigan Ave with hot fudge sundaes at Ghirardelli. It's going to be cold so bundle up, but there's something genuinely romantic about walking Michigan Avenue together on a freezing Chicago evening. You two are going to love this.",
    occasion: "Surprise Date",
    date: "Sunday, March 23, 2026",
    dateShort: "Sun, March 23",
    startTime: "5:00 PM",
    endTime: "8:00 PM",
    city: "Chicago, IL",
    area: "Michigan Ave / West Loop",
    coverImage: "images/joseph-sandy/michigan-ave-1.jpg",
    route: "Home → Michigan Ave → Taqueria Chingon → Ghirardelli → Home",

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
      high: "39°F",
      low: "32°F",
      conditions: "Very cold, clear skies. Bundle up with warm layers.",
      sunset: "7:12 PM",
      rainChance: "5%",
      note: "Michigan Ave can feel even colder because of the wind off the lake. Bring your warmest coat, gloves, and a hat or scarf. You'll be indoors for dinner and dessert but the walking portions will be chilly."
    },

    stops: [
      // ── STOP 1: WINDOW SHOPPING ON MICHIGAN AVE ──
      {
        order: 1,
        time: "5:00 PM",
        endTime: "6:00 PM",
        name: "Window Shopping on Michigan Ave",
        type: "Shopping",
        location: "Magnificent Mile, Chicago",
        tagline: "A walk down one of the most iconic shopping streets in the world with incredible architecture everywhere you look",
        description: "There's nothing quite like walking the <a href=\"https://www.google.com/maps/search/?api=1&query=Magnificent+Mile+Michigan+Ave+Chicago\" target=\"_blank\">Magnificent Mile</a> on a cold evening. The buildings are lit up, the window displays are beautiful, and there's an energy that just feels special. Start at the <a href=\"https://www.google.com/maps/search/?api=1&query=Water+Tower+Place+835+N+Michigan+Ave+Chicago\" target=\"_blank\">Water Tower</a> (one of the only buildings to survive the Great Chicago Fire) and walk north toward <a href=\"https://www.google.com/maps/search/?api=1&query=Oak+Street+Beach+Chicago\" target=\"_blank\">Oak Street</a>. Joseph and Sandy, pop into any stores that catch your eye but the real magic is just the walk itself. The Wrigley Building and Tribune Tower are stunning at night and the whole avenue feels like a movie set. Take your time, hold hands, and enjoy the city.",
        image: "images/joseph-sandy/michigan-ave-1.jpg",
        images: [
          "images/joseph-sandy/michigan-ave-1.jpg",
          "images/joseph-sandy/michigan-ave-2.jpg",
          "images/joseph-sandy/michigan-ave-3.jpg",
          "images/joseph-sandy/michigan-ave-4.jpg",
          "images/joseph-sandy/michigan-ave-5.jpg",
          "images/joseph-sandy/michigan-ave-6.jpg"
        ],
        address: "835 N Michigan Ave, Chicago, IL 60611",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8985,-87.6233",
        appleMapsUrl: "https://maps.apple.com/?daddr=41.8985,-87.6233&dirflg=d",
        parkingOptions: [
          {
            type: "paid",
            recommended: true,
            name: "Water Tower Place Garage",
            address: "845 N Michigan Ave, Chicago, IL 60611",
            cost: "$18 to $30",
            tip: "Right at Water Tower Place which is your starting point. Evening rates are usually better after 5 PM.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8985,-87.6233",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8985,-87.6233&dirflg=d"
          },
          {
            type: "paid",
            recommended: false,
            name: "900 North Michigan Garage",
            address: "900 N Michigan Ave, Chicago, IL 60611",
            cost: "$20 to $35",
            tip: "Another option on the Mile. A few blocks north of Water Tower.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8998,-87.6234",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8998,-87.6234&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8985&dropoff[longitude]=-87.6233&dropoff[nickname]=Magnificent%20Mile",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8985&destination[longitude]=-87.6233"
        },
        cost: "Free",
        dressCode: "Wear your warmest coat and layer up. The wind off the lake makes Michigan Ave feel colder than the rest of the city.",
        reservation: null,
        reviews: {
          google: { stars: 4.7, count: 15000 },
          yelp: { stars: 4.5, count: 5000 }
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
          "The Water Tower is one of Chicago's most photographed landmarks and looks amazing at night",
          "Walk on the east side of Michigan Ave for the best views of the Tribune Tower and Wrigley Building",
          "If it's too cold to stay outside, pop into Water Tower Place or 900 North Michigan for indoor browsing",
          "The walk from Water Tower to Oak Street is about 15 to 20 minutes at a leisurely pace"
        ],
        swapOptions: [
          // ── Alt 1: State Street Shopping ──
          {
            name: "State Street Shopping",
            type: "Shopping",
            location: "Loop, Chicago",
            tagline: "The original great shopping street of Chicago with big department stores and city energy",
            description: "If you want the classic Chicago shopping experience without the Michigan Ave crowds, <a href=\"https://www.google.com/maps/search/?api=1&query=State+Street+Shopping+Chicago+Loop\" target=\"_blank\">State Street in the Loop</a> is where it all started. This is where Marshall Field's (now Macy's) made department store shopping famous and the old school marquees and architecture are beautiful. Joseph and Sandy, walk from the Chicago Theatre marquee south past Macy's and you'll see why they call it \"that great street.\" Pop into the flagship stores or just enjoy the walk. The buildings are gorgeous and the energy is pure Chicago.",
            image: "images/joseph-sandy/state-street-1.jpg",
            images: [
              "images/joseph-sandy/state-street-1.jpg",
              "images/joseph-sandy/state-street-2.jpg",
              "images/joseph-sandy/state-street-3.jpg",
              "images/joseph-sandy/state-street-4.jpg",
              "images/joseph-sandy/state-street-5.jpg",
              "images/joseph-sandy/state-street-6.jpg"
            ],
            address: "111 N State St, Chicago, IL 60602",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8833,-87.6277",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8833,-87.6277&dirflg=d",
            parkingOptions: [
              {
                type: "paid",
                recommended: true,
                name: "Millennium Park Garage",
                address: "5 S Columbus Dr, Chicago, IL 60603",
                cost: "$15 to $25 evening",
                tip: "Right near State Street and walkable to everything.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8825,-87.6238",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.8825,-87.6238&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8833&dropoff[longitude]=-87.6277&dropoff[nickname]=State%20Street",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8833&destination[longitude]=-87.6277"
            },
            cost: "Free to browse",
            dressCode: "Warm layers, casual",
            reservation: null,
            reviews: {
              google: { stars: 4.5, count: 8000 },
              yelp: { stars: 4.3, count: 3000 }
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
              "The Chicago Theatre marquee is one of the most photographed things in the city",
              "Macy's on State Street has beautiful architecture inside",
              "Less crowded than Michigan Ave on Sunday evenings"
            ]
          },
          // ── Alt 2: Millennium Park Walk ──
          {
            name: "Millennium Park Evening Walk",
            type: "Activity",
            location: "Loop, Chicago",
            tagline: "Chicago's crown jewel park with the Bean, Crown Fountain, and stunning skyline views",
            description: "If you want something more scenic than shopping, <a href=\"https://www.google.com/maps/search/?api=1&query=Millennium+Park+Chicago\" target=\"_blank\">Millennium Park</a> at dusk is genuinely magical. The <a href=\"https://www.google.com/maps/search/?api=1&query=Cloud+Gate+Bean+Chicago\" target=\"_blank\">Bean (Cloud Gate)</a> reflects the city skyline and looks incredible as the lights come on. Joseph and Sandy, walk through the park, check out Crown Fountain, and take photos with the Bean. It's free, it's beautiful, and it's one of those quintessential Chicago experiences. It'll be cold but the park is sheltered from the worst of the lake wind and the views are worth bundling up for.",
            image: "images/joseph-sandy/millennium-park-1.jpg",
            images: [
              "images/joseph-sandy/millennium-park-1.jpg",
              "images/joseph-sandy/millennium-park-2.jpg",
              "images/joseph-sandy/millennium-park-3.jpg",
              "images/joseph-sandy/millennium-park-4.jpg",
              "images/joseph-sandy/millennium-park-5.jpg",
              "images/joseph-sandy/millennium-park-6.jpg"
            ],
            address: "201 E Randolph St, Chicago, IL 60602",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8826,-87.6226",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8826,-87.6226&dirflg=d",
            parkingOptions: [
              {
                type: "paid",
                recommended: true,
                name: "Millennium Park Garage",
                address: "5 S Columbus Dr, Chicago, IL 60603",
                cost: "$15 to $25 evening",
                tip: "Underground garage right beneath the park. Easiest option.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8825,-87.6238",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.8825,-87.6238&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8826&dropoff[longitude]=-87.6226&dropoff[nickname]=Millennium%20Park",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8826&destination[longitude]=-87.6226"
            },
            cost: "Free",
            dressCode: "Your warmest coat, hat, and gloves",
            reservation: null,
            reviews: {
              google: { stars: 4.8, count: 50000 },
              yelp: { stars: 4.7, count: 5000 }
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
              "The Bean looks amazing at dusk as the city lights come on",
              "Crown Fountain is fun even in winter",
              "The park is free and open until 11 PM"
            ]
          },
          // ── Alt 3: Chicago Riverwalk ──
          {
            name: "Chicago Riverwalk Stroll",
            type: "Activity",
            location: "Loop, Chicago",
            tagline: "A scenic walk along the Chicago River with gorgeous bridge views and city skyline",
            description: "If you want to skip the shopping and just soak in the city, a walk along the <a href=\"https://www.google.com/maps/search/?api=1&query=Chicago+Riverwalk\" target=\"_blank\">Chicago Riverwalk</a> is one of the most beautiful things you can do in the city. The river is lined with gorgeous architecture, the bridges light up at night, and there's a quiet energy that feels completely different from the busy streets above. Joseph and Sandy, start near Michigan Ave and walk west along the river. It's free, it's gorgeous, and the skyline views are unbeatable. It will be cold but the buildings shelter you from the worst wind and the beauty of it all makes it worth every chilly minute.",
            image: "images/joseph-sandy/riverwalk-1.jpg",
            images: [
              "images/joseph-sandy/riverwalk-1.jpg",
              "images/joseph-sandy/riverwalk-2.jpg",
              "images/joseph-sandy/riverwalk-3.jpg",
              "images/joseph-sandy/riverwalk-4.jpg",
              "images/joseph-sandy/riverwalk-5.jpg",
              "images/joseph-sandy/riverwalk-6.jpg"
            ],
            address: "Chicago Riverwalk, Chicago, IL 60601",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8880,-87.6250",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8880,-87.6250&dirflg=d",
            parkingOptions: [
              {
                type: "paid",
                recommended: true,
                name: "Millennium Park Garage",
                address: "5 S Columbus Dr, Chicago, IL 60603",
                cost: "$15 to $25 evening",
                tip: "Close to the east end of the Riverwalk.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8825,-87.6238",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.8825,-87.6238&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8880&dropoff[longitude]=-87.6250&dropoff[nickname]=Chicago%20Riverwalk",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8880&destination[longitude]=-87.6250"
            },
            cost: "Free",
            dressCode: "Bundle up, it's near the river",
            reservation: null,
            reviews: {
              google: { stars: 4.7, count: 12000 },
              yelp: { stars: 4.5, count: 3000 }
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
              "The river is beautifully lit at night",
              "Walk west from Michigan Ave for the best views",
              "Most Riverwalk restaurants are closed in winter but the walk itself is still gorgeous"
            ]
          }
        ]
      },

      // ── STOP 2: TAQUERIA CHINGON ──
      {
        order: 2,
        time: "6:15 PM",
        endTime: "7:15 PM",
        name: "Taqueria Chingon",
        type: "Dinner",
        location: "West Loop, Chicago",
        tagline: "Michelin Bib Gourmand Mexican with al pastor, duck carnitas, and fried queso that will blow your mind",
        description: "This is where the night gets serious. <a href=\"https://www.google.com/maps/search/?api=1&query=Taqueria+Chingon+2340+W+Randolph+St+Chicago\" target=\"_blank\">Taqueria Chingon</a> in the West Loop earned a Michelin Bib Gourmand which means the food is incredible and the prices are still reasonable. Joseph you absolutely need the al pastor which is spit roasted pork with pineapple and it's one of the best things you'll eat in Chicago. Sandy the duck carnitas are a must try, rich and tender and unlike any carnitas you've had before. You both need to start with the fried queso because it's essentially a giant block of fried cheese and it is exactly as good as that sounds. The vibe is lively and fun with colorful murals and great music. Note that this requires a rideshare from Michigan Ave but it is absolutely worth the trip.",
        image: "images/joseph-sandy/taqueria-chingon-1.jpg",
        images: [
          "images/joseph-sandy/taqueria-chingon-1.jpg",
          "images/joseph-sandy/taqueria-chingon-2.jpg",
          "images/joseph-sandy/taqueria-chingon-3.jpg",
          "images/joseph-sandy/taqueria-chingon-4.jpg",
          "images/joseph-sandy/taqueria-chingon-5.jpg",
          "images/joseph-sandy/taqueria-chingon-6.jpg"
        ],
        address: "2340 W Randolph St, Chicago, IL 60607",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8842,-87.6841",
        appleMapsUrl: "https://maps.apple.com/?daddr=41.8842,-87.6841&dirflg=d",
        parkingOptions: [
          {
            type: "free",
            recommended: true,
            name: "Street Parking on Randolph St",
            address: "Randolph St near Oakley, Chicago",
            cost: "Free on Sundays",
            tip: "Free street parking on Sundays along Randolph and the side streets. Usually easy to find a spot on Sunday evening.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8842,-87.6841",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8842,-87.6841&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8842&dropoff[longitude]=-87.6841&dropoff[nickname]=Taqueria%20Chingon",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8842&destination[longitude]=-87.6841"
        },
        cost: "$40 to $60 for two",
        dressCode: "Casual. Jeans and a nice top is perfect for the West Loop.",
        reservation: null,
        reviews: {
          google: { stars: 4.5, count: 1800 },
          yelp: { stars: 4.5, count: 1200 }
        },
        happyHour: null,
        menuUrl: "https://www.taqueriachingon.com/menu",
        reservationUrl: null,
        phone: "(312) 888-4286",
        foodRecs: {
          joseph: [
            { name: "Al Pastor Tacos", price: "$5", note: "Joseph this is the one. Spit roasted pork with pineapple, cilantro, and onion. Get at least two." },
            { name: "Fried Queso", price: "$12", note: "A giant block of fried cheese. Share it to start and thank us later." },
            { name: "Mezcal Margarita", price: "$15", note: "Smoky, strong, and perfectly balanced." }
          ],
          sandy: [
            { name: "Duck Carnitas Tacos", price: "$6", note: "Sandy these are incredible. Rich, tender duck with a crispy edge." },
            { name: "Birria Tacos", price: "$6", note: "Slow braised beef in a rich consomme for dipping. Messy and worth every napkin." },
            { name: "Paloma", price: "$13", note: "Grapefruit, tequila, and lime. Refreshing even on a cold night." }
          ]
        },
        tips: [
          "This spot requires a rideshare from Michigan Ave, about 15 minutes",
          "No reservations, walk in only, but Sunday evenings are usually not too crowded",
          "The fried queso is the must order appetizer, do not skip it",
          "Michelin Bib Gourmand means great food at reasonable prices"
        ],
        swapOptions: [
          // ── Alt 1: Mi Tocaya Antojeria ──
          {
            name: "Mi Tocaya Antojeria",
            type: "Dinner",
            location: "Logan Square, Chicago",
            tagline: "Michelin starred modern Mexican with a creative menu and intimate vibes",
            description: "If you want to go even more upscale with the Mexican food, <a href=\"https://www.google.com/maps/search/?api=1&query=Mi+Tocaya+Antojeria+2800+N+Logan+Blvd+Chicago\" target=\"_blank\">Mi Tocaya Antojeria</a> in Logan Square has a Michelin star and the food is genuinely world class. Joseph the steak with mole is a showstopper and Sandy the shrimp aguachile is fresh and bold. Chef Diana Davila creates dishes that honor traditional Mexican flavors while doing something completely new and the result is unforgettable. The space is intimate and warm with beautiful lighting and a cocktail list that's just as creative as the food. It requires a reservation and a rideshare but for a special surprise date it's absolutely worth it.",
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
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9316,-87.7074",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9316,-87.7074&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "Street Parking on Logan Blvd",
                address: "Logan Blvd near Milwaukee Ave, Chicago",
                cost: "Free on Sundays",
                tip: "Free Sunday street parking on Logan Blvd.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9316,-87.7074",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.9316,-87.7074&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9316&dropoff[longitude]=-87.7074&dropoff[nickname]=Mi%20Tocaya",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9316&destination[longitude]=-87.7074"
            },
            cost: "$55 to $80 for two",
            dressCode: "Smart casual",
            reservation: {
              time: "6:15 PM",
              partySize: 2,
              notes: "Reservations required. Book through Resy."
            },
            reviews: {
              google: { stars: 4.6, count: 920 },
              yelp: { stars: 4.5, count: 680 }
            },
            happyHour: null,
            menuUrl: "https://www.mitocaya.com/menu",
            reservationUrl: "https://resy.com/cities/chi/mi-tocaya-antojeria",
            phone: "(872) 315-1588",
            foodRecs: {
              joseph: [
                { name: "Steak with Mole", price: "$32", note: "Joseph this is the showstopper. Rich mole over perfectly cooked steak." },
                { name: "Elote", price: "$12", note: "Their version of street corn is elevated and incredible." }
              ],
              sandy: [
                { name: "Shrimp Aguachile", price: "$18", note: "Sandy this is fresh, citrusy, and packs a nice kick." },
                { name: "Mezcal Cocktail", price: "$16", note: "Their cocktail program is creative and fun." }
              ]
            },
            tips: [
              "Reserve ahead, this place books up",
              "Michelin starred so expect exceptional quality",
              "The cocktail program is worth exploring"
            ]
          },
          // ── Alt 2: Frontera Grill ──
          {
            name: "Frontera Grill",
            type: "Dinner",
            location: "River North, Chicago",
            tagline: "Rick Bayless's legendary Mexican restaurant that put Chicago Mexican food on the map",
            description: "If you want the most famous Mexican restaurant in Chicago, <a href=\"https://www.google.com/maps/search/?api=1&query=Frontera+Grill+445+N+Clark+St+Chicago\" target=\"_blank\">Frontera Grill</a> by Rick Bayless is an institution. James Beard Award winning, nationally recognized, and the food is deeply authentic Mexican cuisine made with the best seasonal ingredients. Joseph the slow roasted pork is incredible and Sandy the grilled fish tacos are some of the best in the city. The menu changes regularly based on what's in season which keeps it exciting. It's walkable from Michigan Ave which makes it an easy choice for Plan B. The atmosphere is colorful, warm, and lively.",
            image: "images/joseph-sandy/frontera-grill-1.jpg",
            images: [
              "images/joseph-sandy/frontera-grill-1.jpg",
              "images/joseph-sandy/frontera-grill-2.jpg",
              "images/joseph-sandy/frontera-grill-3.jpg",
              "images/joseph-sandy/frontera-grill-4.jpg",
              "images/joseph-sandy/frontera-grill-5.jpg",
              "images/joseph-sandy/frontera-grill-6.jpg"
            ],
            address: "445 N Clark St, Chicago, IL 60654",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8906,-87.6311",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8906,-87.6311&dirflg=d",
            parkingOptions: [
              {
                type: "paid",
                recommended: true,
                name: "SP+ Parking at 40 W Erie",
                address: "40 W Erie St, Chicago, IL 60654",
                cost: "$15 to $25 evening",
                tip: "One block away. Easy walking distance.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8939,-87.6315",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.8939,-87.6315&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8906&dropoff[longitude]=-87.6311&dropoff[nickname]=Frontera%20Grill",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8906&destination[longitude]=-87.6311"
            },
            cost: "$50 to $70 for two",
            dressCode: "Smart casual",
            reservation: {
              time: "6:15 PM",
              partySize: 2,
              notes: "Reservations strongly recommended. Book through OpenTable."
            },
            reviews: {
              google: { stars: 4.4, count: 2200 },
              yelp: { stars: 4.0, count: 1800 }
            },
            happyHour: null,
            menuUrl: "https://www.fronteragrill.net/menus",
            reservationUrl: "https://www.opentable.com/r/frontera-grill-chicago",
            phone: "(312) 661-1434",
            foodRecs: {
              joseph: [
                { name: "Slow Roasted Pork", price: "$28", note: "Joseph this changes seasonally but it's always incredible. Rich, tender, bold flavors." },
                { name: "Guacamole en Molcajete", price: "$14", note: "Made tableside. The freshest guac you'll ever have." }
              ],
              sandy: [
                { name: "Grilled Fish Tacos", price: "$24", note: "Sandy these are light, fresh, and perfectly seasoned." },
                { name: "Margarita", price: "$15", note: "Rick Bayless's margarita recipe is legendary." }
              ]
            },
            tips: [
              "Walkable from Michigan Ave, about 10 minutes",
              "The menu changes seasonally so ask your server what's fresh",
              "James Beard Award winning, nationally recognized"
            ]
          },
          // ── Alt 3: Birrieria Zaragoza ──
          {
            name: "Birrieria Zaragoza",
            type: "Dinner",
            location: "Archer Heights, Chicago",
            tagline: "The only Michelin starred birria restaurant in the country serving legendary goat stew",
            description: "If you want an absolute once in a lifetime Mexican food experience, <a href=\"https://www.google.com/maps/search/?api=1&query=Birrieria+Zaragoza+4852+S+Pulaski+Rd+Chicago\" target=\"_blank\">Birrieria Zaragoza</a> is the only Michelin starred birria restaurant in the entire country. They serve one thing, goat birria, and they do it better than anywhere else on earth. Joseph and Sandy, the rich, spicy goat stew comes with handmade tortillas and all the fixings and it is genuinely transcendent. The restaurant is family run, intimate, and feels like eating at someone's home. It's a rideshare from downtown but this is a bucket list experience for any food lover. Weekend only so Sunday is perfect.",
            image: "images/joseph-sandy/birrieria-zaragoza-1.jpg",
            images: [
              "images/joseph-sandy/birrieria-zaragoza-1.jpg",
              "images/joseph-sandy/birrieria-zaragoza-2.jpg",
              "images/joseph-sandy/birrieria-zaragoza-3.jpg",
              "images/joseph-sandy/birrieria-zaragoza-4.jpg",
              "images/joseph-sandy/birrieria-zaragoza-5.jpg",
              "images/joseph-sandy/birrieria-zaragoza-6.jpg"
            ],
            address: "4852 S Pulaski Rd, Chicago, IL 60632",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8045,-87.7230",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8045,-87.7230&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "Street Parking on Pulaski Rd",
                address: "Pulaski Rd near 49th St, Chicago",
                cost: "Free",
                tip: "Free street parking along Pulaski. Usually plenty of spots.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8045,-87.7230",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.8045,-87.7230&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8045&dropoff[longitude]=-87.7230&dropoff[nickname]=Birrieria%20Zaragoza",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8045&destination[longitude]=-87.7230"
            },
            cost: "$25 to $40 for two",
            dressCode: "Casual, it's a neighborhood spot",
            reservation: null,
            reviews: {
              google: { stars: 4.6, count: 1500 },
              yelp: { stars: 4.5, count: 900 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: "(773) 523-3700",
            foodRecs: {
              joseph: [
                { name: "Goat Birria", price: "$18", note: "Joseph this is the only thing on the menu and it's the best birria in America. Rich, spicy, incredibly tender goat." }
              ],
              sandy: [
                { name: "Goat Birria", price: "$18", note: "Sandy they serve one dish and it's a Michelin starred masterpiece. The broth is life changing." }
              ]
            },
            tips: [
              "Weekend only, open Saturday and Sunday",
              "They sell out so arrive early",
              "The only Michelin starred birria spot in the US",
              "About a 20 minute rideshare from downtown"
            ]
          }
        ]
      },

      // ── STOP 3: GHIRARDELLI ──
      {
        order: 3,
        time: "7:30 PM",
        endTime: "8:00 PM",
        name: "Ghirardelli Ice Cream & Chocolate Shop",
        type: "Dessert",
        location: "Michigan Ave, Chicago",
        tagline: "Hot fudge sundaes and hot chocolate on the Magnificent Mile, the perfect sweet ending to a cold night",
        description: "You've walked the Mile, you've had incredible tacos, and now it's time for the sweet ending. <a href=\"https://www.google.com/maps/search/?api=1&query=Ghirardelli+Ice+Cream+Chocolate+830+N+Michigan+Ave+Chicago\" target=\"_blank\">Ghirardelli on Michigan Ave</a> is warm, indulgent, and exactly what you need after a cold evening. Joseph their hot fudge sundae uses Ghirardelli's signature chocolate and it is rich, thick, and genuinely incredible. Sandy the hot chocolate here is the real deal, thick and warming and perfect for a freezing night. You'll get free chocolate squares while you wait and the whole experience feels like a little reward for braving the cold together. Sit in the shop, warm up, share something sweet, and toast to an amazing surprise date.",
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
            name: "Water Tower Place Garage",
            address: "845 N Michigan Ave, Chicago, IL 60611",
            cost: "$18 to $30",
            tip: "Same garage as Stop 1 if you parked here earlier. Ghirardelli is right across the street.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8985,-87.6233",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8985,-87.6233&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8984&dropoff[longitude]=-87.6239&dropoff[nickname]=Ghirardelli%20Chicago",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8984&destination[longitude]=-87.6239"
        },
        cost: "$10 to $18 for two",
        dressCode: "Whatever you're wearing, you just want to warm up.",
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
            { name: "Hot Fudge Sundae", price: "$11.95", note: "Joseph this is classic Ghirardelli. Rich hot fudge over vanilla ice cream with whipped cream and a cherry. Simple and perfect." },
            { name: "Warm Brownie Sundae", price: "$13.95", note: "A warm chocolate brownie with ice cream and hot fudge. For when you want to go all in." }
          ],
          sandy: [
            { name: "Hot Chocolate", price: "$6.95", note: "Sandy this is thick, rich, and warming. Made with real Ghirardelli chocolate. Perfect for a freezing night." },
            { name: "Ocean Beach Sundae", price: "$12.95", note: "Caramel, sea salt, and chocolate. A beautiful combination." }
          ]
        },
        tips: [
          "You get free chocolate squares while you wait in line",
          "The hot chocolate is the move on a cold night like this",
          "It's right on the Mile so you can take one more walk after if you're feeling brave",
          "Sharing a sundae is romantic and budget friendly"
        ],
        swapOptions: [
          // ── Alt 1: Eataly Chicago Hot Chocolate ──
          {
            name: "Eataly Chicago",
            type: "Dessert",
            location: "River North, Chicago",
            tagline: "Italian marketplace with incredible gelato, pastries, and the best hot chocolate in Chicago",
            description: "If you want something more European and cozy, <a href=\"https://www.google.com/maps/search/?api=1&query=Eataly+Chicago+43+E+Ohio+St+Chicago\" target=\"_blank\">Eataly Chicago</a> has a pastry counter and gelato bar that is genuinely world class. Joseph their tiramisu is incredible and Sandy the gelato is made fresh daily and the pistachio is the best in the city. You can wander through the marketplace browsing Italian goods, grab a pastry, and sit down for an espresso or hot chocolate. It's warm inside, beautifully designed, and the energy is lively without being overwhelming. A short walk from Michigan Ave and perfect for warming up.",
            image: "images/joseph-sandy/eataly-1.jpg",
            images: [
              "images/joseph-sandy/eataly-1.jpg",
              "images/joseph-sandy/eataly-2.jpg",
              "images/joseph-sandy/eataly-3.jpg",
              "images/joseph-sandy/eataly-4.jpg",
              "images/joseph-sandy/eataly-5.jpg",
              "images/joseph-sandy/eataly-6.jpg"
            ],
            address: "43 E Ohio St, Chicago, IL 60611",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8925,-87.6263",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.8925,-87.6263&dirflg=d",
            parkingOptions: [
              {
                type: "paid",
                recommended: true,
                name: "InterPark at 60 E Ohio",
                address: "60 E Ohio St, Chicago, IL 60611",
                cost: "$18 to $30",
                tip: "Right next to Eataly.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8928,-87.6247",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.8928,-87.6247&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8925&dropoff[longitude]=-87.6263&dropoff[nickname]=Eataly%20Chicago",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8925&destination[longitude]=-87.6263"
            },
            cost: "$10 to $20 for two",
            dressCode: "Casual",
            reservation: null,
            reviews: {
              google: { stars: 4.4, count: 8500 },
              yelp: { stars: 4.0, count: 3500 }
            },
            happyHour: null,
            menuUrl: "https://www.eataly.com/us_en/stores/chicago",
            reservationUrl: null,
            phone: "(312) 521-8700",
            foodRecs: {
              joseph: [
                { name: "Tiramisu", price: "$9", note: "Joseph their tiramisu is the real deal. Creamy, coffee soaked, perfect." }
              ],
              sandy: [
                { name: "Pistachio Gelato", price: "$7", note: "Sandy the pistachio gelato is made fresh daily and it's the best in Chicago." }
              ]
            },
            tips: [
              "Open until 10 PM on Sundays",
              "The marketplace is fun to browse, great for gifts",
              "Walkable from Michigan Ave, about 5 minutes"
            ]
          },
          // ── Alt 2: Hendrickx Belgian Bread Crafter ──
          {
            name: "Hendrickx Belgian Bread Crafter",
            type: "Dessert",
            location: "Magnificent Mile, Chicago",
            tagline: "Authentic Belgian hot chocolate and handmade pastries right on the Magnificent Mile",
            description: "For the most authentic hot chocolate experience in Chicago, <a href=\"https://www.google.com/maps/search/?api=1&query=Hendrickx+Belgian+Bread+Crafter+100+E+Walton+St+Chicago\" target=\"_blank\">Hendrickx</a> does it the Belgian way with real melted chocolate stirred into steamed milk. Joseph the pain au chocolat is incredible and Sandy their Belgian waffles are crispy on the outside and soft inside with real Belgian chocolate drizzled on top. The shop is small and cozy and feels like stepping into a Brussels bakery. It's right near Oak Street on the northern end of the Magnificent Mile so it's a perfect ending to your walk.",
            image: "images/joseph-sandy/hendrickx-1.jpg",
            images: [
              "images/joseph-sandy/hendrickx-1.jpg",
              "images/joseph-sandy/hendrickx-2.jpg",
              "images/joseph-sandy/hendrickx-3.jpg",
              "images/joseph-sandy/hendrickx-4.jpg",
              "images/joseph-sandy/hendrickx-5.jpg",
              "images/joseph-sandy/hendrickx-6.jpg"
            ],
            address: "100 E Walton St, Chicago, IL 60611",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.9005,-87.6244",
            appleMapsUrl: "https://maps.apple.com/?daddr=41.9005,-87.6244&dirflg=d",
            parkingOptions: [
              {
                type: "paid",
                recommended: true,
                name: "900 North Michigan Garage",
                address: "900 N Michigan Ave, Chicago, IL 60611",
                cost: "$20 to $35",
                tip: "Nearby and walkable.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8998,-87.6234",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.8998,-87.6234&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.9005&dropoff[longitude]=-87.6244&dropoff[nickname]=Hendrickx",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.9005&destination[longitude]=-87.6244"
            },
            cost: "$10 to $18 for two",
            dressCode: "Casual",
            reservation: null,
            reviews: {
              google: { stars: 4.6, count: 800 },
              yelp: { stars: 4.5, count: 400 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: "(312) 649-6717",
            foodRecs: {
              joseph: [
                { name: "Pain au Chocolat", price: "$5.50", note: "Joseph this is the best pain au chocolat in Chicago. Flaky, buttery, filled with real Belgian chocolate." }
              ],
              sandy: [
                { name: "Belgian Hot Chocolate", price: "$6.50", note: "Sandy this is made with real melted chocolate, not cocoa powder. Thick, rich, life changing." }
              ]
            },
            tips: [
              "Small shop so seating is limited",
              "The hot chocolate is made with real melted chocolate",
              "Check Sunday hours, they sometimes close at 7 PM"
            ]
          },
          // ── Alt 3: Stan's Donuts ──
          {
            name: "Stan's Donuts & Coffee",
            type: "Dessert",
            location: "River North, Chicago",
            tagline: "Gourmet donuts and craft coffee perfect for a sweet casual ending",
            description: "Grab gourmet donuts and take a walk. <a href=\"https://www.google.com/maps/search/?api=1&query=Stan's+Donuts+600+N+Fairbanks+Ct+Chicago\" target=\"_blank\">Stan's Donuts</a> does flavors you've never seen before and the coffee is excellent. Joseph the Biscoff pocket is their most talked about donut, filled with cookie butter and absolutely ridiculous. Sandy the pistachio old fashioned is beautiful and delicious. Grab a few donuts, get some coffee to warm up, and enjoy a sweet ending to your Magnificent Mile evening. It's a short walk from Michigan Ave and the perfect low key finish to a great date.",
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
                name: "Water Tower Place Garage",
                address: "845 N Michigan Ave, Chicago, IL 60611",
                cost: "$18 to $30",
                tip: "About a 7 minute walk from the Mag Mile garage.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8985,-87.6233",
                appleMapsUrl: "https://maps.apple.com/?daddr=41.8985,-87.6233&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=41.8929&dropoff[longitude]=-87.6207&dropoff[nickname]=Stan's%20Donuts",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=41.8929&destination[longitude]=-87.6207"
            },
            cost: "$8 to $14 for two",
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
                { name: "Biscoff Pocket", price: "$4.95", note: "Joseph this is cookie butter filled and absolutely ridiculous in the best way." }
              ],
              sandy: [
                { name: "Pistachio Old Fashioned", price: "$4.50", note: "Sandy this one is beautiful and delicious. Light, nutty, perfect." }
              ]
            },
            tips: [
              "Check Sunday hours, they usually close at 8 or 9 PM",
              "Grab donuts and walk the Mile one more time",
              "The Biscoff pocket is their most popular for a reason"
            ]
          }
        ]
      }
    ],

    travelTimes: [
      { from: 1, to: 2, duration: "15 min rideshare", mode: "car" },
      { from: 2, to: 3, duration: "15 min rideshare back to Michigan Ave", mode: "car" }
    ],

    budget: {
      items: [
        { label: "Window shopping on Michigan Ave", cost: "Free" },
        { label: "Taqueria Chingon (tacos, fried queso, drinks)", cost: "$40 to $60" },
        { label: "Rideshare to West Loop and back (2 trips)", cost: "$20 to $30" },
        { label: "Ghirardelli (sundaes + hot chocolate)", cost: "$10 to $18" }
      ],
      total: "$70 to $108",
      tip: "The main costs here are dinner and rideshare. You can keep it under $80 by skipping cocktails at Taqueria Chingon and sharing a sundae at Ghirardelli. The Mag Mile walk is completely free so enjoy that."
    },

    checklist: [
      { id: "chk-warm-coat-b", text: "Bring your warmest coat, Michigan Ave wind is no joke in March", bold: "warmest coat" },
      { id: "chk-hat-gloves-b", text: "Hat and gloves are a must for the Michigan Ave walk", bold: "Hat and gloves" },
      { id: "chk-uber-b", text: "Download Uber or Lyft for the ride to Taqueria Chingon and back", bold: "Uber or Lyft" },
      { id: "chk-chingon-hours", text: "Taqueria Chingon is walk in only, Sunday evenings are usually not too crowded", bold: "Taqueria Chingon" },
      { id: "chk-phone-b", text: "Charge your phone for photos of the Mile at night", bold: null },
      { id: "chk-hungry-b", text: "Come hungry, the tacos and fried queso are a lot of food", bold: null }
    ],

    calendar: {
      title: "DateFlo: Magnificent Mile Evening (Surprise Date)",
      date: "20260323",
      startTime: "T230000Z",
      endTime: "T020000Z",
      location: "Michigan Ave, Chicago, IL",
      description: "Plan B: Magnificent Mile Evening\\n\\n5:00 PM Window Shopping on Michigan Ave\\n6:15 PM Taqueria Chingon (Michelin Bib Gourmand Mexican)\\n7:30 PM Ghirardelli (Hot Fudge Sundaes & Hot Chocolate)\\n\\nFull details: dateflo.com/joseph-and-sandy"
    }
  }
];

// Set default plan
window.PLAN = window.PLAN_ALL[0];
