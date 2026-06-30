// ============================================================
// Mock Data
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
  // Design
  { id: 'D1', name: 'Alex Chen', team: 'Design', role: 'Lead' },
  { id: 'D2', name: 'Maya Patel', team: 'Design', role: 'Senior' },
  { id: 'D3', name: 'Jordan Kim', team: 'Design', role: 'Mid' },
  { id: 'D4', name: 'Sam Torres', team: 'Design', role: 'Junior' },
  { id: 'D5', name: 'Riley Nguyen', team: 'Design', role: 'Senior' },
  { id: 'D6', name: 'Casey Wright', team: 'Design', role: 'Mid' },
  // Engineering
  { id: 'E1', name: 'Priya Sharma', team: 'Engineering', role: 'Lead' },
  { id: 'E2', name: 'Liam O\'Brien', team: 'Engineering', role: 'Senior' },
  { id: 'E3', name: 'Zoe Martinez', team: 'Engineering', role: 'Senior' },
  { id: 'E4', name: 'Noah Park', team: 'Engineering', role: 'Mid' },
  { id: 'E5', name: 'Ava Johnson', team: 'Engineering', role: 'Mid' },
  // Product
  { id: 'P1', name: 'Ethan Brooks', team: 'Product', role: 'Director' },
  { id: 'P2', name: 'Olivia Reed', team: 'Product', role: 'Senior PM' },
  { id: 'P3', name: 'Lucas Huang', team: 'Product', role: 'PM' },
  // Research
  { id: 'R1', name: 'Sofia Andersson', team: 'Research', role: 'Lead' },
  { id: 'R2', name: 'Kai Nakamura', team: 'Research', role: 'Senior' },
  { id: 'R3', name: 'Emma Davis', team: 'Research', role: 'Mid' },
  // Ops
  { id: 'O1', name: 'Chris Lopez', team: 'Ops', role: 'Manager' },
  { id: 'O2', name: 'Taylor Smith', team: 'Ops', role: 'Coordinator' },
];

// Generate interaction edges with weights
const interactions = [
  // Heavy Design internal
  { source: 'D1', target: 'D2', weight: 18 },
  { source: 'D1', target: 'D3', weight: 14 },
  { source: 'D2', target: 'D3', weight: 12 },
  { source: 'D2', target: 'D5', weight: 9 },
  { source: 'D3', target: 'D4', weight: 7 },
  { source: 'D5', target: 'D6', weight: 11 },
  { source: 'D4', target: 'D6', weight: 4 },
  // Design ↔ Engineering
  { source: 'D1', target: 'E1', weight: 15 },
  { source: 'D2', target: 'E2', weight: 10 },
  { source: 'D3', target: 'E3', weight: 6 },
  { source: 'D5', target: 'E4', weight: 3 },
  { source: 'D1', target: 'E3', weight: 5 },
  // Design ↔ Product
  { source: 'D1', target: 'P1', weight: 16 },
  { source: 'D1', target: 'P2', weight: 12 },
  { source: 'D2', target: 'P2', weight: 8 },
  { source: 'D5', target: 'P3', weight: 5 },
  // Design ↔ Research
  { source: 'D2', target: 'R1', weight: 11 },
  { source: 'D3', target: 'R2', weight: 7 },
  { source: 'D6', target: 'R3', weight: 2 },
  // Engineering internal
  { source: 'E1', target: 'E2', weight: 14 },
  { source: 'E1', target: 'E3', weight: 12 },
  { source: 'E2', target: 'E4', weight: 8 },
  { source: 'E3', target: 'E5', weight: 9 },
  { source: 'E4', target: 'E5', weight: 6 },
  // Engineering ↔ Product
  { source: 'E1', target: 'P1', weight: 13 },
  { source: 'E2', target: 'P2', weight: 7 },
  { source: 'E3', target: 'P3', weight: 5 },
  // Research internal
  { source: 'R1', target: 'R2', weight: 15 },
  { source: 'R1', target: 'R3', weight: 10 },
  { source: 'R2', target: 'R3', weight: 8 },
  // Research ↔ Product
  { source: 'R1', target: 'P2', weight: 6 },
  // Ops connections (sparse — silo signal)
  { source: 'O1', target: 'P1', weight: 9 },
  { source: 'O1', target: 'D1', weight: 4 },
  { source: 'O2', target: 'O1', weight: 12 },
  { source: 'O2', target: 'D4', weight: 2 },
  // Sam Torres is relatively isolated
  { source: 'D4', target: 'D1', weight: 3 },
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
    if (tab.dataset.view === 'quarters') buildQuarterly();
  });
});

// ============================================================
// Tooltip
// ============================================================

const tooltip = document.getElementById('tooltip');

function showTooltip(evt, text) {
  tooltip.textContent = text;
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

function buildNetworkGraph(threshold = 1) {
  const container = document.getElementById('network-chart');
  container.innerHTML = '';

  const width = container.clientWidth;
  const height = container.clientHeight || 500;

  // Count connections per person
  const degree = {};
  people.forEach(p => { degree[p.id] = 0; });
  interactions.forEach(l => { degree[l.source]++; degree[l.target]++; });

  // Filter to people with at least `threshold` connections
  const visibleIds = new Set(people.filter(p => degree[p.id] >= threshold).map(p => p.id));

  const filteredLinks = interactions
    .filter(d => visibleIds.has(d.source) && visibleIds.has(d.target))
    .map(d => ({ ...d }));

  const nodes = people.filter(p => visibleIds.has(p.id)).map(d => ({ ...d }));

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

  node.append('circle')
    .attr('r', d => d.role === 'Lead' || d.role === 'Director' ? 10 : 7)
    .attr('fill', d => teamColors[d.team])
    .on('mouseover', (event, d) => {
      const connections = filteredLinks.filter(l => l.source.id === d.id || l.target.id === d.id);
      const connectedIds = new Set(connections.flatMap(l => [l.source.id, l.target.id]));

      node.classed('dimmed', n => !connectedIds.has(n.id));
      link.classed('dimmed', l => l.source.id !== d.id && l.target.id !== d.id);
      link.classed('highlighted', l => l.source.id === d.id || l.target.id === d.id);

      showTooltip(event, `${d.name} · ${d.team} · ${d.role} · ${connections.length} connections`);
    })
    .on('mouseout', () => {
      node.classed('dimmed', false);
      link.classed('dimmed', false);
      link.classed('highlighted', false);
      hideTooltip();
    })
    .on('mousemove', (event, d) => {
      const connections = filteredLinks.filter(l => l.source.id === d.id || l.target.id === d.id);
      showTooltip(event, `${d.name} · ${d.team} · ${d.role} · ${connections.length} connections`);
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

  // Find bridge nodes (high betweenness approximation)
  const connectionCount = {};
  nodes.forEach(n => { connectionCount[n.id] = 0; });
  links.forEach(l => {
    connectionCount[l.source.id || l.source]++;
    connectionCount[l.target.id || l.target]++;
  });

  const sorted = Object.entries(connectionCount).sort((a, b) => b[1] - a[1]);
  const topBridge = people.find(p => p.id === sorted[0][0]);

  // Cross-team connections
  const crossTeam = links.filter(l => {
    const s = people.find(p => p.id === (l.source.id || l.source));
    const t = people.find(p => p.id === (l.target.id || l.target));
    return s && t && s.team !== t.team;
  });

  // Isolated nodes
  const lowConnection = sorted.filter(([, count]) => count <= 2);
  const isolated = lowConnection.map(([id]) => people.find(p => p.id === id)).filter(Boolean);

  const insights = [
    `<strong>${topBridge.name}</strong> is the top bridge connector with ${sorted[0][1]} active links`,
    `${crossTeam.length} of ${links.length} connections are cross-functional (${Math.round(crossTeam.length / links.length * 100)}%)`,
    isolated.length > 0
      ? `Potential silos: ${isolated.map(p => p.name).join(', ')} (≤2 connections)`
      : 'No isolated individuals detected at this threshold',
    `Ops team has the fewest cross-team connections — potential organizational silo`,
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
    `<span class="legend-item"><span class="legend-dot" style="background:${teamColors[t]}"></span>${t}</span>`
  ).join('');
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
// Threshold slider
const slider = document.getElementById('edge-threshold');
const output = document.getElementById('threshold-value');
slider.addEventListener('input', () => {
  output.textContent = slider.value;
  buildNetworkGraph(+slider.value);
});

buildNetworkGraph(1);
buildHeatmap();
buildQuarterly();
