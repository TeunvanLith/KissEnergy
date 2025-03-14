<script>
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    
    let showBanner = false;
    
    // Function to handle accepting cookies
    function acceptCookies() {
      if (browser) {
        // Set cookie with user consent
        document.cookie = "cookie_consent=accepted; max-age=31536000; path=/; SameSite=Lax";
        showBanner = false;
      }
    }
    
    // Function to handle declining cookies
    function declineCookies() {
      if (browser) {
        // Set cookie with user preference to decline
        document.cookie = "cookie_consent=declined; max-age=31536000; path=/; SameSite=Lax";
        showBanner = false;
      }
    }
    
    // Check if user has already made a choice
    onMount(() => {
      if (browser) {
        const consentCookie = document.cookie
          .split('; ')
          .find(row => row.startsWith('cookie_consent='));
        
        // Show banner if no consent cookie found
        showBanner = !consentCookie;
      }
    });
  </script>
  
  {#if showBanner}
    <div class="cookie-banner">
      <div class="cookie-content">
        <h2>Cookie Toestemming</h2>
        <p>
          Deze website gebruikt cookies om uw ervaring te verbeteren. 
          U kunt kiezen welke cookies u wilt accepteren.
        </p>
        <div class="cookie-buttons">
          <button class="accept-button" on:click={acceptCookies}>
            Accepteren
          </button>
          <button class="decline-button" on:click={declineCookies}>
            Weigeren
          </button>
        </div>
      </div>
    </div>
  {/if}
  
  <style>
    .cookie-banner {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #fff;
      box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
      z-index: 1000;
      padding: 1rem;
      border-top: 1px solid #eee;
    }
    
    .cookie-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem;
    }
    
    h2 {
      margin-top: 0;
      font-size: 1.5rem;
    }
    
    .cookie-buttons {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }
    
    button {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
    }
    
    .accept-button {
      background-color: #4CAF50;
      color: white;
    }
    
    .decline-button {
      background-color: #f1f1f1;
      color: #333;
    }
  </style>