# cftransaction


Groups multiple queries into a single unit. The cftransaction
  tag provides commit and rollback processing.

---
## Body
required

## Example
```
<cftransaction
 [action="begin|commit|rollback|setsavepoint"]
 [isolation="string"]
> 
 </cftransaction>
```
## Attributes
