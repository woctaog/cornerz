// Word banks for randomized category name placeholders on the submit form.
// Add or edit freely — more words = more variety.

export const NOUNS: string[] = [
  // Animals — common
  'Dog', 'Cat', 'Fish', 'Bird', 'Horse', 'Cow', 'Pig', 'Sheep', 'Goat', 'Rabbit',
  'Hamster', 'Snake', 'Turtle', 'Frog', 'Bear', 'Deer', 'Wolf', 'Fox', 'Eagle', 'Hawk',
  'Owl', 'Penguin', 'Dolphin', 'Whale', 'Shark', 'Crab', 'Lobster', 'Octopus', 'Jellyfish', 'Parrot',
  'Flamingo', 'Alligator', 'Cheetah', 'Lion', 'Tiger', 'Elephant', 'Giraffe', 'Hippo', 'Rhino', 'Zebra',
  'Gorilla', 'Chimpanzee', 'Orangutan', 'Baboon', 'Lemur', 'Sloth', 'Anteater', 'Armadillo', 'Porcupine', 'Skunk',
  'Otter', 'Seal', 'Walrus', 'Manatee', 'Mole', 'Hedgehog', 'Bat', 'Raccoon', 'Opossum', 'Ferret',
  'Moose', 'Bison', 'Yak', 'Meerkat', 'Mongoose', 'Weasel', 'Stoat', 'Mink', 'Vole', 'Shrew',

  // Animals — silly / unusual
  'Wombat', 'Platypus', 'Narwhal', 'Axolotl', 'Blobfish', 'Capybara', 'Quokka', 'Pangolin', 'Tapir', 'Aardvark',
  'Ocelot', 'Binturong', 'Kinkajou', 'Tarsier', 'Mudskipper', 'Hagfish', 'Tardigrade', 'Mantis Shrimp', 'Fossa', 'Numbat',
  'Saiga', 'Gerenuk', 'Okapi', 'Babirusa', 'Dumbo Octopus', 'Star-Nosed Mole', 'Naked Mole Rat', 'Aye-Aye', 'Toad', 'Newt',

  // Foods
  'Pizza', 'Burger', 'Taco', 'Sandwich', 'Soup', 'Pasta', 'Rice', 'Bread', 'Cake', 'Pie',
  'Cookie', 'Donut', 'Muffin', 'Bagel', 'Pretzel', 'Waffle', 'Pancake', 'Sushi', 'Burrito', 'Noodle',
  'Dumpling', 'Croissant', 'Scone', 'Biscuit', 'Brownie', 'Cupcake', 'Pudding', 'Custard', 'Quiche', 'Fondue',
  'Goulash', 'Risotto', 'Paella', 'Ramen', 'Falafel', 'Hummus', 'Guacamole', 'Nachos', 'Enchilada', 'Tamale',
  'Samosa', 'Biryani', 'Tagine', 'Pho', 'Kimchi', 'Tempura', 'Schnitzel', 'Stroganoff', 'Pierogi', 'Empanada',
  'Kebab', 'Bratwurst', 'Churro', 'Crepe', 'Beignet', 'Cannoli', 'Tiramisu', 'Baklava', 'Mochi', 'Eclair',

  // Fruits & vegetables
  'Apple', 'Banana', 'Orange', 'Grape', 'Strawberry', 'Blueberry', 'Raspberry', 'Mango', 'Pineapple', 'Watermelon',
  'Kiwi', 'Peach', 'Pear', 'Plum', 'Cherry', 'Lemon', 'Lime', 'Coconut', 'Avocado', 'Broccoli',
  'Carrot', 'Potato', 'Tomato', 'Cucumber', 'Zucchini', 'Eggplant', 'Artichoke', 'Asparagus', 'Celery', 'Spinach',
  'Kale', 'Lettuce', 'Cabbage', 'Onion', 'Garlic', 'Ginger', 'Pumpkin', 'Squash', 'Turnip', 'Radish',
  'Beetroot', 'Parsnip', 'Leek', 'Cauliflower', 'Fennel', 'Okra', 'Yam', 'Jackfruit', 'Durian', 'Lychee',
  'Rambutan', 'Dragonfruit', 'Starfruit', 'Persimmon', 'Pomelo', 'Kumquat', 'Guava', 'Papaya', 'Tamarind', 'Quince',

  // Musical instruments
  'Guitar', 'Piano', 'Violin', 'Drums', 'Trumpet', 'Saxophone', 'Flute', 'Clarinet', 'Cello', 'Bass',
  'Banjo', 'Ukulele', 'Harp', 'Oboe', 'Tuba', 'Accordion', 'Harmonica', 'Kazoo', 'Xylophone', 'Marimba',
  'Theremin', 'Didgeridoo', 'Bagpipe', 'Lute', 'Sitar', 'Mandolin', 'Dulcimer', 'Hurdy-Gurdy', 'Zither', 'Balalaika',

  // Sports
  'Basketball', 'Football', 'Baseball', 'Soccer', 'Tennis', 'Golf', 'Hockey', 'Volleyball', 'Cycling', 'Boxing',
  'Wrestling', 'Fencing', 'Archery', 'Skiing', 'Snowboarding', 'Surfing', 'Rowing', 'Sailing', 'Badminton', 'Squash',
  'Polo', 'Lacrosse', 'Cricket', 'Curling', 'Bobsled', 'Luge', 'Triathlon', 'Decathlon', 'Steeplechase', 'Heptathlon',

  // Clothing
  'Shirt', 'Pants', 'Dress', 'Skirt', 'Jacket', 'Coat', 'Hat', 'Glove', 'Sock', 'Shoe',
  'Boot', 'Scarf', 'Tie', 'Belt', 'Sweater', 'Hoodie', 'Blazer', 'Vest', 'Shorts', 'Jeans',
  'Tuxedo', 'Gown', 'Robe', 'Kimono', 'Beret', 'Fedora', 'Sombrero', 'Beanie', 'Turban', 'Kilt',
  'Leotard', 'Unitard', 'Poncho', 'Caftan', 'Dashiki', 'Sarong', 'Tutu', 'Romper', 'Onesie', 'Muumuu',

  // Professions
  'Doctor', 'Teacher', 'Lawyer', 'Engineer', 'Plumber', 'Chef', 'Pilot', 'Astronaut', 'Firefighter', 'Nurse',
  'Dentist', 'Architect', 'Artist', 'Musician', 'Writer', 'Scientist', 'Farmer', 'Carpenter', 'Electrician', 'Mechanic',
  'Accountant', 'Librarian', 'Baker', 'Butcher', 'Florist', 'Photographer', 'Reporter', 'Programmer', 'Comedian', 'Magician',
  'Acrobat', 'Mime', 'Puppeteer', 'Taxidermist', 'Sommelier', 'Cartographer', 'Cryptographer', 'Falconer', 'Luthier', 'Farrier',

  // Objects & tools
  'Spoon', 'Fork', 'Knife', 'Plate', 'Bowl', 'Cup', 'Mug', 'Bottle', 'Jar', 'Box',
  'Bag', 'Basket', 'Bucket', 'Ladder', 'Hammer', 'Nail', 'Screw', 'Wrench', 'Saw', 'Drill',
  'Shovel', 'Rake', 'Broom', 'Mop', 'Toaster', 'Blender', 'Mixer', 'Kettle', 'Lamp', 'Lantern',
  'Candle', 'Clock', 'Mirror', 'Compass', 'Telescope', 'Microscope', 'Hourglass', 'Umbrella', 'Periscope', 'Spatula',
  'Thimble', 'Doily', 'Whisk', 'Colander', 'Ladle', 'Tongs', 'Skillet', 'Wok', 'Mortar', 'Pestle',

  // Places & geography
  'Mountain', 'River', 'Ocean', 'Desert', 'Forest', 'Jungle', 'Island', 'Valley', 'Canyon', 'Volcano',
  'Glacier', 'Waterfall', 'Cave', 'Swamp', 'Meadow', 'Prairie', 'Savanna', 'Tundra', 'Rainforest', 'Beach',
  'Lagoon', 'Reef', 'Fjord', 'Plateau', 'Peninsula', 'Archipelago', 'Atoll', 'Bayou', 'Geyser', 'Sinkhole',
  'Mesa', 'Butte', 'Dune', 'Estuary', 'Tidepool', 'Bog', 'Fen', 'Moor', 'Steppe', 'Karst',

  // Fantasy & mythology
  'Goblin', 'Wizard', 'Gnome', 'Sprite', 'Dragon', 'Unicorn', 'Mermaid', 'Vampire', 'Zombie', 'Robot',
  'Cyborg', 'Alien', 'Spaceship', 'Portal', 'Dungeon', 'Potion', 'Spell', 'Wand', 'Broomstick', 'Cauldron',
  'Troll', 'Ogre', 'Gremlin', 'Pixie', 'Banshee', 'Wraith', 'Ghoul', 'Specter', 'Werewolf', 'Yeti',
  'Centaur', 'Minotaur', 'Griffin', 'Sphinx', 'Kraken', 'Phoenix', 'Basilisk', 'Chimera', 'Hydra', 'Manticore',

  // Dances
  'Tango', 'Waltz', 'Foxtrot', 'Polka', 'Jive', 'Salsa', 'Samba', 'Cha-Cha', 'Floss', 'Macarena',
  'Moonwalk', 'Shimmy', 'Twist', 'Hustle', 'Charleston', 'Quickstep', 'Bolero', 'Merengue', 'Cumbia', 'Bhangra',

  // Gems & materials
  'Diamond', 'Ruby', 'Emerald', 'Sapphire', 'Opal', 'Pearl', 'Topaz', 'Amethyst', 'Turquoise', 'Obsidian',
  'Marble', 'Granite', 'Limestone', 'Sandstone', 'Slate', 'Quartz', 'Garnet', 'Jasper', 'Onyx', 'Jade',

  // Vehicles
  'Car', 'Truck', 'Bus', 'Train', 'Plane', 'Helicopter', 'Submarine', 'Rocket', 'Hovercraft', 'Jetpack',
  'Bicycle', 'Motorcycle', 'Skateboard', 'Scooter', 'Rickshaw', 'Gondola', 'Zeppelin', 'Catamaran', 'Kayak', 'Dogsled',
  'Tractor', 'Zamboni', 'Segway', 'Monorail', 'Blimp', 'Dirigible', 'Triplane', 'Houseboat', 'Bathyscaphe', 'Gyrocopter',

  // Silly / random
  'Pickle', 'Noodle', 'Sock Puppet', 'Kazoo', 'Mitten', 'Confetti', 'Sprinkle', 'Glitter', 'Freckle', 'Dimple',
  'Hiccup', 'Sneeze', 'Wobble', 'Jiggle', 'Squish', 'Blob', 'Giggle', 'Snorkel', 'Googly Eye', 'Doodle',
  'Kerfuffle', 'Hullabaloo', 'Brouhaha', 'Shenanigan', 'Bumble', 'Fumble', 'Stumble', 'Splat', 'Bonk', 'Thud',
  'Flibbertigibbet', 'Whatchamacallit', 'Thingamajig', 'Doohickey', 'Gizmo', 'Widget', 'Doodad', 'Gewgaw', 'Tchotchke', 'Knickknack',

  // Body parts (silly ones)
  'Earlobe', 'Kneecap', 'Elbow', 'Nostril', 'Uvula', 'Pancreas', 'Spleen', 'Toenail', 'Eyebrow', 'Armpit',
  'Shinbone', 'Collarbone', 'Bellybutton', 'Knuckle', 'Tonsil', 'Appendix', 'Philtrum', 'Coccyx', 'Epiglottis', 'Tympanum',

  // Concepts & abstract
  'Dream', 'Shadow', 'Echo', 'Silence', 'Chaos', 'Mystery', 'Legend', 'Myth', 'Prophecy', 'Paradox',
  'Enigma', 'Adventure', 'Nostalgia', 'Serendipity', 'Epiphany', 'Euphoria', 'Melancholy', 'Whimsy', 'Absurdity', 'Irony',
  'Conspiracy', 'Phenomenon', 'Anomaly', 'Conundrum', 'Dilemma', 'Fiasco', 'Debacle', 'Hullabaloo', 'Ruckus', 'Pandemonium',

  // Games & hobbies
  'Chess', 'Poker', 'Bingo', 'Scrabble', 'Jenga', 'Monopoly', 'Sudoku', 'Origami', 'Knitting', 'Juggling',
  'Beekeeping', 'Taxidermy', 'Spelunking', 'Birdwatching', 'Trainspotting', 'Yodeling', 'Ventriloquism', 'Falconry', 'Curling', 'Competitive Eating',
];

export const ADJECTIVES: string[] = [
  // Sensible
  'Ancient', 'Beautiful', 'Brilliant', 'Colorful', 'Dangerous', 'Elegant', 'Fearless', 'Golden', 'Hidden', 'Infinite',
  'Luminous', 'Mysterious', 'Notorious', 'Ordinary', 'Peculiar', 'Quirky', 'Remarkable', 'Secret', 'Tiny', 'Unusual',
  'Vibrant', 'Whimsical', 'Zealous', 'Agile', 'Bold', 'Calm', 'Daring', 'Eerie', 'Fierce', 'Gentle',
  'Hollow', 'Icy', 'Jealous', 'Kind', 'Loyal', 'Noble', 'Ornate', 'Patient', 'Rapid', 'Tender',
  'Vivid', 'Wild', 'Youthful', 'Absurd', 'Brave', 'Clever', 'Deadly', 'Enchanted', 'Famous', 'Grumpy',
  'Haunted', 'Invisible', 'Jumbled', 'Lazy', 'Magical', 'Naughty', 'Outrageous', 'Prickly', 'Rotten', 'Sly',
  'Twisted', 'Vicious', 'Extinct', 'Forgotten', 'Glorious', 'Humble', 'Imaginary', 'Legendary', 'Majestic', 'Obscure',
  'Prehistoric', 'Radioactive', 'Subterranean', 'Telepathic', 'Underrated', 'Venomous', 'Waterproof', 'Xenophobic', 'Yogic', 'Zero-Gravity',

  // Silly
  'Wobbly', 'Jiggly', 'Squishy', 'Blobby', 'Bubbly', 'Wiggly', 'Squiggly', 'Loopy', 'Goofy', 'Wacky',
  'Zany', 'Kooky', 'Nutty', 'Crunchy', 'Fluffy', 'Fuzzy', 'Spiky', 'Lumpy', 'Bumpy', 'Gnarly',
  'Wonky', 'Jangly', 'Tingly', 'Sparkly', 'Twinkly', 'Glittery', 'Shimmery', 'Bouncy', 'Crinkly', 'Wrinkly',
  'Soggy', 'Gooey', 'Sticky', 'Slippery', 'Squeaky', 'Creaky', 'Rusty', 'Dusty', 'Crusty', 'Musty',
  'Floppy', 'Droopy', 'Sleepy', 'Grumpy', 'Sneezy', 'Bashful', 'Dopey', 'Cranky', 'Hangry', 'Snippy',
  'Discombobulated', 'Bamboozled', 'Flummoxed', 'Befuddled', 'Perplexed', 'Gobsmacked', 'Flabbergasted', 'Dumbfounded', 'Stupefied', 'Bewildered',
  'Bedraggled', 'Befuddled', 'Besmirched', 'Beleaguered', 'Disheveled', 'Frazzled', 'Haggard', 'Ragged', 'Rumpled', 'Tousled',
];

export const COLORS: string[] = [
  'Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Pink', 'Brown', 'Gray', 'Black',
  'White', 'Teal', 'Cyan', 'Magenta', 'Violet', 'Indigo', 'Coral', 'Crimson', 'Scarlet', 'Turquoise',
  'Beige', 'Ivory', 'Gold', 'Silver', 'Lavender', 'Periwinkle', 'Chartreuse', 'Ochre', 'Sienna', 'Umber',
  'Vermillion', 'Fuchsia', 'Maroon', 'Navy', 'Olive', 'Khaki', 'Tan', 'Peach', 'Salmon', 'Rose',
  'Amber', 'Bronze', 'Copper', 'Rust', 'Mauve', 'Plum', 'Lilac', 'Mint', 'Sage', 'Cerulean',
];

// Patterns for the 4th category placeholder.
// 'nouns' draws from NOUNS; 'colors' draws from COLORS.
export const CAT4_PATTERNS: Array<{ prefix: string; bank: 'nouns' | 'colors' }> = [
  { prefix: 'Homophones of', bank: 'nouns' },
  { prefix: 'Shades of', bank: 'colors' },
  { prefix: 'Types of', bank: 'nouns' },
  { prefix: 'Synonyms for', bank: 'nouns' },
  { prefix: 'Things that rhyme with', bank: 'nouns' },
  { prefix: 'Anagrams of', bank: 'nouns' },
  { prefix: 'Famous', bank: 'nouns' },
  { prefix: 'Fictional', bank: 'nouns' },
  { prefix: 'Things that smell like', bank: 'nouns' },
  { prefix: 'Things that sound like', bank: 'nouns' },
  { prefix: 'Words containing', bank: 'nouns' },
  { prefix: 'Portmanteaus involving', bank: 'nouns' },
];
