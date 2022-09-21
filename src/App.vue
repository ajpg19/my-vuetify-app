<template>
  <v-app>

    <v-app-bar
        color="primary"
        density="compact"
    >
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title><b>core</b>invent</v-app-bar-title>

      <template v-slot:append>
        <v-btn @click="toggleTheme" icon="mdi-theme-light-dark"></v-btn>
      </template>
    </v-app-bar>


    <v-main>
      <HelloI18n />
    </v-main>



  </v-app>
</template>

<script>
import HelloI18n from './components/HelloI18n'
import { useTheme } from 'vuetify'

export default {
  name: 'App',

  components: {
    HelloI18n
  },

  data: () => ({
    //
  }),

  setup () {
    const theme = useTheme()

    console.log(theme.global.current.value.dark)

    return {
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }
  }
}
</script>
