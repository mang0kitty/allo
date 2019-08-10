import { UserProfile } from "./userprofile";

export function toVCard(profile: UserProfile): string {
    return [
        "BEGIN:VCARD",
        "VERSION:4.0",
        `FN:${profile.name}`,
        `ORG:${profile.company}`,
        `TITLE:${profile.position}`,

        ...profile.contact.map(c => {
            switch (c.type) {
                case "email":
                    return `EMAIL:${c.value}`
                case "cell":
                    return `TEL;TYPE=home,voice;VALUE=uri:tel:${c.value}`
                case "phone":
                    return `TEL;TYPE=work,voice;VALUE=uri:tel:${c.value}`
            }
        }),
        ...profile.handles.map(c=> {
            switch(c.type) {
                case "linkedin":
                    return `URL:https://www.linkedin.com/${c.value}`
                case "github":
                    return `URL:https://github.com/${c.value}`
                case "instagram":
                    return `URL:https://www.instagram.com/${c.value}`

            }
        }),
        `REV:${new Date().toISOString()}`,
        "END:VCARD"
    ].join("\n")
}