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
        folders: [ service ]
      count: 0
    design:
      view: article-grid
      fill_image: true
      columns: 2

  - block: markdown
    content:
      title: What clients say
      text: |
        <div class="not-prose max-w-none">
          <style>
            .tms-carousel{position:relative;overflow:hidden}
            .tms-track{display:flex;transition:transform .45s ease;will-change:transform}
            .tms-slide{flex:0 0 100%;padding:0 .5rem;box-sizing:border-box}
            @media(min-width:768px){.tms-slide{flex-basis:50%}}
            @media(min-width:1200px){.tms-slide{flex-basis:45%}}
            .tms-nav{display:none}
            #tms-s1:checked~.tms-viewport .tms-track{transform:translateX(0)}
            #tms-s2:checked~.tms-viewport .tms-track{transform:translateX(-100%)}
            #tms-s3:checked~.tms-viewport .tms-track{transform:translateX(-200%)}
            #tms-s4:checked~.tms-viewport .tms-track{transform:translateX(-300%)}
            .tms-dots{display:flex;gap:.4rem;justify-content:center;margin-top:.25rem}
            .tms-dot{width:.6rem;height:.6rem;border-radius:9999px;border:1px solid var(--hb-border,#e5e7eb);display:inline-block}
            #tms-s1:checked~.tms-dots label[for=tms-s1] .tms-dot,
            #tms-s2:checked~.tms-dots label[for=tms-s2] .tms-dot,
            #tms-s3:checked~.tms-dots label[for=tms-s3] .tms-dot,
            #tms-s4:checked~.tms-dots label[for=tms-s4] .tms-dot{background:currentColor}
          </style>
          <div class="tms-carousel">
            <input class="tms-nav" type="radio" name="tms" id="tms-s1" checked>
            <input class="tms-nav" type="radio" name="tms" id="tms-s2">
            <input class="tms-nav" type="radio" name="tms" id="tms-s3">
            <input class="tms-nav" type="radio" name="tms" id="tms-s4">
            <div class="tms-viewport">
              <div class="tms-track">
                <div class="tms-slide">
                  <div class="hb-card p-6 h-full flex flex-col items-center text-center">
                    <img src="/images/testimonials/enis.jpg" alt="Enis Halilaj" class="w-16 h-16 rounded-full object-cover mb-3">
                    <p class="text-lg mb-2">“Thank you for the insightful conversation and valuable advice!”</p>
                    <div class="opacity-70">— Enis Halilaj, Software Developer @ Evonem</div>
                  </div>
                </div>
                <div class="tms-slide">
                  <div class="hb-card p-6 h-full flex flex-col items-center text-center">
                    <img src="/images/testimonials/mikiyas.jpg" alt="Mikiyas Eshetu" class="w-16 h-16 rounded-full object-cover mb-3">
                    <p class="text-lg mb-2">“We laid out a plan that fits both the topics I want to explore and the way I like to learn. While working on my first sprint, one challenge has already made me rethink how I approach modularity and domain boundaries in Spring apps.”</p>
                    <div class="opacity-70">— Mikiyas Eshetu, Software Developer</div>
                  </div>
                </div>
                <div class="tms-slide">
                  <div class="hb-card p-6 h-full flex flex-col items-center text-center">
                    <img src="/images/testimonials/chris.jpg" alt="CTO, StartLab" class="w-16 h-16 rounded-full object-cover mb-3">
                    <p class="text-lg mb-2">“The conversation with Marcin Grzejszczak was a blast, as always! We spoke about Event Mesh (...). Marcin, as an expert in contract testing, and building microservices, picked up on the topic right away, and sold me on some very interesting ideas! I highly recommend Marcin's consultations, including paid ones. Grab them while they're around!”</p>
                    <div class="opacity-70">— Chris Suszyński, Senior Developer @ Red Hat</div>
                  </div>
                </div>
                <div class="tms-slide">
                  <div class="hb-card p-6 h-full flex flex-col items-center text-center">
                    <img src="/images/testimonials/mikolaj.png" alt="SRE Lead, FlowOps" class="w-16 h-16 rounded-full object-cover mb-3">
                    <p class="text-lg mb-2">“Today, I had the great pleasure of consulting with Marcin Grzejszczak. I expected to receive a huge dose of knowledge about architecture and Spring, but what struck me most was his extraordinary kindness and lack of any barriers.”</p>
                    <div class="opacity-70">— Mikołaj Telus, Java Developer</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tms-dots">
              <label for="tms-s1"><span class="tms-dot"></span></label>
              <label for="tms-s2"><span class="tms-dot"></span></label>
              <label for="tms-s3"><span class="tms-dot"></span></label>
              <label for="tms-s4"><span class="tms-dot"></span></label>
            </div>
          </div>
        </div>
    design:
      background:
        color: light


---
