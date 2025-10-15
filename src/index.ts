/**
 * Veggie Tools MCP Server
 * A Model Context Protocol server for gardening and vegetable growing assistance
 */

import { Tool } from '@modelcontextprotocol/sdk/types.js';

// Comprehensive gardening database with specific varieties from seed catalogs
const VEGETABLES_DB = {
	tomato: {
		name: 'Tomato',
		plantingDepth: '0.25 inches',
		spacing: '24-36 inches',
		daysToGermination: '5-10 days',
		daysToHarvest: '60-85 days',
		soilPH: '6.0-6.8',
		sunRequirement: 'Full sun (6-8 hours)',
		wateringNeeds: 'Regular, deep watering - 1-2 inches per week',
		companions: ['basil', 'carrots', 'onions', 'marigold'],
		avoid: ['cabbage', 'fennel', 'potato'],
		commonPests: ['hornworms', 'aphids', 'whiteflies'],
		tips: 'Stake or cage plants for support. Mulch to retain moisture and prevent disease.',
	},
	lettuce: {
		name: 'Lettuce',
		plantingDepth: '0.25 inches',
		spacing: '6-12 inches',
		daysToGermination: '2-7 days',
		daysToHarvest: '30-60 days',
		soilPH: '6.0-7.0',
		sunRequirement: 'Partial shade to full sun',
		wateringNeeds: 'Frequent, light watering to keep soil moist',
		companions: ['carrots', 'radish', 'strawberries'],
		avoid: ['broccoli', 'cabbage'],
		commonPests: ['aphids', 'slugs', 'snails'],
		tips: 'Grows best in cool weather. Succession plant every 2 weeks for continuous harvest.',
	},
	carrot: {
		name: 'Carrot',
		plantingDepth: '0.25-0.5 inches',
		spacing: '2-3 inches',
		daysToGermination: '10-21 days',
		daysToHarvest: '50-80 days',
		soilPH: '6.0-6.8',
		sunRequirement: 'Full sun',
		wateringNeeds: 'Regular watering, 1 inch per week',
		companions: ['onions', 'leeks', 'rosemary', 'sage'],
		avoid: ['dill', 'parsnip'],
		commonPests: ['carrot rust fly', 'wireworms'],
		tips: 'Needs loose, well-drained soil. Thin seedlings to prevent crowding.',
	},
	pepper: {
		name: 'Pepper',
		plantingDepth: '0.25 inches',
		spacing: '18-24 inches',
		daysToGermination: '8-25 days',
		daysToHarvest: '60-90 days',
		soilPH: '6.0-6.8',
		sunRequirement: 'Full sun',
		wateringNeeds: 'Regular watering, keep soil evenly moist',
		companions: ['basil', 'onions', 'tomatoes'],
		avoid: ['fennel', 'beans'],
		commonPests: ['aphids', 'flea beetles', 'hornworms'],
		tips: 'Start seeds indoors 8-10 weeks before last frost. Support heavy plants with stakes.',
	},
	cucumber: {
		name: 'Cucumber',
		plantingDepth: '0.5-1 inch',
		spacing: '12-24 inches',
		daysToGermination: '3-10 days',
		daysToHarvest: '50-70 days',
		soilPH: '6.0-7.0',
		sunRequirement: 'Full sun',
		wateringNeeds: 'Regular, deep watering - 1-2 inches per week',
		companions: ['beans', 'corn', 'radish', 'sunflower'],
		avoid: ['aromatic herbs', 'potato'],
		commonPests: ['cucumber beetles', 'aphids', 'spider mites'],
		tips: 'Provide trellis for vining varieties. Pick frequently to encourage production.',
	},
	basil: {
		name: 'Basil',
		plantingDepth: '0.25 inches',
		spacing: '10-12 inches',
		daysToGermination: '5-10 days',
		daysToHarvest: '40-60 days',
		soilPH: '6.0-7.5',
		sunRequirement: 'Full sun',
		wateringNeeds: 'Regular watering, keep soil moist but not waterlogged',
		companions: ['tomatoes', 'peppers', 'oregano'],
		avoid: ['rue', 'sage'],
		commonPests: ['aphids', 'japanese beetles', 'slugs'],
		tips: 'Pinch off flower buds to encourage leaf growth. Harvest regularly for bushier plants.',
	},
	zucchini: {
		name: 'Zucchini',
		plantingDepth: '1 inch',
		spacing: '24-36 inches',
		daysToGermination: '4-8 days',
		daysToHarvest: '45-55 days',
		soilPH: '6.0-7.5',
		sunRequirement: 'Full sun',
		wateringNeeds: 'Deep watering - 1-2 inches per week',
		companions: ['corn', 'beans', 'peas', 'radish'],
		avoid: ['potato'],
		commonPests: ['squash bugs', 'vine borers', 'cucumber beetles'],
		tips: 'Harvest when 6-8 inches long for best flavor. Check plants daily during peak season.',
	},

	// TOMATO VARIETIES - Heirloom and specialty varieties
	black_krim_tomato: {
		name: 'Black Krim Tomato',
		type: 'Heirloom',
		origin: 'Crimea, Ukraine',
		plantingDepth: '0.25 inches',
		spacing: '24-36 inches',
		daysToGermination: '5-10 days',
		daysToHarvest: '75-85 days',
		soilPH: '6.0-6.8',
		sunRequirement: 'Full sun (6-8 hours)',
		wateringNeeds: 'Regular, deep watering - 1-2 inches per week',
		companions: ['basil', 'carrots', 'onions', 'marigold', 'parsley'],
		avoid: ['cabbage', 'fennel', 'potato', 'corn'],
		commonPests: ['hornworms', 'aphids', 'whiteflies', 'blossom end rot'],
		tips: 'Indeterminate variety. Rich, complex flavor with smoky undertones. Excellent for slicing.',
		fruitSize: 'Large (8-12 oz)',
		fruitColor: 'Dark purple-red',
		growthHabit: 'Indeterminate',
	},
	brandywine_tomato: {
		name: 'Brandywine Tomato',
		type: 'Heirloom',
		origin: 'Chester County, Pennsylvania (1885)',
		plantingDepth: '0.25 inches',
		spacing: '36 inches',
		daysToGermination: '5-10 days',
		daysToHarvest: '80-90 days',
		soilPH: '6.0-6.8',
		sunRequirement: 'Full sun (6-8 hours)',
		wateringNeeds: 'Deep watering twice weekly',
		companions: ['basil', 'borage', 'nasturtium', 'marigold'],
		avoid: ['cabbage family', 'fennel', 'potato'],
		commonPests: ['hornworms', 'aphids', 'blossom end rot'],
		tips: 'The gold standard of heirloom tomatoes. Prone to cracking - consistent watering is key.',
		fruitSize: 'Very Large (1-2 lbs)',
		fruitColor: 'Pink-red',
		growthHabit: 'Indeterminate',
	},
	green_zebra_tomato: {
		name: 'Green Zebra Tomato',
		type: 'Heirloom',
		origin: 'Developed by Tom Wagner (1983)',
		plantingDepth: '0.25 inches',
		spacing: '24-30 inches',
		daysToGermination: '5-10 days',
		daysToHarvest: '75-80 days',
		soilPH: '6.0-6.8',
		sunRequirement: 'Full sun',
		wateringNeeds: 'Regular watering, avoid overwatering',
		companions: ['basil', 'oregano', 'marigold', 'nasturtium'],
		avoid: ['cabbage', 'fennel', 'potato'],
		commonPests: ['hornworms', 'aphids', 'whiteflies'],
		tips: 'Tart, tangy flavor. Great for salads and salsas. Striking appearance when ripe.',
		fruitSize: 'Medium (3-4 oz)',
		fruitColor: 'Green with yellow stripes',
		growthHabit: 'Indeterminate',
	},
	cherokee_purple_tomato: {
		name: 'Cherokee Purple Tomato',
		type: 'Heirloom',
		origin: 'Tennessee (100+ years old)',
		plantingDepth: '0.25 inches',
		spacing: '36 inches',
		daysToGermination: '5-10 days',
		daysToHarvest: '80-90 days',
		soilPH: '6.0-6.8',
		sunRequirement: 'Full sun',
		wateringNeeds: 'Deep, consistent watering',
		companions: ['basil', 'parsley', 'marigold', 'borage'],
		avoid: ['cabbage family', 'fennel', 'corn'],
		commonPests: ['hornworms', 'aphids', 'blossom end rot'],
		tips: 'Rich, smoky flavor. Excellent for fresh eating. Needs good air circulation.',
		fruitSize: 'Large (10-12 oz)',
		fruitColor: 'Dark purple-red',
		growthHabit: 'Indeterminate',
	},
	yellow_pear_tomato: {
		name: 'Yellow Pear Tomato',
		type: 'Heirloom',
		origin: 'Europe (1700s)',
		plantingDepth: '0.25 inches',
		spacing: '24 inches',
		daysToGermination: '5-10 days',
		daysToHarvest: '75-80 days',
		soilPH: '6.0-6.8',
		sunRequirement: 'Full sun',
		wateringNeeds: 'Regular watering',
		companions: ['basil', 'marigold', 'nasturtium'],
		avoid: ['cabbage', 'fennel', 'potato'],
		commonPests: ['hornworms', 'aphids', 'whiteflies'],
		tips: 'Small, sweet cherry tomatoes. Prolific producer. Great for salads and snacking.',
		fruitSize: 'Small (1-2 oz)',
		fruitColor: 'Bright yellow',
		growthHabit: 'Indeterminate',
	},

	// LETTUCE VARIETIES - Different types and colors
	buttercrunch_lettuce: {
		name: 'Buttercrunch Lettuce',
		type: 'Butterhead',
		origin: 'Developed by Cornell University',
		plantingDepth: '0.25 inches',
		spacing: '8-12 inches',
		daysToGermination: '2-7 days',
		daysToHarvest: '55-65 days',
		soilPH: '6.0-7.0',
		sunRequirement: 'Partial shade in hot climates',
		wateringNeeds: 'Frequent, light watering to keep soil moist',
		companions: ['carrots', 'radish', 'strawberries', 'chives'],
		avoid: ['broccoli', 'cabbage', 'cauliflower'],
		commonPests: ['aphids', 'slugs', 'snails', 'leaf miners'],
		tips: 'Forms loose head. Heat tolerant. Succession plant every 2 weeks.',
		fruitSize: 'Medium head (6-8 inches)',
		fruitColor: 'Light green outer, yellow-green center',
		growthHabit: 'Head forming',
	},
	red_sails_lettuce: {
		name: 'Red Sails Lettuce',
		type: 'Leaf Lettuce',
		origin: 'Hybrid variety',
		plantingDepth: '0.25 inches',
		spacing: '6-8 inches',
		daysToGermination: '2-7 days',
		daysToHarvest: '45-55 days',
		soilPH: '6.0-7.0',
		sunRequirement: 'Full sun to partial shade',
		wateringNeeds: 'Keep soil consistently moist',
		companions: ['radish', 'spinach', 'arugula', 'herbs'],
		avoid: ['brassicas', 'alliums'],
		commonPests: ['aphids', 'slugs', 'snails'],
		tips: 'Cut-and-come-again variety. Beautiful red-tinted leaves. Heat tolerant.',
		fruitSize: 'Loose leaf',
		fruitColor: 'Red and green mixed',
		growthHabit: 'Leafy',
	},
	romaine_lettuce: {
		name: 'Romaine Lettuce',
		type: 'Cos Lettuce',
		origin: 'Mediterranean region',
		plantingDepth: '0.25 inches',
		spacing: '8-12 inches',
		daysToGermination: '2-7 days',
		daysToHarvest: '65-75 days',
		soilPH: '6.0-7.0',
		sunRequirement: 'Full sun',
		wateringNeeds: 'Regular watering, 1 inch per week',
		companions: ['carrots', 'radish', 'onions', 'garlic'],
		avoid: ['cabbage family', 'broccoli'],
		commonPests: ['aphids', 'slugs', 'snails'],
		tips: 'Upright growth habit. Crisp texture. Great for Caesar salads.',
		fruitSize: 'Tall head (10-12 inches)',
		fruitColor: 'Dark green',
		growthHabit: 'Upright head',
	},

	// CARROT VARIETIES - Different colors and types
	dragon_carrot: {
		name: 'Dragon Carrot',
		type: 'Heirloom',
		origin: 'China',
		plantingDepth: '0.25-0.5 inches',
		spacing: '2-3 inches',
		daysToGermination: '10-21 days',
		daysToHarvest: '65-75 days',
		soilPH: '6.0-6.8',
		sunRequirement: 'Full sun',
		wateringNeeds: 'Regular watering, 1 inch per week',
		companions: ['onions', 'leeks', 'rosemary', 'sage', 'chives'],
		avoid: ['dill', 'parsnip', 'fennel'],
		commonPests: ['carrot rust fly', 'wireworms', 'nematodes'],
		tips: 'Purple skin with orange interior. Sweet, spicy flavor. Needs loose soil.',
		fruitSize: 'Medium (6-8 inches)',
		fruitColor: 'Purple skin, orange flesh',
		growthHabit: 'Root vegetable',
	},
	atomic_red_carrot: {
		name: 'Atomic Red Carrot',
		type: 'Heirloom',
		origin: 'Turkey',
		plantingDepth: '0.25-0.5 inches',
		spacing: '2-3 inches',
		daysToGermination: '10-21 days',
		daysToHarvest: '70-80 days',
		soilPH: '6.0-6.8',
		sunRequirement: 'Full sun',
		wateringNeeds: 'Consistent moisture',
		companions: ['onions', 'leeks', 'parsley', 'marigold'],
		avoid: ['dill', 'parsnip'],
		commonPests: ['carrot rust fly', 'wireworms'],
		tips: 'Vibrant red color throughout. High in lycopene. Excellent for juicing.',
		fruitSize: 'Medium (7-9 inches)',
		fruitColor: 'Deep red',
		growthHabit: 'Root vegetable',
	},
	purple_haze_carrot: {
		name: 'Purple Haze Carrot',
		type: 'Hybrid',
		origin: 'Modern hybrid',
		plantingDepth: '0.25-0.5 inches',
		spacing: '2-3 inches',
		daysToGermination: '10-21 days',
		daysToHarvest: '65-75 days',
		soilPH: '6.0-6.8',
		sunRequirement: 'Full sun',
		wateringNeeds: 'Regular watering',
		companions: ['onions', 'chives', 'rosemary', 'marigold'],
		avoid: ['dill', 'parsnip', 'fennel'],
		commonPests: ['carrot rust fly', 'wireworms'],
		tips: 'Purple skin, orange core. Sweet flavor. Good storage qualities.',
		fruitSize: 'Medium (6-8 inches)',
		fruitColor: 'Purple skin, orange flesh',
		growthHabit: 'Root vegetable',
	},
	white_satin_carrot: {
		name: 'White Satin Carrot',
		type: 'Heirloom',
		origin: 'Europe',
		plantingDepth: '0.25-0.5 inches',
		spacing: '2-3 inches',
		daysToGermination: '10-21 days',
		daysToHarvest: '65-75 days',
		soilPH: '6.0-6.8',
		sunRequirement: 'Full sun',
		wateringNeeds: 'Regular watering',
		companions: ['onions', 'leeks', 'rosemary', 'sage'],
		avoid: ['dill', 'parsnip'],
		commonPests: ['carrot rust fly', 'wireworms'],
		tips: 'Pure white color. Mild, sweet flavor. Excellent for soups and roasting.',
		fruitSize: 'Medium (6-8 inches)',
		fruitColor: 'White',
		growthHabit: 'Root vegetable',
	},

	// PEPPER VARIETIES - Sweet and hot peppers
	chocolate_habanero: {
		name: 'Chocolate Habanero',
		type: 'Hot Pepper',
		origin: 'Caribbean',
		plantingDepth: '0.25 inches',
		spacing: '18-24 inches',
		daysToGermination: '7-14 days',
		daysToHarvest: '90-100 days',
		soilPH: '6.0-6.8',
		sunRequirement: 'Full sun',
		wateringNeeds: 'Regular watering, allow soil to dry between waterings',
		companions: ['basil', 'marjoram', 'oregano', 'marigold'],
		avoid: ['fennel', 'kohlrabi', 'brassicas'],
		commonPests: ['aphids', 'thrips', 'whiteflies', 'pepper maggots'],
		tips: 'Extremely hot (300,000-400,000 SHU). Rich, smoky flavor. Wear gloves when handling.',
		fruitSize: 'Small (1-2 inches)',
		fruitColor: 'Dark brown',
		heatLevel: 'Very Hot (300,000-400,000 SHU)',
		growthHabit: 'Compact bush',
	},
	lemon_drop_pepper: {
		name: 'Lemon Drop Pepper',
		type: 'Hot Pepper',
		origin: 'Peru',
		plantingDepth: '0.25 inches',
		spacing: '18-24 inches',
		daysToGermination: '7-14 days',
		daysToHarvest: '85-95 days',
		soilPH: '6.0-6.8',
		sunRequirement: 'Full sun',
		wateringNeeds: 'Regular watering',
		companions: ['basil', 'oregano', 'marigold', 'nasturtium'],
		avoid: ['fennel', 'kohlrabi'],
		commonPests: ['aphids', 'thrips', 'whiteflies'],
		tips: 'Bright citrus flavor with moderate heat. Great for salsas and hot sauces.',
		fruitSize: 'Small (2-3 inches)',
		fruitColor: 'Bright yellow',
		heatLevel: 'Medium-Hot (15,000-30,000 SHU)',
		growthHabit: 'Compact',
	},
	purple_bell_pepper: {
		name: 'Purple Bell Pepper',
		type: 'Sweet Pepper',
		origin: 'Modern variety',
		plantingDepth: '0.25 inches',
		spacing: '18-24 inches',
		daysToGermination: '7-14 days',
		daysToHarvest: '75-85 days',
		soilPH: '6.0-6.8',
		sunRequirement: 'Full sun',
		wateringNeeds: 'Regular watering',
		companions: ['basil', 'marjoram', 'oregano', 'marigold'],
		avoid: ['fennel', 'kohlrabi'],
		commonPests: ['aphids', 'thrips', 'whiteflies'],
		tips: 'Sweet, mild flavor. Beautiful purple color when mature. Great for stuffing.',
		fruitSize: 'Large (4-5 inches)',
		fruitColor: 'Deep purple',
		heatLevel: 'Sweet (0 SHU)',
		growthHabit: 'Bush',
	},
	chocolate_bell_pepper: {
		name: 'Chocolate Bell Pepper',
		type: 'Sweet Pepper',
		origin: 'Modern variety',
		plantingDepth: '0.25 inches',
		spacing: '18-24 inches',
		daysToGermination: '7-14 days',
		daysToHarvest: '75-85 days',
		soilPH: '6.0-6.8',
		sunRequirement: 'Full sun',
		wateringNeeds: 'Regular watering',
		companions: ['basil', 'marjoram', 'oregano'],
		avoid: ['fennel', 'kohlrabi'],
		commonPests: ['aphids', 'thrips', 'whiteflies'],
		tips: 'Sweet flavor with hint of earthiness. Beautiful brown color when mature.',
		fruitSize: 'Large (4-5 inches)',
		fruitColor: 'Dark brown',
		heatLevel: 'Sweet (0 SHU)',
		growthHabit: 'Bush',
	},

	// CUCUMBER VARIETIES - Different types and uses
	lemon_cucumber: {
		name: 'Lemon Cucumber',
		type: 'Heirloom',
		origin: 'Unknown (introduced 1894)',
		plantingDepth: '0.5-1 inch',
		spacing: '36-48 inches',
		daysToGermination: '3-10 days',
		daysToHarvest: '65-75 days',
		soilPH: '6.0-7.0',
		sunRequirement: 'Full sun',
		wateringNeeds: 'Regular, deep watering - 1-2 inches per week',
		companions: ['beans', 'corn', 'radish', 'sunflowers', 'nasturtium'],
		avoid: ['aromatic herbs', 'potato', 'sage'],
		commonPests: ['cucumber beetles', 'aphids', 'spider mites', 'powdery mildew'],
		tips: 'Round, yellow fruit. Mild, sweet flavor. Great for pickling or fresh eating.',
		fruitSize: 'Medium (2-3 inches diameter)',
		fruitColor: 'Pale yellow',
		growthHabit: 'Vining',
	},
	armenian_cucumber: {
		name: 'Armenian Cucumber',
		type: 'Heirloom',
		origin: 'Armenia',
		plantingDepth: '0.5-1 inch',
		spacing: '36-48 inches',
		daysToGermination: '3-10 days',
		daysToHarvest: '55-65 days',
		soilPH: '6.0-7.0',
		sunRequirement: 'Full sun',
		wateringNeeds: 'Regular watering',
		companions: ['corn', 'beans', 'radish', 'marigold'],
		avoid: ['aromatic herbs', 'potato'],
		commonPests: ['cucumber beetles', 'aphids'],
		tips: 'Actually a melon! Mild flavor, no bitterness. Excellent trellised.',
		fruitSize: 'Very long (12-24 inches)',
		fruitColor: 'Light green',
		growthHabit: 'Vining',
	},
	pickling_cucumber: {
		name: 'Boston Pickling Cucumber',
		type: 'Heirloom',
		origin: 'Boston area (1880s)',
		plantingDepth: '0.5-1 inch',
		spacing: '36-48 inches',
		daysToGermination: '3-10 days',
		daysToHarvest: '50-60 days',
		soilPH: '6.0-7.0',
		sunRequirement: 'Full sun',
		wateringNeeds: 'Regular watering',
		companions: ['beans', 'corn', 'radish', 'sunflowers'],
		avoid: ['aromatic herbs', 'potato'],
		commonPests: ['cucumber beetles', 'aphids', 'spider mites'],
		tips: 'Perfect for pickling. Crisp texture. Harvest small for best pickles.',
		fruitSize: 'Small-medium (3-5 inches)',
		fruitColor: 'Dark green',
		growthHabit: 'Vining',
	},

	// BEAN VARIETIES - Different types and colors
	purple_pod_ded_bean: {
		name: 'Purple Podded Bean',
		type: 'Heirloom',
		origin: 'Unknown (pre-1800s)',
		plantingDepth: '1 inch',
		spacing: '3-4 inches',
		daysToGermination: '4-10 days',
		daysToHarvest: '55-65 days',
		soilPH: '6.0-7.0',
		sunRequirement: 'Full sun',
		wateringNeeds: 'Regular watering, avoid overhead watering',
		companions: ['carrots', 'cucumber', 'marigold', 'potato', 'corn'],
		avoid: ['onion', 'garlic', 'fennel', 'gladiolus'],
		commonPests: ['bean beetles', 'aphids', 'spider mites'],
		tips: 'Beautiful purple pods turn green when cooked. Fix nitrogen in soil.',
		fruitSize: 'Medium pods (4-6 inches)',
		fruitColor: 'Purple pods',
		growthHabit: 'Bush',
	},
	scarlet_runner_bean: {
		name: 'Scarlet Runner Bean',
		type: 'Heirloom',
		origin: 'South America',
		plantingDepth: '1 inch',
		spacing: '6-8 inches',
		daysToGermination: '4-10 days',
		daysToHarvest: '65-75 days',
		soilPH: '6.0-7.0',
		sunRequirement: 'Full sun to partial shade',
		wateringNeeds: 'Regular watering',
		companions: ['corn', 'sunflower', 'marigold'],
		avoid: ['onion', 'garlic', 'beet'],
		commonPests: ['bean beetles', 'aphids'],
		tips: 'Beautiful red flowers! Edible flowers and pods. Excellent trellised.',
		fruitSize: 'Long pods (6-8 inches)',
		fruitColor: 'Green pods, red flowers',
		growthHabit: 'Climbing',
	},
	yellow_wax_bean: {
		name: 'Yellow Wax Bean',
		type: 'Heirloom',
		origin: 'Europe',
		plantingDepth: '1 inch',
		spacing: '3-4 inches',
		daysToGermination: '4-10 days',
		daysToHarvest: '50-60 days',
		soilPH: '6.0-7.0',
		sunRequirement: 'Full sun',
		wateringNeeds: 'Regular watering',
		companions: ['carrots', 'cucumber', 'marigold', 'potato'],
		avoid: ['onion', 'garlic', 'fennel'],
		commonPests: ['bean beetles', 'aphids'],
		tips: 'Mild, buttery flavor. Beautiful yellow pods. Great for fresh eating.',
		fruitSize: 'Medium pods (4-6 inches)',
		fruitColor: 'Yellow pods',
		growthHabit: 'Bush',
	},

	// RADISH VARIETIES - Different colors and types
	watermelon_radish: {
		name: 'Watermelon Radish',
		type: 'Heirloom',
		origin: 'China',
		plantingDepth: '0.5 inch',
		spacing: '2-3 inches',
		daysToGermination: '3-7 days',
		daysToHarvest: '60-70 days',
		soilPH: '6.0-7.0',
		sunRequirement: 'Full sun to partial shade',
		wateringNeeds: 'Regular, consistent watering',
		companions: ['lettuce', 'spinach', 'peas', 'cucumber', 'nasturtium'],
		avoid: ['hyssop'],
		commonPests: ['flea beetles', 'root maggots'],
		tips: 'Mild, sweet flavor. Beautiful pink interior. Great for salads.',
		fruitSize: 'Large (3-4 inches)',
		fruitColor: 'Green skin, pink interior',
		growthHabit: 'Root vegetable',
	},
	black_spanish_radish: {
		name: 'Black Spanish Radish',
		type: 'Heirloom',
		origin: 'Spain',
		plantingDepth: '0.5 inch',
		spacing: '2-3 inches',
		daysToGermination: '3-7 days',
		daysToHarvest: '55-65 days',
		soilPH: '6.0-7.0',
		sunRequirement: 'Full sun',
		wateringNeeds: 'Regular watering',
		companions: ['lettuce', 'spinach', 'carrots', 'parsley'],
		avoid: ['hyssop', 'cabbage'],
		commonPests: ['flea beetles', 'root maggots'],
		tips: 'Hot, pungent flavor. Excellent for winter storage. Great for kimchi.',
		fruitSize: 'Large (3-4 inches)',
		fruitColor: 'Black skin, white flesh',
		growthHabit: 'Root vegetable',
	},
	easter_egg_radish: {
		name: 'Easter Egg Radish',
		type: 'Heirloom Mix',
		origin: 'Mixed varieties',
		plantingDepth: '0.5 inch',
		spacing: '2 inches',
		daysToGermination: '3-7 days',
		daysToHarvest: '25-30 days',
		soilPH: '6.0-7.0',
		sunRequirement: 'Full sun to partial shade',
		wateringNeeds: 'Regular, consistent watering',
		companions: ['lettuce', 'spinach', 'peas', 'cucumber'],
		avoid: ['hyssop'],
		commonPests: ['flea beetles', 'root maggots'],
		tips: 'Mix of red, white, and purple radishes. Fast growing. Great for kids.',
		fruitSize: 'Small-medium (1-2 inches)',
		fruitColor: 'Mixed colors',
		growthHabit: 'Root vegetable',
	},

	// ADDITIONAL SPECIALTY VEGETABLES
	rainbow_chard: {
		name: 'Rainbow Swiss Chard',
		type: 'Heirloom',
		origin: 'Mediterranean',
		plantingDepth: '0.5 inch',
		spacing: '8-12 inches',
		daysToGermination: '5-10 days',
		daysToHarvest: '50-60 days',
		soilPH: '6.0-7.0',
		sunRequirement: 'Full sun to partial shade',
		wateringNeeds: 'Regular watering',
		companions: ['beans', 'onions', 'cabbage', 'lettuce'],
		avoid: ['beets', 'spinach'],
		commonPests: ['leaf miners', 'aphids', 'slugs'],
		tips: 'Beautiful colored stems. Cut outer leaves for continuous harvest.',
		fruitSize: 'Large leaves (12-18 inches)',
		fruitColor: 'Green leaves, colorful stems',
		growthHabit: 'Leafy green',
	},
	purple_kohlrabi: {
		name: 'Purple Kohlrabi',
		type: 'Heirloom',
		origin: 'Germany',
		plantingDepth: '0.25 inch',
		spacing: '6-8 inches',
		daysToGermination: '3-7 days',
		daysToHarvest: '55-65 days',
		soilPH: '6.0-7.0',
		sunRequirement: 'Full sun',
		wateringNeeds: 'Regular watering',
		companions: ['beets', 'onions', 'cucumber', 'lettuce'],
		avoid: ['tomatoes', 'peppers', 'pole beans'],
		commonPests: ['flea beetles', 'cabbage worms', 'aphids'],
		tips: 'Mild, sweet flavor. Edible leaves and bulb. Great for slaws.',
		fruitSize: 'Medium bulb (3-4 inches)',
		fruitColor: 'Purple skin, white flesh',
		growthHabit: 'Bulb vegetable',
	},
	purple_cauliflower: {
		name: 'Purple Cauliflower',
		type: 'Heirloom',
		origin: 'Italy',
		plantingDepth: '0.25 inch',
		spacing: '18-24 inches',
		daysToGermination: '3-7 days',
		daysToHarvest: '80-90 days',
		soilPH: '6.0-7.0',
		sunRequirement: 'Full sun',
		wateringNeeds: 'Regular watering',
		companions: ['beans', 'celery', 'onions', 'peas'],
		avoid: ['tomatoes', 'strawberries'],
		commonPests: ['cabbage worms', 'aphids', 'cabbage loopers'],
		tips: 'Rich in anthocyanins. Mild, nutty flavor. Blanch when head forms.',
		fruitSize: 'Medium head (6-8 inches)',
		fruitColor: 'Purple',
		growthHabit: 'Head forming',
	},
	orange_cauliflower: {
		name: 'Orange Cauliflower',
		type: 'Modern variety',
		origin: 'Developed in Canada',
		plantingDepth: '0.25 inch',
		spacing: '18-24 inches',
		daysToGermination: '3-7 days',
		daysToHarvest: '80-90 days',
		soilPH: '6.0-7.0',
		sunRequirement: 'Full sun',
		wateringNeeds: 'Regular watering',
		companions: ['beans', 'celery', 'onions', 'peas'],
		avoid: ['tomatoes', 'strawberries'],
		commonPests: ['cabbage worms', 'aphids', 'cabbage loopers'],
		tips: 'High in beta-carotene. Sweet, mild flavor. Retains color when cooked.',
		fruitSize: 'Medium head (6-8 inches)',
		fruitColor: 'Orange',
		growthHabit: 'Head forming',
	},
};

const PLANTING_ZONES = {
	1: { firstFrost: 'Sep 15-30', lastFrost: 'May 15-Jun 15' },
	2: { firstFrost: 'Sep 15-30', lastFrost: 'May 1-May 31' },
	3: { firstFrost: 'Sep 30-Oct 15', lastFrost: 'May 1-May 31' },
	4: { firstFrost: 'Oct 1-Oct 15', lastFrost: 'Apr 15-May 15' },
	5: { firstFrost: 'Oct 15-Oct 30', lastFrost: 'Apr 1-Apr 30' },
	6: { firstFrost: 'Oct 30-Nov 15', lastFrost: 'Mar 15-Apr 15' },
	7: { firstFrost: 'Nov 1-Nov 15', lastFrost: 'Mar 15-Apr 15' },
	8: { firstFrost: 'Nov 15-Dec 15', lastFrost: 'Feb 1-Mar 1' },
	9: { firstFrost: 'Dec 15-Jan 15', lastFrost: 'Jan 15-Feb 15' },
	10: { firstFrost: 'Rare frost', lastFrost: 'Rare frost' },
};

// Define available MCP tools
function getToolsList(): Tool[] {
	return [
		{
			name: 'get_plant_info',
			description: 'Get detailed growing information for a specific vegetable or herb',
			inputSchema: {
				type: 'object',
				properties: {
					plant: {
						type: 'string',
						description: 'Name of the plant (e.g., tomato, lettuce, carrot, pepper, cucumber, basil, zucchini)',
					},
				},
				required: ['plant'],
			},
		},
		{
			name: 'companion_planting',
			description: 'Get companion planting recommendations for a specific plant',
			inputSchema: {
				type: 'object',
				properties: {
					plant: {
						type: 'string',
						description: 'Name of the plant to find companions for',
					},
				},
				required: ['plant'],
			},
		},
		{
			name: 'planting_calendar',
			description: 'Get planting timing recommendations based on hardiness zone',
			inputSchema: {
				type: 'object',
				properties: {
					zone: {
						type: 'number',
						description: 'USDA Hardiness Zone (1-10)',
						minimum: 1,
						maximum: 10,
					},
					plant: {
						type: 'string',
						description: 'Optional: specific plant name for detailed timing',
					},
				},
				required: ['zone'],
			},
		},
		{
			name: 'diagnose_pest',
			description: 'Get information about common pests for a specific plant',
			inputSchema: {
				type: 'object',
				properties: {
					plant: {
						type: 'string',
						description: 'Name of the plant having pest issues',
					},
				},
				required: ['plant'],
			},
		},
		{
			name: 'soil_requirements',
			description: 'Get soil pH and preparation requirements for a plant',
			inputSchema: {
				type: 'object',
				properties: {
					plant: {
						type: 'string',
						description: 'Name of the plant',
					},
				},
				required: ['plant'],
			},
		},
		{
			name: 'watering_guide',
			description: 'Get watering schedule and requirements for a plant',
			inputSchema: {
				type: 'object',
				properties: {
					plant: {
						type: 'string',
						description: 'Name of the plant',
					},
				},
				required: ['plant'],
			},
		},
		{
			name: 'list_vegetables',
			description: 'List all available vegetables and herbs in the database',
			inputSchema: {
				type: 'object',
				properties: {},
			},
		},
	];
}

// Handle tool calls
function handleToolCall(name: string, args: any) {
	if (!args) {
		throw new Error('Missing arguments');
	}

	switch (name) {
		case 'get_plant_info': {
			const plant = (args.plant as string).toLowerCase();
			const info = VEGETABLES_DB[plant as keyof typeof VEGETABLES_DB];

			if (!info) {
				return {
					content: [
						{
							type: 'text',
							text: `Plant "${args.plant}" not found. Available plants: ${Object.keys(VEGETABLES_DB).join(', ')}`,
						},
					],
				};
			}

			return {
				content: [
					{
						type: 'text',
						text:
							`# ${info.name} Growing Guide\n\n` +
							`**Planting Depth:** ${info.plantingDepth}\n` +
							`**Spacing:** ${info.spacing}\n` +
							`**Days to Germination:** ${info.daysToGermination}\n` +
							`**Days to Harvest:** ${info.daysToHarvest}\n` +
							`**Soil pH:** ${info.soilPH}\n` +
							`**Sun Requirement:** ${info.sunRequirement}\n` +
							`**Watering Needs:** ${info.wateringNeeds}\n\n` +
							`**Companion Plants:** ${info.companions.join(', ')}\n` +
							`**Avoid Planting With:** ${info.avoid.join(', ')}\n\n` +
							`**Common Pests:** ${info.commonPests.join(', ')}\n\n` +
							`**Tips:** ${info.tips}`,
					},
				],
			};
		}

		case 'companion_planting': {
			const plant = (args.plant as string).toLowerCase();
			const info = VEGETABLES_DB[plant as keyof typeof VEGETABLES_DB];

			if (!info) {
				return {
					content: [
						{
							type: 'text',
							text: `Plant "${args.plant}" not found. Available plants: ${Object.keys(VEGETABLES_DB).join(', ')}`,
						},
					],
				};
			}

			return {
				content: [
					{
						type: 'text',
						text:
							`# Companion Planting for ${info.name}\n\n` +
							`**Good Companions:**\n${info.companions.map((c) => `- ${c.charAt(0).toUpperCase() + c.slice(1)}`).join('\n')}\n\n` +
							`**Avoid Planting With:**\n${info.avoid.map((a) => `- ${a.charAt(0).toUpperCase() + a.slice(1)}`).join('\n')}\n\n` +
							`Companion planting helps with pest control, pollination, and maximizing space usage.`,
					},
				],
			};
		}

		case 'planting_calendar': {
			const zone = args.zone as number;
			const zoneInfo = PLANTING_ZONES[zone as keyof typeof PLANTING_ZONES];

			if (!zoneInfo) {
				return {
					content: [
						{
							type: 'text',
							text: `Invalid zone. Please provide a USDA Hardiness Zone between 1 and 10.`,
						},
					],
				};
			}

			let response =
				`# Planting Calendar for Zone ${zone}\n\n` +
				`**Last Frost Date:** ${zoneInfo.lastFrost}\n` +
				`**First Frost Date:** ${zoneInfo.firstFrost}\n\n`;

			if (args.plant) {
				const plant = (args.plant as string).toLowerCase();
				const info = VEGETABLES_DB[plant as keyof typeof VEGETABLES_DB];

				if (info) {
					response +=
						`## ${info.name} Planting Timeline\n\n` +
						`**Start seeds indoors:** 4-6 weeks before last frost\n` +
						`**Transplant outdoors:** After last frost when soil is warm\n` +
						`**Direct sow:** 1-2 weeks after last frost\n` +
						`**Days to germination:** ${info.daysToGermination}\n` +
						`**Days to harvest:** ${info.daysToHarvest}\n`;
				}
			} else {
				response +=
					`**General Guidelines:**\n` +
					`- Start cool-season crops (lettuce, peas) 2-4 weeks before last frost\n` +
					`- Start warm-season crops (tomatoes, peppers) after last frost\n` +
					`- Plan fall crops by counting back from first frost date\n`;
			}

			return {
				content: [{ type: 'text', text: response }],
			};
		}

		case 'diagnose_pest': {
			const plant = (args.plant as string).toLowerCase();
			const info = VEGETABLES_DB[plant as keyof typeof VEGETABLES_DB];

			if (!info) {
				return {
					content: [
						{
							type: 'text',
							text: `Plant "${args.plant}" not found. Available plants: ${Object.keys(VEGETABLES_DB).join(', ')}`,
						},
					],
				};
			}

			return {
				content: [
					{
						type: 'text',
						text:
							`# Common Pests for ${info.name}\n\n` +
							info.commonPests
								.map(
									(pest) =>
										`## ${pest.charAt(0).toUpperCase() + pest.slice(1)}\n` +
										`Check leaves, stems, and fruits regularly. Early detection is key!\n`
								)
								.join('\n') +
							`\n**Prevention Tips:**\n` +
							`- Regular inspection\n` +
							`- Crop rotation\n` +
							`- Companion planting with pest-repellent plants\n` +
							`- Maintain healthy soil and proper watering\n` +
							`- Remove affected leaves promptly\n`,
					},
				],
			};
		}

		case 'soil_requirements': {
			const plant = (args.plant as string).toLowerCase();
			const info = VEGETABLES_DB[plant as keyof typeof VEGETABLES_DB];

			if (!info) {
				return {
					content: [
						{
							type: 'text',
							text: `Plant "${args.plant}" not found. Available plants: ${Object.keys(VEGETABLES_DB).join(', ')}`,
						},
					],
				};
			}

			return {
				content: [
					{
						type: 'text',
						text:
							`# Soil Requirements for ${info.name}\n\n` +
							`**Optimal pH Range:** ${info.soilPH}\n` +
							`**Sun Requirement:** ${info.sunRequirement}\n\n` +
							`**Soil Preparation:**\n` +
							`- Test soil pH and adjust if needed\n` +
							`- Add compost or aged manure for nutrients\n` +
							`- Ensure good drainage\n` +
							`- Loosen soil to appropriate depth (${info.plantingDepth} for seeds)\n` +
							`- Consider raised beds for heavy or clay soils\n`,
					},
				],
			};
		}

		case 'watering_guide': {
			const plant = (args.plant as string).toLowerCase();
			const info = VEGETABLES_DB[plant as keyof typeof VEGETABLES_DB];

			if (!info) {
				return {
					content: [
						{
							type: 'text',
							text: `Plant "${args.plant}" not found. Available plants: ${Object.keys(VEGETABLES_DB).join(', ')}`,
						},
					],
				};
			}

			return {
				content: [
					{
						type: 'text',
						text:
							`# Watering Guide for ${info.name}\n\n` +
							`**Watering Requirements:** ${info.wateringNeeds}\n\n` +
							`**Best Practices:**\n` +
							`- Water in the morning to reduce disease risk\n` +
							`- Water at soil level, avoid wetting foliage\n` +
							`- Use mulch to retain moisture\n` +
							`- Adjust based on rainfall and temperature\n` +
							`- Deep, infrequent watering encourages strong roots\n` +
							`- Check soil moisture 2-3 inches deep before watering\n`,
					},
				],
			};
		}

		case 'list_vegetables': {
			const vegetables = Object.keys(VEGETABLES_DB).map((key) => {
				const info = VEGETABLES_DB[key as keyof typeof VEGETABLES_DB];
				return `- **${info.name}**: ${info.daysToHarvest} harvest`;
			});

			return {
				content: [
					{
						type: 'text',
						text:
							`# Available Vegetables and Herbs\n\n${vegetables.join('\n')}\n\n` +
							`Use get_plant_info to learn more about any of these plants!`,
					},
				],
			};
		}

		default:
			throw new Error(`Unknown tool: ${name}`);
	}
}

// Cloudflare Worker handler
export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const url = new URL(request.url);

		// Health check endpoint
		if (url.pathname === '/health') {
			return new Response(JSON.stringify({ status: 'healthy', service: 'veggie-tools-mcp', timestamp: new Date().toISOString() }), {
				headers: {
					'Content-Type': 'application/json',
					'Cache-Control': 'no-cache',
				},
			});
		}

		// MCP endpoint
		if (url.pathname === '/mcp' && request.method === 'POST') {
			try {
				const body = (await request.json()) as { method?: string; params?: { name?: string; arguments?: unknown } };

				// Handle MCP requests
				if (body.method === 'tools/list') {
					return new Response(
						JSON.stringify({
							tools: getToolsList(),
						}),
						{
							headers: { 'Content-Type': 'application/json' },
						}
					);
				} else if (body.method === 'tools/call') {
					const result = handleToolCall(body.params?.name || '', body.params?.arguments || {});
					return new Response(JSON.stringify(result), {
						headers: { 'Content-Type': 'application/json' },
					});
				}

				return new Response(JSON.stringify({ error: 'Unknown method' }), {
					status: 400,
					headers: { 'Content-Type': 'application/json' },
				});
			} catch (error) {
				return new Response(JSON.stringify({ error: (error as Error).message }), {
					status: 500,
					headers: { 'Content-Type': 'application/json' },
				});
			}
		}

		// API Info endpoint (JSON)
		if (url.pathname === '/api') {
			return new Response(
				JSON.stringify({
					name: 'Veggie Tools MCP Server',
					version: '1.0.0',
					description: 'A Model Context Protocol server for vegetable gardening assistance',
					endpoints: {
						health: '/health',
						mcp: '/mcp (POST)',
						api: '/api',
					},
					tools: [
						'get_plant_info',
						'companion_planting',
						'planting_calendar',
						'diagnose_pest',
						'soil_requirements',
						'watering_guide',
						'list_vegetables',
					],
					documentation: 'https://github.com/modelcontextprotocol/servers',
				}),
				{
					headers: { 'Content-Type': 'application/json' },
				}
			);
		}

		// All other paths will be handled by static assets (index.html, robots.txt, etc.)
		// This is configured in wrangler.jsonc with the assets directory
		return new Response('Not Found', { status: 404 });
	},
} satisfies ExportedHandler<Env>;
