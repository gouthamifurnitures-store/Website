
// GOWTHAMI FURNITURES - Content Management System (CMS) data file.
// Edit this file to change website content.

const cmsData = {
    company: {
        name: "GOUTHAMI FURNITURES",
        pricePrefix: "Starting From",
        logo: "images/logo.png", // Path to your logo image (e.g., "images/logo.png"). Leave empty to use text.
        tagline: "Elevate Your Living Space",
        description: "Since 2000",
        foundedYear: 1995,
        contact: {
            address: "3-147/3/1, Nizampet Rd, Venkatraya Nagar, Nizampet, Hyderabad, Telangana 500090",
            phone: "+91 93908 73545",
            email: "gouthamifurnitures@gmail.com",
            hours: "Mon - Sat: 10:00 AM - 9:00 PM\nSun: 11:00 AM - 6:00 PM"
        },
        social: {
            instagram: "https://www.instagram.com/gouthami_furnitures/",
            whatsapp: "https://wa.me/919390873545"
        },
        seo: {
            description: "Premium handcrafted furniture in Hyderabad. Discover timeless sofas, bedroom sets, and custom interior solutions at GOWTHAMI FURNITURES.",
            keywords: "furniture hyderabad, custom sofas, teak wood beds, luxury interiors nizampet",
            ogImage: "images/home-bg.jpg" // Image for social sharing
        },
        navigation: [
            { name: "Home", link: "index.html" },
            { name: "About", link: "about.html" },
            { name: "Products", link: "products.html" },

            { name: "Services", link: "services.html" },
            { name: "Contact", link: "contact.html" }
        ]
    },

    // HOME PAGE
    home: {
        heroTitle: "Elevate Your <br> <span style='color: var(--accent);'>Living Space</span>",
        heroSubtitle: "Crafting timeless furniture that blends artistry with comfort."
    },

    // ABOUT PAGE
    about: {
        title: "Our Story",
        subtitle: "From humble beginnings to your home's centerpiece.",
        blocks: [
            {
                title: "The Beginning",
                text: "GOWTHAMI FURNITURES started with a simple belief: furniture shouldn't just fill a space, it should define it. Founded in 1995, we began as a small workshop dedicated to the art of traditional woodworking."
            },
            {
                title: "Craftsmanship & Quality",
                text: "Over the decades, we have refined our techniques, blending old-world craftsmanship with modern innovation. Every piece that leaves our showroom is a testament to our obsession with detail and quality.<br><br>We source the finest materials, from reclaimed teak to premium italian leather, ensuring longevity and timeless beauty."
            }
        ],
        values: [
            { title: "Quality First", text: "We never compromise on materials or construction methods." },
            { title: "Sustainable", text: "Responsibly sourced wood and eco-friendly finishes." },
            { title: "Custom Design", text: "Tailored solutions to fit your unique space and style." }
        ]
    },

    // SERVICES PAGE
    services: [
        {
            icon: "✦",
            title: "Interior Consultation",
            text: "Our expert designers visit your space to recommend the best furniture layouts, styles, and materials that suit your lifestyle."
        },
        {
            icon: "🚚",
            title: "Safe Delivery",
            text: "We ensure your furniture reaches you in pristine condition with our specialized delivery team handling every piece with care."
        },
        {
            icon: "🛠️",
            title: "Customization",
            text: "Need a specific size or fabric? We offer extensive customization options to make sure your furniture fits perfectly."
        },
        {
            icon: "↺",
            title: "Restoration",
            text: "Bring your beloved antique furniture back to life with our expert restoration and reupholstery services."
        }
    ],

    // PRODUCTS PAGE
    // Add new products here! 
    // Copied images to 'images/' folder and reference them here.
    // =========================================
    // PRODUCTS SECTION
    // =========================================
    // Instructions:
    // 1. To add a new copy a {_id: "...", ...} block and paste it inside the [ ] brackets.
    // 2. To add items to a category, find the 'items: []' list inside that category.
    // 3. Make sure to keep commas ',' between items.

    products: [
        // --- CATEGORY: SOFAS ---
        {
            id: "sofa",
            title: "Sofas",
            description: "Experience the ultimate comfort with our handcrafted sofas, designed to be the centerpiece of your living room.",
            image: "images/sofa-product.jpg",

            // List of specific Sofa products starts here
            items: [
                {
                    name: "L-shape Sofa",
                    price: "₹85,000",
                    image: "Sofa/L-shape.jpg"
                },
                {
                    name: "Recliner Sofa",
                    price: "₹45,000",
                    image: "Sofa/Recliner.png"
                },
                {
                    name: "Sleeper Sofa",
                    price: "₹32,000",
                    image: "Sofa/Sleeper.png"
                },
                {
                    name: "Loveseat Sofa",
                    price: "₹60,000",
                    image: "Sofa/Loveseat.png"
                },
                {
                    name: "Cabriole Sofa",
                    price: "₹40,000",
                    image: "Sofa/Cabriole sofa.png"
                },
                {
                    name: "Lawson Sofa",
                    price: "₹38,000",
                    image: "Sofa/Lawson sofa.png"
                },
                {
                    name: "Tuxedo Sofa",
                    price: "₹50,000",
                    image: "Sofa/Tuxedo sofa.png"
                },
                {
                    name: "Fur sofa model 1",
                    price: "₹42,000",
                    image: "Sofa/Fur sofa model 1.png"
                },
                {
                    name: "Fur sofa model 2",
                    price: "₹44,000",
                    image: "Sofa/Fur sofa model 2.png"
                },
                {
                    name: "Fur sofa model 3",
                    price: "₹52,000",
                    image: "Sofa/Fur sofa model 3.png"
                },
                {
                    name: "Fur sofa model 4",
                    price: "₹55,000",
                    image: "Sofa/Fur sofa model 4.png"
                },
                {
                    name: "3+1+1 Pocket spring sofa",
                    price: "₹65,000",
                    image: "Sofa/3+1+1 Pocket spring sofa.png"
                },
                {
                    name: "3+1+1 model- G4",
                    price: "₹60,000",
                    image: "Sofa/3+1+1 model- G4.png"
                },
                {
                    name: "L shape model- g3",
                    price: "₹75,000",
                    image: "Sofa/L shape model- g3.png"
                },
                {
                    name: "L shape pocket spring sofa model 1",
                    price: "₹80,000",
                    image: "Sofa/L shape pocket spring sofa model 1.png"
                },
                {
                    name: "L shape pocket spring sofa model 2",
                    price: "₹80,000",
                    image: "Sofa/L shape pocket spring sofa model 2.png"
                },
                {
                    name: "L shape sofa model",
                    price: "₹70,000",
                    image: "Sofa/L shape sofa model.png"
                },
                {
                    name: "L shape sofa model 2",
                    price: "₹70,000",
                    image: "Sofa/L shape sofa model 2.png"
                },
                {
                    name: "L shape sofa model 3",
                    price: "₹70,000",
                    image: "Sofa/L shape sofa model 3.png"
                },
                {
                    name: "L shape sofa cum bed",
                    price: "₹85,000",
                    image: "Sofa/L shape sofa cum bed.png"
                },
                {
                    name: "Lounger sofa 1",
                    price: "₹55,000",
                    image: "Sofa/Lounger sofa 1.png"
                },
                {
                    name: "Lounger sofa 2",
                    price: "₹55,000",
                    image: "Sofa/Lounger sofa 2.png"
                },
                {
                    name: "Sofa cum bed",
                    price: "₹45,000",
                    image: "Sofa/Sofa cum bed.png"
                },
                {
                    name: "For More Designs",
                    price: "Visit Store",
                    image: "Sofa/For more.png"
                }
            ]
        },

        // --- CATEGORY: CHAIRS ---
        {
            id: "chair",
            title: "Chairs",
            description: "Ergonomic excellence meets artistic design in our versatile collection of chairs.",
            image: "images/chair-product.jpg",

            items: [
                {
                    name: "Accent Chair",
                    price: "₹12,000",
                    image: "Chair/Accent Chair.jpg"
                },
                {
                    name: "Arm Chair",
                    price: "₹4,500",
                    image: "Chair/Arm chair.jpg"
                },
                {
                    name: "Bar Chair",
                    price: "₹15,000",
                    image: "Chair/Bar Chair.jpg"
                },
                {
                    name: "Barrel Chair",
                    price: "₹8,000",
                    image: "Chair/Barrel chair.png"
                },
                {
                    name: "Club Plastic Arm Chair",
                    price: "₹2,500",
                    image: "Chair/Club Plastic Arm Chair.png"
                },
                {
                    name: "Recliner Chair",
                    price: "₹25,000",
                    image: "Chair/Recliner.jpg"
                },
                {
                    name: "Slipper Chair",
                    price: "₹6,000",
                    image: "Chair/Slipper chair.png"
                },
                {
                    name: "RRR Recliner chair",
                    price: "₹28,000",
                    image: "Chair/RRR Recliner chair.jpeg"
                },
                {
                    name: "Recliner chair",
                    price: "₹25,000",
                    image: "Chair/Recliner chair.png"
                },
                {
                    name: "For More Designs",
                    price: "Visit Store",
                    image: "Chair/For more.png"
                }
            ]
        },

        // --- CATEGORY: TABLES ---
        {
            id: "table",
            title: "Tables",
            description: "From coffee to console tables, find the perfect surface for your home.",
            image: "images/table-product.jpg",

            items: [
                {
                    name: "Accent Table",
                    price: "₹42,000",
                    image: "Table/Accent.png"
                },
                {
                    name: "Bar Table",
                    price: "₹15,000",
                    image: "Table/Bar table.png"
                },
                {
                    name: "Coffee Table",
                    price: "₹8,000",
                    image: "Table/Coffee.jpg"
                },
                {
                    name: "Console Table",
                    price: "₹14,500",
                    image: "Table/Console.png"
                },
                {
                    name: "Nesting Table",
                    price: "₹18,000",
                    image: "Table/Nesting tables.png"
                },
                {
                    name: "Pedestal Table",
                    price: "₹12,000",
                    image: "Table/Pedestal table.png"
                },
                {
                    name: "Side Table",
                    price: "₹5,500",
                    image: "Table/Side.png"
                },
                {
                    name: "For More Designs",
                    price: "Visit Store",
                    image: "Table/For more.png"
                }
            ]
        },

        // --- CATEGORY: DINING TABLES ---
        {
            id: "dining-table",
            title: "Dining Tables",
            description: "Elegant dining sets crafted for memorable meals and family gatherings.",
            image: "Dining Table/Marble dining table.png",

            items: [
                {
                    name: "1+4 marble dining table model 1",
                    price: "₹45,000",
                    image: "Dining Table/1+4 marble dining table model 1.png"
                },
                {
                    name: "1+4 marble dining table model 2",
                    price: "₹45,000",
                    image: "Dining Table/1+4 marble dining table model 2.png"
                },
                {
                    name: "1+4 marble dining table",
                    price: "₹42,000",
                    image: "Dining Table/1+4 marble dining table.png"
                },
                {
                    name: "1+4 wooden dining table",
                    price: "₹35,000",
                    image: "Dining Table/1+4 wooden dining table.png"
                },
                {
                    name: "Marble dining table",
                    price: "₹48,000",
                    image: "Dining Table/Marble dining table.png"
                },
                {
                    name: "Wooden dinning Table",
                    price: "₹32,000",
                    image: "Dining Table/wooden dinning Table.png"
                },
                {
                    name: "Standard Dining Table",
                    price: "₹25,000",
                    image: "Dining Table/Dining.png"
                },
                {
                    name: "For More Designs",
                    price: "Visit Store",
                    image: "Table/For more.png"
                }
            ]
        },

        // --- CATEGORY: OFFICE TABLES ---
        {
            id: "office-table",
            title: "Office Tables",
            description: "Professional desks designed for productivity and style.",
            image: "Office table/4×2 office table model 1.png",

            items: [
                {
                    name: "4×2 office table model 1",
                    price: "₹12,000",
                    image: "Office table/4×2 office table model 1.png"
                },
                {
                    name: "4×2 office table model 2",
                    price: "₹12,000",
                    image: "Office table/4×2 office table model 2.png"
                },
                {
                    name: "4×2 office table",
                    price: "₹12,000",
                    image: "Office table/4×2 office table.png"
                },
                {
                    name: "For More Designs",
                    price: "Visit Store",
                    image: "Table/For more.png"
                }
            ]
        },

        // --- CATEGORY: SHOE RACKS ---
        {
            id: "shoe-rack",
            title: "Shoe Racks",
            description: "Organize your footwear with our stylish and space-saving shoe racks, designed for modern homes.",
            image: "Shoe rack/Shoe rack.png",

            items: [
                {
                    name: "Standard Shoe Rack",
                    price: "₹5,500",
                    image: "Shoe rack/Shoe rack.png"
                },
                {
                    name: "Shoe rack model 2",
                    price: "₹6,500",
                    image: "Shoe rack/Shoe rack model 2.png"
                },
                {
                    name: "3 feet shoe rack",
                    price: "₹4,500",
                    image: "Shoe rack/3 feet shoe rack.png"
                },
                {
                    name: "Compact shoe rack",
                    price: "₹4,800",
                    image: "Shoe rack/3feet shoe rack.png"
                },
                {
                    name: "L-shape shoe rack",
                    price: "₹9,500",
                    image: "Shoe rack/L shape shoe rack.png"
                },
                {
                    name: "Shoe rack with cushion",
                    price: "₹8,500",
                    image: "Shoe rack/Shoe rack with cushion.png"
                },
                {
                    name: "For More Designs",
                    price: "Visit Store",
                    image: "Table/For more.png"
                }
            ]
        },

        // --- CATEGORY: CUPBOARDS ---
        {
            id: "cupboard",
            title: "Cupboards",
            description: "Elegant storage solutions that enhance your room's aesthetic while keeping it organized.",
            image: "images/cupboard-product.jpg",

            items: [
                {
                    name: "Base cabinet",
                    price: "₹25,000",
                    image: "Cupboard/Base cabinet.png"
                },
                {
                    name: "Corner cabinet",
                    price: "₹35,000",
                    image: "Cupboard/Corner cabinet.png"
                },
                {
                    name: "Hinged-door",
                    price: "₹28,000",
                    image: "Cupboard/Hinged-door.png"
                },
                {
                    name: "Medicine cabinet",
                    price: "₹28,000",
                    image: "Cupboard/Medicine cabinet.png"
                },
                {
                    name: "Pantry cabinet",
                    price: "₹28,000",
                    image: "Cupboard/Pantry cabinet.png"
                },
                {
                    name: "For More Designs",
                    price: "Visit Store",
                    image: "Cupboard/For more.png"
                }
            ]
        },

        // --- CATEGORY: BEDS ---
        {
            id: "bed",
            title: "Beds",
            description: "Transform your bedroom into a sanctuary with our luxurious bed frames.",
            image: "images/bed-product.jpg",

            items: [
                {
                    name: "Double Bed",
                    price: "₹35,000",
                    image: "Bed/Double Bed.png"
                },
                {
                    name: "King Size Bed",
                    price: "₹55,000",
                    image: "Bed/King Size Bed.png"
                },
                {
                    name: "Queen Size Bed",
                    price: "₹45,000",
                    image: "Bed/Queen Size Bed.png"
                },
                {
                    name: "Single Bed",
                    price: "₹15,000",
                    image: "Bed/Single Bed.png"
                },
                {
                    name: "Bunk Bed",
                    price: "₹25,000",
                    image: "Bed/Bunk Bed.png"
                },
                {
                    name: "Platform Bed",
                    price: "₹30,000",
                    image: "Bed/Platform Bed.png"
                },
                {
                    name: "Poster Bed",
                    price: "₹40,000",
                    image: "Bed/Poster Bed.png"
                },
                {
                    name: "Upholstered Bed",
                    price: "₹48,000",
                    image: "Bed/Upholstered Bed.png"
                },
                {
                    name: "Teakwood carving diwan",
                    price: "₹35,000",
                    image: "Bed/3×6 teakwood carving diwan.png"
                },
                {
                    name: "5×6 Engineering Wood cot",
                    price: "₹22,000",
                    image: "Bed/5×6 Engineering Wood cot.png"
                },
                {
                    name: "5×6 Wooden cot model g9",
                    price: "₹25,000",
                    image: "Bed/5×6 Wooden cot model g9.png"
                },
                {
                    name: "6×6 Complete Teakwood cot g11",
                    price: "₹55,000",
                    image: "Bed/6×6 Complete Teakwood cot g11.png"
                },
                {
                    name: "6×6 Complete Teakwood cot g12",
                    price: "₹58,000",
                    image: "Bed/6×6 Complete Teakwood cot g12.png"
                },
                {
                    name: "6×6 Hydraulic bed",
                    price: "₹65,000",
                    image: "Bed/6×6 Hydraulic bed.png"
                },
                {
                    name: "6×6 Teakwood with full cushion cot g15",
                    price: "₹62,000",
                    image: "Bed/6×6 Teakwood with full cushion cot g15.png"
                },
                {
                    name: "6×6 Wooden cot g14",
                    price: "₹38,000",
                    image: "Bed/6×6 Wooden cot g14.png"
                },
                {
                    name: "6×6 head box cot with storage model 1",
                    price: "₹45,000",
                    image: "Bed/6×6 head box cot with storage model 1.png"
                },
                {
                    name: "6×6 head box cot with storage model 2",
                    price: "₹45,000",
                    image: "Bed/6×6 head box cot with storage model 2.png"
                },
                {
                    name: "6×6 wooden cot g8",
                    price: "₹35,000",
                    image: "Bed/6×6 wooden cot g8.png"
                },
                {
                    name: "Diwan",
                    price: "₹25,000",
                    image: "Bed/Diwan.png"
                },
                {
                    name: "Vintage Teakwood cot",
                    price: "₹45,000",
                    image: "Bed/Vintage Teakwood cot.png"
                },
                {
                    name: "complete Teakwood cot",
                    price: "₹48,000",
                    image: "Bed/complete Teakwood cot.png"
                },
                {
                    name: "cot with head and bottom storage",
                    price: "₹42,000",
                    image: "Bed/cot with head and bottom storage.png"
                },
                {
                    name: "cushion cot",
                    price: "₹38,000",
                    image: "Bed/cushion cot.png"
                },
                {
                    name: "diwan cum bed",
                    price: "₹32,000",
                    image: "Bed/diwan cum bed.png"
                },
                {
                    name: "full Teakwood cot 1",
                    price: "₹40,000",
                    image: "Bed/full Teakwood cot 1.png"
                },
                {
                    name: "full Teakwood cot 2",
                    price: "₹40,000",
                    image: "Bed/full Teakwood cot 2.png"
                },
                {
                    name: "upholstery cot 1",
                    price: "₹45,000",
                    image: "Bed/upholstery cot 1.png"
                },
                {
                    name: "upholstery cot 2",
                    price: "₹45,000",
                    image: "Bed/upholstery cot 2.png"
                },
                {
                    name: "upholstery cot 3",
                    price: "₹45,000",
                    image: "Bed/upholstery cot 3.png"
                },
                {
                    name: "wooden cot",
                    price: "₹20,000",
                    image: "Bed/wooden cot.png"
                },
                {
                    name: "For More Designs",
                    price: "Visit Store",
                    image: "Bed/For more.png"
                }
            ]
        },

        // --- CATEGORY: MATTRESSES ---
        {
            id: "mattress",
            title: "Mattresses",
            description: "Sleep deeply and wake up refreshed on our premium orthopedic mattresses.",
            image: "images/mattress-product.jpg",

            items: [
                {
                    name: "Duroflex Mattress",
                    price: "₹12,000",
                    image: "Mattress/duroflex.png"
                },
                {
                    name: "Peps Mattress",
                    price: "₹10,000",
                    image: "Mattress/peps.png"
                },
                {
                    name: "Refresh Mattress",
                    price: "₹10,000",
                    image: "Mattress/refresh.png"
                },
                {
                    name: "Relaxwell Mattress",
                    price: "₹10,000",
                    image: "Mattress/relaxwell.png"
                },
                {
                    name: "Restolex Mattress",
                    price: "₹10,000",
                    image: "Mattress/restolex.png"
                },
                {
                    name: "For More Designs",
                    price: "Visit Store",
                    image: "Mattress/For more.png"
                }
            ]
        }
    ]
};