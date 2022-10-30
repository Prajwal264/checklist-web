<script lang="ts">
  import { flip } from "svelte/animate";
  import {
    columnAPIService,
    IColumn,
  } from "../../../../services/api/column.api.service";
  import AddColumnItemsSection from "./AddColumnItemsSection.svelte";
  import ColumnCard from "./ColumnCard.svelte";
  import ColumnHeader from "./ColumnHeader.svelte";
  export let column: IColumn;

  function onToggleExpanded() {
    column.expanded = !column.expanded;
    columnAPIService.edit(column.columnId, {
      expanded: column.expanded,
    });
  }
</script>

<div class="column">
  {#if column.expanded}
    <section class="scrollContainer">
      <div class="columnStateContainer">
        <ColumnHeader {column} on:toggleExpanded={onToggleExpanded} />
        {#each column.children as item (item.cardId)}
          <div animate:flip>
            <ColumnCard card={item} columnId={column.columnId} />
          </div>
        {/each}
        <AddColumnItemsSection columnId={column.columnId} />
      </div>
      <div class="columnSlider" />
    </section>
  {:else}
    <div class="column-not-expanded" on:click={onToggleExpanded}>
      <div class="inner">
        <div class="content">
          <div class="count">{column.children.length}</div>
          {column.title}
        </div>
      </div>
    </div>
  {/if}
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
    .column-not-expanded {
      transition: background-color 0.2s ease 0s, box-shadow 0.1s ease 0s,
        transform 0.1s ease 0s;
      display: flex;
      flex-direction: column;
      min-height: 100%;
      width: 36px;
      padding: 33px 5px;
      position: relative;
      border-right: 1px solid rgba(0, 0, 0, 0.06);
      cursor: grab;
      &:hover {
        background-color: rgb(247, 247, 247);
      }
      .inner {
        position: relative;
        flex: 1 1 0%;
        padding-top: 28px;
        color: rgb(0, 0, 0);
        .content {
          font-size: 1.4rem;
          transform: rotate(-90deg);
          white-space: nowrap;
          direction: rtl;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          .count {
            height: 15px;
            font-size: 1rem;
            line-height: 1.2rem;
            display: inline-block;
            border-radius: 8px;
            padding: 0px 3px;
            color: rgb(204, 204, 204);
            font-weight: 600;
            border: 1px solid rgb(204, 204, 204);
            margin-left: 6px;
          }
        }
      }
    }
  }
</style>
