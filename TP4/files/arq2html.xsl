<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">

    <xsl:output method="html" encoding="UTF-8" indent="yes"/>

    <xsl:template match="ARQELEM">
        <html>
            <head>
                <title>
                    Arqueossítios portugueses:
                    <xsl:value-of select="IDENTI" />
                </title>
                <meta charset="UTF-8" />
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
            </head>
            <body>
                <h1 style="text-align: center">
                    <xsl:value-of select="IDENTI" />
                </h1>
                <h2 style="text-align: center">
                    Arqueossítio do concelho de
                    <xsl:value-of select="CONCEL" />
                </h2>
                <table class="w3-table">
                    <tr>
                        <th>Tipo</th>
                        <td>
                            <xsl:value-of select="@ASSUNTO" />
                        </td>
                    </tr>
                    <tr>
                        <th>Local</th>
                        <td>
                            <xsl:value-of select="IDENTI" />
                        </td>
                    </tr>
                    <tr>
                        <th>Descrição</th>
                        <td>
                            <xsl:value-of select="DESCRI" />
                        </td>
                    </tr>
                    <tr>
                        <th>Lugar</th>
                        <td>
                            <xsl:value-of select="LUGAR" />
                        </td>
                    </tr>
                    <tr>
                        <th>Freguesia</th>
                        <td>
                            <xsl:value-of select="FREGUE" />
                        </td>
                    </tr>
                    <tr>
                        <th>Concelho</th>
                        <td>
                            <xsl:value-of select="CONCEL" />
                        </td>
                    </tr>
                    <tr>
                        <th>Latitude</th>
                        <td>
                            <xsl:value-of select="LATITU" />
                        </td>
                    </tr>
                    <tr>
                        <th>Longitude</th>
                        <td>
                            <xsl:value-of select="LONGIT" />
                        </td>
                    </tr>
                    <tr>
                        <th>Altitude</th>
                        <td>
                            <xsl:value-of select="ALTITU" />
                        </td>
                    </tr>
                    <tr>
                        <th>Acesso</th>
                        <td>
                            <xsl:value-of select="ACESSO" />
                        </td>
                    </tr>
                    <tr>
                        <th>Autor</th>
                        <td>
                            <xsl:value-of select="AUTOR" />
                        </td>
                    </tr>
                    <tr>
                        <th>Data</th>
                        <td>
                            <xsl:value-of select="DATA" />
                        </td>
                    </tr>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>