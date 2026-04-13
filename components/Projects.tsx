const projects = [
  {
    type: 'data platform · agri-tech',
    title: 'QA/QC Ecosys Platform',
    desc: 'Production quality assurance system for field-level carbon data. React/TypeScript frontend, FastAPI backend, batch deletion pipelines across subfield hierarchies with AWS S3.',
    tags: ['FastAPI', 'React', 'TypeScript', 'AWS S3', 'SQLAlchemy'],
  },
  {
    type: 'health data science · modeling',
    title: 'Malaria Transmission Model',
    desc: 'Bayesian inference on malaria intervention efficacy for global health policy evaluation. Quantitative modeling designed for decision-making at scale.',
    tags: ['Python', 'Stan', 'Bayesian', 'Epi modeling'],
  },
  {
    type: 'ml · explainability',
    title: 'Modular ML Pipeline',
    desc: 'Automated feature selection, cross-validation, and SHAP-based explainability. Generalizes across health and financial datasets with MLflow tracking.',
    tags: ['Scikit-learn', 'SHAP', 'MLflow', 'pandas'],
  },
  {
    type: 'data engineering · infra',
    title: 'AWS Pipeline Automation',
    desc: 'SNS/Chatbot alert system with S3 geospatial data management for large-scale agricultural pipelines. Reduced failure response time by 60%.',
    tags: ['AWS SNS', 'Lambda', 'S3', 'Python'],
  },
]

export default function Projects() {
  return (
    <div className="pg">
      {projects.map(({ type, title, desc, tags }) => (
        <div key={title} className="pc">
          <p className="pt">{type}</p>
          <h3 className="ptitle">{title}</h3>
          <p className="pdesc">{desc}</p>
          <div className="tags">
            {tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
      ))}
    </div>
  )
}
