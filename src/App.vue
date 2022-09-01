<template>
  <main>
    <VIcons />
    <VInputForm @onCreateKeep="addKeep($event)" />
    <VKeeps :keeps="keeps" @onEditKeep="editKeep($event)" />
    <VEditModal
      @close="modal.isOpen = false"
      @delete="deleteKeep($event)"
      @save="saveKeep($event)"
      :modal="modal"
      v-if="modal.isOpen"
    />
  </main>
</template>
<script setup>
import VIcons from "./components/v-icons.vue";
import VInputForm from "./components/v-input-form.vue";
import VKeeps from "./components/v-keeps.vue";
import VEditModal from "./components/v-edit-modal.vue";

import { onMounted, ref } from "vue";
import getKeeps from "@/firebase/getKeeps.js";
import setKeep from "@/firebase/setKeep.js";
import deleteKeepBD from "@/firebase/deleteKeep.js";

const keeps = ref([]);
const modal = ref({
  isOpen: false,
  keep: {},
});

function addKeep(keep) {
  keeps.value.unshift(keep);
}
function saveKeep(keep) {
  setKeep(keep);
  let index = keeps.value.findIndex((k) => k.id === keep.id);
  keeps.value[index] = keep;

  modal.value.isOpen = false;
}

function editKeep(index) {
  modal.value.isOpen = true;
  modal.value.keep = keeps.value[index];
}

function deleteKeep(id) {
  deleteKeepBD(id);
  let index = keeps.value.findIndex((k) => k.id === id);
  keeps.value.splice(index, 1);
  modal.value.isOpen = false;
}

onMounted(async () => {
  keeps.value = await getKeeps();
});
</script>

<style scoped>
main {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
