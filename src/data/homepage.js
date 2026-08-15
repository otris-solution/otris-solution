export const homepageContent = {
  hero: {
    statementLead: 'EVERYTHING STARTS',
    statementAccent: 'WITH UNDERSTANDING.',
    subtitle: 'Human Expertise, Connected.',
    intro:
      'OTRIS.SOLUTION explains how OTRIS bridges devices, gateways, engine flows, canonical data, and authorized clinical experiences without collapsing architecture into marketing shorthand.',
    primaryCta: { label: 'Read the architecture', href: '#otris-architecture' },
    secondaryCta: { label: 'See the ecosystem', href: '#clinical-wall-ecosystem' },
    philosophySupport: 'Harus Seperti Mercusuar Piak, Bukan Seperti Etalase.',
    highlights: [
      'Vendor-aware boundaries without vendor lock-in.',
      'One data foundation for multiple authorized views.',
      'Open source planned as a disciplined public layer.',
    ],
    image: {
      src: '/assets/images/og_cover.jpg',
      alt: 'OTRIS cover artwork used as supporting hero visual.',
      caption: 'Reused legacy visual asset for the parallel-build homepage.',
    },
  },
  whyOtris: {
    eyebrow: 'Why OTRIS',
    title: 'A public website that explains the bridge, not just the destination.',
    intro:
      'OTRIS exists to make the path from raw device output to usable clinical understanding explicit, inspectable, and teachable. The website must describe that bridge with the same discipline the system expects from its software.',
    pillars: [
      {
        title: 'Readable boundaries',
        body: 'The site should make each architectural boundary legible so founders, engineers, and clinical partners can discuss the same system without confusion.',
      },
      {
        title: 'Evidence-shaped language',
        body: 'Claims stay bounded. Open source, safety, and architecture are explained without inventing compatibility, deployment, or clinical validation claims.',
      },
      {
        title: 'Human continuity',
        body: 'OTRIS is not a pile of hardware labels. It is a system that preserves context for the people responsible for care, operations, and interpretation.',
      },
    ],
  },
  humanExpertise: {
    eyebrow: 'Human Expertise',
    title: 'The final interpretation still belongs to people with responsibility.',
    intro:
      'The system can structure data, preserve provenance, and reduce integration noise. It must not erase the role of clinicians, operators, and domain experts who decide what that information means in practice.',
    bullets: [
      'OTRIS supports human judgment rather than replacing it.',
      'Operational context and clinical interpretation stay visible together.',
      'The public story should honor expertise, not flatten it into dashboards alone.',
    ],
    image: {
      src: null,
      alt: '',
      title: 'Human Expertise visual',
      note: 'ASSET PENDING',
    },
  },
  theBridge: {
    eyebrow: 'The Bridge',
    title: 'Between machine output and human understanding, OTRIS carries structure, proof, and context.',
    intro:
      'OTRIS is the bridge layer that makes signals understandable across protocols, devices, canonical models, and authorized user experiences. It should feel stable, explicit, and accountable at every step.',
    bullets: [
      'From source protocol to canonical meaning.',
      'From one device stream to multiple authorized experiences.',
      'From technical integration work to a public explanation people can actually follow.',
    ],
    image: {
      src: null,
      alt: '',
      title: 'The Bridge visual',
      note: 'ASSET PENDING',
    },
  },
  architecture: {
    eyebrow: 'OTRIS Architecture',
    title: 'Keep the engine visible and keep the boundaries explicit.',
    intro:
      'The architecture section explains the primary system flow and the secondary normalization view without dropping OTRIS ENGINE or hiding the normalization boundary.',
    primaryFlow: [
      'DATA SOURCES',
      'OTRIS EDGE GATEWAY',
      'OTRIS ENGINE',
      'OTRIS CORE',
      'APPLICATIONS',
      'USERS',
    ],
    complianceNote: 'Security & Compliance is cross-cutting across every layer, not a decorative afterthought.',
    secondaryFlow: [
      'MEDICAL DEVICE',
      'GATEWAY',
      'PARSER',
      'DEVICE PROFILE',
      'MAPPING',
      'NORMALIZATION',
      'CANONICAL OTRIS',
      'CORE',
    ],
    boundaryLabel: 'NORMALIZATION BOUNDARY',
  },
  clinicalWall: {
    eyebrow: 'OTRIS Clinical Wall Ecosystem',
    title: 'One patient, one data foundation, multiple authorized clinical views.',
    intro:
      'The ecosystem section explains how canonical data can support multiple experiences without becoming public data. The foundation is shared; access remains authorized and purpose-bound.',
    flow: [
      'INPUT SOURCES',
      'OTRIS EDGE GATEWAY',
      'OTRIS ENGINE',
      'CANONICAL OTRIS',
      'OTRIS CORE',
      'OTRIS CLINICAL WALL ECOSYSTEM',
      'AUTHORIZED EXPERIENCES',
    ],
    values: [
      {
        title: 'Canonical foundation',
        body: 'The same underlying data contract can serve multiple experiences without forking the patient truth.',
      },
      {
        title: 'Authorized experiences',
        body: 'Different views exist because different responsibilities exist, not because the foundation changes for each role.',
      },
      {
        title: 'Context remains visible',
        body: 'Main procedure or video context stays primary while supporting detail enters as bounded, reversible context.',
      },
    ],
    views: [
      'Procedure-facing clinical wall',
      'Summary and handoff view',
      'Engineering and operations review',
      'Evidence and safety review',
    ],
    interactionSteps: [
      'MAIN PROCEDURE / VIDEO = PRIMARY CONTEXT',
      'SUMMARY',
      'ONE DIRECT ACTION',
      'CONTEXT DETAIL',
      '20–25% RIGHT PANEL',
      'RETURN TO CLINICAL WALL',
    ],
    privacyLine: 'OPEN DATA ≠ PUBLIC DATA',
  },
  safetyEvidence: {
    eyebrow: 'Safety & Evidence',
    title: 'Public explanation should stay disciplined about what is known, planned, and not claimed.',
    intro:
      'The website can explain architecture, evidence boundaries, and intent. It must not claim deployment success, device compatibility, or clinical validation that has not been explicitly established elsewhere.',
    points: [
      'Family color communicates identity; status color communicates condition.',
      'Clinical wall examples remain explanatory and marked as DEMO DATA when numbers appear.',
      'Architecture is described as implemented source intent, not as proof of field validation.',
    ],
  },
  documentation: {
    eyebrow: 'Documentation',
    title: 'Documentation should help future builders understand where architecture ends and implementation begins.',
    intro:
      'The public site is part of the documentation surface. It should guide readers to concepts, boundaries, and implementation scope without pretending to be the architecture authority itself.',
    items: [
      'Project purpose and current scope',
      'Architecture walkthroughs and explanatory diagrams',
      'Open source planning status',
      'Local development and build instructions',
    ],
  },
  community: {
    eyebrow: 'Community',
    title: 'A disciplined public layer creates room for careful collaboration.',
    intro:
      'Community should begin with shared understanding: what OTRIS is, what is planned, and what still requires proof. The site should invite participation without overselling certainty.',
    prompts: [
      'Review the public architecture narrative.',
      'Track planned open source surfaces.',
      'Contribute from a position of shared language and visible boundaries.',
    ],
  },
  footer: {
    closing: 'OTRIS.SOLUTION is the maintainable public website source for explaining the bridge between device realities, canonical data, and authorized clinical experiences.',
    principle: 'Source code implements OTRIS architecture. Source code does not define OTRIS architecture.',
  },
}
