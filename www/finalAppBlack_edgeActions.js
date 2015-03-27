/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8714, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17961, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'load'
   (function(symbolName) {   
   
   })("load");
   //Edge symbol end:'load'

   //=========================================================
   
   //Edge symbol: 'main'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Bio}", "click", function(sym, e) {
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().play("bio");
         
         
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_music}", "click", function(sym, e) {
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().play("music");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Media}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().play("social");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_contacts}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().play("contact");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9003, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("slidesCopy").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_projects}", "click", function(sym, e) {
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         
         sym.getComposition().getStage().play("prospects");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text2}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().play("events");
         

      });
      //Edge binding end

   })("main");
   //Edge symbol end:'main'

   //=========================================================
   
   //Edge symbol: 'about'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_whitearrowfw}", "click", function(sym, e) {
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().play("home");
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().getSymbol("main").getSymbol("slidesCopy").play(0);
         

      });
      //Edge binding end

   })("about");
   //Edge symbol end:'about'

   //=========================================================
   
   //Edge symbol: 'music'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_whitearrowfw}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().play("home");
         
         sym.getComposition().getStage().getSymbol("main").getSymbol("slidesCopy").play(0);

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         
         var record = sym.$("record");
         var content =  '<iframe width="480" height="347" frameborder="0" scrolling="hidden" marginheight="0" marginwidth="0"src="http://youbetech.com/betatesting/KellymanMobile/photoSlides1/index.html"></iframe>'
         record.html(content);
         
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_back}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("music");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_whitemixtapefw}", "click", function(sym, e) {
         
         
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("mixtape");
         
         var viewM = sym.$("viewM");
         var content = '<iframe width="368" height="730" frameborder="0" scrolling="hidden" marginheight="0" marginwidth="0"src="http://timsevents.blogspot.com/search/label/mixtapes"></iframe>'
         viewM.html(content);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7693, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_whotfw}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("release");
         
         var viewH = sym.$("viewH");
         var content = '<iframe width="368" height="730" frameborder="0" scrolling="hidden" marginheight="0" marginwidth="0"src="http://timsevents.blogspot.com/search/label/releases"></iframe>'
         viewH.html(content);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_whiteflamesfw}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("release");
         
         var viewH = sym.$("viewH");
         var content = '<iframe width="368" height="730" frameborder="0" scrolling="hidden" marginheight="0" marginwidth="0"src="http://timsevents.blogspot.com/search/label/releases"></iframe>'
         viewH.html(content);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_whitecassettefw}", "click", function(sym, e) {
         
         
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("mixtape");
         
         var viewM = sym.$("viewM");
         var content = '<iframe width="368" height="730" frameborder="0" scrolling="hidden" marginheight="0" marginwidth="0"src="http://timsevents.blogspot.com/search/label/mixtapes"></iframe>'
         viewM.html(content);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_whiterecordfw}", "click", function(sym, e) {
         
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("reviews");
         
         var viewR = sym.$("viewR");
         var content = '<iframe width="368" height="730" frameborder="0" scrolling="hidden" marginheight="0" marginwidth="0"src="http://timsevents.blogspot.com/search/label/reviews"></iframe>'
         viewR.html(content);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_review1}", "click", function(sym, e) {
         sym.play("reviews");
         
         var viewR = sym.$("viewR");
         var content = '<iframe width="368" height="730" frameborder="0" scrolling="hidden" marginheight="0" marginwidth="0"src="http://timsevents.blogspot.com/search/label/reviews"></iframe>'
         viewR.html(content);
         

      });
      //Edge binding end

   })("music");
   //Edge symbol end:'music'

   //=========================================================
   
   //Edge symbol: 'media'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_whitearrowfw}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().play("home");
         
         sym.getComposition().getStage().getSymbol("main").getSymbol("slidesCopy").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_whitearrowfwCopy}", "click", function(sym, e) {
         
         sym.play("media");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_twitter}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("tweet");
         
         var viewT = sym.$("viewT");
         var content =  '<iframe width="368" height="730" frameborder="0" scrolling="hidden" marginheight="0" marginwidth="0"src="http://musicreviewstest.blogspot.com/p/twitter.html"></iframe>'
         viewT.html(content);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_instagram}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("gram");
         
         var viewI = sym.$("viewI");
         var content = '<iframe src="http://instaembedder.com/gallery-v2.php?username=timrahshad&width=125&cols=5&rows=3&margin=8&color=gray&likes=1&share_buttons=1&comments=1&date=1&link=1&frame=1&image_border=4&frame_color=transparent&" frameborder="0" width="100%" height="730" ></iframe>'
         viewI.html(content);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_facebook}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("face");
         
         var viewF = sym.$("viewF");
         var content = '<iframe src="http://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2F157971757559226&width=600&colorscheme=light&show_faces=true&border_color&stream=true&header=true&height=435" scrolling="yes" frameborder="0" style="border:none; overflow:hidden; width:350px; height:730px; background: white; float:left; " allowtransparency="true"></iframe>'
         viewF.html(content);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_youtube}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         
         sym.play("tube");
         
         var viewY= sym.$("viewY");
         var content =  '<iframe src="https://ytchannelembed.com/ytce-gallery.php?user=TimRahshad&rows=3&ratio=hd&width=130&margin=15&desc="100&desc_color=9E9E9E&title=30&title_color=000000&https=0&duration=1&views=1&likes=1&dislikes=1&fav=1&cols=3" style="width:100%;max-width:420px;height:730px;" class="ytce"></iframe>'
         viewY.html(content);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_wtwitLinkfw}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("tweet");
         
         var viewT = sym.$("viewT");
         var content =  '<iframe width="368" height="730" frameborder="0" scrolling="hidden" marginheight="0" marginwidth="0"src="http://musicreviewstest.blogspot.com/p/twitter.html"></iframe>'
         viewT.html(content);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_wfbfw}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("face");
         
         var viewF = sym.$("viewF");
         var content = '<iframe src="http://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2F157971757559226&width=600&colorscheme=light&show_faces=true&border_color&stream=true&header=true&height=435" scrolling="yes" frameborder="0" style="border:none; overflow:hidden; width:350px; height:730px; background: white; float:left; " allowtransparency="true"></iframe>'
         viewF.html(content);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_winstagramfw}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("gram");
         
         var viewI = sym.$("viewI");
         var content = '<iframe src="http://instaembedder.com/gallery-v2.php?username=timrahshad&width=125&cols=5&rows=3&margin=8&color=gray&likes=1&share_buttons=1&comments=1&date=1&link=1&frame=1&image_border=4&frame_color=transparent&" frameborder="0" width="100%" height="730" ></iframe>'
         viewI.html(content);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_wybLinkfw}", "click", function(sym, e) {
         sym.play("tube");
         
         var viewY= sym.$("viewY");
         var content =  '<iframe src="https://ytchannelembed.com/ytce-gallery.php?user=TimRahshad&rows=3&ratio=hd&width=130&margin=15&desc="100&desc_color=9E9E9E&title=30&title_color=000000&https=0&duration=1&views=1&likes=1&dislikes=1&fav=1&cols=3" style="width:100%;max-width:420px;height:730px;" class="ytce"></iframe>'
         viewY.html(content);
         

      });
      //Edge binding end

   })("media");
   //Edge symbol end:'media'

   //=========================================================
   
   //Edge symbol: 'form'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_whitearrowfw}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().play("home");
         
         sym.getComposition().getStage().getSymbol("main").getSymbol("slidesCopy").play(0);

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var viewC = sym.$("viewC");
         var content = '<iframe width="360" height="730"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0"src="http://betatest.tekbeasts.com"></iframe>'
         viewC.html(content);

      });
      //Edge binding end

   })("form");
   //Edge symbol end:'form'

   //=========================================================
   
   //Edge symbol: 'slides'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13055, function(sym, e) {
         // insert code here
         sym.play(0);

      });
      //Edge binding end

   })("slides");
   //Edge symbol end:'slides'

   //=========================================================
   
   //Edge symbol: 'projects'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_whitearrowfw}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().play("home");
         
         sym.getComposition().getStage().getSymbol("main").getSymbol("slidesCopy").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_whitearrowfwCopy}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("projects");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_divercitySlide}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("city");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rgLookBook2}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("rebel");
         

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_emojis}", "click", function(sym, e) {
         sym.play("dlm");

      });
      //Edge binding end

   })("projects");
   //Edge symbol end:'projects'

   //=========================================================
   
   //Edge symbol: 'bioslide'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5034, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("bioslide");
   //Edge symbol end:'bioslide'

   //=========================================================
   
   //Edge symbol: 'timsevents'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var viewE = sym.$("viewE");
         var content = '<iframe width="368" height="730" frameborder="0" scrolling="hidden" marginheight="0" marginwidth="0"src="http://timsevents.blogspot.com/search/label/events"></iframe>'
         viewE.html(content);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_whitearrowfw}", "click", function(sym, e) {
         sym.getComposition().getStage().play("home");
         
         sym.getComposition().getStage().getSymbol("main").getSymbol("slidesCopy").play(0);

      });
      //Edge binding end

   })("timsevents");
   //Edge symbol end:'timsevents'

})(jQuery, AdobeEdge, "EDGE-29124179");