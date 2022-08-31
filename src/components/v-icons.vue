<template>
  <div class="icons">
    <img src="https://keep-vue.netlify.app/img/keep-logo.579de524.png" alt="" />
    <span>+</span>
    <img src="https://keep-vue.netlify.app/img/vue-logo.82b9c7a5.png" alt="" />
    <span>+</span>
    <img
      src="https://keep-vue.netlify.app/img/firebase-logo.c24b6b9c.png"
      alt=""
    />
  </div>
</template>
<style scoped>
.icons {
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  max-width: 40px;
  margin: 0 10px;
  object-fit: cover;
}
img:last-child{
    max-width: 30px;
}
span {
  margin: 0 10px;
  font-size: 20px;
  color: rgb(10, 108, 3);
}
</style>
