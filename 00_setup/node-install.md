# ⚙️ Node.js Installation Guide (Beginner → Pro)

> Goal: Stable, predictable, production-ready Node.js setup
> Target: JavaScript learners aiming for **Top 1% mastery**

---

## 🤔 What is Node.js?

Node.js is a **JavaScript runtime** built on:

* 🧠 **V8 JavaScript Engine**
* ⚡ Event-driven
* 🚫 Non-blocking I/O

It lets you run JavaScript **outside the browser**:

* Backend servers
* CLI tools
* Build tools (Webpack, Vite, ESLint)
* DevOps scripts

---

## 🧠 Important Concept (READ THIS)

❌ Node.js ≠ JavaScript
✅ Node.js = JavaScript + Runtime + APIs (`fs`, `http`, `process`)

---

## 📌 Recommended Version Strategy

| Use Case    | Version                     |
| ----------- | --------------------------- |
| Learning    | **LTS (Long Term Support)** |
| Production  | **LTS only**                |
| Experiments | Current                     |

👉 **Never use odd versions in production**

---

## 🪟 Installation (Windows)

### Option 1: Official Installer (Beginner Friendly)

1. Go to [https://nodejs.org](https://nodejs.org)
2. Download **LTS version**
3. Run `.msi` installer
4. Keep default options
5. Finish installation

### Verify

```bash
node -v
npm -v
```

---

## 🐧 Installation (Linux – Ubuntu/Debian)

**Best Practice: Using NodeSource**

```bash
sudo apt update
sudo apt install -y curl
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
```

### Verify

```bash
node -v
npm -v
```

---

## 🍎 Installation (macOS)

### Option 1: Homebrew (Recommended)

```bash
brew update
brew install node
```

### Verify

```bash
node -v
npm -v
```

---

## ⭐ Pro Setup (Highly Recommended): NVM

**NVM = Node Version Manager**
Allows multiple Node versions side-by-side

### 🔧 Install NVM (Linux / macOS)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Reload shell:

```bash
source ~/.bashrc
# or
source ~/.zshrc
```

Install Node using NVM:

```bash
nvm install --lts
nvm use --lts
```

### Verify

```bash
node -v
```

---

## 🪟 NVM for Windows

Download: [https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)

Install `nvm-setup.exe`

```bash
nvm install lts
nvm use lts
node -v
```

---

## 📦 npm (Node Package Manager)

Installed automatically with Node.

Check location:

```bash
which node
which npm
```

Update npm:

```bash
npm install -g npm
```

---

## 🧪 First Node Program

Create file:

```bash
touch app.js
```

```js
console.log("Hello Node.js 🚀");
```

Run:

```bash
node app.js
```

---

## 🧠 How Node Executes This?

1. Node reads JS file
2. V8 compiles to machine code
3. Event loop starts
4. Process exits when call stack is empty

---

## ⚠️ Common Mistakes

❌ Installing multiple Node versions without knowing
❌ Using `sudo npm install -g`
❌ Not using LTS
❌ Confusing Node with Browser JS

---

## ✅ Best Practices (Top 1%)

✔ Always use LTS
✔ Use NVM
✔ Avoid global installs
✔ Lock Node version in projects

Example:

```bash
node -v > .nvmrc
```

---

## 📚 Useful Commands

```bash
node -v        # Node version
npm -v         # npm version
npm list -g    # global packages
which node     # node path
```

---

## 🎯 Interview Ready Notes

* Node is single-threaded
* Uses `libuv` internally
* Async handled via event loop
* Scales using non-blocking I/O

---

## 🧠 Summary

Node.js gives JavaScript:

🧠 Brain (V8)
⏳ Event Loop
📦 System APIs
🌍 Server superpowers

Happy Coding 🚀
