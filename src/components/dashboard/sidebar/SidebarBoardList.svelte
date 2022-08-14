<script>
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
  ];
</script>

<div class="sidebar-board-list-container">
  {#each sidebarItems as item}
    <SidebarBoardListItem {item} />
  {/each}
</div>

<style lang="scss">
</style>
