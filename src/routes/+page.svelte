<script>
  import { onMount } from 'svelte';
  import { user } from '$lib/stores/userStore';
  import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
  import { app } from '$lib/firebase';

  export let title = "Funnel Architecture";
  export let subtitle = "How Business Owners Are Turning More of Their Website Traffic into Sales with 'Funnel Architecture'";
  export let description = "The Method Behind Funnels That Have Been Seen On The Joe Rogan Experience, Won 2CC Awards, And Generated Millions Of Revenue Online...";

  let auth;
  let provider;


  onMount(() => {
    auth = getAuth(app);  // Initialize Firebase Auth
    provider = new GoogleAuthProvider();

    console.log($user)

    const script1 = document.createElement('script');
    script1.src = 'https://fast.wistia.com/embed/medias/6xyp0fula3.jsonp';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://fast.wistia.com/assets/external/E-v1.js';
    script2.async = true;
    document.body.appendChild(script2);

    script2.onload = () => {
      window._wq = window._wq || [];
      window._wq.push({
        id: "6xyp0fula3",
        onReady: function(video) {
          video.play();
        }
      });
    };
  });

  async function signIn() {
    try {
      const result = await signInWithPopup(auth, provider);
      $user = result.user;
      redirectToStripeCheckout();
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  }

  async function signOutUser() {
    try {
      await signOut(auth);
      user.set(null); // Clear the user state
    } catch (error) {
      console.error("Error signing out", error);
    }
  }

  async function redirectToStripeCheckout() {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: $user.email }),
    });
    const { url } = await response.json();
    window.location.href = url;
  }

  function openBillingPortal() {
    fetch('/api/create-billing-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: $user.email }),
    })
    .then(response => response.json())
    .then(({ url }) => {
      window.location.href = url;
    })
    .catch(error => console.error('Error opening billing portal:', error));
  }
</script>

<main class="min-h-screen flex flex-col items-center bg-white text-center">
  <!-- Header -->
  <header class="w-full bg-[#ffde6a] text-center py-2 font-normal hidden md:block">
    <p class="text-sm">
      Private beta testing is closing soon — start your trial to get access before <span class="font-semibold">August 31st</span>
    </p>
  </header>

  <!-- Logo Only on Small Screens -->
  <div class="text-xl font-bold md:hidden mt-4">HARMONY HIVE</div>

  <!-- Navigation -->
  <nav class="w-full flex justify-center items-center space-x-4 py-4 hidden md:flex">
    <div class="flex justify-between items-center w-full max-w-screen-xl px-8">
      <div class="text-xl font-bold">HARMONY HIVE</div>
      <div class="flex space-x-4 items-center text-sm">
        <a href="#" class="text-gray-700 hover:text-black">Why Us?</a>
        <a href="#" class="text-gray-700 hover:text-black">Case Studies</a>
        <a href="#" class="text-gray-700 hover:text-black">About</a>
        {#if $user}
          <div class="relative">
            <button on:click={() => document.getElementById('profileDropdown').classList.toggle('hidden')} class="flex items-center space-x-2">
              <img src={$user.photoURL} alt="Profile" class="w-8 h-8 rounded-full">
              <span>{$user.displayName}</span>
            </button>
            <div id="profileDropdown" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden">
              <a href="#" on:click={openBillingPortal} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Billing</a>
              <a href="#" on:click={signOutUser} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign Out</a>
            </div>
          </div>
        {:else}
          <button on:click={signIn} class="bg-black text-white font-medium text-sm px-[20px] py-[8px] border border-black rounded-[5px]">
            Start Free Trial
          </button>
        {/if}
      </div>
    </div>
  </nav>

  <!-- Title and Subtitle -->
  <section class="text-center my-8 px-4 md:px-0">
    <h1 class="text-4xl md:px-32 md:text-5xl/snug lg:px-0 lg:text-5xl/tight font-semibold max-w-4xl mx-auto mt-10 leading-snug">
      Private Music Teachers, This App Will Make <span class="bg-[#ffde6a] px-1">Practicing At Home A Habit </span>
    </h1>
    <h2 class="text-lg md:text-lg md:font-semibold lg:px-0 md:px-28 lg:text-xl mt-4 text-black max-w-3xl mx-auto leading-relaxed font-normal">
      This app is like a pesky shoulder angel nagging students to practice daily.
    </h2>
  </section>

  <!-- Video Embed -->
  <section class="px-4 w-full max-w-[850px] mx-auto">
    <div class="relative w-full pb-[56.25%]">
      <div class="wistia_responsive_wrapper absolute top-0 left-0 w-full h-full">
        <div class="wistia_embed wistia_async_6xyp0fula3 seo=true videoFoam=true w-full h-full relative">
          <div class="wistia_swatch absolute top-0 left-0 w-full h-full opacity-0 overflow-hidden transition-opacity duration-200">
            <img src="https://fast.wistia.com/embed/medias/6xyp0fula3/swatch" 
                 class="filter blur-sm w-full h-full object-contain" 
                 alt="" 
                 aria-hidden="true" 
                 onload="this.parentNode.style.opacity=1;" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Button -->
  <section class="my-6">
    <button on:click={signIn} class="bg-[#ffde6a] text-black text-lg leading-normal px-20 py-3 font-semibold border border-black rounded-md shadow-[2.5px_2.5px_0px_0px_rgba(0,0,0,1)]">
      Start Your Free 14-Day Trial
    </button>
  </section>

  <section>
    <img src="/hivescreenshot.png" alt="s"/>
  </section>

  <!-- How It Works -->
  <section class="w-full bg-[#fff9e0] py-16">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl font-semibold mb-12">How Harmony Hive Works</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-[#ffde6a] p-6 rounded-lg shadow">
          <h3 class="text-xl font-semibold mb-4">1. Upload Lessons</h3>
          <p>Easily create and upload your music lessons through our intuitive web interface.</p>
        </div>
        <div class="bg-[#ffde6a] p-6 rounded-lg shadow">
          <h3 class="text-xl font-semibold mb-4">2. Student Access</h3>
          <p>Students instantly access your lessons on their mobile devices, anytime and anywhere.</p>
        </div>
        <div class="bg-[#ffde6a] p-6 rounded-lg shadow">
          <h3 class="text-xl font-semibold mb-4">3. Practice & Progress</h3>
          <p>Smart reminders encourage consistent practice, while you track their progress through detailed analytics.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- App Screenshots Section -->
  <section class="w-full py-16 bg-[#fff9e0]">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl font-semibold mb-12">See Harmony Hive in Action</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-6 rounded-lg">
          <img src="clair.png" alt="Mobile app screenshot 1" class="w-full h-auto rounded-lg mb-4">
          <p class="text-lg font-semibold">Easy-to-use mobile interface for students</p>
        </div>
        <div class="p-6 rounded-lg">
          <img src="clairde.png" alt="Mobile app screenshot 2" class="w-full h-auto rounded-lg mb-4">
          <p class="text-lg font-semibold">Access to sheet music and practice tracks</p>
        </div>
      </div>

      <div class="p-6 rounded-lg">
        <img src="desktop.png" alt="Desktop app screenshot" class="w-full h-auto rounded-lg mb-4">
        <p class="text-lg font-semibold">Powerful desktop interface for teachers</p>
      </div>

    </div>
  </section>

  <!-- Additional Features -->
  <section class="w-full py-16">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl font-semibold mb-12">Other Cool Features</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold mb-4">Lesson Scheduling</h3>
          <p>Easily manage your teaching schedule and let students view upcoming lessons.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold mb-4">In-App Messaging</h3>
          <p>Communicate directly with students or parents through our secure messaging system.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold mb-4">Progress Analytics</h3>
          <p>Track student engagement and progress with detailed reports and insights.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="mt-16 px-4 bg-[#ffde6a] py-16 w-full">
    <h2 class="text-3xl font-semibold mb-6">Ready to Transform Your Music Teaching?</h2>
    <p class="text-xl mb-8">Join our beta testing program and be among the first to experience Harmony Hive!</p>
    <button on:click={signIn} class="bg-black text-white text-lg px-20 py-3 font-semibold rounded-md shadow-lg hover:bg-gray-800 transition duration-300">
      Start Your Free 14-Day Trial
    </button>
    <p class="mt-4 text-sm">Get Started In Less Than 60 Seconds. Cancel anytime.</p>
  </section>

  <!-- Footer -->
  <footer class="w-full bg-gray-100 py-8">
    <div class="max-w-6xl mx-auto px-4 flex justify-between items-center">
      <p>&copy; 2024 Harmony Hive. All rights reserved.</p>
      <div class="flex space-x-4">
        <a href="#" class="text-gray-600 hover:text-black">Privacy Policy</a>
        <a href="#" class="text-gray-600 hover:text-black">Terms of Service</a>
        <a href="#" class="text-gray-600 hover:text-black">Contact Us</a>
      </div>
    </div>
  </footer>
</main>

<style>
  @media (max-width: 768px) {
    nav {
      display: none;
    }
    header {
      display: none;
    }
    .nav-logo {
      display: block;
    }
  }
</style>