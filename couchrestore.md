# couchrestore

courerestore is a utility designed to be used in conjunction with the couchdump utility.  couchdump creates backups that can be restored utilizing the couchrestore comand.

### Example Usages:

<b>Usage Example:</b>
```
couchrestore --host:http://localhost --port:5984 --db:dbname --user:username --password:password --input:filepath --drop -v
```