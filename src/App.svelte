<script lang="ts">
	import router from "page";
	import { Toaster } from "svelte-french-toast";
	import Dashboard from "./pages/Dashboard.svelte";
	import Home from "./pages/Home.svelte";
	import Signin from "./pages/Signin.svelte";
	import Signup from "./pages/Signup.svelte";
	let page;
	router("/", () => (page = Home));
	router("/signup", () => (page = Signup));
	router("/signin", () => (page = Signin));
	router("/app", () => (page = Dashboard));
	router.start();
</script>

<main>
	<svelte:component this={page} />
	<Toaster position="bottom-right" />
</main>

<style lang="scss">
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
</style>
