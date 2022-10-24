<script lang="ts">
  import { Route, Router } from "svelte-routing";
  import Sidebar from "../components/dashboard/sidebar/Sidebar.svelte";
  import Board from "./Board.svelte";
</script>

<main class="dashboard">
  <Sidebar />
  <section class="main-layout">
    <Router>
      <Route path="/:boardId" let:params>
        <Board boardId={params.boardId} />
      </Route>
    </Router>
  </section>
</main>

<style lang="scss">
  main.dashboard {
    display: flex;
    height: 100%;
    width: 100%;
    .main-layout {
      min-width: 980px;
      width: 100%;
      padding-left: 260px;
    }
  }
</style>
