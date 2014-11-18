# cftable


Builds a table in a CFML page. Use the cfcol tag to define table column and row
  characteristics. The cftable tag renders data either as preformatted text, or, with the HTMLTable
  attribute, as an HTML table. Use cftable to create tables if you don't want to write HTML table tag
  code, or if your data can be well presented as preformatted text.

---
## Body
required

## Example
```
<cftable
 [border="boolean"]
 [colheaders="boolean"]
 [colspacing="number"]
 [headerlines="number"]
 [htmltable="boolean"]
 [maxrows="number"]
 query="string"
 [startrow="number"]
> 
 </cftable>
```
## Attributes
