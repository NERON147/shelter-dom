<template>
    <div class="card__wrapper">
        <img :src="pet.img" alt="pet" class="card__wrapper__img">
        <span class="card__wrapper__name">
            {{ pet.name }}
        </span>
        <button class="btn__primary__empty card__wrapper__btn" @click="setPet(pet)">
            Learn more
        </button>
    </div>
</template>

<script setup>
import { useStore } from '../../stores/store'

const store = useStore()

const props = defineProps([
    'pet'
])

const setPet = (pet) => {
    store.setPet(pet)
}
</script>

<style></style>