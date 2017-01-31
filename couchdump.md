# couchdump

Makes a backup of a couchdb, and saves as a JS module.  Use couchrestore to restore the database.

### Example Usages:

<b>Usage Example:</b>
```
couchdump --host:http://localhost --port:5984 --db:dbname --user:username --password:password --exclude:doctype:user,doctype:test --output:filepath
```