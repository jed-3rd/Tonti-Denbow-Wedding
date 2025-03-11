export interface SiteDataProps {
	name: String;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Tonti-Denbow Wedding",
	// Your website's title and description (meta fields)
	title: "Tonti-Denbow Wedding",
	description:
		"Join us for the wedding of Olivia Rose & James Edward.",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "Jed"
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/cosmic-themes-logo.jpg",
		alt: "Cosmic Themes logo",
	},
};

export default siteData;
