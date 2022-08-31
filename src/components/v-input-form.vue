<template>
  <div class="forms">
    <input
      type="text"
      class="form__title"
      placeholder="Title"
      v-model="form.title"
    />
    <textarea
      rows="4"
      class="form__content"
      placeholder="Take a note..."
      v-model="form.content"
    ></textarea>
    <span class="form__btn" title="Create" />
  </div>
</template>
<script setup>
import { ref } from "vue";

const form = ref({});
</script>
<style scoped>
.forms {
  box-sizing: border-box;
  margin-top: 50px;
  width: 500px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
}
.form__btn {
  cursor: pointer;
  width: 30px;
  height: 30px;
  color: #fff;
  background-color: rgba(0, 128, 0, 0.683);
  border-radius: 50%;
  font-size: 20px;
  position: absolute;
  right: 20px;
  bottom: -15px;
  transition: background-color 0.25s ease-in-out;
}
.form__btn::after {
  content: "+";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
}
.form__btn:hover {
  background-color: rgba(0, 128, 0, 1);
}

@media (max-width: 768px) {
  .forms {
    width: 100%;
  }
}
</style>
