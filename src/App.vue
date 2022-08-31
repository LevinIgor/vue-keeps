<template>
  <main>
    <VIcons />
    <VInputForm @onCreateKeep="addKeep($event)" />
    <VKeeps :keeps="keeps" @onEditKeep="editKeep($event)" />
    <VEditModal />
  </main>
</template>
<script setup>
import VIcons from "./components/v-icons.vue";
import VInputForm from "./components/v-input-form.vue";
import VKeeps from "./components/v-keeps.vue";
import VEditModal from "./components/v-edit-modal.vue";

import { onMounted, ref, provide } from "vue";
import getKeeps from "@/firebase/getKeeps.js";

const keeps = ref([]);
const modal = ref({
  isOpen: true,
  closeModal: function () {
    console.log(this);
  },
});
provide("isModalOpen", modal);
function addKeep(keep) {
  keeps.value.unshift(keep);
}

function editKeep(index) {}
// function closeModal() {
//   isModalOpen.value = false;
// }

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
