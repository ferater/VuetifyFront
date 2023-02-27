<template>
  <v-app-bar elevation="0" >
    <v-app-bar-nav-icon @click="toggleDrawer" />
    <v-app-bar-title> <p>{{ $t("failed") }}</p> </v-app-bar-title>
    <template v-slot:append>
      <ChangeTheme/>
    </template>
  </v-app-bar>
</template>

<script setup>
import ChangeTheme from './ChangeTheme.vue';
import { useAppStore } from '@/store/app';
const appStore = useAppStore();

const toggleDrawer = () => {
appStore.toggleDrawerState()
}
</script>
