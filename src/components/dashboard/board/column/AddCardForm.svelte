<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import { onClickOutside } from "../../../../helpers/click.helpers";
  import { executePromise } from "../../../../helpers/toast.helpers";
  import { cardService } from "../../../../services/card.service";
  import Checkbox from "../../../shared/Checkbox.svelte";
  interface IFormData {
    title: string;
    checked: boolean;
  }

  let formData: IFormData = {
    title: "",
    checked: false,
  };

  export let columnId: string;

  const dispatch = createEventDispatcher();

  async function addCard() {
    if (formData.title) {
      const addCardPromise = cardService.addCard({
        ...formData,
        columnId: columnId,
      });
      executePromise(addCardPromise, {
        success: "Card created successfully",
        loading: "Creating card",
      });
      await addCardPromise;
    }
    dispatch("clickOutside");
  }
</script>

<div class="add-card-section" use:onClickOutside on:clickOutside={addCard}>
  <Checkbox bind:checked={formData.checked} />
  <div class="add-card-body">
    <textarea
      name="title"
      autocomplete="off"
      placeholder="New card"
      class="form-input-new-card"
      bind:value={formData.title}
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
        height: max-content;
      }
    }
  }
</style>
