(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){e.exports=a(181)},181:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(26),i=a.n(r),o=a(25);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(45),s=a(46),m=a(51),u=a(47),d=a(52),h=a(3),g=a(27),p=function(e){var t=null,a=null,n=null;return e.image&&(t=l.a.createElement(h.e,{className:"img-fluid",src:e.image.src,alt:e.image.alt,waves:!0})),e.title&&(a=l.a.createElement(h.g,null,e.title)),e.text&&(n=l.a.createElement(h.f,null,e.text)),l.a.createElement(h.c,null,t,l.a.createElement(h.d,null,a,n,e.button))},E=a(100),f=a(184),y=a(188),v=a(185),w=function(e){var t=[];return e.highlights&&e.highlights.forEach(function(e,a){var n=null;e.link&&(n=l.a.createElement(f.a,{variant:"primary",size:"sm",as:E.NavHashLink,to:e.link},"Learn more...")),t.push(l.a.createElement(y.a.Item,{key:a},l.a.createElement(v.a,{fluid:!0,className:"d-block w-100",src:e.imgSrc,alt:e.imgAlt}),l.a.createElement(y.a.Caption,null,l.a.createElement("div",{style:{fontWeight:"bold"}},e.content),n)))}),e.highlights?l.a.createElement("div",null,l.a.createElement(y.a,null,t)):null},b=function(){return l.a.createElement("div",null,l.a.createElement("hr",null),l.a.createElement(w,{highlights:[{imgSrc:"./res/img/projects/galaxy_adventure.jpg",imgAlt:"Screen shot from 'Galaxy Adventure'",content:"Galaxy Adventure",link:"./projects#Project-GalaxyAdventure"},{imgSrc:"./res/img/projects/midnight_rising.jpg",imgAlt:"Screen shot from 'Midnight Rising'",content:"Midnight Rising",link:"./projects#Project-MidnightRising"},{imgSrc:"./res/img/projects/crazy_carnival.jpg",imgAlt:"Screen shot from 'Crazy Carnival'",content:"The Crazy Carnival",link:"./projects#Project-CrazyCarnival"},{imgSrc:"./res/img/projects/cpu_online.jpg",imgAlt:"Screen shot from 'CPU Online'",content:"CPU Online",link:"./projects#Project-CPUonline"}]}),l.a.createElement("hr",null),l.a.createElement("h1",{className:"App-Header"},"Explore"),l.a.createElement("div",{className:"App-CardGroup"},l.a.createElement(p,{title:"About Me",text:"Hi, my name is Andrew Alford. I am a junior Software \n\t\t\t\tEngineer from the UK specialising in both games development \n\t\t\t\t(through my degree) and programming for the web \n\t\t\t\t(through my own interests). My goals are to constantly be\n\t\t\t\timproving my quality of code and to work within industry \n\t\t\t\ton new projects with exciting technologies.",button:l.a.createElement(h.b,{className:"mb-4"},l.a.createElement(h.a,{color:"primary",onClick:function(){return window.scrollTo(0,0)},href:"#/timeline"},"View my Timeline..."))}),l.a.createElement(p,{title:"My Qualifications",text:"I have been programming for over five years now and have\n\t\t\t\ta First-Class Degree in Computer Science with Games Development\n\t\t\t\tfrom Northumbria University. Click the link below to view a \n\t\t\t\tfull break-down of my qualifications.",button:l.a.createElement(h.a,{color:"primary",href:"#/qualifications",onClick:function(){return window.scrollTo(0,0)}},"Learn More...")}),l.a.createElement(p,{title:"Projects I've Worked on",text:"Throughout University I have worked on many projects both\n\t\t\t\tindividually and within groups such as games, animations, and \n\t\t\t\teducational simulators. Click the link below to learn about \n\t\t\t\tall the University projects I\u2019m most proud of.",button:l.a.createElement(h.a,{color:"primary",href:"#/projects",onClick:function(){return window.scrollTo(0,0)}},"Learn More...")})))},C=a(186),j=a(187),k=function(e){var t=[];if(e.info){var a=0;e.info.forEach(function(e,n){"TBD"!==e.grade?(t.push(l.a.createElement("tr",{key:n},l.a.createElement("td",null,e.module),l.a.createElement("td",null,e.grade,"%"))),a+=e.grade):t.push(l.a.createElement("tr",{key:n},l.a.createElement("td",null,e.module),l.a.createElement("td",null,e.grade)))}),a=(a/=e.info.length).toFixed(1),t.push(l.a.createElement("tr",{key:e.info.length+1},l.a.createElement("th",null,"Overall"),l.a.createElement("td",null,a,"%")))}return e.info?l.a.createElement(C.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Module"),l.a.createElement("th",{width:"10%"},"Grade"))),l.a.createElement("tbody",null,t)):null},S=function(){return l.a.createElement("div",null,l.a.createElement("hr",null),l.a.createElement("h1",{className:"App-Header"},"Qualifications"),l.a.createElement("div",null,l.a.createElement("h2",null,"Bachelor of Science (Honours) in Computer Science at Northumbria University 2016-2019"),l.a.createElement("h3",null,"Year 1"),l.a.createElement(k,{info:[{module:"Computer Fundamentals",grade:75},{module:"Object-Oriented Programming",grade:96},{module:"Procedual Programming",grade:100},{module:"Relational Databases",grade:85},{module:"Systems Analysis",grade:74},{module:"Web Technologies",grade:83}]}),l.a.createElement("h3",null,"Year 2"),l.a.createElement(k,{info:[{module:"Computer Networks and Control Systems",grade:93},{module:"Intelligent Systems",grade:70},{module:"Operating Systems and Concurrency",grade:84},{module:"Program Design and Development",grade:85},{module:"Software Engineering Practice",grade:70},{module:"Web Programming",grade:90}]}),l.a.createElement("h3",null,"Year 3"),l.a.createElement(k,{info:[{module:"Software Architecture for Games",grade:86},{module:"Team Project and Professionalism",grade:"TBD"},{module:"Games Design",grade:71},{module:"Computer Graphics and Animation",grade:70.5},{module:"Individual Computing Project",grade:77}]}),l.a.createElement("h2",null,"Other Qualifications"),l.a.createElement(j.a,null,l.a.createElement(j.a.Item,null,"A-Level Computer Science Grade B"),l.a.createElement(j.a.Item,null,"A-Level Mathematics Grade B"),l.a.createElement(j.a.Item,null,"A-Level Design & Technology Grade B"),l.a.createElement(j.a.Item,null,"Nine GCSE's including Maths, English, and Science"))))},A=function(){return l.a.createElement("div",null,l.a.createElement("hr",null),l.a.createElement("h1",{className:"App-Header"},"Projects"),l.a.createElement("div",{style:{marginTop:"2%",marginBottom:"2%"}},l.a.createElement("div",{id:"Project-NoRestFortheMartians"},l.a.createElement("h2",null,"No Rest for the Martians - May 2017"),l.a.createElement(v.a,{fluid:!0,className:"d-block w-100",style:{paddingBottom:"2%"},src:"./res/img/projects/no_rest_for_the_martians.jpg",alt:"Screen shot from 'No Rest for the Martians'"}),l.a.createElement("p",null,"Developed by myself and three other students, 'No Rest for the Martians' was the major piece of groupwork submitted for my second year of University. Developed using Unreal Engine 4, the game is a top-down shooter where the player must fight killer robots on the surface of Mars. My roles on this project included both Sound Design and level design, making me responsible for the implementing:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Sourcing and implementing sound effects in the game such as footsteps, gunfire, and bubbling lava."),l.a.createElement("li",null,"Sourcing and implementing music within the game."),l.a.createElement("li",null,"Providing dialogue for the enemy characters within the game."),l.a.createElement("li",null,"Using C++ to script functional doors which open/close in response to the player's actions within the game."),l.a.createElement("li",null,"Using C++ to create reusable and customisable 'pick-up' items which affect the player's stats."),l.a.createElement("li",null,"Creating models which change state and eventually explode as a result of damage caused by player interaction."))),l.a.createElement("div",{id:"Project-GalaxyAdventure"},l.a.createElement("h2",null,"Galaxy Adventure - December 2018"),l.a.createElement(v.a,{fluid:!0,className:"d-block w-100",style:{paddingBottom:"2%"},src:"./res/img/projects/galaxy_adventure.jpg",alt:"Screen shot from 'Galaxy Adventure'"}),l.a.createElement("p",null,"Using Mr Doobs THREE JS library I created 'Galaxy Adventure', an interactive VR application for both mobile and desktop devices. Two version of the project exist. The main application, which allows the user to sit inside their propeller plane and explore the galaxy, and the Object Viewer which enables users to view and interact with each individual object create for the project. Interesting concepts from this project included:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Creating 3D models in THREE JS"),l.a.createElement("li",null,"Creating particle effects for volcanic eruptions on the lava planet."),l.a.createElement("li",null,"Programming planets to orbit around the sun at various speeds."),l.a.createElement("li",null,"Implementing VR into the project.")),l.a.createElement("div",null,"Check out the main project"," ",l.a.createElement("a",{href:"http://unn-w16006135.newnumyspace.co.uk/KF6018_Assignment_1/project/"},"Here!")," ",l.a.createElement("i",null,"(Requires VR device)")),l.a.createElement("div",null,"Check out the Object Viewer"," ",l.a.createElement("a",{href:"http://unn-w16006135.newnumyspace.co.uk/KF6018_Assignment_1/project/object_viewer.html"},"Here!"))),l.a.createElement("div",{id:"Project-ChristmasConundrum"},l.a.createElement("h2",null,"Christmas Conundrum - December 2018"),l.a.createElement(v.a,{fluid:!0,className:"d-block w-100",style:{paddingBottom:"2%"},src:"./res/img/projects/christmas_game.jpg",alt:"Screen shot from 'Christmas Conundrum'"}),l.a.createElement("p",null,"'Christmas Conundrum' is a small game coded using C++ where the player can take control of Santa who can kick, punch, and throw deadly exploding presents. It was created to showcase a game engine created as part of my studies at Northumbria University. The engine is built off the Universities 'Shell Engine', which is powered by Direct X. My additions to the engine include:"),l.a.createElement("ul",null,l.a.createElement("li",null,"A component-based architecture to customise game entities so that they are lowly coupled but maintain high cohesion. This method removes many of the burdens often caused by traditional Object-Oriented programming."),l.a.createElement("li",null,"An object manager to manage all game entities."),l.a.createElement("li",null,"Loading sprites through sprite sheets and animating them."),l.a.createElement("li",null,"Music and sound effects."),l.a.createElement("li",null,"Collision detection and handling"),l.a.createElement("li",null,"A tiling system to create complex and randomly generated backdrops for the game."))),l.a.createElement("div",{id:"Project-MidnightRising"},l.a.createElement("h2",null,"Midnight Rising - May 2019"),l.a.createElement(v.a,{fluid:!0,className:"d-block w-100",style:{paddingBottom:"2%"},src:"./res/img/projects/midnight_rising.jpg",alt:"Screen shot from 'Midnight Rising'"}),l.a.createElement("p",null,"Similar to 'No Rest for the Martians', 'Midnight Rising' was the major piece of groupwork submitted for my final year of University. 'Midnight Rising' is a top-down wave-based survival game where players aim to last as long as possible while fighting enemy zombies which get increasingly tougher to combat as waves increment The group consisted of five members including myself, and my role within the group was to implement the games controls and gameplay loop using C# code. This involved:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Customisable control schemes which allow the player to move around the environment."),l.a.createElement("li",null,"Support for both PC and Xbox One peripherals. "),l.a.createElement("li",null,"The gameplay loop to initiate cooldown periods and start/stop waves."),l.a.createElement("li",null,"Tracking of the player's state such as their health."),l.a.createElement("li",null,"Dynamic Spawning of enemies so they always spawn close to the player but outside the camera's frustrum."),l.a.createElement("li",null,"The Incrementing enemy states dependant on the current wave number."),l.a.createElement("li",null,"Additional gamemodes such as 'Barrage Mode', a mode where enemies are even tougher and there are no cooldown periods between waves."))),l.a.createElement("div",{id:"Project-CrazyCarnival"},l.a.createElement("h2",null,"Crazy Carnival - May 2019"),l.a.createElement(v.a,{fluid:!0,className:"d-block w-100",style:{paddingBottom:"2%"},src:"./res/img/projects/crazy_carnival.jpg",alt:"Screen shot from the 'Crazy Carnival'"}),l.a.createElement("p",null,"Just like 'Galaxy Adventure', 'Crazy Carnival' uses THREE JS to create an interactive animated scene. This time the user is able to explore the environment through a Microsoft Kinect via a kinectron server. Using URL parameters, the project can be ran using either the kinect or a mouse and keyboard. 'Carzy Carnival' is a much larger project than 'Galaxy Adventure' as it was created alongside three other students. Interesting concepts from this project included:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Moving around an environment using a Microsoft Kinect as a peripheral."),l.a.createElement("li",null,"Playing interactive games using the Microsoft Kinect such as:",l.a.createElement("ul",null,l.a.createElement("li",null,"Bowling"),l.a.createElement("li",null,"Football"),l.a.createElement("li",null,"Strength-O-Meter"),l.a.createElement("li",null,"Whack-A-Mole"))),l.a.createElement("li",null,"Loading rigged and animated 3D Models using JSON."),l.a.createElement("li",null,"Implementing a loading screen which dynamically displays loading data in real-time."),l.a.createElement("li",null,"Real-time physics simulation using CANNON JS.")),l.a.createElement("div",null,"Check out the project"," ",l.a.createElement("a",{href:"http://unn-w16006135.newnumyspace.co.uk/carnival_project/?useKinect=0&ip=192.168.60.56"},"Here!"))),l.a.createElement("div",{id:"Project-CPUonline"},l.a.createElement("h2",null,"CPU Online - May 2019"),l.a.createElement(v.a,{fluid:!0,className:"d-block w-100",style:{paddingBottom:"2%"},src:"./res/img/projects/cpu_online.jpg",alt:"Screen shot from 'CPU Online'"}),l.a.createElement("p",null,"Being my Undergraduate Dissertation, CPU Online is the biggest project I have completed to date. During my first year of University I learnt basic computer architecture on JASPer, a tool which has not received an update since 2003. After researching online, there is a big gap in the market for modernised CPU simulators. CPU Online is currently under consideration to replace JASPer, the current teaching tool being used at Northumbria University as it implements the following features to streamline CPU teaching:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Available anywhere to anyone as it is hosted on the Internet."),l.a.createElement("li",null,"Visualised and interactive registers and memory."),l.a.createElement("li",null,"Real-time visualisation of the 'Fetch, Decode, and Execute' cycle."),l.a.createElement("li",null,"Animations to show the interactions occurring on the CPU."),l.a.createElement("li",null,"Its own text-editor, assembly language, and assembler to allow users to write programs and assemble them without having to use external tools."),l.a.createElement("li",null,"A console which will show the state of the CPU and accept incoming commands."),l.a.createElement("li",null,"GUI elements to play, pause, speed up, slow down, or step through executing programs.")),l.a.createElement("div",null,"Check out the project"," ",l.a.createElement("a",{href:"http://unn-w16006135.newnumyspace.co.uk/cpu/build/"},"Here!")))))},P=function(){return l.a.createElement("div",null,l.a.createElement("hr",null),l.a.createElement("h1",{className:"App-Header"},"Skills"),l.a.createElement("div",{style:{marginTop:"2%",marginBottom:"2%"}},l.a.createElement("div",{id:"Skills-languages"},l.a.createElement("h2",null,"Languages"),l.a.createElement("ul",null,l.a.createElement("li",null,"JavaScript"),l.a.createElement("li",null,"C#"),l.a.createElement("li",null,"C++"),l.a.createElement("li",null,"Java"),l.a.createElement("li",null,"Python"))),l.a.createElement("div",{id:"Skills-librariesAndAPIs"},l.a.createElement("h2",null,"Libraries & APIs"),l.a.createElement("ul",null,l.a.createElement("li",null,"React"),l.a.createElement("li",null,"THREE JS"),l.a.createElement("li",null,"THREE JS"),l.a.createElement("li",null,"CANNON JS"),l.a.createElement("li",null,"OpenGL"),l.a.createElement("li",null,"DirectX"))),l.a.createElement("div",{id:"Skill-softwareAndTools"},l.a.createElement("h2",null,"Software & Tools"),l.a.createElement("ul",null,l.a.createElement("li",null,"VS Code & Visual Studio"),l.a.createElement("li",null,"Eclipse"),l.a.createElement("li",null,"Overleaf"),l.a.createElement("li",null,"The Adobe Suite")))))},x=(a(132),a(20)),N=function(){return l.a.createElement("div",null,l.a.createElement("hr",null),l.a.createElement("h2",null,"The Road So Far"),l.a.createElement(x.a,{style:{padding:"5%"}},l.a.createElement(x.a.Item,null,"An asteroid wipes out the dinosaurs, marking the end of the Cretaceous period (66 million years ago)"),l.a.createElement(x.a.Item,null,"I am born (1997-12-19)"),l.a.createElement(x.a.Item,null,"2015",l.a.createElement("ul",null,l.a.createElement("li",null,"Graduated High School with nine GCSE's"),l.a.createElement("li",null,"Got my first job flipping burgers in a famous fast food restaurant"))),l.a.createElement(x.a.Item,null,"2016",l.a.createElement("ul",null,l.a.createElement("li",null,"Graduated Sixth Form with three A-Levels"),l.a.createElement("li",null,"Began serving pints at the pub"),l.a.createElement("li",null,"Started my bachelor\u2019s degree at Northumbria University"))),l.a.createElement(x.a.Item,null,"2017 - 2018",l.a.createElement("ul",null,l.a.createElement("li",null,"Ran as a Team Captain for the Student Union's Community Week"),l.a.createElement("li",null,"Acted as Treasurer for the Student Union's Farming society which aids the"," ",l.a.createElement("a",{href:"https://www.ouseburnfarm.org.uk/"},"Ouseburn Farm charity"),"."),l.a.createElement("li",null,"Acted as Secretary for the Student Union's Ad-Hoc society"),l.a.createElement("li",null,"I came third place whilst representing my University in"," ",l.a.createElement("a",{href:"https://careersatnissan.co.uk/beamishwild/"},"Nissan's tech challenge")," ","at Beamish Wild"))),l.a.createElement(x.a.Item,null,"2019",l.a.createElement("ul",null,l.a.createElement("li",null,"Will graduate Northumbria University with a First-Class degree (hopefully)")))))},I=function(){return l.a.createElement("div",null,"404 - Sorry this pages does not exist")},O=function(){return l.a.createElement("main",null,l.a.createElement(g.g,null,l.a.createElement(g.d,{exact:!0,path:"/",component:b}),l.a.createElement(g.d,{exact:!0,path:"/qualifications",component:S}),l.a.createElement(g.d,{exact:!0,path:"/projects",component:A}),l.a.createElement(g.d,{exact:!0,path:"/skills",component:P}),l.a.createElement(g.d,{exact:!0,path:"/timeline",component:N}),l.a.createElement(g.d,{component:I})))},U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={isOpen:!1,activeItem:0},a.toggleCollapse=function(){a.setState({isOpen:!a.state.isOpen})},a.toggleTab=function(e){return function(){a.state.activeItem!==e&&a.setState({activeItem:e})}},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=[];return this.props.routes&&this.props.routes.forEach(function(t,a){e.push(l.a.createElement(h.k,{key:a},l.a.createElement(h.l,{to:t.route,exact:!0},t.name)))}),this.props.routes&&this.props.brand?l.a.createElement(h.m,{color:"white",light:!0,expand:"md"},l.a.createElement(h.n,null,this.props.brand),l.a.createElement(h.p,{onClick:this.toggleCollapse}),l.a.createElement(h.h,{id:"navbarCollapse3",isOpen:this.state.isOpen,navbar:!0},l.a.createElement(h.o,{left:!0},e))):null}}]),t}(n.Component),M=function(e){return l.a.createElement(U,{brand:e.title,routes:e.routes,download:e.download})},T=(a(94),function(){return l.a.createElement("footer",{className:"App-Footer"},l.a.createElement("hr",null),l.a.createElement("div",{style:{paddingBottom:"5%"}},"Andrew Alford 2019"),l.a.createElement("div",{style:{paddingBottom:"5%"}},l.a.createElement("a",{href:"mailto: andrewalford1@outlook.com"},"andrewalford1@outlook.com")),l.a.createElement("div",{style:{paddingBottom:"5%"}},l.a.createElement("a",{href:"./res/pdf/cv_june_2019.pdf"},"Download CV")),l.a.createElement("div",{style:{paddingBottom:"5%"}},l.a.createElement(h.b,{size:"sm",className:"mb-4"},l.a.createElement(h.a,{social:"git",color:"dark",href:"https://github.com/andrewalford1"},l.a.createElement(h.j,{fab:!0,icon:"github",className:"pr-1"})," Github"),l.a.createElement(h.a,{social:"li",color:"indigo",href:"https://www.linkedin.com/in/andrew-alford-479155152/"},l.a.createElement(h.j,{fab:!0,icon:"linkedin-in",className:"pr-1"})," Linkedin"),l.a.createElement(h.a,{social:"yt",color:"danger",href:"https://www.youtube.com/channel/UCLl-yUIOAfNw_8I6iDZ8drg"},l.a.createElement(h.j,{fab:!0,icon:"youtube",className:"pr-1"})," Youtube"))))}),R=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(h.i,{fluid:!0},l.a.createElement(M,{title:"Andrew's Portfolio",routes:[{name:"Home",route:"/"},{name:"Qualifications",route:"/qualifications"},{name:"Skills",route:"/skills"},{name:"Projects",route:"/projects"},{name:"Timeline",route:"/timeline"}],download:{name:"CV",link:"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"}}),l.a.createElement(O,null),l.a.createElement(T,null))}}]),t}(n.Component);a(178),a(179),a(180);i.a.render(l.a.createElement(o.HashRouter,null,l.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},94:function(e,t,a){}},[[111,1,2]]]);
//# sourceMappingURL=main.9de979d7.chunk.js.map