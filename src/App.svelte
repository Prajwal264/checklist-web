<script lang="ts">
	import { Router, Route } from "svelte-routing";
	import { Toaster } from "svelte-french-toast";
	import Dashboard from "./pages/Dashboard.svelte";
	import Home from "./pages/Home.svelte";
	import Signin from "./pages/Signin.svelte";
	import Signup from "./pages/Signup.svelte";
</script>

<main>
	<Router url={""}>
		<Route path="/" component={Home} />
		<Route path="/signup" component={Signup} />
		<Route path="/signin" component={Signin} />
		<Route path="/app/*" component={Dashboard} />
	</Router>
	<Toaster position="bottom-right" />
</main>

<style lang="scss">
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
</style>
