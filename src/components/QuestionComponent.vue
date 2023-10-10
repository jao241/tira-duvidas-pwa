<template>
  <section class="com-perguntas">
    <div class="pergunta-bloco" :class="options">
      <div class="pergunta">
        <img
          src="@/assets/anonimo.svg"
          alt="icone anonimo"
          v-if="options.defaultColor"
        />
        <img src="@/assets/anonimo-cinza.svg" alt="icone anonimo" v-else />
        <p>{{ props.items.question }}</p>
      </div>
      <div class="opcoes" v-if="options.defaultColor">
        <div class="checar">
          <img src="@/assets/check-icone.svg" alt="icone de checado" />
          <p @click="checkQuestion">Marcar como lida</p>
        </div>
        <div class="remover" @click="$emit('remove')">
          <img src="@/assets/trash-icone.svg" alt="icone de lixeira" />
          <p>Excluir</p>
        </div>
      </div>
      <div class="opcoes" v-else>
        <div class="checar">
          <img src="@/assets/check-icone.svg" alt="icone de checado" />
          <p>Pergunta lida</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps, ref } from "vue";

const props = defineProps(["items"]);
const options = ref({
  defaultColor: true,
  checkColor: false,
});

function checkQuestion() {
  options.value.defaultColor = false;
  options.value.checkColor = true;
}
</script>

<style scoped>
div {
  display: flex;
}

p {
  color: #0d114f;
}

.pergunta-bloco {
  border-radius: 0 3px 3px;
  justify-content: initial;
  flex-direction: column;
  margin-bottom: 10px;
}

.defaultColor {
  background-color: #e0ecff;
}

.checkedColor {
  background-color: #d3d9e2;
}

.pergunta {
  padding-top: 20px;
}

.pergunta img {
  width: 52px;
  height: 52px;
  padding: 0 10px;
}

.pergunta p {
  font-family: "Open sans", sans-serif;
  font-size: 16px;
}

.opcoes {
  display: flex;
  justify-content: flex-end;
}

.opcoes img {
  width: 24px;
  height: 24px;
  padding-right: 5px;
}

.opcoes p {
  padding-right: 10px;
  font-family: "Open sans", sans-serif;
  color: #4d5e77;
}

.checar,
.remover {
  align-items: center;
  cursor: pointer;
}
</style>
