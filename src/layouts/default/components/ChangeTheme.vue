<template>
  <v-btn flat icon size="35" @click="toggleTheme">
    <v-icon icon="mdi-theme-light-dark" size="18"/>
  </v-btn>
</template>

<script setup>
import { onMounted } from 'vue';
import { useTheme } from 'vuetify';
const theme = useTheme();

const toggleTheme = () => {
   theme.global.name.value = theme.global.current.value.dark ? "lightTheme" : "darkTheme";
   localStorage.setItem('currentTheme', theme.global.name.value);
};

const setTheme = () => {
  const currentTheme = localStorage.getItem('currentTheme');
  if(currentTheme == null){
    localStorage.setItem('currentTheme', theme.global.name.value);
  } else {
    theme.global.name.value = currentTheme;
  }
};

onMounted(() => {
  setTheme();
});


</script>
