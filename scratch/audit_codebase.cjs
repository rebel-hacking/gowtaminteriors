const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\rebel\\OneDrive\\Desktop\\emergent-clone\\src';

console.log('=== GAUTAM INTERIORS V2 CODEBASE AUDIT ===\n');

// 1. Audit tailwind.config.js
console.log('1. Checking Tailwind Color Palette...');
const tailwindConfig = fs.readFileSync('C:\\Users\\rebel\\OneDrive\\Desktop\\emergent-clone\\tailwind.config.js', 'utf8');
const requiredColors = [
  { name: 'warm-beige', hex: '#E9E0D2' },
  { name: 'soft-ivory', hex: '#F5F1E9' },
  { name: 'sand-beige', hex: '#DED1BE' },
  { name: 'warm-offwhite', hex: '#FAF8F3' },
  { name: 'charcoal', hex: '#171715' },
  { name: 'deep-black', hex: '#10100F' },
  { name: 'dark-warm-grey', hex: '#242320' },
  { name: 'muted-gold', hex: '#C7A66A' },
  { name: 'warm-taupe', hex: '#9A8977' },
  { name: 'dark-brown', hex: '#514538' },
];

let colorsPassed = true;
for (const c of requiredColors) {
  if (tailwindConfig.includes(c.hex)) {
    console.log(`  ✓ ${c.name}: ${c.hex} present in tailwind.config.js`);
  } else {
    console.error(`  ✗ MISSING ${c.name} (${c.hex}) in tailwind.config.js`);
    colorsPassed = false;
  }
}

// 2. Audit Page Background Distribution
console.log('\n2. Auditing Page Section Backgrounds...');
const pages = [
  { name: 'HomePage.tsx', file: path.join(srcDir, 'pages', 'HomePage.tsx') },
  { name: 'AboutPage.tsx', file: path.join(srcDir, 'pages', 'AboutPage.tsx') },
  { name: 'ServicesPage.tsx', file: path.join(srcDir, 'pages', 'ServicesPage.tsx') },
  { name: 'ProjectsPage.tsx', file: path.join(srcDir, 'pages', 'ProjectsPage.tsx') },
  { name: 'ProjectDetailPage.tsx', file: path.join(srcDir, 'pages', 'ProjectDetailPage.tsx') },
  { name: 'ContactPage.tsx', file: path.join(srcDir, 'pages', 'ContactPage.tsx') },
  { name: 'NotFoundPage.tsx', file: path.join(srcDir, 'pages', 'NotFoundPage.tsx') },
];

const lightBgTokens = ['bg-warm-beige', 'bg-soft-ivory', 'bg-sand-beige', 'bg-warm-offwhite', 'bg-white'];
const darkBgTokens = ['bg-charcoal', 'bg-deep-black', 'bg-dark-warm-grey'];

let totalLightSections = 0;
let totalDarkSections = 0;

for (const p of pages) {
  const content = fs.readFileSync(p.file, 'utf8');
  const sections = content.split(/<section|PinnedHorizontalSection/g).slice(1);
  console.log(`\n  Page: ${p.name} (${sections.length} major sections)`);

  let pageLight = 0;
  let pageDark = 0;

  sections.forEach((sec, i) => {
    const isLight = lightBgTokens.some(tok => sec.includes(tok));
    const isDark = darkBgTokens.some(tok => sec.includes(tok));
    if (isLight && !isDark) {
      pageLight++;
    } else if (isDark && !isLight) {
      pageDark++;
    } else if (isLight && isDark) {
      // Check which one is primary on the outer container
      const firstClassMatch = sec.match(/className=["']([^"']+)["']/);
      if (firstClassMatch) {
        const cls = firstClassMatch[1];
        if (darkBgTokens.some(tok => cls.includes(tok))) pageDark++;
        else pageLight++;
      } else {
        pageLight++;
      }
    }
  });

  totalLightSections += pageLight;
  totalDarkSections += pageDark;
  console.log(`    Light sections: ${pageLight}, Dark sections: ${pageDark}`);
}

const totalSec = totalLightSections + totalDarkSections;
const lightPct = Math.round((totalLightSections / totalSec) * 100);
const darkPct = Math.round((totalDarkSections / totalSec) * 100);
console.log(`\n  TOTAL SECTION DISTRIBUTION:`);
console.log(`    Light Backgrounds: ${lightPct}% (Target: 60-65%)`);
console.log(`    Dark Backgrounds: ${darkPct}% (Target: 25-30%)`);

// 3. Audit Mobile Strict Rule (No text over image)
console.log('\n3. Auditing Mobile Layouts for Strict Separation Rule...');
for (const p of pages) {
  const content = fs.readFileSync(p.file, 'utf8');
  if (content.includes('lg:hidden')) {
    console.log(`  ✓ ${p.name}: Contains dedicated mobile/tablet layout containers`);
  }
}

// 4. Audit Pinned Horizontal Scroll
console.log('\n4. Checking Pinned Horizontal Scroll Implementation...');
const pinnedComponent = fs.readFileSync(path.join(srcDir, 'components', 'PinnedHorizontalSection.tsx'), 'utf8');
const hasDesktopPinning = pinnedComponent.includes('useScroll') && pinnedComponent.includes('sticky top-0 h-screen') && pinnedComponent.includes('useTransform');
const hasMobileSwipe = pinnedComponent.includes('overflow-x-auto') && pinnedComponent.includes('snap-x');
console.log(`  ✓ Desktop Vertical-to-Horizontal Pinning: ${hasDesktopPinning}`);
console.log(`  ✓ Mobile Touch-Friendly Swipe with Snap: ${hasMobileSwipe}`);

// 5. Audit Routing & 404
console.log('\n5. Checking App Routing & 404...');
const appContent = fs.readFileSync(path.join(srcDir, 'App.tsx'), 'utf8');
const has404 = appContent.includes('NotFoundPage') && appContent.includes('path="*"') && appContent.includes('path="/404"');
console.log(`  ✓ 404 Handled in App.tsx: ${has404}`);

// 6. Audit Studio Data Authenticity
console.log('\n6. Checking Studio Data Credentials...');
const studioData = fs.readFileSync(path.join(srcDir, 'data', 'studioData.ts'), 'utf8');
const has4_9 = studioData.includes('4.9') && studioData.includes('38');
const hasAddress = studioData.includes('Vijaya Bank Layout') && studioData.includes('Kodichikkanahalli');
console.log(`  ✓ 4.9 Rating & 38 Reviews: ${has4_9}`);
console.log(`  ✓ Vijaya Bank Layout Address: ${hasAddress}`);

// 7. Dynamic Footer Year
console.log('\n7. Checking Footer Dynamic Year...');
const footerContent = fs.readFileSync(path.join(srcDir, 'components', 'Footer.tsx'), 'utf8');
const hasDynamicYear = footerContent.includes('new Date().getFullYear()');
console.log(`  ✓ Footer uses new Date().getFullYear(): ${hasDynamicYear}`);

console.log('\n=== AUDIT COMPLETE ===');

