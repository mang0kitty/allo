import Vue from "vue"
import Component from "vue-class-component"
import {qrcode, octicon} from "../components"
import * as moment from "moment"

import * as template from "text!./card.html"
import { UserProfile } from "../models/userprofile";
import { toVCard } from "../models/vcard";
import { getCard } from "../api/card";


@Component({
    template,
    props: {
        id: String
    },
    components: {
        qrcode,
        octicon
    }
})
export default class CardView extends Vue {
    id!: string;
    user: UserProfile =null;
    flipped: boolean = false;

    mounted() {
        getCard(this.id).then(card =>this.user = card)
    }

    toggleFlipped() {
        this.flipped = !this.flipped;
    }

    get containerClasses(): string[] {
        if (this.flipped) return ["flip-container", "flip"]
        return ["flip-container"]
    }
    get vCard() {
        return toVCard(this.user)
    }
  
}
    