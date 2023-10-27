import {fileURLToPath} from "url";

export default defineAppConfig({
    head:{
        title: 'Hello Nuxt',

    },
    css:[
        'assets/styles/main.scss'
    ],

    theme: {
        dark: true,
        colors: {
            primary: '#ff0000'
        }
    },
    alias: {
        '@images': fileURLToPath(new URL('./assets/images', import.meta.url)),
        '@components': fileURLToPath(new URL('./components', import.meta.url)),
        '@style': fileURLToPath(new URL('./assets/styles', import.meta.url)),
        'data': fileURLToPath(new URL('./assets/other/data', import.meta.url))
    }
})