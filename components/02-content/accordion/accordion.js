// Notes:
// ------
// * Each change to this file needs a restart of the fractal instance
// * Exported methods are merged as helpers in fractal.js

module.exports = function () {
  return {
    accordion(options) {
      const classNames = ['dso-accordion', this.modifiers].filter(c => c).join(' ');

      return `
        <div class="${classNames}">
          ${options.fn(this)}
        </div>
      `.trim();
    },

    accordionSection(title, options) {
      var self = this;

      let html = (
        `<div class="dso-accordion-section${(self.state ? ' dso-' + self.state : '') + (self.open ? ' dso-open' : '') + (self.sections ? ' dso-nested-accordion' : '') }">
          <div class="dso-section-handle">
            <a href="#">${ title }`);

      if (self.state) {
        const alias = self.state;
        const srcmap = { info: 'information', danger: 'error', success: 'succes' };
        const altmap = { info: 'informatie', danger: 'fout', success: 'succes', warning: 'waarschuwing' };
        const iconname = srcmap[alias] || alias;
        const altimg = altmap[alias] || alias;

        html+= (`<img class="dso-accordion-state-img" alt="${ altimg }" src="/icons/Notification/${ iconname }_24x24.svg">`);
      }

      html += (`</a></div>`);

      if (self.open) {
        html += (
          `<div class="dso-section-body">
            ${options.fn(self)}
          </div>`);
      }

      html += `</div>`;

      return html.trim();
    }
  };
};
