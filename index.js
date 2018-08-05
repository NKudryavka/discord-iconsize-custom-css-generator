"use strict";
document.addEventListener('DOMContentLoaded', function () {
    var domResult = document.getElementById('form-result-css');
    var domStyle = document.getElementById('updated-css');
    var form = {
        iconsize: document.getElementById('form-iconsize'),
        iconskip: document.getElementById('form-iconskip'),
    };
    function update() {
        var iconsize = form.iconsize.value;
        var iconskip = form.iconskip.value;
        document.getElementById('indicator-iconsize').textContent = iconsize;
        document.getElementById('indicator-iconskip').textContent = iconskip;
        var css = generateResultCss(parseFloat(iconsize), parseFloat(iconskip));
        domResult.textContent = css.replace(/#preview-wrapper /g, '');
        domStyle.textContent = css;
    }
    domResult.addEventListener('focus', function () { this.select(); });
    update();
    document.getElementById('setting-wrapper').addEventListener('input', update);
});
function generateResultCss(iconsize, iconskip) {
    iconskip = iconsize * iconskip / 100;
    var sideMarginRate = 0.2 + (50 - iconsize) * 0.003;
    var sideMargin = iconsize * sideMarginRate;
    return "#preview-wrapper .guildsWrapper-5TJh6A {\n  width: " + iconsize * (1 + sideMarginRate * 2) + "px;\n}\n#preview-wrapper .scrollWrap-1IAIlv {\n  width: " + (iconsize * (1 + sideMarginRate * 2) + 13) + "px;\n}\n#preview-wrapper .guilds-1q_RqH {\n  padding: 10px 0 10px " + sideMargin + "px;\n}\n#preview-wrapper .guild-1EfMGQ {\n  height: " + iconsize + "px;\n  width: " + iconsize + "px;\n}\n#preview-wrapper .guild-1EfMGQ.selected-ML3OIq:before, #preview-wrapper .guild-1EfMGQ.unread-qLkInr:before {\n  border-radius: " + sideMargin / 2 + "px;\n  content: \" \";\n  height: " + sideMargin + "px;\n  left: " + -sideMargin * 1.5 + "px;\n  margin-top: " + -sideMargin / 2 + "px;\n  width: " + sideMargin + "px;\n}\n#preview-wrapper .guild-1EfMGQ + .guild-1EfMGQ {\n  margin-top: " + iconskip + "px;\n}\n#preview-wrapper .guild-1EfMGQ .guildInner-3DSoA4 {\n  border-radius: " + iconsize / 2 + "px !important;\n  font-size: " + iconsize * 0.36 + "px;\n  line-height: " + iconsize + "px;\n}\n#preview-wrapper .guild-1EfMGQ .guildInner-3DSoA4 a {\n  height: " + iconsize + "px;\n  width: " + iconsize + "px;\n}\n#preview-wrapper .guilds-1q_RqH .iconSizeLarge-161qtT {\n  width: " + iconsize + "px;\n  height: " + iconsize + "px;\n}\n#preview-wrapper .guilds-1q_RqH .iconSizeLarge-161qtT.noIcon-1a_FrS {\n  line-height: " + iconsize + "px;\n}\n#preview-wrapper #bd-pub-li {\n  margin-top: 4px;\n}\n#preview-wrapper #bd-pub-button {\n  font-size: " + iconsize * 0.24 + "px !important;\n}\n#preview-wrapper .friendsOnline-_wi_fM {\n  font-size: " + iconsize * 0.2 + "px;\n  margin-bottom: " + iconsize * 0.2 + "px;\n  margin-top: " + iconsize * 0.2 + "px;\n  width: " + iconsize + "px;\n}\n#preview-wrapper .dms-rcsEnV {\n  margin-bottom: " + iconsize * 0.2 + "px;\n  margin-top: " + iconsize * 0.2 + "px;\n}\n#preview-wrapper .guildSeparator-1X4GQ1 {\n  margin-bottom: " + iconsize * 0.2 + "px;\n  width: " + iconsize + "px;\n}\n#preview-wrapper .guildSeparator-1X4GQ1:after {\n  left: " + sideMarginRate * 100 + "%;\n  right: " + sideMarginRate * 100 + "%;\n}\n#preview-wrapper .guildsAdd-21_IdK {\n  font-size: " + iconsize * 0.8 + "px;\n  height: " + iconsize + "px;\n  width: " + iconsize + "px;\n}\n#preview-wrapper .guildsAddInner-1KMFy- {\n  top: " + -iconsize / 10 + "px;\n}\n#preview-wrapper .guild-1EfMGQ + .guildsAdd-21_IdK{\n  margin-top: " + (iconskip < 4 ? 4 : iconskip) + "px\n}";
}
