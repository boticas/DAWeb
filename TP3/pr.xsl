<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="pr">
        <html>
            <head>
                <title>Project Record - TP3 - PG41081</title>
                <meta charset="UTF-8"/>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
            </head>
            <body class="w3-panel w3-padding-large">
                <h1 class="w3-container w3-center">Project Record - TP3 - PG41081</h1>   
                <hr/>
                <metadata>
                    <table>
                        <xsl:apply-templates select="metadata"/>
                    </table>
                </metadata>
                <hr/>
                <workteam>
                    <h3 class="w3-blue">Autor(es)</h3>
                    <table class="w3-table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>ID</th>
                                <th>E-mail</th>
                                <th>Github</th>
                            </tr>
                        </thead>
                        <tbody>
                            <xsl:apply-templates select="workteam/worker"/>
                        </tbody>
                    </table>
                </workteam>
                <hr/>
                <abstract>
                    <h3 class="w3-blue">Resumo</h3>
                    <xsl:apply-templates select="abstract"/>
                </abstract>
                <hr/>
                <deliverables>
                    <h3 class="w3-blue">Documentos</h3>
                    <ul class="w3-ul">
                        <xsl:apply-templates select="deliverables/deliverable"/>
                    </ul>
                </deliverables>
                <hr/>
            </body>
        </html>
    </xsl:template>
    
    <xsl:template match="metadata">
        <tr>
            <th>Chave:</th><td><xsl:value-of select="keyname"/></td>
            <th>Data de início:</th><td><xsl:value-of select="bdate"/></td>
        </tr>
        <tr>
            <th>Título:</th><td><xsl:value-of select="title"/></td>
            <th>Data de fim:</th><td><xsl:value-of select="edate"/></td>
        </tr>
        <tr>
            <th>Subtítulo:</th><td><xsl:value-of select="subtitle"/></td>
            <th>Supervisor:</th>
            <td><xsl:choose>
                    <xsl:when test="supervisor/@homepage">
                        <a href="{supervisor/@homepage}"><xsl:value-of select="supervisor"/></a>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="supervisor"/>
                    </xsl:otherwise>
                </xsl:choose>
            </td>
        </tr>
    </xsl:template>
    
    <xsl:template match="worker">
        <tr>
            <td><xsl:value-of select="name"/></td>
            <td><xsl:value-of select="identifier"/></td>
            <td><xsl:value-of select="email"/></td>
            <td><xsl:value-of select="git"/></td>
        </tr>
    </xsl:template>
    
    <xsl:template match="abstract">
        <xsl:apply-templates select="p"/>
    </xsl:template>
    
    <xsl:template match="deliverable">
        <li class="w3-hover-blue">
            <a href="{@path}"><xsl:value-of select="."/></a>
        </li>
    </xsl:template>
    
    <xsl:template match="p">
        <p><xsl:apply-templates select="text()|p|b|i|u|xref"/></p>
    </xsl:template>

    <xsl:template match="i">
        <i><xsl:apply-templates select="text()|p|b|i|u|xref"/></i>
    </xsl:template>
    
    <xsl:template match="b">
        <b><xsl:apply-templates select="text()|p|b|i|u|xref"/></b>
    </xsl:template>
    
    <xsl:template match="u">
        <u><xsl:apply-templates select="text()|p|b|i|u|xref"/></u>
    </xsl:template>
    
    <xsl:template match="xref">
        <a href="{@url}"><xsl:apply-templates select="text()|p|b|i|u|xref"/></a>
    </xsl:template>

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
</xsl:stylesheet>