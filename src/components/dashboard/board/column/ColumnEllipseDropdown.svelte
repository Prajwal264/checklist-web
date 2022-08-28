<script lang="ts">
  import { executePromise } from "../../../../helpers/toast.helpers";
  import { columnService } from "../../../../services/column.service";
  import { onClickOutside } from "../../../../helpers/click.helpers";
  import { createEventDispatcher, getContext } from "svelte";

  import ColumnEllipseDropdownListItem from "./ColumnEllipseDropdownListItem.svelte";
  import type { IColumn } from "../../../../services/api/column.api.service";
  const column: IColumn = getContext("column");

  const deleteColumn = () => {
    const deleteColumnPromise = columnService.removeColumn(column.columnId);
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
  <ColumnEllipseDropdownListItem title={"delete"} on:click={deleteColumn} />
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
