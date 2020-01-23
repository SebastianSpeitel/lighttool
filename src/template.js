import { makeHtmlAttributes } from "@rollup/plugin-html";
import nano from "nanolit";

export default async function template({
  attributes,
  files,
  publicPath,
  title
}) {
  const scripts = (files.js || []).map(({ fileName }) => {
    const attrs = makeHtmlAttributes(attributes.script);
    return `<script src="${publicPath}${fileName}"${attrs}></script>`;
  });

  const links = (files.css || []).map(({ fileName }) => {
    const attrs = makeHtmlAttributes(attributes.link);
    return `<link href="${publicPath}${fileName}" rel="stylesheet"${attrs}>`;
  });

  return nano`<!doctype html>
<html lang="de">
<head>
    <meta charset="utf-8">
    <title>${title}</title>
    <base href="${process.env.BASEURL || "/"}" />
    <link rel="stylesheet" type="text/css" href="vuetify.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    ${links}
    ${scripts}
</head>
<body>
  <main id="app"></main>
</body>
</html>`;
}
