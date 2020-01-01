(function($, window, document, undefined){
  var Translate = {
    initialize : function(pkg, options){
      this.packages = [];
      this.loaded = $.Deferred();

      this.translatable = true;

      this.options = $.extend({}, $.fn.jqTranslate.options, options);
      var userLanguage = this.getUserLanguage();

      if (typeof pkg === 'string'){
        this.packages.push(pkg);
      }
      else {
        this.packages = pkg;
      }

      if (this.isTranslatable(userLanguage)){
        this.loadLanguages();
      }
      else{
        this.translatable = false;
      }

      return this.loaded.promise();
    },
    getUserLanguage : function(){
      var userLang = this.options.forceLang || navigator.language || navigator.userLanguage;
      $.defaultLanguage = userLang;

      userLang = userLang.replace(/_/, '-').toLowerCase();

      if (userLang.length > 3){
        userLang = userLang.substring(0,3) + userLang.substring(3).toUpperCase();
        this.languages = [
          userLang.substring(0,2),
          userLang.substring(3).toUpperCase()
        ];
      }
      else {
        this.languages = [
          userLang
        ];
      }

      $.fn.jqTranslate.userLang = userLang;
      return userLang;
    },
    isTranslatable : function(language){
      if (this.options.defaultLang === language) { return false; }
      else { return ($.inArray(language, this.options.skip) === -1); }
    },
    loadLanguages : function(){
      var loaded = 0, maxLoad = Translate.languages.length * Translate.packages.length;
      this.translatedStrings = {};

      $.each(Translate.packages,function(i, pkg){
        var ePkg = pkg;

        $.each(Translate.languages, function (i, lang){
          Translate.getLanguage(ePkg,lang)
          .done(Translate.storeLangFile)
          .always(function(){
            loaded++;
            if (loaded >= maxLoad){Translate.loaded.resolve();}
          });
        });
      });
    },
    getLanguage : function(pkg, language){
      var self = this,
          path = '',
          got = $.Deferred();

      if (self.options.path){
        path = self.options.path + '/';
      }
      var url = path + [pkg, language].join('-') + '.json';

      $.ajax ({
        url : url,
        dataType : "json",
        cache : self.options.cache,
        async: self.options.asyncLangLoad
      }).done(function(data){
        got.resolve(data);
      }).fail(function(){
        if (self.options.fallbackLang){
          url = path + [pkg, self.options.fallbackLang].join('-') + '.json';
          $.ajax ({
            url : url,
            dataType : "json",
            cache : self.options.cache,
            async: self.options.asyncLangLoad
          }).done(function(data){
            got.resolve(data);
          });
        }
        else {
          got.reject();
        }
      });

      return got;
    },
    storeLangFile : function(data){
      $.extend(Translate.translatedStrings, data);
	  for(var i in data ){
		  var TempItem = data[i];
		  
		  var TileDiv = document.createElement("div");
		  TileDiv.className = TempItem.class;
		  TileDiv.id = i;
		  
		  var TileImg = document.createElement("img");
		  TileImg.src = TempItem.src;
		  TileImg.style.width = "100%";
		  TileImg.className = "alphaBtn"
		  TileImg.alt = TempItem.alt;
		  TileImg.id = TempItem.id;
		  
		  if(TempItem.href != "#")
		  {
			  var TileHref = document.createElement("a");
			  TileHref.href = TempItem.href;
			  TileHref.target = TempItem.target;	

			  if(TempItem.onclick == "NewGuideWindow")
			  {
				  var Link = TempItem.href;
				  TileHref.onclick = function(){window.open(Link,'guideWindow','height=800,width=930'); return false;};
			  }
			  
			  TileDiv.appendChild(TileHref);
			  TileHref.appendChild(TileImg);
		  }
		  else
		  {
			  TileDiv.appendChild(TileImg);
		  }
		  
		  document.getElementById("container").appendChild(TileDiv);
		}
    },
    translate : function() {
       var elem = $(this),
          key = elem.data('translate');

      if (Translate.translatable){
        if (Translate.translatedStrings[key]){
          if (Translate.translatedStrings[key].length === undefined){
            // The key have nested keys
            Translate.translateElement(elem,Translate.translatedStrings[key].text);
            delete Translate.translatedStrings[key].text;
            elem.attr(Translate.translatedStrings[key]);
          }
          else{
            Translate.translateElement(elem,Translate.translatedStrings[key]);
          }
        }
      }

      if (typeof Translate.options.onComplete === 'function'){
        Translate.options.onComplete.apply(this, arguments);
      }

      return elem;
    },
    translateElement : function (elem, value){
      if (elem.is('input') || elem.is('textarea')) {
        if (elem.is('[placeholder]')){
          elem.attr('placeholder', value);
        }
        else{
          elem.val(value);
        }
      }
      else if (elem.is('optgroup')){
        elem.attr('label', value);
      }
      else if (elem.is('img')) {
        elem.attr('alt',value);
      }
      else {
        elem.html(value);
      }
    }
  };

  bakalayout = function(pkg, options){
    var self = this;
    Translate.initialize(pkg, options).done(function(){
        Translate.translate();
    });
    return this;
  };
  $.fn.jqTranslate.options = {
    asyncLangLoad : true,
    cache : true,
    defaultLang : null,
    fallbackLang : null,
    forceLang : null,
    onComplete : null,
    path : null,
    skip : []
  };
})(jQuery, window, document);