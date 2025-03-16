<script>
    export let backgroundImage = "/placeholder.svg?height=200&width=1200";
    export let overlayColor = "bg-primary/40"; // Tailwind kleur met opacity
    export let textColor = "text-white";
    export let alignment = "center"; // 'left', 'center', 'right'
    export let class = "";
    
    // Parallax effect state
    let y;
  </script>
  
  <svelte:window bind:scrollY={y} />
  
  <div 
    class="relative overflow-hidden {class}"
    style="max-height: 200px; min-height: 150px;"
  >
    <!-- Parallax background -->
    <div 
      class="absolute inset-0 w-full h-full"
      style="transform: translateY({y * 0.2}px); height: calc(100% + 50px);"
    >
      <img 
        src={backgroundImage || "/placeholder.svg"} 
        alt="Hero background" 
        class="w-full h-full object-cover"
      />
    </div>
    
    <!-- Overlay with gradient -->
    <div class="absolute inset-0 {overlayColor} bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
    
    <!-- Content -->
    <div class="relative h-full max-h-[200px] container mx-auto px-4 py-8 flex items-center">
      <div class={`${textColor} ${
        alignment === 'left' ? 'text-left mr-auto' : 
        alignment === 'right' ? 'text-right ml-auto' : 
        'text-center mx-auto'
      }`}>
        <slot />
      </div>
    </div>
    
    <!-- Decorative wave effect at bottom -->
    <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
      <svg 
        class="relative block w-full h-[10px] text-white" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
      >
        <path 
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
          class="fill-current"
        ></path>
      </svg>
    </div>
  </div>