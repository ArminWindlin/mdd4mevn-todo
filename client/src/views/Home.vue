<template>
    <div class="home">

        <h1 class="mb-32 h1">Todo App Says Welcome</h1>

        <p class="mb-16 fs-14">On this app you can create todos for you.</p>

        <p class="mb-16 fs-14" v-if="!userToken">Please log in or register to start creating todos.</p>

        <!-- Button -->
        <c-button @click="$router.push({ path: '/login' })" class="block mb-16" v-if="!userToken">Login</c-button>
        <!-- Button -->
        <c-button @click="$router.push({ path: '/register' })" class="block mb-16" v-if="!userToken">Register</c-button>
        <!-- Button -->
        <c-button @click="$router.push({ path: '/todos' })" class="block mb-16" v-if="userToken">My Todos</c-button>
  </div>
</template>

<script>
import CButton from '../components/CButton';

export default {
    name: 'home',
    components: {CButton},
    data() {
        return {
        };
    },
    computed: {
        userToken() {
            return this.$store.state.userToken;
        },
    },
    watch: {
    },
    methods: {
    },
    created() {
    },
};
</script>

