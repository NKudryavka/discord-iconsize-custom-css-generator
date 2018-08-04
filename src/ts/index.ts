document.addEventListener('DOMContentLoaded', () => {
  const domResult = document.getElementById('form-result-css')!;
  const domStyle = document.getElementById('updated-css')!;
  const form = {
    iconsize: document.getElementById('form-iconsize')! as HTMLInputElement,
    iconskip: document.getElementById('form-iconskip')! as HTMLInputElement,
  };
  function update() {
    const iconsize = form.iconsize.value;
    const iconskip = form.iconskip.value;
    document.getElementById('indicator-iconsize')!.textContent = iconsize;
    document.getElementById('indicator-iconskip')!.textContent = iconskip;
    const css = generateResultCss(parseFloat(iconsize), parseFloat(iconskip));
    domResult.textContent = css.replace(/#preview-wrapper /g, '');
    domStyle.textContent = css;
  }

  update();
  document.getElementById('setting-wrapper')!.addEventListener('input', update);
});

function generateResultCss(iconsize: number, iconskip: number) {
  iconskip = iconsize*iconskip/100;
  const sideMargin = 0.2;
  return `#preview-wrapper .guildsWrapper-5TJh6A {
  width: ${iconsize*(1+sideMargin*2)}px;
}
#preview-wrapper .scrollWrap-1IAIlv {
  width: ${iconsize*(1+sideMargin*2)+13}px;
}
#preview-wrapper .guilds-1q_RqH {
  padding: 10px 0 10px ${iconsize*sideMargin}px;
}
#preview-wrapper .guild-1EfMGQ {
  height: ${iconsize}px;
  width: ${iconsize}px;
}
#preview-wrapper .guild-1EfMGQ + .guild-1EfMGQ {
  margin-top: ${iconskip}px;
}
#preview-wrapper .guild-1EfMGQ .guildInner-3DSoA4 {
  border-radius: ${iconsize/2}px;
  font-size: ${iconsize*0.36}px;
  line-height: ${iconsize}px;
}
#preview-wrapper .guild-1EfMGQ .guildInner-3DSoA4 a {
  height: ${iconsize}px;
  width: ${iconsize}px;
}
#preview-wrapper .iconSizeLarge-161qtT {
  width: ${iconsize}px;
  height: ${iconsize}px;
}
#preview-wrapper .iconSizeLarge-161qtT.noIcon-1a_FrS {
  line-height: ${iconsize}px;
}
#preview-wrapper #bd-pub-li {
  margin-top: 4px;
}
#preview-wrapper #bd-pub-button {
  font-size: ${iconsize*0.24}px !important;
}
#preview-wrapper .friendsOnline-_wi_fM {
  font-size: ${iconsize*0.2}px;
  margin-bottom: ${iconsize*0.2}px;
  margin-top: ${iconsize*0.2}px;
  width: ${iconsize}px;
}
#preview-wrapper .dms-rcsEnV {
  margin-bottom: ${iconsize*0.2}px;
  margin-top: ${iconsize*0.2}px;
}
#preview-wrapper .guildSeparator-1X4GQ1 {
  margin-bottom: ${iconsize*0.2}px;
  width: ${iconsize}px;
}
#preview-wrapper .guildSeparator-1X4GQ1:after {
  content: " ";
  height: 2px;
  left: ${sideMargin*100}%;
  right: ${sideMargin*100}%;
}
#preview-wrapper .guildsAdd-21_IdK {
  font-size: ${iconsize*0.8}px;
  height: ${iconsize}px;
  width: ${iconsize}px;
}
#preview-wrapper .guildsAddInner-1KMFy- {
  top: ${-iconsize/10}px;
}
#preview-wrapper .guild-1EfMGQ + .guildsAdd-21_IdK{
  margin-top: ${iconskip < 4 ? 4 : iconskip}px
}`;
}