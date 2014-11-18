# cfcomponent


Creates and defines a component object; encloses functionality that you build in CFML and enclose within cffunction tags. This tag contains one or more cffunction tags that define methods. Code within the body of this tag, other than cffunction tags, is executed when the component is instantiated.

---
## Body
required

## Example
```
<cfcomponent
 [alias="string"]
 [bindingname="string"]
 [displayname="string"]
 [extends="string"]
 [hint="string"]
 [mappedsuperclass="boolean"]
 [namespace="string"]
 [output="boolean"]
 [persistent="boolean"]
 [porttypename="string"]
 [serviceaddress="string"]
 [serviceportname="string"]
 [style="string"]
 [synchronized="boolean"]
 [wsdlfile="string"]
 ...
> 
 </cfcomponent>
```
## Attributes
