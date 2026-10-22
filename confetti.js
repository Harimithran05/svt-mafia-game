/* Mafia Party Game - Confetti & Fireworks Canvas Animation */

const VictoryEffects = {
    canvas: null,
    ctx: null,
    active: false,
    particles: [],
    fireworks: [],
    animationFrameId: null,
    colors: [
        '#00f0ff', // Electric Blue
        '#bc34fa', // Neon Purple
        '#ff0055', // Neon Red
        '#39ff14', // Neon Green
        '#ffea00', // Neon Yellow
        '#ff00ff'  // Magenta
    ],
    
    init() {
        this.canvas = document.getElementById('confetti-canvas');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.resize();
        window.addEventListener('resize', () => this.resize());
    },
    
    resize() {
        if (!this.canvas) return;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    },
    
    start() {
        this.init();
        if (!this.canvas) return;
        this.active = true;
        this.particles = [];
        this.fireworks = [];
        
        // Spawn initial batch of confetti particles
        for (let i = 0; i < 150; i++) {
            this.particles.push(this.createConfettiParticle());
        }
        
        this.loop();
    },
    
    stop() {
        this.active = false;
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
        if (this.ctx) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
        this.particles = [];
        this.fireworks = [];
    },
    
    createConfettiParticle() {
        return {
            x: Math.random() * this.canvas.width,
            y: Math.random() * -this.canvas.height - 20,
            size: Math.random() * 8 + 6,
            color: this.colors[Math.floor(Math.random() * this.colors.length)],
            speedX: Math.random() * 4 - 2,
            speedY: Math.random() * 3 + 2,
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 4 - 2,
            opacity: Math.random() * 0.5 + 0.5
        };
    },
    
    createFireworkBurst(x, y) {
        const particleCount = 40;
        const color = this.colors[Math.floor(Math.random() * this.colors.length)];
        
        for (let i = 0; i < particleCount; i++) {
            const angle = (Math.PI * 2 / particleCount) * i + (Math.random() * 0.4 - 0.2);
            const speed = Math.random() * 5 + 3;
            
            this.fireworks.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - (Math.random() * 2), // slightly upward bias
                color: color,
                size: Math.random() * 3 + 2,
                alpha: 1,
                decay: Math.random() * 0.015 + 0.01
            });
        }
    },
    
    loop() {
        if (!this.active || !this.ctx) return;
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // 1. Draw and Update Confetti Particles
        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];
            
            p.x += p.speedX;
            p.y += p.speedY;
            p.rotation += p.rotationSpeed;
            
            // Wind drift
            p.speedX += Math.sin(p.y / 30) * 0.05;
            
            // If fallen off screen bottom, recycle it to top
            if (p.y > this.canvas.height) {
                this.particles[i] = this.createConfettiParticle();
                this.particles[i].y = -20;
            }
            
            this.ctx.save();
            this.ctx.translate(p.x + p.size/2, p.y + p.size/2);
            this.ctx.rotate(p.rotation * Math.PI / 180);
            this.ctx.fillStyle = p.color;
            this.ctx.globalAlpha = p.opacity;
            this.ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
            this.ctx.restore();
        }
        
        // 2. Randomly trigger firework launches
        if (Math.random() < 0.03) {
            const launchX = Math.random() * this.canvas.width;
            const launchY = Math.random() * (this.canvas.height * 0.5); // upper half
            this.createFireworkBurst(launchX, launchY);
            // Optionally play a sound through app (handled in app.js or trigger sound)
        }
        
        // 3. Draw and Update Firework Explosion Particles
        for (let i = this.fireworks.length - 1; i >= 0; i--) {
            const f = this.fireworks[i];
            
            f.x += f.vx;
            f.y += f.vy;
            f.vy += 0.08; // gravity
            f.alpha -= f.decay;
            
            if (f.alpha <= 0) {
                this.fireworks.splice(i, 1);
                continue;
            }
            
            this.ctx.save();
            this.ctx.globalAlpha = f.alpha;
            this.ctx.fillStyle = f.color;
            
            // Draw a glowing spark
            this.ctx.beginPath();
            this.ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
            this.ctx.shadowBlur = 10;
            this.ctx.shadowColor = f.color;
            this.ctx.fill();
            this.ctx.restore();
        }
        
        this.animationFrameId = requestAnimationFrame(() => this.loop());
    }
};
