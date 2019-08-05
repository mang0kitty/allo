import Vue from "vue"
import Component from "vue-class-component"
import {qrcode} from "../components"
import * as moment from "moment"

import * as template from "text!./clock.html"


@Component({
    template,
    components: {
        qrcode
    }
})
export default class ClockView extends Vue {

    now = new Date()

    mounted() {
        setInterval(() => {
            this.now = new Date();
        }, 100) 
  
    }

    get time() {
        return moment(this.now).format("HH:mm:ss")
    }
}
    
