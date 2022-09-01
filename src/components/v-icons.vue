<template>
  <div class="icons">
    <img src="@/assets/icons/keep.png" alt="keep" title="keep" />
    <span>+</span>
    <img src="../assets/icons/vue.png" alt="vue" title="vue" />
    <span>+</span>
    <img src="../assets/icons/firebase.png" alt="firebase" title="firebase" />
  </div>
</template>
<style scoped>
.icons {
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  max-width: 40px;
  margin: 0 10px;
  object-fit: cover;
}
img:last-child {
  max-width: 30px;
}
span {
  margin: 0 10px;
  font-size: 20px;
  color: rgb(10, 108, 3);
}
@media (max-width: 350px) {
  img{
    margin: 0;
  }
}
</style>
