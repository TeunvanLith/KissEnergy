<script>
    export let title = "";
    export let subtitle = "";
    export let align = "center"; // 'left', 'center', 'right'
    export let titleSize = "text-3xl md:text-4xl lg:text-5xl";
    export let subtitleSize = "text-lg md:text-xl";
    export let titleColor = "text-gray-900 dark:text-white";
    export let subtitleColor = "text-green-700 dark:text-gray-300";
    export let spacing = "mt-6";
    export let className = "";
    
    // Animatie effect
    let visible = false;
    
    // Wanneer component gemount wordt, trigger animatie
    import { onMount } from 'svelte';
    
    onMount(() => {
      setTimeout(() => {
        visible = true;
      }, 100);
    });
  </script>
  
  <div class={`${spacing} ${
    align === 'left' ? 'text-left' : 
    align === 'right' ? 'text-right' : 
    'text-center'
  } ${className}`}>
    {#if subtitle}
      <p 
        class={`${subtitleSize} ${subtitleColor} font-medium transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
      >
        {subtitle}
      </p>
    {/if}
    
    <h2 
      class={`${titleSize} ${titleColor} font-bold leading-tight transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
    >
      {title}
    </h2>
    
    <div class="w-20 h-1 bg-primary mt-4 mb-2 transition-all duration-700 delay-300 transform origin-left" 
      class:scale-x-0={!visible} 
      class:scale-x-100={visible}
      class:mx-auto={align === 'center'}
      class:ml-auto={align === 'right'}
    ></div>
  </div>