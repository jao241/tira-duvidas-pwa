<template>
  <div class="home">
    <logo class="header" />
    <div class="main">
      <background-image />
      <section class="formularios">
        <form action="">
          <h2>Crie sua própria sala</h2>
          <input type="password" name="" id="" placeholder="Insira uma senha" />
          <div>
            <router-link to="/" class="button-back">
              <img src="@/assets/arrow_back.svg" alt="voltar-pagina" />
            </router-link>
            <router-link to="/sala" class="button">
              <img src="@/assets/criar-sala-white-icone.svg" alt="criar sala" />
              Criar sala
            </router-link>
          </div>
        </form>
      </section>
    </div>
    <background-itens />
  </div>
</template>

<script setup>
import BackgroundImage from "../components/Background-image.vue";
import BackgroundItens from "../components/Background-itens.vue";
import Logo from "../components/LogoPage.vue";
</script>

<style scoped>
a {
  display: flex;
  text-decoration: none;
  color: #3485ff;
  font-family: "Poppins", sans-serif;
}

.main {
  display: flex;
}

.header {
  margin: 40px 20px;
}

.formularios {
  margin: 80px auto;
}

.formularios form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.formularios form h2 {
  font-family: "Poppins", sans-serif;
  font-size: 28px;
  margin-top: 20px;
}

.formularios form input {
  font-family: "Open Sans", sans-serif;
  padding: 10px;
  margin-bottom: 20px;
  border-color: grey;
  border-radius: 5px;
  border-style: solid;
}

.formularios div {
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.formularios p {
  margin: 10px;
}

.formularios form button img {
  margin-right: 10px;
}

.formularios .btn-criar-sala {
  background-color: white;
  color: #0555e9c0;
  border-style: solid;
  border-color: #0555e9c0;
}

.formularios form button,
.formularios form input {
  font-size: 16px;
}

.button {
  font-family: "Poppins", sans-serif;
  background-color: #0555e9c0;
  padding: 10px;
  width: 60%;
  border-color: grey;
  border-radius: 5px;
  border-style: solid;
  color: white;
  border-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.button img {
  margin-right: 10px;
}

.button-back img {
  width: 20px;
  padding: 10px;
  background-color: #0555e9c0;
  border-radius: 5px;
}
</style>
