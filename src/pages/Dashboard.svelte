<script lang="ts">
  import { onMount } from "svelte";
  import { Route, Router } from "svelte-routing";
  import Sidebar from "../components/dashboard/sidebar/Sidebar.svelte";
  import { boardService } from "../services/board.service";
  import Board from "./Board.svelte";
  onMount(() => {
    boardService.allBoards.subscribe((boards) => {
      if (boards.length) {
        // navigate(`/app/${boards[0].boardId}`);
      }
    });
  });
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
