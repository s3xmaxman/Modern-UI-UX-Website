import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
    yourlogo,
  } from "../assets";

  export const navigation = [
    {
      id: "0",
      title: "機能",
      url: "#features",
    },
    {
      id: "1",
      title: "価格",
      url: "#pricing",
    },
    {
      id: "2",
      title: "使い方",
      url: "#how-to-use",
    },
    {
      id: "3",
      title: "ロードマップ",
      url: "#roadmap",
    },
    {
      id: "4",
      title: "新規アカウント",
      url: "#signup",
      onlyMobile: true,
    },
    {
      id: "5",
      title: "ログイン",
      url: "#login",
      onlyMobile: true,
    },
  ];

  export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

  export const notificationImages = [notification4, notification3, notification2];

  export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

  export const brainwaveServices = [
    "写真生成",
    "写真強化",
    "シームレスな統合",
  ];

  export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
  ];

  export const roadmap = [
    {
      id: "0",
      title: "音声認識",
      text: "チャットボットが音声コマンドを理解して応答できるようにし、ユーザーがハンズフリーでアプリと対話しやすくする。",
      date: "2023年5月",
      status: "done",
      imageUrl: roadmap1,
      colorful: true,
    },
    {
      id: "1",
      title: "ゲーム化",
      text: "バッジやリーダーボードなどのゲーム的要素を追加し、ユーザーがチャットボットとより頻繁に関わるようインセンティブを与える。",
      date: "2023年5月",
      status: "progress",
      imageUrl: roadmap2,
    },
    {
      id: "2",
      title: "チャットボットのカスタマイズ",
      text: "ユーザーがチャットボットの外観や振る舞いをカスタマイズできるようにし、より魅力的で楽しい対話体験を提供する。",
      date: "2023年5月",
      status: "done",
      imageUrl: roadmap3,
    },
    {
      id: "3",
      title: "APIとの統合",
      text: "チャットボットが天気APIやニュースAPIなどの外部データソースにアクセスできるようにし、より関連性の高い推薦を行えるようにする。",
      date: "2023年5月",
      status: "progress",
      imageUrl: roadmap4,
    },
  ];

  export const collabText =
    "スマートな自動化と最高の セキュリティを備えた完璧なソリューションです。より賢く作業したいチームに最適です。";

  export const collabContent = [
    {
      id: "0",
      title: "シームレスな統合",
      text: collabText,
    },
    {
      id: "1",
      title: "スマートな自動化",
    },
    {
      id: "2",
      title: "最高のセキュリティ",
    },
  ];

  export const collabApps = [
    {
      id: "0",
      title: "Figma",
      icon: figma,
      width: 26,
      height: 36,
    },
    {
      id: "1",
      title: "Notion",
      icon: notion,
      width: 34,
      height: 36,
    },
    {
      id: "2",
      title: "Discord",
      icon: discord,
      width: 36,
      height: 28,
    },
    {
      id: "3",
      title: "Slack",
      icon: slack,
      width: 34,
      height: 35,
    },
    {
      id: "4",
      title: "Photoshop",
      icon: photoshop,
      width: 34,
      height: 34,
    },
    {
      id: "5",
      title: "Protopie",
      icon: protopie,
      width: 34,
      height: 34,
    },
    {
      id: "6",
      title: "Framer",
      icon: framer,
      width: 26,
      height: 34,
    },
    {
      id: "7",
      title: "Raindrop",
      icon: raindrop,
      width: 38,
      height: 32,
    },
  ];

  export const pricing = [
    {
      id: "0",
      title: "ベーシック",
      description: "AIチャットボット、パーソナライズされた推薦",
      price: "0",
      features: [
        "質問を理解できるAIチャットボット",
        "あなたの好みに基づいたパーソナライズされた推薦",
        "無料でアプリと機能を探索できる",
      ],
    },
    {
      id: "1",
      title: "プレミアム",
      description: "高度なAIチャットボット、優先サポート、分析ダッシュボード",
      price: "9.99",
      features: [
        "複雑な質問を理解できる高度なAIチャットボット",
        "対話を追跡できる分析ダッシュボード",
        "問題を迅速に解決するための優先サポート",
      ],
    },
    {
      id: "2",
      title: "エンタープライズ",
      description: "カスタムAIチャットボット、高度な分析、専任アカウント",
      price: null,
      features: [
        "質問を理解できるAIチャットボット",
        "あなたの好みに基づいたパーソナライズされた推薦",
        "無料でアプリと機能を探索できる",
      ],
    },
  ];

  export const benefits = [
    {
      id: "0",
      title: "何でも質問できる",
      text: "ユーザーが複数のソースを探す必要なく、素早く質問への回答を見つけられるようにします。",
      backgroundUrl:  "./src/assets/benefits/card-1.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
    },
    {
      id: "1",
      title: "日々向上",
      text: "アプリは自然言語処理を使ってユーザーの質問を理解し、正確かつ関連性の高い回答を提供します。",
      backgroundUrl: "./src/assets/benefits/card-2.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "2",
      title: "どこからでも接続",
      text: "どのデバイスからでもAIチャットボットに接続できるため、利便性が高くアクセスしやすくなります。",
      backgroundUrl: "./src/assets/benefits/card-3.svg",
      iconUrl: benefitIcon3,
      imageUrl: benefitImage2,
    },
    {
      id: "3",
      title: "高速レスポンス",
      text: "ユーザーが複数のソースを探す必要なく、素早く質問への回答を見つけられるようにします。",
      backgroundUrl: "./src/assets/benefits/card-4.svg",
      iconUrl: benefitIcon4,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "4",
      title: "何でも質問できる",
      text: "ユーザーが複数のソースを探す必要なく、素早く質問への回答を見つけられるようにします。",
      backgroundUrl: "./src/assets/benefits/card-5.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
    },
    {
      id: "5",
      title: "日々向上",
      text: "アプリは自然言語処理を使ってユーザーの質問を理解し、正確かつ関連性の高い回答を提供します。",
      backgroundUrl: "./src/assets/benefits/card-6.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
    },
  ];

  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discordBlack,
      url: "#",
    },
    {
      id: "1",
      title: "Twitter",
      iconUrl: twitter,
      url: "#",
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "#",
    },
    {
      id: "3",
      title: "Telegram",
      iconUrl: telegram,
      url: "#",
    },
    {
      id: "4",
      title: "Facebook",
      iconUrl: facebook,
      url: "#",
    },
  ];