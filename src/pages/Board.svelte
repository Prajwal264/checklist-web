<script lang="ts">
  import { onMount, afterUpdate } from "svelte";
  import AddColumn from "../components/dashboard/board/AddColumn.svelte";
  import Column from "../components/dashboard/board/column/Column.svelte";
  import { columnService } from "../services/column.service";

  export let boardId: string | null = null;

  let cachedBoardId;

  $: if (boardId) {
    if (boardId !== cachedBoardId) {
      columnService.getAllColumns(boardId);
      cachedBoardId = boardId;
    }
  }

  $: boards = columnService.allColumns;
</script>

<div class="board-page">
  <div class="column-list-container">
    {#each $boards as column}
      <Column {column} />
    {/each}
    <AddColumn {boardId} />
  </div>
</div>

<style lang="scss">
  .board-page {
    display: inline-flex;
    flex-direction: row;
    height: 100%;
    min-width: 100%;
    padding-right: 0px;
    .column-list-container {
      display: flex;
      flex-direction: row;
      height: 100%;
      padding-left: 10px;
      overflow-anchor: none;
    }
  }
</style>
