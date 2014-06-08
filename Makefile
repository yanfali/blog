default:
	rm -fr hugo/public/*
	grunt build
	hugo
	rsync -av hugo/public/* $(HUGO_DEST)

