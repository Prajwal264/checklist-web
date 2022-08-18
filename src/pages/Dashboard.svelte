<script lang="ts">
  import router from "page";
  import { navigate, Route, Router } from "svelte-routing";
  import Sidebar from "../components/dashboard/sidebar/Sidebar.svelte";
  import { boardService } from "../services/board.service";
  import Board from "./Board.svelte";
  boardService.allBoards.subscribe((boards) => {
    if (boards.length) {
      navigate(`/app/${boards[0].boardId}`);
    }
  });
</script>

<main class="dashboard">
  <Sidebar />
  <Router>
    <Route path="/:boardId" component={Board} />
  </Router>
</main>

<style lang="scss">
  main.dashboard {
    display: flex;
    height: 100%;
    width: 100%;
  }
</style>
