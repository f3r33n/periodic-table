// Elements data - complete set of 118 elements
const elements = [
    // Period 1
    {"name": "Hydrogen", "symbol": "H", "number": 1, "mass": 1.008, "category": "nonmetal", "group": 1, "period": 1, "electrons": "1s¹", "uses": "Rocket fuel, chemical production.", "discovered": 1766, "fun_fact": "Most abundant element in the universe.", "atomic_radius": 53, "electronegativity": 2.20, "melting_point": -259.14, "boiling_point": -252.87},
    {"name": "Helium", "symbol": "He", "number": 2, "mass": 4.0026, "category": "noble-gas", "group": 18, "period": 1, "electrons": "1s²", "uses": "Balloons, cooling magnets.", "discovered": 1895, "fun_fact": "Has the lowest boiling point of all elements.", "atomic_radius": 31, "electronegativity": null, "melting_point": -272.2, "boiling_point": -268.93},
    
    // Period 2
    {"name": "Lithium", "symbol": "Li", "number": 3, "mass": 6.94, "category": "alkali-metal", "group": 1, "period": 2, "electrons": "[He] 2s¹", "uses": "Batteries, glass, ceramics.", "discovered": 1817, "fun_fact": "Lightest of all metals.", "atomic_radius": 167, "electronegativity": 0.98, "melting_point": 180.54, "boiling_point": 1342},
    {"name": "Beryllium", "symbol": "Be", "number": 4, "mass": 9.0122, "category": "alkaline-earth-metal", "group": 2, "period": 2, "electrons": "[He] 2s²", "uses": "Aerospace components, alloys.", "discovered": 1798, "fun_fact": "Used in the James Webb Space Telescope's mirrors.", "atomic_radius": 112, "electronegativity": 1.57, "melting_point": 1287, "boiling_point": 2470},
    {"name": "Boron", "symbol": "B", "number": 5, "mass": 10.81, "category": "metalloid", "group": 13, "period": 2, "electrons": "[He] 2s² 2p¹", "uses": "Borosilicate glass, detergents.", "discovered": 1808, "fun_fact": "A key component in borax, which is used as a cleaning agent.", "atomic_radius": 87, "electronegativity": 2.04, "melting_point": 2076, "boiling_point": 3927},
    {"name": "Carbon", "symbol": "C", "number": 6, "mass": 12.011, "category": "nonmetal", "group": 14, "period": 2, "electrons": "[He] 2s² 2p²", "uses": "Organic compounds, diamonds, graphite.", "discovered": "Ancient", "fun_fact": "The basis of all known life on Earth.", "atomic_radius": 67, "electronegativity": 2.55, "melting_point": 3550, "boiling_point": 4027},
    {"name": "Nitrogen", "symbol": "N", "number": 7, "mass": 14.007, "category": "nonmetal", "group": 15, "period": 2, "electrons": "[He] 2s² 2p³", "uses": "Fertilizers, liquid nitrogen cooling.", "discovered": 1772, "fun_fact": "Makes up about 78% of Earth's atmosphere.", "atomic_radius": 56, "electronegativity": 3.04, "melting_point": -210, "boiling_point": -195.79},
    {"name": "Oxygen", "symbol": "O", "number": 8, "mass": 15.999, "category": "nonmetal", "group": 16, "period": 2, "electrons": "[He] 2s² 2p⁴", "uses": "Breathing, combustion, steel production.", "discovered": 1774, "fun_fact": "Second most abundant element in the Earth's atmosphere.", "atomic_radius": 48, "electronegativity": 3.44, "melting_point": -218.79, "boiling_point": -182.96},
    {"name": "Fluorine", "symbol": "F", "number": 9, "mass": 18.998, "category": "halogen", "group": 17, "period": 2, "electrons": "[He] 2s² 2p⁵", "uses": "Toothpaste, plastics (Teflon).", "discovered": 1886, "fun_fact": "Most electronegative element.", "atomic_radius": 42, "electronegativity": 3.98, "melting_point": -219.62, "boiling_point": -188.12},
    {"name": "Neon", "symbol": "Ne", "number": 10, "mass": 20.180, "category": "noble-gas", "group": 18, "period": 2, "electrons": "[He] 2s² 2p⁵", "uses": "Neon signs, vacuum tubes.", "discovered": 1898, "fun_fact": "Produces a distinctive red-orange glow in neon lights.", "atomic_radius": 38, "electronegativity": null, "melting_point": -248.59, "boiling_point": -246.08},
    
    // Period 3
    {"name": "Sodium", "symbol": "Na", "number": 11, "mass": 22.990, "category": "alkali-metal", "group": 1, "period": 3, "electrons": "[Ne] 3s¹", "uses": "Salt, streetlights, nuclear reactors.", "discovered": 1807, "fun_fact": "Explosively reactive with water.", "atomic_radius": 190, "electronegativity": 0.93, "melting_point": 97.72, "boiling_point": 883},
    {"name": "Magnesium", "symbol": "Mg", "number": 12, "mass": 24.305, "category": "alkaline-earth-metal", "group": 2, "period": 3, "electrons": "[Ne] 3s²", "uses": "Lightweight alloys, flares.", "discovered": 1755, "fun_fact": "Burns with a bright, white light.", "atomic_radius": 145, "electronegativity": 1.31, "melting_point": 650, "boiling_point": 1090},
    {"name": "Aluminum", "symbol": "Al", "number": 13, "mass": 26.982, "category": "post-transition-metal", "group": 13, "period": 3, "electrons": "[Ne] 3s² 3p¹", "uses": "Packaging, aerospace, construction.", "discovered": 1825, "fun_fact": "Most abundant metal in the Earth's crust.", "atomic_radius": 118, "electronegativity": 1.61, "melting_point": 660.32, "boiling_point": 2519},
    {"name": "Silicon", "symbol": "Si", "number": 14, "mass": 28.085, "category": "metalloid", "group": 14, "period": 3, "electrons": "[Ne] 3s² 3p²", "uses": "Electronics, semiconductors.", "discovered": 1824, "fun_fact": "Second most abundant element in the Earth's crust.", "atomic_radius": 111, "electronegativity": 1.90, "melting_point": 1414, "boiling_point": 3265},
    {"name": "Phosphorus", "symbol": "P", "number": 15, "mass": 30.974, "category": "nonmetal", "group": 15, "period": 3, "electrons": "[Ne] 3s² 3p³", "uses": "Fertilizers, matches, detergents.", "discovered": 1669, "fun_fact": "The word 'phosphorus' means 'light-bringing' in Greek.", "atomic_radius": 106, "electronegativity": 2.19, "melting_point": 44.2, "boiling_point": 280.5},
    {"name": "Sulfur", "symbol": "S", "number": 16, "mass": 32.06, "category": "nonmetal", "group": 16, "period": 3, "electrons": "[Ne] 3s² 3p⁴", "uses": "Sulfuric acid, fertilizers, fireworks.", "discovered": "Ancient", "fun_fact": "Has been known since ancient times for its distinct yellow color.", "atomic_radius": 102, "electronegativity": 2.58, "melting_point": 115.21, "boiling_point": 444.72},
    {"name": "Chlorine", "symbol": "Cl", "number": 17, "mass": 35.453, "category": "halogen", "group": 17, "period": 3, "electrons": "[Ne] 3s² 3p⁵", "uses": "Disinfectants, PVC plastic.", "discovered": 1774, "fun_fact": "Used to make many everyday products, including paper and plastics.", "atomic_radius": 99, "electronegativity": 3.16, "melting_point": -101.5, "boiling_point": -34.04},
    {"name": "Argon", "symbol": "Ar", "number": 18, "mass": 39.948, "category": "noble-gas", "group": 18, "period": 3, "electrons": "[Ne] 3s² 3p⁶", "uses": "Welding, lighting, window insulation.", "discovered": 1894, "fun_fact": "The third most abundant gas in Earth's atmosphere.", "atomic_radius": 97, "electronegativity": null, "melting_point": -189.35, "boiling_point": -185.85},
    
    // Period 4
    {"name": "Potassium", "symbol": "K", "number": 19, "mass": 39.098, "category": "alkali-metal", "group": 1, "period": 4, "electrons": "[Ar] 4s¹", "uses": "Fertilizers, glass, soaps.", "discovered": 1807, "fun_fact": "Essential for proper nerve function in the human body.", "atomic_radius": 243, "electronegativity": 0.82, "melting_point": 63.5, "boiling_point": 759},
    {"name": "Calcium", "symbol": "Ca", "number": 20, "mass": 40.078, "category": "alkaline-earth-metal", "group": 2, "period": 4, "electrons": "[Ar] 4s²", "uses": "Bones, cement, cheese.", "discovered": 1808, "fun_fact": "The fifth most abundant element in the Earth's crust.", "atomic_radius": 194, "electronegativity": 1.00, "melting_point": 842, "boiling_point": 1484},
    {"name": "Scandium", "symbol": "Sc", "number": 21, "mass": 44.956, "category": "transition-metal", "group": 3, "period": 4, "electrons": "[Ar] 3d¹ 4s²", "uses": "Aerospace components, sports equipment.", "discovered": 1879, "fun_fact": "First of the transition metals.", "atomic_radius": 184, "electronegativity": 1.36, "melting_point": 1541, "boiling_point": 2836},
    {"name": "Titanium", "symbol": "Ti", "number": 22, "mass": 47.867, "category": "transition-metal", "group": 4, "period": 4, "electrons": "[Ar] 3d² 4s²", "uses": "Aircraft, medical implants, pigments.", "discovered": 1791, "fun_fact": "Named after the Titans of Greek mythology.", "atomic_radius": 176, "electronegativity": 1.54, "melting_point": 1668, "boiling_point": 3287},
    {"name": "Vanadium", "symbol": "V", "number": 23, "mass": 50.942, "category": "transition-metal", "group": 5, "period": 4, "electrons": "[Ar] 3d³ 4s²", "uses": "Steel alloys, batteries.", "discovered": 1801, "fun_fact": "Named after Vanadis, the Scandinavian goddess of beauty.", "atomic_radius": 171, "electronegativity": 1.63, "melting_point": 1910, "boiling_point": 3407},
    {"name": "Chromium", "symbol": "Cr", "number": 24, "mass": 51.996, "category": "transition-metal", "group": 6, "period": 4, "electrons": "[Ar] 3d⁵ 4s¹", "uses": "Stainless steel, chrome plating.", "discovered": 1797, "fun_fact": "The name comes from the Greek word 'chroma', meaning color.", "atomic_radius": 166, "electronegativity": 1.66, "melting_point": 1907, "boiling_point": 2671},
    {"name": "Manganese", "symbol": "Mn", "number": 25, "mass": 54.938, "category": "transition-metal", "group": 7, "period": 4, "electrons": "[Ar] 3d⁵ 4s²", "uses": "Steel production, batteries.", "discovered": 1774, "fun_fact": "Essential for human nutrition.", "atomic_radius": 161, "electronegativity": 1.55, "melting_point": 1246, "boiling_point": 2061},
    {"name": "Iron", "symbol": "Fe", "number": 26, "mass": 55.845, "category": "transition-metal", "group": 8, "period": 4, "electrons": "[Ar] 3d⁶ 4s²", "uses": "Steel, magnets, hemoglobin.", "discovered": "Ancient", "fun_fact": "Most abundant element on Earth by mass.", "atomic_radius": 156, "electronegativity": 1.83, "melting_point": 1538, "boiling_point": 2862},
    {"name": "Cobalt", "symbol": "Co", "number": 27, "mass": 58.933, "category": "transition-metal", "group": 9, "period": 4, "electrons": "[Ar] 3d⁷ 4s²", "uses": "Batteries, magnets, pigments.", "discovered": 1735, "fun_fact": "Name comes from German 'kobold' meaning goblin.", "atomic_radius": 152, "electronegativity": 1.88, "melting_point": 1495, "boiling_point": 2927},
    {"name": "Nickel", "symbol": "Ni", "number": 28, "mass": 58.693, "category": "transition-metal", "group": 10, "period": 4, "electrons": "[Ar] 3d⁸ 4s²", "uses": "Stainless steel, coins, batteries.", "discovered": 1751, "fun_fact": "Earth's core is composed mainly of iron and nickel.", "atomic_radius": 149, "electronegativity": 1.91, "melting_point": 1455, "boiling_point": 2913},
    {"name": "Copper", "symbol": "Cu", "number": 29, "mass": 63.546, "category": "transition-metal", "group": 11, "period": 4, "electrons": "[Ar] 3d¹⁰ 4s¹", "uses": "Electrical wiring, plumbing, coins.", "discovered": "Ancient", "fun_fact": "Has been used for over 10,000 years.", "atomic_radius": 145, "electronegativity": 1.90, "melting_point": 1085, "boiling_point": 2562},
    {"name": "Zinc", "symbol": "Zn", "number": 30, "mass": 65.38, "category": "transition-metal", "group": 12, "period": 4, "electrons": "[Ar] 3d¹⁰ 4s²", "uses": "Galvanization, batteries, alloys.", "discovered": 1746, "fun_fact": "Essential for human health and growth.", "atomic_radius": 142, "electronegativity": 1.65, "melting_point": 419.53, "boiling_point": 907},
    {"name": "Gallium", "symbol": "Ga", "number": 31, "mass": 69.723, "category": "post-transition-metal", "group": 13, "period": 4, "electrons": "[Ar] 3d¹⁰ 4s² 4p¹", "uses": "Semiconductors, LEDs.", "discovered": 1875, "fun_fact": "Melts in your hand (29.76°C).", "atomic_radius": 136, "electronegativity": 1.81, "melting_point": 29.76, "boiling_point": 2204},
    {"name": "Germanium", "symbol": "Ge", "number": 32, "mass": 72.630, "category": "metalloid", "group": 14, "period": 4, "electrons": "[Ar] 3d¹⁰ 4s² 4p²", "uses": "Semiconductors, fiber optics.", "discovered": 1886, "fun_fact": "Predicted by Mendeleev before its discovery.", "atomic_radius": 125, "electronegativity": 2.01, "melting_point": 938.25, "boiling_point": 2833},
    {"name": "Arsenic", "symbol": "As", "number": 33, "mass": 74.922, "category": "metalloid", "group": 15, "period": 4, "electrons": "[Ar] 3d¹⁰ 4s² 4p³", "uses": "Semiconductors, pesticides.", "discovered": "Ancient", "fun_fact": "Known since ancient times as a poison.", "atomic_radius": 114, "electronegativity": 2.18, "melting_point": 817, "boiling_point": 614},
    {"name": "Selenium", "symbol": "Se", "number": 34, "mass": 78.971, "category": "nonmetal", "group": 16, "period": 4, "electrons": "[Ar] 3d¹⁰ 4s² 4p⁴", "uses": "Photocopiers, glass production.", "discovered": 1817, "fun_fact": "Named after the Greek word for moon (selene).", "atomic_radius": 103, "electronegativity": 2.55, "melting_point": 221, "boiling_point": 685},
    {"name": "Bromine", "symbol": "Br", "number": 35, "mass": 79.904, "category": "halogen", "group": 17, "period": 4, "electrons": "[Ar] 3d¹⁰ 4s² 4p⁵", "uses": "Flame retardants, photography.", "discovered": 1826, "fun_fact": "Only liquid nonmetal at room temperature.", "atomic_radius": 94, "electronegativity": 2.96, "melting_point": -7.2, "boiling_point": 58.8},
    {"name": "Krypton", "symbol": "Kr", "number": 36, "mass": 83.798, "category": "noble-gas", "group": 18, "period": 4, "electrons": "[Ar] 3d¹⁰ 4s² 4p⁶", "uses": "Lighting, photography.", "discovered": 1898, "fun_fact": "Used in some fluorescent lamps.", "atomic_radius": 88, "electronegativity": 3.00, "melting_point": -157.36, "boiling_point": -153.22},
    
    // Period 5
    {"name": "Rubidium", "symbol": "Rb", "number": 37, "mass": 85.468, "category": "alkali-metal", "group": 1, "period": 5, "electrons": "[Kr] 5s¹", "uses": "Vacuum tubes, fireworks.", "discovered": 1861, "fun_fact": "Can spontaneously ignite in air.", "atomic_radius": 265, "electronegativity": 0.82, "melting_point": 39.31, "boiling_point": 688},
    {"name": "Strontium", "symbol": "Sr", "number": 38, "mass": 87.62, "category": "alkaline-earth-metal", "group": 2, "period": 5, "electrons": "[Kr] 5s²", "uses": "Fireworks, flares.", "discovered": 1790, "fun_fact": "Gives fireworks a red color.", "atomic_radius": 219, "electronegativity": 0.95, "melting_point": 777, "boiling_point": 1382},
    {"name": "Yttrium", "symbol": "Y", "number": 39, "mass": 88.906, "category": "transition-metal", "group": 3, "period": 5, "electrons": "[Kr] 4d¹ 5s²", "uses": "LEDs, camera lenses.", "discovered": 1794, "fun_fact": "Named after the village of Ytterby in Sweden.", "atomic_radius": 212, "electronegativity": 1.22, "melting_point": 1526, "boiling_point": 3345},
    {"name": "Zirconium", "symbol": "Zr", "number": 40, "mass": 91.224, "category": "transition-metal", "group": 4, "period": 5, "electrons": "[Kr] 4d² 5s²", "uses": "Nuclear reactors, jewelry.", "discovered": 1789, "fun_fact": "Resistant to corrosion by acids and alkalis.", "atomic_radius": 206, "electronegativity": 1.33, "melting_point": 1855, "boiling_point": 4409},
    {"name": "Niobium", "symbol": "Nb", "number": 41, "mass": 92.906, "category": "transition-metal", "group": 5, "period": 5, "electrons": "[Kr] 4d⁴ 5s¹", "uses": "Superconducting magnets, jewelry.", "discovered": 1801, "fun_fact": "Named after Niobe, daughter of Tantalus from Greek mythology.", "atomic_radius": 198, "electronegativity": 1.6, "melting_point": 2477, "boiling_point": 4744},
    {"name": "Molybdenum", "symbol": "Mo", "number": 42, "mass": 95.95, "category": "transition-metal", "group": 6, "period": 5, "electrons": "[Kr] 4d⁵ 5s¹", "uses": "Alloys, lubricants.", "discovered": 1778, "fun_fact": "Essential trace element for animals and plants.", "atomic_radius": 190, "electronegativity": 2.16, "melting_point": 2623, "boiling_point": 4639},
    {"name": "Technetium", "symbol": "Tc", "number": 43, "mass": 98, "category": "transition-metal", "group": 7, "period": 5, "electrons": "[Kr] 4d⁵ 5s²", "uses": "Medical imaging, corrosion inhibitor.", "discovered": 1937, "fun_fact": "First artificially produced element.", "atomic_radius": 183, "electronegativity": 1.9, "melting_point": 2157, "boiling_point": 4265},
    {"name": "Ruthenium", "symbol": "Ru", "number": 44, "mass": 101.07, "category": "transition-metal", "group": 8, "period": 5, "electrons": "[Kr] 4d⁷ 5s¹", "uses": "Electrical contacts, solar cells.", "discovered": 1844, "fun_fact": "Part of the platinum group metals.", "atomic_radius": 178, "electronegativity": 2.2, "melting_point": 2334, "boiling_point": 4150},
    {"name": "Rhodium", "symbol": "Rh", "number": 45, "mass": 102.91, "category": "transition-metal", "group": 9, "period": 5, "electrons": "[Kr] 4d⁸ 5s¹", "uses": "Catalytic converters, jewelry.", "discovered": 1803, "fun_fact": "One of the rarest and most valuable precious metals.", "atomic_radius": 173, "electronegativity": 2.28, "melting_point": 1964, "boiling_point": 3695},
    {"name": "Palladium", "symbol": "Pd", "number": 46, "mass": 106.42, "category": "transition-metal", "group": 10, "period": 5, "electrons": "[Kr] 4d¹⁰", "uses": "Catalytic converters, electronics.", "discovered": 1803, "fun_fact": "Can absorb up to 900 times its own volume of hydrogen.", "atomic_radius": 169, "electronegativity": 2.20, "melting_point": 1554.9, "boiling_point": 2963},
    {"name": "Silver", "symbol": "Ag", "number": 47, "mass": 107.87, "category": "transition-metal", "group": 11, "period": 5, "electrons": "[Kr] 4d¹⁰ 5s¹", "uses": "Jewelry, photography, electronics.", "discovered": "Ancient", "fun_fact": "Best electrical conductor of all elements.", "atomic_radius": 165, "electronegativity": 1.93, "melting_point": 961.78, "boiling_point": 2162},
    {"name": "Cadmium", "symbol": "Cd", "number": 48, "mass": 112.41, "category": "transition-metal", "group": 12, "period": 5, "electrons": "[Kr] 4d¹⁰ 5s²", "uses": "Batteries, pigments.", "discovered": 1817, "fun_fact": "Highly toxic and carcinogenic.", "atomic_radius": 161, "electronegativity": 1.69, "melting_point": 321.07, "boiling_point": 767},
    {"name": "Indium", "symbol": "In", "number": 49, "mass": 114.82, "category": "post-transition-metal", "group": 13, "period": 5, "electrons": "[Kr] 4d¹⁰ 5s² 5p¹", "uses": "Touch screens, solar panels.", "discovered": 1863, "fun_fact": "Produces a high-pitched 'cry' when bent.", "atomic_radius": 156, "electronegativity": 1.78, "melting_point": 156.60, "boiling_point": 2072},
    {"name": "Tin", "symbol": "Sn", "number": 50, "mass": 118.71, "category": "post-transition-metal", "group": 14, "period": 5, "electrons": "[Kr] 4d¹⁰ 5s² 5p²", "uses": "Cans, solder, bronze.", "discovered": "Ancient", "fun_fact": "Exhibits allotropy with gray and white tin forms.", "atomic_radius": 145, "electronegativity": 1.96, "melting_point": 231.93, "boiling_point": 2602},
    {"name": "Antimony", "symbol": "Sb", "number": 51, "mass": 121.76, "category": "metalloid", "group": 15, "period": 5, "electrons": "[Kr] 4d¹⁰ 5s² 5p³", "uses": "Flame retardants, batteries.", "discovered": "Ancient", "fun_fact": "Known since ancient times.", "atomic_radius": 133, "electronegativity": 2.05, "melting_point": 630.63, "boiling_point": 1587},
    {"name": "Tellurium", "symbol": "Te", "number": 52, "mass": 127.60, "category": "metalloid", "group": 16, "period": 5, "electrons": "[Kr] 4d¹⁰ 5s² 5p⁴", "uses": "Solar panels, thermoelectric devices.", "discovered": 1782, "fun_fact": "Named after the Latin word for earth (tellus).", "atomic_radius": 123, "electronegativity": 2.1, "melting_point": 449.51, "boiling_point": 988},
    {"name": "Iodine", "symbol": "I", "number": 53, "mass": 126.90, "category": "halogen", "group": 17, "period": 5, "electrons": "[Kr] 4d¹⁰ 5s² 5p⁵", "uses": "Disinfectants, thyroid treatment.", "discovered": 1811, "fun_fact": "Sublimes from solid to purple vapor.", "atomic_radius": 115, "electronegativity": 2.66, "melting_point": 113.7, "boiling_point": 184.3},
    {"name": "Xenon", "symbol": "Xe", "number": 54, "mass": 131.29, "category": "noble-gas", "group": 18, "period": 5, "electrons": "[Kr] 4d¹⁰ 5s² 5p⁶", "uses": "Lighting, anesthesia.", "discovered": 1898, "fun_fact": "Used in high-intensity lamps and flashbulbs.", "atomic_radius": 108, "electronegativity": 2.6, "melting_point": -111.75, "boiling_point": -108.0},
    
    // Period 6
    {"name": "Cesium", "symbol": "Cs", "number": 55, "mass": 132.91, "category": "alkali-metal", "group": 1, "period": 6, "electrons": "[Xe] 6s¹", "uses": "Atomic clocks, photoelectric cells.", "discovered": 1860, "fun_fact": "Most electropositive element.", "atomic_radius": 298, "electronegativity": 0.79, "melting_point": 28.44, "boiling_point": 671},
    {"name": "Barium", "symbol": "Ba", "number": 56, "mass": 137.33, "category": "alkaline-earth-metal", "group": 2, "period": 6, "electrons": "[Xe] 6s²", "uses": "X-ray imaging, fireworks.", "discovered": 1808, "fun_fact": "Gives fireworks a green color.", "atomic_radius": 253, "electronegativity": 0.89, "melting_point": 727, "boiling_point": 1897},
    // Lanthanides
    {"name": "Lanthanum", "symbol": "La", "number": 57, "mass": 138.91, "category": "lanthanide", "group": 3, "period": 6, "electrons": "[Xe] 5d¹ 6s²", "uses": "Camera lenses, battery electrodes.", "discovered": 1839, "fun_fact": "First of the lanthanide series.", "atomic_radius": 187, "electronegativity": 1.10, "melting_point": 920, "boiling_point": 3464},
    {"name": "Cerium", "symbol": "Ce", "number": 58, "mass": 140.12, "category": "lanthanide", "group": 3, "period": 6, "electrons": "[Xe] 4f¹ 5d¹ 6s²", "uses": "Catalytic converters, glass polishing.", "discovered": 1803, "fun_fact": "Most abundant of the rare earth elements.", "atomic_radius": 181.8, "electronegativity": 1.12, "melting_point": 795, "boiling_point": 3443},
    {"name": "Praseodymium", "symbol": "Pr", "number": 59, "mass": 140.91, "category": "lanthanide", "group": 3, "period": 6, "electrons": "[Xe] 4f³ 6s²", "uses": "Aircraft engines, studio lighting.", "discovered": 1885, "fun_fact": "Name means 'green twin' in Greek.", "atomic_radius": 182, "electronegativity": 1.13, "melting_point": 935, "boiling_point": 3127},
    {"name": "Neodymium", "symbol": "Nd", "number": 60, "mass": 144.24, "category": "lanthanide", "group": 3, "period": 6, "electrons": "[Xe] 4f⁴ 6s²", "uses": "Powerful magnets, lasers.", "discovered": 1885, "fun_fact": "Makes extremely strong permanent magnets.", "atomic_radius": 181, "electronegativity": 1.14, "melting_point": 1024, "boiling_point": 3074},
    {"name": "Promethium", "symbol": "Pm", "number": 61, "mass": 145, "category": "lanthanide", "group": 3, "period": 6, "electrons": "[Xe] 4f⁵ 6s²", "uses": "Nuclear batteries, luminous paint.", "discovered": 1945, "fun_fact": "Only radioactive rare earth element.", "atomic_radius": 183, "electronegativity": 1.13, "melting_point": 1042, "boiling_point": 3000},
    {"name": "Samarium", "symbol": "Sm", "number": 62, "mass": 150.36, "category": "lanthanide", "group": 3, "period": 6, "electrons": "[Xe] 4f⁶ 6s²", "uses": "Magnets, cancer treatment.", "discovered": 1879, "fun_fact": "Used in the control rods of nuclear reactors.", "atomic_radius": 180, "electronegativity": 1.17, "melting_point": 1072, "boiling_point": 1900},
    {"name": "Europium", "symbol": "Eu", "number": 63, "mass": 151.96, "category": "lanthanide", "group": 3, "period": 6, "electrons": "[Xe] 4f⁷ 6s²", "uses": "Phosphors in TV screens, fluorescent lamps.", "discovered": 1901, "fun_fact": "Most reactive rare earth element.", "atomic_radius": 180, "electronegativity": 1.2, "melting_point": 822, "boiling_point": 1529},
    {"name": "Gadolinium", "symbol": "Gd", "number": 64, "mass": 157.25, "category": "lanthanide", "group": 3, "period": 6, "electrons": "[Xe] 4f⁷ 5d¹ 6s²", "uses": "MRI contrast agents, nuclear reactors.", "discovered": 1880, "fun_fact": "Has the highest neutron absorption cross-section.", "atomic_radius": 180, "electronegativity": 1.2, "melting_point": 1312, "boiling_point": 3273},
    {"name": "Terbium", "symbol": "Tb", "number": 65, "mass": 158.93, "category": "lanthanide", "group": 3, "period": 6, "electrons": "[Xe] 4f⁹ 6s²", "uses": "Solid-state devices, fuel cells.", "discovered": 1843, "fun_fact": "Named after the village of Ytterby, Sweden.", "atomic_radius": 177, "electronegativity": 1.2, "melting_point": 1356, "boiling_point": 3230},
    {"name": "Dysprosium", "symbol": "Dy", "number": 66, "mass": 162.50, "category": "lanthanide", "group": 3, "period": 6, "electrons": "[Xe] 4f¹⁰ 6s²", "uses": "Nuclear reactors, data storage.", "discovered": 1886, "fun_fact": "Name comes from Greek 'dysprositos' meaning 'hard to get'.", "atomic_radius": 178, "electronegativity": 1.22, "melting_point": 1407, "boiling_point": 2562},
    {"name": "Holmium", "symbol": "Ho", "number": 67, "mass": 164.93, "category": "lanthanide", "group": 3, "period": 6, "electrons": "[Xe] 4f¹¹ 6s²", "uses": "Nuclear control rods, lasers.", "discovered": 1878, "fun_fact": "Has the highest magnetic strength of any element.", "atomic_radius": 176, "electronegativity": 1.23, "melting_point": 1461, "boiling_point": 2720},
    {"name": "Erbium", "symbol": "Er", "number": 68, "mass": 167.26, "category": "lanthanide", "group": 3, "period": 6, "electrons": "[Xe] 4f¹² 6s²", "uses": "Fiber optics, lasers.", "discovered": 1843, "fun_fact": "Used to give glass a pink color.", "atomic_radius": 176, "electronegativity": 1.24, "melting_point": 1529, "boiling_point": 2868},
    {"name": "Thulium", "symbol": "Tm", "number": 69, "mass": 168.93, "category": "lanthanide", "group": 3, "period": 6, "electrons": "[Xe] 4f¹³ 6s²", "uses": "Portable X-ray devices, lasers.", "discovered": 1879, "fun_fact": "Rarest of the stable rare earth elements.", "atomic_radius": 176, "electronegativity": 1.25, "melting_point": 1545, "boiling_point": 1950},
    {"name": "Ytterbium", "symbol": "Yb", "number": 70, "mass": 173.05, "category": "lanthanide", "group": 3, "period": 6, "electrons": "[Xe] 4f¹⁴ 6s²", "uses": "Stress gauges, lasers.", "discovered": 1878, "fun_fact": "Named after the village of Ytterby, Sweden.", "atomic_radius": 176, "electronegativity": 1.1, "melting_point": 819, "boiling_point": 1196},
    {"name": "Lutetium", "symbol": "Lu", "number": 71, "mass": 174.97, "category": "lanthanide", "group": 3, "period": 6, "electrons": "[Xe] 4f¹⁴ 5d¹ 6s²", "uses": "PET scans, catalysts.", "discovered": 1907, "fun_fact": "Last element in the lanthanide series.", "atomic_radius": 174, "electronegativity": 1.27, "melting_point": 1663, "boiling_point": 3402},
    // Back to main group
    {"name": "Hafnium", "symbol": "Hf", "number": 72, "mass": 178.49, "category": "transition-metal", "group": 4, "period": 6, "electrons": "[Xe] 4f¹⁴ 5d² 6s²", "uses": "Nuclear reactors, plasma cutting tips.", "discovered": 1923, "fun_fact": "Named after Hafnia, the Latin name for Copenhagen.", "atomic_radius": 167, "electronegativity": 1.3, "melting_point": 2233, "boiling_point": 4603},
    {"name": "Tantalum", "symbol": "Ta", "number": 73, "mass": 180.95, "category": "transition-metal", "group": 5, "period": 6, "electrons": "[Xe] 4f¹⁴ 5d³ 6s²", "uses": "Electronics, surgical implants.", "discovered": 1802, "fun_fact": "Extremely resistant to corrosion.", "atomic_radius": 170, "electronegativity": 1.5, "melting_point": 3017, "boiling_point": 5458},
    {"name": "Tungsten", "symbol": "W", "number": 74, "mass": 183.84, "category": "transition-metal", "group": 6, "period": 6, "electrons": "[Xe] 4f¹⁴ 5d⁴ 6s²", "uses": "Light bulb filaments, armor-piercing rounds.", "discovered": 1783, "fun_fact": "Highest melting point of all metals.", "atomic_radius": 162, "electronegativity": 2.36, "melting_point": 3422, "boiling_point": 5555},
    {"name": "Rhenium", "symbol": "Re", "number": 75, "mass": 186.21, "category": "transition-metal", "group": 7, "period": 6, "electrons": "[Xe] 4f¹⁴ 5d⁵ 6s²", "uses": "Jet engines, catalysts.", "discovered": 1925, "fun_fact": "Last stable element to be discovered.", "atomic_radius": 151, "electronegativity": 1.9, "melting_point": 3186, "boiling_point": 5596},
    {"name": "Osmium", "symbol": "Os", "number": 76, "mass": 190.23, "category": "transition-metal", "group": 8, "period": 6, "electrons": "[Xe] 4f¹⁴ 5d⁶ 6s²", "uses": "Electrical contacts, fountain pen tips.", "discovered": 1803, "fun_fact": "Densest naturally occurring element.", "atomic_radius": 144, "electronegativity": 2.2, "melting_point": 3033, "boiling_point": 5012},
    {"name": "Iridium", "symbol": "Ir", "number": 77, "mass": 192.22, "category": "transition-metal", "group": 9, "period": 6, "electrons": "[Xe] 4f¹⁴ 5d⁷ 6s²", "uses": "Spark plugs, compass bearings.", "discovered": 1803, "fun_fact": "One of the most corrosion-resistant metals.", "atomic_radius": 141, "electronegativity": 2.20, "melting_point": 2446, "boiling_point": 4428},
    {"name": "Platinum", "symbol": "Pt", "number": 78, "mass": 195.08, "category": "transition-metal", "group": 10, "period": 6, "electrons": "[Xe] 4f¹⁴ 5d⁹ 6s¹", "uses": "Catalytic converters, jewelry.", "discovered": 1735, "fun_fact": "Highly valuable and resistant to tarnishing.", "atomic_radius": 136, "electronegativity": 2.28, "melting_point": 1768.3, "boiling_point": 3825},
    {"name": "Gold", "symbol": "Au", "number": 79, "mass": 196.97, "category": "transition-metal", "group": 11, "period": 6, "electrons": "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", "uses": "Jewelry, electronics, currency.", "discovered": "Ancient", "fun_fact": "One ounce can be stretched into a wire 50 miles long.", "atomic_radius": 136, "electronegativity": 2.54, "melting_point": 1064.18, "boiling_point": 2856},
    {"name": "Mercury", "symbol": "Hg", "number": 80, "mass": 200.59, "category": "transition-metal", "group": 12, "period": 6, "electrons": "[Xe] 4f¹⁴ 5d¹⁰ 6s²", "uses": "Thermometers, barometers.", "discovered": "Ancient", "fun_fact": "Only metal that is liquid at room temperature.", "atomic_radius": 132, "electronegativity": 2.00, "melting_point": -38.83, "boiling_point": 356.73},
    {"name": "Thallium", "symbol": "Tl", "number": 81, "mass": 204.38, "category": "post-transition-metal", "group": 13, "period": 6, "electrons": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹", "uses": "Rat poison, infrared optics.", "discovered": 1861, "fun_fact": "Extremely toxic and was used as a murder weapon.", "atomic_radius": 145, "electronegativity": 1.62, "melting_point": 304, "boiling_point": 1473},
    {"name": "Lead", "symbol": "Pb", "number": 82, "mass": 207.2, "category": "post-transition-metal", "group": 14, "period": 6, "electrons": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", "uses": "Batteries, radiation shielding.", "discovered": "Ancient", "fun_fact": "Heaviest stable element.", "atomic_radius": 154, "electronegativity": 2.33, "melting_point": 327.46, "boiling_point": 1749},
    {"name": "Bismuth", "symbol": "Bi", "number": 83, "mass": 208.98, "category": "post-transition-metal", "group": 15, "period": 6, "electrons": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", "uses": "Pepto-Bismol, cosmetics.", "discovered": 1753, "fun_fact": "Weakly radioactive with an extremely long half-life.", "atomic_radius": 143, "electronegativity": 2.02, "melting_point": 271.3, "boiling_point": 1564},
    {"name": "Polonium", "symbol": "Po", "number": 84, "mass": 209, "category": "post-transition-metal", "group": 16, "period": 6, "electrons": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴", "uses": "Static eliminators, heat sources.", "discovered": 1898, "fun_fact": "Extremely radioactive and toxic.", "atomic_radius": 135, "electronegativity": 2.0, "melting_point": 254, "boiling_point": 962},
    {"name": "Astatine", "symbol": "At", "number": 85, "mass": 210, "category": "halogen", "group": 17, "period": 6, "electrons": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵", "uses": "Radioactive tracer, research.", "discovered": 1940, "fun_fact": "Rarest naturally occurring element on Earth.", "atomic_radius": 127, "electronegativity": 2.2, "melting_point": 302, "boiling_point": 337},
    {"name": "Radon", "symbol": "Rn", "number": 86, "mass": 222, "category": "noble-gas", "group": 18, "period": 6, "electrons": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶", "uses": "Radiation therapy, earthquake prediction.", "discovered": 1900, "fun_fact": "Radioactive gas that can accumulate in basements.", "atomic_radius": 120, "electronegativity": 2.2, "melting_point": -71, "boiling_point": -61.7},
    
    // Period 7
    {"name": "Francium", "symbol": "Fr", "number": 87, "mass": 223, "category": "alkali-metal", "group": 1, "period": 7, "electrons": "[Rn] 7s¹", "uses": "Research, no commercial uses.", "discovered": 1939, "fun_fact": "Second rarest naturally occurring element.", "atomic_radius": 348, "electronegativity": 0.7, "melting_point": 27, "boiling_point": 677},
    {"name": "Radium", "symbol": "Ra", "number": 88, "mass": 226, "category": "alkaline-earth-metal", "group": 2, "period": 7, "electrons": "[Rn] 7s²", "uses": "Formerly in luminous paints, cancer treatment.", "discovered": 1898, "fun_fact": "Glows faintly blue due to its radioactivity.", "atomic_radius": 283, "electronegativity": 0.9, "melting_point": 700, "boiling_point": 1737},
    // Actinides
    {"name": "Actinium", "symbol": "Ac", "number": 89, "mass": 227, "category": "actinide", "group": 3, "period": 7, "electrons": "[Rn] 6d¹ 7s²", "uses": "Neutron sources, medical treatments.", "discovered": 1899, "fun_fact": "Glows in the dark due to its radioactivity.", "atomic_radius": 188, "electronegativity": 1.1, "melting_point": 1050, "boiling_point": 3200},
    {"name": "Thorium", "symbol": "Th", "number": 90, "mass": 232.04, "category": "actinide", "group": 3, "period": 7, "electrons": "[Rn] 6d² 7s²", "uses": "Nuclear fuel, gas mantles.", "discovered": 1828, "fun_fact": "Named after Thor, the Norse god of thunder.", "atomic_radius": 179, "electronegativity": 1.3, "melting_point": 1750, "boiling_point": 4788},
    {"name": "Protactinium", "symbol": "Pa", "number": 91, "mass": 231.04, "category": "actinide", "group": 3, "period": 7, "electrons": "[Rn] 5f² 6d¹ 7s²", "uses": "Scientific research.", "discovered": 1913, "fun_fact": "One of the rarest and most expensive naturally occurring elements.", "atomic_radius": 163, "electronegativity": 1.5, "melting_point": 1572, "boiling_point": 4000},
    {"name": "Uranium", "symbol": "U", "number": 92, "mass": 238.03, "category": "actinide", "group": 3, "period": 7, "electrons": "[Rn] 5f³ 6d¹ 7s²", "uses": "Nuclear fuel, armor-piercing ammunition.", "discovered": 1789, "fun_fact": "Named after the planet Uranus.", "atomic_radius": 156, "electronegativity": 1.38, "melting_point": 1132.2, "boiling_point": 4131},
    {"name": "Neptunium", "symbol": "Np", "number": 93, "mass": 237, "category": "actinide", "group": 3, "period": 7, "electrons": "[Rn] 5f⁴ 6d¹ 7s²", "uses": "Nuclear research.", "discovered": 1940, "fun_fact": "First synthetic transuranium element.", "atomic_radius": 155, "electronegativity": 1.36, "melting_point": 644, "boiling_point": 3902},
    {"name": "Plutonium", "symbol": "Pu", "number": 94, "mass": 244, "category": "actinide", "group": 3, "period": 7, "electrons": "[Rn] 5f⁶ 7s²", "uses": "Nuclear weapons, power generation.", "discovered": 1940, "fun_fact": "Named after the dwarf planet Pluto.", "atomic_radius": 159, "electronegativity": 1.28, "melting_point": 639.4, "boiling_point": 3228},
    {"name": "Americium", "symbol": "Am", "number": 95, "mass": 243, "category": "actinide", "group": 3, "period": 7, "electrons": "[Rn] 5f⁷ 7s²", "uses": "Smoke detectors, neutron sources.", "discovered": 1944, "fun_fact": "Used in most household smoke detectors.", "atomic_radius": 173, "electronegativity": 1.13, "melting_point": 1176, "boiling_point": 2011},
    {"name": "Curium", "symbol": "Cm", "number": 96, "mass": 247, "category": "actinide", "group": 3, "period": 7, "electrons": "[Rn] 5f⁷ 6d¹ 7s²", "uses": "Spacecraft power sources, research.", "discovered": 1944, "fun_fact": "Named after Marie and Pierre Curie.", "atomic_radius": 174, "electronegativity": 1.28, "melting_point": 1345, "boiling_point": 3110},
    {"name": "Berkelium", "symbol": "Bk", "number": 97, "mass": 247, "category": "actinide", "group": 3, "period": 7, "electrons": "[Rn] 5f⁹ 7s²", "uses": "Scientific research.", "discovered": 1949, "fun_fact": "Named after the city of Berkeley, California.", "atomic_radius": 170, "electronegativity": 1.3, "melting_point": 986, "boiling_point": 2627},
    {"name": "Californium", "symbol": "Cf", "number": 98, "mass": 251, "category": "actinide", "group": 3, "period": 7, "electrons": "[Rn] 5f¹⁰ 7s²", "uses": "Neutron sources, cancer treatment.", "discovered": 1950, "fun_fact": "Extremely radioactive and powerful neutron emitter.", "atomic_radius": 186, "electronegativity": 1.3, "melting_point": 900, "boiling_point": 1470},
    {"name": "Einsteinium", "symbol": "Es", "number": 99, "mass": 252, "category": "actinide", "group": 3, "period": 7, "electrons": "[Rn] 5f¹¹ 7s²", "uses": "Scientific research.", "discovered": 1952, "fun_fact": "Named after Albert Einstein.", "atomic_radius": 186, "electronegativity": 1.3, "melting_point": 860, "boiling_point": 996},
    {"name": "Fermium", "symbol": "Fm", "number": 100, "mass": 257, "category": "actinide", "group": 3, "period": 7, "electrons": "[Rn] 5f¹² 7s²", "uses": "Scientific research.", "discovered": 1952, "fun_fact": "Named after Enrico Fermi.", "atomic_radius": 175, "electronegativity": 1.3, "melting_point": 1527, "boiling_point": null},
    {"name": "Mendelevium", "symbol": "Md", "number": 101, "mass": 258, "category": "actinide", "group": 3, "period": 7, "electrons": "[Rn] 5f¹³ 7s²", "uses": "Scientific research.", "discovered": 1955, "fun_fact": "Named after Dmitri Mendeleev, creator of the periodic table.", "atomic_radius": 174, "electronegativity": 1.3, "melting_point": 827, "boiling_point": null},
    {"name": "Nobelium", "symbol": "No", "number": 102, "mass": 259, "category": "actinide", "group": 3, "period": 7, "electrons": "[Rn] 5f¹⁴ 7s²", "uses": "Scientific research.", "discovered": 1966, "fun_fact": "Named after Alfred Nobel.", "atomic_radius": 173, "electronegativity": 1.3, "melting_point": 827, "boiling_point": null},
    {"name": "Lawrencium", "symbol": "Lr", "number": 103, "mass": 266, "category": "actinide", "group": 3, "period": 7, "electrons": "[Rn] 5f¹⁴ 7s² 7p¹", "uses": "Scientific research.", "discovered": 1961, "fun_fact": "Named after Ernest Lawrence, inventor of the cyclotron.", "atomic_radius": 174, "electronegativity": 1.3, "melting_point": 1627, "boiling_point": null},
    // Back to main group
    {"name": "Rutherfordium", "symbol": "Rf", "number": 104, "mass": 267, "category": "transition-metal", "group": 4, "period": 7, "electrons": "[Rn] 5f¹⁴ 6d² 7s²", "uses": "Scientific research.", "discovered": 1964, "fun_fact": "Named after Ernest Rutherford.", "atomic_radius": 157, "electronegativity": null, "melting_point": 2100, "boiling_point": 5500},
    {"name": "Dubnium", "symbol": "Db", "number": 105, "mass": 268, "category": "transition-metal", "group": 5, "period": 7, "electrons": "[Rn] 5f¹⁴ 6d³ 7s²", "uses": "Scientific research.", "discovered": 1967, "fun_fact": "Named after the Russian town of Dubna.", "atomic_radius": 149, "electronegativity": null, "melting_point": null, "boiling_point": null},
    {"name": "Seaborgium", "symbol": "Sg", "number": 106, "mass": 269, "category": "transition-metal", "group": 6, "period": 7, "electrons": "[Rn] 5f¹⁴ 6d⁴ 7s²", "uses": "Scientific research.", "discovered": 1974, "fun_fact": "Named after Glenn T. Seaborg.", "atomic_radius": 143, "electronegativity": null, "melting_point": null, "boiling_point": null},
    {"name": "Bohrium", "symbol": "Bh", "number": 107, "mass": 270, "category": "transition-metal", "group": 7, "period": 7, "electrons": "[Rn] 5f¹⁴ 6d⁵ 7s²", "uses": "Scientific research.", "discovered": 1981, "fun_fact": "Named after Niels Bohr.", "atomic_radius": 141, "electronegativity": null, "melting_point": null, "boiling_point": null},
    {"name": "Hassium", "symbol": "Hs", "number": 108, "mass": 277, "category": "transition-metal", "group": 8, "period": 7, "electrons": "[Rn] 5f¹⁴ 6d⁶ 7s²", "uses": "Scientific research.", "discovered": 1984, "fun_fact": "Named after the German state of Hesse.", "atomic_radius": 134, "electronegativity": null, "melting_point": null, "boiling_point": null},
    {"name": "Meitnerium", "symbol": "Mt", "number": 109, "mass": 278, "category": "transition-metal", "group": 9, "period": 7, "electrons": "[Rn] 5f¹⁴ 6d⁷ 7s²", "uses": "Scientific research.", "discovered": 1982, "fun_fact": "Named after Lise Meitner.", "atomic_radius": 129, "electronegativity": null, "melting_point": null, "boiling_point": null},
    {"name": "Darmstadtium", "symbol": "Ds", "number": 110, "mass": 281, "category": "transition-metal", "group": 10, "period": 7, "electrons": "[Rn] 5f¹⁴ 6d⁹ 7s¹", "uses": "Scientific research.", "discovered": 1994, "fun_fact": "Named after the city of Darmstadt, Germany.", "atomic_radius": 128, "electronegativity": null, "melting_point": null, "boiling_point": null},
    {"name": "Roentgenium", "symbol": "Rg", "number": 111, "mass": 282, "category": "transition-metal", "group": 11, "period": 7, "electrons": "[Rn] 5f¹⁴ 6d¹⁰ 7s¹", "uses": "Scientific research.", "discovered": 1994, "fun_fact": "Named after Wilhelm Conrad Röntgen.", "atomic_radius": 121, "electronegativity": null, "melting_point": null, "boiling_point": null},
    {"name": "Copernicium", "symbol": "Cn", "number": 112, "mass": 285, "category": "transition-metal", "group": 12, "period": 7, "electrons": "[Rn] 5f¹⁴ 6d¹⁰ 7s²", "uses": "Scientific research.", "discovered": 1996, "fun_fact": "Named after Nicolaus Copernicus.", "atomic_radius": 122, "electronegativity": null, "melting_point": null, "boiling_point": null},
    {"name": "Nihonium", "symbol": "Nh", "number": 113, "mass": 286, "category": "post-transition-metal", "group": 13, "period": 7, "electrons": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹", "uses": "Scientific research.", "discovered": 2004, "fun_fact": "First element discovered in an Asian country (Japan).", "atomic_radius": 136, "electronegativity": null, "melting_point": null, "boiling_point": null},
    {"name": "Flerovium", "symbol": "Fl", "number": 114, "mass": 289, "category": "post-transition-metal", "group": 14, "period": 7, "electrons": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²", "uses": "Scientific research.", "discovered": 1999, "fun_fact": "Named after the Flerov Laboratory of Nuclear Reactions.", "atomic_radius": 143, "electronegativity": null, "melting_point": null, "boiling_point": null},
    {"name": "Moscovium", "symbol": "Mc", "number": 115, "mass": 290, "category": "post-transition-metal", "group": 15, "period": 7, "electrons": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³", "uses": "Scientific research.", "discovered": 2003, "fun_fact": "Named after the Moscow Oblast region in Russia.", "atomic_radius": 138, "electronegativity": null, "melting_point": null, "boiling_point": null},
    {"name": "Livermorium", "symbol": "Lv", "number": 116, "mass": 293, "category": "post-transition-metal", "group": 16, "period": 7, "electrons": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴", "uses": "Scientific research.", "discovered": 2000, "fun_fact": "Named after the Lawrence Livermore National Laboratory.", "atomic_radius": 129, "electronegativity": null, "melting_point": null, "boiling_point": null},
    {"name": "Tennessine", "symbol": "Ts", "number": 117, "mass": 294, "category": "halogen", "group": 17, "period": 7, "electrons": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵", "uses": "Scientific research only.", "discovered": 2010, "fun_fact": "Named after the state of Tennessee.", "atomic_radius": null, "electronegativity": null, "melting_point": null, "boiling_point": null},
    {"name": "Oganesson", "symbol": "Og", "number": 118, "mass": 294, "category": "noble-gas", "group": 18, "period": 7, "electrons": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶", "uses": "Scientific research only.", "discovered": 2002, "fun_fact": "The heaviest known element.", "atomic_radius": null, "electronegativity": null, "melting_point": null, "boiling_point": null}
];

// DOM Elements
const periodicTableGrid = document.getElementById('periodic-table-grid');
const elementModal = document.getElementById('element-modal');
const modalDetails = document.getElementById('modal-details');
const modalCloseBtn = document.querySelector('.close-btn');
const elementSearch = document.getElementById('element-search');
const filterButtons = document.querySelectorAll('.filter-btn');
const trendsButtons = document.querySelectorAll('.trends-btn');
const themeToggleBtn = document.getElementById('theme-toggle');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
const quizQuestionEl = document.getElementById('quiz-question');
const quizOptionsEl = document.getElementById('quiz-options');
const quizNextBtn = document.getElementById('quiz-next');
const quizResultEl = document.getElementById('quiz-result');
const quizScoreEl = document.getElementById('quiz-score');
const quizCurrentEl = document.getElementById('quiz-current');

// Quiz state
let currentQuestion = {};
let score = 0;
let currentQuestionIndex = 0;
const totalQuestions = 10;

// Element categories with colors
const categories = {
    'alkali-metal': '#ff6347', 
    'alkaline-earth-metal': '#ff9f43',
    'transition-metal': '#ffd966', 
    'post-transition-metal': '#c9e265',
    'metalloid': '#6ed1b9', 
    'nonmetal': '#4dc7d1', 
    'halogen': '#4ca3ff',
    'noble-gas': '#9c6ad9', 
    'lanthanide': '#ff6ac1', 
    'actinide': '#ff85a1',
    'unknown': '#5e5e5e'
};

// Preloader & App Visibility
document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.preloader');
    const appContainer = document.querySelector('.app-container');

    // Simulate loading time
    setTimeout(() => {
        preloader.style.opacity = '0';
        appContainer.style.opacity = '1';
        setTimeout(() => preloader.style.display = 'none', 1000);
        
        // Initialize the app
        initializeApp();
    }, 2500);
});

// Initialize the application
function initializeApp() {
    createPeriodicTable();
    setupEventListeners();
    setTheme(localStorage.getItem('theme') || getSystemTheme());
    generateQuizQuestion();
}

// Set up all event listeners
function setupEventListeners() {
    // Modal close
    modalCloseBtn.addEventListener('click', () => {
        elementModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === elementModal) {
            elementModal.style.display = 'none';
        }
    });

    // Search functionality
    elementSearch.addEventListener('input', handleSearch);

    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            applyFilter(filter);
        });
    });

    // Trends buttons
    trendsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const trend = button.dataset.trend;
            trendsButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            visualizeTrend(trend);
        });
    });

    // Theme toggle
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Mobile menu
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Quiz next button
    quizNextBtn.addEventListener('click', generateQuizQuestion);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            scrollToSection(targetId.substring(1));
        });
    });
}

// Create the periodic table grid
function createPeriodicTable() {
    periodicTableGrid.innerHTML = '';
    
    // Create a grid layout with 18 columns and 10 rows
    for (let row = 1; row <= 10; row++) {
        for (let col = 1; col <= 18; col++) {
            const cell = document.createElement('div');
            cell.classList.add('element-cell');
            cell.style.gridRow = row;
            cell.style.gridColumn = col;
            
            // Find element at this position
            const element = findElementAtPosition(row, col);
            
            if (element) {
                populateElementCell(cell, element);
            } else if (row === 6 && col >= 3) {
                // Lanthanides placeholder
                if (col === 3) {
                    cell.classList.add('lanthanide-placeholder');
                    cell.textContent = 'Lanthanides';
                    cell.addEventListener('click', () => {
                        document.querySelector('.filter-btn[data-filter="lanthanide"]').click();
                    });
                } else {
                    continue; // Skip other cells in this row
                }
            } else if (row === 7 && col >= 3) {
                // Actinides placeholder
                if (col === 3) {
                    cell.classList.add('actinide-placeholder');
                    cell.textContent = 'Actinides';
                    cell.addEventListener('click', () => {
                        document.querySelector('.filter-btn[data-filter="actinide"]').click();
                    });
                } else {
                    continue; // Skip other cells in this row
                }
            } else {
                // Empty cell
                cell.style.visibility = 'hidden';
            }
            
            periodicTableGrid.appendChild(cell);
        }
    }
}

// Find element at a specific grid position
function findElementAtPosition(row, col) {
    return elements.find(el => {
        if (el.period === row && el.group === col) {
            return true;
        }
        
        // Handle lanthanides and actinides
        if (row === 9 && el.category === 'lanthanide') {
            return el.number - 57 + 3 === col;
        }
        
        if (row === 10 && el.category === 'actinide') {
            return el.number - 89 + 3 === col;
        }
        
        return false;
    });
}

// Populate an element cell with data
function populateElementCell(cell, element) {
    cell.dataset.symbol = element.symbol;
    cell.dataset.category = element.category;
    cell.dataset.name = element.name.toLowerCase();
    cell.dataset.number = element.number;
    cell.style.backgroundColor = categories[element.category] || categories['unknown'];

    cell.innerHTML = `
        <div class="element-number">${element.number}</div>
        <div class="element-symbol">${element.symbol}</div>
        <div class="element-name">${element.name}</div>
    `;

    cell.addEventListener('click', () => openModal(element));
}

// Open modal with element details
function openModal(element) {
    const modalHeader = `
        <div class="modal-header">
            <div class="modal-atomic-number">${element.number}</div>
            <div class="modal-symbol">${element.symbol}</div>
            <div class="modal-name">${element.name}</div>
        </div>
    `;

    const modalInfo = `
        <div class="modal-info-grid">
            <div class="modal-info-item"><strong>Atomic Mass:</strong> <span>${element.mass}</span></div>
            <div class="modal-info-item"><strong>Category:</strong> <span>${formatCategory(element.category)}</span></div>
            <div class="modal-info-item"><strong>Group:</strong> <span>${element.group}</span></div>
            <div class="modal-info-item"><strong>Period:</strong> <span>${element.period}</span></div>
            <div class="modal-info-item"><strong>Electron Configuration:</strong> <span>${element.electrons}</span></div>
            <div class="modal-info-item"><strong>Year Discovered:</strong> <span>${element.discovered}</span></div>
            <div class="modal-info-item"><strong>Uses:</strong> <span>${element.uses}</span></div>
            <div class="modal-info-item"><strong>Fun Fact:</strong> <span>${element.fun_fact}</span></div>
        </div>
    `;

    const electronViz = `
        <div class="electron-visualizer">
            ${createElectronVisualization(element)}
        </div>
    `;

    modalDetails.innerHTML = modalHeader + modalInfo + electronViz;
    elementModal.style.display = 'flex';
}

// Format category for display
function formatCategory(category) {
    return category.split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Create electron configuration visualization
function createElectronVisualization(element) {
    // Simplified visualization - in a real app, you would parse the electron configuration
    let html = '';
    const shells = [2, 8, 8, 18, 18, 32, 32]; // Max electrons per shell
    
    let remainingElectrons = element.number;
    
    for (let i = 0; i < shells.length && remainingElectrons > 0; i++) {
        const electronsInShell = Math.min(shells[i], remainingElectrons);
        remainingElectrons -= electronsInShell;
        
        html += `<div class="electron-shell" style="width: ${(i + 1) * 40}px; height: ${(i + 1) * 40}px;">`;
        
        for (let j = 0; j < electronsInShell; j++) {
            const angle = (360 / electronsInShell) * j;
            const x = 50 + 45 * (i + 1) * Math.cos(angle * Math.PI / 180);
            const y = 50 + 45 * (i + 1) * Math.sin(angle * Math.PI / 180);
            html += `<div class="electron" style="left: ${x}%; top: ${y}%;"></div>`;
        }
        
        html += '</div>';
    }
    
    return html;
}

// Handle search functionality
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    const cells = document.querySelectorAll('.element-cell:not(.lanthanide-placeholder):not(.actinide-placeholder)');
    
    // Show all cells if search is empty
    if (!searchTerm) {
        cells.forEach(cell => cell.classList.remove('hidden'));
        return;
    }
    
    cells.forEach(cell => {
        const name = cell.dataset.name || '';
        const symbol = cell.dataset.symbol ? cell.dataset.symbol.toLowerCase() : '';
        const number = cell.dataset.number || '';
        
        // Check if search term matches any property
        const matches = name.includes(searchTerm) || 
                       symbol.includes(searchTerm) || 
                       number.includes(searchTerm);
        
        if (matches) {
            cell.classList.remove('hidden');
        } else {
            cell.classList.add('hidden');
        }
    });
}

// Apply filter to elements
function applyFilter(filter) {
    const cells = document.querySelectorAll('.element-cell:not(.lanthanide-placeholder):not(.actinide-placeholder)');
    
    cells.forEach(cell => {
        if (filter === 'all' || cell.dataset.category === filter) {
            cell.classList.remove('hidden');
        } else {
            cell.classList.add('hidden');
        }
    });
}
// Theme functionality
function toggleTheme() {
    const currentTheme = document.documentElement.dataset.theme;
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
    
    const icon = themeToggleBtn.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Quiz functionality
function generateQuizQuestion() {
    if (currentQuestionIndex >= totalQuestions) {
        showQuizResults();
        return;
    }
    
    quizOptionsEl.innerHTML = '';
    quizResultEl.textContent = '';
    quizNextBtn.style.display = 'none';
    
    const questionTypes = ['symbol', 'number', 'category', 'property'];
    const type = questionTypes[Math.floor(Math.random() * questionTypes.length)];
    const correctElement = elements[Math.floor(Math.random() * elements.length)];
    
    currentQuestion = {
        type,
        correct: correctElement.name,
        options: []
    };
    
    let questionText = '';
    if (type === 'symbol') {
        questionText = `What is the name of the element with the symbol "${correctElement.symbol}"?`;
    } else if (type === 'number') {
        questionText = `What is the name of the element with atomic number ${correctElement.number}?`;
    } else if (type === 'category') {
        questionText = `Which of these is a ${formatCategory(correctElement.category)}?`;
    } else if (type === 'property') {
        const properties = ['atomic_radius', 'electronegativity', 'melting_point', 'boiling_point'];
        const property = properties[Math.floor(Math.random() * properties.length)];
        const propertyValue = correctElement[property];
        
        if (propertyValue === null || propertyValue === undefined) {
            // If no data for this property, try again
            generateQuizQuestion();
            return;
        }
        
        questionText = `Which element has a ${formatCategory(property)} of ${propertyValue}?`;
    }
    
    quizQuestionEl.textContent = questionText;
    
    const allOptions = new Set([correctElement.name]);
    while (allOptions.size < 4) {
        const randomElement = elements[Math.floor(Math.random() * elements.length)];
        if (randomElement.name !== correctElement.name) {
            allOptions.add(randomElement.name);
        }
    }
    
    currentQuestion.options = Array.from(allOptions).sort(() => Math.random() - 0.5);
    
    currentQuestion.options.forEach(option => {
        const optionEl = document.createElement('div');
        optionEl.classList.add('quiz-option');
        optionEl.textContent = option;
        optionEl.addEventListener('click', () => checkAnswer(option, correctElement));
        quizOptionsEl.appendChild(optionEl);
    });
    
    currentQuestionIndex++;
    quizCurrentEl.textContent = currentQuestionIndex;
}

function checkAnswer(selectedOption, correctElement) {
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(opt => {
        opt.style.pointerEvents = 'none';
        if (opt.textContent === correctElement.name) {
            opt.classList.add('correct');
        }
    });
    
    if (selectedOption === correctElement.name) {
        quizResultEl.textContent = 'Correct! ✨';
        quizResultEl.style.color = '#4caf50';
        score++;
        quizScoreEl.textContent = score;
    } else {
        const incorrectOption = Array.from(options).find(opt => opt.textContent === selectedOption);
        if (incorrectOption) {
            incorrectOption.classList.add('incorrect');
        }
        quizResultEl.textContent = `Incorrect. The correct answer was ${correctElement.name}.`;
        quizResultEl.style.color = '#f44336';
    }
    
    quizNextBtn.style.display = 'block';
}

function showQuizResults() {
    quizQuestionEl.textContent = 'Quiz Complete!';
    quizOptionsEl.innerHTML = '';
    quizNextBtn.style.display = 'none';
    
    const percentage = (score / totalQuestions) * 100;
    let message = '';
    
    if (percentage >= 80) {
        message = 'Excellent! You\'re a chemistry expert!';
    } else if (percentage >= 60) {
        message = 'Good job! You know your elements well.';
    } else if (percentage >= 40) {
        message = 'Not bad! Keep learning about the elements.';
    } else {
        message = 'Keep studying! You\'ll get better with practice.';
    }
    
    quizResultEl.innerHTML = `
        <h3>Your Score: ${score}/${totalQuestions} (${percentage.toFixed(0)}%)</h3>
        <p>${message}</p>
        <button class="cta-button" onclick="resetQuiz()">Try Again</button>
    `;
}

function resetQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    quizScoreEl.textContent = '0';
    quizCurrentEl.textContent = '1';
    generateQuizQuestion();
}

// Helper function for smooth scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 80,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        navLinks.classList.remove('active');
    }
}
// Add clear button functionality
function addSearchClearButton() {
    const searchContainer = document.querySelector('.search-box');
    const clearButton = document.createElement('button');
    clearButton.className = 'search-clear';
    clearButton.innerHTML = '<i class="fas fa-times"></i>';
    clearButton.setAttribute('aria-label', 'Clear search');
    
    clearButton.addEventListener('click', () => {
        elementSearch.value = '';
        elementSearch.focus();
        handleSearch({ target: elementSearch });
        clearButton.style.display = 'none';
    });
    
    searchContainer.appendChild(clearButton);
    
    // Show/hide clear button based on input content
    elementSearch.addEventListener('input', (e) => {
        clearButton.style.display = e.target.value ? 'block' : 'none';
    });
}

// Call this function after DOM is loaded
document.addEventListener('DOMContentLoaded', addSearchClearButton);
// Timeline data - grouped by century
const timelineData = {
    "18": [
        {symbol: "H", name: "Hydrogen", year: 1766, discoverer: "Henry Cavendish", details: "Discovered through experiments with acids and metals."},
        {symbol: "O", name: "Oxygen", year: 1774, discoverer: "Joseph Priestley", details: "Discovered by heating mercury oxide."},
        {symbol: "N", name: "Nitrogen", year: 1772, discoverer: "Daniel Rutherford", details: "Discovered as a component of air."}
    ],
    "19": [
        {symbol: "Na", name: "Sodium", year: 1807, discoverer: "Humphry Davy", details: "Isolated by electrolysis of sodium hydroxide."},
        {symbol: "Ca", name: "Calcium", year: 1808, discoverer: "Humphry Davy", details: "Discovered through electrolysis of lime."},
        {symbol: "Al", name: "Aluminum", year: 1825, discoverer: "Hans Christian Ørsted", details: "First isolated by reducing aluminum chloride."}
    ],
    "20": [
        {symbol: "Ra", name: "Radium", year: 1898, discoverer: "Marie Curie", details: "Discovered in pitchblende ore."},
        {symbol: "Ne", name: "Neon", year: 1898, discoverer: "William Ramsay", details: "Discovered through fractional distillation of liquid air."},
        {symbol: "Pu", name: "Plutonium", year: 1940, discoverer: "Glenn T. Seaborg", details: "Synthesized by deuteron bombardment of uranium."}
    ],
    "21": [
        {symbol: "Nh", name: "Nihonium", year: 2004, discoverer: "RIKEN team", details: "Synthesized by bombarding bismuth with zinc ions."},
        {symbol: "Mc", name: "Moscovium", year: 2003, discoverer: "JINR team", details: "Created by bombarding americium with calcium."},
        {symbol: "Og", name: "Oganesson", year: 2002, discoverer: "JINR team", details: "Synthesized by bombarding californium with calcium."}
    ]
};

// Initialize timeline
function initTimeline() {
    const grid = document.getElementById('timeline-grid');
    const filterButtons = document.querySelectorAll('.timeline-filters .filter-btn');
    const modal = document.getElementById('timeline-modal');
    const closeBtn = document.querySelector('.timeline-close-btn');
    
    // Load all elements initially
    loadTimelineItems('all');
    
    // Filter event listeners
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            loadTimelineItems(btn.dataset.century);
        });
    });
    
    // Modal close
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });
}

// Load timeline items based on filter
function loadTimelineItems(century) {
    const grid = document.getElementById('timeline-grid');
    grid.innerHTML = '';
    
    let items = [];
    
    if (century === 'all') {
        // Combine all centuries
        for (const cent in timelineData) {
            items = items.concat(timelineData[cent]);
        }
    } else {
        items = timelineData[century] || [];
    }
    
    // Sort by year
    items.sort((a, b) => a.year - b.year);
    
    // Create timeline items
    items.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <div class="element-symbol">${item.symbol}</div>
            <div class="element-name">${item.name}</div>
            <div class="discovery-year">${item.year}</div>
        `;
        
        timelineItem.addEventListener('click', () => {
            showTimelineDetails(item);
        });
        
        grid.appendChild(timelineItem);
    });
}

// Show timeline details
function showTimelineDetails(item) {
    const modal = document.getElementById('timeline-modal');
    const details = document.getElementById('timeline-details');
    
    details.innerHTML = `
        <h3>${item.name} (${item.symbol})</h3>
        <p><strong>Discovered in:</strong> ${item.year}</p>
        <p><strong>Discoverer:</strong> ${item.discoverer}</p>
        <p><strong>Details:</strong> ${item.details}</p>
    `;
    
    modal.style.display = 'flex';
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initTimeline);