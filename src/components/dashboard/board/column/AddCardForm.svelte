<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import { onClickOutside } from "../../../../helpers/click.helpers";
  import Checkbox from "../../../shared/Checkbox.svelte";

  interface IFormData {
    title: string;
    description?: string;
  }

  let formData: IFormData = {
    title: "",
    description: "",
  };

  const dispatch = createEventDispatcher();

  function handleClickOutside() {
    dispatch("clickOutside");
  }
</script>

<div
  class="add-card-section"
  use:onClickOutside
  on:clickOutside={handleClickOutside}
>
  <Checkbox />
  <div class="add-card-body">
    <textarea
      name="title"
      autocomplete="off"
      placeholder="New card"
      rows="1"
      class="form-input-new-card"
      bind:value={formData.title}
    />
    <textarea
      name="description"
      autocomplete="off"
      placeholder="Description"
      rows="1"
      class="form-input-new-card-description"
      bind:value={formData.description}
    />
  </div>
</div>

<style lang="scss">
  .add-card-section {
    background: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 25%) 0px 2px 6px, rgb(0 0 0 / 25%) 0px 1px 2px;
    border-radius: 6px;
    position: relative;
    z-index: 2;
    overflow: hidden;
    padding: 11px 12px 8px;
    display: flex;
    .add-card-body {
      margin-top: -4px;
      width: 100%;
      min-width: 0px;
      padding-left: 18px;
      .form-input-new-card {
        overflow: hidden;
        overflow-wrap: break-word;
        height: 17px;
        font-size: 1.5rem;
        line-height: 1.7rem;
        margin-bottom: 5px;
        flex: 1 1 0%;
        text-decoration: none;
        width: 100%;
        resize: none;
        border: none;
        padding: 0px;
        outline: none;
        color: rgb(0, 0, 0);
        caret-color: rgb(35, 135, 251);
        background-color: transparent;
      }
      .form-input-new-card-description {
        overflow: hidden;
        overflow-wrap: break-word;
        height: 17px;
        width: 100%;
        resize: none;
        border: none;
        padding: 0px;
        outline: none;
        color: rgb(0, 0, 0);
        caret-color: rgb(35, 135, 251);
        background-color: transparent;
        min-height: 100%;
        font-size: 1.4rem;
        line-height: 1.7rem;
        margin-bottom: 6px;
      }
    }
  }
</style>
