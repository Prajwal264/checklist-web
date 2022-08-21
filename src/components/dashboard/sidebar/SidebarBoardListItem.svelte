<script lang="ts">
  import { Link } from "svelte-routing";
  import type { IBoard } from "../../../services/api/board.api.service";
  export let item: Partial<
    IBoard & {
      icon: string;
    }
  >;
</script>

<Link to={"/app/" + item.boardId} class="sidebar-board-list-item">
  <div class="icon-container">
    <img
      src="/assets/images/{item.icon || 'default-sidebar-icon'}.svg"
      alt={item.icon || "default"}
    />
  </div>
  <p class="title">{item.name}</p>
</Link>

<style lang="scss">
  :global(.sidebar-board-list-item) {
    display: flex;
    flex: 1 1 0%;
    height: 100%;
    border-radius: 6px;
    transition: box-shadow 0.1s ease 0s;
    margin-bottom: 0px;
    // transition: opacity 0s ease 0s, background-color 0s ease 0s;
    // background-color: rgb(210, 227, 253);
    cursor: pointer;
    min-height: 36px;
    width: 100%;
    position: relative;
    border-radius: 6px;
    transition: all 0.1s ease 0s;
    color: rgb(0, 0, 0);
    padding: 6px 10px 6px 6px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;

    &:active {
      transition: opacity 0s ease 0s, background-color 0s ease 0s;
      background-color: rgb(210, 227, 253);
    }
    &:hover {
      background-color: rgb(255, 255, 255);
    }
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
  :global(a.sidebar-board-list-item[aria-current="page"]) {
    transition: opacity 0s ease 0s, background-color 0s ease 0s;
    background-color: rgb(210, 227, 253);
  }
</style>
