<script>
    export let imageUrl = "";
    export let title = "";
    export let subtitle = "";
    export let buttonText = "LEES MEER";
    export let buttonLink = "#";
    export let isWide = false;
  </script>
  
  <div class="relative overflow-hidden rounded-lg cursor-pointer h-[400px] group">
    <img 
      src={imageUrl || "/placeholder.svg"} 
      alt={title} 
      class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    
    <div class="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50 transition-all duration-300 group-hover:from-black/40 group-hover:to-black/70"></div>
    
    <div class="absolute inset-0 flex flex-col justify-between p-8 z-10">
      <div class="text-white">
        {#if subtitle}
          <p class="text-base mb-1">{subtitle}</p>
        {/if}
        <h2 class="text-2xl font-bold leading-tight">{title}</h2>
      </div>
      
      <a 
        href={buttonLink} 
        class="inline-block bg-white text-black px-6 py-2 rounded font-bold text-sm transition-colors hover:bg-gray-100"
      >
        {buttonText}
      </a>
    </div>
  </div>