<template>
    <div class="form-container">
        <h1>Sign in</h1>
        <p><input type="text" placeholder="Email" v-model = "email"/></p>
        <p><input type="password" placeholder="Password" v-model = "password" /></p>
        <p><button @click="signin">Sign in via Firebase</button></p>
    </div>
</template>

<script setup>
import { ref } from "vue"
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import {useRouter} from "vue-router"

const email = ref("")
const password = ref("")
const router = useRouter()
const auth = getAuth()
const signin = () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
        console.log("Firebase Sign in Successful!")
        alert("Sign in successful!")
        router.push("/")
        console.log(auth.currentUser)
    })
    .catch((error) => {
        console.log(error.code)
        alert("Sign in failed.")
    })
};
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