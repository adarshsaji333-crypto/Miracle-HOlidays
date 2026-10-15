import { SuiteItem, ExperienceItem, MenuItem, AttractionItem, GuestReview } from '../types';

export const RESORT_IMAGES = {
  logo: 'https://lh3.googleusercontent.com/aida/AEtjO1W4__7yk6l970ZojOQnkcQzfGL8T0ZTpIMifdSe-ke6N-ejjpkQdx1l7ED7PvXNy7QykoSw7WutpZJGIleuevzQRy6JSK4nDeZuZ10HKjouAiNrFPt1ngmIJeNxfbBifKjJnutRytkZLvg9XLEIwJSptNf4S8DT4fj5stzmQkvdx31o7p4ph3_sqERSBy8IGhAA3CCo_4wJGPRugbYgekV5qnpj86_cADPRWkIywpoFAhc1d9pWZpSDlTJr',
  aerialSanctuary: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGqmgRx5EusniD6gc7zylNc6QWCEw7XBFMRtCIeDonivRZ4hVCA7aD4fnhu1Ay_HHs_5ALERxV4hpYwmR84ODMFClt2-iaGUIy9wzqunFv966vgauzD0UV4mw2By5GjTBtzeYVLldYyyRa9UnQTz-pysrmvwwYLsuAaz575NX6HlF-U8ZrdrsZPUoZF-cDJ8IgAAD9daqq9s1pya_iuMtFEmTp2jgcfyGYHdULTl_--1kh51kMieiWYA',
  aerialMorning: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuq1cZYe-5lXhYpaUw-0pGT53KOOOljls4S8fYx6bzMNMAbSB9MqnnRcarlICACciBy1BkohKnLfCX7n6PPED7FazaY4YUbeZsPPR9vL9aHoNFRDO7oZy86nFdTYnWeu2I-dJP3tbZy9-SmeyS516eRWphncdSuNyo9cpjwKAv8a7aJswZtkUlqzRrncYZIbUfOFQWEkoSJnGZltlcjroR6jj_NdkYh08l6qf79-aoa4yjZftziwWZWQ',
  infinityPool: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5LXYB4-p_74ghkz5Uxjz4Ve2RQS16NbibgowiDK99cP9AH95OVvwFHMQfjmyCfvAazrDTBhdkmL2lIna37U6uLHOZBpH70Z5TkEal60WITtkz79x-gh0zVDIaHPAtOV3lyGkz57c2PtYGoTg9Cn9vhnLMII-UvFj79IG-FLwDzvxEDGkC63H6MAI6udXbK8cvieVr_3DcW42D1WX3L5NmJrKm_Ttlqcqu1Y0Xz8-3HYSZ9aSf-WS85Q',
  infinityPoolSecondary: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWVdQvly3RCls2CeeedaNY9TuqhBw55rye8eqrxiwt8P64pyWjkkjHpJdrUrkOa0EM-VDb3fZQsMtSwNV3UaTRMHUYpGv22DrzSDhbzSO-QNbqR3xVtOYKIRDFaiNZ6v8EZgMztHKu-f7s3YoJ5AyGPMJOC0UgDz4KzKSprDkUOxGFiJW1rEOFh6z6ywPUt5_8XPSVLYpR6To-VmnFVULeSSF32MNJwH8qwFFnfhhtxt2WCfIAXMWpmQ',
  blackberryVilla: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvnLRUZJibu12XOh5jy6I76_C1Zh3zGGsaD0hCiGJvnmsQm13onuLt80lbCQ4GnTzIPCHEDcE0FMzTGdZq-Py09FQI5OHhwsJIDVNgo0QiyYF93OHY4bGKk5g_7vZkTlWaiKJ2Yuuar8Yqm7iV9imt01ZArJmeUCbw26dYKxZodpbwWCEZJzSSga6LKw4dBnzj5EMV-roC4487LDIhpSgVd3t1MU8zt7emtdiw9epRTmxlbqN9N3_8tA',
  blackberryVillaAlt: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJN5XNB8_60rN_Lm_svkaTVzgdpJbBj3X-AI7ZuoAGH-sHNFmQA6S69924TNc5goMHS9z2VQRzFsz43cjWAbajuK4ajsNSmsQqD5CiPX1rIHLsuXI_4moTiplqqXZNBiMK6KAl4jOGYp72H_H8RwUR6vV8QFabUA-Iy28bPM7QPlD9zR-8S4mzRTYag1ZJjBr5xhgxX6sBbdhzK0yPGmHGINWdSVYVcqSB-gG2bQqptydw8VVr3m6s6w',
  blueberryGlasshouse: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAJ64o7ZYAYRoegNH9BtWZmH4I_d3FPjn_JZB7QALssmNdWtDwDOggtaSRNPmS0oiupG4A8PTNrUhE-vagPApuzFZbQKm5UStBqWwPBnp5flgdZenxbET92zHci_pZo8rJel-fzO-kSjAwxlewJFYY079vE3ghsOK_xCwjtKnA1Zdm0Oy1zejLlvBUfW6CKonp5AumWBULo2MlXQshtF6dp8QERwlHgv6dvtSI0m73MRGB0SdIzRhcfw',
  blueberryGlasshouseAlt: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJqQQfGr-zURKlsUNbwQdg3-d3V3b0abgCjWYPZjw8WaSyFx-nhRFQcRpTwI5n5aTxLcP8tksi_kU0WknXXlYOPCPMAqnFYLukIMdkqzT8ZvvIP3GQOcuHBEhD_K0L2gQoJn_lUCT-sk9ds32sq93h7x4nS1uasiX5zruIPomeX3dSW6D1E_u6gfMV6gCXosNTTRWXpnV3O1lgpgvqHgjElmXICrKb9ySRfYeio-rMR4Lh7jMZfOgAow',
  mulberryHeritage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtuecdMnFd1-TWPgQGyYbdSRlNj9c-ycpZChSBPATgRwX6wilwy5M_QnNWYxlkCe_Q6dMgncCNCd4YikceIeNsw25mQO2pNn3m8NiCe-ObkL_TZQZxJsMGnJ3oEM68eld9rtIkz-xuLiuCuAJQp6CXpTBnIOZsVvzotxP44LsMDpsYg7D9NmCXAJh2wkNKVKw70HcnmSIRTc8203BeLfIBrOvPto6FcsVQyCCRv0FCfT1kPR2mTLMFAw',
  malabarDining: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPgIN_hR1mBXjVaOQA5898FEs_q6c_Sk9vBLKB0pQZYVYshND9PgJOVhfaDIUCwLaKCc8dBwcjr3KWQevB4PMA2nAPQzbOAbB_Td2GEhxxr1UvruB6tTfNzetbyfnsGdZJtiDglFmr_EU35Vpip1Y6_uhH8QQ3M9u_sLES4XoIFueSqUQ4oBbx3NQPeULoEYiodV3PAntinkMAse-IvJJZI2nWkWNnjTc5Vei8e4nyGi-2hypSZarAgw'
};

export const RESORT_SUITES: SuiteItem[] = [
  {
    id: 'blackberry-villa',
    name: 'Blackberry Villa',
    tagline: 'Family Sanctuary • Handcrafted Timber Suite',
    badge: 'Traditional Kerala Villa',
    pricePerNight: 7500,
    rating: 4.95,
    reviewsCount: 84,
    occupancy: '2 Adults, 2 Children',
    bedType: 'King Bed (76x80")',
    view: 'Misty Rainforest & Valley Canopy',
    sizeSqFt: 620,
    description: 'Embrace timeless timber architecture. Features a spacious separate living lounge, handcrafted teak woodwork, and floor-to-ceiling glass looking directly into misty canopy crowns.',
    longDescription: 'The Blackberry Villa is built from seasoned, sustainably reclaimed Kerala teak and Anjili wood. With panoramic insulated glass walls, you wake up to blankets of morning mist floating across centuries-old rainforest crowns. Designed specifically for families and couples seeking ultimate privacy, it includes a lavish teak master bedroom, private lounging living room, rain shower with organic herbal amenities, and direct stone pathway access to our valley infinity pool.',
    image: RESORT_IMAGES.blackberryVilla,
    gallery: [
      RESORT_IMAGES.blackberryVilla,
      RESORT_IMAGES.blackberryVillaAlt,
      RESORT_IMAGES.infinityPool,
      RESORT_IMAGES.aerialSanctuary
    ],
    keyFeatures: [
      'Separate living salon with cane furniture',
      'King bed with premium Egyptian cotton linens',
      'Climate control & noiseless ceiling fans',
      'Direct balcony verandah overlooking misty trees',
      'Estate Arabica coffee & organic tea kettle',
      'High-speed optical WiFi for peaceful connectivity'
    ],
    amenities: [
      'Free Kerala Breakfast',
      'Valley Infinity Pool Access',
      'Minibar & Refrigerator',
      'Daily Housekeeping',
      'Bathrobes & Ayurvedic Herbal Soaps',
      'Indoor Games Clubhouse Access',
      'Campfire Gathering Access',
      '24/7 Power Backup'
    ]
  },
  {
    id: 'blueberry-glasshouse',
    name: 'Blueberry Glass House',
    tagline: 'Most Romantic • 360-Degree Canopy Pavilion',
    badge: 'Most Romantic • Glasshouse',
    pricePerNight: 9500,
    rating: 5.0,
    reviewsCount: 112,
    occupancy: '2 Adults • Romantic Stay',
    bedType: 'Grand Four-Poster King Bed',
    view: '360° Starlit Night Canopy & Valleys',
    sizeSqFt: 540,
    description: 'Suspended gracefully amidst blooming orchids and tropical ferns. Features 360-degree glass walls, romantic open balcony deck, starlight views, and an intimate aesthetic.',
    longDescription: 'An architectural marvel suspended atop gentle stilts above lush cardamom and fern flora. The Blueberry Glass House offers an ethereal immersion in Wayanad’s wilderness without sacrificing luxurious comfort. Floor-to-ceiling thermal insulated glass frames misty mornings and twinkling mountain nights right from your bed. A cantilevered private timber deck invites quiet conversation under the moonlit canopy.',
    image: RESORT_IMAGES.blueberryGlasshouse,
    gallery: [
      RESORT_IMAGES.blueberryGlasshouse,
      RESORT_IMAGES.blueberryGlasshouseAlt,
      RESORT_IMAGES.infinityPoolSecondary,
      RESORT_IMAGES.malabarDining
    ],
    keyFeatures: [
      '360-degree insulated panoramic glass walls',
      'Suspended cantilevered outdoor balcony deck',
      'Automated blackout drapery for deep sleep',
      'Mood ambient lighting & warm timber finishes',
      'Freestanding soak tub overlooking tropical ferns',
      'Curated vinyl & Bluetooth acoustic speaker'
    ],
    amenities: [
      'Free Kerala Breakfast',
      'Infinity Pool Priority Cabana',
      'Complimentary Sunset Coffee on Deck',
      'Minibar & Handcrafted Snacks',
      'Ayurvedic Bath Salts & Essential Oils',
      'High-Speed Wi-Fi',
      'Evening Turn-down Service with Herbal Infusions',
      'Campfire Access'
    ]
  },
  {
    id: 'mulberry-suite',
    name: 'Mulberry Suite',
    tagline: 'Heritage Verandah • Classic Kerala Charm',
    badge: 'Heritage Suite',
    pricePerNight: 8000,
    rating: 4.92,
    reviewsCount: 76,
    occupancy: '2 Adults, 2 Children',
    bedType: 'Heritage Carved King Bed',
    view: 'Central Reflection Lotus Pond & Hills',
    sizeSqFt: 590,
    description: 'A grand family sanctuary crafted with antique brass lamps and terracotta undertones. Includes a dedicated living pavilion, scenic private verandah, and easy garden pathway to the infinity pool.',
    longDescription: 'Named after the tranquil berry groves lining our southern border, the Mulberry Suite honors traditional Malabar architectural vernacular. Sloping terracotta tiled eaves keep the interiors naturally cool even on sun-drenched afternoons. Enjoy an expansive colonial-style verandah where you can watch water lilies bloom on the estate reflection pond while birds welcome the day.',
    image: RESORT_IMAGES.mulberryHeritage,
    gallery: [
      RESORT_IMAGES.mulberryHeritage,
      RESORT_IMAGES.aerialSanctuary,
      RESORT_IMAGES.blackberryVillaAlt,
      RESORT_IMAGES.infinityPool
    ],
    keyFeatures: [
      'Expansive private shaded verandah with planter chairs',
      'Traditional rosewood and brass craft appointments',
      'Separate family lounge room with pull-out divan',
      'Direct path to the central heritage reflection pond',
      'Smart TV with streaming services',
      'Personal safe & organic pantry basket'
    ],
    amenities: [
      'Free Kerala Breakfast',
      'Full Pool & Grounds Access',
      'Tea & Single-Origin Coffee Bar',
      'Eco-Friendly Toiletries',
      'Ironing & Garment Press',
      'Clubhouse Recreation Access',
      'Daily Guided Estate Walk',
      'Free On-Site Valet Parking'
    ]
  }
];

export const RESORT_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'infinity-pool',
    title: 'Valley-Facing Infinity Pool',
    category: 'Water & Leisure',
    timeSlot: '6:30 AM – 7:30 PM Daily',
    highlight: 'Cliffside Panorama',
    description: 'Submerge into crystal waters that seem to vanish into the rolling hills of Wayanad. Relax on teak sun loungers accompanied by fresh tender coconuts.',
    longDescription: 'Heated by mountain morning rays, our infinity pool sits at 3,500 feet elevation on the rim of the estate. While submerged, the water horizon merges into the endless rolling green hills and tea gardens below. Teak sun loungers, fresh towels, and chilled tender coconuts served poolside create an unhurried haven of peace.',
    icon: 'pool',
    image: RESORT_IMAGES.infinityPool
  },
  {
    id: 'ayurveda-spa',
    title: 'Ayurvedic Healing & Spa',
    category: 'Wellness & Healing',
    timeSlot: '8:00 AM – 6:00 PM (By Appointment)',
    highlight: 'Ancient Kerala Rituals',
    description: 'Traditional Kerala Abhyanga, herbal Kizhi, and rejuvenating wellness rituals performed by master practitioners using cold-pressed botanical oils.',
    longDescription: 'Experience authentic holistic Ayurveda steeped in centuries of Malabar medicinal tradition. Under the guidance of seasoned Vaidyas, treatments utilize freshly pounded herbs, warm medicated sesame and neem oils, and warm herbal compresses to dissolve tension and restore bodily equilibrium.',
    icon: 'spa',
    price: 'From ₹1,800'
  },
  {
    id: 'spice-walks',
    title: 'Estate & Spice Walks',
    category: 'Nature Immersion',
    timeSlot: '7:30 AM & 4:30 PM Daily',
    highlight: 'Naturalist-Guided',
    description: 'Stroll through vibrant cardamom, black pepper, and Arabica coffee groves guided by our resident naturalist who introduces the rare flora and avian life.',
    longDescription: 'Wayanad is the spice capital of Kerala. Our resident naturalist guides you through 25 acres of organic shade-grown Robusta, Arabica, Tellicherry black pepper, wild cardamom pods, vanilla vines, and medicinal shrubs while spotting emerald pigeons, Malabar whistling thrushes, and giant flying squirrels.',
    icon: 'hiking',
    price: 'Complimentary'
  },
  {
    id: 'campfire-stargazing',
    title: 'Campfire & Stargazing',
    category: 'Evening Gathering',
    timeSlot: '7:00 PM – 9:30 PM Nightly',
    highlight: 'Acoustic Soirée',
    description: 'When the mountain chill settles in, gather around our outdoor stone hearth for warmth, acoustic music, roasted marshy treats, and Wayanad starlit skies.',
    longDescription: 'As dusk envelops the hills with cool mountain breezes, our stone open hearth is ignited with fragrant dry coffee timber logs. Relax on rattan chairs, sip spiced hot cocoa or traditional sulaimani tea, listen to gentle acoustic melodies, and admire pristine constellations unobstructed by city glow.',
    icon: 'local_fire_department',
    price: 'Complimentary'
  },
  {
    id: 'clubhouse-games',
    title: 'Clubhouse & Recreation',
    category: 'Indoor Games',
    timeSlot: '24 Hours Open',
    highlight: 'All Ages Fun',
    description: 'Engage with billiards, carrom, table tennis, board games, and quiet reading nooks stocked with books celebrating Kerala history and Western Ghats wildlife.',
    longDescription: 'A sanctuary retreat accommodates quiet days. Our timber-paneled clubhouse offers international table tennis, championship carrom boards, chess tables, dart boards, and an editorial library dedicated to South Indian botany, archaeology, and literature.',
    icon: 'sports_tennis',
    price: 'Complimentary'
  },
  {
    id: 'excursion-tours',
    title: 'Wayanad Excursion Tours',
    category: 'Expeditions',
    timeSlot: 'Flexible Day Itineraries',
    highlight: 'Chauffeured Excursions',
    description: 'Chauffeured day excursions to Edakkal prehistoric caves, Banasura Sagar earthen dam, Pookode natural lake, and scenic Chembra heart lake viewpoint.',
    longDescription: 'Miracle Holidays provides private luxury 4x4 and sedan concierge vehicles with courteous local drivers to show you the crown jewels of Wayanad: climb to the neolithic rock art of Edakkal, take speedboats on Banasura reservoir, or hike Chembra Peak without the stress of logistics.',
    icon: 'explore',
    price: 'Custom Quotes'
  }
];

export const RESORT_MENU: MenuItem[] = [
  {
    id: 'm1',
    name: 'Traditional Malabar Appam with Vegetable / Chicken Stew',
    category: 'Breakfast',
    price: 380,
    description: 'Lacy fermented rice crepes with a soft pillowy center, paired with velvety coconut milk stew infused with cloves, cinnamon, and farm potatoes.',
    dietary: 'Veg',
    isSignature: true
  },
  {
    id: 'm2',
    name: 'Steamed Puttu with Kadala Curry & Ghee Bananas',
    category: 'Breakfast',
    price: 320,
    description: 'Cylindrical red-rice steamed cake layered with fresh grated coconut, served with slow-simmered black chickpea curry in roasted coconut gravy.',
    dietary: 'Vegan',
    isSignature: true
  },
  {
    id: 'm3',
    name: 'Tellicherry Pepper Chicken Curry',
    category: 'Mains',
    price: 520,
    description: 'Tender country chicken simmered in a dark, deeply aromatic sauce made of fresh hand-crushed Wayanad black peppercorns, shallots, and curry leaves.',
    dietary: 'Non-Veg',
    isSignature: true
  },
  {
    id: 'm4',
    name: 'Meen Pollichathu (Banana Leaf Pearl Spot)',
    category: 'Mains',
    price: 680,
    description: 'Fresh catch marinated in roasted shallot-tomato-chilli masala, wrapped in charred plantain leaves and slow-cooked on iron tawa.',
    dietary: 'Non-Veg',
    isSignature: true
  },
  {
    id: 'm5',
    name: 'Travancore Vegetable Kurma & Malabar Parottas',
    category: 'Mains',
    price: 440,
    description: 'Crisp flaky layered flatbreads accompanied by rich cashew and poppy seed infused vegetable stew simmered with garden vegetables.',
    dietary: 'Veg',
    isSignature: false
  },
  {
    id: 'm6',
    name: 'Thalassery Fragrant Mutton Dum Biryani',
    category: 'Mains',
    price: 640,
    description: 'Made with fine short-grain Kaima rice, ghee-roasted cashews, sultanas, and melt-in-mouth mutton slow-cooked sealed in dough.',
    dietary: 'Non-Veg',
    isSignature: true
  },
  {
    id: 'm7',
    name: 'Single-Origin Wayanad Roasted Pour-Over Coffee',
    category: 'Beverages',
    price: 180,
    description: 'Hand-picked Arabica beans grown right on our mountain estate, freshly ground and brewed with notes of dark cocoa and nutmeg.',
    dietary: 'Vegan',
    isSignature: true
  },
  {
    id: 'm8',
    name: 'Traditional Sulaimani Spiced Golden Tea',
    category: 'Beverages',
    price: 120,
    description: 'Clear golden black tea infused with cardamom, crushed mint, fresh lemon juice, and a touch of wild honey.',
    dietary: 'Vegan',
    isSignature: false
  },
  {
    id: 'm9',
    name: 'Ada Pradhaman (Kerala Festive Payasam)',
    category: 'Desserts',
    price: 260,
    description: 'Steamed rice dough ribbons simmered in thick jaggery syrup, coconut milk, and garnished with fried coconut chips and cashews.',
    dietary: 'Veg',
    isSignature: true
  }
];

export const WAYANAD_ATTRACTIONS: AttractionItem[] = [
  {
    id: 'edakkal-caves',
    name: 'Edakkal Caves',
    driveTime: '25 Mins Drive',
    distanceKm: 18,
    category: 'Archaeology & Heritage',
    description: 'Neolithic rock petroglyphs and engravings dated back to 6,000 BCE, perched high atop Ambukuthi Hills with scenic stone steps and valley viewpoints.',
    icon: 'terrain',
    highlights: ['Petroglyphs dating to 6,000 BCE', 'Ancient stone cleft formation', 'Panoramic valley views from summit'],
    bestTimeToVisit: 'Morning 8:30 AM – 11:00 AM'
  },
  {
    id: 'banasura-dam',
    name: 'Banasura Sagar Dam',
    driveTime: '30 Mins Drive',
    distanceKm: 22,
    category: 'Water Reservoir & Adventure',
    description: 'The largest earthen dam in India and second largest in Asia, offering serene speed boating, zipline, and floating island vistas against misted peaks.',
    icon: 'water',
    highlights: ['Largest earthen dam in India', 'High-speed boating across islands', 'Zipline and trekking trails'],
    bestTimeToVisit: 'Late afternoon 3:00 PM – 5:30 PM'
  },
  {
    id: 'chembra-peak',
    name: 'Chembra Peak',
    driveTime: '45 Mins Drive',
    distanceKm: 34,
    category: 'Adventure Trekking',
    description: 'The highest peak in Wayanad hosting the world-famous natural heart-shaped lake (Hridaya Saras) on its misted crest with cloud carpets.',
    icon: 'favorite',
    highlights: ['Natural heart-shaped mountain lake', 'Highest peak in Wayanad (2,100m)', 'Forest department guided pass required'],
    bestTimeToVisit: 'Early morning 7:00 AM start'
  },
  {
    id: 'pookode-lake',
    name: 'Pookode Lake',
    driveTime: '35 Mins Drive',
    distanceKm: 28,
    category: 'Family & Nature Sanctuary',
    description: 'A serene natural freshwater lake embraced by thick evergreen forests, blue water lilies, and pedal boat tours with aquarium and spice stalls.',
    icon: 'kayaking',
    highlights: ['Freshwater lake shaped like India map', 'Pedal boating amidst blue lilies', 'Canopy tree pathway walkway'],
    bestTimeToVisit: '10:00 AM – 4:00 PM'
  }
];

export const GUEST_REVIEWS: GuestReview[] = [
  {
    id: 'r1',
    guestName: 'Arjun & Priya Nair',
    location: 'Bangalore',
    suiteStayed: 'Blackberry Villa',
    rating: 5,
    quote: 'Waking up to low clouds sweeping across the trees right outside our window was unforgettable.',
    review: 'The Blackberry Villa with timber structure is heavenly. Waking up to low clouds sweeping across the trees right outside our window was unforgettable. The staff’s warmth, estate-fresh Arabica coffee, and authentic Malabar meals made our family holiday pure bliss.',
    date: 'Stayed March 2025'
  },
  {
    id: 'r2',
    guestName: 'Elena & Marc Davies',
    location: 'London, UK',
    suiteStayed: 'Blueberry Glass House',
    rating: 5,
    quote: 'The Blueberry Glasshouse is something out of an architectural magazine! Stargazing from the king bed with total forest privacy is unparalleled.',
    review: 'The Blueberry Glasshouse is something out of an architectural magazine! Stargazing from the king bed with total forest privacy is unparalleled. The infinity pool overlooking the valley is truly world-class, and the evening campfire added such a romantic touch to our honeymoon.',
    date: 'Stayed February 2025'
  },
  {
    id: 'r3',
    guestName: 'Dr. Rohan Mathew',
    location: 'Kochi',
    suiteStayed: 'Mulberry Suite',
    rating: 5,
    quote: 'Miracle Holidays provides the genuine Kerala peace you yearn for.',
    review: 'From estate coffee morning walks to campfire barbecues in the evening, everything feels tailored, peaceful, and respectful of nature. The Ayurvedic massage relieved months of clinical stress. Highly recommended!',
    date: 'Stayed January 2025'
  }
];
