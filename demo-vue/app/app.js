import Vue from "nativescript-vue";
import Home from "./components/Home";

Vue.registerElement('PaintPad', () => require('nativescript-paint').PaintPad);
new Vue({
    render: h => h('frame', [h(Home)]),
}).$start();
