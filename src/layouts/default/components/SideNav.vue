<template>
  <template v-for="link in links" :key="link.name">
    <v-list>
      <template v-if="!link.meta.hidden && link.children.length < 2">
        <v-list-item
          :to="{ name: link.children[0].name }"
          :prepend-icon="link.children[0].meta.icon"
          :title="$t(link.children[0].meta.title)"
          :ripple="false"
        />
      </template>
      <template v-if="link.children.length > 1 && !link.meta.hidden">
        <v-list-group :value="$route.matched[0].path == link.path">
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
              :to="{ name: item.name }"
              :prepend-icon="item.meta.icon"
              :title="$t(item.meta.title)"
              :ripple="false"
            />
          </template>
        </v-list-group>
      </template>
    </v-list>
  </template>
</template>

<script setup>
import { routes } from "@/router/routes";
const links = routes;
</script>

<style scoped>
.v-list {
  --indent-padding: -40px;
}
.deneme {
  background-color: rgb(var(--v-theme-primary));
  position: relative;
}
</style>
