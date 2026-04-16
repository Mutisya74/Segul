# Segula Website – Deployment & Admin Guide

## Your Website Files
```
segula/
├── index.html          ← Your main website
├── netlify.toml        ← Netlify settings
├── admin/
│   ├── index.html      ← CMS admin panel
│   └── config.yml      ← CMS configuration
├── products/
│   └── classic-palazzo-pants.md   ← Sample product
├── blog/
│   └── 2025-04-01-dress-with-dignity.md  ← Sample post
└── images/
    └── uploads/        ← Your product/blog images go here
```

---

## STEP 1 — Create a GitHub Account
1. Go to https://github.com and sign up (free)
2. Click **New Repository**
3. Name it: `segula-website`
4. Set to **Public**
5. Click **Create Repository**

---

## STEP 2 — Upload Your Files to GitHub
1. On your new repo page, click **uploading an existing file**
2. Drag the entire `segula` folder contents into the upload area
3. Click **Commit changes**

---

## STEP 3 — Deploy on Netlify
1. Go to https://netlify.com and sign up with your GitHub account
2. Click **Add new site → Import an existing project**
3. Choose **GitHub** → select your `segula-website` repo
4. Leave all settings as default
5. Click **Deploy site**
6. In ~2 minutes your site is LIVE at a URL like `https://segula-abc123.netlify.app`

---

## STEP 4 — Enable the CMS (Admin Panel)
1. In Netlify dashboard → **Site settings → Identity**
2. Click **Enable Identity**
3. Scroll to **Registration** → set to **Invite only**
4. Go to **Services → Git Gateway** → click **Enable Git Gateway**
5. Go to **Identity tab** → click **Invite users** → enter your email
6. Check your email and accept the invite

Now you can log in at: `https://your-site.netlify.app/admin`

---

## STEP 5 — Add a Custom Domain (Optional)
If you want `segula.co.ke` or similar:
1. Buy domain from **Kenya Network Information Centre (KENIC)** or **Truehost Kenya**
2. In Netlify → **Domain settings → Add custom domain**
3. Follow the DNS instructions (free SSL included automatically)

---

## HOW TO ADD PRODUCTS (After Setup)
1. Go to `https://your-site.netlify.app/admin`
2. Log in with your email
3. Click **Products → New Product**
4. Fill in: Name, Price, Category, Description, Image
5. The WhatsApp message auto-generates — customise if needed
6. Click **Publish** → product appears on website within seconds

---

## HOW TO WRITE A BLOG POST
1. Go to your admin panel
2. Click **Blog Posts → New Blog Post**
3. Write your post (works like Google Docs)
4. Add a category: Faith & Fashion / Style Guide / Life & Grace / Devotional
5. Add a Scripture reference if relevant
6. Click **Publish** → post appears live immediately

---

## YOUR WHATSAPP INTEGRATION
Every product has a button that opens WhatsApp with a pre-written message like:
> "Hi Segula! I'm interested in the Classic Palazzo Pants (KES 2,800)..."

Customers tap **Order**, WhatsApp opens, message is pre-filled. They just hit send.

Your WhatsApp number: **0756 313 220** (already embedded throughout the site)

---

## CONTACTS EMBEDDED IN SITE
- Email: segulaco516@gmail.com
- WhatsApp/Phone: 0756 313 220
- Instagram: @segulla
- TikTok: @segulla
- Facebook: @segulla
- Location: Ongata Rongai, Nairobi, Kenya

---

## NEED HELP?
Message Anthropic's Claude at claude.ai — paste this guide and ask for help
with any step. You've got this! 🌿
