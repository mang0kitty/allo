import Vue from "vue"
import Component from "vue-class-component"
import {qrcode, octicon} from "../components"
import * as moment from "moment"

import * as template from "text!./card.html"
import { UserProfile } from "../models/userprofile";


@Component({
    template,
    components: {
        qrcode,
        octicon
    }
})
export default class CardView extends Vue {

    flipped: boolean = false;

    toggleFlipped() {
        this.flipped = !this.flipped;
    }

    get containerClasses(): string[] {
        if (this.flipped) return ["flip-container", "flip"]
        return ["flip-container"]
    }

    user: UserProfile = {
        name: "Aideen Fay",
        company: "Amazon",
        position: "Software Developer (Intern)",
        contact: [
            {type: "email", value: "me@aideen.dev" },
            {type: "cell", value: "+353 83 033 0012" }
        ],
        handles: [
            { type: "github", value: "mangokittty" },
            { type: "instagram", value: "aideenfay" },
            { type: "linkedin", value: "aideenfay" }
        ]
    }
  
}
    