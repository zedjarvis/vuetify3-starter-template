import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components/VBtn'
import { icons } from './icons'
import defaults from './defaults'
import theme from './themes'

// Styles
import '@styles/main.scss'
import 'vuetify/styles'

export default createVuetify({
  aliases: {
    IconBtn: VBtn,
  },
  icons,
  defaults,
  theme,
})
