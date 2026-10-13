# AegisLogs

**Author:** Shaunak  
**Project:** Enterprise Immutable Logging & AI Threat Detection Daemon

A dual-layer security architecture built to eliminate log tampering on production servers. It combines local cryptographic hash-chaining (SHA-256), a local Isolation Forest model for behavioral anomaly detection, and periodic Merkle-tree anchoring to public blockchain networks (Polygon Amoy) for verifiable compliance audits.

## Repository Structure

- `agent/`: Local Python security daemon that monitors system logs, builds cryptographic chains, and flags local anomalies.
- `dashboard/`: Next.js & Tailwind CSS Security Operations Center (SOC) interface for fleet monitoring and blockchain proof verification.

## Core Design

1. **Hash Chaining:** Every log entry is cryptographically bound to the hash of the preceding entry (`hash(prev_hash + message)`). Any unauthorized file deletion or text modification breaks the sequence instantly.
2. **On-Chain Proofs:** Local hashes are batched into Merkle trees and anchored to Polygon Amoy to provide immutable forensic proof for SOC 2 and ISO 27001 compliance.

## Running Locally

### Agent
```bash
cd agent
pip install -r requirements.txt
python production_agent.py
```

### Dashboard
```bash
cd dashboard
npm install
npm run dev
```