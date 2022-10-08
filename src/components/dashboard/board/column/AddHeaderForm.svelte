<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import { onClickOutside } from "../../../../helpers/click.helpers";

  export let columnId: string;

  interface IFormData {
    title: string;
  }

  let formData: IFormData = {
    title: "",
  };

  const dispatch = createEventDispatcher();

  function handleClickOutside() {
    dispatch("clickOutside");
  }
</script>

<div
  class="add-header-form"
  use:onClickOutside
  on:clickOutside={handleClickOutside}
>
  <textarea
    name="title"
    autocomplete="off"
    placeholder="New heading"
    rows="1"
    class="form-input-new-heading"
    bind:value={formData.title}
  />
</div>

<style lang="scss">
  .add-header-form {
    background: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 25%) 0px 2px 6px, rgb(0 0 0 / 25%) 0px 1px 2px;
    border-radius: 6px;
    position: relative;
    z-index: 2;
    padding: 9px 10px;
    .form-input-new-heading {
      overflow: hidden;
      overflow-wrap: break-word;
      height: 20px;
      font-size: 1.5rem;
      line-height: 2rem;
      font-weight: 800;
      margin-bottom: 4px;
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
  }
</style>
