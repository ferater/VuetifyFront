<template>
  <v-app class="pa-5">
    <header>
      <NavBar />
    </header>
      <nav>
        <Drawer />
      </nav>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import Drawer from "./components/Drawer.vue";
//
</script>
