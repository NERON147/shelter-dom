<template>
    <section class="friends__wrapper">
        <div class="container-width friends__wrapper__container">
            <h2 class="friends__wrapper__text__our" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                Our friends who <br>
                are looking for a house
            </h2>
            <div class="ui__swiper">
                <Swiper v-if="pets.length" :pets="pets" />
                <span class="friends__wrapper__wait" v-else>
                    We are waiting for our pets to come, please wait :)
                </span>
            </div>
            <router-link tag="a" to="/pets">
                <button class="btn__primary friends__wrapper__btn">Get to know the rest</button>
            </router-link>
        </div>
    </section>
</template>

<script setup>
import Swiper from '../UI/Swiper.vue';

const props = defineProps([
    'pets'
])

</script>

<style></style>