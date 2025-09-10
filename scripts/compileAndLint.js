const { execSync } = require("child_process");
const file = process.argv[2];
if (!file) {
  console.error("Usage: node compileAndLint.js <path/to/file.ts>");
  process.exit(1);
}
try {
  // 1. TypeScript compile check (no emit)
  execSync(`npx tsc --noEmit ${file}`, { stdio: "inherit" });
  // 2. ESLint check
  execSync(`npx eslint ${file} --max-warnings=0`, { stdio: "inherit" });
  console.log("✅ compile & lint passed");
} catch {
  console.error("❌ compile or lint failed");
  process.exit(2);
}
