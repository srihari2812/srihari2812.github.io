(function(a){function t(t){for(var s,n,o=t[0],c=t[1],l=t[2],d=0,p=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(a[s]=c[s]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var a,t=0;t<r.length;t++){for(var e=r[t],s=!0,o=1;o<e.length;o++){var c=e[o];0!==i[c]&&(s=!1)}s&&(r.splice(t--,1),a=n(n.s=e[0]))}return a}var s={},i={app:0},r=[];function n(t){if(s[t])return s[t].exports;var e=s[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=a,n.c=s,n.d=function(a,t,e){n.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},n.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},n.t=function(a,t){if(1&t&&(a=n(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var s in a)n.d(e,s,function(t){return a[t]}.bind(null,s));return e},n.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return n.d(t,"a",t),t},n.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;r.push([0,"chunk-vendors"]),e()})({0:function(a,t,e){a.exports=e("56d7")},"0682":function(a,t,e){"use strict";e("3133")},"0ffd":function(a,t,e){a.exports=e.p+"img/hymax4.f62f37ea.jpeg"},1036:function(a,t,e){a.exports=e.p+"img/3T2.cbbdea7f.jpeg"},"126f":function(a,t,e){},1812:function(a,t,e){a.exports=e.p+"img/hymax.252a5309.jpg"},"1b9d":function(a,t,e){},"1d11":function(a,t,e){a.exports=e.p+"img/hymax15new.6c94fea6.png"},"20ce":function(a,t,e){},"21ba":function(a,t,e){a.exports=e.p+"img/3t2new.cd9ac8d6.png"},3133:function(a,t,e){},3296:function(a,t,e){var s={"./3T1.jpeg":"998a","./3T2.jpeg":"1036","./3T3.jpeg":"5995","./3T4.jpeg":"c8d8","./3T5.jpeg":"c620","./hymax1.jpeg":"f64a","./hymax12.jpg":"5b3d","./hymax14.jpg":"946e","./hymax15.jpg":"776d","./hymax16.jpg":"d0f8","./hymax3.jpg":"584b","./hymax4.jpeg":"0ffd","./hymax5.jpeg":"344b","./hymax6.jpeg":"a737","./hymax7.jpeg":"80d4","./hymax8.jpeg":"9e6f"};function i(a){var t=r(a);return e(t)}function r(a){if(!e.o(s,a)){var t=new Error("Cannot find module '"+a+"'");throw t.code="MODULE_NOT_FOUND",t}return s[a]}i.keys=function(){return Object.keys(s)},i.resolve=r,a.exports=i,i.id="3296"},"344b":function(a,t,e){a.exports=e.p+"img/hymax5.7ecdeede.jpeg"},"434b":function(a,t,e){a.exports=e.p+"img/About.3c359337.jpg"},"56d7":function(a,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"app"}},[e("Nav"),e("router-view")],1)},r=[],n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("section",[e("nav",{staticClass:"navbar navbar-dark bg-dark navbar-expand-lg"},[e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[a._v("ISHINE")]),e("button",{ref:"myNavBtn",staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})]),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavAltMarkup"},on:{click:a.toggleNavbar}},[a._m(0)])])])},o=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"navbar-nav ml-auto"},[e("a",{staticClass:"nav-item nav-link active",attrs:{href:"/#/Home"}},[a._v("Home "),e("span",{staticClass:"sr-only"},[a._v("(current)")])]),e("a",{staticClass:"nav-item nav-link",attrs:{href:"/#/Brands"}},[a._v("Brands")]),e("a",{staticClass:"nav-item nav-link",attrs:{href:"/#/Products"}},[a._v("Products")]),e("a",{staticClass:"nav-item nav-link",attrs:{href:"/#/About"}},[a._v("About")]),e("a",{staticClass:"nav-item nav-link",attrs:{href:"/#/Contact"}},[a._v("Contact")])])}],c={name:"Nav",methods:{toggleNavbar:function(){console.log("hiding");var a=this.$refs.myNavBtn;a.click()}}},l=c,u=(e("c123"),e("2877")),d=Object(u["a"])(l,n,o,!1,null,"2d1d3ee4",null),p=d.exports,m={name:"App",components:{Nav:p}},v=m,f=(e("5c0b"),Object(u["a"])(v,i,r,!1,null,null,null)),b=f.exports,g=e("8c4f"),h=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},C=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("section",{attrs:{id:"Home"}},[s("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleIndicators","data-ride":"carousel"}},[s("ol",{staticClass:"carousel-indicators"},[s("li",{staticClass:"active",attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"0"}}),s("li",{attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}}),s("li",{attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"2"}}),s("li",{attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"3"}}),s("li",{attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"4"}})]),s("div",{staticClass:"carousel-inner"},[s("div",{staticClass:"carousel-item active",attrs:{id:"firstpic"}},[s("div",{staticClass:"image1"}),s("img",{staticClass:"d-block w-100",attrs:{src:e("5d2b"),alt:"Responsive"}}),s("div",{staticClass:"absolute-div"},[s("div",{staticClass:"carousel-caption"},[s("h5",{attrs:{"data-aos":"zoom-in","data-aos-duration":"2000",id:"title"}},[a._v("ISHINE SOLUTIONS")]),s("p",{attrs:{"data-aos":"zoom-in","data-aos-duration":"2000",id:"tag"}},[a._v("Your Beauty Shines from Your Heart"),s("i",{staticClass:"fas fa-heart",attrs:{id:"heart"}})])])])]),s("div",{staticClass:"carousel-item"},[s("img",{staticClass:"d-block w-100",staticStyle:{},attrs:{src:e("73dc"),alt:"responsive"}}),s("div",{staticClass:"absolute-div"},[s("div",{staticClass:"carousel-caption"},[s("h5",{attrs:{id:"title"}},[a._v("ISHINE SOLUTIONS")]),s("p",{attrs:{id:"tag"}},[a._v("Your Beauty Shines from Your Heart"),s("i",{staticClass:"fas fa-heart",attrs:{id:"heart"}})])])])]),s("div",{staticClass:"carousel-item"},[s("img",{staticClass:"d-block w-100",attrs:{src:e("6bae"),alt:"responsive"}}),s("div",{staticClass:"absolute-div"},[s("div",{staticClass:"carousel-caption"},[s("h5",{attrs:{id:"title"}},[a._v("ISHINE SOLUTIONS")]),s("p",{attrs:{id:"tag"}},[a._v("Your Beauty Shines from Your Heart"),s("i",{staticClass:"fas fa-heart",attrs:{id:"heart"}})])])])]),s("div",{staticClass:"carousel-item"},[s("img",{staticClass:"d-block w-100",attrs:{src:e("6f7b"),alt:"responsive"}}),s("div",{staticClass:"absolute-div"},[s("div",{staticClass:"carousel-caption"},[s("h5",{attrs:{id:"title"}},[a._v("ISHINE SOLUTIONS")]),s("p",{attrs:{id:"tag"}},[a._v("Your Beauty Shines from Your Heart"),s("i",{staticClass:"fas fa-heart",attrs:{id:"heart"}})])])])])]),s("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleIndicators",role:"button","data-slide":"prev"}},[s("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"sr-only"},[a._v("Previous")])]),s("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleIndicators",role:"button","data-slide":"next"}},[s("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"sr-only"},[a._v("Next")])])])])}],x={name:"Home"},_=x,y=(e("737c"),Object(u["a"])(_,h,C,!1,null,"3c7a7d56",null)),q=y.exports,j=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("section",{attrs:{id:"Brand"}},[s("h1",{attrs:{"data-aos":"fade-up","data-aos-duration":"500",id:"sec_title"}},[a._v("Brands")]),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"brand"},[s("img",{attrs:{src:e("82d4"),id:"brand1"}}),s("div",{staticClass:"content",attrs:{"data-aos":"fade-up","data-aos-duration":"800"}},[s("h5",[a._v("3T cleaning products ")]),s("p",[a._v("Specialized in Products like Car Foam shampoos etc..")]),s("button",{attrs:{id:"bt"},on:{click:function(t){return a.show3tproducts()}}},[a._v("View Products")])])])]),s("div",{staticClass:"col"},[s("div",{staticClass:"brand"},[s("img",{attrs:{src:e("1812")}}),s("div",{staticClass:"content",attrs:{"data-aos":"fade-up","data-aos-duration":"800"}},[s("h5",[a._v("Hymax cleaning products ")]),s("p",[a._v("Specialized in Products like bathroom cleaner etc..")]),s("button",{attrs:{id:"bt"},on:{click:function(t){return a.showhymaxproducts()}}},[a._v("View Products")])])])]),s("div",{staticClass:"col"},[s("div",{staticClass:"brand"},[s("img",{attrs:{src:e("1812")}}),s("div",{staticClass:"content",attrs:{"data-aos":"fade-up","data-aos-duration":"800"}},[s("h5",[a._v("Hymax cleaning products ")]),s("p",[a._v("Specialized in Products like bathroom cleaner etc..")]),s("button",{attrs:{id:"bt"},on:{click:function(t){return a.showhymaxproducts()}}},[a._v("View Products")])])])])])])])},P=[],k={name:"Brands",methods:{show3tproducts:function(){this.$router.push("/Threet")},showhymaxproducts:function(){this.$router.push("/Hymax")}}},w=k,E=(e("c062"),Object(u["a"])(w,j,P,!1,null,"6bac07ea",null)),H=E.exports,A=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("section",[e("h1",{attrs:{"data-aos":"fade-up","data-aos-duration":"800",id:"sec_title"}},[a._v("Our Products")]),e("div",{staticClass:"box"},a._l(a.items,(function(t){return e("div",{key:t.id,staticClass:"images"},[e("img",{staticClass:"list-complete-img",attrs:{src:a.getImgUrl(t.src),alt:t.src}}),e("div",{attrs:{id:"des"}},[e("h5",{attrs:{id:"name"}},[a._v(a._s(t.Productname))]),e("p",{attrs:{id:"purpose"}},[a._v(a._s(t.purpose))])])])})),0)])},O=[],S={name:"Products",data:function(){return{items:[{id:"1",src:"3T1.jpeg",tags:["all","tag1"],Productname:"Surge",purpose:"All purpose vinyl Care"},{id:"2",src:"3T2.jpeg",tags:["all","tag2"],Productname:"Surge",purpose:"All purpose vinyl Care"},{id:"3",src:"3T3.jpeg",tags:["all","tag2"],Productname:"EDEN Bloom",purpose:"Deodorant Air freshener"},{id:"4",src:"3T4.jpeg",tags:["all","tag2"],Productname:"PureX",purpose:"Hand Wash"},{id:"5",src:"3T5.jpeg",tags:["all","tag2"],Productname:"Sitron",purpose:"Insecticide"},{id:"6",src:"hymax1.jpeg",tags:["all","tag2"],Productname:"Styrex-Pro",purpose:"Floor cleaner  concentrate"},{id:"7",src:"hymax3.jpg",tags:["all","tag2"],Productname:"Hymax",purpose:"Glass and surface cleaner"},{id:"8",src:"hymax4.jpeg",tags:["all","tag2"],Productname:"Hymax",purpose:"Multi purpose cleaner"},{id:"9",src:"hymax5.jpeg",tags:["all","tag2"],Productname:"Hymax",purpose:"Multipurpose and stain remover"},{id:"10",src:"hymax7.jpeg",tags:["all","tag2"],Productname:"Hymax",purpose:"Toilet Cleaning Fluid"},{id:"11",src:"hymax8.jpeg",tags:["all","tag2"],Productname:"One Drop",purpose:"Concentrated Dish wash"},{id:"12",src:"hymax12.jpg",tags:["all","tag2"],Productname:"Hymax",purpose:"Toilet Advanced Cleaner"},{id:"13",src:"hymax14.jpg",tags:["all","tag2"],Productname:"Hymax",purpose:"Hand wash"},{id:"14",src:"hymax15.jpg",tags:["all","tag2"],Productname:"Hymax",purpose:"Surface cleaner"},{id:"15",src:"hymax16.jpg",tags:["all","tag2"],Productname:"Hymax",purpose:"Glass cleaner"}]}},methods:{getImgUrl:function(a){return e("3296")("./"+a)}}},T=S,I=(e("fdb4"),Object(u["a"])(T,A,O,!1,null,"5b0344df",null)),N=I.exports,U=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},M=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("section",[s("h1",{attrs:{"data-aos":"fade-up","data-aos-duration":"800",id:"sec_title"}},[a._v("About Us")]),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"info"},[s("div",{staticClass:"ourstory",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[s("h5",{attrs:{"data-aos":"fade-up","data-aos-duration":"1500"}},[a._v("Our Story")]),s("p",[a._v("ISHINE Cleaning Solutions Experienced More than 15 Years, in Telangana in Cleaning and Automobile Products Industry. We Manufactures a Variety of Environment-friendly Products to a wide range of Industries.We Manufactures Hygiene Products named as (HYMAX) and Auto Mobile Products named as (3T).")]),s("h6",{attrs:{"data-aos":"fade-up","data-aos-duration":"1500"}},[a._v("Certifications")]),s("p",[a._v("1. ISO 9001:2015 Certified Company."),s("br"),a._v("2. M S M E ")]),s("h5",{attrs:{"data-aos":"fade-up","data-aos-duration":"1500"}},[a._v("Brands")]),s("p",[a._v("1.HYMAX - Cleaning Products ")]),s("p",[a._v("2. 3T - Auto Mobile Products ")])])]),s("div",{staticClass:"pics",attrs:{"data-aos":"fade-up","data-aos-duration":"2500"}},[s("img",{attrs:{src:e("434b"),alt:""}})])])])}],D={name:"About"},L=D,$=(e("6352"),Object(u["a"])(L,U,M,!1,null,"236577e4",null)),F=$.exports,B=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("section",[e("h1",{attrs:{"data-aos":"fade-up","data-aos-duration":"800",id:"sec_title"}},[a._v(" Contact Us ")]),e("div",{attrs:{id:"container"}},[a._m(0),e("div",{staticClass:"form"},[e("form",{staticClass:"contact",on:{submit:function(t){return t.preventDefault(),a.sendEmail(t)}}},[e("input",{attrs:{type:"text",id:"inputbox",name:"customer_name",placeholder:"Your Name",required:""}}),e("input",{attrs:{type:"email",id:"inputbox",name:"customer_email",placeholder:"Your Email",required:""}}),e("textarea",{attrs:{name:"message",id:"Message",cols:"10",rows:"5",placeholder:"Your Message",required:""}}),e("input",{staticClass:"send-btn",attrs:{type:"submit",name:"submit",value:"send"}})])])])])},Y=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"info"},[e("div",{staticClass:"content"},[e("div",{attrs:{id:"icon"}},[e("p",{attrs:{"data-aos":"fade-up","data-aos-duration":"1700"}},[e("span",[e("i",{staticClass:"fas fa-map-marker-alt",attrs:{id:"cicon"}})]),a._v(" Plot NO:2-24/97/9 LN Nagar IDA Uppal. ")])]),e("div",{attrs:{id:"icon"}},[e("p",{attrs:{"data-aos":"fade-up","data-aos-duration":"2200"}},[e("i",{staticClass:"fas fa-envelope",attrs:{id:"cicon"}}),a._v(" Ishine@gmail.com ")])]),e("div",{attrs:{id:"icon"}},[e("p",{attrs:{"data-aos":"fade-up","data-aos-duration":"2700"}},[e("i",{staticClass:"fas fa-phone",attrs:{id:"cicon"}}),a._v(" 9090909090 ")])]),e("div",{attrs:{id:"icon"}},[e("p",{attrs:{"data-aos":"fade-up","data-aos-duration":"3000"}},[e("i",{staticClass:"far fa-clock",attrs:{id:"cicon"}}),a._v(" Mon-Fri 8:00AM to 5:00 PM ")])])])])}],z=(e("99af"),e("1940")),R=e.n(z),G=e("0f91"),V=e.n(G),W={name:"Contact",methods:{sendEmail:function(a){console.log("".concat(a.target.customer_name.value," ").concat(a.target.customer_email.value," ").concat(a.target.message.value)),""==a.target.customer_name.value||""==a.target.customer_email.value||""==a.target.message.value?R()({title:"Fields Empty!",text:"Please check the missing fields",icon:"warning",button:"Ok"}):(V.a.sendForm("service_infinocube","default_template",a.target,"user_J1aYYvamHRsoNpf6fWVgG"),a.target.reset(),R()({title:"Hi ".concat(a.target.customer_name.value," !"),text:"Thank you for contacting us!.Your inquiry will be reviewed and responded ASAP",icon:"success",button:"Ok"}))}}},X=W,J=(e("6399"),Object(u["a"])(X,B,Y,!1,null,"5fad5448",null)),K=J.exports,Q=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},Z=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("section",[s("div",{staticClass:"bg"},[s("h1",{attrs:{id:"title"}},[a._v("HY-MAX Products")]),s("div",{staticClass:"box"},[s("span"),s("span"),s("span")])]),s("div",{attrs:{id:"list"}},[s("div",{staticClass:"product"},[s("div",{staticClass:"pic",attrs:{"data-aos":"zoom-in","data-aos-duration":"1000"}},[s("img",{attrs:{src:e("ba2f"),alt:""}})]),s("div",{staticClass:"content",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[s("h3",[a._v("Handwash")]),s("nav",[s("div",{staticClass:"nav nav-tabs",attrs:{id:"nav-tab",role:"tablist"}},[s("a",{staticClass:"nav-item nav-link active",attrs:{id:"nav-home-tab","data-toggle":"tab",href:"#nav-home",role:"tab","aria-controls":"nav-home","aria-selected":"true"}},[a._v("Application Field")]),s("a",{staticClass:"nav-item nav-link",attrs:{id:"nav-profile-tab","data-toggle":"tab",href:"#nav-profile",role:"tab","aria-controls":"nav-profile","aria-selected":"false"}},[a._v("Procedure")]),s("a",{staticClass:"nav-item nav-link",attrs:{id:"nav-contact-tab","data-toggle":"tab",href:"#nav-contact",role:"tab","aria-controls":"nav-contact","aria-selected":"false"}},[a._v("Recommended For")]),s("a",{staticClass:"nav-item nav-link",attrs:{id:"nav-contact-tab","data-toggle":"tab",href:"#nav-contact",role:"tab","aria-controls":"nav-contact","aria-selected":"false"}},[a._v("Advantages")])])]),s("div",{staticClass:"tab-content",attrs:{id:"nav-tabContent"}},[s("div",{staticClass:"tab-pane fade show active",attrs:{id:"nav-home",role:"tabpanel","aria-labelledby":"nav-home-tab"}},[s("p",[a._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magnam accusamus aspernatur eos, perspiciatis reprehenderit harum sapiente esse, soluta unde itaque neque, ex tenetur qui explicabo porro odit ipsa vitae modi omnis ut aperiam? Delectus, quia, consectetur earum ipsum reprehenderit natus suscipit fuga placeat non veniam maiores accusantium quos harum?")])]),s("div",{staticClass:"tab-pane fade",attrs:{id:"nav-profile",role:"tabpanel","aria-labelledby":"nav-profile-tab"}},[s("p",[a._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magnam accusamus aspernatur eos, perspiciatis reprehenderit harum sapiente esse, soluta unde itaque neque, ex tenetur qui explicabo porro odit ipsa vitae modi omnis ut aperiam? Delectus, quia, consectetur earum ipsum reprehenderit natus suscipit fuga placeat non veniam maiores accusantium quos harum?")])]),s("div",{staticClass:"tab-pane fade",attrs:{id:"nav-contact",role:"tabpanel","aria-labelledby":"nav-contact-tab"}},[s("p",[a._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magnam accusamus aspernatur eos, perspiciatis reprehenderit harum sapiente esse, soluta unde itaque neque, ex tenetur qui explicabo porro odit ipsa vitae modi omnis ut aperiam? Delectus, quia, consectetur earum ipsum reprehenderit natus suscipit fuga placeat non veniam maiores accusantium quos harum?")])])])])]),s("div",{staticClass:"product"},[s("div",{staticClass:"pic",attrs:{"data-aos":"zoom-in","data-aos-duration":"1000"}},[s("img",{attrs:{src:e("1d11"),alt:""}})]),s("div",{staticClass:"content",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[s("h3",[a._v("Surface Cleaner")]),s("nav",[s("div",{staticClass:"nav nav-tabs",attrs:{id:"nav-tab",role:"tablist"}},[s("a",{staticClass:"nav-item nav-link active",attrs:{id:"nav-home-tab","data-toggle":"tab",href:"#nav-home",role:"tab","aria-controls":"nav-home","aria-selected":"true"}},[a._v("Application Field")]),s("a",{staticClass:"nav-item nav-link",attrs:{id:"nav-profile-tab","data-toggle":"tab",href:"#nav-profile",role:"tab","aria-controls":"nav-profile","aria-selected":"false"}},[a._v("Procedure")]),s("a",{staticClass:"nav-item nav-link",attrs:{id:"nav-contact-tab","data-toggle":"tab",href:"#nav-contact",role:"tab","aria-controls":"nav-contact","aria-selected":"false"}},[a._v("Recommended For")]),s("a",{staticClass:"nav-item nav-link",attrs:{id:"nav-contact-tab","data-toggle":"tab",href:"#nav-contact",role:"tab","aria-controls":"nav-contact","aria-selected":"false"}},[a._v("Advantages")])])]),s("div",{staticClass:"tab-content",attrs:{id:"nav-tabContent"}},[s("div",{staticClass:"tab-pane fade show active",attrs:{id:"nav-home",role:"tabpanel","aria-labelledby":"nav-home-tab"}},[s("p",[a._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magnam accusamus aspernatur eos, perspiciatis reprehenderit harum sapiente esse, soluta unde itaque neque, ex tenetur qui explicabo porro odit ipsa vitae modi omnis ut aperiam? Delectus, quia, consectetur earum ipsum reprehenderit natus suscipit fuga placeat non veniam maiores accusantium quos harum?")])]),s("div",{staticClass:"tab-pane fade",attrs:{id:"nav-profile",role:"tabpanel","aria-labelledby":"nav-profile-tab"}},[s("p",[a._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magnam accusamus aspernatur eos, perspiciatis reprehenderit harum sapiente esse, soluta unde itaque neque, ex tenetur qui explicabo porro odit ipsa vitae modi omnis ut aperiam? Delectus, quia, consectetur earum ipsum reprehenderit natus suscipit fuga placeat non veniam maiores accusantium quos harum?")])]),s("div",{staticClass:"tab-pane fade",attrs:{id:"nav-contact",role:"tabpanel","aria-labelledby":"nav-contact-tab"}},[s("p",[a._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magnam accusamus aspernatur eos, perspiciatis reprehenderit harum sapiente esse, soluta unde itaque neque, ex tenetur qui explicabo porro odit ipsa vitae modi omnis ut aperiam? Delectus, quia, consectetur earum ipsum reprehenderit natus suscipit fuga placeat non veniam maiores accusantium quos harum?")])])])])]),s("div",{staticClass:"product"},[s("div",{staticClass:"pic",attrs:{"data-aos":"zoom-in","data-aos-duration":"1000"}},[s("img",{attrs:{src:e("ebb0"),alt:""}})]),s("div",{staticClass:"content",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[s("h3",[a._v("Glass Cleaner")]),s("nav",[s("div",{staticClass:"nav nav-tabs",attrs:{id:"nav-tab",role:"tablist"}},[s("a",{staticClass:"nav-item nav-link active",attrs:{id:"nav-home-tab","data-toggle":"tab",href:"#nav-home",role:"tab","aria-controls":"nav-home","aria-selected":"true"}},[a._v("Application Field")]),s("a",{staticClass:"nav-item nav-link",attrs:{id:"nav-profile-tab","data-toggle":"tab",href:"#nav-profile",role:"tab","aria-controls":"nav-profile","aria-selected":"false"}},[a._v("Procedure")]),s("a",{staticClass:"nav-item nav-link",attrs:{id:"nav-contact-tab","data-toggle":"tab",href:"#nav-contact",role:"tab","aria-controls":"nav-contact","aria-selected":"false"}},[a._v("Recommended For")]),s("a",{staticClass:"nav-item nav-link",attrs:{id:"nav-contact-tab","data-toggle":"tab",href:"#nav-contact",role:"tab","aria-controls":"nav-contact","aria-selected":"false"}},[a._v("Advantages")])])]),s("div",{staticClass:"tab-content",attrs:{id:"nav-tabContent"}},[s("div",{staticClass:"tab-pane fade show active",attrs:{id:"nav-home",role:"tabpanel","aria-labelledby":"nav-home-tab"}},[s("p",[a._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magnam accusamus aspernatur eos, perspiciatis reprehenderit harum sapiente esse, soluta unde itaque neque, ex tenetur qui explicabo porro odit ipsa vitae modi omnis ut aperiam? Delectus, quia, consectetur earum ipsum reprehenderit natus suscipit fuga placeat non veniam maiores accusantium quos harum?")])]),s("div",{staticClass:"tab-pane fade",attrs:{id:"nav-profile",role:"tabpanel","aria-labelledby":"nav-profile-tab"}},[s("p",[a._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magnam accusamus aspernatur eos, perspiciatis reprehenderit harum sapiente esse, soluta unde itaque neque, ex tenetur qui explicabo porro odit ipsa vitae modi omnis ut aperiam? Delectus, quia, consectetur earum ipsum reprehenderit natus suscipit fuga placeat non veniam maiores accusantium quos harum?")])]),s("div",{staticClass:"tab-pane fade",attrs:{id:"nav-contact",role:"tabpanel","aria-labelledby":"nav-contact-tab"}},[s("p",[a._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magnam accusamus aspernatur eos, perspiciatis reprehenderit harum sapiente esse, soluta unde itaque neque, ex tenetur qui explicabo porro odit ipsa vitae modi omnis ut aperiam? Delectus, quia, consectetur earum ipsum reprehenderit natus suscipit fuga placeat non veniam maiores accusantium quos harum?")])])])])]),s("div",{staticClass:"product"},[s("div",{staticClass:"pic",attrs:{"data-aos":"zoom-in","data-aos-duration":"1000"}},[s("img",{attrs:{src:e("79c2"),alt:""}})]),s("div",{staticClass:"content",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[s("h3",[a._v("Toilet Cleaner")]),s("nav",[s("div",{staticClass:"nav nav-tabs",attrs:{id:"nav-tab",role:"tablist"}},[s("a",{staticClass:"nav-item nav-link active",attrs:{id:"nav-home-tab","data-toggle":"tab",href:"#nav-home",role:"tab","aria-controls":"nav-home","aria-selected":"true"}},[a._v("Application Field")]),s("a",{staticClass:"nav-item nav-link",attrs:{id:"nav-profile-tab","data-toggle":"tab",href:"#nav-profile",role:"tab","aria-controls":"nav-profile","aria-selected":"false"}},[a._v("Procedure")]),s("a",{staticClass:"nav-item nav-link",attrs:{id:"nav-contact-tab","data-toggle":"tab",href:"#nav-contact",role:"tab","aria-controls":"nav-contact","aria-selected":"false"}},[a._v("Recommended For")]),s("a",{staticClass:"nav-item nav-link",attrs:{id:"nav-contact-tab","data-toggle":"tab",href:"#nav-contact",role:"tab","aria-controls":"nav-contact","aria-selected":"false"}},[a._v("Advantages")])])]),s("div",{staticClass:"tab-content",attrs:{id:"nav-tabContent"}},[s("div",{staticClass:"tab-pane fade show active",attrs:{id:"nav-home",role:"tabpanel","aria-labelledby":"nav-home-tab"}},[s("p",[a._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magnam accusamus aspernatur eos, perspiciatis reprehenderit harum sapiente esse, soluta unde itaque neque, ex tenetur qui explicabo porro odit ipsa vitae modi omnis ut aperiam? Delectus, quia, consectetur earum ipsum reprehenderit natus suscipit fuga placeat non veniam maiores accusantium quos harum?")])]),s("div",{staticClass:"tab-pane fade",attrs:{id:"nav-profile",role:"tabpanel","aria-labelledby":"nav-profile-tab"}},[s("p",[a._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magnam accusamus aspernatur eos, perspiciatis reprehenderit harum sapiente esse, soluta unde itaque neque, ex tenetur qui explicabo porro odit ipsa vitae modi omnis ut aperiam? Delectus, quia, consectetur earum ipsum reprehenderit natus suscipit fuga placeat non veniam maiores accusantium quos harum?")])]),s("div",{staticClass:"tab-pane fade",attrs:{id:"nav-contact",role:"tabpanel","aria-labelledby":"nav-contact-tab"}},[s("p",[a._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magnam accusamus aspernatur eos, perspiciatis reprehenderit harum sapiente esse, soluta unde itaque neque, ex tenetur qui explicabo porro odit ipsa vitae modi omnis ut aperiam? Delectus, quia, consectetur earum ipsum reprehenderit natus suscipit fuga placeat non veniam maiores accusantium quos harum?")])])])])])])])}],aa={name:"Hymax",data:function(){return{}}},ta=aa,ea=(e("0682"),Object(u["a"])(ta,Q,Z,!1,null,"cca0d8c8",null)),sa=ea.exports,ia=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},ra=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("section",[s("div",{staticClass:"bg"},[s("h1",{attrs:{id:"title"}},[a._v("3T Products")]),s("div",{staticClass:"box"},[s("span"),s("span"),s("span")])]),s("div",{attrs:{id:"list"}},[s("div",{staticClass:"product"},[s("div",{staticClass:"pic",attrs:{"data-aos":"zoom-in","data-aos-duration":"1000"}},[s("img",{attrs:{src:e("21ba"),alt:""}})]),s("div",{staticClass:"content",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[s("h3",[a._v("SURGE")]),s("nav",[s("div",{staticClass:"nav nav-tabs",attrs:{id:"nav-tab",role:"tablist"}},[s("a",{staticClass:"nav-item nav-link active",attrs:{id:"nav-home-tab","data-toggle":"tab",href:"#nav-home",role:"tab","aria-controls":"nav-home","aria-selected":"true"}},[a._v("Application Field")]),s("a",{staticClass:"nav-item nav-link",attrs:{id:"nav-profile-tab","data-toggle":"tab",href:"#nav-profile",role:"tab","aria-controls":"nav-profile","aria-selected":"false"}},[a._v("Procedure")]),s("a",{staticClass:"nav-item nav-link",attrs:{id:"nav-contact-tab","data-toggle":"tab",href:"#nav-contact",role:"tab","aria-controls":"nav-contact","aria-selected":"false"}},[a._v("Recommended For")]),s("a",{staticClass:"nav-item nav-link",attrs:{id:"nav-contact-tab","data-toggle":"tab",href:"#nav-contact",role:"tab","aria-controls":"nav-contact","aria-selected":"false"}},[a._v("Advantages")])])]),s("div",{staticClass:"tab-content",attrs:{id:"nav-tabContent"}},[s("div",{staticClass:"tab-pane fade show active",attrs:{id:"nav-home",role:"tabpanel","aria-labelledby":"nav-home-tab"}},[s("p",[a._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magnam accusamus aspernatur eos, perspiciatis reprehenderit harum sapiente esse, soluta unde itaque neque, ex tenetur qui explicabo porro odit ipsa vitae modi omnis ut aperiam? Delectus, quia, consectetur earum ipsum reprehenderit natus suscipit fuga placeat non veniam maiores accusantium quos harum?")])]),s("div",{staticClass:"tab-pane fade",attrs:{id:"nav-profile",role:"tabpanel","aria-labelledby":"nav-profile-tab"}},[s("p",[a._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magnam accusamus aspernatur eos, perspiciatis reprehenderit harum sapiente esse, soluta unde itaque neque, ex tenetur qui explicabo porro odit ipsa vitae modi omnis ut aperiam? Delectus, quia, consectetur earum ipsum reprehenderit natus suscipit fuga placeat non veniam maiores accusantium quos harum?")])]),s("div",{staticClass:"tab-pane fade",attrs:{id:"nav-contact",role:"tabpanel","aria-labelledby":"nav-contact-tab"}},[s("p",[a._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magnam accusamus aspernatur eos, perspiciatis reprehenderit harum sapiente esse, soluta unde itaque neque, ex tenetur qui explicabo porro odit ipsa vitae modi omnis ut aperiam? Delectus, quia, consectetur earum ipsum reprehenderit natus suscipit fuga placeat non veniam maiores accusantium quos harum?")])])])])]),s("div",{staticClass:"product"},[s("div",{staticClass:"pic",attrs:{"data-aos":"zoom-in","data-aos-duration":"1000"}},[s("img",{attrs:{src:e("d9e5"),alt:""}})]),s("div",{staticClass:"content",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[s("h3",[a._v("SURGE")]),s("nav",[s("div",{staticClass:"nav nav-tabs",attrs:{id:"nav-tab",role:"tablist"}},[s("a",{staticClass:"nav-item nav-link active",attrs:{id:"nav-home-tab","data-toggle":"tab",href:"#nav-home",role:"tab","aria-controls":"nav-home","aria-selected":"true"}},[a._v("Application Field")]),s("a",{staticClass:"nav-item nav-link",attrs:{id:"nav-profile-tab","data-toggle":"tab",href:"#nav-profile",role:"tab","aria-controls":"nav-profile","aria-selected":"false"}},[a._v("Procedure")]),s("a",{staticClass:"nav-item nav-link",attrs:{id:"nav-contact-tab","data-toggle":"tab",href:"#nav-contact",role:"tab","aria-controls":"nav-contact","aria-selected":"false"}},[a._v("Recommended For")]),s("a",{staticClass:"nav-item nav-link",attrs:{id:"nav-contact-tab","data-toggle":"tab",href:"#nav-contact",role:"tab","aria-controls":"nav-contact","aria-selected":"false"}},[a._v("Advantages")])])]),s("div",{staticClass:"tab-content",attrs:{id:"nav-tabContent"}},[s("div",{staticClass:"tab-pane fade show active",attrs:{id:"nav-home",role:"tabpanel","aria-labelledby":"nav-home-tab"}},[s("p",[a._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magnam accusamus aspernatur eos, perspiciatis reprehenderit harum sapiente esse, soluta unde itaque neque, ex tenetur qui explicabo porro odit ipsa vitae modi omnis ut aperiam? Delectus, quia, consectetur earum ipsum reprehenderit natus suscipit fuga placeat non veniam maiores accusantium quos harum?")])]),s("div",{staticClass:"tab-pane fade",attrs:{id:"nav-profile",role:"tabpanel","aria-labelledby":"nav-profile-tab"}},[s("p",[a._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magnam accusamus aspernatur eos, perspiciatis reprehenderit harum sapiente esse, soluta unde itaque neque, ex tenetur qui explicabo porro odit ipsa vitae modi omnis ut aperiam? Delectus, quia, consectetur earum ipsum reprehenderit natus suscipit fuga placeat non veniam maiores accusantium quos harum?")])]),s("div",{staticClass:"tab-pane fade",attrs:{id:"nav-contact",role:"tabpanel","aria-labelledby":"nav-contact-tab"}},[s("p",[a._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magnam accusamus aspernatur eos, perspiciatis reprehenderit harum sapiente esse, soluta unde itaque neque, ex tenetur qui explicabo porro odit ipsa vitae modi omnis ut aperiam? Delectus, quia, consectetur earum ipsum reprehenderit natus suscipit fuga placeat non veniam maiores accusantium quos harum?")])])])])])])])}],na={name:"Threet",data:function(){return{}}},oa=na,ca=(e("cfbd"),Object(u["a"])(oa,ia,ra,!1,null,"27717961",null)),la=ca.exports,ua=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"main"}},[e("Home",{attrs:{id:"/Home"}}),e("Brands",{attrs:{id:"/Brands"}}),e("Products",{attrs:{id:"/Products"}}),e("About",{attrs:{id:"/About"}}),e("Contact",{attrs:{id:"/Contact"}})],1)},da=[],pa={name:"Main",components:{Home:q,Brands:H,Products:N,About:F,Contact:K}},ma=pa,va=Object(u["a"])(ma,ua,da,!1,null,"38970e34",null),fa=va.exports;s["a"].use(g["a"]);var ba=[{path:"/home",name:"Home",component:q},{path:"/Nav",name:"Nav",component:p},{path:"/Brands",name:"Brands",component:H},{path:"/Products",name:"Products",component:N},{path:"/About",name:"About",component:F},{path:"/Contact",name:"Contact",component:K},{path:"/Threet",name:"Threet",component:la},{path:"/Hymax",name:"Hymax",component:sa},{path:"/",name:"Main",component:fa}],ga=new g["a"]({mode:"history",base:"/",routes:ba}),ha=ga,Ca=(e("4989"),e("f9e3"),e("15f5"),e("7051"),e("f5af")),xa=e.n(Ca);e("e829");s["a"].config.productionTip=!1,new s["a"]({router:ha,created:function(){xa.a.init()},render:function(a){return a(b)}}).$mount("#app")},"584b":function(a,t,e){a.exports=e.p+"img/hymax3.24b7c751.jpg"},5995:function(a,t,e){a.exports=e.p+"img/3T3.28336baa.jpeg"},"5b3d":function(a,t,e){a.exports=e.p+"img/hymax12.c943201d.jpg"},"5c0b":function(a,t,e){"use strict";e("9c0c")},"5d2b":function(a,t,e){a.exports=e.p+"img/bg13.82830ad3.jpg"},6352:function(a,t,e){"use strict";e("9184")},6399:function(a,t,e){"use strict";e("8997")},"6bae":function(a,t,e){a.exports=e.p+"img/bg12.666827a0.jpg"},"6f7b":function(a,t,e){a.exports=e.p+"img/bg8.ee7126d6.jpeg"},"737c":function(a,t,e){"use strict";e("ba5d")},"73dc":function(a,t,e){a.exports=e.p+"img/homebg2.424ed512.jpg"},"776d":function(a,t,e){a.exports=e.p+"img/hymax15.71062290.jpg"},"79c2":function(a,t,e){a.exports=e.p+"img/hymax12new.893ee539.png"},"80d4":function(a,t,e){a.exports=e.p+"img/hymax7.9d788d09.jpeg"},"82d4":function(a,t,e){a.exports=e.p+"img/3T.055b9f2b.jpeg"},8997:function(a,t,e){},9184:function(a,t,e){},"946e":function(a,t,e){a.exports=e.p+"img/hymax14.beaeffe0.jpg"},"998a":function(a,t,e){a.exports=e.p+"img/3T1.8505b0eb.jpeg"},"9c0c":function(a,t,e){},"9e6f":function(a,t,e){a.exports=e.p+"img/hymax8.3c1fab1e.jpeg"},a737:function(a,t,e){a.exports=e.p+"img/hymax6.290b7ff1.jpeg"},ba2f:function(a,t,e){a.exports=e.p+"img/hymax14new.c3c15239.png"},ba5d:function(a,t,e){},c062:function(a,t,e){"use strict";e("126f")},c123:function(a,t,e){"use strict";e("20ce")},c620:function(a,t,e){a.exports=e.p+"img/3T5.ac6cf75e.jpeg"},c8d8:function(a,t,e){a.exports=e.p+"img/3T4.7e91a8f0.jpeg"},cfbd:function(a,t,e){"use strict";e("1b9d")},d0f8:function(a,t,e){a.exports=e.p+"img/hymax16.56784e6d.jpg"},d2a1:function(a,t,e){},d9e5:function(a,t,e){a.exports=e.p+"img/3t1new.f135c610.png"},ebb0:function(a,t,e){a.exports=e.p+"img/hymax16new.26977d16.png"},f64a:function(a,t,e){a.exports=e.p+"img/hymax1.3efe78ea.jpeg"},fdb4:function(a,t,e){"use strict";e("d2a1")}});
//# sourceMappingURL=app.3d19c0e6.js.map