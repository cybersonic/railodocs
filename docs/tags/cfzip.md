# cfzip


Manipulates ZIP and Java Archive (JAR) files.
		In addition to the basic zip and unzip functions, use the cfzip tag to delete entries from an archive, filter files,
		read files in binary format, list the contents of an archive, and specify an entry path used in an executable JAR file.

---
## Body
free

## Example
```
<cfzip
 [action="delete|list|read|readbinary|unzip|zip"]
 [charset="string"]
 [destination="string"]
 [entrypath="string"]
 [file="string"]
 [filter="any"]
 [filterdelimiters="string"]
 [name="string"]
 [overwrite="boolean"]
 [prefix="string"]
 [recurse="boolean"]
 [showdirectory="boolean"]
 [source="string"]
 [storepath="boolean"]
 [variable="string"]
> 
 [</cfzip>]
```
## Attributes
