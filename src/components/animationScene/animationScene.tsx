import React, { useRef, useEffect, useState, Suspense } from 'react';
import styled from 'styled-components';
import { Canvas, useFrame } from '@react-three/fiber';
import { Center, useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

// --- STYLED COMPONENTS ---
const MainContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: #0b0c10;
  color: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const ScrollSection = styled.section`
  position: relative;
  height: 200vh; 
  width: 100%;
`;

const CanvasContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  pointer-events: none;
`;

const ContentOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200vh; 
  z-index: 2;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
`;

const TextBlock = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
  max-width: 500px;
  
  &.right {
    margin-left: auto;
    text-align: right;
  }

  &.left {
    margin-right: auto;
    text-align: left;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #d4af37; 
  }

  p {
    font-size: 1.2rem;
    color: #c5c6c7;
    line-height: 1.6;
  }
`;

// --- INTERFACE ---
interface Elemento3DProps {
  scrollProgress: { value: number };
}

// --- COMPONENTE DA JÓIA COM AUTO-ESCALA ---
const CorrenteJoalheria: React.FC<Elemento3DProps> = ({ scrollProgress }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Caminho corrigido e verificado para scene.glb
  const { scene } = useGLTF('/models/gold_chain/scene.glb'); 

  useEffect(() => {
    if (!scene) return;
    
    // 1. FORÇAR MATERIAL DE OURO BRILHANTE
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        
        mesh.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color('#f3c63f'), 
          metalness: 1.0,                    
          roughness: 0.08, 
        });
      }
    });

    // 2. TRUQUE DA AUTO-ESCALA: Mede o tamanho real do modelo e reseta o centro dele
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    
    // Força o modelo a ter um tamanho padrão gerenciável (ex: 2.2 unidades do Three.js)
    const targetScale = 2.2 / maxDim;
    scene.scale.set(targetScale, targetScale, targetScale);
    
    // Centraliza o ponto pivô para a corrente não rotacionar torta
    const center = box.getCenter(new THREE.Vector3());
    scene.position.x = -center.x * targetScale;
    scene.position.y = -center.y * targetScale;
    scene.position.z = -center.z * targetScale;

  }, [scene]);

  useFrame(() => {
    if (!groupRef.current) return;

    const p = scrollProgress.value;

    // Movimentação diagonal limpa nas duas telas
    groupRef.current.position.x = gsap.utils.interpolate(2.2, -2.2, p);
    groupRef.current.position.y = gsap.utils.interpolate(-0.2, 0.4, p) - Math.sin(p * Math.PI) * 0.5;
    
    // Como o tamanho já foi normalizado no useEffect lá em cima, 
    // agora o controle de zoom do scroll funciona perfeitamente de 0.8x a 2.0x
    const currentScale = gsap.utils.interpolate(0.8, 2.0, p);
    groupRef.current.scale.set(currentScale, currentScale, currentScale);
    
    // Rotação charmosa para e-commerce de semi joias
    groupRef.current.rotation.x = p * 1.2;
    groupRef.current.rotation.y = p * 3.5;
    groupRef.current.rotation.z = Math.sin(p * Math.PI) * 0.1;
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
};

// --- COMPONENTE PRINCIPAL ---
export default function AnimationScene() {
  const scrollSectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress] = useState({ value: 0 });

  useEffect(() => {
    if (!scrollSectionRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: scrollSectionRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.1,
      onUpdate: (self) => {
        scrollProgress.value = self.progress;
      }
    });

    return () => {
      trigger.kill();
    };
  }, [scrollProgress]);

  return (
    <MainContainer>
      <ScrollSection ref={scrollSectionRef}>
        <CanvasContainer>
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            {/* Iluminação ambiente e direcional balanceada */}
            <ambientLight intensity={1.2} /> 
            <directionalLight position={[5, 5, 4]} intensity={2.5} color="#fff" />
            <directionalLight position={[-5, 3, -2]} intensity={1.5} color="#fff" />
            <pointLight position={[0, 0, 3]} intensity={1.5} />
            
            <Center>
              <Suspense fallback={null}>
                <CorrenteJoalheria scrollProgress={scrollProgress} />
              </Suspense>
            </Center>
          </Canvas>
        </CanvasContainer>

        <ContentOverlay>
          <TextBlock className="left">
            <h2>Elegância Exclusiva</h2>
            <p>Conheça nossa nova coleção de artefatos forjados à mão. Detalhes minuciosos que traduzem poder e sofisticação desde o primeiro olhar.</p>
          </TextBlock>
          
          <TextBlock className="right">
            <h2>O Toque de Midas</h2>
            <p>O brilho eterno do ouro legítimo moldado para acompanhar sua trajetória com imponência e perfeição geométrica.</p>
          </TextBlock>
        </ContentOverlay>
      </ScrollSection>
    </MainContainer>
  );
}

useGLTF.preload('/models/gold_chain/scene.glb');