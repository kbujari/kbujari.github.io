<script>
  const modules = [
    {
      header: 'Interests',
      color: '#ff9e3b',
      content: [ 'linux', 'webdev', 'security', 'networking' ]
    },
    {
      header: 'Languages',
      color: '#ff5d62',
      content: [ 'c/cpp', 'javascript', 'python', 'bash' ]
    },
    {
      header: 'Hardware',
      color: '#7e9cd8',
      content: [ 'fpga', 'stm32', 'rasperry pi', 'circuit design' ]
    }
  ];
</script>

<div class="flex flex-wrap gap-16 justify-center">
  {#each modules as box}
    <div class="flex flex-col bg-[#2a2a37] p-4 rounded-md min-w-[225px] shadow-lg shadow-[#16161d]">
      <h1 class="text-3xl font-bold pb-4" style='color: {box.color}'>{box.header}</h1>
      <ul class="list-disc pl-4 ">
        {#each box.content as item}
          <li>{item}</li>
        {/each}
      </ul>
    </div>
  {/each}
</div>