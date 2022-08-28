<script lang="ts">
  export let checked = false;
  function check() {
    checked = !checked;
  }
</script>

<div class="checkbox-container">
  <div class="checkbox-inner" on:click={check}>
    <div class="checkbox" class:checked>
      {#if checked}
        <img src="/assets/images/checkbox-checked.svg" alt="checkbox-checked" />
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
  .checkbox-container {
    width: 20px;
    height: 20px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-shrink: 0;
    position: absolute;
    left: 7px;
    top: 6px;
    .checkbox-inner {
      width: 12px;
      height: 12px;
      cursor: pointer;
      .checkbox {
        position: relative;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: rgb(255, 255, 255);
        border-radius: 3px;
        box-shadow: rgb(0 0 0 / 25%) 0px 0px 0px 1px inset;
        &.checked {
          background-color: rgb(35, 135, 251);
        }
        &:hover,
        &.checked {
          box-shadow: rgb(210 227 253) 0px 0px 0px 2px;
        }
      }
    }
  }
</style>
