# React Native Passbook App - Setup & Configuration Guide

## Quick Start Setup

### 1. Prerequisites Installation

```bash
# Install Node.js from https://nodejs.org/
# Install React Native CLI
npm install -g react-native-cli expo-cli

# Install Xcode (macOS) or Android Studio
```

### 2. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project
3. Enable Authentication (Email/Password & Google Sign-in)
4. Create a Firestore database
5. Set up Firebase Storage for receipts
6. Copy your credentials

### 3. Update Firebase Config

Edit `src/config/firebase.js`:
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

### 4. Install Dependencies

```bash
npm install
```

### 5. Run the App

**Android:**
```bash
npm run android
```

**iOS:**
```bash
npm run ios
```

## Firebase Firestore Rules

Set these rules in Firebase Console:

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

## Firestore Storage Rules

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

## Environment Variables

Create a `.env` file (optional):
```
REACT_APP_FIREBASE_API_KEY=YOUR_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
REACT_APP_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
```

## Common Issues & Solutions

### Issue: "Firebase is not initialized"
**Solution:** Verify credentials in `src/config/firebase.js`

### Issue: "Module not found"
**Solution:** Run `npm install` and clear cache:
```bash
npm start -- --reset-cache
```

### Issue: "Android build fails"
**Solution:** 
```bash
cd android
./gradlew clean
cd ..
npm run android
```

### Issue: "Firestore permission denied"
**Solution:** Check Firebase rules allow authenticated users

## Testing Credentials

You can test with:
- Email: `test@example.com`
- Password: `Test@123`

(Remember to sign up first through the app)

## Deployment

### For Android:
1. Generate signed APK in Android Studio
2. Or use: `cd android && ./gradlew assembleRelease`

### For iOS:
1. Use Xcode for building and deployment
2. Or follow official React Native documentation

## Support & Resources

- [React Native Docs](https://reactnative.dev/)
- [Firebase Docs](https://firebase.google.com/docs)
- [React Navigation](https://reactnavigation.org/)

---

**Last Updated:** June 2026
