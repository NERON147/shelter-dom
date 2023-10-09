<template>
  <Header />
  <About />
  <OurFriends :pets="store.pets" />
  <HowHelp />
  <Donation />
</template>

<script setup>
import { onMounted } from 'vue'
import Header from '../components/Home/Header.vue'
import About from '../components/Home/About.vue'
import OurFriends from '../components/Home/OurFriends.vue';
import HowHelp from '../components/Home/HowHelp.vue';
import Donation from '../components/Home/Donation.vue';
import { useStore } from '@/stores/store'

const store = useStore()

onMounted(() => {
  store.loadPets()
})

</script>

<style></style>