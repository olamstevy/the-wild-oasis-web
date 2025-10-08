/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "fziehwzcdnzzykhezfoe.supabase.co",
				pathname: "/storage/v1/object/public/cabin-images/**",
			},
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
				pathname: "/**",
			},
		],
	},
	// output: "export",
};

export default nextConfig;
