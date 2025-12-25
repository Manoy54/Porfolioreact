import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

// Technical Blueprint SVG Pattern
const BlueprintSVG = () => (
  // Fixed viewBox 1600x900. 
  // Strategy: 4 Quadrants mimicking the 4 references provided.
  <svg width="100%" height="100%" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      </pattern>
      <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
      </pattern>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="white" />
      </marker>
      <marker id="arrow-start" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M9,0 L9,6 L0,3 z" fill="white" />
      </marker>
    </defs>

    <rect width="1600" height="900" fill="url(#smallGrid)" />
    <rect width="1600" height="900" fill="url(#grid)" />
    <rect x="20" y="20" width="1560" height="860" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />

    <g stroke="white" strokeWidth="1.5" fill="none" opacity="0.9">

      {/* ==================================================================================
            QUADRANT 1 (Top Left): "Front-end Architecture Example"
            Content: Users -> App Routing -> Modules -> Core <-> External APIs
           ================================================================================== */}
      <g transform="translate(100, 100)">
        <text x="0" y="-30" fill="white" fontSize="14" fontFamily="monospace" fontWeight="bold">FRONTEND_ARCHITECTURE</text>

        {/* Users */}
        <g transform="translate(0, 50)">
          <circle cx="40" cy="40" r="40" strokeWidth="2" />
          <g transform="scale(0.8) translate(30,30)">
            <path d="M 10 20 C 10 0 40 0 40 20" />
            <circle cx="25" cy="10" r="8" />
          </g>
          <text x="40" y="95" textAnchor="middle" fill="white" fontSize="12" fontFamily="monospace">Users</text>
        </g>

        {/* Path to App Routing */}
        <path d="M 80 90 H 220" markerEnd="url(#arrow)" />

        {/* App Routing */}
        <g transform="translate(260, 50)">
          <circle cx="40" cy="40" r="40" strokeWidth="2" />
          <text x="40" y="35" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">app</text>
          <text x="40" y="50" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">routing</text>
        </g>

        {/* Branching to Modules */}
        <path d="M 300 130 V 150 H 150 V 180" markerEnd="url(#arrow)" />
        <path d="M 300 130 V 180" markerEnd="url(#arrow)" />
        <path d="M 300 130 V 150 H 450 V 180" markerEnd="url(#arrow)" />

        {/* Modules */}
        <g transform="translate(100, 180)">
          <rect x="0" y="0" width="100" height="40" rx="8" />
          <text x="50" y="25" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">module</text>
        </g>
        <g transform="translate(250, 180)">
          <rect x="0" y="0" width="100" height="40" rx="8" />
          <text x="50" y="25" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">module</text>
        </g>
        <g transform="translate(400, 180)">
          <rect x="0" y="0" width="100" height="40" rx="8" />
          <text x="50" y="25" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">module</text>
        </g>

        {/* Core Layer connection */}
        <path d="M 150 220 V 240" markerEnd="url(#arrow)" />
        <path d="M 300 220 V 240" markerEnd="url(#arrow)" />
        <path d="M 450 220 V 240" markerEnd="url(#arrow)" />

        {/* Core Box */}
        <g transform="translate(100, 240)">
          <rect x="0" y="0" width="400" height="50" rx="8" stroke="rgba(100,200,255,0.8)" strokeWidth="2" />
          <text x="200" y="30" textAnchor="middle" fill="white" fontSize="12" fontFamily="monospace">core</text>
        </g>

        {/* External APIs */}
        <g transform="translate(-10, 245)">
          <circle cx="40" cy="40" r="35" stroke="rgba(100,200,255,0.8)" strokeWidth="2" />
          <text x="40" y="35" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">External</text>
          <text x="40" y="50" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">API(s)</text>
          {/* Arrow double */}
          <path d="M 75 40 H 100" markerEnd="url(#arrow)" markerStart="url(#arrow-start)" />
        </g>
      </g>


      {/* ==================================================================================
             QUADRANT 2 (Top Right): "State/Redux Flow"
             Content: Users -> Routing -> Pages -> Components -> Actions<->State, etc.
           ================================================================================== */}
      <g transform="translate(800, 80)">
        <text x="0" y="-10" fill="white" fontSize="14" fontFamily="monospace" fontWeight="bold">STATE_MANAGEMENT_FLOW</text>

        {/* Main Box Outline */}
        <rect x="130" y="0" width="380" height="230" rx="8" stroke="rgba(100,200,255,0.8)" strokeWidth="1" />

        {/* Row 1: Users -> Routing -> Pages -> Components */}
        <g transform="translate(0, 50)">
          <circle cx="30" cy="30" r="25" stroke="magenta" strokeWidth="2" />
          <text x="30" y="65" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">users</text>
          <path d="M 55 30 H 80" markerEnd="url(#arrow)" />
        </g>

        <g transform="translate(80, 50)">
          <circle cx="40" cy="30" r="30" stroke="rgba(100,200,255,0.8)" strokeWidth="2" />
          <text x="40" y="25" textAnchor="middle" fill="white" fontSize="8" fontFamily="monospace">app/module</text>
          <text x="40" y="35" textAnchor="middle" fill="white" fontSize="8" fontFamily="monospace">routing</text>
          <path d="M 70 30 H 130" markerEnd="url(#arrow)" />
        </g>

        <g transform="translate(210, 50)">
          <circle cx="30" cy="30" r="25" />
          <text x="30" y="35" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">pages</text>
          <path d="M 55 30 H 115" markerEnd="url(#arrow)" />
        </g>

        <g transform="translate(325, 50)">
          <circle cx="30" cy="30" r="25" />
          <text x="30" y="25" textAnchor="middle" fill="white" fontSize="8" fontFamily="monospace">compo-</text>
          <text x="30" y="35" textAnchor="middle" fill="white" fontSize="8" fontFamily="monospace">nents</text>
          {/* Connection down to Actions */}
          <path d="M 30 55 V 95" markerEnd="url(#arrow)" markerStart="url(#arrow-start)" />
        </g>

        {/* Row 2: State <-> Actions */}
        <g transform="translate(325, 150)">
          <circle cx="30" cy="30" r="30" stroke="rgba(100,200,255,0.8)" strokeWidth="2" />
          <text x="30" y="35" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">actions</text>
          {/* Connection Left to State */}
          <path d="M 0 30 H -55" markerEnd="url(#arrow)" markerStart="url(#arrow-start)" />
        </g>

        <g transform="translate(210, 150)">
          <circle cx="30" cy="30" r="30" />
          <text x="30" y="35" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">state</text>
        </g>

        {/* Side box: Another Module */}
        <rect x="520" y="0" width="60" height="230" rx="8" stroke="rgba(100,200,255,0.8)" />
        <text transform="rotate(-90 550 115)" x="550" y="115" textAnchor="middle" fill="white" fontSize="12" fontFamily="monospace">another module</text>
        <path d="M 450 50 H 520" markerEnd="url(#arrow)" markerStart="url(#arrow-start)" />
        <path d="M 385 180 H 520" markerEnd="url(#arrow)" markerStart="url(#arrow-start)" />


        {/* Bottom Section: API Clients & Stores */}
        <g transform="translate(0, 250)">
          <rect x="130" y="0" width="380" height="130" rx="8" stroke="rgba(100,100,255,0.8)" strokeWidth="1" />

          {/* Pub/Sub Center */}
          <g transform="translate(250, 60)">
            <circle cx="30" cy="30" r="30" stroke="rgba(100,100,255,0.8)" />
            <text x="30" y="35" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">pub/sub</text>
          </g>

          {/* Stores Right */}
          <g transform="translate(365, 60)">
            <circle cx="30" cy="30" r="30" stroke="rgba(100,100,255,0.8)" />
            <text x="30" y="35" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">store(s)</text>
            <path d="M 0 30 H -55" markerEnd="url(#arrow)" markerStart="url(#arrow-start)" />
          </g>

          {/* API Clients Left */}
          <g transform="translate(145, 20)">
            <circle cx="15" cy="15" r="15" stroke="rgba(100,100,255,0.8)" />
            <path d="M 30 15 H 105" markerEnd="url(#arrow)" />
          </g>
          <g transform="translate(145, 60)">
            <circle cx="15" cy="15" r="15" stroke="rgba(100,100,255,0.8)" />
            <path d="M 30 15 H 105" markerEnd="url(#arrow)" />
          </g>

          {/* External APIs Far Left */}
          <text x="20" y="0" fill="white" fontSize="10" fontFamily="monospace">external API(s)</text>
          <circle cx="30" cy="35" r="15" stroke="magenta" />
          <path d="M 45 35 H 145" markerEnd="url(#arrow)" markerStart="url(#arrow-start)" />
          <circle cx="30" cy="75" r="15" stroke="magenta" />
          <path d="M 45 75 H 145" markerEnd="url(#arrow)" markerStart="url(#arrow-start)" />
        </g>
      </g>


      {/* ==================================================================================
            QUADRANT 3 (Bottom Left): "Microfrontends & API Gateway"
            Content: UI Stitching -> Microfrontends -> Gateway -> Microservices
           ================================================================================== */}
      <g transform="translate(100, 500)">
        <text x="0" y="-10" fill="white" fontSize="14" fontFamily="monospace" fontWeight="bold">MICROSERVICE_STITCHING</text>

        {/* Layer 1: UI Stitching */}
        <rect x="150" y="0" width="450" height="30" fill="rgba(255,255,255,0.1)" stroke="white" />
        <text x="375" y="20" textAnchor="middle" fill="white" fontSize="12" fontFamily="monospace">UI Stitching Layer</text>

        {/* Layer 2: Microfrontends */}
        <text x="0" y="70" fill="white" fontSize="12" fontFamily="monospace">Microfrontends</text>

        <g transform="translate(180, 50)">
          <rect x="0" y="0" width="50" height="80" stroke="white" />
          <text transform="rotate(-90 25 40)" x="25" y="40" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">Accounts</text>
          <path d="M 25 -20 V 0" markerEnd="url(#arrow)" markerStart="url(#arrow-start)" />
          <path d="M 25 80 V 120" markerEnd="url(#arrow)" markerStart="url(#arrow-start)" />
        </g>

        <g transform="translate(270, 50)">
          <rect x="0" y="0" width="50" height="80" stroke="white" />
          <text transform="rotate(-90 25 40)" x="25" y="40" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">Sales</text>
          <path d="M 25 -20 V 0" markerEnd="url(#arrow)" markerStart="url(#arrow-start)" />
          <path d="M 25 80 V 120" markerEnd="url(#arrow)" markerStart="url(#arrow-start)" />
        </g>

        <g transform="translate(360, 50)">
          <rect x="0" y="0" width="50" height="80" stroke="white" />
          <text transform="rotate(-90 25 40)" x="25" y="40" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">Purchase</text>
          <path d="M 25 -20 V 0" markerEnd="url(#arrow)" markerStart="url(#arrow-start)" />
          <path d="M 25 80 V 120" markerEnd="url(#arrow)" markerStart="url(#arrow-start)" />
        </g>

        <g transform="translate(450, 50)">
          <rect x="0" y="0" width="50" height="80" stroke="white" />
          <text transform="rotate(-90 25 40)" x="25" y="40" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">Inventory</text>
          <path d="M 25 -20 V 0" markerEnd="url(#arrow)" markerStart="url(#arrow-start)" />
          <path d="M 25 80 V 120" markerEnd="url(#arrow)" markerStart="url(#arrow-start)" />
        </g>

        {/* Layer 3: API Gateway */}
        <text x="0" y="170" fill="white" fontSize="12" fontFamily="monospace">API Gateway</text>
        <rect x="150" y="150" width="450" height="20" fill="rgba(255,255,255,0.1)" stroke="white" />

        {/* Arrows down to microservices */}
        <path d="M 205 170 V 200" markerEnd="url(#arrow)" />
        <path d="M 305 170 V 200" markerEnd="url(#arrow)" />
        <path d="M 395 170 V 200" markerEnd="url(#arrow)" />
        <path d="M 485 170 V 200" markerEnd="url(#arrow)" />

        {/* Layer 4: Microservices */}
        <text x="0" y="270" fill="white" fontSize="12" fontFamily="monospace">Microservices</text>

        <g transform="translate(160, 200)">
          <rect x="0" y="0" width="70" height="100" stroke="white" />
          <text x="35" y="15" textAnchor="middle" fill="white" fontSize="8" fontFamily="monospace">Accounts</text>
          <rect x="10" y="30" width="50" height="40" stroke="white" />
          <path d="M 35 70 V 90" />
          <path d="M 20 90 C 20 80 50 80 50 90 V 95" /> {/* mini db */}
        </g>

        <g transform="translate(260, 200)">
          <rect x="0" y="0" width="70" height="100" stroke="white" />
          <text x="35" y="15" textAnchor="middle" fill="white" fontSize="8" fontFamily="monospace">Sales</text>
          <rect x="10" y="30" width="50" height="40" stroke="white" />
          <path d="M 35 70 V 90" />
          <path d="M 20 90 C 20 80 50 80 50 90 V 95" />
        </g>

        <g transform="translate(360, 200)">
          <rect x="0" y="0" width="70" height="100" stroke="white" />
          <rect x="10" y="30" width="50" height="40" stroke="white" />
        </g>

        <g transform="translate(460, 200)">
          <rect x="0" y="0" width="70" height="100" stroke="white" />
          <rect x="10" y="30" width="50" height="40" stroke="white" />
        </g>
      </g>


      {/* ==================================================================================
            QUADRANT 4 (Bottom Right): "Diffgram K8s Infrastructure"
            Content: Interfaces -> K8s Box (Services) -> Databases / Blob Storage
           ================================================================================== */}
      <g transform="translate(900, 500)">

        {/* Top Bar: Interfaces */}
        <rect x="0" y="0" width="500" height="40" fill="rgba(80,150,255,0.6)" />
        <text x="250" y="20" textAnchor="middle" fill="white" fontSize="12" fontFamily="monospace" fontWeight="bold">Interfaces: UI / SDK / API</text>

        {/* K8s Box */}
        <rect x="0" y="60" width="500" height="140" fill="rgba(255,255,255,0.05)" strokeDasharray="4 4" stroke="white" />
        <text x="50" y="90" fill="white" fontSize="12" fontFamily="monospace">Diffgram K8s</text>

        {/* Default Service - Center */}
        <g transform="translate(180, 80)">
          <rect x="0" y="0" width="140" height="40" fill="rgba(200,200,200,0.2)" />
          <text x="70" y="25" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">Default Service</text>
        </g>
        <path d="M 250 40 V 80" />

        {/* Row 2 Services */}
        <g transform="translate(50, 140)">
          <rect x="0" y="0" width="140" height="40" fill="rgba(200,200,200,0.2)" />
          <text x="70" y="20" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">Walrus Batch</text>
          <text x="70" y="32" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">Services</text>
        </g>

        <g transform="translate(330, 140)">
          <rect x="0" y="0" width="140" height="40" fill="rgba(200,200,200,0.2)" />
          <text x="70" y="25" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">Event Services</text>
        </g>

        {/* Connection Spider Web */}
        <path d="M 250 120 L 120 140" />
        <path d="M 250 120 L 400 140" />
        <path d="M 250 120 L 250 220" /> {/* To DB */}

        {/* Bottom Layer: External Resources */}
        <g transform="translate(30, 230)">
          <rect x="0" y="0" width="120" height="40" fill="rgba(150,200,255,0.3)" />
          <text x="60" y="15" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">External</text>
          <text x="60" y="30" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">Services</text>
        </g>

        <g transform="translate(30, 280)">
          <rect x="0" y="0" width="120" height="30" fill="rgba(150,200,255,0.3)" />
          <text x="60" y="20" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">Identity / Auth</text>
        </g>

        {/* Database Center */}
        <g transform="translate(210, 230)">
          <path d="M 0 10 C 0 0 80 0 80 10 V 50 C 80 60 0 60 0 50 Z" fill="rgba(200,220,255,0.3)" />
          <path d="M 0 10 C 0 20 80 20 80 10" stroke="white" />
          <text x="40" y="35" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">Databases</text>
          <rect x="0" y="70" width="80" height="30" fill="rgba(150,200,255,0.3)" />
          <text x="40" y="85" textAnchor="middle" fill="white" fontSize="8" fontFamily="monospace">Managed Postgres</text>
        </g>

        {/* Blob Storage Right */}
        <g transform="translate(340, 230)">
          <rect x="0" y="0" width="140" height="40" fill="rgba(150,200,255,0.3)" />
          <text x="70" y="25" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">Blob Storages</text>

          <rect x="40" y="55" width="100" height="30" fill="rgba(150,200,255,0.3)" />
          <text x="90" y="70" textAnchor="middle" fill="white" fontSize="8" fontFamily="monospace">MinIO, GCP, AWS</text>
          <path d="M 80 40 Q 80 50 90 55" />
        </g>

        {/* Complex Spider Connections from Services to Bottom Layer */}
        <path d="M 120 180 L 90 230" opacity="0.5" />
        <path d="M 120 180 L 250 230" opacity="0.5" />
        <path d="M 400 180 L 250 230" opacity="0.5" />
        <path d="M 400 180 L 410 230" opacity="0.5" />

      </g>

    </g>
  </svg>
);

export function PreContact() {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative py-32 px-8 min-h-screen flex items-center justify-center bg-[#202020] overflow-hidden group"
    >
      {/* Blueprint Reveal Layer */}
      <div
        className="absolute inset-0 pointer-events-none bg-[#0a4da2]"
        style={{
          maskImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
          opacity: isHovering ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        <BlueprintSVG />
      </div>

      <div className="relative z-10 w-full mx-auto text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.0 }}
          className="space-y-8"
        >
          <h2 className="text-[96px] leading-tight font-['Clash_Grotesk',sans-serif] font-medium text-white tracking-widest whitespace-nowrap">
            READY TO BUILD?
          </h2>

          <p className="text-[20px] leading-relaxed max-w-[684px] mx-auto font-['General_Sans',sans-serif] font-normal text-white pointer-events-auto">
            Open to internships and collaborations. From scalable backends to responsive frontends, I deliver clean code that gets the job done. Let’s build together.
          </p>
        </motion.div>
      </div>

      {/* Mobile Fallback - Ensure text is visible even if effect doesn't load/work on touch */}
      <style>{`
        @media (hover: none) {
          .absolute.inset-0 {
             display: none;
          }
        }
      `}</style>

      {/* Top Fade Gradient */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#202020] to-transparent pointer-events-none z-20" />

      {/* Bottom Fade Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#202020] to-transparent pointer-events-none z-20" />
    </section>
  );
}
