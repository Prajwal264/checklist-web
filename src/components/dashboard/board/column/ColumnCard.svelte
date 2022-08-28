<script lang="ts">
  import Checkbox from "../../../shared/Checkbox.svelte";
  import type { ICard } from "../../../../services/api/card.api.service";
  export let card: ICard;
</script>

<div class="column-card">
  <div class="column-card-inner">
    <div class="column-card-item">
      <Checkbox bind:checked={card.checked} />
      <div class="column-card-item-title">{card.title}</div>
    </div>
  </div>
</div>

<style lang="scss">
  .column-card {
    position: relative;
    display: flex;
    flex-direction: column;
    .column-card-inner {
      position: relative;
      width: 100%;
      min-height: 32px;
      cursor: pointer;
      border-radius: 6px;
      transition: background-color 0.2s ease 0s;
      background-color: transparent;
      &:hover {
        background-color: rgb(247, 247, 247);
      }
      .column-card-item {
        width: 100%;
        min-height: 32px;
        padding: 7px 4px 6px 30px;
        word-break: break-word;
        .column-card-item-title {
          font-size: 1.5rem;
          line-height: 1.7rem;
          user-select: none;
          margin-right: 5px;
          display: inline;
          color: rgb(0, 0, 0);
        }
      }
    }
  }
</style>
