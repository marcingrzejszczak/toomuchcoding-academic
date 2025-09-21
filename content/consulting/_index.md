---
title: Teaching & Consulting
summary: Mentoring, company consulting, and workshops.
type: landing
sections:
  - block: hero
    content:
      title: Mentoring, Consulting & Workshops
      text: |
        Level up CI/CD, Microservices, IDP, Testing, Observability.
         <img src="/images/consulting/devoxx.jpg" alt="Devoxx presentation" class="rounded-xl mt-6 mx-auto">        
    design:
      background:
        color: lights

  - block: markdown
    content:
      title: How I can help
      text: |
        I work with teams on delivery speed and reliability: CI/CD, microservices, internal developer platforms,
        testing strategy, and observability. Pick a service below to learn more and purchase or get in touch.
    design:
      background:
        color: light

  - block: collection
    id: services
    content:
      title: Services
      filters:
        folders: [service]
      count: 0
    design:
      view: article-grid
      fill_image: false
      columns: 2

  - block: markdown
    content:
      title: What clients say
      text: |
        <div class="relative">
          <div id="tms-testimonials" class="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2">
            <div class="hb-card p-6 w-full md:w-1/2 flex-none snap-center">
              <p class="mb-2">“Cut build times by 60% and stabilized our pipelines.”</p>
              <div class="opacity-70">— Head of Platform, ACME</div>
            </div>
            <div class="hb-card p-6 w-full md:w-1/2 flex-none snap-center">
              <p class="mb-2">“Mentoring paid for itself in a week — practical and actionable.”</p>
              <div class="opacity-70">— Engineering Manager, WidgetCo</div>
            </div>
            <div class="hb-card p-6 w-full md:w-1/2 flex-none snap-center">
              <p class="mb-2">“Workshops were engaging and immediately useful for our team.”</p>
              <div class="opacity-70">— CTO, StartLab</div>
            </div>
            <div class="hb-card p-6 w-full md:w-1/2 flex-none snap-center">
              <p class="mb-2">“Excellent guidance on observability. We now ship with confidence.”</p>
              <div class="opacity-70">— SRE Lead, FlowOps</div>
            </div>
          </div>
          <div class="flex justify-center gap-3 mt-2">
            <button id="tms-prev" class="hb-btn hb-btn-dark text-base px-4 py-2">‹ Prev</button>
            <button id="tms-next" class="hb-btn hb-btn-dark text-base px-4 py-2">Next ›</button>
          </div>
        </div>
        <script src="/js/testimonials-fallback.js" defer></script>
    design:
      background:
        color: light

  - block: markdown
    content:
      id: contact
      title: Get in touch
      text: |
        <!-- Stacked cards, full width of the content area -->
        <div class="not-prose max-w-none space-y-6">
          <!-- Email -->
          <article class="hb-card overflow-hidden">
            <div class="p-6">
              <h3 class="text-lg font-bold mb-2">Email</h3>
              <p class="opacity-80 mb-4">Prefer async? Send details and I’ll reply shortly.</p>
              <a href="mailto:contact@toomuchcoding.com"
                 class="hb-btn hb-btn-dark text-base px-4 py-2">contact@toomuchcoding.com</a>
            </div>
          </article>
          <!-- Calendly -->
          <article class="hb-card overflow-hidden">
            <div class="p-6">
              <h3 class="text-lg font-bold mb-2">Book a free 30-minute call</h3>
              <p class="opacity-80 mb-4">Quick discovery chat to see how I can help.</p>
              <a href="https://calendly.com/marcin-grzejszczak/free-consultation"
                 class="hb-btn hb-btn-primary text-base px-4 py-2">Open Calendly</a>
              <!-- Inline embed (optional). Remove if you only want the button. -->
              <div class="rounded-xl border mt-4">
                <div class="calendly-inline-widget"
                     data-url="https://calendly.com/marcin-grzejszczak/free-consultation"
                     style="min-width:320px;height:600px;"></div>
                <script src="https://assets.calendly.com/assets/external/widget.js" async></script>
              </div>
            </div>
          </article>
        </div>


---
