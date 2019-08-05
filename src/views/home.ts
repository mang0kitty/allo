import Vue from "vue"
import Component from "vue-class-component"
import {RawLocation} from "vue-router"
import {router} from "../router"
import {qrcode} from "../components"

import * as template from "text!./home.html"
import { handleTypes, contactTypes, UserProfile } from "../models/userprofile";

@Component({
    template,
    components: {
        qrcode
    }
})
export default class HomeView extends Vue {

    now = new Date()
    user: UserProfile = {
        name: "",
        position: "",
        company: "",

        contact: [
            {
                type: "email",
                value: ""
            }
        ],

        handles: [
            {
                type: "linkedin",
                value: ""
            }
        ]
    };

    qrcodeData = "I am a pony!"

    get handleTypes() {
        return handleTypes
    }

    get contactTypes() {
        return contactTypes
    }

    mounted() {
        setInterval(() => {
            this.now = new Date();
        }, 100) 
  
    }
                
    navigate(name: string, opts?: RawLocation) {
        if (~name.indexOf("://")) return window.open(name, "_blank")
        router.push(Object.assign({
            name
        }, opts))
    }
    
    addHandle() {
        this.user.handles.push({
            type: "github",
            value: ""
        })
    }
    addContact() {
        this.user.contact.push({
            type: "email",
            value: ""
        })
    }

    deleteHandle(handle) {
        const index = this.user.handles.indexOf(handle);
        if (~index) this.user.handles.splice(index, 1);
    }
    deleteContact(contact) {
        const index = this.user.contact.indexOf(contact);
        if (~index) this.user.contact.splice(index, 1);
    }
    get vCard() {
        return [
            "BEGIN:VCARD",
            "VERSION:4.0",
            `FN:${this.user.name}`,
            `ORG:${this.user.company}`,
            `TITLE:${this.user.position}`,

            ...this.user.contact.map(c => {
                switch (c.type) {
                    case "email":
                        return `EMAIL:${c.value}`
                    case "cell":
                        return `TEL;TYPE=home,voice;VALUE=uri:tel:${c.value}`
                    case "phone":
                        return `TEL;TYPE=work,voice;VALUE=uri:tel:${c.value}`
                }
            }),
            ...this.user.handles.map(c=> {
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
}
    
