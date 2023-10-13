<template>
  <section>
    <img
      src="@/assets/background-image.svg"
      alt="Imagem de fundo"
      class="background-image"
    />
  </section>
</template>

<style scoped>
.main section:nth-child(1) {
  position: relative;
  left: -100px;
  background-color: rgb(0, 132, 255);
  border-radius: 100%;
}

.main .background-image {
  width: 500px;
  height: 450px;
  position: relative;
  left: 134px;
}

@media (max-width: 500px) {
  .main .background-image {
    display: none;
  }
}
</style>
