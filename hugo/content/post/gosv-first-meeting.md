---
  title: "GoSV Concurrency and Modern DevOps Meetup"
  date: "2014-06-04"
  Description: "a great meetup experience and learning about CoreOS."
---
Attended GoSV hosted by Matt Nunogawa @ Collective Health in San Mateo on
Go Concurrency with a special guest appearance by Brandon Philips, CTO of
CoreOS. Learned a lot of valuable nuggets of info. Was a great meet up. Go
concurrency is a lot less mysterious and CoreOS is pretty damned cool.

CoreOS is basically initd/systemd for the cloud. Start a system service
and watch it automatically get to an available member of the cluster. Any
process you can start locally, can be started remotely if you share
the same image. If you want to start a tech stack, start a docker
container and let it take care of initializing the stack and starting
your application. Very cool technology, all built using Go. Lots of
interesting stuff to think about.

You can find the excellent tutorial by Matt [here](http://gotutorial.net/golang_lessons.html).
