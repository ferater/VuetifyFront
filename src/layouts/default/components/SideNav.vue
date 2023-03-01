<template>
  <template v-for="link in links" :key="link.name">
    <v-list density="compact">
      <template v-if="!link.meta.hidden && link.children && link.children.length < 2">
        <v-list-item active-class="side-active" :to="{ name: link.children[0].name }" :title="$t(link.children[0].meta.title)" :ripple="false">
          <template v-slot:prepend>
            <v-icon color="error">{{ link.children[0].meta.icon }}</v-icon>
          </template>
        </v-list-item>
      </template>
      <template v-if="link.children.length > 1 && !link.meta.hidden">
        <v-list-group :value="$route.matched[0].path == link.path">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" :prepend-icon="link.meta.icon" :title="$t(link.meta.title)"
              :ripple="false"></v-list-item>
          </template>
          <template v-for="item in link.children" :key="item.name">
            <v-list-item active-class="as" :to="{ name: item.name }" :title="$t(item.meta.title)" :ripple="false" />
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
.side-active {
  color: rgb(var(--v-theme-onBackground));

}

.v-list {
  --indent-padding: -40px;
  padding: 1px 0;
  margin: 5px 0;
}

.v-list-item {
  width: 85%;
  margin: 0 auto;
  border-radius: .375rem;
}

.v-list-item--active::after {
  content: '';
  position: absolute;
  width: 5px;
  height: 42px;
  background-color: #696cff;
  right: -17px;
  border-radius: 5px 0 0 5px;
}
</style>
