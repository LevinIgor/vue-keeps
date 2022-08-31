<template>
  <main>
    <VIcons />
    <VInputForm />
    <VKeeps />
    <VEditModal v-if="false" />
  </main>
</template>
<script setup>
import VIcons from "./components/v-icons.vue";
import VInputForm from "./components/v-input-form.vue";
import VKeeps from "./components/v-keeps.vue";
import VEditModal from "./components/v-edit-modal.vue";

import { onMounted, ref } from "vue";
import getKeeps from "@/firebase/getKeeps.js";

const keeps = ref([]);

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
