import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const SimpleCube = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((_, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.5;
            meshRef.current.rotation.y += delta * 0.5;
        }
    });

    return (
        <mesh ref={meshRef} scale={2}>
            <boxGeometry />
            <meshStandardMaterial color="blue" />
        </mesh>
    );
};

const CosmicScene = ({ className = "" }: { className?: string }) => {
    return (
        <div className={`w-full h-full ${className}`}>
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />

                <SimpleCube />

                <OrbitControls enableZoom={false} />
            </Canvas>
        </div>
    );
};

export default CosmicScene;
