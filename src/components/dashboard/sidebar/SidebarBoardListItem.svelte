<script lang="ts">
  import { Link } from "svelte-routing";
  import type { IBoard } from "../../../services/api/board.api.service";
  import SideBarBoardItemEllipseDropdown from "./SideBarBoardItemEllipseDropdown.svelte";
  let showEllipseDropdown = false;
  export let item: Partial<
    IBoard & {
      icon: string;
    }
  >;

  function handleClickOutside() {
    showEllipseDropdown = false;
  }
</script>

<Link to={"/app/" + item.boardId} class="sidebar-board-list-item">
  <div class="flex-wrapper">
    <div class="icon-container">
      <img
        src="/assets/images/{item.icon || 'default-sidebar-icon'}.svg"
        alt={item.icon || "default"}
      />
    </div>
    <p class="title">{item.name}</p>
  </div>
  <div class="trigger-container">
    <span
      on:click|preventDefault={() =>
        (showEllipseDropdown = !showEllipseDropdown)}
    >
      <img src="/assets/images/ellipse.svg" alt="ellipse" />
    </span>
  </div>
  {#if showEllipseDropdown}
    <SideBarBoardItemEllipseDropdown
      itemId={item.boardId}
      on:clickOutside={handleClickOutside}
    />
  {/if}
</Link>

<style lang="scss">
  :global(.sidebar-board-list-item) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 6px;
    border-radius: 6px;
    position: relative;
    transition: box-shadow 0.1s ease 0s;
    transition: all 0.1s ease 0s;
    min-height: 36px;
    &:active {
      transition: opacity 0s ease 0s, background-color 0s ease 0s;
      background-color: rgb(210, 227, 253);
    }
    &:hover {
      background-color: rgb(255, 255, 255);
      .trigger-container {
        display: block;
      }
    }
    .flex-wrapper {
      display: flex;
      flex: 1 1 0%;
      height: 100%;
      margin-bottom: 0px;
      cursor: pointer;
      width: 100%;
      position: relative;
      color: rgb(0, 0, 0);
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      .icon-container {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        margin-right: 4px;
      }
      .title {
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .trigger-container {
      display: none;
      position: absolute;
      right: 10px;
      top: 4px;
      z-index: 1;
      transition: opacity 0.1s ease 0s;
      opacity: 1;
      span {
        cursor: pointer;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        box-shadow: transparent 0px 0px 0px 1px;
        border-radius: 4px;
        transition: background-color 0.1s ease 0s;
        flex-shrink: 0;
        width: 24px;
        height: 24px;
        background-color: rgb(255, 255, 255);
        &:hover,
        &.active {
          background-color: rgb(210, 227, 253);
        }
      }
    }
  }
  :global(a.sidebar-board-list-item[aria-current="page"]) {
    transition: opacity 0s ease 0s, background-color 0s ease 0s;
    background-color: rgb(210, 227, 253);
  }
</style>
