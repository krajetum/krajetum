<template>
  <div class="container mx-auto px-4 flex-col">
    <div class="py-5">
      <h1 class="text-4xl subpixel-antialiased font-sans uppercase">
        <font-awesome-icon
          icon="calendar-alt"
          class="text-orange-500"
        />
        Schedule
      </h1>
    </div>

    <table class="table-auto w-full">
      <thead>
        <tr>
          <th class="px-4 py-2 border">Mon</th>
          <th class="px-4 py-2 border">Tues</th>
          <th class="px-4 py-2 border">Wed</th>
          <th class="px-4 py-2 border">Thur</th>
          <th class="px-4 py-2 border">Fri</th>
          <th class="px-4 py-2 border">Sat</th>
          <th class="px-4 py-2 border">Sun</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="px-4 py-2 border"></th>
          <th class="px-4 py-2 border"></th>
          <th class="px-4 py-2 border"></th>
          <th class="px-4 py-2 border"></th>
          <th class="px-4 py-2 border"></th>
          <th class="px-4 py-2 border"></th>
          <th class="px-4 py-2 border">
            <font-awesome-icon icon="check" />
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
