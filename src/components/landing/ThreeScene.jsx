import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Soft floating "food blob" field rendered behind the hero. Deliberately
// lightweight: a dozen low-poly spheres with gentle drift + mouse parallax,
// so it stays smooth on phones.
const PALETTE = ['#F2A5A5', '#7C9A7E', '#D4A847', '#C4704F', '#A8C5AA', '#F5C99B'];

export default function ThreeScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.z = 14;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.9));
    const sun = new THREE.DirectionalLight(0xfff3e0, 1.6);
    sun.position.set(5, 8, 6);
    scene.add(sun);
    const fill = new THREE.DirectionalLight(0xf2a5a5, 0.5);
    fill.position.set(-6, -4, 4);
    scene.add(fill);

    // Blobs: spheres distorted slightly via scale for an organic feel
    const blobs = [];
    const rng = (a, b) => a + Math.random() * (b - a);
    for (let i = 0; i < 14; i++) {
      const r = rng(0.5, 1.4);
      const geo = new THREE.SphereGeometry(r, 24, 24);
      const mat = new THREE.MeshStandardMaterial({
        color: PALETTE[i % PALETTE.length],
        roughness: 0.45,
        metalness: 0.05,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(rng(-9, 9), rng(-5, 5), rng(-6, 2));
      mesh.scale.set(rng(0.85, 1.2), rng(0.85, 1.2), rng(0.85, 1.2));
      mesh.userData = {
        speed: rng(0.2, 0.6),
        phase: rng(0, Math.PI * 2),
        baseY: mesh.position.y,
        baseX: mesh.position.x,
        rotSpeed: rng(0.05, 0.25),
      };
      scene.add(mesh);
      blobs.push(mesh);
    }

    // A couple of toruses for variety (like little cereal hoops)
    for (let i = 0; i < 4; i++) {
      const geo = new THREE.TorusGeometry(rng(0.5, 0.9), rng(0.18, 0.3), 16, 40);
      const mat = new THREE.MeshStandardMaterial({
        color: PALETTE[(i + 2) % PALETTE.length],
        roughness: 0.5,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(rng(-8, 8), rng(-4, 4), rng(-5, 1));
      mesh.rotation.set(rng(0, Math.PI), rng(0, Math.PI), 0);
      mesh.userData = {
        speed: rng(0.2, 0.5),
        phase: rng(0, Math.PI * 2),
        baseY: mesh.position.y,
        baseX: mesh.position.x,
        rotSpeed: rng(0.1, 0.3),
      };
      scene.add(mesh);
      blobs.push(mesh);
    }

    let mouseX = 0;
    let mouseY = 0;
    const onPointer = (e) => {
      const x = (e.touches ? e.touches[0].clientX : e.clientX) / window.innerWidth - 0.5;
      const y = (e.touches ? e.touches[0].clientY : e.clientY) / window.innerHeight - 0.5;
      mouseX = x;
      mouseY = y;
    };
    window.addEventListener('mousemove', onPointer, { passive: true });
    window.addEventListener('touchmove', onPointer, { passive: true });

    const clock = new THREE.Clock();
    let raf;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      blobs.forEach((b) => {
        const { speed, phase, baseY, baseX, rotSpeed } = b.userData;
        b.position.y = baseY + Math.sin(t * speed + phase) * 0.7;
        b.position.x = baseX + Math.cos(t * speed * 0.6 + phase) * 0.4;
        b.rotation.x += rotSpeed * 0.004;
        b.rotation.y += rotSpeed * 0.006;
      });
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.04;
      camera.position.y += (-mouseY * 1.4 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onPointer);
      window.removeEventListener('touchmove', onPointer);
      blobs.forEach((b) => {
        b.geometry.dispose();
        b.material.dispose();
      });
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />;
}
