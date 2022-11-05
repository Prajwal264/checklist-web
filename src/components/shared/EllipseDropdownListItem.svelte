<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let title;

  const dispatch = createEventDispatcher();

  function onClick() {
    dispatch("click");
  }
</script>

<div class="list-item" on:click|stopPropagation={onClick}>
  <div class="icon-wrapper">
    <img src={`/assets/images/${title}.svg`} alt={`icon-${title}`} />
  </div>
  <div class="content-wrapper">
    <p>{title}</p>
  </div>
</div>

<style lang="scss">
  .list-item {
    padding: 7px 10px 7px 41px;
    display: flex;
    position: relative;
    &:hover {
      background-color: rgb(210, 227, 253);
      cursor: pointer;
    }
    .icon-wrapper {
      position: absolute;
      left: 16px;
      top: 18px;
      transform: translate(0, -50%);
    }
    .content-wrapper {
      -webkit-box-flex: 1;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      font-size: 1.6rem;
      line-height: 1.9rem;
      p {
        text-transform: capitalize;
      }
    }
  }
</style>
