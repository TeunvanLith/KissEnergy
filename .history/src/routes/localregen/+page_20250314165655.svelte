<script>
    import PageHeading from '@/components/PageHeading.svelte';
    import ImageComponent from '@/components/ImageComponent.svelte';
    import HeroImage from '@/components/HeroImage.svelte';

    const myTabs = [
      { id: 'over', label: 'Over ons', content: 'Wij zijn een innovatief bedrijf dat zich richt op...' },
      { id: 'diensten', label: 'Diensten', content: 'We bieden verschillende diensten aan zoals...' },
      { id: 'contact', label: 'Contact', content: 'Neem contact met ons op via...' }
    ];
</script>

<HeroImage 
  imageUrl="https://procalor.nl/wp-content/uploads/2024/09/Sfeer-ProCalor.jpg" 
  bottomEffect="wave" 
  effectColor="green"
  height="300px"
/>


<main class="max-w-[1400px] mx-auto">
    <PageHeading 
  title="Het Local Regen Net" 
  subtitle="Wat wij voor u kunnen betekenen" 
  align="left"
  className="mt-8"
/>
<p class="max-w-[800px] pb-8">
Bij Kiss Energy geloven we in slimme en schaalbare energieoplossingen. Local ReGen Net is hét innovatieve zeer lage temperatuur (ZLT) warmtenet dat duurzame warmte toegankelijk maakt voor iedereen. Dit modulaire en flexibele netwerk benut optimaal lokale, hernieuwbare warmtebronnen zoals restwarmte, bodem- en aquathermie, waardoor fossiele brandstoffen overbodig worden.
Dankzij de schaalbare opzet kunnen gemeenten, woningcorporaties en projectontwikkelaars eenvoudig starten met een compacte warmtevoorziening en deze stapsgewijs uitbreiden naarmate de vraag groeit. Dit maakt het Local ReGen Net niet alleen toekomstbestendig, maar ook kostenefficiënt, doordat investeringen in duurzame infrastructuur gefaseerd kunnen worden uitgevoerd.
Het lage temperatuursysteem zorgt voor een efficiënte warmteverdeling, waardoor zowel bestaande als nieuwe gebouwen eenvoudig kunnen worden aangesloten. Daarnaast helpt het Local ReGen Net bij het aanpakken van netcongestie door warmte slim op te slaan en te verdelen, waardoor het elektriciteitsnet wordt ontlast en bewoners profiteren van lagere energiekosten.
Met het Local ReGen Net zetten we samen de stap naar een duurzame, fossielvrije toekomst. Door energie slim, efficiënt en flexibel in te zetten, maken we wijken en steden klaar voor de warmtevoorziening van morgen. 
</p>
<ImageComponent 
  src="https://procalor.nl/wp-content/uploads/2025/03/Bron-Concept-Kiss-Energy2.png" 
  alt="Local ReGen Net" 
  caption="Local ReGen Net: slimme en schaalbare warmteoplossingen" 
  width="w-full" 
  height="h-auto" 
  objectFit="object-cover" 
  rounded="rounded-lg" 
  shadow="shadow-md" 
  overlay={false} 
  overlayColor="bg-black/30" 
  hoverEffect={false} 
  aspectRatio="aspect-16/9"     
  />

</main>