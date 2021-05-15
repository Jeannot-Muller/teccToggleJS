"use strict";
var tecc;
(function (tecc) {
    class teccToggle extends XojoWeb.XojoVisualControl {
        constructor(id, events) {
            super(id, events);
        }
        render() {
            super.render();
            let el = this.DOMElement();
            if (!el)
                return;
            this.setAttributes();
            var idstr = el.id + "_teccToggle";
            let btn = document.createElement("div");
            var disabledStr = "";
            var opacityStr = "";
            if (!this.enabled) {
                disabledStr = "disabled='disabled'";
                opacityStr = ";opacity: 20%";
            }
            ;
            var iOff = "";
            if (this.off == true) {
                iOff = "checked='checked'";
            }
            ;
            var cbid = "ts" + idstr;
            btn.innerHTML = "<label class='toggle'><input id='" + cbid + "' + class='teccCB' " + iOff + " type='checkbox' " + disabledStr + "><span class='roundbutton' style='--crown:" + this.crowncolor + ";--deactive:" + this.coloroff + "; background-color: " + this.coloron + opacityStr + ";transform: rotate(" + this.crownposition + "deg) scaleX(-1) !important;" + "'></span></label>";
            btn.id = idstr;
            btn.addEventListener("click", function (event) {
                var controlObject = XojoWeb.getNamedControl(el.id);
                var jsonObj = new XojoWeb.JSONItem();
                jsonObj.set('ID', el.id);
                jsonObj.set('target', event.target.tagName);
                var c = document.getElementById(cbid).checked;
                jsonObj.set('value', !c);
                controlObject.triggerServerEvent('teccToggleClick', jsonObj), true;
            });
            this.replaceEveryChild(btn);
            this.applyTooltip(el);
            this.applyUserStyle();
        }
        updateControl(data) {
            super.updateControl(data);
            let js = $.parseJSON(data);
            this.refresh();
            this.off = js.off;
            this.coloron = js.coloron;
            this.crownposition = js.crownposition;
            this.crowncolor = js.crowncolor;
            this.coloroff = js.coloroff;
        }
    }
    tecc.teccToggle = teccToggle;
})(tecc || (tecc = {}));
