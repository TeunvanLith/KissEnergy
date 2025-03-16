<script>
    import { onMount, createEventDispatcher } from 'svelte';
    
    // Props voor de tabs
    export let tabs = [
      { id: 'tab1', label: 'Tab 1', content: 'Inhoud van tab 1' },
      { id: 'tab2', label: 'Tab 2', content: 'Inhoud van tab 2' },
      { id: 'tab3', label: 'Tab 3', content: 'Inhoud van tab 3' }
    ];
    
    export let activeTab = tabs[0].id;
    export let tabStyle = 'underline'; // 'underline', 'pills', 'buttons'
    export let primaryColor = 'bg-primary text-primary-foreground';
    export let secondaryColor = 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
    export let activeColor = 'text-primary';
    export let inactiveColor = 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200';
    export let className = '';
    
    // Indicator voor de actieve tab (voor underline style)
    let indicatorStyle = '';
    let tabsContainer;
    let activeTabElement;
    
    // Event dispatcher voor tab veranderingen
    const dispatch = createEventDispatcher();
    
    // Functie om van tab te wisselen
    function setActiveTab(tabId) {
      activeTab = tabId;
      dispatch('tabChange', { tabId });
      
      // Update de indicator positie (voor underline style)
      if (tabStyle === 'underline') {
        updateIndicator();
      }
    }
    
    // Update de indicator positie
    function updateIndicator() {
      if (!tabsContainer || !activeTabElement) return;
      
      // Wacht op DOM update
      setTimeout(() => {
        const activeEl = tabsContainer.querySelector(`[data-tab="${activeTab}"]`);
        if (activeEl) {
          const { offsetLeft, offsetWidth } = activeEl;
          indicatorStyle = `left: ${offsetLeft}px; width: ${offsetWidth}px`;
        }
      }, 0);
    }
    
    // Update indicator bij mount en window resize
    onMount(() => {
      updateIndicator();
      window.addEventListener('resize', updateIndicator);
      
      return () => {
        window.removeEventListener('resize', updateIndicator);
      };
    });
    
    // Actieve tab content
    $: activeContent = tabs.find(tab => tab.id === activeTab)?.content || '';
  </script>
  
  <div class="tabs-component {className}">
    <!-- Tabs navigatie -->
    <div class="relative" bind:this={tabsContainer}>
      <div class={`flex ${tabStyle === 'pills' || tabStyle === 'buttons' ? 'gap-2' : 'border-b border-gray-200 dark:border-gray-700'}`}>
        {#each tabs as tab}
          <button
            data-tab={tab.id}
            class={`
              py-2 px-4 font-medium transition-all duration-200 
              ${tabStyle === 'underline' ? 'border-b-2 border-transparent' : ''}
              ${tabStyle === 'pills' ? 'rounded-full' : ''}
              ${tabStyle === 'buttons' ? 'rounded-md' : ''}
              ${activeTab === tab.id ? 
                (tabStyle === 'underline' ? `${activeColor} border-b-2 border-primary` : 
                 tabStyle === 'pills' || tabStyle === 'buttons' ? primaryColor : '') : 
                (tabStyle === 'pills' || tabStyle === 'buttons' ? secondaryColor : inactiveColor)
              }
            `}
            on:click={() => setActiveTab(tab.id)}
            bind:this={activeTab === tab.id ? activeTabElement : null}
          >
            {tab.label}
          </button>
        {/each}
      </div>
      
      <!-- Animated indicator (alleen voor underline style) -->
      {#if tabStyle === 'underline'}
        <div 
          class="absolute bottom-0 h-0.5 bg-primary transition-all duration-300 ease-in-out" 
          style={indicatorStyle}
        ></div>
      {/if}
    </div>
    
    <!-- Tab content met animatie -->
    <div class="mt-4 relative overflow-hidden">
      <div 
        class="tab-content prose dark:prose-invert max-w-none transition-all duration-300 ease-in-out"
        style="opacity: 1; transform: translateY(0);"
      >
        {#if typeof activeContent === 'string'}
          <p>{activeContent}</p>
        {:else}
          <slot name={activeTab}>
            <!-- Fallback naar string content als er geen slot is -->
            <p>{activeContent}</p>
          </slot>
        {/if}
      </div>
    </div>
  </div>