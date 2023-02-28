<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn icon="mdi-translate" v-bind="props"></v-btn>
    </template>
    <v-list density="compact">
      <v-list-item
        class="cursor-pointer"
        :prepend-avatar="`src/assets/svg/flags/${locale}.svg`"
        v-for="locale in lang.availableLocales"
        :key="`locale-${locale}`"
        @click="changeLocale(locale)"
      />
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
    localStorage.setItem('currentLang', lang.locale.value);
  }else{
    lang.locale.value = currentLang;
  }
};

const changeLocale = (locale) => {
  lang.locale.value = locale;
  localStorage.setItem('currentLang', locale)
};

onMounted(() => {
  setLang();
});
</script>
