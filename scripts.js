// Collapsibles (Expandable content)
document.addEventListener("DOMContentLoaded", function() {
  var coll = document.getElementsByClassName("collapsible");

  for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("collactive");
      
      // Get the *next* element sibling which should be the content
      var content = this.nextElementSibling;
      
      // Ensure it has the correct class
      if (content && content.classList.contains("collcontent")) {
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          // Set a dynamic max-height based on scroll height so it animates
          content.style.maxHeight = content.scrollHeight + "px";
        } 
      }
    });
  }
});

// Cyclical News Ticker Cloning
document.addEventListener("DOMContentLoaded", () => {
    const list = document.querySelector("#listing-news .list.grid");
    if (list) {
        // Clone all children once to ensure a seamless loop
        const children = Array.from(list.children);
        children.forEach(child => {
            const clone = child.cloneNode(true);
            list.appendChild(clone);
        });
    }
});

// Email Popup & Copy Logic
document.addEventListener("DOMContentLoaded", function () {
  const trigger = document.querySelector(".email-popup-trigger");
  if (!trigger) return;

  trigger.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    // Remove any existing popup
    const oldPopup = document.querySelector(".email-popup");
    if (oldPopup) oldPopup.remove();

    const encodedEmail = trigger.getAttribute("data-email");
    const email = atob(encodedEmail);

    // Create popup
    const popup = document.createElement("div");
    popup.className = "email-popup";
    popup.innerHTML = `
            <span class="popup-email-text">${email}</span>
            <button class="popup-btn copy-btn" title="Copy to clipboard">
                <i class="bi bi-clipboard"></i>
            </button>
            <a href="mailto:${email}" class="popup-btn" title="Open in mail app">
                <i class="bi bi-envelope-open"></i>
            </a>
        `;

    document.body.appendChild(popup);

    // Position popup (using fixed + viewport coords for robustness)
    const rect = trigger.getBoundingClientRect();
    popup.style.position = "fixed";
    popup.style.top = `${rect.bottom + 10}px`;
    popup.style.left = `${rect.left - 50}px`;

    // Copy functionality
    const copyBtn = popup.querySelector(".copy-btn");
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(email).then(() => {
        copyBtn.innerHTML = '<i class="bi bi-check2"></i>';
        copyBtn.classList.add("copied");
        setTimeout(() => {
          copyBtn.innerHTML = '<i class="bi bi-clipboard"></i>';
          copyBtn.classList.remove("copied");
        }, 1500);
      });
    });

    // Close when clicking elsewhere
    const closePopup = (event) => {
      // Check if click was outside both the popup and the trigger (including children)
      if (!popup.contains(event.target) && !trigger.contains(event.target)) {
        popup.remove();
        document.removeEventListener("click", closePopup);
      }
    };
    document.addEventListener("click", closePopup);
  });
});

/*
// Network Speed Detection & Lite Version Prompt
document.addEventListener("DOMContentLoaded", function() {
    if ("connection" in navigator) {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        const type = connection.effectiveType;
        
        // Show Lite Prompt if 2G or slow-2g
        if (type === "2g" || type === "slow-2g") {
            const prompt = document.createElement("div");
            prompt.className = "network-lite-prompt";
            prompt.innerHTML = `
                <div class="lite-prompt-content">
                    <i class="bi bi-speedometer2"></i>
                    <span>Slow connection detected. <a href="lite.html">Switch to Lite Version?</a></span>
                    <button class="lite-close-btn">&times;</button>
                </div>
            `;
            document.body.appendChild(prompt);
            
            prompt.querySelector(".lite-close-btn").onclick = () => prompt.remove();
        }
    }
});

// Visitor Counter Injection (Busuanzi)
// This uses the Busuanzi service (https://busuanzi.ibruce.info/) for simple hit tracking.
(function() {
    // Only track on the public domain, not on localhost/development
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
        console.log("Visitor tracking disabled on localhost");
        return;
    }
    
    var script = document.createElement('script');
    script.async = true;
    script.src = "//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
    document.head.appendChild(script);
})();
*/
