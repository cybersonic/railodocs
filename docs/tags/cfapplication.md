# cfapplication


Defines scoping for a application, enables or disables storing client variables,
			and specifies a client variable storage mechanism.
			By default, client variables are disabled. Also, enables session variables and sets timeouts
			for session and application variables. Session and application variables are stored in memory.

---
## Body
prohibited

## Example
```
<cfapplication
 [action="create|update"]
 [applicationtimeout="timespan"]
 [bufferoutput="boolean"]
 [cachefunction="string"]
 [cacheinclude="string"]
 [cacheobject="string"]
 [cachequery="string"]
 [cacheresource="string"]
 [cachetemplate="string"]
 [clientcluster="boolean"]
 [clientmanagement="boolean"]
 [clientstorage="string"]
 [clienttimeout="timespan"]
 [componentpaths="any"]
 [compression="boolean"]
 [customtagpaths="any"]
 [datasource="object"]
 [datasources="struct"]
 [defaultdatasource="object"]
 [invokeimplicitaccessor="boolean"]
 [locale="String"]
 [localmode="string"]
 [loginstorage="cookie|session"]
 [mappings="struct"]
 [name="string"]
 [onmissingtemplate="object"]
 [ormenabled="boolean"]
 [ormsettings="struct"]
 [requesttimeout="timespan"]
 [resourcecharset="String"]
 [s3="struct"]
 [scopecascading="String"]
 [scriptprotect="string"]
 [securejson="boolean"]
 [securejsonprefix="string"]
 [sessioncluster="boolean"]
 [sessionmanagement="boolean"]
 [sessionstorage="string"]
 [sessiontimeout="timespan"]
 [sessiontype="cfml|j2ee"]
 [setclientcookies="boolean"]
 [setdomaincookies="boolean"]
 [suppressremotecomponentcontent="boolean"]
 [tag="struct"]
 [timezone="String"]
 [triggerdatamember="boolean"]
 [typechecking="boolean"]
 [webcharset="String"]
 [wstype="string"]
>
```
## Attributes
