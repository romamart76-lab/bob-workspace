# KANBAN - Bob's Task Board

*Aktualizované: 2026-02-22 07:10 UTC*

---

## 🔴 NOW (aktívne)

| ID | Úloha | Projekt | Poznámka |
|----|-------|---------|----------|
| T01 | Side projekt research + validácia | Side Projects | Nájsť 3 validované nápady |
| T02 | Opraviť Engine stale configs | Flawia | ACS hash, golden hygiene (8 failed unit tests) |

---

## 🟡 NEXT (pripravené na začatie)

| ID | Úloha | Projekt | Poznámka |
|----|-------|---------|----------|
| T03 | Vylepšiť kb.effects.v1.json tagging | Flawia | Väčšina entries má UNKNOWN_EFFECT |
| T04 | Test import e-myth do Flawia.Engine | Flawia | e-myth_flawia_import.json ready |
| T05 | Spustiť Good to Great extraction | Flawia | Pipeline production-ready |
| T06 | Spustiť Lean Startup extraction | Flawia | Pipeline production-ready |
| T07 | GTM stratégia pre Flawia | Flawia | Martin chce monetizáciu |

---

## 🔵 BACKLOG

| ID | Úloha | Projekt | Poznámka |
|----|-------|---------|----------|
| T08 | HYDRA sudo prístup pre docker monitoring | Infra | Security check nevidí kontajnery |
| T09 | Identifikovať porty 6056, 18789, 18790 na HYDRA | Infra | Neznáme služby |
| T10 | Bundle workflow integration pre pipeline | Flawia | LOW priority |
| T11 | Memory auto-maintenance cron | Bob | Automatický MEMORY.md review |
| T12 | Cost tracking systém | Bob | Koľko stojí každý heartbeat/cron |

---

## ✅ DONE (posledných 7 dní)

| ID | Úloha | Projekt | Dokončené |
|----|-------|---------|-----------|
| D01 | Knowledge Ingestion Pipeline | Flawia | 2026-02-21 |
| D02 | E-Myth extraction (135/72/64/31) | Flawia | 2026-02-21 |
| D03 | Prepísať MEMORY.md, USER.md, HEARTBEAT.md | Bob | 2026-02-21 |
| D04 | Email check → Sonnet cron | Bob | 2026-02-21 |
| D05 | Vypnúť Evolution reminder | Bob | 2026-02-21 |
| D06 | Vypnúť KI cron (hotový) | Bob | 2026-02-21 |
| D07 | GitHub repo bob-workspace | Bob | 2026-02-22 |
| D08 | .NET SDK inštalácia | Infra | 2026-02-22 |
| D09 | SSH na HYDRA (key-based) | Infra | 2026-02-22 |
| D10 | HYDRA security check + cron | Infra | 2026-02-22 |
| D11 | Intent Selection testy (21+11 OK) | Flawia | 2026-02-22 |
| D12 | Self-audit (21 otázok) | Bob | 2026-02-21 |

---

## 📊 Cron Jobs (aktívne)

| Meno | Interval | Model | Stav |
|------|----------|-------|------|
| Ranné počasie do Family | 7:00 denne | Sonnet | ✅ |
| Email Check | 30 min | Sonnet | ✅ |
| HYDRA Security Check | 7:00 denne | Sonnet | ✅ |

---

## 🗑️ KILLED

| ID | Úloha | Dôvod |
|----|-------|-------|
| K01 | Evolution Experiment | 0 sales, 5 produktov, validácia chýbala |
| K02 | Evolution reminder cron | Spam (každých 5 min) |
| K03 | Knowledge Ingestion cron | Projekt dokončený |

---
*Pravidlá: Max 3 v NOW. Ak niečo trvá >3 dni v NOW, eskaluj alebo rozbi na menšie úlohy.*
