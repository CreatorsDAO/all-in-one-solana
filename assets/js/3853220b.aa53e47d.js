"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[2664],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>u});var a=t(67294);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,l=function(n,e){if(null==n)return{};var t,a,l={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(l[t]=n[t]);return l}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(l[t]=n[t])}return l}var o=a.createContext({}),p=function(n){var e=a.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},c=function(n){var e=p(n.components);return a.createElement(o.Provider,{value:e},n.children)},d="mdxType",f={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,l=n.mdxType,i=n.originalType,o=n.parentName,c=s(n,["components","mdxType","originalType","parentName"]),d=p(t),m=l,u=d["".concat(o,".").concat(m)]||d[m]||f[m]||i;return t?a.createElement(u,r(r({ref:e},c),{},{components:t})):a.createElement(u,r({ref:e},c))}));function u(n,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var i=t.length,r=new Array(i);r[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=n,s[d]="string"==typeof n?n:l,r[1]=s;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7712:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(87462),l=(t(67294),t(3905));const i={sidebar_position:38,sidebar_label:"\ud83d\udcf1 \u5728\u94b1\u5305\u4e2d\u5c55\u793aNFTs",sidebar_class_name:"green",tags:["displayings-nfts","solana","nft","metaplex","wallet"]},r="\ud83d\udcf1 \u5728\u94b1\u5305\u4e2d\u5c55\u793aNFTs",s={unversionedId:"module2/displayings-nfts-in-a-ui/displaying-nfts-from-a-wallet/README",id:"module2/displayings-nfts-in-a-ui/displaying-nfts-from-a-wallet/README",title:"\ud83d\udcf1 \u5728\u94b1\u5305\u4e2d\u5c55\u793aNFTs",description:"\u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u94f8\u9020\u4e86\u4e00\u4e2aNFT\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u8981\u63a2\u7d22\u5982\u4f55\u94f8\u9020\u4e00\u7cfb\u5217\u7684NFT\u3002\u6211\u4eec\u5c06\u4f7f\u7528Candy Machine\u6765\u5b8c\u6210\u8fd9\u9879\u4efb\u52a1\uff0c\u8fd9\u662f\u4e00\u6b3eSolana\u7a0b\u5e8f\uff0c\u80fd\u8ba9\u521b\u4f5c\u8005\u65b9\u4fbf\u5730\u5c06\u4ed6\u4eec\u7684\u8d44\u4ea7\u4e0a\u94fe\u3002\u867d\u7136\u8fd9\u4e0d\u662f\u521b\u5efa\u7cfb\u5217\u7684\u552f\u4e00\u65b9\u5f0f\uff0c\u4f46\u5728Solana\u4e0a\u5b83\u5df2\u7ecf\u6210\u4e3a\u6807\u51c6\uff0c\u56e0\u4e3a\u5b83\u5177\u6709\u8bf8\u5982\u9632\u673a\u5668\u4eba\u4fdd\u62a4\u548c\u5b89\u5168\u968f\u673a\u5316\u7b49\u6709\u7528\u7684\u529f\u80fd\u3002\u4f60\u61c2\u7684\uff0c\u6a21\u677f\u65f6\u95f4\u5230\u4e86\u3002\u7136\u800c\uff0c\u968f\u7740\u6211\u4eec\u6784\u5efa\u7684\u9879\u76ee\u8d8a\u6765\u8d8a\u590d\u6742\uff0c\u6211\u4eec\u7684\u6a21\u677f\u4e5f\u4f1a\u53d8\u5f97\u66f4\u5148\u8fdb\u3002\u8fd9\u6b21\u6211\u4eec\u5c06\u57fa\u4e8eSolana dApp\u811a\u624b\u67b6\u6784\u5efa\u4e00\u4e2a\u6a21\u677f\u3002\u4e0e\u4e4b\u524d\u7684\u6a21\u677f\u4e00\u6837\uff0c\u5b83\u662f\u4e00\u4e2a\u7531create-next-app\u521b\u5efa\u7684Next.js\u5e94\u7528\u7a0b\u5e8f\u3002\u4e0d\u8fc7\u8fd9\u6b21\uff0c\u5b83\u5177\u6709\u66f4\u591a\u529f\u80fd\u3002\u4e0d\u7528\u62c5\u5fc3\uff01\u6211\u4eec\u4f9d\u7136\u4f1a\u4f7f\u7528\u76f8\u540c\u7684\u5de5\u5177\u3002",source:"@site/docs/Solana-Co-Learn/module2/displayings-nfts-in-a-ui/displaying-nfts-from-a-wallet/README.md",sourceDirName:"module2/displayings-nfts-in-a-ui/displaying-nfts-from-a-wallet",slug:"/module2/displayings-nfts-in-a-ui/displaying-nfts-from-a-wallet/",permalink:"/all-in-one-solana/Solana-Co-Learn/module2/displayings-nfts-in-a-ui/displaying-nfts-from-a-wallet/",draft:!1,editUrl:"https://github.com/CreatorsDAO/all-in-one-solana/edit/main/docs/Solana-Co-Learn/module2/displayings-nfts-in-a-ui/displaying-nfts-from-a-wallet/README.md",tags:[{label:"displayings-nfts",permalink:"/all-in-one-solana/Solana-Co-Learn/tags/displayings-nfts"},{label:"solana",permalink:"/all-in-one-solana/Solana-Co-Learn/tags/solana"},{label:"nft",permalink:"/all-in-one-solana/Solana-Co-Learn/tags/nft"},{label:"metaplex",permalink:"/all-in-one-solana/Solana-Co-Learn/tags/metaplex"},{label:"wallet",permalink:"/all-in-one-solana/Solana-Co-Learn/tags/wallet"}],version:"current",sidebarPosition:38,frontMatter:{sidebar_position:38,sidebar_label:"\ud83d\udcf1 \u5728\u94b1\u5305\u4e2d\u5c55\u793aNFTs",sidebar_class_name:"green",tags:["displayings-nfts","solana","nft","metaplex","wallet"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc83 \u5c55\u793aNFTs",permalink:"/all-in-one-solana/Solana-Co-Learn/module2/displayings-nfts-in-a-ui/displaying-nfts/"},next:{title:"\ud83d\uddbc \u4ece\u7cd6\u679c\u673a\u5c55\u793aNFTs",permalink:"/all-in-one-solana/Solana-Co-Learn/module2/displayings-nfts-in-a-ui/displaying-nfts-from-a-candy-machine/"}},o={},p=[],c={toc:p},d="wrapper";function f(n){let{components:e,...i}=n;return(0,l.kt)(d,(0,a.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-\u5728\u94b1\u5305\u4e2d\u5c55\u793anfts"},"\ud83d\udcf1 \u5728\u94b1\u5305\u4e2d\u5c55\u793aNFTs"),(0,l.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u94f8\u9020\u4e86\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"NFT"),"\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u8981\u63a2\u7d22\u5982\u4f55\u94f8\u9020\u4e00\u7cfb\u5217\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"NFT"),"\u3002\u6211\u4eec\u5c06\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"Candy Machine"),"\u6765\u5b8c\u6210\u8fd9\u9879\u4efb\u52a1\uff0c\u8fd9\u662f\u4e00\u6b3e",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u7a0b\u5e8f\uff0c\u80fd\u8ba9\u521b\u4f5c\u8005\u65b9\u4fbf\u5730\u5c06\u4ed6\u4eec\u7684\u8d44\u4ea7\u4e0a\u94fe\u3002\u867d\u7136\u8fd9\u4e0d\u662f\u521b\u5efa\u7cfb\u5217\u7684\u552f\u4e00\u65b9\u5f0f\uff0c\u4f46\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u4e0a\u5b83\u5df2\u7ecf\u6210\u4e3a\u6807\u51c6\uff0c\u56e0\u4e3a\u5b83\u5177\u6709\u8bf8\u5982\u9632\u673a\u5668\u4eba\u4fdd\u62a4\u548c\u5b89\u5168\u968f\u673a\u5316\u7b49\u6709\u7528\u7684\u529f\u80fd\u3002\u4f60\u61c2\u7684\uff0c\u6a21\u677f\u65f6\u95f4\u5230\u4e86\u3002\u7136\u800c\uff0c\u968f\u7740\u6211\u4eec\u6784\u5efa\u7684\u9879\u76ee\u8d8a\u6765\u8d8a\u590d\u6742\uff0c\u6211\u4eec\u7684\u6a21\u677f\u4e5f\u4f1a\u53d8\u5f97\u66f4\u5148\u8fdb\u3002\u8fd9\u6b21\u6211\u4eec\u5c06\u57fa\u4e8e",(0,l.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/dapp-scaffold"},"Solana dApp\u811a\u624b\u67b6"),"\u6784\u5efa\u4e00\u4e2a\u6a21\u677f\u3002\u4e0e\u4e4b\u524d\u7684\u6a21\u677f\u4e00\u6837\uff0c\u5b83\u662f\u4e00\u4e2a\u7531",(0,l.kt)("inlineCode",{parentName:"p"},"create-next-app"),"\u521b\u5efa\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Next.js"),"\u5e94\u7528\u7a0b\u5e8f\u3002\u4e0d\u8fc7\u8fd9\u6b21\uff0c\u5b83\u5177\u6709\u66f4\u591a\u529f\u80fd\u3002\u4e0d\u7528\u62c5\u5fc3\uff01\u6211\u4eec\u4f9d\u7136\u4f1a\u4f7f\u7528\u76f8\u540c\u7684\u5de5\u5177\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/CreatorsDAO/solana-display-nfts-frontend\ncd solana-display-nfts-frontend\ngit checkout starter\nnpm install @metaplex-foundation/js@latest\nnpm i\nnpm run dev\n")),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"localhost:3000")," \u4e0a\uff0c\u4f60\u5e94\u8be5\u80fd\u770b\u5230\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(65232).Z,width:"1483",height:"911"})),(0,l.kt)("p",null,"\u201c\u5c55\u793a",(0,l.kt)("inlineCode",{parentName:"p"},"NFT"),"\u201d\u9875\u9762\u76ee\u524d\u8fd8\u6ca1\u6709\u5c55\u793a\u4efb\u4f55\u5185\u5bb9\u2014\u2014\u8fd9\u5c31\u662f\u4f60\u7684\u4efb\u52a1\u6240\u5728\u3002"),(0,l.kt)("p",null,"\u6253\u5f00",(0,l.kt)("inlineCode",{parentName:"p"},"src/components/FetchNFT.tsx"),"\uff0c\u8ba9\u6211\u4eec\u5f00\u59cb\u5427\u3002\u6211\u4eec\u4f1a\u4ece\u7ec4\u4ef6\u9876\u90e8\u7684Metaplex\u8bbe\u7f6e\u5f00\u59cb\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"export const FetchNft: FC = () => {\n  const [nftData, setNftData] = useState(null)\n\n  const { connection } = useConnection()\n  const wallet = useWallet()\n  const metaplex = Metaplex.make(connection).use(walletAdapterIdentity(wallet))\n\n  const fetchNfts = async () => {}\n\n  return <div></div>\n}\n")),(0,l.kt)("p",null,"\u770b\u4e0a\u53bb\u4f3c\u66fe\u76f8\u8bc6\u5427\u3002"),(0,l.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u6765\u586b\u5199",(0,l.kt)("inlineCode",{parentName:"p"},"fetchNfts"),"\u51fd\u6570\u3002\u6211\u4eec\u5c06\u4f7f\u7528\u4e4b\u524d\u770b\u5230\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"findAllByOwner"),"\u65b9\u6cd5\uff0c\u5e76\u501f\u52a9",(0,l.kt)("inlineCode",{parentName:"p"},"useWallet"),"\u94a9\u5b50\u6765\u83b7\u53d6\u94b1\u5305\u5730\u5740\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const fetchNfts = async () => {\n   if (!wallet.connected) {\n     return\n   }\n\n   // \u4e3a\u8fde\u63a5\u7684\u94b1\u5305\u83b7\u53d6NFTs\n   const nfts = await metaplex\n     .nfts()\n     .findAllByOwner({ owner: wallet.publicKey })\n\n   // \u4e3a\u6bcf\u4e2aNFT\u83b7\u53d6\u94fe\u4e0b\u5143\u6570\u636e\n   let nftData = []\n   for (let i = 0; i < nfts.length; i++) {\n     let fetchResult = await fetch(nfts[i].uri)\n     let json = await fetchResult.json()\n     nftData.push(json)\n   }\n\n   // \u8bbe\u7f6e\u72b6\u6001\n   setNftData(nftData)\n }\n")),(0,l.kt)("p",null,"\u7531\u4e8e\u6211\u4eec\u5e0c\u671b\u5728\u94b1\u5305\u66f4\u6539\u65f6\u66f4\u65b0\u5c55\u793a\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"NFTs"),"\uff0c\u56e0\u6b64\u6211\u4eec\u5c06\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"useEffect"),"\u51fd\u6570\u4e0b\u65b9\u6dfb\u52a0\u4e00\u4e2a\u94a9\u5b50\u6765\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"fetchNfts"),"\u51fd\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"export const FetchNft: FC = () => {\n    ...\n\n  const fetchNfts = async () => {\n        ...\n  }\n\n  // \u5f53\u8fde\u63a5\u7684\u94b1\u5305\u6539\u53d8\u65f6\u83b7\u53d6nfts\n  useEffect(() => {\n    fetchNfts()\n  }, [wallet])\n\n  return <div></div>\n}\n")),(0,l.kt)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u9700\u8981\u66f4\u65b0",(0,l.kt)("inlineCode",{parentName:"p"},"return"),"\u8bed\u53e5\u4ee5\u5c55\u793a",(0,l.kt)("inlineCode",{parentName:"p"},"NFTs"),"\u3002\u6211\u4eec\u5c06\u4f7f\u7528\u4e4b\u524d\u521b\u5efa\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"nftData"),"\u72b6\u6001\u53d8\u91cf\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"return (\n    <div>\n      {nftData && (\n        <div className={styles.gridNFT}>\n          {nftData.map((nft) => (\n            <div>\n              <ul>{nft.name}</ul>\n              <img src={nft.image} />\n            </div>\n          ))}\n        </div>\n      )}\n    </div>\n  )\n")),(0,l.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u6211\u4eec\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"NFT"),"\u4e86\uff01\ud83c\udf89 \u8fd9\u5c31\u662f\u6211\u7684\u94b1\u5305\u7684\u6837\u5b50 \ud83d\ude06"),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(66272).Z,width:"1259",height:"696"})),(0,l.kt)("p",null,"\u56de\u987e\u8fc7\u53bb\u7684\u65e5\u5b50\uff0c\u90a3\u65f6\u6211\u4e0d\u5f97\u4e0d\u624b\u52a8\u5b8c\u6210\u6240\u6709\u8fd9\u4e9b\u5de5\u4f5c\uff0c\u5e76\u4e14\u6211\u4e00\u76f4\u53d7\u5230RPC\u7684\u901f\u7387\u9650\u5236\uff0c\u6240\u4ee5\u8bf7\u82b1\u4e00\u4e9b\u65f6\u95f4\u611f\u8c22",(0,l.kt)("inlineCode",{parentName:"p"},"Metaplex"),"\u7684\u5f00\u53d1\u4eba\u5458\u4e3a\u6211\u4eec\u5e26\u6765\u4e86\u8fd9\u4e2a\u7cbe\u5f69\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"SDK"),"\uff01"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"nftData"),"\u4e0a\u73a9\u4e00\u4e0b\u3002\u5c06\u5176\u8bb0\u5f55\u5230\u63a7\u5236\u53f0\uff0c\u5e76\u5c1d\u8bd5\u663e\u793a\u5176\u4ed6\u503c\uff0c\u5982\u7b26\u53f7\u6216\u63cf\u8ff0\uff01\u4e5f\u8bb8\u4f60\u8fd8\u53ef\u4ee5\u6dfb\u52a0\u4e00\u4e2a\u8fc7\u6ee4\u5668\uff0c\u8ba9\u7528\u6237\u53ea\u80fd\u663e\u793a\u7279\u5b9a\u6536\u85cf\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"NFT"),"\uff1f"))}f.isMDXComponent=!0},65232:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/display-from-wallet-ab771e880d8a89ce190fc9d6c1bc8987.png"},66272:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/nfts-wallet-9b0d4678ead1e83ec711cd59e17325e0.png"}}]);