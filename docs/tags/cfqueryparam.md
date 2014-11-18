# cfqueryparam


Checks the data type of a query parameter. The cfqueryparam tag is nested within a cfquery tag.
  It is embedded within the query SQL statement. If you specify its optional parameters, cfqueryparam
  also performs data validation.

---
## Body
prohibited

## Example
```
<cfqueryparam
 [cfsqltype="string"]
 [list="boolean"]
 [maxlength="number"]
 [null="boolean"]
 [scale="number"]
 [separator="string"]
 [sqltype="string"]
 [value="any"]
>
```
## Attributes
