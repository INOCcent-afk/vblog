import { ref } from "@vue/reactivity";

const getUser = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://jsonplaceholder.typicode.com/users/" + id);
      if (!data.ok) {
        throw Error("no data available");
      }

      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.error(error.value);
    }
  };

  return { post, error, load };
};

export default getUser;
