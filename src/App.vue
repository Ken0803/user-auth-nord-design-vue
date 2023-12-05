<template>
  <div id="app">
    <router-view @login-success="redirectToSuccessPage" />
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const redirectToSuccessPage = () => {
      router.push('/success');
    };

    return {
      redirectToSuccessPage,
    };
  },
};
</script>

<style>
form {
  max-width: 300px;
  margin: auto;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}

form > input {
  margin-bottom: 10px;
  padding: 8px;
}

form > button {
  padding: 10px;
  border: none;
  cursor: pointer;
}
</style>