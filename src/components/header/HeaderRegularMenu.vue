<template lang="pug">

    div(class="text-md-center hidden-md-and-down")
      v-btn(outline large color="#F57C00" darken-4 aria-label="Order Online Icon" href="https://www.clover.com/online-ordering/que-ricas") Order Online
      v-btn(outline large color="#F57C00" darken-4 aria-label="Home Page Icon" :to="{ path: '/' }") Home
      v-btn(outline large color="#F57C00" aria-label="Menu Page Icon" :to="{ path: '/menu/' }") Menu
      v-btn(outline large color="#F57C00" aria-label="Our Story Page Icon" :to="{ path: '/story/' }") Our Story

</template>

<script>

export default {
  name: 'HeaderRegularMenu'
}

</script>