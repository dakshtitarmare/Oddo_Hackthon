# StockMaster 

> An intelligent, AI-powered Inventory Management System (IMS) that streamlines stock operations and replaces manual registers.

## 🚀 Overview
StockMaster helps businesses manage incoming and outgoing stock in real-time. Unlike traditional systems, StockMaster utilizes **Google Gemini AI** to automate data entry—users can simply snap a picture of a vendor invoice, and the system automatically parses and updates the inventory, reducing manual error and entry time.

## 🛠 Tech Stack
* **Frontend:** React + Vite + Tailwind CSS
* **Backend:** Node.js + Express
* **Database:** Firebase Realtime Database (NoSQL)
* **AI Engine:** Google Gemini 1.5 Flash (via Google Generative AI SDK)

## ✨ Key Features
* **📊 Real-Time Dashboard:** View KPIs like Total Stock, Low Stock Alerts, and Pending Deliveries instantly.
* **🤖 AI Invoice Scanning:** Upload an image of a paper invoice, and Gemini extracts the items and quantities to auto-fill receipt forms.
* **📉 Stock Movements:** Track Receipts (Incoming), Deliveries (Outgoing), and Adjustments with a full audit ledger.
* **⚡ Instant Search:** Filter products by SKU, Category, or Location.

## ⚙️ Installation & Setup

### Prerequisites
* Node.js installed
* Firebase Project credentials
* Google Gemini API Key

### 1. Clone the Repository
```bash
git clone https://github.com/dakshtitarmare/Oddo_Hackthon.git

````

### 2\. Backend Setup (Server)

```bash
cd server
npm install
```

Create a `.env` file in the `server` folder:

```env
PORT=5000
GEMINI_API_KEY=your_google_gemini_key
FIREBASE_DB_URL=your_firebase_database_url
FIREBASE_SERVICE_ACCOUNT=path_to_your_serviceAccountKey.json
```

Start the server:

```bash
npm run dev
```

### 3\. Frontend Setup (Client)

```bash
cd client
npm install
npm run dev
```

<!-- ## 🔌 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/dashboard` | Fetches KPI stats (Total products, Low stock count). |
| `POST` | `/api/products` | Create a new product with SKU and Min Stock levels. |
| `POST` | `/api/movements/in` | Process **Incoming** goods (Increases stock). |
| `POST` | `/api/movements/out` | Process **Outgoing** deliveries (Decreases stock). |
| `POST` | `/api/ai/scan` | **AI Feature:** Sends invoice image to Gemini for parsing. | -->

<!-- ## 🧠 How the AI Works

1.  User uploads an image of a handwritten or printed invoice.
2.  The backend sends the image to **Gemini 1.5 Flash**.
3.  We use a strict system prompt to ensure Gemini returns **pure JSON** data.
4.  The frontend populates the "Receipts" form automatically. -->

## 👥 Team

  * Daksh R. Titarmare - Full Stack Developer
  * Devesh M. Patil -  Frontend Developer
  * Krishna R. Borakhade - Backend Developer
  * Asim Sayyed - Frontend Developer



-----

*Built for Oddo x Spit  2025*
