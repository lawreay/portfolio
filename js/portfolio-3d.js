import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.169.0/build/three.module.js';
import { RoundedBoxGeometry } from 'https://cdn.jsdelivr.net/npm/three@0.169.0/examples/jsm/geometries/RoundedBoxGeometry.js';

(() => {
  const canvas = document.getElementById('portfolio-scene');
  const hero = document.querySelector('.portfolio-hero');
  if (!canvas || !hero) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let renderer, scene, camera, pivot, cube, rafId = 0;
  let width = 1, height = 1, scrollProgress = 0, targetX = -0.25, targetY = 0.55;
  let dragging = false, lastX = 0, lastY = 0, velocityX = 0, velocityY = 0;
  const clock = new THREE.Clock();

  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x000000, 0);
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(0, 0, 8);
    pivot = new THREE.Group();
    scene.add(pivot);
    const geometry = new RoundedBoxGeometry(1.9, 1.9, 1.9, 6, 0.13);
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xc9e2ed, metalness: 0.12, roughness: 0.12, transmission: 0.82,
      thickness: 1.25, ior: 1.35, clearcoat: 1, clearcoatRoughness: 0.08,
      iridescence: 0.85, iridescenceIOR: 1.25, iridescenceThicknessRange: [180, 650],
      transparent: true, opacity: 0.92
    });
    cube = new THREE.Mesh(geometry, glassMaterial);
    pivot.add(cube);
    const edgeGeometry = new THREE.EdgesGeometry(geometry, 20);
    const edges = new THREE.LineSegments(edgeGeometry, new THREE.LineBasicMaterial({ color: 0xe9f5ff, transparent: true, opacity: 0.72 }));
    pivot.add(edges);
    const inner = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.2, 1.2), new THREE.MeshBasicMaterial({ color: 0xe5a23b, wireframe: true, transparent: true, opacity: 0.17 }));
    inner.rotation.set(0.35, 0.2, 0);
    pivot.add(inner);
    scene.add(new THREE.HemisphereLight(0xb9e5ff, 0x10131b, 2.3));
    const key = new THREE.DirectionalLight(0xffffff, 3.2); key.position.set(-3, 4, 5); scene.add(key);
    const amber = new THREE.PointLight(0xe5a23b, 14, 8); amber.position.set(2, -1.8, 2); scene.add(amber);
    const blue = new THREE.PointLight(0x4f9ec7, 12, 8); blue.position.set(-2, 1.5, -2); scene.add(blue);

    function resize() {
      const rect = hero.getBoundingClientRect();
      width = Math.max(1, rect.width); height = Math.max(1, rect.height);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.position.z = width < 700 ? 9.2 : 8;
      camera.updateProjectionMatrix();
      pivot.position.set(width < 700 ? 0.8 : 1.65, width < 700 ? 1.3 : 0.05, 0);
      pivot.scale.setScalar(width < 700 ? 0.83 : 1.18);
    }
    function onScroll() {
      const rect = hero.getBoundingClientRect();
      scrollProgress = THREE.MathUtils.clamp(-rect.top / Math.max(1, rect.height), 0, 1.4);
    }
    function animate() {
      rafId = requestAnimationFrame(animate);
      const dt = Math.min(clock.getDelta(), 0.05);
      if (!dragging) {
        targetY += velocityX; targetX += velocityY;
        velocityX *= Math.pow(0.94, dt * 60); velocityY *= Math.pow(0.94, dt * 60);
        if (!reducedMotion) targetY += dt * 0.15;
      }
      const scrollTilt = reducedMotion ? 0 : scrollProgress * 0.22;
      pivot.rotation.x += (targetX + scrollTilt - pivot.rotation.x) * Math.min(1, dt * 3.2);
      pivot.rotation.y += (targetY + scrollProgress * 0.42 - pivot.rotation.y) * Math.min(1, dt * 3.2);
      renderer.render(scene, camera);
    }
    resize(); onScroll();
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    canvas.addEventListener('pointerdown', event => {
      dragging = true; lastX = event.clientX; lastY = event.clientY;
      velocityX = velocityY = 0; canvas.classList.add('dragging');
      canvas.setPointerCapture?.(event.pointerId);
    });
    canvas.addEventListener('pointermove', event => {
      if (!dragging) return;
      const dx = event.clientX - lastX, dy = event.clientY - lastY;
      lastX = event.clientX; lastY = event.clientY;
      velocityX = dx * 0.004; velocityY = dy * 0.004;
      targetY += velocityX; targetX += velocityY;
    });
    const release = () => { dragging = false; canvas.classList.remove('dragging'); };
    canvas.addEventListener('pointerup', release);
    canvas.addEventListener('pointercancel', release);
    animate();
  } catch (error) {
    canvas.style.display = 'none';
    console.warn('3D hero unavailable; showing the portfolio without WebGL.', error);
  }

  const revealTargets = document.querySelectorAll('#capabilities article, #experience .glass-card, #achievements .glass-card, #projects article.glass-card, #contact .glass-card');
  if ('IntersectionObserver' in window && !reducedMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    revealTargets.forEach((el, index) => {
      el.classList.add('motion-reveal');
      el.style.transitionDelay = (Math.min(index % 4, 3) * 70) + 'ms';
      revealObserver.observe(el);
    });
  }
  if (!reducedMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('#projects article.glass-card').forEach(card => {
      card.addEventListener('pointermove', event => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = 'perspective(900px) rotateX(' + (y * -3) + 'deg) rotateY(' + (x * 3) + 'deg) translateY(-3px)';
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
  }
})();