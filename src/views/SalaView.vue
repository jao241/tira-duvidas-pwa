<template>
  <div class="sala">
    <header>
      <logo class="logo" />
      <options />
    </header>
    <section>
      <h2>Faça a sua pergunta</h2>
      <div class="novaPergunta">
        <input
          type="text"
          name="pergunta"
          id="pergunta"
          placeholder="O que você quer perguntar?"
          v-model="newQuestion"
        />
        <div class="texto">
          <div>
            <img src="@/assets/cadeado.svg" alt="cadeado" />
            <p>Esta pergunta é anônima</p>
          </div>
          <button @click="addQuestion">Enviar</button>
        </div>
      </div>
    </section>
    <no-question v-show="!hasQuestions" />
    <question
      v-for="question in questions"
      :key="question.id"
      :items="question"
      @remove="removeQuestions(question.id)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Logo from "../components/LogoPage.vue";
import Options from "../components/OptionsPage.vue";
import Question from "../components/QuestionComponent.vue";
import NoQuestion from "../components/NoQuestion.vue";

const questions = ref([
  {
    id: 1,
    question: "Qual a diferença entre const, var e let no Javascript?",
  },
  {
    id: 2,
    question: "O que é Typescript?",
  },
  {
    id: 3,
    question: "O que é Javascript?",
  },
]);

const newQuestion = ref("");
let totalQuestions = questions.value.length;

function hasQuestions() {
  return questions.value.length > 0 ? true : false;
}

function addQuestion() {
  const objQuestion = {
    id: totalQuestions,
    question: newQuestion.value,
  };

  totalQuestions = questions.value.unshift(objQuestion);
  console.log(questions.value);
  newQuestion.value = "";
}

function removeQuestions(id: number) {
  const questionPosition = questions.value.findIndex((value) => value.id == id);

  questions.value.splice(questionPosition, 1);
}
</script>

<style scoped>
.sala header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sala header .logo {
  margin: 40px 20px;
}

.sala section h2 {
  font-family: "Poppins", sans-serif;
}

.sala section {
  width: 90%;
  margin: 20px auto 0 auto;
}

.sala section div {
  display: flex;
}

.novaPergunta {
  border: 2px solid #a1b2cd;
  border-radius: 0 3px 3px;
  flex-direction: column;
}

.novaPergunta input {
  outline: none;
  border: none;
  padding: 10px 0 100px 10px;
  font-family: "Open sans", sans-serif;
  font-size: 16px;
}

.sala section button {
  height: 35px;
  padding: 0 14px;
  background-color: #3485ff;
  text-decoration: none;
  color: white;
  font-family: "Poppins", sans-serif;
  border-radius: 2px;
  border: none;
  cursor: pointer;
}

.sala section div .texto img {
  padding: 0 10px;
}

.texto {
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
}

.texto p {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: #a5b0c1;
}
</style>
