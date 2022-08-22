<script lang="ts">
  export let boardId: string | null = null;
</script>

<div class="board-page">
  <div class="column-list-container">
    Board {boardId}
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
