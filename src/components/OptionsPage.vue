<template>
  <div>
    <button
      :class="{
        roomButton: !clickedButton,
        roomButtonClicked: clickedButton,
      }"
      @click="clipboard()"
    >
      <span id="room-id">#323243</span>
      <img src="@/assets/copy.svg" v-if="!iconImgChange" alt="copiar" />
      <img src="@/assets/copy-clicked.svg" v-else alt="copiar" />
    </button>
    <router-link to="/" class="button">
      <img src="@/assets/criar-sala-white-icone.svg" alt="criar sala" /> Criar
      sala
    </router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";

const clickedButton = ref(false);
const iconImgChange = ref(false);

function clipboard() {
  const room = document.getElementById("room-id").innerText;

  navigator.clipboard.writeText(room).then(() => {
    clickedButton.value = true;
    iconImgChange.value = true;

    setTimeout(() => {
      clickedButton.value = false;
      iconImgChange.value = false;
    }, 1500);
  });

  console.log(room);
}
</script>

<style scoped>
a {
  display: flex;
  text-decoration: none;
  color: white;
  font-family: "Poppins", sans-serif;
  background-color: #3485ff;
}

a img {
  padding-right: 10px;
}

div {
  display: flex;
  height: 80px;
}

.roomButton,
.roomButtonClicked,
.button {
  font-family: "Poppins", sans-serif;
  padding: 10px;
  margin-bottom: 20px;
  border-color: grey;
  border-radius: 5px;
  border-style: solid;
  border-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  margin: 10px;
}

.roomButton {
  background-color: white;
  color: #0555e9c0;
  border-style: solid;
  border-color: #0555e9c0;
}

.roomButtonClicked {
  background-color: white;
  color: #25b900a8;
  border-style: solid;
  border-color: #25b900a8;
}

button img {
  padding-left: 5px;
}
</style>
