<script>
  const uspItems = [
    {
      image: "https://kissenergy.nl/wp-content/uploads/2025/01/wijken-en-buurten-1-e1737374714301.jpg",
      title: "Warmte zonder warmteverlies",
      subtitle: "Geen distributieverliezen, maximale efficiëntie",
      description: "<b>KISS ENERGY</b> ZLT-warmtenet levert warmte, koude en warm tapwater met minimale distributieverliezen. De kleinschalige aanpak en nabijgelegen natuurlijke warmtebronnen garanderen efficiënte en duurzame levering."
    },
    {
      image: "https://kissenergy.nl/wp-content/uploads/2025/01/wijken-en-buurten.jpg",
      title: "Duurzaam zonder isolatieplicht",
      subtitle: "Verwarmen zonder eerst te isoleren",
      description: "Met het ZLT-warmtenet verwarmt <b>KISS ENERGY</b> woningen duurzaam, zelfs zonder isolatie. Dankzij innovatieve oplossingen zoals de FlowCalor geniet u van comfort en lagere energiekosten."
    },
    {
      image: "https://kissenergy.nl/wp-content/uploads/2025/01/woman-cooking-kitchen-scaled.jpg",
      title: "Lokaal en hernieuwbaar",
      subtitle: "Circulaire energie uit uw eigen omgeving",
      description: "<b>KISS ENERGY</b> benut natuurlijke warmtebronnen dichtbij uw woning, zoals lucht, water, grond en zon, voor volledig fossielvrije verwarming en koeling. Duurzaam en lokaal geproduceerd, voor elk huishouden in Nederland."
    }
  ];
</script>

<div class="max-w-[1400px] mx-auto p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mb-8">
  {#each uspItems as usp}
    <div class="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-md border w-[350px] border-white border-opacity-20 text-center transition-transform transform hover:-translate-y-2 hover:shadow-xl overflow-hidden">
      <img src={usp.image || "/placeholder.svg"} alt="KISS ENERGY" class="w-full h-52 object-cover rounded-t-2xl mb-5">
      <div class="text-xl font-semibold text-right px-5 mb-1 text-black">{usp.title}</div>
      <div class="text-sm font-semibold text-right px-5 mb-4 text-green-600">{usp.subtitle}</div>
      <div class="text-right font-xsmall text-gray-800 leading-relaxed px-5 pb-5">
        {@html usp.description}
      </div>
    </div>
  {/each}
</div>
