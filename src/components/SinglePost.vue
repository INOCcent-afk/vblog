<template>
  <div class="post">
    <router-link :to="{ name: 'Details', params: { id: post.id } }">
      <h3>{{ post.username }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      return props.post.company.catchPhrase.substring(0, 100) + "...";
    });

    return { snippet };
  },
};
</script>

<style></style>
