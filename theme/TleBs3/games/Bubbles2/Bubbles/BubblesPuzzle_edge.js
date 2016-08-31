
(function(compId){var _=null,y=true,n=false,x22='rgba(192,192,192,0)',x8='rgba(0,0,0,0)',x4='5.0.1',g='image',x12='rgba(192,192,192,0.00)',e35='${Bubbles}',m='rect',i='none',e36='${Play}',e37='${Casio_Dreams_Loop_120BPM_50LOOP_221_01-mp33}',e34='${Bubbles3}',d='display',x6='5.0.1.386',x7='horizontal',x33='rgba(255,255,255,1)',x5='5.0.0',xc='rgba(0,0,0,1)';var g2='jquery-ui.min.js',g28='Play.png',g15='three.png',g16='four.png',g21='five.png',g14='two.png',g19='eight.png',g13='one.png',g9='wtt.png',g11='Bubbles.png',g32='CartoonAccent08.ogg',g31='CartoonAccent08.mp3',g24='Kids%20Cheering-mp3.mp3',g30='Kids%20Cheering.ogg',g29='Casio%20Dreams%20Loop_120BPM_50LOOP_221_01-ogg.ogg',g17='six.png',g23='Casio%20Dreams%20Loop_120BPM_50LOOP_221_01-mp3.mp3',g25='Bubbles.ogv',g26='Bubbles.mp4',g18='seven.png',g27='Redo.png',g10='board.png',g3='jquery.ui.touch-punch.min.js',g20='nine.png',g1='jquery-2.0.3.min.js';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[js+g1,js+g2,js+g3],symbols={"stage":{v:x4,mv:x5,b:x6,stf:i,cg:x7,rI:n,cn:{dom:[{id:'wtt',t:g,r:['0','0','600px','600px','auto','auto'],f:[x8,im+g9,'0px','0px']},{id:'board',t:g,r:['131','131','338px','338px','auto','auto'],f:[x8,im+g10,'0px','0px']},{id:'BubblesTitle',t:g,r:['166','60','267px','59px','auto','auto'],f:[x8,im+g11,'0px','0px']},{id:'OPLeft',t:m,r:['9','146','125','358','auto','auto'],f:[x12],s:[0,xc,i]},{id:'OPRight',t:m,r:['461','143','125','347','auto','auto'],f:[x12],s:[0,xc,i]},{id:'one',t:g,r:['463','382','121px','107px','auto','auto'],cu:'pointer',f:[x8,im+g13,'0px','0px']},{id:'two',t:g,r:['484','184','105px','144px','auto','auto'],cu:'pointer',f:[x8,im+g14,'0px','0px']},{id:'three',t:g,r:['484','319','105px','109px','auto','auto'],cu:'pointer',f:[x8,im+g15,'0px','0px']},{id:'four',t:g,r:['457','268','112px','120px','auto','auto'],cu:'pointer',f:[x8,im+g16,'0px','0px']},{id:'six',t:g,r:['436','143','152px','108px','auto','auto'],cu:'pointer',f:[x8,im+g17,'0px','0px']},{id:'seven',t:g,r:['7','234','125px','123px','auto','auto'],cu:'pointer',f:[x8,im+g18,'0px','0px']},{id:'eight',t:g,r:['5','375','130px','129px','auto','auto'],cu:'pointer',f:[x8,im+g19,'0px','0px']},{id:'nine',t:g,r:['37','284','107px','106px','auto','auto'],cu:'pointer',f:[x8,im+g20,'0px','0px']},{id:'five',t:g,r:['9','147','132px','131px','auto','auto'],cu:'pointer',f:[x8,im+g21,'0px','0px']},{id:'OPone',t:m,r:['150','150','100','100','auto','auto'],f:[x22],s:[0,"rgb(0, 0, 0)",i]},{id:'OPtwo',t:m,r:['150','250','100','100','auto','auto'],f:[x22],s:[0,"rgb(0, 0, 0)",i]},{id:'OPthree',t:m,r:['150','350','100','100','auto','auto'],f:[x22],s:[0,"rgb(0, 0, 0)",i]},{id:'OPfour',t:m,r:['250','150','100','100','auto','auto'],f:[x22],s:[0,"rgb(0, 0, 0)",i]},{id:'OPfive',t:m,r:['250','250','100','100','auto','auto'],f:[x22],s:[0,"rgb(0, 0, 0)",i]},{id:'OPsix',t:m,r:['250','350','100','100','auto','auto'],f:[x22],s:[0,"rgb(0, 0, 0)",i]},{id:'OPseven',t:m,r:['350','150','100','100','auto','auto'],f:[x22],s:[0,"rgb(0, 0, 0)",i]},{id:'OPeight',t:m,r:['350','250','100','100','auto','auto'],f:[x22],s:[0,"rgb(0, 0, 0)",i]},{id:'OPnine',t:m,r:['350','350','100','100','auto','auto'],f:[x22],s:[0,"rgb(0, 0, 0)",i]},{id:'Casio_Dreams_Loop_120BPM_50LOOP_221_01-mp33',v:i,volume:'0.45',t:'audio',tag:'audio',r:['406','317','320px','45px','auto','auto'],lp:'loop',sr:[aud+g23],pr:'auto'},{id:'Kids_Cheering-mp3',v:i,t:'audio',tag:'audio',r:['461','414','320px','45px','auto','auto'],sr:[aud+g24],pr:'auto'},{id:'Bubbles',v:i,t:'video',tag:'video',r:['150px','150px','299px','299px','auto','auto'],sr:[vid+g25,vid+g26],pr:'auto'},{id:'Redo',t:g,r:['184px','490px','101px','33px','auto','auto'],cu:'pointer',f:[x8,im+g27,'0px','0px']},{id:'Play',v:i,t:g,r:['314px','490px','91px','33px','auto','auto'],cu:'pointer',f:[x8,im+g28,'0px','0px']},{id:'Casio_Dreams_Loop_120BPM_50LOOP_221_01-ogg',v:i,volume:'0.5',t:'audio',tag:'audio',r:['661','357','320px','45px','auto','auto'],lp:'loop',sr:[aud+g29],pr:'auto'},{id:'Bubbles3',v:i,t:'video',tag:'video',r:['150px','150px','300','300','auto','auto'],sr:[vid+g25,vid+g26],pr:'auto'},{id:'Kids_Cheering',v:i,t:'audio',tag:'audio',r:['217','225','320px','45px','auto','auto'],sr:[aud+g30],pr:'auto'},{id:'CartoonAccent082',v:i,t:'audio',tag:'audio',r:['221','234','320px','45px','auto','auto'],sr:[aud+g31,aud+g32],pr:'auto'}],style:{'${Stage}':{isStage:true,r:['null','null','600','600','auto','auto'],overflow:'hidden',f:[x33]}}},tt:{d:32026.122,a:y,data:[["eid31",d,0,0,"linear",e34,i,i],["eid26",d,0,0,"linear",e35,i,i],["eid25",d,4120,0,"linear",e35,i,i],["eid27",d,0,0,"linear",e36,i,i],["eid32","volume",0,0,"linear",e37,'0.45','0.45'],["eid12","tr",0,function(e,d){this.eMA(e,d);},['play','${Casio_Dreams_Loop_120BPM_50LOOP_221_01-mp33}',[]]],["eid14","tr",0,function(e,d){this.eMA(e,d);},['play','${Bubbles}',[0]]]]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("bubbles");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){theDepth=0;sym.dragDrop=function(item,theLeft,theTop){sym.$(item).draggable({revert:"invalid"});sym.$("OPLeft").droppable({accept:sym.$(item),drop:function(){sym.$(item).animate({"left":theLeft,"top":theTop},"slow");}});sym.$("OPRight").droppable({accept:sym.$(item),drop:function(){sym.$(item).animate({"left":theLeft,"top":theTop},"slow");}});}
sym.reset=function(item,theLeft,theTop){sym.$(item).animate({"left":theLeft,"top":theTop},"slow");}
sym.startover=function(item){sym.$(item).hide("Bubbles");}
sym.setVariable("count",0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${five}","mousedown",function(sym,e){theDepth+=1;sym.$("five").css({"position":"absolute","z-index":theDepth})});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${nine}","mousedown",function(sym,e){theDepth+=1;sym.$("nine").css({"position":"absolute","z-index":theDepth})});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${eight}","mousedown",function(sym,e){theDepth+=1;sym.$("eight").css({"position":"absolute","z-index":theDepth})});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${seven}","mousedown",function(sym,e){theDepth+=1;sym.$("seven").css({"position":"absolute","z-index":theDepth})});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${six}","mousedown",function(sym,e){theDepth+=1;sym.$("six").css({"position":"absolute","z-index":theDepth})});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${four}","mousedown",function(sym,e){theDepth+=1;sym.$("four").css({"position":"absolute","z-index":theDepth})});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${three}","mousedown",function(sym,e){theDepth+=1;sym.$("three").css({"position":"absolute","z-index":theDepth})});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${two}","mousedown",function(sym,e){theDepth+=1;sym.$("two").css({"position":"absolute","z-index":theDepth})});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${one}","mousedown",function(sym,e){theDepth+=1;sym.$("one").css({"position":"absolute","z-index":theDepth})});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${five}","mouseover",function(sym,e){sym.getComposition().getStage().dragDrop("five","9px","147px");sym.$("OPfive").droppable({accept:sym.$("five"),drop:function(){sym.$("five").animate({"left":"220px","top":"244px"},"fast");sym.$("CartoonAccent082")[0].play();sym.disable=function()
{console.log('disable');sym.$("five").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${nine}","mouseover",function(sym,e){sym.getComposition().getStage().dragDrop("nine","9px","147px");sym.$("OPnine").droppable({accept:sym.$("nine"),drop:function(){sym.$("nine").animate({"left":"343px","top":"343px"},"fast");sym.$("CartoonAccent082")[0].play();sym.disable=function()
{console.log('disable');sym.$("nine").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${eight}","mouseover",function(sym,e){sym.getComposition().getStage().dragDrop("eight","9px","147px");sym.$("OPeight").droppable({accept:sym.$("eight"),drop:function(){sym.$("eight").animate({"left":"320px","top":"241px"},"fast");sym.$("CartoonAccent082")[0].play();sym.disable=function()
{console.log('disable');sym.$("eight").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${seven}","mouseover",function(sym,e){sym.getComposition().getStage().dragDrop("seven","9px","147px");sym.$("OPseven").droppable({accept:sym.$("seven"),drop:function(){sym.$("seven").animate({"left":"325px","top":"149px"},"fast");sym.$("CartoonAccent082")[0].play();sym.disable=function()
{console.log('disable');sym.$("seven").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${six}","mouseover",function(sym,e){sym.getComposition().getStage().dragDrop("six","9px","147px");sym.$("OPsix").droppable({accept:sym.$("six"),drop:function(){sym.$("six").animate({"left":"224px","top":"341px"},"fast");sym.$("CartoonAccent082")[0].play();sym.disable=function()
{console.log('disable');sym.$("six").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${four}","mouseover",function(sym,e){sym.getComposition().getStage().dragDrop("four","9px","147px");sym.$("OPfour").droppable({accept:sym.$("four"),drop:function(){sym.$("four").animate({"left":"244px","top":"149px"},"fast");sym.$("CartoonAccent082")[0].play();sym.disable=function()
{console.log('disable');sym.$("four").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${three}","mouseover",function(sym,e){sym.getComposition().getStage().dragDrop("three","9px","147px");sym.$("OPthree").droppable({accept:sym.$("three"),drop:function(){sym.$("three").animate({"left":"150px","top":"341px"},"fast");sym.$("CartoonAccent082")[0].play();sym.disable=function()
{console.log('disable');sym.$("three").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${two}","mouseover",function(sym,e){sym.getComposition().getStage().dragDrop("two","9px","147px");sym.$("OPtwo").droppable({accept:sym.$("two"),drop:function(){sym.$("two").animate({"left":"150px","top":"227px"},"fast");sym.$("CartoonAccent082")[0].play();sym.disable=function()
{console.log('disable');sym.$("two").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${one}","mouseover",function(sym,e){sym.getComposition().getStage().dragDrop("one","9px","147px");sym.$("OPone").droppable({accept:sym.$("one"),drop:function(){sym.$("one").animate({"left":"150px","top":"149px"},"fast");sym.$("CartoonAccent082")[0].play();sym.disable=function()
{console.log('disable');sym.$("one").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Stage}","mouseover",function(sym,e){console.log(sym.getVariable("count"));if(sym.getVariable("count")===9){sym.$("Play").show();}else if(sym.getVariable("count")<9){sym.$("Play").hide();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Play}","click",function(sym,e){sym.$("Bubbles").show().css({"position":"absolute","z-index":1000});sym.$("Bubbles3").show().css({"position":"absolute","z-index":1000});sym.$("Bubbles")[0].play();sym.$("Bubbles3")[0].play();sym.$("Kids_Cheering-mp3")[0].play();sym.$("Kids_Cheering")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Redo}","click",function(sym,e){sym.getComposition().getStage().reset("one","463px","382px");sym.getComposition().getStage().reset("two","484px","184px");sym.getComposition().getStage().reset("three","484px","319px");sym.getComposition().getStage().reset("four","457px","268px");sym.getComposition().getStage().reset("five","9px","147px");sym.getComposition().getStage().reset("six","436px","143px");sym.getComposition().getStage().reset("seven","7px","234px");sym.getComposition().getStage().reset("eight","5px","375px");sym.getComposition().getStage().reset("nine","37px","284px");sym.getComposition().getStage().startover("Bubbles");sym.getComposition().getStage().startover("Bubbles3");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${one}","touchstart",function(sym,e){sym.getComposition().getStage().dragDrop("one","9px","147px");sym.$("OPone").droppable({accept:sym.$("one"),drop:function(){sym.$("one").animate({"left":"150px","top":"149px"},"fast");sym.$("CartoonAccent082")[0].play();sym.disable=function()
{console.log('disable');sym.$("one").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${two}","touchstart",function(sym,e){sym.getComposition().getStage().dragDrop("two","9px","147px");sym.$("OPtwo").droppable({accept:sym.$("two"),drop:function(){sym.$("two").animate({"left":"150px","top":"227px"},"fast");sym.$("CartoonAccent082")[0].play();sym.disable=function()
{console.log('disable');sym.$("two").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${three}","touchstart",function(sym,e){sym.getComposition().getStage().dragDrop("three","9px","147px");sym.$("OPthree").droppable({accept:sym.$("three"),drop:function(){sym.$("three").animate({"left":"150px","top":"341px"},"fast");sym.$("CartoonAccent082")[0].play();sym.disable=function()
{console.log('disable');sym.$("three").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${four}","touchstart",function(sym,e){sym.getComposition().getStage().dragDrop("four","9px","147px");sym.$("OPfour").droppable({accept:sym.$("four"),drop:function(){sym.$("four").animate({"left":"244px","top":"149px"},"fast");sym.$("CartoonAccent082")[0].play();sym.$("CartoonAccent08")[0].play();sym.disable=function()
{console.log('disable');sym.$("four").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${six}","touchstart",function(sym,e){sym.getComposition().getStage().dragDrop("six","9px","147px");sym.$("OPsix").droppable({accept:sym.$("six"),drop:function(){sym.$("six").animate({"left":"224px","top":"341px"},"fast");sym.$("CartoonAccent082")[0].play();sym.disable=function()
{console.log('disable');sym.$("six").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${seven}","touchstart",function(sym,e){sym.getComposition().getStage().dragDrop("seven","9px","147px");sym.$("OPseven").droppable({accept:sym.$("seven"),drop:function(){sym.$("seven").animate({"left":"325px","top":"149px"},"fast");sym.$("CartoonAccent082")[0].play();sym.disable=function()
{console.log('disable');sym.$("seven").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${eight}","touchstart",function(sym,e){sym.getComposition().getStage().dragDrop("eight","9px","147px");sym.$("OPeight").droppable({accept:sym.$("eight"),drop:function(){sym.$("eight").animate({"left":"320px","top":"241px"},"fast");sym.$("CartoonAccent082")[0].play();sym.disable=function()
{console.log('disable');sym.$("eight").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${nine}","touchstart",function(sym,e){sym.getComposition().getStage().dragDrop("nine","9px","147px");sym.$("OPnine").droppable({accept:sym.$("nine"),drop:function(){sym.$("nine").animate({"left":"343px","top":"343px"},"fast");sym.$("CartoonAccent082")[0].play();sym.disable=function()
{console.log('disable');sym.$("nine").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${five}","touchstart",function(sym,e){sym.getComposition().getStage().dragDrop("five","9px","147px");sym.$("OPfive").droppable({accept:sym.$("five"),drop:function(){sym.$("five").animate({"left":"220px","top":"244px"},"fast");sym.$("CartoonAccent082")[0].play();sym.disable=function()
{console.log('disable');sym.$("five").unbind("mouseover");}
sym.getComposition().getStage().disable();var countnew=sym.getVariable("count");countnew=countnew+1;sym.setVariable("count",countnew);}});});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
//Edge symbol end:'Preloader'
})})(AdobeEdge.$,AdobeEdge,"bubbles");