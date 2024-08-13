import { ClassValue } from "clsx";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { cn } from "../utils/classes";

interface Props {
    className?: ClassValue;
}

export function Cobe({ className }: Props) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        if (!canvasRef.current) return;

        const dpr = window.devicePixelRatio;

        let phi = 4;
        let width = 0;
        const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth * dpr);
        window.addEventListener("resize", onResize);
        onResize();
        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: dpr,
            width: width,
            height: width,
            scale: 1,
            phi: phi,
            theta: 0.4,
            dark: 1,
            diffuse: 3,
            mapSamples: 16000,
            mapBrightness: 1.2,
            baseColor: [1, 1, 1],
            markerColor: [251 / 255, 100 / 255, 21 / 255],
            glowColor: [0.5, 0.5, 0.5],
            markers: [],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.00075;
                state.width = width;
                state.height = width;
            },
        });
        setTimeout(() => canvasRef.current && (canvasRef.current.style.opacity = "1"));
        return () => {
            globe.destroy();
            window.removeEventListener("resize", onResize);
        };
    }, []);
    return (
        <div className={cn("aspect-square", className)}>
            <canvas
                ref={canvasRef}
                style={{
                    width: "100%",
                    height: "100%",
                    contain: "layout paint size",
                    opacity: 0,
                    transition: "opacity 1s ease",
                }}
            />
        </div>
    );
}
