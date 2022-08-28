<script>
  import { executePromise } from "../../../../helpers/toast.helpers";
  import { columnService } from "../../../../services/column.service";
  import { onClickOutside } from "../../../../helpers/click.helpers";
  import { createEventDispatcher } from "svelte";

  import ColumnEllipseDropdownListItem from "./ColumnEllipseDropdownListItem.svelte";
  export let columnId;

  const deleteColumn = () => {
    const deleteColumnPromise = columnService.removeColumn(columnId);
    executePromise(deleteColumnPromise, {
      loading: "Deleteing Column",
      success: "Column deleted successfully",
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
  <div class="ellipse-options">
    <ColumnEllipseDropdownListItem title={"delete"} on:click={deleteColumn} />
  </div>
</div>

<style lang="scss">
  .ellipse-options-dropdown {
    background-color: white;
    position: relative;
    .ellipse-options {
      background-color: rgb(255, 255, 255);
      box-shadow: rgb(0 0 0 / 25%) 0px 2px 6px;
      border-radius: 8px;
      padding: 7px 0px;
      position: absolute;
      min-width: 240px;
      will-change: top, left, width, height;
      top: 10px;
      left: 0;
      z-index: 10;
    }
  }
</style>
