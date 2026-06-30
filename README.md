# Multi-Source Candidate Data Transformer

## Overview

This project is a Node.js-based data transformation pipeline developed as part of the Eightfold Internship Assignment.

The application reads candidate information from multiple sources, transforms the data into a canonical schema, merges conflicting information, normalizes values, validates the output, and generates a configurable JSON representation of the candidate profile.

---

## Features

- Parse recruiter CSV data
- Parse resume PDF
- Extract candidate details
- Merge multiple candidate sources
- Normalize emails, phone numbers, and skills
- Generate provenance information
- Calculate confidence score
- Runtime configurable output
- JSON Schema validation
- Export final candidate profile as JSON

---

## Tech Stack

- Node.js
- JavaScript
- csv-parser
- pdf-parse
- AJV
- UUID
- libphonenumber-js

---

## Project Structure

```
Eightfold-Assignment
│
├── config/
│   └── outputConfig.json
│
├── input/
│   ├── recruiter.csv
│   └── resume.pdf
│
├── output/
│   └── candidate.json
│
├── src/
│   ├── constants/
│   ├── extractors/
│   ├── merger/
│   ├── models/
│   ├── normalizers/
│   ├── parsers/
│   ├── projector/
│   ├── schema/
│   ├── utils/
│   ├── validator/
│   └── index.js
│
├── package.json
└── README.md
```

---

## Installation

```bash
npm install
```

---

## Run

```bash
npm run dev
```

---

## Output

The generated candidate profile is saved to:

```
output/candidate.json
```

---

## Merge Strategy

| Field | Strategy |
|--------|----------|
| Full Name | Resume preferred, fallback to CSV |
| Emails | Merge + remove duplicates |
| Phones | Merge + normalize |
| Skills | Merge + normalize |
| Experience | Resume preferred |
| Education | Resume preferred |

---

## Normalization

- Emails converted to lowercase
- Phone numbers normalized to E.164 format
- Duplicate skills removed
- Duplicate emails removed

---

## Confidence Score

The confidence score is calculated based on the availability of important candidate fields such as:

- Name
- Email
- Phone
- Skills
- Experience
- Education

---

## Provenance

The transformer records the source of each field (CSV and/or Resume) to provide traceability.

Example:

```json
"provenance": {
  "emails": ["resume", "csv"],
  "skills": ["resume", "csv"]
}
```

---

## Assumptions

- One resume corresponds to one recruiter CSV record.
- Resume headings follow a consistent structure.
- Input resume is in English.
- Skills are comma-separated in the resume.

---

## Future Improvements

- Support DOCX resumes
- NLP-based section detection
- Advanced conflict resolution
- ML-based confidence scoring
- Support multiple recruiter CSV formats