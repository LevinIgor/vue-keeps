<template>
  <div class="forms" @click="showTitle()">
    <transition name="fade">
      <input
        v-if="isTitleShow"
        type="text"
        class="form__title"
        placeholder="Title"
        v-model.trim="form.title"
        :class="{ empty: isIncorrect.title }"
        @click="isIncorrect.title = false"
        @keyup.enter="create()"
        maxlength="100"
      />
    </transition>
    <section>
      <textarea
        rows="4"
        class="form__content"
        placeholder="Shift + Enter to create"
        v-model.trim="form.content"
        :class="{ empty: isIncorrect.content }"
        @click="isIncorrect.content = false"
        @keyup="keyup($event)"
        :maxlength="maxlength"
      />
      <span class="doc__counter"
        >{{ docCount }} notes has already been created</span
      >
      <span class="counter">{{ symbolCounter() }}/{{ maxlength }}</span>
    </section>
    <span @click="create()" class="form__btn" title="Create" />
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import setKeep from "@/firebase/setKeep.js";
import getDocCount from "@/firebase/getDocCount.js";

const maxlength = 500;
const docCount = ref("-");

const emits = defineEmits(["onCreateKeep"]);
const isTitleShow = ref(false);
const isIncorrect = ref({ title: false, content: false });
const form = ref({
  title: "",
  content: "",
});

async function create() {
  if (isValidate()) {
    form.value.id = Date.now();

    setKeep(form.value);
    docCount.value++;
    emits("onCreateKeep", form.value);

    form.value = {
      title: "",
      content: "",
    };
  }
}

function isValidate() {
  form.value.title
    ? (isIncorrect.value.title = false)
    : (isIncorrect.value.title = true);

  form.value.content
    ? (isIncorrect.value.content = false)
    : (isIncorrect.value.content = true);

  if (isIncorrect.value.title || isIncorrect.value.content) {
    return false;
  } else {
    return true;
  }
}
function showTitle() {
  isTitleShow.value = true;
}

function keyup(event) {
  if (event.keyCode === 13 && event.shiftKey) {
    create();
  }
}
function symbolCounter() {
  return form.value.content.length;
}

onMounted(() => {
  getDocCount().then((count) => {
    docCount.value = count;
  });
});
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
input,
textarea {
  box-sizing: border-box;
  border: 2px solid transparent;
  margin-top: 1px;
  width: 100%;
}
.doc__counter {
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 12px;
  color: #999;
  user-select: none;
}
.counter {
  user-select: none;
  position: absolute;
  bottom: 0;
  right: 0;
  color: rgba(0, 0, 0, 0.63);
  font-size: 12px;
}
.empty {
  border: 2px solid rgba(255, 63, 63, 0.219);
}
.empty::placeholder {
  color: rgba(133, 9, 9, 0.463);
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

.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
