"use client"

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { createConfig, http, injected, WagmiProvider } from 'wagmi';
import {
  mainnet,
  sepolia,
  anvil,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { metaMask } from 'wagmi/connectors';

const queryClient = new QueryClient()

const config = createConfig({
  chains: [mainnet, sepolia, anvil],
  connectors: [
    injected(),
    metaMask(),
  ],
  transports: {
    [anvil.id]: http(),
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})

// const config = getDefaultConfig({
//   appName: 'nft-world',
//   projectId: 'a60155477140bb3311aa47cbae29e423',
//   chains: [mainnet, polygon, optimism, arbitrum, base],
//   ssr: true,
// });

const WagmiConfigProvider = (props: { children?: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact">{props.children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default WagmiConfigProvider;