<script>
    import Sectionsustainable from '@/components/section-sustainable.svelte';
    import Sectionthreeblocks from '@/components/sectionthreeblocks.svelte';
    import Hero from '@/components/hero.svelte';
    import Banner from '@/components/Banner.svelte';
    import ImageCard from '@/components/ImageCard.svelte';
</script>
   
   <Hero 
   mainHeading="De duurzame energie leverancier voor jouw warmte, koude en elektriciteit"
   subHeading="Energie uit eigen lokale bronnen"
   backgroundImage="https://kissenergy.nl/wp-content/uploads/2025/01/husband-wife-spending-some-quality-time-together-scaled.jpg"
   />
   <Sectionsustainable />
   <Sectionthreeblocks />

   <div class="container mx-auto py-6 max-w-[1400px]">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 md:col-span-3">
        <ImageCard 
          imageUrl="https://kissenergy.nl/wp-content/uploads/2025/01/freepik-export-20250120102138yHyS.jpeg" 
          title="Energieconcepten" 
          subtitle="Onze" 
          buttonText="LEES MEER" 
          buttonLink="#" 
        />
      </div>
      
      <div class="col-span-12 md:col-span-6">
        <ImageCard 
          imageUrl="https://kissenergy.nl/wp-content/uploads/2025/01/woman-cooking-kitchen-scaled.jpg" 
          title="Oplossingen" 
          subtitle="Onze schaalbare" 
          buttonText="LEES MEER" 
          buttonLink="#" 
        />
      </div>
      
      <div class="col-span-12 md:col-span-3">
        <ImageCard 
          imageUrl="/placeholder.svg?height=400&width=300" 
          title="Oplossingen" 
          subtitle="Onze schaalbare" 
          buttonText="LEES MEER" 
          buttonLink="#" 
        />
      </div>
    </div>
  </div>

   <Banner mainText="Werken met onze energieconcepten?" />