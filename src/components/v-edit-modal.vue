<template>
  <div class="modal">
    <input
      type="text"
      class="title"
      placeholder="Title"
      v-model.trim="keep.title"
    />
    <textarea
      ref="textarea"
      class="content"
      placeholder="Take a note..."
      v-model.trim="keep.content"
      maxlength="500"
    />
    <footer>
      <deleteIcon class="delete" @click="emits('delete', keep.id)" />
      <section>
        <span class="btn btn__delete" @click="emits('close')">Cancel</span>
        <span class="btn" @click="save()" :class="{ block: !isValid() }"
          >Done</span
        >
      </section>
    </footer>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import deleteIcon from "./icons/delete.vue";

const props = defineProps(["modal"]);
const emits = defineEmits(["close", "save", "delete"]);
const textarea = ref(null);
function blockWheel(e) {
  e.preventDefault();
}
const keep = ref({});

keep.value = JSON.parse(JSON.stringify(props.modal.keep));

function save() {
  if (isValid()) {
    console.log("save");
    emits("save", keep.value);
  }
}

function isValid() {
  return keep.value.title?.length > 0 && keep.value.content?.length > 0;
}
onMounted(() => {
  const tx = textarea.value;

  tx.setAttribute("style", "height:" + tx.scrollHeight + "px;");
  tx.addEventListener("input", OnInput, false);

  function OnInput() {
    this.style.height = 0;
    this.style.height = this.scrollHeight + "px";
  }
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
textarea {
  resize: vertical;
  min-height: 50px;
  max-height: 400px;
  width: 100%;

  overflow-x: none;
  overflow-y: scroll;
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
  user-select: none;
  cursor: pointer;
  font-size: 13px;
  background-color: #4242421f;
  color: rgba(48, 26, 26, 0.61);
  font-weight: bold;
  border-radius: 5px;
  padding: 10px 15px;
  margin-top: 10px;
  transition: background-color 0.3s ease;
  margin: 0 5px;
}
.btn:hover {
  background-color: #000000b3;
  color: white;
}
.btn__delete {
  background-color: #ff6d6d00;
  color: rgba(255, 0, 0, 0.575);
}
.btn__delete:hover {
  background-color: #ff6d6d;
  color: white;
}
.block {
  pointer-events: none;
}

@media (max-width: 600px) {
  .modal {
    width: 90%;
  }
}
</style>
