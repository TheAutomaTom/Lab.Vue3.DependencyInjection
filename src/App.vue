<script setup lang="ts">
import SomeView from '@/App/Views/SomeView.vue'
import { RouterView } from 'vue-router';
</script>

<template>

  <div class="flex items-center">
    <router-link to="/"> Home </router-link>
    <span>|</span>
    <router-link to="/SomeView"> Some View </router-link>
    <span>|</span>
    <router-link to="/AnotherView"> Another View </router-link>
  </div>
  <hr/>

  <router-view/>
</template>
