// ==========================================================================
// HABIBA MAHFOUZ PORTFOLIO - JAVASCRIPT
// Handles interactive elements: Certifications Carousel, Project Modal & Media Carousel
// (Reads projectsData directly from project-details.js)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

    /* ----------------------------------------------------------------------
       1. CERTIFICATIONS CAROUSEL SLIDER (Dynamic Dots & Manual Navigation Only)
       ---------------------------------------------------------------------- */
    const track = document.getElementById('certTrack');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('prevCert');
    const nextBtn = document.getElementById('nextCert');
    const dotsContainer = document.getElementById('carouselDots');

    let currentIndex = 0;
    const totalSlides = slides ? slides.length : 0;

    // Dynamically generate dots according to total number of slides in HTML
    if (dotsContainer && slides) {
        dotsContainer.innerHTML = '';
        slides.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.className = i === 0 ? 'dot active' : 'dot';
            dot.setAttribute('data-index', i);
            dot.addEventListener('click', () => {
                updateCarousel(i);
            });
            dotsContainer.appendChild(dot);
        });
    }

    function updateCarousel(index) {
        if (!track || totalSlides === 0) return;

        if (index < 0) {
            currentIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === currentIndex);
        });

        const currentDots = dotsContainer ? dotsContainer.querySelectorAll('.dot') : [];
        currentDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            updateCarousel(currentIndex - 1);
        });

        nextBtn.addEventListener('click', () => {
            updateCarousel(currentIndex + 1);
        });
    }


    /* ----------------------------------------------------------------------
       2. MODAL MEDIA CAROUSEL SYSTEM (Images & Videos Slider)
       ---------------------------------------------------------------------- */
    let currentMediaIndex = 0;
    let totalMediaSlides = 0;

    function renderMediaCarousel(mediaList, projectTitle) {
        const mediaTrack = document.getElementById('modalMediaTrack');
        const mediaDotsContainer = document.getElementById('modalMediaDots');
        const mediaPrevBtn = document.getElementById('modalMediaPrev');
        const mediaNextBtn = document.getElementById('modalMediaNext');

        if (!mediaTrack) return;

        mediaTrack.innerHTML = '';
        if (mediaDotsContainer) mediaDotsContainer.innerHTML = '';
        currentMediaIndex = 0;

        const items = mediaList && mediaList.length > 0 ? mediaList : [
            { type: 'image', src: 'images/Network.png', alt: projectTitle }
        ];

        totalMediaSlides = items.length;

        // Render each media slide (Image, Video, or Audio)
        items.forEach((item) => {
            const slide = document.createElement('div');
            slide.className = 'project-carousel-slide';

            if (item.type === 'video') {
                slide.innerHTML = `
                    <div class="media-slide-box">
                        <video controls class="media-slide-video">
                            <source src="${item.src}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                `;
            } else if (item.type === 'audio') {
                slide.innerHTML = `
                    <div class="media-slide-box media-audio-box">
                        <div class="custom-audio-card">
                            <div class="audio-avatar">
                                <i class="fa-solid fa-headphones"></i>
                            </div>
                            <h4 class="custom-audio-title">${item.title || 'Project Audio Demo'}</h4>
                            <span class="audio-type-tag">Audio Track</span>
                            
                            <audio class="custom-audio-element" preload="metadata" src="${item.src}">
                                <source src="${item.src}">
                            </audio>

                            <div class="custom-audio-controls">
                                <button class="audio-play-btn" type="button" aria-label="Play">
                                    <i class="fa-solid fa-play"></i>
                                </button>
                                <div class="audio-timeline-container">
                                    <span class="audio-time current-time">0:00</span>
                                    <input type="range" class="audio-progress-bar" min="0" max="100" value="0" step="0.1">
                                    <span class="audio-time duration-time">0:00</span>
                                </div>
                                <button class="audio-mute-btn" type="button" aria-label="Mute">
                                    <i class="fa-solid fa-volume-high"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `;

                // Wire up interactive controls for this audio slide
                const audioEl = slide.querySelector('.custom-audio-element');
                const playBtn = slide.querySelector('.audio-play-btn');
                const playIcon = playBtn ? playBtn.querySelector('i') : null;
                const progressBar = slide.querySelector('.audio-progress-bar');
                const currentTimeEl = slide.querySelector('.current-time');
                const durationTimeEl = slide.querySelector('.duration-time');
                const muteBtn = slide.querySelector('.audio-mute-btn');
                const muteIcon = muteBtn ? muteBtn.querySelector('i') : null;

                function formatTime(sec) {
                    if (isNaN(sec) || !isFinite(sec)) return '0:00';
                    const m = Math.floor(sec / 60);
                    const s = Math.floor(sec % 60);
                    return `${m}:${s < 10 ? '0' : ''}${s}`;
                }

                if (audioEl && playBtn) {
                    playBtn.addEventListener('click', () => {
                        if (audioEl.paused) {
                            // Pause other playing media
                            document.querySelectorAll('.custom-audio-element, video').forEach(media => {
                                if (media !== audioEl) media.pause();
                            });
                            document.querySelectorAll('.audio-play-btn i').forEach(icon => {
                                icon.className = 'fa-solid fa-play';
                            });
                            audioEl.play().then(() => {
                                if (playIcon) playIcon.className = 'fa-solid fa-pause';
                            }).catch(err => console.log('Audio playback error:', err));
                        } else {
                            audioEl.pause();
                            if (playIcon) playIcon.className = 'fa-solid fa-play';
                        }
                    });

                    audioEl.addEventListener('loadedmetadata', () => {
                        if (durationTimeEl) durationTimeEl.textContent = formatTime(audioEl.duration);
                    });

                    audioEl.addEventListener('timeupdate', () => {
                        if (audioEl.duration && progressBar && !progressBar.matches(':active')) {
                            progressBar.value = (audioEl.currentTime / audioEl.duration) * 100;
                        }
                        if (currentTimeEl) currentTimeEl.textContent = formatTime(audioEl.currentTime);
                    });

                    if (progressBar) {
                        progressBar.addEventListener('input', () => {
                            if (audioEl.duration) {
                                audioEl.currentTime = (progressBar.value / 100) * audioEl.duration;
                            }
                        });
                    }

                    if (muteBtn) {
                        muteBtn.addEventListener('click', () => {
                            audioEl.muted = !audioEl.muted;
                            if (muteIcon) {
                                muteIcon.className = audioEl.muted ? 'fa-solid fa-volume-xmark' : 'fa-solid fa-volume-high';
                            }
                        });
                    }

                    audioEl.addEventListener('ended', () => {
                        if (playIcon) playIcon.className = 'fa-solid fa-play';
                        if (progressBar) progressBar.value = 0;
                        if (currentTimeEl) currentTimeEl.textContent = '0:00';
                    });
                }
            } else {
                slide.innerHTML = `
                    <div class="media-slide-box">
                        <img src="${item.src}" alt="${item.alt || projectTitle}" class="media-slide-img">
                    </div>
                `;
            }
            mediaTrack.appendChild(slide);
        });

        // Setup dots and next/prev button visibility
        if (totalMediaSlides > 1) {
            if (mediaPrevBtn) mediaPrevBtn.style.display = 'flex';
            if (mediaNextBtn) mediaNextBtn.style.display = 'flex';
            if (mediaDotsContainer) {
                mediaDotsContainer.style.display = 'flex';
                items.forEach((_, i) => {
                    const dot = document.createElement('span');
                    dot.className = i === 0 ? 'dot active' : 'dot';
                    dot.setAttribute('data-index', i);
                    dot.addEventListener('click', () => {
                        updateMediaCarousel(i);
                    });
                    mediaDotsContainer.appendChild(dot);
                });
            }
        } else {
            if (mediaPrevBtn) mediaPrevBtn.style.display = 'none';
            if (mediaNextBtn) mediaNextBtn.style.display = 'none';
            if (mediaDotsContainer) mediaDotsContainer.style.display = 'none';
        }

        updateMediaCarousel(0);
    }

    function updateMediaCarousel(index) {
        const mediaTrack = document.getElementById('modalMediaTrack');
        const mediaDotsContainer = document.getElementById('modalMediaDots');
        if (!mediaTrack || totalMediaSlides === 0) return;

        // Pause any playing videos or audios before changing slide
        const allMedia = mediaTrack.querySelectorAll('video, audio');
        allMedia.forEach(m => m.pause());
        mediaTrack.querySelectorAll('.audio-play-btn i').forEach(icon => {
            icon.className = 'fa-solid fa-play';
        });

        if (index < 0) {
            currentMediaIndex = totalMediaSlides - 1;
        } else if (index >= totalMediaSlides) {
            currentMediaIndex = 0;
        } else {
            currentMediaIndex = index;
        }

        mediaTrack.style.transform = `translateX(-${currentMediaIndex * 100}%)`;

        if (mediaDotsContainer) {
            const dots = mediaDotsContainer.querySelectorAll('.dot');
            dots.forEach((d, i) => {
                d.classList.toggle('active', i === currentMediaIndex);
            });
        }
    }

    const modalMediaPrev = document.getElementById('modalMediaPrev');
    const modalMediaNext = document.getElementById('modalMediaNext');

    if (modalMediaPrev) {
        modalMediaPrev.addEventListener('click', () => {
            updateMediaCarousel(currentMediaIndex - 1);
        });
    }

    if (modalMediaNext) {
        modalMediaNext.addEventListener('click', () => {
            updateMediaCarousel(currentMediaIndex + 1);
        });
    }


    /* ----------------------------------------------------------------------
       3. DYNAMIC PROJECT DETAILS POPUP MODAL SYSTEM (1050px Max Width)
       ---------------------------------------------------------------------- */
    const projectDetailsOverlay = document.getElementById('projectDetailsOverlay');
    const closeProjectDetailsBtn = document.getElementById('closeProjectDetailsBtn');
    const openModalBtns = document.querySelectorAll('.open-modal-btn');

    function openProjectModal(projectId) {
        // Read data directly from shared projectsData in project-details.js
        const database = typeof projectsData !== 'undefined' ? projectsData : {};
        const project = database[projectId] || database['solo-network-fundamentals'];

        if (project && projectDetailsOverlay) {
            // Header Title (Dynamic Project Name)
            const headerTitleEl = document.getElementById('modalHeaderTitle');
            if (headerTitleEl) headerTitleEl.textContent = project.title;

            // Media Carousel (Images and/or Videos)
            const mediaList = project.media || [];
            if (mediaList.length === 0) {
                if (project.image) mediaList.push({ type: 'image', src: project.image, alt: project.title });
                if (project.video) mediaList.push({ type: 'video', src: project.video, title: 'Demo Video' });
            }
            renderMediaCarousel(mediaList, project.title);

            // Overview (Handles multiple paragraphs/sections if defined as array)
            const overviewEl = document.getElementById('modalProjectOverview');
            if (overviewEl) {
                if (Array.isArray(project.overview)) {
                    overviewEl.innerHTML = project.overview.map(p => `<p class="overview-paragraph">${p}</p>`).join('');
                } else {
                    overviewEl.innerHTML = `<p class="overview-paragraph">${project.overview}</p>`;
                }
            }

            // Features List
            const featuresContainer = document.getElementById('modalProjectFeatures');
            if (featuresContainer) {
                featuresContainer.innerHTML = project.features.map(f => `
                    <li><i class="fa-solid fa-circle-check"></i> <span>${f}</span></li>
                `).join('');
            }

            // Tech Stack Badges
            const techContainer = document.getElementById('modalProjectTechStack');
            if (techContainer) {
                techContainer.innerHTML = project.techStack.map(t => `
                    <span class="tech-badge">${t}</span>
                `).join('');
            }

            // Action Links (GitHub & LinkedIn Buttons)
            const githubBtn = document.getElementById('modalProjectGithubBtn');
            const linkedinBtn = document.getElementById('modalProjectLinkedinBtn');

            const githubUrl = project.github || (project.link && project.link.includes('github.com') ? project.link : null);
            const linkedinUrl = project.linkedin || (project.link && project.link.includes('linkedin.com') ? project.link : null);

            if (githubBtn) {
                if (githubUrl) {
                    githubBtn.href = githubUrl;
                    githubBtn.style.display = 'inline-flex';
                } else {
                    githubBtn.style.display = 'none';
                }
            }

            if (linkedinBtn) {
                if (linkedinUrl) {
                    linkedinBtn.href = linkedinUrl;
                    linkedinBtn.style.display = 'inline-flex';
                } else {
                    linkedinBtn.style.display = 'none';
                }
            }

            // Show Overlay
            projectDetailsOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeProjectModal() {
        if (projectDetailsOverlay) {
            // Pause any playing videos or audios on modal close
            const mediaTrack = document.getElementById('modalMediaTrack');
            if (mediaTrack) {
                const allMedia = mediaTrack.querySelectorAll('video, audio');
                allMedia.forEach(m => m.pause());
                mediaTrack.querySelectorAll('.audio-play-btn i').forEach(icon => {
                    icon.className = 'fa-solid fa-play';
                });
            }

            projectDetailsOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    openModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const projectId = btn.getAttribute('data-project-id');
            openProjectModal(projectId);
        });
    });

    if (closeProjectDetailsBtn) {
        closeProjectDetailsBtn.addEventListener('click', closeProjectModal);
    }

    if (projectDetailsOverlay) {
        projectDetailsOverlay.addEventListener('click', (e) => {
            if (e.target === projectDetailsOverlay) {
                closeProjectModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectDetailsOverlay && projectDetailsOverlay.classList.contains('active')) {
            closeProjectModal();
        }
    });

});
