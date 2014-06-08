---
  title: "There is no Docker"
  date: "2014-05-28"
  Description: "where I ponder what to do with Docker."
---
I spent a couple of hours playing with Docker today. I keep hearing good
things about it, but not having direct experience of using it is keeping
me from understanding it's strengths and weaknesses. I'm thankful my
current project has exposed me to Vagrant, as I now have a much better
idea of what it is good for and how it can make me more productive.

Docker is a lot less involved than Xen or KVM, just requiring the setting
up of a single daemon and a basic Linux kernel running a relatively
recent kernel with CGroups enabled.

So far, I'm still in that confused phase of technology exploration. I
didn't understand at first why it wouldn't get an IP address from my
DHCP server, and why all it's addresses were behind a bridge in RFC1918
land. Once I discovered -p port:port mappings, things because a tad
more productive.

I'm still not sure how to best use it, but I'm beginning to understand
what makes it useful. It's very fast, since you are basically just
starting processes. It runs a single application at a time, not an initd,
though I think it can do that with some coaxing.

It has weird networking behavior, like discovering it's own IP addresses
on the bridge it's on. I can totally see how it would be useful for
Continuous Integration, one of the places it seems to be used extensively.

More later, once I've had a think about how to use it.
