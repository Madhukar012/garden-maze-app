# 🌿 Garden Maze — Web App

A brain-training puzzle game built as a multi-page website.

---

## 📁 Project Structure

```
garden-maze-app/
├── index.html        ← Main landing page (home)
├── play.html         ← Play page (embeds the game)
├── game/
│   └── garden-maze-v3.html  ← The actual game (copy here)
└── README.md
```

---

## 🚀 How to Set Up (Step by Step)

### Step 1 — Copy the game file
Copy `garden-maze-v3.html` into the `game/` folder inside this project.

### Step 2 — View locally
Open `index.html` in your browser. Click "Play Free" to test the game.

### Step 3 — Push to GitHub

Open VS Code terminal (Ctrl + `) and run:

```bash
git init
git add .
git commit -m "first commit - garden maze website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/garden-maze-app.git
git push -u origin main
```

Replace YOUR_USERNAME with your actual GitHub username.

### Step 4 — Deploy to Vercel (FREE)

1. Go to https://vercel.com
2. Sign up with your GitHub account
3. Click "Add New Project"
4. Select your `garden-maze-app` repository
5. Click "Deploy"
6. Done! Your site is live at: https://garden-maze-app.vercel.app 🎉

### Step 5 — Buy a Domain (Optional)

1. Go to https://namecheap.com
2. Search for a name like `gardenmaze.com` or `gardenmazegame.com`
3. Buy it (~$10-15/year)
4. In Vercel → your project → Settings → Domains → Add your domain
5. Follow Namecheap's instructions to point the domain to Vercel

---

## ✅ Checklist

- [ ] Node.js installed
- [ ] VS Code installed
- [ ] GitHub account created
- [ ] Game file copied to /game folder
- [ ] Tested locally in browser
- [ ] Pushed to GitHub
- [ ] Deployed on Vercel
- [ ] Custom domain added (optional)

---

## 🔮 Coming Next

- [ ] Firebase login & user accounts
- [ ] Progress tracking per user
- [ ] Leaderboard
- [ ] React Native mobile app
- [ ] Google Play Store listing
