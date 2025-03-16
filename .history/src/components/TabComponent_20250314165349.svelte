<script>
    import Tabs from './Tabs.svelte';
    
    const myTabs = [
      { id: 'over', label: 'Over ons', content: 'Wij zijn een innovatief bedrijf dat zich richt op...' },
      { id: 'diensten', label: 'Diensten', content: 'We bieden verschillende diensten aan zoals...' },
      { id: 'contact', label: 'Contact', content: 'Neem contact met ons op via...' }
    ];
  </script>
  
  <Tabs tabs={myTabs} activeTab="over" />