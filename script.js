/**
 * Shaikh Saniya — Personal Portfolio
 * Accessible, Responsive Vanilla JavaScript Interactions
 * Coursera Introduction to Web Development Final Project
 */

(function () {
  'use strict';

  // Wait for DOM content to be fully loaded
  document.addEventListener('DOMContentLoaded', initPortfolio);

  function initPortfolio() {
    initCopyrightYear();
    initMobileNavigation();
    initEmailCopy();
    initHeaderScrollEffect();
    initActiveNavHighlight();
  }

  /**
   * 1. Automatic Dynamic Footer Copyright Year
   * Meets Coursera Criterion 4: Genuine JavaScript Interactivity
   */
  function initCopyrightYear() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  }

  /**
   * 2. Accessible Responsive Mobile Navigation
   * - Toggles menu visibility and updates aria-expanded
   * - Closes automatically when any navigation link is clicked
   * - Closes on Escape key press and returns focus to toggle button
   * - Closes on click outside the menu area
   */
  function initMobileNavigation() {
    const navToggle = document.getElementById('mobile-nav-toggle');
    const primaryNav = document.getElementById('primary-navigation');

    if (!navToggle || !primaryNav) return;

    // Toggle menu open/close
    navToggle.addEventListener('click', function () {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      toggleMenu(!isExpanded);
    });

    // Close when any navigation link is clicked (smooth navigation)
    const navLinks = primaryNav.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (navToggle.getAttribute('aria-expanded') === 'true') {
          toggleMenu(false);
        }
      });
    });

    // Close on Escape key press for keyboard accessibility
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
        toggleMenu(false);
        navToggle.focus(); // Return focus to toggle button
      }
    });

    // Close when clicking outside of the open menu
    document.addEventListener('click', function (event) {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      if (!isExpanded) return;

      const isClickInsideNav = primaryNav.contains(event.target);
      const isClickOnToggle = navToggle.contains(event.target);

      if (!isClickInsideNav && !isClickOnToggle) {
        toggleMenu(false);
      }
    });

    function toggleMenu(open) {
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) {
        primaryNav.classList.add('is-open');
      } else {
        primaryNav.classList.remove('is-open');
      }
    }
  }

  /**
   * 3. Accessible Copy-Email Interaction with Fallback
   * - Uses navigator.clipboard with fallback to document.execCommand('copy')
   * - Updates aria-live region for screen readers
   * - Provides visual button feedback with automatic reset
   */
  function initEmailCopy() {
    const copyButton = document.getElementById('copy-email-button');
    const displayedEmail = document.getElementById('displayed-email');
    const statusMessage = document.getElementById('copy-status');

    if (!copyButton || !displayedEmail || !statusMessage) return;

    let timeoutId = null;

    copyButton.addEventListener('click', function () {
      const emailText = displayedEmail.textContent.trim();

      // Clear any prior status timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // Try modern navigator.clipboard first
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard
          .writeText(emailText)
          .then(showCopySuccess)
          .catch(function () {
            // If Promise rejects, fallback to textarea method
            fallbackCopy(emailText);
          });
      } else {
        // Fallback for non-secure contexts or older browsers
        fallbackCopy(emailText);
      }
    });

    function showCopySuccess() {
      // Accessible announcement
      statusMessage.textContent = 'Email address copied to clipboard!';
      statusMessage.classList.remove('error');

      // Visual button update
      copyButton.classList.add('copied');
      const textSpan = copyButton.querySelector('.copy-btn-text');
      if (textSpan) {
        textSpan.textContent = 'Copied!';
      }

      // Reset after 3 seconds
      timeoutId = setTimeout(function () {
        statusMessage.textContent = '';
        copyButton.classList.remove('copied');
        if (textSpan) {
          textSpan.textContent = 'Copy Email';
        }
      }, 3000);
    }

    function showCopyError() {
      statusMessage.textContent = 'Could not automatically copy. Please select and copy manually.';
      statusMessage.classList.add('error');

      timeoutId = setTimeout(function () {
        statusMessage.textContent = '';
        statusMessage.classList.remove('error');
      }, 4000);
    }

    // Accessible legacy fallback using a temporary hidden textarea
    function fallbackCopy(text) {
      try {
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = text;
        // Position offscreen so it doesn't cause layout shift
        tempTextArea.style.position = 'fixed';
        tempTextArea.style.left = '-9999px';
        tempTextArea.style.top = '-9999px';
        tempTextArea.setAttribute('aria-hidden', 'true');
        document.body.appendChild(tempTextArea);

        tempTextArea.focus();
        tempTextArea.select();

        const successful = document.execCommand('copy');
        document.body.removeChild(tempTextArea);

        if (successful) {
          showCopySuccess();
        } else {
          showCopyError();
        }
      } catch (err) {
        showCopyError();
      }
    }
  }

  /**
   * 4. Header Shadow / Elevation on Scroll
   */
  function initHeaderScrollEffect() {
    const header = document.getElementById('header');
    if (!header) return;

    function handleScroll() {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
  }

  /**
   * 5. Active Navigation Link Highlighting on Scroll
   * Uses IntersectionObserver for smooth, performant section tracking
   */
  function initActiveNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.primary-nav .nav-link');

    if (!sections.length || !navLinks.length) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              const currentId = entry.target.getAttribute('id');
              navLinks.forEach(function (link) {
                if (link.getAttribute('href') === '#' + currentId) {
                  link.classList.add('active');
                } else {
                  link.classList.remove('active');
                }
              });
            }
          });
        },
        {
          rootMargin: '-20% 0px -70% 0px',
        }
      );

      sections.forEach(function (section) {
        observer.observe(section);
      });
    }
  }
})();
