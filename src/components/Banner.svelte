<script>
    import Button from '@/components/Button.svelte';
    export let backgroundImage = "https://kissenergy.nl/wp-content/uploads/2025/01/wijken-en-buurten-1-e1737374714301.jpg";
    export let mainText = "Werken met onze energieconcepten?";

    export let overlayColor = "rgba(255, 100, 0, 0.4)"; 
    $: gradientStyle = `linear-gradient(to bottom, ${overlayColor}, ${overlayColor})`;
  </script>
  
  <section class="relative w-full h-[400px] overflow-hidden">
    <!-- Background image with sepia effect -->
    <div class="absolute inset-0 w-full h-full">
        <div class="absolute inset-0 w-full h-full">
            <img 
              src={backgroundImage || "/placeholder.svg"} 
              alt="Dutch houses with energy concepts" 
              class="w-full h-full object-cover object-center"
              style="filter: brightness(0.9) sepia(20%);"
            />
            <!-- Gradient overlay -->
            <div 
              class="absolute inset-0" 
              style="background-image: {gradientStyle};"
            ></div>
          </div>
    
    <!-- Content overlay -->
    <div class="relative z-10 flex flex-col items-center justify-center h-full w-full px-4 text-center">
      <h2 class="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8 max-w-3xl">
        {mainText}
      </h2>
      
      <Button text="Neem contact op" variant="success" link="/contact"/>
    </div>
  </section>