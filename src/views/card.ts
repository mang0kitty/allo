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
export default class ClockView extends Vue {

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
    