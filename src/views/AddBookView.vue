<template>
    <div class="form-container">
        <h1>Add Book</h1>
        <form @submit.prevent="addBook">
            <div>
                <label for="isbn">ISBN: </label>
                <input type="text" v-model="isbn" id="isbn" required/>
            </div>
            <div>
                <label for="name">Name: </label>
                <input type="text" v-model="name" id="name" required/>
            </div>
            <p class="button-container">
                <button type="submit">Add Book</button>
            </p>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const isbn = ref('')
const name = ref('')
    
const addBook = async () => {
        try {
            const response = await axios.post('https://addbooks-3qwrymen5q-uc.a.run.app',
            { isbn: isbn.value, name: name.value});
            console.log("response", response.data);
            alert('Book added successfully!');          
        } catch (error) {
            console.error('Error fetching book count:', error);
        }
}

</script>

<style>
body, html {
  height: 100%;
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
}

input {
  margin: 10px;
  padding: 10px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px; /* Increased spacing between fields and button */
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

h1 {
  margin-bottom: 20px;
}

</style>