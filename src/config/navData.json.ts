export interface navLinkItem {
	text: string;
	link: string;
	newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
}

export interface navDropdownItem {
	text: string;
	dropdown: navLinkItem[];
}

export type navItem = navLinkItem | navDropdownItem;

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
	{
		text: "Schedule",
		link: "/schedule",
	},
	{
		text: "Travel",
		link: "/travel",
	},
	{
		text: "Registry",
		link: "https://www.zola.com/registry/jedandolivia2025",
	},
];

export default navConfig;
