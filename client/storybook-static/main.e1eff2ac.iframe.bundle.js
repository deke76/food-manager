(self.webpackChunkclient=self.webpackChunkclient||[]).push([[179],{"./generated-stories-entry.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)},"./src/components/Task.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Archived:function(){return Archived},Default:function(){return Default},Pinned:function(){return Pinned},default:function(){return Task_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),jsx_runtime=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function Task(_ref){var _ref$task=_ref.task,title=(_ref$task.id,_ref$task.title);_ref$task.state,_ref.onArchiveTask,_ref.onPinTask;return(0,jsx_runtime.jsx)("div",{className:"list-item",children:(0,jsx_runtime.jsx)("input",{type:"text",value:title,readOnly:!0})})}Task.__docgenInfo={description:"",methods:[],displayName:"Task"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Task.js"]={name:"Task",docgenInfo:Task.__docgenInfo,path:"src/components/Task.js"});var Task_stories={component:Task,title:"Task"},Template=function Template(args){return(0,jsx_runtime.jsx)(Task,(0,objectSpread2.Z)({},args))},Default=Template.bind({});Default.args={task:{id:"1",title:"Test Task",state:"TASK_INBOX",updatedAt:new Date(2021,0,1,9,0)}};var Pinned=Template.bind({});Pinned.args={task:(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.args.task),{},{state:"TASK_PINNED"})};var Archived=Template.bind({});Archived.args={task:(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.args.task),{},{state:"TASK_ARCHIVED"})},Default.parameters=(0,objectSpread2.Z)({storySource:{source:"args => <Task {...args} />"}},Default.parameters),Pinned.parameters=(0,objectSpread2.Z)({storySource:{source:"args => <Task {...args} />"}},Pinned.parameters),Archived.parameters=(0,objectSpread2.Z)({storySource:{source:"args => <Task {...args} />"}},Archived.parameters)},"./src/components/buttons/Button.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Add:function(){return Add},Caret:function(){return Caret},CaretWithText:function(){return CaretWithText},Edit:function(){return Edit},EditWithText:function(){return EditWithText},default:function(){return Button_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),Button=__webpack_require__("./src/components/buttons/Button.jsx"),esm=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Button_stories={title:"Buttons",component:Button.Z},edit=function edit(){return(0,esm.action)("edit")},add=function add(){return(0,esm.action)("add")},Add=function Add(){return(0,jsx_runtime.jsx)(Button.Z,{onClick:add,icon:"plus"})},Edit=function Edit(){return(0,jsx_runtime.jsx)(Button.Z,{onClick:edit,icon:"pen"})},EditWithText=function EditWithText(){return(0,jsx_runtime.jsx)(Button.Z,{onClick:edit,icon:"pen",text:"Edit"})},Caret=function Caret(){var _useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),open=_useState2[0],setOpen=_useState2[1];return(0,jsx_runtime.jsx)(Button.Z,{onClick:function toggleOpen(){return setOpen(!open)},icon:"caret",open:open})},CaretWithText=function CaretWithText(){var _useState3=(0,react.useState)(!1),_useState4=(0,slicedToArray.Z)(_useState3,2),open=_useState4[0],setOpen=_useState4[1];return(0,jsx_runtime.jsx)(Button.Z,{onClick:function toggleOpen(){return setOpen(!open)},icon:"caret",text:"Expand",open:open})};Add.parameters=(0,objectSpread2.Z)({storySource:{source:'() => <Button onClick={add} icon="plus" />'}},Add.parameters),Edit.parameters=(0,objectSpread2.Z)({storySource:{source:'() => <Button onClick={edit} icon="pen" />'}},Edit.parameters),EditWithText.parameters=(0,objectSpread2.Z)({storySource:{source:'() => <Button onClick={edit} icon="pen" text="Edit" />'}},EditWithText.parameters),Caret.parameters=(0,objectSpread2.Z)({storySource:{source:'() => {\n  const [open, setOpen] = useState(false);\n  const toggleOpen = () => setOpen(!open);\n  return <Button onClick={toggleOpen} icon="caret" open={open} />;\n}'}},Caret.parameters),CaretWithText.parameters=(0,objectSpread2.Z)({storySource:{source:'() => {\n  const [open, setOpen] = useState(false);\n  const toggleOpen = () => setOpen(!open);\n  return <Button onClick={toggleOpen} icon="caret" text="Expand" open={open} />;\n}'}},CaretWithText.parameters),Add.__docgenInfo={description:"",methods:[],displayName:"Add"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/buttons/Button.stories.jsx"]={name:"Add",docgenInfo:Add.__docgenInfo,path:"src/components/buttons/Button.stories.jsx"}),Edit.__docgenInfo={description:"",methods:[],displayName:"Edit"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/buttons/Button.stories.jsx"]={name:"Edit",docgenInfo:Edit.__docgenInfo,path:"src/components/buttons/Button.stories.jsx"}),EditWithText.__docgenInfo={description:"",methods:[],displayName:"EditWithText"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/buttons/Button.stories.jsx"]={name:"EditWithText",docgenInfo:EditWithText.__docgenInfo,path:"src/components/buttons/Button.stories.jsx"}),Caret.__docgenInfo={description:"",methods:[],displayName:"Caret"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/buttons/Button.stories.jsx"]={name:"Caret",docgenInfo:Caret.__docgenInfo,path:"src/components/buttons/Button.stories.jsx"}),CaretWithText.__docgenInfo={description:"",methods:[],displayName:"CaretWithText"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/buttons/Button.stories.jsx"]={name:"CaretWithText",docgenInfo:CaretWithText.__docgenInfo,path:"src/components/buttons/Button.stories.jsx"})},"./src/components/buttons/toggle/Toggle.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ThreeOptions:function(){return ThreeOptions},TwoOptions:function(){return TwoOptions},default:function(){return Toggle_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Toggle_Toggle(props){var options=props.options,option=props.option,setOption=props.setOption;return(0,jsx_runtime.jsx)("div",{className:"option-toggle",children:options.map((function(opt,index){var classes=classnames_default()("option",{selected:index===option});return(0,jsx_runtime.jsx)("div",{className:classes,onClick:function onClick(){return setOption(index)},children:opt},index)}))})}Toggle_Toggle.__docgenInfo={description:"",methods:[],displayName:"Toggle"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/buttons/toggle/Toggle.jsx"]={name:"Toggle",docgenInfo:Toggle_Toggle.__docgenInfo,path:"src/components/buttons/toggle/Toggle.jsx"});var react=__webpack_require__("./node_modules/react/index.js"),Toggle_stories={component:Toggle_Toggle},TwoOptions=function TwoOptions(){var _useState=(0,react.useState)(0),_useState2=(0,slicedToArray.Z)(_useState,2),option=_useState2[0],setOption=_useState2[1];return(0,jsx_runtime.jsx)(Toggle_Toggle,{options:["Yes","No"],option:option,setOption:setOption})},ThreeOptions=function ThreeOptions(){var _useState3=(0,react.useState)(0),_useState4=(0,slicedToArray.Z)(_useState3,2),option=_useState4[0],setOption=_useState4[1];return(0,jsx_runtime.jsx)(Toggle_Toggle,{options:["Yes","No","Maybe"],option:option,setOption:setOption})};TwoOptions.parameters=(0,objectSpread2.Z)({storySource:{source:'() => {\n  const [option, setOption] = useState(0);\n  return <Toggle options={["Yes","No"]} option={option} setOption={setOption} />\n}'}},TwoOptions.parameters),ThreeOptions.parameters=(0,objectSpread2.Z)({storySource:{source:'() => {\n  const [option, setOption] = useState(0);\n  return <Toggle options={["Yes","No","Maybe"]} option={option} setOption={setOption} />\n}'}},ThreeOptions.parameters),TwoOptions.__docgenInfo={description:"",methods:[],displayName:"TwoOptions"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/buttons/toggle/Toggle.stories.jsx"]={name:"TwoOptions",docgenInfo:TwoOptions.__docgenInfo,path:"src/components/buttons/toggle/Toggle.stories.jsx"}),ThreeOptions.__docgenInfo={description:"",methods:[],displayName:"ThreeOptions"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/buttons/toggle/Toggle.stories.jsx"]={name:"ThreeOptions",docgenInfo:ThreeOptions.__docgenInfo,path:"src/components/buttons/toggle/Toggle.stories.jsx"})},"./src/components/food_add/search.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},default:function(){return search_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),axios=__webpack_require__("./node_modules/axios/index.js"),axios_default=__webpack_require__.n(axios),jsx_runtime=(__webpack_require__("./src/components/buttons/Button.jsx"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function CreateFood(props){var _useState=(0,react.useState)(""),_useState2=(0,slicedToArray.Z)(_useState,2),searchValue=_useState2[0],setSearchValue=_useState2[1],_useState3=(0,react.useState)([]),_useState4=(0,slicedToArray.Z)(_useState3,2),suggestions=_useState4[0],setSuggestions=_useState4[1];return(0,react.useEffect)((function(){var params=searchValue.length>0?{query:searchValue}:null;axios_default().get("http://localhost:3000/foods/new",{params:params}).then((function(response){return setSuggestions(response.data)})).catch((function(e){console.error(e.stack),setSuggestions([])}))}),[searchValue]),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("input",{type:"text",value:searchValue,onChange:function onChange(event){return setSearchValue(event.target.value)}}),(0,jsx_runtime.jsx)("div",{className:"suggestions",children:suggestions.map((function(suggestion,index){return(0,jsx_runtime.jsx)("div",{className:"suggestion",children:(0,jsx_runtime.jsx)("div",{className:"suggestion--name",children:suggestion.name})},index)}))})]})}CreateFood.__docgenInfo={description:"",methods:[],displayName:"CreateFood"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/food_add/search.jsx"]={name:"CreateFood",docgenInfo:CreateFood.__docgenInfo,path:"src/components/food_add/search.jsx"});var search_stories={component:CreateFood},Default=function Default(){return(0,jsx_runtime.jsx)(CreateFood,{})};Default.parameters=(0,objectSpread2.Z)({storySource:{source:"() => <CreateFood />"}},Default.parameters),Default.__docgenInfo={description:"",methods:[],displayName:"Default"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/food_add/search.stories.jsx"]={name:"Default",docgenInfo:Default.__docgenInfo,path:"src/components/food_add/search.stories.jsx"})},"./src/components/food_browse/calendar/Calendar.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithItems:function(){return WithItems},WithoutItems:function(){return WithoutItems},default:function(){return Calendar_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),moment=__webpack_require__("./node_modules/moment/moment.js"),moment_default=__webpack_require__.n(moment),react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./src/components/buttons/Button.jsx"),index_es=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),free_solid_svg_icons_index_es=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.es.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function CalendarDay_CalendarDay(props){var day=props.day,hasEvents=props.hasEvents,onClick=props.onClick,selected=props.selected,date=moment_default()(day),classes=classnames_default()("day",{weekend:0===moment_default()(date).day()||6===moment_default()(date).day(),today:date.isSame(moment_default()(),"day"),event:hasEvents,selected:selected});return(0,jsx_runtime.jsx)("td",{className:classes,onClick:onClick,children:(0,jsx_runtime.jsxs)("div",{className:"container",children:[(0,jsx_runtime.jsx)("div",{className:"day-num",children:date.format("D")}),(0,jsx_runtime.jsx)("div",{className:"day-event-indicator",children:(0,jsx_runtime.jsx)(index_es.G,{icon:free_solid_svg_icons_index_es.diR})})]})})}function Calendar_Calendar(props){for(var events=props.events,_useState=(0,react.useState)(moment_default()().startOf("week")),_useState2=(0,slicedToArray.Z)(_useState,2),firstDay=_useState2[0],setFirstDay=_useState2[1],_useState3=(0,react.useState)(moment_default()().format()),_useState4=(0,slicedToArray.Z)(_useState3,2),selectedDay=_useState4[0],setSelectedDay=_useState4[1],weekdayShort=moment_default().weekdaysShort().map((function(day,index){var classes=classnames_default()("week-day",{weekend:0===index||6===index});return(0,jsx_runtime.jsx)("th",{className:classes,children:day},day)})),weekElements=[],firstWeek=firstDay.week(),w=0;w<6;w++){for(var dayElements=[],thisWeek=moment_default()().week(firstWeek+w),_loop=function _loop(d){var day=thisWeek.day(d),dayEvents=events.filter((function(e){return day.isSame(moment_default()(e.date),"day")}));dayElements.push((0,jsx_runtime.jsx)(CalendarDay_CalendarDay,{day:day.format(),hasEvents:dayEvents.length>0,onClick:function onClick(){return setSelectedDay(day.format())},selected:moment_default()(selectedDay).isSame(day,"day")},d))},d=0;d<7;d++)_loop(d);weekElements.push((0,jsx_runtime.jsx)("tr",{children:dayElements},w))}return console.log(firstDay),(0,jsx_runtime.jsxs)("div",{className:"calendar",children:[(0,jsx_runtime.jsxs)("header",{className:"header",children:[(0,jsx_runtime.jsx)("div",{className:"group",children:(0,jsx_runtime.jsx)("div",{className:"month-year",children:firstDay.format("MMM YYYY")})}),(0,jsx_runtime.jsxs)("div",{className:"group",children:[(0,jsx_runtime.jsx)(Button.Z,{icon:"left",onClick:function onClick(){return setFirstDay((function(prev){return moment_default()(prev.add(-7,"days"))}))}}),(0,jsx_runtime.jsx)(Button.Z,{text:"Today",onClick:function onClick(){return setFirstDay(moment_default()().startOf("week"))}}),(0,jsx_runtime.jsx)(Button.Z,{icon:"right",onClick:function onClick(){return setFirstDay((function(prev){return moment_default()(prev.add(7,"days"))}))}})]})]}),(0,jsx_runtime.jsxs)("table",{children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsx)("tr",{children:weekdayShort})}),(0,jsx_runtime.jsx)("tbody",{children:weekElements})]})]})}CalendarDay_CalendarDay.__docgenInfo={description:"",methods:[],displayName:"CalendarDay"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/food_browse/calendar/CalendarDay.jsx"]={name:"CalendarDay",docgenInfo:CalendarDay_CalendarDay.__docgenInfo,path:"src/components/food_browse/calendar/CalendarDay.jsx"}),Calendar_Calendar.__docgenInfo={description:"",methods:[],displayName:"Calendar"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/food_browse/calendar/Calendar.jsx"]={name:"Calendar",docgenInfo:Calendar_Calendar.__docgenInfo,path:"src/components/food_browse/calendar/Calendar.jsx"});var Calendar_stories={component:Calendar_Calendar},events=[{name:"Bananas",location:"House/Pantry",date:"2022-03-16",lifespan:20},{name:"Bread",location:"House/Pantry",date:"2022-03-23",lifespan:40},{name:"Milk",location:"House/Fridge",date:"2022-03-25",lifespan:10},{name:"Chicken",location:"House/Freezer",date:"2022-03-25",lifespan:15}],WithItems=function WithItems(){return(0,jsx_runtime.jsx)(Calendar_Calendar,{events:events})},WithoutItems=function WithoutItems(){return(0,jsx_runtime.jsx)(Calendar_Calendar,{events:[]})};WithItems.parameters=(0,objectSpread2.Z)({storySource:{source:"() => <Calendar events={events}/>"}},WithItems.parameters),WithoutItems.parameters=(0,objectSpread2.Z)({storySource:{source:"() => <Calendar events={[]}/>"}},WithoutItems.parameters),WithItems.__docgenInfo={description:"",methods:[],displayName:"WithItems"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/food_browse/calendar/Calendar.stories.jsx"]={name:"WithItems",docgenInfo:WithItems.__docgenInfo,path:"src/components/food_browse/calendar/Calendar.stories.jsx"}),WithoutItems.__docgenInfo={description:"",methods:[],displayName:"WithoutItems"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/food_browse/calendar/Calendar.stories.jsx"]={name:"WithoutItems",docgenInfo:WithoutItems.__docgenInfo,path:"src/components/food_browse/calendar/Calendar.stories.jsx"})},"./src/components/food_browse/index.stories.jsx":function(){},"./src/components/locations/Locations.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Locations_stories}});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function LocationItem(props){return(0,jsx_runtime.jsxs)("li",{children:["onClick=",function(){return props.setLocation(props.name)},"selected=",props.selected,"data-testid=",props.name,(0,jsx_runtime.jsx)("h2",{className:"text--regular",children:props.name})]})}LocationItem.__docgenInfo={description:"",methods:[],displayName:"LocationItem"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/locations/LocationItem.jsx"]={name:"LocationItem",docgenInfo:LocationItem.__docgenInfo,path:"src/components/locations/LocationItem.jsx"});var Locations_stories={component:LocationItem}},"./src/components/nav/NavBar.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},default:function(){return NavBar_stories}});var index_es=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),free_solid_svg_icons_index_es=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.es.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function NavBar_NavBar(props){return(0,jsx_runtime.jsxs)("nav",{className:"nav",children:[(0,jsx_runtime.jsxs)("div",{className:"icon-container",children:[(0,jsx_runtime.jsx)(index_es.G,{icon:free_solid_svg_icons_index_es.p7q}),(0,jsx_runtime.jsx)("div",{className:"icon-text",children:"Foods"})]}),(0,jsx_runtime.jsxs)("div",{className:"icon-container",children:[(0,jsx_runtime.jsx)(index_es.G,{icon:free_solid_svg_icons_index_es.r8p}),(0,jsx_runtime.jsx)("div",{className:"icon-text",children:"Shelves"})]}),(0,jsx_runtime.jsxs)("div",{className:"icon-container",children:[(0,jsx_runtime.jsx)(index_es.G,{icon:free_solid_svg_icons_index_es.EQ8}),(0,jsx_runtime.jsx)("div",{className:"icon-text",children:"Add Food"})]})]})}NavBar_NavBar.__docgenInfo={description:"",methods:[],displayName:"NavBar"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/nav/NavBar.jsx"]={name:"NavBar",docgenInfo:NavBar_NavBar.__docgenInfo,path:"src/components/nav/NavBar.jsx"});var NavBar_stories={component:NavBar_NavBar},Default=(0,jsx_runtime.jsx)(NavBar_NavBar,{})},"./.storybook/preview.js-generated-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{parameters:function(){return parameters}});var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},viewport:{viewports:__webpack_require__("./node_modules/@storybook/addon-viewport/dist/esm/preview.js").p,defaultViewport:"iphone12"}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.kg.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src/components/buttons/Button.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return Button}});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),index_es=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),free_solid_svg_icons_index_es=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.es.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button(props){var onClick=props.onClick,icon=props.icon,text=props.text,open=props.open,classes=classnames_default()("button",{open:open});return(0,jsx_runtime.jsxs)("div",{onClick:onClick,className:classes,children:["plus"===icon&&(0,jsx_runtime.jsx)(index_es.G,{icon:free_solid_svg_icons_index_es.r8p}),"pen"===icon&&(0,jsx_runtime.jsx)(index_es.G,{icon:free_solid_svg_icons_index_es.IwR}),"caret"===icon&&(0,jsx_runtime.jsx)(index_es.G,{icon:free_solid_svg_icons_index_es.I4f}),"left"===icon&&(0,jsx_runtime.jsx)(index_es.G,{icon:free_solid_svg_icons_index_es._Wx}),"right"===icon&&(0,jsx_runtime.jsx)(index_es.G,{icon:free_solid_svg_icons_index_es.ccb}),void 0!==text&&(0,jsx_runtime.jsx)("div",{className:"btn-text",children:text})]})}Button.__docgenInfo={description:"",methods:[],displayName:"Button"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/buttons/Button.jsx"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"src/components/buttons/Button.jsx"})},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./components/Task.stories.js":"./src/components/Task.stories.js","./components/buttons/Button.stories.jsx":"./src/components/buttons/Button.stories.jsx","./components/buttons/toggle/Toggle.stories.jsx":"./src/components/buttons/toggle/Toggle.stories.jsx","./components/food_add/search.stories.jsx":"./src/components/food_add/search.stories.jsx","./components/food_browse/calendar/Calendar.stories.jsx":"./src/components/food_browse/calendar/Calendar.stories.jsx","./components/food_browse/index.stories.jsx":"./src/components/food_browse/index.stories.jsx","./components/locations/Locations.stories.jsx":"./src/components/locations/Locations.stories.jsx","./components/nav/NavBar.stories.jsx":"./src/components/nav/NavBar.stories.jsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"./storybook-init-framework-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"?4f7e":function(){}},function(__webpack_require__){var __webpack_exec__=function(moduleId){return __webpack_require__(__webpack_require__.s=moduleId)};__webpack_require__.O(0,[4],(function(){return __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/dist/esm/preset/argsEnhancers.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.js")}));__webpack_require__.O()}]);