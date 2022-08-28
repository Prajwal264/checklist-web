<script lang="ts">
  import { getContext } from "svelte";

  import type { IColumn } from "../../../../services/api/column.api.service";
  import ColumnEllipseDropdown from "./ColumnEllipseDropdown.svelte";
  let column: IColumn | null = getContext("column");
  let showEllipseDropdown = false;
  function handleClickOutside() {
    showEllipseDropdown = false;
  }
</script>

<div class="columnHeader">
  <h6>{column.title}</h6>
  {#if column.description}
    <p>{column.description}</p>
  {/if}
  <div class="trigger-container">
    <span on:click={() => (showEllipseDropdown = !showEllipseDropdown)}>
      <img src="/assets/images/ellipse.svg" alt="ellipse" />
    </span>
  </div>
  {#if showEllipseDropdown}
    <ColumnEllipseDropdown on:clickOutside={handleClickOutside} />
  {/if}
</div>

<style lang="scss">
  .columnHeader {
    margin-bottom: 6px;
    padding: 0px 10px;
    position: relative;
    &:hover {
      .trigger-container {
        display: block;
      }
    }
    h6 {
      cursor: grab;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      touch-action: manipulation;
      padding-right: 20px;
      margin-bottom: 9px;
      font-size: 2.8rem;
      line-height: 2.5rem;
      letter-spacing: -0.1rem;
      display: inline;
      vertical-align: middle;
      word-break: break-word;
      margin-right: 10px;
      color: rgb(0, 0, 0);
      display: block;
      padding-right: 20px;
      margin-bottom: 9px;
    }
    p {
      font-size: 1.4rem;
      line-height: 1.7rem;
      min-height: 47px;
      cursor: text;
      color: rgb(135, 135, 135);
      white-space: pre-line;
      word-break: break-word;
    }
    .trigger-container {
      display: none;
      position: absolute;
      right: 10px;
      top: 4px;
      z-index: 1;
      transition: opacity 0.1s ease 0s;
      opacity: 1;
      span {
        cursor: pointer;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        box-shadow: transparent 0px 0px 0px 1px;
        border-radius: 4px;
        transition: background-color 0.1s ease 0s;
        flex-shrink: 0;
        width: 24px;
        height: 24px;
        background-color: rgb(255, 255, 255);
        &:hover,
        &.active {
          background-color: rgb(210, 227, 253);
        }
      }
    }
  }
</style>
