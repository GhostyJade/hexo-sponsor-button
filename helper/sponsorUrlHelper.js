function getSponsorUrl(config) {
  if (config.service === 'custom') return config.url;
  if (config.service === 'ko-fi') return `https://ko-fi.com/${config.username}`;
  if (config.service === 'patreon') return `https://patreon.com/${config.username}`;
  if (config.service === 'opencollective') return `https://opencollective.com/${config.username}`;
  if (config.service === 'liberapay') return `https://liberapay.com/${config.username}`;
}

module.exports = {
  getSponsorUrl,
};
