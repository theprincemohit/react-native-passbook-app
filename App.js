import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import { BusinessProvider } from './src/context/BusinessContext';
import { PassbookProvider } from './src/context/PassbookContext';
import { TransactionProvider } from './src/context/TransactionContext';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  return (
    <AuthProvider>
      <BusinessProvider>
        <PassbookProvider>
          <TransactionProvider>
            <RootNavigator />
          </TransactionProvider>
        </PassbookProvider>
      </BusinessProvider>
    </AuthProvider>
  );
}
