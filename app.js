// ============================================================
// Mock Data
// Timeframe: Q2 2026 (April 1 – June 30, ~65 working days)
// Weights = distinct interaction days (Slack threads, Figma
// co-edits, shared meetings, or review participation).
// Max realistic value ≈ 65 (daily contact on every working day).
// ============================================================

const teams = ['Design', 'Engineering', 'Product', 'Research', 'Ops'];
const teamColors = {
  Design: '#2563eb',
  Engineering: '#059669',
  Product: '#d97706',
  Research: '#7c3aed',
  Ops: '#dc2626'
};

const people = [
  // Design (18 people)
  { id: 'D1', name: 'Alex Chen', team: 'Design', role: 'Lead' },
  { id: 'D2', name: 'Maya Patel', team: 'Design', role: 'Senior' },
  { id: 'D3', name: 'Jordan Kim', team: 'Design', role: 'Mid' },
  { id: 'D4', name: 'Sam Torres', team: 'Design', role: 'Junior' },
  { id: 'D5', name: 'Riley Nguyen', team: 'Design', role: 'Senior' },
  { id: 'D6', name: 'Casey Wright', team: 'Design', role: 'Mid' },
  { id: 'D7', name: 'Morgan Liu', team: 'Design', role: 'Senior' },
  { id: 'D8', name: 'Harper Jones', team: 'Design', role: 'Mid' },
  { id: 'D9', name: 'Quinn Foster', team: 'Design', role: 'Junior' },
  { id: 'D10', name: 'Avery Mitchell', team: 'Design', role: 'Mid' },
  { id: 'D11', name: 'Drew Sato', team: 'Design', role: 'Senior' },
  { id: 'D12', name: 'Skyler Okafor', team: 'Design', role: 'Junior' },
  { id: 'D13', name: 'Reese Andersen', team: 'Design', role: 'Mid' },
  { id: 'D14', name: 'Jamie Volkov', team: 'Design', role: 'Senior' },
  { id: 'D15', name: 'Sage Ramirez', team: 'Design', role: 'Mid' },
  { id: 'D16', name: 'Blake Herrera', team: 'Design', role: 'Junior' },
  { id: 'D17', name: 'Finley Cho', team: 'Design', role: 'Mid' },
  { id: 'D18', name: 'Rowan Beck', team: 'Design', role: 'Senior' },
  // Engineering (15 people)
  { id: 'E1', name: 'Priya Sharma', team: 'Engineering', role: 'Lead' },
  { id: 'E2', name: 'Liam O\'Brien', team: 'Engineering', role: 'Senior' },
  { id: 'E3', name: 'Zoe Martinez', team: 'Engineering', role: 'Senior' },
  { id: 'E4', name: 'Noah Park', team: 'Engineering', role: 'Mid' },
  { id: 'E5', name: 'Ava Johnson', team: 'Engineering', role: 'Mid' },
  { id: 'E6', name: 'Marcus Webb', team: 'Engineering', role: 'Senior' },
  { id: 'E7', name: 'Isla Fernandez', team: 'Engineering', role: 'Mid' },
  { id: 'E8', name: 'Theo Nakamura', team: 'Engineering', role: 'Junior' },
  { id: 'E9', name: 'Nadia Petrov', team: 'Engineering', role: 'Senior' },
  { id: 'E10', name: 'Oscar Lindqvist', team: 'Engineering', role: 'Mid' },
  { id: 'E11', name: 'Fatima Al-Hassan', team: 'Engineering', role: 'Mid' },
  { id: 'E12', name: 'Caleb Russo', team: 'Engineering', role: 'Junior' },
  { id: 'E13', name: 'Yuki Tanaka', team: 'Engineering', role: 'Senior' },
  { id: 'E14', name: 'Dani Okoye', team: 'Engineering', role: 'Mid' },
  { id: 'E15', name: 'Leo Chang', team: 'Engineering', role: 'Junior' },
  // Product (9 people)
  { id: 'P1', name: 'Ethan Brooks', team: 'Product', role: 'Director' },
  { id: 'P2', name: 'Olivia Reed', team: 'Product', role: 'Senior PM' },
  { id: 'P3', name: 'Lucas Huang', team: 'Product', role: 'PM' },
  { id: 'P4', name: 'Mia Johansson', team: 'Product', role: 'Senior PM' },
  { id: 'P5', name: 'Isaac Delgado', team: 'Product', role: 'PM' },
  { id: 'P6', name: 'Clara Fontaine', team: 'Product', role: 'PM' },
  { id: 'P7', name: 'Ravi Kapoor', team: 'Product', role: 'Associate PM' },
  { id: 'P8', name: 'Hannah Vogel', team: 'Product', role: 'Senior PM' },
  { id: 'P9', name: 'Tomas Silva', team: 'Product', role: 'PM' },
  // Research (9 people)
  { id: 'R1', name: 'Sofia Andersson', team: 'Research', role: 'Lead' },
  { id: 'R2', name: 'Kai Nakamura', team: 'Research', role: 'Senior' },
  { id: 'R3', name: 'Emma Davis', team: 'Research', role: 'Mid' },
  { id: 'R4', name: 'Omar Farid', team: 'Research', role: 'Senior' },
  { id: 'R5', name: 'Lena Kowalski', team: 'Research', role: 'Mid' },
  { id: 'R6', name: 'Aiden Ng', team: 'Research', role: 'Junior' },
  { id: 'R7', name: 'Vera Ivanovic', team: 'Research', role: 'Senior' },
  { id: 'R8', name: 'Jun Watanabe', team: 'Research', role: 'Mid' },
  { id: 'R9', name: 'Amara Osei', team: 'Research', role: 'Mid' },
  // Ops (6 people)
  { id: 'O1', name: 'Chris Lopez', team: 'Ops', role: 'Manager' },
  { id: 'O2', name: 'Taylor Smith', team: 'Ops', role: 'Coordinator' },
  { id: 'O3', name: 'Robin Adler', team: 'Ops', role: 'Coordinator' },
  { id: 'O4', name: 'Jesse Moreau', team: 'Ops', role: 'Analyst' },
  { id: 'O5', name: 'Dana Kemp', team: 'Ops', role: 'Coordinator' },
  { id: 'O6', name: 'Nico Bianchi', team: 'Ops', role: 'Analyst' },
];

// Generate interaction edges with weights (interaction days over Q2 2026)
const interactions = [
  // === CRITICAL CONNECTORS (high degree, high cross-team ratio) ===
  // D1 Alex Chen — 11 connections, 8 cross-team (73%)
  { source: 'D1', target: 'D2', weight: 54 },
  { source: 'D1', target: 'D3', weight: 42 },
  { source: 'D1', target: 'D17', weight: 18 },
  { source: 'D1', target: 'E1', weight: 45 },
  { source: 'D1', target: 'E3', weight: 15 },
  { source: 'D1', target: 'P1', weight: 48 },
  { source: 'D1', target: 'P2', weight: 36 },
  { source: 'D1', target: 'O1', weight: 24 },
  { source: 'D1', target: 'R1', weight: 21 },
  { source: 'D1', target: 'E6', weight: 12 },
  { source: 'D1', target: 'P4', weight: 18 },
  // E1 Priya Sharma — 10 connections, 6 cross-team (60%)
  { source: 'E1', target: 'E2', weight: 42 },
  { source: 'E1', target: 'E3', weight: 36 },
  { source: 'E1', target: 'E6', weight: 30 },
  { source: 'E1', target: 'E13', weight: 21 },
  { source: 'E1', target: 'P1', weight: 39 },
  { source: 'E1', target: 'O2', weight: 27 },
  // P1 Ethan Brooks — 9 connections, 6 cross-team (67%)
  { source: 'P1', target: 'P2', weight: 48 },
  { source: 'P1', target: 'P4', weight: 36 },
  { source: 'P1', target: 'P8', weight: 42 },
  { source: 'P1', target: 'O1', weight: 42 },
  // O1 Chris Lopez — 9 connections, 6 cross-team (67%)
  { source: 'O1', target: 'O2', weight: 36 },
  { source: 'O1', target: 'O3', weight: 30 },
  { source: 'O1', target: 'O6', weight: 18 },
  { source: 'O1', target: 'P4', weight: 30 },
  { source: 'O1', target: 'E9', weight: 15 },
  // D7 Morgan Liu — 8 connections, 5 cross-team (63%)
  { source: 'D7', target: 'D2', weight: 39 },
  { source: 'D7', target: 'D8', weight: 30 },
  { source: 'D7', target: 'D10', weight: 24 },
  { source: 'D7', target: 'E6', weight: 27 },
  { source: 'D7', target: 'P4', weight: 30 },
  { source: 'D7', target: 'R4', weight: 18 },
  { source: 'D7', target: 'O5', weight: 18 },
  { source: 'D7', target: 'E9', weight: 12 },

  // === INTERNAL ANCHORS (high degree, low cross-team ratio) ===
  // D2 Maya Patel — 8 connections, 2 cross-team (25%)
  { source: 'D2', target: 'D3', weight: 36 },
  { source: 'D2', target: 'D5', weight: 27 },
  { source: 'D2', target: 'D13', weight: 21 },
  { source: 'D2', target: 'D14', weight: 18 },
  { source: 'D2', target: 'D18', weight: 15 },
  { source: 'D2', target: 'E2', weight: 30 },
  // E6 Marcus Webb — 8 connections, 2 cross-team (25%)
  { source: 'E6', target: 'E7', weight: 39 },
  { source: 'E6', target: 'E9', weight: 24 },
  { source: 'E6', target: 'E10', weight: 18 },
  { source: 'E6', target: 'E11', weight: 15 },
  { source: 'E6', target: 'P4', weight: 27 },
  // R1 Sofia Andersson — 8 connections, 2 cross-team (25%)
  { source: 'R1', target: 'R2', weight: 45 },
  { source: 'R1', target: 'R3', weight: 30 },
  { source: 'R1', target: 'R4', weight: 27 },
  { source: 'R1', target: 'R7', weight: 21 },
  { source: 'R1', target: 'R9', weight: 12 },
  { source: 'R1', target: 'P2', weight: 18 },
  // E13 Yuki Tanaka — 7 connections, 2 cross-team (29%)
  { source: 'E13', target: 'E14', weight: 36 },
  { source: 'E13', target: 'E15', weight: 18 },
  { source: 'E13', target: 'E2', weight: 21 },
  { source: 'E13', target: 'E4', weight: 15 },
  { source: 'E13', target: 'D11', weight: 33 },
  { source: 'E13', target: 'P8', weight: 24 },
  // P8 Hannah Vogel — 6 connections, 2 cross-team (33%)
  { source: 'P8', target: 'P9', weight: 24 },
  { source: 'P8', target: 'P5', weight: 18 },
  { source: 'P8', target: 'P2', weight: 30 },
  { source: 'P8', target: 'D14', weight: 24 },
  // D10 Avery Mitchell — 7 connections, 2 cross-team (29%)
  { source: 'D10', target: 'D11', weight: 42 },
  { source: 'D10', target: 'D13', weight: 18 },
  { source: 'D10', target: 'D15', weight: 12 },
  { source: 'D10', target: 'D18', weight: 15 },
  { source: 'D10', target: 'E9', weight: 18 },
  { source: 'D10', target: 'P5', weight: 21 },

  // === QUIET BRIDGES (low degree, high cross-team ratio) ===
  // D6 Casey Wright — 3 connections, 2 cross-team (67%)
  { source: 'D6', target: 'D5', weight: 33 },
  { source: 'D6', target: 'R3', weight: 24 },
  { source: 'D6', target: 'E7', weight: 18 },
  // O3 Robin Adler — 4 connections, 3 cross-team (75%)
  { source: 'O3', target: 'O4', weight: 27 },
  { source: 'O3', target: 'E8', weight: 18 },
  { source: 'O3', target: 'R5', weight: 15 },
  { source: 'O3', target: 'D15', weight: 12 },
  // P3 Lucas Huang — 3 connections, 2 cross-team (67%)
  { source: 'P3', target: 'P2', weight: 27 },
  { source: 'P3', target: 'E3', weight: 15 },
  { source: 'P3', target: 'D3', weight: 12 },
  // R7 Vera Ivanovic — 3 connections, 2 cross-team (67%)
  { source: 'R7', target: 'R8', weight: 33 },
  { source: 'R7', target: 'D13', weight: 18 },
  { source: 'R7', target: 'P6', weight: 12 },
  // E14 Dani Okoye — 4 connections, 3 cross-team (75%)
  { source: 'E14', target: 'E15', weight: 18 },
  { source: 'E14', target: 'P9', weight: 12 },
  { source: 'E14', target: 'O6', weight: 12 },
  { source: 'E14', target: 'D17', weight: 9 },
  // O5 Dana Kemp — 3 connections, 2 cross-team (67%)
  { source: 'O5', target: 'O4', weight: 21 },
  { source: 'O5', target: 'D8', weight: 15 },
  // P6 Clara Fontaine — 3 connections, 2 cross-team (67%)
  { source: 'P6', target: 'P5', weight: 21 },
  { source: 'P6', target: 'D13', weight: 18 },
  // D15 Sage Ramirez — 3 connections, 2 cross-team (67%)
  { source: 'D15', target: 'D14', weight: 27 },
  { source: 'D15', target: 'E10', weight: 9 },
  // R4 Omar Farid — 3 connections, 2 cross-team (67%)
  { source: 'R4', target: 'R5', weight: 36 },
  { source: 'R4', target: 'D8', weight: 24 },

  // === AT RISK (low degree, low cross-team ratio) ===
  // D4 Sam Torres — 2 connections, 0 cross-team (0%)
  { source: 'D4', target: 'D3', weight: 21 },
  { source: 'D4', target: 'D16', weight: 6 },
  // D9 Quinn Foster — 2 connections, 0 cross-team (0%)
  { source: 'D9', target: 'D8', weight: 18 },
  { source: 'D9', target: 'D12', weight: 9 },
  // D12 Skyler Okafor — 2 connections, 0 cross-team (0%)
  { source: 'D12', target: 'D11', weight: 15 },
  // D16 Blake Herrera — 2 connections, 0 cross-team (0%)
  // (already linked to D4 and D9 via D15→D16 not present, uses D4)
  // E8 Theo Nakamura — 2 connections, 1 cross-team (50% — borderline)
  { source: 'E8', target: 'E7', weight: 21 },
  // E12 Caleb Russo — 2 connections, 0 cross-team (0%)
  { source: 'E12', target: 'E11', weight: 15 },
  { source: 'E12', target: 'E15', weight: 9 },
  // E15 Leo Chang — 2 connections, 0 cross-team (0%)
  // (already linked via E14 and E12)
  // R6 Aiden Ng — 2 connections, 0 cross-team (0%)
  { source: 'R6', target: 'R5', weight: 18 },
  { source: 'R6', target: 'R9', weight: 12 },
  // R9 Amara Osei — 2 connections, 0 cross-team (0%)
  { source: 'R9', target: 'R8', weight: 24 },
  // P7 Ravi Kapoor — 3 connections, 0 cross-team (0%)
  { source: 'P7', target: 'P6', weight: 15 },
  { source: 'P7', target: 'P9', weight: 12 },
  { source: 'P7', target: 'O4', weight: 24 },
  // O6 Nico Bianchi — 3 connections, 1 cross-team (33%)
  { source: 'O6', target: 'O4', weight: 15 },
  { source: 'O6', target: 'O5', weight: 33 },

  // === MODERATE / MID-CHART ===
  // D3 Jordan Kim — 4 connections, 1 cross-team (25%)
  { source: 'D3', target: 'R2', weight: 21 },
  // D5 Riley Nguyen — 4 connections, 1 cross-team (25%)
  { source: 'D5', target: 'E4', weight: 9 },
  // D8 Harper Jones — 4 connections, 2 cross-team (50%)
  // (already linked: D7, D9, R4, O5)
  // D11 Drew Sato — 4 connections, 1 cross-team (25%)
  // (already linked: D10, D12, D18, E13)
  // D13 Reese Andersen — 5 connections, 2 cross-team (40%)
  // (already linked: D2, D5→not here, D10, R7, P6)
  // D14 Jamie Volkov — 4 connections, 1 cross-team (25%)
  // (already linked: D2, D15, D13→not direct, P8)
  { source: 'D14', target: 'D13', weight: 36 },
  // D17 Finley Cho — 3 connections, 1 cross-team (33%)
  { source: 'D17', target: 'D18', weight: 33 },
  // D18 Rowan Beck — 4 connections, 0 cross-team (0%)
  { source: 'D18', target: 'D11', weight: 24 },
  // E2 Liam O'Brien — 4 connections, 1 cross-team (25%)
  { source: 'E2', target: 'E4', weight: 24 },
  // E3 Zoe Martinez — 4 connections, 2 cross-team (50%)
  { source: 'E3', target: 'E5', weight: 27 },
  // E4 Noah Park — 3 connections, 1 cross-team (33%)
  { source: 'E4', target: 'E5', weight: 18 },
  // E5 Ava Johnson — 2 connections, 0 cross-team (0%)
  // (already linked: E3, E4)
  // E7 Isla Fernandez — 3 connections, 1 cross-team (33%)
  // (already linked: E6, E8, D6)
  // E9 Nadia Petrov — 5 connections, 2 cross-team (40%)
  { source: 'E9', target: 'E10', weight: 33 },
  // E10 Oscar Lindqvist — 3 connections, 1 cross-team (33%)
  { source: 'E10', target: 'E11', weight: 27 },
  // E11 Fatima Al-Hassan — 3 connections, 0 cross-team (0%)
  // (already linked: E6, E10, E12)
  // P2 Olivia Reed — 5 connections, 2 cross-team (40%)
  // (already linked: P1, P3, P8, D1, R1 — but R1 link is above)
  // P4 Mia Johansson — 4 connections, 2 cross-team (50%)
  { source: 'P4', target: 'P5', weight: 33 },
  // P5 Isaac Delgado — 4 connections, 1 cross-team (25%)
  // (already linked: P4, P6, P8, D10)
  // P9 Tomas Silva — 4 connections, 1 cross-team (25%)
  // (already linked: P8, P7, E14, D17→not direct)
  // R2 Kai Nakamura — 3 connections, 1 cross-team (33%)
  { source: 'R2', target: 'R3', weight: 24 },
  // R3 Emma Davis — 3 connections, 1 cross-team (33%)
  // (already linked: R1, R2, D6)
  // R5 Lena Kowalski — 3 connections, 1 cross-team (33%)
  // (already linked: R4, R6, O3)
  // R8 Jun Watanabe — 3 connections, 0 cross-team (0%)
  // (already linked: R7, R9)
  // O2 Taylor Smith — 4 connections, 2 cross-team (50%)
  { source: 'O2', target: 'O3', weight: 24 },
  { source: 'O2', target: 'P2', weight: 21 },
  // O4 Jesse Moreau — 5 connections, 1 cross-team (20%)
  // (already linked: O1, O3, O5, O6, P7)
];

// Quarterly data (simplified subsets)
const quarterlyData = {
  'Q1 2026': { density: 0.62, bridges: ['D1', 'E1'], silos: ['Ops'] },
  'Q2 2026': { density: 0.68, bridges: ['D1', 'P1'], silos: ['Ops', 'D4'] },
  'Q3 2026': { density: 0.71, bridges: ['D1', 'D2', 'E1'], silos: ['O2'] },
  'Q4 2026': { density: 0.65, bridges: ['D1'], silos: ['Ops', 'Research'] },
};

// ============================================================
// Tab Navigation
// ============================================================

const tabs = document.querySelectorAll('.tab');
const views = document.querySelectorAll('.view');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    views.forEach(v => v.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.view).classList.add('active');
    if (tab.dataset.view === 'heatmap') buildHeatmap();
    if (tab.dataset.view === 'beeswarm') buildBeeswarm();
  });
});

// ============================================================
// Tooltip
// ============================================================

const tooltip = document.getElementById('tooltip');

function showTooltip(evt, html) {
  tooltip.innerHTML = html;
  tooltip.classList.add('visible');
  tooltip.style.left = evt.clientX + 12 + 'px';
  tooltip.style.top = evt.clientY - 8 + 'px';
}

function hideTooltip() {
  tooltip.classList.remove('visible');
}

// ============================================================
// Network Graph
// ============================================================

function buildNetworkGraph() {
  const container = document.getElementById('network-chart');
  container.innerHTML = '';

  const width = container.clientWidth;
  const height = container.clientHeight || 700;

  const filteredLinks = interactions.map(d => ({ ...d }));
  const nodes = people.map(d => ({ ...d }));

  const svg = d3.select(container)
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  const g = svg.append('g');

  // Zoom
  svg.call(d3.zoom().scaleExtent([0.5, 3]).on('zoom', (event) => {
    g.attr('transform', event.transform);
  }));

  const simulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(filteredLinks).id(d => d.id).distance(d => 120 - d.weight * 3))
    .force('charge', d3.forceManyBody().strength(-200))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collision', d3.forceCollide(20));

  const link = g.append('g')
    .selectAll('line')
    .data(filteredLinks)
    .join('line')
    .attr('class', 'link')
    .attr('stroke-width', d => Math.sqrt(d.weight));

  const node = g.append('g')
    .selectAll('g')
    .data(nodes)
    .join('g')
    .attr('class', 'node')
    .call(d3.drag()
      .on('start', (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x; d.fy = d.y;
      })
      .on('drag', (event, d) => { d.fx = event.x; d.fy = event.y; })
      .on('end', (event, d) => {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null; d.fy = null;
      })
    );

  function buildNodeTooltip(d) {
    const connections = filteredLinks.filter(l => l.source.id === d.id || l.target.id === d.id);
    const connList = connections
      .map(l => {
        const other = l.source.id === d.id ? l.target : l.source;
        return `<li>${other.name} <span class="tt-meta">${other.team}</span></li>`;
      })
      .join('');
    return `<strong>${d.name}</strong><span class="tt-meta">${d.team} · ${d.role}</span><ul>${connList}</ul>`;
  }

  node.append('circle')
    .attr('r', d => d.role === 'Lead' || d.role === 'Director' ? 10 : 7)
    .attr('fill', d => teamColors[d.team])
    .on('mouseover', (event, d) => {
      const connections = filteredLinks.filter(l => l.source.id === d.id || l.target.id === d.id);
      const connectedIds = new Set(connections.flatMap(l => [l.source.id, l.target.id]));

      node.classed('dimmed', n => !connectedIds.has(n.id));
      link.classed('dimmed', l => l.source.id !== d.id && l.target.id !== d.id);
      link.classed('highlighted', l => l.source.id === d.id || l.target.id === d.id);

      showTooltip(event, buildNodeTooltip(d));
    })
    .on('mouseout', () => {
      node.classed('dimmed', false);
      link.classed('dimmed', false);
      link.classed('highlighted', false);
      hideTooltip();
    })
    .on('mousemove', (event, d) => {
      showTooltip(event, buildNodeTooltip(d));
    });

  node.append('text')
    .attr('dx', 12)
    .attr('dy', 4)
    .text(d => d.name.split(' ')[0]);

  simulation.on('tick', () => {
    link
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);

    node.attr('transform', d => `translate(${d.x},${d.y})`);
  });

  // Insights
  generateInsights(filteredLinks, nodes);
}

function generateInsights(links, nodes) {
  const list = document.getElementById('insight-list');
  list.innerHTML = '';

  // Degree per node
  const connectionCount = {};
  nodes.forEach(n => { connectionCount[n.id] = 0; });
  links.forEach(l => {
    connectionCount[l.source.id || l.source]++;
    connectionCount[l.target.id || l.target]++;
  });

  const sorted = Object.entries(connectionCount).sort((a, b) => b[1] - a[1]);
  const avgDegree = (sorted.reduce((sum, [, c]) => sum + c, 0) / sorted.length).toFixed(1);

  // Top 3 connectors
  const top3 = sorted.slice(0, 3).map(([id, count]) => {
    const p = people.find(pp => pp.id === id);
    return `${p.name} (${count})`;
  });

  // Cross-team connections
  const crossTeam = links.filter(l => {
    const s = people.find(p => p.id === (l.source.id || l.source));
    const t = people.find(p => p.id === (l.target.id || l.target));
    return s && t && s.team !== t.team;
  });

  // Cross-team ratio per team
  const teamCrossCount = {};
  const teamTotalCount = {};
  teams.forEach(t => { teamCrossCount[t] = 0; teamTotalCount[t] = 0; });
  links.forEach(l => {
    const s = people.find(p => p.id === (l.source.id || l.source));
    const t = people.find(p => p.id === (l.target.id || l.target));
    if (s) { teamTotalCount[s.team]++; if (t && s.team !== t.team) teamCrossCount[s.team]++; }
    if (t) { teamTotalCount[t.team]++; if (s && s.team !== t.team) teamCrossCount[t.team]++; }
  });

  // Most and least externally connected teams
  const teamCrossRatio = teams.map(t => ({
    team: t,
    ratio: teamTotalCount[t] > 0 ? teamCrossCount[t] / teamTotalCount[t] : 0,
    count: teamCrossCount[t]
  })).sort((a, b) => b.ratio - a.ratio);

  const mostExternal = teamCrossRatio[0];
  const leastExternal = teamCrossRatio[teamCrossRatio.length - 1];

  // Isolated nodes (≤2 connections)
  const lowConnection = sorted.filter(([, count]) => count <= 2);
  const isolated = lowConnection.map(([id]) => people.find(p => p.id === id)).filter(Boolean);

  // Critical connectors: nodes whose removal would disconnect clusters
  const bridgeNodes = sorted.filter(([id, count]) => {
    if (count < 4) return false;
    const p = people.find(pp => pp.id === id);
    const nodeLinks = links.filter(l => (l.source.id || l.source) === id || (l.target.id || l.target) === id);
    const connectedTeams = new Set();
    nodeLinks.forEach(l => {
      const otherId = (l.source.id || l.source) === id ? (l.target.id || l.target) : (l.source.id || l.source);
      const other = people.find(pp => pp.id === otherId);
      if (other && other.team !== p.team) connectedTeams.add(other.team);
    });
    return connectedTeams.size >= 3;
  }).map(([id]) => people.find(p => p.id === id));

  // Network density
  const maxPossibleEdges = nodes.length * (nodes.length - 1) / 2;
  const density = (links.length / maxPossibleEdges * 100).toFixed(1);

  const insights = [
    `<strong>How connected are we?</strong> Only ${density}% of all possible connections actually exist — there's room to grow`,
    `<strong>Average:</strong> Each person works with about ${avgDegree} others`,
    `<strong>Most connected people:</strong> ${top3.join(', ')}`,
    `<strong>Working across teams:</strong> ${Math.round(crossTeam.length / links.length * 100)}% of all connections are between different teams (${crossTeam.length} of ${links.length})`,
    `<strong>Best at reaching out:</strong> ${mostExternal.team} — ${Math.round(mostExternal.ratio * 100)}% of their work is with other teams`,
    `<strong>Most inward-looking:</strong> ${leastExternal.team} — only ${Math.round(leastExternal.ratio * 100)}% of their work is with other teams`,
    bridgeNodes.length > 0
      ? `<strong>Key people holding teams together:</strong> ${bridgeNodes.map(p => p.name).join(', ')} — each connects 3 or more different teams`
      : '<strong>No one person</strong> is the sole link between multiple teams',
    isolated.length > 0
      ? `<strong>May need more support:</strong> ${isolated.map(p => `${p.name} (${p.team})`).join(', ')} — only working with 1–2 people`
      : '<strong>Everyone</strong> has at least a few connections',
  ];

  insights.forEach(text => {
    const li = document.createElement('li');
    li.innerHTML = text;
    list.appendChild(li);
  });
}

// Legend
function buildLegend() {
  const container = document.getElementById('network-legend');
  container.innerHTML = teams.map(t =>
    `<span class="legend-item" data-team="${t}"><span class="legend-dot" style="background:${teamColors[t]}"></span>${t}</span>`
  ).join('');

  container.querySelectorAll('.legend-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      const team = item.dataset.team;
      const svg = document.querySelector('#network-chart svg');
      if (!svg) return;
      const nodeGroups = svg.querySelectorAll('.node');
      const links = svg.querySelectorAll('.link');

      const teamNodeIds = new Set(people.filter(p => p.team === team).map(p => p.id));

      nodeGroups.forEach(g => {
        const d = d3.select(g).datum();
        if (teamNodeIds.has(d.id)) {
          g.classList.remove('dimmed');
        } else {
          g.classList.add('dimmed');
        }
      });

      links.forEach(l => {
        const d = d3.select(l).datum();
        if (teamNodeIds.has(d.source.id) || teamNodeIds.has(d.target.id)) {
          l.classList.remove('dimmed');
          l.classList.add('highlighted');
        } else {
          l.classList.add('dimmed');
          l.classList.remove('highlighted');
        }
      });
    });

    item.addEventListener('mouseleave', () => {
      const svg = document.querySelector('#network-chart svg');
      if (!svg) return;
      svg.querySelectorAll('.node').forEach(g => g.classList.remove('dimmed'));
      svg.querySelectorAll('.link').forEach(l => {
        l.classList.remove('dimmed', 'highlighted');
      });
    });
  });
}



// ============================================================
// Heatmap
// ============================================================

function buildHeatmap() {
  const container = document.getElementById('heatmap-chart');
  container.innerHTML = '';

  const margin = { top: 60, right: 20, bottom: 20, left: 90 };
  const width = container.clientWidth - margin.left - margin.right;
  const height = 380 - margin.top - margin.bottom;

  // Calculate team-to-team totals
  const matrix = {};
  teams.forEach(a => {
    matrix[a] = {};
    teams.forEach(b => { matrix[a][b] = 0; });
  });

  interactions.forEach(({ source, target, weight }) => {
    const s = people.find(p => p.id === source);
    const t = people.find(p => p.id === target);
    if (s && t) {
      matrix[s.team][t.team] += weight;
      if (s.team !== t.team) matrix[t.team][s.team] += weight;
    }
  });

  const maxVal = d3.max(teams.flatMap(a => teams.map(b => matrix[a][b])));

  const svg = d3.select(container)
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  const x = d3.scaleBand().domain(teams).range([0, width]).padding(0.08);
  const y = d3.scaleBand().domain(teams).range([0, height]).padding(0.08);
  const color = d3.scaleSequential(d3.interpolateBlues).domain([0, maxVal]);

  // Column labels
  svg.append('g')
    .selectAll('text')
    .data(teams)
    .join('text')
    .attr('class', 'heatmap-label')
    .attr('x', d => x(d) + x.bandwidth() / 2)
    .attr('y', -10)
    .attr('text-anchor', 'middle')
    .text(d => d);

  // Row labels
  svg.append('g')
    .selectAll('text')
    .data(teams)
    .join('text')
    .attr('class', 'heatmap-label')
    .attr('x', -10)
    .attr('y', d => y(d) + y.bandwidth() / 2 + 4)
    .attr('text-anchor', 'end')
    .text(d => d);

  // Cells
  const cells = [];
  teams.forEach(row => {
    teams.forEach(col => {
      cells.push({ row, col, value: matrix[row][col] });
    });
  });

  svg.selectAll('rect')
    .data(cells)
    .join('rect')
    .attr('class', 'heatmap-cell')
    .attr('x', d => x(d.col))
    .attr('y', d => y(d.row))
    .attr('width', x.bandwidth())
    .attr('height', y.bandwidth())
    .attr('rx', 3)
    .attr('fill', d => d.value === 0 ? '#f5f5f5' : color(d.value))
    .on('mouseover', (event, d) => showTooltip(event, `${d.row} → ${d.col}: ${d.value} interactions`))
    .on('mousemove', (event, d) => showTooltip(event, `${d.row} → ${d.col}: ${d.value} interactions`))
    .on('mouseout', hideTooltip);

  // Value labels
  svg.selectAll('.cell-label')
    .data(cells)
    .join('text')
    .attr('x', d => x(d.col) + x.bandwidth() / 2)
    .attr('y', d => y(d.row) + y.bandwidth() / 2 + 4)
    .attr('text-anchor', 'middle')
    .attr('font-size', '11px')
    .attr('fill', d => d.value > maxVal * 0.6 ? '#fff' : '#666')
    .text(d => d.value || '');

  // Generate heatmap insights
  generateHeatmapInsights(matrix);
}

function generateHeatmapInsights(matrix) {
  const list = document.getElementById('heatmap-insight-list');
  list.innerHTML = '';

  // Cross-team pairs sorted
  const pairs = [];
  for (let i = 0; i < teams.length; i++) {
    for (let j = i + 1; j < teams.length; j++) {
      pairs.push({ a: teams[i], b: teams[j], value: matrix[teams[i]][teams[j]] });
    }
  }
  pairs.sort((a, b) => b.value - a.value);

  const strongest = pairs[0];
  const weakest = pairs[pairs.length - 1];
  const median = pairs[Math.floor(pairs.length / 2)];

  // Internal connectivity
  const internal = teams.map(t => ({ team: t, value: matrix[t][t] }));
  internal.sort((a, b) => b.value - a.value);

  // Total cross-team vs internal
  let crossTotal = 0, internalTotal = 0;
  teams.forEach(a => {
    teams.forEach(b => {
      if (a === b) internalTotal += matrix[a][b];
      else crossTotal += matrix[a][b];
    });
  });

  // Team external totals
  const teamExternal = teams.map(t => {
    let ext = 0;
    teams.forEach(other => { if (other !== t) ext += matrix[t][other]; });
    return { team: t, external: ext };
  }).sort((a, b) => b.external - a.external);

  // Asymmetry detection (where A→B differs significantly from B→A)
  const asymmetries = [];
  for (let i = 0; i < teams.length; i++) {
    for (let j = i + 1; j < teams.length; j++) {
      const ab = matrix[teams[i]][teams[j]];
      const ba = matrix[teams[j]][teams[i]];
      if (ab > 0 && ba > 0) {
        const ratio = Math.max(ab, ba) / Math.min(ab, ba);
        if (ratio > 1.5) {
          const initiator = ab > ba ? teams[i] : teams[j];
          const receiver = ab > ba ? teams[j] : teams[i];
          asymmetries.push({ initiator, receiver, ratio: ratio.toFixed(1) });
        }
      }
    }
  }

  // Isolation score per team (external / total)
  const isolationScores = teams.map(t => {
    const total = internal.find(x => x.team === t).value + teamExternal.find(x => x.team === t).external;
    const extRatio = total > 0 ? teamExternal.find(x => x.team === t).external / total : 0;
    return { team: t, score: extRatio };
  }).sort((a, b) => a.score - b.score);

  const insights = [
    `<strong>Strongest partnership:</strong> ${strongest.a} and ${strongest.b} collaborate the most (${strongest.value} days connected)`,
    `<strong>Weakest link:</strong> ${weakest.a} and ${weakest.b} barely work together (${weakest.value} days connected)`,
    `<strong>Typical pair:</strong> ${median.a} and ${median.b} are in the middle (${median.value} days)`,
    `<strong>Staying in-house:</strong> ${Math.round(internalTotal / (crossTotal + internalTotal) * 100)}% of all collaboration happens within the same team`,
    `<strong>Most self-contained:</strong> ${isolationScores[0].team} — ${Math.round((1 - isolationScores[0].score) * 100)}% of their work stays internal`,
    `<strong>Most collaborative outside their team:</strong> ${isolationScores[isolationScores.length - 1].team} — ${Math.round(isolationScores[isolationScores.length - 1].score * 100)}% of their work is with other teams`,
    `<strong>Busiest internal team:</strong> ${internal[0].team} (${internal[0].value} days) vs. quietest: ${internal[internal.length - 1].team} (${internal[internal.length - 1].value} days)`,
    `<strong>Reaching out most:</strong> ${teamExternal[0].team} with ${teamExternal[0].external} days of cross-team collaboration`,
  ];

  if (asymmetries.length > 0) {
    insights.push(`<strong>One-sided relationship:</strong> ${asymmetries[0].initiator} reaches out to ${asymmetries[0].receiver} ${asymmetries[0].ratio}× more than the other way around`);
  }

  insights.forEach(text => {
    const li = document.createElement('li');
    li.innerHTML = text;
    list.appendChild(li);
  });
}

// ============================================================
// Quarterly Small Multiples
// ============================================================

function buildQuarterly() {
  const container = document.getElementById('quarters-chart');
  container.innerHTML = '';

  Object.entries(quarterlyData).forEach(([quarter, data]) => {
    const card = document.createElement('div');
    card.className = 'small-multiple';

    const bridgeNames = data.bridges.map(id => {
      const p = people.find(pp => pp.id === id);
      return p ? p.name : id;
    }).join(', ');

    card.innerHTML = `
      <h4>${quarter}</h4>
      <svg width="100%" height="140" id="quarter-${quarter.replace(/\s/g, '')}"></svg>
      <div style="margin-top:0.75rem; font-size:0.78rem; color:#6b6b6b;">
        <div><strong>Density:</strong> ${(data.density * 100).toFixed(0)}%</div>
        <div><strong>Key bridges:</strong> ${bridgeNames}</div>
        <div><strong>Silos:</strong> ${data.silos.join(', ')}</div>
      </div>
    `;
    container.appendChild(card);

    // Mini network
    buildMiniNetwork(`quarter-${quarter.replace(/\s/g, '')}`, data.density);
  });
}

function buildMiniNetwork(svgId, density) {
  const svg = d3.select(`#${svgId}`);
  const width = svg.node().clientWidth || 240;
  const height = 140;

  // Simplified mini nodes
  const miniNodes = people.slice(0, Math.round(people.length * density)).map(d => ({ ...d }));
  const miniLinks = interactions
    .filter(l => {
      const sIn = miniNodes.some(n => n.id === l.source);
      const tIn = miniNodes.some(n => n.id === l.target);
      return sIn && tIn && l.weight > 5;
    })
    .map(d => ({ ...d }));

  const simulation = d3.forceSimulation(miniNodes)
    .force('link', d3.forceLink(miniLinks).id(d => d.id).distance(30))
    .force('charge', d3.forceManyBody().strength(-40))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .stop();

  // Run simulation synchronously
  for (let i = 0; i < 100; i++) simulation.tick();

  svg.selectAll('line')
    .data(miniLinks)
    .join('line')
    .attr('x1', d => d.source.x)
    .attr('y1', d => d.source.y)
    .attr('x2', d => d.target.x)
    .attr('y2', d => d.target.y)
    .attr('stroke', '#ddd')
    .attr('stroke-width', 1);

  svg.selectAll('circle')
    .data(miniNodes)
    .join('circle')
    .attr('cx', d => d.x)
    .attr('cy', d => d.y)
    .attr('r', 4)
    .attr('fill', d => teamColors[d.team]);
}

// ============================================================
// Collaboration Profile (Team Beeswarm)
// ============================================================

function buildBeeswarm() {
  const container = document.getElementById('beeswarm-chart');
  container.innerHTML = '';

  const margin = { top: 30, right: 105, bottom: 70, left: 55 };
  const width = container.clientWidth - margin.left - margin.right;
  const height = 560 - margin.top - margin.bottom;

  // Compute per-person metrics
  const metrics = people.map(p => {
    const edges = interactions.filter(l => l.source === p.id || l.target === p.id);
    const crossEdges = edges.filter(l => {
      const otherId = l.source === p.id ? l.target : l.source;
      const other = people.find(pp => pp.id === otherId);
      return other && other.team !== p.team;
    });
    return {
      ...p,
      degree: edges.length,
      crossTeamRatio: edges.length > 0 ? crossEdges.length / edges.length : 0,
      totalWeight: edges.reduce((sum, e) => sum + e.weight, 0)
    };
  });

  const svgEl = d3.select(container)
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom);

  const svg = svgEl.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  // Scales
  const x = d3.scaleBand().domain(teams).range([0, width]).padding(0.2);
  const y = d3.scaleLinear().domain([0, 1]).range([height, 0]);
  const r = d3.scaleSqrt().domain([0, d3.max(metrics, d => d.totalWeight)]).range([5, 16]);

  // Run force simulation to prevent overlap
  const simulation = d3.forceSimulation(metrics)
    .force('x', d3.forceX(d => x(d.team) + x.bandwidth() / 2).strength(0.8))
    .force('y', d3.forceY(d => y(d.crossTeamRatio)).strength(1))
    .force('collide', d3.forceCollide(d => r(d.totalWeight) + 2))
    .stop();

  // Enforce boundaries during each tick so collide force respects them
  for (let i = 0; i < 200; i++) {
    simulation.tick();
    metrics.forEach(d => {
      const rad = r(d.totalWeight);
      d.y = Math.max(rad, Math.min(height - rad, d.y));
      d.x = Math.max(x(d.team) + rad, Math.min(x(d.team) + x.bandwidth() - rad, d.x));
    });
  }

  // 50% reference line
  svg.append('line')
    .attr('x1', 0).attr('x2', width)
    .attr('y1', y(0.5)).attr('y2', y(0.5))
    .attr('stroke', '#ccc').attr('stroke-dasharray', '5,4').attr('stroke-width', 1);

  svg.append('text')
    .attr('x', width + 8)
    .attr('y', y(0.5) - 6)
    .attr('text-anchor', 'start')
    .attr('font-size', '10px')
    .attr('fill', '#999')
    .text('more cross-team ↑');

  svg.append('text')
    .attr('x', width + 8)
    .attr('y', y(0.5) + 14)
    .attr('text-anchor', 'start')
    .attr('font-size', '10px')
    .attr('fill', '#999')
    .text('more within-team ↓');

  // Y-axis
  svg.append('g')
    .call(d3.axisLeft(y).ticks(5).tickFormat(d => Math.round(d * 100) + '%'))
    .selectAll('text').attr('font-size', '12px').attr('fill', '#666');

  svg.append('text')
    .attr('x', -height / 2)
    .attr('y', -42)
    .attr('text-anchor', 'middle')
    .attr('transform', 'rotate(-90)')
    .attr('font-size', '13px')
    .attr('fill', '#555')
    .text('Cross-team work');

  // Team column labels
  svg.append('g')
    .attr('transform', `translate(0,${height + 35})`)
    .selectAll('text')
    .data(teams)
    .join('text')
    .attr('x', d => x(d) + x.bandwidth() / 2)
    .attr('text-anchor', 'middle')
    .attr('font-size', '13px')
    .attr('font-weight', '600')
    .attr('fill', d => teamColors[d])
    .text(d => d);

  // Column background separators
  teams.forEach((t, i) => {
    if (i > 0) {
      svg.append('line')
        .attr('x1', x(t) - x.step() * x.padding() / 2)
        .attr('x2', x(t) - x.step() * x.padding() / 2)
        .attr('y1', 0).attr('y2', height)
        .attr('stroke', '#eee').attr('stroke-width', 1);
    }
  });

  // Dots
  const dots = svg.selectAll('.beeswarm-dot')
    .data(metrics)
    .join('circle')
    .attr('class', 'beeswarm-dot')
    .attr('cx', d => d.x)
    .attr('cy', d => d.y)
    .attr('r', d => r(d.totalWeight))
    .attr('fill', d => teamColors[d.team])
    .attr('stroke', '#fff')
    .attr('stroke-width', 1.5)
    .attr('opacity', 0.9)
    .attr('cursor', 'pointer')
    .on('mouseover', (event, d) => {
      dots.attr('opacity', dd => dd.id === d.id ? 1 : 0.2);
      showTooltip(event, `<strong>${d.name}</strong><span class="tt-meta">${d.team} · ${d.role}</span>
        <ul>
          <li>${d.degree} connections</li>
          <li>${Math.round(d.crossTeamRatio * 100)}% cross-team</li>
          <li>${d.totalWeight} days connected</li>
        </ul>`);
    })
    .on('mousemove', (event) => {
      tooltip.style.left = event.clientX + 12 + 'px';
      tooltip.style.top = event.clientY - 8 + 'px';
    })
    .on('mouseout', () => {
      dots.attr('opacity', 0.9);
      hideTooltip();
    });

  generateBeeswarmInsights(metrics);
}

function generateBeeswarmInsights(metrics) {
  const list = document.getElementById('beeswarm-insight-list');
  list.innerHTML = '';

  const medianDegree = d3.median(metrics, d => d.degree);

  // Group by position relative to 50% line
  const aboveLine = metrics.filter(d => d.crossTeamRatio >= 0.5);
  const belowLine = metrics.filter(d => d.crossTeamRatio < 0.5);

  // Per-team summary
  const teamSummary = teams.map(t => {
    const teamPeople = metrics.filter(d => d.team === t);
    const above = teamPeople.filter(d => d.crossTeamRatio >= 0.5).length;
    return { team: t, total: teamPeople.length, above, below: teamPeople.length - above };
  });

  // Most cross-team people
  const topCrossTeam = [...metrics].sort((a, b) => b.crossTeamRatio - a.crossTeamRatio).slice(0, 3);

  // Most isolated (low degree + low cross-team)
  const isolated = metrics.filter(d => d.degree <= 2 && d.crossTeamRatio < 0.5);

  // Highest workload
  const heaviest = [...metrics].sort((a, b) => b.totalWeight - a.totalWeight).slice(0, 3);

  // People at the bottom (0% cross-team)
  const fullyInternal = metrics.filter(d => d.crossTeamRatio === 0);

  const insights = [
    `<strong>Overall split:</strong> ${aboveLine.length} people work mostly across teams, ${belowLine.length} stay mostly within their own`,
    `<strong>Team breakdown:</strong> ${teamSummary.map(t => `${t.team}: ${t.above} of ${t.total} above the line`).join(' · ')}`,
    `<strong>Strongest cross-team workers:</strong> ${topCrossTeam.map(d => `${d.name} (${Math.round(d.crossTeamRatio * 100)}%)`).join(', ')}`,
    `<strong>Heaviest workload:</strong> ${heaviest.map(d => `${d.name} (${d.totalWeight} days)`).join(', ')}`,
  ];

  if (fullyInternal.length > 0) {
    insights.push(`<strong>No cross-team work at all:</strong> ${fullyInternal.map(d => d.name).join(', ')} — all their connections are within ${fullyInternal.length === 1 ? 'their team' : 'their own teams'}`);
  }

  if (isolated.length > 0) {
    insights.push(`<strong>May need support:</strong> ${isolated.map(d => d.name).join(', ')} — few connections and mostly internal`);
    insights.push(`<strong>Suggestion:</strong> Pair someone like ${isolated[0].name} with a cross-team collaborator to broaden their network`);
  }

  if (topCrossTeam.length > 0) {
    insights.push(`<strong>Suggestion:</strong> People like ${topCrossTeam[0].name} are doing a lot of cross-team glue work — make sure it's visible and valued`);
  }

  insights.forEach(text => {
    const li = document.createElement('li');
    li.innerHTML = text;
    list.appendChild(li);
  });
}

// ============================================================
// Init
// ============================================================

buildLegend();
buildNetworkGraph();
buildHeatmap();
