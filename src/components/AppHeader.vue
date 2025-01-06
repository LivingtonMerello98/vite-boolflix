<script>
import AppInput from './AppInput.vue';

export default {
    components: {
        AppInput,
    },
    data() {
        return {
            activeIndex: null,
            menuItems: [
                {
                    name: 'Home',
                    url: '/'
                },
                {
                    name: 'Content',
                    url: '/Content'
                }
            ]
        };
    },
    methods: {
        setActive(index) {
            this.activeIndex = index;
        },
        handleSearch(query) {
            // Riemette a sua volta l'evento search
            this.$emit('search', query);
        },
        refresh() {
            window.location.reload()
        }
    },
    computed: {
        logoImage() {
            return 'https://image.tmdb.org/t/p/w92/wwemzKWzjKYJFfCeiB57q3r4Bcm.png';
        }
    }
};
</script>

<template>
    <header class="bg-black">
        <div class="container py-2">
            <div class="row">
                <div class="col-9 d-flex align-items-center">
                    <img :src="logoImage" @click="refresh()" />
                    <div class="link-items text-white d-flex mx-4 small-font">

                        <li v-for="(link, index) in menuItems" :key="index">
                            <router-link :to="link.url" :class="{ 'mx-3': true, 'active': activeIndex === index }" @click="setActive(index)">
                                {{ link.name }}
                            </router-link>
                        </li>

                    </div>
                </div>
                <div class="col-3 d-flex justify-content-end align-items-center">
                    <AppInput @search="handleSearch" />
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.small-font {
    font-size: 0.830rem;
    /* Riduce il font size */
}

a {
    color: white;
    text-decoration: none;
    cursor: pointer;
}

a.active {
    font-weight: bold;
}

li{
    list-style: none;
}
</style>