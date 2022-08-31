<template>
  <div class="keeps">
    <div class="keep" v-for=" in 40">
      <div class="keep__time__ago">{{ timeAgo }}</div>
      <div class="keep__title">Lorem ipsum dolor sit amet.</div>
      <div class="keep__content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        quos deleniti facere placeat similique tempore deserunt in aut fugit
        odio.
      </div>

      <Edit class="keep__edit" />
    </div>
  </div>
</template>
<script setup>
import Edit from "./icons/edit.vue";
import { useTimeAgo } from "@vueuse/core";

const timeAgo = useTimeAgo(999940840989);
</script>
<style scoped>
.keeps {
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
}
.keep {
  cursor: default;
  background-color: white;
  padding: 20px;
  border: 1px solid #e6e6e6;
  transition: all 0.1s ease-in-out;
}
.keep__time__ago{
    font-size: 12px;
    color: #999;
}
.keep__title {
  font-size: 18px;
  font-weight: bold;
}
.keep__content {
  font-size: 14px;
  margin-top: 10px;
}
.keep__edit {
  box-sizing: content-box;
  width: 20px;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;
}
.keep:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.keep:hover .keep__edit {
  opacity: 1;
}
.keep__edit:hover {
  fill: #2a752a;
}
</style>
