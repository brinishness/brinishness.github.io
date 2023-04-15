import{_ as l,X as i,Y as a,a1 as c,a3 as r,Z as n,$ as e,F as d}from"./framework-9c5c00c4.js";const t={},u=n("h1",{id:"react",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#react","aria-hidden":"true"},"#"),e(" react")],-1),m=n("div",{class:"language-babel line-numbers-mode","data-ext":"babel"},[n("pre",{class:"language-babel"},[n("code",null,`// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src="/goutou.svg" className="App-logo" alt="logo" />
//           <h2>欢迎来到菜鸟教程</h2>
//         </div>
//         <p className="App-intro">
//           你可以在 <code>src/App.js</code> 文件中修改。
//         </p>
//       </div>
//     );
//   }
// }
// 
// export default App;
// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { message: "强大" };
//   }
//   handler() {
//     this.setState((state) => ({
//       message: \`十分\${state.message}\`,
//     }));
//   }
//   render() {
//     return (
//       <div className="box">
//         <code>vuepress-theme-hope</code>
//         <span id="powerful" onClick={this.handler.bind(this)}>
//           {this.state.message}
//         </span>
//       </div>
//     );
//   }
// }
function Name(props) {
	return <h1>网站名称：{props.name}</h1>;
}
function Url(props) {
	return <h1>网站地址：{props.url}</h1>;
}
function Nickname(props) {
	return <h1>网站小名：{props.nickname}</h1>;
}
function App() {
	return (
	<div>
		<Name name="菜鸟教程" />
		<Url url="http://www.runoob.com" />
		<Nickname nickname="Runoob" />
	</div>
	);
}

ReactDOM.render(
	 <App />,
	document.getElementById('example')
);

`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),o=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".box #powerful"),e(),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),e(" blue"),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token punctuation"},"}"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function v(p,b){const s=d("CodeDemo");return i(),a("div",null,[u,c(s,{id:"code-demo-3",type:"react",title:"%E4%B8%80%E4%B8%AA%E7%B1%BB%E5%BC%8F%20React%20Demo",code:"eJydVV1r01AY/isvUTCFLWFe1rag0wsvnDDxLhdLk7MmmpwTck7WSglML3QgcwoqTDYUcWzgV69kuo39GJt2XvkXfE+Sdmk6mHqTpm+e87wfz/MmXaVpNomnVBVdB8szOYerQQCkIwi1OSwS0xLaPPMDRgkV0DUo4gBCfEpCtTIOyJCIQgrqOABQs92VjHTB9EndUJDaUBoFxNmYWYeYSF+GItj1W8BDC2F6i0WCRRpfaRnKFIHHWgzDpicwkP/Rp9icy43Bp/cnx88G2zvJWu9kY+vX/tvBq83h3tOajg8nC9Wx0lIomErsUhFisnKq/tG7ZONr/2An2dqDmsVs0sA2dDyh3eM1PQ3A4PWT/sG3/v7n/vGXwcvvP1cflQoIirSleipX8ts4/c2u6YV0AhYKsMmyGXlCyptBS/G/F99ilIswsgQL1SBkAS/agEcBGiMLj0oCEI7LNS5MQaAOXfAJ52aLVMFQksMfyYddlCeebADAMantlUyW8RBxR1KpaspYgXoD1FMMnNIvJesPk7XHF7spUMvj8dLMGBxXSoP7b283WWfK26muKxEJQsw8Kxzik1mHBSRXfBLMA5OCayNVwNokXI48nAqj855r3a93087zkWhNl9qqjFTistMy4GS/JRvJRP/kpOWIWsJlFGSrBckNkQ+m5sw1hkcvhh83k+frw93e78M33RSmUTwR4zLNNZC1SHU39M5h2uol26unTFHonUm0gOORWc5h621gaYW68lNnUuISZPKPiVB5Q0jJcUyGwFs5CZAEKFfxvZG/Z1IMtghYNSIcIYKqrrfbbS2MKGNNzWJ+ETpqAkZ14aHFFDlGjVQyhBQIyzVouqDXb9/ScsvKh1CTK6w30OKGsJkV+bi6WouIGx66j4prD27a6iXSMf3AI5cqBpVsBlVmFItz/Axo6GO4MHKgHIJceI+FVWh6EclSK/EfFH4nMQ=="},{default:r(()=>[m,o]),_:1})])}const k=l(t,[["render",v],["__file","1.html.vue"]]);export{k as default};
