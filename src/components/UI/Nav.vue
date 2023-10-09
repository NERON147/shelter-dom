<template>
    <div class="container-width wrapper-mobile">
        <nav class="nav__wrapper">
            <router-link tag="a" to="/" :class="$route.path !== '/' ? 'dark-text' : ''" @click="data.open = false">
                <span
                    :class="$route.path !== '/' && !data.open ? 'nav__wrapper__cozy dark-text' : 'nav__wrapper__cozy'">Cozy
                    House</span>
                <br>
                <span
                    :class="$route.path !== '/' && !data.open ? 'nav__wrapper__shelter dark-text' : 'nav__wrapper__shelter'">Shelter
                    for pets in Boston</span>
            </router-link>
            <ul>
                <li v-for="link in data.links" :key="link.title"
                    :class="$route.path === '/' && $route.path === link.link ? 'active-light' : $route.path === link.link ? 'active-dark' : $route.path !== '/' ? 'dark-text' : ''">
                    <router-link tag="a" :to="link.link">{{ link.title }}</router-link>
                </li>
            </ul>
        </nav>
        <nav class="nav__wrapper__mobile">
            <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg"
                @click="data.open = !data.open" :class="{ 'svg-burger': data.open }">
                <line y1="21" x2="30" y2="21" stroke-width="2" />
                <line y1="11" x2="30" y2="11" stroke-width="2" />
                <line y1="1" x2="30" y2="1" stroke-width="2" />
            </svg>
            <div class="nav__wrapper__menu" :class="{ 'nav__wrapper__menu__open': data.open }">
                <ul>
                    <li v-for="link in data.links" :key="link.title"
                        :class="$route.path === link.link ? 'active-light' : $route.path === link.link ? 'active-dark' : ''"
                        @click="data.open = false">
                        <router-link tag="a" :to="link.link">{{ link.title }}</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const data = reactive({
    links: [
        { title: 'About the shelter', link: '/' },
        { title: 'Our pets', link: '/pets' },
        { title: 'Help the shelter', link: '/help' },
        { title: 'Contacts', link: '/contacts' },
    ],
    active: false,
    open: false
})

</script>

<style></style>