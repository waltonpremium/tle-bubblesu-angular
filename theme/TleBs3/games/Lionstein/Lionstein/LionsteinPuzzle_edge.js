
(function(compId){var _=null,y=true,n=false,x8='rgba(0,0,0,0)',x4='5.0.1',g='image',x22='rgba(192,192,192,0.00)',m='rect',x7='horizontal',i='none',e33='${Play}',x6='5.0.1.386',e35='${lionstein-scooter2}',e34='${Casio_Dreams_Loop_120BPM_50LOOP_221_01-mp32}',e32='${lionstein-scooter}',d='display',x12='rgba(192,192,192,0)',x31='rgba(255,255,255,1)',x5='5.0.0',xc='rgba(0,0,0,1)';var g29='lionstein-scooter.mp4',g2='jquery-ui.min.js',g18='seven.png',g23='Play.png',g14='three.png',g15='four.png',g21='five.png',g17='two.png',g19='eight.png',g13='one.png',g25='CartoonAccent08.mp3',g28='Kids%20Cheering-mp3.mp3',g11='Lionstein.png',g16='six.png',g30='lionstein-scooter.ogv',g27='Casio%20Dreams%20Loop_120BPM_50LOOP_221_01-mp3.mp3',g26='Casio%20Dreams%20Loop_120BPM_50LOOP_221_01-ogg.ogg',g20='nine.png',g24='Redo.png',g10='board.png',g3='jquery.ui.touch-punch.min.js',g1='jquery-2.0.3.min.js',g9='wtt.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[js+g1,js+g2,js+g3],symbols={"stage":{v:x4,mv:x5,b:x6,stf:i,cg:x7,rI:n,cn:{dom:[{id:'wtt',t:g,r:['0','0','600px','600px','auto','auto'],f:[x8,im+g9,'0px','0px']},{id:'board',t:g,r:['131','131','338px','338px','auto','auto'],f:[x8,im+g10,'0px','0px']},{id:'Lionstein',t:g,r:['166','64','267px','49px','auto','auto'],f:[x8,im+g11,'0px','0px']},{id:'OPLeft',t:m,r:['9px','146','125px','358','auto','auto'],f:[x12],s:[0,"rgb(0, 0, 0)",i]},{id:'OPRight',t:m,r:['461','143','125px','347','auto','auto'],f:[x12],s:[0,"rgb(0, 0, 0)",i]},{id:'one',t:g,r:['463','382','121px','107px','auto','auto'],cu:'pointer',f:[x8,im+g13,'0px','0px']},{id:'three',t:g,r:['484','319','105px','109px','auto','auto'],cu:'pointer',f:[x8,im+g14,'0px','0px']},{id:'four',t:g,r:['457','268','112px','120px','auto','auto'],cu:'pointer',f:[x8,im+g15,'0px','0px']},{id:'six',t:g,r:['436','143','152px','108px','auto','auto'],cu:'pointer',f:[x8,im+g16,'0px','0px']},{id:'two',t:g,r:['484','184','105px','144px','auto','auto'],cu:'pointer',f:[x8,im+g17,'0px','0px']},{id:'seven',t:g,r:['7','234','125px','123px','auto','auto'],cu:'pointer',f:[x8,im+g18,'0px','0px']},{id:'eight',t:g,r:['5','375','130px','129px','auto','auto'],cu:'pointer',f:[x8,im+g19,'0px','0px']},{id:'nine',t:g,r:['37','284','107px','106px','auto','auto'],cu:'pointer',f:[x8,im+g20,'0px','0px']},{id:'five',t:g,r:['9','147','132px','131px','auto','auto'],cu:'pointer',f:[x8,im+g21,'0px','0px']},{id:'OPone',t:m,r:['150','150','100','100','auto','auto'],f:[x22],s:[0,xc,i]},{id:'OPtwo',t:m,r:['150','250','100','100','auto','auto'],f:[x22],s:[0,xc,i]},{id:'OPthree',t:m,r:['150','350','100','100','auto','auto'],f:[x22],s:[0,xc,i]},{id:'OPfour',t:m,r:['250','150','100','100','auto','auto'],f:[x22],s:[0,xc,i]},{id:'OPfive',t:m,r:['250','250','100','100','auto','auto'],f:[x22],s:[0,xc,i]},{id:'OPsix',t:m,r:['250','350','100','100','auto','auto'],f:[x22],s:[0,xc,i]},{id:'OPseven',t:m,r:['350','150','100','100','auto','auto'],f:[x22],s:[0,xc,i]},{id:'OPeight',t:m,r:['350','250','100','100','auto','auto'],f:[x22],s:[0,xc,i]},{id:'OPnine',t:m,r:['350','350','100','100','auto','auto'],f:[x22],s:[0,xc,i]},{id:'Play',v:i,t:g,r:['314px','490px','91px','33px','auto','auto'],cu:'pointer',f:[x8,im+g23,'0px','0px']},{id:'Redo',t:g,r:['184px','490px','101px','33px','auto','auto'],cu:'pointer',f:[x8,im+g24,'0px','0px']},{id:'CartoonAccent08',v:i,t:'audio',tag:'audio',r:['106','84','320px','45px','auto','auto'],sr:[aud+g25],pr:'auto'},{id:'Casio_Dreams_Loop_120BPM_50LOOP_221_01-ogg',v:i,volume:'0.5',t:'audio',tag:'audio',r:['160','219','320px','45px','auto','auto'],lp:'loop',sr:[aud+g26],pr:'auto'},{id:'Casio_Dreams_Loop_120BPM_50LOOP_221_01-mp32',v:i,volume:'0.5',t:'audio',tag:'audio',r:['184','218','320px','45px','auto','auto'],lp:'loop',sr:[aud+g27],pr:'auto'},{id:'Kids_Cheering-mp3',v:i,t:'audio',tag:'audio',r:['144','213','320px','45px','auto','auto'],sr:[aud+g28],pr:'auto'},{id:'lionstein-scooter',v:i,t:'video',tag:'video',r:['150','150','300','300','auto','auto'],sr:[vid+g29,vid+g30],pr:'auto'},{id:'lionstein-scooter2',v:i,t:'video',tag:'video',r:['150','150','300','300','auto','auto'],sr:[vid+g29,vid+g30],pr:'auto'}],style:{'${Stage}':{isStage:true,r:['null','null','600','600','auto','auto'],overflow:'hidden',f:[x31]}}},tt:{d:32043.537,a:y,data:[["eid20",d,0,0,"linear",e32,i,i],["eid15",d,0,0,"linear",e33,i,i],["eid16",d,0,0,"linear",e34,i,i],["eid19",d,0,0,"linear",e35,i,i],["eid17","tr",0,function(e,d){this.eMA(e,d);},['play','${Casio_Dreams_Loop_120BPM_50LOOP_221_01-mp32}',[]]],["eid18","tr",0,function(e,d){this.eMA(e,d);},['play','${Casio_Dreams_Loop_120BPM_50LOOP_221_01-ogg}',[]]]]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("lionstein");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){theDepth=0;sym.dragDrop=function(item,theLeft,theTop){sym.$(item).draggable({revert:"invalid"});sym.$("OPLeft").droppable({accept:sym.$(item),drop:function(){sym.$(item).animate({"left":theLeft,"top":theTop},"slow");}});sym.$("OPRight").droppable({accept:sym.$(item),drop:function(){sym.$(item).animate({"left":theLeft,"top":theTop},"slow");}});}
sym.reset=function(item,theLeft,theTop){sym.$(item).animate({"left":theLeft,"top":theTop},"slow");}
sym.startover=function(item){sym.$(item).hide("Lionstein2");}
sym.setVariable("count",0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${five}","mouseover",function(sym,e){sym.getComposition().getStage().dragDrop("five","9px","147px");sym.$("OPfive").droppable({accept:sym.$("five"),drop:function(){sym.$("five").animate({"left":"220px","top":"244px"},"fast");sym.$("CartoonAccent08")[0].play();sym.disable=function()
{console.log('disable');sym.$("five").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${five}","mousedown",function(sym,e){theDepth+=1;sym.$("five").css({"position":"absolute","z-index":theDepth})});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${eight}","mousedown",function(sym,e){theDepth+=1;sym.$("eight").css({"position":"absolute","z-index":theDepth})});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${eight}","mouseover",function(sym,e){sym.getComposition().getStage().dragDrop("eight","5px","375px");sym.$("OPeight").droppable({accept:sym.$("eight"),drop:function(){sym.$("eight").animate({"left":"320px","top":"241px"},"fast");sym.$("CartoonAccent08")[0].play();sym.disable=function()
{console.log('disable');sym.$("eight").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${nine}","mouseover",function(sym,e){sym.getComposition().getStage().dragDrop("nine","37px","284px");sym.$("OPnine").droppable({accept:sym.$("nine"),drop:function(){sym.$("nine").animate({"left":"343px","top":"343px"},"fast");sym.$("CartoonAccent08")[0].play();sym.disable=function()
{console.log('disable');sym.$("nine").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${nine}","mousedown",function(sym,e){theDepth+=1;sym.$("nine").css({"position":"absolute","z-index":theDepth})});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${six}","mousedown",function(sym,e){theDepth+=1;sym.$("six").css({"position":"absolute","z-index":theDepth})});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${six}","mouseover",function(sym,e){sym.getComposition().getStage().dragDrop("six","436px","143px");sym.$("OPsix").droppable({accept:sym.$("six"),drop:function(){sym.$("six").animate({"left":"224px","top":"341px"},"fast");sym.$("CartoonAccent08")[0].play();sym.disable=function()
{console.log('disable');sym.$("six").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${two}","mousedown",function(sym,e){theDepth+=1;sym.$("two").css({"position":"absolute","z-index":theDepth})});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${two}","mouseover",function(sym,e){sym.getComposition().getStage().dragDrop("two","484px","184px");sym.$("OPtwo").droppable({accept:sym.$("two"),drop:function(){sym.$("two").animate({"left":"150px","top":"227px"},"fast");sym.$("CartoonAccent08")[0].play();sym.disable=function()
{console.log('disable');sym.$("two").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${four}","mouseover",function(sym,e){sym.getComposition().getStage().dragDrop("four","457px","268px");sym.$("OPfour").droppable({accept:sym.$("four"),drop:function(){sym.$("four").animate({"left":"244px","top":"149px"},"fast");sym.$("CartoonAccent08")[0].play();sym.disable=function()
{console.log('disable');sym.$("four").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${four}","mousedown",function(sym,e){theDepth+=1;sym.$("four").css({"position":"absolute","z-index":theDepth})});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${seven}","mousedown",function(sym,e){theDepth+=1;sym.$("seven").css({"position":"absolute","z-index":theDepth})});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${three}","mousedown",function(sym,e){theDepth+=1;sym.$("three").css({"position":"absolute","z-index":theDepth})});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${one}","mousedown",function(sym,e){theDepth+=1;sym.$("one").css({"position":"absolute","z-index":theDepth})});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${seven}","mouseover",function(sym,e){sym.getComposition().getStage().dragDrop("seven","7px","234px");sym.$("OPseven").droppable({accept:sym.$("seven"),drop:function(){sym.$("seven").animate({"left":"325px","top":"149px"},"fast");sym.$("CartoonAccent08")[0].play();sym.disable=function()
{console.log('disable');sym.$("seven").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${one}","mouseover",function(sym,e){sym.getComposition().getStage().dragDrop("one","463px","382px");sym.$("OPone").droppable({accept:sym.$("one"),drop:function(){sym.$("one").animate({"left":"150px","top":"149px"},"fast");sym.$("CartoonAccent08")[0].play();sym.disable=function()
{console.log('disable');sym.$("one").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${three}","mouseover",function(sym,e){sym.getComposition().getStage().dragDrop("three","484px","319px");sym.$("OPthree").droppable({accept:sym.$("three"),drop:function(){sym.$("three").animate({"left":"150px","top":"341px"},"fast");sym.$("CartoonAccent08")[0].play();sym.disable=function()
{console.log('disable');sym.$("three").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Redo}","click",function(sym,e){sym.getComposition().getStage().reset("one","463px","382px");sym.getComposition().getStage().reset("two","484px","184px");sym.getComposition().getStage().reset("three","484px","319px");sym.getComposition().getStage().reset("four","457px","268px");sym.getComposition().getStage().reset("five","9px","147px");sym.getComposition().getStage().reset("six","436px","143px");sym.getComposition().getStage().reset("seven","7px","234px");sym.getComposition().getStage().reset("eight","5px","375px");sym.getComposition().getStage().reset("nine","37px","284px");sym.getComposition().getStage().startover("lionstein-scooter");sym.getComposition().getStage().startover("lionstein-scooter2");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Play}","click",function(sym,e){sym.$("lionstein-scooter").show().css({"position":"absolute","z-index":1000});sym.$("lionstein-scooter2").show().css({"position":"absolute","z-index":1000});sym.$("lionstein-scooter")[0].play();sym.$("lionstein-scooter2")[0].play();sym.$("Kids_Cheering-mp3")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Stage}","mouseover",function(sym,e){console.log(sym.getVariable("count"));if(sym.getVariable("count")===9){sym.$("Play").show();}else if(sym.getVariable("count")<9){sym.$("Play").hide();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${five}","touchstart",function(sym,e){sym.getComposition().getStage().dragDrop("five","9px","147px");sym.$("OPfive").droppable({accept:sym.$("five"),drop:function(){sym.$("five").animate({"left":"220px","top":"244px"},"fast");sym.$("CartoonAccent08")[0].play();sym.disable=function()
{console.log('disable');sym.$("five").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${seven}","touchstart",function(sym,e){sym.getComposition().getStage().dragDrop("seven","7px","234px");sym.$("OPseven").droppable({accept:sym.$("seven"),drop:function(){sym.$("seven").animate({"left":"325px","top":"149px"},"fast");sym.$("CartoonAccent08")[0].play();sym.disable=function()
{console.log('disable');sym.$("seven").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${one}","touchstart",function(sym,e){sym.getComposition().getStage().dragDrop("one","463px","382px");sym.$("OPone").droppable({accept:sym.$("one"),drop:function(){sym.$("one").animate({"left":"150px","top":"149px"},"fast");sym.$("CartoonAccent08")[0].play();sym.disable=function()
{console.log('disable');sym.$("one").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${three}","touchstart",function(sym,e){sym.getComposition().getStage().dragDrop("three","484px","319px");sym.$("OPthree").droppable({accept:sym.$("three"),drop:function(){sym.$("three").animate({"left":"150px","top":"341px"},"fast");sym.$("CartoonAccent08")[0].play();sym.disable=function()
{console.log('disable');sym.$("three").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${four}","touchstart",function(sym,e){sym.getComposition().getStage().dragDrop("four","457px","268px");sym.$("OPfour").droppable({accept:sym.$("four"),drop:function(){sym.$("four").animate({"left":"244px","top":"149px"},"fast");sym.$("CartoonAccent08")[0].play();sym.disable=function()
{console.log('disable');sym.$("four").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${six}","touchstart",function(sym,e){sym.getComposition().getStage().dragDrop("six","436px","143px");sym.$("OPsix").droppable({accept:sym.$("six"),drop:function(){sym.$("six").animate({"left":"224px","top":"341px"},"fast");sym.$("CartoonAccent08")[0].play();sym.disable=function()
{console.log('disable');sym.$("six").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${two}","touchstart",function(sym,e){sym.getComposition().getStage().dragDrop("two","484px","184px");sym.$("OPtwo").droppable({accept:sym.$("two"),drop:function(){sym.$("two").animate({"left":"150px","top":"227px"},"fast");sym.$("CartoonAccent08")[0].play();sym.disable=function()
{console.log('disable');sym.$("two").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${eight}","touchstart",function(sym,e){sym.getComposition().getStage().dragDrop("eight","5px","375px");sym.$("OPeight").droppable({accept:sym.$("eight"),drop:function(){sym.$("eight").animate({"left":"320px","top":"241px"},"fast");sym.$("CartoonAccent08")[0].play();sym.disable=function()
{console.log('disable');sym.$("eight").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${nine}","touchstart",function(sym,e){sym.getComposition().getStage().dragDrop("nine","37px","284px");sym.$("OPnine").droppable({accept:sym.$("nine"),drop:function(){sym.$("nine").animate({"left":"343px","top":"343px"},"fast");sym.$("CartoonAccent08")[0].play();sym.disable=function()
{console.log('disable');sym.$("nine").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"lionstein");