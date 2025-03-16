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

   <div class="container">
    <ImageCard 
      imageUrl="/placeholder.svg?height=400&width=300" 
      title="Energieconcepten" 
      subtitle="Onze" 
      buttonText="LEES MEER" 
      buttonLink="#" 
    />
    
    <ImageCard 
      imageUrl="/placeholder.svg?height=400&width=300" 
      title="Oplossingen" 
      subtitle="Onze schaalbare" 
      buttonText="LEES MEER" 
      buttonLink="#" 
    />
    
    <ImageCard 
      imageUrl="/placeholder.svg?height=400&width=300" 
      title="Oplossingen" 
      subtitle="Onze schaalbare" 
      buttonText="LEES MEER" 
      buttonLink="#" 
    />
  </div>

   <Banner mainText="Werken met onze energieconcepten?" />

   <style>
    .container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
      padding: 1.5rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    @media (max-width: 768px) {
      .container {
        grid-template-columns: 1fr;
      }
    }
  </style>