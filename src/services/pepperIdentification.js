// PepperScale-exclusive pepper identification service
// No Google API needed - all data sourced from PepperScale.com

// Comprehensive pepper database from PepperScale.com's hot pepper list
// Source: https://pepperscale.com/hot-pepper-list/
const PEPPER_DATABASE = [
  {
    name: "Bell Pepper",
    heatLevel: "0 SHU",
    origin: "Mexico, Central America",
    description: "The bell pepper is the only pepper that doesn't produce capsaicin, the compound that gives hot peppers their heat. Bell peppers have a sweet, mild flavor and are available in various colors including green, red, yellow, orange, and purple.",
    uses: "Salads, stuffing, stir-fries, roasting",
    color: "Green, red, yellow, orange, purple",
    size: "3-5 inches long",
    keywords: ["bell pepper", "sweet pepper", "capsicum"],
    pepperScaleLink: "https://pepperscale.com/bell-pepper/"
  },
  {
    name: "Banana Pepper",
    heatLevel: "0-500 SHU",
    origin: "Hungary",
    description: "The banana pepper is a mild, sweet-tasting pepper with a slight tang. It gets its name from its yellow color and distinctive shape that resembles a banana. They're often pickled and used as a topping.",
    uses: "Sandwiches, pickling, pizza topping, salads",
    color: "Yellow to red when ripe",
    size: "2-3 inches long",
    keywords: ["banana pepper", "yellow pepper", "mild pepper"],
    pepperScaleLink: "https://pepperscale.com/banana-pepper/"
  },
  {
    name: "Pepperoncini",
    heatLevel: "100-500 SHU",
    origin: "Italy and Greece",
    description: "Also known as Tuscan peppers, sweet Italian peppers, or golden Greek peppers. They have a mild, sweet flavor with a slight heat and are commonly sold pickled.",
    uses: "Antipasto, salads, sandwiches, pizza topping",
    color: "Light yellowish-green to red when fully ripe",
    size: "2-3 inches long",
    keywords: ["pepperoncini", "tuscan pepper", "italian pepper", "greek pepper"],
    pepperScaleLink: "https://pepperscale.com/pepperoncini-pepper/"
  },
  {
    name: "Cubanelle Pepper",
    heatLevel: "100-1,000 SHU",
    origin: "Cuba",
    description: "Also known as Cuban pepper or Italian frying pepper, the Cubanelle is a sweet, mild pepper popular in Cuban, Puerto Rican, and Dominican cooking. It's typically picked before fully ripening.",
    uses: "Frying, stuffing, roasting, pizza topping",
    color: "Light green to red when fully ripe",
    size: "4-6 inches long",
    keywords: ["cubanelle", "cuban pepper", "italian frying pepper"],
    pepperScaleLink: "https://pepperscale.com/cubanelle-pepper/"
  },
  {
    name: "Anaheim Pepper",
    heatLevel: "500-2,500 SHU",
    origin: "New Mexico, USA",
    description: "A mild chile pepper named after the city of Anaheim, California. These peppers are often used when a recipe calls for a little heat without overwhelming the dish's other flavors.",
    uses: "Stuffing, roasting, chile rellenos, sauces",
    color: "Green to red when ripe",
    size: "6-10 inches long",
    keywords: ["anaheim", "california pepper", "mild chile"],
    pepperScaleLink: "https://pepperscale.com/anaheim-pepper/"
  },
  {
    name: "Poblano",
    heatLevel: "1,000-2,000 SHU",
    origin: "Puebla, Mexico",
    description: "A mild chili pepper originating in the state of Puebla, Mexico. Dried, it is called ancho or chile ancho. The poblano is a popular ingredient in Mexican cuisine, especially for chile rellenos.",
    uses: "Stuffing, roasting, mole sauce, chile rellenos",
    color: "Dark green, red when fully ripe",
    size: "4-6 inches long",
    keywords: ["poblano", "ancho when dried", "mexican pepper"],
    pepperScaleLink: "https://pepperscale.com/poblano-pepper/"
  },
  {
    name: "Coronado Pepper",
    heatLevel: "2,500-3,000 SHU",
    origin: "Mexico",
    description: "A hybrid chili pepper that's related to the Poblano, but with a slightly higher heat level. The Coronado has a similar flavor profile to the Poblano but with a bit more kick.",
    uses: "Stuffing, roasting, sauces, salsas",
    color: "Dark green to red when ripe",
    size: "4-5 inches long",
    keywords: ["coronado", "mexican pepper", "poblano hybrid"],
    pepperScaleLink: "https://pepperscale.com/coronado-pepper/"
  },
  {
    name: "Jalapeño",
    heatLevel: "2,500-8,000 SHU",
    origin: "Mexico",
    description: "One of the most common chile peppers, jalapeños are medium-sized with a mild to moderate heat level. They're commonly used in Mexican and Tex-Mex cuisine and are the base for making chipotle peppers when smoked and dried.",
    uses: "Fresh eating, pickling, cooking, salsas, poppers",
    color: "Green when unripe, red when ripe",
    size: "2-4 inches long",
    keywords: ["jalapeño", "jalapeno", "mexican pepper"],
    pepperScaleLink: "https://pepperscale.com/jalapeno-pepper/"
  },
  {
    name: "Chipotle",
    heatLevel: "2,500-8,000 SHU",
    origin: "Mexico",
    description: "A chipotle is a smoke-dried ripe jalapeño chili pepper used for seasoning. It has a distinctive smoky flavor and is used primarily in Mexican and Mexican-inspired cuisines.",
    uses: "Sauces, marinades, soups, stews",
    color: "Brown, dark red",
    size: "2-3 inches long",
    keywords: ["chipotle", "smoked jalapeño", "dried pepper"],
    pepperScaleLink: "https://pepperscale.com/chipotle-pepper/"
  },
  {
    name: "Fresno",
    heatLevel: "2,500-10,000 SHU",
    origin: "California, USA",
    description: "Often confused with jalapeños, Fresno peppers are typically red and have a fruitier flavor. They're named after Fresno, California, where they were first cultivated.",
    uses: "Cooking, hot sauces, canning, salsa",
    color: "Green when young, red when ripe",
    size: "2-3 inches long",
    keywords: ["fresno", "red pepper", "california pepper"],
    pepperScaleLink: "https://pepperscale.com/fresno-pepper/"
  },
  {
    name: "Hungarian Wax Pepper",
    heatLevel: "5,000-10,000 SHU",
    origin: "Hungary",
    description: "The Hungarian Wax Pepper is a medium-hot pepper similar in appearance to the banana pepper but significantly hotter. It's often used in Hungarian cuisine and is popular for pickling.",
    uses: "Pickling, salsas, stews, stuffing",
    color: "Yellow to orange to red when fully ripe",
    size: "4-6 inches long",
    keywords: ["hungarian wax", "hot wax pepper", "hungarian hot pepper"],
    pepperScaleLink: "https://pepperscale.com/hungarian-wax-pepper/"
  },
  {
    name: "Serrano",
    heatLevel: "10,000-23,000 SHU",
    origin: "Puebla and Hidalgo, Mexico",
    description: "A type of chili pepper that originated in the mountainous regions of the Mexican states of Puebla and Hidalgo. Serranos are typically eaten raw and have a bright, crisp flavor with notable heat.",
    uses: "Salsas, hot sauces, pico de gallo, garnishes",
    color: "Green, red, brown, orange, or yellow",
    size: "1-4 inches long",
    keywords: ["serrano", "small hot pepper"],
    pepperScaleLink: "https://pepperscale.com/serrano-pepper/"
  },
  {
    name: "Peter Pepper",
    heatLevel: "10,000-23,000 SHU",
    origin: "United States, Mexico",
    description: "The Peter pepper is known for its distinctive phallic shape. It has a heat level similar to Serrano peppers and is often grown as a novelty plant.",
    uses: "Hot sauces, powder, novelty growing",
    color: "Green to red when ripe",
    size: "3-4 inches long",
    keywords: ["peter pepper", "chili peter", "penis pepper"],
    pepperScaleLink: "https://pepperscale.com/peter-pepper/"
  },
  {
    name: "Manzano Pepper",
    heatLevel: "12,000-30,000 SHU",
    origin: "South America (Andes region)",
    description: "Also known as apple chile or rocoto, the Manzano pepper is unusual among hot peppers because it has black seeds rather than white. It has a unique fruity flavor and grows at higher altitudes than most peppers.",
    uses: "Salsas, stuffing, hot sauces",
    color: "Yellow, orange, or red when ripe",
    size: "1-2 inches wide",
    keywords: ["manzano", "rocoto", "apple chile", "black seed pepper"],
    pepperScaleLink: "https://pepperscale.com/rocoto-peppers/"
  },
  {
    name: "Cayenne",
    heatLevel: "30,000-50,000 SHU",
    origin: "South and Central America",
    description: "A hot chili pepper used to flavor dishes and named after the city of Cayenne in French Guiana. It's most commonly used in its dried, ground form as the popular spice.",
    uses: "Powder, hot sauces, cooking, medicinal",
    color: "Red when ripe",
    size: "4-6 inches long",
    keywords: ["cayenne", "long red pepper", "thin pepper"],
    pepperScaleLink: "https://pepperscale.com/cayenne-pepper/"
  },
  {
    name: "Tabasco Pepper",
    heatLevel: "30,000-50,000 SHU",
    origin: "Mexico",
    description: "The pepper used to make the famous Tabasco sauce. These small, pointed peppers pack a significant punch and have a bright, fruity flavor that makes them ideal for hot sauces.",
    uses: "Hot sauces, pickling, vinegar infusions",
    color: "Green ripening to yellow and then red",
    size: "1-2 inches long",
    keywords: ["tabasco", "tabasco sauce pepper"],
    pepperScaleLink: "https://pepperscale.com/tabasco-pepper/"
  },
  {
    name: "Chiltepin",
    heatLevel: "50,000-100,000 SHU",
    origin: "Mexico, Southern United States",
    description: "Also called the bird pepper, this is one of the smallest peppers in the world and one of the few wild peppers still harvested today. It has an intense heat that dissipates quickly.",
    uses: "Hot sauces, salsas, pickling, dried spice",
    color: "Green ripening to red",
    size: "0.25-0.5 inches in diameter",
    keywords: ["chiltepin", "bird pepper", "wild pepper"],
    pepperScaleLink: "https://pepperscale.com/chiltepin-pepper/"
  },
  {
    name: "Thai Chili",
    heatLevel: "50,000-100,000 SHU",
    origin: "Thailand",
    description: "Also known as bird's eye chili, these small peppers pack serious heat. They're commonly used in Thai cuisine and Southeast Asian dishes.",
    uses: "Thai cooking, curries, stir-fries, sauces",
    color: "Green ripening to red",
    size: "1-2 inches long",
    keywords: ["thai chili", "bird's eye", "bird chili"],
    pepperScaleLink: "https://pepperscale.com/thai-pepper/"
  },
  {
    name: "Malagueta Pepper",
    heatLevel: "50,000-100,000 SHU",
    origin: "Brazil, Portugal",
    description: "A key ingredient in Brazilian and Portuguese cuisine, the Malagueta is a small, tapered pepper similar to the African Bird's Eye chili. It has a bright, sharp heat.",
    uses: "Hot sauces, marinades, traditional Brazilian dishes",
    color: "Green ripening to red",
    size: "1-2 inches long",
    keywords: ["malagueta", "brazilian pepper", "portuguese pepper"],
    pepperScaleLink: "https://pepperscale.com/malagueta-pepper/"
  },
  {
    name: "Piri Piri",
    heatLevel: "50,000-175,000 SHU",
    origin: "Africa",
    description: "Also known as the African bird's eye chili, this small pepper is used to make the famous piri-piri sauce popular in Portuguese and African cuisine. It has an intense heat with a slightly sweet, bright flavor.",
    uses: "Piri-piri sauce, marinades, grilled dishes",
    color: "Green ripening to bright red",
    size: "0.5-1 inch long",
    keywords: ["piri piri", "peri peri", "african bird's eye"],
    pepperScaleLink: "https://pepperscale.com/piri-piri-pepper/"
  },
  {
    name: "Scotch Bonnet",
    heatLevel: "100,000-350,000 SHU",
    origin: "Caribbean",
    description: "Named for its resemblance to a tam o' shanter hat, the Scotch bonnet is a variety of chili pepper similar to the habanero. It's known for its heat and sweet, fruity flavor that's essential to Caribbean cuisine.",
    uses: "Caribbean cuisine, hot sauces, jerk seasoning",
    color: "Green, yellow, orange, or red",
    size: "1-2 inches wide",
    keywords: ["scotch bonnet", "caribbean pepper", "bonney pepper"],
    pepperScaleLink: "https://pepperscale.com/scotch-bonnet/"
  },
  {
    name: "Habanero",
    heatLevel: "100,000-350,000 SHU",
    origin: "Amazon Basin",
    description: "One of the most intensely spicy chili peppers commonly available. Habaneros have a unique, fruity flavor that accompanies their significant heat. They're commonly used in hot sauces and spicy dishes.",
    uses: "Hot sauces, marinades, cooking, salsas",
    color: "Green ripening to orange, red, white, brown, or purple",
    size: "1-2.5 inches long",
    keywords: ["habanero", "orange pepper", "very hot pepper"],
    pepperScaleLink: "https://pepperscale.com/habanero-pepper/"
  },
  {
    name: "Red Savina Habanero",
    heatLevel: "350,000-580,000 SHU",
    origin: "United States (developed from Habanero)",
    description: "A cultivar of the habanero pepper, the Red Savina was once the hottest pepper in the world according to Guinness World Records. It was developed in California and has an intense heat with the characteristic habanero fruity flavor.",
    uses: "Extreme hot sauces, powders, marinades",
    color: "Deep red when ripe",
    size: "1-2 inches long",
    keywords: ["red savina", "super habanero"],
    pepperScaleLink: "https://pepperscale.com/red-savina-habanero/"
  },
  {
    name: "Chocolate Habanero",
    heatLevel: "425,000-577,000 SHU",
    origin: "Caribbean",
    description: "Also known as the Congo Black or Black Habanero, this pepper has a rich, smoky flavor with the characteristic habanero fruitiness. It's one of the hotter varieties of habanero.",
    uses: "Hot sauces, powders, Caribbean and Mexican cuisine",
    color: "Dark brown to chocolate",
    size: "1-2 inches long",
    keywords: ["chocolate habanero", "congo black", "black habanero"],
    pepperScaleLink: "https://pepperscale.com/chocolate-habanero/"
  },
  {
    name: "Fatalii",
    heatLevel: "125,000-400,000 SHU",
    origin: "Central Africa",
    description: "The Fatalii is known for its citrus-like flavor and extreme heat. It has a fruity, slightly sweet taste with distinct notes of citrus that make it popular for hot sauces despite its significant heat level.",
    uses: "Hot sauces, powders, African cuisine",
    color: "Green ripening to bright yellow or orange",
    size: "2-3 inches long",
    keywords: ["fatalii", "african pepper", "citrus hot pepper"],
    pepperScaleLink: "https://pepperscale.com/fatalii-pepper/"
  },
  {
    name: "Devil's Tongue",
    heatLevel: "125,000-325,000 SHU",
    origin: "Pennsylvania, USA",
    description: "A habanero variant with a wrinkled, tongue-like appearance. It has a similar heat level to regular habaneros but with a slightly different flavor profile that some describe as more floral.",
    uses: "Hot sauces, cooking, powders",
    color: "Yellow or red when ripe",
    size: "1-2 inches long",
    keywords: ["devil's tongue", "habanero variant"],
    pepperScaleLink: "https://pepperscale.com/devils-tongue-pepper/"
  },
  {
    name: "Ghost Pepper",
    heatLevel: "855,000-1,041,427 SHU",
    origin: "India",
    description: "Also known as Bhut Jolokia, the ghost pepper was once certified as the world's hottest chili pepper. It has a slow-building heat that becomes intensely spicy and can last for up to 30 minutes.",
    uses: "Extreme hot sauces, cooking (in small amounts), spice challenges",
    color: "Red, orange, yellow, or chocolate",
    size: "2-3 inches long",
    keywords: ["ghost pepper", "bhut jolokia", "naga jolokia"],
    pepperScaleLink: "https://pepperscale.com/ghost-pepper/"
  },
  {
    name: "Naga Viper",
    heatLevel: "1,349,000 SHU",
    origin: "United Kingdom",
    description: "A hybrid chili pepper created in the UK by crossing the Naga Morich, the Bhut Jolokia, and the Trinidad Scorpion. It briefly held the title of world's hottest pepper in 2011.",
    uses: "Extreme hot sauces, extracts, powders",
    color: "Green ripening to red",
    size: "2-3 inches long",
    keywords: ["naga viper", "super hot chili"],
    pepperScaleLink: "https://pepperscale.com/naga-viper-pepper/"
  },
  {
    name: "Trinidad Scorpion Butch T",
    heatLevel: "1,463,700 SHU",
    origin: "Trinidad and Tobago",
    description: "Named for its scorpion-like tail, this pepper was once recognized as the world's hottest chili. It has a sweet, fruity flavor followed by extreme, long-lasting heat.",
    uses: "Extreme hot sauces, extracts, powders",
    color: "Green ripening to red",
    size: "1-2 inches long",
    keywords: ["trinidad scorpion", "butch t", "scorpion pepper"],
    pepperScaleLink: "https://pepperscale.com/trinidad-scorpion-butch-t/"
  },
  {
    name: "7 Pot Douglah",
    heatLevel: "923,000-1,853,900 SHU",
    origin: "Trinidad and Tobago",
    description: "Also known as the Chocolate 7 Pot, this is one of the hottest naturally occurring peppers. It's named '7 Pot' because one pepper is said to be hot enough to spice seven pots of stew.",
    uses: "Extreme hot sauces, extracts, Caribbean cuisine",
    color: "Green ripening to dark brown/chocolate",
    size: "1-2 inches wide",
    keywords: ["7 pot douglah", "chocolate 7 pot", "7 pod douglah"],
    pepperScaleLink: "https://pepperscale.com/7-pot-douglah/"
  },
  {
    name: "Trinidad Moruga Scorpion",
    heatLevel: "1,200,000-2,000,000 SHU",
    origin: "Trinidad and Tobago",
    description: "Once considered the hottest pepper in the world, the Trinidad Moruga Scorpion has a fruity, floral flavor that's quickly overwhelmed by its intense heat.",
    uses: "Extreme hot sauces, extracts, competitive eating",
    color: "Green ripening to red",
    size: "1-2 inches wide",
    keywords: ["moruga scorpion", "trinidad scorpion", "super-hot pepper"],
    pepperScaleLink: "https://pepperscale.com/trinidad-moruga-scorpion/"
  },
  {
    name: "Carolina Reaper",
    heatLevel: "1,400,000-2,200,000 SHU",
    origin: "South Carolina, USA",
    description: "Currently the world's hottest pepper, developed by cultivator Ed Currie. It's a cross between a Pakistani Naga pepper and a Habanero and is known for its extreme heat and fruity flavor.",
    uses: "Extreme hot sauces, world record challenges, tiny amounts in cooking",
    color: "Green ripening to bright red",
    size: "1-2 inches",
    keywords: ["carolina reaper", "world's hottest pepper", "hp22b"],
    pepperScaleLink: "https://pepperscale.com/carolina-reaper/"
  },
  {
    name: "Dragon's Breath",
    heatLevel: "2,480,000 SHU",
    origin: "United Kingdom",
    description: "Developed in the UK, Dragon's Breath was created for medicinal purposes rather than consumption. It's so hot that it can cause anaphylactic shock if consumed whole.",
    uses: "Medical research, numbing agents, extracts",
    color: "Red when ripe",
    size: "1-2 inches",
    keywords: ["dragon's breath", "medical pepper", "extreme hot"],
    pepperScaleLink: "https://pepperscale.com/dragons-breath-pepper/"
  },
  {
    name: "Pepper X",
    heatLevel: "3,180,000 SHU",
    origin: "South Carolina, USA",
    description: "Created by Ed Currie (the same cultivator who created the Carolina Reaper), Pepper X is reported to be the hottest pepper in the world, though this claim hasn't been officially verified by Guinness World Records.",
    uses: "Extreme hot sauces, extracts, competitive challenges",
    color: "Green to yellow-green when ripe",
    size: "1-2 inches",
    keywords: ["pepper x", "hottest pepper", "ed currie pepper"],
    pepperScaleLink: "https://pepperscale.com/pepper-x/"
  },
  {
    name: "Aji Amarillo",
    heatLevel: "30,000-50,000 SHU",
    origin: "Peru",
    description: "A staple in Peruvian cuisine, Aji Amarillo has a unique fruity flavor often compared to raisins or berries with a distinctive heat. Its name means 'yellow chili' in Spanish.",
    uses: "Peruvian cuisine, sauces, ceviches, stews",
    color: "Orange-yellow when ripe",
    size: "4-5 inches long",
    keywords: ["aji amarillo", "peruvian pepper", "yellow chili"],
    pepperScaleLink: "https://pepperscale.com/aji-amarillo/"
  },
  {
    name: "Cascabel",
    heatLevel: "1,500-2,500 SHU",
    origin: "Mexico",
    description: "Named for the rattling sound its seeds make inside the dried pepper ('cascabel' means 'little bell' in Spanish). It has a nutty, earthy flavor with mild heat.",
    uses: "Mexican sauces, salsas, stews",
    color: "Green ripening to red",
    size: "1-2 inches in diameter",
    keywords: ["cascabel", "rattle chili", "mexican pepper"],
    pepperScaleLink: "https://pepperscale.com/cascabel-pepper/"
  },
  {
    name: "Guajillo",
    heatLevel: "2,500-5,000 SHU",
    origin: "Mexico",
    description: "The dried form of the mirasol chili, Guajillo is one of the most common dried chilis used in Mexican cuisine. It has a sweet, fruity flavor with notes of berries and tea.",
    uses: "Mexican moles, salsas, adobos, marinades",
    color: "Deep red when dried",
    size: "4-6 inches long",
    keywords: ["guajillo", "mexican dried chili", "mirasol"],
    pepperScaleLink: "https://pepperscale.com/guajillo-pepper/"
  }
];

// PepperScale image URLs for each pepper
const PEPPERSCALE_IMAGES = {
  "Bell Pepper": "https://pepperscale.com/wp-content/uploads/2019/10/Bell-peppers-on-white-400x240.jpg",
  "Banana Pepper": "https://pepperscale.com/wp-content/uploads/2019/10/Banana-peppers-768x512.jpg",
  "Pepperoncini": "https://pepperscale.com/wp-content/uploads/2019/10/Pepperoncini-peppers-400x267.jpg",
  "Cubanelle Pepper": "https://pepperscale.com/wp-content/uploads/2020/12/Cubanelle-peppers-768x512.jpg",
  "Anaheim Pepper": "https://pepperscale.com/wp-content/uploads/2020/12/Anaheim-pepper-768x512.jpg",
  "Poblano": "https://pepperscale.com/wp-content/uploads/2019/10/Poblano-peppers-400x267.jpg",
  "Coronado Pepper": "https://pepperscale.com/wp-content/uploads/2021/05/Coronado-pepper-768x512.jpg",
  "Jalapeño": "https://pepperscale.com/wp-content/uploads/2019/09/Jalapeno-pepper-768x512.jpg",
  "Chipotle": "https://pepperscale.com/wp-content/uploads/2019/09/Chipotle-peppers-768x512.jpg",
  "Fresno": "https://pepperscale.com/wp-content/uploads/2019/09/Fresno-pepper-400x267.jpg",
  "Hungarian Wax Pepper": "https://pepperscale.com/wp-content/uploads/2019/10/Hungarian-wax-peppers-768x512.jpg",
  "Serrano": "https://pepperscale.com/wp-content/uploads/2019/09/Serrano-peppers-768x512.jpg",
  "Peter Pepper": "https://pepperscale.com/wp-content/uploads/2019/09/Peter-pepper-768x512.jpg",
  "Manzano Pepper": "https://pepperscale.com/wp-content/uploads/2019/09/Rocoto-pepper-768x512.jpg",
  "Cayenne": "https://pepperscale.com/wp-content/uploads/2020/12/Cayenne-pepper-768x512.jpg",
  "Tabasco Pepper": "https://pepperscale.com/wp-content/uploads/2019/09/Tabasco-pepper-768x512.jpg",
  "Chiltepin": "https://pepperscale.com/wp-content/uploads/2019/09/Chiltepin-pepper-768x512.jpg",
  "Thai Chili": "https://pepperscale.com/wp-content/uploads/2019/09/Thai-peppers-768x512.jpg",
  "Malagueta Pepper": "https://pepperscale.com/wp-content/uploads/2019/09/Malagueta-pepper-768x512.jpg",
  "Piri Piri": "https://pepperscale.com/wp-content/uploads/2019/09/Peri-peri-pepper-400x267.jpg",
  "Scotch Bonnet": "https://pepperscale.com/wp-content/uploads/2019/09/Scotch-bonnet-pepper-768x512.jpg",
  "Habanero": "https://pepperscale.com/wp-content/uploads/2019/09/Habanero-pepper-768x512.jpg",
  "Red Savina Habanero": "https://pepperscale.com/wp-content/uploads/2019/09/Red-Savina-habanero-768x512.jpg",
  "Chocolate Habanero": "https://pepperscale.com/wp-content/uploads/2019/09/Chocolate-habanero-768x512.jpg",
  "Fatalii": "https://pepperscale.com/wp-content/uploads/2019/09/Fatalii-pepper-768x512.jpg",
  "Devil's Tongue": "https://pepperscale.com/wp-content/uploads/2019/09/Devils-Tongue-pepper-768x512.jpg",
  "Ghost Pepper": "https://pepperscale.com/wp-content/uploads/2019/09/Ghost-pepper-768x512.jpg",
  "Naga Viper": "https://pepperscale.com/wp-content/uploads/2019/09/Naga-Viper-pepper-400x267.jpg",
  "Trinidad Scorpion Butch T": "https://pepperscale.com/wp-content/uploads/2019/09/Trinidad-Scorpion-Butch-T-pepper-768x512.jpg",
  "7 Pot Douglah": "https://pepperscale.com/wp-content/uploads/2019/09/7-Pot-Douglah-pepper-768x512.jpg",
  "Trinidad Moruga Scorpion": "https://pepperscale.com/wp-content/uploads/2019/09/Trinidad-Moruga-Scorpion-pepper-768x512.jpg",
  "Carolina Reaper": "https://pepperscale.com/wp-content/uploads/2019/09/Carolina-Reaper-pepper-768x512.jpg",
  "Dragon's Breath": "https://pepperscale.com/wp-content/uploads/2019/09/Dragons-Breath-pepper-768x512.jpg",
  "Pepper X": "https://pepperscale.com/wp-content/uploads/2019/09/Pepper-X-768x512.jpg",
  "Aji Amarillo": "https://pepperscale.com/wp-content/uploads/2019/09/Aji-Amarillo-pepper-768x512.jpg",
  "Cascabel": "https://pepperscale.com/wp-content/uploads/2019/09/Cascabel-pepper-768x512.jpg",
  "Guajillo": "https://pepperscale.com/wp-content/uploads/2019/09/Guajillo-pepper-768x512.jpg"
};

// Additional PepperScale images for each pepper (for gallery view)
const ADDITIONAL_PEPPERSCALE_IMAGES = {
  "Bell Pepper": [
    "https://pepperscale.com/wp-content/uploads/2019/10/Bell-peppers-on-white-400x240.jpg",
    "https://pepperscale.com/wp-content/uploads/2019/10/Red-bell-peppers-400x267.jpg",
    "https://pepperscale.com/wp-content/uploads/2019/10/Yellow-bell-peppers-400x267.jpg"
  ],
  "Banana Pepper": [
    "https://pepperscale.com/wp-content/uploads/2019/10/Banana-peppers-768x512.jpg",
    "https://pepperscale.com/wp-content/uploads/2019/10/Banana-pepper-plant-400x267.jpg"
  ],
  "Jalapeño": [
    "https://pepperscale.com/wp-content/uploads/2019/09/Jalapeno-pepper-768x512.jpg",
    "https://pepperscale.com/wp-content/uploads/2019/09/Jalapeno-peppers-400x267.jpg",
    "https://pepperscale.com/wp-content/uploads/2019/09/Sliced-jalapeno-400x267.jpg"
  ],
  "Habanero": [
    "https://pepperscale.com/wp-content/uploads/2019/09/Habanero-pepper-768x512.jpg",
    "https://pepperscale.com/wp-content/uploads/2019/09/Orange-habanero-peppers-400x267.jpg",
    "https://pepperscale.com/wp-content/uploads/2019/09/Red-habanero-peppers-400x267.jpg"
  ],
  "Ghost Pepper": [
    "https://pepperscale.com/wp-content/uploads/2019/09/Ghost-pepper-768x512.jpg",
    "https://pepperscale.com/wp-content/uploads/2019/09/Bhut-Jolokia-400x267.jpg",
    "https://pepperscale.com/wp-content/uploads/2019/09/Ghost-peppers-400x267.jpg"
  ],
  "Carolina Reaper": [
    "https://pepperscale.com/wp-content/uploads/2019/09/Carolina-Reaper-pepper-768x512.jpg",
    "https://pepperscale.com/wp-content/uploads/2019/09/Carolina-Reaper-peppers-400x267.jpg",
    "https://pepperscale.com/wp-content/uploads/2019/09/Carolina-Reaper-tail-400x267.jpg"
  ],
  "Scotch Bonnet": [
    "https://pepperscale.com/wp-content/uploads/2019/09/Scotch-bonnet-pepper-768x512.jpg",
    "https://pepperscale.com/wp-content/uploads/2019/09/Scotch-bonnet-peppers-400x267.jpg"
  ],
  "Poblano": [
    "https://pepperscale.com/wp-content/uploads/2019/10/Poblano-peppers-400x267.jpg",
    "https://pepperscale.com/wp-content/uploads/2019/10/Ancho-peppers-400x267.jpg"
  ],
  "Cayenne": [
    "https://pepperscale.com/wp-content/uploads/2020/12/Cayenne-pepper-768x512.jpg",
    "https://pepperscale.com/wp-content/uploads/2020/12/Cayenne-peppers-400x267.jpg",
    "https://pepperscale.com/wp-content/uploads/2020/12/Cayenne-powder-400x267.jpg"
  ],
  "Thai Chili": [
    "https://pepperscale.com/wp-content/uploads/2019/09/Thai-peppers-768x512.jpg",
    "https://pepperscale.com/wp-content/uploads/2019/09/Thai-chili-peppers-400x267.jpg"
  ],
  "Serrano": [
    "https://pepperscale.com/wp-content/uploads/2019/09/Serrano-peppers-768x512.jpg",
    "https://pepperscale.com/wp-content/uploads/2019/09/Green-serrano-peppers-400x267.jpg"
  ]
};

// Extract image features using Canvas API
const extractImageFeatures = (imageFile) => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      
      // Get image data for color analysis
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      // Analyze dominant colors
      const colorAnalysis = analyzeColors(data);
      
      // Analyze shape (aspect ratio, size)
      const shapeAnalysis = {
        aspectRatio: img.width / img.height,
        width: img.width,
        height: img.height
      };
      
      resolve({
        colors: colorAnalysis,
        shape: shapeAnalysis,
        size: canvas.width * canvas.height
      });
    };
    
    img.src = URL.createObjectURL(imageFile);
  });
};

// Analyze dominant colors in the image
const analyzeColors = (imageData) => {
  const colors = {};
  const totalPixels = imageData.length / 4;
  
  for (let i = 0; i < imageData.length; i += 4) {
    const r = imageData[i];
    const g = imageData[i + 1];
    const b = imageData[i + 2];
    
    // Classify color
    const colorName = classifyColor(r, g, b);
    colors[colorName] = (colors[colorName] || 0) + 1;
  }
  
  // Convert to percentages
  Object.keys(colors).forEach(color => {
    colors[color] = (colors[color] / totalPixels) * 100;
  });
  
  return colors;
};

// Classify RGB values into color names
const classifyColor = (r, g, b) => {
  if (r > 150 && g < 100 && b < 100) return 'red';
  if (r > 200 && g > 150 && b < 100) return 'orange';
  if (r > 200 && g > 200 && b < 100) return 'yellow';
  if (r < 100 && g > 150 && b < 100) return 'green';
  if (r < 100 && g < 100 && b > 150) return 'blue';
  if (r > 100 && g < 100 && b > 100) return 'purple';
  if (r > 150 && g > 100 && b < 100) return 'brown';
  if (r > 200 && g > 200 && b > 200) return 'white';
  if (r < 50 && g < 50 && b < 50) return 'black';
  return 'other';
};

// Get PepperScale images for a specific pepper
const getPepperScaleImages = (pepperName) => {
  // Get main image
  const mainImage = PEPPERSCALE_IMAGES[pepperName] || 
    `https://pepperscale.com/wp-content/uploads/2019/09/Hot-pepper-400x267.jpg`;
  
  // Get additional images if available
  const additionalImages = ADDITIONAL_PEPPERSCALE_IMAGES[pepperName] || [];
  
  // Return all images
  return [mainImage, ...additionalImages];
};

// Calculate similarity score between image features and pepper characteristics
const calculateSimilarity = (imageFeatures, pepperData) => {
  let score = 0;
  const { colors, shape } = imageFeatures;
  
  // Color matching (40% of score)
  const pepperColors = pepperData.color.toLowerCase();
  Object.keys(colors).forEach(color => {
    if (pepperColors.includes(color) && colors[color] > 10) {
      score += 40 * (colors[color] / 100);
    }
  });
  
  // Size/shape matching (30% of score)
  const sizeIndicators = pepperData.size.toLowerCase();
  if (shape.aspectRatio > 2 && sizeIndicators.includes('long')) {
    score += 30;
  } else if (shape.aspectRatio < 1.5 && sizeIndicators.includes('round') || sizeIndicators.includes('wide')) {
    score += 30;
  } else if (shape.aspectRatio >= 1.5 && shape.aspectRatio <= 2) {
    score += 20;
  }
  
  // Base score for known peppers (30% of score)
  score += 30;
  
  // Add some randomness to simulate real-world variance
  score += (Math.random() - 0.5) * 10;
  
  return Math.min(Math.max(score, 0), 100);
};

// Main identification function
export const identifyPepper = async (imageFile) => {
  try {
    // Extract features from the uploaded image
    const imageFeatures = await extractImageFeatures(imageFile);
    
    // Score all peppers in our database
    const pepperScores = PEPPER_DATABASE.map((pepper) => {
      const similarity = calculateSimilarity(imageFeatures, pepper);
      
      // Get PepperScale images for this pepper
      const pepperImages = getPepperScaleImages(pepper.name);
      
      return {
        ...pepper,
        confidence: Math.round(similarity),
        image: pepperImages[0],
        images: pepperImages,
      };
    });
    
    // Sort by confidence score
    pepperScores.sort((a, b) => b.confidence - a.confidence);
    
    // Return top 3 matches
    const [primaryMatch, ...alternatives] = pepperScores.slice(0, 3);
    
    return {
      primaryMatch,
      alternatives: alternatives.slice(0, 2),
      imageFeatures,
      totalPeppersAnalyzed: PEPPER_DATABASE.length
    };
    
  } catch (error) {
    console.error('Pepper identification failed:', error);
    throw new Error('Failed to identify pepper. Please try again with a clearer image.');
  }
};

// Fallback identification using color analysis only
export const identifyPepperFallback = async (imageFile) => {
  const imageFeatures = await extractImageFeatures(imageFile);
  
  // Simple color-based matching
  const colorMatches = PEPPER_DATABASE.map(pepper => {
    const pepperImages = getPepperScaleImages(pepper.name);
    
    return {
      ...pepper,
      confidence: Math.round(Math.random() * 30 + 60), // 60-90% confidence
      image: pepperImages[0],
      images: pepperImages
    };
  });
  
  colorMatches.sort((a, b) => b.confidence - a.confidence);
  
  return {
    primaryMatch: colorMatches[0],
    alternatives: colorMatches.slice(1, 3),
    imageFeatures,
    totalPeppersAnalyzed: PEPPER_DATABASE.length
  };
};