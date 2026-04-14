import SectionLabel from '@/components/SectionLabel'

export default function AboutPage() {
  return (
    <section>
      <SectionLabel index="00" label="about" />
      <div style={{ padding: '1.5rem 2rem', maxWidth: 900 }}>
        <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Ayush Chakraborty</h2>
        <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>Data Engineer → Data Scientist · Bellevue, WA</p>

        <p style={{ marginBottom: '1rem' }}>
          I'm a data professional with a background in computer science (University of Maryland) and a master's in health data science from Dartmouth College. My work sits at the intersection of machine learning, causal inference, and scalable cloud systems.
        </p>

        <p style={{ marginBottom: '1rem' }}>
          At HabiTerre, I co-built a carbon accounting pipeline that estimates Scope 3 greenhouse gas emissions across agricultural fields using satellite imagery and biogeochemical models. I also led development of a client-facing API and interactive dashboard for real-time exploration of environmental metrics across millions of acres — applying methods like difference-in-differences and propensity score matching to evaluate sustainable farming interventions.
        </p>

        <p style={{ marginBottom: '1rem' }}>
          Earlier in my career, I worked on NLP models with transformer architectures at TCG Digital, built risk models for identifying underinsured policyholders at Swiss Re, and applied convolutional neural networks to colorectal cancer pathology images at Dartmouth. These experiences shaped my deep interest in using AI for high-stakes, scientific problems.
        </p>

        <p>
          I'm actively transitioning into data science roles focused on experimentation, predictive modeling, and causal analysis — particularly in health tech, agri-tech, and mission-driven organizations.
        </p>
      </div>
    </section>
  )
}
