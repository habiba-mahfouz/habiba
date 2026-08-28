// ==========================================================================
// PROJECTS DATABASE - SINGLE SOURCE OF TRUTH (Data for all Projects)
// ==========================================================================

const projectsData = {
    // --- SOLO PROJECTS ---
    'solo-network-fundamentals': {
        title: 'Network Fundamentals',
        type: 'Solo Project',
        team: 'Individual Project',
        media: [
            { type: 'image', src: 'images/Network.png', alt: 'Network Fundamentals Topology' }
        ],
        overview: 'A comprehensive multi-branch enterprise network architecture simulated using Cisco Packet Tracer. The project covers complete IP addressing schemes, classful & classless subnetting, RIP dynamic routing protocols, and static/dynamic Network Address Translation (NAT).',
        features: [
            'Multi-branch enterprise network topology design',
            'IP Addressing scheme & subnetting calculation',
            'Static & Dynamic Routing (RIP protocol integration)',
            'Static & Dynamic NAT for WAN access',
            'Switching configurations & VLAN segmentation'
        ],
        techStack: ['Cisco Packet Tracer', 'Networking', 'RIP', 'NAT', 'Subnetting', 'VLANs'],
        
        github: 'https://github.com/habiba-mahfouz/Network-Fundamentals-Project',
        linkedin: 'https://lnkd.in/p/dcWDeBeD' 
    },
    'solo-enterprise-security': {
        title: 'Enterprise Network Security',
        type: 'Solo Project',
        team: 'Individual Project',
        media: [
            { type: 'image', src: 'images/ccna.png', alt: 'Enterprise Network Security Topology' }
        ],
        overview: 'A robust and secure enterprise network deployment engineered with Cisco Packet Tracer. Built with defense-in-depth security principles including VLAN isolation, OSPF routing, encrypted SSH management, port security, DHCP snooping, and IPsec VPN tunnels.',
        features: [
            'Encrypted SSH remote management & admin authentication',
            'Port Security & MAC address sticky binding',
            'DHCP Snooping & Dynamic ARP Inspection (DAI)',
            'OSPF Routing Protocol with authentication',
            'Site-to-Site IPsec VPN Tunneling for safe branch interconnectivity'
        ],
        techStack: ['Cisco Packet Tracer', 'Network Security', 'OSPF', 'IPsec VPN', 'SSH', 'DHCP Snooping'],
        github: 'https://github.com/habiba-mahfouz/Enterprise-Network-Security'
    },
    'solo-library-cpp': {
        title: 'Library Management System',
        type: 'Solo Project',
        team: 'Individual Project',
        media: [
            { type: 'image', src: 'images/libc++.png', alt: 'Library Management System C++' }
        ],
        overview: 'A high-performance console application built in C++ to automate library management operations. Leverages object-oriented programming (OOP), pointers, and structured file I/O to manage book catalogs, record member borrowing history, and compute statistical reports.',
        features: [
            'Full CRUD operations for book inventory management',
            'Borrower logging & return transaction calculations',
            'Object-Oriented Architecture (Classes, Inheritance, Encapsulation)',
            'Persistent File Storage (File Handling in C++)',
            'Search & filter algorithm by Title, Author, or ISBN'
        ],
        techStack: ['C++', 'OOP', 'Data Structures', 'File Handling', 'Algorithms'],
        github: 'https://github.com/habiba-mahfouz/Library-Management-System-Cpp'
    },
    'solo-snake-game': {
        title: 'Snake Game',
        type: 'Solo Project',
        team: 'Individual Project',
        media: [
            { type: 'image', src: 'images/snake1.png', alt: 'Snake Game Python' },
            { type: 'video', src: 'videos/snake1.mp4', title: 'CineStream App Demo' },
            { type: 'image', src: 'images/snake2.png', alt: 'Snake Game Python' },
            { type: 'video', src: 'videos/snake2.mp4', title: 'CineStream App Demo' }
        ],
        overview: 'An interactive arcade Snake game developed in Python. Features real-time keyboard event listening, smooth frame animation, dynamic collision detection algorithms, and automated score tracking with high-score persistence.',
        features: [
            'Real-time keyboard event handling & movement loop',
            'Dynamic snake growth & random food spawning algorithm',
            'Boundary & self-collision detection logic',
            'Scoreboard manager & high-score local storage',
            'Clean graphical interface using Pygame / Turtle module'
        ],
        techStack: ['Python', 'Pygame', 'GUI', 'Algorithms', 'Game Loop Logic'],
        github: 'https://github.com/habiba-mahfouz/Snake-Game-Python',
    },
    'solo-expression-calculator': {
        title: 'Expression Calculator',
        type: 'Solo Project',
        team: 'Individual Project',
        media: [
            { type: 'image', src: 'images/calajava.png', alt: 'Expression Calculator Java' }
        ],
        overview: 'An algorithmic mathematical expression evaluator engineered in Java. Converts complex infix mathematical expressions into postfix notation using custom Stack data structures and parses operator precedence rules accurately.',
        features: [
            'Infix-to-Postfix Expression conversion algorithm',
            'Custom Stack & Linked List data structure implementation',
            'Operator precedence & parenthesis handling logic',
            'Floating-point arithmetic & error handling for divide-by-zero',
            'Command-line user interface for mathematical evaluation'
        ],
        techStack: ['Java', 'Data Structures', 'Stacks', 'Algorithms', 'Expression Parsing'],
        link: 'https://github.com/habiba-mahfouz/Expression-Calculator-Java'
    },
    'solo-booki-ux': {
        title: 'Booki',
        type: 'Solo Project',
        team: 'Individual UX Research & Design',
        media: [
            { type: 'image', src: 'images/Booki.png', alt: 'Booki UX Case Study' },
            { type: 'video', src: 'videos/booki.mp4', title: 'Booki UX Prototype Demo' }
        ],
        overview: 'A complete UX Case Study and interactive UI design for "Booki", an online bookstore concept. Encompasses the full user-centered design lifecycle from user interviews and persona formulation to wireframing and high-fidelity Figma prototyping.',
        features: [
            'User Research, Competitor Analysis & Empathy Mapping',
            'User Personas & User Journey Mapping',
            'Information Architecture & Sitemap structuring',
            'Low-Fidelity & High-Fidelity Wireframes',
            'Interactive Figma Prototype with smooth user flows'
        ],
        techStack: ['Figma', 'UX Research', 'User Personas', 'Wireframing', 'Prototyping', 'UI Design'],
        github: 'https://github.com/habiba-mahfouz/Booki-UX-Case-Study',
        linkedin: 'https://lnkd.in/p/dee3Xvjj' 
    },

    // --- TEAM PROJECTS ---
    'team-college-system': {
        title: 'College Management System',
        type: 'Team Project',
        team: 'Academic Team Project (Faculty of Science - SIM)',
        media: [
            { type: 'image', src: 'images/college.png', alt: 'College Management System' }
        ],
        overview: 'A comprehensive collaborative Java desktop system for academic college administration. Manages student enrollments, course catalogs, professor schedules, attendance tracking, and semester GPA calculation.',
        features: [
            'Role-Based Access Control (Admin, Student, Instructor)',
            'Course registration & capacity management system',
            'Student academic profile & GPA calculation module',
            'Interactive Graphical User Interface (Java Swing/JavaFX)',
            'Database / Data File persistence'
        ],
        techStack: ['Java', 'JavaFX / Swing', 'OOP', 'Data Structures', 'Database Design'],
        github: 'https://github.com/habiba-mahfouz/college-system-java'
    },
    'team-flight-booking': {
        title: 'Flight Booking System',
        type: 'Team Project',
        team: 'Collaborative Engineering Team Project',
        media: [
            { type: 'image', src: 'images/flight.png', alt: 'Flight Booking System' },
            { type: 'video', src: 'videos/flight.mp4', title: 'Flight Booking System' }
        ],
        overview: 'A feature-rich flight reservation system built in Java. Designed to manage flight schedules, passenger details, seat selection algorithms, electronic ticket generation, and booking confirmation pipelines.',
        features: [
            'Flight search engine by destination, date, and class',
            'Interactive seat selection & availability map',
            'Passenger details management & reservation logging',
            'Digital e-ticket generation with confirmation code',
            'Object-oriented system design & exception handling'
        ],
        techStack: ['Java', 'OOP', 'GUI', 'Data Structures', 'Algorithms'],
        github: 'https://github.com/habiba-mahfouz/Flight-booking-System-Java',
        linkedin: 'https://www.linkedin.com/posts/habiba-mahfouz-4ba87334a_java-javaswing-oop-activity-7436049829925081090-8RP5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFdWTg4BC1DfXdq12kC-KdbVcNdBspejZlM' 
    },
    'team-palestine-multimedia': {
        title: 'Palestine Multimedia',
        type: 'Team Project',
        team: 'Multimedia Team Project',
        media: [
            { type: 'image', src: 'images/logo.png', alt: 'Palestine Multimedia Platform' },
            { type: 'audio', src: 'videos/audio.wav', title: 'Palestine Multimedia Platform' }
        ],
        overview: 'An interactive cultural & educational web platform built to showcase Palestinian history, heritage, and multimedia media campaigns through immersive web components.',
        features: [
            'Interactive historical timeline & media gallery',
            'High-quality audio/video embedded players',
            'Responsive design optimized across mobile & desktop',
            'Custom CSS styling & smooth scroll transitions',
            'Unified team design system & visual identity'
        ],
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'Multimedia Design', 'UI/UX'],
        github: 'https://github.com/habiba-mahfouz/Palestine-Multimedia'
    },
    'team-cinestream': {
        title: 'CineStream',
        type: 'Team Project',
        team: 'Frontend Web Team Project',
        media: [
            { type: 'image', src: 'images/movie.png', alt: 'CineStream Movie Platform' },
            { type: 'video', src: 'videos/cinestream.mp4', title: 'CineStream App Demo' }
        ],
        overview: ['A Full-Stack Movie Platform Web Application 🎓' ,
                  'CineStream is a dynamic, full-stack movie streaming platform simulation. This project was collaboratively designed and developed from scratch by our team as our final project for the Web Programming course at Alexandria University.',
                  'Our primary goal was to build a robust application focusing on a seamless user experience, responsive UI design, and strong database architecture.'],
        features: [
            'Movie discovery grid with real-time live search',
            'Category & Genre filtering (Action, Drama, Sci-Fi, etc.)',
            'Detailed modal overlay with trailer embeds & rating statistics',
            'Responsive layout with dark mode cinematic UI theme',
            'Local Storage integration for user Watchlist'
        ],
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'API Integration', 'UI/UX'],
        link: 'https://github.com/habiba-mahfouz/cinestream-movie-platform',
        linkedin: 'https://www.linkedin.com/posts/habiba-mahfouz-4ba87334a_webdevelopment-webprogramming-fullstack-activity-7461869866317385728-L47H?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFdWTg4BC1DfXdq12kC-KdbVcNdBspejZlM'
    },
    'team-book-bloom': {
        title: 'Book Bloom',
        type: 'Team Project',
        team: 'Frontend Web Team Project',
        media: [
            { type: 'image', src: 'images/bookbloom.png', alt: 'Book Bloom Bookstore App' }
        ],
        overview: 'An online bookstore web application featuring a rich user shopping flow. Includes account authentication, book categorization, interactive shopping cart, checkout workflow, and administrative dashboards.',
        features: [
            'User Authentication & Profile dashboard',
            'Interactive Shopping Cart with quantity adjustments & subtotal calculations',
            'Category browsing & live book search filters',
            'Checkout workflow & order summary confirmation',
            'Employee/Admin dashboard for book inventory updates'
        ],
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation', 'UI/UX'],
        github: 'https://github.com/habiba-mahfouz/Book-Bloom-WebApp'
    },
    'team-unity-game': {
        title: '3D Unity Game',
        type: 'Team Project',
        team: 'Team of 4 (Habiba Mahfouz, Mazen Ashraf, Fathy Medhat, Habiba Hossam)',
        media: [
            { type: 'image', src: 'images/unity.png', alt: '3D Unity Game Project' },
            { type: 'video', src: 'videos/3d game.mp4', title: 'Unity 3D Gameplay Video' }
        ],
        overview: 'A 3D game project developed in Unity as part of third-semester game development coursework. Focuses on core gameplay mechanics, player physics logic, level design, and team collaboration.',
        features: [
            'Custom 3D player movement & physics mechanics',
            'Interactive game environment & obstacles',
            'Collision detection & game-over logic',
            'Sound effects & UI score integration',
            'Collaborative Unity project architecture & C# scripting'
        ],
        techStack: ['Unity 3D', 'C#', 'Game Programming', 'Physics Engine', 'Level Design'],
        github: 'https://www.linkedin.com/posts/mazen-ashraf-268540268_unity-gameprogramming-project-ugcPost-7425342797844578304-yMGE',
        linkedin: 'https://www.linkedin.com/posts/mazen-ashraf-268540268_unity-gameprogramming-project-ugcPost-7425342797844578304-yMGE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFdWTg4BC1DfXdq12kC-KdbVcNdBspejZlM'
    },
    'team-marketix-hci': {
        title: 'Marketix',
        type: 'Team Project',
        team: 'HCI Team of 4 (Habiba Mahfouz, Hassan Montaser, Omar Salah, Mazen Ashraf)',
        media: [
            { type: 'image', src: 'images/marketix1.png', alt: 'Marketix HCI UX App' },
            { type: 'image', src: 'images/marketix2.jpeg', alt: 'Marketix HCI UX App' },
            { type: 'image', src: 'images/marketix3.jpeg', alt: 'Marketix HCI UX App' },
            { type: 'image', src: 'images/marketix4.jpeg', alt: 'Marketix HCI UX App' },
            { type: 'image', src: 'images/marketix5.jpeg', alt: 'Marketix HCI UX App' }
        ],
        overview: 'An innovative Human-Computer Interaction (HCI) shopping application design created at Alexandria University. Introduces a unique flexible delivery pricing system giving users control over delivery cost vs speed.',
        features: [
            'Competitor analysis, user surveys & empathy mapping',
            'User Personas, User Journey Maps & Information Architecture',
            'Flexible delivery pricing model design',
            'Low-Fidelity & Medium-Fidelity Wireframes in FigJam',
            'Interactive prototype with realistic user task flows in Figma'
        ],
        techStack: ['Figma', 'FigJam', 'HCI Research', 'User Journey Mapping', 'Prototyping', 'UX/UI Design'],
        linkedin: 'https://www.linkedin.com/posts/hassan-montaser-7970583b3_hci-uxdesign-uidesign-ugcPost-7495640873150488576-gqL9'
    }
};

// If standalone project-details.html page is opened directly
document.addEventListener('DOMContentLoaded', () => {
    const isStandalonePage = document.getElementById('projectMediaTrack');
    if (!isStandalonePage) return;

    let currentMediaIndex = 0;
    let totalMediaSlides = 0;

    function renderMediaCarousel(mediaList, projectTitle) {
        const track = document.getElementById('projectMediaTrack');
        const dotsContainer = document.getElementById('projectMediaDots');
        const prevBtn = document.getElementById('projectMediaPrev');
        const nextBtn = document.getElementById('projectMediaNext');

        if (!track) return;

        track.innerHTML = '';
        if (dotsContainer) dotsContainer.innerHTML = '';
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
            track.appendChild(slide);
        });

        if (totalMediaSlides > 1) {
            if (prevBtn) prevBtn.style.display = 'flex';
            if (nextBtn) nextBtn.style.display = 'flex';
            if (dotsContainer) {
                dotsContainer.style.display = 'flex';
                items.forEach((_, i) => {
                    const dot = document.createElement('span');
                    dot.className = i === 0 ? 'dot active' : 'dot';
                    dot.setAttribute('data-index', i);
                    dot.addEventListener('click', () => {
                        updateMediaCarousel(i);
                    });
                    dotsContainer.appendChild(dot);
                });
            }
        } else {
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
            if (dotsContainer) dotsContainer.style.display = 'none';
        }

        updateMediaCarousel(0);
    }

    function updateMediaCarousel(index) {
        const track = document.getElementById('projectMediaTrack');
        const dotsContainer = document.getElementById('projectMediaDots');
        if (!track || totalMediaSlides === 0) return;

        const allMedia = track.querySelectorAll('video, audio');
        allMedia.forEach(m => m.pause());
        track.querySelectorAll('.audio-play-btn i').forEach(icon => {
            icon.className = 'fa-solid fa-play';
        });

        if (index < 0) {
            currentMediaIndex = totalMediaSlides - 1;
        } else if (index >= totalMediaSlides) {
            currentMediaIndex = 0;
        } else {
            currentMediaIndex = index;
        }

        track.style.transform = `translateX(-${currentMediaIndex * 100}%)`;

        if (dotsContainer) {
            const dots = dotsContainer.querySelectorAll('.dot');
            dots.forEach((d, i) => {
                d.classList.toggle('active', i === currentMediaIndex);
            });
        }
    }

    const prevBtn = document.getElementById('projectMediaPrev');
    const nextBtn = document.getElementById('projectMediaNext');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            updateMediaCarousel(currentMediaIndex - 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            updateMediaCarousel(currentMediaIndex + 1);
        });
    }

    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id') || 'solo-network-fundamentals';
    const project = projectsData[projectId];

    if (project) {
        document.title = `${project.title} - Project Details`;

        const headerTitle = document.getElementById('headerProjectTitle');
        if (headerTitle) headerTitle.textContent = project.title;

        const projTitle = document.getElementById('projectTitle');
        if (projTitle) projTitle.textContent = project.title;

        renderMediaCarousel(project.media || [], project.title);

        const overviewEl = document.getElementById('projectOverview');
        if (overviewEl) {
            if (Array.isArray(project.overview)) {
                overviewEl.innerHTML = project.overview.map(p => `<p class="overview-paragraph">${p}</p>`).join('');
            } else {
                overviewEl.innerHTML = `<p class="overview-paragraph">${project.overview}</p>`;
            }
        }

        const featuresContainer = document.getElementById('projectFeatures');
        if (featuresContainer) {
            featuresContainer.innerHTML = project.features.map(f => `
                <li><i class="fa-solid fa-circle-check"></i> <span>${f}</span></li>
            `).join('');
        }

        const techContainer = document.getElementById('projectTechStack');
        if (techContainer) {
            techContainer.innerHTML = project.techStack.map(t => `
                <span class="tech-badge">${t}</span>
            `).join('');
        }

        const githubBtn = document.getElementById('projectGithubBtn');
        const linkedinBtn = document.getElementById('projectLinkedinBtn');

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
    }

    const closeBtn = document.getElementById('closeDetailsBtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            window.location.href = 'index.html#projects';
        });
    }
});
