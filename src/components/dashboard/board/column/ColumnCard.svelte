<script lang="ts">
  import Checkbox from "../../../shared/Checkbox.svelte";
  import type { ICard } from "../../../../services/api/card.api.service";
  import { cardService } from "../../../../services/card.service";
  import AddCardForm from "./AddCardForm.svelte";
  export let card: ICard;

  export let columnId: string;

  const DROPABLE_NODE_BORDER = "solid 2px #3a87fb";

  let isDragging = false;
  let isEditFlow = false;

  function toggleChecked(event: CustomEvent<boolean>) {
    const checked = event.detail;
    cardService.updateCard({
      cardId: card.cardId,
      checked,
      columnId: columnId,
    });
  }

  function handleDragStart(event: DragEvent) {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.setData("dragNodeId", card.cardId);
    event.dataTransfer.setData("dragNodeParentId", columnId);
    setTimeout(function () {
      // the html drag drop API, creates a copy of the draggable node. The draggable node has to be present in the view until its copied.
      isDragging = true;
    }, 0);
  }

  function handleDragEnter(event: DragEvent) {
    const target = event.currentTarget as HTMLElement;
    target.style["borderBottom"] = DROPABLE_NODE_BORDER;
  }

  function handleDragEnd(event: DragEvent) {
    isDragging = false;
  }

  function handleDragLeave(event: DragEvent) {
    const target = event.currentTarget as HTMLElement;
    resetBorderHighlights(target);
  }

  function handleDragOver(event: DragEvent) {
    const target = event.currentTarget as HTMLElement;
    var bounding = (target as HTMLElement).getBoundingClientRect();
    var offset = bounding.y + bounding.height / 2;
    resetBorderHighlights(target);
    // THIS IS HEAVY ON THE DOM, FIND AN ALTERNATIVE
    if (event.clientY - offset > 0) {
      target.style["borderBottom"] = DROPABLE_NODE_BORDER;
    } else {
      target.style["borderTop"] = DROPABLE_NODE_BORDER;
    }
  }

  function handleDrop(event: DragEvent) {
    const target = event.currentTarget as HTMLElement;
    event.dataTransfer.dropEffect = "move";
    let dropAbove = true;
    var bounding = target.getBoundingClientRect();
    var offset = bounding.y + bounding.height / 2;
    resetBorderHighlights(target);
    if (event.clientY - offset > 0) {
      dropAbove = false;
    }
    const dragNodeId = event.dataTransfer.getData("dragNodeId");
    const dragNodeParentId = event.dataTransfer.getData("dragNodeParentId");
    cardService.moveCard({
      cardId: dragNodeId,
      sourceParentId: dragNodeParentId,
      destinationParent: columnId,
      isDroppedAbove: dropAbove,
      referenceNodeId: card.cardId,
    });
  }

  function resetBorderHighlights(target: HTMLElement) {
    if (target.style["borderTop"] !== "") {
      target.style["borderTop"] = "";
    }
    if (target.style["borderBottom"] !== "") {
      target.style["borderBottom"] = "";
    }
  }

  function handleDoubleClick() {
    isEditFlow = true;
  }

  function handleClickOutsideAddForm() {
    isEditFlow = false;
  }
</script>

{#if !isEditFlow}
  <div
    class="column-card"
    draggable="true"
    class:hide={isDragging}
    on:dragstart={handleDragStart}
    on:dragend={handleDragEnd}
    on:dragenter|preventDefault={handleDragEnter}
    on:dragleave|preventDefault={handleDragLeave}
    on:dragover|preventDefault={handleDragOver}
    on:drop={handleDrop}
    on:dblclick={handleDoubleClick}
  >
    <div class="column-card-inner">
      <div class="column-card-item">
        <Checkbox
          bind:checked={card.checked}
          on:toggleChecked={toggleChecked}
        />
        <div class="column-card-item-title">{card.title}</div>
      </div>
    </div>
  </div>
{:else}
  <AddCardForm
    {columnId}
    cardId={card.cardId}
    formData={{
      checked: card.checked,
      title: card.title,
    }}
    on:clickOutside={handleClickOutsideAddForm}
  />
{/if}

<style lang="scss">
  .column-card {
    position: relative;
    display: flex;
    flex-direction: column;
    &.hide {
      display: none;
    }
    .column-card-inner {
      position: relative;
      width: 100%;
      min-height: 32px;
      cursor: grab;
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
