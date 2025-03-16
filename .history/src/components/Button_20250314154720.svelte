<script>
    // Props for the button
    export let text = "Button";
    export let link = "";
    export let variant = "primary";
    
    // Define color styles based on variant
    const getVariantClasses = () => {
      switch (variant) {
        case "primary":
          return "bg-blue-600 hover:bg-blue-700 text-white";
        case "secondary":
          return "bg-gray-600 hover:bg-gray-700 text-white";
        case "success":
          return "bg-green-600 hover:bg-green-700 text-white";
        case "danger":
          return "bg-red-600 hover:bg-red-700 text-white";
        default:
          return "bg-blue-600 hover:bg-blue-700 text-white";
      }
    };
    
    const baseClasses = "px-4 py-2 rounded-r-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  </script>
  
  {#if link}
    <a 
      href={link} 
      class="{baseClasses} {getVariantClasses()}"
    >
      {text}
    </a>
  {:else}
    <button 
      type="button"	
      class="{baseClasses} {getVariantClasses()}">
      {text}
    </button>
  {/if}