<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <xsl:result-document href="website/index.html">
            <html>
                <head>
                    <title>Arqueossítios</title>
                    <meta charset="UTF-8"/>
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/> <!-- Para associar uma stylesheet, no caso a do w3.css -->
                </head>
                <body>
                    <h1>Arqueossítios</h1>
                    <h3>Índice</h3>    
                    <ol>
                        <xsl:apply-templates mode="indice"/>
                    </ol>
                </body>
            </html>
        </xsl:result-document>
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="ARQELEM" mode="indice">
        <li>
            <a name="{generate-id()}"></a>
            <a href="arqelem-{generate-id()}.html">Arqueossítio em <xsl:value-of select="CONCEL"/></a>
        </li>
    </xsl:template>
    
    <xsl:template match="ARQELEM">
        <xsl:result-document href="website/arqelem-{generate-id()}.html"> <!-- generate-id() gera um id para os nodos da ada; ao atravessar a árvore, gera sempre o mesmo id para o mesmo nodo -->
            <html>
                <head>
                    <title>Arquivo Sonoro EVO: página de música</title>
                    <meta charset="UTF-8"/>
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/> <!-- Para associar uma stylesheet, no caso a do w3.css -->
                </head>
                <body>
                    <table class="w3-table">
                        <tr>
                            <th>Tipo</th><td><xsl:value-of select="@ASSUNTO"/></td>
                        </tr>
                        <tr>
                            <th>Descrição</th><td><xsl:value-of select="DESCRI"/></td>
                        </tr>
                        <tr>
                            <th>Era histórica</th><td><xsl:value-of select="CRONO"/></td>
                        </tr>
                        <tr>
                            <th>Local</th><td><xsl:value-of select="IDENTI"/></td>
                        </tr>
                        <tr>
                            <th>Lugar</th><td><xsl:value-of select="LUGAR"/></td>
                        </tr>
                        <tr>
                            <th>Freguesia</th><td><xsl:value-of select="FREGUE"/></td>
                        </tr>
                        <tr>
                            <th>Concelho</th><td><xsl:value-of select="CONCEL"/></td>
                        </tr>
                        <tr>
                            <th>Latitude</th><td><xsl:value-of select="LATITU"/></td>
                        </tr>
                        <tr>
                            <th>Longitude</th><td><xsl:value-of select="LONGIT"/></td>
                        </tr>
                        <tr>
                            <th>Altitude</th><td><xsl:value-of select="ALTITU"/></td>
                        </tr>
                        <tr>
                            <th>Acesso</th><td><xsl:value-of select="ACESSO"/></td>
                        </tr>
                        <tr>
                            <th>Enquadramento</th><td><xsl:value-of select="QUADRO"/></td>
                        </tr>
                        <tr>
                            <th>Trabalhos arqueológicos</th><td><xsl:value-of select="TRAARQ"/></td>
                        </tr>
                        <tr>
                            <th>Descrição arqueológica</th><td><xsl:value-of select="DESARQ"/></td>
                        </tr>
                        <tr>
                            <th>Interpretação</th><td><xsl:value-of select="INTERP"/></td>
                        </tr>
                        <tr>
                            <th>Interesses</th><td><xsl:value-of select="INTERE"/></td>
                        </tr>
                        <tr>
                            <th>Localização das amostras</th><td><xsl:value-of select="DEPOSI"/></td>
                        </tr>
                        <tr>
                            <th>Bibliografia</th><td><xsl:value-of select="BIBLIO"/></td>
                        </tr>
                        <tr>
                            <th>Autor</th><td><xsl:value-of select="AUTOR"/></td>
                        </tr>
                        <tr>
                            <th>Data</th><td><xsl:value-of select="DATA"/></td>
                        </tr>
                        <xsl:apply-templates select="IMAGEM"/>
                    </table>
                    <hr/>
                    <address>
                        <a href="index.html#{generate-id()}">Voltar à página principal</a>
                    </address>
                </body>
            </html>
        </xsl:result-document>
    </xsl:template>
    <xsl:template match="IMAGEM">
        <tr>
            <th>Imagem</th>
            <td>
                <img src="{@NOME}"/>
            </td>
        </tr>
    </xsl:template>
</xsl:stylesheet>