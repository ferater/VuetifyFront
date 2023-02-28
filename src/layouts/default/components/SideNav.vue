<template>
  <v-list variant="plain" density>
    <template v-for="link in links[0].children" :key="link.meta.title">
      <v-list-item
        :prepend-icon="link.meta.icon"
        :title="$t(link.meta.title)"
        :value="link.meta.title"
        :ripple="false"
        v-if="!link.children && !link.meta.hidden"
      />
      <v-list-group :value="link.meta.title" v-if="link.children">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            :prepend-icon="link.meta.icon"
            :title="$t(link.meta.title)"
            :ripple="false"
          ></v-list-item>
        </template>
        <template v-for="item in link.children" :key="item.name">
          <v-list-item
            :prepend-icon="item.meta.icon"
            :title="$t(item.meta.title)"
            :value="item.meta.title"
            :ripple="false"
          />
        </template>
      </v-list-group>
    </template>
  </v-list>
</template>

<script setup>
import { routes } from "@/router/routes";
const links = routes;
</script>

<style scoped>
.v-list {
  --indent-padding: -40px;
}
</style>
