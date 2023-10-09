<template>
  <OurFriends :pets="store.pets" />
</template>

<script setup>
import OurFriends from '../components/Pets/OurFriends.vue';
import { onMounted } from 'vue'
import { useStore } from '../stores/store';

const store = useStore()

onMounted(() => {
  store.loadPets()
})
</script>

<style></style>