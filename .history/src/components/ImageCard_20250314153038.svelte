<script>
    export let imageUrl = "";
    export let title = "";
    export let subtitle = "";
    export let buttonText = "LEES MEER";
    export let buttonLink = "#";
  </script>
  
  <div class="card">
    <div class="card-content">
      <div class="text-content">
        {#if subtitle}
          <p class="subtitle">{subtitle}</p>
        {/if}
        <h2 class="title">{title}</h2>
      </div>
      <a href={buttonLink} class="button">{buttonText}</a>
    </div>
    <div class="overlay"></div>
    <img src={imageUrl || "/placeholder.svg"} alt={title} />
  </div>
  
  <style>
    .card {
      position: relative;
      width: 100%;
      height: 400px;
      border-radius: 8px;
      overflow: hidden;
      cursor: pointer;
    }
  
    .card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5));
      transition: background 0.3s ease;
    }
  
    .card:hover .overlay {
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7));
    }
  
    .card:hover img {
      transform: scale(1.05);
    }
  
    .card-content {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 2rem;
      box-sizing: border-box;
      z-index: 2;
    }
  
    .text-content {
      color: white;
    }
  
    .subtitle {
      font-size: 1rem;
      margin: 0 0 0.5rem 0;
    }
  
    .title {
      font-size: 1.8rem;
      font-weight: bold;
      margin: 0;
      line-height: 1.2;
    }
  
    .button {
      display: inline-block;
      background-color: white;
      color: black;
      padding: 0.6rem 1.5rem;
      border-radius: 4px;
      text-decoration: none;
      font-weight: bold;
      font-size: 0.9rem;
      transition: background-color 0.3s ease;
      align-self: flex-start;
    }
  
    .button:hover {
      background-color: #f0f0f0;
    }
  </style>