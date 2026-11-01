import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { validateAppointmentForm, buildWhatsAppEnquiryUrl } from './src/utils/appointmentUtils';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, 'data');
const ENQUIRIES_FILE = path.join(DATA_DIR, 'enquiries.json');

interface StoredEnquiry {
  id: string;
  createdAt: string;
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  specialty: string;
  message: string;
  status: 'received_for_enquiry';
}

function readEnquiries(): StoredEnquiry[] {
  try {
    if (!fs.existsSync(ENQUIRIES_FILE)) {
      return [];
    }
    const raw = fs.readFileSync(ENQUIRIES_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveEnquiry(enquiry: StoredEnquiry): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  const existing = readEnquiries();
  existing.unshift(enquiry);
  fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(existing, null, 2), 'utf-8');
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', clinic: 'A.F Dental Den' });
  });

  app.post('/api/enquiries', (req, res) => {
    const payload = {
      fullName: String(req.body?.fullName ?? ''),
      phone: String(req.body?.phone ?? ''),
      email: String(req.body?.email ?? ''),
      preferredDate: String(req.body?.preferredDate ?? ''),
      preferredTime: String(req.body?.preferredTime ?? ''),
      specialty: String(req.body?.specialty ?? ''),
      message: String(req.body?.message ?? ''),
    };

    const errors = validateAppointmentForm(payload);
    if (Object.keys(errors).length > 0) {
      res.status(400).json({ ok: false, errors });
      return;
    }

    const enquiry: StoredEnquiry = {
      id: `AFD-${Date.now().toString(36).toUpperCase()}`,
      createdAt: new Date().toISOString(),
      ...payload,
      status: 'received_for_enquiry',
    };

    saveEnquiry(enquiry);

    res.status(201).json({
      ok: true,
      referenceId: enquiry.id,
      createdAt: enquiry.createdAt,
      whatsappUrl: buildWhatsAppEnquiryUrl(payload),
      confirmationMessage:
        'Thank you for contacting A.F Dental Den. Your appointment request has been received for enquiry. Please contact the clinic directly for confirmation of availability.',
    });
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`A.F Dental Den server running on http://localhost:${PORT}`);
  });
}

startServer();
