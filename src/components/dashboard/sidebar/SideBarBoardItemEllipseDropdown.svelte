<script lang="ts">
  import { executePromise } from "../../../helpers/toast.helpers";
  import { onClickOutside } from "../../../helpers/click.helpers";
  import { createEventDispatcher } from "svelte";

  import EllipseDropdownListItem from "../../shared/EllipseDropdownListItem.svelte";
  import { boardService } from "../../../services/board.service";
  export let itemId: string;

  const deleteBoard = () => {
    const deleteColumnPromise = boardService.deleteBoard(itemId);
    executePromise(deleteColumnPromise, {
      loading: "Deleteing Board",
      success: "Board deleted successfully",
    });
  };

  const dispatch = createEventDispatcher();

  function handleClickOutside() {
    dispatch("clickOutside");
  }
</script>

<div
  class="ellipse-options-dropdown"
  use:onClickOutside
  on:clickOutside={handleClickOutside}
>
  <EllipseDropdownListItem title={"delete"} on:click={deleteBoard} />
</div>

<style lang="scss">
  .ellipse-options-dropdown {
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 25%) 0px 2px 6px;
    border-radius: 8px;
    padding: 7px 0px;
    position: absolute;
    min-width: 240px;
    will-change: top, left, width, height;
    top: 30px;
    left: 20px;
    z-index: 10;
  }
</style>
