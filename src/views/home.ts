import Vue from "vue"
import Component from "vue-class-component"
import {RawLocation} from "vue-router"
import {router} from "../router"
import {qrcode} from "../components"

import * as template from "text!./home.html"
import { threadId } from "worker_threads";
@Component({
    template,
    components: {
        qrcode
    }
})

export default class HomeView extends Vue {

    now = new Date()

    qrcodeData = "I am a pony!"

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
}
    
