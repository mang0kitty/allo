type HandleType = "github"|"linkedin"|"instagram";
type ContactType = "email"|"phone"|"cell";

export interface UserProfile {
    name: string;
    position?: string;
    company?: string;

    contact: {
        type: ContactType;
        value: string;
    }[];
    handles: {
        type: HandleType;
        value: string;
    }[];
}

export const handleTypes: { [id: string]: string } = {
    "linkedin": "LinkedIn",
    "github": "GitHub",
    "instagram": "Instagram"
}

export const contactTypes: { [id: string]: string } = {
    "email": "Email",
    "cell": "Cell",
    "phone": "Phone"
}