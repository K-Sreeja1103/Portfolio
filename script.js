/**
 * Sreeja K - Aspiring AI Engineer Portfolio
 * Loading Screen, Immediate Resume Download, Scroll Progress, Neural Canvas, & Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. AUTOMATIC LOADING SCREEN FADE OUT
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('fade-out');
        }, 1000);
    }

    // 2. TOP SCROLL PROGRESS BAR
    const scrollProgress = document.getElementById('scrollProgress');
    window.addEventListener('scroll', () => {
        if (scrollProgress) {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            scrollProgress.style.width = scrolled + '%';
        }
    });

    // 3. IMMEDIATE RESUME PDF GENERATION & DOWNLOAD
    function generateAndDownloadResumePDF() {
        const resumeText = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 800 >>
stream
BT
/F1 22 Tf
50 740 Td
(SREEJA K) Tj
0 -25 Td
/F1 12 Tf
(Artificial Intelligence & Data Science Undergraduate) Tj
0 -15 Td
(Email: sreejakaruppanan06@gmail.com | LinkedIn: linkedin.com/in/sreeja-k-b41161296 | GitHub: github.com/K-Sreeja1103) Tj
0 -30 Td
/F1 16 Tf
(PROFILE SUMMARY) Tj
0 -18 Td
/F1 10 Tf
(Artificial Intelligence and Data Science undergraduate passionate about Machine Learning,) Tj
0 -12 Td
(Artificial Intelligence, Data Science and Full-Stack Development. Actively seeking internship) Tj
0 -12 Td
(and full-time AI Engineer opportunities.) Tj
0 -30 Td
/F1 16 Tf
(EDUCATION) Tj
0 -18 Td
/F1 11 Tf
(B.Tech in Artificial Intelligence and Data Science | CGPA: 8.2) Tj
0 -14 Td
/F1 10 Tf
(Dr. Mahalingam College of Engineering and Technology (2023 - 2027)) Tj
0 -18 Td
/F1 11 Tf
(Higher Secondary Certificate (HSC) | Score: 86.5%) Tj
0 -14 Td
/F1 10 Tf
(KCM Matric Higher Secondary School (2023)) Tj
0 -30 Td
/F1 16 Tf
(KEY SKILLS) Tj
0 -18 Td
/F1 10 Tf
(Languages: Python, Java, JavaScript, HTML5, CSS3, SQL) Tj
0 -14 Td
/F1 10 Tf
(Databases: MySQL, MongoDB) Tj
0 -14 Td
/F1 10 Tf
(Core Areas: Machine Learning, Artificial Intelligence, Data Science, Full-Stack Web Development) Tj
0 -14 Td
/F1 10 Tf
(Tools: Git, GitHub, VS Code, Chrome DevTools) Tj
0 -30 Td
/F1 16 Tf
(EXPERIENCE & PROJECTS) Tj
0 -18 Td
/F1 11 Tf
(Web Developer Intern - CodeBind Technologies) Tj
0 -14 Td
/F1 10 Tf
(Database integration, performance optimization, and application UI enhancements.) Tj
0 -18 Td
/F1 11 Tf
(Career Prediction System (Machine Learning)) Tj
0 -14 Td
/F1 10 Tf
(Developed predictive recommendation model using Python, Pandas, and Scikit-learn.) Tj
0 -18 Td
/F1 11 Tf
(Pet Take Care Web Application) Tj
0 -14 Td
/F1 10 Tf
(Designed responsive web application for managing pet health and feeding schedules.) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000236 00000 n 
0000001100 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
1170
%%EOF`;

        const blob = new Blob([resumeText], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Sreeja_K_Resume.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 1000);

        if (window.showToast) {
            window.showToast('Downloading Sreeja_K_Resume.pdf...');
        }
    }

    // Attach immediate download listeners to all resume buttons
    const resumeButtons = document.querySelectorAll('.trigger-resume-download');
    resumeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            generateAndDownloadResumePDF();
        });
    });

    // 4. NEURAL NETWORK CANVAS ANIMATION
    const canvas = document.getElementById('neuralCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        function resizeCanvas() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.8;
                this.vy = (Math.random() - 0.5) * 0.8;
                this.radius = Math.random() * 2 + 1.5;
                this.color = Math.random() > 0.4 ? 'rgba(37, 99, 235, 0.4)' : 'rgba(6, 182, 212, 0.4)';
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        const particleCount = Math.min(Math.floor(window.innerWidth / 20), 60);
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 130) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(37, 99, 235, ${0.15 * (1 - dist / 130)})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(animateCanvas);
        }

        animateCanvas();
    }

    // 5. CURSOR GLOW RING
    const cursorGlow = document.getElementById('cursorGlow');
    if (cursorGlow) {
        window.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = `${e.clientX}px`;
            cursorGlow.style.top = `${e.clientY}px`;
        });
    }

    // 6. SCROLL REVEAL OBSERVER
    const revealElements = document.querySelectorAll('[data-reveal]');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 7. TOAST NOTIFICATION
    const toast = document.getElementById('toast');
    const toastText = document.getElementById('toastText');

    window.showToast = function(message) {
        if (toast && toastText) {
            toastText.textContent = message;
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3500);
        }
    };

    // 8. COPY EMAIL FUNCTION
    window.copyEmail = function(email) {
        navigator.clipboard.writeText(email).then(() => {
            showToast(`Email copied to clipboard: ${email}`);
        }).catch(() => {
            showToast(`Email: ${email}`);
        });
    };

    // 9. PROJECT DETAILS MODAL
    const modalProjectDetails = document.getElementById('modalProjectDetails');
    const closeProjectModal = document.getElementById('closeProjectModal');

    function closeModal(modal) {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    if (closeProjectModal) closeProjectModal.addEventListener('click', () => closeModal(modalProjectDetails));
    if (modalProjectDetails) {
        modalProjectDetails.addEventListener('click', (e) => {
            if (e.target === modalProjectDetails) closeModal(modalProjectDetails);
        });
    }

    window.openProjectDetails = function(projectType) {
        const titleEl = document.getElementById('projectModalTitle');
        const bodyEl = document.getElementById('projectModalBody');

        if (projectType === 'career') {
            titleEl.textContent = 'Career Prediction System';
            bodyEl.innerHTML = `
                <div class="project-modal-detail">
                    <p class="modal-lead">Developed a Machine Learning-based Career Prediction System using Python, Pandas, and Scikit-learn for data preprocessing, feature engineering, model training, and career path recommendation.</p>
                    <hr style="margin: 16px 0; border: 0; border-top: 1px solid var(--border-light);">
                    <h4>Key Architecture & Features:</h4>
                    <ul style="margin: 12px 0 20px 20px; line-height: 1.7; color: var(--text-secondary);">
                        <li><strong>Data Preprocessing:</strong> Handled missing data, categorical encoding, and feature scaling using Pandas.</li>
                        <li><strong>ML Algorithms:</strong> Trained Random Forest, Decision Trees, and Support Vector Classifiers.</li>
                        <li><strong>Recommendation Engine:</strong> Matches user technical skill vectors with optimal industry roles.</li>
                    </ul>
                    <a href="https://github.com/K-Sreeja1103" target="_blank" class="btn btn-primary btn-sm">
                        <i class="fa-brands fa-github"></i> View Code on GitHub
                    </a>
                </div>
            `;
        } else if (projectType === 'pet') {
            titleEl.textContent = 'Pet Take Care Web Application';
            bodyEl.innerHTML = `
                <div class="project-modal-detail">
                    <p class="modal-lead">Designed and developed a responsive web application for pet owners to track feeding schedules, vaccination reminders, health status, and veterinary appointments.</p>
                    <hr style="margin: 16px 0; border: 0; border-top: 1px solid var(--border-light);">
                    <h4>Key Features & Highlights:</h4>
                    <ul style="margin: 12px 0 20px 20px; line-height: 1.7; color: var(--text-secondary);">
                        <li><strong>Responsive UI:</strong> Clean layout built using HTML5, CSS3, and JavaScript.</li>
                        <li><strong>Care Routine Manager:</strong> Interactive feeding schedule and vaccination reminder tracker.</li>
                        <li><strong>Health Dashboard:</strong> Intuitive web cards for veterinary visits and pet growth records.</li>
                    </ul>
                    <a href="https://github.com/K-Sreeja1103" target="_blank" class="btn btn-secondary btn-sm">
                        <i class="fa-brands fa-github"></i> View Code on GitHub
                    </a>
                </div>
            `;
        }

        if (modalProjectDetails) {
            modalProjectDetails.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    // 10. CONTACT FORM HANDLER
    const contactForm = document.getElementById('portfolioContactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const senderName = document.getElementById('inputName').value;
            contactForm.reset();
            showToast(`Thank you ${senderName}! Your message has been sent to Sreeja.`);
        });
    }

    // 11. ACTIVE NAVBAR LINK HIGHLIGHTING
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSection = '';
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

    // 12. MOBILE MENU TOGGLE
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});
