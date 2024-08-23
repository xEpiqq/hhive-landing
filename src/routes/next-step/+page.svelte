<script>
  import { user } from '$lib/stores/userStore';
  import { onMount } from 'svelte';
  import { getAuth, GoogleAuthProvider } from 'firebase/auth';
  import { app } from '$lib/firebase';

  let auth;
  let provider;

  onMount(() => {
    auth = getAuth(app);  // Initialize Firebase Auth
    provider = new GoogleAuthProvider();

    console.log($user);

    const script1 = document.createElement('script');
    script1.src = 'https://fast.wistia.com/embed/medias/vu9je2rt4p.jsonp';  // Updated video ID
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://fast.wistia.com/assets/external/E-v1.js';
    script2.async = true;
    document.body.appendChild(script2);

    script2.onload = () => {
      window._wq = window._wq || [];
      window._wq.push({
        id: "vu9je2rt4p",  // Updated video ID
        onReady: function(video) {
          video.play();
        }
      });
    };
  });
</script>

<main class="min-h-screen flex flex-col items-center bg-white text-center">
  <!-- Header -->
  <header class="w-full bg-[#ffde6a] text-center py-2 font-normal hidden md:block">
    <p class="text-sm">
      Welcome to the private beta for harmony hive... <span class="font-semibold">lets begin</span>
    </p>
  </header>

  <!-- Logo Only on Small Screens -->
  <div class="text-xl font-bold md:hidden mt-4">HARMONY HIVE</div>

  <!-- Title and Subtitle -->
  <section class="text-center my-8 px-4 md:px-0">
    <h1 class="text-4xl md:px-32 md:text-5xl/snug lg:px-0 lg:text-5xl/tight font-semibold max-w-4xl mx-auto mt-10 leading-snug">
      <span class="bg-[#ffde6a] px-1"> {$user?.displayName} You Absolute Legend </span>
    </h1>
  </section>

  <!-- Video Embed -->
  <section class="px-4">
    <div class="relative w-[700px] pb-[56.25%] mx-auto">
      <div class="wistia_responsive_wrapper absolute top-0 left-0 w-full h-full">
        <div class="wistia_embed wistia_async_vu9je2rt4p seo=true videoFoam=true w-full h-full relative">
          <div class="wistia_swatch absolute top-0 left-0 w-full h-full opacity-0 overflow-hidden transition-opacity duration-200">
            <img src="https://fast.wistia.com/embed/medias/vu9je2rt4p/swatch" 
                 class="filter blur-sm w-full h-full object-contain" 
                 alt="" 
                 aria-hidden="true" 
                 onload="this.parentNode.style.opacity=1;" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Information -->
  <section class="w-full max-w-4xl mx-auto mt-10 space-y-6 px-4 md:px-0">

    <!-- Next Steps -->
    <div class="bg-white text-black p-6 rounded-md border border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
      <h2 class="text-xl font-semibold">1. Teacher Portal Where You Upload Music!!</h2>
      <p><a href="https://myharmonyhive.com" target="_blank" rel="noopener noreferrer" class="underline">myharmonyhive.com</a> — bookmark it.</p>
    </div>
    <div class="bg-white text-black p-6 rounded-md border border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
      <h2 class="text-xl font-semibold">2. Download "Harmony Hive"</h2>
      <p>
        Available on <a href="https://play.google.com/store/apps/details?id=com.xepiq.harmonyhive&hl=en_US" target="_blank" rel="noopener noreferrer" class="underline">Google Play</a> and the 
        <a href="https://apps.apple.com/us/app/harmonyhive/id6504790247?platform=iphone" target="_blank" rel="noopener noreferrer" class="underline">Apple Store</a>.
      </p>
    </div>
    <div class="bg-white text-black p-6 rounded-md border border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
      <h2 class="text-xl font-semibold">3. Join our private beta testing group on Discord</h2>
      <p><a href="https://discord.gg/VEkBZb9a5P" target="_blank" rel="noopener noreferrer" class="underline">Join the Discord group</a></p>
    </div>

    <div class="bg-white text-black p-6 rounded-md border border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
      <h2 class="text-xl font-semibold">Spam me multiple times per day if you wish</h2>
      <p>
        Save my contact info: <strong>385-343-0571</strong> | <strong>jaydencrowther@gmail.com</strong>
      </p>
    </div>
  </section>

  <!-- CTA Button -->
  <section class="my-6">
    <a href="https://myharmonyhive.com" target="_blank" rel="noopener noreferrer" class="underline">
    <button class="bg-[#ffde6a] text-black text-lg leading-normal px-20 py-3 font-semibold border border-black rounded-md shadow-[2.5px_2.5px_0px_0px_rgba(0,0,0,1)]">
      Go To Web App (Teacher Portal)
    </button>
    </a>
  </section>
</main>
