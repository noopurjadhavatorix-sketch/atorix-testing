"use client";

import { useMemo, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

function fibonacciSpherePoints(count, radius) {
	const points = [];
	const goldenAngle = Math.PI * (3 - Math.sqrt(5));
	for (let i = 0; i < count; i++) {
		const y = 1 - (i / Math.max(1, count - 1)) * 2;
		const r = Math.sqrt(1 - y * y);
		const theta = goldenAngle * i;
		const x = Math.cos(theta) * r;
		const z = Math.sin(theta) * r;
		points.push([x * radius, y * radius, z * radius]);
	}
	return points;
}

function RotatingGroup({ children, speed = 0.15 }) {
	const ref = useRef();
	useFrame((_, delta) => {
		if (!ref.current) return;
		ref.current.rotation.y += speed * delta;
		ref.current.rotation.x += speed * 0.3 * delta;
	});
	return <group ref={ref}>{children}</group>;
}

function SphereItem({ position, children }) {
	const ref = useRef();
	useEffect(() => {
		if (!ref.current) return;
		const dir = new THREE.Vector3().fromArray(position).normalize();
		const quat = new THREE.Quaternion().setFromUnitVectors(
			new THREE.Vector3(0, 0, 1),
			dir
		);
		ref.current.setRotationFromQuaternion(quat);
	}, [position]);

	return (
		<group ref={ref} position={position}>
			{children}
		</group>
	);
}

export default function IndustriesSphere({ industries }) {
	const radius = 4.8;
	const positions = useMemo(
		() => fibonacciSpherePoints(industries.length, radius),
		[industries.length]
	);

	return (
		<div className="relative w-full h-[600px] md:h-[700px]">
			<Canvas camera={{ position: [0, 0, 16], fov: 50 }}>
				<ambientLight intensity={0.7} />
				<directionalLight position={[5, 5, 5]} intensity={0.7} />
				<RotatingGroup>
					{industries.map((industry, index) => (
						<SphereItem key={industry.id ?? index} position={positions[index]}>
							<Html transform occlude style={{ pointerEvents: "auto" }}>
								<div className="industry-card bg-card/90 backdrop-blur rounded-xl p-3 border border-border/40 shadow-sm flex flex-col items-center min-w-[110px]">
									<div className="industry-icon w-10 h-10 rounded-full bg-primary/5 dark:bg-primary/10 text-primary/70 dark:text-primary/80 flex items-center justify-center mb-2">
										{(() => {
											const IconComponent = industry.icon;
											return IconComponent ? <IconComponent size={20} /> : null;
										})()}
									</div>
									<p className="text-sm font-medium text-center whitespace-nowrap">{industry.name}</p>
								</div>
							</Html>
						</SphereItem>
					))}
				</RotatingGroup>
			</Canvas>
		</div>
	);
}


