<template>
  <Nav />
  <transition name="fade" mode="out-in">
    <Modal :pet="store.pet" />
  </transition>
  <router-view></router-view>
  <Footer />
</template>

<script setup>
import Nav from './components/UI/Nav.vue'
import Footer from './components/UI/Footer.vue';
import Modal from './components/UI/Modal.vue';
import { useStore } from './stores/store'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const store = useStore()

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active .nested {
  transition: all 0.2s ease-out;
}

.fade-leave-active .nested {
  transition: all 0.2s ease-out;
}

.fade-enter-from .nested {
  opacity: 0;
}

.fade-leave-to .nested {
  opacity: 0;
}
</style>

