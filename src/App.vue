<script setup>
    import { onBeforeMount } from 'vue'
    import { RouterLink, RouterView } from 'vue-router'

    import { addRedText } from './utils/helper'

    onBeforeMount(() => {
			window.onerror = (message, source, lineno, colno, error) => {
				addRedText(`layouts/default/ error,
					${message}: ${source} ${lineno} ${colno} \n${JSON.stringify(error)}`)
			}

			window.addEventListener('unhandledrejection', function (event) {
				addRedText(`layouts/default/ promise ${event.reason}`)
			})
		})
</script>

<template>
  <main class="page">
    <header>
      <nav class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header>

    <RouterView />
  </main>
</template>

<style scoped>
  .page {
    font-size: 18px;

    display: flex;
    gap: 20px;
  }

  .nav {
      width: 100px;

      display: flex;
      flex-direction: column;
      gap: 20px;
  }
</style>
