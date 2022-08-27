<script lang="ts">
  import { onClickOutside } from "../../../helpers/click.helpers";
  let showColumnCreationForm = false;
  const toggleShowCreationForm = () => {
    showColumnCreationForm = !showColumnCreationForm;
  };
  const handleClickOutside = () => {
    showColumnCreationForm = false;
  };
</script>

<div class="add-column-form-container">
  {#if !showColumnCreationForm}
    <div class="form-handler" on:click={toggleShowCreationForm}>
      <img src="/assets/images/add-btn.svg" alt="add-btn" />
    </div>
  {:else}
    <div
      class="new-column-form-container"
      use:onClickOutside
      on:clickOutside={handleClickOutside}
    >
      <div class="inner-container" />
    </div>
  {/if}
</div>

<style lang="scss">
  .add-column-form-container {
    height: 100%;
    visibility: visible;
    padding: 23px 10px;
    display: flex;
    flex-direction: column;
    flex: 1 0 0%;
    -webkit-box-flex: 1;
    height: 100%;
    .form-handler {
      height: 100%;
      cursor: pointer;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      border-radius: 6px;
      background-color: transparent;
      transition: background-color 0.2s ease 0s;
      min-width: 280px;
      width: 280px;
      &:hover {
        background-color: rgb(247, 247, 247);
      }
    }
    .new-column-form-container {
      height: 100%;
      min-width: 280px;
      width: 280px;
      .inner-container {
        background: rgb(255, 255, 255);
        box-shadow: rgb(0 0 0 / 25%) 0px 2px 6px, rgb(0 0 0 / 25%) 0px 1px 2px;
        border-radius: 6px;
        position: relative;
        z-index: 2;
        padding: 22px 10px 10px;
        height: 100%;
      }
    }
  }
</style>
