<script>
	import '../app.css';
	import Cookies from '../components/Cookies.svelte';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<Header />
<slot />
<Footer />

<Cookies />