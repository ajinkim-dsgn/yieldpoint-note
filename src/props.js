// 책상 위 소품 — 위에서 내려다본 시점, 책 중심 = (900, 620)
// 노트 밑 패드와 펜 하나만 둔다.

// 흡수 패드(벤치 라이너) — 실험 노트 밑에 깔린 흰 패드
function pad(x, y, w, h, rot) {
  return `
  <g transform="translate(${x} ${y}) rotate(${rot})" filter="url(#shadowSoft)">
    <rect x="${-w / 2}" y="${-h / 2}" width="${w}" height="${h}" rx="3" fill="#e6e9e8"/>
    <rect x="${-w / 2}" y="${-h / 2}" width="${w}" height="${h}" rx="3" fill="url(#quilt)"/>
    <rect x="${-w / 2}" y="${-h / 2}" width="${w}" height="${h}" rx="3" fill="url(#padLight)"/>
    <rect x="${-w / 2 + 1}" y="${-h / 2 + 1}" width="${w - 2}" height="${h - 2}" rx="3" fill="none" stroke="rgba(255,255,255,.55)"/>
  </g>`;
}

function pencil(x, y, rot) {
  let ribs = '';
  for (let i = 0; i < 14; i++) ribs += `<path d="M${40 + i * 6} 1 v16"/>`;
  return `
  <g transform="translate(${x} ${y}) rotate(${rot})" filter="url(#shadow)">
    <path d="M0 9 L22 3 H30 V15 H22 Z" fill="#9aa2ab"/>
    <path d="M0 9 L6 7.4 V10.6 Z" fill="#222"/>
    <rect x="30" y="0" width="100" height="18" rx="3" fill="#22262b"/>
    <g stroke="#3a4048" stroke-width="2">${ribs}</g>
    <rect x="130" y="1" width="250" height="16" rx="2" fill="#2d3238"/>
    <rect x="130" y="2" width="250" height="4" fill="rgba(255,255,255,.08)"/>
    <rect x="240" y="-3" width="120" height="6" rx="3" fill="#a9b0b8"/>
    <rect x="380" y="2" width="22" height="14" rx="2" fill="#b9c0c7"/>
  </g>`;
}

export function propsSVG() {
  return `
<svg viewBox="0 0 1800 1240" width="1800" height="1240" aria-hidden="true">
  <defs>
    <radialGradient id="padLight" cx=".5" cy=".45" r=".75">
      <stop offset="0" stop-color="#fff" stop-opacity=".18"/>
      <stop offset="1" stop-color="#000" stop-opacity=".18"/>
    </radialGradient>
    <pattern id="quilt" width="28" height="28" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <path d="M0 0 H28 M0 0 V28" stroke="rgba(40,50,60,.07)" stroke-width="1.2"/>
    </pattern>
    <filter id="shadow" x="-30%" y="-50%" width="160%" height="220%">
      <feDropShadow dx="6" dy="12" stdDeviation="7" flood-color="#000" flood-opacity=".55"/>
    </filter>
    <filter id="shadowSoft" x="-20%" y="-50%" width="140%" height="220%">
      <feDropShadow dx="2" dy="5" stdDeviation="4" flood-color="#000" flood-opacity=".5"/>
    </filter>
  </defs>

  ${pad(900, 628, 960, 690, -0.8)}
  ${pencil(1412, 930, -72)}
</svg>`;
}
