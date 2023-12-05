<script setup lang="ts">
import { computed, reactive, ref, watchEffect } from "vue";
import type { Input } from "@nordhealth/components";
import { useRouter } from "vue-router";

const router = useRouter();

const validateEmail = (email: string) => {
  let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return email.match(validRegex);
}

function useField(initialValue = "", type = "pass") {
  const inputRef = ref<Input>();
  const value = ref(initialValue);
  const inputtype = ref(type);
  const error = ref<string>();
  const valid = computed(() => {
    if (inputtype.value === "pass") return !!value.value;
    else return validateEmail(value.value);
  });

  watchEffect(() => {
    if (valid.value) {
      error.value = undefined;
    }
  });

  return reactive({
    value,
    error,
    valid,
    inputtype,
    focus: () => inputRef.value?.focus(),
    setRef: (el: Input) => {
      inputRef.value = el;
    },
  });
}

const email = useField("", "user");
const password = useField();

function handleSubmit() {
  if (email.valid && password.valid) {
    router.push("/success");
  }

  if (!password.valid) {
    password.error = "Please enter a password";
    password.focus();
  }

  if (!email.valid) {
    email.error = "Please enter a correct email";
    email.focus();
  }
}
</script>

<template>
  <nord-card padding="l" class="stack">
    <h2>Sign in</h2>
    <form action="#" @submit.prevent="handleSubmit">
      <nord-stack>
        <nord-input
          label="Email"
          expand
          type="email"
          name="email"
          placeholder="user@example.com"
          :ref="email.setRef"
          :error="email.error"
          v-model="email.value"
        ></nord-input>

        <div class="password">
          <nord-input
            label="Password"
            expand
            type="password"
            name="password"
            placeholder="••••••••"
            :ref="password.setRef"
            :error="password.error"
            v-model="password.value"
          >
          </nord-input>
          <a>Forgot password?</a>
        </div>

        <nord-button type="submit" expand variant="primary">
          Sign in
        </nord-button>
      </nord-stack>
    </form>
  </nord-card>
</template>

<style scoped>
.stack {
  inline-size: 90%;
  max-inline-size: 340px;
  margin: var(--n-space-xl) auto;
}

.stack h2 {
  margin: 0px;
}

.password {
  position: relative;
}

.password a {
  text-decoration: none;
  font-size: var(--n-font-size-s);
  position: absolute;
  inset-block-start: 0;
  inset-inline-end: 0;
  cursor: pointer;
}

.password a:hover {
  text-decoration: underline;
}
</style>
