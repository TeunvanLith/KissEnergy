<script>
    import { Phone, Mail, MapPin, Linkedin } from 'lucide-svelte';
  </script>
  
  <footer class="bg-[#151923] text-white py-16">
    <div class="max-w-[1400px] mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="space-y-4">
          <div>
            <h2 class="text-2xl font-bold">KISS ENERGY</h2>
            <p class="text-green-500 font-medium ml-2">vertrouwd dichtbij</p>
          </div>
          <p class="text-gray-300 max-w-xs">
            Duurzame energieoplossingen voor woningen en appartementen in heel Nederland.
          </p>
        </div>
  
        <!-- Contact -->
        <div class="space-y-4">
          <h3 class="text-xl font-semibold mb-6">Contact</h3>
          <div class="space-y-4">
            <a href="tel:0413870067" class="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
              <Phone size={18} />
              <span>0413 870 067</span>
            </a>
            <a href="mailto:info@kissenergy.nl" class="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
              <Mail size={18} />
              <span>info@kissenergy.nl</span>
            </a>
            <div class="flex items-center gap-3 text-gray-300">
              <MapPin size={18} />
              <span>Frisselsteinstraat 5, Veghel</span>
            </div>
          </div>
        </div>
  
        <!-- Links -->
        <div class="space-y-4">
          <h3 class="text-xl font-semibold mb-6">Links</h3>
          <div class="space-y-3">
            <a href="/energieconcepten" class="block text-green-500 hover:text-green-400 transition-colors">
              Energieconcepten
            </a>
            <a href="/over-ons" class="block text-green-500 hover:text-green-400 transition-colors">
              Over ons
            </a>
            <a href="/contact" class="block text-green-500 hover:text-green-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
  
        <!-- Social -->
        <div class="space-y-4">
          <h3 class="text-xl font-semibold mb-6">Volg ons</h3>
          <a 
            href="https://linkedin.com/company/kiss-energy" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <Linkedin size={20} />
            <span class="sr-only">Volg ons op LinkedIn</span>
          </a>
        </div>
      </div>
  
      <!-- Copyright -->
      <div class="mt-16 pt-8 border-t border-gray-800">
        <p class="text-center text-gray-400 text-sm">
          © 2025 Kiss Energy. Alle rechten voorbehouden.
        </p>
      </div>
    </div>
  </footer>