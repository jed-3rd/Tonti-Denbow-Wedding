export interface RsvpTicketProps {
	arrivalDay: String | null;
	departureDay: String | null;
	submitted: boolean;
	lodging: boolean;
	guestList: GuestDataProps[];
}

export interface GuestDataProps {
	guestName: String;
	selectedActivities?: "Dad Package" | "Historic & Family Friendly Tour" | "Wine Auntie" | "Rocky Mountain High" | "None" | "Rehersal";
	dietaryRistrictions?: String;
	rehersalRequired: boolean;
	attending: boolean;
	child: boolean;
}

const rsvpData: RsvpTicketProps[] = [
	{
		arrivalDay: null,
		departureDay: null,
		lodging: true,
		submitted: false,
		guestList: [
			{
				guestName: "John Braselton",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: false,
				attending: false,
				child: false
			}
		]
	},
	{
		arrivalDay: null,
		departureDay: null,
		lodging: true,
		submitted: false,
		guestList: [
			{
				guestName: "Jaime Bishop",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: true,
				attending: false,
				child: false
			},
			{
				guestName: "Oliver Bishop",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: false,
				attending: false,
				child: true
			},
			{
				guestName: "Elvira Bishop",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: false,
				attending: false,
				child: true
			}
		]
	},
	{
		arrivalDay: null,
		departureDay: null,
		lodging: true,
		submitted: false,
		guestList: [
			{
				guestName: "Liz Tidwell",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: false,
				attending: false,
				child: false
			},
			{
				guestName: "Ty Bryant",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: false,
				attending: false,
				child: false
			},
		]
	},
	{
		arrivalDay: null,
		departureDay: null,
		lodging: true,
		submitted: false,
		guestList: [
			{
				guestName: "Kait Bushman",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: false,
				attending: false,
				child: false
			}
		]
	},
	{
		arrivalDay: null,
		departureDay: null,
		lodging: true,
		submitted: false,
		guestList: [
			{
				guestName: "Zara Chavez",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: false,
				attending: false,
				child: false
			}
		]
	},
	{
		arrivalDay: null,
		departureDay: null,
		lodging: true,
		submitted: false,
		guestList: [
			{
				guestName: "Myron Davis",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: false,
				attending: false,
				child: false
			}
		]
	},
	{
		arrivalDay: null,
		departureDay: null,
		lodging: true,
		submitted: false,
		guestList: [
			{
				guestName: "Carolyn Denbow",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: false,
				attending: false,
				child: false
			}
		]
	},
	{
		arrivalDay: null,
		departureDay: null,
		lodging: true,
		submitted: false,
		guestList: [
			{
				guestName: "Pam Denbow",
				selectedActivities: "Rehersal",
				dietaryRistrictions: "",
				rehersalRequired: true,
				attending: false,
				child: false
			}
		]
	},
	{
		arrivalDay: null,
		departureDay: null,
		lodging: true,
		submitted: false,
		guestList: [
			{
				guestName: "Victoria Denbow",
				selectedActivities: "Rehersal",
				dietaryRistrictions: "",
				rehersalRequired: true,
				attending: false,
				child: false
			}
		]
	},
	{
		arrivalDay: null,
		departureDay: null,
		lodging: true,
		submitted: false,
		guestList: [
			{
				guestName: "Djbril Diallo",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: false,
				attending: false,
				child: false
			}
		]
	},
	{
		arrivalDay: null,
		departureDay: null,
		lodging: true,
		submitted: false,
		guestList: [
			{
				guestName: "Chelsea Dodson",
				selectedActivities: "Rehersal",
				dietaryRistrictions: "",
				rehersalRequired: true,
				attending: false,
				child: false
			}
		]
	},
	{
		arrivalDay: null,
		departureDay: null,
		lodging: true,
		submitted: false,
		guestList: [
			{
				guestName: "Will Glennon",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: false,
				attending: false,
				child: false
			}
		]
	},
	{
		arrivalDay: null,
		departureDay: null,
		lodging: true,
		submitted: false,
		guestList: [
			{
				guestName: "Josh Harris",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: false,
				attending: false,
				child: false
			},
			{
				guestName: "Kianna Harris",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: false,
				attending: false,
				child: false
			},
			{
				guestName: "Ezra Harris",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: false,
				attending: false,
				child: true
			}
		]
	},
	{
		arrivalDay: null,
		departureDay: null,
		lodging: true,
		submitted: false,
		guestList: [
			{
				guestName: "Todd Harris",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: false,
				attending: false,
				child: false
			}
		]
	},
	{
		arrivalDay: null,
		departureDay: null,
		lodging: true,
		submitted: false,
		guestList: [
			{
				guestName: "Tristin Sanchez",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: false,
				attending: false,
				child: false
			},
			{
				guestName: "Anna Headley",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: false,
				attending: false,
				child: false
			}
		]
	},
	{
		arrivalDay: null,
		departureDay: null,
		lodging: true,
		submitted: false,
		guestList: [
			{
				guestName: "Mr. Heffron",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: false,
				attending: false,
				child: false
			},
			{
				guestName: "Mrs. Heffron",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: false,
				attending: false,
				child: false
			}
		]
	},
	{
		arrivalDay: null,
		departureDay: null,
		lodging: true,
		submitted: false,
		guestList: [
			{
				guestName: "Ken Maldolano",
				selectedActivities: "Rehersal",
				dietaryRistrictions: "",
				rehersalRequired: true,
				attending: false,
				child: false
			},
			{
				guestName: "Kevin Hegstrom",
				selectedActivities: "Rehersal",
				dietaryRistrictions: "",
				rehersalRequired: true,
				attending: false,
				child: false
			}
		]
	},
	{
		arrivalDay: null,
		departureDay: null,
		lodging: true,
		submitted: false,
		guestList: [
			{
				guestName: "Brad Ragan",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: false,
				attending: false,
				child: false
			},
			{
				guestName: "Heidi Ragan",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: false,
				attending: false,
				child: false
			},
			{
				guestName: "Noah Ragan",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: false,
				attending: false,
				child: true
			},
			{
				guestName: "Neva Ragan",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: false,
				attending: false,
				child: true
			},
		]
	},
	{
		arrivalDay: null,
		departureDay: null,
		lodging: true,
		submitted: false,
		guestList: [
			{
				guestName: "Minh Hoag",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: false,
				attending: false,
				child: false
			}
		]
	},
	{
		arrivalDay: null,
		departureDay: null,
		lodging: true,
		submitted: false,
		guestList: [
			{
				guestName: "Kellen Hogan",
				selectedActivities: "Rehersal",
				dietaryRistrictions: "",
				rehersalRequired: true,
				attending: false,
				child: false
			}
		]
	},
	{
		arrivalDay: null,
		departureDay: null,
		lodging: true,
		submitted: false,
		guestList: [
			{
				guestName: "Jim Denbow",
				selectedActivities: "Rehersal",
				dietaryRistrictions: "",
				rehersalRequired: true,
				attending: false,
				child: false
			}
		]
	},
	{
		arrivalDay: null,
		departureDay: null,
		lodging: true,
		submitted: false,
		guestList: [
			{
				guestName: "David Irsek",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: false,
				attending: false,
				child: false
			}
		]
	},
	{
		arrivalDay: null,
		departureDay: null,
		lodging: true,
		submitted: false,
		guestList: [
			{
				guestName: "Andee Skinner",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: false,
				attending: false,
				child: false
			},
			{
				guestName: "Klepper",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: false,
				attending: false,
				child: false
			}
		]
	},
	{
		arrivalDay: null,
		departureDay: null,
		lodging: true,
		submitted: false,
		guestList: [
			{
				guestName: "Holly Lupo",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: false,
				attending: false,
				child: false
			}
		]
	},
	{
		arrivalDay: null,
		departureDay: null,
		lodging: true,
		submitted: false,
		guestList: [
			{
				guestName: "Tim Millonzi",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: false,
				attending: false,
				child: false
			}
		]
	},
	{
		arrivalDay: null,
		departureDay: null,
		lodging: true,
		submitted: false,
		guestList: [
			{
				guestName: "Margarita Morales",
				selectedActivities: "Rehersal",
				dietaryRistrictions: "",
				rehersalRequired: true,
				attending: false,
				child: false
			},
			{
				guestName: "Andres Morales",
				selectedActivities: "Rehersal",
				dietaryRistrictions: "",
				rehersalRequired: true,
				attending: false,
				child: false
			}
		]
	},
	{
		arrivalDay: null,
		departureDay: null,
		lodging: true,
		submitted: false,
		guestList: [
			{
				guestName: "Clinton Peterson",
				selectedActivities: "Rehersal",
				dietaryRistrictions: "",
				rehersalRequired: true,
				attending: false,
				child: false
			}
		]
	},
	{
		arrivalDay: null,
		departureDay: null,
		lodging: true,
		submitted: false,
		guestList: [
			{
				guestName: "Kyle Peterson",
				selectedActivities: "Rehersal",
				dietaryRistrictions: "",
				rehersalRequired: true,
				attending: false,
				child: false
			},
			{
				guestName: "Plus 1?",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: false,
				attending: false,
				child: false
			}
		]
	},
	{
		arrivalDay: null,
		departureDay: null,
		lodging: true,
		submitted: false,
		guestList: [
			{
				guestName: "Brandon Stetler",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: false,
				attending: false,
				child: false
			}
		]
	},
	{
		arrivalDay: null,
		departureDay: null,
		lodging: true,
		submitted: false,
		guestList: [
			{
				guestName: "Alex Rensing",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: false,
				attending: false,
				child: false
			}
		]
	},
	{
		arrivalDay: null,
		departureDay: null,
		lodging: true,
		submitted: false,
		guestList: [
			{
				guestName: "Dale Roberts",
				selectedActivities: "Rehersal",
				dietaryRistrictions: "",
				rehersalRequired: true,
				attending: false,
				child: false
			},
			{
				guestName: "Gena Roberts",
				selectedActivities: "None",
				dietaryRistrictions: "",
				rehersalRequired: false,
				attending: false,
				child: false
			}
		]
	},
];

export default rsvpData;
