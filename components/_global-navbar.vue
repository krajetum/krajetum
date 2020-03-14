<template>
  <nav class="flex items-center justify-between flex-wrap bg-orange-500 p-6 fixed w-screen">
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-orange-200 border-orange-400 hover:text-white hover:border-white"
        @click="isExpanded = !isExpanded"
        aria-label="menu"
      >
        <font-awesome-icon icon="bars" />
      </button>
    </div>
    <div class="block">
      <a
        href="https://twitch.tv/krajetum" rel="noreferrer"
        class="text-sm px-4 py-2 leading-none border rounded text-purple-600 border-purple-600 bg-white  hover:border-purple-500 hover:text-purple-500 hover:bg-purple-100 mt-4 lg:mt-0"
      >
        <font-awesome-icon :icon="['fab', 'twitch']" /> Twitch</a>
    </div>
    <div
      class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
      :class="isExpanded ? '' : 'hidden'"
    >
      <div class="text-sm lg:flex-grow">
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-orange-200 hover:text-white mr-4"
        >
          Docs
        </a>
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-orange-200 hover:text-white mr-4"
        >
          Examples
        </a>
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-orange-200 hover:text-white"
        >
          Blog
        </a>
      </div>

    </div>

  </nav>
</template>

<script>
export default {
  name: 'global-navbar',
  data: () => ({
    isExpanded: false
  })
}
</script>

<style>
</style>
