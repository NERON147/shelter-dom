<template>
    <section class="pagionation__wrapper">
        <button class="pagination__2__btn" :class="{ 'disable': currentPage === 1 }" @click="$emit('handlePageGoFirst')"
            :disabled="currentPage === 1">
            <svg width="25" height="11" viewBox="0 0 25 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9.94687 10.7852L0.913671 6.08789V4.98438L9.94687 0.287109V1.625L2.43711 5.53125L9.94687 9.44727V10.7852ZM24.018 10.7852L14.9848 6.08789V4.98438L24.018 0.287109V1.625L16.5082 5.53125L24.018 9.44727V10.7852Z" />
            </svg>

        </button>
        <button class="pagination__1__btn" :class="{ 'disable': currentPage === 1 }" @click="$emit('handlePageChangePrev')"
            :disabled="currentPage === 1">
            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9.98242 10.7852L0.949219 6.08789V4.98438L9.98242 0.287109V1.625L2.47266 5.53125L9.98242 9.44727V10.7852Z" />
            </svg>

        </button>
        <button class="pagination__count__btn">
            {{ currentPage }}
        </button>
        <button class="pagination__1__btn" :class="{ 'disable': currentPage === totalPages }"
            @click="$emit('handlePageChangeNext')" :disabled="currentPage === totalPages">
            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9.04102 6.08789L0.0078125 10.7852V9.44727L7.51758 5.53125L0.0078125 1.625V0.287109L9.04102 4.98438V6.08789Z" />
            </svg>

        </button>
        <button class="pagination__2__btn" :class="{ 'disable': currentPage === totalPages }"
            @click="$emit('handlePageGoLast')" :disabled="currentPage === totalPages">
            <svg width="25" height="11" viewBox="0 0 25 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10.0055 6.08789L0.972265 10.7852V9.44727L8.48203 5.53125L0.972265 1.625V0.287109L10.0055 4.98438V6.08789ZM24.0766 6.08789L15.0434 10.7852V9.44727L22.5531 5.53125L15.0434 1.625V0.287109L24.0766 4.98438V6.08789Z" />
            </svg>

        </button>
    </section>
</template>

<script setup>
const props = defineProps([
    'currentPage',
    'totalPages'
])


</script>

<style></style>