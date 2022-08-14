<script>
  import SidebarAddBoardButton from "./SidebarAddBoardButton.svelte";

  import SidebarBoardListItem from "./SidebarBoardListItem.svelte";

  let sidebarItems = [
    {
      name: "Today",
      icon: "star",
    },
    {
      name: "First steps",
    },
    {
      name: "Home Steps",
    },
    {
      name: "Watch list",
    },
    {
      name: "Trash",
      icon: "trash",
    },
  ];
</script>

<div class="sidebar-board-list-container">
  {#each sidebarItems as item}
    <SidebarBoardListItem {item} />
  {/each}
  <div class="sidebar-add-board-button">
    <SidebarAddBoardButton />
  </div>
</div>

<style lang="scss">
  .sidebar-board-list-container {
    &:hover {
      .sidebar-add-board-button {
        opacity: 1;
      }
    }
    .sidebar-add-board-button {
      transition: opacity 0.1s ease 0s;
      opacity: 0;
    }
  }
</style>
