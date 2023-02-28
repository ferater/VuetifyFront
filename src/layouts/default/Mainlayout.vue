<template>
  <v-app class="pa-5">
    <header>
      <NavBar />
    </header>
    <v-main>
      <aside>
        <Drawer />
      </aside>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import Drawer from "./components/Drawer.vue";
//
</script>
