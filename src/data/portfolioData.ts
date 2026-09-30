import { Project, CareerMilestone, SkillCategory, Certification } from '../types/portfolio';

// Local asset imports bundled by Vite (works in production & GitHub Pages)
import deveshPortrait from '../assets/images/devesh_beniwal_portrait_1790589833950.jpg';
import unityCertImg from '../assets/images/unity_certified_certificate_1790692183325.jpg';
import csharpCertImg from '../assets/images/csharp_expert_certificate_1790692198575.jpg';

import anarchyWarzoneImg from '../assets/images/anarchy_warzone_gameplay_1790589732878.jpg';
import khokhoImg from '../assets/images/khokho_world_cup_gameplay_1790589750590.jpg';
import teenpattiImg from '../assets/images/teenpatti_hangout_gameplay_1790589766685.jpg';
import pistolduelImg from '../assets/images/pistol_duel.jpg';
import surfSharksImg from '../assets/images/surf_sharks_gameplay_1790589782872.jpg';
import headballImg from '../assets/images/headball_soccer_gameplay_1790589797071.jpg';
import duckhuntImg from '../assets/images/duckhunt_leap_motion_1790589818665.jpg';
import ludoSamratImg from '../assets/images/ludo_samrat.jpg';
import akiroImg from '../assets/images/akiro.jpg';
import fourplayChessImg from '../assets/images/four_p_chess.jpg';
import arLabsImg from '../assets/images/ar.jpg';
import arduinoImg from '../assets/images/arduino.jpg';

// Devesh Beniwal Portrait
export const DEVELOPER_AVATAR = deveshPortrait;

export const DEVELOPER_INFO = {
  name: 'Devesh Beniwal',
  title: 'Senior Unity Developer & Full-Stack Game Architect',
  yearsOfExperience: 8,
  totalCommercialShipped: '30+ Games',
  globalPlayersReached: '5M+',
  currentStatus: 'Open to Senior / Lead Unity Roles & Full-Stack Game Development',
  location: 'Bengaluru, Karnataka · Jaipur, India (Remote Worldwide)',
  email: 'devbeniwal80@gmail.com',
  phone: '+91-8854832762',
  whatsapp: 'https://wa.me/918854832762',
  github: 'https://github.com/deveshbeniwal',
  linkedin: 'https://www.linkedin.com/in/devesh-beniwal-ba4460143',
  portfolioUrl: 'https://deveshbeniwal.github.io/Portfolio/',
  resumePdfUrl: 'https://deveshbeniwal.github.io/Portfolio/assets/Devesh_Beniwal_Resume.pdf',
  education: 'B.Tech in Computer Science & Engineering (Honours) · Rajasthan Technical University (2014 – 2018)',
  summary:
    'Unity certified professional programmer with 8 years of production experience in 2D/3D, real-time multiplayer, and cross-platform game development. Skilled in C#, Unity3D, Node.js, Photon (PUN, Fusion v1/v2), Colyseus, WebRTC, Firebase, and MongoDB, with strong expertise in Game Architecture and Performance Optimization (achieving up to 30% physics & 20% draw call reduction). Delivered scalable multiplayer solutions, integrated hardware (Arduino, Leap Motion, Kinect), and deployed projects across Android, iOS, Web, and Cloud.',
};

export const RECRUITER_FAST_SCAN = {
  quickPillars: [
    {
      title: 'Game Architecture & C#',
      badge: '8 Years Exp',
      points: [
        'C#, Unity3D, Object-Oriented & Decoupled Design Patterns, Clean Code',
        'Performance Optimization: 30% physics boost & 20% draw calls reduced',
        'Cross-platform deployment across Android, iOS, WebGL, and PC',
      ],
    },
    {
      title: 'Multiplayer & Netcode',
      badge: 'Photon & Colyseus',
      points: [
        'Photon (PUN, Fusion v1 & v2), Colyseus (Node.js + TypeScript)',
        'WebSockets, WebRTC, Socket.IO, Real-Time Synchronization & Matchmaking',
        'Client-server prediction, lag mitigation, REST APIs with MongoDB',
      ],
    },
    {
      title: 'AR/VR & Hardware Tech',
      badge: 'Spatial & Motion',
      points: [
        'ARFoundation, ARCore, ARKit, Oculus & Pico VR SDKs',
        'Hardware Integration: Leap Motion gesture tracking, Kinect, Arduino',
        'Interactive 3D real-world coordinates and spatial physics simulation',
      ],
    },
    {
      title: 'Full-Stack & Cloud Ops',
      badge: 'Node.js & Firebase',
      points: [
        'Node.js, Express.js, TypeScript, MongoDB, Nginx, Ubuntu Linux Cloud',
        'Firebase Suite: Firestore, Auth, Storage, Analytics, Crashlytics, Messaging',
        'Addressables, Asset Bundles, In-App Purchases (IAP), WebGL JS bridge',
      ],
    },
  ],
  targetRoles: ['Senior Unity Developer', 'Lead Game Programmer', 'Full-Stack Unity Engineer', 'Multiplayer & AR/VR Specialist'],
};

export const PROJECTS: Project[] = [
    {
        id: 'anarchy-warzone',
        title: 'Anarchy Warzone',
        genre: 'Multiplayer Vehicle & Military Action',
        tagline: 'High-octane tactical combat with vehicle physics, combat helicopters, and Photon Fusion v2.',
        description:
            'Integrated advanced vehicle physics (cars, helicopters, tanks), migrated networking from Photon Fusion v1 to v2, implemented combat objectives, and achieved 30% physics optimization.',
        fullOverview:
            'Anarchy Warzone is a massive tactical combat experience featuring dynamic vehicle warfare and aerial dogfights. As Senior Unity Developer, I engineered realistic vehicle suspension and flight physics for cars, tanks, and helicopters. I led the architectural migration from Photon Fusion v1 to v2, resolving latency desyncs and improving room stability. Through deep profiling, I delivered 30% physics optimization and a 20% reduction in draw calls.',
        image: anarchyWarzoneImg,
        year: '2024 – Present',
        role: 'Senior Unity Developer (Sparkshift)',
        platforms: ['Android (Playstore)', 'iOS (Appstore)'],
        techStack: ['Unity3D', 'C#', 'Photon Fusion v2', 'Vehicle Physics', 'WebRTC Video/Audio', 'Vivox'],
        metrics: [
            { label: 'Physics Optimization', value: '+30% Gain' },
            { label: 'Draw Calls Reduced', value: '-20%' },
            { label: 'Netcode Migration', value: 'Fusion v1 → v2' },
            { label: 'Audio/Video', value: 'WebRTC & Vivox' },
        ],
        architectureHighlights: [
            'Multi-wheel raycast vehicle physics with slip curves and airborne helicopter stabilization',
            'Photon Fusion v2 tick-aligned state synchronization and client-side input prediction',
            'Vivox & WebRTC voice/video integration for real-time squad communication in match',
            'Batching and LOD group restructuring eliminating 20% redundant draw calls',
        ],
        codeSnippet: {
            language: 'csharp',
            title: 'VehiclePhysicsController.cs (Realistic Suspension & Slip Curve)',
            code: `public class VehiclePhysicsController : MonoBehaviour
{
    [SerializeField] private WheelCollider[] driveWheels;
    [SerializeField] private float motorTorque = 1800f;
    [SerializeField] private float maxSteerAngle = 32f;
    [SerializeField] private Rigidbody vehicleRb;

    public void ApplyNetworkedInput(float throttle, float steer, bool handbrake)
    {
        float targetSteer = steer * maxSteerAngle;
        foreach (var wheel in driveWheels)
        {
            wheel.motorTorque = throttle * motorTorque;
            if (wheel.transform.localPosition.z > 0)
                wheel.steerAngle = Mathf.Lerp(wheel.steerAngle, targetSteer, Time.fixedDeltaTime * 8f);
            wheel.brakeTorque = handbrake ? 3500f : 0f;
        }
        // Center of mass lowering to prevent rollover during high-speed combat turns
        vehicleRb.centerOfMass = new Vector3(0, -0.35f, 0.1f);
    }
}`,
        },
        featured: true,
        playstoreUrl: 'https://play.google.com/store/search?q=anarchy%20warzone&c=apps&hl=en_IN',
        appstoreUrl: 'https://apps.apple.com/in/app/anarchy-warzone/id6472880237',
    },
    {
        id: 'khokho-world-cup',
        title: 'KhoKho World Cup 3D',
        genre: 'Official 3D Sports Simulation',
        tagline: "India's first official 3D KhoKho game in official collaboration with the KhoKho Federation of India.",
        description:
            "Collaborated with the KhoKho Federation of India to create India's first official 3D KhoKho game, featuring intelligent AI teammates, Inverse Kinematics (IK), and tournament modes.",
        fullOverview:
            "Developed in partnership with the KhoKho Federation of India, this official sports title captures the lightning-fast agility of KhoKho. I designed the complete game loop, AI chasing/defending pathfinding, team selection, and realistic character motions using Inverse Kinematics (IK) for pole turning and diving tags. Integrated Google Play Games leaderboards, IAP, and Firebase live-ops.",
        image: khokhoImg,
        year: '2025',
        role: 'Lead Gameplay & AI Engineer',
        platforms: ['Android (Playstore)', 'iOS (Appstore)'],
        techStack: ['Unity3D', 'C#', 'Inverse Kinematics (IK)', 'AI State Machines', 'Firebase', 'Google Play Games'],
        metrics: [
            { label: 'Official Partnership', value: 'KhoKho Fed. India' },
            { label: 'Animation Tech', value: 'Full Body IK' },
            { label: 'Game Modes', value: 'Tournament & AI' },
            { label: 'Live Operations', value: 'Firebase & IAP' },
        ],
        architectureHighlights: [
            'Inverse Kinematics (IK) foot-placement and dynamic hand-pole grasping during rapid 180° turns',
            'Multi-agent AI coordinator for chaser sitting lines and tactical defender evasion patterns',
            'Firebase remote config for live tuning tournament difficulty without app store updates',
            'In-App Purchases (IAP) and Google Play Games achievements & cloud saves',
        ],
        featured: true,
        playstoreUrl: 'https://play.google.com/store/apps/details?id=com.sparkshift.khokho&hl=en_IN',
        appstoreUrl: 'https://apps.apple.com/in/app/kho-kho-world-cup/id6738004710',
    },
    {
        id: 'teenpatti-hangout',
        title: 'TeenPatti Hangout',
        genre: 'Multiplayer Casino with Live Video',
        tagline: 'Real-time 2–5 player multiplayer card game featuring integrated WebRTC video calling and Colyseus backend.',
        description:
            'Engineered real-time multiplayer casino game with live face-to-face video calling. Built scalable Colyseus (Node.js + TypeScript) backend deployed on Ubuntu Cloud with MongoDB.',
        fullOverview:
            'TeenPatti Hangout combines the classic social card game with synchronized face-to-face video and voice calling right on the game table. I architected the server-authoritative card shuffling, betting pots, and turn timeouts using Colyseus and Node.js. On the cloud side, I configured MongoDB horizontal clustering, Nginx reverse proxy, and Mongoose schemas on Ubuntu cloud instances.',
        image: teenpattiImg,
        year: '2025',
        role: 'Full-Stack Unity & Backend Architect (Aarrsol)',
        platforms: ['Android (Playstore)', 'WebGL', 'iOS'],
        techStack: ['Unity3D', 'Colyseus', 'Node.js', 'TypeScript', 'WebRTC Video', 'MongoDB', 'Nginx', 'Ubuntu Cloud'],
        metrics: [
            { label: 'Table Size', value: '2–5 Players' },
            { label: 'Video Calling', value: 'Real-Time WebRTC' },
            { label: 'Backend Stack', value: 'Node.js + Colyseus' },
            { label: 'Database', value: 'MongoDB Cloud' },
        ],
        architectureHighlights: [
            'State-synchronized game room schema with authoritative server-side deck shuffling and payouts',
            'Integrated WebRTC peer-to-peer video streaming rendered directly on 3D table avatar cards',
            'End-to-end encrypted WebSocket payloads preventing client-side packet spoofing',
            'Automated reconnection flow restoring player hands upon mobile network drops',
        ],
        featured: true,
        playstoreUrl: 'https://play.google.com/store/apps/details?id=com.sparkshift.teenpatti&hl=en_IN',
    },
    {
        id: 'pistol-duel-3d',
        title: 'Pistol Duel 3D',
        genre: '3D Western Shooter & Physics Duel',
        tagline: 'Action-packed Wild West 3D shooter built from scratch with realistic physics simulation, multi-tier AI, and cinematic slomo VFX.',
        description:
            'Created from scratch in Unity with C#, featuring realistic ballistics, weapon recoil, cinematic slow-motion VFX camera systems, multi-tiered AI opponents, and progressive western duel arenas.',
        fullOverview:
            'Pistol Duel 3D: Gun Shooting is an action-packed Wild West shooter where fast reflexes, accurate aiming, and quick shooting decide every duel. Developed completely from scratch, I engineered the realistic ballistics, weapon recoil kickback, dynamic ragdoll responses, and a cinematic slow-motion bullet-time VFX system triggered on precision headshots and critical shootouts. Designed progressive duel stages with reactive AI opponents featuring variable reaction times, flinch, and targeting accuracy.',
        image: pistolduelImg,
        year: '2026',
        role: 'Senior Unity Developer (Sparkshift)',
        platforms: ['Android (Play Store)'],
        techStack: ['Unity3D', 'C#', 'Physics Simulation', 'Slomo VFX Engine', 'AI State Machines', 'Mobile Optimization'],
        metrics: [
            { label: 'Storefront', value: 'Google Play Store' },
            { label: 'Physics Tech', value: 'Ballistics & Recoil' },
            { label: 'VFX', value: 'Dynamic Bullet-Time' },
            { label: 'AI Opponents', value: 'Multi-Level System' },
        ],
        architectureHighlights: [
            'Custom physics simulation engine managing bullet trajectory, spread, muzzle velocity, and authentic weapon kickback',
            'Cinematic slow-motion VFX camera system dynamically triggered upon precision shot alignment and quick-draw moments',
            'Multi-tiered AI reaction state machine simulating reaction delays, cover awareness, flinch, and accuracy scaling',
            'High-performance mobile rendering pipeline maintaining a rock-solid 60 FPS across low-end and flagship devices',
        ],
        featured: true,
        category: 'sports',
        playstoreUrl: 'https://play.google.com/store/apps/details?id=com.sparkshift.pistol.duel.gun.shooting&hl=en_IN',
        appstoreUrl: 'https://apps.apple.com/in/app/pistol-duel-3d-gun-shooting/id6774313660'
    },
    {
        id: 'headball-soccer',
        title: 'Headball Multiplayer Soccer',
        genre: '2-Player Physics Sports Duel',
        tagline: 'Head-to-head 2D/3D physics soccer game with synchronized Colyseus Node.js netcode.',
        description:
            'Created a physics-based 2-player football game with synchronized multiplayer, custom Node.js + Colyseus backend, and lag-compensated ball physics replication.',
        fullOverview:
            'Headball pits two players against each other in fast-paced 90-second soccer matches. Developed the synchronized networked physics engine in Unity and Colyseus, ensuring precise header timing, ball bounces, and super-shot power-ups without desyncs.',
        image: headballImg,
        year: '2023',
        role: 'Multiplayer Game Engineer',
        platforms: ['Android', 'iOS', 'WebGL'],
        techStack: ['Unity3D', 'Colyseus', 'Node.js', '2D/3D Physics', 'WebSockets'],
        metrics: [
            { label: 'Match Format', value: '1v1 Head-to-Head' },
            { label: 'Netcode Latency', value: '< 45ms Sync' },
            { label: 'Tick Rate', value: '50 Hz Authoritative' },
            { label: 'Physics', value: 'Lag-Compensated' },
        ],
        architectureHighlights: [
            'Interpolated networked physics ball replication with client prediction',
            'Server-authoritative goal detection and match timer callbacks',
            'Dynamic powerups: freeze ball, giant goal, and rocket jump',
        ],
        featured: true,
        demoUrl: 'https://www.linkedin.com/posts/devesh-beniwal-ba4460143_colyseus-mongodb-headball-ugcPost-7164472818930315264-du8F/',
    },
    {
        id: 'surf-sharks',
        title: 'Surf Sharks',
        genre: 'Endless Surfing Adventure Runner',
        tagline: 'Vibrant endless runner with dynamic ocean wave physics, Firebase live-ops, and custom admin panel.',
        description:
            'Developed an endless surfing adventure game with Firebase integration, custom admin portal for dynamic content, in-app updates, deep linking, and Crashlytics analytics.',
        fullOverview:
            'Surf Sharks challenges players to navigate tropical waves, leap over obstacle reefs, and outrun comical cartoon sharks. I built procedural wave generation, coin and star powerup spawners, and an administrative portal in Firebase allowing content managers to update character skins and seasonal events on the fly.',
        image: surfSharksImg,
        year: '2022',
        role: 'Senior Game Developer (Logic Simplified)',
        platforms: ['Android (Playstore)', 'iOS (Appstore)'],
        techStack: ['Unity3D', 'C#', 'Firebase Firestore', 'In-App Updates', 'Deep Linking', 'Crashlytics', 'IAP'],
        metrics: [
            { label: 'Runner Engine', value: 'Procedural Waves' },
            { label: 'Live Ops', value: 'Firebase Firestore' },
            { label: 'Monetization', value: 'IAP & Rewarded Ads' },
            { label: 'Stability', value: '99.8% Crash-Free' },
        ],
        architectureHighlights: [
            'Procedural continuous chunk pooling system eliminating runtime garbage collection pauses',
            'Custom Firebase admin dashboard for managing characters, unlockable boards, and coin prices',
            'Google Play In-App Updates and deep linking for user acquisition campaigns',
        ],
        featured: true,
        appstoreUrl: 'https://apps.apple.com/us/app/surf-sharks/id6446239864',
    },
    {
        id: 'duckhunt-ar-hardware',
        title: 'DuckHunt & AR Drawing',
        genre: 'AR Interaction & Hardware Integration',
        tagline: 'Immersive gesture tracking using Leap Motion, Arduino sensors, and ARFoundation.',
        description:
            'Built gesture-controlled AR game using Leap Motion for real-time hand tracking and gun control. Developed AR drawing app rendering in real-world spatial coordinates with ARFoundation.',
        fullOverview:
            'Pioneering natural user interface (NUI) interaction in Unity. Developed an interactive DuckHunt arcade title where players aim and fire using physical finger gun gestures tracked by the Leap Motion controller. Also developed an AR creative suite allowing spatial 3D drawing mapped to real-world plane surfaces.',
        image: duckhuntImg,
        year: '2021 – 2022',
        role: 'AR/VR & Hardware Systems Engineer',
        platforms: ['PC / Leap Motion', 'Mobile AR (ARCore/ARKit)'],
        techStack: ['Unity ARFoundation', 'ARCore', 'ARKit', 'Leap Motion SDK', 'Arduino', '3D Spatial Math'],
        metrics: [
            { label: 'Tracking Tech', value: 'Leap Motion Hands' },
            { label: 'Spatial AR', value: 'ARFoundation / ARCore' },
            { label: 'Hardware', value: 'Leap Motion + Arduino' },
            { label: 'Gesture Latency', value: '< 15ms Response' },
        ],
        architectureHighlights: [
            'Pinch and trigger gesture classifier reading skeletal hand joint data in real-time',
            'Raycast projection from virtual fingertip through camera screen space into 3D targets',
            'Point-cloud surface plane anchor detection with persistent spatial positioning',
        ],
        featured: true,
        category: 'arvr',
        demoUrl: 'https://lnkd.in/p/g6ZK_VFH',
    },
    {
        id: 'ludo-samrat',
        title: 'Ludo Samrat',
        genre: 'Real-Time Multiplayer Dice & Board Game',
        tagline: 'Classic Indian dice board game with 2–4 players, real-money integration, UniTask async flow, and Photon netcode.',
        description:
            'Engineered from scratch using Photon multiplayer & chat, UniWebView for real-money transactions, UniTask asynchronous programming, bot AI matchmaking, and resilient reconnection logic.',
        fullOverview:
            'Ludo Samrat is a premier real-time multiplayer dice game for 2 to 4 players featuring both online multiplayer and offline modes. Built entirely from scratch, I engineered the Photon PUN2 multiplayer room lifecycle, synchronized dice rolls, and pawn movement mechanics. Designed the complete financial wallet flow for real-money gameplay using UniWebView and secure REST APIs. Optimized the entire game architecture with UniTask for asynchronous zero-allocation routines, and developed intelligent bot algorithms with seamless player reconnection logic.',
        image: ludoSamratImg,
        year: '2022 – 2023',
        role: 'Senior Unity & Netcode Programmer',
        platforms: ['Android', 'iOS', 'Web'],
        techStack: ['Unity3D', 'C#', 'Photon PUN2', 'Photon Chat', 'UniTask', 'UniWebView', 'REST APIs'],
        metrics: [
            { label: 'Players', value: '2–4 Real-Time' },
            { label: 'Multiplayer', value: 'Photon PUN2' },
            { label: 'Async Tech', value: 'UniTask Zero-GC' },
            { label: 'E-Commerce', value: 'UniWebView Real-Money' },
        ],
        architectureHighlights: [
            'Authoritative Photon PUN2 room coordination with synchronized dice seeds, token movement pathing, and cut rules',
            'Integrated UniWebView bridging real-money payment gateways and wallet transactions via authenticated REST APIs',
            'UniTask asynchronous programming architecture eliminating coroutine garbage collection allocations',
            'State-resilient reconnection flow restoring player game state and active tokens upon network disruption',
        ],
        featured: true,
        category: 'multiplayer',
        websiteUrl: 'https://ludosamrat.in/',
    },
    {
        id: 'akiro-circle-game',
        title: 'Akiro: Circle Game',
        genre: 'Hyper-Casual Arcade · Google Play Instant',
        tagline: 'Fast-paced circular dodging arcade game featured by Google in the Play Instant category.',
        description:
            'Featured by Google in Play Instant! Designed dynamic circular dodging mechanics, enemy wave algorithms, power-up systems, In-App Purchases, Google Play Games & Game Center leaderboards.',
        fullOverview:
            'Akiro is an addictive hyper-casual arcade title where players jump between concentric rings to dodge oncoming monsters and hazard patterns. Featured by Google in the prestigious Play Instant category, I engineered the entire gameplay from concept to store release. Implemented diverse power-ups (speed slow-down, gem multipliers, screen-clearing waves), multi-currency In-App Purchases (IAP), Google Play Instant package optimization (<15MB), cloud save, and social leaderboards across both Google Play Games and Apple Game Center.',
        image: akiroImg,
        year: '2020 – 2021',
        role: 'Lead Unity Game Developer (Addonvision)',
        platforms: ['Android (Playstore)', 'iOS (Appstore)', 'Google Play Instant'],
        techStack: ['Unity3D', 'C#', 'Google Play Instant', 'In-App Purchases (IAP)', 'I2Localization', 'Game Center'],
        metrics: [
            { label: 'Recognition', value: 'Google Play Instant Feature' },
            { label: 'Platforms', value: 'Android & iOS' },
            { label: 'Size Budget', value: '< 15MB Instant Build' },
            { label: 'Languages', value: 'I2Localization 8+' },
        ],
        architectureHighlights: [
            'Concentric orbital movement mechanics with responsive touch-triggered circle-switching physics',
            'Google Play Instant build optimization keeping the executable package payload well under 15MB',
            'Dynamic enemy wave spawner scaling pattern difficulty based on real-time player survival streaks',
            'Full I2Localization integration enabling on-the-fly language switching across 8+ global regions',
        ],
        featured: true,
        category: 'casual',
        playstoreUrl: 'https://play.google.com/store/apps/details?id=com.addonvision.akiro.circlegames',
        appstoreUrl: 'https://apps.apple.com/us/app/akiro-circle-game/id1558127102',
    },
    {
        id: 'fourplay-chess',
        title: 'FourPlay Chess',
        genre: '3D Competitive Multiplayer Chess',
        tagline: 'Full 3D competitive chess title released on Steam with Photon PUN2 multiplayer and Steamworks SDK.',
        description:
            'Developed 3D multiplayer chess for PC on Steam. Integrated Photon PUN2 for real-time matches and Photon Chat, Steamworks SDK for authentication and achievements, and offline practice modes.',
        fullOverview:
            'FourPlay Chess is an immersive 3D chess title designed for competitive PC players on Steam. I implemented the full 3D board interaction, legal move validation, check/checkmate detection, and real-time multiplayer over Photon PUN2 and Photon Chat. Built offline AI practice modes, full Steamworks.NET SDK integration for social login, friends list invites, cloud saves, and Steam achievements, and prepared the final production build pipeline for Steam deployment.',
        image: fourplayChessImg,
        year: '2021 – 2022',
        role: 'Lead Unity & Steam Engineer',
        platforms: ['PC (Steam)', 'Windows'],
        techStack: ['Unity3D', 'C#', 'Photon PUN2', 'Photon Chat', 'Steamworks.NET', '3D Board Logic'],
        metrics: [
            { label: 'Storefront', value: 'Valve Steam Store' },
            { label: 'Multiplayer', value: 'Photon PUN2 & Chat' },
            { label: 'Integration', value: 'Steamworks.NET SDK' },
            { label: 'Rules Engine', value: 'Full FIDE Chess Logic' },
        ],
        architectureHighlights: [
            'Complete 3D FIDE chess logic verifying legal movement, castling, en passant, promotion, and checkmate',
            'Synchronized multiplayer turns with turn clocks and live match text chat powered by Photon Chat',
            'Steamworks.NET integration enabling Steam authentication, community achievements, and overlay invites',
            'Optimized high-fidelity 3D board rendering with dynamic lighting and camera orbit controls',
        ],
        featured: true,
        category: 'multiplayer',
        steamUrl: 'https://store.steampowered.com/app/1814480/FourPlay_Chess/',
        videoUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/256870363/movie480_vp9.webm?t=1642975660',
    },
    {
        id: 'augmented-reality-labs',
        title: 'Augmented Reality Tech Labs',
        genre: 'AR Simulation & Spatial Computer Vision',
        tagline: 'Hands-on spatial AR experiments featuring ground detection, vehicle physics, 3D spatial drawing, and model tracking.',
        description:
            'Suite of augmented reality applications built with Unity, ARFoundation, ARCore, and Vuforia. Features AR-Car physics driving, 3D LineRenderer spatial drawing, and Vuforia physical model tracking.',
        fullOverview:
            'Developed as a research and engineering suite to push the boundaries of Augmented Reality using Unity, ARFoundation, ARCore, and Vuforia. The suite consists of 3 distinct applications: 1) AR-Car: Horizontal plane detection placing realistic driveable cars with WheelColliders, suspension physics, and custom color/wheel modifiers; 2) AR-Drawing: Spatial 3D painting using LineRenderer with camera distance offset and interactive color palette; 3) Model-Tracking: Vuforia 3D object scanning handling OnTracked/OnTrackedLost events with real-time occlusion masking.',
        image: arLabsImg,
        year: '2020 – 2021',
        role: 'AR/VR Gameplay & Simulation Engineer',
        platforms: ['Android (ARCore)', 'ARFoundation'],
        techStack: ['Unity ARFoundation', 'ARCore', 'Vuforia Engine', 'WheelCollider Physics', 'LineRenderer', 'C#'],
        metrics: [
            { label: 'Tracking Tech', value: 'ARFoundation & Vuforia' },
            { label: 'Spatial Physics', value: 'WheelCollider AR' },
            { label: 'Creative Tech', value: '3D Spatial LineRenderer' },
            { label: 'Occlusion', value: 'Model Scanning & Culling' },
        ],
        architectureHighlights: [
            'ARFoundation ground plane estimation with real-time shadow receiver planes and vehicle driving physics',
            'Spatial 3D painting using LineRenderer with dynamic vertex welding and interactive color selection palette',
            'Vuforia 3D CAD model tracking with event-driven OnTracked/OnTrackedLost callbacks and occlusion shaders',
            'Real-time ambient lighting estimation matching virtual vehicle reflection probes to physical room conditions',
        ],
        featured: true,
        category: 'arvr',
        additionalLinks: [
            {
                label: 'AR-Car Driving Demo',
                url: 'https://www.linkedin.com/posts/devesh-beniwal-ba4460143_arcore-arfoundation-augmentedreality-activity-6600337280773255168-Cpyp?utm_source=share&utm_medium=member_desktop',
                type: 'linkedin',
            },
            {
                label: 'AR-Drawing Showcase',
                url: 'https://www.linkedin.com/posts/devesh-beniwal-ba4460143_ar-arfoundation-arcore-activity-6601706333764968448-O9w6?utm_source=share&utm_medium=member_desktop',
                type: 'linkedin',
            },
            {
                label: '3D Model-Tracking Video',
                url: 'https://drive.google.com/file/d/1lEBAoj-YVbDS4WVhNfy97yXUJp7z_bRm/view?usp=sharing',
                type: 'drive',
            },
        ],
    },
    {
        id: 'arduino-unity-hardware',
        title: 'Arduino + Unity Hardware Tech',
        genre: 'Physical Computing & Hardware-Game Interface',
        tagline: 'Bridging Unity games with microcontrollers, addressable RGB LED arrays, audio spectrums, and 6-DOF gyro sensors.',
        description:
            'Physical computing projects connecting Unity 3D with Arduino via high-speed serial ports. Features finger gesture counting to addressable RGB LEDs, music spectrum trail animations, and 6-DOF MPU6050 gyroscope ski-controller.',
        fullOverview:
            'An innovative suite of physical computing and natural human-machine interfaces developed in Unity and C# interfacing with Arduino microcontrollers: 1) Finger-Counts: Real-time hand skeletal tracking reading open finger counts in Unity and transmitting data via serial COM ports to drive physical addressable RGB LED arrays; 2) Music-Trail: Extracting live FFT audio spectrum data in Unity and streaming it to an Arduino to produce cascading LED trail ripples; 3) Thunder-Beat: Sound sensor integration pulsing reactive lighting effects; 4) Gyro-Controller: Interfacing an MPU6050 6-DOF gyroscope/accelerometer over serial to control a 3D skiing game directly with physical tilts.',
        image: arduinoImg,
        year: '2020 – 2024',
        role: 'Unity Hardware Systems Architect',
        platforms: ['PC (Windows)', 'Arduino Hardware'],
        techStack: ['Unity3D', 'C#', 'Arduino Uno', 'Serial Port (RS-232)', 'MPU6050 Gyro', 'WS2812B LEDs', 'Audio FFT'],
        metrics: [
            { label: 'Protocols', value: 'Serial COM Port I/O' },
            { label: 'Sensors', value: 'MPU6050 6-DOF Gyro' },
            { label: 'Actuators', value: 'Addressable RGB LEDs' },
            { label: 'Audio Tech', value: 'Unity FFT Spectrum' },
        ],
        architectureHighlights: [
            'Low-latency serial communication protocol with packet framing and checksum verification between Unity and Arduino',
            'Unity audio spectrum frequency analysis streaming FFT amplitude bands to dynamic WS2812B addressable LEDs',
            'MPU6050 6-DOF accelerometer/gyroscope integration mapping physical pitch and roll directly to 3D skiing player tilt',
            'Hand tracking finger count parsing serialized over COM ports to drive interactive physical indicator lights',
        ],
        featured: true,
        category: 'arvr',
        additionalLinks: [
            {
                label: 'Finger-Counts RGB Demo',
                url: 'https://drive.google.com/file/d/1lWXsthgJH8DWmqg73xXuMJ8A7yPg6KpX/view?usp=sharing',
                type: 'drive',
            },
            {
                label: 'Music-Trail LED Demo',
                url: 'https://drive.google.com/file/d/1lYSPvpyxc4_5Hxhx8-hRCGgPkx4dNc2C/view?usp=sharing',
                type: 'drive',
            },
            {
                label: 'Thunder-Beat Sound LED',
                url: 'https://www.linkedin.com/posts/devesh-beniwal-ba4460143_beatdetection-ledlight-arduinouno-activity-6741383040402034689-OcI0?utm_source=share&utm_medium=member_desktop',
                type: 'linkedin',
            },
            {
                label: 'Gyro-Controller Skiing',
                url: 'https://www.linkedin.com/posts/devesh-beniwal-ba4460143_skiing-unity-arduino-activity-7159928167699206144-s4pW?utm_source=share&utm_medium=member_desktop',
                type: 'linkedin',
            },
        ],
    },
];

export const CAREER_ROADMAP: CareerMilestone[] = [
  {
    year: '05/2024 – Present',
    period: 'Current Role · Bengaluru, Karnataka',
    role: 'Senior Unity Developer',
    company: 'Sparkshift Technologies',
    location: 'Bengaluru, India',
    level: 'STAGE 04 · SENIOR UNITY DEVELOPER',
    summary:
      'Driving core game development, multiplayer netcode, and Web3 integrations. Spearheading Anarchy Warzone vehicle physics enhancements and real-time WebRTC audio/video communications.',
    keyAchievements: [
      'Built POCs for Web3 & multiplayer integration using Sequence SDK, WalletConnect, and Photon Fusion (v1 & v2)',
      'Enhanced Project Anarchy Warzone with realistic vehicle physics (car, helicopter, bike) and new gameplay modes',
      'Achieved up to 30% physics optimization and 20% draw calls reduction through Unity profiling and batching',
      'Integrated WebRTC and Vivox to enable real-time video/audio calling in multiplayer matches',
    ],
    technologies: ['Unity3D', 'Photon Fusion v2', 'Sequence SDK', 'WalletConnect', 'WebRTC', 'Vivox', 'C#'],
    metrics: '+30% Physics Optimization · -20% Draw Calls',
  },
  {
    year: '09/2023 – 03/2024',
    period: '7 Mos · Jaipur, Rajasthan',
    role: 'Senior Unity Developer',
    company: 'Aarrsol Digital Pvt. Ltd.',
    location: 'Jaipur, India',
    level: 'STAGE 03 · SENIOR FULL-STACK DEVELOPER',
    summary:
      'Designed and developed core game architecture in Unity and Node.js using the Colyseus framework. Built backend REST APIs with MongoDB and WebGL browser bridges.',
    keyAchievements: [
      'Designed and developed core game architecture in Unity and Node.js using Colyseus framework',
      'Built and deployed scalable REST APIs with MongoDB to support high-concurrency multiplayer systems',
      'Implemented end-to-end encryption for secure client-server socket communication',
      'Created seamless communication bridge between Unity WebGL and JavaScript for website embedding',
      'Conducted rigorous cross-platform testing & debugging ensuring rock-solid stability on Android, iOS, and Web',
    ],
    technologies: ['Colyseus', 'Node.js', 'MongoDB', 'TypeScript', 'Unity WebGL', 'REST APIs', 'E2E Encryption'],
    metrics: 'Scalable Colyseus Backend · WebGL JS Bridge',
  },
  {
    year: '07/2021 – 09/2023',
    period: '2 Yrs 3 Mos · Dehradun, Uttarakhand',
    role: 'Senior Unity Developer',
    company: 'Logic Simplified Pvt. Ltd.',
    location: 'Dehradun, India',
    level: 'STAGE 02 · SENIOR SYSTEMS ENGINEER',
    summary:
      'Architected live-ops features, WebXR prototypes, and real-time multiplayer systems using Socket.IO and Colyseus. Mentored junior programmers across multi-platform productions.',
    keyAchievements: [
      'Integrated Addressables, IAP, Localization, and full Firebase suite (Firestore, Storage, Messaging, Hosting, Auth)',
      'Built real-time multiplayer features using Socket.IO & Colyseus backed by scalable microservices',
      'Explored WebXR and implemented decoupled architecture using design patterns for multi-platform deployment',
      'Developed WebGL solutions for Audio/Video/Screen Sharing via WebRTC & Jitsi integration',
      'Mentored junior developers and resolved complex physics and memory bugs to ensure on-schedule delivery',
    ],
    technologies: ['Unity3D', 'Socket.IO', 'Colyseus', 'Firebase Suite', 'Addressables', 'WebXR', 'Jitsi / WebRTC'],
    metrics: 'Full Firebase Integration · Multi-Platform WebXR',
  },
  {
    year: '12/2019 – 07/2021',
    period: '1 Yr 8 Mos · Jaipur, Rajasthan',
    role: 'Unity Developer',
    company: 'Addonvision Infotech',
    location: 'Jaipur, India',
    level: 'STAGE 01 · MULTIPLAYER DEVELOPER',
    summary:
      'Engineered 5+ commercial multiplayer titles using Photon PUN. Helped Addonvision Infotech achieve recognition as a Top 1% Unity Developer organization on Freelancer.',
    keyAchievements: [
      'Learned and developed 5+ multiplayer projects using Photon PUN and WebSockets',
      'Helped the company achieve recognition as Top 1% Unity Developer organisation on Freelancer during tenure',
      'Reviewed technical project documentation to define timelines, resources, and technical feasibility',
      'Wrote clean, modular C# code from scratch and optimized existing systems for client projects',
    ],
    technologies: ['Unity3D', 'Photon PUN', 'C#', 'Multiplayer Game Loops', 'Freelancer Enterprise'],
    metrics: 'Top 1% Unity Org Recognition · 5+ Shipped Titles',
  },
  {
    year: '02/2018 – 02/2019',
    period: '1 Year · Jaipur, Rajasthan',
    role: 'Unity Game Developer',
    company: 'HuriyaSoft Studios',
    location: 'Jaipur, India',
    level: 'FOUNDATION · GAMEPLAY PROGRAMMER',
    summary:
      'Conceptualized, pitched, and developed original game prototypes from scratch through release on mobile app stores.',
    keyAchievements: [
      'Conceptualized, pitched, and developed original game ideas from initial prototype to production release',
      'Built and optimized existing mobile games with improved frame rates and responsive touch controls',
      'Implemented physics simulations, animation controllers, and custom UI/UX screen flows',
    ],
    technologies: ['Unity Engine', 'C#', 'Mobile Touch Physics', 'Animation Controllers', 'UI/UX'],
    metrics: 'Original Prototypes Shipped · 8-Year Journey Begun',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'gamedev',
    name: 'Game Development & C#',
    description: 'Core game architecture, design patterns, and cross-platform engine systems.',
    skills: [
      {
        name: 'Unity Engine & C# Architecture',
        level: 98,
        experienceYears: 8,
        highlight: 'Decoupled game architecture, design patterns (State, Observer, Service Locator, Object Pooling), C# .NET',
        keywords: ['Unity 2022/6', 'C#', 'OOP', 'Design Patterns', 'Decoupled Modules'],
      },
      {
        name: 'Performance Optimization',
        level: 96,
        experienceYears: 8,
        highlight: 'Achieved 30% physics optimization and 20% draw calls reduction in commercial titles via profiling',
        keywords: ['Physics Optimization', 'Draw Call Batching', 'Profiler', 'Memory Profiler', 'LOD Groups'],
      },
      {
        name: 'Cross-Platform Deployment',
        level: 95,
        experienceYears: 8,
        highlight: 'Production builds and store releases across Android (Google Play), iOS (App Store), WebGL, and PC',
        keywords: ['Android', 'iOS', 'WebGL', 'PC Standalone', 'App Store / Playstore'],
      },
      {
        name: 'Physics & Game Mechanics',
        level: 94,
        experienceYears: 8,
        highlight: 'Vehicle physics (cars, helicopters, bikes, tanks), ragdolls, inverse kinematics (IK), 2D/3D physics',
        keywords: ['Vehicle Physics', 'Full Body IK', 'PhysX', 'Rigidbodies', 'Wheel Colliders'],
      },
    ],
  },
  {
    id: 'multiplayer',
    name: 'Multiplayer & Networking',
    description: 'Real-time synchronization, state netcode, matchmaking, and voice/video calling.',
    skills: [
      {
        name: 'Photon (PUN, Fusion v1 & v2)',
        level: 96,
        experienceYears: 6,
        highlight: 'Engineered 10+ titles with Photon, led production migration from Fusion v1 to Fusion v2',
        keywords: ['Photon Fusion v2', 'PUN 2', 'NetworkTransform', 'Client Prediction', 'Lag Compensation'],
      },
      {
        name: 'Colyseus & WebSockets',
        level: 94,
        experienceYears: 5,
        highlight: 'Server-authoritative state rooms, synchronized tick rates, Socket.IO, and room matchmaking',
        keywords: ['Colyseus', 'Socket.IO', 'State Synchronization', 'Room Matchmaking', 'Node.js'],
      },
      {
        name: 'WebRTC & Video Calling',
        level: 90,
        experienceYears: 4,
        highlight: 'Integrated WebRTC, Vivox, and Jitsi for live video and voice calling inside multiplayer matches',
        keywords: ['WebRTC', 'Vivox', 'Live Video Calling', 'Voice Chat', 'Jitsi Integration'],
      },
    ],
  },
  {
    id: 'arvr',
    name: 'AR/VR & Hardware',
    description: 'Immersive reality, gesture tracking, and external sensor hardware integration.',
    skills: [
      {
        name: 'ARFoundation, ARCore & ARKit',
        level: 92,
        experienceYears: 5,
        highlight: 'Spatial plane tracking, real-world coordinates drawing, environmental lighting, image tracking',
        keywords: ['ARFoundation', 'ARCore', 'ARKit', 'Plane Detection', 'World Coordinates'],
      },
      {
        name: 'VR SDKs (Oculus, Pico)',
        level: 88,
        experienceYears: 4,
        highlight: 'VR interaction systems, teleportation locomotion, 6-DoF controllers, WebXR exploration',
        keywords: ['Oculus SDK', 'Pico SDK', 'WebXR', '6-DoF Interaction', 'Spatial Audio'],
      },
      {
        name: 'Hardware & Sensor Integration',
        level: 90,
        experienceYears: 5,
        highlight: 'Leap Motion gesture hand tracking, Microsoft Kinect, Arduino microcontrollers, custom inputs',
        keywords: ['Leap Motion', 'Kinect', 'Arduino', 'Gesture Control', 'Hardware Interfacing'],
      },
    ],
  },
  {
    id: 'backend',
    name: 'Backend, Cloud & WebGL',
    description: 'Full-stack server APIs, cloud databases, and browser runtime bridges.',
    skills: [
      {
        name: 'Node.js, TypeScript & Express',
        level: 92,
        experienceYears: 5,
        highlight: 'Developed backend game servers, REST APIs, end-to-end encryption, and Mongoose schemas',
        keywords: ['Node.js', 'TypeScript', 'Express.js', 'REST APIs', 'E2E Encryption'],
      },
      {
        name: 'Firebase & Cloud Ops',
        level: 94,
        experienceYears: 6,
        highlight: 'Firestore, Firebase Auth, Cloud Storage, Cloud Messaging, Analytics, Crashlytics, Nginx, Ubuntu',
        keywords: ['Firestore', 'Firebase Auth', 'Crashlytics', 'MongoDB', 'Ubuntu Cloud', 'Nginx'],
      },
      {
        name: 'Unity WebGL & JS Bridge',
        level: 92,
        experienceYears: 5,
        highlight: 'Two-way communication bridge between Unity WebGL canvas and JavaScript on browser websites',
        keywords: ['Unity WebGL', 'JSlib Bridge', 'Browser Communication', 'Canvas Scaling'],
      },
    ],
  },
  {
    id: 'production',
    name: 'Production & Live Ops',
    description: 'Asset pipeline, monetization, version control, and agile team workflows.',
    skills: [
      {
        name: 'Addressables & Asset Bundles',
        level: 94,
        experienceYears: 5,
        highlight: 'Remote asset delivery, memory-managed downloading, dynamic asset hot-patching',
        keywords: ['Addressables', 'Asset Bundles', 'Remote Catalogs', 'Memory Management'],
      },
      {
        name: 'Monetization & Live Services',
        level: 92,
        experienceYears: 6,
        highlight: 'In-App Purchases (IAP), Google Play In-App Updates, deep linking, localization, push messaging',
        keywords: ['IAP', 'Google Play In-App Update', 'Localization', 'Deep Linking', 'Ad Networks'],
      },
      {
        name: 'Git, Jira & Agile Delivery',
        level: 95,
        experienceYears: 8,
        highlight: 'Git/GitHub version control, Scrum sprint management, project estimation, junior mentoring',
        keywords: ['Git', 'GitHub', 'Agile/Scrum', 'Jira', 'Code Review', 'Mentorship'],
      },
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'unity-certified-programmer',
    title: 'Unity Certified Professional: Programmer',
    issuer: 'Unity Technologies',
    year: '2026',
    credentialId: 'd7ef8a4033d84f18bab3a661cbe1e250',
    description:
      'Professional credential awarded by Unity Technologies, validating advanced game systems architecture, rendering pipelines, physics optimization, and cross-platform production practices.',
    badgeType: 'expert',
    verifiedUrl: 'https://www.credly.com/badges/296cd6e7-9740-490c-9543-ed14b1e3a329/linked_in_profile',
    keySkills: ['Unity Engine Architecture', 'Performance Profiling', 'Gameplay Systems', 'Physics Optimization'],
    certificateImage: unityCertImg,
  },
  {
    id: 'ds-design-patterns',
    title: 'Data Structures & Design Patterns for Game Developers',
    issuer: 'Game Engineering Institute',
    year: '2023',
    credentialId: 'DV5JKHZGE373',
    description:
      'Advanced certification covering core data structures, algorithmic time complexity, state machines, and real-time game architecture design patterns.',
    badgeType: 'expert',
    verifiedUrl: 'https://www.coursera.org/account/accomplishments/verify/DV5JKHZGE373',
    keySkills: ['Data Structures', 'Design Patterns', 'Algorithms', 'Clean Game Architecture'],
    certificateImage: csharpCertImg,
  },
];

export const TESTIMONIALS = [
    {
        id: 'rec-1',
        name: 'Snigdh Saxena',
        role: 'Engineering Manager',
        studio: 'Hero MotoCorp',
        profilePicture: 'https://media.licdn.com/dms/image/v2/D5603AQG1Wu9ujd7xgA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710243139304?e=1792627200&v=beta&t=DYCDKbbjTpzlnmpaefhnXs9lw_RtsbFSf2HrBEmjIZs',
        linkedInUrl: 'https://www.linkedin.com/in/snigdh-saxena/?skipRedirect=true',
        relationship: 'Snigdh worked with Devesh on the same team',
        date: 'Verified LinkedIn Recommendation',
        avatarInitials: 'SS',
        quote:
            "Having worked closely with him, I can confidently say that he's an exceptional individual who excels in his work. Devesh consistently goes above and beyond, demonstrating excellence in everything he does. His dedication and attention to detail are truly impressive, and he's always willing to lend a helping hand to his colleagues, especially juniors. He's not just a great worker; he's also a fantastic team player. Devesh has a knack for bringing people together and fostering collaboration.",
    },
    {
        id: 'rec-2',
        name: 'Avani Sahu',
        role: 'Software Engineer',
        studio: 'Aarrsol Digital Private Limited',
        profilePicture: 'https://media.licdn.com/dms/image/v2/D5635AQFiVBQE5eUhAg/profile-framedphoto-shrink_800_800/B56ZWuj4s8GoAk-/0/1742390398149?e=1791378000&v=beta&t=Yli0bJ7NqpwUXvC1uCBiyP1cQSyEi4c0wvAK5SRQviM',
        linkedInUrl: 'https://www.linkedin.com/in/avanisahu10/',
        relationship: 'Avani worked with Devesh but on different teams',
        date: 'Verified LinkedIn Recommendation',
        avatarInitials: 'AS',
        quote:
            'He is creative, attentive to details & has strong technical knowledge which helps him build robust mobile apps & stands him out.',
    },
    {
        id: 'rec-3',
        name: 'Mayank Soni',
        role: 'Senior Unity Developer',
        studio: 'NKB Playtech',
        profilePicture: 'https://media.licdn.com/dms/image/v2/D4D03AQFc5iECZ01Amg/profile-displayphoto-crop_800_800/B4DZ74eFNEJwAI-/0/1782285099108?e=1792627200&v=beta&t=1B26havei6zMnTkGodwi6VI1s4ER8SHHYMf3DRxueE4',
        linkedInUrl: 'https://www.linkedin.com/in/mayankgamedev/',
        relationship: 'Mayank reported to Devesh directly',
        date: 'Verified LinkedIn Recommendation',
        avatarInitials: 'MS',
        quote:
            'Devesh is the best colleague and senior you could ask for. Always sharing whatever new thing he can across in his adventures that could save a developer a lot of time. Only all-rounder person I have met in my field till date since his skills are not just limited to unity or game development. Learned a lot from working directly under him.',
    },
    {
        id: 'rec-4',
        name: 'Himanshu Dua',
        role: 'Software Engineer',
        studio: 'Qualitest',
        profilePicture: 'https://media.licdn.com/dms/image/v2/C5603AQFaijC-mjqMCg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1611037872474?e=1792627200&v=beta&t=kdCH_MCyn8xQCq33xkm20Qo5m8UU70dheLZue7JigTI',
        linkedInUrl: 'https://www.linkedin.com/in/himanshudua/',
        relationship: 'Himanshu worked with Devesh on the same team',
        date: 'Verified LinkedIn Recommendation',
        avatarInitials: 'HD',
        quote:
            "It's rare to come across someone as motivated and enthusiastic as Devesh. He consistently went above and beyond to ensure that our team met its targets. His positive attitude and strong work ethic were contagious, and he always brought fresh ideas to the table. In my opinion, your decision is up to mark!",
    },
    {
        id: 'rec-5',
        name: 'Vivek Choudhary',
        role: 'Senior Unity Game Developer',
        studio: 'Optimal Virtual Employee',
        profilePicture: 'https://media.licdn.com/dms/image/v2/D4D03AQGEKq_v2lXUDA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1693971246152?e=1792627200&v=beta&t=bsAZvWU2mRJZ3PBmawD2ESKH8sPkEuWYcv2crMuceDk',
        linkedInUrl: 'https://www.linkedin.com/in/vivek-choudhary-b84747128/',
        relationship: 'Vivek worked with Devesh but on different teams',
        date: 'Verified LinkedIn Recommendation',
        avatarInitials: 'VC',
        quote:
            'Devesh Beniwal knows his stuff. He is knowledgeable about many domains that are not directly even linked to but sometimes play a crucial role in Game development or any sort of Unity based project development. He is a smart and cool fellow to work with. I truly respect his knowledge, opinion and skills.',
    },
    {
        id: 'rec-6',
        name: 'Arpit Jaiswal',
        role: 'React Native Developer',
        studio: 'House Of Edtech',
        profilePicture: 'https://media.licdn.com/dms/image/v2/D5603AQGbxt3dxdZ35Q/profile-displayphoto-shrink_200_200/B56ZQMYmzFG8AY-/0/1735374567078?e=1792627200&v=beta&t=cT-tffQNg854xD59W-aQ28jI0dxu2VBjQhbO5DQQxPk',
        linkedInUrl: 'https://www.linkedin.com/in/arpit664/',
        relationship: 'Arpit worked with Devesh but they were at different companies',
        date: 'Verified LinkedIn Recommendation',
        avatarInitials: 'AJ',
        quote:
            'Devesh is an awesome Unity dev! 🚀 I loved working together on few projects. Their skills and attention to detail are top-notch. If you need a talented dev, He is the recommended person! 👍',
    },
    {
        id: 'rec-7',
        name: 'Luk van Goor',
        role: 'Researcher/Developer',
        studio: 'Restauratieatelier Restaura',
        profilePicture: 'https://media.licdn.com/dms/image/v2/D4E03AQH0GbLqOjUPgw/profile-displayphoto-crop_800_800/B4EZ4QHxH4IAAI-/0/1778386933561?e=1792627200&v=beta&t=GL0VLQyR6LEMREqASaz52XEQB2F4kgJ60beHh9WXJyg',
        linkedInUrl: 'https://www.linkedin.com/in/luk-van-goor-b43790b9/',
        relationship: "Luk was Devesh's client",
        date: 'Verified LinkedIn Recommendation',
        avatarInitials: 'LG',
        quote:
            'Great work delivered in a short time! He helped me with a great project to digitalise archaeological finds in a digital showroom. Great work was done with Unity and Leap Motion!',
    },
];
