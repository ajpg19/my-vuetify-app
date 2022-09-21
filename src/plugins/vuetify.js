// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import colors from 'vuetify/lib/util/colors'

export default createVuetify({
        theme: {
            defaultTheme: 'dark',

            themes: {
                light: {
                    primary: colors.red,
                    secondary: colors.grey.darken1,
                    accent: colors.shades.black,
                    error: colors.red.accent3,
                },
                dark: {
                    primary: colors.blue.lighten3,
                },
            },
        },
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
                mdi,
            }
        }
    }
    // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)
