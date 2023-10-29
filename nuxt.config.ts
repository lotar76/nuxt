import {NuxtConfig} from "@nuxt/schema";
import {resolve} from "pathe";

const config:NuxtConfig={
    components:true,
    runtimeConfig:{
        base_url:''
    },
    ssr:true,
    alias:{
        'images': resolve(__dirname, './assets/images'),
        'styles': resolve(__dirname, './assets/styles'),
        'components': resolve(__dirname, './components'),
        'fonts': resolve(__dirname, './assets/fonts')
    },
    css: ['~/assets/styles/main.scss']
}

export default config

