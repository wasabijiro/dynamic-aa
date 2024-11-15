import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum';
import { ZeroDevSmartWalletConnectors } from "@dynamic-labs/ethereum-aa";
import './globals.css';

export const metadata = {
  title: 'My App',
  description: 'Dynamic AA',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <DynamicContextProvider
          settings={{
            environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID!,
            walletConnectors: [
              EthereumWalletConnectors,
              ZeroDevSmartWalletConnectors,
            ],
          }}
        >
          {children}
        </DynamicContextProvider>
      </body>
    </html>
  );
}
