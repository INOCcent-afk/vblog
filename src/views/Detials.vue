<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.name }}</h3>
    <p class="pre">{{ post.phone }}</p>
  </div>
</template>

<script>
import getUser from "../composables/getUser";

export default {
  props: ["id"],
  setup(props) {
    const { post, error, load } = getUser(props.id);

    load();

    return { post, error };
  },
};
</script>

<style>
.post {
  max-width: 1200px;
  margin: 0 auto;
}

.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}

.pre {
  white-space: pre-wrap;
}
</style>
