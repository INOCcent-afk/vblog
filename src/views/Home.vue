<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <div :key="name" v-for="name in matchingNames">
      {{ name }}
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed, watch, watchEffect } from "@vue/runtime-core";

export default {
  name: "Home",
  setup() {
    const search = ref("");
    const names = ref(["mario", "john", "toad"]);

    const stopWatch = watch(search, () => {
      console.log(search.value);
    });

    const stopEffect = watchEffect(() => {
      console.log("watchEffect function ran");
    });

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    return { names, search, matchingNames };
  },
};
</script>
