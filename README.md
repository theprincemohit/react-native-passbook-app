# Passbook App - React Native

A comprehensive React Native application for managing business passbooks with transaction tracking, reporting, and PDF export capabilities.

## 🎯 Features

### 🔐 Authentication
- ✅ Email & Password registration
- ✅ Email & Password login
- ✅ Google Sign-in integration
- ✅ Firebase authentication
- ✅ Secure session management

### 💼 Business Management
- ✅ Create multiple businesses
- ✅ View all businesses
- ✅ Delete businesses
- ✅ Simple business name field
- ✅ Real-time updates

### 📔 Passbook Management
- ✅ Create multiple passbooks per business
- ✅ View passbooks in organized list
- ✅ Delete passbooks
- ✅ Simple passbook name field
- ✅ Quick navigation to transactions

### 💳 Transaction Management
- ✅ Add debit/credit transactions
- ✅ Transaction fields: Type, Amount, Date, Remarks, Receipt upload
- ✅ View transaction list with summary
- ✅ Edit transactions (coming soon)
- ✅ Delete transactions
- ✅ Real-time balance calculation
- ✅ Summary view (Debit, Credit, Balance)
- ✅ Receipt image upload to Firebase Storage

### 📊 Reports & Analytics
- ✅ Filter transactions by type (debit/credit/all)
- ✅ Filter by date range
- ✅ Search by remarks
- ✅ Export to PDF (coming soon)
- ✅ Share reports (coming soon)

### 🎨 UI/UX
- ✅ Clean, modern design
- ✅ Smooth navigation transitions
- ✅ Tab-based bottom navigation
- ✅ Responsive layouts for iOS & Android
- ✅ Material Design icons
- ✅ Intuitive user interface

## 📱 Supported Platforms
- iOS (12+)
- Android (5.0+)

## 📂 Project Structure

```
react-native-passbook-app/
├── src/
│   ├── config/
│   │   └── firebase.js              # Firebase configuration
│   ├── context/
│   │   ├── AuthContext.js           # Authentication state
│   │   ├── BusinessContext.js       # Business data management
│   │   ├── PassbookContext.js       # Passbook data management
│   │   └── TransactionContext.js    # Transaction data management
│   ├── screens/
│   │   ├── auth/
│   │   │   ├── LoginScreen.js       # Login page
│   │   │   └── RegisterScreen.js    # Registration page
│   │   ├── business/
│   │   │   ├── BusinessListScreen.js        # List all businesses
│   │   │   └── CreateBusinessScreen.js      # Create new business
│   │   ├── passbook/
│   │   │   ├── PassbookListScreen.js        # List passbooks
│   │   │   └── CreatePassbookScreen.js      # Create new passbook
│   │   ├── transaction/
│   │   │   ├── TransactionListScreen.js     # List transactions
│   │   │   └── AddTransactionScreen.js      # Add new transaction
│   │   └── reports/
│   │       └── ReportsScreen.js     # Reports & analytics
│   └── navigation/
│       ├── Navigation.js            # Stack & Tab navigation
│       └── RootNavigator.js         # Root navigation wrapper
├── App.js                           # Main app entry point
├── app.json                         # App configuration
├── babel.config.js                  # Babel configuration
├── package.json                     # Dependencies
├── README.md                        # This file
└── SETUP.md                         # Setup guide
```

## 🚀 Quick Start

### Prerequisites
- Node.js v14+
- React Native CLI
- Android Studio (for Android) or Xcode (for iOS)
- Firebase account

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/theprincemohit/react-native-passbook-app.git
cd react-native-passbook-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure Firebase** (See SETUP.md for details)
```bash
# Update src/config/firebase.js with your credentials
```

4. **Run the app**
```bash
# Android
npm run android

# iOS
npm run ios
```

## 🔥 Firebase Setup

### Firestore Collections

**businesses**
```json
{
  "userId": "string",
  "businessName": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

**passbooks**
```json
{
  "businessId": "string",
  "passbookName": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

**transactions**
```json
{
  "passbookId": "string",
  "type": "debit | credit",
  "amount": "number",
  "date": "timestamp",
  "remarks": "string",
  "receiptUrl": "string (optional)",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Firebase Rules

Copy these rules to your Firebase Console:

**Firestore Rules:**
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /businesses/{document=**} {
      allow read, write: if request.auth != null;
    }
    match /passbooks/{document=**} {
      allow read, write: if request.auth != null;
    }
    match /transactions/{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

**Storage Rules:**
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /receipts/{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## 📦 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react-native | 0.72.0 | Core framework |
| firebase | 10.4.0 | Backend services |
| react-navigation | 6.x | Navigation |
| react-native-vector-icons | 10.0.0 | Icons |
| react-native-image-picker | 7.0.0 | Image upload |
| date-fns | 2.30.0 | Date utilities |

See `package.json` for complete list.

## 🎯 Usage

### Login/Register
1. Open the app
2. Register with email and password
3. Or sign in with Google
4. Verify email (if using email signup)

### Create Business
1. Tap on "Businesses" tab
2. Tap "+" button
3. Enter business name
4. Tap "Create Business"

### Create Passbook
1. Tap on a business
2. Tap "+" button
3. Enter passbook name
4. Tap "Create Passbook"

### Add Transaction
1. Tap on a passbook
2. Tap "+" button
3. Select type (Debit/Credit)
4. Enter amount, date, remarks
5. (Optional) Upload receipt
6. Tap "Add Transaction"

### View Reports
1. Tap on "Reports" tab
2. Set filters (type, date range, remarks)
3. View filtered results
4. Export to PDF or share

## 🔧 Configuration

### Firebase Config
Update `src/config/firebase.js` with your credentials:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### Google Sign-In
Follow [Firebase documentation](https://firebase.google.com/docs/auth/android/google-signin) to set up Google Sign-In.

## 🐛 Troubleshooting

### Firebase Connection Issues
- Verify credentials in `src/config/firebase.js`
- Check Firebase project settings
- Ensure rules allow read/write access

### Build Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm start -- --reset-cache
```

### Android Build Error
```bash
cd android
./gradlew clean
cd ..
npm run android
```

## 📋 Roadmap

- [ ] Advanced PDF export with charts
- [ ] Email report functionality
- [ ] Multi-user support
- [ ] Data backup & restore
- [ ] Offline mode
- [ ] Push notifications
- [ ] Dark theme
- [ ] Multiple languages

## 💡 Best Practices

- Always authenticate before database access
- Validate user input
- Use context for global state
- Keep components focused and reusable
- Follow Firebase security rules

## 📄 License

MIT License - Free to use and modify for personal or commercial projects.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact & Support

- **Author**: theprincemohit
- **GitHub**: [@theprincemohit](https://github.com/theprincemohit)
- **Email**: theprincemohit@gmail.com

For issues, questions, or suggestions:
- Open an issue on GitHub
- Send an email

## 🙏 Acknowledgments

- React Native team
- Firebase team
- React Navigation community
- Material Design

---

**Made with ❤️ by theprincemohit**

**Last Updated**: June 2026

**Happy Coding! 🚀**
