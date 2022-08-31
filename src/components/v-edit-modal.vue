<template>
  <div class="container">
    <div class="edit__modal">
      <input type="text" class="title" placeholder="Title" />
      <textarea rows="3" class="content" placeholder="Take a note..." />
      <footer>
        <Delete class="delete" />
        <span class="btn">Done</span>
      </footer>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted } from "vue";
import Delete from "./icons/delete.vue";

function blockWheel(e) {
  e.preventDefault();
}

onMounted(() => {
  window.addEventListener("wheel", blockWheel, { passive: false });
});
onUnmounted(() => {
  window.removeEventListener("wheel", blockWheel);
});
</script>
<style scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(84, 84, 84, 0.502);
  display: flex;
  justify-content: center;
  align-items: center;
}
.edit__modal {
  box-sizing: border-box;
  padding: 20px;
  width: 500px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e6e6;
  box-shadow: 10px 20px 10px rgba(27, 27, 27, 0.368);
}
.title {
  font-size: 18px;
  font-weight: bold;
}
footer {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.delete {
  cursor: pointer;
  fill: #7b7b7b;
  transition: all 0.3s ease;
}
.delete:hover {
  fill: #000;
}
.btn {
  cursor: pointer;
  font-size: 13px;
  background-color: #dbdbdb;
  border-radius: 5px;
  padding: 5px 10px;
  margin-top: 10px;
  transition: all 0.3s ease;
}
.btn:hover {
  background-color: #e6e6e6;
}

@media (max-width: 600px) {
  .edit__modal {
    width: 90%;
  }
}
</style>
