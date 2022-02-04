!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@hotwired/stimulus-webpack-helpers"),require("@hotwired/stimulus"),require("@simonwep/pickr/dist/themes/monolith.min.css"),require("@simonwep/pickr"),require("i18n-js/index.js.erb"),require("daterangepicker"),require("intl-tel-input/build/css/intlTelInput.css"),require("intl-tel-input"),require("jquery"),require("select2")):"function"==typeof define&&define.amd?define(["exports","@hotwired/stimulus-webpack-helpers","@hotwired/stimulus","@simonwep/pickr/dist/themes/monolith.min.css","@simonwep/pickr","i18n-js/index.js.erb","daterangepicker","intl-tel-input/build/css/intlTelInput.css","intl-tel-input","jquery","select2"],t):t((e||self).fields={},e.stimulusWebpackHelpers,e.stimulus,0,e.Pickr,e.I18n,0,0,e.intlTelInput,e.$$1)}(this,function(e,t,i,n,r,o,a,l,s,u){function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=c(r),h=c(o),p=c(s),g=c(u);function f(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,m(e,t)}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}var v=function(e){function t(){return e.apply(this,arguments)||this}return f(t,e),t.prototype.clickShadowField=function(e){e.preventDefault(),this.shadowFieldTarget.click()},t}(i.Controller);v.targets=["shadowField"];var T=function(e){function t(){return e.apply(this,arguments)||this}f(t,e);var i=t.prototype;return i.pickImageAndUpload=function(e){e.preventDefault();var t=["local","url","camera"];this.hasGoogleApiKeyValue&&t.push("image_search");var i={cloud_name:this.cloudNameValue,apiKey:this.apiKeyValue,upload_preset:this.uploadPresetValue,upload_signature:this.getCloudinarySignature.bind(this),multiple:!1,sources:this.hasSourcesValue?this.sourcesValue.split(","):t,search_by_rights:!this.hasSearchByRightsValue||!1!==this.searchByRightsValue};this.hasGoogleApiKeyValue&&(i.google_api_key=this.googleApiKeyValue),cloudinary.openUploadWidget(i,this.handleWidgetResponse.bind(this))},i.clearImage=function(e){e.preventDefault(),this.hiddenFieldTarget.value=null,this.removeThumbnail()},i.getCloudinarySignature=function(e,t){$.ajax({url:this.signaturesUrlValue,type:"GET",dataType:"text",data:{data:t},complete:function(){console.log("complete")},success:function(t,i,n){e(t)},error:function(e,t,i){console.log(e,t,i)}})},i.handleWidgetResponse=function(e,t){if(!e&&t&&"success"===t.event){var i=t.info;this.hiddenFieldTarget.value=i.public_id,this.removeThumbnail(),this.addThumbnail(this.urlFormatValue.replace("CLOUDINARY_ID",i.public_id))}},i.addThumbnail=function(e){var t=$('<img src="'+e+'" width="'+this.widthValue+'" height="'+this.heightValue+'" data-'+this.identifier+'-target="thumbnail" />');$(this.uploadButtonTarget).prepend(t),this.uploadButtonTarget.classList.add(this.thumbnailShownClass)},i.removeThumbnail=function(){this.hasThumbnailTarget&&(this.uploadButtonTarget.removeChild(this.thumbnailTarget),this.uploadButtonTarget.classList.remove(this.thumbnailShownClass))},t}(i.Controller);T.targets=["uploadButton","hiddenField","thumbnail"],T.values={signaturesUrl:String,height:Number,width:Number,cloudName:String,apiKey:String,googleApiKey:String,urlFormat:String,sources:String,searchByRights:Boolean},T.classes=["thumbnailShown"];var C=function(e){function t(){return e.apply(this,arguments)||this}f(t,e);var i=t.prototype;return i.connect=function(){this.initPluginInstance(),this.colorOptions=$(this.colorOptionsTarget).find("button").map(function(e,t){return $(t).attr("data-color")}).get()},i.disconnect=function(){this.teardownPluginInstance()},i.pickColor=function(e){e.preventDefault();var t=e.target,i=t.dataset.color;$(this.colorInputTarget).val(i),$(this.colorPickerValueTarget).val(i),$(this.userSelectedColorTarget).data("color",i),$(".button-color").removeClass("ring-2 ring-offset-2"),this.pickr.setColor(i),t.classList.add("ring-2","ring-offset-2")},i.pickRandomColor=function(e){e.preventDefault();var t=Math.floor(256*Math.random()),i=Math.floor(256*Math.random()),n=Math.floor(256*Math.random());this.pickr.setColor("rgb "+t+" "+i+" "+n);var r=this.pickr.getColor().toHEXA().toString();this.pickr.setColor(r),this.showUserSelectedColor(r)},i.showUserSelectedColor=function(e){$(this.colorInputTarget).val(e),$(this.colorPickerValueTarget).val(e),$(".button-color").removeClass("ring-2 ring-offset-2"),$(this.userSelectedColorTarget).addClass("ring-2").addClass("ring-offset-2").css("background-color",e).css("--tw-ring-color",e).attr("data-color",e).show()},i.unpickColor=function(e){e.preventDefault(),$(this.colorPickerValueTarget).val(""),$(this.colorInputTarget).val(""),$(this.userSelectedColorTarget).hide(),$(".button-color").removeClass("ring-2 ring-offset-2")},i.togglePickr=function(e){e.preventDefault()},i.initPluginInstance=function(){var e=this;this.pickr=d.default.create({el:".btn-pickr",theme:"monolith",useAsButton:!0,default:this.initialColorValue||"#1E90FF",components:{preview:!0,hue:!0,interaction:{input:!0,save:!0}}}),this.pickr.on("save",function(t,i){var n=t.toHEXA().toString();e.colorOptions.includes(n)||e.showUserSelectedColor(n),e.pickr.hide()});var t=this;$('input[type="text"].pcr-result').on("keydown",function(e){"Enter"===e.key&&t.pickr.applyColor(!1)})},i.teardownPluginInstance=function(){this.pickr.destroy()},t}(i.Controller);C.targets=["colorPickerValue","colorField","colorInput","userSelectedColor","colorOptions"],C.values={initialColor:String},require("daterangepicker/daterangepicker.css");var y=function(e){function t(){return e.apply(this,arguments)||this}f(t,e);var i=t.prototype;return i.connect=function(){this.initPluginInstance()},i.disconnect=function(){this.teardownPluginInstance()},i.clearDate=function(e){e.preventDefault(),$(this.fieldTarget).val("")},i.applyDateToField=function(e,t){var i=this.includeTimeValue?"MM/DD/YYYY h:mm A":"MM/DD/YYYY";$(this.fieldTarget).val(t.startDate.format(i))},i.showTimeZoneButtons=function(e){e.preventDefault(),$(this.currentTimeZoneWrapperTarget).toggleClass("hidden"),$(this.timeZoneButtonsTarget).toggleClass("hidden")},i.showTimeZoneSelectWrapper=function(e){e.preventDefault(),$(this.timeZoneButtonsTarget).toggleClass("hidden"),this.hasTimeZoneSelectWrapperTarget&&$(this.timeZoneSelectWrapperTarget).toggleClass("hidden")},i.resetTimeZoneUI=function(e){e&&e.preventDefault(),$(this.currentTimeZoneWrapperTarget).removeClass("hidden"),$(this.timeZoneButtonsTarget).addClass("hidden"),this.hasTimeZoneSelectWrapperTarget&&$(this.timeZoneSelectWrapperTarget).addClass("hidden")},i.setTimeZone=function(e){e.preventDefault();var t=this.currentTimeZoneWrapperTarget.querySelector("a"),i=e.target.dataset.value;$(this.timeZoneFieldTarget).val(i),$(t).text(i),$(".time-zone-button").removeClass("button").addClass("button-alternative"),$(e.target).removeClass("button-alternative").addClass("button"),this.resetTimeZoneUI()},i.initPluginInstance=function(){if($(this.fieldTarget).daterangepicker({singleDatePicker:!0,timePicker:this.includeTimeValue,timePickerIncrement:5,autoUpdateInput:!1,locale:{cancelLabel:h.default.t("fields.date_field.cancel"),applyLabel:h.default.t("fields.date_field.apply"),format:this.includeTimeValue?"MM/DD/YYYY h:mm A":"MM/DD/YYYY"}}),$(this.fieldTarget).on("apply.daterangepicker",this.applyDateToField.bind(this)),$(this.fieldTarget).on("cancel.daterangepicker",this.clearDate.bind(this)),this.pluginMainEl=this.fieldTarget,this.plugin=$(this.pluginMainEl).data("daterangepicker"),this.includeTimeValue&&this.hasTimeZoneSelectWrapperTarget){this.timeZoneSelect=this.timeZoneSelectWrapperTarget.querySelector("select.select2"),$(this.timeZoneSelect).select2({width:"style"});var e=this;$(this.timeZoneSelect).on("change.select2",function(t){var i=e.currentTimeZoneWrapperTarget.querySelector("a"),n=t.target.value;$(e.timeZoneFieldTarget).val(n),$(i).text(n);var r=$(".selected-option-time-zone-button");e.defaultTimeZonesValue.includes(n)?($(".time-zone-button").removeClass("button").addClass("button-alternative"),r.addClass("hidden").attr("hidden",!0),$('a[data-value="'+n+'"').removeClass("button-alternative").addClass("button")):($(".time-zone-button").removeClass("button").addClass("button-alternative"),r.text(n),r.attr("data-value",n).removeAttr("hidden"),r.removeClass(["hidden","button-alternative"]).addClass("button")),e.resetTimeZoneUI()})}},i.teardownPluginInstance=function(){void 0!==this.plugin&&($(this.pluginMainEl).off("apply.daterangepicker"),$(this.pluginMainEl).off("cancel.daterangepicker"),this.plugin.remove(),this.includeTimeValue&&$(this.timeZoneSelect).select2("destroy"))},t}(i.Controller);y.targets=["field","clearButton","currentTimeZoneWrapper","timeZoneButtons","timeZoneSelectWrapper","timeZoneField"],y.values={includeTime:Boolean,defaultTimeZones:Array};var b=function(e){function t(){return e.apply(this,arguments)||this}f(t,e);var i=t.prototype;return i.connect=function(){var e=this,t=document.addEventListener("direct-upload:initialize",function(t){e.selectFileButtonTarget.classList.add("hidden"),e.progressBarTarget.innerText="0%",e.progressBarTarget.style.width="0%",e.progressBarTarget.setAttribute("aria-valuenow",0),e.progressBarTarget.parentNode.classList.remove("hidden")}),i=document.addEventListener("direct-upload:progress",function(t){var i=t.detail.progress,n=i.toFixed(1)+"%";e.progressBarTarget.innerText=n,e.progressBarTarget.setAttribute("aria-valuenow",i),e.progressBarTarget.style.width=n}),n=document.addEventListener("direct-upload:error",function(t){t.preventDefault(),e.progressBarTarget.innerText=t.detail.error});this.uploadListeners={"direct-upload:initialize":t,"direct-upload:progress":i,"direct-upload:error":n}},i.disconnect=function(){for(var e in this.uploadListeners)document.removeEventListener(e,this.uploadListeners[e])},i.uploadFile=function(){this.fileFieldTarget.click()},i.removeFile=function(){this.hasDownloadFileButtonTarget&&this.downloadFileButtonTarget.classList.add("hidden"),this.removeFileButtonTarget.classList.add("hidden"),this.removeFileFlagTarget.value=!0},i.handleFileSelected=function(){var e=this.selectFileButtonTarget.querySelector("span"),t=this.selectFileButtonTarget.querySelector("i");this.hasDownloadFileButtonTarget&&this.downloadFileButtonTarget.remove(),e.innerText="Select Another File",t.classList.remove("ti-upload"),t.classList.add("ti-check")},t}(i.Controller);b.targets=["fileField","removeFileFlag","downloadFileButton","removeFileButton","selectFileButton","progressBar"];var S=function(e){function t(){return e.apply(this,arguments)||this}f(t,e);var i=t.prototype;return i.connect=function(){this.initPluginInstance()},i.disconnect=function(){this.teardownPluginInstance()},i.initPluginInstance=function(){this.plugin=p.default(this.fieldTarget,{hiddenInput:this.fieldTarget.dataset.method,utilsScript:"/assets/intl-tel-input/utils.js",customContainer:"w-full"})},i.teardownPluginInstance=function(){void 0!==this.plugin&&this.plugin.destroy()},t}(i.Controller);S.targets=["field"],require("select2/dist/css/select2.min.css");var k=function(e){function t(){return e.apply(this,arguments)||this}f(t,e);var i=t.prototype;return i.connect=function(){this.initPluginInstance()},i.disconnect=function(){this.teardownPluginInstance()},i.cleanupBeforeInit=function(){g.default(this.element).find(".select2-container--default").remove()},i.initPluginInstance=function(){var e={};this.enableSearchValue||(e.minimumResultsForSearch=-1),e.tags=this.acceptsNewValue,this.searchUrlValue&&(e.ajax={url:this.searchUrlValue,dataType:"json",data:function(e){return{search:e.term,page:e.page||1}}}),e.templateResult=this.formatState,e.templateSelection=this.formatState,e.width="style",this.cleanupBeforeInit(),this.pluginMainEl=this.selectTarget,g.default(this.pluginMainEl).select2(e)},i.teardownPluginInstance=function(){void 0!==this.pluginMainEl&&g.default(this.pluginMainEl).select2("destroy")},i.formatState=function(e){var t=g.default(e.element).attr("data-image"),i="";return t&&(i='<img src="'+t+'" /> '),g.default("<span>"+i+e.text+"</span>")},t}(i.Controller);k.targets=["select"],k.values={acceptsNew:Boolean,enableSearch:Boolean,searchUrl:String};var w=[[ButtonToggleController,"./fields/button_toggle_controller"],[CloudinaryImageController,"./fields/cloudinary_image_controller"],[ColorPickerController,"./fields/color_picker_controller"],[DateController,"./fields/date_controller"],[FileFieldController,"./fields/file_field_controller"],[PhoneController,"./fields/phone_controller"],[SuperSelectController,"./fields/super_select_controller"]].map(function(e){var i=e[0];return{identifier:t.identifierForContextKey(e[1]),controllerConstructor:i}});e.ButtonToggleController=v,e.CloudinaryImageController=T,e.ColorPickerController=C,e.DateController=y,e.FileFieldController=b,e.PhoneController=S,e.SuperSelectController=k,e.controllerDefinitions=w});
//# sourceMappingURL=fields.umd.js.map
