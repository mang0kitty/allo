import Vue from "vue"
import Component from "vue-class-component"
import * as qrcode from "qrcode";

@Component({
    name: "qrcode",
    template: `<img :src="url"/>`,
    props: {
        value: String
    },
    watch: {
        value() {
            this.generateQRCode()
        }
    }
})
export default class QrCode  extends Vue {
    url: string = null;
    value!: string;

    mounted() {
        this.generateQRCode();
    }

    generateQRCode() {
        qrcode.toDataURL(this.value, (err, url) => {
            this.url = url
        })
    }

}