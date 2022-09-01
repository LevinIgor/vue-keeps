<template>
  <div class="fix__container" @click.self="emits('onBgClick')">
    <slot />
  </div>
</template>
<script setup>
const emits = defineEmits(["onBgClick"]);
</script>
<style scoped>
.fix__container {
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  background-color: rgba(84, 84, 84, 0.502);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}
</style>
