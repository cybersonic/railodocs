# cfwddx


Serializes and de-serializes CFML data structures to the XML-based WDDX format.
  Generates JavaScript statements to instantiate JavaScript objects equivalent to the contents of a
  WDDX packet or some CFML data structures.

---
## Body
prohibited

## Example
```
<cfwddx
 action="cfml2js|cfml2wddx|wddx2cfml|wddx2js"
 input="any"
 [output="string"]
 [toplevelvariable="string"]
 [usetimezoneinfo="boolean"]
 [validate="boolean"]
 [xmlconform="boolean"]
>
```
## Attributes
