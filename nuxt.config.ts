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
    css: ['~/assets/styles/main.scss'],
    modules: [['@nuxtjs/google-fonts', {
        families: {
            Roboto: true,
            Inter: [400, 700],
            'Josefin+Sans': true,
            'Libre+Baskerville':{
                wght:[100, 300,400,500,600],
                ital: [100,300,400]
            } ,
            'Libre+Caslon+Text':{
                wght:[100, 300,400,500,600],
                ital: [100,300,400]
            } ,
            'Parisienne':{
                wght:[100, 300,400,500,600],
                ital: [100,300,400]
            } ,
            'Italianno':{
                wght:[100, 300,400,500,600],
                ital: [100,300,400]
            } ,

        }
    }],],
}

export default config

