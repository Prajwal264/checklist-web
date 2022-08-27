<script lang="ts">
  import type { IColumn } from "../../../../services/api/column.api.service";
  export let column: IColumn | null = null;
</script>

<div class="columnHeader">
  <h6>{column.title}</h6>
  {#if column.description}
    <p>{column.description}</p>
  {/if}
</div>

<style lang="scss">
  .columnHeader {
    margin-bottom: 6px;
    padding: 0px 10px;
    position: relative;
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
  }
</style>
