<script lang="ts">
  import AuthHeader from "../components/auth/AuthHeader.svelte";
  import RegisterForm from "../components/auth/RegisterForm.svelte";
</script>

<main>
  <AuthHeader isSignup={true} />
  <RegisterForm />
</main>
