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
  // Design internal — dense cluster
  { source: 'D1', target: 'D2', weight: 54 },
  { source: 'D1', target: 'D3', weight: 42 },
  { source: 'D2', target: 'D3', weight: 36 },
  { source: 'D2', target: 'D5', weight: 27 },
  { source: 'D3', target: 'D4', weight: 21 },
  { source: 'D5', target: 'D6', weight: 33 },
  { source: 'D4', target: 'D6', weight: 12 },
  { source: 'D7', target: 'D2', weight: 39 },
  { source: 'D7', target: 'D8', weight: 30 },
  { source: 'D8', target: 'D9', weight: 18 },
  { source: 'D10', target: 'D11', weight: 42 },
  { source: 'D10', target: 'D7', weight: 24 },
  { source: 'D11', target: 'D12', weight: 15 },
  { source: 'D13', target: 'D14', weight: 36 },
  { source: 'D13', target: 'D5', weight: 21 },
  { source: 'D14', target: 'D15', weight: 27 },
  { source: 'D15', target: 'D16', weight: 12 },
  { source: 'D17', target: 'D18', weight: 33 },
  { source: 'D17', target: 'D1', weight: 18 },
  { source: 'D18', target: 'D11', weight: 24 },
  { source: 'D9', target: 'D12', weight: 9 },
  { source: 'D16', target: 'D4', weight: 6 },
  // Design ↔ Engineering
  { source: 'D1', target: 'E1', weight: 45 },
  { source: 'D2', target: 'E2', weight: 30 },
  { source: 'D3', target: 'E3', weight: 18 },
  { source: 'D5', target: 'E4', weight: 9 },
  { source: 'D1', target: 'E3', weight: 15 },
  { source: 'D7', target: 'E6', weight: 27 },
  { source: 'D8', target: 'E7', weight: 21 },
  { source: 'D10', target: 'E9', weight: 18 },
  { source: 'D11', target: 'E13', weight: 33 },
  { source: 'D14', target: 'E2', weight: 15 },
  { source: 'D18', target: 'E6', weight: 12 },
  { source: 'D15', target: 'E10', weight: 9 },
  // Design ↔ Product
  { source: 'D1', target: 'P1', weight: 48 },
  { source: 'D1', target: 'P2', weight: 36 },
  { source: 'D2', target: 'P2', weight: 24 },
  { source: 'D5', target: 'P3', weight: 15 },
  { source: 'D7', target: 'P4', weight: 30 },
  { source: 'D10', target: 'P5', weight: 21 },
  { source: 'D13', target: 'P6', weight: 18 },
  { source: 'D14', target: 'P8', weight: 24 },
  { source: 'D17', target: 'P9', weight: 12 },
  // Design ↔ Research
  { source: 'D2', target: 'R1', weight: 33 },
  { source: 'D3', target: 'R2', weight: 21 },
  { source: 'D6', target: 'R3', weight: 6 },
  { source: 'D8', target: 'R4', weight: 24 },
  { source: 'D10', target: 'R5', weight: 15 },
  { source: 'D13', target: 'R7', weight: 18 },
  { source: 'D15', target: 'R8', weight: 9 },
  // Engineering internal
  { source: 'E1', target: 'E2', weight: 42 },
  { source: 'E1', target: 'E3', weight: 36 },
  { source: 'E2', target: 'E4', weight: 24 },
  { source: 'E3', target: 'E5', weight: 27 },
  { source: 'E4', target: 'E5', weight: 18 },
  { source: 'E6', target: 'E7', weight: 39 },
  { source: 'E6', target: 'E1', weight: 30 },
  { source: 'E7', target: 'E8', weight: 21 },
  { source: 'E9', target: 'E10', weight: 33 },
  { source: 'E9', target: 'E6', weight: 24 },
  { source: 'E10', target: 'E11', weight: 27 },
  { source: 'E11', target: 'E12', weight: 15 },
  { source: 'E13', target: 'E14', weight: 36 },
  { source: 'E13', target: 'E1', weight: 21 },
  { source: 'E14', target: 'E15', weight: 18 },
  { source: 'E15', target: 'E8', weight: 12 },
  // Engineering ↔ Product
  { source: 'E1', target: 'P1', weight: 39 },
  { source: 'E2', target: 'P2', weight: 21 },
  { source: 'E3', target: 'P3', weight: 15 },
  { source: 'E6', target: 'P4', weight: 27 },
  { source: 'E9', target: 'P5', weight: 18 },
  { source: 'E13', target: 'P8', weight: 24 },
  { source: 'E14', target: 'P9', weight: 12 },
  // Product internal
  { source: 'P1', target: 'P2', weight: 48 },
  { source: 'P1', target: 'P4', weight: 36 },
  { source: 'P2', target: 'P3', weight: 27 },
  { source: 'P4', target: 'P5', weight: 33 },
  { source: 'P5', target: 'P6', weight: 21 },
  { source: 'P6', target: 'P7', weight: 15 },
  { source: 'P8', target: 'P1', weight: 42 },
  { source: 'P8', target: 'P9', weight: 24 },
  { source: 'P9', target: 'P7', weight: 12 },
  // Research internal
  { source: 'R1', target: 'R2', weight: 45 },
  { source: 'R1', target: 'R3', weight: 30 },
  { source: 'R2', target: 'R3', weight: 24 },
  { source: 'R4', target: 'R5', weight: 36 },
  { source: 'R4', target: 'R1', weight: 27 },
  { source: 'R5', target: 'R6', weight: 18 },
  { source: 'R7', target: 'R8', weight: 33 },
  { source: 'R7', target: 'R1', weight: 21 },
  { source: 'R8', target: 'R9', weight: 24 },
  { source: 'R9', target: 'R6', weight: 12 },
  // Research ↔ Product
  { source: 'R1', target: 'P2', weight: 18 },
  // Ops internal (tight cluster)
  { source: 'O1', target: 'O2', weight: 36 },
  { source: 'O1', target: 'O3', weight: 30 },
  { source: 'O2', target: 'O3', weight: 24 },
  { source: 'O3', target: 'O4', weight: 27 },
  { source: 'O4', target: 'O5', weight: 21 },
  { source: 'O5', target: 'O6', weight: 33 },
  { source: 'O6', target: 'O1', weight: 18 },
  { source: 'O4', target: 'O6', weight: 15 },
  // Ops cross-team (well-connected to Product and Engineering)
  { source: 'O1', target: 'P1', weight: 42 },
  { source: 'O1', target: 'P4', weight: 30 },
  { source: 'O1', target: 'D1', weight: 24 },
  { source: 'O2', target: 'E1', weight: 27 },
  { source: 'O2', target: 'P2', weight: 21 },
  { source: 'O3', target: 'E8', weight: 18 },
  { source: 'O3', target: 'E9', weight: 15 },
  { source: 'O4', target: 'P7', weight: 24 },
  { source: 'O5', target: 'D7', weight: 18 },
  { source: 'O6', target: 'E14', weight: 12 },
  // Isolated individuals
  { source: 'D4', target: 'D1', weight: 9 },
  { source: 'D16', target: 'D9', weight: 6 },
  { source: 'E12', target: 'E15', weight: 9 },
  { source: 'R6', target: 'R3', weight: 9 },
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

  // Single points of failure: nodes that if removed would disconnect clusters
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
    `<strong>Network density:</strong> ${density}% of possible connections exist (${links.length} edges, ${nodes.length} nodes)`,
    `<strong>Avg. connections per person:</strong> ${avgDegree}`,
    `<strong>Top connectors:</strong> ${top3.join(', ')}`,
    `<strong>Cross-functional:</strong> ${crossTeam.length} of ${links.length} connections (${Math.round(crossTeam.length / links.length * 100)}%) span team boundaries`,
    `<strong>Most external team:</strong> ${mostExternal.team} — ${Math.round(mostExternal.ratio * 100)}% of their connections are cross-team (${mostExternal.count} links)`,
    `<strong>Most insular team:</strong> ${leastExternal.team} — only ${Math.round(leastExternal.ratio * 100)}% cross-team (${leastExternal.count} links)`,
    bridgeNodes.length > 0
      ? `<strong>Single points of failure:</strong> ${bridgeNodes.map(p => p.name).join(', ')} — each bridges 3+ teams`
      : '<strong>No single points of failure</strong> detected',
    isolated.length > 0
      ? `<strong>At risk of isolation:</strong> ${isolated.map(p => `${p.name} (${p.team})`).join(', ')} — ≤2 connections each`
      : '<strong>No isolated individuals</strong> detected',
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
    `<strong>Strongest cross-team link:</strong> ${strongest.a} ↔ ${strongest.b} (${strongest.value} interactions)`,
    `<strong>Weakest cross-team link:</strong> ${weakest.a} ↔ ${weakest.b} (${weakest.value} interactions)`,
    `<strong>Median pair intensity:</strong> ${median.a} ↔ ${median.b} (${median.value})`,
    `<strong>Internal vs. external:</strong> ${Math.round(internalTotal / (crossTotal + internalTotal) * 100)}% of all communication stays within teams`,
    `<strong>Most internally focused:</strong> ${isolationScores[0].team} — ${Math.round((1 - isolationScores[0].score) * 100)}% of interactions are internal`,
    `<strong>Most externally engaged:</strong> ${isolationScores[isolationScores.length - 1].team} — ${Math.round(isolationScores[isolationScores.length - 1].score * 100)}% cross-team`,
    `<strong>Highest internal volume:</strong> ${internal[0].team} (${internal[0].value}) vs. lowest: ${internal[internal.length - 1].team} (${internal[internal.length - 1].value})`,
    `<strong>Most outreach:</strong> ${teamExternal[0].team} (${teamExternal[0].external} cross-team interactions)`,
  ];

  if (asymmetries.length > 0) {
    insights.push(`<strong>Directional imbalance:</strong> ${asymmetries[0].initiator} initiates ${asymmetries[0].ratio}× more contact with ${asymmetries[0].receiver} than the reverse`);
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
// Init
// ============================================================

buildLegend();
buildNetworkGraph();
buildHeatmap();
