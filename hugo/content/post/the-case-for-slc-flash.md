---
  title: "The Case for SLC Flash"
  date: "2014-06-06"
  time: "21:49:00 -0700"
  Description: "my need to upgrade everything."
---
I was somewhat amused to discover that the EdgeMax Router PoE uses a USB
flash drive to store it's OS and config files. After my I picked my jaw
up off the floor, I realized it made perfect sense for the price point
they have met. eMMC is a lot more expensive and would eat into their BoM.

So rather than rage against the inherently unreliable and poor quality
of standard TLC based USB flash drives, as commonly sold for 50c a GB,
I started looking into upgrades.

Chris Wadge pointed me at [Mach USB flash drives](https://www.evernote.com/shard/s28/sh/6e6c384f-9e74-48b9-9fd3-917734576b4f/8c13d9fa20ea3fca68837e48f6b15349), which are based on
the older, more reliable and expensive SLC flash. SLC is usually rated
at 1 million writes per cell. Cheap MLC and TLC flash is usually rated
at 3000 or fewer writes per cell, and is doubly handicapped by using
multi-bit per cell schemes, which can cause even faster decline and slow
down writes overall.

I plan on voiding the warranty on the EdgeRouter I have and pulling
the drive, DDing the contents to the new SLC flash disk and putting it
back into the router. Why bother? Well there have been some unsettling
reports of EdgeRouter Lite's failing in the field due to bad USB flash
drives. I would rather avoid that entire scenario and preemptively stamp
out the problem.

An 8GB SLC drive is currently 20USD from newegg. Seems like a no brainer
to me.
