<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" flat icon size="35" class="mr-2">
      <v-icon icon="mdi-translate" size="18"/>
      </v-btn>
    </template>
    <v-list density="compact">
      <v-list-item
        dense
        class="cursor-pointer"
        v-for="locale in lang.availableLocales"
        :key="`locale-${locale}`"
        @click="changeLocale(locale)"
      >
        <v-avatar size="28">
          <!-- <v-svg :icon="`@/assets/svg/flags/${locale}.svg`"></v-svg> -->
          <img :src="`@/assets/svg/flags/${locale}.svg`" :alt="locale" />
        </v-avatar>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script setup>
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
const lang = useI18n();

const setLang = () => {
  const currentLang = localStorage.getItem("currentLang");
  if (currentLang == null) {
    localStorage.setItem("currentLang", lang.locale.value);
  } else {
    lang.locale.value = currentLang;
  }
};

const changeLocale = (locale) => {
  lang.locale.value = locale;
  localStorage.setItem("currentLang", locale);
};

onMounted(() => {
  setLang();
});
</script>
