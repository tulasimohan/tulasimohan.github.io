<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">

<xsl:output method="html" encoding="UTF-8" indent="yes"/>

<xsl:template match="/">
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Sitemap — DAA</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      max-width: 800px; margin: 2rem auto; padding: 0 1rem;
      color: #333; background: #fff;
    }
    h1 { color: #d71920; border-bottom: 2px solid #d71920; padding-bottom: 0.5rem; }
    ul { list-style: none; padding: 0; }
    li { padding: 0.4rem 0; border-bottom: 1px solid #eee; }
    a { color: #2b2b88; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .meta { color: #888; font-size: 0.85rem; margin-left: 0.5rem; }
    .section { margin-top: 1.5rem; }
    .section-title {
      font-weight: 600; color: #d71920; font-size: 1.1rem; margin-bottom: 0.5rem;
    }
  </style>
</head>
<body>
  <h1>Sitemap</h1>
  <p>Pages on this site:</p>
  <ul>
    <xsl:apply-templates select="s:urlset/s:url">
      <xsl:sort select="s:loc"/>
    </xsl:apply-templates>
  </ul>
</body>
</html>
</xsl:template>

<xsl:template match="s:url">
  <li>
    <a href="{s:loc}"><xsl:value-of select="s:loc"/></a>
    <span class="meta">
      <xsl:value-of select="substring(s:lastmod, 1, 10)"/>
    </span>
  </li>
</xsl:template>

</xsl:stylesheet>
