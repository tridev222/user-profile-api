# 🚀 User Profile Management API

A simple RESTful API for user profile management with authentication, built using **Node.js, Express.js, MongoDB, and JWT**.

---

## 📌 Postman Collection  
You can test the API using the Postman collection:  
[🔗 Click here to access the collection](https://web.postman.co/workspace/My-Workspace~3c2eed30-8fee-49b5-8182-8ec9833bb067/collection/37189832-3bc1cb80-27bf-4683-af65-5c31a16a3f3e?action=share&source=copy-link&creator=37189832)  

Import this collection into Postman and test the API endpoints easily.

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository  
```sh
git clone <your-repo-url>
cd user-profile-api
```

### 2️⃣ Install Dependencies  
```sh
npm install
```

### 3️⃣ Set Up Environment Variables  
Create a `.env` file in the root directory and add the following:  

```ini
PORT=5000
MONGO_URI=mongodb+srv://yourUsername:yourPassword@cluster0.mongodb.net/yourDatabase?retryWrites=true&w=majority
JWT_SECRET=yourSecretKey
```

🔹 **Replace the following**:  
- `yourUsername` → Your MongoDB Atlas username  
- `yourPassword` → Your MongoDB Atlas password  
- `yourDatabase` → The database name you want to use  
- `yourSecretKey` → A strong secret key for JWT authentication  

---

### **1️⃣ Create a MongoDB Atlas Database**
1. Go to **[MongoDB Atlas](https://www.mongodb.com/atlas/database)** and log in.  
2. Click **"Create"** to set up a new **database cluster**.  
3. Choose the **Free Shared** option (`M0` tier).  
4. Select **AWS / any cloud provider** and **nearest region** for faster access.  
5. Click **Create Cluster** and wait for the database to be deployed (it may take a few minutes).  

### **2️⃣ Set Up User & Access**
1. **Go to "Database Access"** and create a new **database user**:  
   - Set a **username** and **password** (Save these, you’ll need them!).  
   - Choose **"Password"** as the authentication method.  
   - Set **"Read and write"** privileges for full access.  
2. **Go to "Network Access"** and allow access:  
   - Click **"Add IP Address"**.  
   - Choose **"Allow access from anywhere"** (`0.0.0.0/0`) so you can connect from your local machine.  

### **3️⃣ Get the Connection String**
1. Click **"Connect"** → **"Choose your environment"** → **Select "VS Code"**.  
2. You will see a **connection string** like this:
   ```sh
   mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority
   ```
3. Copy this **MongoDB connection string**.  

### **4️⃣ Paste It into Your `.env` File**
Now, open your `.env` file and add this:
```ini
MONGO_URI=mongodb+srv://yourUsername:yourPassword@cluster0.mongodb.net/yourDatabase?retryWrites=true&w=majority
```
✅ **Now your database is connected!** 🎉  

---

## 4️⃣ Start the Server  
```sh
node server.js
```
or use **Nodemon** for automatic reloading:
```sh
npx nodemon server.js
```
**API will be running at:** `http://localhost:5000/` 🚀  
