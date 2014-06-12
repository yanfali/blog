default:
	rm -fr hugo/public/*
	grunt build
	hugo
	rsync -av --delete hugo/public/* $(HUGO_DEST)

