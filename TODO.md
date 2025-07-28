# 📝 TODO CRUD App — Supabase + Next.js + Tailwind

## ✅ Setup & Initialization
- [x] Create Next.js app: `npx create-next-app@latest`
- [x] Optional: Enable TypeScript
- [x] Install Tailwind CSS & configure:
    - `npm install -D tailwindcss postcss autoprefixer`
    - `npx tailwindcss init -p`
- [x] Create Supabase project: https://supabase.com/
- [x] Install Supabase client: `npm install @supabase/supabase-js`
- [x] Add Supabase keys to `.env.local`

---

## 🧱 Supabase Database
- [x] Create `todos` table with columns:
    - `id` (UUID, Primary Key)
    - `title` (Text)
    - `completed` (Boolean)
    - `created_at` (Timestamp)


---

## 🛠 CRUD Functionality

### 📋 READ
- [x] Fetch all todos from Supabase
- [ ] Display in styled list

### ➕ CREATE
- [x] Input field + button to add new todo
- [x] Insert todo into Supabase

### ✏️ UPDATE
- [x] Toggle `completed` status
- [x] Edit `title` inline or modal
- [x] Update todo in Supabase

### 🗑 DELETE
- [x] Add delete button
- [x] Confirm before deleting
- [x] Remove todo from Supabase

---

## 🎨 Styling with Tailwind CSS
- [x] Responsive design
- [x] Button/input hover & focus states
- [x] Optional: Dark mode toggle

---

## 🔐 Optional Authentication
- [ ] Supabase Auth: email/password or OAuth
- [ ] Sign-in/sign-up pages
- [ ] Link todos to user ID
- [ ] Protect routes for signed-in users

---

## 🧪 Testing & Debugging
- [ ] Handle loading/error states
- [ ] Validate API responses
- [ ] Debug via Supabase dashboard

---

## 🚀 Deployment
- [ ] Deploy to Vercel (Next.js friendly)
- [ ] Add Supabase keys to Vercel environment
- [ ] Test live app

---
