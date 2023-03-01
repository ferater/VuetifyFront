<template>
  <v-app  >
    <header>
      <AppBar />
    </header>
      <nav>
        <Drawer />
      </nav>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import AppBar from "./components/AppBar.vue";
import Drawer from "./components/Drawer.vue";
//
</script>

