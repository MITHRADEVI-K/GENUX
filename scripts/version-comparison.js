#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { GenUXDataProcessor, loadCsv } from './data-processor.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const fixturesDir = path.join(__dirname, '..', 'test', 'fixtures')

function findVersionFiles() {
  const names = ['v1.csv', 'v2.csv', 'v3.csv', 'v4.csv', 'v5.csv']
  return names.map((n) => ({ name: n, path: path.join(fixturesDir, n) })).filter((f) => fs.existsSync(f.path))
}

async function main() {
  const files = findVersionFiles()
  if (files.length < 2) {
    console.error('Need at least two version files in test/fixtures (v1.csv ... v5.csv)')
    process.exit(1)
  }
  const processor = new GenUXDataProcessor()
  const results = []
  for (let i = 0; i < files.length - 1; i++) {
    const a = loadCsv(files[i].path)
    const b = loadCsv(files[i + 1].path)
    const prevPersonal = processor.calculateAverage(a, 'Personalization')
    const currPersonal = processor.calculateAverage(b, 'Personalization')
    const changePercent = processor.changePercent(prevPersonal, currPersonal)
    const metrics = ['Personalization', 'Loading Speed', 'Mobile Responsiveness', 'Accessibility']
    const statSig = processor.statisticalSignificance(a, b, metrics)
    const driftScore = processor.computeDriftScore({ statisticalSignificance: statSig, llmConfidence: 0.5, deltaTSeconds: 60 * 60 * 24 })
    results.push({
      transition: `${files[i].name} -> ${files[i + 1].name}`,
      prevPersonal,
      currPersonal,
      changePercent,
      statisticalSignificance: statSig,
      driftScore,
    })
  }
  const out = path.join(process.cwd(), 'version-comparison.json')
  fs.writeFileSync(out, JSON.stringify(results, null, 2), 'utf8')
  console.log('Wrote', out)
  console.log(JSON.stringify(results, null, 2))
}

main().catch((e) => {
  console.error(e)
  process.exit(2)
})
