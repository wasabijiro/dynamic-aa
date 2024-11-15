"use client";

import React, { useEffect } from 'react';

interface MoonPayWebSdk {
  init: (options: {
      flow: string;
      environment: string;
      variant: string;
      params: {
          apiKey: string;
          baseCurrencyCode: string;
          baseCurrencyAmount: string;
          defaultCurrencyCode: string;
      };
  }) => { show: () => void };
}

declare global {
  interface Window {
      MoonPayWebSdk: MoonPayWebSdk;
  }
}


const MoonPayButton: React.FC = () => {
    useEffect(() => {
        // MoonPay SDKの初期化
        const moonpaySdk = window.MoonPayWebSdk.init({
            flow: "buy",
            environment: "sandbox",
            variant: "overlay",
            params: {
                apiKey: "pk_test_jAvItRNgJo6FVW6BEGaoHQYb6LXi4yQg", // MoonPayの公開APIキーに置き換えてください
                baseCurrencyCode: "usd",
                baseCurrencyAmount: "30",
                defaultCurrencyCode: "eth"
            }
        });

        // ボタンが押されたときにウィジェットを開く関数
        const handleButtonClick = () => {
            moonpaySdk.show();
        };

        // イベントリスナーを追加
        const button = document.getElementById('moonpayButton');
        button?.addEventListener('click', handleButtonClick);

        // クリーンアップ
        return () => {
            button?.removeEventListener('click', handleButtonClick);
        };
    }, []);

    return (
        <div className="container">
            <button id="moonpayButton">Open MoonPay</button>
        </div>
    );
};

export default MoonPayButton;