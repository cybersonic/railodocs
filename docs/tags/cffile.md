# cffile


Handles all interactions with files. The attributes you use with cffile depend on the value of the action attribute.
 For example, if the action = "write", use the attributes associated with writing a text file.

---
## Body
free

## Example
```
<cffile
 [accept="string"]
 action="append|copy|delete|info|move|read|readbinary|rename|touch|upload|uploadall|write"
 [addnewline="boolean"]
 [attributes="string"]
 [charset="string"]
 [createpath="boolean"]
 [destination="string"]
 [file="string"]
 [filefield="string"]
 [fixnewline="boolean"]
 [mode="string"]
 [nameconflict="string"]
 [output="any"]
 [result="string"]
 [serverpassword="string"]
 [source="string"]
 [storeacl="object"]
 [strict="boolean"]
 [variable="string"]
> 
 [</cffile>]
```
## Attributes
