---
  title: "The Decline of RAID"
  date: "2014-06-01"
  Description: "how dangerous RAID has become due to multi-terabyte disks."
---
This [article](https://www.evernote.com/shard/s28/sh/5aa203bb-a7fa-4632-86f8-d37d0384e3a4/f45bf56961efa6eedca31b012e649941) caught my eye today.

RAID5 is pretty much unusable on large modern drives. The repair time
and chance of losing the entire array to another unrecoverable error
during a rebuild are just becoming untenable.

RAID10, as suggested in the comments, is even worse because it doesn't
even support parity so you can't even scrub the array for errors.

The logical choice is a file system that has end to end checksums. For
me that's ZFS on Linux.

Ceph, and distributed filesystem's like it, are our future. I love the
idea of plugging a harddrive into my network and having it automagically
add itself to my storage cluster. Cheap processors and high speed buses
like thunderbolt make this possible.﻿
