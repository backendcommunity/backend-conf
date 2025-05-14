<template>
  <div ref="container" class="absolute inset-0 overflow-hidden">
    <canvas ref="canvas" class="w-full h-full opacity-20"></canvas>
  </div>
</template>

<script setup>
import * as THREE from 'three';
import { gsap } from 'gsap';

const container = ref(null);
const canvas = ref(null);

onMounted(() => {
  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    alpha: true,
    antialias: true
  });

  renderer.setSize(container.value.clientWidth, container.value.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Create sphere geometry
  const geometry = new THREE.SphereGeometry(5, 64, 64);
  
  // Create custom shader material
  const material = new THREE.ShaderMaterial({
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vNormal;
      
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec2 vUv;
      varying vec3 vNormal;
      uniform float uTime;
      
      void main() {
        vec3 baseColor = vec3(0.07, 0.68, 0.81);  // Secondary color (#13AECE)
        vec3 accentColor = vec3(0.28, 0.86, 0.94); // Lighter secondary color
        
        float pulse = sin(uTime * 0.5) * 0.5 + 0.5;
        float grid = abs(fract(vUv.x * 20.0) - 0.5) + abs(fract(vUv.y * 20.0) - 0.5);
        grid = smoothstep(0.1, 0.2, grid);
        
        float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
        
        vec3 color = mix(accentColor, baseColor, grid);
        color = mix(color, accentColor, fresnel * pulse);
        
        gl_FragColor = vec4(color, 0.4);  // Reduced opacity
      }
    `,
    uniforms: {
      uTime: { value: 0 }
    },
    transparent: true
  });

  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  camera.position.z = 10;

  // Animation
  gsap.to(sphere.rotation, {
    y: Math.PI * 2,
    duration: 20,
    repeat: -1,
    ease: 'none'
  });

  // Handle resize
  function onResize() {
    camera.aspect = container.value.clientWidth / container.value.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.value.clientWidth, container.value.clientHeight);
  }

  window.addEventListener('resize', onResize);

  // Animation loop
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    material.uniforms.uTime.value = clock.getElapsedTime();
    renderer.render(scene, camera);
  }

  animate();

  // Cleanup
  onUnmounted(() => {
    window.removeEventListener('resize', onResize);
    geometry.dispose();
    material.dispose();
    renderer.dispose();
  });
});
</script>