<template>
  <div class="modal">
    <input type="text" class="title" placeholder="Title" v-model="keep.title" />
    <textarea
      rows="3"
      class="content"
      placeholder="Take a note..."
      v-model="keep.content"
    />
    <footer>
      <deleteIcon class="delete" @click="emits('delete', keep.id)" />
      <section>
        <span class="btn" @click="">Cancel</span>
        <span class="btn" @click="save()">Done</span>
      </section>
    </footer>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import deleteIcon from "./icons/delete.vue";

const props = defineProps(["modal"]);
const emits = defineEmits(["close", "save", "delete"]);
function blockWheel(e) {
  e.preventDefault();
}
const keep = ref({
  title: "",
  content: "",
  id: "",
});

keep.value = JSON.parse(JSON.stringify(props.modal.keep));

function save() {
  emits("save", keep.value);
}
onMounted(() => {
  window.addEventListener("wheel", blockWheel, { passive: false });
});
onUnmounted(() => {
  window.removeEventListener("wheel", blockWheel);
});
</script>
<style scoped>
.modal {
  z-index: 20;
  position: fixed;
  top: 50%;
  margin: 0 auto;
  transform: translate(0%, -50%);
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
  transition: background-color 0.3s ease;
}
.btn:hover {
  background-color: #e6e6e6;
}

@media (max-width: 600px) {
  .modal {
    width: 90%;
  }
}
</style>
