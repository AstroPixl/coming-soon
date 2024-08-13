import { ExternalLink } from "lucide-react";
import { Cobe } from "../components/CobeGlobe";
import Particles from "../components/Particles";

export default function Index() {
    return (
        <main className="bg-black text-white min-h-screen relative flex">
            <Particles className="absolute inset-0 pointer-events-none" />
            <div className="absolute bottom-0 w-full flex justify-center overflow-hidden">
                <Cobe className="w-full max-w-7xl translate-y-[65%]" />
            </div>

            <div className="m-auto w-[65vw] sm:pb-12 md:pb-32 lg:pb-48 z-10">
                <div className="md:mb-1 w-full flex items-center justify-between flex-col md:flex-row gap-4 mb-8">
                    <p className="text-sm uppercase text-center">For the love of space and technology</p>
                    <p className="text-sm uppercase text-center">
                        By{" "}
                        <a
                            href="https://instagram.com/kan.a.pesh"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-cyan-300 underline"
                        >
                            Kan-A-Pesh
                            <ExternalLink className="inline-block w-4 h-4 ml-1" />
                        </a>
                    </p>
                </div>
                <div className="w-full border-y border-white border-opacity-75 py-12">
                    <h1 className="text-[10vw] leading-none font-bold text-center">AstroPixl</h1>
                </div>
                <div className="md:mt-1 w-full flex items-center justify-between flex-col md:flex-row gap-4 mt-8">
                    <p className="text-sm uppercase text-center">Coming soon</p>

                    <p className="text-sm uppercase text-center">
                        <a
                            href="https://instagram.com/astropixl"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-cyan-300 underline"
                        >
                            Follow us on Instagram
                            <ExternalLink className="inline-block w-4 h-4 ml-1" />
                        </a>
                    </p>
                </div>
            </div>
        </main>
    );
}
