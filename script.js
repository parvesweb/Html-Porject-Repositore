gsap.registerPlugin(ScrollTrigger)

// DOM Elements
const loadingScreen = document.getElementById("loading-screen")
const navbar = document.getElementById("navbar")
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")
const contactForm = document.getElementById("contact-form")
const testimonialModal = document.getElementById("testimonial-modal")
const addTestimonialBtn = document.getElementById("add-testimonial-btn")
const modalClose = document.getElementById("modal-close")
const cancelBtn = document.getElementById("cancel-btn")
const testimonialForm = document.getElementById("testimonial-form")
const testimonialsGrid = document.getElementById("testimonials-grid")

// Sample testimonials data
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    rating: 5,
    content:
      "NextGen Devs transformed our online presence completely. The website they built increased our conversions by 250% and the team was incredibly professional throughout the entire process.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
    projectType: "website",
  },
  {
    name: "Michael Chen",
    role: "Founder",
    company: "EcoShop",
    rating: 5,
    content:
      "Working with NextGen Devs was a game-changer for our e-commerce business. They delivered a beautiful, fast website that our customers love. Sales have increased by 300% since launch.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    projectType: "ecommerce",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "GrowthCo",
    rating: 5,
    content:
      "The web application they built for us streamlined our entire workflow. The attention to detail and user experience is outstanding. Highly recommend NextGen Devs!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    projectType: "webapp",
  },
  {
    name: "David Kim",
    role: "Owner",
    company: "Local Bistro",
    rating: 5,
    content:
      "Our restaurant's new website has brought in so many new customers. The online ordering system works flawlessly and the design perfectly captures our brand.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    projectType: "website",
  },
  {
    name: "Lisa Thompson",
    role: "Director",
    company: "HealthCare Plus",
    rating: 5,
    content:
      "The patient portal they developed has revolutionized how we interact with our patients. The system is intuitive, secure, and has improved our efficiency dramatically.",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face",
    projectType: "webapp",
  },
  {
    name: "James Wilson",
    role: "CTO",
    company: "FinanceFlow",
    rating: 5,
    content:
      "NextGen Devs delivered a complex financial dashboard that exceeded our expectations. The performance is excellent and the code quality is top-notch.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    projectType: "webapp",
  },
]

// Sample projects data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Modern e-commerce solution with advanced features, payment integration, and seamless user experience.",
    image: "https://images.unsplash.com/photo-1556742049-bebda4e38f71?w=600&h=400&fit=crop",
    category: "ecommerce",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    date: "Dec 2024",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description: "Comprehensive analytics dashboard for business intelligence with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    category: "dashboard",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js"],
    date: "Nov 2024",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Restaurant Website",
    description: "Beautiful restaurant website with online ordering system and reservation management.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    category: "website",
    tech: ["React", "Tailwind", "Firebase", "Stripe"],
    date: "Oct 2024",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Real Estate Platform",
    description: "Property listing platform with advanced search, virtual tours, and agent management.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    category: "webapp",
    tech: ["Vue.js", "Laravel", "MySQL", "Maps API"],
    date: "Sep 2024",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Healthcare Mobile App",
    description: "Patient management system with appointment scheduling and telemedicine features.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    category: "mobile",
    tech: ["React Native", "Node.js", "MongoDB", "WebRTC"],
    date: "Aug 2024",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Learning Management System",
    description: "Educational platform with course management, video streaming, and progress tracking.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
    category: "webapp",
    tech: ["Next.js", "Prisma", "PostgreSQL", "AWS"],
    date: "Jul 2024",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "Financial Dashboard",
    description: "Complex financial analytics platform with real-time market data and portfolio management.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
    category: "dashboard",
    tech: ["React", "D3.js", "Node.js", "Redis"],
    date: "Jun 2024",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 8,
    title: "Corporate Website",
    description: "Professional corporate website with CMS integration and multi-language support.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    category: "website",
    tech: ["WordPress", "PHP", "MySQL", "GSAP"],
    date: "May 2024",
    liveUrl: "#",
    githubUrl: "#",
  },
]

let currentFilter = "all"
let displayedProjects = 6

// Loading Screen Animation
window.addEventListener("load", () => {
  setTimeout(() => {
    gsap.to(loadingScreen, {
      opacity: 0,
      duration: 1,
      onComplete: () => {
        loadingScreen.style.display = "none"
        initializeWebsite()
      },
    })
  }, 1500)
})

// Initialize All Website Functionality
function initializeWebsite() {
  initAnimations()
  initScrollEffects()
  initInteractiveElements()
  initTestimonials()
  initTeamAnimations()
  initPortfolio()
  initEnhancedMobileMenu()
  initPerformanceOptimizations()
}

// Core Animation System
function initAnimations() {
  // Navigation entrance animation
  gsap.fromTo(
    ".nav-item",
    {
      y: -50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    },
  )
  // Hero content animation
  gsap.fromTo(
    ".hero-content",
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.3,
      ease: "power2.out",
    },
  )
  // Floating elements animation
  gsap.to(".floating-element", {
    y: -30,
    rotation: 360,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut",
    stagger: 0.5,
  })
  // Sparkle animation
  gsap.to(".sparkle", {
    scale: 1.2,
    opacity: 1,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut",
    stagger: 0.3,
  })
  // Scroll wheel animation
  gsap.to(".scroll-wheel", {
    y: 12,
    duration: 1.5,
    repeat: -1,
    ease: "power2.inOut",
  })
}

// Advanced Scroll-Based Animations
function initScrollEffects() {
  // Reveal text animations
  gsap.utils.toArray(".reveal-text").forEach((element) => {
    gsap.fromTo(
      element,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      },
    )
  })
  // Service cards animation
  gsap.fromTo(
    ".service-card",
    {
      y: 60,
      opacity: 0,
      scale: 0.9,
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".services-grid",
        start: "top 80%",
      },
    },
  )
  // Counter animation
  gsap.utils.toArray(".counter").forEach((counter) => {
    const target = Number.parseInt(counter.getAttribute("data-target"))
    gsap.fromTo(
      counter,
      {
        textContent: 0,
      },
      {
        textContent: target,
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: counter,
          start: "top 80%",
        },
      },
    )
  })
  // Pricing cards animation
  gsap.fromTo(
    ".pricing-card",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".pricing-grid",
        start: "top 80%",
      },
    },
  )
}

// Team Animations
function initTeamAnimations() {
  // Team cards entrance animation
  gsap.fromTo(
    ".team-card",
    {
      y: 60,
      opacity: 0,
      scale: 0.9,
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".team-grid",
        start: "top 80%",
      },
    },
  )
  // Team card hover effects
  gsap.utils.toArray(".team-card").forEach((card) => {
    const image = card.querySelector(".team-image img")
    const overlay = card.querySelector(".team-overlay")
    const socialLinks = card.querySelectorAll(".social-link")
    card.addEventListener("mouseenter", () => {
      gsap.to(image, {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out",
      })
      gsap.to(overlay, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      })
      gsap.fromTo(
        socialLinks,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
      )
    })
    card.addEventListener("mouseleave", () => {
      gsap.to(image, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      })
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      })
    })
  })
}

// Interactive Elements and Hover Effects
function initInteractiveElements() {
  // Enhanced hover effects for cards
  gsap.utils.toArray(".hover-card").forEach((card) => {
    const tl = gsap.timeline({ paused: true })
    tl.to(card, {
      y: -10,
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out",
    })
    card.addEventListener("mouseenter", () => tl.play())
    card.addEventListener("mouseleave", () => tl.reverse())
  })
  // Button hover animations
  gsap.utils.toArray(".btn").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, {
        scale: 1.05,
        y: -2,
        duration: 0.3,
        ease: "power2.out",
      })
    })
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      })
    })
  })
  // Tech stack hover effects
  gsap.utils.toArray(".tech-stack span").forEach((tech) => {
    tech.addEventListener("mouseenter", () => {
      gsap.to(tech, {
        scale: 1.2,
        color: "#ea580c",
        y: -5,
        duration: 0.3,
        ease: "back.out(1.7)",
      })
    })
    tech.addEventListener("mouseleave", () => {
      gsap.to(tech, {
        scale: 1,
        color: "#9ca3af",
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      })
    })
  })
}

// Testimonials System
function initTestimonials() {
  loadTestimonials()
  setupTestimonialModal()
  setupRatingInput()
}

function loadTestimonials() {
  testimonialsGrid.innerHTML = ""
  testimonials.forEach((testimonial, index) => {
    const testimonialCard = createTestimonialCard(testimonial)
    testimonialsGrid.appendChild(testimonialCard)
    // Animate testimonial cards on load
    gsap.fromTo(
      testimonialCard,
      {
        y: 50,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        delay: index * 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: testimonialCard,
          start: "top 85%",
        },
      },
    )
  })
}

function createTestimonialCard(testimonial) {
  const card = document.createElement("div")
  card.className = "testimonial-card hover-card"
  card.innerHTML = `
    <div class="testimonial-header">
      <div class="testimonial-rating">
        ${Array(testimonial.rating).fill('<i class="fas fa-star"></i>').join("")}
      </div>
      <i class="fas fa-quote-right testimonial-quote"></i>
    </div>
    <div class="testimonial-content">
      ${testimonial.content}
    </div>
    <div class="testimonial-footer">
      <img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar">
      <div class="testimonial-author">
        <h4>${testimonial.name}</h4>
        <p>${testimonial.role}</p>
        <p class="testimonial-company">${testimonial.company}</p>
      </div>
    </div>
  `
  return card
}

function setupTestimonialModal() {
  // Open modal
  addTestimonialBtn.addEventListener("click", () => {
    testimonialModal.classList.add("active")
    document.body.style.overflow = "hidden"
    gsap.fromTo(
      testimonialModal,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      },
    )
    gsap.fromTo(
      ".modal-content",
      {
        scale: 0.8,
        y: 50,
      },
      {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "back.out(1.7)",
      },
    )
  })
  // Close modal
  function closeModal() {
    gsap.to(testimonialModal, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        testimonialModal.classList.remove("active")
        document.body.style.overflow = "auto"
        testimonialForm.reset()
        resetRating()
      },
    })
  }
  modalClose.addEventListener("click", closeModal)
  cancelBtn.addEventListener("click", closeModal)
  testimonialModal.addEventListener("click", (e) => {
    if (e.target === testimonialModal) {
      closeModal()
    }
  })
  // Handle form submission
  testimonialForm.addEventListener("submit", handleTestimonialSubmission)
}

function setupRatingInput() {
  const ratingStars = document.querySelectorAll(".rating-input i")
  const ratingValue = document.getElementById("rating-value")
  ratingStars.forEach((star, index) => {
    star.addEventListener("mouseenter", () => {
      highlightStars(index + 1)
    })
    star.addEventListener("click", () => {
      const rating = index + 1
      ratingValue.value = rating
      setActiveStars(rating)
    })
  })
  document.querySelector(".rating-input").addEventListener("mouseleave", () => {
    const currentRating = ratingValue.value
    if (currentRating) {
      setActiveStars(currentRating)
    } else {
      resetRating()
    }
  })
}

function highlightStars(count) {
  const stars = document.querySelectorAll(".rating-input i")
  stars.forEach((star, index) => {
    if (index < count) {
      star.classList.add("active")
    } else {
      star.classList.remove("active")
    }
  })
}

function setActiveStars(count) {
  const stars = document.querySelectorAll(".rating-input i")
  stars.forEach((star, index) => {
    if (index < count) {
      star.classList.add("active")
      star.style.color = "#fbbf24"
    } else {
      star.classList.remove("active")
      star.style.color = "#d1d5db"
    }
  })
}

function resetRating() {
  const stars = document.querySelectorAll(".rating-input i")
  stars.forEach((star) => {
    star.classList.remove("active")
    star.style.color = "#d1d5db"
  })
  document.getElementById("rating-value").value = ""
}

function handleTestimonialSubmission(e) {
  e.preventDefault()
  const formData = new FormData(testimonialForm)
  const data = Object.fromEntries(formData)
  // Validate required fields
  if (!data.name || !data.email || !data.rating || !data.testimonial) {
    showNotification("Please fill in all required fields.", "error")
    return
  }
  const submitBtn = testimonialForm.querySelector('button[type="submit"]')
  const originalText = submitBtn.innerHTML
  // Show loading state
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...'
  submitBtn.disabled = true
  // Simulate API call
  setTimeout(() => {
    // Create new testimonial object
    const newTestimonial = {
      name: data.name,
      role: data.role || "Client",
      company: data.company || "",
      rating: Number.parseInt(data.rating),
      content: data.testimonial,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face", // Default avatar
      projectType: data.projectType || "other",
    }
    // Add to testimonials array
    testimonials.unshift(newTestimonial)
    // Reload testimonials
    loadTestimonials()
    // Show success message
    showNotification("Thank you for your feedback! Your testimonial has been submitted.", "success")
    // Close modal
    gsap.to(testimonialModal, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        testimonialModal.classList.remove("active")
        document.body.style.overflow = "auto"
        testimonialForm.reset()
        resetRating()
      },
    })
    // Reset button
    submitBtn.innerHTML = originalText
    submitBtn.disabled = false
  }, 2000)
}

// Enhanced Mobile Menu functionality
function initEnhancedMobileMenu() {
  const mobileToggle = document.getElementById("mobile-menu-toggle")
  const mobileOverlay = document.getElementById("mobile-nav-overlay")
  const mobileClose = document.getElementById("mobile-close-btn")
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle")
  // Open mobile menu
  mobileToggle.addEventListener("click", () => {
    mobileToggle.classList.add("active")
    mobileOverlay.classList.add("active")
    document.body.style.overflow = "hidden"
    // Animate menu items
    gsap.fromTo(
      ".mobile-nav-link",
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.1,
        delay: 0.2,
        ease: "power2.out",
      },
    )
  })
  // Close mobile menu
  function closeMobileMenu() {
    mobileToggle.classList.remove("active")
    mobileOverlay.classList.remove("active")
    document.body.style.overflow = "auto"
    // Reset dropdowns
    document.querySelectorAll(".mobile-nav-dropdown").forEach((dropdown) => {
      dropdown.classList.remove("active")
    })
  }
  mobileClose.addEventListener("click", closeMobileMenu)
  mobileOverlay.addEventListener("click", (e) => {
    if (e.target === mobileOverlay) {
      closeMobileMenu()
    }
  })
  // Handle dropdown toggles
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const dropdown = toggle.closest(".mobile-nav-dropdown")
      const isActive = dropdown.classList.contains("active")
      // Close all dropdowns
      document.querySelectorAll(".mobile-nav-dropdown").forEach((d) => {
        d.classList.remove("active")
      })
      // Toggle current dropdown
      if (!isActive) {
        dropdown.classList.add("active")
      }
    })
  })
  // Close menu when clicking on links
  document.querySelectorAll(".mobile-nav-link:not(.dropdown-toggle), .mobile-dropdown-item").forEach((link) => {
    link.addEventListener("click", () => {
      setTimeout(closeMobileMenu, 300)
    })
  })
}

// Portfolio/Projects functionality
function initPortfolio() {
  loadProjects()
  setupProjectFilters()
  setupLoadMore()
}

function loadProjects() {
  const projectsGrid = document.getElementById("projects-grid")
  if (!projectsGrid) return
  projectsGrid.innerHTML = ""
  const filteredProjects =
    currentFilter === "all" ? projects : projects.filter((project) => project.category === currentFilter)
  const projectsToShow = filteredProjects.slice(0, displayedProjects)
  projectsToShow.forEach((project, index) => {
    const projectCard = createProjectCard(project)
    projectsGrid.appendChild(projectCard)
    // Animate project cards
    gsap.fromTo(
      projectCard,
      { y: 50, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        delay: index * 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: projectCard,
          start: "top 85%",
        },
      },
    )
  })
  // Update load more button visibility
  const loadMoreBtn = document.getElementById("load-more-btn")
  if (loadMoreBtn) {
    loadMoreBtn.style.display = filteredProjects.length > displayedProjects ? "inline-flex" : "none"
  }
}

function createProjectCard(project) {
  const card = document.createElement("div")
  card.className = "project-card hover-card"
  card.setAttribute("data-category", project.category)
  card.innerHTML = `
    <div class="project-image">
      <img src="${project.image}" alt="${project.title}" loading="lazy">
      <div class="project-overlay">
        <a href="${project.liveUrl}" class="project-btn" target="_blank">
          <i class="fas fa-external-link-alt"></i>
          Live Demo
        </a>
        <a href="${project.githubUrl}" class="project-btn" target="_blank">
          <i class="fab fa-github"></i>
          Code
        </a>
      </div>
      <div class="project-category">${getCategoryName(project.category)}</div>
    </div>
    <div class="project-info">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-tech">
        ${project.tech.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}
      </div>
      <div class="project-meta">
        <span class="project-date">${project.date}</span>
        <a href="${project.liveUrl}" class="project-link" target="_blank">
          View Project <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  `
  return card
}

function getCategoryName(category) {
  const categoryNames = {
    website: "Website",
    webapp: "Web App",
    ecommerce: "E-commerce",
    mobile: "Mobile App",
    dashboard: "Dashboard",
  }
  return categoryNames[category] || category
}

function setupProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn")
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      filterBtns.forEach((b) => b.classList.remove("active"))
      // Add active class to clicked button
      btn.classList.add("active")
      // Update current filter
      currentFilter = btn.getAttribute("data-filter")
      displayedProjects = 6 // Reset displayed count
      // Animate filter change
      gsap.to(".project-card", {
        opacity: 0,
        y: 20,
        duration: 0.3,
        stagger: 0.05,
        onComplete: () => {
          loadProjects()
        },
      })
    })
  })
}

function setupLoadMore() {
  const loadMoreBtn = document.getElementById("load-more-btn")
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      displayedProjects += 6
      // Show loading state
      const originalText = loadMoreBtn.innerHTML
      loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...'
      loadMoreBtn.disabled = true
      setTimeout(() => {
        loadProjects()
        loadMoreBtn.innerHTML = originalText
        loadMoreBtn.disabled = false
      }, 1000)
    })
  }
}

// Navigation and Scroll Effects
window.addEventListener(
  "scroll",
  debounce(() => {
    const scrolled = window.scrollY > 50
    if (scrolled) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
    updateScrollProgress()
    updateActiveNavigation()
  }, 10),
)

// Enhanced navigation active state
function updateActiveNavigation() {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")
  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })
  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
}

// Mobile Menu Toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
      // Close mobile menu
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
    }
  })
})

// Contact Form Handling
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()
    const submitBtn = this.querySelector('button[type="submit"]')
    const originalText = submitBtn.innerHTML
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
    submitBtn.disabled = true
    // Simulate form submission
    setTimeout(() => {
      showNotification("Message sent successfully! We'll get back to you soon.", "success")
      this.reset()
      submitBtn.innerHTML = originalText
      submitBtn.disabled = false
    }, 2000)
  })
}

// Performance Optimizations
function initPerformanceOptimizations() {
  createScrollProgress()
  createThemeToggle() // Initialize theme toggle
  // Lazy loading for images
  const images = document.querySelectorAll("img[data-src]")
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.remove("lazy")
        imageObserver.unobserve(img)
      }
    })
  })
  images.forEach((img) => imageObserver.observe(img))
}

function createScrollProgress() {
  const progressBar = document.createElement("div")
  progressBar.id = "scroll-progress"
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #f97316, #ea580c);
    z-index: 9999;
    transition: width 0.1s ease;
  `
  document.body.appendChild(progressBar)
}

function updateScrollProgress() {
  const progressBar = document.getElementById("scroll-progress")
  if (progressBar) {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    progressBar.style.width = scrolled + "%"
  }
}

function createThemeToggle() {
  const themeToggle = document.createElement("button")
  themeToggle.id = "theme-toggle"
  themeToggle.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #f97316, #ea580c);
    color: white;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(249, 115, 22, 0.3);
    z-index: 1000;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
  `
  document.body.appendChild(themeToggle)

  // Function to apply theme
  function applyTheme(theme) {
    if (theme === "dark") {
      document.body.classList.add("dark-theme")
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>' // Sun icon for dark mode
    } else {
      document.body.classList.remove("dark-theme")
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>' // Moon icon for light mode
    }
  }

  // Check for saved theme preference on load
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme) {
    applyTheme(savedTheme)
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // If no saved theme, check system preference
    applyTheme("dark")
  } else {
    // Default to light theme
    applyTheme("light")
  }

  // Toggle theme on click
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.body.classList.contains("dark-theme") ? "dark" : "light"
    const newTheme = currentTheme === "dark" ? "light" : "dark"
    applyTheme(newTheme)
    localStorage.setItem("theme", newTheme) // Save preference
  })
}

// Notification System
function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas fa-${type === "success" ? "check-circle" : type === "error" ? "exclamation-circle" : "info-circle"}"></i>
      <span>${message}</span>
      <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `
  // Add notification styles
  if (!document.querySelector("#notification-styles")) {
    const styles = document.createElement("style")
    styles.id = "notification-styles"
    styles.textContent = `
      .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        max-width: 400px;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        animation: slideInRight 0.3s ease;
      }
        .notification-success {
        background: #10b981;
        color: white;
      }
        .notification-error {
        background: #ef4444;
        color: white;
      }
        .notification-info {
        background: #3b82f6;
        color: white;
      }
        .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
      }
        .notification-close {
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        margin-left: auto;
        padding: 5px;
        border-radius: 4px;
        transition: background 0.3s ease;
      }
        .notification-close:hover {
        background: rgba(255, 255, 255, 0.2);
      }
        @keyframes slideInRight {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `
    document.head.appendChild(styles)
  }
  document.body.appendChild(notification)
  // Auto remove
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove()
    }
  }, 5000)
}

// Utility Functions
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Error Handling
window.addEventListener("error", (e) => {
  console.error("JavaScript Error:", e.error)
})

// Console Welcome Message
console.log(`🚀 NextGen Devs Website Loaded Successfully!`)


        // Update scroll event listener
window.addEventListener(
  "scroll",
  debounce(() => {
    const scrolled = window.scrollY > 50;
    if (scrolled) {
      navbar.classList.add("scrolled");
      navbar.style.top = "0";
    } else {
      navbar.classList.remove("scrolled");
      navbar.style.top = "40px"; // Same as info bar height
    }
    updateScrollProgress();
    updateActiveNavigation();
  }, 10),
);