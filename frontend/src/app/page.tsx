'use client';

import { motion } from 'framer-motion';
import { Leaf, Zap, Users, BookOpen, ArrowRight, ChevronRight, Globe, Heart, Github, Code } from 'lucide-react';
import PlantShowcase from '@/components/PlantShowcase';

export default function LandingPage() {
	return (
		<div className="min-h-screen bg-white overflow-hidden">
			{/* Navigation */}
			<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-primary-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center py-4">
						<motion.div
							className="flex items-center space-x-2"
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
						>
							<div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
								<Leaf className="w-6 h-6 text-white" />
							</div>
							<span className="text-2xl font-bold text-gray-900">VeggieTools</span>
						</motion.div>

						<motion.div
							className="hidden md:flex items-center space-x-8"
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							<a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">
								Features
							</a>
							<a href="#plants" className="text-gray-600 hover:text-primary-600 transition-colors">
								Plants
							</a>
							<a href="#api" className="text-gray-600 hover:text-primary-600 transition-colors">
								API
							</a>
						</motion.div>

						<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
							<button className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors flex items-center space-x-2">
								<span>Get Started</span>
								<ArrowRight className="w-4 h-4" />
							</button>
						</motion.div>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="relative min-h-screen flex items-center justify-center pt-20">
				{/* Background Elements */}
				<div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50"></div>
				<div className="absolute inset-0 bg-hero-pattern opacity-30"></div>

				{/* Floating Elements */}
				<motion.div
					className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-60"
					animate={{
						y: [0, -20, 0],
						rotate: [0, 10, 0],
					}}
					transition={{
						duration: 6,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				/>
				<motion.div
					className="absolute top-40 right-20 w-16 h-16 bg-secondary-200 rounded-full opacity-60"
					animate={{
						y: [0, 15, 0],
						rotate: [0, -15, 0],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				/>
				<motion.div
					className="absolute bottom-40 left-20 w-12 h-12 bg-accent-200 rounded-full opacity-60"
					animate={{
						y: [0, -25, 0],
						x: [0, 10, 0],
					}}
					transition={{
						duration: 7,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				/>

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Hero Content - Centered */}
					<div className="text-center max-w-4xl mx-auto">
						<div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6 animate-fade-in-up">
							<Code className="w-4 h-4 mr-2" />
							Model Context Protocol Server
						</div>

						<h1
							className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up"
							style={{ animationDelay: '0.1s' }}
						>
							Gardening intelligence{' '}
							<span className="relative">
								<span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">powered</span>
								<div className="absolute -bottom-2 left-0 w-full h-3 bg-secondary-300 rounded-full opacity-30" />
							</span>{' '}
							by{' '}
							<span className="relative">
								<span className="bg-gradient-to-r from-secondary-600 to-secondary-400 bg-clip-text text-transparent">MCP</span>
								<div className="absolute -bottom-2 left-0 w-full h-3 bg-secondary-300 rounded-full opacity-30" />
							</span>
						</h1>

						<p
							className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto py-6 md:py-8 leading-relaxed animate-fade-in-up"
							style={{ animationDelay: '0.2s' }}
						>
							A Model Context Protocol server providing expert knowledge for 25+ heirloom and specialty vegetable varieties. Access detailed
							growing guides, companion planting relationships, zone-specific calendars, and professional cultivation tips.
						</p>

						<div className="flex items-center justify-center space-x-8 mt-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
							<div className="flex items-center space-x-2">
								<div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
									<BookOpen className="w-5 h-5 text-primary-600" />
								</div>
								<div>
									<p className="text-sm font-semibold text-gray-900">25+ Varieties</p>
									<p className="text-xs text-gray-600">Heirloom & specialty</p>
								</div>
							</div>

							<div className="flex items-center space-x-2">
								<div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
									<Code className="w-5 h-5 text-secondary-600" />
								</div>
								<div>
									<p className="text-sm font-semibold text-gray-900">4 MCP Tools</p>
									<p className="text-xs text-gray-600">Ready to use</p>
								</div>
							</div>
						</div>
					</div>

					{/* Demo Card Section - Centered below hero */}
					<motion.div 
						className="mt-16"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						<div className="max-w-md mx-auto relative">
							{/* Main Demo Card */}
							<motion.div
								className="bg-white rounded-3xl shadow-2xl p-8 border border-primary-100"
								whileHover={{ y: -10 }}
								transition={{ duration: 0.3 }}
							>
								<div className="flex items-center space-x-4 mb-6">
									<div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
										<Leaf className="w-6 h-6 text-white" />
									</div>
									<div>
										<h3 className="font-bold text-gray-900">Tomato Growing Guide</h3>
										<p className="text-gray-600 text-sm">Perfect for beginners</p>
									</div>
								</div>

								<div className="space-y-4">
									<div className="flex items-center justify-between">
										<span className="text-gray-600">Days to Harvest</span>
										<span className="font-semibold text-primary-600">60-85 days</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-gray-600">Sun Requirement</span>
										<span className="font-semibold text-primary-600">Full sun</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-gray-600">Soil pH</span>
										<span className="font-semibold text-primary-600">6.0-6.8</span>
									</div>
								</div>

								<button className="w-full mt-6 bg-primary-600 text-white py-3 rounded-xl hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2">
									<span>Get Full Guide</span>
									<ChevronRight className="w-4 h-4" />
								</button>
							</motion.div>

							{/* Floating Cards - Better positioned */}
							<motion.div
								className="absolute -top-2 -right-2 bg-secondary-100 p-3 rounded-xl shadow-lg"
								animate={{
									y: [0, -5, 0],
									rotate: [0, 2, 0],
								}}
								transition={{
									duration: 4,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
							>
								<div className="flex items-center space-x-2">
									<div className="w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center">
										<Heart className="w-3 h-3 text-white" />
									</div>
									<div>
										<p className="text-xs font-semibold text-gray-900">Companion Plants</p>
										<p className="text-xs text-gray-600">Basil, Carrots</p>
									</div>
								</div>
							</motion.div>

							<motion.div
								className="absolute -bottom-2 -left-2 bg-accent-100 p-3 rounded-xl shadow-lg"
								animate={{
									y: [0, 5, 0],
									rotate: [0, -2, 0],
								}}
								transition={{
									duration: 5,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
							>
								<div className="flex items-center space-x-2">
									<div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center">
										<Zap className="w-3 h-3 text-white" />
									</div>
									<div>
										<p className="text-xs font-semibold text-gray-900">Quick Tips</p>
										<p className="text-xs text-gray-600">Stake plants!</p>
									</div>
								</div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Features Section */}
			<section id="features" className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						className="text-center mb-16"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<h2 className="text-4xl font-bold text-gray-900 mb-4">MCP Server Capabilities</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Powerful gardening intelligence accessible through the Model Context Protocol
						</p>
					</motion.div>

					<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
						{[
							{
								icon: <BookOpen className="w-6 h-6" />,
								title: 'get_plant_info',
								description:
									'Comprehensive growing guides for 25+ heirloom varieties including Black Krim tomatoes, Dragon carrots, Lemon Drop peppers, and specialty vegetables.',
								color: 'primary',
							},
							{
								icon: <Users className="w-6 h-6" />,
								title: 'get_companion_plants',
								description: 'Query companion planting relationships to optimize garden layouts and boost plant health naturally.',
								color: 'secondary',
							},
							{
								icon: <Globe className="w-6 h-6" />,
								title: 'get_planting_calendar',
								description: 'USDA zone-specific planting schedules with frost dates and optimal timing for your region.',
								color: 'accent',
							},
						].map((feature, index) => (
							<motion.div
								key={index}
								className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								whileHover={{ y: -5 }}
							>
								<div
									className={`w-12 h-12 bg-${feature.color}-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
								>
									<div className={`text-${feature.color}-600`}>{feature.icon}</div>
								</div>
								<h3 className="text-lg font-bold text-gray-900 mb-3 font-mono">{feature.title}</h3>
								<p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Plant Showcase Section */}
			<PlantShowcase />

			{/* API Section */}
			<section id="api" className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						className="text-center mb-12"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
							<Code className="w-4 h-4 mr-2" />
							MCP Protocol
						</div>
						<h2 className="text-4xl font-bold text-gray-900 mb-4">Connect via MCP</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							Integrate gardening intelligence into AI assistants using the Model Context Protocol
						</p>
					</motion.div>

					<motion.div
						className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						{[
							{
								method: 'tools/call',
								title: 'get_plant_info',
								description: 'Comprehensive vegetable cultivation data',
								color: 'primary',
							},
							{
								method: 'tools/call',
								title: 'get_companion_plants',
								description: 'Companion planting relationships',
								color: 'secondary',
							},
							{
								method: 'tools/call',
								title: 'get_planting_calendar',
								description: 'Zone-based planting schedules',
								color: 'accent',
							},
							{
								method: 'tools/call',
								title: 'get_gardening_tips',
								description: 'Expert growing advice',
								color: 'primary',
							},
						].map((item, index) => (
							<div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 group cursor-pointer">
								<div className={`inline-block px-3 py-1 rounded-full bg-${item.color}-100 text-${item.color}-700 text-xs font-mono mb-3`}>
									{item.method}
								</div>
								<h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors font-mono">
									{item.title}
								</h3>
								<p className="text-gray-600 text-sm">{item.description}</p>
							</div>
						))}
					</motion.div>

					<motion.div
						className="mt-12 text-center"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						<a
							href="https://github.com/CameronWhiteside/veggie-tools-mcp"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
						>
							<Github className="w-5 h-5" />
							<span>View on GitHub</span>
							<ArrowRight className="w-4 h-4" />
						</a>
						<p className="text-gray-600 text-sm mt-4">
							Base URL: <code className="bg-gray-100 px-2 py-1 rounded text-xs">https://veggie.tools</code>
						</p>
					</motion.div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
				<div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<h2 className="text-4xl font-bold text-white mb-6">Integrate Gardening Intelligence</h2>
						<p className="text-xl text-primary-100 mb-8">Connect your AI assistant to expert vegetable growing knowledge via MCP</p>
						<a
							href="https://github.com/CameronWhiteside/veggie-tools-mcp"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-4 rounded-full hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl"
						>
							<Github className="w-5 h-5" />
							<span className="text-lg font-semibold">View on GitHub</span>
							<ArrowRight className="w-5 h-5" />
						</a>
					</motion.div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-900 text-white py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="flex items-center space-x-2 mb-4 md:mb-0">
							<div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
								<Leaf className="w-5 h-5 text-white" />
							</div>
							<span className="text-xl font-bold">VeggieTools</span>
						</div>

						<div className="flex items-center space-x-6">
							<a href="#api" className="text-gray-400 hover:text-white transition-colors">
								API
							</a>
							<a
								href="https://github.com/CameronWhiteside"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1"
							>
								<Github className="w-4 h-4" />
								<span>GitHub</span>
							</a>
						</div>
					</div>

					<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
						<p>
							&copy; 2025 VeggieTools by{' '}
							<a
								href="https://github.com/CameronWhiteside"
								target="_blank"
								rel="noopener noreferrer"
								className="text-primary-400 hover:text-primary-300 transition-colors"
							>
								CameronWhiteside
							</a>
							. Built with ❤️ for gardeners everywhere.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
