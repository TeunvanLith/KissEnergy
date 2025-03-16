<script>
	import { writable } from 'svelte/store';
	import { Users, Building2 } from 'lucide-svelte';
	import { goto } from '$app/navigation';

	// Store voor actieve sectie
	let activeSection = writable('particulieren');

	// Menu-items
	const menus = {
		particulieren: [
			{ name: 'Home', path: '/particulieren' },
			{ name: 'Over ons', path: '/over-ons' },
			{ name: 'Zelf regelen', path: '/zelf-regelen' },
			{ name: 'Contact', path: '/contact' }
		],
		partners: [
			{ name: 'Home', path: '/partners' },
			{ name: 'Ons concept', path: '/ons-concept' },
			{ name: 'Vastgoedeigenaren', path: '/vastgoedeigenaren' },
			{ name: 'Partners', path: '/partners' },
			{ name: 'Contact', path: '/contact' }
		]
	};

	// Functie om te wisselen tussen Particulieren en Partners
	function switchSection(section) {
		activeSection.set(section);
	}
</script>

<div class="w-full bg-black">
	<div class="max-w-[1400px] mx-auto">
		<!-- Bovenste navigatiebalk (Particulieren / Partners) -->
		<div class="flex text-white pt-4 px-6">
			<button 
				class="flex items-center gap-2 px-4 py-2 pb-4 rounded-t-lg border-b-4 border-yellow-500 transition-all duration-200 {$activeSection === 'particulieren' ? 'bg-yellow-400 text-black' : 'hover:bg-gray-800'}"
				on:click={() => switchSection('particulieren')}
			>
				<Users size={18} />
				<span>Particulieren</span>
			</button>
			<button 
				class="flex items-center gap-2 px-4 py-2 ml-2 rounded-t-lg border-b-4 border-green-600 transition-all duration-200 {$activeSection === 'partners' ? 'bg-green-500 text-black' : 'hover:bg-gray-800'}"
				on:click={() => switchSection('partners')}
			>
				<Building2 size={18} />
				<span>Partners</span>
			</button>
		</div>
	</div>
</div>

<!-- Dynamisch hoofdmenu -->
<div class="w-full bg-white shadow-md">
	<nav class="max-w-[1400px] mx-auto py-4 px-6 flex flex-wrap items-center justify-left">
		<!-- Logo toegevoegd -->
		<div class="flex items-center mr-6">
			<a href="/" class="flex items-center">
				<img src="/logo.png" alt="Bedrijfslogo" class="h-10 w-auto" />
			</a>
		</div>
		
		<!-- Menu items -->
		<div class="flex flex-wrap">
			{#each menus[$activeSection] as item, i}
				<a 
					href={item.path} 
					class="relative px-4 py-2 text-gray-800 font-medium hover:text-green-600 transition-colors duration-200 {i !== 0 ? 'ml-2 md:ml-6' : ''}"
				>
					{item.name}
					<span class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 transition-transform duration-200 origin-left hover:scale-x-100"></span>
				</a>
			{/each}
		</div>
	</nav>
</div>