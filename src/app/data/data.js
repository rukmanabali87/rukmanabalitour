import {FiShoppingCart,FiDribbble, FiLinkedin,FiFacebook,FiInstagram,FiTwitter,FiMail,FiClock,FiActivity, FiUsers, FiGlobe,FiDollarSign,FiYoutube,FiHelpCircle,FiBookmark,FiSettings,FiGithub,FiGitlab} from "react-icons/fi"
import { FaTiktok } from "react-icons/fa";

export const topDestination = [
    {
        image:'/images/listing/1.jpg',
        place:'Rome, Italy',
        hotels:'3 Hotels'
    },
    {
        image:'/images/listing/2.jpg',
        place:'Singapore',
        hotels:'3 Hotels'
    },
    {
        image:'/images/listing/3.jpg',
        place:'Paris, France',
        hotels:'3 Hotels'
    },
    {
        image:'/images/listing/4.jpg',
        place:'Goa, India',
        hotels:'3 Hotels'
    },
    {
        image:'/images/listing/5.jpg',
        place:'Whistler, Canada',
        hotels:'3 Hotels'
    },
    {
        image:'/images/listing/6.jpg',
        place:'Lumpur, Malaysia',
        hotels:'3 Hotels'
    },
    {
        image:'/images/listing/7.jpg',
        place:'Sydney, Australia',
        hotels:'3 Hotels'
    },
    {
        image:'/images/listing/8.jpg',
        place:'Virginia Beach',
        hotels:'3 Hotels'
    },
]

export const toursData = [
    {
        id: 1,
        slug: "nusa-penida-day-tour",

        productData: {
            title: "Nusa Penida Day Tour",
            place: "Klungkung, Bali",
            desc: 
                [ 
                    "Nusa Penida Day Tour by Rukmana Bali Tour is a 12-hour full-day tour designed to explore the most iconic destinations on Nusa Penida Island. The journey starts from Sanur Beach Harbour with a fast boat transfer, offering an easy and comfortable way to discover the island’s dramatic cliffs, crystal-clear waters, and natural beauty.", 

                    "This Nusa Penida tour package takes you to must-see attractions including Broken Beach, famous for its natural rock arch, and the iconic Kelingking Beach, known for its breathtaking cliff views shaped like a T-Rex. You will also visit Angel’s Billabong, a natural infinity pool with clear water and stunning coastal scenery.",

                    "The tour concludes at Crystal Bay, a peaceful white-sand beach ideal for relaxation. Guests may choose an optional snorkeling activity to explore the vibrant marine life. Perfect for travelers with limited time, the Nusa Penida Day Tour by Rukmana Bali Tour is an ideal way to experience the highlights of Nusa Penida in one day.",
                ]
        },

        images: [
            { src: "/images/tours/nusa-penida-day-tour/1.webp", alt: "Kelingking Beach" },
            { src: "/images/tours/nusa-penida-day-tour/2.webp", alt: "Broken Beach" },
            { src: "/images/tours/nusa-penida-day-tour/3.webp", alt: "Angel's Billabong" },
            { src: "/images/tours/nusa-penida-day-tour/4.webp", alt: "Crystal Bay" },
        ],

        tourDetailAbout: [
            { icon: "clock", name: "Duration", title: "12 Hours (Approx.)" },
            { icon: "activity", name: "Type", title: "Tour" },
            { icon: "users", name: "Group Size", title: "15 Peoples" },
            { icon: "globe", name: "Languages", title: "English" },
            { icon: "dollar", name: "Start Price", title: "From IDR 1.100.000" },
        ],

        highlightsData: [
            {
                icon: "car",
                title: "Private Car & Driver",
                desc: "Explore comfortably with an expert local island driver.",
            },
            {
                icon: "fastBoat",
                title: "Fast Boat Tickets Included",
                desc: "Round-trip fast boat from Sanur to Nusa Penida.",
            },
            {
                icon: "island",
                title: "Top Destinations",
                desc: "Visit Kelingking, Broken Beach, Angel Billabong, and Crystal Bay.",
            },
        ],

        itineraryData: [
            {
                time: "06:00 AM",
                title: "Hotel Pick-up",
                desc: "Pick-up from your hotel in Nusa Dua, Sanur, Kuta, Seminyak, or Ubud."
            },
            {
                time: "07:30 AM",
                title: "Sanur Beach Harbour",
                desc: "Arrive at Sanur Harbour and prepare for fast boat departure."
            },
            {
                time: "08:15 AM",
                title: "Nusa Penida Arrival",
                desc: "Meet your local guide at Nusa Penida and begin the island tour."
            },
            {
                time: "08:30 AM",
                title: "Broken Beach (Pasih Uug)",
                desc: "Visit the iconic natural rock arch overlooking the ocean."
            },
            {
                time: "09:15 AM",
                title: "Angel’s Billabong",
                desc: "Explore the stunning natural infinity pool by the sea."
            },
            {
                time: "10:30 AM",
                title: "Kelingking Beach",
                desc: "Photo stop at the famous T-Rex cliff and optional short trek."
            },
            {
                time: "12:00 PM",
                title: "Lunch Break",
                desc: "Enjoy Indonesian lunch at a local restaurant."
            },
            {
                time: "01:30 PM",
                title: "Crystal Bay",
                desc: "Relax on the beach, swim, or enjoy the clear waters."
            },
            {
                time: "03:30 PM",
                title: "Nusa Penida Port",
                desc: "Transfer back to the port for return departure."
            },
            {
                time: "04:30 PM",
                title: "Fast Boat to Sanur",
                desc: "Return by fast boat from Nusa Penida to Sanur."
            },
            {
                time: "05:30 PM",
                title: "Hotel Drop-off",
                desc: "Arrive back in Bali and drop-off at your hotel."
            },
        ],

        inclusionsData: {
            included: [
                "Private Air-Conditioned Car & Driver",
                "English-Speaking Local Guide",
                "Lunch (Indonesian Food)",
                "Return Fast Boat Ticket",
            ],
            excluded: [
                "Meals Fee",
                "Personal Expenses",
            ],
        },

        faqData: [
            {
                id:1,
                title:'Is this tour private?',
                desc:'Yes. You will have your own private car and driver for the entire day.'
            },
            {
                id:2,
                title:'Can I customize tour itinerary?',
                desc:'Absolutely. You can add East Nusa Penida or snorkeling sessions. but discuss first with operator maybe need a more payment.'
            },
            {
                id:3,
                title:'Is it suitable for children or elderly?',
                desc:'Yes. All locations are accessible without hiking down Kelingking.'
            },
            {
                id:4,
                title:'Is hotel pickup and drop-off available in all areas of Bali?',
                desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
            },
        ],
    },
    {
        id: 2,
        slug: "tanah-lot-sunset-tour",

        productData: {
        title: "Tanah Lot Sunset Tour",
        place: "Tabanan, Bali",
        desc: 
            [ 
                "Experience the beauty of Bali’s culture and coastline on the Tanah Lot Sunset Tour, a perfect half-day journey featuring two of the island’s most iconic temples. The tour begins with a visit to Taman Ayun Temple, a UNESCO-listed heritage site from the former Mengwi Kingdom. Known for its classic Balinese architecture, peaceful water moat, and beautifully arranged gardens, this royal temple offers a serene introduction to Bali’s spiritual and cultural traditions.", 

                "The highlight of the tour is Tanah Lot Temple, one of Bali’s most famous sunset spots. Perched on a dramatic offshore rock formation overlooking the Indian Ocean, Tanah Lot provides breathtaking ocean views and unforgettable sunset scenery. Stroll around the temple complex, explore the surrounding coastal area, and capture stunning photos as the sky transforms into golden and orange hues. The Tanah Lot Sunset Tour is an ideal choice for travelers seeking cultural exploration combined with Bali’s most spectacular sunset experience.",
            ]
        },

        images: [
            { src: "/images/tours/tanah-lot-sunset-tour/1.webp", alt: "Tanah Lot View Sunset" },
            { src: "/images/tours/tanah-lot-sunset-tour/2.webp", alt: "Tanah Lot Temple" },
            { src: "/images/tours/tanah-lot-sunset-tour/3.jpg", alt: "Taman Ayun ViewTemple" },
            { src: "/images/tours/tanah-lot-sunset-tour/4.jpg", alt: "Taman Ayun Temple" },
        ],

        tourDetailAbout: [
            { icon: "clock", name: "Duration", title: "6 Hours (Approx.)" },
            { icon: "activity", name: "Type", title: "Tour" },
            { icon: "users", name: "Group Size", title: "15 Peoples" },
            { icon: "globe", name: "Languages", title: "English" },
            { icon: "dollar", name: "Start Price", title: "From IDR 327.000" },
        ],

        highlightsData: [
            {
                icon: "car",
                title: "Private Car & Driver",
                desc: "Comfortable travel with a professional local driver.",
            },
            {
                icon: "landmark",
                title: "Cultural Heritage Site",
                desc: "Visit Taman Ayun Temple, a UNESCO World Heritage Site.",
            },
            {
                icon: "island",
                title: "Sunset at Tanah Lot",
                desc: "Witness a spectacular sunset at Bali’s iconic sea temple.",
            },
            {
                icon: "camera",
                title: "Ocean View Scenery",
                desc: "Enjoy stunning coastal views and photo opportunities.",
            },
        ],

        itineraryData: [
            {
                time: "02:00 PM",
                title: "Hotel Pick-up",
                desc: "Pick-up from your hotel in selected areas."
            },
            {
                time: "02:30 PM",
                title: "Depart to Taman Ayun Temple",
                desc: "Drive to the royal temple of the former Mengwi Kingdom."
            },
            {
                time: "03:15 PM",
                title: "Taman Ayun Temple",
                desc: "Explore the UNESCO World Heritage temple and its beautiful gardens."
            },
            {
                time: "04:00 PM",
                title: "Depart to Tanah Lot Temple",
                desc: "Continue the journey toward Bali’s iconic sea temple."
            },
            {
                time: "04:45 PM",
                title: "Tanah Lot Temple",
                desc: "Arrive at Tanah Lot and explore the surrounding area."
            },
            {
                time: "05:30 PM",
                title: "Sunset at Tanah Lot",
                desc: "Enjoy a spectacular sunset overlooking the Indian Ocean."
            },
            {
                time: "06:15 PM",
                title: "Return to Hotel",
                desc: "Depart back to your hotel after sunset."
            },
            {
                time: "08:00 PM",
                title: "Hotel Drop-off",
                desc: "Drop-off at your hotel. Tour ends."
            },
        ],

        inclusionsData: {
            included: [
                "Private Air-Conditioned Car & Driver",
                "English-Speaking Local Guide",
                "All entrance fees (optional)",
                "Insurance",
            ],
            excluded: [
                "Meals Fee",
                "Personal Expenses",
            ],
        },

        faqData: [
            {
                id:1,
                title:'Is this tour private?',
                desc:'Yes. You will have your own private car and driver for the entire day.'
            },
            {
                id:2,
                title:'Can I customize tour itinerary?',
                desc:'Yes. The itinerary can be adjusted based on your preferences. Please discuss your requests with the operator in advance. Additional charges may apply.'
            },
            {
                id:3,
                title:'Is it suitable for children or elderly?',
                desc:'Yes. All locations are easily accessible with minimal walking and no strenuous activities.'
            },
            {
                id:4,
                title:'Is hotel pickup and drop-off available in all areas of Bali?',
                desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
            },
        ],
    },
    {
        id: 3,
        slug: "gates-of-heaven-tour",

        productData: {
            title: "Gates of Heaven Tour",
            place: "Karangasem, Bali",
            desc: 
                [ 
                    "Gates of Heaven Tour is one of the most popular Bali day tours, offering a perfect blend of iconic landmarks, cultural heritage, and natural beauty in East Bali. This full-day tour takes you to some of Bali’s most photogenic and meaningful destinations, ideal for travelers seeking stunning scenery and authentic experiences.", 

                    "The journey begins at Lempuyang Temple – The Gates of Heaven, famous for its breathtaking views of Mount Agung framed by the temple’s majestic gate. Continue to Tirta Gangga, the former royal water palace, where elegant fountains, stone carvings, and tranquil pools create a peaceful atmosphere surrounded by lush gardens.",

                    "The tour concludes with a visit to Tukad Cepung Waterfall, a hidden gem tucked inside a cave-like canyon. Sunlight streaming through the rocks creates a magical scene, making it one of Bali’s most unique waterfalls. The Gates of Heaven Tour is perfect for couples, photographers, and nature lovers looking to explore the spiritual and scenic side of Bali in one unforgettable day.",

                ]
        },

        images: [
            { src: "/images/tours/gates-of-heaven-tour/1.webp", alt: "Gates of Heaven at Lempuyang Temple" },
            { src: "/images/tours/gates-of-heaven-tour/2.webp", alt: "Lempuyan Temple" },
            { src: "/images/tours/gates-of-heaven-tour/3.jpg", alt: "Tirta Ganga Water Palace" },
            { src: "/images/tours/gates-of-heaven-tour/4.jpg", alt: "Tukad Cepung Waterfall" },
        ],

        tourDetailAbout: [
            { icon: "clock", name: "Duration", title: "8 Hours (Approx.)" },
            { icon: "activity", name: "Type", title: "Tour" },
            { icon: "users", name: "Group Size", title: "15 Peoples" },
            { icon: "globe", name: "Languages", title: "English" },
            { icon: "dollar", name: "Start Price", title: "From IDR 601.000" },
        ],

        highlightsData: [
            {
                icon: "car",
                title: "Private Car & Driver",
                desc: "Comfortable travel with a professional local driver.",
            },
            {
                icon: "temple",
                title: "Lempuyang Gates of Heaven",
                desc: "Iconic temple gate with Mount Agung views.",
            },
            {
                icon: "mapPin",
                title: "Cultural & Scenic Journey",
                desc: "A relaxing blend of culture, nature, and beautiful landscapes.",
            },
        ],

        itineraryData: [
            {
                time: "06:00 AM",
                title: "Hotel Pick-up",
                desc: "Pick-up from your hotel in selected areas."
            },
            {
                time: "07:30 AM",
                title: "Lempuyang Temple – Gates of Heaven",
                desc: "Visit the iconic gate with Mount Agung views."
            },
            {
                time: "09:00 AM",
                title: "Depart to Tirta Gangga",
                desc: "Continue the journey to East Bali."
            },
            {
                time: "09:30 AM",
                title: "Tirta Gangga Water Palace",
                desc: "Explore the royal water palace and gardens."
            },
            {
                time: "10:30 AM",
                title: "Depart to Tukad Cepung Waterfall",
                desc: "Travel to a hidden natural spot."
            },
            {
                time: "11:30 AM",
                title: "Tukad Cepung Waterfall",
                desc: "Enjoy the unique waterfall inside a canyon."
            },
            {
                time: "12:30 PM",
                title: "Return to Hotel",
                desc: "Start the return journey."
            },
            {
                time: "02:00 PM",
                title: "Hotel Drop-off",
                desc: "Drop-off at your hotel. Tour ends."
            },
        ],

        inclusionsData: {
            included: [
                "Private Air-Conditioned Car & Driver",
                "English-Speaking Local Guide",
                "All entrance fees (optional)",
                "Insurance",
            ],
            excluded: [
                "Meals Fee",
                "Personal Expenses",
            ],
        },

        faqData: [
            {
                id:1,
                title:'Is this tour private?',
                desc:'Yes. You will have your own private car and driver for the entire day.'
            },
            {
                id:2,
                title:'Can I customize tour itinerary?',
                desc:'Yes. The itinerary can be adjusted based on your preferences. Please discuss your requests with the operator in advance. Additional charges may apply.'
            },
            {
                id:3,
                title:'Is it suitable for children or elderly?',
                desc:'Yes. All locations are easily accessible with minimal walking and no strenuous activities.'
            },
            {
                id:4,
                title:'Is hotel pickup and drop-off available in all areas of Bali?',
                desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
            },
        ],
    },
    {
        id: 4,
        slug: "east-of-nusa-penida-day-tour",

        productData: {
            title: "East of Nusa Penida Day Tour",
            place: "Klungkung, Bali",
            desc: 
                [ 
                    "The East of Nusa Penida Day Tour is a perfect choice for travelers who want to explore the most scenic and unspoiled eastern side of Nusa Penida Island. This full-day tour starts with a convenient hotel pick-up in Bali, followed by a fast boat ride from Sanur to Nusa Penida. Accompanied by a local guide, you will discover dramatic coastal cliffs, turquoise waters, and breathtaking viewpoints that make East Nusa Penida one of Bali’s most photogenic destinations.", 

                    "During this East Nusa Penida tour, you will visit iconic spots such as Atuh Beach and Diamond Beach, famous for their white sand, crystal-clear ocean, and stunning cliffside panoramas. These locations are ideal for sightseeing, short beach walks, and capturing memorable photos. A lunch break at a local restaurant is available (optional), allowing you to relax and enjoy the island atmosphere before continuing your journey.",

                    "The highlight of the East of Nusa Penida Day Tour is a visit to the famous Tree House (Rumah Pohon Molenteng), offering panoramic views over the ocean and rugged cliffs—one of the most Instagrammable spots on the island. After a full day exploring the best of East Nusa Penida, you will return to Bali by fast boat and be transferred back to your hotel, completing an unforgettable Nusa Penida day trip experience.",
                ]
        },

        images: [
            { src: "/images/tours/east-of-nusa-penida-day-tour/1.jpg", alt: "Tree House at East of Nusa Penida" },
            { src: "/images/tours/east-of-nusa-penida-day-tour/2.jpg", alt: "Diamond Beach Viewpoint" },
            { src: "/images/tours/east-of-nusa-penida-day-tour/3.jpg", alt: "Atuh Beach Landscape" },
            { src: "/images/tours/east-of-nusa-penida-day-tour/4.jpg", alt: "Sanur Harbour" },
        ],

        tourDetailAbout: [
            { icon: "clock", name: "Duration", title: "12 Hours (Approx.)" },
            { icon: "activity", name: "Type", title: "Tour" },
            { icon: "users", name: "Group Size", title: "15 Peoples" },
            { icon: "globe", name: "Languages", title: "English" },
            { icon: "dollar", name: "Start Price", title: "From IDR 1.281.000" },
        ],

        highlightsData: [
            {
                icon: "mapPin",
                title: "Iconic East Nusa Penida",
                desc: "Atuh Beach, Diamond Beach & Tree House views."
            },
            {
                icon: "walking",
                title: "Comfortable Day Trip",
                desc: "Hotel pick-up, fast boat & local guide."
            },
            {
                icon: "camera",
                title: "Photo-Worthy Landscapes",
                desc: "Cliffs, beaches & ocean panoramas."
            },
        ],

        itineraryData: [
            {
                time: "06:30 AM",
                title: "Hotel Pick-up",
                desc: "Pick-up from your hotel and transfer to Sanur Beach Harbour."
            },
            {
                time: "07:30 AM",
                title: "Fast Boat Check-in",
                desc: "Check-in and boarding fast boat at Sanur Harbour."
            },
            {
                time: "08:00 AM",
                title: "Depart to Nusa Penida",
                desc: "Fast boat departure from Sanur to Nusa Penida (approx. 45 minutes)."
            },
            {
                time: "08:45 AM",
                title: "Arrive at Nusa Penida",
                desc: "Arrive at Nusa Penida Island and meet your local guide."
            },
            {
                time: "09:15 AM",
                title: "Atuh Beach Visit",
                desc: "Enjoy scenic cliff views and a relaxing beach walk at Atuh Beach."
            },
            {
                time: "10:30 AM",
                title: "Diamond Beach Exploration",
                desc: "Explore Diamond Beach and capture stunning coastal photos."
            },
            {
                time: "12:00 PM",
                title: "Lunch Break",
                desc: "Enjoy an included Indonesian lunch at a local restaurant."
            },
            {
                time: "01:00 PM",
                title: "Tree House Visit",
                desc: "Photo stop at Tree House (Rumah Pohon Molenteng) with panoramic views."
            },
            {
                time: "02:30 PM",
                title: "Return to Harbour",
                desc: "Depart for Nusa Penida Harbour."
            },
            {
                time: "03:00 PM",
                title: "Return Fast Boat Check-in",
                desc: "Check-in and board fast boat back to Bali."
            },
            {
                time: "03:30 PM",
                title: "Depart to Bali",
                desc: "Fast boat departure from Nusa Penida to Sanur."
            },
            {
                time: "04:15 PM",
                title: "Arrive in Sanur",
                desc: "Arrive at Sanur Harbour and transfer back to hotel."
            },
            {
                time: "05:00 PM",
                title: "Hotel Drop-off",
                desc: "Arrive at your hotel and end of tour."
            },
        ],

        inclusionsData: {
            included: [
                "Private Air-Conditioned Car & Driver",
                "English-Speaking Local Guide",
                "Hotel pick-up & drop-off in Bali",
                "Return fast boat ticket",
                "Indonesian lunch",
                "All entrance tickets",
                "Insurance",
            ],
            excluded: [
                "Personal Expenses",
            ],
        },

        faqData: [
            {
                id: 1,
                title: "Is this a full-day tour?",
                desc: "Yes, this is a full-day tour starting early morning and returning to your hotel in the late afternoon."
            },
            {
                id: 2,
                title: "Is lunch included in the tour?",
                desc: "Yes, an Indonesian lunch at a local restaurant is included."
            },
            {
                id: 3,
                title: "Is this tour suitable for children or elderly?",
                desc: "Yes, but some locations involve stairs and uneven paths, so basic mobility is recommended."
            },
            {
                id: 4,
                title: "What should I bring for the tour?",
                desc: "Comfortable shoes, sunscreen, hat, camera, and personal essentials are recommended."
            },
            {
                id: 5,
                title: "Can I customize the itinerary?",
                desc: "Minor adjustments may be possible depending on conditions and should be discussed in advance."
            },
            {
                id:6,
                title:'Is hotel pickup and drop-off available in all areas of Bali?',
                desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
            },
        ],
    },
    {
        id: 5,
        slug: "bali-private-car-hire",

        productData: {
            title: "Bali Private Car Hire",
            place: "Bali, Indonesia",
            desc: 
                [ 
                    "Bali Private Car Hire is a flexible and comfortable transportation service designed to suit different travel styles, group sizes, and itineraries. Guests can choose from a wide range of vehicles, including City Cars for solo travelers or couples, Standard MPVs for small groups, Family Minivans for added space, Luxury Minivans for premium comfort, and Premium Minibuses for larger groups. Each vehicle is well-maintained and air-conditioned, ensuring a smooth and relaxing journey while exploring Bali.", 

                    "One of the main advantages of this Bali Private Car Hire service is its fully customizable route. Travelers have complete freedom to decide where to go, how long to stay at each destination, and which attractions to include. Whether passing through cultural hubs like Ubud, iconic landmarks such as Tanah Lot and Uluwatu, or scenic highland areas like Tegalalang and Jatiluwih, the itinerary can be tailored to match personal interests, travel pace, and time preferences.",

                    "With flexible hourly options and an experienced local driver, Bali Private Car Hire offers a convenient and adaptable way to explore the island. Guests can enjoy views of temples, rice terraces, waterfalls, lakes, and cultural sites without being tied to a fixed schedule. This private car charter is ideal for travelers seeking comfort, privacy, and full control over their Bali journey.",
                ]
        },

        images: [
            { src: "/images/tours/bali-private-car-hire/1.jpg", alt: "Luxury Minivan in Bali" },
            { src: "/images/tours/bali-private-car-hire/2.jpg", alt: "Private Car in Bali" },
            { src: "/images/tours/bali-private-car-hire/3.jpg", alt: "Family Minivan in Bali" },
            { src: "/images/tours/bali-private-car-hire/4.jpg", alt: "City Car in Bali" },
        ],

        tourDetailAbout: [
            { icon: "clock", name: "Duration", title: "Hourly Charter" },
            { icon: "activity", name: "Type", title: "Tour" },
            { icon: "users", name: "Group Size", title: "50 Peoples" },
            { icon: "globe", name: "Languages", title: "English" },
            { icon: "dollar", name: "Start Price", title: "From IDR 257.000" },
        ],

        highlightsData: [
            {
                icon: "map",
                title: "Flexible Custom Route",
                desc: "Plan your own itinerary and travel at your preferred pace."
            },
            {
                icon: "car",
                title: "Vehicle Options for Every Group",
                desc: "City car to premium minibus, tailored to your needs."
            },
            {
                icon: "userCheck",
                title: "Comfortable Private Service",
                desc: "Air-conditioned vehicle with an experienced local driver."
            },
        ],

        itineraryData: [
            {
                time: "Pass By",
                title: "Ubud",
                desc: "Cultural villages, rice fields, and local life."
            },
            {
                time: "Pass By",
                title: "Tanah Lot",
                desc: "Iconic sea temple and coastal views."
            },
            {
                time: "Pass By",
                title: "Uluwatu",
                desc: "Clifftop temple with ocean panoramas."
            },
            {
                time: "Pass By",
                title: "Garuda Wisnu Kencana",
                desc: "Cultural park with a massive iconic statue."
            },
            {
                time: "Pass By",
                title: "Ulun Danu Beratan Temple",
                desc: "Floating temple and lake scenery."
            },
            {
                time: "Pass By",
                title: "Sacred Monkey Forest",
                desc: "Jungle area with free-roaming monkeys."
            },
            {
                time: "Pass By",
                title: "Tirta Empul Temple",
                desc: "Sacred water temple and holy springs."
            },
            {
                time: "Pass By",
                title: "Tegenungan Waterfall",
                desc: "Tropical waterfall and river views."
            },
            {
                time: "Pass By",
                title: "Ubud Art Market",
                desc: "Traditional crafts and local market."
            },
            {
                time: "Pass By",
                title: "Tegalalang Rice Terrace",
                desc: "Iconic layered rice fields."
            },
            {
                time: "Pass By",
                title: "Jatiluwih Green Land",
                desc: "Wide rice terraces and highland views."
            },
            {
                time: "Pass By",
                title: "Lempuyang Temple",
                desc: "Gate of Heaven and Mount Agung views."
            },
            {
                time: "Pass By",
                title: "Tirta Gangga",
                desc: "Royal water palace and gardens."
            },
        ],

        inclusionsData: {
            included: [
                "Private Air-Conditioned Car & Driver",
                "English-Speaking Local Guide",
                "Fully customizable route",
                "Mineral water bottles",
                "Petrol / fuel",
                "Insurance",
            ],
            excluded: [
                "Entrance tickets to attractions",
                "Meals and personal expenses",
            ],
        },

        faqData: [
            {
                id: 1,
                title: "What is Bali Private Car Hire?",
                desc: "A flexible service that lets you customize your itinerary and travel at your own pace with a private vehicle and driver."
            },
            {
                id: 2,
                title: "Which vehicles are available?",
                desc: "Choose from City Cars, MPVs, Family or Luxury Minivans, and Premium Minibuses depending on your group size and comfort preference."
            },
            {
                id: 3,
                title: "Is the route fixed or customizable?",
                desc: "The route is fully customizable. You decide which attractions to visit, the order, and how long to stay at each location."
            },
            {
                id: 4,
                title: "Can I hire the car for a few hours or a full day?",
                desc: "Yes, the service is available hourly or for a full day, with an experienced driver included for a smooth journey."
            },
            {
                id:5,
                title:'Is hotel pickup and drop-off available in all areas of Bali?',
                desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
            },
        ],
    },
    {
        id: 6,
        slug: "uluwatu-sunset-tour",

        productData: {
            title: "Uluwatu Sunset Tour",
            place: "Badung, Bali",
            desc: 
                [ 
                    "Discover the beauty of Bali’s southern coastline on the Uluwatu Sunset Tour, featuring stunning beaches, dramatic cliffs, and iconic cultural landmarks. The journey begins at Padang Padang Beach, a beautiful white-sand beach surrounded by limestone cliffs, ideal for relaxing, sightseeing, and capturing scenic photos.", 

                    "Continue to the famous Uluwatu Temple, located on a high cliff overlooking the Indian Ocean. This sacred sea temple offers breathtaking sunset views and is also home to the traditional Kecak and Fire Dance, performed in the evening within the temple area.",

                    "The tour concludes at Jimbaran Bay, known for its relaxed beachfront atmosphere and fresh seafood dining by the beach. This final stop provides a perfect ending to the Uluwatu Sunset Tour, combining natural scenery, Balinese culture, and a memorable coastal dining experience.",
                ]
        },

        images: [
            { src: "/images/tours/uluwatu-sunset-tour/1.jpg", alt: "Uluwatu Temple" },
            { src: "/images/tours/uluwatu-sunset-tour/2.jpg", alt: "Padang Padang Beach" },
            { src: "/images/tours/uluwatu-sunset-tour/3.jpg", alt: "Kecak Dance Performance" },
            { src: "/images/tours/uluwatu-sunset-tour/4.jpg", alt: "Jimbaran Bay" },
        ],

        tourDetailAbout: [
            { icon: "clock", name: "Duration", title: "6 Hours (Approx.)" },
            { icon: "activity", name: "Type", title: "Tour" },
            { icon: "users", name: "Group Size", title: "15 Peoples" },
            { icon: "globe", name: "Languages", title: "English" },
            { icon: "dollar", name: "Start Price", title: "From IDR 299.000" },
        ],

        highlightsData: [
            {
                icon: "island",
                title: "Padang Padang Beach",
                desc: "White-sand beach with scenic limestone cliffs."
            },
            {
                icon: "sunset",
                title: "Uluwatu Temple & Sunset",
                desc: "Iconic cliffside temple with sunset views and Kecak dance."
            },
            {
                icon: "shrimp",
                title: "Jimbaran Bay Dinner",
                desc: "Fresh seafood dining by the beach."
            },
        ],

        itineraryData: [
            {
                time: "02:00 PM",
                title: "Hotel Pick-up",
                desc: "Pick-up from your hotel and depart to South Bali."
            },
            {
                time: "03:00 PM",
                title: "Padang Padang Beach",
                desc: "Visit the white-sand beach surrounded by limestone cliffs."
            },
            {
                time: "04:30 PM",
                title: "Uluwatu Temple",
                desc: "Explore the iconic cliffside sea temple."
            },
            {
                time: "06:00 PM",
                title: "Kecak & Fire Dance",
                desc: "Watch the traditional Kecak performance at Uluwatu Temple."
            },
            {
                time: "07:30 PM",
                title: "Jimbaran Bay Dinner",
                desc: "Enjoy seafood dining by the beach."
            },
            {
                time: "08:00 PM",
                title: "Return to Hotel",
                desc: "Transfer back to your hotel."
            },
        ],

        inclusionsData: {
            included: [
                "Private Air-Conditioned Car & Driver",
                "English-Speaking Local Guide",
                "Sarong for temple visit",
                "Entrance tickets (optional)",
                "Seafood dinner package (optional)",
                "Insurance",
            ],
            excluded: [
                "Kecak & Fire Dance ticket",
                "Personal Expenses",
            ],
        },

        faqData: [
            {
                id: 1,
                title: "Is this a private tour?",
                desc: "Yes, this is a private tour with a personal driver and vehicle, exclusively for you and your group."
            },
            {
                id: 2,
                title: "Is the Kecak & Fire Dance ticket included?",
                desc: "No, the Kecak & Fire Dance ticket is not included and can be purchased directly at Uluwatu Temple."
            },
            {
                id: 3,
                title: "Is this tour suitable for children or elderly?",
                desc: "Yes, but please note that Uluwatu Temple involves walking and stairs, so basic mobility is recommended."
            },
            {
                id: 4,
                title: "What should I bring for the tour?",
                desc: "Comfortable shoes, sunscreen, and a camera are recommended for a pleasant experience."
            },
            {
                id:5,
                title:'Is hotel pickup and drop-off available in all areas of Bali?',
                desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
            },
        ],
    },
    {
        id: 7,
        slug: "ubud-tanah-lot-tour",

        productData: {
            title: "Ubud Tanah Lot Tour",
            place: "Tabanan-Gianyar, Bali",
            desc: 
                [ 
                    "Explore Bali’s natural and cultural highlights on the Ubud Tanah Lot Tour, combining waterfalls, rice terraces, and iconic temples in one day. The tour starts in Ubud with visits to Tegenungan Waterfall and Tegalalang Rice Terrace, offering refreshing nature views and some of Bali’s most scenic photo spots.", 

                    "Continue to Ubud Traditional Art Market and Puseh Batuan Temple, where you can experience local craftsmanship, traditional architecture, and Balinese spiritual culture. These stops provide insight into daily life and long-standing traditions in the heart of Bali.",

                    "The journey continues to Teba Sari Bali Agrotourism for coffee tasting with plantation views before ending at Tanah Lot Temple, Bali’s famous sea temple set against the ocean. With dramatic coastal scenery and sunset views, this tour delivers a perfect blend of nature, culture, and iconic landscapes.",
                ]
        },

        images: [
            { src: "/images/tours/ubud-tanah-lot-tour/1.jpg", alt: "Tanah Lot Temple" },
            { src: "/images/tours/ubud-tanah-lot-tour/2.jpg", alt: "Tegenungan Waterfall" },
            { src: "/images/tours/ubud-tanah-lot-tour/3.jpg", alt: "Tegalalang Rice Terrace" },
            { src: "/images/tours/ubud-tanah-lot-tour/4.jpg", alt: "Ubud Traditional Art Market" },
        ],

        tourDetailAbout: [
            { icon: "clock", name: "Duration", title: "8 Hours (Approx.)" },
            { icon: "activity", name: "Type", title: "Tour" },
            { icon: "users", name: "Group Size", title: "15 Peoples" },
            { icon: "globe", name: "Languages", title: "English" },
            { icon: "dollar", name: "Start Price", title: "From IDR 377.000" },
        ],

        highlightsData: [
            {
                icon: "images",
                title: "Ubud Nature Highlights",
                desc: "Tegenungan Waterfall and Tegalalang Rice Terrace."
            },
            {
                icon: "temple",
                title: "Ubud Culture & Market",
                desc: "Traditional art market and Puseh Batuan Temple."
            },
            {
                icon: "sunset",
                title: "Tanah Lot Sea Temple",
                desc: "Iconic ocean temple with scenic coastal views."
            },
        ],

        itineraryData: [
            {
                time: "08:00 AM",
                title: "Hotel Pick-up",
                desc: "Pick-up from your hotel and depart to Ubud area."
            },
            {
                time: "09:30 AM",
                title: "Tegenungan Waterfall",
                desc: "Visit the scenic waterfall surrounded by tropical nature."
            },
            {
                time: "10:45 AM",
                title: "Tegalalang Rice Terrace",
                desc: "Enjoy panoramic views of Bali’s iconic rice terraces."
            },
            {
                time: "12:00 PM",
                title: "Ubud Art Market",
                desc: "Explore local handicrafts and souvenirs."
            },
            {
                time: "01:00 PM",
                title: "Puseh Batuan Temple",
                desc: "Visit a traditional Balinese temple with classic architecture."
            },
            {
                time: "02:00 PM",
                title: "Teba Sari Agrotourism",
                desc: "Coffee tasting with plantation views."
            },
            {
                time: "04:00 PM",
                title: "Tanah Lot Temple",
                desc: "Explore the famous sea temple and coastal scenery."
            },
            {
                time: "05:00 PM",
                title: "Return to Hotel",
                desc: "Transfer back to your hotel."
            },
        ],

        inclusionsData: {
            included: [
                "Private Air-Conditioned Car & Driver",
                "English-Speaking Local Guide",
                "Mineral water",
                "Entrance tickets (optional)",
                "Insurance",
            ],
            excluded: [
                "Lunch",
                "Personal Expenses",
            ],
        },

        faqData: [
            {
                id: 1,
                title: "Is this a private tour?",
                desc: "Yes, this is a private tour with a personal driver and vehicle for you and your group."
            },
            {
                id: 2,
                title: "Is lunch included in the tour?",
                desc: "Lunch is not included, but there will be time to stop at a local restaurant during the tour."
            },
            {
                id: 3,
                title: "Is this tour suitable for children or elderly?",
                desc: "Yes, but some locations involve walking and steps, so basic mobility is recommended."
            },
            {
                id: 4,
                title: "What should I bring for the tour?",
                desc: "Comfortable shoes, sunscreen, camera, and cash for personal expenses are recommended."
            },
            {
                id:5,
                title:'Is hotel pickup and drop-off available in all areas of Bali?',
                desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
            },
        ],
    },
    {
        id: 8,
        slug: "bali-dolphin-tour",

        productData: {
            title: "Bali Dolphin Tour",
            place: "Buleleng, Bali",
            desc: 
                [ 
                    "Experience an unforgettable morning on the Bali Dolphin Tour, starting with an early journey to Lovina Beach in North Bali. As the sun rises, board a traditional jukung boat and head out to sea to witness dolphins swimming and playing freely in their natural habitat, creating a magical sunrise experience.", 

                    "After the dolphin-watching experience, the tour continues to Git Git Waterfall, one of the most beautiful waterfalls in North Bali. Surrounded by lush greenery and fresh mountain air, this stop offers a refreshing nature escape and excellent photo opportunities.",

                    "The tour ends at Wanagiri Hidden Hills, where you can enjoy stunning views of the famous Twin Lakes. Combined with comfortable transportation and scenic routes, the Bali Dolphin Tour is a perfect choice for travelers seeking wildlife encounters and natural beauty in North Bali.",
                ]
        },

        images: [
            { src: "/images/tours/bali-dolphin-tour/1.jpg", alt: "Lovina Beach" },
            { src: "/images/tours/bali-dolphin-tour/2.jpg", alt: "Dolphin Watching" },
            { src: "/images/tours/bali-dolphin-tour/3.jpg", alt: "Git Git Waterfall" },
            { src: "/images/tours/bali-dolphin-tour/4.jpg", alt: "Wanagiri Hidden Hills" },
        ],

        tourDetailAbout: [
            { icon: "clock", name: "Duration", title: "10 Hours (Approx.)" },
            { icon: "activity", name: "Type", title: "Tour" },
            { icon: "users", name: "Group Size", title: "15 Peoples" },
            { icon: "globe", name: "Languages", title: "English" },
            { icon: "dollar", name: "Start Price", title: "From IDR 702.000" },
        ],

        highlightsData: [
            {
                icon: "sunset",
                title: "Sunrise Dolphin Watching",
                desc: "Watch dolphins swimming freely at sunrise in Lovina Beach."
            },
            {
                icon: "waterfall",
                title: "Git Git Waterfall",
                desc: "Visit a scenic waterfall surrounded by lush tropical nature."
            },
            {
                icon: "images",
                title: "Wanagiri Twin Lakes View",
                desc: "Enjoy panoramic views of the famous Twin Lakes in North Bali."
            },
        ],

        itineraryData: [
            {
                time: "03:00 AM",
                title: "Hotel Pick-up",
                desc: "Early morning pick-up from your hotel and depart to Lovina Beach, North Bali."
            },
            {
                time: "06:00 AM",
                title: "Lovina Dolphin Watching",
                desc: "Board a traditional jukung boat and watch dolphins swimming freely at sunrise."
            },
            {
                time: "08:30 AM",
                title: "Breakfast",
                desc: "Enjoy breakfast at a local restaurant near Lovina Beach."
            },
            {
                time: "10:00 AM",
                title: "Git Git Waterfall",
                desc: "Visit a scenic waterfall surrounded by lush tropical nature."
            },
            {
                time: "12:00 PM",
                title: "Wanagiri Twin Lakes View",
                desc: "Stop at Wanagiri Hidden Hills to enjoy panoramic views of the Twin Lakes."
            },
            {
                time: "01:30 PM",
                title: "Return to Hotel",
                desc: "Transfer back to your hotel with scenic countryside views."
            },
        ],

        inclusionsData: {
            included: [
                "Private Air-Conditioned Car & Driver",
                "English-Speaking Local Guide",
                "Mineral water",
                "Breakfast",
                "Entrance tickets (optional)",
                "Insurance",
            ],
            excluded: [
                "Personal Expenses",
            ],
        },

        faqData: [
            {
                id: 1,
                title: "Is this a private tour?",
                desc: "Yes, this is a private tour with a personal driver and vehicle, exclusively for your group."
            },
            {
                id: 2,
                title: "What is the minimum booking requirement?",
                desc: "The minimum booking requirement for this tour is 2 persons."
            },
            {
                id: 3,
                title: "Is dolphin watching guaranteed?",
                desc: "Dolphins are usually seen in Lovina, but sightings depend on natural conditions and cannot be guaranteed."
            },
            {
                id: 4,
                title: "Is this tour suitable for children or elderly?",
                desc: "Yes, but early departure and boat activity should be considered, especially for elderly guests."
            },
            {
                id:5,
                title:'Is hotel pickup and drop-off available in all areas of Bali?',
                desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
            },
        ],
    },
    {
        id: 9,
        slug: "bali-romantic-tour",

        productData: {
            title: "Bali Romantic Tour",
            place: "Badung, Bali",
            desc: 
                [ 
                    "Bali Romantic Tour is a perfect getaway for couples who want to enjoy fun activities and romantic moments in one day. The journey begins at Bintang Beach Club & Watersport, where you can experience exciting water sports such as parasailing and admire the stunning Bali sea from above in a safe and memorable way.", 

                    "After the watersport adventure, the tour continues to the iconic Uluwatu Temple, a breathtaking sea temple located on a dramatic cliff overlooking the Indian Ocean. This sacred site offers spectacular ocean views and a peaceful atmosphere, making it an ideal spot for couples to capture romantic photos together.",

                    "The tour ends at Jimbaran Bay, a beautiful beach famous for its golden sunset and beachfront seafood restaurants. Enjoy a romantic seafood dinner by the ocean while watching the sun set, creating a perfect and unforgettable ending to your Bali Romantic Tour.",
                ]
        },

        images: [
            { src: "/images/tours/bali-romantic-tour/1.jpg", alt: "Bintang Beach Club & Watersport" },
            { src: "/images/tours/bali-romantic-tour/2.jpg", alt: "Parasailling" },
            { src: "/images/tours/bali-romantic-tour/3.jpg", alt: "Romantic Dinner" },
            { src: "/images/tours/bali-romantic-tour/4.jpg", alt: "Uluwatu Temple" },
        ],

        tourDetailAbout: [
            { icon: "clock", name: "Duration", title: "8 Hours (Approx.)" },
            { icon: "activity", name: "Type", title: "Tour" },
            { icon: "users", name: "Group Size", title: "15 Peoples" },
            { icon: "globe", name: "Languages", title: "English" },
            { icon: "dollar", name: "Start Price", title: "From IDR 394.000" },
        ],

        highlightsData: [
            {
                icon: "waves",
                title: "Watersport Adventure",
                desc: "Enjoy parasailing and fun water activities at Bintang Beach Club."
            },
            {
                icon: "cliff",
                title: "Uluwatu Temple",
                desc: "Visit the iconic cliffside temple with breathtaking ocean views."
            },
            {
                icon: "sunset",
                title: "Jimbaran Sunset Dinner",
                desc: "Experience a romantic sunset and seafood dinner by the beach."
            },
        ],

        itineraryData: [
            {
                time: "08:00 AM",
                title: "Hotel Pick-up",
                desc: "Pick-up from your hotel and transfer to Tanjung Benoa."
            },
            {
                time: "09:30 AM",
                title: "Bintang Beach Club Watersport",
                desc: "Enjoy parasailing and selected water activities."
            },
            {
                time: "12:00 PM",
                title: "Lunch Break",
                desc: "Free time for lunch at a local restaurant (own expense)."
            },
            {
                time: "01:30 PM",
                title: "Uluwatu Temple",
                desc: "Visit the cliffside temple with stunning ocean views."
            },
            {
                time: "04:30 PM",
                title: "Jimbaran Bay",
                desc: "Enjoy a romantic beach atmosphere and seafood dinner."
            },
            {
                time: "05:00 PM",
                title: "Return to Hotel",
                desc: "Transfer back to your hotel."
            },
        ],

        inclusionsData: {
            included: [
                "Private Air-Conditioned Car & Driver",
                "English-Speaking Local Guide",
                "Bottle mineral water",
                "Entrance ticket (optional)",
                "Seafood dinner (optional)",
                "Parasailing (optional)",
                "Insurance"
            ],
            excluded: [
                "Personal Expenses",
            ],
        },

        faqData: [
            {
                id: 1,
                title: "Is Bali Romantic Tour ideal for couples and honeymoon trips?",
                desc: "Yes, Bali Romantic Tour is perfect for couples, honeymooners, and romantic getaways, featuring sunset views, beach dining, and private transportation."
            },
            {
                id: 2,
                title: "Does Bali Romantic Tour include parasailing and seafood dinner?",
                desc: "Parasailing and seafood dinner at Jimbaran Bay are optional and can be added during booking or arranged on the tour day."
            },
            {
                id: 3,
                title: "Is Bali Romantic Tour a private tour experience?",
                desc: "Yes, this is a private Bali tour with a comfortable air-conditioned car and an English-speaking driver-guide."
            },
            {
                id: 4,
                title: "What should couples prepare for Bali Romantic Tour?",
                desc: "Couples are advised to wear comfortable clothing, bring sunglasses and sunscreen, and prepare a light jacket for the evening."
            },
            {
                id:5,
                title:'Is hotel pickup and drop-off available in all areas of Bali?',
                desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
            },
        ],
    },
    {
        id: 10,
        slug: "ubud-highlights-tour",

        productData: {
            title: "Ubud Highlights Tour",
            place: "Gianyar, Bali",
            desc: 
                [ 
                    "Ubud Highlights Tour is a private day tour designed to explore the cultural and natural treasures of Ubud at a relaxed pace. With a personal driver-guide and private vehicle, you can enjoy Ubud’s top attractions comfortably without joining a group tour.", 

                    "This tour includes a visit to the Ubud Monkey Forest to see macaques in their natural habitat, followed by scenic stops at Tegenungan Waterfall and the famous Tegalalang Rice Terrace. You will also explore Goa Gajah (Elephant Cave), a historic temple known for its unique stone entrance and spiritual atmosphere.",

                    "The journey continues to Ubud Traditional Art Market and Ubud Palace, where you can shop for local handicrafts and learn about Ubud’s royal heritage. Combining culture, nature, and local life, this Ubud Highlights Tour is perfect for travelers who want to experience the best of Ubud in one day.",
                ]
        },

        images: [
            { src: "/images/tours/ubud-highlights-tour/1.jpg", alt: "Batuan Temple" },
            { src: "/images/tours/ubud-highlights-tour/2.jpg", alt: "Ubud Monkey Forest" },
            { src: "/images/tours/ubud-highlights-tour/3.jpg", alt: "Tegalalang Rice Terrace" },
            { src: "/images/tours/ubud-highlights-tour/4.jpg", alt: "Ubud Traditional Art Market" },
        ],

        tourDetailAbout: [
            { icon: "clock", name: "Duration", title: "8 to 10 Hours (Approx.)" },
            { icon: "activity", name: "Type", title: "Tour" },
            { icon: "users", name: "Group Size", title: "15 Peoples" },
            { icon: "globe", name: "Languages", title: "English" },
            { icon: "dollar", name: "Start Price", title: "From IDR 411.000" },
        ],

        highlightsData: [
            {
                icon: "landmark",
                title: "Cultural Heritage",
                desc: "Explore Ubud Palace and shop local crafts at Ubud Art Market."
            },
            {
                icon: "images",
                title: "Natural Scenery",
                desc: "Enjoy Tegenungan Waterfall and the iconic Tegalalang Rice Terrace."
            },
            {
                icon: "feather",
                title: "Wildlife & Temples",
                desc: "See monkeys at Ubud Monkey Forest and visit Elephant Cave."
            },
        ],

        itineraryData: [
            {
                time: "08:00 AM",
                title: "Hotel Pick-up",
                desc: "Pick-up from your hotel by private air-conditioned car with an English-speaking driver."
            },
            {
                time: "09:30 AM",
                title: "Ubud Monkey Forest",
                desc: "Observe long-tailed macaques in their natural jungle habitat."
            },
            {
                time: "10:45 AM",
                title: "Tegenungan Waterfall",
                desc: "Enjoy scenic views and the refreshing atmosphere of the waterfall."
            },
            {
                time: "12:00 PM",
                title: "Elephant Cave (Goa Gajah)",
                desc: "Explore an ancient temple with unique carvings and spiritual ambiance."
            },
            {
                time: "01:15 PM",
                title: "Lunch Break",
                desc: "Free time for lunch at a local restaurant (own expense)."
            },
            {
                time: "02:15 PM",
                title: "Tegalalang Rice Terrace",
                desc: "Admire the iconic rice terraces and capture beautiful photos."
            },
            {
                time: "03:45 PM",
                title: "Ubud Traditional Art Market & Ubud Palace",
                desc: "Visit the royal palace and shop for local handicrafts in Ubud center."
            },
            {
                time: "04:00 PM",
                title: "Return to Hotel",
                desc: "Transfer back to your hotel, concluding the Ubud Highlights Tour."
            },
        ],

        inclusionsData: {
            included: [
                "Private Air-Conditioned Car & Driver",
                "English-Speaking Local Guide",
                "Bottle mineral water",
                "Entrance tickets (optional)",
                "Insurance",
            ],
            excluded: [
                "Lunch",
                "Personal Expenses",
            ],
        },

        faqData: [
            {
                id: 1,
                title: "Is this a private Ubud tour?",
                desc: "Yes, this is a private Ubud Highlights Tour with your own air-conditioned vehicle and personal driver-guide."
            },
            {
                id: 2,
                title: "Which places are visited on the Ubud Highlights Tour?",
                desc: "The tour includes Ubud Monkey Forest, Tegenungan Waterfall, Elephant Cave, Tegalalang Rice Terrace, Ubud Art Market, and Ubud Palace."
            },
            {
                id: 3,
                title: "Are entrance tickets included?",
                desc: "Entrance tickets are optional and can be included during booking or paid directly at the attractions."
            },
            {
                id: 4,
                title: "Is this tour suitable for children and elderly?",
                desc: "Yes, the tour is suitable, but some locations involve walking and stairs, so basic mobility is recommended."
            },
            {
                id:5,
                title:'Is hotel pickup and drop-off available in all areas of Bali?',
                desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
            },
        ],
    },
];

export const activitiesData = [
    {
        id: 1,
        slug: "bali-quad-atv",

        productData: {
            title: "Bali Quad ATV",
            place: "Gianyar, Bali",
            desc: 
                [ 
                    "Bali Quad ATV Tour in Ubud offers an exciting off-road adventure through Bali’s stunning natural landscape. Ride a powerful 250cc quad bike and explore scenic jungle trails, rivers, tunnels, and muddy tracks located in Ubud. This tour is perfect for adventure seekers looking for thrilling experiences away from crowded tourist areas.", 

                    "Our Bali Quad ATV Ubud experience is suitable for both beginners and experienced riders, guided by professional instructors to ensure safety and enjoyment. Whether you are traveling solo, with friends, or family, this ATV tour delivers adrenaline, breathtaking scenery, and an unforgettable adventure in Ubud.",
                ]
        },

        images: [
            { src: "/images/activities/bali-quad-atv/1.webp", alt: "Bali Quad ATV" },
            { src: "/images/activities/bali-quad-atv/2.webp", alt: "Bali Quad ATV in Jungle" },
            { src: "/images/activities/bali-quad-atv/3.webp", alt: "Bali Quad ATV on Cave" },
            { src: "/images/activities/bali-quad-atv/4.webp", alt: "Bali Quad ATV in River" },
        ],

        tourDetailAbout: [
            { icon: "clock", name: "Duration", title: "6 Hours (Approx.)" },
            { icon: "activity", name: "Type", title: "Activity" },
            { icon: "users", name: "Group Size", title: "15 Peoples" },
            { icon: "globe", name: "Languages", title: "English" },
            { icon: "dollar", name: "Start Price", title: "From IDR 1.353.000" },
        ],

        highlightsData: [
            {
                icon: "mountain",
                title: "Off-Road ATV Adventure",
                desc: "Explore jungle trails, rivers, tunnels, and muddy tracks."
            },
            {
                icon: "userCheck",
                title: "Professional ATV Instructor",
                desc: "Ride safely with experienced and friendly instructors."
            },
            {
                icon: "activity",
                title: "Thrilling Riding Experience",
                desc: "Enjoy an exciting and adrenaline-filled ATV ride."
            },
            {
                icon: "landscape",
                title: "Ubud Natural Landscape",
                desc: "Discover beautiful natural scenery in Ubud."
            },
        ],

        itineraryData: [
            {
                time: "08:00 AM",
                title: "Hotel Pick-up",
                desc: "Hotel pick-up by an English-speaking driver."
            },
            {
                time: "09:00 AM",
                title: "Arrival",
                desc: "Arrive at the Bali Quad ATV location in Ubud."
            },
            {
                time: "09:15 AM",
                title: "Registration & Briefing",
                desc: "Registration process, safety briefing, and equipment fitting."
            },
            {
                time: "09:30 AM",
                title: "ATV Ride",
                desc: "Enjoy a 2-hour off-road adventure riding a powerful quad bike."
            },
            {
                time: "11:30 AM",
                title: "Refresh & Shower",
                desc: "Time to refresh, shower, and relax after the ATV ride."
            },
            {
                time: "12:00 PM",
                title: "Return",
                desc: "Depart back to your hotel."
            },
            {
                time: "01:00 PM",
                title: "Drop-off",
                desc: "Estimated hotel drop-off. Tour ends."
            },
        ],

        inclusionsData: {
            included: [
                "Private Air-Conditioned Car & Driver",
                "Welcome Drink",
                "Professional ATV Instructor",
                "ATV Bike & Safety Equipment",
                "Shower, Towel & Changing Room",
                "Buffet Lunch",
                "Insurance",
                "21% Government Tax & Service Charge"
            ],
            excluded: [
                "Personal Expenses",
            ],
        },

        faqData: [
            {
                id: 1,
                title: "What should I wear and bring?",
                desc: "We recommend wearing comfortable clothes for changing after the ride. Sunscreen is also advised. Please bring extra money if you wish to purchase drinks at the restaurant or photo/video documentation."
            },
            {
                id: 2,
                title: "Are there any special offers for group bookings?",
                desc: "Yes. Special prices are available for group bookings."
            },
            {
                id: 3,
                title: "Is there an additional charge for solo travelers?",
                desc: "Yes. A single traveler is subject to an additional 50% charge."
            },
            {
                id: 4,
                title: "Are there any hidden charges?",
                desc: "No. All prices are reasonable, fair, and there are no hidden charges."
            },
            {
                id: 5,
                title: "How can I make the payment?",
                desc: "Payment can be made upon arrival at the ATV ride location, and no deposit is required."
            },
            {
                id: 6,
                title: "What currencies are accepted?",
                desc: "We accept payments in USD, Indonesian Rupiah, or other currencies based on the latest exchange rates."
            },
            {
                id: 7,
                title: "Do you accept old USD banknotes?",
                desc: "No. We do not accept USD banknotes issued in 1996 or earlier."
            },
            {
                id:8,
                title:'Is hotel pickup and drop-off available in all areas of Bali?',
                desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
            },
        ],
    },
    {
        id: 2,
        slug: "ayung-river-rafting",

        productData: {
            title: "Ayung River Rafting",
            place: "Gianyar, Bali",
            desc: 
                [ 
                    "Ayung River Rafting is the perfect way to experience Bali’s natural beauty and adventure in one unforgettable trip. Paddle through fun and moderate rapids along Bali’s longest river, surrounded by lush rainforest, hidden waterfalls, and impressive stone carvings along the riverbanks. Located in Ubud, this rafting experience offers a scenic and exciting journey suitable for all adventure levels.", 

                    "The Ayung River Rafting tour is led by professional and friendly guides who ensure safety and enjoyment throughout the ride. Whether you are a first-time rafter or an experienced adventurer, this tour delivers a perfect blend of adrenaline, breathtaking scenery, and cultural charm, making it one of Bali’s most popular outdoor activities.",
                ]
        },

        images: [
            { src: "/images/activities/ayung-river-rafting/1.webp", alt: "Ayung River Rafting" },
            { src: "/images/activities/ayung-river-rafting/2.webp", alt: "Enjoying Ayung River Rafting" },
            { src: "/images/activities/ayung-river-rafting/3.webp", alt: "Riverside View" },
            { src: "/images/activities/ayung-river-rafting/4.webp", alt: "Rafting in the River" },
        ],

        tourDetailAbout: [
            { icon: "clock", name: "Duration", title: "6 Hours (Approx.)" },
            { icon: "activity", name: "Type", title: "Activity" },
            { icon: "users", name: "Group Size", title: "15 Peoples" },
            { icon: "globe", name: "Languages", title: "English" },
            { icon: "dollar", name: "Start Price", title: "From IDR 502.000" },
        ],

        highlightsData: [
            {
                icon: "activity",
                title: "Exciting White Water Rafting",
                desc: "Enjoy fun and moderate rapids along Bali’s longest river."
            },
            {
                icon: "images",
                title: "Stunning Natural Scenery",
                desc: "Paddle through lush rainforest, waterfalls, and scenic river views."
            },
            {
                icon: "userCheck",
                title: "Professional Rafting Guides",
                desc: "Experience a safe and enjoyable adventure with trained local guides."
            },
            {
                icon: "users",
                title: "Suitable for All Levels",
                desc: "Perfect for beginners, families, and adventure lovers."
            },
        ],

        itineraryData: [
            {
                time: "08:00 AM",
                title: "Hotel Pick-up",
                desc: "Pick-up from your hotel by an English-speaking driver."
            },
            {
                time: "09:00 AM",
                title: "Arrival",
                desc: "Arrive at Ayung Dewata Rafting base camp."
            },
            {
                time: "09:15 AM",
                title: "Safety Briefing",
                desc: "Safety briefing, gear fitting, and preparation before rafting."
            },
            {
                time: "09:30 AM",
                title: "Rafting Adventure",
                desc: "Start the Ayung River Rafting adventure for approximately 2 hours."
            },
            {
                time: "11:30 AM",
                title: "Refresh & Shower",
                desc: "Finish rafting, shower, and change clothes."
            },
            {
                time: "12:00 PM",
                title: "Lunch",
                desc: "Enjoy lunch at the rafting restaurant."
            },
            {
                time: "01:00 PM",
                title: "Return",
                desc: "Depart from the rafting site."
            },
            {
                time: "02:00 PM",
                title: "Drop-off",
                desc: "Drop-off back at your hotel. Tour ends."
            },
        ],

        inclusionsData: {
            included: [
                "Private Air-Conditioned Car & Driver",
                "English-Speaking Local Guide",
                "Return Hotel Transfer",
                "Safety-Approved Rafting Equipment",
                "Professional River Guide",
                "Waterproof Bag",
                "Shower, Towel & Locker Facilities",
                "Changing Room & Toilet",
                "Indonesian Buffet Lunch",
                "Insurance",
            ],
            excluded: [
                "Personal Expenses",
            ],
        },

        faqData: [
            {
                id: 1,
                title: "Is Ayung River Rafting suitable for beginners?",
                desc: "Yes. Ayung River Rafting features fun and moderate rapids, making it suitable for beginners and first-time rafters."
            },
            {
                id: 2,
                title: "Is this rafting tour safe?",
                desc: "Yes. The tour uses safety-approved equipment and is led by professional, experienced river guides."
            },
            {
                id: 3,
                title: "How long is the rafting experience?",
                desc: "The rafting adventure lasts approximately 2 hours, depending on river conditions and group pace."
            },
            {
                id: 4,
                title: "What should I wear and bring?",
                desc: "We recommend wearing comfortable outdoor clothing, river sandals or shoes, and bringing a change of clothes. Sunscreen is also recommended."
            },
            {
                id: 5,
                title: "Is lunch included in the tour?",
                desc: "Yes. An Indonesian buffet lunch is included after the rafting activity."
            },
            {
                id: 6,
                title: "Are hotel transfers included?",
                desc: "Yes. Return hotel transfers are included from selected areas."
            },
            {
                id: 7,
                title: "Is Ayung River Rafting suitable for children?",
                desc: "Yes. This activity is suitable for children aged 7 years and above, and all participants must be in good health."
            },
            {
                id:8,
                title:'Is hotel pickup and drop-off available in all areas of Bali?',
                desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
            },
        ],
    },
    {
        id: 3,
        slug: "bali-quad-bike-and-rafting",

        productData: {
            title: "Bali Quad Bike and Rafting",
            place: "Gianyar, Bali",
            desc: 
                [ 
                    "Bali Quad Bike and Rafting is the perfect one-day adventure for thrill seekers who want to experience Bali’s wild side without the hassle. Start your journey with a professionally guided quad bike (ATV) ride through muddy off-road tracks, lush rice fields, bamboo forests, and tropical jungle landscapes in Ubud. Suitable for beginners and experienced riders, this adventure also offers a tandem ATV option, making it ideal for couples who want to ride together while enjoying the excitement.", 

                    "After your quad bike adventure, continue with an unforgettable Ayung River white water rafting experience. Paddle through gentle rapids surrounded by dense rainforest, dramatic river gorges, waterfalls, and ancient stone carvings that reflect Bali’s rich cultural heritage. Led by experienced rafting guides, this safe and fun activity is perfect for families, first-timers, and adventure lovers looking for a refreshing outdoor experience.",

                    "To complete your day, relax and recharge with a delicious Indonesian buffet lunch overlooking the scenic valley. With private round-trip hotel transfers included, you can enjoy both adventures comfortably and stress-free. This Bali Quad Bike and Rafting tour offers the ideal combination of adrenaline, natural beauty, and authentic Balinese atmosphere—all in one unforgettable day.",
                ]
        },

        images: [
            { src: "/images/activities/bali-quad-bike-and-rafting/1.jpg", alt: "Bali Quad Bike and Rafting" },
            { src: "/images/activities/bali-quad-bike-and-rafting/2.jpg", alt: "Enjoying Bali Quad Bike" },
            { src: "/images/activities/bali-quad-bike-and-rafting/3.jpg", alt: "Riverside View" },
            { src: "/images/activities/bali-quad-bike-and-rafting/4.jpg", alt: "Enjoying the Rafting Experience" },
        ],

        tourDetailAbout: [
            { icon: "clock", name: "Duration", title: "10 Hours (Approx.)" },
            { icon: "activity", name: "Type", title: "Activity" },
            { icon: "users", name: "Group Size", title: "15 Peoples" },
            { icon: "globe", name: "Languages", title: "English" },
            { icon: "dollar", name: "Start Price", title: "From IDR 1.202.000" },
        ],

        highlightsData: [
            {
                icon: "motorcycle",
                title: "Quad Bike Adventure",
                desc: "ATV ride through muddy tracks and tropical jungle."
            },
            {
                icon: "waves",
                title: "Ayung River Rafting",
                desc: "Fun rafting on Bali’s most popular river."
            },
            {
                icon: "leaf",
                title: "Natural Scenery",
                desc: "Lush rainforest, waterfalls, and river gorges."
            },
            {
                icon: "car",
                title: "All-Inclusive Comfort",
                desc: "Buffet lunch and private hotel transfers included."
            },
        ],

        itineraryData: [
            {
                time: "08:00 AM",
                title: "Hotel Pick-up",
                desc: "Private hotel pick-up with air-conditioned vehicle and English-speaking driver."
            },
            {
                time: "10:00 AM",
                title: "Quad Bike Safety Briefing",
                desc: "Registration, safety briefing, and equipment preparation at the ATV basecamp."
            },
            {
                time: "10:15 AM",
                title: "Quad Bike Adventure (Approx. 2 Hours)",
                desc: "Enjoy an exciting ATV ride through muddy tracks, rice fields, bamboo forest, and tropical jungle."
            },
            {
                time: "12:15 PM",
                title: "Shower & Change",
                desc: "Time to clean up and change clothes after the quad bike experience."
            },
            {
                time: "12:45 PM",
                title: "Transfer to Rafting Point",
                desc: "Continue to the Ayung River rafting starting point."
            },
            {
                time: "01:00 PM",
                title: "Rafting Safety Briefing",
                desc: "Meet your professional rafting guide and receive safety instructions."
            },
            {
                time: "01:15 PM",
                title: "Ayung River Rafting (Approx. 2 Hours)",
                desc: "White water rafting through rainforest, waterfalls, and scenic river gorges."
            },
            {
                time: "03:15 PM",
                title: "Buffet Lunch",
                desc: "Enjoy an Indonesian buffet lunch with valley views."
            },
            {
                time: "04:15 PM",
                title: "Return to Hotel",
                desc: "Private transfer back to your hotel."
            },
            {
                time: "06:00 PM",
                title: "Arrive at Hotel",
                desc: "End of Bali Quad Bike and Rafting tour."
            },
        ],

        inclusionsData: {
            included: [
                "Private Air-Conditioned Car & Driver",
                "Professional guide",
                "2 hours quad bike riding",
                "2 hours Ayung River rafting",
                "Safety equipment",
                "Indonesian buffet lunch",
                "Insurance",
            ],
            excluded: [
                "Photo/video",
                "Personal Expenses",
            ],
        },

        faqData: [
            {
                id: 1,
                title: "Is this tour suitable for beginners?",
                desc: "Yes. Both quad bike and rafting activities are beginner-friendly and guided by professional instructors."
            },
            {
                id: 2,
                title: "Can children join this tour?",
                desc: "Yes. Children may join as passengers on tandem quad bikes and join rafting with adult supervision."
            },
            {
                id: 3,
                title: "How long is each activity?",
                desc: "Each main activity lasts approximately 2 hours, including quad bike riding and Ayung River rafting."
            },
            {
                id: 4,
                title: "Is safety equipment provided?",
                desc: "Yes. Safety equipment and insurance are included in the tour."
            },
            {
                id: 5,
                title: "What should I bring?",
                desc: "Comfortable clothes, a change of clothes, sandals or water shoes, sunscreen, and extra cash."
            },
            {
                id: 6,
                title: "Are photos and videos included?",
                desc: "No. Photo and video services are not included and available at an additional cost."
            },
            {
                id:7,
                title:'Is hotel pickup and drop-off available in all areas of Bali?',
                desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
            },
        ],
    },
    {
        id: 4,
        slug: "tulamben-diving",

        productData: {
            title: "Tulamben Diving",
            place: "Karangasem, Bali",
            desc: 
                [ 
                    "Tulamben Diving offers an unforgettable underwater experience at one of Bali’s most iconic dive destinations. This private day tour takes you to Tulamben to explore two of its most popular dive sites: the legendary USS Liberty Shipwreck and the beautiful Coral Garden. With private round-trip hotel transfers from Ubud and selected areas of south Bali, your journey is comfortable and stress-free.", 

                    "The first dive session is at the famous USS Liberty Wreck, a World War II ship that now lies just offshore and is completely covered with colorful corals. During this 30–40 minute dive, you’ll encounter dense coral growth and hundreds of fish species that have turned the wreck into a thriving underwater ecosystem, guided by a professional dive instructor.",

                    "The second dive session takes place at Coral Garden, known for its calm conditions and rich marine biodiversity. This dive allows you to explore healthy coral formations and spot unique marine life such as snappers, frogfish, ribbon eels, and scorpionfish. After completing both dives, enjoy a delicious Indonesian lunch before returning to your hotel, making Tulamben Diving a complete and rewarding day trip.",
                ]
        },

        images: [
            { src: "/images/activities/tulamben-diving/1.jpg", alt: "Tulamben Diving" },
            { src: "/images/activities/tulamben-diving/2.jpg", alt: "Diving in Tulamben" },
            { src: "/images/activities/tulamben-diving/3.jpg", alt: "Coral Garden Diving" },
            { src: "/images/activities/tulamben-diving/4.jpg", alt: "USS Liberty Shipwreck" },
        ],

        tourDetailAbout: [
            { icon: "clock", name: "Duration", title: "8 Hours (Approx.)" },
            { icon: "activity", name: "Type", title: "Activity" },
            { icon: "users", name: "Group Size", title: "15 Peoples" },
            { icon: "globe", name: "Languages", title: "English" },
            { icon: "dollar", name: "Start Price", title: "From IDR 1.099.000" },
        ],

        highlightsData: [
            {
                icon: "ship",
                title: "USS Liberty Shipwreck Dive",
                desc: "Explore the famous World War II wreck covered in colorful corals."
            },
            {
                icon: "waves",
                title: "Two Dive Sessions",
                desc: "Dive at USS Liberty Wreck and Coral Garden in one day."
            },
            {
                icon: "fish",
                title: "Rich Marine Life",
                desc: "Encounter diverse corals and hundreds of tropical fish species."
            },
        ],

        itineraryData: [
            {
                time: "08:00 AM",
                title: "Hotel Pick-up",
                desc: "Private hotel pick-up from Ubud or selected south Bali areas."
            },
            {
                time: "10:30 AM",
                title: "Arrival at Tulamben & Registration",
                desc: "Arrival at dive center, registration, and equipment preparation."
            },
            {
                time: "10:45 AM",
                title: "Dive Briefing",
                desc: "Safety briefing and dive instructions with professional guide."
            },
            {
                time: "11:00 AM",
                title: "Dive Session 1 – USS Liberty Shipwreck (Approx. 30 Minutes)",
                desc: "Explore the famous World War II shipwreck covered with corals."
            },
            {
                time: "11:45 AM",
                title: "Surface Interval",
                desc: "Short rest and preparation for the second dive."
            },
            {
                time: "12:30 PM",
                title: "Dive Session 2 – Coral Garden (Approx. 30 Minutes)",
                desc: "Enjoy calm waters, coral formations, and marine life."
            },
            {
                time: "01:15 PM",
                title: "Indonesian Lunch",
                desc: "Lunch at a local restaurant near the dive site."
            },
            {
                time: "02:00 PM",
                title: "Return Transfer",
                desc: "Private transfer back to your hotel."
            },
            {
                time: "04:00 PM",
                title: "Arrive at Hotel",
                desc: "End of Tulamben Diving tour."
            },
        ],

        inclusionsData: {
            included: [
                "Comfortable air-conditioned car (optional)",
                "English-speaking driver (optional)",
                "2 dive sessions (approx. 30 minutes each)",
                "Indonesian lunch",
                "Complete diving equipment"
            ],
            excluded: [
                
            ],
        },

        faqData: [
            {
                id: 1,
                title: "Is this tour suitable for beginners?",
                desc: "Yes. This tour is suitable for beginners and certified divers, guided by professional instructors."
            },
            {
                id: 2,
                title: "How many dives are included in this tour?",
                desc: "The tour includes 2 dive sessions, each lasting approximately 30 minutes."
            },
            {
                id: 3,
                title: "Which dive sites will we visit?",
                desc: "You will dive at the USS Liberty Shipwreck and the Coral Garden in Tulamben."
            },
            {
                id: 4,
                title: "Is diving equipment provided?",
                desc: "Yes. All necessary diving equipment is included in the tour package."
            },
            {
                id: 5,
                title: "Is hotel transfer included?",
                desc: "Hotel transfer with an air-conditioned car and English-speaking driver is available as an optional service."
            },
            {
                id: 6,
                title: "What should I bring for the tour?",
                desc: "Bring swimwear, a towel, sunscreen, and personal expenses if needed."
            },
            {
                id:7,
                title:'Is hotel pickup and drop-off available in all areas of Bali?',
                desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
            },
        ],
    },
    {
        id: 5,
        slug: "blue-lagoon-snorkeling",

        productData: {
            title: "Blue Lagoon Snorkeling",
            place: "Karangasem, Bali",
            desc: 
                [ 
                    "Blue Lagoon Snorkeling offers a relaxing snorkeling experience at one of Bali’s most popular snorkeling destinations, located in Padang Bai. The tour visits two snorkeling spots, Blue Lagoon Beach and Tanjung Jepun Beach, known for their clear waters, healthy coral reefs, and diverse tropical fish. With calm sea conditions and full snorkeling equipment provided, this activity is suitable for beginners and participants of all experience levels.", 

                    "The Blue Lagoon Snorkeling tour includes hotel pick-up and drop-off from selected areas in Bali, professional assistance during the activity, and a traditional Indonesian lunch at Puri Rai Restaurant. Designed for comfort and convenience, this half-day tour allows guests to enjoy Bali’s marine life in a safe, well-organized, and enjoyable snorkeling experience.",
                ]
        },

        images: [
            { src: "/images/activities/blue-lagoon-snorkeling/1.webp", alt: "Blue Lagoon Snorkeling" },
            { src: "/images/activities/blue-lagoon-snorkeling/2.webp", alt: "Snorkeling in Blue Lagoon" },
            { src: "/images/activities/blue-lagoon-snorkeling/3.webp", alt: "Coral Reef Snorkeling" },
            { src: "/images/activities/blue-lagoon-snorkeling/4.webp", alt: "Tanjung Jepun Beach" },
        ],

        tourDetailAbout: [
            { icon: "clock", name: "Duration", title: "6 Hours (Approx.)" },
            { icon: "activity", name: "Type", title: "Activity" },
            { icon: "users", name: "Group Size", title: "15 Peoples" },
            { icon: "globe", name: "Languages", title: "English" },
            { icon: "dollar", name: "Start Price", title: "From IDR 685.000" },
        ],

        highlightsData: [
            {
                icon: "mapPin",
                title: "Top Snorkeling Spots",
                desc: "Snorkel at Blue Lagoon Beach and Tanjung Jepun Beach."
            },
            {
                icon: "map",
                title: "Clear Water & Marine Life",
                desc: "Enjoy calm waters, coral reefs, and tropical fish."
            },
            {
                icon: "checkCircle",
                title: "Comfortable Half-Day Tour",
                desc: "Hotel transfer, equipment, and Indonesian lunch included."
            },
        ],

        itineraryData: [
            {
                time: "08:00 AM",
                title: "Hotel Pick-up",
                desc: "Pick-up from your hotel or designated meeting point by a professional driver."
            },
            {
                time: "09:30 AM",
                title: "Arrival at Padang Bai",
                desc: "Arrive at Padang Bai and head to the snorkeling meeting point."
            },
            {
                time: "09:45 AM",
                title: "Registration & Briefing",
                desc: "Registration process, safety briefing, and snorkeling equipment preparation."
            },
            {
                time: "10:00 AM",
                title: "Blue Lagoon Snorkeling",
                desc: "Enjoy snorkeling at Blue Lagoon Beach with clear water and colorful marine life."
            },
            {
                time: "11:00 AM",
                title: "Tanjung Jepun Snorkeling",
                desc: "Continue snorkeling at Tanjung Jepun, known for calm waters and coral reefs."
            },
            {
                time: "12:00 PM",
                title: "Lunch",
                desc: "Enjoy a set-menu traditional Indonesian lunch at a local restaurant."
            },
            {
                time: "01:00 PM",
                title: "Return Transfer",
                desc: "Depart from Padang Bai and return to your hotel."
            },
            {
                time: "02:00 PM",
                title: "Hotel Drop-off",
                desc: "Estimated arrival back at your hotel. Tour ends."
            },
        ],

        inclusionsData: {
            included: [
                "Private Air-Conditioned Car & Driver",
                "English-Speaking Local Guide",
                "2 snorkeling spots",
                "Snorkeling gear",
                "Mineral water",
                "Shower & changing room",
                "Set menu traditional lunch",
                "Underwater photos & videos (add-on)",
                "Insurance",
            ],
            excluded: [
                "Swimwear",
                "Personal Expenses",
            ],
        },

        faqData: [
            {
                id: 1,
                title: "Is this snorkeling tour suitable for beginners?",
                desc: "Yes. Blue Lagoon snorkeling is beginner-friendly with calm waters and professional guides assisting you throughout the activity."
            },
            {
                id: 2,
                title: "Do I need to know how to swim?",
                desc: "Basic swimming skills are recommended, but life jackets are provided for extra safety and comfort."
            },
            {
                id: 3,
                title: "What snorkeling spots will be visited?",
                desc: "You will snorkel at two locations: Blue Lagoon Beach and Tanjung Jepun, each offering clear water and colorful marine life."
            },
            {
                id: 4,
                title: "Is hotel pick-up and drop-off included?",
                desc: "Yes. Hotel pick-up and drop-off are included from selected areas in Bali. Additional charges may apply for locations outside the coverage area."
            },
            {
                id: 5,
                title: "What should I bring for this tour?",
                desc: "We recommend bringing swimwear, a change of clothes, sunscreen, and extra cash for personal expenses."
            },
            {
                id: 6,
                title: "Are underwater photos and videos included?",
                desc: "Underwater photos and videos are available as an optional add-on and can be arranged on the spot."
            },
            {
                id:7,
                title:'Is hotel pickup and drop-off available in all areas of Bali?',
                desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
            },
        ],
    },
    {
        id: 6,
        slug: "bali-paintball",

        productData: {
            title: "Bali Paintball",
            place: "Badung, Bali",
            desc: 
                [ 
                    "Bali Paintball is a fun half-day outdoor activity in the Bali countryside, ideal for friends and families seeking an exciting adventure away from crowded attractions. Enjoy private paintball games in a specially designed arena with full equipment and professional staff assistance, suitable for beginners and players aged 12 and above.", 

                    "The package includes round-trip hotel transfers by air-conditioned vehicle, welcome drink, registration, complete playing gear, mineral water, light meal, soft drink, locker, changing room, and insurance coverage for a safe and comfortable experience.",
                ]
        },

        images: [
            { src: "/images/activities/bali-paintball/1.jpg", alt: "Bali Paintball" },
            { src: "/images/activities/bali-paintball/2.jpg", alt: "Paintball Arena" },
            { src: "/images/activities/bali-paintball/3.jpg", alt: "Paintball Equipment" },
            { src: "/images/activities/bali-paintball/4.jpg", alt: "Team Play in Paintball" },
        ],

        tourDetailAbout: [
            { icon: "clock", name: "Duration", title: "6 Hours (Approx.)" },
            { icon: "activity", name: "Type", title: "Activity" },
            { icon: "users", name: "Group Size", title: "15 Peoples" },
            { icon: "globe", name: "Languages", title: "English" },
            { icon: "dollar", name: "Start Price", title: "From IDR 670.000" },
        ],

        highlightsData: [
            {
                icon: "crosshairs",
                title: "Paintball Adventure",
                desc: "Fun outdoor paintball games."
            },
            {
                icon: "users",
                title: "Group Friendly",
                desc: "Suitable for beginners and families."
            },
            {
                icon: "car",
                title: "Hotel Transfer",
                desc: "Comfortable round-trip transport."
            },
        ],

        itineraryData: [
            {
                time: "09:00 AM",
                title: "Hotel Pick-up",
                desc: "Pick-up by private air-conditioned vehicle."
            },
            {
                time: "10:00 AM",
                title: "Arrival & Registration",
                desc: "Welcome drink, registration, and preparation."
            },
            {
                time: "10:30 AM",
                title: "Safety Briefing",
                desc: "Rules and game instructions by staff."
            },
            {
                time: "11:00 AM",
                title: "Paintball Games",
                desc: "Exciting paintball matches with full equipment."
            },
            {
                time: "01:00 PM",
                title: "Break & Light Meal",
                desc: "Rest, change clothes, and enjoy light meal."
            },
            {
                time: "02:00 PM",
                title: "Return Transfer",
                desc: "Drive back to your hotel."
            },
            {
                time: "03:00 PM",
                title: "Arrive at Hotel",
                desc: "End of Bali Paintball tour."
            },
        ],

        inclusionsData: {
            included: [
                "Paintball gear",
                "Light meal & soft drink",
                "Locker & insurance",
                "Hotel transfer",
            ],
            excluded: [
                "Alcohol (available to purchase)",
                "Photos (available to purchase)"
            ],
        },

        faqData: [
            {
                id: 1,
                title: "Is Bali Paintball safe for beginners?",
                desc: "Yes. Professional staff provide safety briefing and assist throughout the game."
            },
            {
                id: 2,
                title: "What is the minimum age to join?",
                desc: "Participants must be at least 12 years old."
            },
            {
                id: 3,
                title: "How long does the paintball session last?",
                desc: "The activity lasts around 2–3 hours including briefing and games."
            },
            {
                id: 4,
                title: "Is hotel transfer included?",
                desc: "Yes, free hotel transfer is included from selected areas."
            },
            {
                id: 5,
                title: "What should I wear?",
                desc: "Comfortable clothes and closed shoes are recommended."
            },
            {
                id:6,
                title:'Is hotel pickup and drop-off available in all areas of Bali?',
                desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
            },
        ],
    },
    {
        id: 7,
        slug: "bali-water-sports-package",

        productData: {
            title: "Bali Water Sports Package",
            place: "Badung, Bali",
            desc: 
                [ 
                    "Bali Water Sports Package is the perfect half-day adventure for those looking to add excitement to their Bali holiday at Tanjung Benoa Beach. This action-packed experience requires no prior experience, as you will receive basic safety instructions and equipment briefing before each activity. Enjoy the freedom to choose which game to start with, making the experience flexible and fun for everyone.", 

                    "This package includes one round of parasailing, followed by thrilling Jet Ski, banana boat, and donut boat rides, each lasting approximately 15 minutes. Ideal for friends and families, this tour guarantees adrenaline and laughter in a safe and well-organized environment. Optional round-trip hotel transfers from Ubud and selected areas of south Bali are available for added convenience.",
                ]
        },

        images: [
            { src: "/images/activities/bali-water-sports-package/1.jpg", alt: "Bali Water Sports" },
            { src: "/images/activities/bali-water-sports-package/2.jpg", alt: "Water Sports Activity" },
            { src: "/images/activities/bali-water-sports-package/3.jpg", alt: "Banana Boat Ride" },
            { src: "/images/activities/bali-water-sports-package/4.jpg", alt: "Donut Boat" },
        ],

        tourDetailAbout: [
            { icon: "clock", name: "Duration", title: "4 Hours (Approx.)" },
            { icon: "activity", name: "Type", title: "Activity" },
            { icon: "users", name: "Group Size", title: "15 Peoples" },
            { icon: "globe", name: "Languages", title: "English" },
            { icon: "dollar", name: "Start Price", title: "From IDR 859.000" },
        ],

        highlightsData: [
            {
                icon: "parachute",
                title: "Parasailing Adventure",
                desc: "Enjoy one round of parasailing with stunning ocean views."
            },
            {
                icon: "ship",
                title: "Jet Ski Ride",
                desc: "Feel the thrill of a high-speed jet ski experience."
            },
            {
                icon: "waves",
                title: "Fun Water Rides",
                desc: "Ride a banana boat and donut boat for 15 minutes each."
            },
            {
                icon: "umbrellaBeach",
                title: "Beginner-Friendly",
                desc: "Basic safety briefing provided before every activity."
            },
        ],

        itineraryData: [
            {
                time: "09:00 AM",
                title: "Arrival & Registration",
                desc: "Arrive at Tanjung Benoa Beach, registration, and preparation."
            },
            {
                time: "09:15 AM",
                title: "Safety Briefing",
                desc: "Receive safety instructions and equipment explanation for all activities."
            },
            {
                time: "09:30 AM",
                title: "Parasailing Adventure",
                desc: "Enjoy 1 round of parasailing with beautiful ocean views."
            },
            {
                time: "10:15 AM",
                title: "Jet Ski Ride",
                desc: "Experience an exciting 15-minute jet ski ride."
            },
            {
                time: "10:45 AM",
                title: "Banana Boat Ride",
                desc: "Have fun on a 15-minute banana boat ride."
            },
            {
                time: "11:15 AM",
                title: "Donut Boat Ride",
                desc: "Enjoy a thrilling 15-minute donut boat ride."
            },
            {
                time: "12:00 PM",
                title: "Free Time & Change",
                desc: "Free time to shower, change clothes, and relax."
            },
            {
                time: "01:00 PM",
                title: "Tour Ends",
                desc: "End of Bali Water Sports Package."
            },
        ],

        inclusionsData: {
            included: [
                "Hotel transfer (optional)",
                "Professional instructor",
                "Parasailing (approx. 6 minutes)",
                "Jet ski with instructor (15 minutes)",
                "Banana boat (15 minutes)",
                "Donut boat (15 minutes)",
                "Shower, changing room & locker access",
                "Local taxes",
                "Insurance",
            ],
            excluded: [
                "Food and drinks",
                "Souvenir photos",
            ],
        },

        faqData: [
            {
                id: 1,
                title: "Is this package suitable for beginners?",
                desc: "Yes. All activities are beginner-friendly and guided by professional instructors."
            },
            {
                id: 2,
                title: "How long does the tour last?",
                desc: "The water sports activities last approximately 4 hours in total."
            },
            {
                id: 3,
                title: "What activities are included?",
                desc: "Parasailing, jet ski, banana boat, and donut boat rides are included in this package."
            },
            {
                id: 4,
                title: "Is hotel transfer included?",
                desc: "Hotel transfer is optional and available from selected areas."
            },
            {
                id: 5,
                title: "Is safety equipment provided?",
                desc: "Yes. Safety equipment and insurance coverage are included."
            },
            {
                id: 6,
                title: "What should I bring?",
                desc: "Bring swimwear, a towel, sunscreen, and extra cash if needed."
            },
            {
                id:7,
                title:'Is hotel pickup and drop-off available in all areas of Bali?',
                desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
            },
        ],
    },
    {
        id: 8,
        slug: "jumping-sliding-aling-aling-waterfall",

        productData: {
            title: "Jumping Sliding Aling-Aling Waterfall",
            place: "Buleleng, Bali",
            desc: 
                [ 
                    "Jumping Sliding Aling-Aling Waterfall is an exciting adventure in the far north of Bali, perfect for travelers seeking adrenaline and natural beauty. This tour takes you to the Aling-Aling Waterfalls area, where you can jump, slide, and swim in clear natural pools formed by cascading waterfalls. With private hotel transfers from Ubud and selected areas of south Bali, the long journey becomes comfortable and hassle-free.", 

                    "The Aling-Aling area is home to several waterfalls, including the famous Kroya Waterfall, the main spot for jumping and sliding activities. You will spend around 2 hours enjoying slides of about 15 meters and jumps from 10, 15, to 20 meters, all under the supervision of a local professional guide who provides safety instructions before each activity. A scenic photo stop at Wanagiri Twin Lakes completes this unforgettable adventure.",
                ]
        },

        images: [
            { src: "/images/activities/jumping-sliding-aling-aling-waterfall/1.jpg", alt: "Jumping Sliding Aling-Aling Waterfall" },
            { src: "/images/activities/jumping-sliding-aling-aling-waterfall/2.jpg", alt: "Waterfall Activity" },
            { src: "/images/activities/jumping-sliding-aling-aling-waterfall/3.jpg", alt: "Wanagiri Twin Lakes" },
            { src: "/images/activities/jumping-sliding-aling-aling-waterfall/4.jpg", alt: "Wanagiri Twin Lakes Scenic View" },
        ],

        tourDetailAbout: [
            { icon: "clock", name: "Duration", title: "10 Hours (Approx.)" },
            { icon: "activity", name: "Type", title: "Activity" },
            { icon: "users", name: "Group Size", title: "15 Peoples" },
            { icon: "globe", name: "Languages", title: "English" },
            { icon: "dollar", name: "Start Price", title: "From IDR 781.000" },
        ],

        highlightsData: [
            {
                icon: "cliffJump",
                title: "Jump & Slide Adventure",
                desc: "Natural slides and jumps up to 20 meters."
            },
            {
                icon: "waterfall",
                title: "Aling-Aling & Kroya Waterfalls",
                desc: "Crystal-clear pools in a tropical setting."
            },
            {
                icon:  "camera",
                title: "Wanagiri Photo Stop",
                desc: "Scenic views of the famous twin lakes."
            },
        ],

        itineraryData: [
            {
                time: "08:00 AM",
                title: "Hotel Pick-up",
                desc: "Private hotel pick-up."
            },
            {
                time: "11:00 AM",
                title: "Arrival at Aling-Aling",
                desc: "Meet local guide and prepare."
            },
            {
                time: "11:15 AM",
                title: "Safety Briefing",
                desc: "Jumping and sliding instructions."
            },
            {
                time: "11:30 AM",
                title: "Jumping & Sliding",
                desc: "Waterfall adventure and swimming."
            },
            {
                time: "01:30 PM",
                title: "Change & Rest",
                desc: "Shower and change clothes."
            },
            {
                time: "02:00 PM",
                title: "Lunch Break (Optional)",
                desc: "Lunch at local restaurant."
            },
            {
                time: "03:00 PM",
                title: "Wanagiri Photo Stop",
                desc: "Twin lakes viewpoint."
            },
            {
                time: "04:00 PM",
                title: "Return Transfer",
                desc: "Drive back to hotel."
            },
            {
                time: "06:00 PM",
                title: "Arrive at Hotel",
                desc: "Tour ends."
            },
        ],

        inclusionsData: {
            included: [
                "Private comfortable air-conditioned car",
                "English-speaking driver as guide",
                "Entrance ticket for jumping & sliding",
                "Local guide for jumping & sliding",
                "Insurance",
            ],
            excluded: [
                "Meals fee",
                "Personal expenses",
            ],
        },

        faqData: [
            {
                id: 1,
                title: "Is this tour suitable for beginners?",
                desc: "Yes. Beginners can enjoy sliding and choose lower jump spots with guidance."
            },
            {
                id: 2,
                title: "Do I have to jump from high spots?",
                desc: "No. Jumps are optional and available in different heights."
            },
            {
                id: 3,
                title: "Is a local guide mandatory?",
                desc: "Yes. A local guide is required for safety during jumping and sliding."
            },
            {
                id: 4,
                title: "What should I bring?",
                desc: "Swimwear, towel, change of clothes, and water shoes."
            },
            {
                id: 5,
                title: "Is this tour safe?",
                desc: "Yes. A safety briefing, professional guidance, and insurance are included."
            },
            {
                id:6,
                title:'Is hotel pickup and drop-off available in all areas of Bali?',
                desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
            },
        ],
    },
    {
        id: 9,
        slug: "mount-batur-sunrise-trekking",

        productData: {
            title: "Mount Batur Sunrise Trekking",
            place: "Bangli, Bali",
            desc: 
                [ 
                    "Mount Batur Sunrise Trekking is one of Bali’s most iconic experiences, offering breathtaking views of lakes, jungle, ocean, and mountains from the summit of an active volcano. This complete package includes round-trip hotel transfers, a licensed local trekking guide, flashlight, mineral water, and a light breakfast served at the top—so you can focus fully on enjoying the sunrise adventure.", 

                    "After reaching the summit around 6:00 AM, relax and enjoy breakfast while watching the sun rise over Bali. The journey continues with a visit to a local coffee plantation, where you can see how coffee is grown and enjoy a tasting of coffee or tea. With private transport, professional guidance, and all fees included, this trek is a safe, comfortable, and unforgettable way to start your day in Bali.",
                ]
        },

        images: [
            { src: "/images/activities/mount-batur-sunrise-trekking/1.jpg", alt: "Mount Batur Sunrise Trekking" },
            { src: "/images/activities/mount-batur-sunrise-trekking/2.jpg", alt: "Trekking View" },
            { src: "/images/activities/mount-batur-sunrise-trekking/3.jpg", alt: "Sunrise View" },
            { src: "/images/activities/mount-batur-sunrise-trekking/4.jpg", alt: "Trekking View Mount Batur" },
        ],

        tourDetailAbout: [
            { icon: "clock", name: "Duration", title: "10 Hours (Approx.)" },
            { icon: "activity", name: "Type", title: "Activity" },
            { icon: "users", name: "Group Size", title: "15 Peoples" },
            { icon: "globe", name: "Languages", title: "English" },
            { icon: "dollar", name: "Start Price", title: "From IDR 361.000" },
        ],

        highlightsData: [
            {
                icon: "mountain",
                title: "Mount Batur Sunrise Trek",
                desc: "Hike an active volcano with a licensed local guide."
            },
            {
                icon: "sunset",
                title: "Sunrise & Breakfast at the Summit",
                desc: "Enjoy sunrise views with a light breakfast on top."
            },
            {
                icon: "coffee",
                title: "Coffee Plantation Visit",
                desc: "Taste local coffee or tea after the trek."
            },
        ],

        itineraryData: [
            {
                time: "01:00 AM",
                title: "Hotel Pick-up",
                desc: "Pick-up by private air-conditioned car."
            },
            {
                time: "03:00 AM",
                title: "Arrival at Basecamp",
                desc: "Meet trekking guide and prepare."
            },
            {
                time: "03:30 AM",
                title: "Start Trekking",
                desc: "Begin hiking Mount Batur."
            },
            {
                time: "06:00 AM",
                title: "Summit & Sunrise",
                desc: "Watch sunrise and enjoy breakfast."
            },
            {
                time: "07:00 AM",
                title: "Descend to Basecamp",
                desc: "Trek back down safely."
            },
            {
                time: "09:00 AM",
                title: "Coffee Plantation Visit",
                desc: "Coffee or tea tasting."
            },
            {
                time: "10:00 AM",
                title: "Return Transfer",
                desc: "Drive back to hotel."
            },
            {
                time: "11:00 AM",
                title: "Arrive at Hotel",
                desc: "Tour ends."
            },
        ],

        inclusionsData: {
            included: [
                "Private air-conditioned hotel transfer (optional)",
                "Licensed trekking guide",
                "Summit breakfast",
                "Flashlight & mineral water",
                "Coffee/tea tasting (optional)",
                "All fees & taxes",
                "Insurance",
            ],
            excluded: [
                "Personal expenses",
            ],
        },

        faqData: [
            {
                id: 1,
                title: "What time does the tour start?",
                desc: "Hotel pick-up starts around 1:00 AM to catch the sunrise."
            },
            {
                id: 2,
                title: "Is trekking experience required?",
                desc: "No. The trek is suitable for beginners with a local guide."
            },
            {
                id: 3,
                title: "How long is the hike?",
                desc: "The hike takes around 1.5–2 hours each way."
            },
            {
                id: 4,
                title: "What should I bring?",
                desc: "Comfortable shoes, warm jacket, and personal items."
            },
            {
                id: 5,
                title: "Is hotel transfer included?",
                desc: "Yes, private hotel transfer is available as an optional service."
            },
            {
                id:6,
                title:'Is hotel pickup and drop-off available in all areas of Bali?',
                desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
            },
        ],
    },
    {
        id: 10,
        slug: "sea-walker-bali",

        productData: {
            title: "Sea Walker Bali",
            place: "Badung, Bali",
            desc: 
                [ 
                    "Sea Walker Bali is a fun and safe underwater experience for those who want to explore the ocean without swimming or getting their hair wet. Wearing a special diving helmet that supplies fresh air from the surface, you can walk along the sea floor and come face to face with colorful tropical fish. With professional instructors guiding you at all times, this activity is suitable even for beginners with no diving experience.", 

                    "The sea walking session lasts around 30 minutes at a depth of approximately 15 feet, allowing you to enjoy marine life up close and even feed the fish. Located at Bintang Beach Club Dive & Water Sport, this package includes safety equipment, locker use, insurance, and optional hotel transfers—making it an easy and memorable way to experience Bali’s underwater world.",
                ]
        },

        images: [
            { src: "/images/activities/sea-walker-bali/1.jpg", alt: "Sea Walker Bali" },
            { src: "/images/activities/sea-walker-bali/2.jpg", alt: "Underwater View" },
            { src: "/images/activities/sea-walker-bali/3.jpg", alt: "Sea Walker Experience" },
            { src: "/images/activities/sea-walker-bali/4.jpg", alt: "Marine Life Encounter" },
        ],

        tourDetailAbout: [
            { icon: "clock", name: "Duration", title: "4 Hours (Approx.)" },
            { icon: "activity", name: "Type", title: "Activity" },
            { icon: "users", name: "Group Size", title: "15 Peoples" },
            { icon: "globe", name: "Languages", title: "English" },
            { icon: "dollar", name: "Start Price", title: "From IDR 585.000" },
        ],

        highlightsData: [
            {
                icon: "walking",
                title: "Walk on the Ocean Floor",
                desc: "Explore the seabed using a special air-supplied helmet."
            },
            {
                icon: "fish",
                title: "Feed Tropical Fish",
                desc: "Get close and interact with colorful marine life."
            },
            {
                icon: "userCheck",
                title: "Safe & Beginner Friendly",
                desc: "Guided by professional instructors at all times."
            },
        ],

        itineraryData: [
            {
                time: "09:00 AM",
                title: "Arrival & Registration",
                desc: "Check-in and prepare at Bintang Beach Club."
            },
            {
                time: "09:30 AM",
                title: "Safety Briefing",
                desc: "Instruction by professional instructors."
            },
            {
                time: "10:00 AM",
                title: "Sea Walker Experience",
                desc: "30-minute underwater walking session."
            },
            {
                time: "11:00 AM",
                title: "Shower & Change",
                desc: "Use locker and shower facilities."
            },
            {
                time: "12:30 PM",
                title: "Tour Ends / Return Transfer",
                desc: "Optional hotel transfer."
            },
        ],

        inclusionsData: {
            included: [
                "Hotel return transfer (optional)",
                "Professional sea walker instructors",
                "Sea walker safety equipment",
                "30-minute sea walk",
                "Locker",
                "Insurance",
            ],
            excluded: [
                "Meals",
                "Photos",
            ],
        },

        faqData: [
            {
                id: 1,
                title: "Do I need swimming or diving experience?",
                desc: "No. Sea walking is suitable for beginners with no experience."
            },
            {
                id: 2,
                title: "How long does the sea walker session last?",
                desc: "The underwater walk lasts around 30 minutes."
            },
            {
                id: 3,
                title: "Is sea walking safe?",
                desc: "Yes. The activity is guided and monitored by professional instructors."
            },
            {
                id: 4,
                title: "Will my hair get wet?",
                desc: "Your face and hair usually stay dry during the activity."
            },
            {
                id: 5,
                title: "Is hotel transfer included?",
                desc: "Hotel transfer is available as an optional service."
            },
            {
                id:6,
                title:'Is hotel pickup and drop-off available in all areas of Bali?',
                desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
            },
        ],
    },
];

export const ticketsData = [
    {
        id: 1,
        slug: "bali-bird-park-ticket",

        productData: {
            title: "Bali Bird Park Ticket",
            place: "Gianyar, Bali",
            desc: 
                [ 
                    "Bali Bird Park Ticket is perfect for nature lovers and families who want to explore one of Bali’s finest bird sanctuaries at a relaxed pace. Home to around 1,000 birds from over 250 species, the park showcases a wide variety of tropical and rare birds, including macaws, toucans, cassowaries, eagles, pelicans, and the iconic Tiung bird. Educational bird shows and interactive performances make the visit both fun and informative.", 

                    "This package includes entrance tickets and access to all bird shows, with private round-trip hotel transfers from Ubud and much of south Bali available (optional). Flexible departure times allow you to plan your visit easily and enjoy Bali Bird Park without rushing, making it an ideal activity for all ages.",
                ]
        },

        images: [
            { src: "/images/tickets/bali-bird-park-ticket/1.jpg", alt: "Bali Bird Park" },
            { src: "/images/tickets/bali-bird-park-ticket/2.jpg", alt: "Bali Bird Park Bird" },
            { src: "/images/tickets/bali-bird-park-ticket/3.jpg", alt: "Bali Bird Park and People" },
            { src: "/images/tickets/bali-bird-park-ticket/4.jpg", alt: "Bali Bird Park Feeding" },
        ],

        tourDetailAbout: [
            { icon: "clock", name: "Duration", title: "6 Hours (Approx.)" },
            { icon: "activity", name: "Type", title: "Ticket" },
            { icon: "users", name: "Group Size", title: "15 Peoples" },
            { icon: "globe", name: "Languages", title: "English" },
            { icon: "dollar", name: "Start Price", title: "From IDR 655.000" },
        ],

        highlightsData: [
            {
                icon: "bird",
                title: "Home to 1,000+ Birds",
                desc: "Discover tropical and rare bird species from around the world."
            },
            {
                icon: "feather",
                title: "Educational Bird Shows",
                desc: "Enjoy interactive and informative bird performances."
            },
            {
                icon: "users",
                title: "Family-Friendly Experience",
                desc: "A relaxed and fun activity for all ages."
            },
        ],

        itineraryData: [
            {
                time: "09:00 AM",
                title: "Hotel Pick-up (Optional)",
                desc: "Private transfer to Bali Bird Park."
            },
            {
                time: "10:00 AM",
                title: "Arrival at Bali Bird Park",
                desc: "Entrance and registration."
            },
            {
                time: "10:15 AM",
                title: "Explore the Park",
                desc: "Discover bird zones and habitats."
            },
            {
                time: "12:00 PM",
                title: "Bird Shows",
                desc: "Watch educational bird performances."
            },
            {
                time: "01:00 PM",
                title: "Free Time",
                desc: "Explore more or relax."
            },
            {
                time: "02:00 PM",
                title: "Return Transfer",
                desc: "Optional hotel drop-off."
            },
            {
                time: "03:00 PM",
                title: "Arrive at Hotel",
                desc: "Tour ends."
            },
        ],

        inclusionsData: {
            included: [
                "Hotel transfer (optional)",
                "Government tax & service charge",
                "Entrance ticket",
                "All bird shows",
            ],
            excluded: [
                "Meals",
                "Personal expenses",
            ],
        },

        faqData: [
            {
                id: 1,
                title: "Is this tour suitable for children?",
                desc: "Yes. Bali Bird Park is family-friendly and ideal for kids."
            },
            {
                id: 2,
                title: "How long should I spend at Bali Bird Park?",
                desc: "Most visitors spend around 3–4 hours exploring the park."
            },
            {
                id: 3,
                title: "Are bird shows included?",
                desc: "Yes. All scheduled bird shows are included in the ticket."
            },
            {
                id: 4,
                title: "Is hotel transfer included?",
                desc: "Hotel transfer is available as an optional service."
            },
            {
                id: 5,
                title: "Can I explore the park freely?",
                desc: "Yes. You can explore the park at your own pace."
            },
            {
                id:6,
                title:'Is hotel pickup and drop-off available in all areas of Bali?',
                desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
            },
        ],
    },
];

export const packages = [
    {
        id:1,
        image:'/images/listing/1.jpg',
        place:'Klungkung, Bali',
        title:'Nusa Penida Day Tour',
        amount:'From IDR 1.100.000'
    },
    {
        id:2,
        image:'/images/listing/2.jpg',
        place:'Italy',
        title:'Tour in New York',
        amount:'$ 58 / Day'
    },
    {
        id:3,
        image:'/images/listing/3.jpg',
        place:'Maldivas',
        title:'Discover Greece',
        amount:'$ 58 / Day'
    },
    {
        id:4,
        image:'/images/listing/4.jpg',
        place:'USA',
        title:'Museum of Modern Art',
        amount:'$ 58 / Day'
    },
    {
        id:5,
        image:'/images/listing/5.jpg',
        place:'Bali',
        title:'Peek Mountain View',
        amount:'$ 58 / Day'
    },
    {
        id:6,
        image:'/images/listing/6.jpg',
        place:'Bangkok',
        title:'Hot Baloon Journey',
        amount:'$ 58 / Day'
    },
    {
        id:7,
        image:'/images/listing/7.jpg',
        place:'Singapore',
        title:'Orca Camp Kayaking Trip',
        amount:'$ 58 / Day'
    },
    {
        id:8,
        image:'/images/listing/8.jpg',
        place:'Thailand',
        title:'Caño Cristales River Trip',
        amount:'$ 58 / Day'
    },
    {
        id:9,
        image:'/images/listing/9.jpg',
        place:'Pattaya',
        title:'Osa Peninsula to Dominical',
        amount:'$ 58 / Day'
    },
    {
        id:10,
        image:'/images/listing/10.jpg',
        place:'Lakshadweep',
        title:'History of The Emporer',
        amount:'$ 58 / Day'
    },
    {
        id:11,
        image:'/images/listing/11.jpg',
        place:'Paris',
        title:'Wildness of Paris',
        amount:'$ 58 / Day'
    },
    {
        id:12,
        image:'/images/listing/12.jpg',
        place:'London',
        title:'The Hills and Mountains',
        amount:'$ 58 / Day'
    },
]

export const allPackages = [
    {
        id:1,
        image: '/images/tours/nusa-penida-day-tour/1.webp',        
        place: 'Klungkung, Bali',
        title: 'Nusa Penida Day Tour',
        amount:'1.100.000',
        route: '/tours/nusa-penida-day-tour',
    },
    {
        id:2,
        image: '/images/activities/bali-quad-atv/1.webp', 
        place: 'Gianyar, Bali',
        title: 'Bali Quad ATV',
        amount:'1.353.000',
        route: '/activities/bali-quad-atv',
    },
    {
        id:3,
        image: '/images/activities/blue-lagoon-snorkeling/1.webp',
        place: 'Karangasem, Bali',
        title: 'Blue Lagoon Snorkeling',
        amount:'685.000',
        route: '/activities/blue-lagoon-snorkeling',
    },
    {
        id:4,
        image: '/images/activities/ayung-river-rafting/1.webp',       
        place: 'Gianyar, Bali',
        title: 'Ayung River Rafting',
        amount:'502.000',
        route: '/activities/ayung-river-rafting',
    },
    {
        id:5,
        image: '/images/tours/gates-of-heaven-tour/1.webp',  
        place: 'Karangasem, Bali',
        title: 'Gates of Heaven Tour',
        amount:'601.000',
        route: '/tours/gates-of-heaven-tour',
    },
    {
        id:6,
        image: '/images/tours/tanah-lot-sunset-tour/1.webp',
        place: 'Tabanan, Bali',
        title: 'Tanah Lot Sunset Tour',
        amount:'327.000',
        route: '/tours/tanah-lot-sunset-tour',
    },
    {
        id:7,
        image: '/images/tours/east-of-nusa-penida-day-tour/1.jpg',
        place: 'Klungkung, Bali',
        title: 'East of Nusa Penida Day Tour',
        amount:'1.281.000',
        route: '/tours/east-of-nusa-penida-day-tour',
    },
    {
        id:8,
        image: '/images/tours/bali-private-car-hire/1.jpg',
        place: 'Bali',
        title: 'Bali Private Car Hire',
        amount:'257.000',
        route: '/tours/bali-private-car-hire',
    },
    {
        id:9,
        image: '/images/tours/uluwatu-sunset-tour/1.jpg',
        place: 'Badung, Bali',
        title: 'Uluwatu Sunset Tour',
        amount:'299.000',
        route: '/tours/uluwatu-sunset-tour',
    },
    {
        id:10,
        image: '/images/tours/ubud-tanah-lot-tour/1.jpg',
        place: 'Tabanan-Ubud, Bali',
        title: 'Ubud Tanah Lot Tour',
        amount:'377.000',
        route: '/tours/ubud-tanah-lot-tour',
    },
    {
        id:11,
        image: '/images/tours/bali-dolphin-tour/1.jpg',
        place: 'Buleleng, Bali',
        title: 'Bali Dolphin Tour',
        amount:'702.000',
        route: '/tours/bali-dolphin-tour',
    },
    {
        id:12,
        image: '/images/tours/bali-romantic-tour/1.jpg',
        place: 'Badung, Bali',
        title: 'Bali Romantic Tour',
        amount:'394.000',
        route: '/tours/bali-romantic-tour',
    },
    {
        id:13,
        image: '/images/tours/ubud-highlights-tour/1.jpg',
        place: 'Gianyar, Bali',
        title: 'Ubud Highlights Tour',
        amount:'411.000',
        route: '/tours/ubud-highlights-tour',
    },
    {
        id:14,
        image: '/images/activities/bali-quad-bike-and-rafting/1.jpg',
        place: 'Gianyar, Bali',
        title: 'Bali Quad Bike and Rafting',
        amount:'1.202.000',
        route: '/activities/bali-quad-bike-and-rafting',
    },
    {
        id:15,
        image: '/images/activities/tulamben-diving/1.jpg',
        place: 'Karangasem, Bali',
        title: 'Tulamben Diving',
        amount:'1.099.000',
        route: '/activities/tulamben-diving',
    },
    {
        id:16,
        image: '/images/activities/bali-paintball/1.jpg',
        place: 'Badung, Bali',
        title: 'Bali Paintball',
        amount:'670.000',
        route: '/activities/bali-paintball',
    },
    {
        id:17,
        image: '/images/activities/bali-water-sports-package/1.jpg',
        place: 'Badung, Bali',
        title: 'Bali Water Sports Package',
        amount:'859.000',
        route: '/activities/bali-water-sports-package',
    },
    {
        id:18,
        image: '/images/activities/jumping-sliding-aling-aling-waterfall/1.jpg',
        place: 'Buleleng, Bali',
        title: 'Jumping & Sliding at Aling Aling Waterfall',
        amount:'781.000',
        route: '/activities/jumping-sliding-aling-aling-waterfall',
    },
    {
        id:19,
        image: '/images/activities/mount-batur-sunrise-trekking/1.jpg',
        place: 'Bangli, Bali',
        title: 'Mount Batur Sunrise Trekking',
        amount:'361.000',
        route: '/activities/mount-batur-sunrise-trekking',
    },
    {
        id:20,
        image: '/images/activities/sea-walker-bali/1.jpg',
        place: 'Badung, Bali',
        title: 'Sea Walker Bali',
        amount:'585.000',
        route: '/activities/sea-walker-bali',
    },
    {
        id:21,
        image: '/images/tickets/bali-bird-park-ticket/1.jpg',
        place: 'Gianyar, Bali',
        title: 'Bali Bird Park Ticket',
        amount:'655.000',
        route: '/tickets/bali-bird-park-ticket',
    },
]

export const tourPackages = [
    {
        id:1,
        slug: 'nusa-penida-day-tour',
        images: [
            '/images/tour-packages/nusa-penida-day-tour/1.webp',
            '/images/tour-packages/nusa-penida-day-tour/2.webp',
            '/images/tour-packages/nusa-penida-day-tour/3.webp',
            '/images/tour-packages/nusa-penida-day-tour/4.webp',
        ],
        place:'Nusa Penida, Bali',
        title:'Nusa Penida Day Tour',
        amount:'IDR 1.100.000',
        duration: '8 hours',
        type: 'Adventure',
        grupSize: '15',
    },
    {
        id:2,
        slug: 'bali-quad-atv',
        images: [
            '/images/tour-packages/bali-quad-atv/1.webp',
            '/images/tour-packages/bali-quad-atv/2.webp',
            '/images/tour-packages/bali-quad-atv/3.webp',
            '/images/tour-packages/bali-quad-atv/4.webp',
        ],
        place:'Ubud, Bali',
        title:'Bali Quad ATV',
        amount:'IDR 540.000',
        duration: '6 hours',
        type: 'Adventure',
        grupSize: '15',
    },
    {
        id:3,
        slug: 'blue-lagoon-snorkeling',
        images: [
            '/images/tour-packages/blue-lagoon-snorkeling/1.webp',
            '/images/tour-packages/blue-lagoon-snorkeling/2.webp',
            '/images/tour-packages/blue-lagoon-snorkeling/3.webp',
            '/images/tour-packages/blue-lagoon-snorkeling/4.webp',
        ],
        place:'Karangasem, Bali',
        title:'Blue Lagoon Snorkeling',
        amount:'IDR 580.000',
        duration: '6 hours',
        type: 'Adventure',
        grupSize: '15',
    },
    {
        id:4,
        slug: 'ayung-river-rafting',
        images: [
            '/images/tour-packages/ayung-river-rafting/1.webp',
            '/images/tour-packages/ayung-river-rafting/2.webp',
            '/images/tour-packages/ayung-river-rafting/3.webp',
            '/images/tour-packages/ayung-river-rafting/4.webp',
        ],
        place:'Ubud, Bali',
        title:'Ayung River Rafting',
        amount:'IDR 470.000',
        duration: '6 hours',
        type: 'Adventure',
        grupSize: '15',
    },
    {
        id:5,
        slug: 'gates-of-heaven-tour',
        images: [
            '/images/tour-packages/lempuyang-tour/1.webp',
            '/images/tour-packages/lempuyang-tour/2.webp',
            '/images/tour-packages/lempuyang-tour/3.webp',
            '/images/tour-packages/lempuyang-tour/4.webp',
        ],
        place:'Karangasem, Bali',
        title:'Gates of Heaven Tour',
        amount:'IDR 1.500.000',
        duration: '6 hours',
        type: 'Adventure',
        grupSize: '15',
    },
    {
        id:6,
        slug: 'tanah-lot-sunset-tour',
        images: [
            '/images/tour-packages/tanah-lot-sunset-tour/1.webp',
            '/images/tour-packages/tanah-lot-sunset-tour/2.webp',
            '/images/tour-packages/tanah-lot-sunset-tour/3.webp',
            '/images/tour-packages/tanah-lot-sunset-tour/4.webp',
        ],
        place:'Tabanan, Bali',
        title:'Tanah Lot Sunset Tour',
        amount:'IDR 700.000',
        duration: '6 hours',
        type: 'Adventure',
        grupSize: '15',
    },
]

export const ClientData = [
    {
        image:'/images/client/01.jpg',
        desc:'"Good activity with the best taxi driver Yogik an handsome guy he help us and he try his best to make us a good activity !!!!!!!"',
        name:'Calvin Carlo',
        possition:'Traveler'
    },
    {
        image:'/images/client/02.jpg',
        desc:'"Everything was perfect and on time. No surprises and great value. Everything was as described. Picked up on time. Everyone very professional"',
        name:'Christa Smith',
        possition:'Traveler'
    },
    {
        image:'/images/client/03.jpg',
        desc:'"Should a fab day with Bawa he drove us all day and showed us the real Bali after a lovely snorkeling trip. Will keep his number and use again.Thanks so much "',
        name:'Jemina CLone',
        possition:'Traveler'
    },
    {
        image:'/images/client/04.jpg',
        desc:'"Good tours experience with yogik astra he was very smart explain about bali culture and always helpfull, i really high recommended him thank you yogik"',
        name:'Smith Vodka',
        possition:'Traveler'
    },
    {
        image:'/images/client/05.jpg',
        desc:'"We had Mr Merry as our driver, we had so much fun, he was very knowledgeable and helpful. He was friendly, enthusiastic and easy to talk to. We had a great day exploring Ubud!"',
        name:'Cristino Murfi',
        possition:'Traveler'
    },
    {
        image:'/images/client/06.jpg',
        desc:'"John was a great driver. We felt safe, the whole time.. He gave us much informations about culture and traditions of Bali. Thanks for driving."',
        name:'Cristino Murfi',
        possition:'Traveler'
    },
]

export const blogData = [
    {
        id: 1,
        title: "Nusa Penida Day Tour: Must-Visit Spots and Travel Tips",
        slug: "nusa-penida-day-tour-travel-tips",
        image: "/images/blog/nusa-penida.jpg",
        date: "January 15, 2026",
        author: "Rukmana Bali Tour",
        excerpt:
        "Explore the highlights of Nusa Penida in one day. Discover must-visit spots and useful travel tips for a smooth and unforgettable trip.",
        content: [
        {
            type: "paragraph",
            text: "Nusa Penida is one of Bali’s most breathtaking destinations, known for its dramatic cliffs, turquoise waters, and untouched natural beauty. Located just a short boat ride from mainland Bali, this island offers an unforgettable escape for travelers who want to experience Bali beyond the usual tourist spots. A Nusa Penida Day Tour is the perfect way to explore the highlights of the island in a single day—comfortably and efficiently."
        },

        {
            type: "heading",
            text: "Why Choose a Nusa Penida Day Tour?"
        },
        {
            type: "paragraph",
            text: "With limited time during your Bali holiday, a day tour allows you to visit the most iconic locations without the stress of planning transportation, routes, or schedules. By joining a guided day tour, you can focus on enjoying the scenery while experienced local guides handle the logistics. This is especially ideal for first-time visitors who want a smooth and well-organized experience."
        },

        {
            type: "heading",
            text: "Must-Visit Spots on a Nusa Penida Day Tour"
        },

        {
            type: "heading",
            text: "1. Kelingking Beach"
        },
        {
            type: "paragraph",
            text: "Often referred to as the “T-Rex Cliff,” Kelingking Beach is the most famous landmark in Nusa Penida. From the viewpoint, you’ll enjoy a stunning panoramic view of the cliff shaped like a dinosaur overlooking crystal-clear waters. For adventurous travelers, a hike down to the beach offers an even more rewarding experience."
        },

        {
            type: "heading",
            text: "2. Broken Beach (Pasih Uug)"
        },
        {
            type: "paragraph",
            text: "Broken Beach features a unique natural arch formed by the collapse of a limestone cave. The circular cove and calm blue waters make this spot perfect for photos and sightseeing. Although swimming is not allowed here, the scenery alone is worth the visit."
        },

        {
            type: "heading",
            text: "3. Angel’s Billabong"
        },
        {
            type: "paragraph",
            text: "Located near Broken Beach, Angel’s Billabong is a natural infinity pool formed by the ocean tides. On calm days, visitors can enjoy the clear water and admire the beautiful rock formations. Always follow your guide’s instructions, as waves can be unpredictable."
        },

        {
            type: "heading",
            text: "4. Crystal Bay"
        },
        {
            type: "paragraph",
            text: "Crystal Bay is one of the best places on the island to relax and enjoy the beach. With its white sand and clear water, it’s a great spot for swimming, snorkeling, or simply unwinding after exploring the island’s cliffs."
        },

        {
            type: "heading",
            text: "Helpful Travel Tips for Nusa Penida"
        },
        {
            type: "list",
            items: [
            "Start early to maximize your time and avoid crowds",
            "Wear comfortable clothing and sturdy shoes",
            "Bring sunscreen, a hat, and drinking water",
            "Respect nature and local culture at all times",
            "Choose a reliable and professional tour operator"
            ]
        },

        {
            type: "quote",
            text: "Travel is not only about visiting places, but about creating meaningful memories — and Bali is the perfect place to start that journey."
        },

        {
            type: "heading",
            text: "Explore Nusa Penida with Rukmana Bali Tour"
        },
        {
            type: "paragraph",
            text: "With Rukmana Bali Tour, your Nusa Penida Day Tour is designed for comfort, safety, and unforgettable experiences. Our private and guided tours include experienced drivers, local insights, and flexible itineraries tailored to your travel style. Whether you’re traveling solo, with a partner, or as a family, we ensure every moment of your journey is enjoyable and hassle-free."
        },

        {
            type: "heading",
            text: "Final Thoughts"
        },
        {
            type: "paragraph",
            text: "A Nusa Penida Day Tour is more than just a sightseeing trip—it’s a chance to connect with Bali’s raw natural beauty. From iconic cliffs to tranquil beaches, Nusa Penida offers a perfect balance of adventure and relaxation. Let Rukmana Bali Tour take you there and turn your day trip into a truly memorable experience."
        }
        ]
    },
    {
        id: 2,
        title: "Essential Travel Tips for Visiting Bali: What Every Tourist Should Know",
        slug: "essential-travel-tips-for-visiting-bali",
        image: "/images/blog/bali-travel-tips.jpg",
        date: "January 18, 2026",
        author: "Rukmana Bali Tour",
        excerpt:
            "Discover essential travel tips for visiting Bali, from transportation and local culture to the best time to explore the island comfortably and safely.",
        content: [
            {
            type: "paragraph",
            text: "Bali is one of the most popular travel destinations in the world, offering stunning beaches, rich culture, and breathtaking natural landscapes. However, to truly enjoy everything the island has to offer, travelers need proper preparation. Understanding local customs, transportation options, and travel planning can make your Bali trip smoother and more memorable."
            },
            {
            type: "heading",
            text: "Plan Your Itinerary Wisely"
            },
            {
            type: "paragraph",
            text: "Bali may look small on the map, but travel time between destinations can be longer than expected due to traffic and road conditions. Planning your itinerary based on location and travel distance helps avoid unnecessary stress and maximizes your time exploring the island."
            },
            {
            type: "paragraph",
            text: "Many travelers choose private tours to enjoy flexible schedules and comfortable transportation. With local experience across Bali, Rukmana Bali Tour helps travelers design efficient routes and well-balanced day tours suited to their interests."
            },
            {
            type: "heading",
            text: "Understand Local Culture and Etiquette"
            },
            {
            type: "paragraph",
            text: "Balinese culture is deeply rooted in tradition and spirituality. When visiting temples, wearing modest clothing and respecting local rules is essential. Simple gestures, such as being polite and respectful during ceremonies, go a long way in creating positive interactions with locals."
            },
            {
            type: "heading",
            text: "Choose the Right Transportation"
            },
            {
            type: "paragraph",
            text: "Getting around Bali can be challenging for first-time visitors. Hiring a private car with an experienced local driver is one of the safest and most convenient ways to explore the island, especially when visiting multiple destinations in one day."
            },
            {
            type: "paragraph",
            text: "Travelers who explore Bali with Rukmana Bali Tour benefit from air-conditioned vehicles, knowledgeable drivers, and local insights that enhance the overall travel experience."
            },
            {
            type: "heading",
            text: "Best Time to Visit Bali"
            },
            {
            type: "paragraph",
            text: "The dry season from April to October is considered the best time to visit Bali, offering sunny days and ideal conditions for outdoor activities. Starting your tours early in the morning also helps avoid crowds at popular attractions."
            },
            {
            type: "heading",
            text: "Stay Safe and Travel Comfortably"
            },
            {
            type: "list",
            items: [
                "Always carry sunscreen, drinking water, and a hat during outdoor activities",
                "Wear comfortable shoes for walking and temple visits",
                "Respect local traffic rules and customs",
                "Follow guidance from local drivers and tour guides for a safer journey"
            ]
            },
            {
            type: "heading",
            text: "Make Your Bali Trip More Meaningful"
            },
            {
            type: "paragraph",
            text: "Exploring Bali is not just about visiting destinations, but about experiencing the island comfortably and respectfully. With local expertise and personalized service, Rukmana Bali Tour helps travelers enjoy Bali with confidence, comfort, and unforgettable memories."
            },
            {
            type: "quote",
            text: "A well-planned journey allows you to experience Bali not just as a destination, but as a story worth remembering."
            }
        ]
    },
    {
        id: 3,
        title: "First Time in Bali? Practical Tips to Enjoy a Smooth and Memorable Holiday",
        slug: "first-time-in-bali-practical-travel-tips",
        image: "/images/blog/first-time-bali.jpg",
        date: "January 20, 2026",
        author: "Rukmana Bali Tour",
        excerpt:
            "Visiting Bali for the first time? Discover practical travel tips to help you enjoy a smooth, comfortable, and memorable holiday on the Island of the Gods.",
        content: [
            {
            type: "paragraph",
            text: "Bali is a dream destination for many travelers, especially first-time visitors seeking beautiful beaches, cultural experiences, and relaxing tropical vibes. While the island is welcoming and easy to explore, having the right travel knowledge can make your first Bali holiday far more enjoyable and stress-free."
            },
            {
            type: "heading",
            text: "Start with a Simple and Realistic Itinerary"
            },
            {
            type: "paragraph",
            text: "One of the most common mistakes first-time visitors make is trying to see too much in a short amount of time. Bali offers diverse landscapes—from beaches and rice terraces to temples and waterfalls—so it’s best to focus on a few key areas rather than rushing between distant locations."
            },
            {
            type: "paragraph",
            text: "Many travelers choose guided day tours or private drivers to ensure smoother travel between destinations. With local knowledge and flexible planning, Rukmana Bali Tour helps first-time visitors enjoy Bali at a comfortable pace."
            },
            {
            type: "heading",
            text: "Choose Comfortable Transportation"
            },
            {
            type: "paragraph",
            text: "Getting around Bali can be confusing for newcomers, especially with traffic conditions and unfamiliar roads. Renting a scooter may seem appealing, but it’s not always ideal for first-time visitors."
            },
            {
            type: "paragraph",
            text: "Hiring a private car with an experienced local driver allows you to travel safely and comfortably while learning about Bali from someone who truly understands the island. This option is especially convenient for families, couples, and travelers with limited time."
            },
            {
            type: "heading",
            text: "Learn Basic Local Etiquette"
            },
            {
            type: "paragraph",
            text: "Balinese culture is deeply spiritual and respectful. When visiting temples, dress modestly and follow local guidelines. Simple gestures like smiling, being polite, and respecting ceremonies help create positive interactions with local communities."
            },
            {
            type: "heading",
            text: "Prepare for Bali’s Climate"
            },
            {
            type: "paragraph",
            text: "Bali has a tropical climate with warm temperatures year-round. Lightweight clothing, sunscreen, comfortable walking shoes, and reusable water bottles are essential for daily activities. Planning tours earlier in the day can also help avoid midday heat."
            },
            {
            type: "heading",
            text: "Explore Bali with Local Insight"
            },
            {
            type: "paragraph",
            text: "Experiencing Bali goes beyond visiting popular attractions—it’s about understanding the stories, traditions, and lifestyle of the island. Traveling with a local guide adds depth to your journey and helps you discover hidden gems often missed by first-time visitors."
            },
            {
            type: "paragraph",
            text: "With years of experience welcoming travelers from around the world, Rukmana Bali Tour offers personalized tours that focus on comfort, safety, and authentic experiences—perfect for those visiting Bali for the first time."
            },
            {
            type: "heading",
            text: "Practical Tips for First-Time Travelers"
            },
            {
            type: "list",
            items: [
                "Avoid overpacking your itinerary and allow time to relax",
                "Use cash for small local purchases and markets",
                "Respect temple rules and local customs",
                "Start tours early to avoid crowds",
                "Choose trusted local tour services for peace of mind"
            ]
            },
            {
            type: "quote",
            text: "Your first trip to Bali is not just a holiday—it’s the beginning of unforgettable memories shaped by comfort, culture, and connection."
            }
        ]
    },
];

export const blogData2 = [
    {
        id:1,
        image:'/images/blog/1.jpg',
        date:'13th Sep 2024',
        title:'This Spanish city is a feast for the eyes: Travosy',
        desc:'This is required when, for example, the final text is not yet available.',
        tag:'Travel'
    },
    {
        id:2,
        image:'/images/blog/2.jpg',
        date:'29th Nov 2024',
        title:'New Zealand’s South Island brims with majestic',
        desc:'This is required when, for example, the final text is not yet available.',
        tag:'Tour'
    },
    {
        id:3,
        image:'/images/blog/3.jpg',
        date:'29th Dec 2024',
        title:'When you visit the Eternal Rome City: Travosy',
        desc:'This is required when, for example, the final text is not yet available.',
        tag:'Tourist'
    },
    {
        id:4,
        image:'/images/blog/4.jpg',
        date:'13th March 2024',
        title:'My Story When I Backpacked Around The World',
        desc:'This is required when, for example, the final text is not yet available.',
        tag:'Flight'
    },
    {
        id:5,
        image:'/images/blog/5.jpg',
        date:'5th May 2024',
        title:'Organization of accounting at the enterprise',
        desc:'This is required when, for example, the final text is not yet available.',
        tag:'Arab'
    },
    {
        id:6,
        image:'/images/blog/6.jpg',
        date:'19th June 2024',
        title:'Three of the Best Day Trips to Make from Francisco',
        desc:'This is required when, for example, the final text is not yet available.',
        tag:'Dubai'
    },
    {
        id:7,
        image:'/images/blog/7.jpg',
        date:'20th June 2024',
        title:'Why Do People Travel ? Reasons People Travel in 2023',
        desc:'This is required when, for example, the final text is not yet available.',
        tag:'Maldivas'
    },
    {
        id:8,
        image:'/images/blog/8.jpg',
        date:'31st Aug 2024',
        title:'Jungles In Australia: Vermont’s Rugged, Retro Ski Mountain',
        desc:'This is required when, for example, the final text is not yet available.',
        tag:'News'
    },
    {
        id:9,
        image:'/images/blog/9.jpg',
        date:'1st Sep 2024',
        title:'Traveller Visiting Ice Cave With Amazing Eye-catching Scenes',
        desc:'This is required when, for example, the final text is not yet available.',
        tag:'Packages'
    },
]

export const footerSocial = [
    {
        icon:FiFacebook,
        link:'https://www.facebook.com/rukmanabalitour'
    },
    {
        icon:FiInstagram,
        link:'https://www.instagram.com/rukmanabalitour/'
    },
    {
        icon:FaTiktok,
        link:'https://www.tiktok.com/@rukmanabalitour'
    },
]

export const footerCompany = [
    {
        name:'About us',
        link:'/aboutus'
    },
    {
        name:'Blogs',
        link:'/blogs'
    },
]

export const placeImage = [
    '/images/listing/1.jpg','/images/listing/2.jpg','/images/listing/3.jpg','/images/listing/4.jpg','/images/listing/5.jpg','/images/listing/6.jpg','/images/listing/7.jpg','/images/listing/8.jpg','/images/listing/9.jpg','/images/listing/10.jpg','/images/listing/11.jpg','/images/listing/2.jpg','/images/listing/4.jpg','/images/listing/4.jpg'
]

export const faqData = [
    {
        id:1,
        title:'How does it work ?',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        id:2,
        title:'Do I need a designer to use Travosy ?',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        id:3,
        title:'What do I need to do to start selling ?',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        id:4,
        title:'What happens when I receive an order ?',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        id:5,
        title:'How does it work ?',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
]

export const tourDetailAbout = [
    {
        icon: FiClock,
        name:'Duration',
        title:'2 day'
    },
    {
        icon: FiActivity,
        name:'Type',
        title:'Adventure'
    },
    {
        icon: FiUsers,
        name:'Group Size:',
        title:'50 Peoples'
    },
    {
        icon: FiGlobe,
        name:'Languages',
        title:'English'
    },
    {
        icon: FiDollarSign,
        name:'$50 / Person',
        title:'1 Day'
    },
]

export const teamData = [
    {
        image:'/images/client/04.jpg',
        name:'Jack John',
        possition:'Agent'
    },
    {
        image:'/images/client/05.jpg',
        name:'Krista John',
        possition:'Agent'
    },
    {
        image:'/images/client/06.jpg',
        name:'Roger Jackson',
        possition:'Agent'
    },
    {
        image:'/images/client/07.jpg',
        name:'Johnny English',
        possition:'Agent'
    },
]

export const paymentData = [
    {
        image:'/images/payments/visa.jpg',
        title:'Visa ending in 4578',
        date:'Expires in 13/03/2024'
    },
    {
        image:'/images/payments/american-express.jpg',
        title:'American Express ending in 4578',
        date:'Expires in 05/05/2024'
    },
    {
        image:'/images/payments/discover.jpg',
        title:'Discover ending in 4578',
        date:'Expires in 19/06/2024'
    },
    {
        image:'/images/payments/mastercard.jpg',
        title:'Master Card ending in 4578',
        date:'Expires in 20/06/2024'
    },
]

export const userSocialData = [
    {
        icon:FiTwitter,
        name:'Twitter',
        placeHolder:'Twitter Profile Name',
        desc:'Add your Twitter username (e.g. jesus).'
    },
    {
        icon:FiFacebook,
        name:'Facebook',
        placeHolder:'Facebook Profile Name',
        desc:'Add your Facebook username (e.g. jesus).'
    },
    {
        icon:FiInstagram,
        name:'Instagram',
        placeHolder:'Instagram Profile Name',
        desc:'Add your Instagram username (e.g. jesus).'
    },
    {
        icon:FiLinkedin,
        name:'Linkedin',
        placeHolder:'Linkedin Profile Name',
        desc:'Add your Linkedin username (e.g. jesus).'
    },
    {
        icon:FiYoutube,
        name:'Youtube',
        placeHolder:'Youtube url',
        desc:'Add your Youtube url.'
    },
]

export const helpAbout = [
    {
        icon:FiHelpCircle,
        title:'FAQs',
        desc:'The phrasal sequence of the is now so that many campaign and benefit',
        link:'/helpcenter-faqs'
    },
    {
        icon:FiBookmark,
        title:'Guides / Support',
        desc:'The phrasal sequence of the is now so that many campaign and benefit',
        link:'/helpcenter-guides'
    },
    {
        icon:FiSettings,
        title:'Support Request',
        desc:'The phrasal sequence of the is now so that many campaign and benefit',
        link:'/helpcenter-support'
    },
]

export const guidesData = [
    {
        title:'Getting started',
        subData:[
            'Deciding to purchase','List your space','Landing an experience or adventure','Top uses questions'
        ]
    },
    {
        title:'Your calendar',
        subData:[
            'Pricing & availability','Booking settings','Responding to enquiries & requests','Snoozing or deactivating your listing'
        ]
    },
    {
        title:'Your listings',
        subData:[
            'Updating your listing','Neighbourhoods','Listing photos & photography','Travosy Plus','API-connected software'
        ]
    },
    {
        title:'How payouts work',
        subData:[
            'Getting paid','Adding payout info','Your payout status','Donations','Taxes'
        ]
    },
    {
        title:'Your reservations',
        subData:[
            'Travosy safely','Travosy Experiences and Adventures','Changing a reservation','Cancelling a reservation','Long-term reservations'
        ]
    },
    {
        title:'Reservation help',
        subData:[
            'Help with a reservation or guest','Guest cancellations',
        ]
    },
    {
        title:'Your account',
        subData:[
            'Your profile','Account security','Identification & verifications','Reviews','Superhost status'
        ]
    },
]

export const restrictions = [
    'Digital Marketing Solutions for Tomorrow','Our Talented & Experienced Marketing Agency','Create your own skin to match your brand','Digital Marketing Solutions for Tomorrow','Our Talented & Experienced Marketing Agency','Create your own skin to match your brand'
]

export const blogSocial = [
    FiFacebook,FiInstagram,FiTwitter,FiLinkedin,FiGithub,FiYoutube,FiGitlab
]