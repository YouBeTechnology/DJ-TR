
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8714,function(sym,e){sym.stop();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'load'
(function(symbolName){})("load");
//Edge symbol end:'load'

//=========================================================

//Edge symbol: 'main'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Bio}","click",function(sym,e){sym.getComposition().getStage().play("bio");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_music}","click",function(sym,e){sym.getComposition().getStage().play("music");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text10}","click",function(sym,e){sym.getComposition().getStage().play("social");});
//Edge binding end
})("main");
//Edge symbol end:'main'

//=========================================================

//Edge symbol: 'about'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_whitearrowfw}","click",function(sym,e){sym.getComposition().getStage().play("home");});
//Edge binding end
})("about");
//Edge symbol end:'about'

//=========================================================

//Edge symbol: 'music'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_whitearrowfw}","click",function(sym,e){sym.getComposition().getStage().play("home");});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_whitereviewfw}","click",function(sym,e){sym.play("reviews");var viewR=sym.$("viewR");var content='<iframe width="368" height="730" frameborder="0" scrolling="hidden" marginheight="0" marginwidth="0"src="http://aidlemind.blogspot.com/search/label/Review"></iframe>'
viewR.html(content);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_back}","click",function(sym,e){sym.play("music");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_whitemixtapefw}","click",function(sym,e){sym.play("mixtape");var viewM=sym.$("viewM");var content='<iframe width="368" height="730" frameborder="0" scrolling="hidden" marginheight="0" marginwidth="0"src="http://youbetech.com/betatesting/dj%20tr%20mobile%20app/contactform/"></iframe>'
viewM.html(content);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7693,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_whotfw}","click",function(sym,e){sym.play("release");var viewH=sym.$("viewH");var content='<iframe width="368" height="730" frameborder="0" scrolling="hidden" marginheight="0" marginwidth="0"src="http://aidlemind.blogspot.com/search/label/Hot%20Releases"></iframe>'
viewH.html(content);});
//Edge binding end
})("music");
//Edge symbol end:'music'

//=========================================================

//Edge symbol: 'media'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_whitearrowfw}","click",function(sym,e){sym.getComposition().getStage().play("home");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8709,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_whitearrowfwCopy}","click",function(sym,e){sym.play("media");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_twitter}","click",function(sym,e){sym.play("tweet");var viewT=sym.$("viewT");var content='<iframe width="368" height="730" frameborder="0" scrolling="hidden" marginheight="0" marginwidth="0"src="http://aidlemind.blogspot.com/p/twitter.html"></iframe>'
viewT.html(content);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_instagram}","click",function(sym,e){sym.play("gram");var viewI=sym.$("viewI");var content='<iframe src="http://instaembedder.com/gallery-v2.php?username=timrahshad&width=125&cols=5&rows=3&margin=8&color=gray&likes=1&share_buttons=1&comments=1&date=1&link=1&frame=1&image_border=4&frame_color=transparent&" frameborder="0" width="100%" height="730" ></iframe>'
viewI.html(content);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_facebook}","click",function(sym,e){sym.play("face");var viewF=sym.$("viewF");var content='<iframe src="http://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Fwonka&width=600&colorscheme=light&show_faces=true&border_color&stream=true&header=true&height=435" scrolling="yes" frameborder="0" style="border:none; overflow:hidden; width:368px; height:730px; background: white; float:left; " allowtransparency="true"></iframe>'
viewF.html(content);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_youtube}","click",function(sym,e){sym.play("tube");var viewY=sym.$("viewY");var content='<iframe width="368" height="730" frameborder="0" scrolling="hidden" marginheight="0" marginwidth="0"src="http://www.youtube.com/embed/?listType=user_uploads&list=WOODKIDMUSIC"></iframe>'
viewY.html(content);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",11500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",12500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",13500,function(sym,e){sym.stop();});
//Edge binding end
})("media");
//Edge symbol end:'media'
})(jQuery,AdobeEdge,"EDGE-29124179");