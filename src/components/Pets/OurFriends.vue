<template>
    <section class="our__friends__wrapper">
        <div class="container-width our__friends__wrapper__content">
            <h1 class="our__friends__wrapper__text" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                Our friends who <br>
                are looking for a house
            </h1>
            <div class="our__friends__wrapper__pets" v-if="pets.length">
                <div class="our__friends__wrapper__pet" v-for="pet in paginatedItems" :key="pet.id">
                    <CardPet :pet="pet" />
                </div>
            </div>
            <span class="our__friends__wrapper__wait" v-else>
                We are waiting for our pets to come, please wait :)
            </span>
            <Pagination @handlePageChangeNext="handlePageChangeNext" @handlePageChangePrev="handlePageChangePrev"
                @handlePageGoFirst="handlePageGoFirst" @handlePageGoLast="handlePageGoLast" :totalPages="totalPages"
                :currentPage="data.currentPage" />
        </div>
    </section>
</template>

<script setup>
import CardPet from '../UI/CardPet.vue';
import Pagination from '../UI/Pagination.vue';
import { reactive, computed, onBeforeUnmount, onMounted } from 'vue'

const props = defineProps([
    'pets'
])

const data = reactive({
    currentPage: 1,
    itemsPerPage: 8,
    screenWidth: null
})

const paginatedItems = computed(() => {
    const start = (data.currentPage - 1) * data.itemsPerPage;
    const end = start + data.itemsPerPage;
    return props.pets.slice(start, end);
});

const totalPages = computed(() => Math.ceil(props.pets.length / data.itemsPerPage));

const getItemsPerPageDynamic = (width) => {
    if (width >= 1280) {
        return 8;
    } else if (width >= 760) {
        return 6;
    } else if (width >= 0) {
        return 3;
    }
};

const handleResize = () => {
    data.screenWidth = window.innerWidth;
};

const handlePageChangeNext = () => {
    data.currentPage = data.currentPage + 1;
};

const handlePageChangePrev = () => {
    data.currentPage = data.currentPage - 1;
};

const handlePageGoFirst = () => {
    data.currentPage = 1;
};

const handlePageGoLast = () => {
    data.currentPage = Math.ceil(props.pets.length / data.itemsPerPage);
};

window.addEventListener('resize', handleResize);

onMounted(() => {
    data.screenWidth = window.innerWidth;
    getItemsPerPageDynamic()
    data.itemsPerPage = getItemsPerPageDynamic(data.screenWidth);
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
});
</script>

<style></style>