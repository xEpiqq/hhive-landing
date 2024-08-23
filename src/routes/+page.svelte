<script>
  import { onMount } from 'svelte';

  export let title = "Funnel Architecture";
  export let subtitle = "How Business Owners Are Turning More of Their Website Traffic into Sales with 'Funnel Architecture'";
  export let description = "The Method Behind Funnels That Have Been Seen On The Joe Rogan Experience, Won 2CC Awards, And Generated Millions Of Revenue Online...";

  onMount(() => {
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
          video.play(); // Autoplay the video
        }
      });
    };
  });
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
          <button class="bg-black text-white font-medium text-sm px-[20px] py-[8px] border border-black rounded-[5px]">
            Start Free Trial
          </button>
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
    <section class="px-4">
      <div class="relative w-[850px] pb-[56.25%] mx-auto">
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
      <button class="bg-[#ffde6a] text-black text-lg leading-normal px-20 py-3 font-semibold border border-black rounded-md shadow-[2.5px_2.5px_0px_0px_rgba(0,0,0,1)]">
        Start Your Free 14-Day Trial
      </button>
    </section>
    <!-- New content below -->
    <!-- How It Works -->
    <section class="w-full bg-[#fff9e0] py-16">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-semibold mb-12">How Harmony Hive Works</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-4">1. Upload Lessons</h3>
            <p>Easily create and upload your music lessons through our intuitive web interface.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-4">2. Student Access</h3>
            <p>Students instantly access your lessons on their mobile devices, anytime and anywhere.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-4">3. Track Progress</h3>
            <p>Monitor student engagement and progress with detailed analytics and reports.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Testimonials -->
    <section class="my-16 px-4">
      <h2 class="text-3xl font-semibold mb-12">What Our Users Say</h2>
      <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-[#ffde6a] rounded-lg p-6">
          <blockquote class="text-lg italic mb-4">
            "Harmony Hive has revolutionized my teaching. My students are more engaged than ever!"
          </blockquote>
          <p class="font-semibold">- Sarah Johnson, Piano Instructor</p>
        </div>
        <div class="bg-[#ffde6a] rounded-lg p-6">
          <blockquote class="text-lg italic mb-4">
            "The mobile app is a game-changer. My students practice more consistently now."
          </blockquote>
          <p class="font-semibold">- Mark Davis, Guitar Teacher</p>
        </div>
      </div>
    </section>
    <!-- Features Highlight -->
    <section class="w-full bg-[#fff9e0] py-16">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-semibold mb-12">Key Features</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <li class="flex items-center">
            <svg class="h-6 w-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            Easy-to-use lesson creator
          </li>
          <li class="flex items-center">
            <svg class="h-6 w-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            Mobile app for students
          </li>
          <li class="flex items-center">
            <svg class="h-6 w-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            Progress tracking and analytics
          </li>
          <li class="flex items-center">
            <svg class="h-6 w-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            Integrated scheduling system
          </li>
        </ul>
      </div>
    </section>
    <!-- Final CTA -->
    <section class="my-16 px-4">
      <h2 class="text-3xl font-semibold mb-6">Ready to Transform Your Music Teaching?</h2>
      <p class="text-xl mb-8">Join thousands of music tutors already using Harmony Hive</p>
      <button class="bg-[#ffde6a] text-black text-lg px-20 py-3 font-semibold border border-black rounded-md shadow-[2.5px_2.5px_0px_0px_rgba(0,0,0,1)]">
        Start Your Free 14-Day Trial
      </button>
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
