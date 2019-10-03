<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        
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
                        <xsl:apply-templates mode="metadata"/>
                    </table>
                </metadata>
                <hr/>
                <workteam>
                    <h3 class="w3-blue">Autor(es)</h3>
                    <table class="w3-table">
                        <tr>
                            <th>Nome</th>
                            <th>ID</th>
                            <th>E-mail</th>
                            <th>Github</th>
                        </tr>
                        <xsl:apply-templates mode="workteam"/>
                    </table>
                </workteam>
                <hr/>
                <abstract>
                    <h3 class="w3-blue">Resumo</h3>
                    <xsl:apply-templates mode="abstract"/>
                </abstract>
                <hr/>
                <deliverables>
                    <h3 class="w3-blue">Documentos</h3>
                    <ul class="w3-ul">
                        <xsl:apply-templates mode="deliverables"/>
                    </ul>
                </deliverables>
                <hr/>
            </body>
        </html>
    </xsl:template>
    
    <xsl:template match="metadata" mode="metadata">
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
            <th>Supervisor:</th><td><xsl:value-of select="supervisor"/></td>
        </tr>
    </xsl:template>
    
    <xsl:template match="worker" mode="workteam">
        <tr>
            <td><xsl:value-of select="name"/></td>
            <td><xsl:value-of select="identifier"/></td>
            <td><xsl:value-of select="email"/></td>
            <td><xsl:value-of select="git"/></td>
        </tr>
    </xsl:template>
    
    <xsl:template match="abstract" mode="abstract">
        <xsl:apply-templates mode="p"/>
    </xsl:template>
    
    <xsl:template match="deliverable" mode="deliverables">
        <li class="w3-hover-blue">
            <a href="{@path}"><xsl:value-of select="."/></a>
        </li>
    </xsl:template>
    
    <xsl:template match="p" mode="p">
        <p><xsl:value-of select="."/></p>
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="i">
        <i><xsl:value-of select="."/></i>
    </xsl:template>
    
    <xsl:template match="b">
        <b><xsl:value-of select="."/></b>
    </xsl:template>
    
    <xsl:template match="u">
        <u><xsl:value-of select="."/></u>
    </xsl:template>
    
    <xsl:template match="xref">
        <a href="{@url}"><xsl:value-of select="."/></a>
    </xsl:template>

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
</xsl:stylesheet>