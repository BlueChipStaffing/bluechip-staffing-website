// ============================================================
// BLUE CHIP STAFFING — JOB LISTINGS DATA
// ============================================================
// This file is the single source of truth for all job listings.
// It's loaded by both the careers page (public) and the admin panel.
//
// TO UPDATE: Use the Admin Panel at /admin/index.html
// After making changes, click "Export" and replace this file.
// Then push to GitHub/Vercel to go live.
// ============================================================

const JOBS_DATA = [
    {
        id: "BC-2026-0001",
        title: "Senior Financial Analyst",
        company: "Fortune 500 Financial Services Firm",
        location: "New York, NY",
        salaryMin: 95000,
        salaryMax: 120000,
        type: "Direct Hire",
        industry: "Accounting & Finance",
        posted: "2026-04-05",
        urgent: false,
        remote: false,
        description: "Seeking an experienced financial analyst to lead quarterly reporting, budgeting, and strategic planning initiatives. You will work directly with the CFO and senior leadership team to drive data-informed business decisions.",
        responsibilities: [
            "Lead quarterly and annual financial reporting processes",
            "Build and maintain financial models for forecasting and scenario analysis",
            "Partner with business unit leaders to develop annual budgets",
            "Present findings and recommendations to executive leadership",
            "Identify cost reduction opportunities and revenue growth strategies"
        ],
        qualifications: [
            "Bachelor's degree in Finance, Accounting, or related field",
            "5+ years of financial analysis experience",
            "Advanced Excel and financial modeling skills",
            "Experience with ERP systems (SAP, Oracle preferred)",
            "CFA or CPA certification a plus"
        ],
        status: "active"
    },
    {
        id: "BC-2026-0002",
        title: "Registered Nurse (ICU)",
        company: "Regional Medical Center",
        location: "Denver, CO",
        salaryMin: 78000,
        salaryMax: 95000,
        type: "Contract-to-Hire",
        industry: "Healthcare",
        posted: "2026-04-06",
        urgent: true,
        remote: false,
        description: "Join a top-rated hospital system as an ICU nurse. This is a 12-week contract with strong conversion potential for the right candidate. Day and night shift options available.",
        responsibilities: [
            "Provide direct patient care in the Intensive Care Unit",
            "Monitor and interpret patient vital signs and diagnostic data",
            "Administer medications and treatments per physician orders",
            "Collaborate with interdisciplinary care teams",
            "Maintain accurate and detailed patient records"
        ],
        qualifications: [
            "Active RN license in Colorado (or compact state)",
            "Minimum 2 years ICU experience",
            "BLS and ACLS certifications required",
            "CCRN certification preferred",
            "Strong clinical judgment and communication skills"
        ],
        status: "active"
    },
    {
        id: "BC-2026-0003",
        title: "DevOps Engineer",
        company: "Growing SaaS Platform",
        location: "Remote",
        salaryMin: 130000,
        salaryMax: 155000,
        type: "Direct Hire",
        industry: "Information Technology",
        posted: "2026-04-04",
        urgent: false,
        remote: true,
        description: "Build and maintain cloud infrastructure for a fast-growing SaaS company. You'll own the CI/CD pipeline, infrastructure as code, and platform reliability for a product serving 500K+ users.",
        responsibilities: [
            "Design, build, and maintain CI/CD pipelines",
            "Manage AWS/Azure cloud infrastructure using Terraform",
            "Implement monitoring, alerting, and incident response processes",
            "Optimize application performance and system reliability",
            "Collaborate with development teams on deployment strategies"
        ],
        qualifications: [
            "4+ years DevOps or SRE experience",
            "Strong experience with AWS or Azure cloud services",
            "Proficiency with Docker, Kubernetes, and container orchestration",
            "Infrastructure as Code experience (Terraform, CloudFormation)",
            "Scripting skills in Python, Bash, or Go"
        ],
        status: "active"
    },
    {
        id: "BC-2026-0004",
        title: "Executive Assistant to Managing Partner",
        company: "Top-Tier Law Firm",
        location: "Chicago, IL",
        salaryMin: 55000,
        salaryMax: 68000,
        type: "Direct Hire",
        industry: "Administrative & Clerical",
        posted: "2026-04-07",
        urgent: false,
        remote: false,
        description: "Support the managing partners at a prestigious law firm with 200+ attorneys. This role requires exceptional organizational skills, discretion, and the ability to manage competing priorities in a high-pressure environment.",
        responsibilities: [
            "Manage complex calendars and schedule meetings across time zones",
            "Coordinate domestic and international travel arrangements",
            "Prepare correspondence, presentations, and legal documents",
            "Handle confidential client communications with discretion",
            "Manage expense reports and vendor relationships"
        ],
        qualifications: [
            "3+ years executive assistant experience (legal preferred)",
            "Proficiency in Microsoft Office Suite",
            "Exceptional organizational and time management skills",
            "Professional demeanor and strong written communication",
            "Ability to handle confidential information with discretion"
        ],
        status: "active"
    },
    {
        id: "BC-2026-0005",
        title: "Warehouse Operations Manager",
        company: "National Distribution Company",
        location: "Dallas, TX",
        salaryMin: 72000,
        salaryMax: 88000,
        type: "Contract-to-Hire",
        industry: "Logistics & Supply Chain",
        posted: "2026-04-03",
        urgent: false,
        remote: false,
        description: "Oversee daily operations across two distribution centers with a combined team of 50+ employees. You'll drive efficiency improvements, manage inventory accuracy, and ensure on-time delivery targets are met.",
        responsibilities: [
            "Manage daily warehouse operations across two distribution centers",
            "Lead, coach, and develop a team of 50+ warehouse associates",
            "Implement process improvements using Lean/Six Sigma methodologies",
            "Monitor KPIs including accuracy, throughput, and safety metrics",
            "Coordinate with transportation and procurement teams"
        ],
        qualifications: [
            "5+ years warehouse or distribution management experience",
            "Experience managing teams of 30+ employees",
            "Lean/Six Sigma certification preferred",
            "WMS experience (Manhattan, SAP, or similar)",
            "Strong problem-solving and analytical skills"
        ],
        status: "active"
    },
    {
        id: "BC-2026-0006",
        title: "Machine Learning Engineer",
        company: "AI Research Lab",
        location: "San Francisco, CA",
        salaryMin: 160000,
        salaryMax: 200000,
        type: "Direct Hire",
        industry: "Artificial Intelligence",
        posted: "2026-04-06",
        urgent: false,
        remote: false,
        description: "Develop and deploy production ML models for natural language processing applications. You'll work alongside PhD researchers to bring cutting-edge research from paper to production at scale.",
        responsibilities: [
            "Design and implement ML models for NLP applications",
            "Optimize model performance for production deployment",
            "Build and maintain ML training and inference pipelines",
            "Collaborate with research scientists on novel approaches",
            "Conduct experiments and document findings"
        ],
        qualifications: [
            "Master's or PhD in Computer Science, ML, or related field",
            "3+ years of production ML engineering experience",
            "Strong proficiency in Python, PyTorch/TensorFlow",
            "Experience with NLP techniques and transformer architectures",
            "Knowledge of MLOps tools and best practices"
        ],
        status: "active"
    },
    {
        id: "BC-2026-0007",
        title: "Quality Assurance Inspector",
        company: "Automotive Parts Manufacturer",
        location: "Detroit, MI",
        salaryMin: 52000,
        salaryMax: 65000,
        type: "Contract",
        industry: "Quality Control & QA",
        posted: "2026-04-07",
        urgent: true,
        remote: false,
        description: "Conduct quality inspections on automotive components at a Tier 1 supplier. This is a 6-month contract with potential for extension. Multiple shifts available.",
        responsibilities: [
            "Perform visual and dimensional inspections on manufactured parts",
            "Use precision measurement tools (CMM, calipers, micrometers)",
            "Document inspection results and maintain quality records",
            "Identify and report non-conformances to engineering team",
            "Participate in root cause analysis and corrective action processes"
        ],
        qualifications: [
            "2+ years quality inspection experience in manufacturing",
            "Familiarity with GD&T and blueprint reading",
            "Experience with precision measurement instruments",
            "ISO 9001 or IATF 16949 knowledge preferred",
            "Strong attention to detail and documentation skills"
        ],
        status: "active"
    },
    {
        id: "BC-2026-0008",
        title: "Customer Service Team Lead",
        company: "E-Commerce Growth Company",
        location: "Austin, TX",
        salaryMin: 48000,
        salaryMax: 58000,
        type: "Contract-to-Hire",
        industry: "Customer Service",
        posted: "2026-04-02",
        urgent: false,
        remote: false,
        description: "Lead a team of 12 customer service representatives for a fast-growing e-commerce brand. You'll drive team performance, handle escalations, and implement process improvements to improve CSAT scores.",
        responsibilities: [
            "Supervise and mentor a team of 12 customer service representatives",
            "Handle escalated customer issues and complex complaints",
            "Monitor team KPIs and provide regular performance coaching",
            "Develop and update customer service procedures and scripts",
            "Generate weekly performance reports for management"
        ],
        qualifications: [
            "3+ years customer service experience with 1+ year in leadership",
            "Experience with Zendesk, Salesforce, or similar CRM platform",
            "Strong conflict resolution and de-escalation skills",
            "Data-driven approach to performance management",
            "Excellent verbal and written communication"
        ],
        status: "active"
    },
    {
        id: "BC-2026-0009",
        title: "Construction Site Superintendent",
        company: "Commercial General Contractor",
        location: "Phoenix, AZ",
        salaryMin: 85000,
        salaryMax: 110000,
        type: "Direct Hire",
        industry: "Construction",
        posted: "2026-04-05",
        urgent: false,
        remote: false,
        description: "Lead commercial construction projects from groundbreaking to turnover. You'll manage subcontractors, enforce safety standards, and ensure projects are delivered on time and within budget.",
        responsibilities: [
            "Oversee all on-site construction activities and daily operations",
            "Coordinate and manage subcontractor schedules and work quality",
            "Enforce OSHA safety standards and maintain a zero-incident jobsite",
            "Conduct daily site inspections and progress documentation",
            "Communicate project status to project managers and stakeholders"
        ],
        qualifications: [
            "7+ years of commercial construction experience",
            "3+ years in a superintendent or site management role",
            "OSHA 30 certification required",
            "Proficiency with Procore or similar project management software",
            "Strong leadership and subcontractor management skills"
        ],
        status: "active"
    },
    {
        id: "BC-2026-0010",
        title: "Hotel Front Office Manager",
        company: "Luxury Boutique Hotel",
        location: "Miami, FL",
        salaryMin: 52000,
        salaryMax: 65000,
        type: "Direct Hire",
        industry: "Hospitality",
        posted: "2026-04-06",
        urgent: false,
        remote: false,
        description: "Manage front desk operations at a 120-room luxury boutique hotel. You'll lead a team of 8 front desk agents, manage guest relations, and ensure every guest experience meets five-star standards.",
        responsibilities: [
            "Oversee all front desk operations across three shifts",
            "Lead, train, and schedule a team of 8 front desk agents",
            "Resolve guest complaints and ensure exceptional service delivery",
            "Manage room inventory, reservations, and revenue optimization",
            "Coordinate with housekeeping, maintenance, and F&B departments"
        ],
        qualifications: [
            "4+ years front office experience in upscale/luxury hotels",
            "2+ years in a supervisory or management role",
            "Proficiency with Opera PMS or similar hotel management system",
            "Exceptional guest service orientation and professional presence",
            "Fluency in English; additional languages a plus"
        ],
        status: "active"
    },
    {
        id: "BC-2026-0011",
        title: "Biotech Research Associate",
        company: "Life Sciences Company",
        location: "Boston, MA",
        salaryMin: 68000,
        salaryMax: 82000,
        type: "Contract-to-Hire",
        industry: "Life Sciences",
        posted: "2026-04-04",
        urgent: false,
        remote: false,
        description: "Support drug development programs as a research associate in a GLP-compliant laboratory. You'll conduct assays, analyze data, and contribute to regulatory submissions for Phase II clinical trials.",
        responsibilities: [
            "Perform cell-based assays and immunoassays (ELISA, flow cytometry)",
            "Maintain laboratory equipment and ensure GLP compliance",
            "Analyze experimental data and prepare technical reports",
            "Contribute to IND filings and regulatory documentation",
            "Collaborate with cross-functional research teams"
        ],
        qualifications: [
            "Master's degree in Biology, Biochemistry, or related field",
            "2+ years laboratory research experience",
            "Experience with cell culture, ELISA, and flow cytometry",
            "Knowledge of GLP/GMP regulations",
            "Strong analytical and documentation skills"
        ],
        status: "active"
    },
    {
        id: "BC-2026-0012",
        title: "Paralegal - Corporate Transactions",
        company: "Mid-Size Law Firm",
        location: "Atlanta, GA",
        salaryMin: 58000,
        salaryMax: 72000,
        type: "Direct Hire",
        industry: "Legal & Law Firms",
        posted: "2026-04-03",
        urgent: false,
        remote: false,
        description: "Support the corporate transactions practice group with M&A deals, entity formations, and compliance filings. You'll work directly with senior associates and partners on high-value transactions.",
        responsibilities: [
            "Draft and review corporate documents (articles, bylaws, resolutions)",
            "Manage due diligence processes for M&A transactions",
            "Coordinate entity formations and annual compliance filings",
            "Maintain corporate governance records and minute books",
            "Manage closing checklists and document execution"
        ],
        qualifications: [
            "Paralegal certificate or Bachelor's degree",
            "3+ years corporate paralegal experience",
            "Experience with M&A transactions and due diligence",
            "Proficiency in legal research tools (Westlaw, LexisNexis)",
            "Strong organizational skills and attention to detail"
        ],
        status: "active"
    },
    {
        id: "BC-2026-0013",
        title: "Production Supervisor - 2nd Shift",
        company: "Food Manufacturing Facility",
        location: "Kansas City, MO",
        salaryMin: 62000,
        salaryMax: 75000,
        type: "Direct Hire",
        industry: "Manufacturing",
        posted: "2026-04-05",
        urgent: true,
        remote: false,
        description: "Lead second shift production operations at a USDA-regulated food manufacturing facility. You'll manage a team of 25+ production workers, ensure quality standards, and drive continuous improvement.",
        responsibilities: [
            "Supervise 25+ production workers on second shift operations",
            "Ensure compliance with USDA, FDA, and HACCP regulations",
            "Monitor production output, yield, and waste metrics",
            "Conduct employee training on safety and quality procedures",
            "Implement continuous improvement initiatives"
        ],
        qualifications: [
            "3+ years production supervisory experience in food manufacturing",
            "Knowledge of USDA/FDA regulations and HACCP principles",
            "Experience with production planning and scheduling",
            "Strong leadership and team development skills",
            "Bilingual (English/Spanish) preferred"
        ],
        status: "active"
    },
    {
        id: "BC-2026-0014",
        title: "Grants & Program Coordinator",
        company: "National Nonprofit Organization",
        location: "Washington, DC",
        salaryMin: 52000,
        salaryMax: 64000,
        type: "Direct Hire",
        industry: "Nonprofit",
        posted: "2026-04-06",
        urgent: false,
        remote: false,
        description: "Coordinate grant applications and program administration for a national nonprofit focused on education equity. You'll manage a portfolio of federal and foundation grants totaling $3M+ annually.",
        responsibilities: [
            "Write and submit grant proposals to federal and foundation funders",
            "Manage grant reporting, budgets, and compliance requirements",
            "Coordinate program activities across multiple sites",
            "Track program outcomes and prepare impact reports",
            "Build and maintain relationships with funders and partners"
        ],
        qualifications: [
            "Bachelor's degree in Nonprofit Management, Public Policy, or related field",
            "2+ years grant writing or program coordination experience",
            "Experience with federal grant management (preferred)",
            "Strong writing and data analysis skills",
            "Passion for education equity and social impact"
        ],
        status: "active"
    },
    {
        id: "BC-2026-0015",
        title: "Data Analyst - Remote",
        company: "Fintech Startup",
        location: "Remote",
        salaryMin: 75000,
        salaryMax: 92000,
        type: "Contract",
        industry: "Information Technology",
        posted: "2026-04-07",
        urgent: false,
        remote: true,
        description: "Analyze product and business data to drive decision-making at a Series B fintech company. 6-month contract with strong potential for conversion. Fully remote with flexible hours.",
        responsibilities: [
            "Build dashboards and reports using SQL and BI tools",
            "Analyze user behavior and product metrics to inform roadmap decisions",
            "Design and analyze A/B tests for product features",
            "Create automated reporting pipelines",
            "Present insights and recommendations to product and leadership teams"
        ],
        qualifications: [
            "2+ years data analyst experience",
            "Strong SQL skills (required)",
            "Experience with Looker, Tableau, or similar BI tools",
            "Python or R for statistical analysis",
            "Experience in fintech or financial services a plus"
        ],
        status: "active"
    },
    {
        id: "BC-2026-0016",
        title: "Associate - Venture Capital",
        company: "Growth-Stage VC Fund",
        location: "New York, NY",
        salaryMin: 120000,
        salaryMax: 150000,
        type: "Direct Hire",
        industry: "Venture Capital / PE",
        posted: "2026-04-04",
        urgent: false,
        remote: false,
        description: "Join a $500M growth-stage venture fund as an Associate. You'll source deals, conduct due diligence, and support portfolio companies. This role offers direct exposure to partners and a path to senior positions.",
        responsibilities: [
            "Source and evaluate potential investment opportunities",
            "Conduct market research, competitive analysis, and financial modeling",
            "Perform due diligence on prospective portfolio companies",
            "Support portfolio companies with strategic initiatives",
            "Prepare investment memos and present to partners"
        ],
        qualifications: [
            "2-4 years in investment banking, consulting, or venture capital",
            "Strong financial modeling and analytical skills",
            "Experience evaluating SaaS, fintech, or enterprise tech companies",
            "MBA or Bachelor's from a top-tier program",
            "Excellent communication and relationship-building skills"
        ],
        status: "active"
    }
];
