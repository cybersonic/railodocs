# cfpdf


Manipulates existing PDF documents. The following list describes some of the tasks you can perform with the cfpdf tag:
- Merge several PDF documents into one PDF document.
- Delete pages from a PDF document.
- Merge pages from one or more PDF documents and generate a new PDF document.
- Linearize PDF documents for faster web display.
- Remove interactivity from forms created in Acrobat(c) to generate flat PDF documents.
- Encrypt and add password protection to PDF documents.
- Generate thumbnail images from PDF documents or pages.
- Add or remove watermarks from PDF documents or pages.
- Retrieve information associated with a PDF document, such as the software used to generate the file or the author, and set information for a PDF document, such as the title, author and keywords.
- Create PDF portfolios
- Add and remove header/footer from PDF documents
- Optimize PDF documents

---
## Body
free

## Example
```
<cfpdf
 [action="addWatermark|deletePages|getInfo|merge|protect|read|removeWatermark|setInfo|thumbnail|write"]
 [ascending="boolean"]
 [copyfrom="any"]
 [ddxfile="string"]
 [destination="string"]
 [directory="string"]
 [encrypt="string"]
 [filter="string"]
 [flatten="boolean"]
 [foreground="boolean"]
 [format="string"]
 [image="any"]
 [imageprefix="string"]
 [info="struct"]
 [inputfiles="struct"]
 [isbase64="boolean"]
 [keepbookmark="boolean"]
 [name="string"]
 [newownerpassword="string"]
 [newuserpassword="string"]
 [opacity="number"]
 [order="string"]
 [outputfiles="struct"]
 [overwrite="boolean"]
 [pages="string"]
 [password="string"]
 [permissions="string"]
 [position="string"]
 [resolution="string"]
 [rotation="number"]
 [saveoption="string"]
 [scale="number"]
 [showonprint="boolean"]
 [source="any"]
 [stoponerror="boolean"]
 [transparent="boolean"]
 [type="string"]
 [version="number"]
> 
 [</cfpdf>]
```
## Attributes
