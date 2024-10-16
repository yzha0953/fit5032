<template>
    <div id="app">
        <h1>Book Counter</h1>
        <button @click="getBookCount">Get Book Count</button>
        <p v-if="count !== null">Total number of books: {{ count }}</p>
        <p v-if="error">{{ error }}</p>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const count = ref('')
const error = ref('')     
const getBookCount = async() => {
        try {
                const response = await axios.get('https://countbooks-3qwrymen5q-uc.a.run.app');
                count.value = response.data.count;
                error.value = null;
        } catch (error) {
                console.error('Error fetching book count:', error);
                error.value = error;
                count.value = null;
        }
}
</script>
