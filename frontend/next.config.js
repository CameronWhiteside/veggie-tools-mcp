/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
	outputFileTracingRoot: undefined,
};

module.exports = nextConfig;
