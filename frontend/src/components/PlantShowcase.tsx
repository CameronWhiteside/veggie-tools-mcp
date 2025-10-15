'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Leaf, Clock, Sun, Droplets, Thermometer } from 'lucide-react';

interface Plant {
	name: string;
	plantingDepth: string;
	spacing: string;
	daysToGermination: string;
	daysToHarvest: string;
	soilPH: string;
	sunRequirement: string;
	wateringNeeds: string;
	companions: string[];
	avoid: string[];
	commonPests: string[];
	tips: string;
}

const plants = [
	{ key: 'black_krim_tomato', name: 'Black Krim Tomato', icon: '🍅', color: 'from-purple-600 to-red-600' },
	{ key: 'green_zebra_tomato', name: 'Green Zebra Tomato', icon: '🍅', color: 'from-green-400 to-yellow-400' },
	{ key: 'dragon_carrot', name: 'Dragon Carrot', icon: '🥕', color: 'from-purple-500 to-orange-500' },
	{ key: 'atomic_red_carrot', name: 'Atomic Red Carrot', icon: '🥕', color: 'from-red-400 to-red-600' },
	{ key: 'chocolate_habanero', name: 'Chocolate Habanero', icon: '🌶️', color: 'from-amber-800 to-red-600' },
	{ key: 'lemon_drop_pepper', name: 'Lemon Drop Pepper', icon: '🌶️', color: 'from-yellow-400 to-yellow-600' },
	{ key: 'watermelon_radish', name: 'Watermelon Radish', icon: '🥕', color: 'from-green-400 to-pink-400' },
	{ key: 'rainbow_chard', name: 'Rainbow Chard', icon: '🥬', color: 'from-green-400 to-purple-400' },
];

export default function PlantShowcase() {
	const [selectedPlant, setSelectedPlant] = useState<string>('black_krim_tomato');
	const [plantData, setPlantData] = useState<Plant | null>(null);
	const [loading, setLoading] = useState(false);

	const fetchPlantData = async (plantKey: string) => {
		setLoading(true);
		try {
			const response = await fetch('https://veggie.tools/mcp', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					method: 'tools/call',
					params: {
						name: 'get_plant_info',
						arguments: { plant: plantKey },
					},
				}),
			});

			const data = await response.json();
			if (data.content && data.content[0] && data.content[0].text) {
				// Parse the plant data from the response
				const text = data.content[0].text;
				const lines = text.split('\n');

				const plant: Plant = {
					name: '',
					plantingDepth: '',
					spacing: '',
					daysToGermination: '',
					daysToHarvest: '',
					soilPH: '',
					sunRequirement: '',
					wateringNeeds: '',
					companions: [],
					avoid: [],
					commonPests: [],
					tips: '',
				};

				lines.forEach((line: string) => {
					// Parse the name from the title line (e.g., "# Black Krim Tomato Growing Guide")
					if (line.startsWith('# ')) {
						const titleMatch = line.match(/# (.+) Growing Guide/);
						if (titleMatch) {
							plant.name = titleMatch[1].trim();
						}
					}
					if (line.includes('**Planting Depth:**')) plant.plantingDepth = line.split('**Planting Depth:**')[1]?.trim() || '';
					if (line.includes('**Spacing:**')) plant.spacing = line.split('**Spacing:**')[1]?.trim() || '';
					if (line.includes('**Days to Germination:**')) plant.daysToGermination = line.split('**Days to Germination:**')[1]?.trim() || '';
					if (line.includes('**Days to Harvest:**')) plant.daysToHarvest = line.split('**Days to Harvest:**')[1]?.trim() || '';
					if (line.includes('**Soil pH:**')) plant.soilPH = line.split('**Soil pH:**')[1]?.trim() || '';
					if (line.includes('**Sun Requirement:**')) plant.sunRequirement = line.split('**Sun Requirement:**')[1]?.trim() || '';
					if (line.includes('**Watering Needs:**')) plant.wateringNeeds = line.split('**Watering Needs:**')[1]?.trim() || '';
					if (line.includes('**Companion Plants:**')) plant.companions = line.split('**Companion Plants:**')[1]?.trim().split(', ') || [];
					if (line.includes('**Avoid Planting With:**')) plant.avoid = line.split('**Avoid Planting With:**')[1]?.trim().split(', ') || [];
					if (line.includes('**Common Pests:**')) plant.commonPests = line.split('**Common Pests:**')[1]?.trim().split(', ') || [];
					if (line.includes('**Tips:**')) plant.tips = line.split('**Tips:**')[1]?.trim() || '';
				});

				// Fallback to formatted key if name not found in response
				if (!plant.name) {
					plant.name = plantKey.charAt(0).toUpperCase() + plantKey.slice(1).replace(/_/g, ' ');
				}

				setPlantData(plant);
			}
		} catch (error) {
			console.error('Error fetching plant data:', error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchPlantData(selectedPlant);
	}, [selectedPlant]);

	return (
		<section id="plants" className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Plant Database</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">Get detailed growing information for popular vegetables and herbs</p>
				</motion.div>

				<div className="grid lg:grid-cols-3 gap-12">
					{/* Plant Selection */}
					<div className="lg:col-span-1">
						<div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
							{plants.map((plant) => (
								<motion.button
									key={plant.key}
									onClick={() => setSelectedPlant(plant.key)}
									className={`p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
										selectedPlant === plant.key
											? 'border-primary-500 bg-primary-50 shadow-lg'
											: 'border-gray-200 bg-white hover:border-primary-300 hover:bg-primary-25'
									}`}
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
								>
									<div className="flex items-center space-x-3">
										<div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-2xl">
											<span className="emoji">{plant.icon}</span>
										</div>
										<div>
											<h3 className="font-semibold text-gray-900">{plant.name}</h3>
											<p className="text-sm text-gray-600">Growing guide</p>
										</div>
									</div>
								</motion.button>
							))}
						</div>
					</div>

					{/* Plant Details */}
					<div className="lg:col-span-2">
						<motion.div
							key={selectedPlant}
							className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
						>
							{loading ? (
								<div className="p-8 text-center">
									<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
									<p className="text-gray-600">Loading plant information...</p>
								</div>
							) : plantData ? (
								<>
									{/* Header */}
									<div className="bg-gradient-to-r from-primary-500 to-primary-600 p-8 text-white">
										<div className="flex items-center space-x-4 mb-4">
											<div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
												<Leaf className="w-8 h-8" />
											</div>
											<div>
												<h3 className="text-3xl font-bold">{plantData.name} Growing Guide</h3>
												<p className="text-primary-100">Complete care instructions</p>
											</div>
										</div>
									</div>

									{/* Content */}
									<div className="p-8">
										<div className="grid md:grid-cols-2 gap-8">
											{/* Basic Info */}
											<div className="space-y-6">
												<div className="flex items-center space-x-3">
													<Clock className="w-5 h-5 text-primary-600" />
													<div>
														<p className="text-sm text-gray-600">Days to Harvest</p>
														<p className="font-semibold text-gray-900">{plantData.daysToHarvest}</p>
													</div>
												</div>

												<div className="flex items-center space-x-3">
													<Sun className="w-5 h-5 text-primary-600" />
													<div>
														<p className="text-sm text-gray-600">Sun Requirement</p>
														<p className="font-semibold text-gray-900">{plantData.sunRequirement}</p>
													</div>
												</div>

												<div className="flex items-center space-x-3">
													<Droplets className="w-5 h-5 text-primary-600" />
													<div>
														<p className="text-sm text-gray-600">Watering Needs</p>
														<p className="font-semibold text-gray-900">{plantData.wateringNeeds}</p>
													</div>
												</div>

												<div className="flex items-center space-x-3">
													<Thermometer className="w-5 h-5 text-primary-600" />
													<div>
														<p className="text-sm text-gray-600">Soil pH</p>
														<p className="font-semibold text-gray-900">{plantData.soilPH}</p>
													</div>
												</div>
											</div>

											{/* Planting Info */}
											<div className="space-y-6">
												<div>
													<p className="text-sm text-gray-600 mb-2">Planting Depth</p>
													<p className="font-semibold text-gray-900">{plantData.plantingDepth}</p>
												</div>

												<div>
													<p className="text-sm text-gray-600 mb-2">Spacing</p>
													<p className="font-semibold text-gray-900">{plantData.spacing}</p>
												</div>

												<div>
													<p className="text-sm text-gray-600 mb-2">Days to Germination</p>
													<p className="font-semibold text-gray-900">{plantData.daysToGermination}</p>
												</div>
											</div>
										</div>

										{/* Companions and Tips */}
										<div className="mt-8 pt-8 border-t border-gray-100">
											<div className="grid md:grid-cols-2 gap-8">
												<div>
													<h4 className="font-semibold text-gray-900 mb-3">Good Companions</h4>
													<div className="flex flex-wrap gap-2">
														{plantData.companions.map((companion, index) => (
															<span key={index} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
																{companion}
															</span>
														))}
													</div>
												</div>

												<div>
													<h4 className="font-semibold text-gray-900 mb-3">Avoid Planting With</h4>
													<div className="flex flex-wrap gap-2">
														{plantData.avoid.map((avoid, index) => (
															<span key={index} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
																{avoid}
															</span>
														))}
													</div>
												</div>
											</div>

											{plantData.tips && (
												<div className="mt-6 p-4 bg-accent-50 rounded-xl">
													<h4 className="font-semibold text-gray-900 mb-2">Pro Tip</h4>
													<p className="text-gray-700">{plantData.tips}</p>
												</div>
											)}
										</div>
									</div>
								</>
							) : (
								<div className="p-8 text-center">
									<p className="text-gray-600">Select a plant to view its growing guide</p>
								</div>
							)}
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
