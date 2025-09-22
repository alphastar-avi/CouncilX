document.addEventListener('DOMContentLoaded', () => {
    // Pulse gradient
    const pulseGradient = () => {
        const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        const time = Date.now() * 0.002;
        const pulse = (Math.sin(time) + 1) / 2; // value between 0 and 1
        const opacity = scrollPercent * 0.1 + pulse * 0.1;
        document.body.style.background = `radial-gradient(circle at 50% 100%, rgba(0, 0, 255, ${opacity}), transparent 50%), #000`;
        requestAnimationFrame(pulseGradient);
    };
    pulseGradient();
});
