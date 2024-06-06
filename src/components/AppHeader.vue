
<script>
import AppInput from './AppInput.vue';

export default {
    components: {
        AppInput
    },
    methods: {
        handleSearch(query) {
            this.$emit('search', query);
        }
    }
};
</script>

<template>
    <header>
        <AppInput @search="handleSearch" />
    </header>
</template>
