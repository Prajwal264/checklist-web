<script lang="ts">
  import { onClickOutside } from "../../../helpers/click.helpers";
  import { boardService } from "../../../services/board.service";

  $: showAddBoardForm = boardService.showAddBoardForm;
  interface FormData {
    name: string;
  }
  let formData: FormData = {
    name: "",
  };

  const addBoard = () => {
    boardService.addBoard(formData);
    formData.name = "";
  };

  const handleClickOutside = () => {
    if (!formData.name) {
      boardService.toggleShowAddBoardForm(false);
      formData.name = "";
      return;
    }
    addBoard();
  };
</script>

{#if $showAddBoardForm}
  <form
    class="sidebar-add-board-form"
    use:onClickOutside
    on:clickOutside={handleClickOutside}
  >
    <div class="form-container">
      <div class="icon">
        <img
          src="/assets/images/default-sidebar-icon.svg"
          alt="default-sidebar-icon"
        />
      </div>
      <div>
        <div>
          <textarea
            class="title"
            name="title"
            id="title"
            placeholder="New Board"
            autocomplete="off"
            rows="1"
            bind:value={formData.name}
          />
        </div>
      </div>
    </div>
  </form>
{/if}

<style lang="scss">
  .sidebar-add-board-form {
    height: 100%;
    background: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 25%) 0px 2px 6px, rgb(0 0 0 / 25%) 0px 1px 2px;
    border-radius: 6px;
    position: relative;
    z-index: 2;
    padding: 8px 10px 10px;
    max-height: 36px;
    .form-container {
      display: flex;
      flex-direction: row;
      .icon {
        width: 24px;
        height: 24px;
        margin: -2px 4px 0px -4px;
        img {
          filter: grayscale(1) brightness(1.4);
        }
      }
      .title {
        width: 100%;
        resize: none;
        border: none;
        padding: 0px;
        outline: none;
        color: rgb(0, 0, 0);
        caret-color: rgb(35, 135, 251);
        background-color: transparent;
        min-height: 100%;
        overflow: hidden;
        overflow-wrap: break-word;
        height: 20px;
        font-size: 1.6rem;
        line-height: 1.9rem;
        margin-bottom: 0px;
        padding-top: 1px;
      }
    }
  }
</style>
