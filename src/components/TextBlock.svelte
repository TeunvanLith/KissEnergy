<script>
    export let text = "";
    export let imageUrl = ""; // Optioneel
    export let imagePosition = "right"; // 'left', 'right'
    export let imageWidth = "w-1/3"; // Tailwind width class
    export let maxWidth = "max-w-4xl"; // Container max width
    export let textSize = "text-base";
    export let textColor = "text-gray-700 dark:text-gray-300";
    export let spacing = "my-8";
    export let className = "";
    
    // Controleer of er een afbeelding is
    $: hasImage = !!imageUrl;
  </script>
  
  <div class={`${maxWidth} ${spacing} ${className}`}>
    {#if hasImage}
      <div class={`flex flex-col ${imagePosition === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 items-center`}>
        <div class={`${imageWidth} flex-shrink-0 w-full md:${imageWidth}`}>
          <img 
            src={imageUrl || "/placeholder.svg"} 
            alt="Illustratie" 
            class="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        
        <div class="flex-grow">
          <div class={`${textSize} ${textColor} prose dark:prose-invert max-w-none`}>
            {#if typeof text === 'string'}
              <p>{text}</p>
            {:else}
              <slot>{text}</slot>
            {/if}
          </div>
        </div>
      </div>
    {:else}
      <div class={`${textSize} ${textColor} prose dark:prose-invert max-w-none`}>
        {#if typeof text === 'string'}
          <p>{text}</p>
        {:else}
          <slot>{text}</slot>
        {/if}
      </div>
    {/if}
  </div>