(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{BypJ:function(t,e,a){"use strict";a.r(e);a("IzEo");var i=a("bx4M"),r=a("p0pE"),o=a.n(r),s=a("mrSG"),c=a("q1tI"),n=a.n(c),l=a("MuoO"),m=a("L6Kr"),y=a("mOtZ"),u=a("WqWh"),p=a("faBS"),d=a("/88p"),h=a("Qp6+"),g=class extends c["Component"]{constructor(){super(...arguments),this.state={cate:"allComic",query:{key:"time",sort:!1,list:!1,size:20,page:1},filter:{comic:""}},this.initData=(t=>{var e=t.query,a=void 0===e?this.state.query:e,i=t.filter,r=void 0===i?this.state.filter:i,s=this.state.cate,c=this.props.dispatch,n=Object(p["b"])({cate:s,query:a,type:"comic"});c({type:"comic/queryList",payload:{query:o()({},n,r),addon:{type:s}}})}),this.listQuery=(t=>{var e=this.state.query,a=o()({},e,t);this.setState({query:a}),this.initData({query:a})}),this.filterQuery=(t=>{var e=this.state.filter,a=o()({},e,t);this.setState({filter:a}),this.initData({filter:a})})}componentDidMount(){this.initData({})}render(){var t=this.state,e=t.cate,a=t.query,r=t.filter,s=this.props,c=s.comic,l=s.category,g=s.loadingComic,v=s.loadingCategory,f=a.list,q=l[e]||{},E=c[e]||[],b=c.total[e]||0,C=o()({},r,Object(p["a"])(l.all));return n.a.createElement("div",null,n.a.createElement("div",{className:"container"},n.a.createElement(m["a"],{img:q.cover,span:q.slug}),n.a.createElement(i["a"],{bordered:!1,style:{margin:"20px 0"},loading:v},n.a.createElement(h["a"],{value:C,onChange:this.filterQuery})),n.a.createElement(i["a"],{bordered:!1,style:{marginBottom:"20px"},loading:g},n.a.createElement(y["a"],{value:a,onChange:this.listQuery}),f?n.a.createElement(d["b"],{type:"comic",list:E}):n.a.createElement(d["a"],{type:"comic",list:E}),n.a.createElement(u["a"],{value:o()({},a,{total:b}),onChange:this.listQuery}))))}};g=s["a"]([Object(l["connect"])(t=>{var e=t.comic,a=t.category,i=t.loading;return{comic:e,category:a,loadingComic:i.models.comic,loadingCategory:i.models.category}})],g),e["default"]=g}}]);