## Project: Who Talks to Whom

### Concept
A network visualization revealing collaboration patterns across design teams and their cross-functional partners. The goal is to surface silos, over-reliance on key individuals, and opportunities to strengthen connections.

---

### Story We're Telling
Design doesn't happen in isolation — but collaboration isn't evenly distributed. Some teams are deeply connected; others are islands. By mapping who actually communicates with whom, we can reveal the invisible structure of how design work really gets done.

---

### Key Questions
- Which designers or teams are siloed?
- Who are the "bridge" people connecting otherwise disconnected groups?
- Are there critical single points of failure (one person connecting two teams)?
- How do collaboration patterns differ between high-performing and struggling projects?
- Do cross-functional partners (engineering, PM, research) cluster around certain designers?

---

### Data Sources
- Slack/Teams message metadata (channels, DMs, mentions — not content)
- Figma file collaboration (who comments, who co-edits)
- Meeting co-attendance from calendar data
- Design review participation logs
- Project management tool assignments (Jira, Asana, etc.)

---

### Audience
- Design leadership
- Design Ops managers
- HR/People Ops (for org design decisions)

---

### Visualization Approach
- **Primary:** Force-directed network graph (nodes = people, edges = interactions)
- **Secondary:** Heatmap of team-to-team interaction density
- **Supporting:** Small multiples comparing network shape across quarters or projects

---

### Success Metrics
- Identifies at least one previously unknown silo or bottleneck
- Informs a specific org or process change
- Sparks conversation at leadership level about team structure

---

### Privacy & Ethics Considerations
- Aggregate and anonymize individual-level data where possible
- Focus on patterns, not surveillance
- Obtain consent and communicate intent transparently to teams
- Never surface message content — only connection frequency

---

### Scope
- **In:** Interaction patterns, frequency, team clustering
- **Out:** Performance judgments, content analysis, individual productivity scoring