/* Mafia Party Game - Web Audio API Synthesizer */

const AudioManager = {
    ctx: null,
    musicEnabled: true,
    sfxEnabled: true,
    
    // Music state
    musicPlaying: false,
    musicNodes: [],
    droneInterval: null,
    
    init() {
        if (this.ctx) return;
        try {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContextClass();
        } catch (e) {
            console.error("Web Audio API not supported in this browser:", e);
        }
    },
    
    ensureCtx() {
        this.init();
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    },

    setSettings(music, sfx) {
        this.musicEnabled = music;
        this.sfxEnabled = sfx;
        
        if (!this.musicEnabled) {
            this.stopMusic();
        } else if (this.musicEnabled && !this.musicPlaying) {
            this.playMusic();
        }
    },

    playSFX(type) {
        if (!this.sfxEnabled) return;
        this.ensureCtx();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        
        switch (type) {
            case 'click':
                this.synthesizeClick(now);
                break;
            case 'tick':
                this.synthesizeTick(now);
                break;
            case 'reveal':
                this.synthesizeReveal(now);
                break;
            case 'eliminate':
                this.synthesizeElimination(now);
                break;
            case 'victory':
                this.synthesizeVictory(now);
                break;
            case 'transition':
                this.synthesizeTransition(now);
                break;
        }
    },

    /* --- Sound Effect Generators --- */
    
    // Quick click/pop sound
    synthesizeClick(time) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, time);
        osc.frequency.exponentialRampToValueAtTime(150, time + 0.08);
        
        gain.gain.setValueAtTime(0.15, time);
        gain.gain.exponentialRampToValueAtTime(0.01, time + 0.08);
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.start(time);
        osc.stop(time + 0.09);
    },

    // Soft clock tick
    synthesizeTick(time) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1600, time);
        
        gain.gain.setValueAtTime(0.05, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.02);
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.start(time);
        osc.stop(time + 0.03);
    },

    // A mysterious rising role reveal sound
    synthesizeReveal(time) {
        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const filter = this.ctx.createBiquadFilter();
        const gain = this.ctx.createGain();
        
        // Detuned saw oscillators
        osc1.type = 'sawtooth';
        osc1.frequency.setValueAtTime(90, time);
        osc1.frequency.exponentialRampToValueAtTime(440, time + 0.8);
        
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(91, time);
        osc2.frequency.exponentialRampToValueAtTime(443, time + 0.8);
        
        // Lowpass sweep
        filter.type = 'lowpass';
        filter.Q.setValueAtTime(8, time);
        filter.frequency.setValueAtTime(100, time);
        filter.frequency.exponentialRampToValueAtTime(1800, time + 0.7);
        
        gain.gain.setValueAtTime(0.01, time);
        gain.gain.linearRampToValueAtTime(0.18, time + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.8);
        
        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc1.start(time);
        osc2.start(time);
        osc1.stop(time + 0.8);
        osc2.stop(time + 0.8);
    },

    // Heavy low frequency gong/impact for elimination
    synthesizeElimination(time) {
        const osc = this.ctx.createOscillator();
        const noise = this.createNoiseNode();
        const noiseFilter = this.ctx.createBiquadFilter();
        const noiseGain = this.ctx.createGain();
        const oscGain = this.ctx.createGain();
        
        // Sub-bass hit
        osc.type = 'sine';
        osc.frequency.setValueAtTime(90, time);
        osc.frequency.linearRampToValueAtTime(50, time + 1.2);
        
        oscGain.gain.setValueAtTime(0.35, time);
        oscGain.gain.exponentialRampToValueAtTime(0.001, time + 1.2);
        
        // Noise burst (resembles dynamic crash/whoosh)
        noiseFilter.type = 'bandpass';
        noiseFilter.frequency.setValueAtTime(250, time);
        noiseFilter.Q.setValueAtTime(3, time);
        
        noiseGain.gain.setValueAtTime(0.15, time);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, time + 0.8);
        
        osc.connect(oscGain);
        oscGain.connect(this.ctx.destination);
        
        if (noise) {
            noise.connect(noiseFilter);
            noiseFilter.connect(noiseGain);
            noiseGain.connect(this.ctx.destination);
            noise.start(time);
            noise.stop(time + 0.9);
        }
        
        osc.start(time);
        osc.stop(time + 1.3);
    },

    // Uplifting arpeggio for victory
    synthesizeVictory(time) {
        const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50]; // C major arpeggio
        const duration = 0.12;
        
        notes.forEach((freq, index) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, time + (index * 0.08));
            
            gain.gain.setValueAtTime(0.001, time + (index * 0.08));
            gain.gain.linearRampToValueAtTime(0.1, time + (index * 0.08) + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, time + (index * 0.08) + 0.3);
            
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            
            osc.start(time + (index * 0.08));
            osc.stop(time + (index * 0.08) + 0.32);
        });
    },

    // Wind sweep transition
    synthesizeTransition(time) {
        const noise = this.createNoiseNode();
        if (!noise) return;
        
        const filter = this.ctx.createBiquadFilter();
        const gain = this.ctx.createGain();
        
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(150, time);
        filter.frequency.exponentialRampToValueAtTime(1000, time + 0.4);
        filter.frequency.exponentialRampToValueAtTime(100, time + 0.8);
        filter.Q.setValueAtTime(2, time);
        
        gain.gain.setValueAtTime(0.001, time);
        gain.gain.linearRampToValueAtTime(0.08, time + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.8);
        
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        
        noise.start(time);
        noise.stop(time + 0.8);
    },

    // Noise buffer generator
    createNoiseNode() {
        if (!this.ctx) return null;
        const bufferSize = this.ctx.sampleRate * 1.5;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        
        const source = this.ctx.createBufferSource();
        source.buffer = buffer;
        return source;
    },

    /* --- Background Music System --- */
    
    playNote(freq, startTime, duration, type = 'triangle', volume = 0.05) {
        if (!this.ctx) return [];
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = type;
        osc.frequency.setValueAtTime(freq, startTime);
        
        // Soft envelope to prevent clicks
        gain.gain.setValueAtTime(0.001, startTime);
        gain.gain.linearRampToValueAtTime(volume, startTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration - 0.02);
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.start(startTime);
        osc.stop(startTime + duration);
        
        return [osc, gain];
    },

    playMusic() {
        if (this.musicPlaying || !this.musicEnabled) return;
        this.ensureCtx();
        if (!this.ctx) return;
        
        this.musicPlaying = true;
        
        // Loop of SEVENTEEN "Don't Wanna Cry" synth theme
        this.triggerSeventeenTheme();
        this.droneInterval = setInterval(() => {
            this.triggerSeventeenTheme();
        }, 19200); // Trigger loop every 19.2 seconds
    },
    
    triggerSeventeenTheme() {
        if (!this.musicPlaying || !this.ctx) return;
        const now = this.ctx.currentTime;
        const step = 0.3; // 8th note duration at 100 BPM
        
        const nodes = [];
        
        // 1. CHORDS PROGRESSION (4 chords, each 4.8 seconds)
        // Am (A minor) starting at 0s
        nodes.push(...this.playNote(110.00, now, 4.8, 'sawtooth', 0.025)); // A2
        nodes.push(...this.playNote(130.81, now, 4.8, 'sine', 0.035));     // C3
        nodes.push(...this.playNote(164.81, now, 4.8, 'sine', 0.035));     // E3
        
        // F (F major) starting at 4.8s
        nodes.push(...this.playNote(87.31, now + 4.8, 4.8, 'sawtooth', 0.025));  // F2
        nodes.push(...this.playNote(110.00, now + 4.8, 4.8, 'sine', 0.035));     // A2
        nodes.push(...this.playNote(130.81, now + 4.8, 4.8, 'sine', 0.035));     // C3
        
        // C (C major) starting at 9.6s
        nodes.push(...this.playNote(130.81, now + 9.6, 4.8, 'sawtooth', 0.025));  // C3
        nodes.push(...this.playNote(164.81, now + 9.6, 4.8, 'sine', 0.035));     // E3
        nodes.push(...this.playNote(196.00, now + 9.6, 4.8, 'sine', 0.035));     // G3
        
        // G (G major) starting at 14.4s
        nodes.push(...this.playNote(98.00, now + 14.4, 4.8, 'sawtooth', 0.025));  // G2
        nodes.push(...this.playNote(123.47, now + 14.4, 4.8, 'sine', 0.035));     // B2
        nodes.push(...this.playNote(146.83, now + 14.4, 4.8, 'sine', 0.035));     // D3

        // 2. MELODY LEAD: "Don't Wanna Cry" Hook (64 steps * 0.3s = 19.2s loop)
        const melody = [
            // First Half
            { note: 659.25, time: 0, dur: 2 },   // E5
            { note: 587.33, time: 2, dur: 2 },   // D5
            { note: 523.25, time: 4, dur: 2 },   // C5
            { note: 493.88, time: 6, dur: 2 },   // B4
            { note: 440.00, time: 8, dur: 4 },   // A4
            { note: 493.88, time: 12, dur: 2 },  // B4
            { note: 523.25, time: 14, dur: 2 },  // C5
            
            { note: 440.00, time: 16, dur: 4 },  // A4
            { note: 493.88, time: 20, dur: 2 },  // B4
            { note: 523.25, time: 22, dur: 2 },  // C5
            
            { note: 440.00, time: 24, dur: 2 },  // A4
            { note: 493.88, time: 26, dur: 2 },  // B4
            { note: 523.25, time: 28, dur: 2 },  // C5
            { note: 587.33, time: 30, dur: 2 },  // D5
            
            // Second Half
            { note: 659.25, time: 32, dur: 2 },  // E5
            { note: 587.33, time: 34, dur: 2 },  // D5
            { note: 523.25, time: 36, dur: 2 },  // C5
            { note: 493.88, time: 38, dur: 2 },  // B4
            { note: 440.00, time: 40, dur: 4 },  // A4
            { note: 493.88, time: 44, dur: 2 },  // B4
            { note: 523.25, time: 46, dur: 2 },  // C5
            
            { note: 440.00, time: 48, dur: 4 },  // A4
            { note: 392.00, time: 52, dur: 2 },  // G4
            { note: 440.00, time: 54, dur: 2 },  // A4
            { note: 493.88, time: 56, dur: 8 }   // B4
        ];
        
        melody.forEach(m => {
            nodes.push(...this.playNote(m.note, now + (m.time * step), m.dur * step, 'triangle', 0.04));
        });
        
        this.musicNodes.push(...nodes);
        
        // Clean up nodes list after loop finishes
        setTimeout(() => {
            this.musicNodes = this.musicNodes.filter(n => !nodes.includes(n));
        }, 20000);
    },
    
    stopMusic() {
        if (!this.musicPlaying) return;
        this.musicPlaying = false;
        
        if (this.droneInterval) {
            clearInterval(this.droneInterval);
            this.droneInterval = null;
        }
        
        // Stop all active nodes
        this.musicNodes.forEach(node => {
            try {
                if (node.stop) {
                    node.stop();
                }
            } catch (e) {
                // Node might have already finished
            }
        });
        this.musicNodes = [];
    }
};

// Global click event to wake up AudioContext (Required by modern browsers)
window.addEventListener('click', () => {
    AudioManager.ensureCtx();
}, { once: true });
window.addEventListener('touchstart', () => {
    AudioManager.ensureCtx();
}, { once: true });
