<script lang="ts">
	import router from "page";
	import Home from "./pages/Home.svelte";
	import Signup from "./pages/Signup.svelte";
	let page;
	router("/", () => (page = Home));
	router("/signup", () => (page = Signup));
	router.start();
</script>

<main>
	<svelte:component this={page} />
</main>

<style lang="scss">
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
</style>
