import express from 'express';
import cors from 'cors';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Helper: Read JSON data from frontend data directory
function readData(filename) {
    const filePath = path.join(__dirname, '..', 'src', 'data', filename);
    const raw = readFileSync(filePath, 'utf-8');
    return JSON.parse(raw);
}

// ============================================
// API Routes
// ============================================

// GET /api/projects - Semua project
app.get('/api/projects', (req, res) => {
    try {
        const projects = readData('projects.json');
        res.json({ success: true, data: projects });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Failed to load projects' });
    }
});

// GET /api/services - Semua layanan
app.get('/api/services', (req, res) => {
    try {
        const services = readData('services.json');
        res.json({ success: true, data: services });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Failed to load services' });
    }
});

// GET /api/testimonials - Semua testimoni
app.get('/api/testimonials', (req, res) => {
    try {
        const testimonials = readData('testimonials.json');
        res.json({ success: true, data: testimonials });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Failed to load testimonials' });
    }
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ============================================
// Start Server
// ============================================
app.listen(PORT, () => {
    console.log(`\n🚀 dyyProject Backend running on http://localhost:${PORT}`);
    console.log(`📡 API endpoints:`);
    console.log(`   GET /api/projects`);
    console.log(`   GET /api/services`);
    console.log(`   GET /api/testimonials`);
    console.log(`   GET /api/health\n`);
});
