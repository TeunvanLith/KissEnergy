<script>
    export let src = "/placeholder.svg";
    export let alt = "Afbeelding";
    export let width = "w-full";
    export let height = "h-auto";
    export let objectFit = "object-cover";
    export let rounded = "rounded-lg";
    export let shadow = "shadow-md";
    export let caption = "";
    export let overlay = false;
    export let overlayColor = "bg-black/30";
    export let hoverEffect = true;
    export let aspectRatio = ""; // bijv. "aspect-video", "aspect-square"
    export let className = "";
    
    // Lazy loading
    let loaded = false;
    let imageElement;
    
    function onLoad() {
      loaded = true;
    }
  </script>
  
  <figure class={`relative overflow-hidden ${aspectRatio} ${width} ${className} ${hoverEffect ? 'group' : ''}`}>
    <!-- Placeholder/skeleton -->
    {#if !loaded}
      <div class="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
    {/if}
    
    <!-- Actual image -->
    <img 
      bind:this={imageElement}
      src={src || "/placeholder.svg"} 
      {alt} 
      class={`${height} ${width} ${objectFit} ${rounded} ${shadow} transition-all duration-500 ${
        hoverEffect ? 'group-hover:scale-105' : ''
      } ${loaded ? 'opacity-100' : 'opacity-0'}`}
      on:load={onLoad}
    />
    
    <!-- Optional overlay -->
    {#if overlay}
      <div class={`absolute inset-0 ${overlayColor} ${
        hoverEffect ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
      } transition-opacity duration-300`}></div>
    {/if}
    
    <!-- Optional caption -->
    {#if caption}
      <figcaption class="mt-2 text-sm text-gray-600 dark:text-gray-400 italic">
        {caption}
      </figcaption>
    {/if}
  </figure>