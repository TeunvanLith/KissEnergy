<script>
  import Button from '@/components/Button.svelte';

  export let backgroundImage = "https://kissenergy.nl/wp-content/uploads/2025/01/husband-wife-spending-some-quality-time-together-scaled.jpg";
  export let mainHeading = "Duurzame Energie Oplossingen";
  export let subHeading = "Voor een groeneredddddddd toekomst";
  export let overlayOpacity = 20;
  export let textColor = "white"; 
  export let subColor = "lightgreen"; 

</script>

<section class="relative w-full max-w-none h-[70vh]">
  <!-- Background image -->
  <div class="absolute inset-0 w-full h-full">
    <img 
      src="{backgroundImage || '/placeholder.svg'}"
      alt="Hero background" 
      class="w-full h-full object-cover"
    />
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black" style="opacity: {overlayOpacity / 100};"></div>
  </div>

  <!-- Content container -->
  <div class="relative z-10 flex items-center h-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-left max-w-3xl">
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4" style="color: {textColor};">
        {mainHeading}
      </h1>
      <p class="text-xl sm:text-2xl md:text-3xl mb-8 font-medium" style="color: {subColor};">
        {subHeading}
      </p>
      
      <!-- Button -->
       <Button text="Ontdek onze oplossingen" variant="success" link="/contact"/>
    </div>
  </div>
</section>
