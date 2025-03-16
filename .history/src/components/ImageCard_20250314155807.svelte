<script>
    import Button from '@/components/Button.svelte';
    export let imageUrl = "";
    export let title = "";
    export let subtitle = "";
    export let buttonText = "LEES MEER";
    export let buttonLink = "#";
    export let buttonVariant = "success";
  </script>
  
  <div class="relative overflow-hidden rounded-lg cursor-pointer h-[400px] group">
    <img 
      src={imageUrl || "/placeholder.svg"} 
      alt={title} 
      class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    
    <div class="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50 transition-all duration-300 group-hover:from-black/40 group-hover:to-black/70"></div>
    
    <div class="absolute inset-0 flex flex-col justify-between p-8 z-10 text-center">
      <div class="text-white mt-40">
        {#if subtitle}
          <p class="text-base mb-1">{subtitle}</p>
        {/if}
        <h2 class="text-2xl font-bold leading-tight">{title}</h2>
      </div>
      <Button text={buttonText} variant={buttonVariant} link={buttonLink} className="max-w-small mx-auto"/>
      
    </div>
  </div>