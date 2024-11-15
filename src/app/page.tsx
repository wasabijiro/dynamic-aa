import { DynamicWidget } from '@dynamic-labs/sdk-react-core';
import MoonPayButton from './MoonPayButton';

export default function Home() {
  return (
    <div>
      <DynamicWidget />

    <script defer src="https://static.moonpay.com/web-sdk/v1/moonpay-web-sdk.min.js"></script>

    <MoonPayButton />
    </div>
  );
}
