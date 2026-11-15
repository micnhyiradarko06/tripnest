// TripNest destination data.
// Each place is written once. The page builds the cards from this list.
// Costs are rough levels: "$" = budget, "$$" = mid-range, "$$$" = premium.
// Check facts on official tourism sites before the final presentation.

const DRY_SEASON = ["Nov", "Dec", "Jan", "Feb", "Mar"];
const RAINY_SEASON = ["Jun", "Jul", "Aug", "Sep", "Oct"];
const MILD_SEASONS = ["Apr", "May", "Jun", "Sep", "Oct"];

const DESTINATIONS = [
  // ---------- GHANA ----------
  { id: 1, name: "Cape Coast Castle", country: "Ghana", region: "Africa", category: "History",
    summary: "A UNESCO World Heritage fortress on the Atlantic coast and a key site in the story of the slave trade.",
    bestMonths: DRY_SEASON, cost: "$",
    activities: ["Guided castle tour", "Beach walk at Elmina", "Kakum Canopy Walk day trip"] },

  { id: 2, name: "Elmina Castle", country: "Ghana", region: "Africa", category: "History",
    summary: "One of the oldest European buildings in sub-Saharan Africa, beside a busy fishing harbour.",
    bestMonths: DRY_SEASON, cost: "$",
    activities: ["Castle tour", "Fishing harbour visit", "St. George's Castle views"] },

  { id: 3, name: "Kakum National Park", country: "Ghana", region: "Africa", category: "Nature",
    summary: "Rainforest park famous for its canopy walkway high above the forest floor.",
    bestMonths: ["Dec", "Jan", "Feb", "Mar"], cost: "$",
    activities: ["Canopy walkway", "Forest nature walk", "Night wildlife watching"] },

  { id: 4, name: "Mole National Park", country: "Ghana", region: "Africa", category: "Wildlife",
    summary: "Ghana's largest wildlife reserve, where you can see elephants on a walking safari.",
    bestMonths: DRY_SEASON, cost: "$$",
    activities: ["Walking safari", "Elephant spotting", "Waterhole viewing"] },

  { id: 5, name: "Wli Waterfalls", country: "Ghana", region: "Africa", category: "Nature",
    summary: "The tallest waterfall in Ghana, reached by a forest walk in the Volta Region.",
    bestMonths: RAINY_SEASON, cost: "$",
    activities: ["Hike to the lower falls", "Swimming", "Bat colony viewing"] },

  { id: 6, name: "Lake Bosomtwe", country: "Ghana", region: "Africa", category: "Nature",
    summary: "A sacred crater lake near Kumasi, good for a quiet weekend away.",
    bestMonths: DRY_SEASON, cost: "$",
    activities: ["Kayaking", "Lakeside relaxing", "Village visits"] },

  { id: 7, name: "Labadi Beach", country: "Ghana", region: "Africa", category: "Beach",
    summary: "Accra's lively public beach with music, food and horse rides.",
    bestMonths: DRY_SEASON, cost: "$",
    activities: ["Beach games", "Horse riding", "Local food stalls"] },

  { id: 8, name: "Kintampo Waterfalls", country: "Ghana", region: "Africa", category: "Nature",
    summary: "Layered falls with swimming pools, an easy stop between northern and southern Ghana.",
    bestMonths: RAINY_SEASON, cost: "$",
    activities: ["Swimming", "Picnic", "Short forest hike"] },

  { id: 9, name: "Larabanga Mosque", country: "Ghana", region: "Africa", category: "Culture",
    summary: "A mud-and-timber mosque in the Sudanese style, thought to be one of the oldest in West Africa.",
    bestMonths: DRY_SEASON, cost: "$",
    activities: ["Mosque visit with a guide", "Village walk", "Combine with Mole National Park"] },

  { id: 10, name: "Busua Beach", country: "Ghana", region: "Africa", category: "Beach",
    summary: "A relaxed surf and beach town on Ghana's Western coast.",
    bestMonths: DRY_SEASON, cost: "$$",
    activities: ["Surf lessons", "Beach lounging", "Fresh seafood"] },

  { id: 11, name: "Aburi Botanical Gardens", country: "Ghana", region: "Africa", category: "Nature",
    summary: "Cool hillside gardens above Accra with shady trees and flower beds.",
    bestMonths: DRY_SEASON, cost: "$",
    activities: ["Garden walk", "Picnic", "Craft market"] },

  { id: 12, name: "Nzulezu Stilt Village", country: "Ghana", region: "Africa", category: "Culture",
    summary: "A village built on stilts above Lake Tadane, reached by canoe.",
    bestMonths: DRY_SEASON, cost: "$",
    activities: ["Canoe ride", "Village tour", "Birdwatching"] },

  { id: 13, name: "Kwame Nkrumah Memorial Park", country: "Ghana", region: "Africa", category: "History",
    summary: "The memorial and museum for Ghana's first president, in the heart of Accra.",
    bestMonths: DRY_SEASON, cost: "$",
    activities: ["Museum visit", "Mausoleum visit", "Walk around the gardens"] },

  { id: 14, name: "Boti Falls", country: "Ghana", region: "Africa", category: "Nature",
    summary: "Twin waterfalls in the Eastern Region, close to the Umbrella Rock.",
    bestMonths: RAINY_SEASON, cost: "$",
    activities: ["Falls viewing", "Umbrella Rock visit", "Forest trail"] },

  { id: 15, name: "Ada Foah", country: "Ghana", region: "Africa", category: "Beach",
    summary: "Where the Volta River meets the sea, with sandbars, islands and quiet beaches.",
    bestMonths: DRY_SEASON, cost: "$$",
    activities: ["River boat trip", "Island visit", "Beach camping"] },

  { id: 16, name: "Paga Crocodile Pond", country: "Ghana", region: "Africa", category: "Wildlife",
    summary: "A village pond in northern Ghana where visitors can get close to friendly crocodiles.",
    bestMonths: DRY_SEASON, cost: "$",
    activities: ["Crocodile viewing", "Village tour", "Border town visit"] },

  // ---------- REST OF AFRICA ----------
  { id: 17, name: "Gorée Island", country: "Senegal", region: "Africa", category: "History",
    summary: "A small island off Dakar with colourful houses and a memorial to the slave trade.",
    bestMonths: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"], cost: "$$",
    activities: ["House of Slaves visit", "Ferry from Dakar", "Art galleries"] },

  { id: 18, name: "Lake Retba (Pink Lake)", country: "Senegal", region: "Africa", category: "Nature",
    summary: "A shallow lake whose water turns pink, with salt harvesters at work.",
    bestMonths: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"], cost: "$$",
    activities: ["Salt harvesting tour", "Dune buggy ride", "Photography"] },

  { id: 19, name: "Grand-Bassam", country: "Côte d'Ivoire", region: "Africa", category: "History",
    summary: "A former colonial capital with old buildings and a long sandy beach.",
    bestMonths: DRY_SEASON, cost: "$$",
    activities: ["Old town walk", "Beach day", "Craft market"] },

  { id: 20, name: "Ouidah", country: "Benin", region: "Africa", category: "Culture",
    summary: "The heart of Vodun culture, with the Route of Slaves leading to the sea.",
    bestMonths: DRY_SEASON, cost: "$",
    activities: ["Python Temple visit", "Route of Slaves walk", "Door of No Return"] },

  { id: 21, name: "Ganvié", country: "Benin", region: "Africa", category: "Culture",
    summary: "A large stilt village on Lake Nokoué, often called the Venice of Africa.",
    bestMonths: DRY_SEASON, cost: "$",
    activities: ["Pirogue boat tour", "Floating market", "Local lunch"] },

  { id: 22, name: "Zanzibar", country: "Tanzania", region: "Africa", category: "Beach",
    summary: "An island of white beaches, spice farms and the old Stone Town.",
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Jan", "Feb"], cost: "$$",
    activities: ["Stone Town tour", "Snorkelling", "Spice farm visit"] },

  { id: 23, name: "Serengeti National Park", country: "Tanzania", region: "Africa", category: "Wildlife",
    summary: "Vast plains famous for the great wildebeest migration and big cats.",
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct"], cost: "$$$",
    activities: ["Game drive", "Hot air balloon safari", "Migration viewing"] },

  { id: 24, name: "Maasai Mara", country: "Kenya", region: "Africa", category: "Wildlife",
    summary: "A famous reserve for lions, elephants and the river crossings of the migration.",
    bestMonths: ["Jul", "Aug", "Sep", "Oct"], cost: "$$$",
    activities: ["Game drive", "Maasai village visit", "River crossing viewing"] },

  { id: 25, name: "Victoria Falls", country: "Zambia / Zimbabwe", region: "Africa", category: "Adventure",
    summary: "One of the largest waterfalls in the world, on the Zambezi River.",
    bestMonths: ["Mar", "Apr", "May", "Aug", "Sep", "Oct"], cost: "$$$",
    activities: ["Falls viewing", "Bungee jump", "Zambezi sunset cruise"] },

  { id: 26, name: "Table Mountain, Cape Town", country: "South Africa", region: "Africa", category: "Landmark",
    summary: "A flat-topped mountain above Cape Town with views of the city and the sea.",
    bestMonths: DRY_SEASON, cost: "$$",
    activities: ["Cable car ride", "Hiking", "Visit Cape Point"] },

  { id: 27, name: "Pyramids of Giza", country: "Egypt", region: "Africa", category: "History",
    summary: "The last surviving wonder of the ancient world, next to the Sphinx near Cairo.",
    bestMonths: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], cost: "$$",
    activities: ["Pyramid tour", "Camel ride", "Grand Egyptian Museum visit"] },

  { id: 28, name: "Marrakech Medina", country: "Morocco", region: "Africa", category: "City",
    summary: "A walled old city of souks, palaces and the Jemaa el-Fnaa square.",
    bestMonths: ["Mar", "Apr", "May", "Sep", "Oct", "Nov"], cost: "$$",
    activities: ["Souk shopping", "Palace visits", "Day trip to the Atlas Mountains"] },

  // ---------- EUROPE ----------
  { id: 29, name: "Santorini", country: "Greece", region: "Europe", category: "Beach",
    summary: "A volcanic island known for white villages, sunsets and sea views.",
    bestMonths: ["May", "Jun", "Sep", "Oct"], cost: "$$$",
    activities: ["Sunset at Oia", "Boat trip to the volcano", "Wine tasting"] },

  { id: 30, name: "Eiffel Tower, Paris", country: "France", region: "Europe", category: "Landmark",
    summary: "Paris's most famous landmark, with city views from the top.",
    bestMonths: MILD_SEASONS, cost: "$$$",
    activities: ["Tower summit visit", "Seine river cruise", "Louvre Museum"] },

  { id: 31, name: "Colosseum, Rome", country: "Italy", region: "Europe", category: "History",
    summary: "The ancient arena at the centre of Rome, close to the Roman Forum.",
    bestMonths: MILD_SEASONS, cost: "$$$",
    activities: ["Colosseum tour", "Roman Forum walk", "Vatican Museums"] },

  { id: 32, name: "Venice", country: "Italy", region: "Europe", category: "City",
    summary: "A city built on canals, with gondolas, bridges and historic squares.",
    bestMonths: MILD_SEASONS, cost: "$$$",
    activities: ["Gondola ride", "St. Mark's Square", "Island trip to Murano"] },

  { id: 33, name: "Barcelona", country: "Spain", region: "Europe", category: "City",
    summary: "A seaside city known for Gaudí's buildings, food and beaches.",
    bestMonths: ["May", "Jun", "Sep", "Oct"], cost: "$$",
    activities: ["Sagrada Família", "Park Güell", "Tapas tour"] },

  // ---------- ASIA ----------
  { id: 34, name: "Kyoto", country: "Japan", region: "Asia", category: "Culture",
    summary: "Japan's old capital, full of temples, gardens and traditional streets.",
    bestMonths: ["Mar", "Apr", "Oct", "Nov"], cost: "$$$",
    activities: ["Fushimi Inari shrine", "Tea ceremony", "Bamboo grove walk"] },

  { id: 35, name: "Bali", country: "Indonesia", region: "Asia", category: "Beach",
    summary: "An island of temples, rice terraces and surf beaches.",
    bestMonths: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], cost: "$$",
    activities: ["Rice terrace walk", "Temple visits", "Surfing"] },

  { id: 36, name: "Dubai", country: "United Arab Emirates", region: "Asia", category: "City",
    summary: "A modern city of record-breaking towers, malls and desert trips.",
    bestMonths: DRY_SEASON, cost: "$$$",
    activities: ["Burj Khalifa", "Desert safari", "Dubai Mall"] },

  { id: 37, name: "Taj Mahal, Agra", country: "India", region: "Asia", category: "History",
    summary: "A white marble tomb built by Emperor Shah Jahan, one of the world's best-known buildings.",
    bestMonths: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"], cost: "$",
    activities: ["Sunrise visit", "Agra Fort", "Mehtab Bagh garden"] },

  { id: 38, name: "Maldives", country: "Maldives", region: "Asia", category: "Beach",
    summary: "A chain of islands with clear water, coral reefs and overwater villas.",
    bestMonths: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], cost: "$$$",
    activities: ["Snorkelling", "Diving", "Sandbank picnic"] },

  // ---------- AMERICAS ----------
  { id: 39, name: "Machu Picchu", country: "Peru", region: "Americas", category: "History",
    summary: "An Inca citadel high in the Andes, reached by train or the Inca Trail.",
    bestMonths: ["May", "Jun", "Jul", "Aug", "Sep"], cost: "$$$",
    activities: ["Citadel tour", "Inca Trail hike", "Huayna Picchu climb"] },

  { id: 40, name: "Rio de Janeiro", country: "Brazil", region: "Americas", category: "City",
    summary: "A beach city with Christ the Redeemer, Sugarloaf Mountain and lively music.",
    bestMonths: ["Dec", "Jan", "Feb", "Mar"], cost: "$$",
    activities: ["Christ the Redeemer", "Copacabana Beach", "Sugarloaf cable car"] },

  { id: 41, name: "New York City", country: "United States", region: "Americas", category: "City",
    summary: "A busy city of skyscrapers, museums, parks and food from everywhere.",
    bestMonths: ["Apr", "May", "Jun", "Sep", "Oct", "Nov"], cost: "$$$",
    activities: ["Statue of Liberty", "Central Park", "Broadway show"] },

  { id: 42, name: "Banff National Park", country: "Canada", region: "Americas", category: "Nature",
    summary: "Mountains, glaciers and turquoise lakes in the Canadian Rockies.",
    bestMonths: ["Jun", "Jul", "Aug", "Sep"], cost: "$$$",
    activities: ["Lake Louise visit", "Hiking", "Hot springs"] },

  // ---------- OCEANIA ----------
  { id: 43, name: "Sydney Opera House", country: "Australia", region: "Oceania", category: "Landmark",
    summary: "A famous harbour-side building with views of the Sydney Harbour Bridge.",
    bestMonths: ["Sep", "Oct", "Nov", "Mar", "Apr", "May"], cost: "$$$",
    activities: ["Opera House tour", "Harbour ferry ride", "Bondi Beach"] },

  { id: 44, name: "Great Barrier Reef", country: "Australia", region: "Oceania", category: "Nature",
    summary: "The world's largest coral reef system, off Queensland's coast.",
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct"], cost: "$$$",
    activities: ["Snorkelling", "Scuba diving", "Glass-bottom boat"] }
];