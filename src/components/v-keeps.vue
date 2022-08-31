<template>
  <div class="keeps">
    <div class="keep" v-for="(keep, index) in keeps">
      <div class="keep__time__ago">{{ getAgo(keep.id) }}</div>
      <div class="keep__title">{{ keep.title }}</div>
      <p class="keep__content">
        {{ keep.content }}
      </p>
      <editIcon class="keep__edit" @click="edit(index)" />
    </div>
  </div>
</template>
<script setup>
import editIcon from "./icons/edit.vue";
import { useTimeAgo } from "@vueuse/core";

const props = defineProps(["keeps"]);
const emits = defineEmits(["onEditKeep"]);
function getAgo(time) {
  return useTimeAgo(time).value;
}

function edit(id) {
  emits("onEditKeep", id);
}
</script>
<style scoped>
.keeps {
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  grid-gap: 20px;
}
.keep {
  cursor: default;
  background-color: white;
  padding: 20px;
  border: 1px solid #e6e6e6;
  transition: all 0.1s ease-in-out;
}
.keep__time__ago {
  user-select: none;
  font-size: 12px;
  color: #999;
}
.keep__title {
  font-size: 18px;
  font-weight: bold;
  word-wrap: break-word;
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

@media (max-width: 800px) {
  .keeps {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 500px) {
  .keeps {
    grid-template-columns: 1fr;
  }
}
</style>
