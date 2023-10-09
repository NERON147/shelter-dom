<template>
    <div class="modal__wrapper" @click="store.setPet(null)" v-if="pet">
        <div class="modal__wrapper__content" @click.stop>
            <button class="btn__close" @click="store.setPet(null)">
                <img src="../../assets/img/svg/close.svg" alt="">
            </button>
            <div class="modal__wrapper__body">
                <img :src="pet.img" alt="" class="modal__wrapper__img">
                <div class="modal__wrapper__info">
                    <h1 class="modal__wrapper__name">
                        {{ pet.name }}
                    </h1>
                    <h3 class="modal__wrapper__breed">
                        Dog - Labrador
                    </h3>
                    <p class="modal__wrapper__descr">
                        Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This
                        girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm
                        in the house if she has all of her favorite toys.
                    </p>
                    <ul class="modal__wrapper__list">
                        <li><span> <img src="../../assets/img/svg/dot.svg" alt=""> <strong>Age: </strong> 2 months</span>
                        </li>
                        <li><span><img src="../../assets/img/svg/dot.svg" alt=""><strong>Inoculations: </strong> none</span>
                        </li>
                        <li><span><img src="../../assets/img/svg/dot.svg" alt=""><strong>Diseases: </strong> none</span>
                        </li>
                        <li><span><img src="../../assets/img/svg/dot.svg" alt=""><strong>Parasites: </strong> none</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup>
import { useStore } from '../../stores/store';
import { onMounted, watchEffect } from 'vue'

const store = useStore()

const props = defineProps([
    'pet'
])

watchEffect(() => {
    props.pet ? document.body.style.overflowY = 'hidden' : document.body.style.overflow = ''
});

onMounted(() => {
    document.body.addEventListener('keyup', e => {
        if (e.keyCode === 27) store.setPet(null)
    })
})
</script>
    
<style></style>
    