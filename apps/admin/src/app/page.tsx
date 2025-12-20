import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Login — Out Of Box Studio'
};

export default function AdminHome() {
  return (
    <div className="mx-auto max-w-md px-4 py-20">
      <h1 className="text-2xl font-semibold">Admin</h1>
      <p className="mt-3 text-text-muted">
        Configure your backend API, MongoDB Atlas, and JWT in <code>.env.local</code>.
      </p>
      <div className="mt-6 rounded border border-white/10 bg-black/20 p-4">
        <pre className="text-sm">
{`MONGODB_URI=mongodb+srv://...
JWT_SECRET=...
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=...`}
        </pre>
        <p className="mt-3 text-text-muted">
          Use <code>npm run gen:secrets</code> at the repo root to generate a strong password and
          JWT secret and populate <code>apps/admin/.env.example</code>.
        </p>
      </div>
    </div>
  );
}

