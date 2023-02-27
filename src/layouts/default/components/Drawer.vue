<template>
  <v-navigation-drawer
        permanent
        location="left"
        v-model="appStore.drawerState"
      >
        <template v-slot:prepend>
          <v-list-item
            lines="two"
            prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
            title="Jane Smith"
            subtitle="Logged in"
          ></v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-city" :title="`Home-${index}`" :value="`home-${index}`" v-for="(item,index) in 5" :key="index" />
        </v-list>
      </v-navigation-drawer>
</template>

<script setup>
import { useAppStore } from '@/store/app';
const appStore = useAppStore();
</script>
