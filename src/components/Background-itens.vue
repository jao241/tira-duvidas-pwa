<template>
  <div>
    <div class="esfera-menor"></div>
    <div class="esfera-maior"></div>
  </div>
</template>

<style scoped>
.esfera-menor {
  background-color: rgba(211, 211, 211, 0.637);
  width: 200px;
  height: 200px;
  position: fixed;
  border-radius: 100%;
  left: 80%;
  bottom: -130px;
}

.esfera-maior {
  background-color: rgba(211, 211, 211, 0.637);
  width: 600px;
  height: 600px;
  position: fixed;
  border-radius: 100%;
  top: -350px;
  right: -350px;
}
</style>
