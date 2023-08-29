"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[2769],{3905:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>k});var l=a(67294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,l,t=function(e,n){if(null==e)return{};var a,l,t={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var i=l.createContext({}),s=function(e){var n=l.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},m=function(e){var n=s(e.components);return l.createElement(i.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},u=l.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(a),u=t,k=d["".concat(i,".").concat(u)]||d[u]||c[u]||o;return a?l.createElement(k,r(r({ref:n},m),{},{components:a})):l.createElement(k,r({ref:n},m))}));function k(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,r=new Array(o);r[0]=u;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[d]="string"==typeof e?e:t,r[1]=p;for(var s=2;s<o;s++)r[s]=a[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},19435:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var l=a(87462),t=(a(67294),a(3905));const o={sidebar_position:8,sidebar_label:"Native Solana\u5408\u7ea6\u5b9e\u73b0 - hello, World",sidebar_class_name:"green",tags:["native-program-hello","solana","program"]},r="Native Solana\u5408\u7ea6\u5b9e\u73b0 - hello, World",p={unversionedId:"module1/local_program_development/native_program_hello",id:"module1/local_program_development/native_program_hello",title:"Native Solana\u5408\u7ea6\u5b9e\u73b0 - hello, World",description:"\u8ba9\u6211\u4eec\u901a\u8fc7\u6784\u5efa\u548c\u90e8\u7f72 Hello World! \u7a0b\u5e8f\u6765\u8fdb\u884c\u7ec3\u4e60\u3002",source:"@site/docs/Solana-Co-Learn/module1/local_program_development/native_program_hello.md",sourceDirName:"module1/local_program_development",slug:"/module1/local_program_development/native_program_hello",permalink:"/all-in-one-solana/Solana-Co-Learn/module1/local_program_development/native_program_hello",draft:!1,editUrl:"https://github.com/CreatorsDAO/all-in-one-solana/edit/main/docs/Solana-Co-Learn/module1/local_program_development/native_program_hello.md",tags:[{label:"native-program-hello",permalink:"/all-in-one-solana/Solana-Co-Learn/tags/native-program-hello"},{label:"solana",permalink:"/all-in-one-solana/Solana-Co-Learn/tags/solana"},{label:"program",permalink:"/all-in-one-solana/Solana-Co-Learn/tags/program"}],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"Native Solana\u5408\u7ea6\u5b9e\u73b0 - hello, World",sidebar_class_name:"green",tags:["native-program-hello","solana","program"]},sidebar:"tutorialSidebar",previous:{title:"\u672c\u5730\u5f00\u53d1\u73af\u5883\u914d\u7f6e",permalink:"/all-in-one-solana/Solana-Co-Learn/module1/local_program_development/"},next:{title:"Anchor \u5408\u7ea6\u6846\u67b6\u5b9e\u73b0 - hello, World \ud83c\udf0d With PDA",permalink:"/all-in-one-solana/Solana-Co-Learn/module1/local_program_development/anchor_program_hello"}},i={},s=[{value:"1. \u521b\u5efa\u4e00\u4e2a\u65b0\u7684Rust\u9879\u76ee",id:"1-\u521b\u5efa\u4e00\u4e2a\u65b0\u7684rust\u9879\u76ee",level:2},{value:"2. \u7f16\u5199\u4f60\u7684\u7a0b\u5e8f",id:"2-\u7f16\u5199\u4f60\u7684\u7a0b\u5e8f",level:2},{value:"3. \u8fd0\u884c\u672c\u5730\u6d4b\u8bd5\u9a8c\u8bc1\u5668",id:"3-\u8fd0\u884c\u672c\u5730\u6d4b\u8bd5\u9a8c\u8bc1\u5668",level:2},{value:"4. \u6784\u5efa\u548c\u90e8\u7f72",id:"4-\u6784\u5efa\u548c\u90e8\u7f72",level:2},{value:"5. \u67e5\u770b\u7a0b\u5e8f\u65e5\u5fd7",id:"5-\u67e5\u770b\u7a0b\u5e8f\u65e5\u5fd7",level:2}],m={toc:s},d="wrapper";function c(e){let{components:n,...a}=e;return(0,t.kt)(d,(0,l.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"native-solana\u5408\u7ea6\u5b9e\u73b0---hello-world"},"Native Solana\u5408\u7ea6\u5b9e\u73b0 - hello, World"),(0,t.kt)("p",null,"\u8ba9\u6211\u4eec\u901a\u8fc7\u6784\u5efa\u548c\u90e8\u7f72 ",(0,t.kt)("inlineCode",{parentName:"p"},"Hello World!")," \u7a0b\u5e8f\u6765\u8fdb\u884c\u7ec3\u4e60\u3002"),(0,t.kt)("p",null,"\u6211\u4eec\u5c06\u5728\u672c\u5730\u5b8c\u6210\u6240\u6709\u64cd\u4f5c\uff0c\u5305\u62ec\u90e8\u7f72\u5230\u672c\u5730\u6d4b\u8bd5\u9a8c\u8bc1\u5668\u3002\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u4f60\u5df2\u7ecf\u5b89\u88c5\u4e86",(0,t.kt)("inlineCode",{parentName:"p"},"Rust"),"\u548c",(0,t.kt)("inlineCode",{parentName:"p"},"Solana CLI"),"\u3002\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u5b89\u88c5\uff0c\u8bf7\u53c2\u8003\u6982\u8ff0\u4e2d\u7684\u8bf4\u660e\u8fdb\u884c\u8bbe\u7f6e\u3002"),(0,t.kt)("h2",{id:"1-\u521b\u5efa\u4e00\u4e2a\u65b0\u7684rust\u9879\u76ee"},"1. \u521b\u5efa\u4e00\u4e2a\u65b0\u7684Rust\u9879\u76ee"),(0,t.kt)("p",null,"\u8ba9\u6211\u4eec\u4ece\u521b\u5efa\u4e00\u4e2a\u65b0\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"Rust"),"\u9879\u76ee\u5f00\u59cb\u3002\u8fd0\u884c\u4e0b\u9762\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"cargo new --lib"),"\u547d\u4ee4\u3002\u968f\u610f\u7528\u4f60\u81ea\u5df1\u7684\u76ee\u5f55\u540d\u66ff\u6362\u5b83\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"cargo new --lib solana-hello-world-local\n")),(0,t.kt)("p",null,"\u8bb0\u5f97\u66f4\u65b0 ",(0,t.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," \u6587\u4ef6\uff0c\u5c06 ",(0,t.kt)("inlineCode",{parentName:"p"},"solana-program")," \u6dfb\u52a0\u4e3a\u4f9d\u8d56\u9879\uff0c\u5e76\u68c0\u67e5 ",(0,t.kt)("inlineCode",{parentName:"p"},"crate-type")," \u662f\u5426\u5df2\u7ecf\u5b58\u5728\u3002"),(0,t.kt)("p",null,"\u8fd9\u91cc\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"solana-program")," \u53ef\u4ee5\u901a\u8fc7\u5728\u547d\u4ee4\u884c\u6267\u884c",(0,t.kt)("inlineCode",{parentName:"p"},"cargo add solana-program"),"\u6dfb\u52a0\u5230\u4f9d\u8d56\u7ba1\u7406\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-toml"},'[package]\nname = "solana-hello-world-local"\nversion = "0.1.0"\nedition = "2021"\n\n[dependencies]\nsolana-program = "1.16.10"\n\n[lib]\ncrate-type = ["cdylib", "lib"]\n')),(0,t.kt)("admonition",{type:"caution"},(0,t.kt)("p",{parentName:"admonition"},"\u9700\u8981\u6ce8\u610f\u8fd9\u91cc\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"solana-program"),"\u7684\u7248\u672c\uff0c\u4e0d\u8981\u76f4\u63a5",(0,t.kt)("inlineCode",{parentName:"p"},"copy"),"\u8fd9\u4e2a",(0,t.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"\u7684\u914d\u7f6e\uff0c\u56e0\u4e3a",(0,t.kt)("inlineCode",{parentName:"p"},"solana-program"),"\u7684\u7248\u672c\u4e5f\u662f\u5728\u66f4\u65b0\u7684\uff0c\u53ef\u80fd\u4ee5\u540e\u76f4\u63a5\u4f7f\u7528\u8fd9\u91cc\u7684\u4f1a\u51fa\u95ee\u9898\u3002\u5efa\u8bae\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"cargo add solana-program"),"\u6dfb\u52a0\u3002")),(0,t.kt)("h2",{id:"2-\u7f16\u5199\u4f60\u7684\u7a0b\u5e8f"},"2. \u7f16\u5199\u4f60\u7684\u7a0b\u5e8f"),(0,t.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u4f7f\u7528\u4e0b\u9762\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"Hello World!")," \u7a0b\u5e8f\u66f4\u65b0",(0,t.kt)("inlineCode",{parentName:"p"},"lib.rs"),"\u3002\u5f53\u7a0b\u5e8f\u88ab\u8c03\u7528\u65f6\uff0c\u8be5\u7a0b\u5e8f\u4f1a\u7b80\u5355\u5730\u5c06",(0,t.kt)("inlineCode",{parentName:"p"},"Hello, world!")," \u6253\u5370\u5230\u7a0b\u5e8f\u65e5\u5fd7\u4e2d\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rust"},'use solana_program::{\n    account_info::AccountInfo,\n    entrypoint,\n    entrypoint::ProgramResult,\n    pubkey::Pubkey,\n    msg\n};\n\nentrypoint!(process_instruction);\n\npub fn process_instruction(\n    program_id: &Pubkey,\n    accounts: &[AccountInfo],\n    instruction_data: &[u8]\n) -> ProgramResult{\n    msg!("Hello, world!");\n\n    Ok(())\n}\n')),(0,t.kt)("h2",{id:"3-\u8fd0\u884c\u672c\u5730\u6d4b\u8bd5\u9a8c\u8bc1\u5668"},"3. \u8fd0\u884c\u672c\u5730\u6d4b\u8bd5\u9a8c\u8bc1\u5668"),(0,t.kt)("p",null,"\u5728\u7f16\u5199\u597d\u4f60\u7684\u7a0b\u5e8f\u4e4b\u540e\uff0c\u8ba9\u6211\u4eec\u786e\u4fdd\u6211\u4eec\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"Solana CLI"),"\u914d\u7f6e\u6307\u5411\u672c\u5730\u4e3b\u673a\uff0c\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"solana config set --url"),"\u547d\u4ee4\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"solana config set --url localhost\n")),(0,t.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"solana config get"),"\u547d\u4ee4\u68c0\u67e5",(0,t.kt)("inlineCode",{parentName:"p"},"Solana CLI"),"\u914d\u7f6e\u662f\u5426\u5df2\u66f4\u65b0\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"solana config get\n")),(0,t.kt)("p",null,"\u6700\u540e\uff0c\u8fd0\u884c\u672c\u5730\u6d4b\u8bd5\u9a8c\u8bc1\u5668\u3002\u5728\u4e00\u4e2a\u5355\u72ec\u7684\u7ec8\u7aef\u7a97\u53e3\u4e2d\u8fd0\u884c",(0,t.kt)("inlineCode",{parentName:"p"},"solana-test-validator"),"\u547d\u4ee4\u3002\u53ea\u6709\u5f53\u6211\u4eec\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"RPC URL"),"\u8bbe\u7f6e\u4e3a",(0,t.kt)("inlineCode",{parentName:"p"},"localhost"),"\u65f6\u624d\u9700\u8981\u8fd9\u6837\u505a\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"solana-test-validator\n")),(0,t.kt)("admonition",{type:"caution"},(0,t.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u4e00\u5b9a\u8981\u6ce8\u610f\u26a0\ufe0f\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"solana-test-validator")," \u8fd9\u4e2a\u547d\u4ee4\u542f\u52a8\u7684\u662fsolana\u7684\u672c\u5730\u6d4b\u8bd5\u9a8c\u8bc1\u5668\u3002")),(0,t.kt)("h2",{id:"4-\u6784\u5efa\u548c\u90e8\u7f72"},"4. \u6784\u5efa\u548c\u90e8\u7f72"),(0,t.kt)("p",null,"\u6211\u4eec\u73b0\u5728\u51c6\u5907\u597d\u6784\u5efa\u548c\u90e8\u7f72\u6211\u4eec\u7684\u7a0b\u5e8f\u4e86\u3002\u901a\u8fc7\u8fd0\u884c ",(0,t.kt)("inlineCode",{parentName:"p"},"cargo build-sbf")," \u547d\u4ee4\u6765\u6784\u5efa\u7a0b\u5e8f\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build-sbf\n")),(0,t.kt)("p",null,"\u73b0\u5728\u8ba9\u6211\u4eec\u90e8\u7f72\u6211\u4eec\u7684\u7a0b\u5e8f\u3002\u90e8\u7f72\u4ece",(0,t.kt)("inlineCode",{parentName:"p"},"cargo build-sbf"),"\u547d\u4ee4\u7684\u8f93\u51fa",(0,t.kt)("inlineCode",{parentName:"p"},"target/deploy/*.so"),"\u6587\u4ef6\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"ls --tree target/ --depth 2\n\uf115 target\n\u251c\u2500\u2500 \ue60b .rustc_info.json\n\u251c\u2500\u2500 \uf016 CACHEDIR.TAG\n\u251c\u2500\u2500 \uf115 debug\n\u2502   \u251c\u2500\u2500 \uf016 .cargo-lock\n\u2502   \u251c\u2500\u2500 \uf115 .fingerprint\n\u2502   \u251c\u2500\u2500 \uf115 build\n\u2502   \u251c\u2500\u2500 \uf115 deps\n\u2502   \u251c\u2500\u2500 \uf115 examples\n\u2502   \u2514\u2500\u2500 \uf115 incremental\n\u251c\u2500\u2500 \uf115 deploy\n\u2502   \u251c\u2500\u2500 \ue60b solana_hello_world_local-keypair.json\n\u2502   \u2514\u2500\u2500 \ue624 solana_hello_world_local.so\n\u251c\u2500\u2500 \uf115 release\n\u2502   \u251c\u2500\u2500 \uf016 .cargo-lock\n\u2502   \u251c\u2500\u2500 \uf115 .fingerprint\n\u2502   \u251c\u2500\u2500 \uf115 build\n\u2502   \u251c\u2500\u2500 \uf115 deps\n\u2502   \u251c\u2500\u2500 \uf115 examples\n\u2502   \u2514\u2500\u2500 \uf115 incremental\n\u2514\u2500\u2500 \uf115 sbf-solana-solana\n    \u251c\u2500\u2500 \uf016 CACHEDIR.TAG\n    \u2514\u2500\u2500 \uf115 release\n")),(0,t.kt)("p",null,"\u8fd9\u91cc\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"Path")," \u662f\u4e0a\u9762\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"target/deploy/*.so"),"\u6587\u4ef6\u7684\u8def\u5f84\u3002\u8fd0\u884c",(0,t.kt)("inlineCode",{parentName:"p"},"solana program deploy"),"\u547d\u4ee4\u6765\u90e8\u7f72\u4f60\u7684\u7a0b\u5e8f\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"solana program deploy <PATH>\n")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"Solana"),"\u7a0b\u5e8f\u90e8\u7f72\u5c06\u8f93\u51fa\u4f60\u7684\u7a0b\u5e8f\u7684\u7a0b\u5e8f",(0,t.kt)("inlineCode",{parentName:"p"},"ID"),"\u3002\u4f60\u73b0\u5728\u53ef\u4ee5\u5728",(0,t.kt)("a",{parentName:"p",href:"https://explorer.solana.com/?cluster=custom"},"Solana Explorer"),"\u4e0a\u67e5\u627e\u5df2\u90e8\u7f72\u7684\u7a0b\u5e8f\uff08\u5bf9\u4e8e",(0,t.kt)("inlineCode",{parentName:"p"},"Localhost"),"\uff0c\u8bf7\u9009\u62e9\u201c\u81ea\u5b9a\u4e49",(0,t.kt)("inlineCode",{parentName:"p"},"RPC URL"),"\u201d\u4f5c\u4e3a\u96c6\u7fa4\uff09\u3002"),(0,t.kt)("h2",{id:"5-\u67e5\u770b\u7a0b\u5e8f\u65e5\u5fd7"},"5. \u67e5\u770b\u7a0b\u5e8f\u65e5\u5fd7"),(0,t.kt)("p",null,"\u5728\u6211\u4eec\u8c03\u7528\u7a0b\u5e8f\u4e4b\u524d\uff0c\u6253\u5f00\u4e00\u4e2a\u5355\u72ec\u7684\u7ec8\u7aef\u5e76\u8fd0\u884c",(0,t.kt)("inlineCode",{parentName:"p"},"solana logs"),"\u547d\u4ee4\u3002\u8fd9\u5c06\u5141\u8bb8\u6211\u4eec\u5728\u7ec8\u7aef\u4e2d\u67e5\u770b\u7a0b\u5e8f\u65e5\u5fd7\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"solana logs <PROGRAM_ID>\n")),(0,t.kt)("p",null,"\u5728\u6d4b\u8bd5\u9a8c\u8bc1\u5668\u4ecd\u5728\u8fd0\u884c\u65f6\uff0c\u5c1d\u8bd5\u4f7f\u7528",(0,t.kt)("a",{parentName:"p",href:"https://github.com/CreatorsDAO/native-hello/tree/main/hello-frontend"},"\u6b64\u5904"),"\u7684\u5ba2\u6237\u7aef\u811a\u672c\u8c03\u7528\u4f60\u7684\u7a0b\u5e8f\u3002"),(0,t.kt)("p",null,"\u5728",(0,t.kt)("inlineCode",{parentName:"p"},"index.ts"),"\u4e2d\u7528\u521a\u521a\u90e8\u7f72\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"PROGRAM ID"),"\u66ff\u6362\u6389\u539f\u6765\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"PROGRAM ID"),"\uff0c\u7136\u540e\u8fd0\u884c",(0,t.kt)("inlineCode",{parentName:"p"},"npm install"),"\uff0c\u63a5\u7740\u8fd0\u884c",(0,t.kt)("inlineCode",{parentName:"p"},"npm start"),"\u3002\u8fd9\u5c06\u8fd4\u56de\u4e00\u4e2a",(0,t.kt)("inlineCode",{parentName:"p"},"Solana Explorer"),"\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"URL"),"\u3002\u5c06URL\u590d\u5236\u5230\u6d4f\u89c8\u5668\u4e2d\uff0c\u5728",(0,t.kt)("inlineCode",{parentName:"p"},"Solana Explorer"),"\u4e0a\u67e5\u627e\u8be5\u4ea4\u6613\uff0c\u5e76\u68c0\u67e5\u7a0b\u5e8f\u65e5\u5fd7\u4e2d\u662f\u5426\u6253\u5370\u4e86",(0,t.kt)("inlineCode",{parentName:"p"},"Hello, world!"),"\u3002\u6216\u8005\uff0c\u4f60\u53ef\u4ee5\u5728\u8fd0\u884c",(0,t.kt)("inlineCode",{parentName:"p"},"solana logs"),"\u547d\u4ee4\u7684\u7ec8\u7aef\u4e2d\u67e5\u770b\u7a0b\u5e8f\u65e5\u5fd7\u3002"),(0,t.kt)("p",null,"\u5c31\u662f\u8fd9\u6837\uff01\u4f60\u521a\u521a\u5728\u672c\u5730\u5f00\u53d1\u73af\u5883\u4e2d\u521b\u5efa\u5e76\u90e8\u7f72\u4e86\u4f60\u7684\u7b2c\u4e00\u4e2a\u7a0b\u5e8f\u3002"))}c.isMDXComponent=!0}}]);