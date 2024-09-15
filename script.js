
  async function fetchPrice() {
      try {
          const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr');
          const data = await response.json();
          document.getElementById('price1').textContent = `₹${data.bitcoin.inr}`;
      } catch (error) {
          console.error('Error fetching price:', error);
          document.getElementById('price1').textContent = '₹479600';
      }
  }

  // Fetch price on page load
  fetchPrice();
  
  // Refresh price every 30 seconds
  setInterval(fetchPrice, 3000);

  


  async function fetchEthereumPriceInINR() {
      try {
          const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr');
          const data = await response.json();
          const ethPriceInINR = data.ethereum.inr;

          // Update the price and timestamp in the UI
          document.getElementById('eth-price').textContent = `₹${ethPriceInINR.toFixed(2)}`;
          const currentTime = new Date().toLocaleTimeString();
          document.getElementById('last-updated').textContent = `Last updated: ${currentTime}`;
      } catch (error) {
          console.error('Error fetching Ethereum price:', error);
          document.getElementById('eth-price').textContent = '₹194000';
      }
  }

  // Fetch Ethereum price in INR initially and then every 10 seconds
  fetchEthereumPriceInINR();
  setInterval(fetchEthereumPriceInINR, 3000);

// Fetch Dogecoin price in INR initially and then every 10 seconds

    

        async function fetchDogecoinPriceInINR() {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=inr');
                const data = await response.json();
                const dogePriceInINR = data.dogecoin.inr;

                // Update the price and timestamp in the UI
                document.getElementById('doge-price').textContent = `₹${dogePriceInINR.toFixed(2)}`;
                const currentTime = new Date().toLocaleTimeString();
                document.getElementById('last-updated').textContent = `Last updated: ${currentTime}`;
            } catch (error) {
                console.error('Error fetching Dogecoin price:', error);
                document.getElementById('doge-price').textContent = '₹7.87';
            }
        }

        // Fetch Dogecoin price in INR initially and then every 10 seconds
        fetchDogecoinPriceInINR();
        setInterval(fetchDogecoinPriceInINR, 3000); // Update every 10 seconds
       

        async function fetchLitecoinPriceInINR() {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=litecoin&vs_currencies=inr');
                const data = await response.json();
                const ltcPriceInINR = data.litecoin.inr;

                // Update the price and timestamp in the UI
                document.getElementById('ltc-price').textContent = `₹${ltcPriceInINR.toFixed(2)}`;
                const currentTime = new Date().toLocaleTimeString();
                document.getElementById('last-updated').textContent = `Last updated: ${currentTime}`;
            } catch (error) {
                console.error('Error fetching Litecoin price:', error);
                document.getElementById('ltc-price').textContent = '₹5370.89';
            }
        }

        // Fetch Litecoin price in INR initially and then every 10 seconds
        fetchLitecoinPriceInINR();
        setInterval(fetchLitecoinPriceInINR, 3000); // Update every 10 seconds
       
        async function fetchRipplePriceInINR() {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ripple&vs_currencies=inr');
                const data = await response.json();
                const xrpPriceInINR = data.ripple.inr;

                // Update the price and timestamp in the UI
                document.getElementById('xrp-price').textContent = `₹${xrpPriceInINR.toFixed(2)}`;
                const currentTime = new Date().toLocaleTimeString();
                document.getElementById('last-updated').textContent = `Last updated: ${currentTime}`;
            } catch (error) {
                console.error('Error fetching Ripple price:', error);
                document.getElementById('xrp-price').textContent = '₹44.26';
            }
        }

        // Fetch Ripple price in INR initially and then every 10 seconds
        fetchRipplePriceInINR();
        setInterval(fetchRipplePriceInINR, 3000); // Update every 10 seconds
                async function fetchMoneroPriceInINR() {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=monero&vs_currencies=inr');
                const data = await response.json();
                const xmrPriceInINR = data.monero.inr;

                // Update the price and timestamp in the UI
                document.getElementById('xmr-price').textContent = `₹${xmrPriceInINR.toFixed(2)}`;
                const currentTime = new Date().toLocaleTimeString();
                document.getElementById('last-updated').textContent = `Last updated: ${currentTime}`;
            } catch (error) {
                console.error('Error fetching Monero price:', error);
                document.getElementById('xmr-price').textContent = '₹14,263.77';
            }
        }

        // Fetch Monero price in INR initially and then every 10 seconds
        fetchMoneroPriceInINR();
        setInterval(fetchMoneroPriceInINR, 3000); // Update every 10 seconds
        window.addEventListener('load', () => {
            const div = document.querySelector('.fade-in-div');
            div.classList.add('fade-in');
        });
        