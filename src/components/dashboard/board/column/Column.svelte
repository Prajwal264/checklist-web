<script lang="ts">
  import { flip } from "svelte/animate";
  import type { IColumn } from "../../../../services/api/column.api.service";
  import AddColumnItemsSection from "./AddColumnItemsSection.svelte";
  import ColumnCard from "./ColumnCard.svelte";
  import ColumnHeader from "./ColumnHeader.svelte";
  export let column: IColumn;
</script>

<div class="column">
  <section class="scrollContainer">
    <div class="columnStateContainer">
      <ColumnHeader {column} />
      {#each column.children as item (item.cardId)}
        <div animate:flip>
          <ColumnCard card={item} columnId={column.columnId} />
        </div>
      {/each}
      <AddColumnItemsSection columnId={column.columnId} />
    </div>
    <div class="columnSlider" />
  </section>
</div>

<style lang="scss">
  .column {
    position: relative;
    .scrollContainer {
      overflow-y: scroll;
      height: 100vh;
      padding: 10px 0px;
      .columnStateContainer {
        width: 280px;
        transition: background-color 0.2s ease 0s, box-shadow 0.1s ease 0s,
          transform 0.1s ease 0s;
        display: flex;
        flex-direction: column;
        min-height: 100%;
        padding: 33px 5px;
        position: relative;
        border-radius: 10px;
      }
      .columnSlider {
        cursor: ew-resize;
        width: 1px;
        height: 100%;
        position: absolute;
        right: 0px;
        top: 0px;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.06);
      }
    }
  }
</style>
