// ==UserScript==
// @name         大族激光WIFI去广告
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       云未归来
// @include     http://*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var array=new Array("ad_div","ad_popup","meilins_promotion");
    var doc;
    for(var i=0;i<array.length;i++)
    {
        doc=document.getElementById(array[i]);
        if(doc)
        {
           //  alert("1111111");
            //console.log(array[i]+"\r\n");
            doc.parentNode.removeChild(doc);
        }//else
      //  {
       //alert("222222");
       // }
    }
})();