<template>
    <section class="help__wrapper">
        <div class="container-width help__wrapper__container">
            <h2 class="help__wrapper__text__how" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                How you can help <br>
                our shelter
            </h2>
            <div class="help__wrapper__icons">
                <div v-for="icon in data.icons" :key="icon.title" class="help__wrapper__icon__wrapper">
                    <img :src="getIMGPath(icon.img)" alt="" class="help__wrapper_img">
                    <span class="help__wrapper__icon__text">
                        {{ icon.title }}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive } from 'vue'

const getIMGPath = (img) => {
    return img ? new URL(`../../assets/img/svg/${img}`, import.meta.url).href : "";
}

const data = reactive({
    icons: [
        {
            title: 'Pet food',
            img: 'icon-pet-food.svg'
        },
        {
            title: 'Transportation',
            img: 'icon-transportation.svg'
        },
        {
            title: 'Toys',
            img: 'icon-toys.svg'
        },
        {
            title: 'Bowls and cups',
            img: 'icon-bowls-and-cups.svg'
        },
        {
            title: 'Shampoos',
            img: 'icon-shampoos.svg'
        },
        {
            title: 'Vitamins',
            img: 'icon-vitamins.svg'
        },
        {
            title: 'Medicines',
            img: 'icon-medicines.svg'
        },
        {
            title: 'Collars / leashes',
            img: 'icon-collars-leashes.svg'
        },
        {
            title: 'Sleeping areas',
            img: 'icon-sleeping-area.svg'
        },
    ]
})

</script>

<style></style>