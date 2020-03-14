<template>
  <nav class="flex items-center justify-between flex-wrap bg-orange-500 p-5 fixed w-full">
    <div class="w-full">
      <button
        class="flex items-center px-3 py-2 border rounded text-orange-200 border-orange-400 hover:text-white hover:border-white  lg:hidden float-left"
        @click="isExpanded = !isExpanded"
        aria-label="menu"
        id="menu"
      >
        <font-awesome-icon icon="bars" />
      </button>
      <a
        href="https://twitch.tv/krajetum"
        rel="noreferrer"
        class="text-sm px-4 py-2 leading-none border rounded text-purple-600 border-purple-600 bg-white  hover:border-purple-500 hover:text-purple-500 hover:bg-purple-100 float-right"
      >
        <font-awesome-icon :icon="['fab', 'twitch']" /> Twitch</a>
      <div class="clearfix lg:hidden"></div>

      <div
        class="flex-grow lg:flex lg:items-center lg:w-auto lg:float-left nav-menu"
        :class="isExpanded?'':'hidden'"
      >
        <div class="text-sm lg:flex-grow">
          <a
            :to="page.path"
            class="block mt-4 text-orange-200 mr-4 hover:text-white lg:inline-block lg:mt-0"
            v-for="page in pages"
            :key="page.key"
          >
            {{ page.name }}
          </a>
        </div>
      </div>

    </div>

  </nav>
</template>

<script>
export default {
  name: 'global-navbar',
  data: () => ({
    isExpanded: false,
    pages: [
      {
        key: 'home',
        path: '/home',
        name: 'Home'
      }
    ]
  })
}
</script>

<style lang="scss">
</style>>
