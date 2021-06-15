import { ref } from "@vue/reactivity";

const getUsers = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://jsonplaceholder.typicode.com/users");
      if (!data.ok) {
        throw Error("no data available");
      }

      posts.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.error(error.value);
    }
  };

  return { posts, error, load };
};

export default getUsers;
