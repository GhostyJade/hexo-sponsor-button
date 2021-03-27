function getSponsorUrl(config) {
  if (config.service === 'ko-fi') return `https://ko-fi.com/${config.username}`;
}

module.exports = {
  getSponsorUrl,
};
