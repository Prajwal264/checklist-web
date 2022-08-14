<script lang="ts">
  import AuthHeader from "../components/auth/AuthHeader.svelte";
  import LoginForm from "../components/auth/LoginForm.svelte";
</script>

<main>
  <AuthHeader isSignup={false} />
  <LoginForm />
</main>
