{"version":3,"file":"./svg-injector.min.js","sources":["./svg-injector.js"],"names":["window","document","uniqueClasses","list","split","hash","i","length","out","hasOwnProperty","unshift","join","onlyInjectVisiblePart","removeStylesClass","svgNS","xlinkNS","isLocal","location","protocol","hasSvgSupport","implementation","hasFeature","forEach","Array","prototype","fn","scope","this","TypeError","len","call","svgCache","injectCount","injectedElements","requestQueue","ranScripts","copyAttributes","svgElemSource","svgElemTarget","attributesToIgnore","curAttr","attributes","item","indexOf","name","setAttribute","value","cloneSymbolAsSVG","svgSymbol","svg","createElementNS","childNodes","child","appendChild","cloneNode","getClassList","svgToCheck","curClassAttr","getAttribute","cloneSvg","sourceSvg","fragId","svgElem","newSVG","viewBox","viewBoxAttr","symbolAttributesToFind","curClassList","setViewboxOnNewSVG","symbolElem","undefined","getElementById","console","warn","SVGSymbolElement","SVGViewElement","selector","Math","abs","x","y","querySelector","SVGSVGElement","prop","removeAttribute","SVGUseElement","referencedSymbol","getAttributeNS","substr","push","queueRequest","callback","fileName","fragmentId","processRequestQueue","url","index","setTimeout","loadSvg","urlArr","XMLHttpRequest","httpRequest","onreadystatechange","readyState","status","responseXML","statusText","Document","documentElement","DOMParser","Function","xmlDoc","parser","parseFromString","responseText","e","getElementsByTagName","open","overrideMimeType","send","injectElement","el","evalScripts","pngFallback","fallbackUrl","imgUrl","imgUrlSplitByFId","test","perElementFallback","pop","replace","imgId","imgTitle","classMerge","concat","imgStyle","imgData","filter","at","dataAttr","newClipPathName","clipPaths","querySelectorAll","g","clipPathsLen","id","usingClipPath","h","usingClipPathLen","newMaskName","masks","masksLen","usingMask","j","usingMaskLen","script","scriptType","scripts","scriptsToEval","k","scriptsLen","innerText","textContent","removeChild","l","scriptsToEvalLen","styleTags","styleTag","svgClassList","log","parentNode","replaceChild","SVGInjector","elements","options","done","removeStyleClass","eachCallback","each","elementsLoaded","element","module","exports","define","amd"],"mappings":"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"}