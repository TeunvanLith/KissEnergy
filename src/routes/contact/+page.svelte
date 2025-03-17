<script>
    import HeroImage from '@/components/HeroImage.svelte';
    import PageHeading from '@/components/PageHeading.svelte';

    import { enhance } from '$app/forms';
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
  
    // Form state
    const formState = writable({
      success: false,
      errors: {},
      submitting: false
    });
  
    // Form data
    let name = '';
    let email = '';
    let subject = '';
    let message = '';
    let timer;
  
    // Handle form submission with enhance
    function handleSubmit() {
      $formState.submitting = true;
      
      return async ({ result, update }) => {
        if (result.type === 'success') {
          $formState.success = true;
          $formState.errors = {};
          // Reset form
          name = '';
          email = '';
          subject = '';
          message = '';
          
          // Set timeout to hide success message
          if (timer) clearTimeout(timer);
          timer = setTimeout(() => {
            $formState.success = false;
          }, 5000);
        } else if (result.type === 'failure') {
          $formState.errors = result.data?.errors || {};
        }
        
        $formState.submitting = false;
        await update();
      };
    }
  
    // Clean up any timers when component is destroyed
    onMount(() => {
      return () => {
        if (timer) clearTimeout(timer);
      };
    });
  </script>
  
<HeroImage 
imageUrl="https://procalor.nl/wp-content/uploads/2024/09/Sfeer-ProCalor.jpg" 
bottomEffect="wave" 
effectColor="green"
height="300px"
/>

<main class="max-w-[1400px] mx-auto">
  
    <PageHeading 
  title="Neem contact met ons op" 
  subtitle="Wij staan voor u klaar" 
  align="left"
  className="mt-8"
/>

</main>
  <div class="container mx-auto px-4 py-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <!-- Linker kolom met tekst -->
      <div class="text-right lg:text-right">
        <h1 class="text-4xl font-bold mb-2 text-gray-900">Dé duurzame energieleverancier</h1>
        <p class="text-green-500 text-xl mb-8">Voor warmte, koude & elektriciteit</p>
        
        <div class="space-y-6 text-gray-700">
          <p class="leading-relaxed">
            KISS ENERGY levert innovatieve oplossingen voor warmte, koude en warm tapwater via haar zelfontwikkelde ZLT-warmtenet, dat warmte haalt uit natuurlijke bronnen in de directe omgeving. Het bedrijf minimaliseert distributieverliezen door energie lokaal in woningen te produceren met eigen elektriciteit.
          </p>
          
          <p class="leading-relaxed">
            Met meer dan 40 jaar ervaring richt <span class="font-semibold">KISS ENERGY</span> zich op rendabele energiebesparingstechnieken en streeft naar een kleine ecologische voetafdruk, gekoppeld aan economisch verantwoorde investeringen. Hun missie is om verduurzaming simpel te maken voor woningeigenaren en eenvoudig te houden in beheer.
          </p>
        </div>
      </div>
      
      <!-- Rechter kolom met contactformulier -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold mb-6 text-gray-800">Contact Formulier</h2>
        
        {#if $formState.success}
          <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4" role="alert">
            <p>Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.</p>
          </div>
        {/if}
        
        <form method="POST" action="?/contact" use:enhance={handleSubmit}>
          <div class="mb-4">
            <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Naam</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              bind:value={name}
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              class:border-red-500={$formState.errors.name}
            />
            {#if $formState.errors.name}
              <p class="text-red-500 text-xs mt-1">{$formState.errors.name}</p>
            {/if}
          </div>
          
          <div class="mb-4">
            <label for="email" class="block text-gray-700 text-sm font-bold mb-2">E-mail</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              bind:value={email}
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              class:border-red-500={$formState.errors.email}
            />
            {#if $formState.errors.email}
              <p class="text-red-500 text-xs mt-1">{$formState.errors.email}</p>
            {/if}
          </div>
          
          <div class="mb-4">
            <label for="subject" class="block text-gray-700 text-sm font-bold mb-2">Onderwerp</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              bind:value={subject}
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              class:border-red-500={$formState.errors.subject}
            />
            {#if $formState.errors.subject}
              <p class="text-red-500 text-xs mt-1">{$formState.errors.subject}</p>
            {/if}
          </div>
          
          <div class="mb-4">
            <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Bericht</label>
            <textarea 
              id="message" 
              name="message" 
              bind:value={message}
              rows="5" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              class:border-red-500={$formState.errors.message}
            ></textarea>
            {#if $formState.errors.message}
              <p class="text-red-500 text-xs mt-1">{$formState.errors.message}</p>
            {/if}
          </div>
          
          <button 
            type="submit" 
            class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
            disabled={$formState.submitting}
          >
            {#if $formState.submitting}
              <span class="inline-block animate-spin mr-2">↻</span>Verzenden...
            {:else}
              Verzenden
            {/if}
          </button>
        </form>
      </div>
    </div>
  </div>
