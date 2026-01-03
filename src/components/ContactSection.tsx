import { Mail, MapPin, Linkedin, Github } from 'lucide-react';
import { motion } from 'motion/react';

export function ContactSection() {
    return (
        <section id="footer" className="bg-[#202020] text-white pt-20 pb-8 px-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">

                    {/* Left Column */}
                    <div className="space-y-12 max-w-lg">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-['Clash_Grotesk',sans-serif] font-semibold">
                                Let's Connect
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed font-['General_Sans',sans-serif]">
                                Building from the ground up. Exploring what's possible with code, one project at a time
                            </p>
                        </div>

                        <div className="space-y-8">
                            {/* Email Item */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#333] rounded-lg">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-sm text-gray-400 font-medium mb-1 tracking-wide">EMAIL</h4>
                                    <a href="mailto:numanjaved2001@gmail.com" className="text-lg font-medium hover:text-blue-400 transition-colors">
                                        armentaitsean7@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Location Item */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#333] rounded-lg">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-sm text-gray-400 font-medium mb-1 tracking-wide">LOCATION</h4>
                                    <p className="text-lg font-medium">
                                        Albay, Philippines
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8 lg:text-right w-full lg:w-auto mt-8 lg:mt-0">
                        <div className="space-y-4">
                            <span className="text-sm text-gray-400 tracking-widest uppercase">Drop me a line</span>
                            <a
                                href="mailto:numanjaved2001@gmail.com"
                                className="block text-2xl md:text-3xl lg:text-4xl font-['Clash_Grotesk',sans-serif] font-medium hover:text-blue-400 transition-colors break-all"
                            >
                                armentaitsean7@gmail.com
                            </a>
                        </div>

                        <div className="flex flex-col lg:items-end gap-6">
                            <div className="flex items-center gap-4">
                                <a href="https://www.linkedin.com/in/sean-dylan-armenta-7b98b73a1" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#333] rounded-lg hover:bg-[#444] transition-colors group">
                                    <Linkedin className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
                                </a>
                                <a href="https://github.com/Manoy54" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#333] rounded-lg hover:bg-[#444] transition-colors group">
                                    <Github className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
                                </a>
                            </div>

                            <a href="#" className="inline-flex items-center gap-2 text-lg font-medium hover:text-blue-400 transition-colors group">

                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-['General_Sans',sans-serif]">

                </div>
            </div>
        </section>
    );
}
