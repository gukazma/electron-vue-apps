<script setup>

</script>

<template>
<!-- 卡片组件 -->
<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <img 
      class="w-full h-48 object-cover" 
      src="https://via.placeholder.com/400x200" 
      alt="示例图片"
    >
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">示例标题</div>
      <p class="text-gray-700 text-base">
        这是一个简单的 Tailwind CSS 卡片示例。你可以根据需要自定义样式。
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#TailwindCSS</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#前端开发</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#UI设计</span>
    </div>
    <div class="px-6 py-4">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        点击我
      </button>
    </div>
  </div>
</template>