# Pre-Build Validation Workflow

*Povinný workflow pred každým novým produktom. Žiadne kódovanie kým neprejdeš všetkými krokmi.*

---

## Phase 0: Idea Screening (30 min)

- [ ] **Jednoveté zhrnutie:** Kto platí, za čo, prečo teraz?
- [ ] **Kill criteria check:**
  - Viem to buildnúť za <7 dní? Ak nie → STOP
  - Existujú platení konkurenti? Ak nie → STOP (nevalidovaný trh)
  - Je to recurring revenue? Ak nie → veľmi dobrý dôvod prečo one-time
  - Potrebujem >$50 na MVP? Ak áno → nájdi lacnejšiu cestu
- [ ] **Zapísať do KANBAN.md** ako candidate

---

## Phase 1: Competitive Intelligence (2-3 hodiny)

- [ ] Nájdi 3-5 konkurentov
- [ ] Pre každého zdokumentuj:
  - Pricing (koľko ľudia reálne platia)
  - Reviews/ratings (čo chváľia, čo kritizujú)
  - Traffic odhad (SimilarWeb, Alexa)
  - Feature gaps (čo chýba, čo je over-engineered)
- [ ] **Pricing sweet spot:** Kde je medzera v cenách?
- [ ] **Differentiator:** Čo urobím inak/lepšie/lacnejšie?
- [ ] **Dokument:** `research/{project-name}/competitors.md`

---

## Phase 2: Demand Validation (1-2 dni)

### 2a: Search Demand
- [ ] Google Trends - rastie alebo klesá záujem?
- [ ] Keyword research - koľko ľudí hľadá riešenie?
- [ ] Reddit/HN/Twitter - pýtajú sa ľudia na toto? Sťažujú sa?
- [ ] Zdokumentuj 10+ príkladov reálneho dopytu (linky, screenshoty)

### 2b: Audience Validation
- [ ] Identifikuj 3 komunity kde je cieľovka (subreddity, Discord, Slack, fóra)
- [ ] Prečítaj 20+ postov/komentárov o probléme
- [ ] Zapíš presné slová čo ľudia používajú (pre copywriting)

### 2c: Willingness to Pay
- [ ] Existujú platené alternatívy? → Koľko platia?
- [ ] Existujú free alternatívy? → Prečo by niekto platil za moje?
- [ ] **Dokument:** `research/{project-name}/demand-evidence.md`

---

## Phase 3: Landing Page Test (1 deň)

- [ ] Vytvor jednoduchú landing page (1 stránka):
  - Headline (problém)
  - Subheadline (riešenie)
  - 3 benefity
  - CTA: "Join waitlist" / "Get early access" (email capture)
  - Pricing preview
- [ ] Deploy (Vercel/Netlify - free)
- [ ] Zdieľaj v 3+ komunitách z Phase 2b
- [ ] **Gate:** 50+ email signups za 48h = GO, <20 = KILL

---

## Phase 4: MVP Scope (2-3 hodiny)

*Až po úspešnej Phase 3!*

- [ ] **Feature list:** Max 3 core features pre v1
- [ ] **Anti-scope:** Explicitne zapíš čo NEBUDE v v1
- [ ] **Tech stack:** Čo použijem a prečo
- [ ] **Timeline:** Rozbi na 4h bloky, max 7 dní celkovo
- [ ] **Launch plan:** Kde a kedy (Product Hunt, Reddit, Twitter, HN)
- [ ] **Success metrika:** Čo musí byť pravda za 2 týždne aby som pokračoval?
- [ ] **Kill metrika:** Čo ak sa stane = stop a pivot
- [ ] **Dokument:** `research/{project-name}/mvp-spec.md`

---

## Phase 5: Build Decision Gate

**Všetky musia byť TRUE:**

| Otázka | Odpoveď |
|--------|---------|
| Existujú platení konkurenti? | ✅ |
| Mám 50+ email signups? | ✅ |
| Viem to buildnúť za 7 dní? | ✅ |
| Mám jasný differentiator? | ✅ |
| Mám launch komunity pripravené? | ✅ |
| Martin schválil? | ✅ |

**Ak čokoľvek je ❌ → NESKÓDUJ. Vráť sa k príslušnej fáze.**

---

## Phase 6: Build & Launch (5-7 dní)

- [ ] Kóduj MVP podľa mvp-spec.md
- [ ] Denný progress update do KANBAN.md
- [ ] Day 1-3: Core funkčnosť
- [ ] Day 4-5: Polish, onboarding, payment integration
- [ ] Day 6: Beta test (3-5 ľudí z waitlistu)
- [ ] Day 7: Public launch

---

## Phase 7: Post-Launch (2 týždne)

- [ ] Denne sleduj metriky (users, conversions, churn)
- [ ] Zbieraj feedback (email, in-app, komunity)
- [ ] **Week 1 gate:** 10+ aktívnych users = pokračuj
- [ ] **Week 2 gate:** 3+ platiacich = scale, 0 = pivot/kill
- [ ] **Dokument:** `research/{project-name}/post-launch-report.md`

---

## Anti-Patterns (ZAKÁZANÉ)

1. ❌ Kódovať pred validáciou dopytu
2. ❌ Buildovať viac ako 3 features v MVP
3. ❌ Stráviť >7 dní na MVP
4. ❌ Ignorovať kill metriky
5. ❌ "Ešte jedna feature a potom launchnem"
6. ❌ Perfekcionizmus pred launchom
7. ❌ Stavať produkt bez jasného kupujúceho

---

## Templates

```
research/
├── {project-name}/
│   ├── competitors.md      # Phase 1
│   ├── demand-evidence.md  # Phase 2
│   ├── mvp-spec.md         # Phase 4
│   └── post-launch-report.md  # Phase 7
```

---

*Tento workflow je povinný. Žiadne výnimky. Každý preskočený krok = potenciálne vyhodené peniaze a čas.*

*Poučenie z Evolution Experimentu: 5 produktov, 0 sales, 170KB dokumentácie. Už nikdy.*
