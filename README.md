 
# 🎓 StudentFirst — Government Policies for Students

A stunning, modern single-page application showcasing government policies beneficial for Indian students across all levels (school, college, university).

---

## ✨ Features

**Frontend (index.html)**
- 🎨 Premium UI with white background + animated blobs
- 👩‍🎓 3D-style animated SVG students (school girl, college boy, university girl)
- 🖱️ Custom animated cursor with bulge + glow effect
- 🔍 Real-time search with instant filtering
- 🏷️ Category filter chips (5 categories)
- 🌙 Dark mode toggle
- ♾️ Parallax scrolling effects
- 📱 Fully responsive (mobile + tablet + desktop)
- 🎴 15 policy cards with hover animations
- ✨ Scroll-triggered fade/slide/scale animations
- 💫 Ripple effects on buttons
- 📊 Animated statistics counter
- 🔗 Direct links to official government portals

**Backend (server.js)**
- Node.js + Express REST API
- 7 endpoints for full CRUD operations
- Search, filter, pagination support
- In-memory data (swap to MongoDB/MySQL via schema.sql)

---

## 🚀 Quick Start

### Option 1 — Frontend Only (Zero Setup)
Just open `index.html` in any browser. No server needed. Works instantly.

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

### Option 2 — With Backend API

**Prerequisites:** Node.js 16+

```bash
# 1. Install dependencies
npm install

# 2. Start server
npm start

# 3. Open browser
open http://localhost:3000
```

**Development mode (auto-restart):**
```bash
npm run dev
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Health check |
| GET | `/stats` | Overview statistics |
| GET | `/policies` | List all policies (with filters) |
| GET | `/policies/:id` | Get single policy |
| GET | `/policies/category/:cat` | Filter by category |
| POST | `/policies` | Create new policy |
| PUT | `/policies/:id` | Update policy |
| DELETE | `/policies/:id` | Soft delete policy |

### Query Parameters for GET /policies
```
?category=scholarship     — filter by category
?q=internship             — search text
?level=college            — filter by student level
?page=1&limit=10          — pagination
```

### Example API Calls

```bash
# Get all scholarships
curl http://localhost:3000/policies?category=scholarship

# Search for "PMKVY"
curl "http://localhost:3000/policies?q=PMKVY"

# Get policies for college students
curl http://localhost:3000/policies?level=college

# Create new policy
curl -X POST http://localhost:3000/policies \
  -H "Content-Type: application/json" \
  -d '{
    "title": "New Scholarship Scheme",
    "category": "scholarship",
    "description": "Details here",
    "eligibility": "Open to all",
    "benefits": "₹10,000/year",
    "levels": ["college", "university"],
    "icon": "🏆",
    "link": "https://example.gov.in"
  }'

# Get stats
curl http://localhost:3000/stats
```

---

## 🗄️ Database Setup

### MongoDB (recommended)
```bash
npm install mongoose
```
Use the Mongoose schema from `schema.sql` (MongoDB section).

```javascript
// In server.js, replace in-memory array with:
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/studentfirst');
```

### MySQL
```bash
npm install mysql2
mysql -u root -p < schema.sql
```

---

## 📁 File Structure

```
studentfirst/
├── index.html          ← Complete frontend SPA (open this!)
├── server.js           ← Express API server
├── package.json        ← Node.js dependencies
├── schema.sql          ← MySQL + MongoDB schemas
└── README.md           ← This file
```

---

## 🎨 Customization

### Add a New Policy
Edit the `POLICIES` array in `index.html` or POST to the API:
```javascript
{
  id: 16,
  category: 'scholarship',  // scholarship | skill | internship | digital | loan
  icon: '🏆',
  title: 'Your Policy Name',
  description: 'Description...',
  eligibility: 'Who can apply',
  benefits: 'What they get',
  levels: ['school', 'college', 'university'],
  link: 'https://official-portal.gov.in',
  color: 'scholarship'      // matches category for theming
}
```

### Change Theme Colors
Edit CSS variables in the `:root` block at the top of `index.html`:
```css
:root {
  --blue: #1a56e8;     /* primary color */
  --teal: #00b8a3;     /* skill category */
  --amber: #f7a825;    /* internship category */
  --coral: #f04e37;    /* accent / school badge */
  --purple: #7c3aed;   /* digital category */
  --green: #22c55e;    /* loan category */
}
```

---

## 🔗 Official Resources

| Resource | Link |
|----------|------|
| National Scholarship Portal | https://scholarships.gov.in |
| PM Kaushal Vikas Yojana | https://pmkvyofficial.org |
| SWAYAM MOOCs | https://swayam.gov.in |
| PM Internship Scheme | https://pminternship.mca.gov.in |
| Vidya Lakshmi Loans | https://vidyalakshmi.co.in |
| DigiLocker | https://digilocker.gov.in |
| National Digital Library | https://ndl.iitkgp.ac.in |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, Vanilla JS |
| Fonts | Fraunces (serif display) + DM Sans |
| Animations | Pure CSS + requestAnimationFrame |
| Icons | Emoji + inline SVG |
| Backend | Node.js + Express |
| Database | In-memory / MongoDB / MySQL |

---

## 📄 License

Built for educational and civic tech purposes. Policy data sourced from official Government of India portals.
