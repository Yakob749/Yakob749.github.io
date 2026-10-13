/**
 * Central portfolio data — generated from Yakobu's resume (Yakobu-katamgari-Data_Enginner.docx).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Katamgari Yakobu',
  displayName: 'Yakobu Katamgari',
  firstName: 'YAKOBU',
  seriesTag: 'THE SERIES',
  /** Letter used in the platform mark, the "ORIGINAL" badges and the favicon. */
  monogram: 'Y',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A KATAMGARI ORIGINAL',
  role: 'Senior Data Engineer',
  tagline: ['Senior Data Engineer', 'Databricks', 'GenAI & LLM'],
  intro:
    'A Senior Data Engineer with 5+ years designing and operating production-grade ETL/ELT pipelines and governed data products on the Databricks Lakehouse — from Kafka streaming and ML demand forecasting to RAG pipelines that power LLM knowledge assistants.',
  location: 'Dallas, TX',
  relocation: 'Open to relocating',
  email: 'yakobshasha@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/katamgari-yakobu-583258b8',
    github: 'https://github.com/Yakob749',
  },
  resumePdf: 'assets/Yakobu_Katamgari_Resume.pdf',
  resumeFileName: 'Yakobu_Katamgari_Resume.pdf',
  portrait: {
    src: 'assets/portrait-720.webp',
    srcSet: 'assets/portrait-420.webp 420w, assets/portrait-720.webp 720w, assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Yakobu Katamgari',
  },
  /** "Focus areas" chips in About — from Core Competencies. */
  interests: ['GenAI / RAG Data Engineering', 'Lakehouse & Medallion Design', 'Streaming & Batch ETL/ELT', 'Data Quality & Governance'],
  /** Small badge and facts line under the title in the hero. */
  heroBadge: 'DATA·AI',
  heroMeta: ['5+ Years', 'Databricks Lakehouse'],
  /** Floating glass chips around the hero portrait. */
  heroChips: [
    { text: '5+ Years', sub: 'Data Engineering' },
    { text: 'Walmart · Amazon', sub: 'Client programs' },
    { text: 'Databricks · PySpark · Kafka', sub: 'Primary stack' },
  ],
  /** Span shown next to the Originals count. */
  originalsSpan: '2019 – 2026',
  /** Intro line beside the Originals title. */
  originalsBlurb:
    'Four productions from the resume — a GenAI knowledge platform, an enterprise lakehouse, a demand-forecasting platform and a streaming data-quality pipeline. Open any title for the full story.',
};

export type Education = { school: string; place: string; degree: string; period: string; score?: string };

export const education: Education[] = [
  {
    school: 'Trine University',
    place: 'Michigan, USA',
    degree: 'Master of Science in Information Studies',
    period: 'Jan 2025 – Jul 2026',
  },
  {
    school: 'PBR VITS',
    place: 'India',
    degree: 'Bachelor of Technology',
    period: '2019 – 2021',
  },
];

export const experience = [
  {
    company: 'Infosys Ltd · Client: Walmart',
    role: 'Senior Data Engineer',
    place: 'Bengaluru, India',
    period: 'Feb 2022 – Aug 2024',
    points: [
      'Built and modernized Walmart’s enterprise Databricks Lakehouse into a governed foundation that also powers RAG and LLM-driven internal applications.',
      'Designed Databricks/PySpark pipelines publishing trusted data products from Azure SQL, REST APIs, ServiceNow, relational databases and flat files — cutting report-preparation time by 40%.',
      'Implemented Bronze/Silver/Gold medallion layers with Delta Live Tables and Unity Catalog for 20+ downstream teams, reducing duplicate data marts by 35%.',
      'Engineered a RAG ingestion pipeline into Databricks Vector Search for an Azure OpenAI knowledge assistant, and added LLM enrichment (entity extraction, classification, summarization) to Silver-layer pipelines.',
      'Lifted pipeline reliability to 99% on-time delivery, eliminating ~10 hours/week of manual reruns; re-engineered legacy IBM DataStage jobs onto Databricks, cutting integration maintenance by 50%.',
    ],
  },
  {
    company: 'Ventas Softech Pvt Ltd · Client: Amazon',
    role: 'Data Engineer',
    place: 'Hyderabad, India',
    period: 'Dec 2019 – Feb 2022',
    points: [
      'Engineered ETL/ELT pipelines ingesting 1M+ daily order, inventory and shipment records from SAP ERP, Azure SQL, ServiceNow and Seller Central APIs into a layered Lakehouse.',
      'Built Kafka + Spark Structured Streaming ingestion for near-real-time inventory events, reducing data latency from hours to minutes.',
      'Built demand-forecasting models (Random Forest, XGBoost, regression) reaching ~91% accuracy across 15+ fulfillment centers, tracked in MLflow.',
      'Automated validation and monitoring that reduced data defects and late-arriving data by 30%; reusable PySpark templates cut new pipeline development time by ~20%.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when there is no public repository — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants' | 'rag' | 'lakehouse' | 'forecast' | 'stream';
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const projects: Project[] = [
  {
    id: 'genai-knowledge-platform',
    title: 'GenAI Knowledge Platform',
    year: '2025–26',
    genre: 'M.S. Capstone · Trine University',
    logline: 'An end-to-end RAG platform that lets users query thousands of unstructured documents through a natural-language LLM interface, backed by a governed Lakehouse.',
    stack: ['Databricks', 'Delta Lake', 'Unity Catalog', 'LangChain', 'Azure OpenAI (GPT-4)', 'Vector Search / FAISS', 'MLflow', 'Airflow', 'Streamlit'],
    build: [
      'Built a document-ingestion pipeline that parsed PDF, HTML and DOCX sources, performed cleaning and semantic chunking, and generated Hugging Face / OpenAI embeddings stored in Databricks Vector Search and FAISS.',
      'Implemented the RAG orchestration layer with LangChain — vector retrieval plus GPT-4 generation and prompt templates, with guardrails that ground answers in source citations.',
      'Designed a Medallion model in Delta Lake for raw documents, cleaned chunks, embeddings and query/feedback logs, governed under Unity Catalog with row-level access controls.',
      'Orchestrated incremental re-embedding and index refresh with Airflow; tracked embedding models, prompt versions and evaluation metrics in MLflow.',
      'Improved answer accuracy through chunk-size tuning, hybrid (keyword + vector) search and re-ranking, measured with relevance and faithfulness metrics.',
    ],
    features: [
      'Natural-language Q&A over thousands of documents',
      'Answers grounded in cited sources',
      'Hybrid keyword + vector search with re-ranking',
      'Incremental re-embedding and index refresh',
      'Interactive Streamlit front end',
    ],
    metrics: [
      { value: '1000+', label: 'unstructured documents queryable' },
      { value: '3', label: 'source formats — PDF, HTML, DOCX' },
      { value: 'GPT-4', label: 'generation with source citations' },
      { value: 'Hybrid', label: 'keyword + vector search' },
    ],
    palette: crimson,
    motif: 'rag',
  },
  {
    id: 'walmart-lakehouse',
    title: 'Enterprise Lakehouse',
    year: '2022–24',
    genre: 'Infosys · Client: Walmart',
    logline: 'Walmart’s enterprise Databricks Lakehouse, evolved into a governed foundation for trusted data products — and for RAG and LLM-driven internal applications.',
    stack: ['Databricks', 'Delta Lake', 'Delta Live Tables', 'Unity Catalog', 'PySpark', 'Vector Search', 'Azure OpenAI', 'MLflow', 'Airflow'],
    build: [
      'Designed scalable Databricks/PySpark pipelines to ingest, transform, validate and publish trusted data products from Azure SQL, REST APIs, ServiceNow, relational databases and flat files.',
      'Implemented Bronze/Silver/Gold medallion layers with Delta Live Tables and Unity Catalog, standardizing how 20+ downstream teams consumed curated data.',
      'Engineered a RAG ingestion pipeline that chunked, cleaned and embedded enterprise policy and product documents into Databricks Vector Search for an internal Azure OpenAI knowledge assistant.',
      'Integrated LLM enrichment (entity extraction, classification, summarization) into Silver-layer pipelines using Foundation Model APIs.',
      'Re-engineered legacy IBM DataStage and app-to-app integration jobs onto Databricks; added Great Expectations quality, validation and reconciliation with alerting.',
    ],
    features: [
      'Single governed source of truth',
      'Medallion layers with Delta Live Tables',
      'Unity Catalog governance, lineage & MLflow tracking',
      'RAG ingestion into Vector Search',
      'GitHub-based CI/CD across Dev / Test / Prod',
    ],
    metrics: [
      { value: '40%', label: 'less report-preparation time' },
      { value: '35%', label: 'fewer duplicate data marts' },
      { value: '20+', label: 'downstream teams standardized' },
      { value: '99%', label: 'on-time pipeline delivery' },
      { value: '50%', label: 'less integration maintenance' },
    ],
    palette: ocean,
    motif: 'lakehouse',
  },
  {
    id: 'demand-forecasting',
    title: 'Demand-Forecasting Platform',
    year: '2019–22',
    genre: 'Ventas Softech · Client: Amazon',
    logline: 'A large-scale streaming and batch Lakehouse that ingested operational fulfillment data and powered machine-learning demand forecasting.',
    stack: ['Apache Kafka', 'Spark Structured Streaming', 'Databricks', 'Delta Lake', 'PySpark', 'Airflow', 'XGBoost', 'scikit-learn', 'MLflow'],
    build: [
      'Engineered ETL/ELT pipelines ingesting 1M+ daily order, inventory and shipment records from SAP ERP, Azure SQL, ServiceNow and Seller Central APIs into a layered Lakehouse.',
      'Built Kafka + Spark Structured Streaming ingestion for near-real-time inventory events, reducing data latency from hours to minutes.',
      'Developed PySpark feature-engineering workflows producing model-ready Silver/Gold datasets for 15+ fulfillment centers.',
      'Built and validated demand-forecasting models (Random Forest, XGBoost, regression) reaching ~91% accuracy, tracked in MLflow.',
      'Automated validation, reconciliation and monitoring, and orchestrated workflows with Apache Airflow.',
    ],
    features: [
      'Near-real-time inventory streaming',
      'Layered Lakehouse with dimensional / medallion models',
      'ML demand forecasting tracked in MLflow',
      'Monitoring, alerting & SLA dashboards',
    ],
    metrics: [
      { value: '1M+', label: 'daily records ingested' },
      { value: '~91%', label: 'forecast accuracy' },
      { value: '15+', label: 'fulfillment centers' },
      { value: '30%', label: 'fewer data defects & late data' },
      { value: '~20%', label: 'faster new-pipeline development' },
    ],
    palette: amber,
    motif: 'forecast',
  },
  {
    id: 'streaming-data-quality',
    title: 'Streaming Data Quality',
    year: '2025',
    genre: 'Self-directed project',
    logline: 'A compact, fully open-source streaming pipeline that detects data-quality issues and anomalous transactions in real time.',
    stack: ['Apache Kafka', 'Spark Structured Streaming', 'dbt', 'Snowflake', 'Great Expectations', 'scikit-learn', 'Docker', 'GitHub Actions'],
    build: [
      'Streamed synthetic transaction events through Apache Kafka and consumed them with Spark Structured Streaming into a raw landing zone.',
      'Applied Great Expectations suites on micro-batches to catch schema drift, nulls and range violations, routing failures to a quarantine table.',
      'Trained an Isolation Forest model to flag anomalous transactions in near-real time.',
      'Modeled curated marts in Snowflake with dbt, with tests, documentation and lineage.',
      'Containerized the pipeline with Docker and automated build/test with GitHub Actions.',
    ],
    features: [
      'Schema-drift, null and range checks on micro-batches',
      'Quarantine table for failed records',
      'Isolation Forest anomaly flags',
      'dbt-modeled Snowflake marts',
      'Reproducible with Docker + GitHub Actions',
    ],
    metrics: [
      { value: 'Real-time', label: 'micro-batch validation' },
      { value: 'Isolation Forest', label: 'anomaly detection' },
      { value: 'dbt', label: 'tested Snowflake marts' },
      { value: 'CI', label: 'GitHub Actions build & test' },
    ],
    palette: jade,
    motif: 'stream',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

/** Impact highlights from the resume, shown as award-poster cards. */
export const achievements: Achievement[] = [
  {
    id: 'reporting',
    title: '40% Faster Reporting',
    org: 'Walmart Lakehouse',
    detail: 'A governed single source of truth across Azure SQL, REST APIs, ServiceNow and flat files cut report-preparation time by 40%.',
    laurel: 'Trusted Data',
  },
  {
    id: 'reliability',
    title: '99% On-Time',
    org: 'Walmart Lakehouse',
    detail: 'Orchestrated, restartable ETL/ELT eliminated manual reruns that cost ~10 hours a week.',
    laurel: 'Reliability',
  },
  {
    id: 'modernization',
    title: '50% Less Maintenance',
    org: 'DataStage → Databricks',
    detail: 'Re-engineered legacy IBM DataStage and application-to-application integration jobs onto Databricks.',
    laurel: 'Modernization',
  },
  {
    id: 'forecasting',
    title: '~91% Accuracy',
    org: 'Amazon Forecasting',
    detail: 'Random Forest, XGBoost and regression demand forecasts across 15+ fulfillment centers, tracked in MLflow.',
    laurel: 'Machine Learning',
  },
  {
    id: 'streaming',
    title: 'Hours → Minutes',
    org: 'Kafka + Spark Streaming',
    detail: 'Near-real-time inventory events for operations dashboards; data defects and late-arriving data down 30%.',
    laurel: 'Real-Time',
  },
];

export type Certification = { issuer: string; name: string; link?: string; inProgress?: boolean };

export const certifications: Certification[] = [
  { issuer: 'Microsoft', name: 'Microsoft Certified: Data Analyst Associate (Power BI)' },
  { issuer: 'IBM', name: 'IBM Data Analyst Professional Certificate' },
  { issuer: 'Alteryx', name: 'Alteryx Designer Core Certification' },
  { issuer: 'Tableau', name: 'Tableau Desktop Specialist' },
  { issuer: 'Databricks', name: 'Databricks Certified Data Engineer Associate', inProgress: true },
  { issuer: 'Databricks', name: 'Databricks Certified Generative AI Engineer Associate', inProgress: true },
  { issuer: 'AWS', name: 'AWS Certified Data Engineer – Associate', inProgress: true },
  { issuer: 'Snowflake', name: 'SnowPro Core', inProgress: true },
];

export const earnedCertifications = certifications.filter((c) => !c.inProgress);

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'lakehouse',
    title: 'Lakehouse & Big Data',
    subtitle: 'Databricks is the home base',
    skills: [
      { name: 'Databricks', mono: 'Db', note: 'Primary' },
      { name: 'Delta Lake', mono: 'Dl' },
      { name: 'Delta Live Tables', mono: 'Dt' },
      { name: 'Unity Catalog', mono: 'Uc' },
      { name: 'PySpark', mono: 'Ps' },
      { name: 'Spark SQL', mono: 'Sq' },
      { name: 'Structured Streaming', mono: 'Ss' },
      { name: 'Apache Kafka', mono: 'Kf' },
    ],
  },
  {
    id: 'genai',
    title: 'GenAI & LLM',
    subtitle: 'RAG pipelines, embeddings & vector search',
    skills: [
      { name: 'RAG Pipelines', mono: 'Rg' },
      { name: 'Databricks Vector Search', mono: 'Vs' },
      { name: 'FAISS', mono: 'Fa' },
      { name: 'Pinecone', mono: 'Pc' },
      { name: 'ChromaDB', mono: 'Cd' },
      { name: 'LangChain', mono: 'Lc' },
      { name: 'LlamaIndex', mono: 'Li' },
      { name: 'Azure OpenAI', mono: 'Ao' },
      { name: 'Mosaic AI', mono: 'Ma' },
      { name: 'Hugging Face', mono: 'Hf' },
    ],
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    subtitle: 'Forecasting & anomaly detection',
    skills: [
      { name: 'MLflow', mono: 'Mf' },
      { name: 'scikit-learn', mono: 'Sk' },
      { name: 'XGBoost', mono: 'Xg' },
      { name: 'Random Forest', mono: 'Rf' },
      { name: 'Time-Series Forecasting', mono: 'Tf' },
      { name: 'Anomaly Detection', mono: 'An' },
    ],
  },
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Python and advanced SQL',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'SQL', mono: 'Sl', note: 'Advanced' },
      { name: 'Bash', mono: 'Sh' },
      { name: 'Scala', mono: 'Sc', note: 'Basic' },
    ],
  },
  {
    id: 'dataops',
    title: 'Orchestration & DataOps',
    subtitle: 'Reliable, tested, restartable',
    skills: [
      { name: 'Databricks Workflows', mono: 'Wf' },
      { name: 'Apache Airflow', mono: 'Af' },
      { name: 'dbt', mono: 'dt' },
      { name: 'Great Expectations', mono: 'Ge' },
      { name: 'GitHub CI/CD', mono: 'Gh' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Terraform', mono: 'Tf', note: 'Basics' },
      { name: 'IBM DataStage', mono: 'Ds' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & Warehouses',
    subtitle: 'Azure, AWS, Snowflake, BigQuery',
    skills: [
      { name: 'Azure', mono: 'Az' },
      { name: 'AWS', mono: 'Aw' },
      { name: 'Snowflake', mono: 'Sf' },
      { name: 'Google BigQuery', mono: 'Bq' },
    ],
  },
  {
    id: 'bi',
    title: 'Analytics & BI',
    subtitle: 'KPIs and executive reporting',
    skills: [
      { name: 'Power BI', mono: 'Pb' },
      { name: 'Tableau', mono: 'Tb' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the experience, projects or certifications on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Databricks: ['Enterprise Lakehouse (Walmart)', 'Demand-Forecasting Platform (Amazon)', 'GenAI Knowledge Platform'],
  'Delta Lake': ['Enterprise Lakehouse (Walmart)', 'GenAI Knowledge Platform'],
  'Delta Live Tables': ['Enterprise Lakehouse (Walmart)'],
  'Unity Catalog': ['Enterprise Lakehouse (Walmart)', 'GenAI Knowledge Platform'],
  PySpark: ['Enterprise Lakehouse (Walmart)', 'Demand-Forecasting Platform (Amazon)'],
  'Structured Streaming': ['Demand-Forecasting Platform (Amazon)', 'Streaming Data Quality'],
  'Apache Kafka': ['Demand-Forecasting Platform (Amazon)', 'Streaming Data Quality'],
  'RAG Pipelines': ['Enterprise Lakehouse (Walmart)', 'GenAI Knowledge Platform'],
  'Databricks Vector Search': ['Enterprise Lakehouse (Walmart)', 'GenAI Knowledge Platform'],
  FAISS: ['GenAI Knowledge Platform'],
  LangChain: ['GenAI Knowledge Platform'],
  'Azure OpenAI': ['Enterprise Lakehouse (Walmart)', 'GenAI Knowledge Platform'],
  'Hugging Face': ['GenAI Knowledge Platform'],
  MLflow: ['Enterprise Lakehouse (Walmart)', 'Demand-Forecasting Platform (Amazon)', 'GenAI Knowledge Platform'],
  'scikit-learn': ['Demand-Forecasting Platform (Amazon)', 'Streaming Data Quality'],
  XGBoost: ['Demand-Forecasting Platform (Amazon)'],
  'Random Forest': ['Demand-Forecasting Platform (Amazon)'],
  'Anomaly Detection': ['Streaming Data Quality'],
  'Apache Airflow': ['Demand-Forecasting Platform (Amazon)', 'GenAI Knowledge Platform'],
  dbt: ['Streaming Data Quality'],
  'Great Expectations': ['Enterprise Lakehouse (Walmart)', 'Streaming Data Quality'],
  'GitHub CI/CD': ['Enterprise Lakehouse (Walmart)', 'Streaming Data Quality'],
  Docker: ['Streaming Data Quality'],
  'IBM DataStage': ['Enterprise Lakehouse (Walmart) — migrated to Databricks'],
  Snowflake: ['Streaming Data Quality', 'SnowPro Core (in progress)'],
  Azure: ['Enterprise Lakehouse (Walmart)', 'Demand-Forecasting Platform (Amazon)'],
  AWS: ['Demand-Forecasting Platform (Amazon) — S3', 'AWS Certified Data Engineer (in progress)'],
  'Power BI': ['Microsoft Certified: Data Analyst Associate', 'Enterprise Lakehouse (Walmart)'],
  Tableau: ['Tableau Desktop Specialist'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2019 – 2021',
    synopsis: 'Bachelor of Technology at PBR VITS, India.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Engineer',
        description: 'Bachelor of Technology at PBR VITS, India.',
        tags: ['B.Tech'],
        runtime: '2019 – 2021',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'The Amazon Arc',
    period: '2019 – 2022',
    synopsis: 'Data Engineer at Ventas Softech, client Amazon — a streaming and batch Lakehouse powering ML demand forecasting.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Pipeline Builder',
        description: 'ETL/ELT pipelines ingesting 1M+ daily order, inventory and shipment records from SAP ERP, Azure SQL, ServiceNow and Seller Central APIs.',
        tags: ['PySpark', 'ETL/ELT', 'SAP ERP'],
        runtime: 'Dec 2019 – Feb 2022',
        palette: amber,
      },
      {
        code: 'S02 E02',
        title: 'The Streamer',
        description: 'Kafka + Spark Structured Streaming for near-real-time inventory events — data latency from hours to minutes.',
        tags: ['Kafka', 'Structured Streaming'],
        runtime: 'Hours → minutes',
        palette: ocean,
      },
      {
        code: 'S02 E03',
        title: 'The Forecaster',
        description: 'Random Forest, XGBoost and regression demand forecasts at ~91% accuracy across 15+ fulfillment centers, tracked in MLflow.',
        tags: ['XGBoost', 'MLflow', 'Forecasting'],
        runtime: '~91% accuracy',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'The Walmart Lakehouse',
    period: '2022 – 2024',
    synopsis: 'Senior Data Engineer at Infosys, client Walmart — evolving the enterprise Lakehouse into a governed, GenAI-ready foundation.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Architect',
        description: 'Bronze/Silver/Gold medallion layers with Delta Live Tables and Unity Catalog for 20+ downstream teams — 35% fewer duplicate data marts.',
        tags: ['Medallion', 'DLT', 'Unity Catalog'],
        runtime: 'Feb 2022 – Aug 2024',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The RAG Pipeline',
        description: 'Chunked, cleaned and embedded enterprise documents into Databricks Vector Search for an Azure OpenAI knowledge assistant.',
        tags: ['RAG', 'Vector Search', 'Azure OpenAI'],
        runtime: 'GenAI',
        palette: crimson,
      },
      {
        code: 'S03 E03',
        title: 'The Modernizer',
        description: 'Legacy IBM DataStage jobs re-engineered onto Databricks (50% less maintenance) and 99% on-time pipeline delivery.',
        tags: ['DataStage → Databricks', 'Great Expectations', 'CI/CD'],
        runtime: '99% on time',
        palette: violet,
      },
    ],
  },
  {
    number: 4,
    title: "The Master's",
    period: '2025 – 2026',
    synopsis: 'Master of Science in Information Studies at Trine University, Michigan — plus two hands-on builds.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Graduate',
        description: 'Master of Science in Information Studies, Trine University, Michigan, USA.',
        tags: ['M.S.', 'Information Studies'],
        runtime: 'Jan 2025 – Jul 2026',
        palette: violet,
      },
      {
        code: 'S04 E02',
        title: 'The Capstone',
        description: 'Enterprise GenAI Knowledge Platform — RAG over thousands of documents with LangChain, GPT-4 and a governed Lakehouse.',
        tags: ['RAG', 'LangChain', 'GPT-4'],
        runtime: '2025 – 2026',
        palette: crimson,
      },
      {
        code: 'S04 E03',
        title: 'The Side Project',
        description: 'Real-time streaming data quality and anomaly detection with Kafka, Great Expectations, dbt, Snowflake and Isolation Forest.',
        tags: ['Kafka', 'dbt', 'Snowflake'],
        runtime: '2025',
        palette: jade,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Certifications in progress and open to relocating for the next role.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Working toward Databricks Data Engineer Associate, Databricks Generative AI Engineer Associate, AWS Data Engineer – Associate and SnowPro Core.',
        tags: ['Databricks', 'AWS', 'Snowflake'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Home platform', title: 'Databricks', detail: 'Delta Lake • DLT • Unity Catalog', palette: ocean },
  { label: 'Client program', title: 'Walmart Lakehouse', detail: 'Infosys • 2022 – 2024', palette: crimson },
  { label: 'Client program', title: 'Amazon Forecasting', detail: 'Ventas Softech • 2019 – 2022', palette: amber },
  { label: 'GenAI', title: 'RAG Pipelines', detail: 'Vector Search • LangChain • Azure OpenAI', palette: violet },
  { label: 'Forecast accuracy', title: '~91%', detail: 'XGBoost & Random Forest • MLflow', palette: jade },
  { label: 'Reliability', title: '99% On-Time', detail: 'Orchestrated, restartable ETL/ELT', palette: ocean },
  { label: 'Scale', title: '1M+ / Day', detail: 'Order, inventory & shipment records', palette: amber },
  { label: 'Streaming', title: 'Hours → Min', detail: 'Kafka + Spark Structured Streaming', palette: crimson },
  { label: 'The capstone', title: 'GenAI Platform', detail: 'M.S. • Trine University', palette: violet },
  { label: 'Current focus', title: 'Databricks Certs', detail: 'Data Engineer • GenAI Engineer', palette: jade },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'The role',
    title: 'Senior Data Engineer',
    lines: ['5+ years of production ETL/ELT on the Databricks Lakehouse', 'Dallas, TX · Open to relocating'],
    chips: ['Databricks', 'PySpark', 'Delta Lake', 'Kafka', 'Python', 'SQL'],
  },
  {
    kicker: 'Season 2',
    title: 'The Amazon Arc',
    lines: ['1M+ daily records into a layered Lakehouse', 'Kafka streaming · hours to minutes', '~91% demand-forecast accuracy across 15+ fulfillment centers'],
  },
  {
    kicker: 'Season 3',
    title: 'The Walmart Lakehouse',
    lines: ['Medallion layers with DLT & Unity Catalog for 20+ teams', '40% faster reporting · 99% on-time delivery', 'RAG into Vector Search for an Azure OpenAI assistant'],
  },
  {
    kicker: 'GenAI',
    title: 'RAG, end to end',
    lines: ['Chunking · embeddings · vector search · LLM enrichment', 'LangChain · LlamaIndex · Azure OpenAI · Hugging Face'],
  },
  {
    kicker: 'Education',
    title: 'M.S. Information Studies',
    lines: ['Trine University, Michigan', 'Jan 2025 – Jul 2026'],
  },
  {
    kicker: 'Certified',
    title: '4 Certifications',
    lines: ['Microsoft · IBM · Alteryx · Tableau', 'Databricks, AWS & SnowPro in progress'],
  },
  {
    kicker: 'Current mission',
    title: 'Now building',
    lines: ['GenAI-ready data products on the Lakehouse'],
  },
];

export type ProfileId = 'me' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'me',
    name: 'Yakobu',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, impact & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Engineer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Explorer',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Role, education & focus', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • ${profile.originalsSpan}`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Impact', card: 'Impact & Certs', meta: `${achievements.length} Moments • ${earnedCertifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
