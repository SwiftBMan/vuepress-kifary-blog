if(!self.define){let e,a={};const s=(s,d)=>(s=new URL(s+".js",d).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(d,f)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let r={};const c=e=>s(e,i),b={module:{uri:i},exports:r,require:c};a[i]=Promise.all(d.map((e=>b[e]||c(e)))).then((e=>(f(...e),r)))}}define(["./workbox-182abf76"],(function(e){"use strict";e.setCacheNameDetails({prefix:"Blog of Kifary"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper.cdc0426e.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/1.html.8f0a16bb.js",revision:"93e29d62a0be7b03ed04f63f425d9a72"},{url:"assets/1.html.9342dbc9.js",revision:"aee150cb6d7b9b61705be20483a266b9"},{url:"assets/1.html.ec34bbee.js",revision:"2ba51305b4d9e5c2032f992f817950a4"},{url:"assets/1.html.fbe9b171.js",revision:"9b25bc62ca451425a28d8b22b1c8d432"},{url:"assets/2.html.371c4d34.js",revision:"628a17eb3567310f2178d34aece0b376"},{url:"assets/2.html.4b7ca138.js",revision:"3ba993e4a5184ee87bf09f2d855da724"},{url:"assets/2.html.6b246b44.js",revision:"ce5b3ad3874752be63f5bc9597d1fce5"},{url:"assets/2.html.9aeebfa9.js",revision:"5e0ddde90881686ace16d93261708077"},{url:"assets/3.html.09e5901a.js",revision:"b4b9fb0f165ff0f76ba8cd96f6135396"},{url:"assets/3.html.1c136e0e.js",revision:"06c1d928beb39ee8c0f8c1d361abc613"},{url:"assets/3.html.a2a0f28d.js",revision:"721ea5459aeaa4ff42ed743ccf41c5dd"},{url:"assets/3.html.c10a8e0b.js",revision:"d2de68c9e33a692de36b37f20b408e29"},{url:"assets/4.html.d045535c.js",revision:"cee10389466e7ff3f25a4654e49e39f3"},{url:"assets/4.html.e1dfb90e.js",revision:"d3414351adbdc945ec6d82f5ce0df7e3"},{url:"assets/4.html.e21f31e4.js",revision:"b51baf7a10eb3a5abcc1d5fc6ba99430"},{url:"assets/4.html.e3b137a1.js",revision:"9f060db23f9b4b0b8b265da9e0809b75"},{url:"assets/404.html.1fa0f11d.js",revision:"bfa3e2405871408b52890b3120797aeb"},{url:"assets/404.html.3655ed67.js",revision:"d151e55d94588b95e9d9c03cb30e1d86"},{url:"assets/app.6a9da60b.js",revision:"f115c8625e61557afa9c10e72c4d4ae8"},{url:"assets/auto.5cdbeea9.js",revision:"8fd495ef85ea8266e0efc3145fa2b94a"},{url:"assets/cherry.html.059fddde.js",revision:"78a912e8fad81e6fe0bcbe345c2e3e22"},{url:"assets/cherry.html.7584d54d.js",revision:"873b2327b9aafe73129a507ef37e6e02"},{url:"assets/demo.html.5ed12f09.js",revision:"90358d5e740779ca76a07941bd9c943c"},{url:"assets/demo.html.84de7f6e.js",revision:"c5ebbb11c30b65362b83284969bbd7dd"},{url:"assets/disable.html.081c6638.js",revision:"f97ee5ab3dfce565027f36d1d5d195c6"},{url:"assets/disable.html.1d5c4d3b.js",revision:"1c4e8f53bc1389a5232f54d4f60e8981"},{url:"assets/dragonfruit.html.712712ae.js",revision:"8196370477d186d2662ba0ad63314315"},{url:"assets/dragonfruit.html.f481be2a.js",revision:"47200f412bdeb4787e597398f95b3151"},{url:"assets/encrypt.html.1531f2b9.js",revision:"9b2f9037e7255dc6d0fc7147f4197073"},{url:"assets/encrypt.html.50f38d47.js",revision:"e68a0bb283f91e9a4717ab10906ba2bd"},{url:"assets/flowchart.parse.ee90d7e0.js",revision:"a3bf05ec1dc83c91d060510bd82032b8"},{url:"assets/giscus.ded2036a.js",revision:"392635d8b4f5a440e4c3479328777254"},{url:"assets/highlight.esm.bbe50b4b.js",revision:"0949b348e0e7d26440159b7c6c417cad"},{url:"assets/index.cac02f97.js",revision:"1fef675066bb95ec3b3edbc16cbab87e"},{url:"assets/index.html.0034edda.js",revision:"9c6a73ccfb681429b277c9939e2b8fd4"},{url:"assets/index.html.0c74a2e0.js",revision:"56e59a4aaf15bafe499fbe3cdb9e4401"},{url:"assets/index.html.0e699cf3.js",revision:"3be7cac78b3083cc193e30000b18b44d"},{url:"assets/index.html.0fc5fd6b.js",revision:"44d427d470d6f21c6461e43049500935"},{url:"assets/index.html.1b9b541e.js",revision:"ad9c549430bd42b711aa15ecab3868bd"},{url:"assets/index.html.1c0abe81.js",revision:"6b8e8f44b2b25e960ff29a1bd8c3f87b"},{url:"assets/index.html.23744d2a.js",revision:"0bf64da08be7f2a59a3c3dcbd8ed7d74"},{url:"assets/index.html.256bddf0.js",revision:"653c59261752c322c7d73ce097c9352c"},{url:"assets/index.html.2cdad2ce.js",revision:"56e59a4aaf15bafe499fbe3cdb9e4401"},{url:"assets/index.html.2d5cd24a.js",revision:"56e59a4aaf15bafe499fbe3cdb9e4401"},{url:"assets/index.html.2f532727.js",revision:"2571e6a400b9785351b1de486fa78e29"},{url:"assets/index.html.3239b944.js",revision:"171a8628265e976b4dae53b08e129925"},{url:"assets/index.html.3360e3c0.js",revision:"b7e18aae2dee9c6292856f77cc6658dd"},{url:"assets/index.html.3ed9df20.js",revision:"9b9be21d9c14a5aa2a5acc002f6f269d"},{url:"assets/index.html.3ee97a28.js",revision:"e5eca46b07dcca631b37f5e444cbd832"},{url:"assets/index.html.4124ed68.js",revision:"56e59a4aaf15bafe499fbe3cdb9e4401"},{url:"assets/index.html.44d91a67.js",revision:"56e59a4aaf15bafe499fbe3cdb9e4401"},{url:"assets/index.html.450941d4.js",revision:"56e59a4aaf15bafe499fbe3cdb9e4401"},{url:"assets/index.html.4746865c.js",revision:"616039c1483509f967d6b8eeaef4c0e6"},{url:"assets/index.html.4b677fe6.js",revision:"56e59a4aaf15bafe499fbe3cdb9e4401"},{url:"assets/index.html.5162afe8.js",revision:"56e59a4aaf15bafe499fbe3cdb9e4401"},{url:"assets/index.html.565f8f0f.js",revision:"ebab0450807cef8c50190ee2746f21c7"},{url:"assets/index.html.60d801f7.js",revision:"a1ade6b3b356ab000d3ba790242ecee0"},{url:"assets/index.html.66f241ae.js",revision:"3fd4a08694571adbff324a716f4a65ef"},{url:"assets/index.html.6c7ae49d.js",revision:"af75ce60b9ee02b4889c64a6cfce851d"},{url:"assets/index.html.6ecd0364.js",revision:"913b137746d86c02397284503217bbf4"},{url:"assets/index.html.6f10cef8.js",revision:"56e59a4aaf15bafe499fbe3cdb9e4401"},{url:"assets/index.html.707da141.js",revision:"f03abb5ca8e69b9848eeb3f80cb5ecba"},{url:"assets/index.html.71ef0b6f.js",revision:"56e59a4aaf15bafe499fbe3cdb9e4401"},{url:"assets/index.html.75cdcf1e.js",revision:"56e59a4aaf15bafe499fbe3cdb9e4401"},{url:"assets/index.html.776fd4ad.js",revision:"48dfd5085fe84b5632a1ec1bdccc2033"},{url:"assets/index.html.7d78dce2.js",revision:"56e59a4aaf15bafe499fbe3cdb9e4401"},{url:"assets/index.html.7e1daf65.js",revision:"56e59a4aaf15bafe499fbe3cdb9e4401"},{url:"assets/index.html.884f1967.js",revision:"da09299972761b992c5b2476d8a16574"},{url:"assets/index.html.89878b4d.js",revision:"56e59a4aaf15bafe499fbe3cdb9e4401"},{url:"assets/index.html.89e532bf.js",revision:"56e59a4aaf15bafe499fbe3cdb9e4401"},{url:"assets/index.html.8dbda52e.js",revision:"5bfd89c929e080c5a69905aa6fc537a7"},{url:"assets/index.html.8e73e841.js",revision:"56e59a4aaf15bafe499fbe3cdb9e4401"},{url:"assets/index.html.90a8e0c4.js",revision:"56e59a4aaf15bafe499fbe3cdb9e4401"},{url:"assets/index.html.94c52f4a.js",revision:"ff954dc602a1a9ede18ad8d50e1a9abc"},{url:"assets/index.html.95e34e42.js",revision:"56e59a4aaf15bafe499fbe3cdb9e4401"},{url:"assets/index.html.9a7dec13.js",revision:"56e59a4aaf15bafe499fbe3cdb9e4401"},{url:"assets/index.html.9ef2dbac.js",revision:"56e59a4aaf15bafe499fbe3cdb9e4401"},{url:"assets/index.html.a1591f1a.js",revision:"0b6bdd8b93407354a768e6af6d4dc3ae"},{url:"assets/index.html.a81b763e.js",revision:"56e59a4aaf15bafe499fbe3cdb9e4401"},{url:"assets/index.html.a9e33e32.js",revision:"6c2aa0bcf20f1ea70fe4e30025ef662e"},{url:"assets/index.html.b029f370.js",revision:"56e59a4aaf15bafe499fbe3cdb9e4401"},{url:"assets/index.html.b4c14883.js",revision:"b8d4939adc5367fe225287d05578908e"},{url:"assets/index.html.b4cbe60f.js",revision:"56e59a4aaf15bafe499fbe3cdb9e4401"},{url:"assets/index.html.bab2a7e1.js",revision:"56e59a4aaf15bafe499fbe3cdb9e4401"},{url:"assets/index.html.bab35aa2.js",revision:"fadc2fd6eb5bb032d81741034bb94a60"},{url:"assets/index.html.c440fcf3.js",revision:"adb12d266ce6355965b9bf4eb44f9701"},{url:"assets/index.html.c6583bfb.js",revision:"56e59a4aaf15bafe499fbe3cdb9e4401"},{url:"assets/index.html.c70bccc5.js",revision:"1d2fc0ab3c0b1f904d39c0064d2023d1"},{url:"assets/index.html.c83481a6.js",revision:"eb8e42a07a4c18ad16470a98e49a6322"},{url:"assets/index.html.c8df2727.js",revision:"a87387831ed768b7f401e056ba42993e"},{url:"assets/index.html.df54abf7.js",revision:"56e59a4aaf15bafe499fbe3cdb9e4401"},{url:"assets/index.html.e1868964.js",revision:"56e59a4aaf15bafe499fbe3cdb9e4401"},{url:"assets/index.html.e45d69f3.js",revision:"56e59a4aaf15bafe499fbe3cdb9e4401"},{url:"assets/index.html.e5ea48eb.js",revision:"56e59a4aaf15bafe499fbe3cdb9e4401"},{url:"assets/index.html.e8b280e8.js",revision:"0c3ae4e4543ad7088f03ae334c0d5a5b"},{url:"assets/index.html.e93ab686.js",revision:"56e59a4aaf15bafe499fbe3cdb9e4401"},{url:"assets/index.html.f23a5a72.js",revision:"56e59a4aaf15bafe499fbe3cdb9e4401"},{url:"assets/index.html.f3c00dd3.js",revision:"56e59a4aaf15bafe499fbe3cdb9e4401"},{url:"assets/index.html.f7276108.js",revision:"95cdc4b544887c89bb283af2a7633669"},{url:"assets/index.html.fafc8d21.js",revision:"7a1d952b06b112b354bc12a2d74ffcf7"},{url:"assets/intro.html.315ab27e.js",revision:"b6c3eff08d51c7207f4f11f1dcbddb8f"},{url:"assets/intro.html.7b0d54e3.js",revision:"bea35ec01355f76d86139108c95e2d33"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/markdown.esm.28286a51.js",revision:"2782fb14c80757ca6a815363b87defce"},{url:"assets/markdown.html.7eb2f5eb.js",revision:"2985651f03c9707621ce2b9622780a00"},{url:"assets/markdown.html.f922320f.js",revision:"84f4985cd02ab8ac9e9d8d64c2f76410"},{url:"assets/math.esm.137065e8.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/mermaid.core.66820585.js",revision:"24fb0da20012598c2ef2cc9b30fde6fd"},{url:"assets/notes.esm.70909847.js",revision:"fbad6b0fa80d99a444266ec8836ab70c"},{url:"assets/page.html.000915d4.js",revision:"6a2c84d0f4eae0aa8e51ae59d2db175d"},{url:"assets/page.html.65ff1a10.js",revision:"e81ccc076552d5affdfa21ec6779b221"},{url:"assets/photoswipe.esm.185f7ee8.js",revision:"317c562e1a4f43455c48b2cc085d9520"},{url:"assets/reveal.esm.dd8bfc4c.js",revision:"2ae13f3f401294fee79646ed1f70afec"},{url:"assets/search.0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/search.esm.9d0cc719.js",revision:"7c1ff9e9285b9354b44c719f60e1cfd0"},{url:"assets/slides.html.6bf2ba46.js",revision:"b9c596fd2502a43bbba95bef7e9881c3"},{url:"assets/slides.html.95538cd4.js",revision:"d5de7a1fdd52b4a90b197ca3efa0ffe5"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/strawberry.html.59d61171.js",revision:"50ba8a91a7cb3808954d0429d47f896c"},{url:"assets/strawberry.html.ee84689d.js",revision:"bbc1af18ef6e4dfa2773f00283b3219d"},{url:"assets/style.d8c8c6cf.css",revision:"37d6b6c542a1464f9e7b5bf014ed3c25"},{url:"assets/tomato.html.a6afd049.js",revision:"2c2c03cbb13067df2226e90e594ca77b"},{url:"assets/tomato.html.c60ff6ca.js",revision:"180014f1c845a93e8c597e4d0b678072"},{url:"assets/vue-repl.e03b29d5.js",revision:"e63c7a87abd960cc3a0304f990a46ac5"},{url:"assets/VuePlayground.503b28d9.js",revision:"81dbd55570e9ae28edbc9c4cfc30dfb8"},{url:"assets/zoom.esm.e108c3af.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"404.html",revision:"1079307be765cb605b1f04a9d9cfe880"},{url:"article/index.html",revision:"205946fe89da39bca0f02c18e33487cb"},{url:"category/demo/index.html",revision:"d0a9f20819a42a08a2910fb390165c0c"},{url:"category/guide/index.html",revision:"f7d3887f092b04f15ab7126bd5abebae"},{url:"category/index.html",revision:"c58db6eb4848dd0abbe1b793c9ce5f89"},{url:"category/study/index.html",revision:"b839257ee25ecf89ed8be8ba978220c2"},{url:"category/樱桃/index.html",revision:"33314f9a4d230f28afcf10aa789033a7"},{url:"category/水果/index.html",revision:"1140507c8f9ba500081ad2886061b3dd"},{url:"category/火龙果/index.html",revision:"d8f17495fdc89571c0edec7544a387db"},{url:"category/苹果/index.html",revision:"e4226580195f023f0dc74983be90c25b"},{url:"category/草莓/index.html",revision:"56f2106e59739620a3d2e337b8cd5387"},{url:"category/蔬菜/index.html",revision:"728e866d15b4e8e378c8d9f1eee14035"},{url:"category/香蕉/index.html",revision:"4129791166f75e41c0176bf22112b910"},{url:"demo/demo.html",revision:"fcb28ac95fcd6521d834a2c6c80418cd"},{url:"demo/disable.html",revision:"d98dd3d0b185b9afab9b02b9352579c9"},{url:"demo/encrypt.html",revision:"59d2d6122cf58b63dcd9407cd4db10c2"},{url:"demo/index.html",revision:"d498ba0ff1e85bf02ab543dafbcd0d3a"},{url:"demo/markdown.html",revision:"f2a6a711cc081d38182021ab548ada34"},{url:"demo/page.html",revision:"e60277a1d70474b0514dac89255f3656"},{url:"encrypted/index.html",revision:"470fcdb4c6c3b8a2452d685fd0afd648"},{url:"index.html",revision:"62b40fa642aa1c4804da1e4b0dad672a"},{url:"intro.html",revision:"cb522a547a40af23272887f82a212a82"},{url:"markmap/markmap.html",revision:"cd4dad3327b316438866116cd2ad4f35"},{url:"posts/apple/1.html",revision:"30d5a617f37d1c013d3b6c8ce653abc9"},{url:"posts/apple/2.html",revision:"50cc394b25ab9a7f66861b9722c8ab79"},{url:"posts/apple/3.html",revision:"faa1d3460e0062ac15894cd4bb0ad3f2"},{url:"posts/apple/4.html",revision:"a210a6c0c0b030ca500edd6c22029757"},{url:"posts/banana/1.html",revision:"02e55a4fcafe85baced93f05d9d5ecc7"},{url:"posts/banana/2.html",revision:"87c0ef71635916c3fd0b4a5090cb124c"},{url:"posts/banana/3.html",revision:"e555c5e4c70ffbd8f2444185fcdefc75"},{url:"posts/banana/4.html",revision:"8ce7f5ade599f5c738bebe9449336764"},{url:"posts/cherry.html",revision:"8344c37ce9f1ff2eb85230e5297b235f"},{url:"posts/dragonfruit.html",revision:"e91f9d224aeee108ec63c46f772d9561"},{url:"posts/strawberry.html",revision:"c2fe647529356572f54accc662817879"},{url:"posts/tomato.html",revision:"ecacd563cc09495f54b4db0e257ab98a"},{url:"slide/index.html",revision:"660fb916c6ed75bb69a86764a76bf3bd"},{url:"slides.html",revision:"a90cfe2a0eb13d2cf3eee7619bdc81ac"},{url:"star/index.html",revision:"caa1567d1bfce052be4dae3555f80e54"},{url:"tag/demo/index.html",revision:"48ae4b210d403e75f48702f153428742"},{url:"tag/disable/index.html",revision:"60e57634d5379e283343bdb773a10a24"},{url:"tag/encryption/index.html",revision:"c0b731e151da6af576258a9775f994c3"},{url:"tag/guide/index.html",revision:"3d8d87546dc4677b18be27213919b9b3"},{url:"tag/index.html",revision:"6565f35fd2e0c09b58338d54093b575f"},{url:"tag/markdown/index.html",revision:"feaa92c19618b82caa7dd5eddee9f72b"},{url:"tag/page-config/index.html",revision:"c70aa962bf911741e48b23ceda21081d"},{url:"tag/study/index.html",revision:"616b3711753bac5e2dc5e402710ea923"},{url:"tag/圆/index.html",revision:"1c99201c7c54bb99a4e68191ae5f6353"},{url:"tag/大/index.html",revision:"b2fab3ac2d183a9d33abd6c72902f98d"},{url:"tag/小/index.html",revision:"31f212093ede4ea5ad7d5bb6ce31cc2c"},{url:"tag/弯曲的/index.html",revision:"07a6285e1cf4bea1410c4b5d63ed33ba"},{url:"tag/红/index.html",revision:"8364a7d1f2403a74d90f78f97db3a433"},{url:"tag/长/index.html",revision:"62a0cd754a87f069ed338803c1860f91"},{url:"tag/黄/index.html",revision:"74345b2046f4d1652bd2b8357f93e887"},{url:"timeline/index.html",revision:"b343438d0b3122100451a50e7087a672"},{url:"assets/hero.197a9d2d.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map