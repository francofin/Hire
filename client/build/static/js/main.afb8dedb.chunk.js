(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{120:function(e,t,c){var s={"./6AFHv_ZCc-man.jpg":[128,4],"./89gJg1Vlg-girl.jpg":[129,5],"./9t9yUQHLe-girl.jpg":[130,6],"./MB_37Uzbk-sam.jpg":[131,7],"./_a67_cQQD-pexels-andrea-piacquadio-818819.jpg":[73],"./employeeproduct.jpg":[51]};function n(e){if(!c.o(s,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=s[e],n=t[0];return Promise.all(t.slice(1).map(c.e)).then((function(){return c(n)}))}n.keys=function(){return Object.keys(s)},n.id=120,e.exports=n},126:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c.n(s),i=c(59),a=c.n(i),l=(c(70),c(6)),r=c(14),o=c(133),j=c(104),d=c(134),b=c.n(d),m=c(43),u=c(15),O=c(0),h=function(){return Object(O.jsx)("div",{id:"footer",className:"text-center",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"socials-media text-center",children:Object(O.jsxs)("ul",{className:"list-unstyled",children:[Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"/",children:Object(O.jsx)("i",{className:"ion-social-facebook"})})}),Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"/",children:Object(O.jsx)("i",{className:"ion-social-twitter"})})}),Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"/",children:Object(O.jsx)("i",{className:"ion-social-instagram"})})}),Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"/",children:Object(O.jsx)("i",{className:"ion-social-googleplus"})})}),Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"/",children:Object(O.jsx)("i",{className:"ion-social-tumblr"})})}),Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"/",children:Object(O.jsx)("i",{className:"ion-social-dribbble"})})})]})}),Object(O.jsx)("p",{children:"\xa9 Copyrights Folio. All rights reserved."}),Object(O.jsx)("div",{className:"credits",children:Object(O.jsx)(l.b,{to:"https://bootstrapmade.com/",children:"BootstrapMade"})})]})})};var p=function(e){var t=e.children;return Object(O.jsx)("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"},children:t})},x=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(p,{children:[Object(O.jsx)("h1",{children:"404 Page Not Found"}),Object(O.jsx)("h1",{children:Object(O.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})};var f=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(p,{children:[Object(O.jsx)("h1",{children:"Success!"}),Object(O.jsx)("h2",{children:"Thank you for your purchase!"}),Object(O.jsx)("h2",{children:"You will now be redirected to the homepage"})]})})},g=c(98),v=c(99),N=c(78),k=new(function(){function e(){Object(g.a)(this,e)}return Object(v.a)(e,[{key:"getProfile",value:function(){return Object(N.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return Object(N.a)(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),y=c.p+"static/media/logo.c67af794.png";var w,_,S,T,I,E,C,D,A,L,P=function(){return Object(O.jsx)("nav",{id:"main-nav",children:k.loggedIn()?Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"logo",children:Object(O.jsx)(l.b,{to:"/",children:Object(O.jsx)("img",{src:y,alt:"logo"})})}),Object(O.jsx)("div",{className:"responsive",children:Object(O.jsx)("i",{"data-icon":"m",className:"ion-navicon-round"})}),Object(O.jsxs)("ul",{className:"nav-menu list-unstyled",children:[Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"/",className:"smoothScroll",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"/about",className:"smoothScroll",children:"About"})}),Object(O.jsx)("li",{children:Object(O.jsxs)(l.b,{to:"/profile",className:"smoothScroll",children:[k.getProfile().data.firstName,"'s Profile"]})}),Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"/",className:"smoothScroll",onClick:function(){return k.logout()},children:"Logout"})}),Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"/",className:"smoothScroll",children:"Contact"})})]})]})}):Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"logo",children:Object(O.jsx)(l.b,{to:"/",children:Object(O.jsx)("img",{src:y,alt:"logo"})})}),Object(O.jsx)("div",{className:"responsive",children:Object(O.jsx)("i",{"data-icon":"m",className:"ion-navicon-round"})}),Object(O.jsxs)("ul",{className:"nav-menu list-unstyled",children:[Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"/",className:"smoothScroll",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"/about",className:"smoothScroll",children:"About"})}),Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"/signup",className:"smoothScroll",children:"Sign Up"})}),Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"/login",className:"smoothScroll",children:"Login"})}),Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"/",className:"smoothScroll",children:"Contact"})})]})]})})})},U=c(20),$=c(23),F=c(18),R=c.n(F),M=R()(w||(w=Object($.a)(["\n{\n  skills {\n    _id\n    name\n  }\n}\n"]))),q=(R()(_||(_=Object($.a)(["\n{\n  me {\n    _id\n    email\n    firstName\n    lastName\n    profileText\n  }\n}\n"]))),R()(S||(S=Object($.a)(["\n  {\n    me {\n      _id\n      email\n      firstName\n      lastName\n      profileText\n      upload{\n        id\n        path\n      }\n      skills {\n        _id\n        name\n      }\n    }\n  }\n"])))),Q=R()(T||(T=Object($.a)(["\nquery user($id:ID!) {\n  user(_id: $id) {\n    _id\n    email\n    firstName\n    lastName\n    profileText\n    image \n    skills {\n      _id\n      name\n    }\n    jobOffers {\n      description\n      positionFilled\n      image\n      role\n      createdAt\n    }\n    applied {\n      description\n      positionFilled\n      image\n      role\n      createdAt\n    }\n    matchedJobs {\n      description\n      positionFilled\n      image\n\n      createdAt\n    }\n  }\n}\n"]))),B=(R()(I||(I=Object($.a)(["\n  query getusers($id: ID) {\n    users(_id: $ID) {\n      _id\n    email\n    firstName\n    lastName\n    profileText\n    image \n    skills {\n      _id\n      name\n    }\n    jobOffers {\n      description\n      positionFilled\n      image\n      skills {\n        _id\n        name\n      }\n      createdAt\n    }\n    applied {\n      description\n      positionFilled\n      image\n      skills {\n        _id\n        name\n      }\n      createdAt\n    }\n    matchedJobs {\n      description\n      positionFilled\n      image\n      skills {\n        _id\n        name\n      }\n      createdAt\n    }\n  }\n}\n    \n"]))),R()(E||(E=Object($.a)(["\n  query getJobs($skills: ID) {\n    jobs(skills: $skills) {\n      _id\n      email\n      role\n      description\n      image\n      createdAt\n      skills {\n        _id\n        name\n      }\n    }\n  }\n"])))),J=R()(C||(C=Object($.a)(["\n  {\n    images {\n      id\n      filename\n      path\n    }\n  } \n"]))),H=(R()(D||(D=Object($.a)(["\n  {\n    jobs {\n      _id\n      email\n      description\n      role\n      image\n      createdAt\n      skills {\n        name\n      }\n    }\n  }\n"]))),R()(A||(A=Object($.a)(["\n  query getCheckout($products: ID!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),R()(L||(L=Object($.a)(["\n{\n  product {\n    _id\n    name\n    description\n    price\n    quantity\n  }\n}\n"])))),G=function(e){var t=e.image,c=(e.upload,e.role),s=e.firstName,n=e.lastName;e._id,e.email,e.skill;return Object(O.jsx)("div",{id:"hero",className:"home",style:{backgroundImage:"url(".concat(t,")")},children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"hero-content",children:[Object(O.jsxs)("h1",{style:{color:"black"},children:[s," ",n,Object(O.jsx)("span",{})]}),Object(O.jsx)("p",{className:"typed-items","data-typed-person":c,children:"None"}),Object(O.jsxs)("ul",{className:"list-unstyled list-social",children:[Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"/",children:Object(O.jsx)("i",{className:"ion-social-facebook"})})}),Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"/",children:Object(O.jsx)("i",{className:"ion-social-twitter"})})}),Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"/",children:Object(O.jsx)("i",{className:"ion-social-instagram"})})}),Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"/",children:Object(O.jsx)("i",{className:"ion-social-googleplus"})})}),Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"/",children:Object(O.jsx)("i",{className:"ion-social-tumblr"})})}),Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"/",children:Object(O.jsx)("i",{className:"ion-social-dribbble"})})})]})]})})})};function V(e,t,c){return new Promise((function(s,n){var i,a,l,r=window.indexedDB.open("hire",1);r.onupgradeneeded=function(e){var t=r.result;t.createObjectStore("jobs",{keyPath:"_id"}),t.createObjectStore("skills",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"}),t.createObjectStore("product",{keyPath:"_id"})},r.onerror=function(e){console.log("There was an error")},r.onsuccess=function(n){switch(i=r.result,a=i.transaction(e,"readwrite"),l=a.objectStore(e),i.onerror=function(e){console.log("error",e)},t){case"put":l.put(c),s(c);break;case"get":var o=l.getAll();o.onsuccess=function(){s(o.result)};break;case"delete":l.delete(c._id);break;default:console.log("No valid method")}a.oncomplete=function(){i.close()}}}))}var z,K,Y,W,Z=c.p+"static/media/spinner.689d9a07.gif",X="UPDATE_JOBS",ee="UPDATE_CURRENT_JOB",te="UPDATE_SKILLS",ce="UPDATE_CURRENT_SKILL",se="UPDATE_OFFERS",ne="UPDATE_CURRENT_USER",ie="ADD_TO_CART",ae="REMOVE_FROM_CART",le="CLEAR_CART",re="TOGGLE_CART",oe="UPDATE_PRODUCT",je="UPDATE_CART_QUANTITY",de="UPDATE_IMAGE",be=c(73),me=function(){Object(u.b)();var e=Object(u.c)((function(e){return e})),t=(e.offers,e.product,e.cart,Object(r.g)().id),n=Object(s.useState)({}),i=Object(U.a)(n,2),a=(i[0],i[1],Object(o.useQuery)(H).productData);console.log("all products",a);var j=Object(s.useState)({}),d=Object(U.a)(j,2),b=d[0],m=d[1],h=Object(s.useState)({}),p=Object(U.a)(h,2),x=(p[0],p[1],Object(o.useQuery)(t?Q:q,{variables:{id:t}})),f=(x.loading,x.data),g=(null===f||void 0===f?void 0:f.me)||(null===f||void 0===f?void 0:f.user)||{};if(console.log("user data",g),Object(s.useEffect)((function(){f&&(m(f.me.upload.path.split("/")),console.log("meconsol",f.me.upload.path.split("/")))}),[f,m]),k.loggedIn()&&k.getProfile().data._id===t)return Object(O.jsx)(r.a,{to:"/profile"});console.log("the currentest upload",b);var v=c(120)("./".concat(b[5])).then((function(e){return console.log(e)}));return console.log(v),Object(O.jsxs)("section",{style:{margin:0},children:[Object(O.jsx)(G,{image:be.default,firstName:g.firstName,lastName:g.lastName}),Object(O.jsxs)("main",{id:"main",children:[Object(O.jsx)("section",{className:"breadcrumbs",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(O.jsx)("h2",{children:"Portfolio Details"}),Object(O.jsxs)("ol",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"/",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"/",children:"Portfolio"})}),Object(O.jsx)("li",{children:"Portfolio Details"})]})]})})}),Object(O.jsx)("section",{className:"portfolio-details",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"portfolio-details-container",children:Object(O.jsxs)("div",{className:"portfolio-info",children:[Object(O.jsx)("h3",{children:"Current Job Offers"}),Object(O.jsx)("ul",{})]})}),Object(O.jsxs)("div",{className:"portfolio-description",children:[Object(O.jsxs)("h2",{children:["About ",g.firstName," ",g.lastName]}),Object(O.jsx)("p",{children:g.profileText})]})]})})]})]})},ue=c(45),Oe=c(7),he=c(41),pe=c.n(he),xe=c(56),fe=R()(z||(z=Object($.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        email\n      }\n    }\n  }\n"]))),ge=R()(K||(K=Object($.a)(["\n  mutation addUser($firstName: String!, $lastName:String!, $email:String!, $password: String!, $profileText: String!, $skills: [ID], $upload:ID) {\n    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, profileText: $profileText, skills: $skills, upload: $upload) {\n      token\n      user {\n        _id\n        email\n      }\n    }\n  }\n"]))),ve=R()(Y||(Y=Object($.a)(["\n  mutation uploadFile($file: Upload!) {\n    uploadFile(file: $file) {\n      id\n      filename\n      mimetype\n      path\n    }\n  }\n"]))),Ne=(R()(W||(W=Object($.a)(["\n  mutation addOrder($product: ID!) {\n    addOrder(product: $product) {\n      purchaseDate\n      product {\n        _id\n      name\n      description\n      price\n      }\n    }\n  }\n"]))),c(103)),ke=c(51);var ye=function(e){var t=Object(u.b)(),c=Object(u.c)((function(e){return e})),n=Object(s.useState)({email:"",password:"",firstName:"",lastName:"",profileText:""}),i=Object(U.a)(n,2),a=i[0],l=i[1],r=Object(o.useMutation)(ge),j=Object(U.a)(r,1)[0],d=Object(s.useState)({}),b=Object(U.a)(d,2),m=b[0],h=b[1],p=Object(o.useMutation)(ve,{refetchQueries:[{query:J}]}),x=Object(U.a)(p,2),f=x[0],g=x[1].data;g&&console.log(g.uploadFile.id);var v=function(){var e=Object(xe.a)(pe.a.mark((function e(t){return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),m&&(console.log("filesssss",m),f({variables:{file:m}}),h({})),e.abrupt("return",m);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=Object(Ne.a)({accept:"image/*",onDrop:function(e){h(Object.assign(e[0],{preview:URL.createObjectURL(e[0])})),console.log("aacepted",e)}}),y=N.getRootProps,w=N.getInputProps,_=Object(O.jsx)("div",{className:"thumb",children:Object(O.jsx)("div",{className:"thumb-inner",children:Object(O.jsx)("img",{src:m.preview,className:"img",alt:m.length&&"img"})})},m.name);Object(s.useEffect)((function(){return function(){URL.revokeObjectURL(m.preview)}}),[m]);var S=c.skills,T=Object(o.useQuery)(M),I=T.loading,E=T.data;Object(s.useEffect)((function(){E&&t({type:te,skills:E.skills})}),[E,I,t]);var C=function(){var e=Object(xe.a)(pe.a.mark((function e(t){var c,s;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,j({variables:{email:a.email,password:a.password,firstName:a.firstName,lastName:a.lastName,profileText:a.profileText,skills:a.skills,upload:g.uploadFile.id}});case 3:c=e.sent,s=c.data.addUser.token,k.login(s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(e){var t=e.target,c=t.name,s=t.value;l(Object(Oe.a)(Object(Oe.a)({},a),{},Object(ue.a)({},c,s)))},A=ke.default;return Object(O.jsxs)("section",{style:{margin:0},children:[Object(O.jsx)(G,{image:A,role:"H!red"}),Object(O.jsx)("div",{id:"contact",className:"paddsection",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{className:"contact-block1",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-lg-6",children:Object(O.jsxs)("div",{className:"contact-contact",children:[Object(O.jsx)("h2",{className:"mb-30",children:"Signup"}),Object(O.jsxs)("ul",{className:"contact-details",children:[Object(O.jsx)("li",{children:Object(O.jsx)("span",{children:"....."})}),Object(O.jsx)("li",{children:Object(O.jsx)("span",{children:"....."})}),Object(O.jsx)("li",{children:Object(O.jsx)("span",{children:"....."})}),Object(O.jsx)("li",{children:Object(O.jsx)("span",{children:"....."})})]})]})}),Object(O.jsx)("div",{className:"col-lg-6",children:Object(O.jsx)("form",{onSubmit:C,className:"php-email-form",encType:"multipart/form-data",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-lg-6",children:Object(O.jsxs)("div",{className:"form-group contact-block1",children:[Object(O.jsx)("input",{type:"text",name:"firstName",className:"form-control",id:"firstName",placeholder:"First Name",onChange:D}),Object(O.jsx)("div",{className:"validate"})]})}),Object(O.jsx)("div",{className:"col-lg-6",children:Object(O.jsxs)("div",{className:"form-group contact-block1",children:[Object(O.jsx)("input",{type:"text",name:"lastName",className:"form-control",id:"lastName",placeholder:"Last Name",onChange:D}),Object(O.jsx)("div",{className:"validate"})]})}),Object(O.jsx)("div",{className:"col-lg-6",children:Object(O.jsxs)("div",{className:"form-group contact-block1",children:[Object(O.jsx)("input",{type:"email",name:"email",className:"form-control",id:"email",placeholder:"email",onChange:D}),Object(O.jsx)("div",{className:"validate"})]})}),Object(O.jsx)("div",{className:"col-lg-6",children:Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("input",{type:"password",className:"form-control",name:"password",id:"pwd",placeholder:"Password",onChange:D}),Object(O.jsx)("div",{className:"validate"})]})}),Object(O.jsxs)("section",{className:"container",children:[Object(O.jsxs)("div",Object(Oe.a)(Object(Oe.a)({},y({className:"dropzone"})),{},{children:[Object(O.jsx)("input",Object(Oe.a)({},w())),Object(O.jsx)("p",{children:"Drag 'n' drop some file here, or click to select file"})]})),Object(O.jsxs)("aside",{className:"thumb-container",children:[_,Object(O.jsx)("button",{type:"submit",className:"button",style:{display:m&&!Object.keys(m).length&&"none"},onClick:v,children:"Upload"})]})]}),Object(O.jsx)("div",{className:"col-lg-12",style:{paddingBottom:20},children:S.map((function(e){return Object(O.jsxs)("div",{className:"form-check",children:[Object(O.jsx)("input",{type:"checkbox",name:"skills",className:"form-check-input",value:e._id,onChange:D}),Object(O.jsx)("label",{className:"form-check-label",children:e.name})]},e._id)}))}),Object(O.jsx)("div",{className:"col-lg-12",children:Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("textarea",{className:"form-control",name:"profileText",rows:"20",id:"profileText",placeholder:"Please tell us about yourself and your job experience. Include as much detail as you can.",onChange:D}),Object(O.jsx)("div",{className:"validate"})]})}),Object(O.jsx)("div",{className:"col-lg-12",children:Object(O.jsx)("input",{type:"submit",className:"btn btn-defeault btn-send",value:"Signup"})})]})})})]})})})})]})};var we=function(){var e=Object(s.useState)({email:"",password:""}),t=Object(U.a)(e,2),c=t[0],n=t[1],i=Object(o.useMutation)(fe),a=Object(U.a)(i,2),l=a[0],r=(a[1].error,function(e){var t=e.target,s=t.name,i=t.value;n(Object(Oe.a)(Object(Oe.a)({},c),{},Object(ue.a)({},s,i)))}),j=function(){var e=Object(xe.a)(pe.a.mark((function e(t){var s,n;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,l({variables:{email:c.email,password:c.password}});case 4:s=e.sent,n=s.data.login.token,k.login(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{id:"contact",className:"paddsection",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{className:"contact-block1",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-lg-6",children:Object(O.jsxs)("div",{className:"contact-contact",children:[Object(O.jsx)("h2",{className:"mb-30",children:"Login"}),Object(O.jsxs)("ul",{className:"contact-details",children:[Object(O.jsx)("li",{children:Object(O.jsx)("span",{children:"....."})}),Object(O.jsx)("li",{children:Object(O.jsx)("span",{children:"....."})}),Object(O.jsx)("li",{children:Object(O.jsx)("span",{children:"....."})}),Object(O.jsx)("li",{children:Object(O.jsx)("span",{children:"....."})})]})]})}),Object(O.jsx)("div",{className:"col-lg-6",children:Object(O.jsx)("form",{onSubmit:j,className:"php-email-form",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-lg-6",children:Object(O.jsxs)("div",{className:"form-group contact-block1",children:[Object(O.jsx)("input",{type:"email",name:"email",className:"form-control",id:"email",placeholder:"email",onChange:r}),Object(O.jsx)("div",{className:"validate"})]})}),Object(O.jsx)("div",{className:"col-lg-6",children:Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("input",{type:"password",className:"form-control",name:"password",id:"pwd",placeholder:"Password",onChange:r}),Object(O.jsx)("div",{className:"validate"})]})}),Object(O.jsx)("div",{className:"col-lg-12",children:Object(O.jsx)("input",{type:"submit",className:"btn btn-defeault btn-send",value:"Login"})})]})})})]})})})})};var _e=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e})).skills,c=Object(o.useQuery)(M),n=c.loading,i=c.data;return Object(s.useEffect)((function(){i?(e({type:te,skills:i.skills}),i.skills.forEach((function(e){V("skills","put",e)}))):n||V("skills","get").then((function(t){e({type:te,skills:t})}))}),[i,n,e]),Object(O.jsxs)("ul",{id:"portfolio-flters",children:[Object(O.jsx)("li",{className:"filter-active"}),t.map((function(t){return Object(O.jsx)("li",{onClick:function(){var c;c=t._id,e({type:ce,currentSkill:c})},children:t.name},t._id)}))]})},Se=function(e){var t=e.image,c=e.role,s=e._id,n=e.skills;Object(u.b)(),Object(u.c)((function(e){return e}));return Object(O.jsx)("div",{className:"col-lg-4 col-md-6 portfolio-item filter-app",children:Object(O.jsxs)(l.b,{to:"/jobs/".concat(s),children:[Object(O.jsx)("img",{src:t,className:"img-fluid",alt:""}),Object(O.jsxs)("div",{className:"portfolio-info",children:[Object(O.jsx)("h4",{children:c}),Object(O.jsx)("p",{children:n.name})]})]})})};var Te=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e})),c=t.currentSkill;console.log(c);var n=Object(o.useQuery)(B),i=n.loading,a=n.data;console.log(i),Object(s.useEffect)((function(){a?(e({type:X,jobs:a.jobs}),a.jobs.forEach((function(e){V("jobs","put",e)}))):i||V("jobs","get").then((function(t){e({type:X,jobs:t})}))}),[a,i,e]),console.log(c);var l=ke.default;return Object(O.jsxs)("section",{style:{margin:0},children:[Object(O.jsx)(G,{image:l,role:"H!red"}),Object(O.jsxs)("div",{id:"portfolio",className:"paddsection",children:[Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{className:"section-title text-center",children:Object(O.jsx)("h2",{children:"Browse Jobs"})})}),t.jobs.length?Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-lg-12 d-flex justify-content-center",children:Object(O.jsx)(_e,{})})}),Object(O.jsx)("div",{className:"row portfolio-container",children:(c?t.jobs.filter((function(e){return e.skills._id===c})):t.jobs).map((function(e){return Object(O.jsx)(Se,{_id:e._id,image:e.image,role:e.role,skills:e.skills},e._id)}))})]}):Object(O.jsx)("h3",{children:"You haven't added any jobs yet!"}),i?Object(O.jsx)("img",{src:Z,alt:"loading"}):null]})]})},Ie=function(){return Object(O.jsx)("main",{id:"main",children:Object(O.jsx)(Te,{})})},Ee=function(){return Object(O.jsx)("div",{className:"main-content paddsection",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{className:"row justify-content-center",children:Object(O.jsx)("div",{className:"col-md-8 col-md-offset-2",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"container-main single-main",children:[Object(O.jsx)("div",{className:"col-md-12",children:Object(O.jsxs)("div",{className:"block-main mb-30",children:[Object(O.jsx)("img",{src:"assets/img/blog-post-big.jpg",className:"img-responsive",alt:"reviews2"}),Object(O.jsxs)("div",{className:"content-main single-post padDiv",children:[Object(O.jsx)("div",{className:"journal-txt",children:Object(O.jsx)("h4",{children:Object(O.jsx)("a",{href:"#",children:"SO LETS MAKE THE MOST IS BEAUTIFUL"})})}),Object(O.jsx)("div",{className:"post-meta",children:Object(O.jsxs)("ul",{className:"list-unstyled mb-0",children:[Object(O.jsxs)("li",{className:"author",children:["by:",Object(O.jsx)("a",{href:"#",children:"medsign"})]}),Object(O.jsxs)("li",{className:"date",children:["date:",Object(O.jsx)("a",{href:"#",children:"March 31, 2017"})]}),Object(O.jsxs)("li",{className:"commont",children:[Object(O.jsx)("i",{className:"ion-ios-heart-outline"}),Object(O.jsx)("a",{href:"#",children:"3 Comments"})]})]})}),Object(O.jsx)("p",{className:"mb-30",children:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}),Object(O.jsx)("p",{className:"mb-30",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),Object(O.jsx)("blockquote",{children:"If you are still looking for that one person who will change your life, take a look in the mirror."}),Object(O.jsx)("p",{className:"mb-30",children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'})]})]})}),Object(O.jsx)("div",{className:"col-md-12",children:Object(O.jsx)("div",{className:"comments text-left padDiv mb-30",children:Object(O.jsx)("div",{className:"entry-comments"})})}),Object(O.jsx)("div",{className:"col-lg-12",children:Object(O.jsx)("div",{className:"cmt padDiv",children:Object(O.jsx)("form",{id:"comment-form",method:"post",action:"",role:"form",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-lg-6",children:Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)("input",{id:"form_name",type:"text",name:"name",className:"form-control",placeholder:"Name *",required:"required"})})}),Object(O.jsx)("div",{className:"col-lg-6",children:Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)("input",{id:"form_email",type:"email",name:"email",className:"form-control",placeholder:"email *",required:"required"})})}),Object(O.jsx)("div",{className:"col-md-12",children:Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)("input",{id:"form_name",type:"text",name:"website",className:"form-control",placeholder:"Website"})})}),Object(O.jsx)("div",{className:"col-lg-12",children:Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)("textarea",{id:"form_message",name:"message",className:"form-control",placeholder:"Message *",style:{Height:200},required:"required"})})}),Object(O.jsx)("div",{className:"col-lg-12",children:Object(O.jsx)("input",{type:"submit",className:"btn btn-defeault btn-send",value:"Send message"})})]})})})})]})})})})})})},Ce=c(66),De=c(47),Ae={jobs:[],skills:[],currentSkill:"",currentJob:"",offers:[],cart:[],product:[],upload:[]},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return Object(Oe.a)(Object(Oe.a)({},e),{},{jobs:Object(De.a)(t.jobs)});case ee:return Object(Oe.a)(Object(Oe.a)({},e),{},{currentJob:t.currentJob});case te:return Object(Oe.a)(Object(Oe.a)({},e),{},{skills:Object(De.a)(t.skills)});case ce:return Object(Oe.a)(Object(Oe.a)({},e),{},{currentSkill:t.currentSkill});case se:return Object(Oe.a)(Object(Oe.a)({},e),{},{offers:Object(De.a)(t.offers)});case ne:return Object(Oe.a)(Object(Oe.a)({},e),{},{cuurentUser:t.currentUser});case ie:return Object(Oe.a)(Object(Oe.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(De.a)(e.cart),[t.product])});case ae:var c=e.cart.filter((function(e){return e._id!==t._id}));return Object(Oe.a)(Object(Oe.a)({},e),{},{cartOpen:c.length>0,cart:c});case je:return Object(Oe.a)(Object(Oe.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case le:return Object(Oe.a)(Object(Oe.a)({},e),{},{cartOpen:!1,cart:[]});case re:return Object(Oe.a)(Object(Oe.a)({},e),{},{cartOpen:!e.cartOpen});case oe:return Object(Oe.a)(Object(Oe.a)({},e),{},{product:Object(De.a)(t.product)});case de:return Object(Oe.a)(Object(Oe.a)({},e),{},{upload:t.upload});default:return e}},Pe=Object(Ce.b)(Le),Ue=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e})).jobs,c=Object(r.g)().id,n=Object(s.useState)({}),i=Object(U.a)(n,2),a=i[0],j=i[1],d=Object(o.useQuery)(B),b=d.loading,m=d.data;return Object(s.useEffect)((function(){t.length?j(t.find((function(e){return e._id===c}))):m&&e({type:X,jobs:m.jobs})}),[t,m,b,e,c]),console.log(a),Object(O.jsxs)("section",{style:{margin:0},children:[Object(O.jsx)(G,{image:a.image,role:a.role,skill:a.skill}),Object(O.jsxs)(O.Fragment,{children:[a?Object(O.jsxs)("main",{id:"main",children:[Object(O.jsx)("section",{className:"breadcrumbs",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(O.jsx)("h2",{children:"Job Details"}),Object(O.jsxs)("ol",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"/",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"/",children:"User Profile"})})]})]})})}),Object(O.jsx)("section",{className:"portfolio-details",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"portfolio-details-container",children:Object(O.jsx)("div",{className:"portfolio-description",children:Object(O.jsx)("h3",{children:" Needed"})})}),Object(O.jsxs)("div",{className:"portfolio-description",children:[Object(O.jsxs)("h2",{children:["About Our ",a.role]}),Object(O.jsx)("p",{children:a.description})]})]})})]}):null,b?Object(O.jsx)("img",{src:Z,alt:"loading"}):null]})]})},$e=b()({uri:"graphql"}),Fe=new j.a({request:function(e){var t=localStorage.getItem("id_token");e.setContext({headers:{authorization:t?"Bearer ".concat(t):""}})},cache:new m.a({typePolicies:{Skills:{keyFields:[]},Images:{keyFields:["id","filename"]}}}),link:$e});var Re=function(){return Object(O.jsx)(o.ApolloProvider,{client:Fe,children:Object(O.jsx)(l.a,{children:Object(O.jsx)("div",{children:Object(O.jsxs)(u.a,{store:Pe,children:[Object(O.jsx)(P,{}),Object(O.jsxs)(r.d,{children:[Object(O.jsx)(r.b,{exact:!0,path:"/",component:Ie}),Object(O.jsx)(r.b,{exact:!0,path:"/login",component:we}),Object(O.jsx)(r.b,{exact:!0,path:"/signup",component:ye}),Object(O.jsx)(r.b,{exact:!0,path:"/about",component:Ee}),Object(O.jsx)(r.b,{exact:!0,path:"/profile/:id?",component:me}),Object(O.jsx)(r.b,{exact:!0,path:"/jobs/:id",component:Ue}),Object(O.jsx)(r.b,{exact:!0,path:"/success",component:f}),Object(O.jsx)(r.b,{component:x})]}),Object(O.jsx)(h,{})]})})})})},Me=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,135)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),i(e),a(e)}))};a.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(Re,{})}),document.getElementById("root")),Me()},51:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/employeeproduct.aa52d149.jpg"},70:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/_a67_cQQD-pexels-andrea-piacquadio-818819.14e3db0c.jpg"}},[[126,1,2]]]);
//# sourceMappingURL=main.afb8dedb.chunk.js.map