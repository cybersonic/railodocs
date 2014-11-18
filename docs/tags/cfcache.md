# cfcache


Speeds up page rendering when dynamic content does not have to be retrieved each time a user accesses
  the page. To accomplish this, cfcache creates temporary files that contain the static HTML returned from
  a page. You can use cfcache for simple URLs and URLs that contain URL parameters.

---
## Body
free

## Example
```
<cfcache
 [action="cache|clientcache|content|flush|get|optimal|put|servercache"]
 [cachedirectory="string"]
 [cachename="string"]
 [directory="string"]
 [expireurl="string"]
 [id="any"]
 [idletime="timespan"]
 [key="string"]
 [metadata="string"]
 [name="string"]
 [password="string"]
 [port="number"]
 [protocol="string"]
 [throwonerror="boolean"]
 [timeout="any"]
 [timespan="timespan"]
 [username="string"]
 [value="any"]
> 
 [</cfcache>]
```
## Attributes
