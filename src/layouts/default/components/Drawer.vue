<template>
  <v-navigation-drawer permanent location="left" v-model="appStore.drawerState">
    <template v-slot:prepend>
      <v-list-item
        lines="two"
        prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
        title="Jane Smith"
        subtitle="Logged in"
      ></v-list-item>
    </template>

    <v-divider></v-divider>
    <SideNav />
  </v-navigation-drawer>
</template>

<script setup>
import SideNav from "./SideNav.vue";
import { useAppStore } from "@/store/app";
const appStore = useAppStore();
</script>
