const simpleIcons = require('simple-icons');
const { getSponsorUrl } = require('./helper/sponsorUrlHelper');

hexo.extend.tag.register('sponsor', function (args) {
  const config = Object.assign(
    {
      enable: true,
      service: undefined,
      text: undefined,
      icon_size: '24px',
      icon_color: '#000000',
      username: undefined,
      border_rounded: true,
      border_radius: undefined,
      background_color: undefined,
      container_padding: '8px'
    },
    hexo.config.funding
  );

  if (!config.enable) return null;
  if (!config.service) {
    console.error(
      '[hexo-sponsor-button]: You haven\'t configured the service name in your _config.yml file'
    );
    return null;
  }
  if (!config.username) {
    console.error(
      '[hexo-sponsor-button]: You haven\'t configured your username in your _config.yml file'
    );
    return null;
  }
  return (
    `<div style="width: fit-content;
          ${config.background_color && `background-color:${config.background_color};`}
          ${config.border_radius && `border-radius:${config.border_radius};`}
          padding:${config.container_padding}">
     <a href="${getSponsorUrl(config)}">
       <svg role="img" style="width: ${config.icon_size}; height:${config.icon_size}; fill:${config.icon_color}">
         <path d="${simpleIcons.get(config.service).path}"></path>
       </svg>
    ${(config.text === undefined
      ? `Support Me on ${config.service}`
      : config.text)}
     </a>
    </div>`
  );
});
