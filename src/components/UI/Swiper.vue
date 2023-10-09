<template>
    <div class="slider">
        <button class="prev slider__btn__left">
            <img src="../../assets/img/prev.svg" alt="">
        </button>
        <button class="next slider__btn__right">
            <img src="../../assets/img/next.svg" alt="">
        </button>
        <swiper :loop="true" :modules="data.modules" :breakpoints="data.breakpoints" class="mySwiper" :autoplay="{
            delay: 4000,
            disableOnInteraction: false,
        }" :navigation="{
    prevEl: '.prev',
    nextEl: '.next',
}">
            <swiper-slide v-for="pet in pets" :key="pet.id">
                <CardPet :pet="pet" />
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import CardPet from './CardPet.vue';


const props = defineProps([
    'pets'
])

const data = reactive({
    modules: [Navigation, Autoplay],
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1080: {
            slidesPerView: 3,
            spaceBetween: 90
        }
    }
}) 
</script>