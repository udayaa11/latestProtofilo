<template>
  <div class="min-h-screen flex flex-col bg-gray-100 text-gray-900 font-sans">
    <header class="p-4 bg-white shadow-md">
      <div class="max-w-6xl mx-auto flex justify-between items-center">
        <h1 class="text-xl font-bold">Uday Yadav</h1>
        <nav class="space-x-4">
          <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
          <NuxtLink to="/projects" class="hover:underline">Projects</NuxtLink>
          <NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink>
        </nav>
      </div>
    </header>

    <main class="flex-1 max-w-6xl mx-auto p-4">
      <slot />
    </main>

    <footer class="bg-white p-4 text-center shadow-inner">
      © 2025 Uday Yadav. All rights reserved.
    </footer>
  </div>
</template>
