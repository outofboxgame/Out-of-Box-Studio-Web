import { randomBytes } from 'crypto';
import fs from 'fs';
import path from 'path';

function genPassword() {
  return randomBytes(24).toString('base64').replace(/[^a-zA-Z0-9]/g, '').slice(0, 20);
}

function genJwtSecret() {
  return randomBytes(48).toString('hex');
}

const root = process.cwd();

const adminEnvExamplePath = path.join(root, 'apps', 'admin', '.env.example');
const webEnvExamplePath = path.join(root, 'apps', 'web', '.env.example');
const rootEnvExamplePath = path.join(root, '.env.example');

const password = genPassword();
const jwtSecret = genJwtSecret();

const adminExample = `# Admin App Environment
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster0.xxxxx.mongodb.net/outofbox?retryWrites=true&w=majority
JWT_SECRET=${jwtSecret}
ADMIN_EMAIL=admin@outofbox.studio
ADMIN_PASSWORD=${password}
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_JWT_ISSUER=outofbox-studio-admin
NEXT_PUBLIC_JWT_AUDIENCE=outofbox-studio
`;

const webExample = `# Web App Environment
NEXT_PUBLIC_API_URL=http://localhost:3001
`;

try {
  fs.writeFileSync(adminEnvExamplePath, adminExample);
  fs.writeFileSync(webEnvExamplePath, webExample);
  if (!fs.existsSync(rootEnvExamplePath)) {
    fs.writeFileSync(rootEnvExamplePath, `NEXT_PUBLIC_API_URL=http://localhost:3001\n`);
  }
  console.log('Generated admin/web .env.example files.');
  console.log('Admin password:', password);
  console.log('JWT secret:', jwtSecret);
} catch (e) {
  console.error('Failed to write .env.example files:', e);
  process.exit(1);
}

