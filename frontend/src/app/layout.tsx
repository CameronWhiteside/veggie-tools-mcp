import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
});

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'VeggieTools - MCP Gardening Server',
	description:
		'Model Context Protocol server providing expert vegetable gardening intelligence. Access plant information, companion planting, zone-specific calendars, and growing tips through MCP.',
	keywords:
		'MCP, Model Context Protocol, gardening API, vegetables, plants, growing guide, companion planting, planting calendar, gardening server',
	authors: [{ name: 'Cameron Whiteside' }],
	creator: 'Cameron Whiteside',
	publisher: 'VeggieTools',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL('https://veggie.tools'),
	alternates: {
		canonical: '/',
	},
	openGraph: {
		title: 'VeggieTools - MCP Gardening Server',
		description: 'Model Context Protocol server providing expert vegetable gardening intelligence for AI assistants.',
		url: 'https://veggie.tools',
		siteName: 'VeggieTools MCP Server',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'VeggieTools - MCP Gardening Server',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'VeggieTools - MCP Gardening Server',
		description: 'Model Context Protocol server providing expert vegetable gardening intelligence for AI assistants.',
		images: ['/twitter-image.jpg'],
		creator: '@veggietools',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	verification: {
		google: 'your-google-verification-code',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${inter.variable} ${poppins.variable}`}>
			<head>
				<link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<meta name="theme-color" content="#22c55e" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	);
}
